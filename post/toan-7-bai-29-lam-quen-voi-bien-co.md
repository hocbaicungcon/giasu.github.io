---
title: 'Toán 7 Bài 29: Làm quen với biến cố - Biến cố chắc chắn, không thể và ngẫu nhiên'
description: 'Khám phá thế giới xác suất Toán 7 Bài 29: Khái niệm biến cố, phân loại biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên kèm mô hình thí nghiệm tương tác, 4 dạng toán, 5 chuyên đề thực tiễn và 10 quiz có lời giải.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Xác suất và thống kê
  - Biến cố
  - Biến cố ngẫu nhiên
  - Biến cố chắc chắn
  - Biến cố không thể
  - Kết nối tri thức
grade: 7
---

# Bài 29. Làm quen với biến cố

Trong cuộc sống hàng ngày, chúng ta liên tục đưa ra những dự đoán: *"Ngày mai trời có thể sẽ mưa"*, *"Đội tuyển bóng đá Việt Nam chắc chắn sẽ chiến thắng"*, hay *"Tung đồng xu có thể ra mặt ngửa"*. Những sự kiện như vậy trong toán học hiện đại được gọi là **biến cố (event)**.

Lý thuyết xác suất ra đời vào thế kỷ XVII bắt nguồn từ những bức thư trao đổi lịch sử giữa hai thiên tài toán học Blaise Pascal và Pierre de Fermat năm 1654. Từ việc phân tích các trò chơi may rủi, xác suất và biến cố đã trở thành công cụ toán học tối thượng để dự báo thời tiết, định giá rủi ro tài chính bảo hiểm, phân tích gene di truyền sinh học và định hướng các mạng nơ-ron học máy (Deep Learning) ngày nay.

Bài học này sẽ trang bị cho các em nền tảng tư duy vững chắc nhất để nhận biết, phân loại và làm chủ bản chất của mọi hiện tượng ngẫu nhiên xung quanh ta!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 29: PHÂN LOẠI CÁC LOẠI BIẾN CỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">1. Biến cố chắc chắn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Luôn luôn xảy ra trong mọi lần thực hiện phép thử.<br>• Không phụ thuộc vào may rủi.<br>• Xác suất: $P = 1$ ($100\%$).<br>• <em>Ví dụ:</em> Gieo xúc xắc được số chấm $\le 6$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">2. Biến cố không thể</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tuyệt đối không bao giờ xảy ra trong phép thử.<br>• Trái với điều kiện tự nhiên / quy tắc.<br>• Xác suất: $P = 0$ ($0\%$).<br>• <em>Ví dụ:</em> Gieo xúc xắc được mặt $8$ chấm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">3. Biến cố ngẫu nhiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có thể xảy ra hoặc không xảy ra.<br>• Không thể biết trước kết quả trước khi thử.<br>• Xác suất: $0 < P < 1$.<br>• <em>Ví dụ:</em> Tung đồng xu xuất hiện mặt Sấp.</p>
    </div>
  </div>
</div>

---

## Khởi động — Trắc nghiệm phản xạ tình huống (3 phút)

Hãy phân loại nhanh các sự kiện sau vào một trong ba nhóm: **Chắc chắn**, **Không thể**, hoặc **Ngẫu nhiên**:

1. Khi đun nước tinh khiết ở áp suất tiêu chuẩn $1\text{ atm}$, nước sôi ở nhiệt độ $100^\circ\text{C}$.
2. Một hộp có $5$ viên bi xanh và $3$ viên bi đỏ. Bạn Nam nhắm mắt lấy ra $1$ viên bi màu vàng.
3. Ngày mai tại Hà Nội sẽ có một cơn mưa rào lúc 14 giờ chiều.
4. Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá, ta nhận được một lá bài có màu đỏ hoặc màu đen.
5. Gieo một con xúc xắc 6 mặt cân đối, số chấm xuất hiện là số lẻ.

> [!TIP]
> **Giải thích phản xạ nhanh:**
> 1. **Chắc chắn** (theo định luật vật lý).
> 2. **Không thể** (trong hộp hoàn toàn không có bi vàng).
> 3. **Ngẫu nhiên** (thời tiết có thể mưa hoặc không mưa).
> 4. **Chắc chắn** (mọi lá bài trong bộ bài tiêu chuẩn đều chỉ mang màu đỏ hoặc đen).
> 5. **Ngẫu nhiên** (có thể xuất hiện mặt 1, 3, 5 lẻ hoặc mặt 2, 4, 6 chẵn).

---

## I. Lý thuyết Trọng tâm: Phép thử nghiệm và Biến cố

### 1. Phép thử nghiệm (Hành động thực nghiệm)

Một hành động, thí nghiệm hay trò chơi có tính chất:
- Có thể lặp đi lặp lại nhiều lần trong cùng những điều kiện xác định.
- Kết quả của hành động đó không thể dự đoán chính xác trước khi thực hiện.
được gọi là một **phép thử nghiệm** (hay gọi tắt là **phép thử**).

*Ví dụ:*
- Gieo một con xúc xắc $6$ mặt.
- Tung một đồng xu kim loại.
- Bốc ngẫu nhiên một quả bóng trong hộp kín.
- Quay một vòng quay may mắn có nhiều ô màu sắc.

---

### 2. Định nghĩa Biến cố và Ba loại Biến cố cơ bản

Trong một phép thử nghiệm, một sự kiện có thể xảy ra hay không xảy ra được gọi là một **biến cố**. Ta thường dùng các chữ cái in hoa $A, B, C, E, F, \dots$ để đặt tên cho các biến cố.

Tùy theo khả năng xảy ra, biến cố được phân loại thành 3 loại cơ bản:

> [!IMPORTANT]
> **BA LOẠI BIẾN CỐ:**
> 1. **Biến cố chắc chắn:** Là biến cố **luôn luôn xảy ra** trong phép thử đó.
> 2. **Biến cố không thể:** Là biến cố **không bao giờ xảy ra** trong phép thử đó.
> 3. **Biến cố ngẫu nhiên:** Là biến cố **có thể xảy ra hoặc không xảy ra**, tùy thuộc vào kết quả của phép thử.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" style="width: 100%; max-width: 600px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Thang đo mức độ tin cậy của biến cố từ Không thể đến Chắc chắn">
    <rect x="20" y="20" width="560" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <!-- Trục xác suất nằm ngang -->
    <line x1="80" y1="120" x2="520" y2="120" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    
    <!-- Mốc Không thể (0) -->
    <circle cx="80" cy="120" r="10" fill="#ef4444" stroke="#ffffff" stroke-width="3" />
    <text x="80" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">KHÔNG THỂ</text>
    <text x="80" y="102" text-anchor="middle" font-size="14" fill="#64748b">Xác suất = 0</text>
    <text x="80" y="160" text-anchor="middle" font-size="13" fill="#475569">Mặt 7 chấm xúc xắc</text>

    <!-- Mốc Ngẫu nhiên (0 < P < 1) -->
    <circle cx="300" cy="120" r="10" fill="#3b82f6" stroke="#ffffff" stroke-width="3" />
    <text x="300" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">NGẪU NHIÊN</text>
    <text x="300" y="102" text-anchor="middle" font-size="14" fill="#64748b">0 &lt; Xác suất &lt; 1</text>
    <text x="300" y="160" text-anchor="middle" font-size="13" fill="#475569">Mặt ngửa đồng xu</text>

    <!-- Mốc Chắc chắn (1) -->
    <circle cx="520" cy="120" r="10" fill="#10b981" stroke="#ffffff" stroke-width="3" />
    <text x="520" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">CHẮC CHẮN</text>
    <text x="520" y="102" text-anchor="middle" font-size="14" fill="#64748b">Xác suất = 1</text>
    <text x="520" y="160" text-anchor="middle" font-size="13" fill="#475569">Số chấm &le; 6</text>
  </svg>
</div>

---

### 3. Biến cố đồng khả năng (Equally likely events)

Khi thực hiện một phép thử có tính chất hoàn toàn đối xứng (ví dụ xúc xắc được chế tạo cân đối, đồng chất; các lá thăm có kích thước và trọng lượng y hệt nhau), các kết quả đơn lẻ có khả năng xuất hiện ngang bằng nhau. Những biến cố như vậy được gọi là các **biến cố đồng khả năng**.

*Ví dụ:* 
- Tung một đồng xu cân đối: Biến cố "Xuất hiện mặt Sấp" và biến cố "Xuất hiện mặt Ngửa" là hai biến cố đồng khả năng (khả năng xảy ra đều là $50\%$).
- Gieo một con xúc xắc 6 mặt đồng chất: Khả năng xuất hiện của mỗi mặt từ 1 đến 6 chấm đều bình đẳng như nhau.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận biết và phân loại biến cố (Chắc chắn, Không thể, Ngẫu nhiên)

**Phương pháp giải:**
1. Phân tích rõ phép thử: Không gian các kết quả có thể xảy ra của phép thử là gì?
2. So sánh nội dung của biến cố với các kết quả có thể có:
   - Nếu biến cố bao trùm **toàn bộ** mọi kết quả có thể $\implies$ **Biến cố chắc chắn**.
   - Nếu biến cố **không chứa bất kỳ** kết quả nào trong phép thử $\implies$ **Biến cố không thể**.
   - Nếu biến cố **chỉ xảy ra với một số kết quả** và không xảy ra với các kết quả khác $\implies$ **Biến cố ngẫu nhiên**.

---

#### Bài toán 1:
Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối một lần. Trong các biến cố sau, biến cố nào là biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên?
- $A$: "Số chấm xuất hiện trên mặt xúc xắc là số chia hết cho 2".
- $B$: "Số chấm xuất hiện là số tự nhiên lớn hơn 0 và nhỏ hơn 7".
- $C$: "Số chấm xuất hiện là số nguyên tố lớn hơn 5".
- $D$: "Số chấm xuất hiện là số chính phương".

**Lời giải:**

Khi gieo xúc xắc 6 mặt cân đối, tập hợp các kết quả có thể xảy ra là:
$$S = \{1; 2; 3; 4; 5; 6\}$$

1. **Xét biến cố $A$:** Các số chia hết cho 2 là $\{2; 4; 6\}$.
   - Nếu xúc xắc ra mặt $2, 4, 6$ thì $A$ xảy ra.
   - Nếu xúc xắc ra mặt $1, 3, 5$ thì $A$ không xảy ra.
   $\implies A$ là **biến cố ngẫu nhiên**.

2. **Xét biến cố $B$:** Mọi phần tử trong tập $\{1; 2; 3; 4; 5; 6\}$ đều lớn hơn 0 và nhỏ hơn 7.
   - Dù xúc xắc ra mặt nào thì biến cố $B$ cũng luôn luôn xảy ra.
   $\implies B$ là **biến cố chắc chắn**.

3. **Xét biến cố $C$:** Trong tập $\{1; 2; 3; 4; 5; 6\}$, các số nguyên tố là $\{2; 3; 5\}$. Không có số nguyên tố nào lớn hơn 5 (số nguyên tố tiếp theo là 7, nhưng xúc xắc chỉ có tối đa 6 chấm).
   - Biến cố $C$ không bao giờ xảy ra.
   $\implies C$ là **biến cố không thể**.

4. **Xét biến cố $D$:** Các số chính phương trong tập là $\{1; 4\}$ (vì $1 = 1^2, 4 = 2^2$).
   - Nếu ra mặt 1 hoặc 4 thì $D$ xảy ra; ra các mặt khác thì $D$ không xảy ra.
   $\implies D$ là **biến cố ngẫu nhiên**.

---

### Dạng 2: Liệt kê các kết quả thuận lợi cho một biến cố

**Phương pháp giải:**
Một kết quả của phép thử làm cho biến cố $E$ xảy ra được gọi là một **kết quả thuận lợi** cho biến cố $E$.
Để tìm các kết quả thuận lợi:
1. Liệt kê toàn bộ các kết quả có thể của phép thử.
2. Kiểm tra từng kết quả xem có thỏa mãn điều kiện của biến cố hay không.

---

#### Bài toán 2:
Một hộp chứa $12$ tấm thẻ cùng kích thước, được đánh số từ $1$ đến $12$. Rút ngẫu nhiên một tấm thẻ từ hộp.
a) Liệt kê tất cả các kết quả có thể của phép thử.
b) Liệt kê các kết quả thuận lợi cho mỗi biến cố sau:
- Biến cố $E$: "Số ghi trên thẻ là số chia hết cho 3".
- Biến cố $F$: "Số ghi trên thẻ là số có hai chữ số".
- Biến cố $G$: "Số ghi trên thẻ là số nguyên tố".

**Lời giải:**

a) Tập hợp các kết quả có thể của phép thử rút một tấm thẻ là:
$$S = \{1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12\}$$
Tổng cộng có $12$ kết quả có thể xảy ra.

b) Các kết quả thuận lợi:
- **Biến cố $E$ ("Số chia hết cho 3"):**
  Các số chia hết cho 3 trong khoảng từ 1 đến 12 là: $3, 6, 9, 12$.
  $\implies$ Các kết quả thuận lợi cho $E$ là: $\{3; 6; 9; 12\}$ (có $4$ kết quả thuận lợi).

- **Biến cố $F$ ("Số có hai chữ số"):**
  Các số có hai chữ số là: $10, 11, 12$.
  $\implies$ Các kết quả thuận lợi cho $F$ là: $\{10; 11; 12\}$ (có $3$ kết quả thuận lợi).

- **Biến cố $G$ ("Số nguyên tố"):**
  Các số nguyên tố từ 1 đến 12 là các số chỉ có 2 ước số dương (1 và chính nó): $2, 3, 5, 7, 11$.
  $\implies$ Các kết quả thuận lợi cho $G$ là: $\{2; 3; 5; 7; 11\}$ (có $5$ kết quả thuận lợi).

---

### Dạng 3: So sánh khả năng xảy ra của các biến cố ngẫu nhiên

**Phương pháp giải:**
Khi các kết quả đơn lẻ là đồng khả năng:
- Biến cố nào có **nhiều kết quả thuận lợi hơn** thì sẽ có **khả năng xảy ra cao hơn**.
- Hai biến cố có **số kết quả thuận lợi bằng nhau** thì có **khả năng xảy ra ngang nhau**.

---

#### Bài toán 3:
Một túi kín đựng $15$ viên bi cùng kích thước và khối lượng, gồm: $7$ viên bi xanh, $5$ viên bi đỏ và $3$ viên bi vàng. Bạn An nhắm mắt lấy ngẫu nhiên một viên bi từ trong túi.
Xét ba biến cố:
- $X$: "Lấy được viên bi màu xanh".
- $Y$: "Lấy được viên bi màu đỏ".
- $Z$: "Lấy được viên bi màu vàng".

Hãy so sánh khả năng xảy ra của ba biến cố trên và giải thích vì sao.

**Lời giải:**

Vì các viên bi có cùng kích thước và khối lượng, được lấy ngẫu nhiên nên khả năng lấy trúng mỗi viên bi là như nhau.
- Số kết quả thuận lợi cho biến cố $X$ là $7$ (vì có $7$ viên bi xanh).
- Số kết quả thuận lợi cho biến cố $Y$ là $5$ (vì có $5$ viên bi đỏ).
- Số kết quả thuận lợi cho biến cố $Z$ là $3$ (vì có $3$ viên bi vàng).

So sánh số kết quả thuận lợi:
$$7 > 5 > 3$$
**Kết luận:**
- Biến cố $X$ có khả năng xảy ra **cao nhất** (dễ xảy ra nhất).
- Biến cố $Z$ có khả năng xảy ra **thấp nhất** (ít có khả năng xảy ra nhất).
- Thứ tự khả năng xảy ra giảm dần: Khả năng xảy ra của $X$ > Khả năng xảy ra của $Y$ > Khả năng xảy ra của $Z$.

---

### Dạng 4: Thiết kế trò chơi và phân tích tính công bằng

**Phương pháp giải:**
Một trò chơi được gọi là **công bằng** (fair game) nếu mọi người chơi đều có cơ hội chiến thắng như nhau (nghĩa là các biến cố chiến thắng của mỗi người chơi là **đồng khả năng** - có số kết quả thuận lợi bằng nhau).

---

#### Bài toán 4:
Hai bạn Bình và Cường chơi một trò chơi với một con xúc xắc 6 mặt cân đối:
- Bình thắng nếu gieo được mặt có số chấm là số nguyên tố.
- Cường thắng nếu gieo được mặt có số chấm là hợp số.
- Nếu gieo ra mặt $1$ chấm thì hai bạn hòa nhau và gieo lại.

Trò chơi này có công bằng đối với cả hai bạn hay không? Vì sao?

**Lời giải:**

Xét tập hợp các kết quả của xúc xắc: $\{1; 2; 3; 4; 5; 6\}$.
- **Trường hợp Bình thắng:** Mặt gieo được là số nguyên tố $\implies$ Các kết quả thuận lợi là $\{2; 3; 5\}$ (gồm $3$ kết quả).
- **Trường hợp Cường thắng:** Mặt gieo được là hợp số (số tự nhiên lớn hơn 1 và có nhiều hơn 2 ước số).
  Trong tập hợp trên, các hợp số là $\{4; 6\}$ (gồm $2$ kết quả).
  *(Lưu ý: Số 1 không phải là số nguyên tố, cũng không phải là hợp số).*

So sánh khả năng chiến thắng:
- Bình có $3$ kết quả thuận lợi.
- Cường chỉ có $2$ kết quả thuận lợi.
Vì $3 > 2$ nên khả năng Bình chiến thắng cao hơn khả năng Cường chiến thắng.

**Kết luận:** Trò chơi này **không công bằng** (Bình có lợi thế hơn Cường).

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Bức thư định mệnh giữa Pascal và Fermat (Năm 1654)

Mùa hè năm 1654, một quý tộc mê cờ bạc người Pháp tên là Chevalier de Méré đã đặt ra cho nhà toán học thiên tài Blaise Pascal bài toán chia tiền cược dang dở:
*Hai đấu thủ đang chơi một trò chơi công bằng gồm nhiều ván, người nào thắng trước $3$ ván sẽ giành toàn bộ $64$ đồng tiền vàng. Nhưng khi đấu thủ A đang dẫn trước $2 - 1$ thì trận đấu bất ngờ bị gián đoạn. Hỏi phải chia số tiền cược $64$ đồng thế nào cho công bằng?*

Pascal liền trao đổi qua thư từ với Pierre de Fermat. Họ nhận ra rằng: Nếu chơi tiếp, trận đấu chỉ cần tối đa $2$ ván nữa là kết thúc. Họ liệt kê toàn bộ các biến cố có thể xảy ra trong 2 ván tới:
- Ván 1: A thắng $\implies$ A vô địch ngay.
- Ván 1: B thắng, Ván 2: A thắng $\implies$ A vô địch.
- Ván 1: B thắng, Ván 2: B thắng $\implies$ B vô địch.
Trong 4 kịch bản ngẫu nhiên có cùng khả năng xảy ra, A thắng tới 3 kịch bản, B chỉ thắng 1 kịch bản. Do đó, A xứng đáng nhận $\frac{3}{4}$ số tiền ($48$ đồng vàng), còn B nhận $\frac{1}{4}$ ($16$ đồng vàng)! Bức thư lịch sử này đã khai sinh ra toàn bộ ngành Lý thuyết Xác suất hiện đại.

---

### Chuyên đề 2: Nghịch lý Monty Hall nổi tiếng trong gameshow truyền hình

Năm 1990, trên tạp chí *Parade*, nữ học giả có chỉ số IQ cao nhất thế giới Marilyn vos Savant đã giải thích một bài toán khiến hàng ngàn tiến sĩ toán học tranh cãi nảy lửa:
- Bạn tham gia một gameshow với $3$ cánh cửa đóng kín. Sau một cánh cửa là chiếc ô tô sang trọng, sau hai cánh cửa còn lại là hai con dê.
- Bạn chọn cánh cửa số $1$.
- Người dẫn chương trình Monty Hall (người biết rõ ô tô ở đâu) mở cánh cửa số $3$, để lộ ra một con dê.
- Monty hỏi: *"Bạn có muốn đổi sang cánh cửa số 2 không?"*

**Phân tích xác suất biến cố:**
- Khi bạn chọn ban đầu cửa số 1, khả năng trúng ô tô chỉ là $\frac{1}{3}$, còn khả năng ô tô nằm ở hai cửa còn lại là $\frac{2}{3}$.
- Việc người dẫn chương trình mở cửa số 3 không làm thay đổi xác suất ban đầu của cửa số 1 (vẫn là $\frac{1}{3}$). Toàn bộ $\frac{2}{3}$ xác suất của hai cửa còn lại giờ đây dồn hết về cửa số 2!
- Chiến lược đổi cửa giúp tăng gấp đôi khả năng trúng ô tô (từ $\frac{1}{3}$ lên $\frac{2}{3}$). Đây là minh chứng kinh điển cho thấy trực giác con người rất dễ bị đánh lừa trước các biến cố ngẫu nhiên!

---

### Chuyên đề 3: Biến cố hiếm và Thuyết "Thiên nga đen" (Nassim Nicholas Taleb)

Trong hàng thế kỷ, người phương Tây tin chắc rằng: *"Tất cả mọi con thiên nga đều có màu trắng"* — đây được xem là một biến cố chắc chắn $100\%$. Tuy nhiên, vào năm 1697, nhà thám hiểm Willem de Vlamingh đã đặt chân đến bờ biển Tây Úc và phát hiện ra những đàn thiên nga đen tuyền!

Một quan sát duy nhất đã đánh đổ niềm tin kéo dài hàng ngàn năm. Nhà tài chính Nassim Nicholas Taleb đã phát triển thành lý thuyết **"Thiên nga đen" (The Black Swan)**:
- Những biến cố ngỡ như là "không thể" hoặc xác suất cực kỳ nhỏ (như đại dịch toàn cầu, khủng hoảng tài chính bất ngờ, bùng nổ internet).
- Nhưng khi xảy ra, chúng mang lại những tác động khổng lồ thay đổi toàn bộ tiến trình lịch sử nhân loại.

---

### Chuyên đề 4: Ứng dụng biến cố trong Y học và Chẩn đoán bệnh dịch

Trong xét nghiệm y tế, các bác sĩ luôn phân tích hai biến cố:
1. **Dương tính giả (False Positive):** Người hoàn toàn khỏe mạnh nhưng kết quả xét nghiệm lại báo có bệnh.
2. **Âm tính giả (False Negative):** Người thực sự mang mầm bệnh nhưng kết quả lại báo an toàn.

Không có xét nghiệm nào là biến cố chắc chắn $100\%$. Bằng cách kết hợp xác suất của nhiều lần xét nghiệm độc lập, nền y tế hiện đại có thể giảm thiểu sai số xuống mức gần bằng $0$, cứu sống hàng triệu bệnh nhân mỗi năm.

---

### Chuyên đề 5: Máy phát số ngẫu nhiên giả (PRNG) trong Khoa học máy tính

Làm thế nào để máy tính — một cỗ máy thuần túy logic và máy móc — có thể tạo ra các biến cố ngẫu nhiên như trộn bài, đổ xí ngầu trong game hay tạo mật khẩu bảo mật?
Máy tính sử dụng các thuật toán gọi là **Bộ tạo số giả ngẫu nhiên (Pseudorandom Number Generators - PRNG)**. Chúng bắt đầu từ một con số mầm (seed) — thường lấy từ số mili-giây trên đồng hồ hệ thống hoặc chuyển động của con trỏ chuột — rồi áp dụng các phép tính đại số phức tạp để sinh ra dãy số trông hoàn toàn ngẫu nhiên.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 29: Làm quen với Biến cố",
  "questions": [
    {
      "question": "Trong các sự kiện sau, sự kiện nào là biến cố chắc chắn?",
      "options": [
        "Ngày mai Mặt Trời mọc ở hướng Đông",
        "Tung một đồng xu 3 lần đều được mặt Ngửa",
        "Tháng Hai năm sau có 31 ngày",
        "Gieo xúc xắc được mặt 6 chấm"
      ],
      "answer": 0,
      "hint": "Mặt Trời mọc hướng Đông là quy luật tự nhiên bất biến.",
      "explanation": "Trái Đất quay từ Tây sang Đông quanh trục của nó, nên Mặt Trời luôn mọc ở phía Đông. Đây là biến cố chắc chắn."
    },
    {
      "question": "Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây là biến cố không thể?",
      "options": [
        "Số chấm xuất hiện là số chia hết cho 5",
        "Số chấm xuất hiện lớn hơn 6",
        "Số chấm xuất hiện nhỏ hơn 6",
        "Số chấm xuất hiện là số lẻ"
      ],
      "answer": 1,
      "hint": "Xúc xắc 6 mặt chỉ có số chấm từ 1 đến 6.",
      "explanation": "Số chấm trên mặt xúc xắc thuộc tập $\\{1; 2; 3; 4; 5; 6\\}$. Do đó không bao giờ có thể xuất hiện mặt có số chấm lớn hơn 6. Đây là biến cố không thể."
    },
    {
      "question": "Một túi đựng 4 viên bi xanh, 4 viên bi đỏ và 4 viên bi vàng có cùng kích thước. Lấy ngẫu nhiên 1 viên bi. Biến cố 'Lấy được viên bi có màu xanh hoặc đỏ hoặc vàng' là:",
      "options": [
        "Biến cố ngẫu nhiên",
        "Biến cố không thể",
        "Biến cố chắc chắn",
        "Không thể xác định"
      ],
      "answer": 2,
      "hint": "Tất cả các viên bi trong túi chỉ gồm ba màu này.",
      "explanation": "Vì trong túi chỉ có bi xanh, bi đỏ và bi vàng, nên dù lấy viên bi nào ra thì nó cũng chắc chắn thuộc một trong ba màu đó. Đây là biến cố chắc chắn."
    },
    {
      "question": "Tung hai đồng xu cân đối đồng thời. Biến cố nào sau đây là biến cố ngẫu nhiên?",
      "options": [
        "Cả hai đồng xu đều xuất hiện mặt Ngửa",
        "Tổng số mặt sấp và ngửa xuất hiện luôn bằng 2",
        "Xuất hiện 3 mặt Ngửa",
        "Mỗi đồng xu đều có dạng hình tròn"
      ],
      "answer": 0,
      "hint": "Biến cố ngẫu nhiên có thể xảy ra hoặc không xảy ra.",
      "explanation": "Khi tung 2 đồng xu, các kết quả có thể là (S, S), (S, N), (N, S), (N, N). Biến cố 'Cả hai đều ngửa' có thể xảy ra (kết quả N, N) hoặc không xảy ra (ba kết quả còn lại), nên là biến cố ngẫu nhiên."
    },
    {
      "question": "Rút ngẫu nhiên 1 lá bài từ cỗ bài tú lơ khơ 52 lá. Số kết quả thuận lợi cho biến cố 'Rút được lá bài Át (A)' là:",
      "options": [
        "1",
        "2",
        "4",
        "13"
      ],
      "answer": 2,
      "hint": "Bộ bài có 4 chất: Bích, Chuồn (Tép), Rô, Cơ.",
      "explanation": "Bộ bài 52 lá có đúng 4 lá bài Át (Át bích, Át chuồn, Át rô, Át cơ). Vậy có 4 kết quả thuận lợi."
    },
    {
      "question": "Chọn ngẫu nhiên một số tự nhiên có một chữ số từ 0 đến 9. Biến cố nào sau đây có khả năng xảy ra cao nhất?",
      "options": [
        "Số được chọn là số nguyên tố",
        "Số được chọn là số chẵn",
        "Số được chọn lớn hơn 7",
        "Số được chọn là số chính phương"
      ],
      "answer": 1,
      "hint": "Đếm số kết quả thuận lợi của từng biến cố trong tập $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ gồm 10 số.",
      "explanation": "- Số nguyên tố: $\\{2, 3, 5, 7\\} \\implies 4$ số.\\n- Số chẵn: $\\{0, 2, 4, 6, 8\\} \\implies 5$ số.\\n- Lớn hơn 7: $\\{8, 9\\} \\implies 2$ số.\\n- Số chính phương: $\\{0, 1, 4, 9\\} \\implies 4$ số.\\nBiến cố 'chọn được số chẵn' có nhiều kết quả thuận lợi nhất (5 kết quả) nên có khả năng xảy ra cao nhất."
    },
    {
      "question": "Một hộp có 10 chiếc bút chì màu đen và 2 chiếc bút chì màu đỏ. Bạn Minh rút ngẫu nhiên 1 chiếc bút. Nhận xét nào sau đây là ĐÚNG?",
      "options": [
        "Minh chắc chắn rút được bút màu đen",
        "Khả năng rút được bút đen cao hơn bút đỏ",
        "Khả năng rút được bút đỏ cao hơn bút đen",
        "Hai biến cố rút được bút đen và bút đỏ là đồng khả năng"
      ],
      "answer": 1,
      "hint": "So sánh số lượng bút mỗi loại trong hộp: 10 > 2.",
      "explanation": "Vì số bút đen nhiều hơn số bút đỏ (10 > 2) nên khả năng rút trúng bút đen cao hơn khả năng rút trúng bút đỏ."
    },
    {
      "question": "Gieo ngẫu nhiên một con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố 'Số chấm xuất hiện là số chia cho 3 dư 1' là:",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "hint": "Kiểm tra các số từ 1 đến 6: $1 = 3 \\cdot 0 + 1$ và $4 = 3 \\cdot 1 + 1$.",
      "explanation": "Trong tập $\\{1; 2; 3; 4; 5; 6\\}$, các số chia cho 3 dư 1 là $1$ và $4$. Có đúng 2 kết quả thuận lợi."
    },
    {
      "question": "Biến cố nào sau đây có xác suất bằng 0?",
      "options": [
        "Biến cố chắc chắn",
        "Biến cố ngẫu nhiên",
        "Biến cố không thể",
        "Biến cố đồng khả năng"
      ],
      "answer": 2,
      "hint": "Biến cố không bao giờ có thể xảy ra thì xác suất bằng bao nhiêu?",
      "explanation": "Theo định nghĩa, biến cố không thể là biến cố không bao giờ xảy ra trong phép thử, do đó xác suất xảy ra của nó bằng 0."
    },
    {
      "question": "Hai biến cố được gọi là đồng khả năng khi:",
      "options": [
        "Cả hai đều là biến cố chắc chắn",
        "Khả năng xảy ra của chúng là hoàn toàn ngang nhau",
        "Một biến cố xảy ra thì biến cố kia không xảy ra",
        "Cả hai đều có xác suất bằng 0"
      ],
      "answer": 1,
      "hint": "Chữ 'đồng' mang ý nghĩa là bình đẳng, bằng nhau.",
      "explanation": "Hai biến cố được gọi là đồng khả năng nếu chúng có cơ hội hay khả năng xuất hiện ngang nhau trong phép thử."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Trong một cuộc thi bốc thăm may mắn có $100$ phiếu được đánh số từ $1$ đến $100$. Người tham gia bốc ngẫu nhiên một phiếu.
Hãy phân loại các biến cố sau:
a) $A$: "Phiếu bốc được có số ghi chia hết cho 10".
b) $B$: "Phiếu bốc được có số ghi là số tự nhiên có không quá 3 chữ số".
c) $C$: "Phiếu bốc được có số ghi là số tròn trăm lớn hơn 200".
d) $D$: "Phiếu bốc được có hai chữ số giống nhau".

### Bài tập 2:
Gieo đồng thời hai con xúc xắc 6 mặt cân đối, một con màu xanh và một con màu đỏ.
a) Có bao nhiêu kết quả có thể xảy ra cho phép thử này?
b) Liệt kê các kết quả thuận lợi cho biến cố: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 8".
c) Biến cố "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 13" là biến cố gì? Vì sao?

### Bài tập 3:
Một lớp học có $20$ học sinh nam và $20$ học sinh nữ. Thầy giáo gọi ngẫu nhiên một học sinh lên bảng kiểm tra bài cũ.
a) Biến cố "Học sinh được gọi là nam" và biến cố "Học sinh được gọi là nữ" có phải là hai biến cố đồng khả năng không? Vì sao?
b) Nếu lớp có $22$ học sinh nữ và $18$ học sinh nam thì khả năng gọi bạn nào cao hơn?
