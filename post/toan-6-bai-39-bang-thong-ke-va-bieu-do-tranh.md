---
title: 'Bài 39: Bảng thống kê và biểu đồ tranh - Cách lập, cách đọc và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 39 Bảng thống kê và biểu đồ tranh: phương pháp lập bảng từ dữ liệu thô, kỹ thuật đọc và vẽ biểu đồ tranh (biểu tượng nguyên và nửa biểu tượng), 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Thống kê
  - Bảng thống kê
  - Biểu đồ tranh
  - Phân tích dữ liệu
  - Kết nối tri thức
grade: 6
---

# Bài 39. Bảng thống kê và biểu đồ tranh

Sau khi thu thập được một lượng lớn thông tin thô từ các phiếu khảo sát hay quá trình quan sát thực tế, dữ liệu ban đầu thường nằm ở dạng lộn xộn, rời rạc và rất khó theo dõi. Làm thế nào để người đọc chỉ mất vài giây là có thể nắm bắt được bức tranh toàn cảnh: món hàng nào bán chạy nhất, tổ nào thi đua dẫn đầu, hay tháng nào mưa nhiều nhất? 

Để giải quyết bài toán đó, khoa học thống kê đã phát triển hai công cụ trực quan hóa dữ liệu kinh điển: **Bảng thống kê** và **Biểu đồ tranh**.

Nếu bảng thống kê là sự sắp xếp khoa học, ngăn nắp theo các hàng và cột số liệu chính xác thì biểu đồ tranh lại là chiếc cầu nối nghệ thuật đầy sáng tạo: sử dụng các biểu tượng hình ảnh sinh động giúp thông điệp số liệu trở nên dễ hiểu, bắt mắt và gần gũi với mọi người.

Bài học này sẽ hướng dẫn các em thành thạo kỹ năng lập và khai thác bảng thống kê, làm chủ nguyên lý biểu diễn biểu đồ tranh (kể cả biểu tượng nguyên và nửa biểu tượng), nhận diện bẫy thị giác số liệu và chinh phục $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 39: BẢNG THỐNG KÊ & BIỂU ĐỒ TRANH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Bảng thống kê</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Lập bảng: đếm tần số xuất hiện của từng đối tượng từ dãy dữ liệu thô.<br>• Đọc bảng: tra cứu số lượng, tìm Max, Min, tính tổng và tỉ lệ phần trăm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Biểu đồ tranh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Dùng hình vẽ/biểu tượng để biểu thị dữ liệu.<br>• <strong>Bắt buộc</strong> có chú thích: Mỗi biểu tượng ứng với $k$ đơn vị.<br>• Đọc: Số lượng = Số biểu tượng $\times k$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Nửa biểu tượng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Khi số liệu có phần lẻ bằng một nửa giá trị quy ước: vẽ nửa biểu tượng.<br>• Ví dụ: $1$ icon $= 10$ học sinh $\implies$ nửa icon $= 5$ học sinh.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Cách vẽ biểu đồ tranh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Chọn giá trị quy ước là ước chung của các số liệu để số lượng biểu tượng vừa phải, hạn chế dùng biểu tượng lẻ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Trực giác từ những bảng số liệu và hình vẽ (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi tình huống thực tế:

**Câu 1:** Một danh sách ghi điểm kiểm tra của 10 bạn: $8;\; 9;\; 7;\; 8;\; 10;\; 8;\; 9;\; 8;\; 7;\; 8.$ Em hãy đếm xem điểm $8$ xuất hiện bao nhiêu lần?
- *Trả lời:* Điểm $8$ xuất hiện tất cả $5$ lần. Việc gom nhóm và đếm số lần xuất hiện này chính là bước đầu tiên để lập một **bảng thống kê**.

**Câu 2:** Khi đọc một cuốn tạp chí khoa học dành cho thiếu nhi, em thấy người ta vẽ $4$ chiếc ô tô đồ chơi nhỏ cạnh dòng chữ "Mỗi chiếc xe tượng trưng cho $100$ xe hơi bán ra". Vậy số xe hơi thực tế được bán là bao nhiêu chiếc?
- *Trả lời:* Số xe thực tế bán ra là $4 \times 100 = 400$ chiếc xe. Đó chính là cách hoạt động của một **biểu đồ tranh**.

**Câu 3:** Tại sao trên các áp phích tuyên truyền hay báo chí đại chúng, người ta thường thích dùng hình ảnh mặt cười, ngôi sao hay bông hoa thay vì chỉ ghi những con số khô khan?
- *Trả lời:* Vì hình ảnh trực quan, sinh động, dễ thu hút thị giác và giúp người xem hiểu ngay thông điệp số liệu một cách hào hứng, trực cảm.

**Câu 4:** Nếu một biểu tượng hình tròn $\bigcirc$ ứng với $20$ học sinh, thì nửa hình tròn biểu thị bao nhiêu học sinh?
- *Trả lời:* Nửa hình tròn biểu thị $20 : 2 = 10$ học sinh.

**Câu 5:** Hai biểu đồ tranh cùng vẽ về số học sinh giỏi của hai trường: Biểu đồ trường A có $3$ ngôi sao, biểu đồ trường B có $5$ ngôi sao. Ta có thể khẳng định ngay trường B có nhiều học sinh giỏi hơn trường A được không?
- *Trả lời:* Chưa thể kết luận được! Ta phải kiểm tra chú thích xem mỗi ngôi sao ở mỗi trường ứng với bao nhiêu học sinh. Nếu ở trường A mỗi ngôi sao ứng với $50$ học sinh ($150$ em), còn ở trường B mỗi ngôi sao chỉ ứng với $10$ học sinh ($50$ em), thì trường A mới là trường có nhiều học sinh giỏi hơn.

---

## I. Lý thuyết trọng tâm

### 1. Bảng thống kê

> [!NOTE]
> **Định nghĩa:**
> **Bảng thống kê** là cách tổ chức và trình bày dữ liệu dạng lưới gồm các hàng và cột có tiêu đề rõ ràng, giúp tổng hợp, phân loại và tra cứu số lượng của từng nhóm đối tượng một cách nhanh chóng.

#### Quy trình lập bảng thống kê từ dãy dữ liệu thô:
- **Bước 1:** Xác định các nhóm đối tượng phân loại (tiêu chí).
- **Bước 2:** Đếm số lần xuất hiện (gọi là tần số) của từng đối tượng trong dãy dữ liệu. Nên sắp xếp các đối tượng theo thứ tự hợp lý (tăng dần, giảm dần hoặc theo thứ bậc).
- **Bước 3:** Lập bảng, điền tên tiêu chí vào cột/hàng tiêu đề và điền các số liệu tương ứng.
- **Bước 4 (Bắt buộc):** Tính tổng tất cả các số liệu trong bảng để đối chiếu kiểm tra xem có bằng đúng tổng số đối tượng ban đầu không (tránh đếm sót hoặc đếm trùng).

```text
       ┌────────────────┬────────┬────────┬────────┬────────┬───────┐
       │ Nhóm đối tượng │ Loại A │ Loại B │ Loại C │ Loại D │ Tổng  │
       ├────────────────┼────────┼────────┼────────┼────────┼───────┤
       │ Số lượng       │   12   │   18   │   15   │    5   │  50   │
       └────────────────┴────────┴────────┴────────┴────────┴───────┘
```

---

### 2. Biểu đồ tranh (Pictogram)

> [!NOTE]
> **Định nghĩa:**
> **Biểu đồ tranh** là biểu đồ sử dụng các biểu tượng hoặc hình ảnh nhỏ để thể hiện dữ liệu thống kê.
> Mỗi biểu tượng được quy ước thay thế cho một số lượng đơn vị cụ thể.

#### Thành phần bắt buộc của biểu đồ tranh:
1. **Tiêu đề biểu đồ:** Nêu rõ nội dung dữ liệu đang được thống kê.
2. **Cột danh mục đối tượng:** Tên các đối tượng được khảo sát.
3. **Các dãy biểu tượng:** Số lượng hình vẽ biểu diễn số liệu của mỗi đối tượng.
4. **Phần chú thích (Tỉ xích):** Nêu rõ quy ước giá trị của một biểu tượng (Ví dụ: *"Mỗi $\bigstar$ ứng với $10$ học sinh"*). **Nếu thiếu phần chú thích, biểu đồ tranh trở nên vô nghĩa!**

---

### 3. Nửa biểu tượng trong biểu đồ tranh

Trong thực tế, không phải số liệu nào cũng chia hết cho giá trị quy ước của một biểu tượng. Khi số liệu có phần lẻ đúng bằng một nửa giá trị của biểu tượng, ta sử dụng **nửa biểu tượng**:

$$\text{Giá trị của nửa biểu tượng} = \dfrac{\text{Giá trị của một biểu tượng}}{2}.$$

*Ví dụ:* Quy ước mỗi biểu tượng xe đạp $\text{[Xe]}$ ứng với $8$ chiếc xe.
- $1$ biểu tượng $\text{[Xe]} \implies 8$ chiếc xe.
- Nửa biểu tượng $\implies 4$ chiếc xe.
- Một hàng có $3$ biểu tượng nguyên và $1$ nửa biểu tượng sẽ tương ứng với:
  $$3 \times 8 + 4 = 28\quad \text{(chiếc xe)}.$$

---

### 4. Quy trình vẽ biểu đồ tranh từ bảng thống kê

- **Bước 1:** Đọc bảng thống kê, xác định giá trị số liệu của từng đối tượng.
- **Bước 2:** Chọn biểu tượng thích hợp và xác định giá trị quy ước cho mỗi biểu tượng:
  - Nên chọn giá trị quy ước là một **ước chung** của hầu hết các số liệu trong bảng (tốt nhất là ƯCLN) để số biểu tượng vẽ ra vừa phải (không quá nhiều, không quá ít) và hạn chế phải dùng nhiều biểu tượng lẻ.
- **Bước 3:** Tính số biểu tượng cho mỗi đối tượng:
  $$\text{Số biểu tượng} = \dfrac{\text{Số liệu của đối tượng}}{\text{Giá trị của một biểu tượng}}.$$
- **Bước 4:** Vẽ biểu đồ, sắp xếp các hàng ngay ngắn và ghi rõ phần chú thích bên dưới biểu đồ.

---

> [!WARNING]
> ### Các bẫy sai sót kinh điển khi làm việc với biểu đồ tranh:
> 1. **Quên đọc chú thích tỉ xích:** Chỉ đếm số lượng hình vẽ ở các hàng rồi kết luận ngay hàng này gấp mấy lần hàng kia mà quên nhân với giá trị quy ước.
> 2. **Bỏ quên nửa biểu tượng:** Khi tính tổng, bỏ sót nửa biểu tượng hoặc tính nửa biểu tượng như một biểu tượng nguyên vẹn.
> 3. **So sánh hai biểu đồ tranh khác quy ước:** So sánh trực tiếp số lượng hình vẽ của hai biểu đồ độc lập có chú thích tỉ xích khác nhau.

---

## II. Các dạng bài tập điển hình

### Dạng 1: Lập bảng thống kê từ dãy dữ liệu thô

#### Phương pháp giải:
- Rà soát từng phần tử trong dãy dữ liệu thô.
- Dùng phương pháp gạch kiểm đếm (tally marks) để tránh sót.
- Lập bảng và cộng tổng kiểm tra lại.

---

#### Ví dụ 1:
Khảo sát cỡ áo đồng phục của $20$ bạn học sinh tổ 1 và tổ 2 lớp 6A, ta thu được dãy dữ liệu sau:
$$S;\; M;\; L;\; M;\; S;\; XL;\; M;\; L;\; M;\; S;\; M;\; L;\; M;\; S;\; M;\; L;\; XL;\; M;\; S;\; M.$$
a) Có bao nhiêu cỡ áo khác nhau được học sinh lựa chọn?
b) Hãy lập bảng thống kê số lượng học sinh chọn từng cỡ áo.
c) Cỡ áo nào được nhiều bạn chọn nhất? Cỡ áo nào có ít bạn chọn nhất?

**Lời giải:**
a) Có $4$ cỡ áo khác nhau là: $S,\; M,\; L,\; XL.$
b) Tiến hành đếm số lần xuất hiện của từng cỡ áo:
- Cỡ $S$: xuất hiện $5$ lần.
- Cỡ $M$: xuất hiện $9$ lần.
- Cỡ $L$: xuất hiện $4$ lần.
- Cỡ $XL$: xuất hiện $2$ lần.
Kiểm tra tổng: $5 + 9 + 4 + 2 = 20$ (khớp đúng $20$ bạn).
Bảng thống kê:

| Cỡ áo | S | M | L | XL | Tổng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh** | $5$ | $9$ | $4$ | $2$ | $20$ |

c)
- Cỡ áo được nhiều bạn chọn nhất là **cỡ M** ($9$ bạn).
- Cỡ áo ít bạn chọn nhất là **cỡ XL** ($2$ bạn).

---

### Dạng 2: Khai thác và phân tích thông tin từ bảng thống kê

#### Phương pháp giải:
- Quan sát tiêu đề hàng và cột để tra cứu số liệu chính xác.
- Tính tổng, hiệu, tìm giá trị lớn nhất (Max), nhỏ nhất (Min).
- Tính tỉ lệ phần trăm: $\dfrac{\text{Giá trị bộ phận}}{\text{Tổng số}} \times 100\%.$

---

#### Ví dụ 2:
Bảng thống kê sau cho biết số lượng điện thoại thông minh bán được trong một tuần của một siêu thị điện máy:

| Nhãn hàng | Apple | Samsung | Xiaomi | Oppo | Vivo |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số lượng (chiếc)** | $45$ | $60$ | $35$ | $40$ | $20$ |

a) Trong tuần đó, siêu thị đã bán được tất cả bao nhiêu chiếc điện thoại thông minh?
b) Nhãn hàng nào bán được nhiều nhất? Nhãn hàng nào bán được ít nhất?
c) Số điện thoại Samsung bán được nhiều hơn số điện thoại Xiaomi bao nhiêu chiếc?
d) Số điện thoại Apple bán ra chiếm bao nhiêu phần trăm tổng số điện thoại bán được trong tuần?

**Lời giải:**
a) Tổng số điện thoại bán được trong tuần là:
$$45 + 60 + 35 + 40 + 20 = 200\quad \text{(chiếc)}.$$
b)
- Nhãn hàng bán được nhiều nhất là **Samsung** ($60$ chiếc).
- Nhãn hàng bán được ít nhất là **Vivo** ($20$ chiếc).
c) Số điện thoại Samsung bán nhiều hơn Xiaomi là:
$$60 - 35 = 25\quad \text{(chiếc)}.$$
d) Tỉ lệ phần trăm số điện thoại Apple bán ra so với tổng số là:
$$\dfrac{45}{200} \times 100\% = 22{,}5\%.$$

---

### Dạng 3: Đọc và giải mã số liệu từ biểu đồ tranh

#### Phương pháp giải:
- **Bước 1:** Đọc kỹ dòng chú thích để biết giá trị của $1$ biểu tượng và nửa biểu tượng.
- **Bước 2:** Đếm số biểu tượng ở mỗi hàng:
  $$\text{Số lượng} = (\text{Số biểu tượng nguyên} \times k) + (\text{Số nửa biểu tượng} \times \dfrac{k}{2}).$$
- **Bước 3:** Lập lại bảng thống kê số liệu và trả lời câu hỏi.

---

#### Ví dụ 3:
Biểu đồ tranh dưới đây ghi lại số lượng cây xanh mà các khối lớp trường THCS Chu Văn An đã trồng được trong ngày hội "Tết trồng cây":

```text
Khối 6:  🌳 🌳 🌳 🌳 🌳
Khối 7:  🌳 🌳 🌳 🌳
Khối 8:  🌳 🌳 🌳 🌳 🌳 [Nửa 🌳]
Khối 9:  🌳 🌳 🌳 🌳 🌳 🌳

(Chú thích: Mỗi 🌳 ứng với 10 cây xanh; mỗi [Nửa 🌳] ứng với 5 cây xanh).
```

a) Mỗi khối lớp trồng được bao nhiêu cây xanh?
b) Cả trường đã trồng được tất cả bao nhiêu cây xanh?
c) Khối lớp nào trồng được nhiều cây nhất? Khối nào trồng ít cây nhất?

**Lời giải:**
a) Tính số cây trồng của từng khối:
- Khối 6: Có $5$ biểu tượng $\implies 5 \times 10 = 50$ cây.
- Khối 7: Có $4$ biểu tượng $\implies 4 \times 10 = 40$ cây.
- Khối 8: Có $5$ biểu tượng nguyên và $1$ nửa biểu tượng $\implies 5 \times 10 + 5 = 55$ cây.
- Khối 9: Có $6$ biểu tượng $\implies 6 \times 10 = 60$ cây.

Bảng thống kê tương ứng:

| Khối lớp | Khối 6 | Khối 7 | Khối 8 | Khối 9 | Tổng cả trường |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số cây trồng** | $50$ | $40$ | $55$ | $60$ | $205$ |

b) Tổng số cây cả trường trồng được là:
$$50 + 40 + 55 + 60 = 205\quad \text{(cây)}.$$
c)
- Khối trồng nhiều cây nhất là **Khối 9** ($60$ cây).
- Khối trồng ít cây nhất là **Khối 7** ($40$ cây).

---

### Dạng 4: Vẽ biểu đồ tranh từ bảng thống kê số liệu

#### Phương pháp giải:
- Tìm một số thích hợp làm giá trị quy ước cho $1$ biểu tượng (thường là ước chung của các số liệu).
- Chia số liệu của từng đối tượng cho giá trị quy ước để tìm số biểu tượng cần vẽ.
- Trình bày biểu đồ tranh kèm chú thích rõ ràng.

---

#### Ví dụ 4:
Số điểm $10$ đạt được trong tháng thi đua của $4$ tổ lớp 6B được ghi lại trong bảng sau:

| Tổ | Tổ 1 | Tổ 2 | Tổ 3 | Tổ 4 |
| :---: | :---: | :---: | :---: | :---: |
| **Số điểm 10** | $24$ | $32$ | $20$ | $28$ |

Hãy vẽ biểu đồ tranh biểu diễn số điểm $10$ của các tổ, biết mỗi biểu tượng ngôi sao $\bigstar$ ứng với $4$ điểm $10.$

**Lời giải:**
- Ta lấy số điểm $10$ của mỗi tổ chia cho $4$:
  - Tổ 1: $24 : 4 = 6$ ngôi sao.
  - Tổ 2: $32 : 4 = 8$ ngôi sao.
  - Tổ 3: $20 : 4 = 5$ ngôi sao.
  - Tổ 4: $28 : 4 = 7$ ngôi sao.

Biểu đồ tranh:

```text
Tổ 1:  ★ ★ ★ ★ ★ ★
Tổ 2:  ★ ★ ★ ★ ★ ★ ★ ★
Tổ 3:  ★ ★ ★ ★ ★
Tổ 4:  ★ ★ ★ ★ ★ ★ ★

(Chú thích: Mỗi ★ ứng với 4 điểm 10).
```

---

## III. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Bài toán tối ưu hóa quy ước biểu tượng bằng Ước chung lớn nhất (ƯCLN)

Khi thiết kế một biểu đồ tranh, nếu chọn giá trị quy ước quá nhỏ, ta sẽ phải vẽ hàng trăm biểu tượng (rất rối mắt và tốn thời gian). Nếu chọn giá trị quy ước quá lớn, số biểu tượng quá ít sẽ khó so sánh hoặc xuất hiện nhiều phân số lẻ không thể vẽ được.

> [!IMPORTANT]
> **Nguyên tắc chọn giá trị quy ước tối ưu:**
> Để vẽ biểu đồ tranh đẹp nhất và hoàn toàn không phải dùng nửa biểu tượng:
> Giá trị của mỗi biểu tượng nên được chọn là **Ước chung lớn nhất (ƯCLN)** của tập hợp tất cả các số liệu trong bảng!

#### Bài toán:
Số lượng vé xem phim bán được trong ba ngày cuối tuần của một rạp chiếu phim là:
- Thứ Sáu: $180$ vé.
- Thứ Bảy: $300$ vé.
- Chủ Nhật: $240$ vé.
a) Tìm giá trị quy ước lớn nhất cho mỗi biểu tượng vé xem phim $\text{[Vé]}$ sao cho số biểu tượng ở mỗi ngày đều là một số tự nhiên (không dùng biểu tượng lẻ).
b) Khi đó, tổng số biểu tượng cần vẽ cho cả ba ngày là bao nhiêu?

**Lời giải:**
a) Gọi giá trị quy ước của mỗi biểu tượng là $k$ ($k \in \mathbb{N}^*$).
Để không phải dùng biểu tượng lẻ thì số lượng vé của mỗi ngày đều phải chia hết cho $k$:
$$180 \;\vdots\; k;\quad 300 \;\vdots\; k;\quad 240 \;\vdots\; k.$$
Suy ra $k \in \text{ƯC}(180, 300, 240).$
Để giá trị quy ước lớn nhất, $k$ phải là ƯCLN của ba số đó.
Phân tích ra thừa số nguyên tố:
- $180 = 2^2 \cdot 3^2 \cdot 5.$
- $300 = 2^2 \cdot 3 \cdot 5^2.$
- $240 = 2^4 \cdot 3 \cdot 5.$
Ta có:
$$k = \text{ƯCLN}(180, 300, 240) = 2^2 \cdot 3 \cdot 5 = 60.$$
Vậy giá trị quy ước lớn nhất cho mỗi biểu tượng là **$60$ vé**.

b) Khi đó số biểu tượng của từng ngày là:
- Thứ Sáu: $180 : 60 = 3$ biểu tượng.
- Thứ Bảy: $300 : 60 = 5$ biểu tượng.
- Chủ Nhật: $240 : 60 = 4$ biểu tượng.
Tổng số biểu tượng cần vẽ là:
$$3 + 5 + 4 = 12\quad \text{(biểu tượng)}.$$

---

### Chuyên đề 2: Kỹ thuật phân tích bảng dữ liệu chéo hai chiều (Two-Way Contingency Table)

Bảng hai chiều cho phép nghiên cứu mối quan hệ đồng thời giữa hai yếu tố (ví dụ: giới tính và sở thích).

#### Bài toán:
Khảo sát $50$ học sinh khối 6 về sở thích đọc sách, ta có bảng thống kê hai chiều sau:

| Thể loại sách | Truyện tranh | Khoa học khám phá | Văn học cổ điển | Tổng cộng |
| :---: | :---: | :---: | :---: | :---: |
| **Nam** | $16$ | $10$ | $2$ | $28$ |
| **Nữ** | $8$ | $6$ | $8$ | $22$ |
| **Tổng cả khối** | $24$ | $16$ | $10$ | $50$ |

a) Trong số các bạn Nam, tỉ lệ học sinh thích đọc "Truyện tranh" là bao nhiêu phần trăm?
b) Trong số những học sinh thích đọc "Văn học cổ điển", học sinh Nữ chiếm bao nhiêu phần trăm?
c) Tính tỉ lệ học sinh thích đọc "Khoa học khám phá" trên tổng số học sinh được khảo sát.

**Lời giải:**
a) Số bạn Nam là $28$ bạn. Trong đó có $16$ bạn Nam thích Truyện tranh.
Tỉ lệ học sinh thích Truyện tranh trong nhóm học sinh Nam là:
$$\dfrac{16}{28} \times 100\% = \dfrac{4}{7} \times 100\% \approx 57{,}14\%.$$

b) Tổng số học sinh thích Văn học cổ điển là $10$ bạn. Trong đó có $8$ bạn Nữ.
Tỉ lệ học sinh Nữ trong nhóm thích Văn học cổ điển là:
$$\dfrac{8}{10} \times 100\% = 80\%.$$

c) Tỉ lệ học sinh thích Khoa học khám phá trên toàn khối là:
$$\dfrac{16}{50} \times 100\% = 32\%.$$

---

### Chuyên đề 3: Khôi phục biểu đồ tranh và giải toán tìm ẩn số

#### Bài toán:
Một cửa hàng kinh doanh hoa quả nhập về bốn loại trái cây: Xoài, Cam, Táo và Nho. Người ta dùng chung một loại biểu tượng giỏ hoa quả $\text{[Giỏ]}$ để vẽ biểu đồ tranh.
Biết rằng:
- Hàng "Xoài" được vẽ bằng $4$ biểu tượng và ứng với $120\text{ kg}.$
- Hàng "Cam" được vẽ bằng $3$ biểu tượng nguyên và $1$ nửa biểu tượng.
- Hàng "Táo" bán được nhiều hơn hàng "Nho" là $45\text{ kg}.$
- Hàng "Táo" vẽ nhiều hơn hàng "Nho" đúng $1$ biểu tượng nguyên và $1$ nửa biểu tượng.
a) Mỗi biểu tượng $\text{[Giỏ]}$ ứng với bao nhiêu kilôgam hoa quả?
b) Tính số kilôgam Cam mà cửa hàng nhập về.
c) Nếu tổng số hoa quả của cả bốn loại là $400\text{ kg},$ hãy tìm số kilôgam Táo và số kilôgam Nho.

**Lời giải:**
a) Hàng Xoài có $4$ biểu tượng ứng với $120\text{ kg}.$
Vậy mỗi biểu tượng ứng với:
$$120 : 4 = 30\text{ kg}.$$
Nửa biểu tượng ứng với:
$$30 : 2 = 15\text{ kg}.$$

b) Hàng Cam gồm $3$ biểu tượng nguyên và $1$ nửa biểu tượng:
$$\text{Số kg Cam} = 3 \times 30 + 15 = 105\text{ kg}.$$

c)
- Kiểm tra lại: $1$ biểu tượng nguyên và $1$ nửa biểu tượng ứng với:
  $$30 + 15 = 45\text{ kg}$$
  (Khớp hoàn toàn với giả thiết Táo nhiều hơn Nho $45\text{ kg}$).
- Tổng khối lượng Táo và Nho nhập về là:
  $$\text{Táo} + \text{Nho} = 400 - (\text{Xoài} + \text{Cam}) = 400 - (120 + 105) = 175\text{ kg}.$$
- Ta có bài toán tìm hai số khi biết Tổng và Hiệu:
  - Tổng $= 175\text{ kg}.$
  - Hiệu $= 45\text{ kg}.$
- Số kilôgam Táo là:
  $$(175 + 45) : 2 = 110\text{ kg}.$$
- Số kilôgam Nho là:
  $$110 - 45 = 65\text{ kg}.$$

---

### Chuyên đề 4: Nhận diện bẫy biến dạng thị giác khi so sánh biểu đồ tranh

Trong truyền thông và quảng cáo, người ta đôi khi cố tình hoặc vô ý tạo ra các biểu đồ tranh gây hiểu lầm cho người xem:

#### Bài toán:
Để so sánh sản lượng xuất khẩu cà phê giữa Công ty Alpha và Công ty Beta, một bản báo cáo vẽ hai biểu đồ tranh:
- **Công ty Alpha:** Vẽ $4$ bao cà phê. (Chú thích: Mỗi bao ứng với $500$ tấn).
- **Công ty Beta:** Vẽ $6$ bao cà phê. (Chú thích: Mỗi bao ứng với $200$ tấn).
a) Một bạn học sinh chỉ nhìn vào số lượng hình vẽ và kết luận: *"Công ty Beta xuất khẩu nhiều hơn Công ty Alpha vì có tới 6 bao cà phê trong khi Công ty Alpha chỉ có 4 bao"*. Kết luận của bạn đó đúng hay sai? Vì sao?
b) Tính sản lượng cà phê thực tế của mỗi công ty và so sánh chính xác.

**Lời giải:**
a) **Kết luận của bạn học sinh là hoàn toàn SAI.**
*Giải thích:* Bạn đã mắc lỗi chỉ đếm số lượng hình vẽ mà bỏ qua giá trị quy ước (tỉ xích) của mỗi biểu tượng ở phần chú thích. Hai biểu đồ này sử dụng hai hệ quy ước hoàn toàn khác nhau.
b) **Tính toán thực tế:**
- Sản lượng của Công ty Alpha:
  $$4 \times 500 = 2000\quad \text{(tấn)}.$$
- Sản lượng của Công ty Beta:
  $$6 \times 200 = 1200\quad \text{(tấn)}.$$
Ta thấy $2000\text{ tấn} > 1200\text{ tấn}.$
Thực tế Công ty Alpha xuất khẩu nhiều hơn Công ty Beta tới $800$ tấn cà phê (gấp hơn $1{,}6$ lần)!

---

### Chuyên đề 5: Ứng dụng bảng thống kê trong bài toán tối ưu nhập hàng (Khái niệm Mốt / Mode)

Trong kinh doanh thực tế, giá trị xuất hiện nhiều lần nhất trong bảng thống kê được gọi là **Mốt (Mode)** của dãy dữ liệu. Đây là căn cứ sống còn để các chủ cửa hàng ra quyết định nhập hàng hóa mà không bị tồn kho.

#### Bài toán:
Một chủ cửa hàng giày thể thao theo dõi số lượng các cỡ giày nam bán ra trong tháng và ghi lại bảng sau:

| Cỡ giày | 38 | 39 | 40 | 41 | 42 | 43 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số đôi bán ra** | $8$ | $25$ | $48$ | $42$ | $20$ | $7$ |

a) Cỡ giày nào bán được nhiều nhất trong tháng? Số lượng bán ra chiếm bao nhiêu phần trăm tổng số giày bán được?
b) Trong đợt nhập hàng tháng tới với quy mô $300$ đôi giày, chủ cửa hàng nên phân bổ nhập nhiều nhất cho cỡ giày nào và ít nhất cho những cỡ giày nào để tối ưu doanh thu?

**Lời giải:**
a)
- Tổng số đôi giày bán được trong tháng là:
  $$8 + 25 + 48 + 42 + 20 + 7 = 150\quad \text{(đôi)}.$$
- Cỡ giày bán được nhiều nhất là **cỡ 40** ($48$ đôi).
- Tỉ lệ phần trăm của cỡ 40 là:
  $$\dfrac{48}{150} \times 100\% = 32\%.$$

b)
- **Chiến lược nhập hàng:**
  - Hai cỡ giày có nhu cầu cao nhất là **cỡ 40** (chiếm $32\%$) và **cỡ 41** (chiếm $\dfrac{42}{150} = 28\%$). Do đó chủ cửa hàng nên tập trung nhập số lượng lớn nhất cho hai cỡ 40 và 41 (khoảng $60\%$ tổng số hàng nhập, tức khoảng $180$ đôi).
  - Hai cỡ giày có nhu cầu thấp nhất là **cỡ 38** và **cỡ 43** (chỉ chiếm lần lượt $5{,}3\%$ và $4{,}7\%$). Do đó chỉ nên nhập số lượng rất ít cho hai cỡ này (mỗi cỡ khoảng $15$ đôi) để tránh đọng vốn tồn kho.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác

```quiz
type: choice
question: 'Mục đích chính của việc lập bảng thống kê là:'
options:
  - 'Để trang trí cho bài báo cáo đẹp mắt hơn'
  - 'Để sắp xếp dữ liệu khoa học, gọn gàng, giúp dễ tra cứu và so sánh'
  - 'Để loại bỏ bớt các số liệu không thích'
  - 'Để thay thế hoàn toàn các phép tính số học'
answer: 2
explanation: 'Bảng thống kê giúp tổ chức dữ liệu khoa học, trực quan, hỗ trợ tra cứu và so sánh nhanh chóng.'
```

```quiz
type: choice
question: 'Trong biểu đồ tranh, yếu tố nào sau đây là BẮT BUỘC phải có để người đọc có thể giải mã được số liệu?'
options:
  - 'Hình vẽ phải được tô nhiều màu sắc'
  - 'Phần chú thích quy ước giá trị của một biểu tượng'
  - 'Khung viền trang trí thật dày'
  - 'Chữ ký của người vẽ'
answer: 2
explanation: 'Nếu thiếu phần chú thích quy ước giá trị của mỗi biểu tượng thì biểu đồ tranh hoàn toàn không thể đọc được giá trị thực tế.'
```

```quiz
type: choice
question: 'Quy ước mỗi biểu tượng hình tròn ứng với 6 học sinh. Một hàng có 5 biểu tượng thì biểu thị số học sinh là:'
options:
  - '11 học sinh'
  - '30 học sinh'
  - '25 học sinh'
  - '36 học sinh'
answer: 2
explanation: 'Số học sinh = 5 * 6 = 30 học sinh.'
```

```quiz
type: choice
question: 'Mỗi biểu tượng mặt cười ứng với 10 bạn. Một hàng có 3 biểu tượng nguyên và 1 nửa biểu tượng thì biểu thị:'
options:
  - '31 bạn'
  - '35 bạn'
  - '40 bạn'
  - '30 bạn'
answer: 2
explanation: 'Số bạn = 3 * 10 + (10 / 2) = 30 + 5 = 35 bạn.'
```

```quiz
type: choice
question: 'Khi vẽ biểu đồ tranh cho các số liệu: 15, 25, 30, 45, ta nên chọn mỗi biểu tượng ứng với bao nhiêu đơn vị để tiện vẽ nhất?'
options:
  - '2 đơn vị'
  - '5 đơn vị'
  - '7 đơn vị'
  - '9 đơn vị'
answer: 2
explanation: 'Vì 5 là ước chung của cả 4 số liệu 15, 25, 30, 45 nên chọn mỗi biểu tượng ứng với 5 đơn vị sẽ cho số biểu tượng nguyên vẹn, đẹp mắt.'
```

```quiz
type: choice
question: 'Bảng thống kê số cây trồng của 4 tổ có tổng là 100 cây. Biết Tổ 1 trồng 25 cây, Tổ 2 trồng 30 cây, Tổ 3 trồng 20 cây. Số cây Tổ 4 trồng là:'
options:
  - '15 cây'
  - '20 cây'
  - '25 cây'
  - '30 cây'
answer: 3
explanation: 'Số cây Tổ 4 = 100 - (25 + 30 + 20) = 100 - 75 = 25 cây.'
```

```quiz
type: choice
question: 'Hàng "Thứ Hai" trên biểu đồ tranh có 4 biểu tượng ứng với 80 sản phẩm. Vậy mỗi biểu tượng ứng với bao nhiêu sản phẩm?'
options:
  - '10 sản phẩm'
  - '20 sản phẩm'
  - '30 sản phẩm'
  - '40 sản phẩm'
answer: 2
explanation: 'Mỗi biểu tượng ứng với: 80 / 4 = 20 sản phẩm.'
```

```quiz
type: choice
question: 'Nếu mỗi biểu tượng ứng với 8 chiếc xe, thì để biểu thị 28 chiếc xe ta cần vẽ:'
options:
  - '3 biểu tượng'
  - '3 biểu tượng nguyên và 1 nửa biểu tượng'
  - '4 biểu tượng'
  - '2 biểu tượng nguyên và 1 nửa biểu tượng'
answer: 2
explanation: 'Ta có 28 = 3 * 8 + 4 (với 4 là nửa biểu tượng), nên cần vẽ 3 biểu tượng nguyên và 1 nửa biểu tượng.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG khi so sánh hai biểu đồ tranh khác nhau?'
options:
  - 'Hàng nào có nhiều biểu tượng hơn thì chắc chắn có số lượng thực tế lớn hơn'
  - 'Không thể so sánh chỉ dựa vào số lượng biểu tượng mà phải đối chiếu với phần chú thích tỉ xích của mỗi biểu đồ'
  - 'Tất cả các biểu đồ tranh đều có chung một quy ước tỉ xích'
  - 'Nửa biểu tượng luôn có giá trị bằng 1'
answer: 2
explanation: 'Mỗi biểu đồ tranh có thể dùng tỉ xích quy ước khác nhau, do đó bắt buộc phải nhân với giá trị quy ước tương ứng mới so sánh được.'
```

```quiz
type: choice
question: 'Trong kinh doanh, giá trị xuất hiện nhiều lần nhất trong bảng thống kê bán hàng (bán chạy nhất) giúp nhà quản lý:'
options:
  - 'Quyết định ngừng kinh doanh mặt hàng đó'
  - 'Lập kế hoạch ưu tiên nhập thêm hàng để đáp ứng đúng nhu cầu thị trường'
  - 'Giảm giá sản phẩm đó tối đa'
  - 'Không có ý nghĩa gì'
answer: 2
explanation: 'Mặt hàng bán chạy nhất (Mốt) là cơ sở để nhập thêm hàng kịp thời, tránh tình trạng hết hàng mất doanh thu.'
```

---

## V. Đề kiểm tra 15 phút tự luyện có hướng dẫn chấm

### Phần 1: Trắc nghiệm (4 câu — 3,0 điểm)

**Câu 1 (0,75 điểm):** Một biểu tượng bông hoa $\text{[Hoa]}$ ứng với $5$ điểm tốt. Hàng của bạn Nam có $6$ bông hoa thì số điểm tốt của bạn Nam là:
A. $11$
B. $30$
C. $25$
D. $35$

**Câu 2 (0,75 điểm):** Biểu đồ tranh biểu thị số lượng sách đọc được: Hàng của bạn Hà có $4$ biểu tượng nguyên và $1$ nửa biểu tượng. Biết mỗi biểu tượng ứng với $4$ quyển sách. Số sách bạn Hà đã đọc là:
A. $16$ quyển
B. $18$ quyển
C. $20$ quyển
D. $17$ quyển

**Câu 3 (0,75 điểm):** Trong một biểu đồ tranh, hàng ghi $45$ học sinh được vẽ bằng $3$ biểu tượng. Vậy mỗi biểu tượng ứng với:
A. $10$ học sinh
B. $15$ học sinh
C. $20$ học sinh
D. $5$ học sinh

**Câu 4 (0,75 điểm):** Bảng số liệu kích cỡ giày bán được trong ngày: cỡ 36 bán $2$ đôi, cỡ 37 bán $5$ đôi, cỡ 38 bán $11$ đôi, cỡ 39 bán $8$ đôi. Cỡ giày bán chạy nhất là:
A. Cỡ 36
B. Cỡ 37
C. Cỡ 38
D. Cỡ 39

---

### Phần 2: Tự luận (3 bài — 7,0 điểm)

**Bài 1 (2,5 điểm):**
Điều tra loại quả yêu thích của $24$ bạn học sinh tổ 3 và tổ 4 lớp 6A, ta thu được dãy dữ liệu sau:
$$Xoai;\; Cam;\; Tao;\; Nho;\; Xoai;\; Xoai;\; Cam;\; Tao;\; Nho;\; Xoai;\; Cam;\; Tao;$$
$$Xoai;\; Cam;\; Tao;\; Xoai;\; Nho;\; Cam;\; Xoai;\; Tao;\; Cam;\; Xoai;\; Tao;\; Xoai.$$
a) Hãy lập bảng thống kê số bạn yêu thích mỗi loại quả.
b) Loại quả nào được các bạn yêu thích nhất? Loại quả nào ít được ưa chuộng nhất?

**Bài 2 (2,5 điểm):**
Số lượng xe đạp bán được trong $4$ tuần của một cửa hàng xe đạp được cho trong bảng sau:

| Tuần | Tuần 1 | Tuần 2 | Tuần 3 | Tuần 4 |
| :---: | :---: | :---: | :---: | :---: |
| **Số xe đạp** | $15$ | $20$ | $10$ | $25$ |

Hãy vẽ biểu đồ tranh biểu diễn số lượng xe đạp bán được trong $4$ tuần của cửa hàng, quy ước mỗi biểu tượng xe đạp $\text{[Xe]}$ ứng với $5$ chiếc xe đạp.

**Bài 3 (2,0 điểm — Vận dụng cao):**
Một nông trường dùng biểu đồ tranh để biểu diễn sản lượng mật ong thu hoạch trong ba tháng hè: Tháng 6 vẽ $4$ biểu tượng; Tháng 7 vẽ $5$ biểu tượng nguyên và $1$ nửa biểu tượng; Tháng 8 vẽ $6$ biểu tượng.
Biết rằng sản lượng mật ong thu hoạch của Tháng 7 là $110$ lít.
a) Hỏi mỗi biểu tượng ứng với bao nhiêu lít mật ong?
b) Tính tổng sản lượng mật ong nông trường thu hoạch được trong cả ba tháng hè.

---

### Đáp án và Thang điểm chi tiết

#### Phần 1: Trắc nghiệm (3,0 điểm)
- Câu 1: **B** ($6 \times 5 = 30$). *(0,75 điểm)*
- Câu 2: **B** ($4 \times 4 + 2 = 18$). *(0,75 điểm)*
- Câu 3: **B** ($45 : 3 = 15$). *(0,75 điểm)*
- Câu 4: **C** (Cỡ 38). *(0,75 điểm)*

#### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (2,5 điểm):**
- a) Đếm tần số từng loại:
  - Xoài: $9$ bạn.
  - Cam: $6$ bạn.
  - Táo: $6$ bạn.
  - Nho: $3$ bạn.
  Kiểm tra tổng: $9 + 6 + 6 + 3 = 24$ bạn. *(1,0 điểm)*
  Bảng thống kê:

| Loại quả | Xoài | Cam | Táo | Nho | Tổng cộng |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số bạn thích** | $9$ | $6$ | $6$ | $3$ | $24$ |
*(0,75 điểm)*

- b)
  - Quả được yêu thích nhất là **Xoài** ($9$ bạn). *(0,4 điểm)*
  - Quả ít được ưa chuộng nhất là **Nho** ($3$ bạn). *(0,35 điểm)*

**Bài 2 (2,5 điểm):**
- Tính số biểu tượng cho từng tuần:
  - Tuần 1: $15 : 5 = 3$ biểu tượng.
  - Tuần 2: $20 : 5 = 4$ biểu tượng.
  - Tuần 3: $10 : 5 = 2$ biểu tượng.
  - Tuần 4: $25 : 5 = 5$ biểu tượng. *(1,0 điểm)*
- Vẽ biểu đồ tranh: *(1,0 điểm)*
  Tuần 1: $\text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}$
  Tuần 2: $\text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}$
  Tuần 3: $\text{[Xe]}\; \text{[Xe]}$
  Tuần 4: $\text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}\; \text{[Xe]}$
- Có ghi rõ chú thích: *"Mỗi $\text{[Xe]}$ ứng với $5$ chiếc xe đạp"*. *(0,5 điểm)*

**Bài 3 (2,0 điểm):**
- a) Tháng 7 vẽ $5$ biểu tượng nguyên và $1$ nửa biểu tượng, tức là $5{,}5$ biểu tượng. *(0,25 điểm)*
  Mỗi biểu tượng ứng với số lít mật ong là:
  $$110 : 5{,}5 = 20\quad \text{(lít)}.$$ *(0,75 điểm)*
- b)
  - Sản lượng Tháng 6: $4 \times 20 = 80$ lít. *(0,25 điểm)*
  - Sản lượng Tháng 8: $6 \times 20 = 120$ lít. *(0,25 điểm)*
  - Tổng sản lượng ba tháng:
    $$80 + 110 + 120 = 310\quad \text{(lít)}.$$ *(0,5 điểm)*
