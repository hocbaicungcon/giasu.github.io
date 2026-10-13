---
title: 'Toán 7 Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc - Lý thuyết, Tính chất và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 8 Góc ở vị trí đặc biệt và Tia phân giác: hai góc kề bù, hai góc đối đỉnh, tính chất tia phân giác, 5 chuyên đề Olympic (Dirichlet góc, phân giác đối đỉnh, đếm góc n đường thẳng) và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Góc ở vị trí đặc biệt
  - Hai góc kề bù
  - Hai góc đối đỉnh
  - Tia phân giác
  - Kết nối tri thức
grade: 7
---

# Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc

Trong thế giới tự nhiên và các công trình kiến trúc xung quanh chúng ta, những đường thẳng giao nhau tạo nên vô số góc độ kỳ thú:
- Hai lưỡi kéo khi cắt giấy tạo thành hai cặp góc mở đối xứng nhau.
- Chiếc compa hay nan hoa xe đạp khi quay quanh một trục tạo thành các góc kề nhau chia đều vòng tròn.
- Ngã tư đường phố nơi hai đại lộ thẳng tắp giao nhau tạo thành $4$ góc với các mối liên hệ số đo đặc biệt.

Bước sang **Chương III: Góc và hai đường thẳng song song**, chúng ta sẽ chính thức bước vào thế giới hình học phẳng suy luận chặt chẽ. Bài học mở đầu sẽ trang bị cho các em kiến thức nền tảng về **hai góc kề bù**, **hai góc đối đỉnh**, **tia phân giác của một góc**, cùng các định lý hình học kinh điển và $5$ chuyên đề bồi dưỡng học sinh giỏi Olympic mở rộng tư duy chứng minh hình học!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 8: GÓC Ở VỊ TRÍ ĐẶC BIỆT & TIA PHÂN GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hai góc kề nhau & Kề bù</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <b>Kề nhau:</b> chung đỉnh, chung $1$ cạnh, hai cạnh kia ở hai phía đối nhau.<br>• <b>Kề bù:</b> vừa kề nhau vừa bù nhau (hai cạnh ngoài là hai tia đối nhau).<br>• Tổng số đo hai góc kề bù: $\widehat{xOy} + \widehat{yOz} = 180^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hai góc đối đỉnh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mỗi cạnh của góc này là tia đối của một cạnh góc kia.<br>• Hai đường thẳng cắt nhau tạo thành $2$ cặp góc đối đỉnh.<br>• <b>Định lý:</b> Hai góc đối đỉnh thì bằng nhau.<br>• Chú ý: Hai góc bằng nhau <i>chưa chắc</i> đối đỉnh.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tia phân giác của góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là tia nằm giữa hai cạnh của góc và tạo với hai cạnh đó hai góc bằng nhau.<br>• Tính chất: $\widehat{xOt} = \widehat{tOy} = \frac{1}{2}\widehat{xOy}$.<br>• Mỗi góc (khác góc bẹt) có duy nhất một tia phân giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Định lý phân giác kinh điển</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hai tia phân giác của hai góc kề bù thì <b>vuông góc</b> với nhau ($\widehat{mOn} = 90^\circ$).<br>• Hai tia phân giác của hai góc đối đỉnh là <b>hai tia đối nhau</b>.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ bài toán nền tảng về góc từ lớp 6:

### Câu hỏi khởi động

1. **Phân loại góc theo số đo:** Trong các góc có số đo sau: $35^\circ; 90^\circ; 125^\circ; 180^\circ; 70^\circ$, hãy chỉ ra góc nhọn, góc vuông, góc tù và góc bẹt.
2. **Khái niệm góc phụ nhau và bù nhau:**
   - a) Hai góc phụ nhau có tổng số đo bằng bao nhiêu? Tìm góc phụ với góc $42^\circ$.
   - b) Hai góc bù nhau có tổng số đo bằng bao nhiêu? Tìm góc bù với góc $135^\circ$.
3. **Cộng số đo hai góc:** Cho tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$. Biết $\widehat{xOy} = 40^\circ$ và $\widehat{yOz} = 55^\circ$. Tính số đo góc $\widehat{xOz}$.
4. **Hai tia đối nhau:** Thế nào là hai tia đối nhau? Hai tia đối nhau tạo thành góc gì?
5. **Đoán nhanh:** Hai đường thẳng cắt nhau tạo thành $4$ góc. Nếu một trong bốn góc đó bằng $90^\circ$ thì ba góc còn lại bằng bao nhiêu độ?

---

### Lời giải chi tiết phần khởi động

1. **Phân loại góc:**
   - Góc nhọn (số đo lớn hơn $0^\circ$ và nhỏ hơn $90^\circ$): $35^\circ; 70^\circ.$
   - Góc vuông (số đo bằng $90^\circ$): $90^\circ.$
   - Góc tù (số đo lớn hơn $90^\circ$ và nhỏ hơn $180^\circ$): $125^\circ.$
   - Góc bẹt (số đo bằng $180^\circ$): $180^\circ.$

2. **Góc phụ nhau và bù nhau:**
   - a) Hai góc phụ nhau có tổng số đo bằng $90^\circ$. Góc phụ với góc $42^\circ$ có số đo là: $90^\circ - 42^\circ = 48^\circ.$
   - b) Hai góc bù nhau có tổng số đo bằng $180^\circ$. Góc bù với góc $135^\circ$ có số đo là: $180^\circ - 135^\circ = 45^\circ.$

3. **Cộng góc:**
   Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên:
   $$\widehat{xOz} = \widehat{xOy} + \widehat{yOz} = 40^\circ + 55^\circ = 95^\circ.$$

4. **Hai tia đối nhau:**
   Hai tia đối nhau là hai tia chung gốc và cùng nằm trên một đường thẳng tạo thành góc bẹt (số đo $180^\circ$).

5. **Đoán nhanh:**
   Nếu hai đường thẳng cắt nhau tạo thành một góc $90^\circ$ thì ba góc còn lại **cũng đều bằng $90^\circ$** (hai đường thẳng vuông góc với nhau).

---

```geometry
type: angle-pairs
mode: vertical
```

## 1. Lý thuyết trọng tâm

### 1.1. Hai góc kề nhau, hai góc bù nhau và hai góc kề bù

> [!IMPORTANT]
> **1. Hai góc kề nhau:**
> - Là hai góc có **chung đỉnh**, **chung một cạnh**, và hai cạnh còn lại nằm ở hai nửa mặt phẳng đối nhau bờ chứa cạnh chung.
> - *Ví dụ:* Nếu tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ thì $\widehat{xOy}$ và $\widehat{yOz}$ là hai góc kề nhau (chung đỉnh $O$, chung cạnh $Oy$). Khi đó:
>   $$\widehat{xOz} = \widehat{xOy} + \widehat{yOz}.$$
> 
> **2. Hai góc kề bù:**
> - Là hai góc **vừa kề nhau, vừa bù nhau** (tổng số đo bằng $180^\circ$).
> - Hai cạnh ngoài của hai góc kề bù là **hai tia đối nhau**.
>   $$\widehat{xOy} + \widehat{yOz} = 180^\circ \quad (\text{với } Ox, Oz \text{ là hai tia đối nhau}).$$

---

### 1.2. Hai góc đối đỉnh

> [!IMPORTANT]
> **Định nghĩa hai góc đối đỉnh:**
> - Hai góc đối đỉnh là hai góc mà **mỗi cạnh của góc này là tia đối của một cạnh của góc kia**.
> 
> **Định lý cốt lõi:**
> - **Hai góc đối đỉnh thì bằng nhau.**

*Hình ảnh minh họa hai đường thẳng $x x'$ và $y y'$ cắt nhau tại $O$:*
- Tia $Ox'$ là tia đối của tia $Ox$.
- Tia $Oy'$ là tia đối của tia $Oy$.
- Khi đó ta có hai cặp góc đối đỉnh:
  $$\widehat{xOy} = \widehat{x'Oy'} \quad \text{và} \quad \widehat{xOy'} = \widehat{x'Oy}.$$

> [!WARNING]
> **CẢNH BÁO BẪY SAI LẦM KHI HỌC GÓC ĐỐI ĐỈNH:**
> 1. **Chiều ngược lại KHÔNG đúng:**
>    - *Định lý:* Hai góc đối đỉnh thì bằng nhau.
>    - *Sai lầm:* Nghĩ rằng "Hai góc bằng nhau thì đối đỉnh". Đây là **SAI HOÀN TOÀN**! Hai góc có thể bằng nhau nhưng nằm ở hai vị trí khác nhau, hoặc có chung đỉnh nhưng các cạnh không phải là các tia đối nhau.
> 2. **Bẫy hai góc kề bù:**
>    - Hai góc có tổng số đo bằng $180^\circ$ gọi là **hai góc bù nhau**.
>    - Chỉ khi hai góc đó **vừa kề nhau vừa có hai cạnh ngoài là hai tia đối nhau** thì mới được gọi là **hai góc kề bù**.

---

### 1.3. Tia phân giác của một góc

> [!IMPORTANT]
> **Định nghĩa tia phân giác:**
> - **Tia phân giác** của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh đó hai góc bằng nhau.
> 
> **Tính chất:**
> Nếu tia $Ot$ là tia phân giác của góc $\widehat{xOy}$ thì:
> $$\widehat{xOt} = \widehat{tOy} = \dfrac{1}{2}\widehat{xOy}$$
> hay:
> $$\widehat{xOy} = 2\widehat{xOt} = 2\widehat{tOy}.$$

**Dấu hiệu chứng minh một tia là tia phân giác:**
Để chứng minh tia $Ot$ là tia phân giác của góc $\widehat{xOy}$, ta cần chỉ ra đủ hai điều kiện:
1. Tia $Ot$ nằm giữa hai tia $Ox$ và $Oy$ (hoặc $\widehat{xOt} + \widehat{tOy} = \widehat{xOy}$).
2. $\widehat{xOt} = \widehat{tOy}$.

---

### 1.4. Hai định lý phân giác kinh điển

> [!TIP]
> **Định lý 1 (Phân giác của hai góc kề bù):**
> Hai tia phân giác của hai góc kề bù thì **vuông góc với nhau** (tạo thành góc $90^\circ$).
> 
> *Chứng minh ngắn gọn:*
> Cho $\widehat{xOy}$ và $\widehat{yOz}$ kề bù $\implies \widehat{xOy} + \widehat{yOz} = 180^\circ$.
> Gọi $Om, On$ lần lượt là phân giác của $\widehat{xOy}$ và $\widehat{yOz}$:
> $$\widehat{mOy} = \frac{1}{2}\widehat{xOy}; \quad \widehat{yOn} = \frac{1}{2}\widehat{yOz}.$$
> Do tia $Oy$ nằm giữa hai tia $Om$ và $On$ nên:
> $$\widehat{mOn} = \widehat{mOy} + \widehat{yOn} = \frac{1}{2}(\widehat{xOy} + \widehat{yOz}) = \frac{1}{2} \cdot 180^\circ = 90^\circ.$$
> 
> **Định lý 2 (Phân giác của hai góc đối đỉnh):**
> Hai tia phân giác của hai góc đối đỉnh là **hai tia đối nhau**.

---

## 2. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Nhận biết góc kề bù, góc đối đỉnh, tia phân giác

**Phương pháp giải:**
1. Hai góc đối đỉnh: Kiểm tra xem các cạnh của chúng có tạo thành hai đường thẳng cắt nhau hay không.
2. Hai góc kề bù: Kiểm tra xem hai góc có chung một cạnh và hai cạnh còn lại có tạo thành một đường thẳng (hai tia đối nhau) hay không.
3. Tia phân giác: Kiểm tra xem tia đó có nằm bên trong góc và chia góc làm hai phần bằng nhau hay không.

---

#### Ví dụ 1
Cho hai đường thẳng $AB$ và $CD$ cắt nhau tại điểm $O$.
a) Kể tên các cặp góc đối đỉnh có trong hình.
b) Kể tên các cặp góc kề bù có trong hình.
c) Kể tên các góc bẹt có đỉnh là $O$.

**Lời giải chi tiết:**
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$, nghĩa là:
- Điểm $O$ nằm trên đường thẳng $AB \implies OA$ và $OB$ là hai tia đối nhau.
- Điểm $O$ nằm trên đường thẳng $CD \implies OC$ và $OD$ là hai tia đối nhau.

a) Các cặp góc đối đỉnh:
- Cặp 1: $\widehat{AOC}$ và $\widehat{BOD}$ (vì $OA$ đối $OB$ và $OC$ đối $OD$).
- Cặp 2: $\widehat{AOD}$ và $\widehat{BOC}$ (vì $OA$ đối $OB$ và $OD$ đối $OC$).

b) Các cặp góc kề bù (gồm $4$ cặp):
- $\widehat{AOC}$ và $\widehat{COB}$ (chung cạnh $OC$, $OA$ đối $OB$).
- $\widehat{COB}$ và $\widehat{BOD}$ (chung cạnh $OB$, $OC$ đối $OD$).
- $\widehat{BOD}$ và $\widehat{DOA}$ (chung cạnh $OD$, $OB$ đối $OA$).
- $\widehat{DOA}$ và $\widehat{AOC}$ (chung cạnh $OA$, $OD$ đối $OC$).

c) Các góc bẹt có đỉnh $O$:
- Góc $\widehat{AOB}$ (số đo $180^\circ$) và góc $\widehat{COD}$ (số đo $180^\circ$).

---

### Dạng 2: Tính số đo góc dựa vào tính chất kề bù và đối đỉnh

**Phương pháp giải:**
- Dùng tính chất hai góc kề bù có tổng số đo bằng $180^\circ$:
  $$\widehat{A} + \widehat{B} = 180^\circ \implies \widehat{A} = 180^\circ - \widehat{B}.$$
- Dùng tính chất hai góc đối đỉnh thì bằng nhau.
- Nếu đề bài cho mối liên hệ giữa hai góc (tổng, hiệu, tỉ số), đặt ẩn hoặc lập luận giải bài toán tổng - hiệu / tổng - tỉ.

---

#### Ví dụ 2
Hai đường thẳng $xy$ và $zt$ cắt nhau tại $O$. Biết góc $\widehat{xOz} = 48^\circ$.
a) Tính số đo các góc $\widehat{yOt}$, $\widehat{xOt}$ và $\widehat{yOz}$.
b) Trong bốn góc tạo thành, có bao nhiêu góc nhọn và bao nhiêu góc tù?

**Lời giải chi tiết:**
a) Tính các góc:
- Vì $\widehat{xOz}$ và $\widehat{yOt}$ là hai góc đối đỉnh nên:
  $$\widehat{yOt} = \widehat{xOz} = 48^\circ.$$
- Vì $\widehat{xOz}$ và $\widehat{xOt}$ là hai góc kề bù (chung cạnh $Ox$, hai tia $Oz$ và $Ot$ đối nhau) nên:
  $$\widehat{xOz} + \widehat{xOt} = 180^\circ \implies \widehat{xOt} = 180^\circ - 48^\circ = 132^\circ.$$
- Vì $\widehat{yOz}$ và $\widehat{xOt}$ là hai góc đối đỉnh nên:
  $$\widehat{yOz} = \widehat{xOt} = 132^\circ.$$

b) Trong bốn góc tạo thành tại đỉnh $O$:
- Hai góc nhọn là: $\widehat{xOz} = 48^\circ$ và $\widehat{yOt} = 48^\circ$.
- Hai góc tù là: $\widehat{xOt} = 132^\circ$ và $\widehat{yOz} = 132^\circ$.

---

#### Ví dụ 3 (Bài toán quan hệ hơn kém và tỉ số)
Hai đường thẳng $a b$ và $c d$ cắt nhau tại $O$.
a) Biết $\widehat{aOc} - \widehat{bOc} = 40^\circ$. Tính số đo của bốn góc tạo thành tại $O$.
b) Biết $\widehat{aOc} = 3\widehat{aOd}$. Tính số đo các góc đó.

**Lời giải chi tiết:**
a) Hai góc $\widehat{aOc}$ và $\widehat{bOc}$ là hai góc kề bù nên:
$$\widehat{aOc} + \widehat{bOc} = 180^\circ.$$
Mặt khác theo giả thiết:
$$\widehat{aOc} - \widehat{bOc} = 40^\circ.$$
Đây là bài toán tìm hai số khi biết tổng và hiệu:
$$\widehat{aOc} = \dfrac{180^\circ + 40^\circ}{2} = \dfrac{220^\circ}{2} = 110^\circ.$$
$$\widehat{bOc} = 180^\circ - 110^\circ = 70^\circ.$$
Áp dụng tính chất đối đỉnh:
$$\widehat{bOd} = \widehat{aOc} = 110^\circ; \quad \widehat{aOd} = \widehat{bOc} = 70^\circ.$$

b) Hai góc $\widehat{aOc}$ và $\widehat{aOd}$ là hai góc kề bù nên:
$$\widehat{aOc} + \widehat{aOd} = 180^\circ.$$
Thay $\widehat{aOc} = 3\widehat{aOd}$ vào đẳng thức trên:
$$3\widehat{aOd} + \widehat{aOd} = 180^\circ \iff 4\widehat{aOd} = 180^\circ \implies \widehat{aOd} = 180^\circ : 4 = 45^\circ.$$
Suy ra:
$$\widehat{aOc} = 3 \cdot 45^\circ = 135^\circ.$$
Áp dụng tính chất đối đỉnh:
$$\widehat{bOd} = \widehat{aOc} = 135^\circ; \quad \widehat{bOc} = \widehat{aOd} = 45^\circ.$$

---

### Dạng 3: Bài toán liên quan đến tia phân giác

**Phương pháp giải:**
1. Tính số đo góc: Nếu $Ot$ là tia phân giác của góc $\widehat{xOy}$ thì $\widehat{xOt} = \widehat{tOy} = \frac{1}{2}\widehat{xOy}$.
2. Chứng minh tia phân giác: Chứng minh tia nằm giữa hai cạnh và chia góc làm hai góc bằng nhau.

---

#### Ví dụ 4
Cho góc $\widehat{xOy} = 110^\circ$. Vẽ tia phân giác $Ot$ của góc $\widehat{xOy}$.
a) Tính số đo góc $\widehat{xOt}$ và $\widehat{tOy}$.
b) Vẽ tia $Om$ là tia đối của tia $Ox$. Tính số đo góc $\widehat{mOt}$.

**Lời giải chi tiết:**
a) Vì $Ot$ là tia phân giác của góc $\widehat{xOy}$ nên:
$$\widehat{xOt} = \widehat{tOy} = \dfrac{\widehat{xOy}}{2} = \dfrac{110^\circ}{2} = 55^\circ.$$

b) Vì tia $Om$ là tia đối của tia $Ox$ nên góc $\widehat{xOm}$ là góc bẹt ($180^\circ$).
Do đó hai góc $\widehat{xOt}$ và $\widehat{mOt}$ là hai góc kề bù:
$$\widehat{xOt} + \widehat{mOt} = 180^\circ.$$
Suy ra:
$$\widehat{mOt} = 180^\circ - \widehat{xOt} = 180^\circ - 55^\circ = 125^\circ.$$

---

### Dạng 4: Đếm số cặp góc đối đỉnh tạo bởi nhiều đường thẳng cắt nhau

> [!TIP]
> **Công thức tổng quát cho $n$ đường thẳng cùng đi qua một điểm:**
> Cho $n$ đường thẳng ($n \ge 2$) cùng cắt nhau tại điểm $O$ và không có hai đường thẳng nào trùng nhau:
> 1. Có $2n$ tia chung gốc $O$.
> 2. Số góc tạo thành (không kể góc bẹt) là: $2n(n - 1)$ góc.
> 3. Số cặp góc đối đỉnh (không kể góc bẹt) là:
>    $$N = n(n - 1) \text{ (cap goc doi dinh)}.$$

#### Ví dụ 5
a) Cho $3$ đường thẳng cắt nhau tại điểm $O$. Có bao nhiêu cặp góc đối đỉnh được tạo thành (khác góc bẹt)?
b) Cho $5$ đường thẳng cùng đi qua một điểm $O$. Tính số cặp góc đối đỉnh (khác góc bẹt).

**Lời giải chi tiết:**
a) Với $n = 3$ đường thẳng cắt nhau tại $O$:
Mỗi đường thẳng kết hợp với một đường thẳng khác tạo thành $2$ cặp góc đối đỉnh.
Số cách chọn $2$ đường thẳng trong $3$ đường thẳng là $\frac{3 \cdot 2}{2} = 3$ cách.
Do đó số cặp góc đối đỉnh là:
$$N = 3 \cdot (3 - 1) = 3 \cdot 2 = 6\text{ (cap goc doi dinh)}.$$

b) Áp dụng công thức với $n = 5$:
$$N = 5 \cdot (5 - 1) = 5 \cdot 4 = 20\text{ (cap goc doi dinh)}.$$
Vậy có đúng $20$ cặp góc đối đỉnh.

---

### Dạng 5: Bài toán thực tế liên môn

#### Ví dụ 6
Một chiếc thang xếp chữ A khi mở rộng tạo thành hai chân thang bắt chéo nhau qua một chốt quay tại $O$. Người thợ đo được góc nhọn giữa hai chân thang phía trên là $36^\circ$.
a) Tính số đo góc tù giữa hai chân thang phía dưới và số đo góc nhọn phía dưới chân thang.
b) Để chiếc thang đứng vững vàng nhất, tiêu chuẩn an toàn quy định góc mở phía dưới chân thang phải nằm trong khoảng từ $30^\circ$ đến $45^\circ$. Chiếc thang của người thợ có đạt tiêu chuẩn an toàn không?

**Lời giải chi tiết:**
a) Gọi hai thanh của thang xếp là hai đường thẳng $AB$ và $CD$ cắt nhau tại chốt quay $O$.
Góc nhọn phía trên là $\widehat{AOC} = 36^\circ$.
- Góc nhọn phía dưới là góc đối đỉnh $\widehat{BOD}$:
  $$\widehat{BOD} = \widehat{AOC} = 36^\circ.$$
- Góc tù giữa hai chân thang là góc kề bù với góc nhọn phía trên:
  $$\widehat{AOD} = 180^\circ - 36^\circ = 144^\circ.$$

b) Góc mở phía dưới chân thang là $36^\circ$.
Vì $30^\circ \le 36^\circ \le 45^\circ$ nên góc mở này hoàn toàn nằm trong giới hạn an toàn quy định.
Vậy chiếc thang đạt tiêu chuẩn an toàn khi sử dụng.

---

## 3. 5 Chuyên đề Olympic & Học sinh giỏi Toán 7 Nâng cao

---

### Chuyên đề 1: Bài toán $n$ đường thẳng đồng quy và Nguyên lý Dirichlet trong hình học

> [!IMPORTANT]
> **Định lý Dirichlet về góc:**
> Cho $n$ đường thẳng ($n \ge 2$) cùng đi qua một điểm $O$. Khi đó:
> 1. Luôn tồn tại ít nhất một góc có số đo **nhỏ hơn hoặc bằng $\dfrac{180^\circ}{n}$**.
> 2. Luôn tồn tại ít nhất một góc có số đo **lớn hơn hoặc bằng $\dfrac{180^\circ}{n}$**.

#### Bài toán 1.1
Cho $6$ đường thẳng phân biệt cùng đi qua điểm $O$. Chứng minh rằng tồn tại ít nhất một góc trong các góc tạo thành có số đo không vượt quá $30^\circ$.

**Lời giải chi tiết:**
Sáu đường thẳng cắt nhau tại điểm $O$ tạo thành $12$ tia chung gốc $O$.
Mười hai tia này chia mặt phẳng quanh điểm $O$ thành $12$ góc không có điểm trong chung.
Tổng số đo của $12$ góc này bằng $360^\circ$:
$$\alpha_1 + \alpha_2 + \alpha_3 + \dots + \alpha_{12} = 360^\circ.$$
Mặt khác, do tính chất đối đỉnh, $12$ góc này chia thành $6$ cặp góc đối đỉnh bằng nhau.
Xét $6$ góc nằm về một nửa mặt phẳng có bờ là một trong sáu đường thẳng đó.
Tổng số đo của $6$ góc này bằng $180^\circ$:
$$\beta_1 + \beta_2 + \beta_3 + \beta_4 + \beta_5 + \beta_6 = 180^\circ.$$
Áp dụng nguyên lý Dirichlet:
Nếu tất cả $6$ góc này đều lớn hơn $30^\circ$ thì tổng của chúng sẽ là:
$$\beta_1 + \beta_2 + \dots + \beta_6 > 6 \cdot 30^\circ = 180^\circ\text{ (mau thuan!)}.$$
Do đó, bắt buộc phải tồn tại ít nhất một góc có số đo nhỏ hơn hoặc bằng:
$$\dfrac{180^\circ}{6} = 30^\circ.$$
Vậy định lý được chứng minh hoàn tất. $\blacksquare$

---

### Chuyên đề 2: Chứng minh hai tia phân giác của hai góc đối đỉnh là hai tia đối nhau

> [!TIP]
> **Phương pháp chứng minh ba điểm thẳng hàng / hai tia đối nhau:**
> Để chứng minh hai tia $Om$ và $On$ là hai tia đối nhau, ta chứng minh góc tạo bởi chúng là một góc bẹt:
> $$\widehat{mOn} = 180^\circ.$$

#### Bài toán 2.1
Cho hai đường thẳng $x x'$ và $y y'$ cắt nhau tại điểm $O$. Gọi $Ot$ là tia phân giác của góc $\widehat{xOy}$ và $Ot'$ là tia phân giác của góc $\widehat{x'Oy'}$. Chứng minh rằng $Ot$ và $Ot'$ là hai tia đối nhau.

**Lời giải chi tiết:**
Vì $x x'$ là đường thẳng nên $Ox$ và $Ox'$ là hai tia đối nhau $\implies \widehat{xOx'} = 180^\circ$.
Do $Ot$ là tia phân giác của $\widehat{xOy}$ nên:
$$\widehat{xOt} = \dfrac{1}{2}\widehat{xOy}.$$
Do $Ot'$ là tia phân giác của $\widehat{x'Oy'}$ nên:
$$\widehat{x'Ot'} = \dfrac{1}{2}\widehat{x'Oy'}.$$
Vì $\widehat{xOy}$ và $\widehat{x'Oy'}$ là hai góc đối đỉnh nên:
$$\widehat{xOy} = \widehat{x'Oy'} \implies \widehat{xOt} = \widehat{x'Ot'}.$$
Mặt khác, tia $Oy$ nằm giữa $Ox$ và $Ox'$ nên hai góc $\widehat{xOy}$ và $\widehat{x'Oy}$ là hai góc kề bù:
$$\widehat{xOy} + \widehat{x'Oy} = 180^\circ.$$
Xét góc $\widehat{tOt'}$:
Ta có tia $Ox'$ nằm giữa hai tia $Oy$ và $Ot'$, nên:
$$\widehat{tOt'} = \widehat{tOy} + \widehat{yOx'} + \widehat{x'Ot'}.$$
Vì $\widehat{tOy} = \widehat{xOt} = \widehat{x'Ot'}$ nên:
$$\widehat{tOt'} = \widehat{xOt} + \widehat{yOx'} + \widehat{tOy} = (\widehat{xOt} + \widehat{tOy}) + \widehat{yOx'} = \widehat{xOy} + \widehat{x'Oy} = 180^\circ.$$
Vì góc $\widehat{tOt'} = 180^\circ$ nên $Ot$ và $Ot'$ là hai tia đối nhau. $\blacksquare$

---

### Chuyên đề 3: Các bài toán tia phân giác kết hợp tính số đo góc phức tạp

#### Bài toán 3.1
Cho góc bẹt $\widehat{AOB}$. Trên cùng một nửa mặt phẳng bờ $AB$, vẽ hai tia $OC$ và $OD$ sao cho $\widehat{AOC} = 50^\circ$ và $\widehat{BOD} = 40^\circ$.
a) Chứng minh rằng $OC \perp OD$ (tia $OC$ vuông góc với tia $OD$).
b) Gọi $Om$ là tia phân giác của $\widehat{AOC}$ và $On$ là tia phân giác của $\widehat{BOD}$. Tính số đo góc $\widehat{mOn}$.

**Lời giải chi tiết:**
a) Vì $\widehat{AOB}$ là góc bẹt ($180^\circ$) và các tia $OC, OD$ cùng nằm trên một nửa mặt phẳng bờ $AB$ có $\widehat{AOC} + \widehat{BOD} = 50^\circ + 40^\circ = 90^\circ < 180^\circ$, nên các tia $OC$ và $OD$ nằm giữa hai tia $OA$ và $OB$.
Do đó:
$$\widehat{AOC} + \widehat{COD} + \widehat{DOB} = 180^\circ.$$
Thay số đo đã biết vào:
$$50^\circ + \widehat{COD} + 40^\circ = 180^\circ \implies \widehat{COD} = 180^\circ - 90^\circ = 90^\circ.$$
Vì $\widehat{COD} = 90^\circ$ nên $OC \perp OD$.

b) Tính góc $\widehat{mOn}$:
- $Om$ là phân giác của $\widehat{AOC} \implies \widehat{mOC} = \frac{1}{2}\widehat{AOC} = \frac{1}{2} \cdot 50^\circ = 25^\circ.$
- $On$ là phân giác của $\widehat{BOD} \implies \widehat{DOn} = \frac{1}{2}\widehat{BOD} = \frac{1}{2} \cdot 40^\circ = 20^\circ.$
Tia $OC$ và $OD$ nằm giữa hai tia $Om$ và $On$, do đó:
$$\widehat{mOn} = \widehat{mOC} + \widehat{COD} + \widehat{DOn} = 25^\circ + 90^\circ + 20^\circ = 135^\circ.$$
Vậy $\widehat{mOn} = 135^\circ.$

---

### Chuyên đề 4: Thiết lập phương trình đại số giải bài toán hình học góc

#### Bài toán 4.1
Cho hai góc kề nhau $\widehat{AOB}$ và $\widehat{BOC}$. Biết rằng góc $\widehat{AOB}$ lớn hơn góc $\widehat{BOC}$ là $30^\circ$. Vẽ tia phân giác $OD$ của góc $\widehat{AOB}$ và tia phân giác $OE$ của góc $\widehat{BOC}$. Biết góc $\widehat{DOE} = 45^\circ$. Tính số đo các góc $\widehat{AOB}$ và $\widehat{BOC}$.

**Lời giải chi tiết:**
Gọi số đo góc $\widehat{BOC}$ là $x$ (độ, $x > 0$).
Khi đó số đo góc $\widehat{AOB}$ là $x + 30^\circ$.
Vì $OD$ là phân giác của $\widehat{AOB}$ nên:
$$\widehat{BOD} = \dfrac{\widehat{AOB}}{2} = \dfrac{x + 30^\circ}{2}.$$
Vì $OE$ là phân giác của $\widehat{BOC}$ nên:
$$\widehat{BOE} = \dfrac{\widehat{BOC}}{2} = \dfrac{x}{2}.$$
Do hai góc $\widehat{AOB}$ và $\widehat{BOC}$ kề nhau nên tia $OB$ nằm giữa hai tia phân giác $OD$ và $OE$.
Ta có đẳng thức:
$$\widehat{DOE} = \widehat{BOD} + \widehat{BOE}.$$
Thay các biểu thức vào:
$$\dfrac{x + 30^\circ}{2} + \dfrac{x}{2} = 45^\circ \iff \dfrac{2x + 30^\circ}{2} = 45^\circ \iff 2x + 30^\circ = 90^\circ \iff 2x = 60^\circ \implies x = 30^\circ.$$
Vậy:
- Số đo góc $\widehat{BOC} = 30^\circ.$
- Số đo góc $\widehat{AOB} = 30^\circ + 30^\circ = 60^\circ.$

---

### Chuyên đề 5: Chứng minh một tia là tia phân giác trong cấu hình nâng cao

#### Bài toán 5.1
Cho hai đường thẳng $x x'$ và $y y'$ cắt nhau tại $O$. Trong góc $\widehat{xOy}$, vẽ tia $Oz$ sao cho $\widehat{xOz} = \frac{1}{2}\widehat{xOy}$. Chứng minh rằng:
a) Tia $Oz$ là tia phân giác của góc $\widehat{xOy}$.
b) Tia đối của tia $Oz$ (kí hiệu $Oz'$) là tia phân giác của góc $\widehat{x'Oy'}$.

**Lời giải chi tiết:**
a) Vì tia $Oz$ nằm trong góc $\widehat{xOy}$ nên tia $Oz$ nằm giữa hai tia $Ox$ và $Oy$.
Do đó:
$$\widehat{xOz} + \widehat{zOy} = \widehat{xOy} \implies \widehat{zOy} = \widehat{xOy} - \widehat{xOz}.$$
Mặt khác $\widehat{xOz} = \frac{1}{2}\widehat{xOy}$, thay vào ta được:
$$\widehat{zOy} = \widehat{xOy} - \dfrac{1}{2}\widehat{xOy} = \dfrac{1}{2}\widehat{xOy}.$$
Suy ra $\widehat{xOz} = \widehat{zOy} = \frac{1}{2}\widehat{xOy}$.
Kết hợp với điều kiện tia $Oz$ nằm giữa hai tia $Ox$ và $Oy$, kết luận $Oz$ là tia phân giác của góc $\widehat{xOy}$. $\blacksquare$

b) Vì $Oz'$ là tia đối của $Oz$, $Ox'$ là tia đối của $Ox$, $Oy'$ là tia đối của $Oy$:
- Cặp góc đối đỉnh: $\widehat{x'Oz'} = \widehat{xOz}$ (đối đỉnh).
- Cặp góc đối đỉnh: $\widehat{y'Oz'} = \widehat{yOz}$ (đối đỉnh).
Theo câu a, ta có $\widehat{xOz} = \widehat{yOz}$, suy ra:
$$\widehat{x'Oz'} = \widehat{y'Oz'}.$$
Vì tia $Oz'$ nằm giữa hai tia $Ox'$ và $Oy'$, nên $Oz'$ là tia phân giác của góc $\widehat{x'Oy'}$. $\blacksquare$

---

## 4. Bộ Quiz Trắc nghiệm tương tác (10 câu)

```quiz
type: choice
question: 'Hai góc kề bù là hai góc:'
options:
  - 'A) Có tổng số đo bằng 90^\circ'
  - 'B) Vừa kề nhau vừa có tổng số đo bằng 180^\circ'
  - 'C) Có cạnh chung và đối đỉnh nhau'
  - 'D) Có tổng số đo bằng 180^\circ nhưng không chung đỉnh'
answer: 2
explanation: 'Theo định nghĩa, hai góc kề bù là hai góc vừa kề nhau (chung đỉnh, chung 1 cạnh) vừa bù nhau (tổng số đo bằng 180^\circ).'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'A) Hai góc bằng nhau thì đối đỉnh'
  - 'B) Hai góc đối đỉnh thì bằng nhau'
  - 'C) Hai góc có tổng bằng 180^\circ thì luôn kề bù'
  - 'D) Hai góc đối đỉnh có tổng số đo bằng 180^\circ'
answer: 2
explanation: 'Định lý khẳng định: Hai góc đối đỉnh thì bằng nhau. Chiều ngược lại không đúng vì hai góc bằng nhau chưa chắc đã đối đỉnh.'
```

```quiz
type: choice
question: 'Cho hai đường thẳng cắt nhau tại O, trong đó có một góc bằng 65^\circ. Số đo góc đối đỉnh với nó là:'
options:
  - 'A) 115^\circ'
  - 'B) 65^\circ'
  - 'C) 25^\circ'
  - 'D) 180^\circ'
answer: 2
explanation: 'Hai góc đối đỉnh thì bằng nhau nên góc đối đỉnh với góc 65^\circ cũng có số đo bằng 65^\circ.'
```

```quiz
type: choice
question: 'Hai góc kề bù \widehat{xOy} và \widehat{yOz} có \widehat{xOy} = 72^\circ. Số đo góc \widehat{yOz} là:'
options:
  - 'A) 72^\circ'
  - 'B) 18^\circ'
  - 'C) 108^\circ'
  - 'D) 288^\circ'
answer: 3
explanation: 'Vì hai góc kề bù có tổng số đo bằng 180^\circ nên \widehat{yOz} = 180^\circ - 72^\circ = 108^\circ.'
```

```quiz
type: choice
question: 'Tia Ot là tia phân giác của góc \widehat{xOy} = 130^\circ. Số đo góc \widehat{xOt} bằng:'
options:
  - 'A) 65^\circ'
  - 'B) 130^\circ'
  - 'C) 50^\circ'
  - 'D) 260^\circ'
answer: 1
explanation: 'Tia phân giác chia đôi góc thành hai góc bằng nhau: \widehat{xOt} = \frac{130^\circ}{2} = 65^\circ.'
```

```quiz
type: choice
question: 'Góc tạo bởi hai tia phân giác của hai góc kề bù có số đo bằng:'
options:
  - 'A) 45^\circ'
  - 'B) 60^\circ'
  - 'C) 90^\circ'
  - 'D) 180^\circ'
answer: 3
explanation: 'Định lý kinh điển: Hai tia phân giác của hai góc kề bù luôn vuông góc với nhau, tức tạo thành một góc có số đo đúng bằng 90^\circ.'
```

```quiz
type: choice
question: 'Cho 4 đường thẳng phân biệt cùng đi qua điểm O. Số cặp góc đối đỉnh (khác góc bẹt) tạo thành là:'
options:
  - 'A) 6'
  - 'B) 8'
  - 'C) 12'
  - 'D) 16'
answer: 3
explanation: 'Áp dụng công thức N = n(n - 1) với n = 4 đường thẳng: N = 4 \cdot (4 - 1) = 12 cặp góc đối đỉnh.'
```

```quiz
type: choice
question: 'Hai góc kề bù có số đo hơn kém nhau 40^\circ. Số đo góc lớn là:'
options:
  - 'A) 110^\circ'
  - 'B) 70^\circ'
  - 'C) 140^\circ'
  - 'D) 120^\circ'
answer: 1
explanation: 'Tổng hai góc là 180^\circ, hiệu là 40^\circ. Góc lớn là (180^\circ + 40^\circ) : 2 = 110^\circ.'
```

```quiz
type: choice
question: 'Hai đường thẳng cắt nhau tạo thành 4 góc. Biết tổng số đo của 3 góc trong số đó bằng 250^\circ. Số đo góc thứ tư là:'
options:
  - 'A) 70^\circ'
  - 'B) 110^\circ'
  - 'C) 125^\circ'
  - 'D) 90^\circ'
answer: 2
explanation: 'Tổng số đo 4 góc tại đỉnh O bằng 360^\circ. Do đó góc thứ tư có số đo là 360^\circ - 250^\circ = 110^\circ.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - 'A) Hai tia phân giác của hai góc đối đỉnh là hai tia đối nhau'
  - 'B) Góc bẹt có số đo bằng 180^\circ'
  - 'C) Mỗi góc khác góc bẹt có duy nhất một tia phân giác'
  - 'D) Hai góc có chung một đỉnh và bằng nhau thì đối đỉnh'
answer: 4
explanation: 'D sai vì hai góc chung đỉnh và bằng nhau chưa chắc đối đỉnh (mỗi cạnh của góc này phải là tia đối của một cạnh góc kia).'
```

---

## 5. Phiếu bài tập tự luyện toàn diện (10 bài tự luận)

### Đề bài

**Bài 1 (Nhận biết):**
Cho hình vẽ hai đường thẳng $MN$ và $PQ$ cắt nhau tại điểm $I$.
a) Chỉ ra hai cặp góc đối đỉnh.
b) Chỉ ra bốn cặp góc kề bù.
c) Nếu $\widehat{MIP} = 55^\circ$, tính số đo các góc còn lại tại đỉnh $I$.

**Bài 2 (Tính góc kề bù cơ bản):**
Hai góc $\widehat{AOB}$ và $\widehat{BOC}$ kề bù với nhau.
a) Biết $\widehat{AOB} = 64^\circ$, tính $\widehat{BOC}$.
b) Biết $\widehat{BOC} = 2\widehat{AOB}$, tính số đo mỗi góc.

**Bài 3 (Bài toán tổng và hiệu):**
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$. Biết hiệu số đo giữa hai góc kề bù $\widehat{AOC}$ và $\widehat{BOC}$ là $50^\circ$. Tính số đo của bốn góc tạo thành tại đỉnh $O$.

**Bài 4 (Bài toán tỉ số góc):**
Hai đường thẳng cắt nhau tại $O$ tạo thành bốn góc. Biết tỉ số giữa một góc và góc kề bù với nó là $\frac{2}{3}$. Tính số đo bốn góc đó.

**Bài 5 (Tính toán tia phân giác):**
Cho góc $\widehat{xOy} = 120^\circ$. Vẽ tia phân giác $Ot$ của góc $\widehat{xOy}$.
a) Tính số đo góc $\widehat{xOt}$ và $\widehat{tOy}$.
b) Vẽ tia $Oz$ là tia đối của tia $Ox$. Tính số đo góc $\widehat{zOt}$.

**Bài 6 (Chứng minh tia phân giác):**
Cho góc bẹt $\widehat{xOx'}$. Trên cùng một nửa mặt phẳng bờ $xx'$, vẽ hai tia $Oy$ và $Oz$ sao cho $\widehat{xOy} = 60^\circ$ và $\widehat{xOz} = 120^\circ$.
a) Tính số đo góc $\widehat{yOz}$ và $\widehat{zOx'}$.
b) Chứng tỏ rằng tia $Oy$ là tia phân giác của góc $\widehat{xOz}$.
c) Chứng tỏ rằng tia $Oz$ là tia phân giác của góc $\widehat{yOx'}$.

**Bài 7 (Định lý phân giác vuông góc):**
Cho hai góc kề bù $\widehat{aOb}$ và $\widehat{bOc}$. Gọi $Om$ là tia phân giác của $\widehat{aOb}$ và $On$ là tia phân giác của $\widehat{bOc}$.
a) Chứng minh rằng $\widehat{mOn} = 90^\circ$.
b) Biết $\widehat{aOb} = 80^\circ$, tính số đo góc $\widehat{mOb}$ và $\widehat{bOn}$.

**Bài 8 (Bẫy lý thuyết):**
a) Bạn Hoa vẽ hai góc $\widehat{xOy} = 50^\circ$ và $\widehat{x'Oy'} = 50^\circ$ rồi nói rằng "Hai góc này chắc chắn đối đỉnh". Nhận xét của Hoa đúng hay sai? Vẽ hình phản ví dụ minh họa.
b) Bạn Nam nói "Nếu hai góc kề nhau có tổng số đo bằng $180^\circ$ thì hai cạnh ngoài cùng nằm trên một đường thẳng". Nam nói đúng hay sai?

**Bài 9 (Bài toán thực tế):**
Một chiếc kéo cắt vải khi mở ra có góc giữa hai tay cầm là $42^\circ$.
a) Góc giữa hai lưỡi kéo bằng bao nhiêu độ? Vì sao?
b) Khi người thợ mở rộng tay cầm thêm $15^\circ$ nữa thì góc giữa hai lưỡi kéo thay đổi như thế nào?

**Bài 10 (Nâng cao):**
Cho $n$ đường thẳng phân biệt cùng đi qua điểm $O$.
a) Biết số cặp góc đối đỉnh (khác góc bẹt) tạo thành là $30$ cặp. Hỏi có bao nhiêu đường thẳng ($n = ?$)?
b) Chứng minh rằng trong các góc tạo thành, không thể có quá $n$ góc tù.

---

### Hướng dẫn giải chi tiết

**Bài 1:**
a) Hai cặp góc đối đỉnh: $(\widehat{MIP}, \widehat{NIQ})$ và $(\widehat{MIQ}, \widehat{PIN})$.
b) Bốn cặp góc kề bù: $(\widehat{MIP}, \widehat{PIN})$; $(\widehat{PIN}, \widehat{NIQ})$; $(\widehat{NIQ}, \widehat{QIM})$; $(\widehat{QIM}, \widehat{MIP})$.
c) Vì $\widehat{MIP} = 55^\circ$:
- $\widehat{NIQ} = \widehat{MIP} = 55^\circ$ (đối đỉnh).
- $\widehat{PIN} = 180^\circ - 55^\circ = 125^\circ$ (kề bù).
- $\widehat{MIQ} = \widehat{PIN} = 125^\circ$ (đối đỉnh).

**Bài 2:**
a) Vì $\widehat{AOB}$ và $\widehat{BOC}$ kề bù:
$$\widehat{BOC} = 180^\circ - \widehat{AOB} = 180^\circ - 64^\circ = 116^\circ.$$
b) Ta có $\widehat{AOB} + \widehat{BOC} = 180^\circ \iff \widehat{AOB} + 2\widehat{AOB} = 180^\circ \implies 3\widehat{AOB} = 180^\circ$.
Suy ra $\widehat{AOB} = 60^\circ$ và $\widehat{BOC} = 2 \cdot 60^\circ = 120^\circ.$

**Bài 3:**
Ta có hệ thức:
$$\widehat{AOC} + \widehat{BOC} = 180^\circ \quad \text{và} \quad \widehat{AOC} - \widehat{BOC} = 50^\circ.$$
Suy ra:
$$\widehat{AOC} = \dfrac{180^\circ + 50^\circ}{2} = 115^\circ.$$
$$\widehat{BOC} = 180^\circ - 115^\circ = 65^\circ.$$
Áp dụng đối đỉnh: $\widehat{BOD} = 115^\circ$ và $\widehat{AOD} = 65^\circ.$

**Bài 4:**
Gọi số đo góc bé là $2x$, góc lớn là $3x$.
Vì kề bù nên:
$$2x + 3x = 180^\circ \iff 5x = 180^\circ \implies x = 36^\circ.$$
- Góc bé: $2 \cdot 36^\circ = 72^\circ.$
- Góc lớn: $3 \cdot 36^\circ = 108^\circ.$
Bốn góc tạo thành gồm hai góc $72^\circ$ và hai góc $108^\circ.$

**Bài 5:**
a) Vì $Ot$ là phân giác của $\widehat{xOy}$:
$$\widehat{xOt} = \widehat{tOy} = \dfrac{120^\circ}{2} = 60^\circ.$$
b) Do $Oz$ là tia đối của $Ox$ nên $\widehat{xOz} = 180^\circ$.
Hai góc $\widehat{xOt}$ và $\widehat{zOt}$ kề bù:
$$\widehat{zOt} = 180^\circ - \widehat{xOt} = 180^\circ - 60^\circ = 120^\circ.$$

**Bài 6:**
a) Trên nửa mặt phẳng bờ $xx'$, ta có $\widehat{xOy} < \widehat{xOz}$ ($60^\circ < 120^\circ$) nên tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$:
$$\widehat{xOy} + \widehat{yOz} = \widehat{xOz} \implies \widehat{yOz} = 120^\circ - 60^\circ = 60^\circ.$$
Do $\widehat{xOz}$ và $\widehat{zOx'}$ kề bù:
$$\widehat{zOx'} = 180^\circ - 120^\circ = 60^\circ.$$
b) Tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$, và $\widehat{xOy} = \widehat{yOz} = 60^\circ$. Vậy $Oy$ là tia phân giác của $\widehat{xOz}.$
c) Ta có $\widehat{yOx'} = 180^\circ - \widehat{xOy} = 180^\circ - 60^\circ = 120^\circ$. Tia $Oz$ nằm giữa hai tia $Oy$ và $Ox'$, và $\widehat{yOz} = \widehat{zOx'} = 60^\circ = \frac{1}{2}\widehat{yOx'}$. Vậy $Oz$ là tia phân giác của $\widehat{yOx'}.$

**Bài 7:**
a) $\widehat{mOb} = \frac{1}{2}\widehat{aOb}$; $\widehat{bOn} = \frac{1}{2}\widehat{bOc}$.
$$\widehat{mOn} = \widehat{mOb} + \widehat{bOn} = \dfrac{1}{2}(\widehat{aOb} + \widehat{bOc}) = \dfrac{1}{2} \cdot 180^\circ = 90^\circ.$$
b) Với $\widehat{aOb} = 80^\circ$:
$$\widehat{mOb} = \dfrac{80^\circ}{2} = 40^\circ.$$
$$\widehat{bOc} = 180^\circ - 80^\circ = 100^\circ \implies \widehat{bOn} = \dfrac{100^\circ}{2} = 50^\circ.$$

**Bài 8:**
a) Hoa sai. Hai góc bằng nhau nhưng các cạnh chưa chắc là các tia đối nhau (chẳng hạn vẽ hai góc $50^\circ$ rời nhau hoặc có chung cạnh nhưng không tạo thành đường thẳng).
b) Nam nói đúng. Vì hai góc kề nhau có cạnh chung, khi tổng số đo bằng $180^\circ$ thì hai cạnh ngoài tạo thành góc bẹt $180^\circ$, tức là hai tia đối nhau cùng nằm trên một đường thẳng.

**Bài 9:**
a) Góc giữa hai lưỡi kéo bằng $42^\circ$ vì hai lưỡi kéo và hai tay cầm tạo thành hai đường thẳng cắt nhau tại ốc kéo, góc giữa hai lưỡi kéo và góc giữa hai tay cầm là hai góc đối đỉnh.
b) Khi tay cầm mở rộng thêm $15^\circ$, góc tay cầm thành $42^\circ + 15^\circ = 57^\circ$. Do đối đỉnh, góc giữa hai lưỡi kéo cũng mở rộng thêm đúng $15^\circ$ thành $57^\circ.$

**Bài 10:**
a) Số cặp góc đối đỉnh là $N = n(n - 1) = 30$.
Ta thấy $6 \cdot 5 = 30 \implies n = 6$. Vậy có $6$ đường thẳng.
b) $n$ đường thẳng cắt nhau tạo thành $2n$ góc kề nhau có tổng $360^\circ$ chia thành $n$ cặp góc đối đỉnh bằng nhau. Trong mỗi cặp góc đối đỉnh, nếu hai góc đó là góc tù ($> 90^\circ$) thì hai góc kề bù với chúng bắt buộc phải là góc nhọn ($< 90^\circ$). Do đó, trong $2n$ góc tạo thành chỉ có thể có tối đa $n$ góc tù. $\blacksquare$

---

## 6. Đề kiểm tra đánh giá năng lực

---

### Đề kiểm tra 15 phút

#### Phần I. Trắc nghiệm (4 câu — 4,0 điểm)

**Câu 1:** Hai đường thẳng $a b$ và $c d$ cắt nhau tại $O$. Biết $\widehat{aOc} = 50^\circ$. Số đo góc đối đỉnh với nó là:
- A) $130^\circ$
- B) $50^\circ$
- C) $40^\circ$
- D) $90^\circ$

**Câu 2:** Cho hai góc $\widehat{xOy}$ và $\widehat{yOz}$ kề bù. Biết $\widehat{xOy} = 115^\circ$. Số đo góc $\widehat{yOz}$ bằng:
- A) $65^\circ$
- B) $75^\circ$
- C) $115^\circ$
- D) $25^\circ$

**Câu 3:** Khẳng định nào sau đây đúng?
- A) Hai góc đối đỉnh thì bù nhau.
- B) Hai góc kề bù có tổng số đo bằng $90^\circ$.
- C) Hai góc đối đỉnh thì bằng nhau.
- D) Hai góc bằng nhau thì đối đỉnh.

**Câu 4:** Tia $Om$ là tia phân giác của góc $\widehat{xOy} = 80^\circ$. Số đo góc $\widehat{xOm}$ là:
- A) $160^\circ$
- B) $40^\circ$
- C) $80^\circ$
- D) $20^\circ$

#### Phần II. Tự luận (2 câu — 6,0 điểm)

**Câu 5 (3,0 điểm):** Hai đường thẳng $x x'$ và $y y'$ cắt nhau tại $O$. Biết góc $\widehat{xOy} = 70^\circ$. Tính số đo của ba góc còn lại tại đỉnh $O$.

**Câu 6 (3,0 điểm):** Cho hai góc kề bù $\widehat{AOB}$ và $\widehat{BOC}$. Biết $\widehat{AOB} = 3\widehat{BOC}$.
a) Tính số đo góc $\widehat{BOC}$ và $\widehat{AOB}$.
b) Vẽ tia phân giác $OD$ của góc $\widehat{AOB}$. Tính số đo góc $\widehat{COD}$.

---

#### Đáp án & Thang điểm đề 15 phút

**Phần I. Trắc nghiệm (4,0 điểm — mỗi câu 1,0 điểm)**
1. **B** ($50^\circ$).
2. **A** ($180^\circ - 115^\circ = 65^\circ$).
3. **C** (Hai góc đối đỉnh thì bằng nhau).
4. **B** ($80^\circ : 2 = 40^\circ$).

**Phần II. Tự luận (6,0 điểm)**

- **Câu 5 (3,0 điểm):**
  - $\widehat{x'Oy'} = \widehat{xOy} = 70^\circ$ (hai góc đối đỉnh) *(1,0 điểm)*.
  - $\widehat{xOy'} = 180^\circ - \widehat{xOy} = 180^\circ - 70^\circ = 110^\circ$ (hai góc kề bù) *(1,0 điểm)*.
  - $\widehat{x'Oy} = \widehat{xOy'} = 110^\circ$ (hai góc đối đỉnh) *(1,0 điểm)*.
- **Câu 6 (3,0 điểm):**
  - a) Ta có $\widehat{AOB} + \widehat{BOC} = 180^\circ \iff 3\widehat{BOC} + \widehat{BOC} = 180^\circ \iff 4\widehat{BOC} = 180^\circ \implies \widehat{BOC} = 45^\circ$ *(1,0 điểm)*.
    $\widehat{AOB} = 3 \cdot 45^\circ = 135^\circ$ *(0,5 điểm)*.
  - b) $OD$ là phân giác của $\widehat{AOB} \implies \widehat{BOD} = \frac{135^\circ}{2} = 67{,}5^\circ$ *(0,75 điểm)*.
    Tia $OB$ nằm giữa hai tia $OC$ và $OD$ nên:
    $\widehat{COD} = \widehat{BOC} + \widehat{BOD} = 45^\circ + 67{,}5^\circ = 112{,}5^\circ$ *(0,75 điểm)*.

---

### Đề kiểm tra 45 phút định kỳ

#### Ma trận đề thi

| Mức độ nhận thức | Nhận biết (30%) | Thông hiểu (30%) | Vận dụng (30%) | Vận dụng cao (10%) | Tổng điểm |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hai góc kề bù** | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | | **2,5đ** |
| **Hai góc đối đỉnh** | 2 TN (1,0đ) | 1 TN (0,5đ) + 1 TL (1,0đ) | | 1 TL (1,0đ) | **3,5đ** |
| **Tia phân giác của một góc** | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | | **2,5đ** |
| **Bài toán thực tế & Đếm góc**| 1 TN (0,5đ) | | 1 TL (1,0đ) | | **1,5đ** |
| **Tổng điểm** | **2,5đ** | **3,5đ** | **3,0đ** | **1,0đ** | **10,0đ** |

---

#### Phần I. Trắc nghiệm khách quan (6 câu — 3,0 điểm)

**Câu 1:** Hai góc đối đỉnh là hai góc:
- A) Có tổng số đo bằng $180^\circ$
- B) Có chung đỉnh và bằng nhau
- C) Mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia
- D) Cùng phụ với một góc thứ ba

**Câu 2:** Cho $\widehat{mIn} = 40^\circ$. Góc kề bù với $\widehat{mIn}$ có số đo là:
- A) $40^\circ$
- B) $50^\circ$
- C) $140^\circ$
- D) $180^\circ$

**Câu 3:** Khẳng định nào sau đây là **SAI**?
- A) Hai góc đối đỉnh thì bằng nhau.
- B) Hai góc kề bù có tổng số đo bằng $180^\circ$.
- C) Tia phân giác của góc $\widehat{xOy}$ tạo với hai cạnh $Ox, Oy$ hai góc bằng nhau.
- D) Hai góc bằng nhau có chung đỉnh thì luôn đối đỉnh.

**Câu 4:** Cho góc $\widehat{xOy} = 100^\circ$. Tia $Oz$ là tia phân giác của góc $\widehat{xOy}$. Số đo góc $\widehat{xOz}$ là:
- A) $100^\circ$
- B) $50^\circ$
- C) $25^\circ$
- D) $80^\circ$

**Câu 5:** Cho hai góc kề bù $\widehat{xOy}$ và $\widehat{yOz}$. Tia $Om, On$ lần lượt là phân giác của $\widehat{xOy}$ và $\widehat{yOz}$. Số đo góc $\widehat{mOn}$ là:
- A) $45^\circ$
- B) $60^\circ$
- C) $90^\circ$
- D) $180^\circ$

**Câu 6:** Cho $3$ đường thẳng cùng đi qua điểm $O$. Số cặp góc đối đỉnh (khác góc bẹt) tạo thành là:
- A) $3$
- B) $6$
- C) $9$
- D) $12$

---

#### Phần II. Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):**
Hai đường thẳng $AB$ và $CD$ cắt nhau tại điểm $O$.
a) Biết $\widehat{AOC} = 45^\circ$. Tính số đo các góc $\widehat{BOD}$, $\widehat{AOD}$ và $\widehat{BOC}$.
b) Vẽ tia $Om$ là tia phân giác của $\widehat{AOC}$. Tính số đo góc $\widehat{BOm}$.

**Bài 2 (2,0 điểm):**
Cho góc bẹt $\widehat{xOy}$. Trên cùng một nửa mặt phẳng bờ $xy$, vẽ tia $Oz$ sao cho $\widehat{xOz} = 70^\circ$.
a) Tính số đo góc $\widehat{zOy}$.
b) Vẽ tia $Ot$ là tia phân giác của góc $\widehat{zOy}$. Tính số đo góc $\widehat{xOt}$.

**Bài 3 (2,0 điểm):**
Một người thợ mộc đóng một chiếc giá sách có hai thanh chống chéo nhau hình chữ X để tăng độ chịu lực. Hai thanh gỗ tạo thành góc nhọn bằng $40^\circ$.
a) Tính các góc còn lại giữa hai thanh gỗ.
b) Người thợ lắp thêm một thanh gỗ ngang $Ot$ chia đôi góc tù phía trên của giá sách. Hỏi thanh gỗ ngang $Ot$ có vuông góc với thanh phân giác của góc nhọn bên cạnh không? Vì sao?

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho $5$ đường thẳng phân biệt cùng đi qua điểm $O$.
a) Tính số góc (khác góc bẹt) tạo thành tại đỉnh $O$.
b) Chứng minh rằng trong các góc tạo thành không chứa điểm trong chung, luôn tồn tại ít nhất một góc có số đo không vượt quá $36^\circ$.

---

#### Hướng dẫn chấm Đề số 45 phút

**Phần I. Trắc nghiệm (3,0 điểm — mỗi câu 0,5 điểm)**
1. **C** (Định nghĩa góc đối đỉnh).
2. **C** ($180^\circ - 40^\circ = 140^\circ$).
3. **D** (Hai góc bằng nhau chung đỉnh chưa chắc đối đỉnh).
4. **B** ($100^\circ : 2 = 50^\circ$).
5. **C** ($90^\circ$ - phân giác hai góc kề bù vuông góc).
6. **B** ($3 \cdot 2 = 6$ cặp).

**Phần II. Tự luận (7,0 điểm)**

- **Bài 1 (2,0 điểm):**
  - a) $\widehat{BOD} = \widehat{AOC} = 45^\circ$ (đối đỉnh) *(0,5 điểm)*.
    $\widehat{AOD} = 180^\circ - 45^\circ = 135^\circ$ (kề bù) *(0,5 điểm)*.
    $\widehat{BOC} = \widehat{AOD} = 135^\circ$ (đối đỉnh) *(0,5 điểm)*.
  - b) $Om$ là phân giác $\widehat{AOC} \implies \widehat{AOm} = 22{,}5^\circ$.
    Vì $OA, OB$ đối nhau nên $\widehat{AOm}$ và $\widehat{BOm}$ kề bù:
    $\widehat{BOm} = 180^\circ - 22{,}5^\circ = 157{,}5^\circ$ *(0,5 điểm)*.

- **Bài 2 (2,0 điểm):**
  - a) $\widehat{xOz}$ và $\widehat{zOy}$ kề bù:
    $\widehat{zOy} = 180^\circ - \widehat{xOz} = 180^\circ - 70^\circ = 110^\circ$ *(1,0 điểm)*.
  - b) $Ot$ là phân giác $\widehat{zOy} \implies \widehat{zOt} = \frac{110^\circ}{2} = 55^\circ$ *(0,5 điểm)*.
    Tia $Oz$ nằm giữa hai tia $Ox$ và $Ot$:
    $\widehat{xOt} = \widehat{xOz} + \widehat{zOt} = 70^\circ + 55^\circ = 125^\circ$ *(0,5 điểm)*.

- **Bài 3 (2,0 điểm):**
  - a) Góc nhọn đối đỉnh bằng $40^\circ$ *(0,5 điểm)*.
    Hai góc tù kề bù bằng $180^\circ - 40^\circ = 140^\circ$ *(0,5 điểm)*.
  - b) Vì góc tù phía trên và góc nhọn bên cạnh là hai góc kề bù.
    Thanh gỗ ngang $Ot$ là tia phân giác của góc tù, thanh kia là tia phân giác của góc nhọn kề bù.
    Theo định lý phân giác của hai góc kề bù, hai tia phân giác này vuông góc với nhau ($90^\circ$).
    Vậy thanh gỗ ngang $Ot$ vuông góc với thanh phân giác của góc nhọn bên cạnh *(1,0 điểm)*.

- **Bài 4 (1,0 điểm):**
  - a) $5$ đường thẳng tạo ra $10$ tia chung gốc $O$.
    Số góc tạo thành là $\frac{10 \cdot 9}{2} = 45$ góc.
    Trừ đi $5$ góc bẹt, còn lại $45 - 5 = 40$ góc khác góc bẹt *(0,5 điểm)*.
  - b) Mười tia chung gốc chia mặt phẳng thành $10$ góc liên tiếp không có điểm trong chung quanh điểm $O$.
    Tổng số đo của $10$ góc này bằng $360^\circ$ *(0,25 điểm)*.
    Theo nguyên lý Dirichlet, tồn tại ít nhất một góc có số đo không vượt quá:
    $$\dfrac{360^\circ}{10} = 36^\circ.$$
    Định lý được chứng minh *(0,25 điểm)*.
