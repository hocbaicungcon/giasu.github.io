---
title: 'Toán 7 Bài 36: Hình hộp chữ nhật và Hình lập phương'
description: 'Làm chủ lý thuyết hình học không gian Toán 7 Bài 36: Cấu tạo đỉnh, cạnh, mặt của hình hộp chữ nhật và hình lập phương, công thức diện tích xung quanh, thể tích, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình khối thực tiễn
  - Hình hộp chữ nhật
  - Hình lập phương
  - Thể tích
  - Diện tích xung quanh
  - Kết nối tri thức
grade: 7
---

# Bài 36. Hình hộp chữ nhật và Hình lập phương

Từ viên gạch xây nhà, thùng carton đóng gói hàng hóa, chiếc tủ lạnh, bể bơi cho đến khối rubik huyền thoại và những container vận tải xuyên đại dương — chúng ta đang sống và làm việc giữa một thế giới tràn ngập các **Hình khối trong thực tiễn**.

Ở bậc Tiểu học, các em đã bước đầu làm quen với hình hộp chữ nhật và hình lập phương. Lên lớp 7, với tư duy không gian đã phát triển, chúng ta sẽ nhìn nhận các hình khối này dưới con mắt của một kiến trúc sư và kỹ sư cơ khí:
- Cấu trúc không gian $3$ chiều gồm những yếu tố nào (đỉnh, cạnh, mặt đáy, mặt bên, đường chéo)?
- Làm thế nào để trải phẳng (khai triển) một khối hộp thành tấm bìa phẳng để sản xuất bao bì tự động?
- Công thức tính diện tích xung quanh và thể tích được ứng dụng như thế nào để tính dung tích bể chứa nước, vật liệu xây dựng và dự toán chi phí?

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 36: HÌNH HỘP CHỮ NHẬT & HÌNH LẬP PHƯƠNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hình Hộp Chữ Nhật</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 6 mặt là hình chữ nhật (2 đáy, 4 mặt bên).<br>• 8 đỉnh, 12 cạnh (3 kích thước: dài $a$, rộng $b$, cao $h$).<br>• 4 đường chéo bằng nhau và cắt nhau tại trung điểm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hình Lập Phương</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là trường hợp đặc biệt: $a = b = h$.<br>• 6 mặt là <strong>các hình vuông bằng nhau</strong>.<br>• 12 cạnh có độ dài bằng nhau ($a$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Diện tích Xung quanh ($S_{xq}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hình hộp chữ nhật: $S_{xq} = 2(a + b)h = C_{\text{đáy}} \cdot h$.<br>• Diện tích toàn phần: $S_{tp} = S_{xq} + 2S_{\text{đáy}}$.<br>• Hình lập phương: $S_{xq} = 4a^2, \ S_{tp} = 6a^2$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thể tích ($V$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hình hộp chữ nhật: $V = a \cdot b \cdot h = S_{\text{đáy}} \cdot h$.<br>• Hình lập phương: $V = a^3$.<br>• Đổi đơn vị: $1\text{ m}^3 = 1000\text{ dm}^3 = 1000\text{ lít}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số mặt của hình hộp:** Một khối hộp chữ nhật có tất cả bao nhiêu mặt? Các mặt đối diện có đặc điểm gì?
2. **Số đỉnh và cạnh:** Một hình hộp chữ nhật có bao nhiêu đỉnh và bao nhiêu cạnh?
3. **Hình lập phương:** Nếu một hình lập phương có cạnh bằng $3\text{ cm}$ thì diện tích một mặt của nó bằng bao nhiêu?
4. **Đổi đơn vị thể tích:** $1\text{ m}^3$ bằng bao nhiêu đềximét khối ($\text{dm}^3$) và bằng bao nhiêu lít nước?
5. **Đường chéo:** Một viên gạch hình hộp chữ nhật có bao nhiêu đường chéo nối các đỉnh đối diện xuyên qua tâm khối gạch?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Có $6$ mặt. Các mặt đối diện là các hình chữ nhật bằng nhau và song song với nhau.
> 2. Có $8$ đỉnh và $12$ cạnh.
> 3. $S = 3^2 = 9\text{ cm}^2$.
> 4. $1\text{ m}^3 = 1000\text{ dm}^3 = 1000\text{ lít}$.
> 5. Có $4$ đường chéo bằng nhau.

---

## I. Lý thuyết Trọng tâm

### 1. Hình Hộp Chữ Nhật

#### a) Cấu tạo và các yếu tố cơ bản
Hình hộp chữ nhật $ABCD.A'B'C'D'$ gồm có:
- **6 mặt:**
  + Hai mặt đáy: Mặt đáy dưới $ABCD$ và mặt đáy trên $A'B'C'D'$.
  + Bốn mặt bên: $ABB'A', BCC'B', CDD'C', DAA'D'$.
  + Mọi mặt đều là các **hình chữ nhật**. Hai mặt đối diện thì bằng nhau.
- **8 đỉnh:** $A, B, C, D, A', B', C', D'$.
- **12 cạnh:** Gồm ba nhóm cạnh có độ dài tương ứng bằng nhau:
  + Chiều dài: $a = AB = CD = A'B' = C'D'$.
  + Chiều rộng: $b = BC = AD = B'C' = A'D'$.
  + Chiều cao: $h = AA' = BB' = CC' = DD'$.
- **4 đường chéo:** $AC', BD', CA', DB'$. Bốn đường chéo này có độ dài bằng nhau và cùng cắt nhau tại trung điểm của mỗi đường.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình không gian 3D của Hình hộp chữ nhật">
    <!-- Mặt sau và cạnh khuất nét đứt -->
    <line x1="120" y1="180" x2="320" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="120" y1="180" x2="120" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="120" y1="180" x2="50" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />

    <!-- Mặt đáy trên A'B'C'D' -->
    <polygon points="50,110 250,110 320,70 120,70" fill="#e0f2fe" fill-opacity="0.6" stroke="#0284c7" stroke-width="2" />
    <!-- Mặt trước ABB'A' -->
    <polygon points="50,220 250,220 250,110 50,110" fill="#eff6ff" fill-opacity="0.5" stroke="#2563eb" stroke-width="2" />
    <!-- Mặt bên phải BCC'B' -->
    <polygon points="250,220 320,180 320,70 250,110" fill="#f8fafc" fill-opacity="0.7" stroke="#2563eb" stroke-width="2" />

    <!-- Nhãn các kích thước -->
    <text x="140" y="240" font-size="15" font-weight="700" fill="#1e40af">Chiều dài a</text>
    <text x="295" y="210" font-size="15" font-weight="700" fill="#047857">Chiều rộng b</text>
    <text x="15" y="170" font-size="15" font-weight="700" fill="#b91c1c">Chiều cao h</text>
  </svg>
</div>

---

### 2. Hình Lập Phương

Hình lập phương là trường hợp đặc biệt của hình hộp chữ nhật khi cả ba kích thước đều bằng nhau:
$$\text{Chiều dài } a = \text{Chiều rộng } b = \text{Chiều cao } h$$

> [!NOTE]
> **ĐẶC ĐIỂM HÌNH LẬP PHƯƠNG:**
> - Có **6 mặt đều là các hình vuông bằng nhau**.
> - Có **12 cạnh có độ dài bằng nhau**.
> - Có 8 đỉnh và 4 đường chéo bằng nhau.

---

### 3. Công thức tính Diện tích xung quanh và Thể tích

#### a) Diện tích xung quanh và Diện tích toàn phần
- **Diện tích xung quanh ($S_{xq}$):** Là tổng diện tích của bốn mặt bên.
  $$S_{xq} = 2 \cdot (a + b) \cdot h = C_{\text{đáy}} \cdot h$$
  *(Diện tích xung quanh bằng chu vi đáy nhân với chiều cao).*
- **Diện tích toàn phần ($S_{tp}$):** Bằng diện tích xung quanh cộng với diện tích của hai mặt đáy.
  $$S_{tp} = S_{xq} + 2 \cdot S_{\text{đáy}} = 2(a + b)h + 2ab$$

*Đối với hình lập phương cạnh $a$:*
$$S_{xq} = 4a^2, \quad S_{tp} = 6a^2$$

#### b) Thể tích
- **Thể tích hình hộp chữ nhật ($V$):** Bằng chiều dài nhân chiều rộng nhân chiều cao (hoặc diện tích đáy nhân chiều cao).
  $$V = a \cdot b \cdot h = S_{\text{đáy}} \cdot h$$
- **Thể tích hình lập phương ($V$):**
  $$V = a^3$$

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết đỉnh, cạnh, mặt và góc trong không gian

**Phương pháp giải:**
Dựa vào hình vẽ phối cảnh không gian hoặc hình khai triển phẳng để đếm và xác định các mặt song song, các mặt vuông góc, các đường chéo.

---

#### Bài toán 1:
Cho hình hộp chữ nhật $ABCD.EFGH$.
a) Kể tên các mặt đáy và các mặt bên của hình hộp chữ nhật.
b) Chỉ ra các cạnh có độ dài bằng cạnh $AB$.
c) Kể tên 4 đường chéo của hình hộp chữ nhật.
d) Nếu đáy $ABCD$ là hình vuông cạnh $5\text{ cm}$ và chiều cao $AE = 8\text{ cm}$, tính diện tích mặt bên $ABFE$ và mặt đáy $ABCD$.

**Lời giải:**

a) 
- Hai mặt đáy: Mặt đáy $ABCD$ và mặt đáy $EFGH$.
- Bốn mặt bên: $ABFE, BCGF, CDHG, DAEH$.

b) Các cạnh có độ dài bằng cạnh $AB$ là các cạnh song song và bằng với nó:
$$CD, EF, GH$$

c) Bốn đường chéo của hình hộp chữ nhật là các đoạn thẳng nối hai đỉnh đối diện:
$$AG, BH, CE, DF$$

d) Tính diện tích:
- Mặt đáy $ABCD$ là hình vuông cạnh $5\text{ cm}$:
  $$S_{\text{đáy}} = 5 \cdot 5 = 25\text{ (cm}^2\text{)}$$
- Mặt bên $ABFE$ là hình chữ nhật có kích thước $AB = 5\text{ cm}$ và $AE = 8\text{ cm}$:
  $$S_{ABFE} = 5 \cdot 8 = 40\text{ (cm}^2\text{)}$$

---

### Dạng 2: Tính Diện tích xung quanh, Diện tích toàn phần và Thể tích

**Phương pháp giải:**
1. Đảm bảo tất cả các kích thước đều có **cùng một đơn vị đo**.
2. Áp dụng chuẩn xác công thức:
   - $S_{xq} = 2(a + b)h$
   - $S_{tp} = S_{xq} + 2ab$
   - $V = a \cdot b \cdot h$

---

#### Bài toán 2:
Một bể cá cảnh hình hộp chữ nhật bằng kính có chiều dài $80\text{ cm}$, chiều rộng $50\text{ cm}$ và chiều cao $60\text{ cm}$.
a) Tính diện tích kính cần dùng để làm bể cá đó (biết rằng bể cá không có nắp đậy).
b) Tính thể tích của bể cá ra đơn vị lít ($1\text{ lít} = 1\text{ dm}^3$).
c) Người ta đổ nước vào bể sao cho mực nước cao bằng $\frac{3}{4}$ chiều cao của bể. Hỏi trong bể đang chứa bao nhiêu lít nước?

**Lời giải:**

a) Bể cá không có nắp nên diện tích kính cần dùng bằng diện tích xung quanh cộng với diện tích một mặt đáy:
- Chu vi đáy bể:
  $$C_{\text{đáy}} = 2 \cdot (80 + 50) = 2 \cdot 130 = 260\text{ (cm)}$$
- Diện tích xung quanh của bể:
  $$S_{xq} = C_{\text{đáy}} \cdot h = 260 \cdot 60 = 15\,600\text{ (cm}^2\text{)}$$
- Diện tích đáy bể:
  $$S_{\text{đáy}} = 80 \cdot 50 = 4\,000\text{ (cm}^2\text{)}$$
- Diện tích kính làm bể cá là:
  $$S_{\text{kính}} = S_{xq} + S_{\text{đáy}} = 15\,600 + 4\,000 = 19\,600\text{ (cm}^2\text{)} = 1{,}96\text{ (m}^2\text{)}$$

b) Đổi các kích thước ra đềximét để tính thể tích ra lít:
$$a = 80\text{ cm} = 8\text{ dm}, \quad b = 50\text{ cm} = 5\text{ dm}, \quad h = 60\text{ cm} = 6\text{ dm}$$
Thể tích của bể cá là:
$$V = a \cdot b \cdot h = 8 \cdot 5 \cdot 6 = 240\text{ (dm}^3\text{)} = 240\text{ (lít)}$$

c) Lượng nước đổ vào bể bằng $\frac{3}{4}$ thể tích bể:
$$V_{\text{nước}} = \frac{3}{4} \cdot V = \frac{3}{4} \cdot 240 = 180\text{ (lít)}$$
Vậy trong bể đang chứa $180$ lít nước.

---

### Dạng 3: Bài toán ngược tìm kích thước của hình khối

**Phương pháp giải:**
- Biết thể tích $V$ và hai kích thước $\implies$ Kích thước thứ ba: $h = \frac{V}{a \cdot b}$.
- Biết diện tích xung quanh $S_{xq}$ và chiều cao $h \implies$ Nửa chu vi đáy: $a + b = \frac{S_{xq}}{2h}$.

---

#### Bài toán 3:
Một phòng học có dạng hình hộp chữ nhật có chiều dài $9\text{ m}$, chiều rộng $6\text{ m}$ và thể tích không khí trong phòng là $216\text{ m}^3$.
a) Tính chiều cao của phòng học đó.
b) Người ta muốn quét vôi phía trong bốn bức tường và trần nhà của phòng học. Biết tổng diện tích các cửa sổ và cửa ra vào là $15\text{ m}^2$. Tính diện tích cần quét vôi.
c) Nếu chi phí quét vôi là $35\,000$ đồng/$\text{m}^2$ thì tổng chi phí quét vôi phòng học là bao nhiêu tiền?

**Lời giải:**

a) Diện tích nền phòng học là:
$$S_{\text{nền}} = 9 \cdot 6 = 54\text{ (m}^2\text{)}$$
Chiều cao của phòng học là:
$$h = \frac{V}{S_{\text{nền}}} = \frac{216}{54} = 4\text{ (m)}$$

b) Tính diện tích cần quét vôi:
- Diện tích xung quanh của phòng học (bốn bức tường):
  $$S_{xq} = 2 \cdot (9 + 6) \cdot 4 = 2 \cdot 15 \cdot 4 = 120\text{ (m}^2\text{)}$$
- Diện tích trần nhà (bằng diện tích nền):
  $$S_{\text{trần}} = 54\text{ (m}^2\text{)}$$
- Diện tích toàn bộ bốn bức tường và trần nhà:
  $$S = 120 + 54 = 174\text{ (m}^2\text{)}$$
- Vì không quét vôi các cửa nên diện tích cần quét vôi thực tế là:
  $$S_{\text{sơn}} = 174 - 15 = 159\text{ (m}^2\text{)}$$

c) Tổng chi phí quét vôi phòng học là:
$$T = 159 \cdot 35\,000 = 5\,565\,000\text{ (đồng)}$$

---

### Dạng 4: Cắt ghép, chia nhỏ khối và bài toán đóng gói hàng hóa

**Phương pháp giải:**
Muốn xếp các khối lập phương nhỏ cạnh $c$ vào một thùng hình hộp chữ nhật kích thước $a \times b \times h$:
- Số khối xếp dọc theo chiều dài: $n_a = \lfloor a / c \rfloor$.
- Số khối xếp dọc theo chiều rộng: $n_b = \lfloor b / c \rfloor$.
- Số khối xếp theo chiều cao: $n_h = \lfloor h / c \rfloor$.
- Tổng số khối tối đa có thể xếp được: $N = n_a \cdot n_b \cdot n_h$.

---

#### Bài toán 4:
Một thùng hàng container có kích thước lòng trong: chiều dài $6\text{ m}$, chiều rộng $2{,}4\text{ m}$ và chiều cao $2{,}6\text{ m}$. Người ta cần xếp các kiện hàng hình lập phương cạnh $0{,}6\text{ m}$ vào container đó.
Hỏi container có thể chở được tối đa bao nhiêu kiện hàng như vậy?

**Lời giải:**

Ta tính số kiện hàng có thể xếp vừa khít theo từng chiều:
- Theo chiều dài container ($6\text{ m}$):
  $$n_{\text{dài}} = 6 : 0{,}6 = 10\text{ (kiện)}$$
- Theo chiều rộng container ($2{,}4\text{ m}$):
  $$n_{\text{rộng}} = 2{,}4 : 0{,}6 = 4\text{ (kiện)}$$
- Theo chiều cao container ($2{,}6\text{ m}$):
  $$n_{\text{cao}} = 2{,}6 : 0{,}6 = 4{,}33\dots \implies \text{Xếp được tối đa } 4\text{ lớp hàng chồng lên nhau}$$
  *(Phần dư $2{,}6 - 4 \cdot 0{,}6 = 0{,}2\text{ m}$ trên nóc không đủ để xếp thêm kiện hàng mới).*

Tổng số kiện hàng tối đa container có thể chở là:
$$N = n_{\text{dài}} \cdot n_{\text{rộng}} \cdot n_{\text{cao}} = 10 \cdot 4 \cdot 4 = 160\text{ (kiện hàng)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Độ dài Đường chéo Không gian và Định lý Pythagore 3D

Làm thế nào để tính độ dài đường chéo $AC'$ xuyên qua ruột một khối hộp chữ nhật có ba kích thước $a, b, h$?
Áp dụng định lý Pythagore liên tiếp hai lần:
1. Trong tam giác vuông đáy $ABC$: Đường chéo đáy $AC^2 = a^2 + b^2$.
2. Trong tam giác vuông $ACC'$ (vuông tại $C$ do $CC' \perp \text{đáy}$):
   $$AC'^2 = AC^2 + CC'^2 = a^2 + b^2 + h^2$$
> **CÔNG THỨC ĐƯỜNG CHÉO 3D:**
> $$d = \sqrt{a^2 + b^2 + h^2}$$
*Đối với hình lập phương cạnh $a$:* $d = \sqrt{a^2 + a^2 + a^2} = a\sqrt{3}$.
Công thức này cho phép kiểm tra xem một cây gậy trượt tuyết dài $2\text{ m}$ có thể để vừa vào một chiếc va li hành lý hay không!

---

### Chuyên đề 2: Tiêu chuẩn Hóa Container Vận tải Biển (ISO 668) và Toàn cầu hóa

Thế giới hiện đại vận hành được nhờ một phát minh giản dị: **Container chở hàng chuẩn ISO (TEU - Twenty-foot Equivalent Unit)**:
- Kích thước chuẩn: Chiều dài $20\text{ ft}$ ($6{,}06\text{ m}$), chiều rộng $8\text{ ft}$ ($2{,}44\text{ m}$) và chiều cao $8{,}5\text{ ft}$ ($2{,}59\text{ m}$).
- Nhờ chuẩn hóa hình hộp chữ nhật này, các tàu siêu tải có thể xếp chồng hàng chục ngàn container như những khối lego khổng lồ, xe tải và tàu hỏa bốc dỡ tự động bằng cẩu cảng chỉ trong vài giây mà không cần bốc vác thủ công, giảm $90\%$ chi phí vận chuyển thương mại thế giới!

---

### Chuyên đề 3: Khối Rubik và Lý thuyết Nhóm Đại số Trừu tượng (Group Theory)

Khối lập phương Rubik $3 \times 3 \times 3$ do nhà điêu khắc người Hungary Ernő Rubik phát minh năm 1974 gồm $26$ khối lập phương con xoay quanh một lõi trục 3 chiều.
- Số trạng thái xáo trộn có thể có của khối rubik là:
  $$43\,252\,003\,274\,489\,856\,000 \approx 4{,}3 \times 10^{19}\text{ trạng thái!}$$
- Năm 2010, nhờ siêu máy tính của Google, các nhà toán học đã chứng minh **Con số của Chúa (God's Number)**: Bất kỳ trạng thái xáo trộn nào của khối Rubik đều có thể giải được trong **tối đa 20 bước di chuyển**!

---

### Chuyên đề 4: Tỉ lệ Diện tích trên Thể tích ($S / V$) và Sinh học Thích nghi Nhiệt độ

Tại sao gấu Bắc Cực và cá voi khổng lồ có thân hình tròn trịa to lớn, trong khi loài cáo sa mạc Fennec lại nhỏ thó với đôi tai to ngoại cỡ?
Quy tắc nhiệt động học sinh học Bergmann & Allen:
- Khi một khối lập phương kích thước tăng gấp $k$ lần: Diện tích mặt $S$ tăng $k^2$ lần, nhưng thể tích $V$ (khối lượng) tăng tới $k^3$ lần!
- Do đó, tỉ lệ diện tích tỏa nhiệt trên thể tích sinh nhiệt:
  $$\frac{S}{V} = \frac{6a^2}{a^3} = \frac{6}{a}$$
Kích thước $a$ càng lớn thì tỉ lệ $\frac{S}{V}$ càng nhỏ $\implies$ Động vật khổng lồ ở xứ lạnh giữ nhiệt cực tốt. Ngược lại, động vật xứ nóng có cơ thể nhỏ và nhiều bộ phận dẹt để tăng $\frac{S}{V}$, tỏa nhiệt chống say nắng!

---

### Chuyên đề 5: Biểu diễn Voxel trong Chẩn đoán Y tế Chụp cắt lớp CT / MRI

Trong bệnh viện, máy chụp cắt lớp vi tính CT scanner chụp hàng ngàn lát cắt 2D xuyên qua cơ thể bệnh nhân.
Làm thế nào máy tính dựng lại hình ảnh trái tim đập 3D?
Máy tính biến đổi từng pixel ảnh 2D thành các khối lập phương vi mô $3$ chiều gọi là **Voxel (Volume Pixel)**. Hàng triệu voxel ghép lại tạo thành mô hình giải phẫu không gian thực của não bộ và xương khớp, giúp các bác sĩ phẫu thuật can thiệp chính xác tới từng milimét.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 36: Hình hộp chữ nhật và Hình lập phương",
  "questions": [
    {
      "question": "Hình hộp chữ nhật có tất cả bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?",
      "options": [
        "8 đỉnh, 12 cạnh, 6 mặt",
        "6 đỉnh, 12 cạnh, 8 mặt",
        "8 đỉnh, 10 cạnh, 6 mặt",
        "12 đỉnh, 8 cạnh, 6 mặt"
      ],
      "answer": 0,
      "hint": "Hình hộp chữ nhật có cấu trúc tương tự như một viên gạch xây nhà.",
      "explanation": "Hình hộp chữ nhật có đúng 8 đỉnh, 12 cạnh và 6 mặt (tất cả các mặt đều là hình chữ nhật)."
    },
    {
      "question": "Công thức tính diện tích xung quanh của hình hộp chữ nhật có chiều dài a, chiều rộng b và chiều cao h là:",
      "options": [
        "Sxq = (a + b) * h",
        "Sxq = 2 * (a + b) * h",
        "Sxq = a * b * h",
        "Sxq = 2 * a * b * h"
      ],
      "answer": 1,
      "hint": "Diện tích xung quanh bằng chu vi đáy nhân với chiều cao.",
      "explanation": "Chu vi đáy là $2(a + b)$, do đó diện tích xung quanh là $S_{xq} = 2(a + b)h$."
    },
    {
      "question": "Một hình lập phương có cạnh bằng 4 cm. Thể tích của hình lập phương đó bằng:",
      "options": [
        "16 cm^3",
        "64 cm^3",
        "96 cm^3",
        "48 cm^3"
      ],
      "answer": 1,
      "hint": "V = a^3 = 4 * 4 * 4.",
      "explanation": "Thể tích hình lập phương là $V = a^3 = 4^3 = 64\\text{ cm}^3$."
    },
    {
      "question": "Diện tích toàn phần của một hình lập phương có cạnh 5 cm là:",
      "options": [
        "100 cm^2",
        "125 cm^2",
        "150 cm^2",
        "25 cm^2"
      ],
      "answer": 2,
      "hint": "Hình lập phương có 6 mặt hình vuông bằng nhau: Stp = 6 * a^2.",
      "explanation": "Diện tích toàn phần hình lập phương gồm 6 mặt vuông: $S_{tp} = 6 \\cdot a^2 = 6 \\cdot 5^2 = 6 \\cdot 25 = 150\\text{ cm}^2$."
    },
    {
      "question": "Một hình hộp chữ nhật có kích thước dài 10 cm, rộng 6 cm, cao 5 cm. Thể tích của hình hộp là:",
      "options": [
        "300 cm^3",
        "150 cm^3",
        "160 cm^3",
        "60 cm^3"
      ],
      "answer": 0,
      "hint": "V = a * b * h = 10 * 6 * 5.",
      "explanation": "$V = a \\cdot b \\cdot h = 10 \\cdot 6 \\cdot 5 = 300\\text{ cm}^3$."
    },
    {
      "question": "Hình hộp chữ nhật có bao nhiêu đường chéo nối các đỉnh đối diện xuyên qua khối?",
      "options": [
        "2 đường chéo",
        "4 đường chéo",
        "6 đường chéo",
        "8 đường chéo"
      ],
      "answer": 1,
      "hint": "Có 8 đỉnh ghép thành 4 cặp đỉnh đối diện xuyên tâm.",
      "explanation": "Hình hộp chữ nhật có 4 đường chéo bằng nhau cắt nhau tại trung điểm của mỗi đường."
    },
    {
      "question": "Một bể nước dạng hình lập phương có cạnh 1,2 m. Bể có thể chứa được tối đa bao nhiêu lít nước?",
      "options": [
        "1728 lít",
        "1440 lít",
        "1200 lít",
        "172,8 lít"
      ],
      "answer": 0,
      "hint": "Đổi cạnh ra dm: 1,2 m = 12 dm. V = 12^3 = 1728 dm^3 = 1728 lít.",
      "explanation": "Đổi cạnh $1{,}2\\text{ m} = 12\\text{ dm}$. Thể tích bể là $V = 12^3 = 1728\\text{ dm}^3 = 1728\\text{ lít}$."
    },
    {
      "question": "Nếu tăng độ dài mỗi cạnh của hình lập phương lên gấp đôi thì thể tích của nó sẽ tăng lên gấp bao nhiêu lần?",
      "options": [
        "2 lần",
        "4 lần",
        "6 lần",
        "8 lần"
      ],
      "answer": 3,
      "hint": "V_mới = (2a)^3 = 8 * a^3.",
      "explanation": "Khi cạnh tăng lên 2 lần: $V' = (2a)^3 = 8a^3 = 8V$. Thể tích tăng lên 8 lần."
    },
    {
      "question": "Hình khai triển phẳng của một hình lập phương gồm bao nhiêu hình vuông?",
      "options": [
        "4 hình vuông",
        "5 hình vuông",
        "6 hình vuông",
        "8 hình vuông"
      ],
      "answer": 2,
      "hint": "Hình lập phương có 6 mặt.",
      "explanation": "Hình khai triển của hình lập phương gồm 6 hình vuông bằng nhau tương ứng với 6 mặt của nó."
    },
    {
      "question": "Độ dài đường chéo không gian của một khối hộp chữ nhật có kích thước 2 cm, 3 cm, 6 cm bằng:",
      "options": [
        "11 cm",
        "7 cm",
        "8 cm",
        "9 cm"
      ],
      "answer": 1,
      "hint": "d = căn bậc hai của (2^2 + 3^2 + 6^2) = căn(4 + 9 + 36) = căn(49).",
      "explanation": "Theo công thức Pythagore 3D: $d = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7\\text{ cm}$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Một khối gỗ hình hộp chữ nhật có chiều dài $20\text{ cm}$, chiều rộng $15\text{ cm}$ và chiều cao $10\text{ cm}$.
a) Tính diện tích toàn phần của khối gỗ.
b) Người ta sơn tất cả các mặt của khối gỗ đó với chi phí $200$ đồng/$\text{cm}^2$. Tính số tiền phải trả để sơn khối gỗ.

### Bài tập 2:
Một bể bơi mini dành cho trẻ em có dạng hình hộp chữ nhật dài $5\text{ m}$, rộng $3\text{ m}$ và sâu $1{,}2\text{ m}$.
a) Người ta lát gạch men xung quanh thành bể và đáy bể. Tính diện tích cần lát gạch (biết diện tích mạch vữa không đáng kể).
b) Máy bơm bơm nước vào bể với công suất $6\text{ m}^3/\text{giờ}$. Hỏi sau bao lâu thì lượng nước trong bể đạt mức cao $0{,}8\text{ m}$?

### Bài tập 3 (Toán thực tế):
Một hộp quà sinh nhật hình lập phương có cạnh $12\text{ cm}$. Bạn Hoa muốn dùng một dải ruy băng buộc chữ thập quanh hộp quà và thắt nơ ở trên nắp hộp. Biết đoạn ruy băng dùng để thắt nơ dài $25\text{ cm}$. Tính tổng chiều dài sợi ruy băng mà bạn Hoa cần chuẩn bị.
