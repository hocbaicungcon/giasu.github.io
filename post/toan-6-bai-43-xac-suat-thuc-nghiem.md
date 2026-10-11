---
title: 'Toán 6 Bài 43: Xác suất thực nghiệm - Công thức, Ý nghĩa và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 43 Xác suất thực nghiệm: công thức tính, khả năng xảy ra từ 0 đến 1, ứng dụng ước lượng dự đoán, 5 chuyên đề nâng cao HSG (Monte Carlo, Capture-Recapture, Luật số lớn) và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Xác suất
  - Xác suất thực nghiệm
  - Thống kê
  - Kết nối tri thức
grade: 6
---

# Bài 43. Xác suất thực nghiệm

Ở bài học trước, chúng ta đã làm quen với các khái niệm **phép thử nghiệm**, **kết quả có thể**, **sự kiện** và biết cách phân loại một sự việc thành *chắc chắn*, *không thể* hay *có thể xảy ra*.

Tuy nhiên, đối với những sự kiện "có thể xảy ra", chỉ nói "có thể" thôi là chưa đủ! Trong thực tế đời sống, sản xuất và khoa học, chúng ta luôn cần những thước đo định lượng cụ thể:
- Khả năng đội tuyển bóng đá Việt Nam giành chiến thắng trong trận đấu tối nay là cao hay thấp?
- Tỉ lệ hạt giống nảy mầm sau khi gieo vào vụ đông xuân là bao nhiêu phần trăm?
- Trong một lô $10\,000$ linh kiện điện tử xuất xưởng, ước tính có khoảng bao nhiêu linh kiện bị lỗi?
- Các nhà sinh thái học làm thế nào để ước tính số lượng cá voi dưới lòng đại dương hay số lượng cá thể voọc quý hiếm trong rừng quốc gia mà không thể bắt từng con lên đếm?

Để trả lời những câu hỏi hóc búa đó, các nhà toán học đã tiến hành các phép thử lặp đi lặp lại nhiều lần, ghi lại dữ liệu thực tế và tính toán một chỉ số cực kỳ quan trọng: **Xác suất thực nghiệm (Experimental Probability)**.

Bài học hôm nay sẽ giúp các em làm chủ công thức tính xác suất thực nghiệm, thấu hiểu ý nghĩa của việc dùng dữ liệu quá khứ để dự đoán tương lai, cùng với $5$ chuyên đề bồi dưỡng học sinh giỏi nâng cao mở rộng chân trời toán học hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 43: XÁC SUẤT THỰC NGHIỆM</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Thước đo khả năng [0; 1]</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Khả năng bằng $0$ ($0\%$): Sự kiện không thể.<br>• Khả năng bằng $1$ ($100\%$): Sự kiện chắc chắn.<br>• Nằm giữa $0$ và $1$: Sự kiện có thể (càng gần $1$ càng dễ xảy ra).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Công thức xác suất thực nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• $P(A) = \frac{k}{n}$.<br>• $k$: Số lần sự kiện $A$ xuất hiện.<br>• $n$: Tổng số lần tiến hành phép thử nghiệm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ứng dụng ước lượng & dự đoán</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Khi $n$ càng lớn, $P(A)$ càng ổn định.<br>• Dự đoán số lần xảy ra trong quần thể lớn $N$:<br>Số lượng dự đoán $\approx P(A) \times N$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tư duy xác suất nâng cao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Phương pháp Đánh dấu - Bắt lại (Capture-Recapture).<br>• Luật số lớn (Law of Large Numbers).<br>• Phương pháp mô phỏng Monte Carlo.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kết nối kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ câu hỏi kết nối kiến thức phân số, số thập phân và tư duy xác suất:

**Câu 1:** Đổi các phân số sau ra số thập phân:
$$\frac{3}{5}; \quad \frac{7}{20}; \quad \frac{11}{25}; \quad \frac{9}{50}.$$

*Lời giải:*
$$\frac{3}{5} = 0{,}6; \quad \frac{7}{20} = 0{,}35; \quad \frac{11}{25} = 0{,}44; \quad \frac{9}{50} = 0{,}18.$$

**Câu 2:** Khi gieo một con xúc xắc chuẩn $6$ mặt:
1. Có bao nhiêu kết quả có thể xảy ra?
2. Trong hai sự kiện: $E_1$: *"Số chấm xuất hiện không vượt quá 6"* và $E_2$: *"Số chấm xuất hiện bằng 8"*, sự kiện nào chắc chắn xảy ra, sự kiện nào không thể xảy ra?

*Lời giải:*
1. Có $6$ kết quả có thể xảy ra: $1; 2; 3; 4; 5; 6$.
2. Sự kiện $E_1$ là **sự kiện chắc chắn** (vì mọi mặt đều $\le 6$). Sự kiện $E_2$ là **sự kiện không thể** (vì không có mặt nào $8$ chấm).

**Câu 3:** Bạn Lan tung một đồng xu $25$ lần thì thấy có $11$ lần xuất hiện mặt sấp. Hỏi số lần xuất hiện mặt sấp chiếm bao nhiêu phần của tổng số lần tung? Hãy viết kết quả dưới dạng phân số tối giản và số thập phân.

*Lời giải:*
Số lần xuất hiện mặt sấp chiếm tỉ lệ:
$$\frac{11}{25} = 0{,}44 = 44\%.$$
(Bằng $44\%$ tổng số lần tung đồng xu).

**Câu 4:** Theo em, nếu tung một đồng xu cân đối $10$ lần thì số lần ra mặt sấp có nhất thiết phải đúng bằng $5$ lần không? Nếu tung $10\,000$ lần thì tỉ lệ xuất hiện mặt sấp sẽ dao động quanh con số nào?

*Lời giải:*
Tung $10$ lần thì số lần ra mặt sấp không nhất thiết phải bằng đúng $5$ (có thể ra $4, 6, 7$ lần do tính ngẫu nhiên của mẫu nhỏ). Tuy nhiên, khi tung tới $10\,000$ lần, số lần xuất hiện mặt sấp sẽ rất ổn định và tỉ lệ sẽ dao động rất sát quanh con số $0{,}5$ ($50\%$).

**Câu 5:** Một cửa hàng bán trà sữa nhận thấy cứ $100$ khách hàng bước vào quán thì có $68$ khách gọi trà sữa trân đường đen. Theo em, thông tin này có giúp ích gì cho người quản lý quán trong việc nhập nguyên liệu cho ngày mai không?

*Lời giải:*
Rất có ích! Dựa vào tỉ lệ $68\%$, người quản lý có thể dự đoán chính xác nhu cầu tiêu thụ và chủ động nhập lượng trân châu đường đen chiếm khoảng $65\% - 70\%$ tổng lượng nguyên liệu để vừa đủ bán, tránh tồn kho lãng phí hoặc thiếu hàng.

---

## I. Lý thuyết cốt lõi

### 1. Khả năng xảy ra của một sự kiện: Thước đo định lượng $[0; 1]$

Trong đời sống, ta thường dùng các từ ngữ cảm tính như *"chắc mẩm"*, *"rất dễ xảy ra"*, *"năm ăn năm thua"*, *"hiếm khi"*, *"không đời nào"*. Toán học chuẩn hóa toàn bộ các mức độ này thành một con số nằm trong đoạn từ $0$ đến $1$ (hoặc từ $0\%$ đến $100\%$):

> [!NOTE]
> **Thang đo khả năng xảy ra của sự kiện:**
> - **Khả năng bằng $0$ ($0\%$):** Sự kiện **không bao giờ xảy ra** (sự kiện không thể).
> - **Khả năng bằng $1$ ($100\%$):** Sự kiện **chắc chắn xảy ra**.
> - **Khả năng nằm giữa $0$ và $1$:** Sự kiện **có thể xảy ra**.
>   + Khả năng càng gần $1$: Sự kiện càng dễ xảy ra.
>   + Khả năng càng gần $0$: Sự kiện càng khó xảy ra.
>   + Khả năng bằng $0{,}5$ ($50\%$): Cơ hội xảy ra và không xảy ra là ngang nhau (cân bằng).

---

### 2. Định nghĩa và Công thức tính Xác suất thực nghiệm

Khi muốn đo lường khả năng xảy ra của một sự kiện $A$ trong thực tế, người ta thực hiện phép thử nghiệm đó lặp đi lặp lại nhiều lần dưới cùng những điều kiện giống nhau và đếm số lần $A$ diễn ra.

> [!IMPORTANT]
> **Công thức Xác suất thực nghiệm:**
> Giả sử thực hiện một phép thử nghiệm $n$ lần. Trong đó, sự kiện $A$ xuất hiện $k$ lần.
> Khi đó, **xác suất thực nghiệm** của sự kiện $A$ (kí hiệu là $P(A)$) là:
> $$P(A) = \frac{k}{n}$$
> *(với $k$ là số lần sự kiện $A$ xảy ra, $n$ là tổng số lần thực hiện phép thử).*

- Xác suất thực nghiệm thường được viết dưới dạng:
  + **Phân số tối giản:** ví dụ $\frac{3}{8}$;
  + **Số thập phân:** ví dụ $0{,}375$ (hoặc làm tròn đến hai chữ số thập phân, ví dụ $\approx 0{,}38$);
  + **Tỉ số phần trăm:** ví dụ $37{,}5\%$.

#### Ví dụ minh họa 1
Bạn Dũng tung một đồng xu $60$ lần liên tiếp, kết quả ghi lại có $27$ lần xuất hiện mặt sấp, còn lại là mặt ngửa.
1. Tính xác suất thực nghiệm của sự kiện: *"Xuất hiện mặt sấp"*.
2. Tính xác suất thực nghiệm của sự kiện: *"Xuất hiện mặt ngửa"*.

**Lời giải:**
1. Tổng số lần tung đồng xu là $n = 60$.
   Số lần xuất hiện mặt sấp là $k_1 = 27$.
   Xác suất thực nghiệm của sự kiện "xuất hiện mặt sấp" là:
   $$P = \frac{27}{60} = \frac{9}{20} = 0{,}45.$$

2. Số lần xuất hiện mặt ngửa là:
   $$k_2 = 60 - 27 = 33.$$
   (Xuất hiện $33$ lần mặt ngửa).
   Xác suất thực nghiệm của sự kiện "xuất hiện mặt ngửa" là:
   $$P = \frac{33}{60} = \frac{11}{20} = 0{,}55.$$

> [!TIP]
> **Nhận xét quan trọng:**
> Tổng xác suất thực nghiệm của mặt sấp và mặt ngửa là:
> $$0{,}45 + 0{,}55 = 1.$$
> Trong bất kỳ phép thử nghiệm nào, tổng xác suất thực nghiệm của tất cả các kết quả đơn lẻ luôn luôn bằng $1$ ($100\%$).

---

### 3. Ý nghĩa và Ứng dụng: Ước lượng và Dự đoán tương lai

Tại sao chúng ta lại cần tính xác suất thực nghiệm?
Bởi vì theo **Luật số lớn (Law of Large Numbers)**:
> Khi số lần thực nghiệm $n$ càng lớn, xác suất thực nghiệm của một sự kiện sẽ càng tiến gần và dao động rất sát quanh **khả năng thực tế (xác suất lý thuyết)** của sự kiện đó.

Nhờ quy luật này, các nhà khoa học, bác sĩ, nhà kinh tế sử dụng xác suất thực nghiệm từ một mẫu thử nghiệm để **ước lượng và dự đoán** số lượng trong một tổng thể khổng lồ:

> [!IMPORTANT]
> **Công thức Dự đoán tổng thể:**
> Nếu xác suất thực nghiệm của sự kiện $A$ là $P(A)$, thì trong một tập hợp gồm $N$ đối tượng (với $N$ rất lớn), số đối tượng thỏa mãn sự kiện $A$ được dự đoán xấp xỉ là:
> $$N_A \approx P(A) \times N$$
> *(trong đó $N_A$ là số lượng đối tượng cần dự đoán).*

#### Ví dụ minh họa 2
Một công ty sản xuất bóng đèn LED kiểm tra ngẫu nhiên $500$ bóng đèn từ dây chuyền sản xuất thì phát hiện có $15$ bóng bị lỗi không sáng.
1. Tính xác suất thực nghiệm của sự kiện: *"Gặp bóng đèn bị lỗi"*.
2. Trong một lô hàng xuất xưởng gồm $40\,000$ bóng đèn, hãy dự đoán có khoảng bao nhiêu bóng đèn bị lỗi.

**Lời giải:**
1. Xác suất thực nghiệm gặp bóng đèn bị lỗi là:
   $$P = \frac{15}{500} = \frac{3}{100} = 0{,}03 \quad (3\%).$$
2. Vì mẫu thử nghiệm khá lớn ($500$ bóng), ta dùng xác suất thực nghiệm $0{,}03$ để dự đoán cho cả lô hàng.
   Số bóng đèn bị lỗi trong lô $40\,000$ bóng được ước tính là:
   $$0{,}03 \times 40\,000 = 1\,200.$$
   (Khoảng $1\,200$ bóng đèn bị lỗi).

---

### 4. Bốn sai lầm kinh điển cần tránh khi giải bài toán xác suất thực nghiệm

> [!WARNING]
> **Cảnh báo lỗi sai phổ biến của học sinh:**
> 1. **Lấy số lần thuận lợi chia cho chính nó:**
>    - Ví dụ: Gieo xúc xắc $50$ lần, mặt $6$ chấm xuất hiện $8$ lần. Nhiều bạn tính $P = \frac{8}{6}$ hoặc $P = \frac{8}{8} = 1$. Đây là lỗi sai hoàn toàn! Phải lấy số lần ra mặt đó chia cho **tổng số lần gieo** ($n = 50$): $P = \frac{8}{50} = 0{,}16$.
> 2. **Xác suất tính ra lớn hơn 1:**
>    - Nhớ nguyên tắc vàng: Xác suất $P$ **bắt buộc phải nằm trong đoạn $[0; 1]$**. Nếu bạn bấm máy tính ra $1{,}2$ hay $2{,}5$, chắc chắn bạn đã đặt nhầm tử số và mẫu số!
> 3. **Nhầm lẫn giữa "số chấm" và "số lần xuất hiện":**
>    - Ví dụ: Mặt $5$ chấm xuất hiện $12$ lần trong $60$ lần gieo. Tử số $k$ ở đây là $12$ (số lần xuất hiện), tuyệt đối không lấy con số $5$ (tên của mặt xúc xắc).
> 4. **Quên cộng gộp các kết quả thành phần khi sự kiện ghép:**
>    - Ví dụ: Sự kiện "số chấm là số chẵn" thì $k$ phải bằng: (số lần ra 2) + (số lần ra 4) + (số lần ra 6).

---

## II. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Tính xác suất thực nghiệm của một sự kiện từ bảng số liệu

**Phương pháp giải:**
1. Bước 1: Xác định tổng số lần thực hiện phép thử $n$. Nếu đề chưa cho sẵn, ta cộng tất cả các tần số xuất hiện trong bảng:
   $$n = k_1 + k_2 + \dots + k_m.$$
2. Bước 2: Đếm số lần $k$ mà sự kiện cần tính xuất hiện (nếu sự kiện gồm nhiều trường hợp thì cộng dồn các lần tương ứng).
3. Bước 3: Lập tỉ số $P = \frac{k}{n}$, rút gọn về phân số tối giản hoặc chuyển thành số thập phân (làm tròn thích hợp theo yêu cầu).

---

#### Bài toán mẫu 1
Bạn Hà gieo một con xúc xắc $50$ lần và ghi lại kết quả số chấm ở mặt trên như bảng sau:

| Số chấm | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số lần xuất hiện** | $7$ | $9$ | $8$ | $11$ | $6$ | $9$ |

Hãy tính xác suất thực nghiệm của các sự kiện sau:
1. $A$: *"Mặt xuất hiện là mặt 4 chấm"*;
2. $B$: *"Mặt xuất hiện có số chấm là số nguyên tố"*;
3. $C$: *"Mặt xuất hiện có số chấm lớn hơn 4"*.

**Lời giải:**
Tổng số lần gieo xúc xắc là:
$$n = 7 + 9 + 8 + 11 + 6 + 9 = 50.$$
(Gieo tất cả $50$ lần).

1. Số lần xuất hiện mặt $4$ chấm là $k_A = 11$.
   Xác suất thực nghiệm của sự kiện $A$ là:
   $$P(A) = \frac{11}{50} = 0{,}22.$$

2. Các mặt có số chấm là số nguyên tố gồm: mặt $2$, mặt $3$, mặt $5$.
   Số lần xuất hiện các mặt này là:
   $$k_B = 9 + 8 + 6 = 23.$$
   Xác suất thực nghiệm của sự kiện $B$ là:
   $$P(B) = \frac{23}{50} = 0{,}46.$$

3. Các mặt có số chấm lớn hơn $4$ gồm: mặt $5$ và mặt $6$.
   Số lần xuất hiện các mặt này là:
   $$k_C = 6 + 9 = 15.$$
   Xác suất thực nghiệm của sự kiện $C$ là:
   $$P(C) = \frac{15}{50} = \frac{3}{10} = 0{,}3.$$

---

#### Luyện tập 1.1
Trong một trò chơi ném bóng rổ, bạn Nam thực hiện ném bóng $40$ lần và ghi lại số lần bóng vào rổ là $26$ lần.
1. Tính xác suất thực nghiệm của sự kiện: *"Nam ném bóng vào rổ"*.
2. Tính xác suất thực nghiệm của sự kiện: *"Nam ném bóng ra ngoài"*.

**Lời giải:**
1. Tổng số lần ném bóng là $n = 40$. Số lần bóng vào rổ là $k_1 = 26$.
   Xác suất thực nghiệm ném bóng vào rổ là:
   $$P = \frac{26}{40} = \frac{13}{20} = 0{,}65.$$
2. Số lần bóng ra ngoài là:
   $$k_2 = 40 - 26 = 14.$$
   Xác suất thực nghiệm ném bóng ra ngoài là:
   $$P = \frac{14}{40} = \frac{7}{20} = 0{,}35.$$

---

#### Luyện tập 1.2
Một hộp kín chứa các tấm thẻ màu Xanh, Đỏ, Vàng. Bạn Mai rút ngẫu nhiên một tấm thẻ, ghi lại màu rồi trả thẻ lại hộp. Sau $80$ lần rút, Mai thu được kết quả: thẻ Xanh xuất hiện $32$ lần, thẻ Đỏ xuất hiện $28$ lần, còn lại là thẻ Vàng.
1. Thẻ Vàng xuất hiện bao nhiêu lần?
2. Tính xác suất thực nghiệm của sự kiện *"Rút được thẻ màu Vàng"*.
3. Tính xác suất thực nghiệm của sự kiện *"Rút được thẻ không phải màu Đỏ"*.

**Lời giải:**
1. Số lần rút được thẻ Vàng là:
   $$80 - (32 + 28) = 80 - 60 = 20.$$
   (Xuất hiện $20$ lần thẻ Vàng).
2. Xác suất thực nghiệm rút được thẻ màu Vàng là:
   $$P = \frac{20}{80} = \frac{1}{4} = 0{,}25.$$
3. Sự kiện "rút được thẻ không phải màu Đỏ" xảy ra khi rút được thẻ Xanh hoặc thẻ Vàng.
   Số lần xuất hiện là: $32 + 20 = 52$ lần (hoặc $80 - 28 = 52$ lần).
   Xác suất thực nghiệm của sự kiện là:
   $$P = \frac{52}{80} = \frac{13}{20} = 0{,}65.$$

---

### Dạng 2: So sánh xác suất thực nghiệm và Kiểm tra tính cân đối

**Phương pháp giải:**
1. Tính xác suất thực nghiệm của từng sự kiện cần so sánh.
2. Quy đổi các xác suất về cùng dạng số thập phân (hoặc phân số có cùng mẫu số) để so sánh giá trị:
   - Giá trị lớn hơn nghĩa là sự kiện đó có khả năng xảy ra thực nghiệm cao hơn.
3. Kiểm tra tính cân đối của đồng xu hoặc xúc xắc:
   - Với đồng xu cân đối, xác suất lý thuyết của mỗi mặt là $0{,}5$. Nếu sau nhiều lần tung mà xác suất thực nghiệm chênh lệch quá xa $0{,}5$ (ví dụ $0{,}8$ và $0{,}2$), đồng xu có thể không cân đối.
   - Với con xúc xắc $6$ mặt cân đối, xác suất lý thuyết của mỗi mặt là $\frac{1}{6} \approx 0{,}167$. Nếu một mặt xuất hiện vượt trội bất thường, con xúc xắc có dấu hiệu bị lệch.

---

#### Bài toán mẫu 2
Hai bạn An và Bình cùng chơi trò tung đồng xu để kiểm tra đồng xu của mình:
- Bạn An tung đồng xu của mình $50$ lần thì được $28$ lần xuất hiện mặt ngửa.
- Bạn Bình tung đồng xu của mình $80$ lần thì được $42$ lần xuất hiện mặt ngửa.

1. Tính xác suất thực nghiệm xuất hiện mặt ngửa của mỗi bạn.
2. Đồng xu của bạn nào có xác suất thực nghiệm xuất hiện mặt ngửa lớn hơn?

**Lời giải:**
1. Tính xác suất thực nghiệm:
   - Đối với bạn An: $n_1 = 50$, $k_1 = 28$.
     $$P_1 = \frac{28}{50} = 0{,}56.$$
   - Đối với bạn Bình: $n_2 = 80$, $k_2 = 42$.
     $$P_2 = \frac{42}{80} = \frac{21}{40} = 0{,}525.$$
2. So sánh: Ta có $0{,}56 > 0{,}525$.
   Do đó, xác suất thực nghiệm xuất hiện mặt ngửa của bạn An lớn hơn của bạn Bình.

---

#### Luyện tập 2.1
Một bạn học sinh gieo một con xúc xắc $120$ lần và ghi lại:
- Mặt $1$ chấm: $18$ lần;
- Mặt $2$ chấm: $19$ lần;
- Mặt $3$ chấm: $12$ lần;
- Mặt $4$ chấm: $45$ lần;
- Mặt $5$ chấm: $13$ lần;
- Mặt $6$ chấm: $13$ lần.

1. Tính xác suất thực nghiệm xuất hiện của mặt $4$ chấm và mặt $3$ chấm.
2. Theo em, con xúc xắc này có cân đối và đồng chất không? Vì sao?

**Lời giải:**
1. Xác suất thực nghiệm của mặt $4$ chấm là:
   $$P_4 = \frac{45}{120} = \frac{3}{8} = 0{,}375.$$
   Xác suất thực nghiệm của mặt $3$ chấm là:
   $$P_3 = \frac{12}{120} = \frac{1}{10} = 0{,}1.$$
2. Nếu con xúc xắc cân đối và đồng chất, mỗi mặt sẽ có cơ hội xuất hiện xấp xỉ nhau với tỉ lệ lý thuyết là $\frac{1}{6} \approx 0{,}167$.
   Ở đây, mặt $4$ chấm xuất hiện tới $45$ lần ($37{,}5\%$), cao gấp hơn $3$ lần mặt $3$ chấm và vượt trội hẳn so với các mặt còn lại. Do đó, con xúc xắc này có dấu hiệu **không cân đối** (bị lệch trọng tâm hoặc gian lận).

---

### Dạng 3: Sử dụng xác suất thực nghiệm để Ước lượng và Dự đoán

**Phương pháp giải:**
1. Bước 1: Tính xác suất thực nghiệm $P(A) = \frac{k}{n}$ từ dữ liệu mẫu đã khảo sát.
2. Bước 2: Nhân xác suất thực nghiệm $P(A)$ với quy mô tổng thể $N$ cần dự đoán:
   $$N_A \approx P(A) \times N$$
3. Bước 3: Làm tròn kết quả đến hàng đơn vị (vì số lượng người, sản phẩm, con vật luôn là số nguyên).

---

#### Bài toán mẫu 3
Một viện nghiên cứu nông nghiệp gieo thử nghiệm $400$ hạt giống lúa mới thì thấy có $372$ hạt nảy mầm phát triển tốt.
1. Tính xác suất thực nghiệm của sự kiện: *"Hạt giống nảy mầm"*.
2. Một hợp tác xã mua $50\,000$ hạt giống lúa này về gieo trồng trên cánh đồng mẫu lớn. Hãy dự đoán có khoảng bao nhiêu hạt giống sẽ nảy mầm.

**Lời giải:**
1. Xác suất thực nghiệm nảy mầm của hạt giống là:
   $$P = \frac{372}{400} = \frac{93}{100} = 0{,}93 \quad (93\%).$$
2. Vì số lượng hạt giống thử nghiệm đủ lớn ($400$ hạt), ta dùng tỉ lệ $0{,}93$ để dự đoán.
   Số hạt giống dự đoán sẽ nảy mầm trong số $50\,000$ hạt là:
   $$0{,}93 \times 50\,000 = 46\,500.$$
   (Khoảng $46\,500$ hạt giống).

---

#### Luyện tập 3.1
Một trạm kiểm định an toàn giao thông kiểm tra ngẫu nhiên $150$ xe máy lưu thông trên đường thì phát hiện có $9$ xe không đảm bảo tiêu chuẩn phanh xe.
1. Tính xác suất thực nghiệm của sự kiện: *"Gặp xe máy không đảm bảo tiêu chuẩn phanh"*.
2. Ước tính trong một khu vực có khoảng $12\,000$ xe máy lưu thông, có khoảng bao nhiêu xe không đảm bảo an toàn phanh?

**Lời giải:**
1. Xác suất thực nghiệm gặp xe máy không đảm bảo an toàn phanh là:
   $$P = \frac{9}{150} = \frac{3}{50} = 0{,}06 \quad (6\%).$$
2. Dự đoán số xe máy không đảm bảo tiêu chuẩn phanh trong toàn khu vực là:
   $$0{,}06 \times 12\,000 = 720.$$
   (Khoảng $720$ xe máy).

---

### Dạng 4: Bài toán ngược: Tìm số lần xuất hiện hoặc Tổng số lần thực nghiệm

**Phương pháp giải:**
Từ công thức cơ bản $P = \frac{k}{n}$, ta có hai bài toán đảo:
1. Biết xác suất $P$ và tổng số lần $n$, tìm số lần xuất hiện $k$:
   $$k = P \times n.$$
2. Biết số lần xuất hiện $k$ và xác suất $P$, tìm tổng số lần thực hiện $n$:
   $$n = \frac{k}{P} = k : P.$$

---

#### Bài toán mẫu 4
1. Bạn Hùng quay một vòng quay may mắn $120$ lần. Biết xác suất thực nghiệm kim dừng ở ô trúng thưởng là $0{,}35$. Hỏi bạn Hùng đã trúng thưởng bao nhiêu lần?
2. Một xạ thủ bắn súng bia ngắm. Xác suất thực nghiệm bắn trúng vòng $10$ điểm của xạ thủ này là $0{,}4$. Biết xạ thủ đã bắn trúng vòng $10$ điểm được $28$ lần. Hỏi xạ thủ đã bắn tổng cộng bao nhiêu phát súng?

**Lời giải:**
1. Số lần bạn Hùng trúng thưởng là:
   $$k = P \times n = 0{,}35 \times 120 = 42.$$
   (Bạn Hùng đã trúng thưởng $42$ lần).
2. Tổng số phát súng xạ thủ đã bắn là:
   $$n = k : P = 28 : 0{,}4 = 70.$$
   (Xạ thủ đã bắn $70$ phát súng).

---

#### Luyện tập 4.1
Gieo một con xúc xắc một số lần. Biết rằng xác suất thực nghiệm xuất hiện mặt $6$ chấm là $0{,}18$ và mặt $6$ chấm đã xuất hiện được đúng $27$ lần. Hỏi con xúc xắc đã được gieo tất cả bao nhiêu lần?

**Lời giải:**
Tổng số lần con xúc xắc được gieo là:
$$n = k : P = 27 : 0{,}18 = 150.$$
(Con xúc xắc đã được gieo $150$ lần).

---

## III. 5 Chuyên đề bồi dưỡng học sinh giỏi & Olympic Toán

Để phát triển tư duy nghiên cứu khoa học và chuẩn bị cho các kỳ thi học sinh giỏi, chúng ta cùng nghiên cứu $5$ chuyên đề nâng cao về ứng dụng xác suất thực nghiệm:

---

### Chuyên đề 1: Phương pháp Đánh dấu - Bắt lại (Capture-Recapture Method)

Làm sao các nhà sinh thái học có thể đếm được số lượng cá trong một hồ nước sâu, số lượng chim trong một cánh rừng bạt ngàn? Phương pháp **Đánh dấu - Bắt lại (Lincoln-Petersen Index)** giải quyết bài toán này nhờ xác suất thực nghiệm:

> [!NOTE]
> **Quy trình phương pháp Đánh dấu - Bắt lại:**
> 1. Bắt ngẫu nhiên $M$ cá thể, đánh dấu nhẹ nhàng không gây hại (gắn vòng đeo hoặc chấm sơn) rồi thả lại vào tự nhiên.
> 2. Chờ một thời gian đủ để các cá thể đánh dấu hòa lẫn đều vào quần thể.
> 3. Bắt lần thứ hai một mẫu gồm $n$ cá thể, trong đó đếm được có $m$ cá thể mang dấu.
> 4. Xác suất thực nghiệm gặp cá thể có dấu ở lần bắt thứ hai là:
>    $$P = \frac{m}{n}.$$
> 5. Vì cá thể có dấu phân bố đều trong toàn bộ quần thể gồm $N$ cá thể, nên tỉ lệ thực nghiệm xấp xỉ tỉ lệ thực tế:
>    $$\frac{m}{n} \approx \frac{M}{N} \implies N \approx \frac{M \times n}{m}.$$

#### Bài toán Olympic 1
Để ước lượng số lượng cá chép trong một hồ sinh thái, ban quản lý hồ bắt lên $120$ con cá chép, bấm thẻ đánh dấu vào vây rồi thả lại hồ. Một tuần sau, họ kéo lưới bắt lên $80$ con cá chép thì thấy có $6$ con mang thẻ đánh dấu.
1. Tính xác suất thực nghiệm của sự kiện một con cá bắt lên ở lần hai có mang thẻ đánh dấu.
2. Hãy ước lượng tổng số cá chép hiện có trong hồ sinh thái.

**Lời giải:**
1. Xác suất thực nghiệm gặp cá có đánh dấu ở lần bắt thứ hai là:
   $$P = \frac{6}{80} = \frac{3}{40} = 0{,}075 \quad (7{,}5\%).$$
2. Gọi tổng số cá chép trong hồ là $N$.
   Vì số cá có dấu ban đầu là $M = 120$ con phân bố đều trong $N$ con, nên ta có tỉ lệ:
   $$\frac{120}{N} \approx 0{,}075 \implies N \approx \frac{120}{0{,}075} = 1\,600.$$
   Vậy ước lượng trong hồ có khoảng $1\,600$ con cá chép.

---

### Chuyên đề 2: Luật số lớn (Law of Large Numbers) và Lịch sử thí nghiệm gieo đồng xu

Luật số lớn phát biểu rằng: khi số lần thực nghiệm $n$ tiến ra vô cùng, xác suất thực nghiệm $\frac{k}{n}$ sẽ hội tụ về xác suất lý thuyết $p$.

Trong lịch sử toán học thế giới, nhiều nhà khoa học lỗi lạc đã kiên trì thực hiện hàng chục nghìn lần tung đồng xu để kiểm chứng định luật này:

| Nhà khoa học | Thời gian | Số lần tung ($n$) | Số lần ra mặt sấp ($k$) | Xác suất thực nghiệm ($P$) |
| :--- | :---: | :---: | :---: | :---: |
| **Comte de Buffon** | Thế kỷ 18 | $4\,040$ | $2\,048$ | $0{,}5069$ |
| **John Kerrich** | 1940 (khi bị giam) | $10\,000$ | $5\,067$ | $0{,}5067$ |
| **Karl Pearson** | Đầu thế kỷ 20 | $24\,000$ | $12\,012$ | $0{,}5005$ |

#### Bài toán Olympic 2
Ba nhóm học sinh tiến hành gieo một con xúc xắc chuẩn để quan sát mặt $6$ chấm (xác suất lý thuyết là $\frac{1}{6} \approx 0{,}1667$):
- Nhóm 1 gieo $40$ lần, được $9$ lần ra mặt $6$.
- Nhóm 2 gieo $100$ lần, được $18$ lần ra mặt $6$.
- Nhóm 3 gieo $300$ lần, được $51$ lần ra mặt $6$.

1. Tính xác suất thực nghiệm của mỗi nhóm.
2. Tính xác suất thực nghiệm chung khi gộp kết quả của cả ba nhóm lại.
3. Rút ra nhận xét về mối quan hệ giữa quy mô số lần gieo và độ lệch so với xác suất lý thuyết.

**Lời giải:**
1. Xác suất thực nghiệm của từng nhóm:
   - Nhóm 1: $P_1 = \frac{9}{40} = 0{,}225$ (chênh lệch với lý thuyết $|0{,}225 - 0{,}1667| \approx 0{,}0583$).
   - Nhóm 2: $P_2 = \frac{18}{100} = 0{,}180$ (chênh lệch $|0{,}180 - 0{,}1667| \approx 0{,}0133$).
   - Nhóm 3: $P_3 = \frac{51}{300} = 0{,}170$ (chênh lệch $|0{,}170 - 0{,}1667| \approx 0{,}0033$).
2. Khi gộp cả ba nhóm lại:
   - Tổng số lần gieo: $N = 40 + 100 + 300 = 440$ lần.
   - Tổng số lần ra mặt $6$: $K = 9 + 18 + 51 = 78$ lần.
   - Xác suất thực nghiệm chung là:
     $$P_{\text{chung}} = \frac{78}{440} = \frac{39}{220} \approx 0{,}1773.$$
3. **Nhận xét:** Khi số lần gieo tăng lên từ $40$ lên $100$, rồi $300$ và $440$ lần, độ chênh lệch giữa xác suất thực nghiệm và xác suất lý thuyết giảm dần rõ rệt, kết quả càng ngày càng sát với giá trị lý thuyết xấp xỉ $0{,}167$.

---

### Chuyên đề 3: Phân tích bảng chéo hai chiều (Two-way Contingency Table)

Trong thực tế điều tra xã hội học, dữ liệu thường được phân loại đồng thời theo hai tiêu chí (ví dụ: Giới tính và Hoạt động thể thao, hoặc Khối lớp và Sở thích đọc sách). Bảng chéo hai chiều giúp tính toán xác suất có điều kiện và xác suất kết hợp.

#### Bài toán Olympic 3
Khảo sát $200$ học sinh khối 6 về việc tham gia câu lạc bộ (CLB) Tiếng Anh và CLB Tin học thu được bảng số liệu sau:

| Đối tượng | Tham gia CLB Tin học | Không tham gia Tin học | **Tổng cộng** |
| :--- | :---: | :---: | :---: |
| **Tham gia CLB Tiếng Anh** | $45$ | $65$ | $110$ |
| **Không tham gia Tiếng Anh** | $55$ | $35$ | $90$ |
| **Tổng cộng** | $100$ | $100$ | $200$ |

Chọn ngẫu nhiên một học sinh trong số $200$ bạn. Hãy tính xác suất thực nghiệm của các sự kiện:
1. $E_1$: *"Học sinh được chọn tham gia cả hai câu lạc bộ"*;
2. $E_2$: *"Học sinh được chọn tham gia ít nhất một câu lạc bộ"*;
3. $E_3$: *"Biết rằng học sinh đó tham gia CLB Tiếng Anh, tính xác suất bạn đó cũng tham gia CLB Tin học"*.

**Lời giải:**
1. Số học sinh tham gia cả hai CLB là ô giao giữa Tiếng Anh và Tin học: $45$ bạn.
   $$P(E_1) = \frac{45}{200} = \frac{9}{40} = 0{,}225.$$
2. Sự kiện "tham gia ít nhất một CLB" có biến cố đối là "không tham gia CLB nào".
   Số bạn không tham gia CLB nào là $35$ bạn.
   Do đó, số bạn tham gia ít nhất một CLB là:
   $$200 - 35 = 165.$$
   (Có $165$ bạn tham gia ít nhất một CLB).
   $$P(E_2) = \frac{165}{200} = \frac{33}{40} = 0{,}825.$$
3. Trong số $110$ bạn tham gia CLB Tiếng Anh, có $45$ bạn tham gia CLB Tin học.
   Xác suất cần tìm là:
   $$P(E_3) = \frac{45}{110} = \frac{9}{22} \approx 0{,}409.$$

---

### Chuyên đề 4: Phương pháp mô phỏng Monte Carlo xấp xỉ số $\pi$

**Phương pháp Monte Carlo** là một kỹ thuật toán học máy tính đột phá dùng thực nghiệm ngẫu nhiên để giải các bài toán hình học và giải tích phức tạp.

Một trong những ứng dụng kinh điển nhất là **ước lượng số $\pi$**:
- Vẽ một hình vuông cạnh $2r$ (diện tích $S_1 = (2r)^2 = 4r^2$).
- Vẽ một hình tròn nội tiếp bán kính $r$ (diện tích $S_2 = \pi r^2$).
- Tỉ số diện tích giữa hình tròn và hình vuông là:
  $$\frac{S_2}{S_1} = \frac{\pi r^2}{4r^2} = \frac{\pi}{4}.$$
- Nếu ta chấm ngẫu nhiên $N$ điểm vào bên trong hình vuông, và đếm được $M$ điểm rơi vào trong hình tròn, thì theo xác suất thực nghiệm:
  $$\frac{M}{N} \approx \frac{\pi}{4} \implies \pi \approx 4 \times \frac{M}{N}.$$

#### Bài toán Olympic 4
Một chương trình máy tính thực hiện gieo ngẫu nhiên $10\,000$ hạt mưa vào một bảng hình vuông có chứa một hình tròn nội tiếp. Kết quả máy tính đếm được có $7\,854$ hạt mưa rơi vào bên trong hình tròn.
1. Tính xác suất thực nghiệm hạt mưa rơi vào trong hình tròn.
2. Từ kết quả trên, hãy tính giá trị xấp xỉ của số $\pi$.

**Lời giải:**
1. Xác suất thực nghiệm hạt mưa rơi vào hình tròn là:
   $$P = \frac{7\,854}{10\,000} = 0{,}7854.$$
2. Áp dụng công thức Monte Carlo:
   $$\pi \approx 4 \times P = 4 \times 0{,}7854 = 3{,}1416.$$
   Con số $3{,}1416$ xấp xỉ cực kỳ chính xác với giá trị số $\pi \approx 3{,}14159265...$ quen thuộc!

---

### Chuyên đề 5: Sai số thực nghiệm và Tiêu chuẩn chọn mẫu đại diện

Một bài toán ứng dụng xác suất chỉ có giá trị khi **mẫu khảo sát có tính đại diện (Representative Sample)** và không bị thiên lệch (Biased).

> [!WARNING]
> **Hai quy tắc vàng trong thống kê thực nghiệm:**
> 1. **Quy mô mẫu phải đủ lớn:** Một thí nghiệm chỉ làm $5$ hay $10$ lần thì kết quả có sai số ngẫu nhiên rất lớn, chưa đủ độ tin cậy.
> 2. **Phải chọn mẫu ngẫu nhiên không thiên vị:** Nếu muốn khảo sát chiều cao trung bình của học sinh lớp 6 mà chỉ đo các bạn trong đội tuyển bóng rổ, kết quả thu được sẽ bị sai lệch hoàn toàn so với thực tế!

#### Bài toán Olympic 5
Để khảo sát tỉ lệ học sinh nghiện chơi game trên điện thoại trong một trường học có $1\,200$ học sinh, hai bạn đề xuất hai cách làm:
- **Bạn An:** Đứng ở cổng một quán Internet gần trường và phỏng vấn $100$ học sinh bước ra từ quán đó.
- **Bạn Bình:** Lấy danh sách toàn trường gồm $1\,200$ bạn, bốc thăm ngẫu nhiên $100$ bạn từ danh sách để gửi phiếu hỏi ẩn danh.

Hỏi cách làm của bạn nào cho kết quả xác suất thực nghiệm đáng tin cậy hơn? Vì sao?

**Lời giải:**
Cách làm của **bạn Bình** đáng tin cậy hơn rất nhiều.
- Bạn An đã phạm lỗi **chọn mẫu thiên lệch nghiêm trọng (Selection Bias)**: Những học sinh bước ra từ quán Internet chắc chắn có tỉ lệ chơi game cao hơn hẳn mặt bằng chung toàn trường. Xác suất thực nghiệm của An sẽ bị thổi phồng, không phản ánh đúng thực tế.
- Bạn Bình đã áp dụng phương pháp **chọn mẫu ngẫu nhiên đơn giản (Simple Random Sampling)**: Mọi học sinh trong trường đều có cơ hội được chọn như nhau, do đó mẫu của Bình mang tính đại diện khách quan cho toàn bộ học sinh trong trường.

---

## IV. Bài tập trắc nghiệm tương tác (10 Quiz chuẩn hóa)

Mỗi câu hỏi dưới đây là một khối tương tác độc lập có giải thích chi tiết:

```quiz
question: 'Thực hiện một phép thử n lần, trong đó sự kiện A xảy ra k lần. Công thức tính xác suất thực nghiệm P(A) là:'
options:
  - 'P(A) = n / k'
  - 'P(A) = k / n'
  - 'P(A) = k . n'
  - 'P(A) = k + n'
answer: 2
explanation: 'Xác suất thực nghiệm P(A) bằng số lần sự kiện A xảy ra (k) chia cho tổng số lần thực hiện phép thử (n): P(A) = k / n.'
type: choice
```

```quiz
question: 'Tung một đồng xu 40 lần thì có 18 lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:'
options:
  - '0,18'
  - '0,40'
  - '0,45'
  - '0,55'
answer: 3
explanation: 'Xác suất thực nghiệm là P = 18 / 40 = 9 / 20 = 0,45.'
type: choice
```

```quiz
question: 'Khẳng định nào sau đây là ĐÚNG về giá trị của xác suất thực nghiệm P?'
options:
  - 'P luôn luôn lớn hơn 1'
  - 'P là một số bất kỳ từ 0 đến 1'
  - 'P luôn luôn bằng 0,5'
  - 'P có thể nhận giá trị âm'
answer: 2
explanation: 'Vì k là số lần xảy ra nên 0 <= k <= n, do đó tỉ số k / n luôn nằm trong đoạn từ 0 đến 1 (hoặc từ 0% đến 100%).'
type: choice
```

```quiz
question: 'Gieo một con xúc xắc 6 mặt 50 lần thì mặt 3 chấm xuất hiện 8 lần. Xác suất thực nghiệm của sự kiện "xuất hiện mặt 3 chấm" là:'
options:
  - '8 / 3'
  - '3 / 50'
  - '0,16'
  - '0,375'
answer: 3
explanation: 'Xác suất thực nghiệm là P = 8 / 50 = 0,16 (tử số là số lần xuất hiện k = 8, mẫu số là tổng số lần gieo n = 50).'
type: choice
```

```quiz
question: 'Một xạ thủ bắn 60 phát súng, xác suất thực nghiệm bắn trúng vòng 10 điểm là 0,35. Số lần xạ thủ bắn trúng vòng 10 điểm là:'
options:
  - '21 lần'
  - '24 lần'
  - '35 lần'
  - '42 lần'
answer: 1
explanation: 'Số lần bắn trúng là k = P . n = 0,35 . 60 = 21 lần.'
type: choice
```

```quiz
question: 'Kiểm tra 200 chiếc áo may tại một xưởng thì có 6 chiếc bị lỗi đường chỉ. Trong lô hàng gồm 5 000 chiếc áo, dự đoán có khoảng bao nhiêu chiếc áo bị lỗi?'
options:
  - '60 chiếc'
  - '120 chiếc'
  - '150 chiếc'
  - '300 chiếc'
answer: 3
explanation: 'Xác suất thực nghiệm gặp áo lỗi là P = 6 / 200 = 0,03. Dự đoán số áo lỗi trong 5 000 chiếc là: 0,03 . 5 000 = 150 chiếc.'
type: choice
```

```quiz
question: 'Một túi chứa các viên bi màu. Lấy ngẫu nhiên một viên bi có hoàn lại 80 lần thì được 48 lần bi xanh. Xác suất thực nghiệm của sự kiện "không lấy được bi xanh" là:'
options:
  - '0,60'
  - '0,40'
  - '0,48'
  - '0,52'
answer: 2
explanation: 'Số lần không lấy được bi xanh là 80 - 48 = 32 lần. Xác suất thực nghiệm là P = 32 / 80 = 0,4 (hoặc lấy 1 - 0,6 = 0,4).'
type: choice
```

```quiz
question: 'Quay một vòng quay may mắn nhiều lần. Biết xác suất thực nghiệm kim chỉ vào ô đặc biệt là 0,15 và kim đã chỉ vào ô này 27 lần. Hỏi vòng quay đã được quay bao nhiêu lần?'
options:
  - '150 lần'
  - '180 lần'
  - '200 lần'
  - '270 lần'
answer: 2
explanation: 'Tổng số lần quay là n = k : P = 27 : 0,15 = 180 lần.'
type: choice
```

```quiz
question: 'Gieo con xúc xắc 100 lần, thu được: mặt 1 (14 lần), mặt 2 (16 lần), mặt 3 (18 lần), mặt 4 (15 lần), mặt 5 (17 lần), mặt 6 (20 lần). Xác suất thực nghiệm của sự kiện "mặt xuất hiện có số chấm là số nguyên tố" là:'
options:
  - '0,48'
  - '0,51'
  - '0,53'
  - '0,55'
answer: 2
explanation: 'Các mặt có số chấm là số nguyên tố gồm mặt 2, mặt 3 và mặt 5. Tổng số lần là k = 16 + 18 + 17 = 51 lần. Xác suất là P = 51 / 100 = 0,51.'
type: choice
```

```quiz
question: 'Tại sao khi số lần thực hiện phép thử n càng lớn thì xác suất thực nghiệm càng có giá trị dự đoán chính xác hơn?'
options:
  - 'Vì khi n lớn thì số lần sự kiện xảy ra k luôn bằng n'
  - 'Vì theo Luật số lớn, xác suất thực nghiệm sẽ dần ổn định và tiệm cận xác suất lý thuyết'
  - 'Vì công thức tính thay đổi khi n lớn'
  - 'Vì phép thử nghiệm không còn yếu tố ngẫu nhiên nữa'
answer: 2
explanation: 'Theo Luật số lớn trong xác suất học, khi số lần thử nghiệm tăng lên rất lớn, dao động ngẫu nhiên bị triệt tiêu dần và xác suất thực nghiệm sẽ tiến sát về xác suất lý thuyết khách quan.'
type: choice
```

---

## V. Đề kiểm tra 15 phút đánh giá năng lực

### Đề số 1

#### Phần I. Trắc nghiệm khách quan (4 điểm — Mỗi câu 1 điểm)

**Câu 1:** Tung một đồng xu $50$ lần thì có $22$ lần xuất hiện mặt sấp. Xác suất thực nghiệm xuất hiện mặt sấp là:
- A. $0{,}22$
- B. $0{,}44$
- C. $0{,}56$
- D. $0{,}50$

**Câu 2:** Gieo một con xúc xắc $60$ lần thì thấy mặt $5$ chấm xuất hiện $9$ lần. Xác suất thực nghiệm của sự kiện *"ra mặt 5 chấm"* là:
- A. $\frac{3}{20}$
- B. $\frac{1}{6}$
- C. $\frac{5}{60}$
- D. $\frac{9}{5}$

**Câu 3:** Khẳng định nào sau đây là **sai**?
- A. Xác suất thực nghiệm của một sự kiện luôn nằm trong đoạn $[0; 1]$.
- B. Sự kiện không bao giờ xảy ra có xác suất bằng $0$.
- C. Sự kiện chắc chắn xảy ra có xác suất bằng $1$.
- D. Xác suất thực nghiệm luôn luôn bằng xác suất lý thuyết dù làm bao nhiêu lần đi nữa.

**Câu 4:** Một cửa hàng hoa quả kiểm tra $80$ quả cam thì có $4$ quả bị dập. Xác suất thực nghiệm gặp quả cam đạt chuẩn (không bị dập) là:
- A. $0{,}05$
- B. $0{,}90$
- C. $0{,}95$
- D. $0{,}04$

#### Phần II. Tự luận (6 điểm)

**Bài 1 (3 điểm):** Bạn Thảo gieo một con xúc xắc $40$ lần và ghi lại số lần xuất hiện của các mặt như sau:

| Số chấm | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Số lần xuất hiện** | $6$ | $8$ | $5$ | $9$ | $5$ | $7$ |

1. Tính xác suất thực nghiệm của sự kiện: *"Mặt xuất hiện là mặt 4 chấm"*. *(1,5 điểm)*
2. Tính xác suất thực nghiệm của sự kiện: *"Mặt xuất hiện có số chấm là số chẵn"*. *(1,5 điểm)*

**Bài 2 (3 điểm):** Người ta gieo thử nghiệm $120$ hạt giống ngô thì thấy có $108$ hạt nảy mầm.
1. Tính xác suất thực nghiệm của sự kiện: *"Hạt giống ngô nảy mầm"*. *(1,5 điểm)*
2. Một trang trại gieo $25\,000$ hạt giống ngô cùng loại. Hãy dự đoán có khoảng bao nhiêu hạt giống sẽ nảy mầm. *(1,5 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 1

#### Trắc nghiệm (4 điểm)
- Câu 1: **B** ($1$ điểm) — $P = \frac{22}{50} = 0{,}44$.
- Câu 2: **A** ($1$ điểm) — $P = \frac{9}{60} = \frac{3}{20} = 0{,}15$.
- Câu 3: **D** ($1$ điểm) — D sai vì trong mẫu hữu hạn, xác suất thực nghiệm chỉ xấp xỉ xác suất lý thuyết.
- Câu 4: **C** ($1$ điểm) — Số cam đạt chuẩn là $80 - 4 = 76$ quả, $P = \frac{76}{80} = 0{,}95$.

#### Tự luận (6 điểm)
**Bài 1:**
1. Số lần ra mặt $4$ chấm là $9$ lần. Tổng số lần gieo là $40$.
   Xác suất thực nghiệm là:
   $$P = \frac{9}{40} = 0{,}225.$$ *(1,5 điểm)*
2. Các mặt có số chấm chẵn là: mặt $2$, mặt $4$, mặt $6$.
   Số lần xuất hiện là: $8 + 9 + 7 = 24$ lần.
   Xác suất thực nghiệm là:
   $$P = \frac{24}{40} = \frac{3}{5} = 0{,}6.$$ *(1,5 điểm)*

**Bài 2:**
1. Xác suất thực nghiệm hạt giống nảy mầm là:
   $$P = \frac{108}{120} = \frac{9}{10} = 0{,}9 \quad (90\%).$$ *(1,5 điểm)*
2. Dự đoán số hạt nảy mầm trong $25\,000$ hạt là:
   $$0{,}9 \times 25\,000 = 22\,500.$$
   (Khoảng $22\,500$ hạt giống). *(1,5 điểm)*

---

### Đề số 2

#### Phần I. Trắc nghiệm khách quan (4 điểm — Mỗi câu 1 điểm)

**Câu 1:** Một hộp có bi xanh và bi đỏ. Bốc bi có hoàn lại $100$ lần được $64$ lần bi đỏ. Xác suất thực nghiệm bốc được bi đỏ là:
- A. $0{,}36$
- B. $0{,}64$
- C. $6{,}4$
- D. $0{,}50$

**Câu 2:** Một thủ môn bắt phạt đền $30$ lần, trong đó cản phá thành công $9$ lần. Xác suất thực nghiệm cản phá thành công của thủ môn là:
- A. $0{,}30$
- B. $0{,}27$
- C. $0{,}09$
- D. $0{,}33$

**Câu 3:** Gieo một con xúc xắc một số lần. Biết xác suất thực nghiệm ra mặt $6$ chấm là $0{,}25$ và mặt $6$ chấm đã xuất hiện $15$ lần. Con xúc xắc đã được gieo số lần là:
- A. $45$ lần
- B. $60$ lần
- C. $75$ lần
- D. $90$ lần

**Câu 4:** Nếu tung một đồng xu $10$ lần mà cả $10$ lần đều ra mặt ngửa, ta có thể kết luận ngay đồng xu bị hỏng được không?
- A. Chắc chắn đồng xu bị hỏng vì không bao giờ ra $10$ lần ngửa.
- B. Chưa thể kết luận vì số lần tung còn quá nhỏ ($n = 10$), đây có thể là sự trùng hợp ngẫu nhiên hiếm gặp.
- C. Đồng xu hoàn toàn bình thường $100\%$.
- D. Xác suất ra ngửa của đồng xu đó là $0{,}5$.

#### Phần II. Tự luận (6 điểm)

**Bài 1 (3 điểm):** Một hộp quà chứa các phiếu trúng thưởng gồm $3$ loại: Phiếu Vở viết, Phiếu Bút bi, Phiếu Thước kẻ. Bạn Hùng rút ngẫu nhiên có hoàn lại $50$ lần được kết quả: $18$ phiếu Vở viết, $22$ phiếu Bút bi, còn lại là phiếu Thước kẻ.
1. Tính xác suất thực nghiệm của sự kiện: *"Rút được phiếu Thước kẻ"*. *(1,5 điểm)*
2. So sánh xác suất thực nghiệm rút được phiếu Vở viết và phiếu Bút bi. Phiếu nào có khả năng rút trúng cao hơn? *(1,5 điểm)*

**Bài 2 (3 điểm):** Bác An nuôi một ao cá rô phi. Để ước lượng số cá trong ao, bác bắt lên $80$ con cá rô phi, đánh dấu nhẹ vào vây rồi thả lại ao. Mười ngày sau, bác đánh lưới bắt lên $60$ con cá thì thấy có $4$ con có vết đánh dấu.
1. Tính xác suất thực nghiệm của sự kiện: *"Con cá bắt lên ở lần hai có vết đánh dấu"*. *(1,5 điểm)*
2. Dựa vào xác suất thực nghiệm trên, hãy ước lượng tổng số cá rô phi hiện có trong ao của bác An. *(1,5 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 2

#### Trắc nghiệm (4 điểm)
- Câu 1: **B** ($1$ điểm) — $P = \frac{64}{100} = 0{,}64$.
- Câu 2: **A** ($1$ điểm) — $P = \frac{9}{30} = 0{,}30$.
- Câu 3: **B** ($1$ điểm) — $n = 15 : 0{,}25 = 60$ lần.
- Câu 4: **B** ($1$ điểm) — Kích thước mẫu quá nhỏ chưa thể khẳng định tính cân đối, cần kiểm tra với $n$ lớn hơn.

#### Tự luận (6 điểm)
**Bài 1:**
1. Số lần rút được phiếu Thước kẻ là:
   $$50 - (18 + 22) = 10.$$
   (Gồm $10$ lần).
   Xác suất thực nghiệm là:
   $$P = \frac{10}{50} = 0{,}2.$$ *(1,5 điểm)*
2. Xác suất thực nghiệm phiếu Vở viết là: $P_1 = \frac{18}{50} = 0{,}36$.
   Xác suất thực nghiệm phiếu Bút bi là: $P_2 = \frac{22}{50} = 0{,}44$.
   Vì $0{,}44 > 0{,}36$ nên khả năng rút trúng phiếu Bút bi cao hơn phiếu Vở viết. *(1,5 điểm)*

**Bài 2:**
1. Xác suất thực nghiệm gặp cá có đánh dấu là:
   $$P = \frac{4}{60} = \frac{1}{15} \approx 0{,}067.$$ *(1,5 điểm)*
2. Gọi số cá trong ao là $N$. Tỉ lệ cá có dấu là:
   $$\frac{80}{N} \approx \frac{1}{15} \implies N \approx 80 \times 15 = 1\,200.$$
   Vậy ước tính trong ao của bác An có khoảng $1\,200$ con cá rô phi. *(1,5 điểm)*
