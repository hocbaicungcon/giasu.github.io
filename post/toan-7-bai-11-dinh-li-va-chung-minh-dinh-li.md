---
title: 'Bài 11: Định lí và chứng minh định lí - Cấu trúc suy luận hình học và 5 Chuyên đề Nâng cao'
description: 'Làm chủ Định lí và chứng minh định lí Toán 7: cấu trúc giả thiết - kết luận (Nếu... thì...), quy trình 3 bước chứng minh hình học chuẩn mực, mệnh đề đảo và phản ví dụ, 5 chuyên đề Olympic suy luận logic và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Định lí
  - Chứng minh định lí
  - Giả thiết và kết luận
  - Mệnh đề đảo
  - Kết nối tri thức
grade: 7
---

# Bài 11. Định lí và chứng minh định lí

Trong cuộc sống hàng ngày, đôi mắt của chúng ta đôi khi có thể bị đánh lừa:
- Khi nhìn vào hai thanh sắt trên đường ray xe lửa, mắt ta có cảm giác chúng chụm lại ở phía chân trời xa xăm, nhưng thực tế chúng luôn giữ khoảng cách song song đều đặn.
- Trong các bức tranh ảo ảnh thị giác nổi tiếng (như ảo ảnh bàn cờ Hering hay ảo ảnh hai mũi tên Müller-Lyer), hai đoạn thẳng hoàn toàn bằng nhau nhưng người xem lại khẳng định chắc nịch đoạn này dài hơn đoạn kia.

Chính vì giác quan con người có thể sai lệch, các nhà toán học Hy Lạp cổ đại đã thiết lập nên một nguyên tắc bất di bất dịch cho bộ môn Hình học: **Không được dựa vào cảm tính "trông có vẻ như vậy", không được dùng phép đo đạc bằng thước kẻ để khẳng định chân lý vĩnh cửu. Mọi khẳng định đều phải được suy luận một cách logic, chặt chẽ, không thể chối cãi!**

Khẳng định đúng đắn được suy ra bằng con đường lập luận đó chính là một **Định lí**. Và con đường dẫn từ những điều đã cho đến kết luận cuối cùng được gọi là **Chứng minh định lí**. Bài học này là bước ngoặt quan trọng nhất của chương trình Hình học 7, đưa các em từ giai đoạn "nhận biết trực quan" sang giai đoạn "tư duy lập luận hình học trừu tượng"!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 11: ĐỊNH LÍ & CHỨNG MINH ĐỊNH LÍ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cấu trúc của Định lí</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phát biểu dạng <b>"Nếu [GT] thì [KL]"</b>.<br>• <b>Giả thiết (GT):</b> Điều đã cho trước (nằm sau "Nếu", trước "thì").<br>• <b>Kết luận (KL):</b> Điều cần suy ra (nằm sau "thì").</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Quy trình 3 bước chứng minh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <b>Bước 1:</b> Vẽ hình minh họa chính xác.<br>• <b>Bước 2:</b> Viết tóm tắt GT, KL bằng ký hiệu toán học.<br>• <b>Bước 3:</b> Lập luận từng bước, mỗi bước <i>bắt buộc ghi rõ căn cứ</i> trong ngoặc đơn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Mệnh đề đảo & Phản ví dụ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <b>Mệnh đề đảo:</b> Đổi chỗ GT và KL (không nhất thiết đúng).<br>• <b>Phản ví dụ:</b> Chỉ cần <i>một trường hợp sai</i> là đủ bác bỏ hoàn toàn khẳng định sai.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật suy luận Olympic</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phương pháp <b>chứng minh phản chứng</b>.<br>• Sơ đồ phân tích đi lên (suy luận ngược).<br>• Định lý về hai tia phân giác đối đỉnh và phân giác vuông góc.</p>
    </div>
  </div>
</div>

---

## Khởi động — Kiểm tra kiến thức nền cho suy luận (5–7 phút)

Hãy kiểm tra lại "kho vũ khí lập luận" của mình qua $5$ câu hỏi nhanh sau:

1. **Hai góc kề bù:** Nếu biết góc $\widehat{xOy}$ và góc $\widehat{yOz}$ là hai góc kề bù, ta có thể viết ngay đẳng thức toán học nào?
2. **Hai góc đối đỉnh:** Khi hai đường thẳng cắt nhau tạo thành hai góc đối đỉnh, ta được phép rút ra kết luận gì về số đo của chúng?
3. **Tia phân giác:** Cho tia $Ot$ là tia phân giác của góc $\widehat{aOb}$, ta có đẳng thức góc nào?
4. **Dấu hiệu song song:** Khi một đường thẳng cắt hai đường thẳng và có một cặp góc so le trong bằng nhau, ta kết luận được điều gì?
5. **Tiên đề Euclid:** Qua một điểm nằm ngoài đường thẳng, có thể vẽ được bao nhiêu đường thẳng song song với đường thẳng đó?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** $\widehat{xOy} + \widehat{yOz} = 180^\circ$.
2. **Trả lời:** Hai góc đối đỉnh thì bằng nhau.
3. **Trả lời:** $\widehat{aOt} = \widehat{tOb} = \frac{1}{2}\widehat{aOb}$.
4. **Trả lời:** Hai đường thẳng đó song song với nhau.
5. **Trả lời:** Chỉ có duy nhất một đường thẳng song song với đường thẳng đã cho.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Định lí là gì? Cấu trúc Giả thiết và Kết luận

> [!IMPORTANT]
> **KHÁI NIỆM:**
> **Định lí** là một khẳng định toán học được suy ra từ những khẳng định được coi là đúng đã biết (như tiên đề, định nghĩa, hoặc các định lí đã chứng minh trước đó).

Đa số các định lí trong hình học đều có thể phát biểu tường minh dưới dạng:

<div style="text-align: center; margin: 20px 0; font-size: 1.15em; font-weight: bold; color: var(--primary-color, #2563eb);">
  "NẾU <span style="color: #047857;">[Giả thiết]</span> THÌ <span style="color: #dc2626;">[Kết luận]</span>"
</div>

- **Giả thiết (viết tắt là GT):** Là những điều kiện, dữ kiện đã cho trước. Trong câu văn, giả thiết là phần nằm sau chữ *"Nếu"* và trước chữ *"thì"*.
- **Kết luận (viết tắt là KL):** Là điều khẳng định được rút ra, cần phải chứng minh. Trong câu văn, kết luận là phần nằm sau chữ *"thì"*.

#### Bảng ví dụ phân tích cấu trúc định lí:

| Định lí được phát biểu | Giả thiết (GT) | Kết luận (KL) |
| :--- | :--- | :--- |
| **Định lí 1:** *"Hai góc đối đỉnh thì bằng nhau"* | Hai góc đối đỉnh | Chúng bằng nhau |
| *Dạng "Nếu... thì...":* *"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau"* | Hai góc đối đỉnh | Hai góc đó bằng nhau |
| **Định lí 2:** *"Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì song song với nhau"* | Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba | Chúng song song với nhau |
| **Định lí 3:** *"Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau"* | Một đường thẳng cắt hai đường thẳng song song | Hai góc so le trong bằng nhau |

---

### 2. Chứng minh định lí là gì?

> [!IMPORTANT]
> **KHÁI NIỆM:**
> **Chứng minh định lí** là dùng lập luận suy diễn logic để đi từ **Giả thiết** đến **Kết luận**.

Trong quá trình chứng minh:
- **Mỗi bước suy luận bắt buộc phải có căn cứ rõ ràng:** Căn cứ đó có thể là giả thiết của đề bài, định nghĩa, tiên đề hoặc một định lí đã học trước đó.
- Căn cứ thường được ghi ngắn gọn trong dấu ngoặc đơn `(...)` ở cuối mỗi dòng lập luận.
- **Tuyệt đối không được:**
  - Nhìn hình vẽ rồi võ đoán ("thấy hai đoạn này bằng nhau", "nhìn góc này thấy vuông").
  - Dùng chính điều đang cần chứng minh để làm căn cứ (lỗi lập luận vòng quanh).

---

### 3. Quy trình 3 bước chuẩn mực khi chứng minh một định lí hình học

Để bài làm sáng sủa, chặt chẽ và đạt điểm tối đa trong các bài kiểm tra, học sinh cần tuân thủ nghiêm ngặt quy trình $3$ bước sau:

<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 10px; padding: 18px; margin: 20px 0;">
  <p style="margin: 0 0 10px 0; font-weight: bold; color: #1d4ed8;">BƯỚC 1: VẼ HÌNH MINH HỌA</p>
  <p style="margin: 0 0 12px 0; font-size: 0.95em;">Vẽ hình trực quan, đặt tên cho các điểm, đường thẳng, góc và đánh số các góc nếu cần thiết.</p>
  
  <p style="margin: 0 0 10px 0; font-weight: bold; color: #047857;">BƯỚC 2: GHI GIẢ THIẾT (GT) VÀ KẾT LUẬN (KL) BẰNG KÝ HIỆU</p>
  <p style="margin: 0 0 12px 0; font-size: 0.95em;">Dùng bảng ký hiệu toán học ngắn gọn: $\parallel, \perp, \widehat{A_1}, =, \dots$</p>
  
  <p style="margin: 0 0 10px 0; font-weight: bold; color: #b45309;">BƯỚC 3: TRÌNH BÀY CÁC BƯỚC SUY LUẬN LOGIC</p>
  <p style="margin: 0; font-size: 0.95em;">Nối kết các mệnh đề: "Vì... nên...", "Ta có... suy ra...", kèm căn cứ trong ngoặc đơn ở mỗi dòng cho tới khi thu được Kết luận.</p>
</div>

---

### 4. Ví dụ mẫu mực: Chứng minh định lí "Hai góc đối đỉnh thì bằng nhau"

Hãy theo dõi cách trình bày mẫu $3$ bước hoàn chỉnh cho định lí kinh điển này:

#### Bước 1: Vẽ hình

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 460 220" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Đường thẳng x x' -->
    <line x1="50" y1="170" x2="410" y2="50" stroke="#2563eb" stroke-width="3" />
    <text x="40" y="185" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2563eb">x</text>
    <text x="420" y="50" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2563eb">x'</text>
    
    <!-- Đường thẳng y y' -->
    <line x1="70" y1="40" x2="390" y2="180" stroke="#dc2626" stroke-width="3" />
    <text x="60" y="35" font-family="sans-serif" font-weight="bold" font-size="16" fill="#dc2626">y</text>
    <text x="400" y="195" font-family="sans-serif" font-weight="bold" font-size="16" fill="#dc2626">y'</text>

    <!-- Điểm O -->
    <circle cx="230" cy="110" r="5" fill="#1e293b" />
    <text x="225" y="135" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">O</text>

    <!-- Các góc O1, O2, O3 -->
    <text x="230" y="75" font-family="sans-serif" font-weight="bold" font-size="16" fill="#047857">Ô₁</text>
    <text x="290" y="115" font-family="sans-serif" font-weight="bold" font-size="16" fill="#64748b">Ô₂</text>
    <text x="230" y="165" font-family="sans-serif" font-weight="bold" font-size="16" fill="#047857">Ô₃</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><b>Hình 1:</b> Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại điểm $O$.</p>
</div>

#### Bước 2: Tóm tắt Giả thiết và Kết luận bằng bảng ký hiệu

| **Giả thiết (GT)** | $xx'$ cắt $yy'$ tại $O$; $\widehat{O_1}$ và $\widehat{O_3}$ là hai góc đối đỉnh |
| :--- | :--- |
| **Kết luận (KL)** | $\widehat{O_1} = \widehat{O_3}$ |

#### Bước 3: Trình bày các bước suy luận

1. Vì tia $Ox$ và tia $Ox'$ là hai tia đối nhau, nên góc $\widehat{O_1}$ và góc $\widehat{O_2}$ là hai góc kề bù:
   $$\widehat{O_1} + \widehat{O_2} = 180^\circ \implies \widehat{O_1} = 180^\circ - \widehat{O_2} \quad (1)$$
2. Vì tia $Oy$ và tia $Oy'$ là hai tia đối nhau, nên góc $\widehat{O_3}$ và góc $\widehat{O_2}$ là hai góc kề bù:
   $$\widehat{O_3} + \widehat{O_2} = 180^\circ \implies \widehat{O_3} = 180^\circ - \widehat{O_2} \quad (2)$$
3. Từ $(1)$ và $(2)$, suy ra:
   $$\widehat{O_1} = \widehat{O_3}$$
   (do cùng bằng $180^\circ - \widehat{O_2}$).
Định lí đã được chứng minh trọn vẹn!

---

### 5. Mệnh đề đảo & Phương pháp bác bỏ bằng Phản ví dụ

#### a) Mệnh đề đảo là gì?
Nếu một định lí có dạng *"Nếu A thì B"*, thì mệnh đề có dạng *"Nếu B thì A"* được gọi là **mệnh đề đảo** của định lí đó (đổi chỗ vai trò của Giả thiết và Kết luận).

> [!WARNING]
> **ĐIỀU CỐT YẾU CẦN NHỚ:**
> **Mệnh đề đảo của một định lí đúng CHƯA CHẮC đã đúng!**

- **Ví dụ về mệnh đề đảo ĐÚNG:**
  - Định lí thuận: *"Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau"* (Đúng).
  - Mệnh đề đảo: *"Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia"* (Cũng đúng!).

- **Ví dụ về mệnh đề đảo SAI:**
  - Định lí thuận: *"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau"* (Đúng 100%).
  - Mệnh đề đảo: *"Nếu hai góc bằng nhau thì hai góc đó đối đỉnh"* (**SAI HOÀN TOÀN!**).

#### b) Phản ví dụ (Counterexample) là gì?
> [!NOTE]
> Để khẳng định một mệnh đề là **ĐÚNG**, ta bắt buộc phải chứng minh nó đúng cho **mọi trường hợp**.  
> Nhưng để chứng minh một mệnh đề là **SAI**, ta chỉ cần chỉ ra **ĐÚNG MỘT TRƯỜNG HỢP** mà giả thiết thỏa mãn nhưng kết luận không đúng. Trường hợp cụ thể đó được gọi là **phản ví dụ**.

*Minh họa phản ví dụ:* Để bác bỏ mệnh đề *"Hai góc bằng nhau thì đối đỉnh"*, ta chỉ cần chỉ ra:
Vẽ hai góc so le trong $\widehat{A_1} = 60^\circ$ và $\widehat{B_1} = 60^\circ$ của hai đường thẳng song song. Hai góc này bằng nhau (cùng bằng $60^\circ$) nhưng đỉnh của chúng hoàn toàn khác nhau ($A \neq B$), cạnh của góc này không phải là tia đối của cạnh góc kia. Do đó chúng không phải hai góc đối đỉnh! Mệnh đề bị bác bỏ tức thì!

---

## II. Bảng so sánh trực quan & Cạm bẫy trong chứng minh

### 1. Phân biệt Tiên đề - Định nghĩa - Định lí

| Khái niệm | Định nghĩa | Cần chứng minh không? | Ví dụ tiêu biểu |
| :--- | :--- | :---: | :--- |
| **Tiên đề** | Chân lý hiển nhiên ban đầu, thừa nhận làm nền tảng | **KHÔNG** | Tiên đề Euclid về đường thẳng song song |
| **Định nghĩa** | Quy ước đặt tên và nêu rõ đặc điểm nhận diện | **KHÔNG** | Hai góc kề bù là hai góc vừa kề nhau vừa có tổng số đo bằng $180^\circ$ |
| **Định lí** | Khẳng định toán học đúng đắn rút ra từ lập luận suy diễn | **BẮT BUỘC CÓ** | Hai góc đối đỉnh thì bằng nhau; Quan hệ vuông góc - song song |

---

### 2. Bốn cạm bẫy học sinh rất hay mắc phải

> [!WARNING]
> **CẠM BẪY 1: Nhìn hình rồi tự ý suy ra**
> Học sinh nhìn hình vẽ thấy hai góc "có vẻ bằng nhau", hoặc hai đoạn thẳng "trông như song song" liền viết ngay vào bài giải mà không có căn cứ.
> - **Nguyên tắc:** Hình vẽ chỉ mang tính chất minh họa. Mọi kết luận đều phải được suy ra từ Giả thiết hoặc các định lí đã có.

> [!WARNING]
> **CẠM BẪY 2: Ngộ nhận điều cần chứng minh làm giả thiết**
> Bài toán yêu cầu chứng minh $a \parallel b$. Nhưng trong phần lập luận, học sinh lại viết: *"Vì $a \parallel b$ nên góc so le trong bằng nhau..."*. Đây là lỗi logic lập luận luẩn quẩn cực kỳ nghiêm trọng!

> [!WARNING]
> **CẠM BẪY 3: Quên ghi căn cứ lập luận trong ngoặc đơn**
> Viết $\widehat{A_1} = \widehat{B_1}$ mà không ghi `(hai góc đồng vị của a // b)` khiến lời giải thiếu căn cứ và bị trừ điểm trình bày.

> [!WARNING]
> **CẠM BẪY 4: Tự động coi mệnh đề đảo là đúng**
> Thấy định lí thuận đúng liền suy ngay mệnh đề đảo cũng đúng. Luôn nhớ ví dụ "đối đỉnh $\implies$ bằng nhau" nhưng "bằng nhau $\not\implies$ đối đỉnh"!

---

## III. Các dạng toán điển hình & Lời giải chi tiết

### Dạng 1: Xác định Giả thiết, Kết luận và phát biểu định lí dưới dạng "Nếu... thì..."

**Phương pháp giải:**
1. Đọc kỹ phát biểu của định lí.
2. Tìm điều kiện đã cho (vế điều kiện) $\implies$ Đó là Giả thiết.
3. Tìm kết quả tất yếu rút ra (vế khẳng định) $\implies$ Đó là Kết luận.
4. Chuyển đổi câu văn: Đặt từ *"Nếu"* trước Giả thiết và từ *"thì"* trước Kết luận.

#### Ví dụ 1
Cho các định lí sau. Hãy xác định Giả thiết, Kết luận và phát biểu lại dưới dạng *"Nếu... thì..."*:
a) Hai góc cùng bù với một góc thứ ba thì bằng nhau.  
b) Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.  

**Lời giải:**
a) Định lí: *"Hai góc cùng bù với một góc thứ ba thì bằng nhau"*:
- **Giả thiết (GT):** Hai góc cùng bù với một góc thứ ba.
- **Kết luận (KL):** Hai góc đó bằng nhau.
- **Phát biểu lại:** *"Nếu hai góc cùng bù với một góc thứ ba thì chúng bằng nhau."*

b) Định lí: *"Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia"*:
- **Giả thiết (GT):** Một đường thẳng vuông góc với một trong hai đường thẳng song song.
- **Kết luận (KL):** Nó vuông góc với đường thẳng kia.
- **Phát biểu lại:** *"Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia."*

---

### Dạng 2: Vẽ hình và ghi Giả thiết, Kết luận bằng ký hiệu toán học

**Phương pháp giải:**
1. Căn cứ vào Giả thiết, vẽ hình chính xác với thước kẻ và êke.
2. Đặt tên các điểm, đường thẳng, góc rõ ràng.
3. Lập bảng GT - KL, chuyển toàn bộ câu chữ thành ký hiệu toán học ($\parallel, \perp, =, \widehat{A}, \dots$).

#### Ví dụ 2
Vẽ hình và ghi Giả thiết, Kết luận bằng ký hiệu cho định lí:  
*"Nếu hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau."*

**Lời giải:**
- **Hình vẽ:** Vẽ ba đường thẳng phân biệt nằm ngang $a, b, c$ sao cho $a \parallel c$ và $b \parallel c$.

```
       a --------------------------------
       b --------------------------------
       c --------------------------------
```

- **Bảng Giả thiết và Kết luận bằng ký hiệu:**

| **Giả thiết (GT)** | $a, b, c$ là ba đường thẳng phân biệt; $a \parallel c$; $b \parallel c$ |
| :--- | :--- |
| **Kết luận (KL)** | $a \parallel b$ |

---

### Dạng 3: Trình bày bài toán chứng minh định lí hình học

**Phương pháp giải:**
Áp dụng quy trình $3$ bước:
1. Vẽ hình.
2. Viết GT, KL.
3. Trình bày suy luận có căn cứ trong ngoặc đơn.

#### Ví dụ 3
Chứng minh định lí: *"Nếu hai góc cùng phụ với một góc thứ ba thì chúng bằng nhau"* (biết rằng hai góc phụ nhau là hai góc có tổng số đo bằng $90^\circ$).

**Lời giải:**
- **Bước 1: Vẽ hình & Ký hiệu:**  
  Gọi ba góc đó là $\widehat{A}, \widehat{B}, \widehat{C}$. Trong đó $\widehat{A}$ và $\widehat{B}$ cùng phụ với $\widehat{C}$.

- **Bước 2: Ghi GT và KL:**

| **Giả thiết (GT)** | $\widehat{A} + \widehat{C} = 90^\circ$; $\widehat{B} + \widehat{C} = 90^\circ$ |
| :--- | :--- |
| **Kết luận (KL)** | $\widehat{A} = \widehat{B}$ |

- **Bước 3: Lập luận chứng minh:**
1. Vì $\widehat{A}$ phụ với $\widehat{C}$ nên:
   $$\widehat{A} + \widehat{C} = 90^\circ \implies \widehat{A} = 90^\circ - \widehat{C} \quad (1)$$
2. Vì $\widehat{B}$ phụ với $\widehat{C}$ nên:
   $$\widehat{B} + \widehat{C} = 90^\circ \implies \widehat{B} = 90^\circ - \widehat{C} \quad (2)$$
3. Từ $(1)$ và $(2)$, suy ra:
   $$\widehat{A} = \widehat{B}$$
   (do cùng bằng $90^\circ - \widehat{C}$).
*(Định lí được chứng minh hoàn tất).*

---

### Dạng 4: Bác bỏ một mệnh đề sai bằng Phản ví dụ (Counterexample)

**Phương pháp giải:**
1. Phân tích mệnh đề cần xét.
2. Tìm một trường hợp cụ thể thỏa mãn phần Giả thiết nhưng làm cho phần Kết luận bị sai.
3. Mô tả rõ phản ví dụ đó để kết luận mệnh đề là sai.

#### Ví dụ 4
Xét tính đúng / sai của khẳng định sau: *"Nếu hai đường thẳng cắt nhau thì chúng vuông góc với nhau"*. Hãy đưa ra phản ví dụ để bác bỏ nếu khẳng định này sai.

**Lời giải:**
- Khẳng định trên là **SAI**.
- **Phản ví dụ:**  
  Vẽ hai đường thẳng $xx'$ và $yy'$ cắt nhau tại điểm $O$ tạo thành góc $\widehat{xOy} = 60^\circ$.  
  - Giả thiết được thỏa mãn: Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$.  
  - Nhưng kết luận không xảy ra: Góc tạo thành bằng $60^\circ \neq 90^\circ$, do đó hai đường thẳng này **không vuông góc** với nhau!  
  Vậy khẳng định trên đã bị bác bỏ hoàn toàn.

---

### Dạng 5: Bài toán ứng dụng suy luận logic trong đời sống thực tế

#### Ví dụ 5 (Kiểm tra chất lượng sàn gạch xây dựng)
Trong tiêu chuẩn xây dựng nhà ở, định lí kỹ thuật quy định:  
*"Nếu hai mép gạch phân biệt cùng vuông góc với mép tường chuẩn của căn phòng thì hai mép gạch đó song song với nhau."*  
Một người thợ lát nền dùng thước đo góc kiểm tra và thấy mép gạch thứ nhất vuông góc với chân tường chuẩn ($90^\circ$), nhưng mép gạch thứ hai tạo với chân tường chuẩn một góc $88{,}5^\circ$.  
Hỏi hai mép gạch đó có song song với nhau không? Người thợ có thể kết luận sàn gạch bị lệch hay không?

**Lời giải:**
- **Giả thiết của định lí:** Cả hai mép gạch đều phải vuông góc với chân tường chuẩn.
- **Thực tế đo đạc:**  
  - Mép gạch 1 tạo với chân tường góc $90^\circ$ (vuông góc).  
  - Mép gạch 2 tạo với chân tường góc $88{,}5^\circ \neq 90^\circ$ (không vuông góc).  
- Giả thiết của định lí không được thỏa mãn. Hai mép gạch này khi kéo dài sẽ cắt nhau (vì hai góc trong cùng phía có tổng $90^\circ + 88{,}5^\circ = 178{,}5^\circ \neq 180^\circ$).  
- **Kết luận:** Hai mép gạch không song song với nhau, sàn gạch đã bị lát lệch $1{,}5^\circ$ và cần phải căn chỉnh lại trước khi vữa xi măng đông kết!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Một định lí hình học luôn luôn gồm hai phần cơ bản là:'
options:
  - 'A) Hình vẽ và lời giải'
  - 'B) Giả thiết và Kết luận'
  - 'C) Định nghĩa và Tiên đề'
  - 'D) Câu hỏi và Đáp án'
answer: 2
explanation: 'Một định lí luôn gồm hai phần: Giả thiết (điều đã cho) và Kết luận (điều cần suy ra).'
```

```quiz
type: choice
question: 'Trong định lí phát biểu dạng "Nếu A thì B", phần nằm sau chữ "Nếu" và trước chữ "thì" được gọi là:'
options:
  - 'A) Kết luận'
  - 'B) Giả thiết'
  - 'C) Chứng minh'
  - 'D) Tiên đề'
answer: 2
explanation: 'Phần nằm sau chữ "Nếu" và trước chữ "thì" là điều kiện đã cho, được gọi là Giả thiết (GT).'
```

```quiz
type: choice
question: 'Cho định lí: "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau". Kết luận của định lí là:'
options:
  - 'A) Hai góc đối đỉnh'
  - 'B) Hai góc đó bằng nhau'
  - 'C) Hai góc đó kề bù'
  - 'D) Hai đường thẳng cắt nhau'
answer: 2
explanation: 'Phần sau chữ "thì" là kết luận: "hai góc đó bằng nhau".'
```

```quiz
type: choice
question: 'Mệnh đề nào sau đây là MỆNH ĐỀ ĐẢO của định lí: "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau"?'
options:
  - 'A) Nếu hai góc không đối đỉnh thì hai góc đó không bằng nhau'
  - 'B) Nếu hai góc bằng nhau thì hai góc đó đối đỉnh'
  - 'C) Hai góc đối đỉnh thì bù nhau'
  - 'D) Hai góc bằng nhau thì kề bù'
answer: 2
explanation: 'Mệnh đề đảo đổi chỗ Giả thiết và Kết luận: "Nếu hai góc bằng nhau thì hai góc đó đối đỉnh".'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'A) Mọi khẳng định trông có vẻ đúng trên hình vẽ đều là định lí'
  - 'B) Mệnh đề đảo của một định lí đúng thì luôn luôn đúng'
  - 'C) Để bác bỏ một khẳng định sai, ta chỉ cần chỉ ra đúng một phản ví dụ'
  - 'D) Chứng minh định lí không cần ghi căn cứ'
answer: 3
explanation: 'Chỉ cần chỉ ra duy nhất một trường hợp cụ thể mà giả thiết đúng nhưng kết luận sai (phản ví dụ) là đủ để bác bỏ khẳng định đó.'
```

```quiz
type: choice
question: 'Trong các bước chứng minh một định lí hình học, sau mỗi dòng suy luận, ta cần ghi điều gì trong dấu ngoặc đơn?'
options:
  - 'A) Tên của người làm bài'
  - 'B) Căn cứ của suy luận (giả thiết, định nghĩa, định lí đã học)'
  - 'C) Điểm số của bước đó'
  - 'D) Không cần ghi gì cả'
answer: 2
explanation: 'Mỗi bước suy luận bắt buộc phải có căn cứ rõ ràng (ghi trong ngoặc đơn) để đảm bảo tính chặt chẽ logic.'
```

```quiz
type: choice
question: 'Cho khẳng định: "Nếu hai góc bằng nhau thì chúng đối đỉnh". Khẳng định này là:'
options:
  - 'A) Đúng 100%'
  - 'B) Sai, vì hai góc so le trong bằng nhau nhưng không đối đỉnh'
  - 'C) Đúng trong mọi tam giác'
  - 'D) Là một định lí của Euclid'
answer: 2
explanation: 'Khẳng định này sai. Phản ví dụ: hai góc so le trong bằng nhau hoặc hai góc nhọn ở hai hình khác nhau cùng bằng 45^\circ nhưng không đối đỉnh.'
```

```quiz
type: choice
question: 'Cho định lí: "Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau". Giả thiết ghi bằng ký hiệu là:'
options:
  - 'A) a // b // c'
  - 'B) a, b, c phân biệt; a // c; b // c'
  - 'C) a // b => b // c'
  - 'D) a vuông góc với c; b vuông góc với c'
answer: 2
explanation: 'Giả thiết là điều đã cho: ba đường thẳng a, b, c phân biệt thỏa mãn a // c và b // c.'
```

```quiz
type: choice
question: 'Để chứng minh định lí "Hai góc đối đỉnh thì bằng nhau", ta đã sử dụng tính chất nền tảng nào sau đây?'
options:
  - 'A) Tính chất hai góc so le trong'
  - 'B) Tính chất hai góc kề bù có tổng số đo bằng 180^\circ'
  - 'C) Tính chất tam giác đều'
  - 'D) Tiên đề Euclid về đường song song'
answer: 2
explanation: 'Ta dùng tính chất hai góc kề bù: hai góc đối đỉnh cùng kề bù với góc thứ ba nên chúng cùng bằng 180^\circ trừ đi góc đó.'
```

```quiz
type: choice
question: 'Khái niệm toán học nào KHÔNG CẦN và KHÔNG THỂ chứng minh, được thừa nhận làm chân lý nền tảng ban đầu?'
options:
  - 'A) Định lí'
  - 'B) Hệ quả'
  - 'C) Tiên đề'
  - 'D) Bài toán'
answer: 3
explanation: 'Tiên đề là những chân lý ban đầu được thừa nhận mà không cần chứng minh, dùng làm cơ sở xây dựng hệ thống định lí.'
```

---

## V. 5 Chuyên đề Olympic & Học sinh giỏi (HSG) bứt phá

---

### Chuyên đề 1: Phương pháp chứng minh phản chứng (Proof by Contradiction)

> [!TIP]
> **NGUYÊN TẮC CHỨNG MINH PHẢN CHỨNG:**
> Muốn chứng minh kết luận $B$ là đúng:
> 1. **Giả sử ngược lại:** Giả sử $B$ sai (phủ định của kết luận).
> 2. **Lập luận suy diễn:** Dựa vào giả thiết và điều giả sử, suy ra các hệ quả tiếp theo.
> 3. **Chỉ ra mâu thuẫn:** Đi đến một điều vô lý, mâu thuẫn với giả thiết ban đầu hoặc mâu thuẫn với một chân lý/tiên đề đã biết.
> 4. **Kết luận:** Điều giả sử là sai, vậy kết luận $B$ bắt buộc phải đúng!

#### Bài toán 1.1
Chứng minh định lí: *"Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau"* bằng phương pháp phản chứng.

**Lời giải:**
Cho hai đường thẳng phân biệt $a$ và $b$ cùng vuông góc với đường thẳng $c$. Cần chứng minh $a \parallel b$.

- **Giả sử ngược lại:** $a$ không song song với $b$.  
  Vì $a$ và $b$ phân biệt nên chúng phải cắt nhau tại một điểm, gọi giao điểm đó là điểm $M$.
- Khi đó, qua điểm $M$ có hai đường thẳng phân biệt là $a$ và $b$ cùng vuông góc với đường thẳng $c$.
- Điều này mâu thuẫn với định lí cơ bản: *"Qua một điểm ngoài đường thẳng, chỉ có duy nhất một đường thẳng vuông góc với đường thẳng đó"*.
- Sự mâu thuẫn này chứng tỏ giả thiết phản chứng ("$a$ cắt $b$") là hoàn toàn sai.  
Vậy bắt buộc $a \parallel b$. *(Điều phải chứng minh).*

---

### Chuyên đề 2: Chứng minh định lí hai tia phân giác của hai góc đối đỉnh là hai tia đối nhau

> [!IMPORTANT]
> **ĐỊNH LÝ PHÂN GIÁC ĐỐI ĐỈNH:**
> **Hai tia phân giác của hai góc đối đỉnh là hai tia đối nhau.**

#### Bài toán 2.1
Cho hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$. Gọi $Ot$ là tia phân giác của góc $\widehat{xOy}$ và $Ot'$ là tia phân giác của góc $\widehat{x'Oy'}$. Chứng minh rằng tia $Ot$ và tia $Ot'$ là hai tia đối nhau.

```
                    y          t
                     \        /
                      \      /
                       \    /
            x ---------- O ---------- x'
                        / \
                       /   \
                      /     \
                     t'      y'
```

**Lời giải:**
Ta cần chứng minh góc $\widehat{tOt'} = 180^\circ$ (góc bẹt).

1. Vì hai góc $\widehat{xOy}$ và $\widehat{x'Oy}$ là hai góc kề bù nên:
   $$\widehat{xOy} + \widehat{x'Oy} = 180^\circ.$$
2. Vì $Ot$ là tia phân giác của $\widehat{xOy}$ nên:
   $$\widehat{tOy} = \frac{1}{2}\widehat{xOy}.$$
3. Vì $Ot'$ là tia phân giác của $\widehat{x'Oy'}$ nên:
   $$\widehat{x'Ot'} = \frac{1}{2}\widehat{x'Oy'}.$$
   Mà $\widehat{xOy} = \widehat{x'Oy'}$ (hai góc đối đỉnh), suy ra:
   $$\widehat{x'Ot'} = \widehat{tOy}.$$
4. Xét tia $Ox'$ nằm giữa hai tia $Oy$ và $Ot'$. Ta có:
   $$\widehat{tOt'} = \widehat{tOy} + \widehat{yOx'} + \widehat{x'Ot'}.$$
   Thay $\widehat{x'Ot'} = \widehat{tOy}$ vào:
   $$\widehat{tOt'} = \widehat{tOy} + \widehat{yOx'} + \widehat{xOt} = (\widehat{xOt} + \widehat{tOy}) + \widehat{yOx'} = \widehat{xOy} + \widehat{yOx'} = 180^\circ.$$
Vì góc $\widehat{tOt'} = 180^\circ$ nên $Ot$ và $Ot'$ là hai tia đối nhau. *(Điều phải chứng minh).*

---

### Chuyên đề 3: Chứng minh định lí hai tia phân giác của hai góc kề bù thì vuông góc

> [!IMPORTANT]
> **ĐỊNH LÝ PHÂN GIÁC VUÔNG GÓC:**
> **Hai tia phân giác của hai góc kề bù thì vuông góc với nhau.**

#### Bài toán 3.1
Cho hai góc kề bù $\widehat{xOy}$ và $\widehat{yOz}$. Tia $Om$ là tia phân giác của $\widehat{xOy}$, tia $On$ là tia phân giác của $\widehat{yOz}$. Chứng minh rằng $Om \perp On$.

**Lời giải:**
1. Vì $\widehat{xOy}$ và $\widehat{yOz}$ là hai góc kề bù nên:
   $$\widehat{xOy} + \widehat{yOz} = 180^\circ.$$
2. Vì $Om$ là tia phân giác của $\widehat{xOy}$ nên tia $Om$ nằm giữa hai tia $Ox, Oy$ và:
   $$\widehat{mOy} = \frac{1}{2}\widehat{xOy}.$$
3. Vì $On$ là tia phân giác của $\widehat{yOz}$ nên tia $On$ nằm giữa hai tia $Oy, Oz$ và:
   $$\widehat{yOn} = \frac{1}{2}\widehat{yOz}.$$
4. Vì tia $Oy$ nằm giữa hai tia $Om$ và $On$ nên:
   $$\widehat{mOn} = \widehat{mOy} + \widehat{yOn} = \frac{1}{2}\widehat{xOy} + \frac{1}{2}\widehat{yOz} = \frac{1}{2}\left(\widehat{xOy} + \widehat{yOz}\right) = \frac{1}{2} \cdot 180^\circ = 90^\circ.$$
Vì góc $\widehat{mOn} = 90^\circ$, suy ra $Om \perp On$. *(Điều phải chứng minh).*

---

### Chuyên đề 4: Phương pháp sơ đồ phân tích đi lên (Suy luận ngược)

> [!NOTE]
> Khi gặp một bài toán hình học phức tạp chưa nhìn thấy ngay lời giải, các nhà toán học luôn dùng phương pháp **suy luận ngược (Working Backwards)**:
> 
> **[Kết luận cần đạt]** $\Longleftarrow$ **[Điều kiện cần có]** $\Longleftarrow$ **[Căn cứ suy ra]** $\Longleftarrow$ **[Giả thiết đã cho]**
> 
> Sau khi tìm ra chuỗi logic ngược, ta chỉ việc viết lại lời giải theo chiều xuôi từ Giả thiết đến Kết luận.

#### Bài toán 4.1
Cho tam giác $ABC$. Tia phân giác của góc $\widehat{B}$ cắt cạnh $AC$ tại $D$. Qua $A$ kẻ đường thẳng song song với $BD$, đường thẳng này cắt đường thẳng $BC$ tại điểm $E$.  
Chứng minh rằng góc $\widehat{BAE} = \widehat{BEA}$.

**Sơ đồ tư duy ngược (Phân tích đi lên):**
- Cần chứng minh: $\widehat{BAE} = \widehat{BEA}$.
- Ta nhận thấy:
  - $AE \parallel BD$ bị cắt bởi $AB \implies \widehat{BAE} = \widehat{ABD}$ (hai góc so le trong).
  - $AE \parallel BD$ bị cắt bởi $BE \implies \widehat{BEA} = \widehat{DBC}$ (hai góc đồng vị).
- Mà $BD$ là phân giác của $\widehat{B} \implies \widehat{ABD} = \widehat{DBC}$ (giả thiết!).
- Vậy hai góc ban đầu bằng nhau vì cùng bằng hai góc bằng nhau của tia phân giác!

**Trình bày lời giải xuôi:**
1. Vì $BD$ là tia phân giác của góc $\widehat{ABC}$ nên:
   $$\widehat{ABD} = \widehat{DBC} \quad (1)$$
2. Vì $AE \parallel BD$ bị cắt bởi cát tuyến $AB$, hai góc $\widehat{BAE}$ và $\widehat{ABD}$ ở vị trí so le trong nên:
   $$\widehat{BAE} = \widehat{ABD} \quad (2)$$
3. Vì $AE \parallel BD$ bị cắt bởi cát tuyến $BE$, hai góc $\widehat{BEA}$ và $\widehat{DBC}$ ở vị trí đồng vị nên:
   $$\widehat{BEA} = \widehat{DBC} \quad (3)$$
4. Từ $(1), (2)$ và $(3)$, suy ra:
   $$\widehat{BAE} = \widehat{BEA}.$$
*(Điều phải chứng minh).*

---

### Chuyên đề 5: Khái niệm "Khi và chỉ khi" & Định lí tương đương

Trong toán học đỉnh cao, khi một định lí thuận và định lí đảo của nó **cùng đúng**, ta gọi đó là một **Định lí tương đương** (hay quan hệ "Khi và chỉ khi", ký hiệu $\Longleftrightarrow$).

> [!IMPORTANT]
> **VÍ DỤ VỀ ĐỊNH LÝ TƯƠNG ĐƯƠNG:**
> Cho đường thẳng $c$ cắt hai đường thẳng $a$ và $b$:
> **$a$ song song với $b$ KHI VÀ CHỈ KHI một cặp góc so le trong bằng nhau.**
> 
> $$a \parallel b \iff \widehat{A_{\text{slt}}} = \widehat{B_{\text{slt}}}.$$
> 
> - Chiều thuận ($\implies$): Tính chất hai đường song song (Bài 10).
> - Chiều đảo ($\Longleftarrow$): Dấu hiệu nhận biết hai đường song song (Bài 9).

---

## VI. Bộ đề kiểm tra chuẩn hóa

### ĐỀ 1: KIỂM TRA 15 PHÚT (Mức độ Nhận biết & Thông hiểu)

#### A. Trắc nghiệm (6 điểm — Mỗi câu 1 điểm)

**Câu 1.** Trong một định lí, điều kiện cho trước được gọi là:  
A. Kết luận.  
B. Giả thiết.  
C. Lập luận.  
D. Căn cứ.  

**Câu 2.** Định lí: *"Nếu hai góc kề bù thì tổng số đo của chúng bằng $180^\circ$"* có kết luận là:  
A. Hai góc kề bù.  
B. Tổng số đo của chúng bằng $180^\circ$.  
C. Hai góc đối đỉnh.  
D. Chúng bằng nhau.  

**Câu 3.** Phát biểu nào sau đây là MỆNH ĐỀ ĐẢO của mệnh đề: *"Nếu một số chia hết cho 6 thì nó chia hết cho 2"*?  
A. Nếu một số chia hết cho 2 thì nó chia hết cho 6.  
B. Nếu một số không chia hết cho 6 thì nó không chia hết cho 2.  
C. Một số chia hết cho 6 khi và chỉ khi chia hết cho 2.  
D. Nếu một số chia hết cho 3 thì nó chia hết cho 6.  

**Câu 4.** Mệnh đề đảo ở Câu 3 là Đúng hay Sai?  
A. Đúng.  
B. Sai, vì số $4$ chia hết cho 2 nhưng không chia hết cho 6.  
C. Chưa đủ điều kiện xác định.  
D. Đúng với mọi số chẵn.  

**Câu 5.** Khi chứng minh một định lí hình học, bước đầu tiên cần làm là:  
A. Ghi kết luận bằng ký hiệu.  
B. Vẽ hình minh họa nội dung định lí.  
C. Viết các bước suy luận.  
D. Đưa ra phản ví dụ.  

**Câu 6.** Khẳng định nào sau đây là một ĐỊNH LÍ ĐÚNG?  
A. Hai góc bằng nhau thì đối đỉnh.  
B. Hai góc kề nhau thì bù nhau.  
C. Hai góc cùng phụ với một góc thứ ba thì bằng nhau.  
D. Hai đường thẳng cắt nhau thì vuông góc.  

#### B. Tự luận (4 điểm)

**Bài 1 (2,0 điểm).** Viết định lí sau dưới dạng *"Nếu... thì..."*, xác định Giả thiết và Kết luận:  
*"Tia phân giác của một góc chia góc đó thành hai góc có số đo bằng nhau."*

**Bài 2 (2,0 điểm).** Cho hai góc kề nhau $\widehat{AOB}$ và $\widehat{BOC}$ sao cho tia $OA$ và tia $OC$ là hai tia đối nhau. Biết tia $OD$ là phân giác của góc $\widehat{AOB}$ và tia $OE$ là phân giác của góc $\widehat{BOC}$. Chứng minh rằng $OD \perp OE$.

---

#### HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ 15 PHÚT

##### Bảng đáp án trắc nghiệm

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **B** | **A** | **B** | **B** | **C** |

##### Hướng dẫn tự luận

- **Bài 1 (2,0 điểm):**
  - Dạng *"Nếu... thì..."*: *"Nếu một tia là tia phân giác của một góc thì nó chia góc đó thành hai góc có số đo bằng nhau"* *(1,0 điểm)*.
  - **Giả thiết (GT):** Một tia là tia phân giác của một góc *(0,5 điểm)*.
  - **Kết luận (KL):** Nó chia góc đó thành hai góc có số đo bằng nhau *(0,5 điểm)*.

- **Bài 2 (2,0 điểm):**
  - Vì tia $OA$ và $OC$ là hai tia đối nhau nên $\widehat{AOB}$ và $\widehat{BOC}$ là hai góc kề bù *(0,5 điểm)*.
  - Ta có $\widehat{AOB} + \widehat{BOC} = 180^\circ$ *(0,25 điểm)*.
  - Vì $OD$ là tia phân giác của $\widehat{AOB}$ nên: $\widehat{BOD} = \frac{1}{2}\widehat{AOB}$ *(0,25 điểm)*.
  - Vì $OE$ là tia phân giác của $\widehat{BOC}$ nên: $\widehat{BOE} = \frac{1}{2}\widehat{BOC}$ *(0,25 điểm)*.
  - Góc tạo bởi hai tia phân giác:
    $\widehat{DOE} = \widehat{BOD} + \widehat{BOE} = \frac{1}{2}(\widehat{AOB} + \widehat{BOC}) = \frac{1}{2} \cdot 180^\circ = 90^\circ$ *(0,5 điểm)*.
  - Suy ra $OD \perp OE$ *(0,25 điểm)*.

---

### ĐỀ 2: KIỂM TRA 45 PHÚT (Đề định kỳ chuẩn mực kết thúc Chương III)

#### MA TRẬN ĐỀ THI

| Mức độ nhận thức | Trắc nghiệm (4,0 đ) | Tự luận (6,0 đ) | Tổng điểm |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 4 câu (2,0 đ) | Bài 1a (1,5 đ) | **3,5 điểm (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 1b (1,5 đ) | **2,5 điểm (25%)** |
| **Vận dụng** | 2 câu (1,0 đ) | Bài 2 (2,0 đ) | **3,0 điểm (30%)** |
| **Vận dụng cao** | 0 | Bài 3 (1,0 đ) | **1,0 điểm (10%)** |
| **Tổng cộng** | **8 câu (4,0 đ)** | **3 bài (6,0 đ)** | **10,0 điểm (100%)** |

---

#### PHẦN I. TRẮC NGHIỆM KHÁCH QUAN (4,0 điểm — 8 câu, mỗi câu 0,5 điểm)

**Câu 1.** Khẳng định nào sau đây là định nghĩa của "Định lí"?  
A. Khẳng định được đo bằng thước đo góc.  
B. Khẳng định được suy ra từ những khẳng định đúng đã biết bằng suy luận logic.  
C. Khẳng định do học sinh tự quy ước.  
D. Khẳng định không cần căn cứ.  

**Câu 2.** Trong định lí: *"Nếu đường thẳng c cắt hai đường thẳng song song a và b thì hai góc đồng vị bằng nhau"*, giả thiết là:  
A. Hai góc đồng vị bằng nhau.  
B. Đường thẳng c cắt hai đường thẳng song song a và b.  
C. a vuông góc với b.  
D. Hai góc so le trong bù nhau.  

**Câu 3.** Cho mệnh đề: *"Nếu một tam giác có ba cạnh bằng nhau thì tam giác đó có ba góc bằng nhau"*. Mệnh đề đảo là:  
A. Nếu một tam giác có ba góc bằng nhau thì tam giác đó có ba cạnh bằng nhau.  
B. Nếu một tam giác không có ba cạnh bằng nhau thì nó không có ba góc bằng nhau.  
C. Tam giác đều có ba góc bằng $60^\circ$.  
D. Nếu một tam giác có hai cạnh bằng nhau thì hai góc bằng nhau.  

**Câu 4.** Để bác bỏ mệnh đề: *"Mọi số nguyên tố đều là số lẻ"*, phản ví dụ phù hợp nhất là:  
A. Số $1$.  
B. Số $2$.  
C. Số $3$.  
D. Số $9$.  

**Câu 5.** Cho ba đường thẳng phân biệt $x, y, z$. Biết $x \perp z$ và $y \perp z$. Kết luận suy ra theo định lí là:  
A. $x \perp y$.  
B. $x \parallel y$.  
C. $x$ cắt $y$.  
D. $x \equiv y$.  

**Câu 6.** Trong một bài chứng minh hình học, nếu học sinh viết *"Theo hình vẽ ta thấy góc A vuông"* thì lỗi mắc phải là:  
A. Lập luận dựa vào cảm tính trực quan, thiếu căn cứ logic.  
B. Nhầm lẫn giả thiết và kết luận.  
C. Lập luận vòng quanh.  
D. Dùng sai tiên đề Euclid.  

**Câu 7.** Hai tia phân giác của hai góc kề bù tạo với nhau một góc bằng:  
A. $45^\circ$.  
B. $60^\circ$.  
C. $90^\circ$.  
D. $180^\circ$.  

**Câu 8.** Hai tia phân giác của hai góc đối đỉnh là:  
A. Hai tia trùng nhau.  
B. Hai tia vuông góc với nhau.  
C. Hai tia đối nhau.  
D. Hai tia song song với nhau.  

---

#### PHẦN II. TỰ LUẬN (6,0 điểm — 3 bài)

**Bài 1 (3,0 điểm).** Cho định lí: *"Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau"*.
a) Hãy vẽ hình minh họa và ghi Giả thiết, Kết luận của định lí bằng bảng ký hiệu toán học *(1,5 điểm)*.  
b) Dựa vào Tiên đề Euclid, hãy chứng minh định lí trên bằng phương pháp phản chứng *(1,5 điểm)*.

**Bài 2 (2,0 điểm).** Cho hình vẽ bên dưới: biết tia $Ax \parallel By$. Điểm $O$ nằm giữa hai tia sao cho góc $\widehat{xAO} = \alpha$ và góc $\widehat{OBy} = \beta$ (các tia $Ax, By$ cùng hướng sang phải).

```
      A ------------------------> x
       \
        \
         O
        /
       /
      B ------------------------> y
```

a) Viết giả thiết và kết luận của bài toán tính góc $\widehat{AOB}$ *(0,5 điểm)*.  
b) Chứng minh rằng $\widehat{AOB} = \alpha + \beta$ *(1,5 điểm)*.

**Bài 3 (1,0 điểm — Câu phân hóa học sinh giỏi).**  
Chứng minh định lí sau bằng lập luận chặt chẽ:  
*"Cho hai góc nhọn $\widehat{xOy}$ và $\widehat{x'O'y'}$ có các cạnh tương ứng song song: $Ox \parallel O'x'$ và $Oy \parallel O'y'$. Chứng minh rằng $\widehat{xOy} = \widehat{x'O'y'}$."*

---

#### HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ 45 PHÚT

##### Bảng đáp án trắc nghiệm (4,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **B** | **A** | **B** | **B** | **A** | **C** | **C** |

##### Lời giải chi tiết phần tự luận (6,0 điểm)

- **Bài 1 (3,0 điểm):**
  - **a) Vẽ hình và ghi GT, KL (1,5 điểm):**
    - Vẽ đúng ba đường thẳng phân biệt $a, b, c$ *(0,5 điểm)*.
    - Ghi đúng Giả thiết: $a, b, c$ phân biệt; $a \parallel c$; $b \parallel c$ *(0,5 điểm)*.
    - Ghi đúng Kết luận: $a \parallel b$ *(0,5 điểm)*.
  - **b) Chứng minh bằng phản chứng (1,5 điểm):**
    - Giả sử $a$ không song song với $b$. Vì $a$ và $b$ phân biệt nên chúng phải cắt nhau tại một điểm $M$ *(0,5 điểm)*.
    - Khi đó, qua điểm $M$ có hai đường thẳng phân biệt là $a$ và $b$ cùng song song với đường thẳng $c$ *(0,5 điểm)*.
    - Điều này mâu thuẫn với Tiên đề Euclid: *"Qua một điểm ngoài đường thẳng chỉ có duy nhất một đường thẳng song song với nó"*.
      Do đó giả sử phản chứng là sai, suy ra $a \parallel b$ *(0,5 điểm)*.

- **Bài 2 (2,0 điểm):**
  - **a) GT - KL (0,5 điểm):**
    - GT: $Ax \parallel By$; $\widehat{xAO} = \alpha$; $\widehat{OBy} = \beta$ *(0,25 điểm)*.
    - KL: $\widehat{AOB} = \alpha + \beta$ *(0,25 điểm)*.
  - **b) Chứng minh (1,5 điểm):**
    - Qua $O$ kẻ tia $Oz \parallel Ax$ (hướng sang phải) *(0,25 điểm)*.
    - Vì $Ax \parallel Oz$ nên $\widehat{AOz} = \widehat{xAO} = \alpha$ (hai góc so le trong) *(0,5 điểm)*.
    - Vì $Ax \parallel By$ và $Oz \parallel Ax \implies Oz \parallel By$.  
      Hai góc $\widehat{zOB}$ và $\widehat{OBy}$ ở vị trí so le trong nên $\widehat{zOB} = \widehat{OBy} = \beta$ *(0,5 điểm)*.
    - Tia $Oz$ nằm giữa hai tia $OA$ và $OB$ nên:
      $\widehat{AOB} = \widehat{AOz} + \widehat{zOB} = \alpha + \beta$ *(0,25 điểm)*.

- **Bài 3 (1,0 điểm):**
  - Gọi giao điểm của đường thẳng chứa tia $O'y'$ với đường thẳng chứa tia $Ox$ là điểm $K$ *(0,25 điểm)*.
  - Vì $Oy \parallel O'y'$, xét cát tuyến chứa đường thẳng $Ox$:
    Góc $\widehat{xOy}$ và góc nhọn tại đỉnh $K$ ở vị trí đồng vị nên:
    $\widehat{xOy} = \widehat{x K y'} \quad (1)$ *(0,25 điểm)*.
  - Vì $Ox \parallel O'x'$, xét cát tuyến chứa đường thẳng $O'y'$:
    Góc $\widehat{x'O'y'}$ và góc nhọn tại đỉnh $K$ ở vị trí đồng vị nên:
    $\widehat{x'O'y'} = \widehat{x K y'} \quad (2)$ *(0,25 điểm)*.
  - Từ $(1)$ và $(2)$ suy ra: $\widehat{xOy} = \widehat{x'O'y'}$ *(0,25 điểm)*.

---

## VII. Tổng kết & Lời khuyên ôn tập

<div style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">CẨM NANG VÀNG KHI CHỨNG MINH HÌNH HỌC LỚP 7:</h4>
  <ol style="margin-bottom: 0; line-height: 1.85;">
    <li><b>Luôn bắt đầu bằng 3 bước chuẩn:</b> (1) Vẽ hình chính xác $\to$ (2) Tóm tắt GT/KL bằng ký hiệu $\to$ (3) Suy luận logic.</li>
    <li><b>Tuyệt đối không bỏ trống căn cứ:</b> Mỗi dòng suy ra nhất thiết phải có lý do trong ngoặc đơn: <i>(gt)</i>, <i>(hai góc kề bù)</i>, <i>(so le trong của a // b)</i>,...</li>
    <li><b>Cảnh giác với Mệnh đề đảo:</b> Chiều thuận đúng không đồng nghĩa chiều đảo đúng. Hãy luôn tỉnh táo tìm kiếm <i>phản ví dụ</i>!</li>
    <li><b>Trang bị tư duy phản chứng:</b> Khi chứng minh trực tiếp gặp khó khăn, hãy <i>giả sử điều ngược lại</i> và tìm ra sự mâu thuẫn!</li>
  </ol>
</div>
