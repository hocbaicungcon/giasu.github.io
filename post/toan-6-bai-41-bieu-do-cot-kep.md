---
title: 'Toán 6 Bài 41: Biểu đồ cột kép - Cấu trúc, cách đọc, cách vẽ và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 41 Biểu đồ cột kép: đặc điểm cặp cột sát nhau, bảng chú giải, 3 bước vẽ chuẩn xác, kỹ năng so sánh đối chiếu hai bộ dữ liệu song song, 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Thống kê
  - Biểu đồ cột kép
  - So sánh dữ liệu
  - Trực quan hóa dữ liệu
  - Kết nối tri thức
grade: 6
---

# Bài 41. Biểu đồ cột kép

Trong bài học trước, chúng ta đã thành thạo biểu đồ cột đơn — công cụ tuyệt vời để so sánh số liệu của các đối tượng riêng lẻ. Tuy nhiên, trong thực tế quản lý và nghiên cứu, chúng ta thường không chỉ quan sát một chỉ số duy nhất mà cần **so sánh đồng thời hai bộ số liệu song song** để nhìn thấy bức tranh đa chiều:
- So sánh số học sinh Nam và học sinh Nữ của từng lớp;
- So sánh doanh thu và chi phí của một công ty qua các tháng;
- So sánh lượng điện tiêu thụ của năm nay với năm ngoái;
- So sánh số huy chương Vàng và Bạc của các đoàn thể thao.

Nếu vẽ hai biểu đồ cột riêng biệt, người xem sẽ phải liên tục đảo mắt qua lại giữa hai biểu đồ rất bất tiện. Để giải quyết trọn vẹn nhu cầu so sánh trực quan này, các nhà thống kê đã ghép đôi hai cột lại với nhau để tạo thành: **Biểu đồ cột kép (Double Bar Chart)**.

Bài học này sẽ trang bị cho các em kiến thức toàn diện về cấu trúc của biểu đồ cột kép, cách đọc bảng chú giải chuẩn xác, $3$ bước vẽ biểu đồ kép đẹp mắt, kỹ năng phân tích đối sánh sâu sắc và $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 41: BIỂU ĐỒ CỘT KÉP</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cấu trúc cặp cột sát nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Mỗi đối tượng có <strong>hai cột đặt sát nhau</strong>.<br>• Hai cột có cùng bề rộng, tô hai màu khác nhau.<br>• Khoảng cách giữa các cặp cột bằng nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Bảng chú giải (Legend)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Thành phần <strong>bắt buộc</strong> chỉ rõ mỗi màu ứng với bộ dữ liệu nào.<br>• Phải đọc chú giải trước khi phân tích để tránh trả lời ngược thông tin.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hai hướng phân tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• <strong>Nội bộ cặp:</strong> So sánh hai đại lượng của cùng một đối tượng (Thu vs Chi).<br>• <strong>Giữa các cặp:</strong> So sánh xu hướng phát triển qua thời gian hoặc giữa các nhóm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Quy trình vẽ 3 bước</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;"><strong>B1:</strong> Dựng hai trục tọa độ.<br><strong>B2:</strong> Vẽ các cặp cột sát nhau, tô 2 màu phân biệt.<br><strong>B3:</strong> Ghi số liệu đỉnh cột, vẽ bảng chú giải và ghi tên biểu đồ.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Trực giác về việc so sánh song song (5–7 phút)

Hãy bắt đầu bài học bằng 5 câu hỏi tình huống thực tế:

**Câu 1:** Trong học kì I, lớp 6A có $15$ bạn giỏi Toán và $10$ bạn giỏi Văn. Lớp 6B có $12$ bạn giỏi Toán và $16$ bạn giỏi Văn.
- Để so sánh thành tích học tập hai môn của cả hai lớp, nếu vẽ biểu đồ cột đơn thông thường thì ta cần vẽ mấy biểu đồ?
- *Trả lời:* Ta sẽ phải vẽ $2$ biểu đồ cột riêng biệt (một biểu đồ môn Toán và một biểu đồ môn Văn), gây khó khăn khi muốn đối chiếu cả hai môn cùng lúc.

**Câu 2:** Nếu ta vẽ cả hai cột (môn Toán và môn Văn) của lớp 6A đứng sát cạnh nhau trên cùng một trục ngang, điều này mang lại lợi ích gì cho người xem?
- *Trả lời:* Người xem sẽ nhìn thấy ngay lập tức lớp 6A học tốt môn nào hơn (Toán hay Văn) chỉ trong một cái liếc nhìn, đồng thời vẫn so sánh được thành tích của lớp 6A với lớp 6B đứng cạnh bên.

**Câu 3:** Khi đặt hai cột sát nhau cho cùng một lớp, làm thế nào để người đọc không bị nhầm lẫn giữa cột điểm Toán và cột điểm Văn?
- *Trả lời:* Ta phải tô **hai màu sắc khác nhau** (hoặc dùng hai kiểu họa tiết kẻ sọc khác nhau) cho hai cột và ghi kèm một **bảng chú giải** rõ ràng.

**Câu 4:** Khoảng cách giữa hai cột trong cùng một cặp có được để trống không?
- *Trả lời:* Không. Hai cột trong cùng một cặp đối tượng phải được vẽ **dính sát vào nhau**. Chỉ có khoảng cách giữa các cặp đối tượng khác nhau mới có khoảng trống cách đều.

**Câu 5:** Một cửa hàng ghi lại số tiền thu vào và chi ra trong tháng: Thu vào $50$ triệu đồng, Chi ra $35$ triệu đồng. Cửa hàng đó tháng này lãi hay lỗ? Làm thế nào nhận ra điều này trên biểu đồ cột kép?
- *Trả lời:* Cửa hàng có lãi $15$ triệu đồng vì Thu $>$ Chi. Trên biểu đồ cột kép, ta nhận ra ngay khi thấy cột "Thu" cao hơn cột "Chi".

---

## I. Lý thuyết trọng tâm

### 1. Biểu đồ cột kép là gì?

> [!NOTE]
> **Định nghĩa:**
> Khi cần so sánh cùng lúc **hai bộ số liệu** của các đối tượng cùng loại, người ta ghép hai cột đơn của cùng một đối tượng lại với nhau để tạo thành **Biểu đồ cột kép (Double Bar Chart)**.

```text
       Số học sinh (bạn)
        20 ┬
           │              ┌───┬───┐
        15 ┼      ┌───┬───┤   │░░░│
           │      │   │░░░│   │░░░│   ┌───┬───┐
        10 ┼      │   │░░░│   │░░░│   │   │░░░│
           │      │   │░░░│   │░░░│   │   │░░░│
         5 ┼      │   │░░░│   │░░░│   │   │░░░│
           │      │   │░░░│   │░░░│   │   │░░░│
         0 ┴──────┴───┴───┴───┴───┴───┴───┴───┴────── Danh mục
                  Lớp 6A      Lớp 6B      Lớp 6C
                     
                  Chú giải:  [   ] Nam      [░░░] Nữ
```

#### Các đặc điểm cấu tạo của biểu đồ cột kép:
1. **Mỗi đối tượng có một cặp gồm hai cột đặt sát nhau:** Mỗi cột biểu diễn số liệu của một bộ dữ liệu tương ứng.
2. **Hai cột trong cùng một cặp được phân biệt bằng hai màu sắc:** Ví dụ cột màu xanh biểu diễn số học sinh Nam, cột màu cam biểu diễn số học sinh Nữ.
3. **Bảng chú giải (Legend):** Luôn được đặt ở góc trên hoặc dưới biểu đồ để giải thích ý nghĩa màu sắc của từng cột.
4. **Quy tắc kích thước:** Các cột đều có cùng bề rộng; khoảng cách giữa các cặp đối tượng là bằng nhau.

---

### 2. Kỹ năng đọc và khai thác thông tin từ biểu đồ cột kép

Biểu đồ cột kép cung cấp hai luồng thông tin song song:

- **Luồng 1 — So sánh nội bộ trong từng cặp (So sánh hàng dọc):**
  - So sánh trực tiếp chiều cao của hai cột đặt sát nhau để biết đại lượng nào lớn hơn, đại lượng nào nhỏ hơn và chênh lệch nhau bao nhiêu.
  - *Ví dụ:* Ở Lớp 6A, cột Nam cao hơn cột Nữ $\implies$ số bạn Nam nhiều hơn số bạn Nữ.
- **Luồng 2 — So sánh giữa các đối tượng (So sánh hàng ngang):**
  - So sánh các cột có **cùng màu** giữa các đối tượng khác nhau.
  - *Ví dụ:* So sánh tất cả các cột màu xanh để tìm ra lớp có nhiều bạn Nam nhất; so sánh tất cả các cột màu cam để xem xu hướng số bạn Nữ.

---

### 3. Quy trình 3 bước vẽ biểu đồ cột kép từ bảng số liệu

> [!TIP]
> **3 Bước vẽ biểu đồ cột kép:**
> - **Bước 1: Vẽ hệ trục tọa độ**
>   - Trục ngang: Ghi tên các nhóm đối tượng (cách đều nhau).
>   - Trục đứng: Bắt đầu từ vạch $0,$ chia độ các khoảng cách đều nhau phù hợp với số liệu lớn nhất của cả hai bộ dữ liệu, ghi rõ đơn vị đo.
> - **Bước 2: Dựng các cặp cột**
>   - Ứng với mỗi đối tượng trên trục ngang, vẽ **hai cột hình chữ nhật dính sát nhau**, có cùng bề rộng.
>   - Chiều cao mỗi cột bằng đúng giá trị số liệu trong bảng.
>   - Tô màu cột thứ nhất bằng màu A, cột thứ hai bằng màu B (áp dụng thống nhất cho tất cả các đối tượng).
> - **Bước 3: Hoàn thiện biểu đồ**
>   - Ghi số liệu cụ thể ở trên đỉnh mỗi cột.
>   - Vẽ ô **bảng chú giải** giải thích ý nghĩa màu A và màu B.
>   - Đặt tiêu đề rõ ràng cho biểu đồ.

---

> [!WARNING]
> ### Những sai lầm thường gặp khi học biểu đồ cột kép:
> 1. **Đọc nhầm màu trong bảng chú giải:** Dẫn đến việc trả lời ngược kết quả (ví dụ nhầm số liệu của Nam thành Nữ, hoặc nhầm Chi phí thành Doanh thu).
> 2. **Vẽ tách rời hai cột trong cùng một cặp:** Hai cột của cùng một đối tượng bắt buộc phải **đặt sát nhau**, không được để khoảng trống ở giữa chúng.
> 3. **Hai màu sắc không nhất quán:** Cặp thứ nhất tô màu xanh trước, cặp thứ hai lại đảo màu cam lên trước. Phải luôn giữ đúng thứ tự màu sắc từ trái sang phải cho tất cả các cặp cột!

---

## II. Các dạng bài tập điển hình

### Dạng 1: Đọc và phân tích số liệu từ biểu đồ cột kép

#### Phương pháp giải:
- Quan sát bảng chú giải để xác định chính xác mỗi màu ứng với đại lượng nào.
- Đọc số liệu ở đỉnh từng cột hoặc gióng sang trục đứng.
- Thực hiện các phép so sánh hơn kém, tính tổng hoặc tỉ số phần trăm.

---

#### Ví dụ 1:
Biểu đồ cột kép dưới đây cho biết số huy chương Vàng và huy chương Bạc của ba đoàn thể thao Việt Nam, Thái Lan, Indonesia tại một kỳ đại hội thể thao khu vực:

```text
Số huy chương
 50 ┬
 45 ┼                  ┌───┬───┐ (45)
 40 ┼  ┌───┬───┐ (40)  │   │░░░│
 35 ┼  │   │░░░│ (35)  │   │░░░│
 30 ┼  │   │░░░│       │   │░░░│         ┌───┬───┐ (30)
 25 ┼  │   │░░░│       │   │░░░│ (25)    │   │░░░│
 20 ┼  │   │░░░│       │   │░░░│         │   │░░░│ (20)
 15 ┼  │   │░░░│       │   │░░░│         │   │░░░│
 10 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  5 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  0 ┴──┴───┴───┴───────┴───┴───┴─────────┴───┴───┴── Đoàn thể thao
        Việt Nam        Thái Lan        Indonesia

       Chú giải:  [   ] Huy chương Vàng     [░░░] Huy chương Bạc
```

a) Đoàn thể thao nào giành được nhiều huy chương Vàng nhất? Bao nhiêu huy chương?
b) Đoàn thể thao nào có số huy chương Vàng ít hơn số huy chương Bạc?
c) Tính tổng số huy chương (cả Vàng và Bạc) mà đoàn Việt Nam đạt được.
d) Cả ba đoàn giành được tổng cộng bao nhiêu huy chương Vàng?

**Lời giải:**
a) Nhìn vào các cột màu trắng (Huy chương Vàng):
Cột của Thái Lan cao nhất với $45$ huy chương Vàng.
Vậy đoàn **Thái Lan** giành được nhiều huy chương Vàng nhất ($45$ huy chương).

b) So sánh hai cột trong cùng một cặp:
- Việt Nam: Vàng ($40$) $>$ Bạc ($35$).
- Thái Lan: Vàng ($45$) $>$ Bạc ($25$).
- Indonesia: Vàng ($30$) $>$ Bạc ($20$).
Như vậy, cả ba đoàn đều có số huy chương Vàng nhiều hơn số huy chương Bạc. **Không có đoàn nào** có số huy chương Vàng ít hơn huy chương Bạc.

c) Tổng số huy chương đoàn Việt Nam giành được là:
$$40 + 35 = 75\quad \text{(huy chương)}.$$

d) Tổng số huy chương Vàng của cả ba đoàn là:
$$40 + 45 + 30 = 115\quad \text{(huy chương)}.$$

---

### Dạng 2: Vẽ biểu đồ cột kép từ bảng thống kê

#### Phương pháp giải:
- Đọc bảng thống kê gồm hai dòng số liệu.
- Chọn thang đo trục đứng phù hợp và dựng các cặp cột theo $3$ bước chuẩn.

---

#### Ví dụ 2:
Bảng thống kê số lượng học sinh tham gia câu lạc bộ Bóng đá và Bóng rổ của $3$ lớp khối 6:

| Lớp | 6A | 6B | 6C |
| :---: | :---: | :---: | :---: |
| **Bóng đá (bạn)** | $18$ | $14$ | $16$ |
| **Bóng rổ (bạn)** | $12$ | $16$ | $10$ |

Hãy vẽ biểu đồ cột kép biểu diễn bảng số liệu trên.

**Lời giải:**
- **Bước 1:** Trục đứng ghi số học sinh, chọn khoảng chia mỗi vạch là $2$ bạn (từ $0$ đến $20$). Trục ngang ghi tên ba lớp: 6A, 6B, 6C.
- **Bước 2:** Với mỗi lớp, vẽ hai cột chữ nhật sát nhau có cùng bề rộng:
  - Cột 1 (Bóng đá - màu trắng): cao $18$ (lớp 6A), $14$ (lớp 6B), $16$ (lớp 6C).
  - Cột 2 (Bóng rổ - kẻ sọc): cao $12$ (lớp 6A), $16$ (lớp 6B), $10$ (lớp 6C).
- **Bước 3:** Ghi số liệu trên đỉnh các cột, vẽ ô chú giải:
  `[   ]` Bóng đá; `[░░░]` Bóng rổ.

```text
Số học sinh (bạn)
 20 ┬
 18 ┼  ┌───┐ (18)
 16 ┼  │   │           ┌───┬───┐ (16)    ┌───┐ (16)
 14 ┼  │   │   ┌───┐   │   │░░░│         │   │
 12 ┼  │   │░░░│(12)   │   │░░░│         │   │   ┌───┐ (10)
 10 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  8 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  6 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  4 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  2 ┼  │   │░░░│       │   │░░░│         │   │░░░│
  0 ┴──┴───┴───┴───────┴───┴───┴─────────┴───┴───┴── Lớp
          6A              6B                6C

       Chú giải:  [   ] Bóng đá     [░░░] Bóng rổ
```

---

### Dạng 3: Chuyển đổi từ biểu đồ cột kép sang bảng thống kê

#### Phương pháp giải:
- Gióng đỉnh từng cột theo màu để ghi lại các giá trị vào hai hàng số liệu của bảng.
- Bổ sung dòng tổng hoặc hiệu số nếu cần thiết.

---

#### Ví dụ 3:
Một biểu đồ cột kép thể hiện tình hình thu và chi của một xưởng may trong $4$ quý của năm 2025:
- Quý I: Thu $80$ triệu, Chi $60$ triệu.
- Quý II: Thu $100$ triệu, Chi $75$ triệu.
- Quý III: Thu $90$ triệu, Chi $95$ triệu.
- Quý IV: Thu $120$ triệu, Chi $85$ triệu.
a) Hãy lập bảng thống kê biểu diễn tình hình thu - chi của xưởng may theo từng quý.
b) Trong quý nào xưởng may bị thua lỗ (chi nhiều hơn thu)? Số tiền lỗ là bao nhiêu?
c) Cả năm 2025 xưởng may có lãi hay lỗ? Tổng số tiền lãi là bao nhiêu?

**Lời giải:**
a) Bảng thống kê thu - chi năm 2025:

| Thời gian (Quý) | Quý I | Quý II | Quý III | Quý IV | Tổng cả năm |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Thu vào (triệu đồng)** | $80$ | $100$ | $90$ | $120$ | $390$ |
| **Chi ra (triệu đồng)** | $60$ | $75$ | $95$ | $85$ | $315$ |

b)
- Trong **Quý III**, xưởng may có Chi ($95$ triệu) $>$ Thu ($90$ triệu).
- Do đó xưởng may bị thua lỗ trong Quý III.
- Số tiền lỗ là:
  $$95 - 90 = 5\quad \text{(triệu đồng)}.$$

c)
- Tổng thu cả năm: $80 + 100 + 90 + 120 = 390$ triệu đồng.
- Tổng chi cả năm: $60 + 75 + 95 + 85 = 315$ triệu đồng.
- Vì Tổng thu $>$ Tổng chi nên cả năm xưởng may **có lãi**.
- Tổng số tiền lãi cả năm là:
  $$390 - 315 = 75\quad \text{(triệu đồng)}.$$

---

## III. 5 Chuyên đề Nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Phân tích tốc độ tăng trưởng phần trăm giữa hai chuỗi số liệu

Khi so sánh hai đối tượng (ví dụ: Sản phẩm A và Sản phẩm B), việc chỉ nhìn vào số lượng tuyệt đối chưa đủ, ta cần tính **tốc độ tăng trưởng** để đánh giá đối tượng nào bứt phá nhanh hơn.

> [!IMPORTANT]
> **Công thức tính tốc độ tăng trưởng phần trăm:**
> $$\text{Tốc độ tăng trưởng} = \frac{\text{Giá trị kỳ sau} - \text{Giá trị kỳ trước}}{\text{Giá trị kỳ trước}} \times 100\%.$$

#### Bài toán:
Biểu đồ cột kép ghi lại doanh số bán hàng của hai dòng máy tính X và Y trong hai năm 2024 và 2025:
- Năm 2024: Dòng X bán được $200$ máy; Dòng Y bán được $80$ máy.
- Năm 2025: Dòng X bán được $250$ máy; Dòng Y bán được $120$ máy.
a) Năm 2025, dòng máy nào có số lượng bán ra tăng nhiều hơn về số lượng tuyệt đối?
b) Tính tốc độ tăng trưởng phần trăm của từng dòng máy từ năm 2024 đến năm 2025. Dòng máy nào có tốc độ phát triển mạnh mẽ hơn?

**Lời giải:**
a)
- Mức tăng số lượng của dòng X:
  $$250 - 200 = 50\quad \text{(máy)}.$$
- Mức tăng số lượng của dòng Y:
  $$120 - 80 = 40\quad \text{(máy)}.$$
Về số lượng tuyệt đối, dòng máy X tăng nhiều hơn dòng máy Y ($50$ máy $> 40$ máy).

b)
- Tốc độ tăng trưởng của dòng X:
  $$\frac{250 - 200}{200} \times 100\% = \frac{50}{200} \times 100\% = 25\%.$$
- Tốc độ tăng trưởng của dòng Y:
  $$\frac{120 - 80}{80} \times 100\% = \frac{40}{80} \times 100\% = 50\%.$$
Mặc dù dòng X tăng nhiều hơn về số lượng máy, nhưng dòng máy Y có tốc độ tăng trưởng lên tới $50\%$ (gấp đôi tốc độ $25\%$ của dòng X). Điều này cho thấy dòng máy Y đang có sự bứt phá thị trường mạnh mẽ hơn!

---

### Chuyên đề 2: Bài toán phân tích cán cân kinh tế (Thặng dư và Thâm hụt)

#### Bài toán:
Biểu đồ cột kép kim ngạch xuất khẩu và nhập khẩu của một doanh nghiệp trong $3$ năm:
- Năm 2023: Xuất khẩu $15$ triệu USD; Nhập khẩu $18$ triệu USD.
- Năm 2024: Xuất khẩu $22$ triệu USD; Nhập khẩu $20$ triệu USD.
- Năm 2025: Xuất khẩu $30$ triệu USD; Nhập khẩu $24$ triệu USD.
a) Cán cân thương mại được tính bằng $\text{Xuất khẩu} - \text{Nhập khẩu}.$ Nếu hiệu số dương thì gọi là "xuất siêu" (thặng dư), nếu âm gọi là "nhập siêu" (thâm hụt). Hãy xác định doanh nghiệp xuất siêu hay nhập siêu trong từng năm và tính giá trị cụ thể.
b) Tính tổng cán cân thương mại của doanh nghiệp sau cả $3$ năm.

**Lời giải:**
a)
- **Năm 2023:**
  $$\text{Cán cân} = 15 - 18 = -3\quad \text{(triệu USD)}.$$
  Doanh nghiệp bị **nhập siêu** $3$ triệu USD.
- **Năm 2024:**
  $$\text{Cán cân} = 22 - 20 = +2\quad \text{(triệu USD)}.$$
  Doanh nghiệp **xuất siêu** $2$ triệu USD.
- **Năm 2025:**
  $$\text{Cán cân} = 30 - 24 = +6\quad \text{(triệu USD)}.$$
  Doanh nghiệp **xuất siêu** $6$ triệu USD.

b) Tổng cán cân thương mại sau $3$ năm là:
$$(-3) + 2 + 6 = +5\quad \text{(triệu USD)}.$$
Doanh nghiệp xuất siêu tổng cộng $5$ triệu USD sau $3$ năm.

---

### Chuyên đề 3: Phân tích cơ cấu tỉ lệ phần trăm từ biểu đồ cột kép

#### Bài toán:
Khảo sát số học sinh đạt giải Thể dục thể thao cấp quận của hai trường THCS An Bình và Bình Minh:
- Trường An Bình: Nam đạt $24$ giải, Nữ đạt $16$ giải.
- Trường Bình Minh: Nam đạt $18$ giải, Nữ đạt $12$ giải.
a) Tính tỉ lệ phần trăm số học sinh Nữ đạt giải trên tổng số giải của mỗi trường.
b) Em có nhận xét gì về cơ cấu thành tích theo giới tính của hai trường?

**Lời giải:**
a)
- **Tại trường An Bình:**
  Tổng số giải đạt được:
  $$24 + 16 = 40\quad \text{(giải)}.$$
  Tỉ lệ học sinh Nữ đạt giải là:
  $$\frac{16}{40} \times 100\% = 40\%.$$
- **Tại trường Bình Minh:**
  Tổng số giải đạt được:
  $$18 + 12 = 30\quad \text{(giải)}.$$
  Tỉ lệ học sinh Nữ đạt giải là:
  $$\frac{12}{30} \times 100\% = 40\%.$$

b) **Nhận xét sâu sắc:** Mặc dù trường An Bình có số lượng giải tuyệt đối nhiều hơn trường Bình Minh ($40$ giải so với $30$ giải), nhưng **cơ cấu tỉ lệ theo giới tính của hai trường là hoàn toàn giống nhau**: ở cả hai trường, học sinh Nam đều chiếm $60\%$ và học sinh Nữ đều chiếm đúng $40\%$ tổng số giải!

---

### Chuyên đề 4: Khôi phục biểu đồ cột kép bị mất số liệu bằng hệ thức đại số

#### Bài toán:
Một biểu đồ cột kép biểu diễn số học sinh Nam và Nữ của hai lớp 6A và 6B. Do bảng in bị ướt nước, một số số liệu trên đỉnh cột bị mờ đi. Biết rằng:
- Lớp 6A có số học sinh Nam nhiều hơn số học sinh Nữ là $4$ bạn. Tổng sĩ số lớp 6A là $40$ bạn.
- Cột học sinh Nam của lớp 6B cao bằng đúng cột học sinh Nữ của lớp 6A.
- Tổng số học sinh của cả hai lớp là $78$ bạn.
Hãy tìm số học sinh Nam và Nữ của từng lớp.

**Lời giải:**
1. **Xét lớp 6A:**
   - Tổng: $\text{Nam}_{6A} + \text{Nữ}_{6A} = 40.$
   - Hiệu: $\text{Nam}_{6A} - \text{Nữ}_{6A} = 4.$
   Áp dụng bài toán tìm hai số khi biết Tổng và Hiệu:
   $$\text{Số học sinh Nam lớp 6A} = (40 + 4) : 2 = 22\quad \text{(bạn)}.$$
   $$\text{Số học sinh Nữ lớp 6A} = 40 - 22 = 18\quad \text{(bạn)}.$$

2. **Xét lớp 6B:**
   - Cột Nam lớp 6B bằng cột Nữ lớp 6A:
     $$\text{Số học sinh Nam lớp 6B} = 18\quad \text{(bạn)}.$$
   - Tổng sĩ số lớp 6B là:
     $$78 - 40 = 38\quad \text{(bạn)}.$$
   - Số học sinh Nữ lớp 6B là:
     $$38 - 18 = 20\quad \text{(bạn)}.$$

**Kết luận:**
- Lớp 6A: $22$ Nam và $18$ Nữ.
- Lớp 6B: $18$ Nam và $20$ Nữ.

---

### Chuyên đề 5: Ứng dụng biểu đồ cột kép trong thử nghiệm đối chứng A/B Testing

Trong khoa học hiện đại và công nghệ số, phương pháp thử nghiệm A/B (A/B Testing) so sánh hai phiên bản để chọn ra phương án tối ưu.

#### Bài toán:
Một công ty công nghệ thử nghiệm hai mẫu giao diện website (Giao diện A và Giao diện B) cho $4$ nhóm khách hàng để theo dõi tỉ lệ bấm mua hàng (đơn vị: $\% $):
- Nhóm 1: Mẫu A đạt $4{,}5\%$; Mẫu B đạt $6{,}2\%$.
- Nhóm 2: Mẫu A đạt $5{,}0\%$; Mẫu B đạt $7{,}1\%$.
- Nhóm 3: Mẫu A đạt $3{,}8\%$; Mẫu B đạt $5{,}5\%$.
- Nhóm 4: Mẫu A đạt $4{,}2\%$; Mẫu B đạt $6{,}8\%$.
a) Trên biểu đồ cột kép, ở cả $4$ nhóm khách hàng, cột của mẫu giao diện nào luôn cao hơn?
b) Tính tỉ lệ bấm mua hàng trung bình của từng mẫu giao diện qua cả $4$ nhóm. Công ty nên chọn triển khai mẫu giao diện nào cho toàn bộ khách hàng?

**Lời giải:**
a)
- So sánh từng cặp:
  - Nhóm 1: Mẫu B ($6{,}2\%$) $>$ Mẫu A ($4{,}5\%$).
  - Nhóm 2: Mẫu B ($7{,}1\%$) $>$ Mẫu A ($5{,}0\%$).
  - Nhóm 3: Mẫu B ($5{,}5\%$) $>$ Mẫu A ($3{,}8\%$).
  - Nhóm 4: Mẫu B ($6{,}8\%$) $>$ Mẫu A ($4{,}2\%$).
Ở tất cả $4$ nhóm khách hàng, **cột của Mẫu B luôn cao hơn cột của Mẫu A**.

b)
- Tỉ lệ trung bình của Mẫu A:
  $$\overline{X}_A = \frac{4{,}5 + 5{,}0 + 3{,}8 + 4{,}2}{4} = \frac{17{,}5}{4} = 4{,}375\%.$$
- Tỉ lệ trung bình của Mẫu B:
  $$\overline{X}_B = \frac{6{,}2 + 7{,}1 + 5{,}5 + 6{,}8}{4} = \frac{25{,}6}{4} = 6{,}4\%.$$
Vì Mẫu B vượt trội hơn ở mọi nhóm khách hàng và có tỉ lệ chuyển đổi trung bình đạt $6{,}4\%$ (cao hơn gần $1{,}5$ lần so với Mẫu A), công ty **chắc chắn nên chọn Mẫu giao diện B**.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác

```quiz
type: choice
question: 'Biểu đồ cột kép thường được sử dụng khi nào?'
options:
  - 'Khi chỉ có đúng một đối tượng cần vẽ'
  - 'Khi cần so sánh cùng lúc hai bộ dữ liệu của các nhóm đối tượng'
  - 'Khi không có bất kì con số nào'
  - 'Khi muốn vẽ hình tròn thay cho hình chữ nhật'
answer: 2
explanation: 'Biểu đồ cột kép dùng để so sánh hai bộ số liệu song song của các nhóm đối tượng cùng loại.'
```

```quiz
type: choice
question: 'Trong biểu đồ cột kép, hai cột của cùng một đối tượng có vị trí như thế nào đối với nhau?'
options:
  - 'Cách xa nhau một khoảng lớn'
  - 'Đặt sát cạnh nhau'
  - 'Xếp chồng lên nhau'
  - 'Cắt chéo qua nhau'
answer: 2
explanation: 'Hai cột của cùng một đối tượng bắt buộc phải đặt dính sát cạnh nhau.'
```

```quiz
type: choice
question: 'Thành phần nào giúp người đọc phân biệt được ý nghĩa của hai màu cột trong biểu đồ cột kép?'
options:
  - 'Trục nằm ngang'
  - 'Bảng chú giải (Legend)'
  - 'Trục thẳng đứng'
  - 'Khoảng cách giữa các cột'
answer: 2
explanation: 'Bảng chú giải chỉ rõ mỗi màu sắc biểu diễn cho bộ dữ liệu nào.'
```

```quiz
type: choice
question: 'Nếu cột màu xanh biểu diễn học sinh Nam và cột màu cam biểu diễn học sinh Nữ. Tại lớp 6A, cột màu xanh cao 18 và cột màu cam cao 22. Khẳng định nào sau đây ĐÚNG?'
options:
  - 'Lớp 6A có số bạn Nam nhiều hơn số bạn Nữ'
  - 'Lớp 6A có 18 bạn Nữ và 22 bạn Nam'
  - 'Lớp 6A có số bạn Nữ nhiều hơn số bạn Nam là 4 bạn'
  - 'Tổng số học sinh lớp 6A là 36 bạn'
answer: 3
explanation: 'Số bạn Nữ là 22, Nam là 18. Chênh lệch là 22 - 18 = 4 bạn.'
```

```quiz
type: choice
question: 'Biểu đồ thu - chi của một công ty: Tháng 3 có cột Thu cao 50 triệu và cột Chi cao 65 triệu. Tình hình tài chính tháng 3 là:'
options:
  - 'Lãi 15 triệu đồng'
  - 'Lỗ 15 triệu đồng'
  - 'Hòa vốn'
  - 'Lãi 115 triệu đồng'
answer: 2
explanation: 'Chi (65) > Thu (50) nên công ty bị lỗ: 65 - 50 = 15 triệu đồng.'
```

```quiz
type: choice
question: 'Quy ước nào sau đây là ĐÚNG khi vẽ biểu đồ cột kép?'
options:
  - 'Mỗi cặp cột dùng một màu sắc tùy ý không cần giống các cặp khác'
  - 'Tất cả các cột trong biểu đồ phải có cùng một bề rộng'
  - 'Hai cột trong cùng một cặp phải vẽ cách xa nhau'
  - 'Trục đứng có thể bắt đầu từ số bất kì'
answer: 2
explanation: 'Tất cả các cột chữ nhật trong biểu đồ phải có cùng bề rộng.'
```

```quiz
type: choice
question: 'Số huy chương Vàng và Bạc của đoàn thể thao: Vàng có 15 chiếc, Bạc có 25 chiếc. Tổng số huy chương của đoàn là:'
options:
  - '10 chiếc'
  - '35 chiếc'
  - '40 chiếc'
  - '50 chiếc'
  - 'Không tính được'
answer: 3
explanation: 'Tổng số huy chương = 15 + 25 = 40 chiếc.'
```

```quiz
type: choice
question: 'Lớp 6C có số học sinh Nam là 20 bạn, học sinh Nữ là 25 bạn. Tỉ số phần trăm số học sinh Nam so với số học sinh Nữ là:'
options:
  - '80%'
  - '125%'
  - '44,4%'
  - '55,5%'
answer: 1
explanation: 'Tỉ số phần trăm Nam so với Nữ = (20 / 25) * 100% = 80%.'
```

```quiz
type: choice
question: 'Khi đọc một biểu đồ cột kép, bước đầu tiên quan trọng nhất cần làm là:'
options:
  - 'Cộng tất cả các số trên biểu đồ lại'
  - 'Quan sát bảng chú giải để xác định rõ ý nghĩa của từng màu cột'
  - 'Đo chiều cao cột bằng thước kẻ'
  - 'Tô lại màu cho các cột'
answer: 2
explanation: 'Phải đọc bảng chú giải trước tiên để không bị phân tích nhầm lẫn giữa hai bộ số liệu.'
```

```quiz
type: choice
question: 'Ưu điểm lớn nhất của biểu đồ cột kép so với việc vẽ hai biểu đồ cột đơn là:'
options:
  - 'Vẽ nhanh hơn gấp đôi'
  - 'Tiết kiệm màu vẽ'
  - 'Cho phép so sánh trực tiếp hai chỉ số của cùng một đối tượng ngay cạnh nhau'
  - 'Không cần ghi số liệu đỉnh cột'
answer: 3
explanation: 'Đặt hai cột sát nhau giúp đối chiếu tức thì sự chênh lệch giữa hai bộ dữ liệu.'
```

---

## V. Đề kiểm tra 15 phút tự luyện có hướng dẫn chấm

### Phần 1: Trắc nghiệm (4 câu — 3,0 điểm)

**Câu 1 (0,75 điểm):** Trong biểu đồ cột kép, hai cột của cùng một đối tượng có đặc điểm:
A. Cùng chiều cao
B. Đặt dính sát nhau và tô hai màu khác nhau
C. Đặt cách nhau một khoảng lớn
D. Một cột tròn và một cột vuông

**Câu 2 (0,75 điểm):** Biểu đồ thể hiện số lượng cây trồng của hai lớp 6A và 6B qua $3$ đợt: Đợt 1, Đợt 2, Đợt 3. Tổng số cột chữ nhật được vẽ trên biểu đồ là:
A. $3$ cột
B. $5$ cột
C. $6$ cột
D. $9$ cột

**Câu 3 (0,75 điểm):** Bảng chú giải ghi: Cột trắng là "Xuất khẩu", cột kẻ sọc là "Nhập khẩu". Tại một mốc thời gian, cột trắng cao $40$ tỉ đồng, cột sọc cao $30$ tỉ đồng. Nhận xét nào đúng?
A. Xuất khẩu ít hơn Nhập khẩu $10$ tỉ đồng
B. Xuất siêu $10$ tỉ đồng
C. Nhập siêu $10$ tỉ đồng
D. Tổng kim ngạch là $10$ tỉ đồng

**Câu 4 (0,75 điểm):** Lớp 6A có $24$ bạn Nam và $16$ bạn Nữ. Tỉ số phần trăm số học sinh Nam so với tổng sĩ số cả lớp là:
A. $60\%$
B. $40\%$
C. $150\%$
D. $66{,}7\%$

---

### Phần 2: Tự luận (3 bài — 7,0 điểm)

**Bài 1 (2,5 điểm):**
Biểu đồ cột kép ghi lại số lượng sách tham khảo môn Toán và môn Khoa học tự nhiên (KHTN) mà thư viện trường nhập về trong $3$ tháng:
- Tháng 9: Toán $80$ cuốn; KHTN $60$ cuốn.
- Tháng 10: Toán $100$ cuốn; KHTN $90$ cuốn.
- Tháng 11: Toán $70$ cuốn; KHTN $85$ cuốn.
a) Tháng nào thư viện nhập về nhiều sách Toán nhất? Tháng nào nhập về nhiều sách KHTN nhất?
b) Trong tháng nào số sách KHTN nhập về nhiều hơn số sách Toán? Nhiều hơn bao nhiêu cuốn?
c) Tính tổng số sách cả hai môn mà thư viện đã nhập về trong suốt $3$ tháng.

**Bài 2 (2,5 điểm):**
Số lượng học sinh Giỏi học kì I và học kì II của ba lớp 6A, 6B, 6C được ghi lại trong bảng sau:

| Lớp | 6A | 6B | 6C |
| :---: | :---: | :---: | :---: |
| **Học kì I (bạn)** | $12$ | $15$ | $10$ |
| **Học kì II (bạn)** | $16$ | $18$ | $15$ |

Hãy nêu các bước và vẽ biểu đồ cột kép biểu diễn bảng số liệu trên.

**Bài 3 (2,0 điểm — Vận dụng cao):**
Biểu đồ cột kép thể hiện số lượng công nhân Nam và Nữ của hai phân xưởng may:
- Phân xưởng 1 có tổng số $60$ công nhân, trong đó số công nhân Nữ gấp đôi số công nhân Nam.
- Phân xưởng 2 có số công nhân Nam nhiều hơn Phân xưởng 1 là $5$ người; và số công nhân Nữ ít hơn Phân xưởng 1 là $10$ người.
a) Tính số công nhân Nam và Nữ của Phân xưởng 1.
b) Tính tổng số công nhân của Phân xưởng 2.

---

### Đáp án và Thang điểm chi tiết

#### Phần 1: Trắc nghiệm (3,0 điểm)
- Câu 1: **B** (Đặt dính sát nhau và tô hai màu). *(0,75 điểm)*
- Câu 2: **C** ($3 \times 2 = 6$ cột). *(0,75 điểm)*
- Câu 3: **B** (Xuất siêu $10$ tỉ đồng). *(0,75 điểm)*
- Câu 4: **A** ($\frac{24}{40} \times 100\% = 60\%$). *(0,75 điểm)*

#### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (2,5 điểm):**
- a)
  - Tháng nhập nhiều sách Toán nhất: **Tháng 10** ($100$ cuốn). *(0,5 điểm)*
  - Tháng nhập nhiều sách KHTN nhất: **Tháng 10** ($90$ cuốn). *(0,5 điểm)*
- b)
  - Tháng có sách KHTN nhiều hơn sách Toán là **Tháng 11** (KHTN $85$ cuốn $>$ Toán $70$ cuốn). *(0,5 điểm)*
  - Chênh lệch là:
    $$85 - 70 = 15\text{ (cuốn)}.$$
    *(0,5 điểm)*
- c) Tổng số sách nhập về trong cả $3$ tháng:
  $$(80 + 100 + 70) + (60 + 90 + 85) = 250 + 235 = 485\text{ (cuốn)}.$$
  *(0,5 điểm)*

**Bài 2 (2,5 điểm):**
- Trình bày $3$ bước vẽ:
  - Chọn thang đo trục đứng từ $0$ đến $20$ (mỗi vạch cách nhau $2$ hoặc $5$ bạn). *(0,5 điểm)*
  - Vẽ đúng $3$ cặp cột sát nhau, cùng bề rộng: Lớp 6A ($12; 16$), Lớp 6B ($15; 18$), Lớp 6C ($10; 15$). *(1,0 điểm)*
  - Ghi số liệu trên đỉnh cột, vẽ ô chú giải phân biệt HK I và HK II, đặt tiêu đề biểu đồ. *(1,0 điểm)*

**Bài 3 (2,0 điểm):**
- a) Xét Phân xưởng 1:
  Tổng số công nhân là $60.$ Số Nữ gấp đôi số Nam $\implies$ Tổng số phần bằng nhau là:
  $$1 + 2 = 3\text{ (phần)}.$$
  Số công nhân Nam Phân xưởng 1 là:
  $$60 : 3 = 20\text{ (người)}.$$
  Số công nhân Nữ Phân xưởng 1 là:
  $$20 \times 2 = 40\text{ (người)}.$$
  *(1,0 điểm)*
- b) Xét Phân xưởng 2:
  - Số công nhân Nam Phân xưởng 2:
    $$20 + 5 = 25\text{ (người)}.$$
  - Số công nhân Nữ Phân xưởng 2:
    $$40 - 10 = 30\text{ (người)}.$$
  - Tổng số công nhân Phân xưởng 2:
    $$25 + 30 = 55\text{ (người)}.$$
  *(1,0 điểm)*
