---
title: 'Bài 35: Trung điểm của đoạn thẳng - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ kiến thức Toán 6 Bài 35 Trung điểm của đoạn thẳng: hai điều kiện cốt lõi, tính chất MA = MB = AB/2, phương pháp chứng minh, 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học
  - Trung điểm
  - Đoạn thẳng
  - Kết nối tri thức
grade: 6
---

# Bài 35. Trung điểm của đoạn thẳng

Nếu như một đoạn thẳng được định nghĩa là một phần đường thẳng bị giới hạn bởi hai đầu mút, thì trong vô số các điểm nằm giữa hai đầu mút ấy, có một điểm mang tính chất cân bằng và đối xứng hoàn hảo nhất — đó chính là **trung điểm** (hay **điểm chính giữa**) của đoạn thẳng.

Trong thực tế cuộc sống và kỹ thuật, trung điểm đóng vai trò vô cùng quan trọng: từ chiếc trục quay đặt ngay chính giữa cầu bập bênh để hai bạn nhỏ có thể chơi đùa thăng bằng, chiếc kim rốn của chiếc compa, khối tâm của các kết cấu dầm cầu, cho đến vạch chia trung tâm trên sân bóng đá hay sân tennis.

Bài học này sẽ giúp các em nắm vững hai điều kiện bắt buộc để một điểm là trung điểm, thành thạo công thức tính độ dài, phân biệt các bẫy hình học thường gặp và chinh phục $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 35: TRUNG ĐIỂM CỦA ĐOẠN THẲNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hai điều kiện cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Điểm $M$ là trung điểm của $AB$ khi và chỉ khi:<br>1) $M$ nằm giữa $A$ và $B$.<br>2) $M$ cách đều $A$ và $B$ ($MA = MB$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hệ thức độ dài</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">$MA = MB = \dfrac{AB}{2}$.<br>Ngược lại: $AB = 2 \cdot MA = 2 \cdot MB$.<br>Mỗi đoạn thẳng có duy nhất một trung điểm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dấu hiệu nhận biết trên tia</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Trên tia $Ox,$ nếu $OA = a$ và $OB = 2a$ (với $a > 0$) thì điểm $A$ chính là trung điểm của đoạn thẳng $OB$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Cách vẽ trung điểm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Cách 1: Dùng thước thẳng đo và lấy vạch chia đôi.<br>Cách 2: Gấp giấy sao cho hai đầu mút trùng khít lên nhau.</p>
    </div>
  </div>
</div>

---

## Khởi động — Trực giác từ những phép chia đôi thực tế (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi tư duy ngắn:

**Câu 1:** Một thanh xà dài $12\text{ cm}.$ Nếu em muốn cưa đôi thanh xà thành hai phần dài bằng nhau, em cần đánh dấu điểm cưa cách mỗi đầu thanh xà bao nhiêu xăng-ti-mét?
- *Trả lời:* Điểm cưa cách mỗi đầu thanh xà một khoảng là $12 : 2 = 6\text{ cm}.$ Điểm đó chính là trung điểm của thanh xà.

**Câu 2:** Một đoạn dây ruy-băng dài $20\text{ cm}.$ Em hãy nêu cách tìm điểm chính giữa sợi dây mà không cần dùng đến thước đo có vạch chia xentimét.
- *Trả lời:* Gấp đôi sợi dây ruy-băng sao cho hai đầu dây trùng khít vào nhau. Miết nhẹ phần nếp gấp; nếp gấp đó chính là vị trí điểm chính giữa của sợi dây.

**Câu 3:** Cho đoạn thẳng $AB = 10\text{ cm}.$ Lấy điểm $M$ nằm giữa $A$ và $B$ sao cho $AM = 4\text{ cm}.$ Tính độ dài $MB.$ Điểm $M$ có phải là điểm chính giữa của $AB$ không? Vì sao?
- *Trả lời:* Vì $M$ nằm giữa $A$ và $B$ nên $AM + MB = AB,$ suy ra $MB = 10 - 4 = 6\text{ cm}.$ Vì $AM \ne MB$ ($4\text{ cm} \ne 6\text{ cm}$) nên điểm $M$ **không phải** là điểm chính giữa của đoạn thẳng $AB.$

**Câu 4:** Điểm nằm giữa hai điểm $A$ và $B$ có nhất thiết phải là trung điểm của đoạn thẳng $AB$ không?
- *Trả lời:* Không. Một đoạn thẳng có vô số điểm nằm giữa hai đầu mút, nhưng chỉ có **duy nhất một điểm** vừa nằm giữa vừa cách đều hai đầu mút — đó là trung điểm.

**Câu 5:** Nếu một điểm $K$ cách đều hai điểm $A$ và $B$ ($KA = KB$) thì điểm $K$ đã chắc chắn là trung điểm của $AB$ chưa?
- *Trả lời:* Chưa chắc chắn. Nếu ba điểm $K, A, B$ không thẳng hàng (ví dụ tạo thành tam giác cân có đỉnh là $K$) thì $K$ cách đều $A$ và $B$ nhưng $K$ không thuộc đoạn thẳng $AB,$ do đó $K$ không phải là trung điểm.

---

## I. Lý thuyết trọng tâm

### 1. Định nghĩa trung điểm của đoạn thẳng

> [!NOTE]
> **Định nghĩa:**
> **Trung điểm $M$ của đoạn thẳng $AB$** là điểm nằm giữa hai điểm $A, B$ và cách đều hai điểm đó ($MA = MB$).
>
> Trung điểm của đoạn thẳng còn được gọi là **điểm chính giữa** của đoạn thẳng.

Để điểm $M$ là trung điểm của đoạn thẳng $AB,$ cần thỏa mãn đồng thời cả **hai điều kiện**:

- **Điều kiện 1:** Điểm $M$ nằm giữa hai điểm $A$ và $B$ (tức $AM + MB = AB$).
- **Điều kiện 2:** Điểm $M$ cách đều hai điểm $A$ và $B$ (tức $MA = MB$).

Hai điều kiện này được gộp gọn thành một hệ thức tương đương duy nhất:

$$MA = MB = \dfrac{AB}{2}.$$

```text
       A                    M                    B
       ●--------------------●--------------------●
       |←────── d ─────────→|←────── d ─────────→|
       |←────────────────── 2d ─────────────────→|
```

### 2. Tính chất độ dài của trung điểm

Nếu $M$ là trung điểm của đoạn thẳng $AB$ thì:

$$MA = MB = \dfrac{AB}{2}.$$

Ngược lại:

$$AB = 2 \cdot MA = 2 \cdot MB.$$

> [!IMPORTANT]
> **Định lý tính duy nhất:**
> Mỗi đoạn thẳng chỉ có **duy nhất một** trung điểm.

### 3. Phương pháp nhận biết và chứng minh một điểm là trung điểm

Để chứng minh điểm $M$ là trung điểm của đoạn thẳng $AB,$ học sinh có thể sử dụng một trong các cách sau:

- **Cách 1 (Dùng định nghĩa):**
  1. Chứng minh điểm $M$ nằm giữa hai điểm $A$ và $B$ (thường thông qua hệ thức cộng đoạn thẳng $AM + MB = AB,$ hoặc nhận xét về hai điểm trên cùng một tia, hoặc hai tia đối nhau).
  2. Chứng minh $MA = MB.$
- **Cách 2 (Hệ thức gộp):**
  Chứng minh $M$ thuộc đoạn thẳng $AB$ và $MA = \dfrac{AB}{2}$ (hoặc $MB = \dfrac{AB}{2}$).
- **Cách 3 (Nhận biết trên tia):**
  Trên tia $Ox,$ nếu lấy hai điểm $A$ và $B$ sao cho $OA = a$ và $OB = 2a$ (với $a > 0$) thì:
  - Do $OA < OB$ nên điểm $A$ nằm giữa $O$ và $B.$
  - Suy ra $AB = OB - OA = 2a - a = a = OA.$
  - Kết luận: Điểm $A$ là trung điểm của đoạn thẳng $OB.$

### 4. Cách vẽ trung điểm của đoạn thẳng

Muốn vẽ trung điểm $M$ của đoạn thẳng $AB$ có độ dài cho trước:

- **Bước 1:** Tính độ dài một nửa đoạn thẳng: $AM = \dfrac{AB}{2}.$
- **Bước 2:** Đặt thước thẳng sao cho vạch $0$ của thước trùng với điểm $A,$ mép thước đi qua điểm $B.$
- **Bước 3:** Đánh dấu điểm $M$ tại vạch chỉ độ dài bằng $AM.$ Điểm vừa đánh dấu chính là trung điểm của đoạn thẳng $AB.$

> [!TIP]
> **Thực hành gấp giấy:**
> Vẽ đoạn thẳng $AB$ trên một tờ giấy. Gấp tờ giấy sao cho điểm đầu $A$ trùng khít với điểm cuối $B.$ Nếp gấp cắt đoạn thẳng $AB$ tại đâu thì đó chính là vị trí trung điểm $M$ của đoạn thẳng $AB.$

---

> [!WARNING]
> ### Những sai lầm kinh điển cần tránh:
> 1. **Bẫy cách đều nhưng không thẳng hàng:** Nhiều học sinh thấy đề bài cho $KA = KB$ liền vội vàng kết luận ngay $K$ là trung điểm của $AB.$ Điều này hoàn toàn sai lầm vì điểm $K$ có thể nằm ngoài đường thẳng $AB$ (tạo thành tam giác cân). Phải luôn kiểm tra điều kiện điểm đó **nằm giữa** (hoặc thuộc đoạn thẳng).
> 2. **Nhầm lẫn giữa "nằm giữa" và "trung điểm":** Điểm nằm giữa chỉ cần thỏa mãn $AM + MB = AB,$ còn trung điểm đòi hỏi thêm $AM = MB.$
> 3. **Nhầm lẫn công thức:** $MA = MB = \dfrac{AB}{2}$ chứ không phải $MA = MB = AB.$

---

## II. Các dạng bài tập điển hình

### Dạng 1: Tính độ dài đoạn thẳng nhờ tính chất trung điểm

#### Phương pháp giải:
- Biết độ dài đoạn thẳng lớn $AB \implies$ mỗi nửa đoạn thẳng bằng:
  $$MA = MB = \dfrac{AB}{2}.$$
- Biết độ dài một nửa đoạn thẳng $MA$ (hoặc $MB$) $\implies$ cả đoạn thẳng bằng:
  $$AB = 2 \cdot MA = 2 \cdot MB.$$

---

#### Ví dụ 1:
Cho đoạn thẳng $PQ = 18\text{ cm}.$ Gọi $M$ là trung điểm của $PQ.$ Tính độ dài các đoạn thẳng $MP$ và $MQ.$

**Lời giải:**
Vì $M$ là trung điểm của đoạn thẳng $PQ$ nên:
$$MP = MQ = \dfrac{PQ}{2} = \dfrac{18}{2} = 9\text{ cm}.$$
Vậy $MP = 9\text{ cm};\; MQ = 9\text{ cm}.$

---

#### Ví dụ 2:
Điểm $I$ là trung điểm của đoạn thẳng $EF.$ Biết $IE = 6{,}5\text{ cm}.$ Tính độ dài đoạn thẳng $EF.$

**Lời giải:**
Vì $I$ là trung điểm của đoạn thẳng $EF$ nên:
$$EF = 2 \cdot IE = 2 \cdot 6{,}5 = 13\text{ cm}.$$
Vậy độ dài đoạn thẳng $EF$ là $13\text{ cm}.$

---

#### Bài tập tự luyện Dạng 1:
- **Bài 1.1:** Cho đoạn thẳng $AB = 15\text{ cm}.$ Gọi $O$ là trung điểm của $AB.$ Tính $OA$ và $OB$ dưới dạng số thập phân.
  *(Đáp số: $OA = OB = 7{,}5\text{ cm}.$)*
- **Bài 1.2:** Điểm $C$ là trung điểm của đoạn thẳng $MN.$ Biết $MC = 8{,}4\text{ dm}.$ Tính độ dài đoạn thẳng $MN.$
  *(Đáp số: $MN = 16{,}8\text{ dm}.$)*

---

### Dạng 2: Chứng minh một điểm là trung điểm của đoạn thẳng

#### Phương pháp giải:
Thực hiện tuần tự $2$ bước:
- **Bước 1:** Chứng minh điểm đó **nằm giữa** hai đầu mút (bằng hệ thức cộng đoạn thẳng hoặc so sánh vị trí trên cùng một tia).
- **Bước 2:** Chứng minh khoảng cách từ điểm đó đến hai đầu mút **bằng nhau** (cách đều).
$\implies$ Kết luận điểm đó là trung điểm.

---

#### Ví dụ 3:
Trên tia $Ox,$ lấy hai điểm $A$ và $B$ sao cho $OA = 4\text{ cm}$ và $OB = 8\text{ cm}.$
a) Điểm $A$ có nằm giữa hai điểm $O$ và $B$ không? Vì sao?
b) Tính độ dài đoạn thẳng $AB.$
c) Điểm $A$ có phải là trung điểm của đoạn thẳng $OB$ không? Vì sao?

**Lời giải:**

```text
       O               A               B            x
       ●───────────────●───────────────●────────────>
       |←──── 4 cm ───→|←──── 4 cm ───→|
       |←──────────── 8 cm ───────────→|
```

a) Trên tia $Ox,$ vì $OA < OB$ ($4\text{ cm} < 8\text{ cm}$) nên điểm $A$ nằm giữa hai điểm $O$ và $B.$
b) Vì điểm $A$ nằm giữa hai điểm $O$ và $B$ nên ta có:
$$OA + AB = OB.$$
Thay số:
$$4 + AB = 8 \implies AB = 8 - 4 = 4\text{ cm}.$$
c) Ta có:
- Điểm $A$ nằm giữa hai điểm $O$ và $B$ (chứng minh ở câu a).
- $OA = AB = 4\text{ cm}$ (điểm $A$ cách đều hai điểm $O$ và $B$).
Do đó, điểm $A$ là trung điểm của đoạn thẳng $OB.$

---

#### Ví dụ 4 (Nhận biết sai lầm):
Cho ba điểm phân biệt $X, Y, Z.$ Biết $XY = 5\text{ cm};\; YZ = 5\text{ cm}$ và $XZ = 8\text{ cm}.$ Hỏi điểm $Y$ có phải là trung điểm của đoạn thẳng $XZ$ không? Vì sao?

**Lời giải:**
Ta kiểm tra điều kiện nằm giữa:
$$XY + YZ = 5 + 5 = 10\text{ cm}.$$
Vì $XY + YZ \ne XZ$ ($10\text{ cm} \ne 8\text{ cm}$) nên điểm $Y$ **không nằm giữa** hai điểm $X$ và $Z.$
(Thực tế ba điểm $X, Y, Z$ tạo thành một tam giác cân tại $Y$).
Mặc dù $YX = YZ = 5\text{ cm}$ (điểm $Y$ cách đều $X$ và $Z$) nhưng vì $Y$ không nằm giữa $X$ và $Z$ nên **điểm $Y$ không phải là trung điểm của đoạn thẳng $XZ$**.

---

#### Bài tập tự luyện Dạng 2:
- **Bài 2.1:** Trên tia $Ay,$ lấy hai điểm $M$ và $N$ sao cho $AM = 7\text{ cm}$ và $AN = 14\text{ cm}.$ Chứng tỏ rằng $M$ là trung điểm của đoạn thẳng $AN.$
- **Bài 2.2:** Cho đoạn thẳng $AB = 12\text{ cm}.$ Điểm $C$ nằm giữa $A$ và $B$ sao cho $AC = 6\text{ cm}.$ Điểm $C$ có là trung điểm của $AB$ không? Vì sao?

---

### Dạng 3: Bài toán nhiều trung điểm trên cùng một đoạn thẳng

#### Phương pháp giải:
- Vẽ hình chính xác theo thứ tự đề bài.
- Sử dụng tính chất trung điểm nhiều lần từ đoạn thẳng lớn đến các đoạn thẳng con.
- Vận dụng linh hoạt hệ thức cộng đoạn thẳng để tính các đoạn thẳng nối giữa các trung điểm.

---

#### Ví dụ 5:
Cho đoạn thẳng $AB = 24\text{ cm}.$ Gọi $M$ là trung điểm của đoạn thẳng $AB.$ Gọi $I$ là trung điểm của đoạn thẳng $AM$ và $K$ là trung điểm của đoạn thẳng $MB.$
a) Tính độ dài các đoạn thẳng $AM$ và $MB.$
b) Tính độ dài các đoạn thẳng $AI, IM, MK, KB.$
c) Tính độ dài đoạn thẳng $IK.$

**Lời giải:**

```text
       A         I         M         K         B
       ●─────────●─────────●─────────●─────────●
       |← 6 cm ─→|← 6 cm ─→|← 6 cm ─→|← 6 cm ─→|
       |←────── 12 cm ────→|←────── 12 cm ────→|
       |←───────────────── 24 cm ─────────────→|
```

a) Vì $M$ là trung điểm của đoạn thẳng $AB$ nên:
$$AM = MB = \dfrac{AB}{2} = \dfrac{24}{2} = 12\text{ cm}.$$
b)
- Vì $I$ là trung điểm của đoạn thẳng $AM$ nên:
$$AI = IM = \dfrac{AM}{2} = \dfrac{12}{2} = 6\text{ cm}.$$
- Vì $K$ là trung điểm của đoạn thẳng $MB$ nên:
$$MK = KB = \dfrac{MB}{2} = \dfrac{12}{2} = 6\text{ cm}.$$
c) Vì $M$ nằm giữa $A$ và $B,$ $I$ thuộc đoạn $AM,$ $K$ thuộc đoạn $MB$ nên điểm $M$ nằm giữa hai điểm $I$ và $K.$
Do đó:
$$IK = IM + MK = 6 + 6 = 12\text{ cm}.$$

> [!NOTE]
> Nhận xét thú vị: $IK = \dfrac{AB}{2} = 12\text{ cm}.$ Khoảng cách giữa hai trung điểm của hai nửa đoạn thẳng đúng bằng một nửa độ dài đoạn thẳng ban đầu!

---

#### Bài tập tự luyện Dạng 3:
- **Bài 3.1:** Cho đoạn thẳng $MN = 32\text{ cm}.$ Gọi $P$ là trung điểm của $MN,$ $Q$ là trung điểm của $MP,$ và $R$ là trung điểm của $MQ.$ Tính độ dài $MR$ và $RN.$
  *(Đáp số: $MR = 4\text{ cm};\; RN = 28\text{ cm}.$)*

---

### Dạng 4: Điểm trên tia đối kết hợp trung điểm

#### Phương pháp giải:
- Nếu điểm $A$ thuộc tia $Ox,$ điểm $B$ thuộc tia đối của tia $Ox$ thì điểm gốc $O$ luôn nằm giữa $A$ và $B.$
- Khi đó, nếu thêm điều kiện $OA = OB$ thì điểm $O$ chính là trung điểm của đoạn thẳng $AB.$

---

#### Ví dụ 6:
Cho điểm $O$ thuộc đường thẳng $xy.$ Trên tia $Ox,$ lấy điểm $A$ sao cho $OA = 5\text{ cm}.$ Trên tia $Oy,$ lấy điểm $B$ sao cho $OB = 5\text{ cm}.$
a) Điểm $O$ có phải là trung điểm của đoạn thẳng $AB$ không? Vì sao?
b) Lấy điểm $C$ trên tia $Ox$ sao cho $AC = 5\text{ cm}$ ($C$ khác $O$). Chứng tỏ điểm $A$ là trung điểm của đoạn thẳng $OC.$

**Lời giải:**
a)
- Vì $Ox$ và $Oy$ là hai tia đối nhau, điểm $A \in Ox$ và $B \in Oy$ nên điểm $O$ nằm giữa hai điểm $A$ và $B.$
- Lại có $OA = OB = 5\text{ cm}.$
Do đó, điểm $O$ là trung điểm của đoạn thẳng $AB.$

b)
- Trên tia $Ox,$ ta có $OA = 5\text{ cm}.$ Điểm $C$ thuộc tia $Ox$ và $C$ khác $O,$ $AC = 5\text{ cm}.$
- Vì $C \in Ox$ và $AC = 5\text{ cm} > 0,$ mặt khác nếu $C$ nằm giữa $O$ và $A$ thì $AC < OA = 5\text{ cm}$ (vô lý), do đó điểm $A$ phải nằm giữa $O$ và $C.$
- Suy ra $OC = OA + AC = 5 + 5 = 10\text{ cm}.$
- Vì điểm $A$ nằm giữa $O$ và $C,$ đồng thời $OA = AC = 5\text{ cm},$ nên điểm $A$ là trung điểm của đoạn thẳng $OC.$

---

### Dạng 5: Bài toán mô hình hóa thực tế

#### Ví dụ 7:
Một cây cầu gỗ bộ hành bắc qua một con mương có tổng chiều dài $AB = 6\text{ m}.$
a) Kỹ sư cần dựng một cột trụ chống chịu lực chính ở vị trí trung điểm $M$ của cây cầu. Cột trụ này cách mỗi đầu cầu bao nhiêu mét?
b) Để lắp thêm hai biển báo an toàn ở hai vị trí $P$ và $Q$ lần lượt là trung điểm của hai đoạn cầu $AM$ và $MB.$ Hỏi khoảng cách giữa hai biển báo $PQ$ bằng bao nhiêu mét?

**Lời giải:**
a) Vì cột trụ đặt tại trung điểm $M$ của đoạn cầu $AB$ nên khoảng cách từ cột trụ tới mỗi đầu cầu là:
$$MA = MB = \dfrac{AB}{2} = \dfrac{6}{2} = 3\text{ m}.$$
b)
- Vì $P$ là trung điểm của $AM$ nên $MP = \dfrac{AM}{2} = \dfrac{3}{2} = 1{,}5\text{ m}.$
- Vì $Q$ là trung điểm của $MB$ nên $MQ = \dfrac{MB}{2} = \dfrac{3}{2} = 1{,}5\text{ m}.$
- Vì điểm $M$ nằm giữa $P$ và $Q$ nên khoảng cách giữa hai biển báo là:
$$PQ = PM + MQ = 1{,}5 + 1{,}5 = 3\text{ m}.$$

---

## III. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Tính bất biến của khoảng cách giữa hai trung điểm (Định lý trung điểm tổng quát)

> [!IMPORTANT]
> **Định lý:**
> Cho đoạn thẳng $AB$ có độ dài không đổi. Lấy một điểm $C$ tùy ý nằm giữa hai điểm $A$ và $B.$ Gọi $M$ là trung điểm của đoạn thẳng $AC,$ và $N$ là trung điểm của đoạn thẳng $CB.$
> Khi đó khoảng cách $MN$ luôn bằng một nửa độ dài đoạn thẳng $AB$:
> $$MN = \dfrac{AB}{2}.$$
> Độ dài $MN$ hoàn toàn **không phụ thuộc** vào vị trí của điểm $C.$

```text
       A        M        C            N            B
       ●────────●────────●────────────●────────────●
       |←  x/2 →|←  x/2 →|←   y/2    →|←   y/2    →|
       |←────── x ──────→|←────────── y ──────────→|
       |←──────────────────── x + y ──────────────→|
```

#### Chứng minh:
Đặt độ dài $AC = x$ và $CB = y$ ($x, y > 0$).
Vì điểm $C$ nằm giữa hai điểm $A$ và $B$ nên:
$$AB = AC + CB = x + y.$$

Theo tính chất trung điểm:
- Điểm $M$ là trung điểm của $AC \implies MC = \dfrac{AC}{2} = \dfrac{x}{2}.$
- Điểm $N$ là trung điểm của $CB \implies CN = \dfrac{CB}{2} = \dfrac{y}{2}.$

Vì $M$ thuộc đoạn thẳng $AC,$ $N$ thuộc đoạn thẳng $CB$ mà điểm $C$ nằm giữa $A$ và $B,$ nên hai tia $CA$ và $CB$ là hai tia đối nhau.
Suy ra tia $CM$ và tia $CN$ đối nhau, do đó **điểm $C$ nằm giữa hai điểm $M$ và $N$**.

Khi đó:
$$MN = MC + CN = \dfrac{x}{2} + \dfrac{y}{2} = \dfrac{x + y}{2} = \dfrac{AB}{2}.$$

Hệ thức $MN = \dfrac{AB}{2}$ chứng tỏ độ dài đoạn thẳng $MN$ là một hằng số cố định, hoàn toàn không phụ thuộc vào việc điểm $C$ dịch chuyển ở bất kì vị trí nào giữa $A$ và $B$ (Đpcm).

---

#### Mở rộng nâng cao (Khi điểm $C$ nằm ngoài đoạn thẳng $AB$):
Cho đoạn thẳng $AB.$ Lấy điểm $C$ nằm trên tia đối của tia $BA$ (tức thứ tự các điểm là $A, B, C$). Gọi $M$ là trung điểm của $AC,$ $N$ là trung điểm của $BC.$
Hãy tính độ dài đoạn thẳng $MN$ theo $AB.$

**Lời giải:**
- Ta có $AC = AB + BC \implies AC - BC = AB.$
- Vì $M$ là trung điểm của $AC \implies MC = \dfrac{AC}{2}.$
- Vì $N$ là trung điểm của $BC \implies NC = \dfrac{BC}{2}.$
- Do $BC < AC$ nên trên tia $CA,$ điểm $N$ nằm giữa hai điểm $C$ và $M.$
- Do đó:
$$MN = MC - NC = \dfrac{AC}{2} - \dfrac{BC}{2} = \dfrac{AC - BC}{2} = \dfrac{AB}{2}.$$
Như vậy, dù điểm $C$ nằm bên trong hay bên ngoài đoạn thẳng $AB,$ khoảng cách giữa hai trung điểm $M$ và $N$ **luôn luôn bằng $\dfrac{AB}{2}$**!

---

### Chuyên đề 2: Dãy vô hạn trung điểm liên tiếp và tổng hình học lũy thừa

#### Bài toán:
Cho đoạn thẳng $AB$ có độ dài ban đầu $L = 64\text{ cm}.$
Gọi $M_1$ là trung điểm của đoạn thẳng $AB.$
Gọi $M_2$ là trung điểm của đoạn thẳng $AM_1.$
Gọi $M_3$ là trung điểm của đoạn thẳng $AM_2.$
Tổng quát, với mỗi số tự nhiên $n \ge 2,$ gọi $M_n$ là trung điểm của đoạn thẳng $AM_{n-1}.$
a) Tính độ dài đoạn thẳng $AM_1, AM_2, AM_3, AM_4$ và lập công thức tính $AM_n.$
b) Tính khoảng cách $M_{n-1}M_n$ theo $L$ và $n.$
c) Tính tổng khoảng cách $S_n = M_1M_2 + M_2M_3 + M_3M_4 + \dots + M_{n-1}M_n$ khi $n = 6.$

**Lời giải:**
a) Áp dụng tính chất trung điểm liên tiếp:
- $AM_1 = \dfrac{AB}{2} = \dfrac{64}{2} = 32\text{ cm} = \dfrac{L}{2^1}.$
- $AM_2 = \dfrac{AM_1}{2} = \dfrac{32}{2} = 16\text{ cm} = \dfrac{L}{2^2}.$
- $AM_3 = \dfrac{AM_2}{2} = \dfrac{16}{2} = 8\text{ cm} = \dfrac{L}{2^3}.$
- $AM_4 = \dfrac{AM_3}{2} = \dfrac{8}{2} = 4\text{ cm} = \dfrac{L}{2^4}.$
Tổng quát, với số tự nhiên $n \ge 1,$ ta có:
$$AM_n = \dfrac{L}{2^n}.$$

b) Vì $M_n$ là trung điểm của đoạn thẳng $AM_{n-1}$ nên $M_n$ nằm giữa $A$ và $M_{n-1},$ suy ra:
$$M_{n-1}M_n = AM_{n-1} - AM_n = \dfrac{L}{2^{n-1}} - \dfrac{L}{2^n} = \dfrac{L}{2^n} = AM_n.$$

c) Ta nhận thấy các điểm $M_n, M_{n-1}, \dots, M_2, M_1$ nằm thẳng hàng theo thứ tự từ trái sang phải trên tia $AB$:
$$A - M_n - M_{n-1} - \dots - M_2 - M_1 - B.$$
Do đó, tổng khoảng cách các đoạn liên tiếp chính là khoảng cách từ $M_n$ đến $M_1$:
$$S_n = M_1M_2 + M_2M_3 + \dots + M_{n-1}M_n = AM_1 - AM_n.$$
Với $n = 6$ và $L = 64\text{ cm}$:
- $AM_1 = 32\text{ cm}.$
- $AM_6 = \dfrac{64}{2^6} = \dfrac{64}{64} = 1\text{ cm}.$
Suy ra:
$$S_6 = 32 - 1 = 31\text{ cm}.$$

---

### Chuyên đề 3: Hệ thức tọa độ khoảng cách qua trung điểm

#### Bài toán:
Cho đoạn thẳng $AB$ có trung điểm là $M.$ Lấy một điểm $P$ bất kì nằm trên đường thẳng $AB.$ Chứng minh rằng:
a) Nếu điểm $P$ nằm ngoài đoạn thẳng $AB$ thì:
$$PM = \dfrac{PA + PB}{2}.$$
b) Nếu điểm $P$ nằm bên trong đoạn thẳng $AB$ thì:
$$PM = \dfrac{|PA - PB|}{2}.$$

**Lời giải:**

```text
Trường hợp a (P nằm ngoài AB về phía A):
       P         A                   M                   B
       ●─────────●───────────────────●───────────────────●
```

a) **Trường hợp điểm $P$ nằm ngoài đoạn thẳng $AB$:**
Không mất tính tổng quát, giả sử điểm $P$ nằm về phía điểm $A$ (thứ tự các điểm là $P, A, M, B$).
- Vì $A$ nằm giữa $P$ và $M$ nên: $PM = PA + AM.$
- Vì $M$ là trung điểm của $AB$ nên $AM = MB = \dfrac{AB}{2}.$
- Lại có điểm $M$ nằm giữa $P$ và $B$ nên: $PB = PM + MB = PM + AM.$
Cộng hai hệ thức:
$$PA + PB = (PM - AM) + (PM + AM) = 2 \cdot PM.$$
Suy ra:
$$PM = \dfrac{PA + PB}{2}\quad \text{(Đpcm)}.$$
*(Nếu $P$ nằm về phía $B,$ chứng minh tương tự).*

b) **Trường hợp điểm $P$ nằm bên trong đoạn thẳng $AB$:**
Giả sử $P$ nằm giữa $A$ và $M$ (suy ra $PA < PB$).
- Ta có $PA + PM = AM \implies PM = AM - PA.$
- Điểm $M$ nằm giữa $P$ và $B \implies PB = PM + MB = PM + AM \implies PB - PM = AM.$
Từ hai đẳng thức trên, ta trừ vế theo vế:
$$PB - PA = (PM + AM) - (AM - PM) = 2 \cdot PM.$$
Suy ra:
$$PM = \dfrac{PB - PA}{2}.$$
Vì $P$ nằm tùy ý giữa $A$ và $B$ nên tổng quát:
$$PM = \dfrac{|PA - PB|}{2}\quad \text{(Đpcm)}.$$

> [!TIP]
> **Ý nghĩa hình học sâu sắc:**
> Trong hệ trục số, nếu $A$ có tọa độ $x_A$ và $B$ có tọa độ $x_B$ thì trung điểm $M$ luôn có tọa độ $x_M = \dfrac{x_A + x_B}{2}.$ Hai công thức trên chính là nền tảng hình học thuần túy của công thức tọa độ trung điểm mà các em sẽ dùng suốt cấp 2 và cấp 3!

---

### Chuyên đề 4: Bài toán cực trị hình học và vị trí cân bằng

#### Bài toán:
Trên một đoạn đường thẳng nối hai thị trấn $A$ và $B$ cách nhau $20\text{ km},$ người ta cần đặt một trạm tiếp sóng $X.$
Biết rằng chi phí lắp đặt cáp truyền dẫn từ trạm $X$ đến hai thị trấn tỷ lệ thuận với tổng khoảng cách $f(X) = XA + XB,$ còn độ trễ tín hiệu giữa hai thị trấn tỷ lệ thuận với chênh lệch $g(X) = |XA - XB|.$
a) Tìm vị trí đặt trạm $X$ trên đoạn đường thẳng $AB$ sao cho tổng khoảng cách $XA + XB$ nhỏ nhất. Giá trị nhỏ nhất đó bằng bao nhiêu?
b) Tìm vị trí đặt trạm $X$ trên đoạn đường thẳng $AB$ sao cho độ trễ tín hiệu nhỏ nhất (tức $|XA - XB|$ đạt giá trị nhỏ nhất).

**Lời giải:**
a) Với mọi điểm $X$ trên đường thẳng $AB$:
- Nếu $X$ thuộc đoạn thẳng $AB$ (tức $X$ nằm giữa $A$ và $B$), ta luôn có:
$$XA + XB = AB = 20\text{ km}.$$
- Nếu $X$ nằm ngoài đoạn thẳng $AB,$ ta luôn có $XA + XB > AB = 20\text{ km}.$
Do đó, tổng khoảng cách $XA + XB$ đạt giá trị nhỏ nhất là $20\text{ km}$ **khi và chỉ khi điểm $X$ nằm ở bất kì vị trí nào trên đoạn thẳng $AB$**.

b) Xét biểu thức độ chênh lệch $g(X) = |XA - XB|$:
Vì khoảng cách luôn không âm nên:
$$|XA - XB| \ge 0.$$
Dấu đẳng thức xảy ra khi và chỉ khi:
$$XA - XB = 0 \iff XA = XB.$$
Điểm $X$ vừa thuộc đoạn thẳng $AB$ (nằm giữa $A$ và $B$), vừa cách đều hai điểm $A$ và $B$ ($XA = XB$).
Theo định nghĩa, điều này xảy ra khi và chỉ khi **điểm $X$ chính là trung điểm của đoạn thẳng $AB$**.
Khi đó $XA = XB = \dfrac{20}{2} = 10\text{ km},$ và độ trễ bằng $0.$

---

### Chuyên đề 5: Khảo sát số lượng trung điểm tạo bởi tập hợp $n$ điểm thẳng hàng

#### Bài toán:
Cho $n$ điểm phân biệt cùng nằm trên một đường thẳng ($n \ge 3$). Cứ mỗi cặp hai điểm phân biệt xác định một đoạn thẳng, và đoạn thẳng đó có một trung điểm.
a) Số cặp đoạn thẳng tạo bởi $n$ điểm là bao nhiêu?
b) Số lượng trung điểm phân biệt có thể trùng nhau không? Tìm số lượng trung điểm phân biệt ít nhất có thể tạo ra khi $n = 5.$

**Lời giải:**
a) Số đoạn thẳng tạo bởi $n$ điểm phân biệt là:
$$N = \dfrac{n(n - 1)}{2}.$$
Với $n = 5,$ số đoạn thẳng là $\dfrac{5 \cdot 4}{2} = 10$ đoạn thẳng.

b) Mỗi đoạn thẳng có đúng một trung điểm, nhưng các trung điểm của các đoạn thẳng khác nhau **hoàn toàn có thể trùng nhau**.
- **Trường hợp tạo ra ít trung điểm nhất (Dãy cách đều):**
Xét $5$ điểm đặt tại các tọa độ nguyên liên tiếp: $A_1(0), A_2(1), A_3(2), A_4(3), A_5(4)$ (mỗi đoạn thẳng liên tiếp dài $1$ đơn vị).
Tọa độ trung điểm của đoạn thẳng nối $A_i$ và $A_j$ là:
$$M_{ij} = \dfrac{x_i + x_j}{2}.$$
Vì $x_i, x_j \in \{0, 1, 2, 3, 4\}$ và $x_i < x_j$ nên tổng $S = x_i + x_j$ nhận các giá trị nguyên từ $0 + 1 = 1$ đến $3 + 4 = 7.$
Tổng cộng có $7 - 1 + 1 = 7$ giá trị tổng khác nhau:
$$S \in \{1, 2, 3, 4, 5, 6, 7\}.$$
Tương ứng có $7$ tọa độ trung điểm phân biệt:
$$M \in \{0{,}5;\; 1;\; 1{,}5;\; 2;\; 2{,}5;\; 3;\; 3{,}5\}.$$
Như vậy, dù có tới $10$ đoạn thẳng nhưng chỉ tạo ra đúng $7$ trung điểm phân biệt (có $3$ trường hợp trung điểm trùng nhau, ví dụ trung điểm của $A_1A_5$ và trung điểm của $A_2A_4$ đều trùng với điểm $A_3(2)$).
Tổng quát với $n$ điểm cách đều, số trung điểm phân biệt ít nhất luôn là:
$$2n - 3\quad \text{điểm}.$$

---

## IV. 10 Câu hỏi trắc nghiệm tương tác

```quiz
type: choice
question: 'Khẳng định nào sau đây nêu ĐẦY ĐỦ VÀ CHÍNH XÁC NHẤT điều kiện để điểm M là trung điểm của đoạn thẳng AB?'
options:
  - 'M cách đều A và B (MA = MB)'
  - 'M nằm giữa hai điểm A và B'
  - 'M nằm giữa hai điểm A, B và MA = MB'
  - 'MA + MB = 2AB'
answer: 3
explanation: 'Theo định nghĩa, trung điểm của đoạn thẳng phải thỏa mãn đồng thời hai điều kiện: vừa nằm giữa, vừa cách đều hai đầu mút.'
```

```quiz
type: choice
question: 'Cho đoạn thẳng AB = 14 cm. Điểm I là trung điểm của AB. Độ dài đoạn thẳng IA là:'
options:
  - '14 cm'
  - '7 cm'
  - '28 cm'
  - '3,5 cm'
answer: 2
explanation: 'Vì I là trung điểm của AB nên IA = AB / 2 = 14 / 2 = 7 cm.'
```

```quiz
type: choice
question: 'Điểm M là trung điểm của đoạn thẳng CD. Biết MC = 4,5 cm. Độ dài đoạn thẳng CD là:'
options:
  - '4,5 cm'
  - '2,25 cm'
  - '9 cm'
  - '18 cm'
answer: 3
explanation: 'Vì M là trung điểm của CD nên CD = 2 * MC = 2 * 4,5 = 9 cm.'
```

```quiz
type: choice
question: 'Trên tia Ox lấy hai điểm A và B sao cho OA = 3 cm, OB = 6 cm. Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'Điểm B là trung điểm của đoạn thẳng OA'
  - 'Điểm O là trung điểm của đoạn thẳng AB'
  - 'Điểm A là trung điểm của đoạn thẳng OB'
  - 'Không có điểm nào là trung điểm của đoạn thẳng nào'
answer: 3
explanation: 'Trên tia Ox có OA < OB (3 cm < 6 cm) nên A nằm giữa O và B. Khi đó AB = OB - OA = 6 - 3 = 3 cm. Vì A nằm giữa O, B và OA = AB = 3 cm nên A là trung điểm của OB.'
```

```quiz
type: choice
question: 'Cho ba điểm A, B, C không thẳng hàng có AB = AC = 5 cm. Điểm A có phải là trung điểm của đoạn thẳng BC không?'
options:
  - 'Có, vì A cách đều B và C'
  - 'Không, vì ba điểm A, B, C không thẳng hàng nên A không nằm giữa B và C'
  - 'Có, vì AB = AC'
  - 'Chưa đủ điều kiện để kết luận'
answer: 2
explanation: 'Vì ba điểm không thẳng hàng nên A không thuộc đoạn thẳng BC và không nằm giữa B, C. Thiếu điều kiện nằm giữa nên A không thể là trung điểm của BC.'
```

```quiz
type: choice
question: 'Cho đoạn thẳng MN = 20 cm. Gọi P là trung điểm của MN, Q là trung điểm của MP. Độ dài đoạn thẳng MQ là:'
options:
  - '10 cm'
  - '5 cm'
  - '2,5 cm'
  - '15 cm'
answer: 2
explanation: 'P là trung điểm của MN nên MP = 20 / 2 = 10 cm. Q là trung điểm của MP nên MQ = 10 / 2 = 5 cm.'
```

```quiz
type: choice
question: 'Mỗi đoạn thẳng có bao nhiêu trung điểm?'
options:
  - 'Vô số trung điểm'
  - 'Có 2 trung điểm'
  - 'Duy nhất 1 trung điểm'
  - 'Tùy thuộc vào độ dài đoạn thẳng'
answer: 3
explanation: 'Mỗi đoạn thẳng chỉ có duy nhất một trung điểm (điểm chính giữa).'
```

```quiz
type: choice
question: 'Cho đoạn thẳng AB = 16 cm. Điểm C nằm giữa A và B. Gọi M là trung điểm của AC, N là trung điểm của CB. Độ dài đoạn thẳng MN là:'
options:
  - '8 cm'
  - '4 cm'
  - '16 cm'
  - 'Phụ thuộc vào vị trí của điểm C'
answer: 1
explanation: 'Theo định lý trung điểm, MN = MC + CN = AC/2 + CB/2 = (AC + CB)/2 = AB/2 = 16 / 2 = 8 cm, hoàn toàn không phụ thuộc vào vị trí của C.'
```

```quiz
type: choice
question: 'Hai tia Ox và Oy đối nhau. Lấy điểm A thuộc Ox sao cho OA = 8 cm, lấy điểm B thuộc Oy sao cho OB = 8 cm. Điểm O là:'
options:
  - 'Điểm nằm ngoài đoạn thẳng AB'
  - 'Trung điểm của đoạn thẳng AB'
  - 'Một đầu mút của đoạn thẳng AB'
  - 'Không liên quan đến đoạn thẳng AB'
answer: 2
explanation: 'Vì Ox và Oy là hai tia đối nhau nên O nằm giữa A và B. Lại có OA = OB = 8 cm nên O là trung điểm của đoạn thẳng AB.'
```

```quiz
type: choice
question: 'Cho đoạn thẳng AB = 12 cm. M là trung điểm của AB, N là trung điểm của MB. Độ dài đoạn thẳng AN là:'
options:
  - '6 cm'
  - '3 cm'
  - '9 cm'
  - '10 cm'
answer: 3
explanation: 'M là trung điểm của AB nên AM = MB = 6 cm. N là trung điểm của MB nên MN = NB = 3 cm. Vì M nằm giữa A và N nên AN = AM + MN = 6 + 3 = 9 cm.'
```

---

## V. Đề kiểm tra 15 phút tự luyện có hướng dẫn chấm

### Phần 1: Trắc nghiệm (4 câu — 3,0 điểm)

**Câu 1 (0,75 điểm):** Điểm $K$ là trung điểm của đoạn thẳng $AB$ khi:
A. $KA = KB$
B. $KA + KB = AB$
C. $K$ nằm giữa $A, B$ và $KA = KB$
D. $KA = KB = AB$

**Câu 2 (0,75 điểm):** Đoạn thẳng $CD = 18\text{ cm}.$ Gọi $M$ là trung điểm của $CD.$ Độ dài $MD$ là:
A. $9\text{ cm}$
B. $18\text{ cm}$
C. $36\text{ cm}$
D. $4{,}5\text{ cm}$

**Câu 3 (0,75 điểm):** Điểm $O$ là trung điểm của đoạn thẳng $EF.$ Biết $OE = 5{,}5\text{ cm}.$ Độ dài đoạn thẳng $EF$ là:
A. $5{,}5\text{ cm}$
B. $11\text{ cm}$
C. $2{,}75\text{ cm}$
D. $10\text{ cm}$

**Câu 4 (0,75 điểm):** Trên tia $Ox,$ lấy hai điểm $M$ và $N$ sao cho $OM = 5\text{ cm}$ và $ON = 10\text{ cm}.$ Điểm $M$ là:
A. Đầu mút của đoạn thẳng $ON$
B. Điểm nằm ngoài đoạn thẳng $ON$
C. Trung điểm của đoạn thẳng $ON$
D. Trùng với điểm $N$

---

### Phần 2: Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):**
Vẽ đoạn thẳng $AB = 8\text{ cm}$ và vẽ trung điểm $M$ của nó. Nêu rõ các bước vẽ và tính độ dài đoạn thẳng $AM.$

**Bài 2 (2,0 điểm):**
Trên tia $Ot,$ lấy hai điểm $A$ và $B$ sao cho $OA = 3\text{ cm}$ và $OB = 6\text{ cm}.$
a) Điểm $A$ có nằm giữa hai điểm $O$ và $B$ không? Vì sao?
b) Chứng tỏ rằng điểm $A$ là trung điểm của đoạn thẳng $OB.$

**Bài 3 (1,5 điểm):**
Cho đoạn thẳng $PQ = 20\text{ cm}.$ Lấy điểm $M$ là trung điểm của $PQ.$ Lấy điểm $N$ là trung điểm của đoạn thẳng $MQ.$
a) Tính độ dài đoạn thẳng $MN.$
b) Tính độ dài đoạn thẳng $PN.$

**Bài 4 (1,5 điểm — Vận dụng cao):**
Cho đoạn thẳng $AB = 2a.$ Lấy điểm $C$ nằm giữa $A$ và $B.$ Gọi $I$ là trung điểm của $AC,$ $K$ là trung điểm của $CB.$
a) Chứng tỏ rằng độ dài đoạn thẳng $IK$ không phụ thuộc vào vị trí của điểm $C.$
b) Tính độ dài đoạn thẳng $IK$ theo $a.$

---

### Đáp án và Thang điểm chi tiết

#### Phần 1: Trắc nghiệm (3,0 điểm)
- Câu 1: **C** ($K$ nằm giữa $A, B$ và $KA = KB$). *(0,75 điểm)*
- Câu 2: **A** ($MD = 18 : 2 = 9\text{ cm}$). *(0,75 điểm)*
- Câu 3: **B** ($EF = 2 \cdot 5{,}5 = 11\text{ cm}$). *(0,75 điểm)*
- Câu 4: **C** (Trung điểm của đoạn thẳng $ON$). *(0,75 điểm)*

#### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (2,0 điểm):**
- Tính độ dài $AM = \dfrac{AB}{2} = \dfrac{8}{2} = 4\text{ cm}.$ *(0,5 điểm)*
- Nêu các bước vẽ:
  - Bước 1: Dùng thước thẳng vẽ đoạn thẳng $AB = 8\text{ cm}.$ *(0,5 điểm)*
  - Bước 2: Đặt vạch $0$ của thước trùng điểm $A,$ vạch $4\text{ cm}$ chỉ vị trí điểm $M$ trên đoạn thẳng $AB.$ *(0,5 điểm)*
- Hình vẽ chính xác, có ký hiệu hai đoạn thẳng bằng nhau ($MA = MB$). *(0,5 điểm)*

**Bài 2 (2,0 điểm):**
- a) Trên tia $Ot,$ vì $OA < OB$ ($3\text{ cm} < 6\text{ cm}$) nên điểm $A$ nằm giữa hai điểm $O$ và $B.$ *(0,75 điểm)*
- b) Vì điểm $A$ nằm giữa hai điểm $O$ và $B$ nên:
  $$OA + AB = OB \implies 3 + AB = 6 \implies AB = 6 - 3 = 3\text{ cm}.$$ *(0,5 điểm)*
- Ta thấy:
  - Điểm $A$ nằm giữa hai điểm $O$ và $B.$
  - $OA = AB = 3\text{ cm}.$
  Vậy điểm $A$ là trung điểm của đoạn thẳng $OB.$ *(0,75 điểm)*

**Bài 3 (1,5 điểm):**
- a) Vì $M$ là trung điểm của $PQ$ nên:
  $$MQ = \dfrac{PQ}{2} = \dfrac{20}{2} = 10\text{ cm}.$$
  Vì $N$ là trung điểm của $MQ$ nên:
  $$MN = \dfrac{MQ}{2} = \dfrac{10}{2} = 5\text{ cm}.$$ *(0,75 điểm)*
- b) Vì $M$ là trung điểm của $PQ$ nên $PM = 10\text{ cm}.$
  Do $M$ nằm giữa $P$ và $Q,$ $N$ nằm giữa $M$ và $Q$ nên điểm $M$ nằm giữa hai điểm $P$ và $N.$
  Suy ra:
  $$PN = PM + MN = 10 + 5 = 15\text{ cm}.$$ *(0,75 điểm)*

**Bài 4 (1,5 điểm):**
- a) Vì $I$ là trung điểm của $AC$ nên $IC = \dfrac{AC}{2}.$
  Vì $K$ là trung điểm của $CB$ nên $CK = \dfrac{CB}{2}.$
  Do $C$ nằm giữa $A$ và $B$ nên tia $CA$ và tia $CB$ đối nhau, suy ra $C$ nằm giữa $I$ và $K.$
  Do đó:
  $$IK = IC + CK = \dfrac{AC}{2} + \dfrac{CB}{2} = \dfrac{AC + CB}{2} = \dfrac{AB}{2}.$$
  Vì $AB$ có độ dài cố định nên $IK$ có độ dài không đổi, không phụ thuộc vào vị trí điểm $C.$ *(1,0 điểm)*
- b) Với $AB = 2a,$ ta có:
  $$IK = \dfrac{2a}{2} = a.$$ *(0,5 điểm)*
