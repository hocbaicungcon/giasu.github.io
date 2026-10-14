---
title: 'Bài 36: Góc - Khái niệm, cách đọc, đếm số góc và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 36 Góc: định nghĩa hai tia chung gốc, đỉnh và cạnh, góc bẹt, điểm trong của góc, công thức đếm n(n-1)/2 góc, 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học
  - Góc
  - Góc bẹt
  - Điểm trong của góc
  - Đếm góc
  - Kết nối tri thức
grade: 6
---

# Bài 36. Góc

Khi quan sát thế giới xung quanh, chúng ta liên tục bắt gặp những hình ảnh quen thuộc: hai chiếc kim đồng hồ cùng gắn vào một trục xoay, hai nan của chiếc quạt giấy xòe ra, hai lưỡi của chiếc kéo khi cắt vải, hay hai mép của một cuốn sách đang mở. Tất cả những hình ảnh trực quan sinh động ấy đều là mô hình thực tế của một hình hình học cơ bản: **Góc**.

Nếu điểm là hạt mầm, đoạn thẳng là nhịp cầu nối thì **góc** chính là "độ mở" không gian tạo bởi hai tia cùng xuất phát từ một điểm. Góc là chiếc chìa khóa đầu tiên mở ra toàn bộ thế giới hình học phẳng từ tam giác, tứ giác cho đến lượng giác và thiên văn học sau này.

Bài học này sẽ trang bị cho các em kiến thức nền tảng vững chắc về khái niệm góc, góc bẹt, điểm trong của góc, làm chủ công thức tổ hợp đếm số góc $\dfrac{n(n - 1)}{2}$ và khám phá $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 36: GÓC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Hình gồm hai tia chung gốc.<br>• Gốc chung: <strong>đỉnh</strong>.<br>• Hai tia: <strong>hai cạnh</strong>.<br>Kí hiệu: $\widehat{xOy},$ $\widehat{yOx}$ hoặc $\widehat{O}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Góc bẹt</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Là góc có hai cạnh là hai tia đối nhau.<br>Hai cạnh của góc bẹt tạo thành một đường thẳng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Điểm trong của góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Điểm $M$ nằm trong $\widehat{xOy}$ (khác góc bẹt) nếu tia $OM$ nằm giữa hai tia $Ox$ và $Oy$. Điểm thuộc cạnh không phải điểm trong.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Công thức đếm góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Với $n$ tia chung gốc đôi một phân biệt, số góc tạo thành là $\dfrac{n(n - 1)}{2}$ góc.</p>
    </div>
  </div>
</div>

---

## Khởi động — Quan sát từ đời sống thực tế (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi gợi mở:

**Câu 1:** Nhắc lại: Thế nào là một tia gốc $O$? Khi vẽ hai tia $Ox$ và $Oy$ cùng xuất phát từ điểm $O,$ hình tạo thành có đặc điểm gì chung?
- *Trả lời:* Tia gốc $O$ là hình gồm điểm $O$ và một phần đường thẳng bị chia ra bởi $O.$ Khi hai tia $Ox$ và $Oy$ cùng xuất phát từ điểm $O,$ chúng có chung điểm gốc $O.$ Hình gồm hai tia chung gốc ấy được gọi là một **góc**.

**Câu 2:** Hãy quan sát mặt đồng hồ treo tường:
- Khi đồng hồ chỉ đúng $3$ giờ, kim giờ và kim phút tạo thành hình ảnh của góc gì quen thuộc?
- Khi đồng hồ chỉ đúng $6$ giờ, kim giờ và kim phút có vị trí như thế nào đối với nhau?
- *Trả lời:* Lúc $3$ giờ, hai kim tạo thành một góc vuông. Lúc $6$ giờ, hai kim tạo thành hai tia đối nhau trên một đường thẳng thẳng đứng, đó chính là hình ảnh của một **góc bẹt**.

**Câu 3:** Khi mở chiếc kéo ra một khoảng nhỏ rồi mở rộng hơn nữa, bộ phận nào của chiếc kéo giữ nguyên vị trí, và bộ phận nào thay đổi?
- *Trả lời:* Chiếc đinh tán (trục xoay) ở giữa giữ nguyên vị trí (đóng vai trò là đỉnh của góc). Hai lưỡi kéo xòe rộng ra (đóng vai trò là hai cạnh của góc).

**Câu 4:** Khi vẽ một góc, vị trí của chữ cái chỉ đỉnh phải được viết như thế nào trong kí hiệu?
- *Trả lời:* Chữ cái chỉ đỉnh của góc **bắt buộc phải viết ở chính giữa**, ví dụ $\widehat{xOy}$ hoặc $\widehat{AOB}.$

**Câu 5:** Nếu vẽ thêm một tia $Oz$ nằm giữa hai tia $Ox$ và $Oy,$ thì trong hình sẽ có tất cả bao nhiêu góc đỉnh $O$?
- *Trả lời:* Có tất cả $3$ góc, gồm hai góc nhỏ $\widehat{xOz},$ $\widehat{zOy}$ và một góc lớn $\widehat{xOy}.$

---

## I. Lý thuyết trọng tâm

### 1. Góc là gì?

> [!NOTE]
> **Định nghĩa:**
> **Góc** là hình gồm hai tia chung gốc.
> - Gốc chung của hai tia được gọi là **đỉnh** của góc.
> - Hai tia được gọi là **hai cạnh** của góc.

```text
               y
              ^
             /
            /
           /
          /
         ●──────────────────────> x
         O
```

- **Tên gọi và kí hiệu:**
  - Góc có đỉnh $O$ và hai cạnh là tia $Ox,$ tia $Oy$ được kí hiệu là:
    $$\widehat{xOy}\quad \text{hoặc}\quad \widehat{yOx}.$$
  - Khi tại đỉnh $O$ chỉ có duy nhất một góc, ta có thể viết gọn là:
    $$\widehat{O}.$$
  - Nếu trên tia $Ox$ lấy điểm $A,$ trên tia $Oy$ lấy điểm $B,$ ta có thể gọi góc đó là:
    $$\widehat{AOB}\quad \text{hoặc}\quad \widehat{BOA}.$$

> [!IMPORTANT]
> **Quy tắc viết kí hiệu:**
> Chữ cái chỉ **đỉnh của góc** luôn luôn phải được viết ở **chính giữa**!
> Ví dụ: viết $\widehat{xOy}$ hoặc $\widehat{AOB},$ tuyệt đối không được viết $\widehat{xyO}$ hay $\widehat{ABO}$ khi muốn chỉ góc đỉnh $O.$

---

### 2. Góc bẹt

> [!NOTE]
> **Định nghĩa:**
> **Góc bẹt** là góc có hai cạnh là hai tia đối nhau.

```text
       y                               O                               x
       <───────────────────────────────●───────────────────────────────>
```

- Khi hai tia $Ox$ và $Oy$ là hai tia đối nhau thì chúng tạo thành đường thẳng $xy.$
- Do đó, **hai cạnh của góc bẹt cùng nằm trên một đường thẳng**.
- Bất kì một điểm $O$ nào nằm trên một đường thẳng đều chia đường thẳng đó thành hai tia đối nhau, và tạo thành một góc bẹt đỉnh $O.$

---

### 3. Điểm nằm trong góc (Điểm trong của góc)

Xét góc $\widehat{xOy}$ **khác góc bẹt** (hai tia $Ox$ và $Oy$ không đối nhau):

> [!NOTE]
> **Định nghĩa:**
> Điểm $M$ (không thuộc tia $Ox,$ không thuộc tia $Oy$) được gọi là **điểm nằm trong góc $\widehat{xOy}$** (hay điểm trong của góc) nếu tia $OM$ nằm giữa hai tia $Ox$ và $Oy.$

```text
               y
              ^
             /      M (nằm trong góc)
            /     ↗
           /    /
          /   /
         ●──/───────────────────> x
         O
                 N (nằm ngoài góc)
```

- **Nhận xét quan trọng:**
  1. Nếu điểm $M$ nằm trong góc $\widehat{xOy}$ thì mọi điểm trên tia $OM$ (khác gốc $O$) đều là điểm nằm trong góc $\widehat{xOy}.$
  2. Điểm nằm trên tia $Ox$ hoặc nằm trên tia $Oy$ **không phải** là điểm nằm trong góc $\widehat{xOy}.$
  3. Điểm không nằm trong góc và cũng không nằm trên hai cạnh của góc thì được gọi là **điểm nằm ngoài góc**.

---

### 4. Công thức đếm số góc tạo bởi các tia chung gốc

> [!IMPORTANT]
> **Định lý đếm góc:**
> Cứ $2$ tia chung gốc bất kì tạo thành đúng $1$ góc.
> Do đó, với $n$ tia chung gốc đôi một phân biệt ($n \ge 2$), số góc được tạo thành là:
> $$N = \dfrac{n(n - 1)}{2}\quad \text{(góc)}.$$

#### Giải thích công thức:
- Chọn tia thứ nhất: có $n$ cách chọn.
- Chọn tia thứ hai để ghép đôi tạo thành góc: có $(n - 1)$ cách chọn.
- Do mỗi góc được tính lặp lại $2$ lần (ví dụ góc tạo bởi tia $Ox$ ghép với tia $Oy$ cũng chính là góc tạo bởi tia $Oy$ ghép với tia $Ox$), nên tổng số góc thực tế là:
  $$N = \dfrac{n(n - 1)}{2}.$$

Bảng tra cứu nhanh số góc:

| Số tia chung gốc ($n$) | Cách tính | Tổng số góc tạo thành |
| :---: | :---: | :---: |
| $2$ tia | $\dfrac{2 \cdot 1}{2}$ | $1$ góc |
| $3$ tia | $\dfrac{3 \cdot 2}{2}$ | $3$ góc |
| $4$ tia | $\dfrac{4 \cdot 3}{2}$ | $6$ góc |
| $5$ tia | $\dfrac{5 \cdot 4}{2}$ | $10$ góc |
| $6$ tia | $\dfrac{6 \cdot 5}{2}$ | $15$ góc |
| $n$ tia | $\dfrac{n(n - 1)}{2}$ | $\dfrac{n(n - 1)}{2}$ góc |

---

> [!WARNING]
> ### Các lỗi sai và bẫy kinh điển:
> 1. **Viết nhầm thứ tự chữ cái:** Đỉnh của góc bị đặt ở đầu hoặc cuối thay vì ở giữa (ví dụ: viết góc $\widehat{MNP}$ nhưng lại có đỉnh là $M$ thay vì $N$).
> 2. **Sót góc khi đếm thủ công:** Khi có $3$ tia chung gốc $Ox, Oy, Oz$ (theo thứ tự), học sinh rất hay chỉ đếm $2$ góc nhỏ $\widehat{xOy}$ và $\widehat{yOz}$ mà bỏ quên góc lớn $\widehat{xOz}.$
> 3. **Nhầm lẫn điểm thuộc cạnh là điểm trong góc:** Điểm nằm trên tia $Ox$ (cạnh của góc) không thuộc miền trong của góc.
> 4. **Quên chia đôi khi đếm:** Khi tính tổ hợp cặp tia, quên không chia cho $2,$ dẫn đến kết quả bị gấp đôi.

---

## II. Các dạng bài tập điển hình

### Dạng 1: Nhận biết, đọc tên và kí hiệu góc

#### Phương pháp giải:
- Tìm gốc chung của hai tia $\implies$ đó là **đỉnh**.
- Xác định hai tia xuất phát từ đỉnh $\implies$ đó là **hai cạnh**.
- Kí hiệu góc: đặt chữ cái chỉ đỉnh ở giữa hai chữ cái chỉ hai cạnh (hoặc hai điểm thuộc hai cạnh).

---

#### Ví dụ 1:
Quan sát hình vẽ dưới đây, hãy đọc tên các góc, chỉ ra đỉnh và hai cạnh của mỗi góc:
a) Góc tạo bởi hai tia $Om$ và $On.$
b) Góc tạo bởi hai tia $Pa$ và $Pb.$

**Lời giải:**
a) Góc tạo bởi hai tia $Om$ và $On$ có:
- Đỉnh: Điểm $O.$
- Hai cạnh: Tia $Om$ và tia $On.$
- Kí hiệu: $\widehat{mOn}$ hoặc $\widehat{nOm}.$

b) Góc tạo bởi hai tia $Pa$ và $Pb$ có:
- Đỉnh: Điểm $P.$
- Hai cạnh: Tia $Pa$ và tia $Pb.$
- Kí hiệu: $\widehat{aPb}$ hoặc $\widehat{bPa}.$

---

#### Bài tập tự luyện Dạng 1:
- **Bài 1.1:** Vẽ góc $\widehat{uIv}.$ Chỉ ra đỉnh và hai cạnh của góc. Lấy điểm $A$ thuộc cạnh $Iu$ và điểm $B$ thuộc cạnh $Iv.$ Viết thêm một cách gọi khác cho góc $\widehat{uIv}.$
  *(Trả lời: Đỉnh $I,$ hai cạnh $Iu, Iv;$ cách gọi khác: $\widehat{AIB}$ hoặc $\widehat{BIA}$).*

---

### Dạng 2: Đếm số góc tạo bởi $n$ tia chung gốc

#### Phương pháp giải:
- **Bài toán thuận (Biết số tia $n,$ tìm số góc $N$):**
  Áp dụng trực tiếp công thức:
  $$N = \dfrac{n(n - 1)}{2}.$$
- **Bài toán nghịch (Biết số góc $N,$ tìm số tia $n$):**
  Nhân đôi số góc: $n(n - 1) = 2N.$
  Phân tích số $2N$ thành tích của hai số tự nhiên liên tiếp để tìm $n.$

---

#### Ví dụ 2 (Bài toán thuận):
Cho $5$ tia chung gốc $Oa, Ob, Oc, Od, Oe$ đôi một phân biệt.
a) Có tất cả bao nhiêu góc đỉnh $O$ được tạo thành?
b) Hãy kể tên cụ thể tất cả các góc đó.

**Lời giải:**
a) Với $n = 5$ tia chung gốc đôi một phân biệt, số góc tạo thành là:
$$N = \dfrac{5 \cdot (5 - 1)}{2} = \dfrac{5 \cdot 4}{2} = 10\quad \text{(góc)}.$$

b) Liệt kê $10$ góc theo từng cặp tia:
- Ghép tia $Oa$ với $4$ tia còn lại: $\widehat{aOb},\; \widehat{aOc},\; \widehat{aOd},\; \widehat{aOe}$ ($4$ góc).
- Ghép tia $Ob$ với các tia tiếp theo: $\widehat{bOc},\; \widehat{bOd},\; \widehat{bOe}$ ($3$ góc).
- Ghép tia $Oc$ với các tia tiếp theo: $\widehat{cOd},\; \widehat{cOe}$ ($2$ góc).
- Ghép tia $Od$ với tia cuối cùng: $\widehat{dOe}$ ($1$ góc).
Tổng cộng: $4 + 3 + 2 + 1 = 10$ góc.

---

#### Ví dụ 3 (Bài toán nghịch):
Từ một điểm $O$ trên mặt phẳng, người ta vẽ một số tia phân biệt chung gốc. Biết rằng chúng tạo thành tất cả $36$ góc đỉnh $O.$ Hỏi có bao nhiêu tia được vẽ?

**Lời giải:**
Gọi số tia chung gốc cần tìm là $n$ ($n \in \mathbb{N},\; n \ge 2$).
Số góc tạo thành từ $n$ tia chung gốc là:
$$\dfrac{n(n - 1)}{2} = 36.$$
Suy ra:
$$n(n - 1) = 36 \cdot 2 = 72.$$
Ta thấy $n$ và $(n - 1)$ là hai số tự nhiên liên tiếp có tích bằng $72.$
Vì $9 \cdot 8 = 72$ nên:
$$n = 9.$$
Vậy có tất cả $9$ tia chung gốc.

---

#### Bài tập tự luyện Dạng 2:
- **Bài 2.1:** Cho $7$ tia chung gốc đôi một phân biệt. Có bao nhiêu góc được tạo thành?
  *(Đáp số: $\dfrac{7 \cdot 6}{2} = 21$ góc).*
- **Bài 2.2:** Có bao nhiêu tia chung gốc đôi một phân biệt nếu chúng tạo thành $55$ góc?
  *(Đáp số: $n(n - 1) = 110 = 11 \cdot 10 \implies n = 11$ tia).*

---

### Dạng 3: Điểm nằm trong góc và vị trí tương đối

#### Phương pháp giải:
- Để xác định điểm $M$ có nằm trong góc $\widehat{xOy}$ (khác góc bẹt) hay không:
  - Vẽ tia $OM.$
  - Quan sát xem tia $OM$ có nằm giữa hai tia $Ox$ và $Oy$ hay không.
  - Nếu tia $OM$ nằm giữa hai tia $Ox$ và $Oy$ thì điểm $M$ nằm trong góc.
  - Nếu tia $OM$ trùng với tia $Ox$ hoặc $Oy$ thì $M$ nằm trên cạnh của góc.
  - Ngược lại thì $M$ nằm ngoài góc.

---

#### Ví dụ 4:
Cho góc $\widehat{xOy}$ khác góc bẹt. Vẽ tia $Oz$ nằm giữa hai tia $Ox$ và $Oy.$ Trên tia $Oz$ lấy điểm $M$ (khác $O$). Trên tia đối của tia $Oz$ lấy điểm $N.$
a) Hình vẽ có bao nhiêu góc đỉnh $O$? Kể tên các góc đó.
b) Điểm $M$ nằm trong góc nào?
c) Điểm $N$ có nằm trong góc $\widehat{xOy}$ không? Vì sao?

**Lời giải:**
a) Hình vẽ có $4$ tia chung gốc là $Ox, Oy, Oz$ và tia đối của tia $Oz$ (gọi là tia $Oz'$).
Số góc tạo thành là:
$$\dfrac{4 \cdot 3}{2} = 6\quad \text{(góc)}.$$
Các góc đó là: $\widehat{xOz},\; \widehat{zOy},\; \widehat{xOy},\; \widehat{xOz'},\; \widehat{yOz'},\; \widehat{zOz'}.$

b) Vì tia $Oz$ nằm giữa hai tia $Ox$ và $Oy,$ mà điểm $M$ thuộc tia $Oz$ nên **điểm $M$ nằm trong góc $\widehat{xOy}$**.

c) Vì tia đối của tia $Oz$ (chứa điểm $N$) hướng sang phía đối diện, không đi vào miền giữa hai tia $Ox$ và $Oy$ nên tia $ON$ không nằm giữa hai tia $Ox$ và $Oy.$ Do đó **điểm $N$ không nằm trong góc $\widehat{xOy}$** (điểm $N$ nằm ngoài góc).

---

### Dạng 4: Nhận biết góc bẹt và các đường thẳng cắt nhau

#### Phương pháp giải:
- Hai tia đối nhau luôn tạo thành một góc bẹt.
- Một đường thẳng đi qua điểm $O$ tạo ra đúng $1$ góc bẹt đỉnh $O.$
- Nếu có $k$ đường thẳng cùng đi qua điểm $O$ (cắt nhau tại $O$):
  - Số tia gốc $O$ tạo thành là $2k$ tia.
  - Số góc bẹt đỉnh $O$ tạo thành đúng bằng $k$ góc bẹt.

---

#### Ví dụ 5:
Cho hai đường thẳng $xy$ và $uv$ cắt nhau tại điểm $O.$
a) Điểm $O$ là gốc chung của mấy tia? Kể tên các tia đó.
b) Có bao nhiêu góc đỉnh $O$ được tạo thành? Trong đó có bao nhiêu góc bẹt?

**Lời giải:**
a) Hai đường thẳng cắt nhau tại $O$ tạo thành $4$ tia chung gốc $O$:
Tia $Ox,$ tia $Oy,$ tia $Ou,$ tia $Ov.$

b)
- Số góc đỉnh $O$ được tạo thành từ $4$ tia là:
  $$\dfrac{4 \cdot 3}{2} = 6\quad \text{(góc)}.$$
- Các góc đó là: $\widehat{xOu},\; \widehat{uOy},\; \widehat{yOv},\; \widehat{vOx}$ và hai góc bẹt $\widehat{xOy},\; \widehat{uOv}.$
- Như vậy trong $6$ góc tạo thành, có đúng **$2$ góc bẹt** (ứng với hai đường thẳng $xy$ và $uv$).

---

### Dạng 5: Bài toán ứng dụng đời sống

#### Ví dụ 6:
Một chiếc camera an ninh gắn trên góc tường phòng khách có góc quét tối đa là góc $\widehat{xOy}.$
a) Một chú mèo ngồi tại vị trí $A$ sao cho tia nối từ camera tới chú mèo nằm giữa hai tia $Ox$ và $Oy.$ Hỏi camera có quan sát được chú mèo không?
b) Nếu chú mèo chạy ra vị trí $B$ nằm trên mép tia $Ox,$ chú mèo có nằm trong tầm quét góc của camera không?

**Lời giải:**
a) Vì tia nối từ camera tới chú mèo (tia $OA$) nằm giữa hai tia biên $Ox$ và $Oy$ nên vị trí $A$ của chú mèo nằm trong góc quét $\widehat{xOy}.$ Camera quan sát được chú mèo.
b) Khi chú mèo ở vị trí $B$ nằm trên tia $Ox,$ chú mèo nằm ngay trên đường biên (cạnh của góc quét) của camera. Về mặt quang học, camera vẫn ghi nhận được hình ảnh ở đường biên này, nhưng về mặt hình học, điểm $B$ nằm trên cạnh của góc chứ không phải là điểm nằm trong góc.

---

## III. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Bài toán tăng giảm số tia và biến thiên số góc

#### Bài toán:
Cho một số tia chung gốc phân biệt.
a) Nếu vẽ thêm $1$ tia chung gốc nữa (không trùng với các tia đã có) thì số góc đỉnh đó tăng thêm bao nhiêu?
b) Cho $n$ tia chung gốc đôi một phân biệt. Nếu vẽ thêm $3$ tia chung gốc nữa thì số góc tăng thêm $24$ góc. Hỏi ban đầu có bao nhiêu tia?

**Lời giải:**
a) Giả sử ban đầu có $n$ tia chung gốc.
Số góc ban đầu là:
$$N_1 = \dfrac{n(n - 1)}{2}.$$
Khi vẽ thêm $1$ tia mới, tia mới này sẽ kết hợp với mỗi tia trong số $n$ tia cũ để tạo ra thêm đúng $n$ góc mới.
Thật vậy:
$$N_2 = \dfrac{(n + 1)n}{2} = \dfrac{n^2 + n}{2} = \dfrac{n(n - 1)}{2} + n = N_1 + n.$$
Vậy khi vẽ thêm $1$ tia thì số góc tăng thêm đúng bằng **$n$ góc** (bằng số lượng tia có trước đó).

b) Ban đầu có $n$ tia, sau khi vẽ thêm $3$ tia thì có $(n + 3)$ tia.
Số góc lúc sau là:
$$N_2 = \dfrac{(n + 3)(n + 2)}{2}.$$
Số góc tăng thêm là:
$$\Delta N = N_2 - N_1 = \dfrac{(n + 3)(n + 2)}{2} - \dfrac{n(n - 1)}{2}.$$
Khai triển và rút gọn tử số:
$$(n + 3)(n + 2) - n(n - 1) = (n^2 + 5n + 6) - (n^2 - n) = 6n + 6.$$
Do đó:
$$\Delta N = \dfrac{6n + 6}{2} = 3n + 3.$$
Theo đề bài, số góc tăng thêm là $24,$ nên ta có phương trình:
$$3n + 3 = 24 \implies 3n = 21 \implies n = 7.$$
Vậy ban đầu có tất cả **$7$ tia**.

---

### Chuyên đề 2: Góc tạo bởi các đường thẳng đồng quy tại một điểm

> [!IMPORTANT]
> **Định lý tổng quát cho $k$ đường thẳng đồng quy:**
> Cho $k$ đường thẳng phân biệt cùng đi qua một điểm $O$ ($k \ge 2$).
> Khi đó:
> 1. Số tia gốc $O$ tạo thành là: $2k$ tia.
> 2. Tổng số góc đỉnh $O$ tạo thành là:
>    $$N_{\text{tổng}} = \dfrac{2k(2k - 1)}{2} = k(2k - 1)\quad \text{(góc)}.$$
> 3. Số góc bẹt đỉnh $O$ là: $k$ góc bẹt.
> 4. Số góc khác góc bẹt đỉnh $O$ là:
>    $$N_{\text{khác bẹt}} = k(2k - 1) - k = 2k(k - 1)\quad \text{(góc)}.$$

#### Bài toán áp dụng:
Cho $5$ đường thẳng phân biệt cùng đi qua điểm $O.$
a) Hình vẽ có bao nhiêu tia gốc $O$?
b) Có tất cả bao nhiêu góc đỉnh $O$?
c) Trong đó có bao nhiêu góc bẹt và bao nhiêu góc không phải là góc bẹt?

**Lời giải:**
Áp dụng định lý với $k = 5$:
a) Mỗi đường thẳng chứa điểm $O$ tạo ra $2$ tia đối nhau gốc $O.$
Do đó, $5$ đường thẳng tạo ra:
$$2 \cdot 5 = 10\quad \text{tia gốc } O.$$

b) Số góc đỉnh $O$ tạo thành từ $10$ tia là:
$$N_{\text{tổng}} = \dfrac{10 \cdot (10 - 1)}{2} = \dfrac{10 \cdot 9}{2} = 45\quad \text{(góc)}.$$

c)
- Mỗi đường thẳng tạo thành đúng $1$ góc bẹt đỉnh $O,$ nên có **$5$ góc bẹt**.
- Số góc không phải là góc bẹt là:
$$45 - 5 = 40\quad \text{(góc)}.$$

---

### Chuyên đề 3: Phân chia mặt phẳng bởi các tia chung gốc

#### Bài toán:
Cho $n$ tia chung gốc đôi một phân biệt trên mặt phẳng sao cho không có hai tia nào đối nhau ($n \ge 3$).
a) Các tia này chia mặt phẳng thành bao nhiêu miền góc không giao nhau (các góc không chứa tia nào khác ở giữa)?
b) Nếu vẽ thêm một đường thẳng cắt tất cả $n$ tia đó tại $n$ điểm phân biệt, đường thẳng đó bị chia thành bao nhiêu đoạn thẳng?

**Lời giải:**
a) Giả sử $n$ tia phân biệt được sắp xếp theo chiều kim đồng hồ quanh gốc $O$: $Ot_1, Ot_2, \dots, Ot_n.$
- Khoảng không giữa tia $Ot_1$ và $Ot_2$ tạo thành $1$ góc đơn.
- Khoảng không giữa tia $Ot_2$ và $Ot_3$ tạo thành $1$ góc đơn.
- ...
- Khoảng không giữa tia $Ot_n$ và $Ot_1$ tạo thành $1$ góc đơn cuối cùng để khép kín một vòng quanh đỉnh $O.$
Như vậy, $n$ tia chung gốc chia mặt phẳng xung quanh đỉnh $O$ thành đúng **$n$ góc đơn** (các góc kề nhau không có tia ở giữa).

b) Khi một đường thẳng $d$ cắt $n$ tia tại $n$ điểm phân biệt $A_1, A_2, \dots, A_n$:
- Số điểm phân biệt trên đường thẳng là $n$ điểm.
- Số đoạn thẳng tạo thành từ $n$ điểm này chính là:
$$\dfrac{n(n - 1)}{2}\quad \text{(đoạn thẳng)}.$$
Điều này cho thấy mối liên hệ tương ứng $1 - 1$ tuyệt đẹp giữa số góc tạo bởi $n$ tia chung gốc và số đoạn thẳng tạo bởi $n$ giao điểm trên một cát tuyến!

---

### Chuyên đề 4: Đếm góc trong hình đa giác có các đường chéo

#### Bài toán:
Cho tam giác $ABC.$ Lấy một điểm $D$ nằm trên cạnh $BC$ ($D$ khác $B$ và $C$). Nối $A$ với $D.$
a) Hình vẽ có bao nhiêu góc đỉnh $A$? Kể tên các góc đó.
b) Hình vẽ có bao nhiêu góc đỉnh $D$? Kể tên các góc đó.
c) Có tất cả bao nhiêu góc trong toàn bộ hình vẽ (tính tất cả các đỉnh $A, B, C, D$ và các góc nhỏ hơn hoặc bằng góc bẹt)?

**Lời giải:**

```text
                 A
                /|\
               / | \
              /  |  \
             /   |   \
            ●────●────●
            B    D    C
```

a) **Tại đỉnh $A$:**
Có $3$ tia xuất phát từ $A$ là $AB, AD, AC.$
Số góc đỉnh $A$ là:
$$\dfrac{3 \cdot 2}{2} = 3\quad \text{góc:}\quad \widehat{BAD},\; \widehat{DAC},\; \widehat{BAC}.$$

b) **Tại đỉnh $D$:**
Có $3$ tia xuất phát từ $D$ là $DB, DC, DA.$
Số góc đỉnh $D$ là:
$$\dfrac{3 \cdot 2}{2} = 3\quad \text{góc:}\quad \widehat{ADB},\; \widehat{ADC},\; \widehat{BDC}\; \text{(góc bẹt)}.$$

c) **Tại đỉnh $B$:**
Có $2$ tia là $BA$ và $BC$ (trùng $BD$), tạo thành đúng $1$ góc: $\widehat{B}$ (hay $\widehat{ABC}$).

d) **Tại đỉnh $C$:**
Có $2$ tia là $CA$ và $CB$ (trùng $CD$), tạo thành đúng $1$ góc: $\widehat{C}$ (hay $\widehat{ACB}$).

**Tổng cộng số góc trong toàn hình là:**
$$3 + 3 + 1 + 1 = 8\quad \text{(góc)}.$$

---

### Chuyên đề 5: Chuyên đề góc tạo bởi kim giờ và kim phút của đồng hồ

Mặt đồng hồ hình tròn được chia thành $12$ khoảng giờ bằng nhau. Toàn bộ một vòng tròn tương ứng với hai góc bẹt ghép lại ($360^\circ$).
- Mỗi khoảng cách giữa hai số liền nhau trên mặt đồng hồ ứng với $\dfrac{1}{12}$ vòng tròn.
- Cứ sau $1$ giờ ($60$ phút):
  - Kim phút quay được đúng $1$ vòng ($12$ khoảng số).
  - Kim giờ quay được đúng $1$ khoảng số.
  - Vận tốc của kim phút nhanh gấp $12$ lần kim giờ.

#### Bài toán:
Tại các thời điểm sau, hai kim giờ và kim phút tạo thành hình ảnh của góc gì?
a) Lúc $6$ giờ đúng.
b) Lúc $3$ giờ đúng và lúc $9$ giờ đúng.
c) Lúc $4$ giờ đúng.
d) Có bao nhiêu lần trong một ngày đêm ($24$ giờ) hai kim đồng hồ tạo thành góc bẹt (nằm thẳng hàng đối nhau)?

**Lời giải:**
a) **Lúc $6$ giờ đúng:**
Kim phút chỉ đúng số $12,$ kim giờ chỉ đúng số $6.$
Hai kim tạo thành hai tia đối nhau trên một đường thẳng thẳng đứng. Do đó hai kim tạo thành một **góc bẹt**.

b) **Lúc $3$ giờ đúng (và $9$ giờ đúng):**
Khoảng cách giữa hai kim là $3$ khoảng số, bằng $\dfrac{3}{12} = \dfrac{1}{4}$ vòng tròn. Hai kim tạo thành một **góc vuông**.

c) **Lúc $4$ giờ đúng:**
Khoảng cách giữa hai kim là $4$ khoảng số, bằng $\dfrac{4}{12} = \dfrac{1}{3}$ vòng tròn. Góc tạo thành lớn hơn góc vuông nhưng nhỏ hơn góc bẹt (góc tù).

d) **Số lần hai kim tạo thành góc bẹt trong $24$ giờ:**
- Trong $1$ giờ, kim phút quay được $1$ vòng, kim giờ quay được $\dfrac{1}{12}$ vòng.
- Tốc độ tương đối của kim phút so với kim giờ là:
$$1 - \dfrac{1}{12} = \dfrac{11}{12}\quad \text{(vòng/giờ)}.$$
- Trong $12$ giờ, số lần hai kim tạo thành một vị trí đối nhau (góc bẹt) là:
$$12 \cdot \dfrac{11}{12} = 11\quad \text{lần}.$$
- Vậy trong một ngày đêm ($24$ giờ), hai kim đồng hồ tạo thành góc bẹt tất cả:
$$11 \cdot 2 = 22\quad \text{lần}.$$

---

## IV. 10 Câu hỏi trắc nghiệm tương tác

```quiz
type: choice
question: 'Góc là hình gồm:'
options:
  - 'Hai đường thẳng song song'
  - 'Hai tia chung gốc'
  - 'Hai đoạn thẳng bằng nhau'
  - 'Ba điểm thẳng hàng'
answer: 2
explanation: 'Theo định nghĩa trong SGK Toán 6: Góc là hình gồm hai tia chung gốc.'
```

```quiz
type: choice
question: 'Trong kí hiệu góc xOy, chữ cái nào chỉ đỉnh của góc?'
options:
  - 'Chữ x'
  - 'Chữ y'
  - 'Chữ O'
  - 'Cả x và y'
answer: 3
explanation: 'Trong kí hiệu góc xOy, chữ cái ở chính giữa luôn là đỉnh của góc, tức điểm O.'
```

```quiz
type: choice
question: 'Góc bẹt là góc có đặc điểm nào sau đây?'
options:
  - 'Hai cạnh là hai tia trùng nhau'
  - 'Hai cạnh là hai tia đối nhau'
  - 'Hai cạnh vuông góc với nhau'
  - 'Hai cạnh cắt nhau tại hai điểm'
answer: 2
explanation: 'Góc bẹt là góc có hai cạnh là hai tia đối nhau; hai cạnh này nằm trên cùng một đường thẳng.'
```

```quiz
type: choice
question: 'Cho 4 tia chung gốc đôi một phân biệt. Số góc tạo thành là:'
options:
  - '4 góc'
  - '6 góc'
  - '8 góc'
  - '12 góc'
answer: 2
explanation: 'Áp dụng công thức n(n - 1)/2 với n = 4: N = 4 * 3 / 2 = 6 góc.'
```

```quiz
type: choice
question: 'Một số tia chung gốc đôi một phân biệt tạo thành 15 góc. Số tia chung gốc đó là:'
options:
  - '5 tia'
  - '6 tia'
  - '7 tia'
  - '8 tia'
answer: 2
explanation: 'Ta có n(n - 1)/2 = 15 => n(n - 1) = 30 = 6 * 5 => n = 6 tia.'
```

```quiz
type: choice
question: 'Điểm M nằm trong góc xOy (khác góc bẹt) khi:'
options:
  - 'Điểm M nằm trên tia Ox'
  - 'Điểm M nằm trên tia Oy'
  - 'Tia OM nằm giữa hai tia Ox và Oy'
  - 'Điểm M trùng với đỉnh O'
answer: 3
explanation: 'Điểm M được gọi là điểm nằm trong góc xOy khi tia OM nằm giữa hai tia Ox và Oy.'
```

```quiz
type: choice
question: 'Ba đường thẳng phân biệt cùng đi qua một điểm O. Số góc bẹt đỉnh O được tạo thành là:'
options:
  - '1 góc'
  - '2 góc'
  - '3 góc'
  - '6 góc'
answer: 3
explanation: 'Mỗi đường thẳng đi qua điểm O tạo thành đúng 1 góc bẹt đỉnh O. Do đó 3 đường thẳng tạo thành đúng 3 góc bẹt.'
```

```quiz
type: choice
question: 'Lúc 6 giờ đúng, hai kim giờ và kim phút của đồng hồ tạo thành:'
options:
  - 'Góc nhọn'
  - 'Góc vuông'
  - 'Góc bẹt'
  - 'Không tạo thành góc'
answer: 3
explanation: 'Lúc 6 giờ, kim phút chỉ số 12 và kim giờ chỉ số 6, tạo thành hai tia đối nhau nên là góc bẹt.'
```

```quiz
type: choice
question: 'Nếu có 8 tia chung gốc đôi một phân biệt thì số góc tạo thành là:'
options:
  - '28 góc'
  - '32 góc'
  - '56 góc'
  - '16 góc'
answer: 1
explanation: 'Áp dụng công thức n(n - 1)/2 với n = 8: N = 8 * 7 / 2 = 28 góc.'
```

```quiz
type: choice
question: 'Cho góc xOy khác góc bẹt và điểm A nằm trên tia Ox (A khác O). Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'Điểm A nằm trong góc xOy'
  - 'Điểm A không phải là điểm nằm trong góc xOy'
  - 'Điểm A nằm ngoài góc xOy'
  - 'Tia OA nằm giữa hai tia Ox và Oy'
answer: 2
explanation: 'Điểm nằm trên một cạnh của góc không được tính là điểm nằm trong góc.'
```

---

## V. Đề kiểm tra 15 phút tự luyện có hướng dẫn chấm

### Phần 1: Trắc nghiệm (4 câu — 3,0 điểm)

**Câu 1 (0,75 điểm):** Góc tạo bởi hai tia đối nhau là:
A. Góc vuông
B. Góc nhọn
C. Góc bẹt
D. Góc tù

**Câu 2 (0,75 điểm):** Với $6$ tia chung gốc đôi một phân biệt, số góc tạo thành là:
A. $12$
B. $15$
C. $30$
D. $36$

**Câu 3 (0,75 điểm):** Cho góc $\widehat{mOn}.$ Cách viết nào sau đây chỉ đúng đỉnh của góc?
A. Đỉnh $m$
B. Đỉnh $n$
C. Đỉnh $O$
D. Đỉnh $mn$

**Câu 4 (0,75 điểm):** Điểm $K$ nằm trong góc $\widehat{aOb}$ (khác góc bẹt) thì tia nào nằm giữa hai tia còn lại?
A. Tia $Oa$ nằm giữa $Ob$ và $OK$
B. Tia $Ob$ nằm giữa $Oa$ và $OK$
C. Tia $OK$ nằm giữa $Oa$ và $Ob$
D. Không có tia nào nằm giữa

---

### Phần 2: Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):**
Vẽ góc $\widehat{xOy}$ khác góc bẹt.
a) Chỉ ra đỉnh và hai cạnh của góc.
b) Lấy điểm $P$ nằm trong góc $\widehat{xOy},$ điểm $Q$ nằm trên cạnh $Ox,$ và điểm $R$ nằm ngoài góc $\widehat{xOy}.$

**Bài 2 (2,0 điểm):**
Cho $4$ tia chung gốc $Ox, Oy, Oz, Ot$ đôi một phân biệt.
a) Có bao nhiêu góc được tạo thành?
b) Hãy viết kí hiệu của tất cả các góc đó.

**Bài 3 (1,5 điểm):**
Cho hai đường thẳng $ab$ và $cd$ cắt nhau tại điểm $I.$
a) Điểm $I$ là gốc chung của mấy tia?
b) Có bao nhiêu góc đỉnh $I$ được tạo thành? Trong đó có bao nhiêu góc bẹt?

**Bài 4 (1,5 điểm — Vận dụng cao):**
Cho trước một số tia chung gốc phân biệt. Nếu vẽ thêm $2$ tia chung gốc nữa thì số góc tăng thêm $15$ góc. Hỏi ban đầu có bao nhiêu tia?

---

### Đáp án và Thang điểm chi tiết

#### Phần 1: Trắc nghiệm (3,0 điểm)
- Câu 1: **C** (Góc bẹt). *(0,75 điểm)*
- Câu 2: **B** ($N = \dfrac{6 \cdot 5}{2} = 15$). *(0,75 điểm)*
- Câu 3: **C** (Đỉnh $O$). *(0,75 điểm)*
- Câu 4: **C** (Tia $OK$ nằm giữa $Oa$ và $Ob$). *(0,75 điểm)*

#### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) Góc $\widehat{xOy}$ có:
  - Đỉnh là điểm $O.$ *(0,5 điểm)*
  - Hai cạnh là tia $Ox$ và tia $Oy.$ *(0,5 điểm)*
- b) Vẽ hình đúng:
  - Điểm $P$ sao cho tia $OP$ đi vào phần giữa hai tia $Ox$ và $Oy.$ *(0,5 điểm)*
  - Điểm $Q$ thuộc tia $Ox,$ điểm $R$ nằm ngoài góc. *(0,5 điểm)*

**Bài 2 (2,0 điểm):**
- a) Số góc tạo thành là:
  $$\dfrac{4 \cdot (4 - 1)}{2} = \dfrac{4 \cdot 3}{2} = 6\quad \text{(góc)}.$$ *(1,0 điểm)*
- b) Kể đủ $6$ góc: $\widehat{xOy},\; \widehat{xOz},\; \widehat{xOt},\; \widehat{yOz},\; \widehat{yOt},\; \widehat{zOt}.$ *(1,0 điểm)*

**Bài 3 (1,5 điểm):**
- a) Hai đường thẳng $ab$ và $cd$ cắt nhau tại $I$ tạo thành $4$ tia chung gốc: tia $Ia,$ tia $Ib,$ tia $Ic,$ tia $Id.$ *(0,5 điểm)*
- b) Số góc tạo thành từ $4$ tia là: $\dfrac{4 \cdot 3}{2} = 6$ góc. *(0,5 điểm)*
  Trong đó có đúng **$2$ góc bẹt** (là góc $\widehat{aIb}$ và góc $\widehat{cId}$). *(0,5 điểm)*

**Bài 4 (1,5 điểm):**
- Gọi số tia ban đầu là $n$ ($n \in \mathbb{N},\; n \ge 2$).
  Số góc ban đầu: $N_1 = \dfrac{n(n - 1)}{2}.$ *(0,25 điểm)*
- Khi vẽ thêm $2$ tia, tổng số tia là $n + 2.$
  Số góc lúc sau: $N_2 = \dfrac{(n + 2)(n + 1)}{2}.$ *(0,25 điểm)*
- Số góc tăng thêm là:
  $$N_2 - N_1 = \dfrac{(n^2 + 3n + 2) - (n^2 - n)}{2} = \dfrac{4n + 2}{2} = 2n + 1.$$ *(0,5 điểm)*
- Theo đề bài:
  $$2n + 1 = 15 \implies 2n = 14 \implies n = 7.$$
  Vậy ban đầu có **$7$ tia**. *(0,5 điểm)*
