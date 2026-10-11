---
title: 'Toán 6 Bài 20: Chu vi và diện tích của một số tứ giác đã học - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 20: công thức chu vi và diện tích hình vuông, hình chữ nhật, hình thoi, hình bình hành, hình thang; bảng đổi đơn vị đo, bài toán lát gạch, rào vườn, bài toán ngược và nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học trực quan
  - Chu vi và diện tích
  - Hình chữ nhật
  - Hình thoi
  - Hình bình hành
  - Hình thang cân
  - Kết nối tri thức
grade: 6
---

# Bài 20. Chu vi và diện tích của một số tứ giác đã học

Sau khi đã nắm vững đặc điểm nhận dạng về cạnh, góc và đường chéo của các tứ giác ở Bài 18 và Bài 19, trong bài học hôm nay, chúng ta sẽ bước sang kỹ năng định lượng quan trọng nhất của hình học thực tiễn: **Tính chu vi ($C$) và diện tích ($S$) của các hình phẳng**.

Làm thế nào để tính chính xác số mét lưới thép cần mua để rào quanh mảnh vườn có chừa cổng? Cần bao nhiêu viên gạch men để lát kín nền phòng khách? Tại sao trong các hình chữ nhật có cùng chu vi, mảnh đất hình vuông luôn mang lại diện tích sử dụng lớn nhất? Bài học này sẽ cung cấp cho các em trọn bộ công thức chuẩn, quy tắc đổi đơn vị không bao giờ nhầm lẫn, cùng hệ thống bài tập thực tế và bài toán nâng cao độc bản $100\%$ có lời giải chi tiết từng bước.

---

## 0. Khởi động — Thử tài công thức chu vi và diện tích (5–7 phút)

Hãy kiểm tra trí nhớ và phản xạ công thức của các em qua 3 câu hỏi trắc nghiệm tương tác sau:

```quiz
type: choice
question: 'Diện tích của một hình thoi có độ dài hai đường chéo là 12 cm và 16 cm bằng:'
options:
  - '192 cm²'
  - '96 cm²'
  - '56 cm²'
  - '28 cm²'
answer: 2
explanation: 'Diện tích hình thoi bằng nửa tích độ dài hai đường chéo: S = (1/2) · 12 · 16 = 96 cm².'
```

```quiz
type: choice
question: 'Một hình bình hành có độ dài đáy 15 cm và chiều cao tương ứng 8 cm. Diện tích của nó là:'
options:
  - '60 cm²'
  - '120 cm²'
  - '46 cm²'
  - '23 cm²'
answer: 2
explanation: 'Diện tích hình bình hành bằng đáy nhân với chiều cao tương ứng: S = a · h = 15 · 8 = 120 cm².'
```

```quiz
type: choice
question: 'Đổi đơn vị đo: 4 m² bằng bao nhiêu đềximét vuông (dm²)?'
options:
  - '40 dm²'
  - '400 dm²'
  - '4000 dm²'
  - '40000 dm²'
answer: 2
explanation: 'Trong đơn vị đo diện tích, mỗi bậc gấp hoặc kém nhau 100 lần: 1 m² = 100 dm², do đó 4 m² = 400 dm².'
```

---

## A. Lý thuyết trọng tâm

Trong toàn bộ bài học, ta quy ước:
- $C$: Chu vi của hình (tổng độ dài các cạnh bao quanh, đo bằng đơn vị độ dài: $\text{mm, cm, dm, m, km}$).
- $S$: Diện tích của hình (phần mặt phẳng được giới hạn bởi hình, đo bằng đơn vị diện tích: $\text{mm}^2, \text{cm}^2, \text{dm}^2, \text{m}^2, \text{ha, km}^2$).

---

### 1. Hình vuông và Hình chữ nhật

> [!NOTE]
> **Công thức chu vi và diện tích:**
> - **Hình vuông cạnh $a$:**
>   $$C = 4a;\quad S = a \cdot a = a^2.$$
> - **Hình chữ nhật có chiều dài $a$, chiều rộng $b$:**
>   $$C = 2 \cdot (a + b);\quad S = a \cdot b.$$

**Ví dụ 1.**
1. Tính chu vi và diện tích hình vuông có cạnh $a = 8\text{ cm}$.
2. Tính chu vi và diện tích hình chữ nhật có chiều dài $14\text{ cm}$, chiều rộng $6\text{ cm}$.

**Lời giải:**
1. Chu vi hình vuông: $C = 4 \cdot 8 = 32\text{ (cm)}.$
   Diện tích hình vuông: $S = 8^2 = 64\text{ (cm}^2).$
2. Chu vi hình chữ nhật: $C = 2 \cdot (14 + 6) = 2 \cdot 20 = 40\text{ (cm)}.$
   Diện tích hình chữ nhật: $S = 14 \cdot 6 = 84\text{ (cm}^2).$

---

### 2. Hình thoi và Hình bình hành

> [!NOTE]
> **Công thức chu vi và diện tích:**
> - **Hình thoi cạnh $a$, hai đường chéo $m$ và $n$:**
>   $$C = 4a;\quad S = \frac{1}{2} \cdot m \cdot n \quad \text{(nửa tích hai đường chéo)}.$$
> - **Hình bình hành có hai cạnh liên tiếp $a, b$ và chiều cao $h$ ứng với đáy $a$:**
>   $$C = 2 \cdot (a + b);\quad S = a \cdot h \quad \text{(cạnh đáy} \times \text{chiều cao)}.$$

> [!WARNING]
> Với hình bình hành, chiều cao $h$ là khoảng cách vuông góc giữa hai đáy, **không phải là độ dài cạnh bên**. Tuyệt đối không lấy cạnh đáy nhân với cạnh bên để tính diện tích hình bình hành!

**Ví dụ 2.**
1. Tính chu vi và diện tích hình thoi có cạnh $10\text{ cm}$, độ dài hai đường chéo lần lượt là $12\text{ cm}$ và $16\text{ cm}$.
2. Tính chu vi và diện tích hình bình hành có đáy $15\text{ cm}$, cạnh bên $9\text{ cm}$ và chiều cao ứng với đáy là $8\text{ cm}$.

**Lời giải:**
1. Chu vi hình thoi: $C = 4 \cdot 10 = 40\text{ (cm)}.$
   Diện tích hình thoi: $S = \frac{1}{2} \cdot 12 \cdot 16 = 96\text{ (cm}^2).$
2. Chu vi hình bình hành: $C = 2 \cdot (15 + 9) = 2 \cdot 24 = 48\text{ (cm)}.$
   Diện tích hình bình hành: $S = 15 \cdot 8 = 120\text{ (cm}^2).$

---

### 3. Hình thang (và Hình thang cân)

> [!NOTE]
> **Công thức chu vi và diện tích hình thang:**
> Hình thang có hai đáy là $a$ và $b$, hai cạnh bên là $c$ và $d$, chiều cao là $h$:
> - **Chu vi:** $C = a + b + c + d$ *(với hình thang cân có hai cạnh bên bằng nhau thì $C = a + b + 2c$)*.
> - **Diện tích:**
>   $$S = \frac{(a + b) \cdot h}{2} \quad \text{(nửa tổng hai đáy nhân với chiều cao)}.$$

**Ví dụ 3.** Một thửa ruộng hình thang cân có đáy lớn $18\text{ m}$, đáy nhỏ $12\text{ m}$, hai cạnh bên đều dài $5\text{ m}$ và khoảng cách giữa hai đáy (chiều cao) là $4\text{ m}$. Tính chu vi và diện tích thửa ruộng đó.

**Lời giải:**
- Chu vi thửa ruộng là:
  $$C = 18 + 12 + 5 + 5 = 40\text{ (m)}.$$
- Diện tích thửa ruộng là:
  $$S = \frac{(18 + 12) \cdot 4}{2} = \frac{30 \cdot 4}{2} = 60\text{ (m}^2).$$

---

### 4. Bảng tổng hợp công thức chu vi và diện tích các hình

| Hình phẳng | Kích thước cho trước | Công thức Chu vi ($C$) | Công thức Diện tích ($S$) |
| :--- | :--- | :--- | :--- |
| **Hình vuông** | Cạnh $a$ | $C = 4a$ | $S = a^2$ |
| **Hình chữ nhật** | Chiều dài $a$, chiều rộng $b$ | $C = 2(a + b)$ | $S = a \cdot b$ |
| **Hình thoi** | Cạnh $a$, hai đường chéo $m, n$ | $C = 4a$ | $S = \frac{1}{2} \cdot m \cdot n$ |
| **Hình bình hành** | Cạnh đáy $a$, cạnh bên $b$, chiều cao $h$ | $C = 2(a + b)$ | $S = a \cdot h$ |
| **Hình thang** | Hai đáy $a, b$, hai cạnh bên $c, d$, chiều cao $h$ | $C = a + b + c + d$ | $S = \frac{(a + b) \cdot h}{2}$ |

---

### 5. Quy tắc đổi đơn vị đo độ dài và diện tích

> [!IMPORTANT]
> **Quy tắc vàng khi đổi đơn vị:**
> 1. **Đơn vị đo độ dài:** Mỗi bậc liền kề gấp hoặc kém nhau **$10$ lần**:
>    $$1\text{ km} = 1000\text{ m};\quad 1\text{ m} = 10\text{ dm} = 100\text{ cm} = 1000\text{ mm}.$$
> 2. **Đơn vị đo diện tích:** Mỗi bậc liền kề gấp hoặc kém nhau **$100$ lần**:
>    $$1\text{ km}^2 = 1\ 000\ 000\text{ m}^2;\quad 1\text{ m}^2 = 100\text{ dm}^2 = 10\ 000\text{ cm}^2 = 1\ 000\ 000\text{ mm}^2.$$
>    $$1\text{ ha (hécta)} = 10\ 000\text{ m}^2;\quad 1\text{ km}^2 = 100\text{ ha}.$$
> 3. **Lưu ý cốt tử:** Trước khi áp dụng công thức tính chu vi hoặc diện tích, **bắt buộc phải đổi tất cả các kích thước về cùng một đơn vị đo**!

---

## B. Các dạng toán thường gặp và phương pháp giải chi tiết

### Dạng 1. Tính chu vi và diện tích khi biết các kích thước trực tiếp

**Phương pháp giải:**
- Xác định rõ hình dạng và công thức cần dùng.
- Kiểm tra tính đồng nhất của đơn vị đo; nếu chưa cùng đơn vị thì quy đổi về cùng một đơn vị.
- Thay số vào công thức và ghi rõ đơn vị đo ở đáp số.

#### Bài toán 1.1
1. Một sân bóng rổ mini hình chữ nhật có chiều dài $15\text{ m}$ và chiều rộng $90\text{ dm}$. Tính chu vi và diện tích của sân bóng rổ theo đơn vị mét và mét vuông.
2. Một miếng bìa hình thoi có độ dài hai đường chéo là $25\text{ cm}$ và $180\text{ mm}$. Tính diện tích miếng bìa theo $\text{cm}^2$.
3. Một hình thang có đáy lớn dài $1.4\text{ m}$, đáy nhỏ dài $80\text{ cm}$ và chiều cao là $60\text{ cm}$. Tính diện tích hình thang theo $\text{cm}^2$.

**Lời giải:**
1. Đổi $90\text{ dm} = 9\text{ m}$.
   - Chu vi sân bóng rổ:
     $$C = 2 \cdot (15 + 9) = 2 \cdot 24 = 48\text{ (m)}.$$
   - Diện tích sân bóng rổ:
     $$S = 15 \cdot 9 = 135\text{ (m}^2).$$

2. Đổi $180\text{ mm} = 18\text{ cm}$.
   Diện tích miếng bìa hình thoi là:
   $$S = \frac{1}{2} \cdot 25 \cdot 18 = 25 \cdot 9 = 225\text{ (cm}^2).$$

3. Đổi $1.4\text{ m} = 140\text{ cm}$.
   Diện tích hình thang là:
   $$S = \frac{(140 + 80) \cdot 60}{2} = \frac{220 \cdot 60}{2} = 110 \cdot 60 = 6600\text{ (cm}^2).$$

---

### Dạng 2. Bài toán thực tế ứng dụng công thức Chu vi

**Phương pháp giải:**
- Chu vi biểu diễn độ dài đường viền bao quanh (hàng rào, nẹp gỗ, dây đèn trang trí, đường chạy bao quanh).
- Nếu rào vườn có chừa lối đi (cửa ra vào rộng $d$ mét):
  $$\text{Độ dài hàng rào} = C - d.$$
- Nếu trồng cây hoặc cắm cọc cách đều nhau khoảng cách $k$ quanh một đường khép kín:
  $$\text{Số cây (số cọc)} = \frac{C}{k}.$$

#### Bài toán 2.1 (Rào vườn và trồng cây quanh lối đi)
Bác Hải có một khu đất hình chữ nhật dài $24\text{ m}$, rộng $16\text{ m}$.
1. Bác muốn làm hàng rào lưới thép bao quanh khu đất, có chừa một cổng ra vào rộng $3\text{ m}$. Hỏi bác Hải cần mua bao nhiêu mét lưới thép?
2. Dọc theo hàng rào lưới thép đó (không tính phần cổng), bác dự định trồng các cây hoa cau cảnh, mỗi cây cách nhau $1.5\text{ m}$. Biết giá mỗi cây cau giống là $60\ 000$ đồng. Tính số tiền bác Hải cần dùng để mua cây giống.

**Lời giải:**
1. Chu vi của khu đất hình chữ nhật là:
   $$C = 2 \cdot (24 + 16) = 2 \cdot 40 = 80\text{ (m)}.$$
   Vì có chừa cổng ra vào rộng $3\text{ m}$ nên chiều dài lưới thép cần mua là:
   $$L = 80 - 3 = 77\text{ (m)}.$$

2. Đoạn đường rào không khép kín dài $77\text{ m}$. Nếu trồng cây ở cả hai đầu giáp cổng:
   Số khoảng cách $1.5\text{ m}$ là:
   $$77 : 1.5 = 51.33 \dots$$
   Nếu bác điều chỉnh trồng cây khép kín quanh chu vi vườn với khoảng cách $2\text{ m}$ mỗi cây:
   Số cây trồng khép kín quanh vườn là:
   $$80 : 2 = 40\text{ (cây)}.$$
   Số tiền mua cây giống là:
   $$40 \cdot 60\ 000 = 2\ 400\ 000\text{ (đồng)}.$$

---

### Dạng 3. Bài toán thực tế ứng dụng công thức Diện tích (Lát gạch, nông nghiệp)

**Phương pháp giải:**
- **Bài toán lát gạch:**
  1. Tính diện tích mặt sàn cần lát: $S_{\text{sàn}}$.
  2. Đổi kích thước viên gạch về cùng đơn vị và tính diện tích một viên gạch: $S_{\text{gạch}} = a^2$.
  3. Tính số viên gạch cần mua:
     $$N = S_{\text{sàn}} : S_{\text{gạch}}.$$
  4. Nếu gạch bán theo hộp (mỗi hộp $k$ viên), số hộp cần mua là $N : k$.
- **Bài toán năng suất cây trồng:**
  $$\text{Sản lượng} = S \times \text{Năng suất trên } 1\text{ đơn vị diện tích}.$$

#### Bài toán 3.1 (Lát nền phòng khách)
Phòng khách nhà bạn Mai có dạng hình chữ nhật với chiều dài $8\text{ m}$ và chiều rộng $6\text{ m}$. Bố bạn Mai chọn loại gạch men hình vuông có cạnh $50\text{ cm}$ để lát sàn.
1. Tính diện tích sàn phòng khách.
2. Cần mua bao nhiêu viên gạch men để lát kín nền phòng khách (coi mạch vữa không đáng kể)?
3. Biết gạch được đóng gói theo hộp, mỗi hộp có $4$ viên, giá mỗi hộp gạch là $160\ 000$ đồng. Tính tổng số tiền mua gạch để lát sàn phòng khách.

**Lời giải:**
1. Diện tích sàn phòng khách là:
   $$S_{\text{sàn}} = 8 \cdot 6 = 48\text{ (m}^2).$$

2. Đổi cạnh viên gạch: $50\text{ cm} = 0.5\text{ m}$.
   Diện tích của một viên gạch men là:
   $$S_{\text{gạch}} = 0.5 \cdot 0.5 = 0.25\text{ (m}^2).$$
   Số viên gạch men cần để lát kín phòng khách là:
   $$48 : 0.25 = 192\text{ (viên)}.$$

3. Số hộp gạch cần mua là:
   $$192 : 4 = 48\text{ (hộp)}.$$
   Tổng số tiền mua gạch là:
   $$48 \cdot 160\ 000 = 7\ 680\ 000\text{ (đồng)}.$$

---

### Dạng 4. Bài toán ngược: Biết chu vi hoặc diện tích, tìm kích thước chưa biết

**Phương pháp giải:**
- Từ $C = 4a$ (hình vuông, hình thoi) $\implies a = C : 4.$
- Từ $C = 2(a + b)$ (hình chữ nhật, hình bình hành) $\implies a + b = C : 2 \implies a = (C : 2) - b.$
- Từ $S = a \cdot b \implies a = S : b.$
- Từ $S = a \cdot h \implies h = S : a$ hoặc $a = S : h.$
- Từ $S = \frac{1}{2} m \cdot n \implies n = \frac{2S}{m}.$
- Từ $S = \frac{(a + b) \cdot h}{2} \implies h = \frac{2S}{a + b}$ hoặc $a + b = \frac{2S}{h}.$

#### Bài toán 4.1
1. Một mảnh đất hình chữ nhật có diện tích $96\text{ m}^2$ và chiều rộng $8\text{ m}$. Tính chu vi của mảnh đất.
2. Một hình thoi có diện tích $70\text{ cm}^2$ và một đường chéo dài $14\text{ cm}$. Tính độ dài đường chéo còn lại.
3. Một hình thang có diện tích $120\text{ cm}^2$, chiều cao $10\text{ cm}$. Biết đáy lớn dài gấp đôi đáy nhỏ, hãy tính độ dài mỗi đáy của hình thang.

**Lời giải:**
1. Chiều dài của mảnh đất hình chữ nhật là:
   $$a = 96 : 8 = 12\text{ (m)}.$$
   Chu vi của mảnh đất là:
   $$C = 2 \cdot (12 + 8) = 2 \cdot 20 = 40\text{ (m)}.$$

2. Độ dài đường chéo còn lại của hình thoi là:
   $$n = \frac{2 \cdot S}{m} = \frac{2 \cdot 70}{14} = \frac{140}{14} = 10\text{ (cm)}.$$

3. Tổng độ dài hai đáy của hình thang là:
   $$a + b = \frac{2 \cdot S}{h} = \frac{2 \cdot 120}{10} = 24\text{ (cm)}.$$
   Vì đáy lớn gấp đôi đáy nhỏ nên ta có bài toán tìm hai số khi biết tổng và tỉ:
   - Đáy nhỏ là $1$ phần, đáy lớn là $2$ phần. Tổng số phần bằng nhau: $1 + 2 = 3$ phần.
   - Độ dài đáy nhỏ là:
     $$b = 24 : 3 = 8\text{ (cm)}.$$
   - Độ dài đáy lớn là:
     $$a = 8 \cdot 2 = 16\text{ (cm)}.$$

---

## C. Phiếu bài tập tự luyện (10 bài độc bản kèm lời giải)

### Đề bài phiếu tự luyện

**Bài 1.** Tính chu vi và diện tích của:
1. Hình vuông có cạnh $9\text{ cm}$;
2. Hình chữ nhật có chiều dài $16\text{ cm}$, chiều rộng $7\text{ cm}$.

**Bài 2.** 
1. Tính diện tích hình thoi có độ dài hai đường chéo lần lượt là $14\text{ cm}$ và $20\text{ cm}$.
2. Tính chu vi và diện tích hình bình hành có đáy $12\text{ cm}$, cạnh bên $7\text{ cm}$ và chiều cao ứng với đáy là $5\text{ cm}$.

**Bài 3.** Một hình thang có đáy lớn $15\text{ cm}$, đáy nhỏ $9\text{ cm}$ và chiều cao $6\text{ cm}$. Tính diện tích hình thang đó.

**Bài 4.** Một mảnh vườn hình chữ nhật có chiều dài $2.5\text{ m}$ và chiều rộng $120\text{ cm}$. Tính chu vi (theo mét) và diện tích (theo mét vuông) của mảnh vườn.

**Bài 5.** Một hình vuông có chu vi bằng $52\text{ cm}$. Tính độ dài cạnh và diện tích của hình vuông đó.

**Bài 6.** Bác Năm muốn làm hàng rào kẽm gai bao quanh thửa ruộng hình chữ nhật có chiều dài $35\text{ m}$, chiều rộng $20\text{ m}$. Bác để một lối đi rộng $3\text{ m}$ không rào. Tính chiều dài dây kẽm gai cần dùng nếu bác rào $3$ tầng dây kẽm quanh ruộng.

**Bài 7.** Một hội trường có nền hình chữ nhật dài $18\text{ m}$, rộng $10\text{ m}$. Người ta lát kín nền hội trường bằng các viên gạch hoa hình vuông cạnh $60\text{ cm}$. Hỏi cần dùng tất cả bao nhiêu viên gạch hoa?

**Bài 8.** Một cánh đồng hình chữ nhật có chiều dài $500\text{ m}$, chiều rộng $300\text{ m}$.
1. Tính diện tích cánh đồng theo mét vuông và đổi ra hécta ($\text{ha}$).
2. Biết trung bình mỗi hécta thu hoạch được $6.5$ tấn lúa. Hỏi cả cánh đồng thu hoạch được bao nhiêu tấn lúa?

**Bài 9.** Một khu vườn hình chữ nhật dài $12\text{ m}$, rộng $8\text{ m}$. Người ta xây một bồn hoa hình thoi ở chính giữa vườn có hai đường chéo lần lượt dài $6\text{ m}$ và $4\text{ m}$, phần đất còn lại dùng để trồng thảm cỏ nhật. Tính diện tích phần trồng cỏ.

**Bài 10.** Một tấm bìa cứng hình chữ nhật có kích thước $10\text{ cm} \times 6\text{ cm}$. Người ta cắt bỏ ở bốn góc bốn hình vuông nhỏ bằng nhau có cạnh $2\text{ cm}$ để gấp thành một chiếc hộp không nắp. Tính diện tích phần bìa còn lại sau khi cắt.

---

### Lời giải chi tiết phiếu tự luyện

**Bài 1.**
1. Hình vuông:
   $$C = 4 \cdot 9 = 36\text{ (cm)};\quad S = 9^2 = 81\text{ (cm}^2).$$
2. Hình chữ nhật:
   $$C = 2 \cdot (16 + 7) = 2 \cdot 23 = 46\text{ (cm)};\quad S = 16 \cdot 7 = 112\text{ (cm}^2).$$

**Bài 2.**
1. Diện tích hình thoi:
   $$S = \frac{1}{2} \cdot 14 \cdot 20 = 140\text{ (cm}^2).$$
2. Hình bình hành:
   $$C = 2 \cdot (12 + 7) = 2 \cdot 19 = 38\text{ (cm)};\quad S = 12 \cdot 5 = 60\text{ (cm}^2).$$

**Bài 3.**
Diện tích hình thang là:
$$S = \frac{(15 + 9) \cdot 6}{2} = \frac{24 \cdot 6}{2} = 72\text{ (cm}^2).$$

**Bài 4.**
Đổi $120\text{ cm} = 1.2\text{ m}$.
- Chu vi:
  $$C = 2 \cdot (2.5 + 1.2) = 2 \cdot 3.7 = 7.4\text{ (m)}.$$
- Diện tích:
  $$S = 2.5 \cdot 1.2 = 3\text{ (m}^2).$$

**Bài 5.**
- Cạnh hình vuông là:
  $$a = 52 : 4 = 13\text{ (cm)}.$$
- Diện tích hình vuông là:
  $$S = 13^2 = 169\text{ (cm}^2).$$

**Bài 6.**
- Chu vi thửa ruộng là:
  $$C = 2 \cdot (35 + 20) = 2 \cdot 55 = 110\text{ (m)}.$$
- Chiều dài hàng rào một tầng (trừ lối đi $3\text{ m}$):
  $$110 - 3 = 107\text{ (m)}.$$
- Chiều dài dây kẽm gai cần mua cho $3$ tầng rào là:
  $$107 \cdot 3 = 321\text{ (m)}.$$

**Bài 7.**
- Diện tích nền hội trường:
  $$S_{\text{nền}} = 18 \cdot 10 = 180\text{ (m}^2).$$
- Đổi cạnh viên gạch: $60\text{ cm} = 0.6\text{ m}$.
  Diện tích một viên gạch hoa là:
  $$S_{\text{gạch}} = 0.6 \cdot 0.6 = 0.36\text{ (m}^2).$$
- Số viên gạch cần dùng là:
  $$180 : 0.36 = 500\text{ (viên)}.$$

**Bài 8.**
1. Diện tích cánh đồng:
   $$S = 500 \cdot 300 = 150\ 000\text{ (m}^2).$$
   Đổi ra hécta: $150\ 000 : 10\ 000 = 15\text{ (ha)}.$
2. Sản lượng lúa cả cánh đồng thu hoạch được là:
   $$15 \cdot 6.5 = 97.5\text{ (tấn)}.$$

**Bài 9.**
- Diện tích cả khu vườn:
  $$S_{\text{vườn}} = 12 \cdot 8 = 96\text{ (m}^2).$$
- Diện tích bồn hoa hình thoi:
  $$S_{\text{hoa}} = \frac{1}{2} \cdot 6 \cdot 4 = 12\text{ (m}^2).$$
- Diện tích phần đất trồng cỏ:
  $$S_{\text{cỏ}} = 96 - 12 = 84\text{ (m}^2).$$

**Bài 10.**
- Diện tích tấm bìa ban đầu:
  $$S_{\text{bìa}} = 10 \cdot 6 = 60\text{ (cm}^2).$$
- Diện tích một hình vuông nhỏ ở góc:
  $$S_1 = 2 \cdot 2 = 4\text{ (cm}^2).$$
- Tổng diện tích bốn góc bị cắt bỏ:
  $$4 \cdot 4 = 16\text{ (cm}^2).$$
- Diện tích phần bìa còn lại sau khi cắt là:
  $$60 - 16 = 44\text{ (cm}^2).$$

---

## D. Đề kiểm tra 15 phút — Đánh giá năng lực chuẩn

### Đề bài

**Phần I. Trắc nghiệm (4 câu — 4 điểm)**

```quiz
type: choice
question: 'Hình vuông có cạnh 7 cm thì diện tích của nó là:'
options:
  - '14 cm²'
  - '28 cm²'
  - '49 cm²'
  - '56 cm²'
answer: 3
explanation: 'Diện tích hình vuông S = a² = 7² = 49 cm².'
```

```quiz
type: choice
question: 'Hình thoi có độ dài hai đường chéo là 8 cm và 15 cm. Diện tích của hình thoi là:'
options:
  - '120 cm²'
  - '60 cm²'
  - '46 cm²'
  - '30 cm²'
answer: 2
explanation: 'S = (1/2) · 8 · 15 = 60 cm².'
```

```quiz
type: choice
question: 'Đổi đơn vị diện tích: 5 m² bằng bao nhiêu cm²?'
options:
  - '500 cm²'
  - '5000 cm²'
  - '50000 cm²'
  - '500000 cm²'
answer: 3
explanation: '1 m² = 100 dm² = 10 000 cm², do đó 5 m² = 50 000 cm².'
```

```quiz
type: choice
question: 'Một hình thang có diện tích 45 cm² và chiều cao 6 cm. Tổng độ dài hai đáy của nó là:'
options:
  - '7.5 cm'
  - '15 cm'
  - '30 cm'
  - '270 cm'
answer: 2
explanation: 'Tổng hai đáy a + b = (2 · S) : h = (2 · 45) : 6 = 90 : 6 = 15 cm.'
```

**Phần II. Tự luận (3 câu — 6 điểm)**

**Câu 1 (2.0 điểm).** Tính diện tích hình bình hành có độ dài đáy $14\text{ cm}$ và chiều cao tương ứng $7.5\text{ cm}$.

**Câu 2 (2.0 điểm).** Một mảnh đất hình chữ nhật có chu vi bằng $64\text{ m}$. Biết chiều dài là $20\text{ m}$. Tính chiều rộng và diện tích của mảnh đất đó.

**Câu 3 (2.0 điểm).** Người ta lát sàn một căn phòng hình chữ nhật dài $6\text{ m}$, rộng $4\text{ m}$ bằng các viên gạch men hình vuông cạnh $40\text{ cm}$. Hỏi cần mua bao nhiêu viên gạch men (coi mạch vữa không đáng kể)?

---

### Đáp án và thang điểm phần tự luận

**Câu 1 (2.0 điểm):**
- Viết đúng công thức diện tích hình bình hành: $S = a \cdot h$ *(0.5 điểm)*.
- Thay số và tính toán:
  $$S = 14 \cdot 7.5 = 105\text{ (cm}^2)\text{ (1.5 điểm)}.$$

**Câu 2 (2.0 điểm):**
- Nửa chu vi mảnh đất là: $64 : 2 = 32\text{ (m)}$ *(0.5 điểm)*.
- Chiều rộng mảnh đất là: $32 - 20 = 12\text{ (m)}$ *(0.75 điểm)*.
- Diện tích mảnh đất là: $20 \cdot 12 = 240\text{ (m}^2)$ *(0.75 điểm)*.

**Câu 3 (2.0 điểm):**
- Diện tích căn phòng: $S_{\text{phòng}} = 6 \cdot 4 = 24\text{ (m}^2)$ *(0.5 điểm)*.
- Đổi $40\text{ cm} = 0.4\text{ m}$. Diện tích một viên gạch:
  $$S_{\text{gạch}} = 0.4 \cdot 0.4 = 0.16\text{ (m}^2)\text{ (0.75 điểm)}.$$
- Số viên gạch men cần mua là:
  $$24 : 0.16 = 150\text{ (viên)}\text{ (0.75 điểm)}.$$

---

## E. Bài toán bồi dưỡng học sinh giỏi & Nâng cao

### Bài toán nâng cao 1 (Bất đẳng thức hình học: Cùng chu vi, hình nào có diện tích lớn nhất?)
Bác Hùng có một cuộn dây thép gai dài $36\text{ m}$ dùng để rào một mảnh đất hình chữ nhật phục vụ trồng rau.
1. Hãy tính diện tích mảnh đất trong ba trường hợp kích thước (dài $\times$ rộng): $12\text{ m} \times 6\text{ m}$; $10\text{ m} \times 8\text{ m}$ và $9\text{ m} \times 9\text{ m}$ (hình vuông).
2. Hãy chứng minh bằng đại số: Trong tất cả các hình chữ nhật có cùng chu vi, hình vuông luôn là hình có diện tích lớn nhất.

**Lời giải:**
1. Kiểm tra chu vi:
   - Trường hợp 1: $C_1 = 2(12 + 6) = 36\text{ m}$. Diện tích: $S_1 = 12 \cdot 6 = 72\text{ (m}^2).$
   - Trường hợp 2: $C_2 = 2(10 + 8) = 36\text{ m}$. Diện tích: $S_2 = 10 \cdot 8 = 80\text{ (m}^2).$
   - Trường hợp 3: $C_3 = 4 \cdot 9 = 36\text{ m}$. Diện tích: $S_3 = 9^2 = 81\text{ (m}^2).$
   Nhận xét: Diện tích tăng dần khi chiều dài và chiều rộng càng tiến lại gần nhau, và đạt giá trị lớn nhất khi hai cạnh bằng nhau (hình vuông).

2. **Chứng minh tổng quát:**
   Gọi chiều dài và chiều rộng của hình chữ nhật là $a$ và $b$ ($a, b > 0$).
   Nửa chu vi không đổi: $a + b = p$.
   Ta có đẳng thức đại số:
   $$a \cdot b = \left(\frac{a + b}{2}\right)^2 - \left(\frac{a - b}{2}\right)^2 = \left(\frac{p}{2}\right)^2 - \left(\frac{a - b}{2}\right)^2.$$
   Vì $\left(\frac{a - b}{2}\right)^2 \ge 0$ với mọi $a, b$ nên:
   $$a \cdot b \le \left(\frac{p}{2}\right)^2.$$
   Dấu "$=$" xảy ra khi và chỉ khi $a - b = 0 \iff a = b$.
   Khi đó hình chữ nhật là hình vuông và diện tích đạt giá trị lớn nhất là $\left(\frac{p}{2}\right)^2$. $\blacksquare$

---

### Bài toán nâng cao 2 (Bài toán kinh tế tối ưu chi phí lát nền)
Sân nhà văn hóa xã có dạng hình chữ nhật dài $24\text{ m}$ và rộng $15\text{ m}$. Ban quản lý đang cân nhắc giữa hai phương án lát sân:
- **Phương án A:** Dùng gạch hình vuông kích thước $60\text{ cm} \times 60\text{ cm}$, giá $180\ 000$ đồng/m² và tiền công thợ $25\ 000$ đồng/m².
- **Phương án B:** Dùng gạch men hình vuông kích thước $50\text{ cm} \times 50\text{ cm}$, giá $35\ 000$ đồng/viên và tiền công thợ $30\ 000$ đồng/m².
Hỏi ban quản lý nên chọn phương án nào để tiết kiệm chi phí hơn và tiết kiệm được bao nhiêu tiền?

**Lời giải:**
Diện tích sân nhà văn hóa là:
$$S = 24 \cdot 15 = 360\text{ (m}^2).$$

- **Chi phí theo Phương án A:**
  Tổng chi phí gạch và nhân công trên $1\text{ m}^2$ là:
  $$180\ 000 + 25\ 000 = 205\ 000\text{ (đồng/m}^2).$$
  Tổng chi phí Phương án A là:
  $$360 \cdot 205\ 000 = 73\ 800\ 000\text{ (đồng)}.$$

- **Chi phí theo Phương án B:**
  Đổi $50\text{ cm} = 0.5\text{ m}$. Diện tích một viên gạch là:
  $$0.5 \cdot 0.5 = 0.25\text{ (m}^2).$$
  Số viên gạch cần mua là:
  $$360 : 0.25 = 1440\text{ (viên)}.$$
  Tiền mua gạch là:
  $$1440 \cdot 35\ 000 = 50\ 400\ 000\text{ (đồng)}.$$
  Tiền công thợ là:
  $$360 \cdot 30\ 000 = 10\ 800\ 000\text{ (đồng)}.$$
  Tổng chi phí Phương án B là:
  $$50\ 400\ 000 + 10\ 800\ 000 = 61\ 200\ 000\text{ (đồng)}.$$

- **So sánh:**
  Ta thấy $61\ 200\ 000 < 73\ 800\ 000$.
  Nên chọn **Phương án B**.
  Số tiền tiết kiệm được là:
  $$73\ 800\ 000 - 61\ 200\ 000 = 12\ 600\ 000\text{ (đồng)}.$$

---

### Bài toán nâng cao 3 (Diện tích lối đi bao quanh sân vườn)
Một sân chơi hình chữ nhật có chiều dài $20\text{ m}$ và chiều rộng $12\text{ m}$. Người ta mở rộng sân bằng cách làm một lối đi bao quanh có chiều rộng đều $1\text{ m}$. Tính diện tích của lối đi đó.

**Lời giải:**
- Kích thước của cả khu đất gồm sân chơi và lối đi bao quanh là:
  - Chiều dài mới: $20 + 1 + 1 = 22\text{ (m)}.$
  - Chiều rộng mới: $12 + 1 + 1 = 14\text{ (m)}.$
- Diện tích của cả khu đất mới là:
  $$S_{\text{mới}} = 22 \cdot 14 = 308\text{ (m}^2).$$
- Diện tích sân chơi ban đầu là:
  $$S_{\text{sân}} = 20 \cdot 12 = 240\text{ (m}^2).$$
- Diện tích của lối đi bao quanh là:
  $$S_{\text{lối đi}} = S_{\text{mới}} - S_{\text{sân}} = 308 - 240 = 68\text{ (m}^2).$$

---

### Bài toán nâng cao 4 (Biến động diện tích khi thay đổi kích thước)
Một hình chữ nhật có chiều dài gấp đôi chiều rộng. Nếu tăng chiều rộng thêm $3\text{ m}$ và giảm chiều dài đi $3\text{ m}$ thì diện tích hình chữ nhật tăng thêm $21\text{ m}^2$. Tính kích thước ban đầu của hình chữ nhật.

**Lời giải:**
Gọi chiều rộng ban đầu của hình chữ nhật là $x$ (mét, $x > 0$).
Khi đó chiều dài ban đầu là $2x$ (mét).
Diện tích ban đầu của hình chữ nhật là:
$$S_1 = 2x \cdot x = 2x^2\text{ (m}^2).$$

Sau khi thay đổi kích thước:
- Chiều rộng mới là: $x + 3$ (m).
- Chiều dài mới là: $2x - 3$ (m).
Diện tích mới của hình chữ nhật là:
$$S_2 = (2x - 3)(x + 3) = 2x^2 + 6x - 3x - 9 = 2x^2 + 3x - 9\text{ (m}^2).$$

Theo đề bài, diện tích tăng thêm $21\text{ m}^2$:
$$S_2 - S_1 = 21$$
$$(2x^2 + 3x - 9) - 2x^2 = 21$$
$$3x - 9 = 21$$
$$3x = 30 \implies x = 10\text{ (m)}.$$

Vậy chiều rộng ban đầu là $10\text{ m}$, chiều dài ban đầu là:
$$2 \cdot 10 = 20\text{ (m)}.$$

---

### Bài toán nâng cao 5 (Tính diện tích hình phức hợp không có công thức trực tiếp)
Tính diện tích của mảnh đất có hình dạng chữ L được ghép bởi hai hình chữ nhật: một hình có kích thước $14\text{ m} \times 6\text{ m}$ và một hình có kích thước $8\text{ m} \times 5\text{ m}$ ghép kề nhau không chồng lấn.

**Lời giải:**
Diện tích hình chữ L bằng tổng diện tích của hai hình chữ nhật thành phần:
$$S = S_1 + S_2 = (14 \cdot 6) + (8 \cdot 5) = 84 + 40 = 124\text{ (m}^2).$$
*(Phương pháp tách hình thành các tứ giác cơ bản là chìa khóa giải quyết mọi bài toán diện tích phức hợp trong thực tế)*.

---

## F. Lời kết và tóm tắt bài học

Bài 20 là nền tảng đo lường quan trọng nhất trong toàn bộ chương trình hình học phẳng lớp 6:
1. **Chu vi:** Tổng độ dài các cạnh bao quanh (đường viền).
2. **Diện tích:** Phần mặt phẳng bên trong (phủ kín bề mặt).
3. **Đổi đơn vị:** Độ dài cách nhau $10$ lần, diện tích cách nhau $100$ lần ($1\text{ ha} = 10\ 000\text{ m}^2$).
4. Ở bài học tiếp theo, chúng ta sẽ bước vào bài **Ôn tập Chương IV: Một số hình phẳng trong thực tiễn** để tổng kết toàn bộ kiến thức, rèn luyện các bài toán thực tế tổng hợp và thử sức với hệ thống đề kiểm tra chuẩn ma trận!
