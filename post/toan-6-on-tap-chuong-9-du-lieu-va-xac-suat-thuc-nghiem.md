---
title: 'Ôn tập Chương 9: Dữ liệu và Xác suất thực nghiệm - Toàn bộ Lý thuyết & 5 Chuyên đề Nâng cao'
description: 'Tổng ôn toàn bộ kiến thức Toán 6 Chương 9 Dữ liệu và Xác suất thực nghiệm: thu thập phân loại dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép, kết quả có thể, sự kiện, xác suất thực nghiệm, 5 chuyên đề nâng cao HSG và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Ôn tập chương 9
  - Dữ liệu
  - Xác suất thực nghiệm
  - Biểu đồ
  - Thống kê
  - Kết nối tri thức
grade: 6
---

# Ôn tập Chương 9: Dữ liệu và Xác suất thực nghiệm

Chương IX là chương học khép lại toàn bộ chương trình Toán lớp 6, mở ra cánh cửa dẫn vào thế giới của **Khoa học Dữ liệu (Data Science)** và **Lý thuyết Xác suất (Probability Theory)** — hai trụ cột quan trọng bậc nhất của nền văn minh công nghệ và trí tuệ nhân tạo thế kỷ 21.

Suốt hành trình $6$ bài học vừa qua, các em đã được trang bị một chuỗi kỹ năng tư duy hoàn chỉnh:
1. **Bài 38:** Biết cách thu thập dữ liệu khách quan, phân loại rành mạch giữa dữ liệu số và dữ liệu không phải số, đồng thời rèn luyện phản xạ phát hiện dữ liệu bất hợp lý.
2. **Bài 39:** Biết cách tóm tắt dữ liệu vào bảng thống kê gọn gàng và vẽ biểu đồ tranh sinh động, thấu hiểu ý nghĩa của biểu tượng và nửa biểu tượng.
3. **Bài 40:** Làm chủ biểu đồ cột đơn — công cụ so sánh trực quan độ lớn của các đối tượng qua chiều cao các cột.
4. **Bài 41:** Nâng cấp lên biểu đồ cột kép — kỹ năng đặt hai cột sát nhau để so sánh song song hai tập dữ liệu đa chiều, phân tích bảng chú giải và nhận định xu thế.
5. **Bài 42:** Bước chân vào thế giới của sự ngẫu nhiên, học cách liệt kê toàn bộ các kết quả có thể xảy ra, phân biệt chính xác ba loại sự kiện: *chắc chắn*, *không thể* và *có thể*.
6. **Bài 43:** Định lượng khả năng xảy ra của sự việc thông qua công thức **xác suất thực nghiệm** $P = \dfrac{k}{n}$, dùng dữ liệu quá khứ để dự đoán tương lai theo Luật số lớn.

Bài tổng ôn này được thiết kế để kết nối toàn bộ $6$ bài học thành một khối kiến thức liền mạch, rèn luyện kỹ năng xử lý các bài toán tổng hợp đa bước và khám phá $5$ chuyên đề bồi dưỡng học sinh giỏi độc bản nâng cao tầm vóc tư duy.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TỔNG ÔN CHƯƠNG 9: DỮ LIỆU & XÁC SUẤT THỰC NGHIỆM</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Thu thập & Bảng biểu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Dữ liệu là số (số liệu) vs Không là số.<br>• Bảng thống kê tần số.<br>• Biểu đồ tranh (chú ý nửa biểu tượng).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Biểu đồ cột & Cột kép</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Cột đơn: Chiều cao cột tỉ lệ với số liệu.<br>• Cột kép: Hai cột sát nhau so sánh song song.<br>• Đọc thang đo trục đứng chuẩn xác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Kết quả & Sự kiện</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Liệt kê đủ các kết quả có thể.<br>• Kết quả thuận lợi cho sự kiện.<br>• 3 loại sự kiện: Chắc chắn - Không thể - Có thể.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Xác suất thực nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Công thức $P = k / n \in [0; 1]$.<br>• Dự đoán tổng thể: $N_A \approx P \times N$.<br>• Luật số lớn & Đánh dấu - Bắt lại.</p>
    </div>
  </div>
</div>

---

## I. Tổng nhắc lại kiến thức cốt lõi & Bảng đối chiếu 6 bài

### 1. Bảng đối chiếu kiến thức trọng tâm từ Bài 38 đến Bài 43

| Bài học | Tên bài | Khái niệm trọng tâm | Kỹ năng cần thành thạo |
| :---: | :--- | :--- | :--- |
| **38** | Thu thập và phân loại dữ liệu | - Dữ liệu số (số liệu)<br>- Dữ liệu không là số<br>- Tiêu chí hợp lý | Phân biệt đúng hai loại dữ liệu; phát hiện số liệu vô lý (điểm thi âm, số người lẻ, chiều cao vượt chuẩn). |
| **39** | Bảng thống kê và biểu đồ tranh | - Bảng số liệu theo nhóm<br>- Biểu tượng và nửa biểu tượng | Lập bảng thống kê từ dữ liệu thô; đọc biểu đồ tranh và nhân đúng giá trị quy đổi của biểu tượng. |
| **40** | Biểu đồ cột | - Trục ngang (đối tượng)<br>- Trục đứng (thang đo chia đều)<br>- Chiều cao cột chữ nhật | Đọc chính xác giá trị đỉnh cột; so sánh thứ tự lớn nhỏ; vẽ biểu đồ cột với thang đo hợp lý. |
| **41** | Biểu đồ cột kép | - Cặp cột đặt sát nhau<br>- Bảng chú giải hai màu sắc<br>- So sánh hai chiều | Đọc chú giải trước khi trả lời; so sánh nội bộ từng đối tượng và so sánh xu thế giữa các nhóm. |
| **42** | Kết quả có thể và sự kiện | - Phép thử nghiệm ngẫu nhiên<br>- Kết quả thuận lợi<br>- 3 loại sự kiện | Liệt kê không sót kết quả; phân loại đúng sự kiện chắc chắn, không thể, có thể xảy ra. |
| **43** | Xác suất thực nghiệm | - Tỉ số $P = k / n$<br>- Đo lường khả năng $[0; 1]$<br>- Ước lượng dự đoán | Tính đúng tỉ số giữa số lần xảy ra và tổng số lần thử; nhân xác suất để dự đoán số lượng trong quần thể lớn. |

---

### 2. Bảng cảnh báo 5 bẫy sai lầm kinh điển của cả Chương 9

> [!WARNING]
> **Năm lỗi sai học sinh hay mắc phải nhất trong bài thi:**
> 1. **Lỗi thang đo trục dọc biểu đồ cột:**
>    - Nhầm lẫn khoảng chia trên trục đứng: Mặc định mỗi vạch là $1$ đơn vị trong khi đề bài chia mỗi vạch là $2$, $5$, $10$ hoặc $20$ đơn vị. Luôn phải lấy hiệu hai vạch liên tiếp để biết khoảng cách chia.
> 2. **Lỗi đếm nửa biểu tượng ở biểu đồ tranh:**
>    - Nếu $1$ hình tròn quy ước $10$ học sinh, thì nửa hình tròn chỉ tương ứng với $5$ học sinh. Rất nhiều bạn đếm nhầm thành $1$ hình tròn đầy đủ.
> 3. **Lỗi bỏ sót kết quả khi thực hiện phép thử hai bước:**
>    - Khi tung hai đồng xu hoặc gieo hai con xúc xắc, cặp $(S; N)$ và $(N; S)$ là hai kết quả phân biệt độc lập.
> 4. **Lỗi đảo ngược tử số và mẫu số khi tính xác suất:**
>    - Lấy tổng số lần $n$ chia cho số lần xảy ra $k$ dẫn đến xác suất lớn hơn $1$. Hãy nhớ: **Tử số $k$ luôn $\le$ Mẫu số $n$**, do đó xác suất $P$ không bao giờ vượt quá $1$!
> 5. **Lỗi nhầm lẫn giữa "Dữ liệu không phải số" và "Số liệu":**
>    - Các tên gọi, màu sắc, xếp loại (Tốt, Khá, Đạt) là dữ liệu không phải số; không được thực hiện các phép tính cộng, trừ trên các chữ này.

---

## II. Các bài toán tổng hợp đa kỹ năng

Phần này gồm các bài toán liên kết nhiều bài học trong chương nhằm rèn luyện tư duy tổng hợp sâu sắc:

---

### Bài toán tổng hợp 1: Từ dữ liệu thô $\to$ Phân loại $\to$ Bảng thống kê $\to$ Biểu đồ cột

Một nhóm học sinh khối 6 thực hiện khảo sát phương tiện đến trường của $30$ bạn trong lớp, thu được danh sách ghi chép như sau:
```
Xe đạp, Đi bộ, Xe buýt, Xe đạp, Xe máy (bố mẹ chở), Xe đạp, Đi bộ, Xe buýt, Xe đạp, Đi bộ,
Xe đạp, Xe máy, Xe buýt, Xe đạp, Xe đạp, Đi bộ, Xe đạp, Xe máy, Đi bộ, Xe buýt,
Xe đạp, Xe đạp, Đi bộ, Xe buýt, Xe máy, Xe đạp, Xe đạp, Đi bộ, Xe buýt, Xe đạp.
```

1. Dãy dữ liệu trên thuộc loại dữ liệu nào (số liệu hay dữ liệu không phải số)?
2. Lập bảng thống kê số lượng học sinh theo từng loại phương tiện đến trường.
3. Cho biết phương tiện nào được các bạn sử dụng nhiều nhất? Có bao nhiêu bạn sử dụng phương tiện đó?
4. Nếu vẽ biểu đồ cột biểu diễn bảng số liệu trên với mỗi vạch trên trục đứng ứng với $2$ học sinh, thì cột biểu diễn phương tiện "Xe đạp" sẽ cao bao nhiêu vạch?

**Lời giải:**
1. Dãy dữ liệu trên ghi tên các phương tiện giao thông (Xe đạp, Đi bộ, Xe buýt, Xe máy) nên đây là **dữ liệu không phải số**.

2. Đếm số lần xuất hiện của từng phương tiện:
   - Xe đạp: xuất hiện $12$ lần.
   - Đi bộ: xuất hiện $7$ lần.
   - Xe buýt: xuất hiện $6$ lần.
   - Xe máy (bố mẹ chở): xuất hiện $5$ lần.
   (Tổng kiểm tra: $12 + 7 + 6 + 5 = 30$ bạn).

Bảng thống kê phương tiện đến trường của $30$ học sinh:

| Phương tiện | Xe đạp | Đi bộ | Xe buýt | Xe máy |
| :--- | :---: | :---: | :---: | :---: |
| **Số học sinh** | $12$ | $7$ | $6$ | $5$ |

3. Phương tiện được sử dụng nhiều nhất là **Xe đạp** với $12$ bạn lựa chọn.

4. Vì mỗi vạch trên trục đứng ứng với $2$ học sinh, nên chiều cao của cột "Xe đạp" là:
   $$12 : 2 = 6.$$
   (Cột cao $6$ khoảng chia).

---

### Bài toán tổng hợp 2: Đọc và phân tích đối sánh biểu đồ cột kép

Biểu đồ cột kép dưới đây biểu diễn số lượng cây xanh do học sinh Khối 6 và Khối 7 của một trường THCS trồng được trong đợt phát động phong trào "Tết trồng cây" qua $4$ tuần:

| Tuần | Khối 6 (cây) | Khối 7 (cây) |
| :---: | :---: | :---: |
| **Tuần 1** | $45$ | $50$ |
| **Tuần 2** | $60$ | $55$ |
| **Tuần 3** | $55$ | $70$ |
| **Tuần 4** | $80$ | $75$ |

1. Trong tuần nào Khối 6 trồng được nhiều cây hơn Khối 7? Trong tuần nào Khối 7 trồng được nhiều cây hơn Khối 6?
2. Tính tổng số cây xanh mỗi khối đã trồng được trong cả $4$ tuần.
3. Trong cả đợt thi đua, khối nào trồng được tổng số cây nhiều hơn và nhiều hơn bao nhiêu cây?
4. Tính tỉ số phần trăm số cây Khối 6 trồng được ở Tuần 4 so với tổng số cây của cả $4$ tuần của Khối 6.

**Lời giải:**
1. Quan sát và so sánh số liệu từng tuần:
   - Ở **Tuần 2** ($60 > 55$) và **Tuần 4** ($80 > 75$), Khối 6 trồng được nhiều cây hơn Khối 7.
   - Ở **Tuần 1** ($50 > 45$) và **Tuần 3** ($70 > 55$), Khối 7 trồng được nhiều cây hơn Khối 6.

2. Tổng số cây xanh trồng được qua $4$ tuần:
   - Khối 6:
     $$45 + 60 + 55 + 80 = 240.$$
     (Khối 6 trồng được $240$ cây).
   - Khối 7:
     $$50 + 55 + 70 + 75 = 250.$$
     (Khối 7 trồng được $250$ cây).

3. So sánh: Ta có $250 > 240$, do đó Khối 7 trồng được nhiều cây hơn Khối 6.
   Số cây chênh lệch là:
   $$250 - 240 = 10.$$
   (Nhiều hơn $10$ cây).

4. Tỉ số phần trăm số cây Khối 6 trồng được ở Tuần 4 so với tổng số cây cả $4$ tuần của Khối 6 là:
   $$\dfrac{80}{240} \times 100\% = \dfrac{1}{3} \times 100\% \approx 33{,}33\%.$$

---

### Bài toán tổng hợp 3: Tích hợp Thống kê thực nghiệm $\to$ Xác suất $\to$ Dự đoán quy mô lớn

Một xưởng cơ khí chính xác kiểm tra ngẫu nhiên $200$ chi tiết máy được sản xuất tự động thì ghi nhận kết quả như sau:
- Có $184$ chi tiết đạt chất lượng hoàn hảo loại A;
- Có $12$ chi tiết đạt chất lượng loại B (cần gia công thêm một chút);
- Có $4$ chi tiết bị phế phẩm (không thể sử dụng).

1. Hãy lập bảng thống kê số lượng chi tiết máy theo từng mức chất lượng.
2. Lấy ngẫu nhiên một chi tiết máy từ lô kiểm tra. Hãy tính xác suất thực nghiệm của các sự kiện sau:
   - $E_1$: *"Chi tiết lấy ra đạt chất lượng hoàn hảo loại A"*;
   - $E_2$: *"Chi tiết lấy ra là phế phẩm"*;
   - $E_3$: *"Chi tiết lấy ra sử dụng được (loại A hoặc loại B)"*.
3. Trong một đơn hàng sản xuất $15\,000$ chi tiết máy, hãy dự đoán:
   - Có khoảng bao nhiêu chi tiết máy đạt loại A?
   - Có khoảng bao nhiêu chi tiết máy bị phế phẩm?

**Lời giải:**
1. Bảng thống kê phân loại chất lượng $200$ chi tiết máy:

| Mức chất lượng | Loại A (hoàn hảo) | Loại B (cần gia công) | Phế phẩm | **Tổng cộng** |
| :--- | :---: | :---: | :---: | :---: |
| **Số chi tiết máy** | $184$ | $12$ | $4$ | $200$ |

2. Tính xác suất thực nghiệm của từng sự kiện ($n = 200$):
   - Sự kiện $E_1$: Số chi tiết loại A là $184$.
     $$P(E_1) = \dfrac{184}{200} = \dfrac{23}{25} = 0{,}92 \quad (92\%).$$
   - Sự kiện $E_2$: Số phế phẩm là $4$.
     $$P(E_2) = \dfrac{4}{200} = \dfrac{1}{50} = 0{,}02 \quad (2\%).$$
   - Sự kiện $E_3$: Số chi tiết sử dụng được là $184 + 12 = 196$.
     $$P(E_3) = \dfrac{196}{200} = \dfrac{49}{50} = 0{,}98 \quad (98\%).$$

3. Dự đoán số lượng trong đơn hàng $N = 15\,000$ chi tiết:
   - Số chi tiết đạt loại A dự đoán là:
     $$0{,}92 \times 15\,000 = 13\,800.$$
     (Khoảng $13\,800$ chi tiết loại A).
   - Số phế phẩm dự đoán là:
     $$0{,}02 \times 15\,000 = 300.$$
     (Khoảng $300$ chi tiết phế phẩm).

---

## III. 5 Chuyên đề bồi dưỡng học sinh giỏi & Olympic Toán

---

### Chuyên đề 1: Bài toán khuyết số liệu và Suy luận ngược trên biểu đồ cột kép

Trong các kỳ thi học sinh giỏi, đề bài thường che giấu một phần số liệu của bảng hoặc làm mờ một số cột trên biểu đồ kèm theo các mối quan hệ tổng, hiệu, tỉ số. Học sinh cần vận dụng tư duy phương trình số học để phục hồi toàn bộ dữ liệu.

#### Bài toán Olympic 1
Biểu đồ cột kép cho biết số điểm $9$ và điểm $10$ của lớp 6A và lớp 6B trong kỳ thi học kỳ I. Do biểu đồ bị ố mực, ta chỉ đọc được các thông tin sau:
- Lớp 6A có $18$ điểm $9$.
- Lớp 6B có số điểm $9$ nhiều hơn lớp 6A là $4$ điểm.
- Cột điểm $10$ của lớp 6A bị mờ, nhưng biết số điểm $10$ của lớp 6A gấp rưỡi ($1{,}5$ lần) số điểm $9$ của lớp 6A.
- Tổng số điểm tốt (cả điểm $9$ và $10$) của cả hai lớp là $87$ điểm.
- Số điểm $10$ của lớp 6B ít hơn số điểm $10$ của lớp 6A là $7$ điểm.

1. Hãy tìm số điểm $9$ và điểm $10$ của từng lớp.
2. Kiểm tra xem tổng số điểm tốt của hai lớp có khớp với số liệu $87$ điểm không.
3. Tính xác suất thực nghiệm để một điểm tốt được chọn ngẫu nhiên từ hai lớp là điểm $10$.

**Lời giải:**
1. Ta tính từng số liệu theo mối quan hệ đề bài:
   - Số điểm $9$ của lớp 6A là: $18$ điểm.
   - Số điểm $9$ của lớp 6B là:
     $$18 + 4 = 22.$$
     (Lớp 6B có $22$ điểm $9$).
   - Số điểm $10$ của lớp 6A gấp $1{,}5$ lần số điểm $9$ của lớp 6A:
     $$18 \times 1{,}5 = 27.$$
     (Lớp 6A có $27$ điểm $10$).
   - Số điểm $10$ của lớp 6B ít hơn số điểm $10$ của lớp 6A là $7$ điểm:
     $$27 - 7 = 20.$$
     (Lớp 6B có $20$ điểm $10$).

2. Kiểm tra tổng số điểm tốt của cả hai lớp:
   Tổng số điểm của lớp 6A: $18 + 27 = 45$ điểm.
   Tổng số điểm của lớp 6B: $22 + 20 = 42$ điểm.
   Tổng số điểm tốt của cả hai lớp là: $45 + 42 = 87$ điểm (hoàn toàn khớp với đề bài).

3. Tổng số điểm $10$ của cả hai lớp là:
   $$27 + 20 = 47.$$
   (Cả hai lớp có $47$ điểm $10$).
   Xác suất thực nghiệm để chọn ngẫu nhiên được một điểm $10$ trong tổng số $87$ điểm tốt là:
   $$P = \dfrac{47}{87} \approx 0{,}5402 \quad (54{,}02\%).$$

---

### Chuyên đề 2: Chuyển đổi ma trận dữ liệu và Đánh giá tính đại diện của mẫu

Khi chuyển đổi dữ liệu từ biểu đồ tranh sang biểu đồ cột, tỉ lệ quy ước đóng vai trò then chốt. Nếu số lượng thực tế không chia hết cho đơn vị quy ước, ta phải biết cách xử lý phần dư bằng số thập phân hoặc nửa biểu tượng.

#### Bài toán Olympic 2
Một tổ chức từ thiện dùng biểu đồ tranh để biểu diễn số phần quà trao tặng cho $4$ xã nghèo, với quy ước: mỗi biểu tượng hình hộp quà ứng với $50$ suất quà, nửa hình hộp quà ứng với $25$ suất quà:
- Xã A có $4$ hình hộp quà đầy đủ;
- Xã B có $3$ hình hộp quà và $1$ nửa hình hộp quà;
- Xã C có $5$ hình hộp quà đầy đủ;
- Xã D có $2$ hình hộp quà và $1$ nửa hình hộp quà.

1. Lập bảng thống kê số suất quà của từng xã và tính tổng số suất quà đã trao.
2. Nếu muốn vẽ biểu đồ cột với thang đo trục đứng có các vạch cách nhau $25$ đơn vị, thì cột của từng xã sẽ cao bao nhiêu khoảng chia?
3. Tính tỉ số phần trăm số quà của xã nhận được nhiều nhất so với tổng số quà trao cho cả $4$ xã.

**Lời giải:**
1. Tính số suất quà cho từng xã:
   - Xã A: $4 \times 50 = 200$ suất.
   - Xã B: $3 \times 50 + 25 = 175$ suất.
   - Xã C: $5 \times 50 = 250$ suất.
   - Xã D: $2 \times 50 + 25 = 125$ suất.
   Tổng số suất quà trao cho cả $4$ xã là:
   $$200 + 175 + 250 + 125 = 750.$$
   (Tổng cộng $750$ suất quà).

Bảng thống kê:

| Xã | Xã A | Xã B | Xã C | Xã D | **Tổng cộng** |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số suất quà** | $200$ | $175$ | $250$ | $125$ | $750$ |

2. Chiều cao các cột trên trục đứng (mỗi khoảng chia là $25$ đơn vị):
   - Cột Xã A: $200 : 25 = 8$ khoảng chia.
   - Cột Xã B: $175 : 25 = 7$ khoảng chia.
   - Cột Xã C: $250 : 25 = 10$ khoảng chia.
   - Cột Xã D: $125 : 25 = 5$ khoảng chia.

3. Xã nhận được nhiều quà nhất là Xã C ($250$ suất).
   Tỉ số phần trăm là:
   $$\dfrac{250}{750} \times 100\% = \dfrac{1}{3} \times 100\% \approx 33{,}33\%.$$

---

### Chuyên đề 3: Phép thử hai giai đoạn và Sơ đồ hình cây nâng cao

Khi thực hiện đồng thời hoặc liên tiếp hai phép thử ngẫu nhiên, không gian kết quả là tích Descartes của hai tập hợp kết quả thành phần.

#### Bài toán Olympic 3
Bạn An có một túi vải đựng $3$ quả cầu đánh số $1, 2, 3$. Bạn Bình có một con xúc xắc $4$ mặt hình tứ diện đều đánh số $1, 2, 3, 4$.
An rút ngẫu nhiên một quả cầu, còn Bình gieo con xúc xắc. Kết quả được ghi lại dưới dạng cặp số $(a; b)$, trong đó $a$ là số trên quả cầu của An, $b$ là số ở mặt đáy xúc xắc của Bình.
1. Có tất cả bao nhiêu kết quả có thể xảy ra của cặp số $(a; b)$? Hãy liệt kê toàn bộ theo sơ đồ hình cây.
2. Có bao nhiêu kết quả thuận lợi cho sự kiện: *"Tổng $a + b$ là một số nguyên tố"*?
3. Có bao nhiêu kết quả thuận lợi cho sự kiện: *"Tích $a \times b$ là một số chẵn"*?

**Lời giải:**
1. Số kết quả có thể của An là $3$ (các số $1, 2, 3$).
   Số kết quả có thể của Bình là $4$ (các số $1, 2, 3, 4$).
   Theo quy tắc nhân, tổng số kết quả có thể là:
   $$3 \times 4 = 12.$$
   Tập hợp $12$ kết quả cụ thể gồm:
   $$\begin{aligned}
   &(1; 1), (1; 2), (1; 3), (1; 4), \\
   &(2; 1), (2; 2), (2; 3), (2; 4), \\
   &(3; 1), (3; 2), (3; 3), (3; 4).
   \end{aligned}$$

2. Tính tổng $a + b$ cho từng cặp:
   - Cặp có tổng bằng $2$ (nguyên tố): $(1; 1)$.
   - Cặp có tổng bằng $3$ (nguyên tố): $(1; 2), (2; 1)$.
   - Cặp có tổng bằng $5$ (nguyên tố): $(1; 4), (2; 3), (3; 2)$.
   - Cặp có tổng bằng $7$ (nguyên tố): $(3; 4)$.
   (Các tổng còn lại là $4$ và $6$ đều là hợp số).
   Vậy có tất cả $1 + 2 + 3 + 1 = 7$ kết quả thuận lợi cho sự kiện tổng là số nguyên tố.

3. Tích $a \times b$ là số chẵn khi có ít nhất một số chẵn.
   Ta dùng phương pháp đếm phần bù:
   Tích $a \times b$ là số lẻ khi và chỉ khi cả $a$ và $b$ đều lẻ:
   - $a \in \{1; 3\}$ ($2$ cách chọn);
   - $b \in \{1; 3\}$ ($2$ cách chọn).
   Số cặp có tích lẻ là: $2 \times 2 = 4$ cặp, gồm: $(1; 1), (1; 3), (3; 1), (3; 3)$.
   Do đó, số kết quả thuận lợi để tích là số chẵn là:
   $$12 - 4 = 8.$$
   (Có $8$ kết quả thuận lợi).

---

### Chuyên đề 4: Ứng dụng mô hình Đánh dấu - Bắt lại (Capture-Recapture) với hai mẫu độc lập

Mô hình này cho phép ước lượng quần thể động vật hoang dã mà không gây xáo trộn môi trường tự nhiên.

#### Bài toán Olympic 4
Một trạm bảo tồn thiên nhiên muốn ước lượng số cá thể voọc chà vá chân nâu trong một khu rừng nguyên sinh:
- Đợt 1: Đội kiểm lâm gắn vòng định vị vô tuyến cho $45$ cá thể voọc rồi thả về đàn.
- Đợt 2: Một tháng sau, qua hệ thống bẫy ảnh tự động chụp được $60$ cá thể voọc, trong đó các nhà khoa học nhận diện được $9$ cá thể có đeo vòng định vị.

1. Tính xác suất thực nghiệm chụp được cá thể voọc có vòng định vị ở đợt 2.
2. Ước tính tổng số cá thể voọc chà vá chân nâu sinh sống trong khu bảo tồn.
3. Giả sử sau đó người ta mở rộng khu vực bẫy ảnh và chụp thêm được $40$ cá thể nữa, trong đó có $5$ cá thể có vòng định vị. Khi gộp chung cả hai đợt bẫy ảnh, hãy tính lại ước lượng số cá thể voọc trong khu bảo tồn.

**Lời giải:**
1. Xác suất thực nghiệm chụp được voọc có vòng ở đợt 2 là:
   $$P_1 = \dfrac{9}{60} = \dfrac{3}{20} = 0{,}15 \quad (15\%).$$

2. Gọi số cá thể voọc trong khu bảo tồn là $N$.
   Tỉ lệ cá thể có vòng định vị trong toàn quần thể xấp xỉ tỉ lệ thực nghiệm:
   $$\dfrac{45}{N} \approx 0{,}15 \implies N \approx \dfrac{45}{0{,}15} = 300.$$
   Vậy ước tính có khoảng $300$ cá thể voọc trong khu bảo tồn.

3. Khi gộp cả hai đợt bẫy ảnh lại:
   - Tổng số cá thể voọc chụp được là: $60 + 40 = 100$ cá thể.
   - Tổng số cá thể có vòng định vị là: $9 + 5 = 14$ cá thể.
   - Xác suất thực nghiệm gộp là:
     $$P = \dfrac{14}{100} = 0{,}14 \quad (14\%).$$
   - Ước lượng lại quy mô quần thể voọc:
     $$N' \approx \dfrac{45}{0{,}14} = \dfrac{4500}{14} \approx 321.$$
   Vậy sau khi tăng cỡ mẫu bẫy ảnh, ước lượng quần thể voọc là khoảng $321$ cá thể.

---

### Chuyên đề 5: Nguyên lý Dirichlet và Tính tất định trong bài toán bốc thăm ngẫu nhiên

Một sự kiện ngẫu nhiên có thể trở thành **sự kiện chắc chắn** nếu số lần thực hiện vượt qua ngưỡng tới hạn theo **Nguyên lý lồng chim bồ câu (Dirichlet Principle)**.

#### Bài toán Olympic 5
Trong một hộp kín có $12$ chiếc bút bi xanh, $9$ chiếc bút bi đỏ và $6$ chiếc bút bi đen (các bút cùng kích thước và khối lượng). Không nhìn vào hộp:
1. Bạn Nam rút ngẫu nhiên $1$ chiếc bút. Hỏi có bao nhiêu kết quả có thể xảy ra về màu bút?
2. Bạn Nam phải rút ra ít nhất bao nhiêu chiếc bút cùng một lúc để sự kiện: *"Trong số bút rút ra chắc chắn có ít nhất 1 chiếc bút màu xanh"* luôn xảy ra?
3. Bạn Nam phải rút ra ít nhất bao nhiêu chiếc bút cùng một lúc để chắc chắn có ít nhất $2$ chiếc bút cùng màu?

**Lời giải:**
1. Trong hộp chỉ có $3$ màu bút (xanh, đỏ, đen). Do đó khi rút $1$ chiếc bút, có $3$ kết quả có thể xảy ra về màu sắc: Bút xanh; Bút đỏ; Bút đen.

2. Để sự kiện chắc chắn xảy ra trong mọi trường hợp, ta phải xét tình huống **rủi ro nhất (xui xẻo nhất)**:
   - Tình huống rủi ro nhất là Nam rút toàn phải bút đỏ và bút đen mà chưa được chiếc bút xanh nào.
   - Tổng số bút đỏ và bút đen là:
     $$9 + 6 = 15.$$
     (Tổng có $15$ chiếc bút đỏ và đen).
   - Nếu rút $15$ chiếc bút, vẫn có thể không có chiếc bút xanh nào.
   - Do đó, để chắc chắn có ít nhất $1$ chiếc bút xanh, Nam phải rút ít nhất:
     $$15 + 1 = 16.$$
     (Rút ít nhất $16$ chiếc bút).

3. Có tất cả $3$ loại màu bút.
   Theo Nguyên lý Dirichlet, nếu rút $3$ chiếc bút thì rủi ro nhất là mỗi chiếc mang một màu khác nhau (xanh, đỏ, đen).
   Khi rút thêm chiếc thứ $4$, chiếc bút này bắt buộc phải trùng màu với một trong $3$ chiếc trước đó.
   Do đó, số bút cần rút ít nhất để chắc chắn có $2$ chiếc cùng màu là:
   $$3 + 1 = 4.$$
   (Cần rút ít nhất $4$ chiếc bút).

---

## IV. Bài tập trắc nghiệm tương tác (10 Quiz tổng ôn)

Dưới đây là $10$ câu hỏi trắc nghiệm tương tác quét toàn diện kiến thức của $6$ bài học trong Chương 9:

```quiz
question: 'Dãy dữ liệu nào sau đây là SỐ LIỆU?'
options:
  - 'Xanh, Đỏ, Tím, Vàng'
  - 'Toán, Văn, Anh, Sử'
  - '38 kg; 42 kg; 39 kg; 45 kg'
  - 'Tốt, Khá, Đạt, Chưa đạt'
answer: 3
explanation: 'Số liệu là dữ liệu thu được dưới dạng con số (38 kg, 42 kg, 39 kg, 45 kg). Các dãy còn lại là dữ liệu không phải số.'
type: choice
```

```quiz
question: 'Trong biểu đồ tranh, một biểu tượng ngôi sao quy ước 10 điểm thưởng. Nếu một bạn học sinh nhận được 3 ngôi sao và nửa ngôi sao, bạn đó có bao nhiêu điểm thưởng?'
options:
  - '30 điểm'
  - '35 điểm'
  - '40 điểm'
  - '25 điểm'
answer: 2
explanation: 'Mỗi ngôi sao = 10 điểm, nửa ngôi sao = 5 điểm. Bạn đó có: 3 x 10 + 5 = 35 điểm thưởng.'
type: choice
```

```quiz
question: 'Đặc điểm nhận dạng quan trọng nhất của BIỂU ĐỒ CỘT KÉP so với biểu đồ cột đơn là gì?'
options:
  - 'Các cột có bề rộng khác nhau'
  - 'Có hai cột đặt sát nhau tại mỗi đối tượng và có bảng chú giải phân biệt màu'
  - 'Trục đứng không cần chia vạch thang đo'
  - 'Chỉ dùng để biểu diễn dữ liệu không phải số'
answer: 2
explanation: 'Biểu đồ cột kép có các cặp cột đặt sát nhau tại từng đối tượng để so sánh song song hai tập dữ liệu và bắt buộc phải có bảng chú giải để phân biệt.'
type: choice
```

```quiz
question: 'Gieo một con xúc xắc 6 mặt một lần. Sự kiện nào sau đây là sự kiện CHẮC CHẮN?'
options:
  - 'Số chấm xuất hiện là số chia hết cho 2'
  - 'Số chấm xuất hiện lớn hơn 3'
  - 'Số chấm xuất hiện nhỏ hơn hoặc bằng 6'
  - 'Số chấm xuất hiện bằng 5'
answer: 3
explanation: 'Mọi mặt của con xúc xắc đều có số chấm từ 1 đến 6 nên biến cố số chấm nhỏ hơn hoặc bằng 6 luôn luôn xảy ra với mọi kết quả.'
type: choice
```

```quiz
question: 'Tung một đồng xu cân đối 60 lần thì thấy có 33 lần xuất hiện mặt sấp. Xác suất thực nghiệm xuất hiện mặt ngửa là:'
options:
  - '0,55'
  - '0,45'
  - '0,33'
  - '0,60'
answer: 2
explanation: 'Số lần xuất hiện mặt ngửa là 60 - 33 = 27 lần. Xác suất thực nghiệm là P = 27 / 60 = 9 / 20 = 0,45 (hoặc lấy 1 - 33/60 = 0,45).'
type: choice
```

```quiz
question: 'Một hộp đựng các tấm thẻ bài đánh số từ 1 đến 15. Rút ngẫu nhiên một thẻ. Sự kiện nào sau đây là sự kiện KHÔNG THỂ xảy ra?'
options:
  - 'Rút được thẻ ghi số nguyên tố'
  - 'Rút được thẻ ghi số chia hết cho 5'
  - 'Rút được thẻ ghi số có hai chữ số'
  - 'Rút được thẻ ghi số lớn hơn 15'
answer: 4
explanation: 'Các thẻ chỉ đánh số từ 1 đến 15 nên không tồn tại tấm thẻ nào ghi số lớn hơn 15. Đây là sự kiện không thể.'
type: choice
```

```quiz
question: 'Kiểm tra 400 sản phẩm thì thấy có 12 sản phẩm bị lỗi. Trong một lô hàng gồm 10 000 sản phẩm, dự đoán có khoảng bao nhiêu sản phẩm bị lỗi?'
options:
  - '120 sản phẩm'
  - '240 sản phẩm'
  - '300 sản phẩm'
  - '400 sản phẩm'
answer: 3
explanation: 'Xác suất thực nghiệm sản phẩm lỗi là P = 12 / 400 = 0,03. Dự đoán số sản phẩm lỗi trong 10 000 chiếc là: 0,03 x 10 000 = 300 sản phẩm.'
type: choice
```

```quiz
question: 'Gieo một con xúc xắc nhiều lần. Biết xác suất thực nghiệm ra mặt 6 chấm là 0,2 và mặt 6 chấm đã xuất hiện đúng 24 lần. Con xúc xắc đã được gieo tất cả bao nhiêu lần?'
options:
  - '48 lần'
  - '100 lần'
  - '120 lần'
  - '144 lần'
answer: 3
explanation: 'Tổng số lần gieo là n = k : P = 24 : 0,2 = 120 lần.'
type: choice
```

```quiz
question: 'Tung đồng thời 2 đồng xu cân đối đồng chất. Số kết quả có thể xảy ra của phép thử này là:'
options:
  - '2 kết quả'
  - '3 kết quả'
  - '4 kết quả'
  - '8 kết quả'
answer: 3
explanation: 'Mỗi đồng xu có 2 khả năng (S hoặc N). Hai đồng xu có tất cả 2 x 2 = 4 kết quả có thể: (S; S), (S; N), (N; S), (N; N).'
type: choice
```

```quiz
question: 'Tại sao việc điều tra khảo sát ý kiến học sinh về đồ ăn căn tin trường mà chỉ hỏi các bạn trong đội tuyển bóng đá lại dẫn tới kết quả KHÔNG CHÍNH XÁC?'
options:
  - 'Vì các bạn trong đội bóng đá không thích ăn đồ căn tin'
  - 'Vì mẫu khảo sát bị thiên lệch, không đại diện khách quan cho toàn thể học sinh trong trường'
  - 'Vì số học sinh trong đội bóng đá quá đông'
  - 'Vì biểu đồ cột không vẽ được số liệu đó'
answer: 2
explanation: 'Mẫu khảo sát bị thiên lệch (Bias) vì học sinh đội bóng đá có nhu cầu dinh dưỡng và sở thích ăn uống khác biệt với đa số học sinh còn lại, do đó không mang tính đại diện khách quan.'
type: choice
```

---

## V. Đề kiểm tra tổng kết Chương 9 (Thời gian làm bài: 45 phút)

Dưới đây là $2$ đề kiểm tra chuẩn cấu trúc $45$ phút gồm $3$ điểm trắc nghiệm ($6$ câu) và $7$ điểm tự luận ($4$ bài), có đáp án và ma trận thang điểm chi tiết $10$ điểm.

### Đề số 1

#### Phần I. Trắc nghiệm khách quan (3,0 điểm — Mỗi câu 0,5 điểm)

**Câu 1:** Dãy dữ liệu nào sau đây là dữ liệu không phải số?
- A. Số bàn thắng ghi được: $2, 0, 3, 1, 4$.
- B. Xếp loại thi đua: Tốt, Khá, Đạt, Tốt.
- C. Chiều cao học sinh: $145, 150, 148, 152\text{ cm}$.
- D. Điểm kiểm tra Toán: $8, 9, 10, 7$.

**Câu 2:** Biểu đồ tranh sử dụng một biểu tượng chiếc cặp sách ứng với $8$ học sinh. Cần dùng bao nhiêu biểu tượng để biểu diễn $28$ học sinh?
- A. $3$ biểu tượng
- B. $3$ biểu tượng và $1$ nửa biểu tượng
- C. $4$ biểu tượng
- D. $2$ biểu tượng và $1$ nửa biểu tượng

**Câu 3:** Trên biểu đồ cột, trục đứng có các vạch ghi số $0, 5, 10, 15, 20$. Một cột có đỉnh nằm ngang hàng với vạch số $15$. Giá trị số liệu của cột đó là:
- A. $3$
- B. $5$
- C. $15$
- D. $20$

**Câu 4:** Gieo một con xúc xắc $6$ mặt. Sự kiện nào sau đây là sự kiện KHÔNG THỂ?
- A. Mặt xuất hiện có số chấm là số nguyên tố
- B. Mặt xuất hiện có $6$ chấm
- C. Mặt xuất hiện có số chấm chia hết cho $7$
- D. Mặt xuất hiện có số chấm nhỏ hơn $5$

**Câu 5:** Tung một đồng xu $50$ lần thì thấy mặt ngửa xuất hiện $26$ lần. Xác suất thực nghiệm xuất hiện mặt ngửa là:
- A. $0{,}26$
- B. $0{,}50$
- C. $0{,}52$
- D. $0{,}48$

**Câu 6:** Kiểm tra $250$ hạt giống thì có $225$ hạt nảy mầm. Xác suất thực nghiệm hạt giống nảy mầm là:
- A. $0{,}80$
- B. $0{,}85$
- C. $0{,}90$
- D. $0{,}95$

---

#### Phần II. Tự luận (7,0 điểm)

**Bài 1 (1,5 điểm):** Điểm kiểm tra môn Khoa học tự nhiên của $20$ học sinh được ghi lại như sau:
$$7, 8, 9, 6, 8, 7, 10, 8, 9, 7, 8, 6, 8, 9, 10, 7, 8, 7, 9, 8.$$
1. Lập bảng thống kê số lượng học sinh đạt từng mức điểm. *(1,0 điểm)*
2. Có bao nhiêu học sinh đạt điểm từ $8$ trở lên? *(0,5 điểm)*

**Bài 2 (2,0 điểm):** Biểu đồ cột kép cho biết số lượng xe đạp bán được của hai cửa hàng X và Y trong ba tháng đầu năm:

| Tháng | Cửa hàng X (chiếc) | Cửa hàng Y (chiếc) |
| :---: | :---: | :---: |
| **Tháng 1** | $25$ | $30$ |
| **Tháng 2** | $35$ | $28$ |
| **Tháng 3** | $40$ | $32$ |

1. Trong tháng nào cửa hàng X bán được nhiều xe đạp hơn cửa hàng Y? *(0,5 điểm)*
2. Tính tổng số xe đạp mỗi cửa hàng bán được trong cả ba tháng. *(1,0 điểm)*
3. Cửa hàng nào có doanh số bán xe đạp cao hơn trong quý I? Cao hơn bao nhiêu chiếc? *(0,5 điểm)*

**Bài 3 (2,0 điểm):** Một hộp chứa $8$ tấm thẻ cùng kích thước được đánh số từ $1$ đến $8$. Bạn Mai rút ngẫu nhiên một tấm thẻ.
1. Liệt kê tất cả các kết quả có thể xảy ra của phép thử. *(0,5 điểm)*
2. Chỉ ra các kết quả thuận lợi cho sự kiện $A$: *"Rút được thẻ ghi số nguyên tố"*. *(0,5 điểm)*
3. Phân loại mỗi sự kiện sau là chắc chắn, không thể hay có thể:
   - $S_1$: *"Rút được thẻ ghi số nhỏ hơn 10"*. *(0,5 điểm)*
   - $S_2$: *"Rút được thẻ ghi số chia hết cho 9"*. *(0,5 điểm)*

**Bài 4 (1,5 điểm):** Người ta gieo thử nghiệm $300$ hạt giống ngô lai mới thì có $276$ hạt nảy mầm.
1. Tính xác suất thực nghiệm của sự kiện: *"Một hạt giống nảy mầm"*. *(0,75 điểm)*
2. Một trang trại cần gieo trồng để thu được khoảng $9\,200$ cây ngô con. Hỏi trang trại đó cần mua khoảng bao nhiêu hạt giống ngô loại này? *(0,75 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 1

#### Trắc nghiệm (3,0 điểm)
- Câu 1: **B** ($0{,}5$ điểm)
- Câu 2: **B** ($0{,}5$ điểm) — $28 = 3 \times 8 + 4$ (3 hình và nửa hình).
- Câu 3: **C** ($0{,}5$ điểm)
- Câu 4: **C** ($0{,}5$ điểm) — Các số từ $1$ đến $6$ không số nào chia hết cho $7$.
- Câu 5: **C** ($0{,}5$ điểm) — $P = \dfrac{26}{50} = 0{,}52$.
- Câu 6: **C** ($0{,}5$ điểm) — $P = \dfrac{225}{250} = 0{,}90$.

#### Tự luận (7,0 điểm)
**Bài 1:**
1. Bảng thống kê điểm số:

| Điểm số | $6$ | $7$ | $8$ | $9$ | $10$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Số học sinh** | $2$ | $5$ | $7$ | $4$ | $2$ |

*(Đếm đúng và đủ $20$ bạn: 1,0 điểm).*
2. Số học sinh đạt điểm từ $8$ trở lên (điểm $8, 9, 10$):
   $$7 + 4 + 2 = 13 \text{ (hs)}.$$
   (Có $13$ học sinh). *(0,5 điểm).*

**Bài 2:**
1. Cửa hàng X bán nhiều hơn Y ở Tháng 2 ($35 > 28$) và Tháng 3 ($40 > 32$). *(0,5 điểm).*
2. Tổng số xe đạp:
   - Cửa hàng X: $25 + 35 + 40 = 100$ chiếc. *(0,5 điểm).*
   - Cửa hàng Y: $30 + 28 + 32 = 90$ chiếc. *(0,5 điểm).*
3. Cửa hàng X có doanh số cao hơn cửa hàng Y.
   Cao hơn: $100 - 90 = 10$ chiếc xe đạp. *(0,5 điểm).*

**Bài 3:**
1. Các kết quả có thể là: $1; 2; 3; 4; 5; 6; 7; 8$. *(0,5 điểm).*
2. Các số nguyên tố là $2; 3; 5; 7$.
   Kết quả thuận lợi cho $A$ là: $2; 3; 5; 7$. *(0,5 điểm).*
3. Phân loại sự kiện:
   - $S_1$: Mọi số từ $1$ đến $8$ đều nhỏ hơn $10 \implies$ **Sự kiện chắc chắn**. *(0,5 điểm).*
   - $S_2$: Không số nào từ $1$ đến $8$ chia hết cho $9 \implies$ **Sự kiện không thể**. *(0,5 điểm).*

**Bài 4:**
1. Xác suất thực nghiệm hạt nảy mầm là:
   $$P = \dfrac{276}{300} = \dfrac{23}{25} = 0{,}92 \quad (92\%).$$ *(0,75 điểm).*
2. Số hạt giống cần mua là:
   $$9\,200 : 0{,}92 = 10\,000.$$
   (Cần mua khoảng $10\,000$ hạt giống). *(0,75 điểm).*

---

### Đề số 2

#### Phần I. Trắc nghiệm khách quan (3,0 điểm — Mỗi câu 0,5 điểm)

**Câu 1:** Một giáo viên kiểm tra thời gian tự học (phút) của học sinh và ghi lại: $45, 60, 50, -15, 90$. Giá trị nào là dữ liệu **bất hợp lý**?
- A. $45$
- B. $60$
- C. $-15$
- D. $90$

**Câu 2:** Biểu đồ cột biểu diễn số học sinh giỏi của $4$ lớp: Lớp 6A (cao $12$ đơn vị), 6B ($15$ đơn vị), 6C ($9$ đơn vị), 6D ($14$ đơn vị). Lớp có ít học sinh giỏi nhất là:
- A. Lớp 6A
- B. Lớp 6B
- C. Lớp 6C
- D. Lớp 6D

**Câu 3:** Bạn Bình quay một vòng quay may mắn có $5$ ô số bằng nhau: $2, 4, 6, 8, 10$. Sự kiện *"Mũi tên chỉ vào ô ghi số lẻ"* là:
- A. Sự kiện có thể
- B. Sự kiện chắc chắn
- C. Sự kiện không thể
- D. Không xác định được

**Câu 4:** Gieo một con xúc xắc $80$ lần thì thấy mặt $4$ chấm xuất hiện $16$ lần. Xác suất thực nghiệm ra mặt $4$ chấm là:
- A. $0{,}16$
- B. $0{,}20$
- C. $0{,}25$
- D. $0{,}80$

**Câu 5:** Một cửa hàng bán được $120$ cốc trà sữa trong ngày, trong đó có $72$ cốc trà sữa trân châu truyền thống. Xác suất thực nghiệm bán được cốc trà sữa trân châu truyền thống là:
- A. $0{,}60$
- B. $0{,}72$
- C. $0{,}48$
- D. $0{,}50$

**Câu 6:** Bắn thử nghiệm $50$ phát súng, xác suất bắn trúng hồng tâm là $0{,}68$. Số phát súng trúng hồng tâm là:
- A. $25$ phát
- B. $34$ phát
- C. $40$ phát
- D. $42$ phát

---

#### Phần II. Tự luận (7,0 điểm)

**Bài 1 (1,5 điểm):** Một bạn học sinh thống kê số giờ sử dụng máy tính mỗi ngày trong một tuần của mình:
- Thứ Hai: $1$ giờ; Thứ Ba: $2$ giờ; Thứ Tư: $1$ giờ; Thứ Năm: $2$ giờ; Thứ Sáu: $3$ giờ; Thứ Bảy: $4$ giờ; Chủ Nhật: $4$ giờ.
1. Lập bảng thống kê số giờ sử dụng máy tính của bạn học sinh đó trong tuần. *(1,0 điểm)*
2. Tính tổng số giờ bạn đó sử dụng máy tính trong tuần. *(0,5 điểm)*

**Bài 2 (2,0 điểm):** Biểu đồ cột kép dưới đây cho biết số học sinh tham gia câu lạc bộ Bóng đá và Cầu lông của ba lớp khối 6:

| Lớp | Bóng đá (học sinh) | Cầu lông (học sinh) |
| :---: | :---: | :---: |
| **6A** | $16$ | $12$ |
| **6B** | $14$ | $15$ |
| **6C** | $18$ | $10$ |

1. Lớp nào có số học sinh tham gia Bóng đá nhiều nhất? Lớp nào có số học sinh tham gia Cầu lông nhiều nhất? *(0,5 điểm)*
2. Tính tổng số học sinh tham gia câu lạc bộ Bóng đá của cả ba lớp. *(0,75 điểm)*
3. Lớp nào có số học sinh tham gia Cầu lông nhiều hơn Bóng đá? *(0,75 điểm)*

**Bài 3 (2,0 điểm):** Tung một đồng xu hai lần liên tiếp. Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa.
1. Hãy liệt kê tất cả các kết quả có thể xảy ra của phép thử dưới dạng cặp (lần 1, lần 2). Có bao nhiêu kết quả? *(0,75 điểm)*
2. Sự kiện $E$: *"Cả hai lần tung xuất hiện cùng một mặt"* có bao nhiêu kết quả thuận lợi? Kể tên các kết quả đó. *(0,75 điểm)*
3. Sự kiện *"Có ít nhất một lần xuất hiện mặt sấp"* có bao nhiêu kết quả thuận lợi? *(0,5 điểm)*

**Bài 4 (1,5 điểm):** Một trạm khí tượng thủy văn thống kê trong $90$ ngày của mùa mưa thì có $54$ ngày xuất hiện mưa rào.
1. Tính xác suất thực nghiệm của sự kiện: *"Một ngày có mưa rào"*. *(0,75 điểm)*
2. Dự đoán trong mùa mưa tiếp theo gồm $120$ ngày, có khoảng bao nhiêu ngày xuất hiện mưa rào? *(0,75 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 2

#### Trắc nghiệm (3,0 điểm)
- Câu 1: **C** ($0{,}5$ điểm) — Thời gian không thể là số âm.
- Câu 2: **C** ($0{,}5$ điểm) — Cột lớp 6C thấp nhất ($9$ đơn vị).
- Câu 3: **C** ($0{,}5$ điểm) — Các ô đều là số chẵn, không có số lẻ.
- Câu 4: **B** ($0{,}5$ điểm) — $P = \dfrac{16}{80} = 0{,}20$.
- Câu 5: **A** ($0{,}5$ điểm) — $P = \dfrac{72}{120} = 0{,}60$.
- Câu 6: **B** ($0{,}5$ điểm) — $k = 0{,}68 \times 50 = 34$ phát.

#### Tự luận (7,0 điểm)
**Bài 1:**
1. Bảng thống kê số giờ sử dụng máy tính:

| Ngày | Thứ Hai | Thứ Ba | Thứ Tư | Thứ Năm | Thứ Sáu | Thứ Bảy | Chủ Nhật |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số giờ** | $1$ | $2$ | $1$ | $2$ | $3$ | $4$ | $4$ |

*(1,0 điểm).*
2. Tổng số giờ sử dụng máy tính trong tuần:
   $$1 + 2 + 1 + 2 + 3 + 4 + 4 = 17 \text{ (h)}.$$
   (Tổng cộng $17$ giờ). *(0,5 điểm).*

**Bài 2:**
1. Lớp có học sinh tham gia Bóng đá nhiều nhất là **6C** ($18$ bạn). Lớp tham gia Cầu lông nhiều nhất là **6B** ($15$ bạn). *(0,5 điểm).*
2. Tổng số học sinh tham gia Bóng đá của cả ba lớp:
   $$16 + 14 + 18 = 48 \text{ (hs)}.$$
   (Tổng cộng $48$ học sinh). *(0,75 điểm).*
3. So sánh trong từng lớp:
   - 6A: $16 > 12$;
   - 6B: $14 < 15$;
   - 6C: $18 > 10$.
   Chỉ có lớp **6B** có số học sinh tham gia Cầu lông nhiều hơn Bóng đá. *(0,75 điểm).*

**Bài 3:**
1. Các kết quả có thể xảy ra gồm $4$ kết quả:
   $$(S; S), \quad (S; N), \quad (N; S), \quad (N; N).$$ *(0,75 điểm).*
2. Sự kiện $E$ có $2$ kết quả thuận lợi, gồm: $(S; S)$ và $(N; N)$. *(0,75 điểm).*
3. Sự kiện có ít nhất một lần xuất hiện mặt sấp gồm $3$ kết quả thuận lợi: $(S; S), (S; N), (N; S)$. *(0,5 điểm).*

**Bài 4:**
1. Xác suất thực nghiệm ngày có mưa rào là:
   $$P = \dfrac{54}{90} = \dfrac{3}{5} = 0{,}6 \quad (60\%).$$ *(0,75 điểm).*
2. Dự đoán số ngày có mưa rào trong $120$ ngày là:
   $$0{,}6 \times 120 = 72.$$
   (Khoảng $72$ ngày). *(0,75 điểm).*
