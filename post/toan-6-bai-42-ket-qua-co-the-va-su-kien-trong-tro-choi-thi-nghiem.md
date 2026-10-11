---
title: 'Toán 6 Bài 42: Kết quả có thể và Sự kiện trong trò chơi, thí nghiệm - Lý thuyết & 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 6 Bài 42 Kết quả có thể và sự kiện trong trò chơi, thí nghiệm: không gian biến cố, 3 loại sự kiện (chắc chắn, không thể, có thể), kết quả thuận lợi, 5 chuyên đề nâng cao HSG và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Xác suất
  - Kết quả có thể
  - Sự kiện
  - Kết nối tri thức
grade: 6
---

# Bài 42. Kết quả có thể và Sự kiện trong trò chơi, thí nghiệm

Trong suốt các chương học trước, chúng ta đã quen thuộc với những bài toán có kết quả hoàn toàn xác định: $2 + 3$ luôn luôn bằng $5$, diện tích hình vuông cạnh $4\text{ cm}$ luôn là $16\text{ cm}^2$, hai đường thẳng song song thì không bao giờ cắt nhau. Đó là thế giới của **tính tất định**.

Tuy nhiên, cuộc sống xung quanh chúng ta chứa đầy những tình huống mà kết quả xảy ra phụ thuộc vào sự ngẫu nhiên:
- Trước một trận bóng đá, trọng tài tung đồng xu để quyết định đội nào chọn sân. Ta có biết trước mặt nào sẽ xuất hiện không?
- Khi quay một chiếc nón kỳ diệu hay gieo một quân xúc xắc trong trò chơi cá ngựa, con số nào sẽ hiện lên?
- Khi bốc ngẫu nhiên một lá thăm trúng thưởng, liệu bạn có chắc chắn trúng giải đặc biệt?

Dù không thể biết chính xác trước điều gì sẽ xảy ra, nhưng bằng tư duy toán học sắc bén, chúng ta hoàn toàn có thể **liệt kê đầy đủ tất cả các khả năng có thể xảy ra**, từ đó phân loại và đánh giá tính chất của từng sự việc. Đó chính là viên gạch đầu tiên xây dựng nên ngành **Lý thuyết Xác suất** — một trong những ngành toán học ứng dụng quan trọng bậc nhất của kỷ nguyên trí tuệ nhân tạo và khoa học dữ liệu hiện đại!

Bài học này sẽ giúp các em làm chủ các khái niệm nền tảng: **phép thử nghiệm**, **kết quả có thể**, **sự kiện** (chắc chắn, không thể, có thể) và **kết quả thuận lợi**, cùng với $5$ chuyên đề bồi dưỡng học sinh giỏi độc bản nâng cao tư duy logic vượt bậc.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 42: KẾT QUẢ CÓ THỂ & SỰ KIỆN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép thử & Kết quả có thể</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Hành động không biết trước kết quả chính xác.<br>• Tập hợp tất cả các kết quả có khả năng xảy ra.<br>• Phải liệt kê đủ, không trùng lặp, không bỏ sót.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Sự kiện & Kết quả thuận lợi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Một sự việc có thể xảy ra hoặc không xảy ra.<br>• Kết quả làm sự kiện xảy ra gọi là <strong>kết quả thuận lợi</strong>.<br>• Sự kiện xảy ra khi và chỉ khi kết quả nhận được là thuận lợi.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ba loại sự kiện</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• <strong>Chắc chắn:</strong> Luôn luôn xảy ra (mọi kết quả đều thuận lợi).<br>• <strong>Không thể:</strong> Không bao giờ xảy ra (0 kết quả thuận lợi).<br>• <strong>Có thể:</strong> Tùy kết quả (có một số kết quả thuận lợi).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ năng tư duy xác suất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Sơ đồ cây (Tree diagram) cho thí nghiệm nhiều bước.<br>• Kỹ thuật đếm phần bù (Biến cố đối).<br>• Phân tích tính cân đối trong trò chơi công bằng.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Trực giác về sự may rủi quanh ta (5–7 phút)

Hãy cùng khởi động não bộ qua 5 tình huống quan sát đời thực:

**Câu 1:** Trước khi bắt đầu trận chung kết bóng đá khối 6, trọng tài lấy một đồng xu kim loại có hai mặt: một mặt in Quốc huy (kí hiệu $H$) và một mặt in số mệnh giá (kí hiệu $M$). Khi trọng tài tung đồng xu lên cao và bắt lấy, có những kết quả nào có thể xuất hiện ở mặt trên? Trọng tài có thể khẳng định chắc chắn $100\%$ đồng xu sẽ ra mặt $H$ trước khi tung không?

*Trả lời:* Có $2$ kết quả có thể xuất hiện: mặt $H$ hoặc mặt $M$. Không ai có thể khẳng định chắc chắn trước mặt nào sẽ xuất hiện vì kết quả hoàn toàn ngẫu nhiên.

**Câu 2:** Một hộp quà bí mật chứa $4$ tấm thẻ bài ma thuật in hình các nhân vật: Long, Lân, Quy, Phụng. Bạn Nam nhắm mắt và rút ngẫu nhiên một tấm thẻ. Nam có thể rút được những tấm thẻ nào? Nam có thể rút được thẻ hình "Hổ" không?

*Trả lời:* Nam có thể rút được một trong $4$ tấm thẻ: Long, Lân, Quy, hoặc Phụng. Nam hoàn toàn không thể rút được thẻ hình "Hổ" vì trong hộp không có thẻ này.

**Câu 3:** Bạn Mai có một con xúc xắc chuẩn hình lập phương có $6$ mặt, các mặt ghi số chấm lần lượt là $1, 2, 3, 4, 5, 6$. Khi gieo xúc xắc, mặt trên cùng có thể xuất hiện những số chấm nào? Số chấm có thể bằng $7$ hoặc $0$ được không?

*Trả lời:* Mặt trên cùng có thể xuất hiện một trong các số chấm: $1, 2, 3, 4, 5$ hoặc $6$. Không thể xuất hiện mặt $7$ chấm hoặc $0$ chấm vì con xúc xắc không có các mặt đó.

**Câu 4:** Trong một chiếc bình thủy tinh chỉ đựng toàn những viên kẹo màu tím. Bạn An thò tay vào bình lấy ra một chiếc kẹo.
- Sự việc "An lấy được chiếc kẹo màu tím" có chắc chắn xảy ra không?
- Sự việc "An lấy được chiếc kẹo màu cam" có thể xảy ra không?

*Trả lời:* Sự việc lấy được kẹo màu tím là **chắc chắn xảy ra** (vì trong bình chỉ toàn kẹo tím). Sự việc lấy được kẹo màu cam là **không thể xảy ra** (vì không có chiếc kẹo cam nào trong bình).

**Câu 5:** Em hãy kể tên $2$ trò chơi dân gian hoặc trò chơi giải trí có yếu tố may rủi mà em từng tham gia. Theo em, vì sao trò chơi đó lại hấp dẫn người chơi?

*Trả lời:* Ví dụ trò gieo quân cờ cá ngựa hoặc trò chơi ô ăn quan bốc sỏi ngẫu nhiên. Trò chơi hấp dẫn vì người chơi không biết trước kết quả, luôn hồi hộp chờ đợi sự xuất hiện của may mắn kết hợp với chiến thuật thông minh.

---

## I. Lý thuyết cốt lõi

### 1. Phép thử nghiệm ngẫu nhiên và Các kết quả có thể

> [!NOTE]
> **Định nghĩa:**
> - Những hành động, thao tác như tung đồng xu, gieo con xúc xắc, quay vòng quay, rút một lá thăm từ hộp,... mà ta **không thể biết trước chính xác kết quả nào sẽ xảy ra**, được gọi là **phép thử nghiệm** (hay phép thử ngẫu nhiên).
> - **Các kết quả có thể** là tập hợp tất cả những kết quả có khả năng xảy ra của phép thử nghiệm đó.
> - Khi liệt kê các kết quả có thể, ta phải kể **đầy đủ, không bỏ sót và không lặp lại**, ngăn cách nhau bởi dấu chấm phẩy (`;`).

**Ví dụ 1:** Tung một đồng xu có hai mặt: mặt Hình hoa sen ($S$) và mặt Chữ số mệnh giá ($C$).
- Phép thử nghiệm: Tung đồng xu một lần.
- Các kết quả có thể: Mặt hoa sen ($S$); Mặt chữ số ($C$).
- Tổng số kết quả có thể là: $2$.

**Ví dụ 2:** Một vòng quay may mắn hình tròn được chia thành $5$ hình quạt đều nhau ghi các số: $10, 20, 30, 40, 50$. Bạn Bình quay vòng quay một lần và quan sát số mà mũi tên cố định chỉ vào khi vòng quay dừng lại.
- Phép thử nghiệm: Quay vòng quay may mắn một lần.
- Các kết quả có thể: Mũi tên chỉ vào số $10$; số $20$; số $30$; số $40$; số $50$.
- Tổng số kết quả có thể là: $5$.

---

### 2. Sự kiện và Kết quả thuận lợi

Khi thực hiện một phép thử nghiệm, ta thường quan tâm đến việc một phát biểu hay một điều gì đó có diễn ra hay không. Phát biểu đó được gọi là một **sự kiện** (trong toán học nâng cao còn gọi là *biến cố*).

> [!IMPORTANT]
> **Quy tắc xác định sự kiện xảy ra hay không:**
> Sau khi thực hiện phép thử nghiệm và quan sát kết quả thu được:
> - Nếu kết quả nhận được **phù hợp** với điều kiện mà sự kiện mô tả, ta nói **sự kiện xảy ra**.
> - Nếu kết quả nhận được **không phù hợp** với điều kiện đó, ta nói **sự kiện không xảy ra**.
> - Những kết quả làm cho sự kiện xảy ra được gọi là **các kết quả thuận lợi** cho sự kiện đó.

**Ví dụ 3:** Một chiếc hộp kín chứa $6$ quả cầu đánh số từ $1$ đến $6$. Bạn Châu rút ngẫu nhiên một quả cầu và xem số ghi trên quả cầu.
- Các kết quả có thể: $1; 2; 3; 4; 5; 6$.
- Xét sự kiện $E$: *"Quả cầu lấy ra ghi số chia hết cho 3"*.
  + Nếu rút được quả số $1$: không chia hết cho $3 \implies$ sự kiện $E$ không xảy ra.
  + Nếu rút được quả số $2$: không chia hết cho $3 \implies$ sự kiện $E$ không xảy ra.
  + Nếu rút được quả số $3$: chia hết cho $3 \implies$ sự kiện $E$ xảy ra!
  + Nếu rút được quả số $4$: không chia hết cho $3 \implies$ sự kiện $E$ không xảy ra.
  + Nếu rút được quả số $5$: không chia hết cho $3 \implies$ sự kiện $E$ không xảy ra.
  + Nếu rút được quả số $6$: chia hết cho $3 \implies$ sự kiện $E$ xảy ra!
- Như vậy, các kết quả thuận lợi cho sự kiện $E$ là: **$3$ và $6$**.
- Số kết quả thuận lợi cho sự kiện $E$ là: $2$.

---

### 3. Phân loại ba loại sự kiện: Chắc chắn — Không thể — Có thể

So với tập hợp tất cả các kết quả có thể xảy ra của phép thử nghiệm, một sự kiện luôn thuộc vào một trong ba loại sau:

| Loại sự kiện | Định nghĩa bản chất | Số kết quả thuận lợi | Ví dụ (khi gieo xúc xắc 6 mặt) |
| :--- | :--- | :--- | :--- |
| **Sự kiện chắc chắn** | Luôn luôn xảy ra trong mọi trường hợp thử nghiệm. | Bằng tất cả số kết quả có thể ($6/6$) | *"Mặt trên có số chấm nhỏ hơn 10"* |
| **Sự kiện không thể** | Không bao giờ xảy ra trong bất kỳ lần thử nghiệm nào. | Bằng $0$ (không có kết quả nào thỏa mãn) | *"Mặt trên xuất hiện 8 chấm"* |
| **Sự kiện có thể** | Có thể xảy ra hoặc không xảy ra, tùy thuộc vào kết quả cụ thể. | Lớn hơn $0$ và nhỏ hơn tổng số kết quả | *"Mặt trên xuất hiện số chẵn"* ($2, 4, 6$) |

> [!TIP]
> **Mẹo nhận biết nhanh và chính xác:**
> - Sự kiện **chắc chắn**: Kiểm tra xem *mọi kết quả có thể* có đều làm sự kiện đúng không. Nếu đúng hết $\implies$ Chắc chắn.
> - Sự kiện **không thể**: Kiểm tra xem có kết quả nào thỏa mãn không. Nếu tìm khắp tập kết quả mà *không có ai thỏa mãn* $\implies$ Không thể.
> - Sự kiện **có thể**: Có ít nhất $1$ kết quả làm nó xảy ra và có ít nhất $1$ kết quả làm nó không xảy ra $\implies$ Có thể.

---

### 4. Những bẫy tư duy học sinh rất dễ nhầm lẫn

> [!WARNING]
> **Các sai lầm kinh điển cần tránh tuyệt đối:**
> 1. **Nhầm lẫn giữa "Hiếm khi xảy ra" và "Không thể xảy ra":**
>    - Ví dụ: Rút $1$ lá bài trong cỗ bài $52$ lá để được lá Át Bích. Dù khả năng rút được rất nhỏ, nhưng đây vẫn là sự kiện **có thể xảy ra**, tuyệt đối không được kết luận là "không thể xảy ra".
>    - "Không thể xảy ra" nghĩa là cơ hội bằng số không tuyệt đối ($0\%$), hoàn toàn không tồn tại khả năng đó (như rút lá bài số $15$ trong bộ bài tây).
> 2. **Bỏ sót kết quả khi liệt kê:**
>    - Khi gieo hai đồng xu, nhiều bạn chỉ kể $3$ kết quả là: "cùng sấp", "cùng ngửa", "một sấp một ngửa". Điều này sai sót về mặt bản chất vì trường hợp "một sấp một ngửa" gồm hai kết quả phân biệt: $(S; N)$ và $(N; S)$.
> 3. **Nhầm giữa "kết quả thuận lợi" và "số lượng kết quả thuận lợi":**
>    - Khi đề bài yêu cầu *chỉ ra các kết quả thuận lợi*, ta phải liệt kê cụ thể các phần tử: ví dụ $2; 4; 6$.
>    - Khi đề bài hỏi *có bao nhiêu kết quả thuận lợi*, ta trả lời con số: có $3$ kết quả thuận lợi.

---

## II. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Liệt kê các kết quả có thể của một phép thử nghiệm

**Phương pháp giải:**
1. Xác định rõ đối tượng tham gia và hành động được thực hiện (tung, gieo, bốc, rút, quay,...).
2. Xác định đặc điểm kết quả mà ta quan tâm (màu sắc, con số, chữ cái, hình dạng,...).
3. Liệt kê toàn bộ các kết quả theo một trật tự hợp lý (tăng dần, theo bảng chữ cái hoặc phân nhóm) để không sót và không trùng.
4. Đếm và kết luận tổng số kết quả có thể.

---

#### Bài toán mẫu 1
Một túi vải chứa $5$ thẻ bài hình học được ghi tên các hình: Hình vuông, Hình chữ nhật, Hình thoi, Hình thang cân, Hình bình hành. Bạn Lan nhắm mắt rút ngẫu nhiên một thẻ bài.
1. Hãy liệt kê tất cả các kết quả có thể về tên hình ghi trên tấm thẻ.
2. Có tất cả bao nhiêu kết quả có thể xảy ra?

**Lời giải:**
1. Khi rút ngẫu nhiên một tấm thẻ, thẻ lấy ra có thể mang tên một trong các hình có trong túi. Các kết quả có thể là:
   - Thẻ ghi *Hình vuông*;
   - Thẻ ghi *Hình chữ nhật*;
   - Thẻ ghi *Hình thoi*;
   - Thẻ ghi *Hình thang cân*;
   - Thẻ ghi *Hình bình hành*.
2. Phép thử nghiệm có tất cả $5$ kết quả có thể.

---

#### Luyện tập 1.1
Một vòng quay may mắn có kim chỉ được chia làm $6$ phần bằng nhau tô các màu: Xanh dương, Xanh lá, Đỏ, Vàng, Cam, Tím. Bạn Minh quay vòng quay một lần. Hãy liệt kê tất cả các kết quả có thể về màu sắc của ô mà kim dừng lại.

**Lời giải:**
Khi quay vòng quay, kim có thể dừng lại ở bất kỳ ô màu nào trong $6$ ô. Các kết quả có thể là:
- Ô màu Xanh dương;
- Ô màu Xanh lá;
- Ô màu Đỏ;
- Ô màu Vàng;
- Ô màu Cam;
- Ô màu Tím.
Tổng cộng có $6$ kết quả có thể.

---

#### Luyện tập 1.2
Bạn Hùng gieo một con xúc xắc $8$ mặt (bát diện đều) được đánh số từ $1$ đến $8$ trên các mặt.
1. Hãy liệt kê các kết quả có thể về số xuất hiện ở mặt trên cùng.
2. Có bao nhiêu kết quả có thể xảy ra?

**Lời giải:**
1. Mặt trên cùng của xúc xắc có thể xuất hiện một trong các số từ $1$ đến $8$. Các kết quả có thể là: $1; 2; 3; 4; 5; 6; 7; 8$.
2. Có tất cả $8$ kết quả có thể xảy ra.

---

#### Luyện tập 1.3
Trong giờ hoạt động trải nghiệm, bạn lớp trưởng đựng trong hộp kín $4$ mảnh giấy ghi tên $4$ tổ: Tổ 1, Tổ 2, Tổ 3, Tổ 4 để bốc thăm thứ tự thuyết trình. Thầy giáo gọi bạn đầu tiên lên bốc $1$ mảnh giấy.
1. Liệt kê các kết quả có thể của lần bốc thăm này.
2. Có thể xảy ra kết quả "Tổ 5" được chọn không? Vì sao?

**Lời giải:**
1. Các kết quả có thể là: Tổ 1; Tổ 2; Tổ 3; Tổ 4.
2. Không thể xảy ra kết quả "Tổ 5" vì trong hộp chỉ có các phiếu của Tổ 1, 2, 3, 4; không có phiếu nào ghi Tổ 5.

---

### Dạng 2: Xác định sự kiện xảy ra khi nào và Liệt kê các kết quả thuận lợi

**Phương pháp giải:**
1. Bước 1: Liệt kê không gian tất cả các kết quả có thể của phép thử.
2. Bước 2: Đọc kỹ điều kiện của sự kiện đã cho.
3. Bước 3: Thử từng kết quả có thể vào điều kiện của sự kiện. Kết quả nào thỏa mãn điều kiện thì đó chính là kết quả thuận lợi.
4. Bước 4: Viết danh sách các kết quả thuận lợi và kết luận: sự kiện xảy ra khi nhận được một trong các kết quả này.

---

#### Bài toán mẫu 2
Một hộp có $10$ tấm thẻ đánh số từ $11$ đến $20$. Lấy ngẫu nhiên một tấm thẻ. Xét các sự kiện sau:
- $A$: *"Rút được thẻ ghi số chia hết cho 5"*;
- $B$: *"Rút được thẻ ghi số là số nguyên tố"*.
Với mỗi sự kiện, hãy chỉ ra các kết quả thuận lợi và cho biết sự kiện xảy ra khi nào.

**Lời giải:**
Các kết quả có thể khi rút một tấm thẻ là các số: $11; 12; 13; 14; 15; 16; 17; 18; 19; 20$.
1. Xét sự kiện $A$: Các số chia hết cho $5$ trong dãy trên là $15$ và $20$.
   - Các kết quả thuận lợi cho $A$ là: $15$ và $20$.
   - Sự kiện $A$ xảy ra khi rút được thẻ số $15$ hoặc số $20$.
2. Xét sự kiện $B$: Các số nguyên tố trong dãy trên là $11; 13; 17; 19$.
   - Các kết quả thuận lợi cho $B$ là: $11; 13; 17; 19$.
   - Sự kiện $B$ xảy ra khi rút được một trong bốn thẻ: số $11$, số $13$, số $17$ hoặc số $19$.

---

#### Luyện tập 2.1
Gieo một con xúc xắc chuẩn $6$ mặt một lần. Chỉ ra các kết quả thuận lợi cho mỗi sự kiện sau:
1. $E_1$: *"Số chấm xuất hiện ở mặt trên là số lẻ"*;
2. $E_2$: *"Số chấm xuất hiện ở mặt trên lớn hơn 2 và nhỏ hơn 6"*;
3. $E_3$: *"Số chấm xuất hiện là ước nguyên dương của 6"*.

**Lời giải:**
Các kết quả có thể là: $1; 2; 3; 4; 5; 6$.
1. Các số lẻ là $1; 3; 5$. Do đó các kết quả thuận lợi cho $E_1$ là: $1; 3; 5$.
2. Các số lớn hơn $2$ và nhỏ hơn $6$ là $3; 4; 5$. Do đó các kết quả thuận lợi cho $E_2$ là: $3; 4; 5$.
3. Các ước nguyên dương của $6$ là $1; 2; 3; 6$. Do đó các kết quả thuận lợi cho $E_3$ là: $1; 2; 3; 6$.

---

#### Luyện tập 2.2
Một hộp kín chứa $8$ viên bi có kích thước giống nhau, trong đó có $3$ viên bi đỏ (được đánh số Đ1, Đ2, Đ3), $3$ viên bi xanh (X1, X2, X3) và $2$ viên bi vàng (V1, V2). Bạn Nam bốc ngẫu nhiên một viên bi.
1. Có bao nhiêu kết quả có thể xảy ra về viên bi được bốc?
2. Sự kiện *"Nam bốc được viên bi có màu xanh hoặc màu vàng"* gồm những kết quả thuận lợi nào?

**Lời giải:**
1. Mỗi viên bi là một kết quả phân biệt, do đó có tất cả $8$ kết quả có thể xảy ra: Đ1; Đ2; Đ3; X1; X2; X3; V1; V2.
2. Các viên bi có màu xanh hoặc màu vàng là: X1, X2, X3, V1, V2.
   Vậy các kết quả thuận lợi cho sự kiện là: X1; X2; X3; V1; V2 (gồm $5$ kết quả thuận lợi).

---

#### Luyện tập 2.3
Chọn ngẫu nhiên một số tự nhiên có một chữ số (từ $0$ đến $9$).
1. Liệt kê các kết quả có thể của phép thử.
2. Sự kiện *"Số được chọn là bình phương của một số tự nhiên"* có những kết quả thuận lợi nào?

**Lời giải:**
1. Các số tự nhiên có một chữ số là: $0; 1; 2; 3; 4; 5; 6; 7; 8; 9$. Có tất cả $10$ kết quả có thể.
2. Các số là bình phương của một số tự nhiên trong tập hợp trên gồm:
   $$0 = 0^2, \quad 1 = 1^2, \quad 4 = 2^2, \quad 9 = 3^2.$$
   Do đó, các kết quả thuận lợi cho sự kiện trên là: $0; 1; 4; 9$ (gồm $4$ kết quả thuận lợi).

---

### Dạng 3: Phân loại sự kiện: Chắc chắn, Không thể hay Có thể

**Phương pháp giải:**
1. Xác định tập các kết quả có thể của phép thử nghiệm.
2. Đối chiếu nội dung sự kiện với tập kết quả có thể:
   - Nếu **mọi kết quả có thể** đều làm sự kiện xảy ra $\implies$ **Sự kiện chắc chắn**.
   - Nếu **không có bất kỳ kết quả nào** làm sự kiện xảy ra $\implies$ **Sự kiện không thể**.
   - Nếu **có một số kết quả làm sự kiện xảy ra, và có một số kết quả không làm sự kiện xảy ra** $\implies$ **Sự kiện có thể**.

---

#### Bài toán mẫu 3
Gieo một con xúc xắc chuẩn $6$ mặt. Phân loại từng sự kiện sau thành sự kiện chắc chắn, sự kiện không thể hoặc sự kiện có thể:
1. $M_1$: *"Mặt xuất hiện có số chấm là một số tự nhiên khác 0"*;
2. $M_2$: *"Mặt xuất hiện có số chấm bằng 7"*;
3. $M_3$: *"Mặt xuất hiện có số chấm chia hết cho 2"*;
4. $M_4$: *"Mặt xuất hiện có số chấm nhỏ hơn 10"*.

**Lời giải:**
Tập hợp các kết quả có thể là: $\{1; 2; 3; 4; 5; 6\}$.
1. Các số $1, 2, 3, 4, 5, 6$ đều là số tự nhiên khác $0$. Vì mọi kết quả đều thỏa mãn nên $M_1$ là **sự kiện chắc chắn**.
2. Con xúc xắc chỉ có các mặt từ $1$ đến $6$ chấm, không có mặt nào $7$ chấm. Do không có kết quả nào thỏa mãn nên $M_2$ là **sự kiện không thể**.
3. Sự kiện xảy ra khi gieo được mặt $2, 4, 6$ và không xảy ra khi gieo được mặt $1, 3, 5$. Vì vậy $M_3$ là **sự kiện có thể**.
4. Cả $6$ mặt đều có số chấm từ $1$ đến $6$, tất cả đều nhỏ hơn $10$. Vì mọi kết quả đều thỏa mãn nên $M_4$ là **sự kiện chắc chắn**.

---

#### Luyện tập 3.1
Một khay bánh có $4$ chiếc bánh ngọt vị dâu và $6$ chiếc bánh ngọt vị sô-cô-la. Bạn An nhắm mắt lấy ngẫu nhiên một chiếc bánh. Mỗi sự kiện sau thuộc loại nào?
1. $K_1$: *"An lấy được chiếc bánh ngọt vị matcha"*;
2. $K_2$: *"An lấy được chiếc bánh ngọt vị dâu"*;
3. $K_3$: *"An lấy được chiếc bánh có vị dâu hoặc vị sô-cô-la"*.

**Lời giải:**
1. Trên khay không có chiếc bánh vị matcha nào, nên $K_1$ là **sự kiện không thể**.
2. Trên khay có bánh vị dâu và cũng có bánh vị sô-cô-la. An có thể lấy trúng bánh dâu (nếu may mắn) hoặc bánh sô-cô-la, nên $K_2$ là **sự kiện có thể**.
3. Mọi chiếc bánh trên khay đều hoặc là vị dâu hoặc là vị sô-cô-la. Bất kể lấy chiếc bánh nào cũng thỏa mãn điều kiện này, nên $K_3$ là **sự kiện chắc chắn**.

---

#### Luyện tập 3.2
Bạn Bình khẳng định: *"Vì ngày mai trời mưa hay không mưa chưa ai biết trước, nên sự kiện ngày mai Mặt Trời mọc ở hướng Tây là sự kiện có thể xảy ra"*. Em có đồng ý với bạn Bình không? Vì sao?

**Lời giải:**
Em hoàn toàn không đồng ý với bạn Bình.
Theo quy luật tự nhiên bất biến của Trái Đất, Mặt Trời luôn mọc ở hướng Đông và lặn ở hướng Tây. Do đó, sự kiện "Mặt Trời mọc ở hướng Tây" là **sự kiện không thể xảy ra** (xác suất xảy ra bằng $0$). Bạn Bình đã nhầm lẫn giữa sự kiện thời tiết ngẫu nhiên và quy luật tự nhiên tất định.

---

#### Luyện tập 3.3
Cho tập hợp số $S = \{3; 6; 9; 12; 15; 18\}$. Chọn ngẫu nhiên một số từ tập $S$. Xét tính chất (chắc chắn, không thể, có thể) của các sự kiện sau:
1. *"Số được chọn chia hết cho 3"*;
2. *"Số được chọn là số lẻ"*;
3. *"Số được chọn chia hết cho 5"*;
4. *"Số được chọn là số chẵn chia hết cho 7"*.

**Lời giải:**
1. Mọi phần tử trong $S$ đều là bội của $3$ ($3, 6, 9, 12, 15, 18$). Do đó, sự kiện *"Số được chọn chia hết cho 3"* là **sự kiện chắc chắn**.
2. Trong $S$ có các số lẻ ($3, 9, 15$) và các số chẵn ($6, 12, 18$). Do đó, sự kiện *"Số được chọn là số lẻ"* là **sự kiện có thể**.
3. Trong $S$ có số $15$ chia hết cho $5$, còn các số khác thì không. Do đó, sự kiện *"Số được chọn chia hết cho 5"* là **sự kiện có thể** (với $1$ kết quả thuận lợi là $15$).
4. Các số chẵn trong $S$ là $6, 12, 18$; không có số nào chia hết cho $7$. Do đó, sự kiện *"Số được chọn là số chẵn chia hết cho 7"* là **sự kiện không thể**.

---

### Dạng 4: Đếm số kết quả thuận lợi cho một sự kiện

**Phương pháp giải:**
1. Liệt kê hoặc xác định quy luật các kết quả có thể của phép thử nghiệm.
2. Tìm tất cả các kết quả thỏa mãn điều kiện của sự kiện đã cho.
3. Sử dụng công thức đếm số phần tử của dãy số cách đều nếu dãy số dài:
   $$N = \frac{x_{\max} - x_{\min}}{d} + 1$$
   *(với $x_{\max}$ là số hạng cuối, $x_{\min}$ là số hạng đầu, $d$ là khoảng cách giữa hai số liên tiếp).*
4. Kết luận số lượng kết quả thuận lợi.

---

#### Bài toán mẫu 4
Một hộp đựng $25$ tấm thẻ giống nhau được đánh số từ $1$ đến $25$. Lấy ngẫu nhiên một tấm thẻ. Đếm số kết quả thuận lợi cho mỗi sự kiện sau:
1. $A$: *"Rút được thẻ ghi số chia hết cho 4"*;
2. $B$: *"Rút được thẻ ghi số có hai chữ số và chữ số tận cùng là 5"*;
3. $C$: *"Rút được thẻ ghi số nguyên tố"*.

**Lời giải:**
Tập hợp các số trên thẻ là: $\{1; 2; 3; \dots; 25\}$, gồm $25$ kết quả có thể.
1. Các số chia hết cho $4$ từ $1$ đến $25$ là: $4; 8; 12; 16; 20; 24$.
   Số kết quả thuận lợi cho $A$ là: $6$ kết quả.
2. Các số có hai chữ số tận cùng là $5$ trong khoảng từ $1$ đến $25$ là: $15; 25$.
   Số kết quả thuận lợi cho $B$ là: $2$ kết quả.
3. Các số nguyên tố từ $1$ đến $25$ là: $2; 3; 5; 7; 11; 13; 17; 19; 23$.
   Số kết quả thuận lợi cho $C$ là: $9$ kết quả.

---

#### Luyện tập 4.1
Một túi có $30$ quả bóng được đánh số thứ tự từ $1$ đến $30$. Rút ngẫu nhiên một quả bóng.
1. Có bao nhiêu kết quả thuận lợi cho sự kiện *"Quả bóng lấy ra ghi số chia hết cho cả 2 và 3"*?
2. Có bao nhiêu kết quả thuận lợi cho sự kiện *"Quả bóng lấy ra ghi số chính phương"*?

**Lời giải:**
1. Một số chia hết cho cả $2$ và $3$ khi và chỉ khi số đó chia hết cho $6$.
   Các bội của $6$ từ $1$ đến $30$ là: $6; 12; 18; 24; 30$.
   Vậy có tất cả $5$ kết quả thuận lợi cho sự kiện này.
2. Các số chính phương từ $1$ đến $30$ là:
   $$1^2 = 1, \quad 2^2 = 4, \quad 3^2 = 9, \quad 4^2 = 16, \quad 5^2 = 25.$$
   Vậy có tất cả $5$ kết quả thuận lợi cho sự kiện rút được số chính phương.

---

#### Luyện tập 4.2
Tung một đồng xu hai lần liên tiếp. Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa. Kết quả mỗi lần tung được ghi theo thứ tự (lần 1, lần 2).
1. Hãy liệt kê tất cả các kết quả có thể của phép thử hai lần tung.
2. Có bao nhiêu kết quả thuận lợi cho sự kiện *"Cả hai lần tung đều xuất hiện cùng một mặt"*?
3. Có bao nhiêu kết quả thuận lợi cho sự kiện *"Có ít nhất một lần xuất hiện mặt ngửa"*?

**Lời giải:**
1. Mỗi lần tung có $2$ khả năng ($S$ hoặc $N$). Cả hai lần tung liên tiếp có tất cả $2 \times 2 = 4$ kết quả có thể, gồm:
   $$(S; S), \quad (S; N), \quad (N; S), \quad (N; N).$$
2. Sự kiện *"Cả hai lần tung đều xuất hiện cùng một mặt"* gồm các kết quả thuận lợi: $(S; S)$ và $(N; N)$.
   Vậy có $2$ kết quả thuận lợi.
3. Sự kiện *"Có ít nhất một lần xuất hiện mặt ngửa"* xảy ra khi có $1$ lần ngửa hoặc cả $2$ lần ngửa. Các kết quả thuận lợi là:
   $$(S; N), \quad (N; S), \quad (N; N).$$
   Vậy có $3$ kết quả thuận lợi.

---

## III. 5 Chuyên đề bồi dưỡng học sinh giỏi & Olympic Toán

Để bồi dưỡng năng lực toán học chuyên sâu và chuẩn bị cho các kỳ thi học sinh giỏi, kỳ thi Toán quốc tế (SASMO, AMC 8, Kangaroo), chúng ta cùng khám phá $5$ chuyên đề nâng cao về không gian biến cố và phân tích sự kiện ngẫu nhiên:

---

### Chuyên đề 1: Quy tắc nhân và Sơ đồ hình cây (Tree Diagram) trong phép thử nhiều bước

Khi một phép thử nghiệm được tiến hành qua nhiều giai đoạn nối tiếp nhau (hoặc thực hiện đồng thời nhiều vật thể), việc liệt kê mò mẫm rất dễ dẫn tới bỏ sót. **Quy tắc nhân** và **Sơ đồ hình cây** là công cụ toán học kinh điển giúp bao quát trọn vẹn không gian kết quả.

> [!NOTE]
> **Quy tắc nhân xác định số kết quả có thể:**
> Nếu một phép thử gồm $2$ hành động liên tiếp:
> - Hành động thứ nhất có $m$ kết quả có thể;
> - Ứng với mỗi kết quả của hành động thứ nhất, hành động thứ hai có $n$ kết quả có thể;
> 
> Khi đó, phép thử hai hành động có tất cả $m \times n$ kết quả có thể.

#### Bài toán Olympic 1
Bạn Hải gieo một con xúc xắc $6$ mặt (các mặt đánh số $1, 2, 3, 4, 5, 6$), sau đó tung một đồng xu có hai mặt Sấp ($S$) và Ngửa ($N$). Kết quả được ghi lại dưới dạng cặp (số chấm; mặt đồng xu), ví dụ $(3; S)$.
1. Sử dụng quy tắc nhân để tính tổng số kết quả có thể.
2. Vẽ sơ đồ hình cây mô tả không gian kết quả.
3. Có bao nhiêu kết quả thuận lợi cho sự kiện: *"Xúc xắc ra số nguyên tố và đồng xu ra mặt ngửa"*?

**Lời giải:**
1. Hành động $1$ (gieo xúc xắc) có $6$ kết quả có thể: $\{1; 2; 3; 4; 5; 6\}$.
   Hành động $2$ (tung đồng xu) có $2$ kết quả có thể: $\{S; N\}$.
   Theo quy tắc nhân, tổng số kết quả có thể của phép thử là:
   $$6 \times 2 = 12.$$
   (Có tất cả $12$ kết quả có thể xảy ra).

2. Sơ đồ hình cây được mô tả phân nhánh như sau:
   - Từ nút gốc rẽ ra $6$ nhánh ứng với các số chấm: $1, 2, 3, 4, 5, 6$.
   - Từ mỗi nhánh số chấm lại rẽ ra $2$ nhánh nhỏ ứng với mặt đồng xu: $S$ và $N$.
   Tập hợp đầy đủ $12$ kết quả là:
   $$\begin{aligned}
   &(1; S), (1; N), (2; S), (2; N), (3; S), (3; N), \\
   &(4; S), (4; N), (5; S), (5; N), (6; S), (6; N).
   \end{aligned}$$

3. Các số nguyên tố trên con xúc xắc là: $2, 3, 5$.
   Đồng xu phải ra mặt ngửa: $N$.
   Các kết quả thuận lợi cho sự kiện là:
   $$(2; N), \quad (3; N), \quad (5; N).$$
   Vậy có tất cả $3$ kết quả thuận lợi.

---

### Chuyên đề 2: Biến cố đối (Complementary Event) và Kỹ thuật đếm phần bù

Trong nhiều bài toán đếm phức tạp chứa các cụm từ *"có ít nhất một"*, *"không đồng thời"*, việc đếm trực tiếp từng trường hợp thuận lợi sẽ mất nhiều thời gian và dễ nhầm lẫn. Khi đó, phương pháp **đếm phần bù** thông qua **biến cố đối** là chìa khóa giải quyết bài toán chỉ trong vài dòng.

> [!IMPORTANT]
> **Nguyên lý Biến cố đối:**
> Với một sự kiện $E$, sự kiện $\overline{E}$ được gọi là **biến cố đối** của $E$ nếu $\overline{E}$ xảy ra khi và chỉ khi $E$ không xảy ra.
> Khi đó:
> $$n(E) = n(\Omega) - n(\overline{E})$$
> trong đó $n(E)$ là số kết quả thuận lợi cho sự kiện $E$, $n(\Omega)$ là tổng số kết quả có thể, và $n(\overline{E})$ là số kết quả thuận lợi cho biến cố đối $\overline{E}$.

#### Bài toán Olympic 2
Tung $3$ đồng xu cân đối đồng chất cùng một lúc.
1. Có tất cả bao nhiêu kết quả có thể xảy ra?
2. Có bao nhiêu kết quả thuận lợi cho sự kiện $H$: *"Có ít nhất một đồng xu xuất hiện mặt sấp"*?

**Lời giải:**
1. Mỗi đồng xu khi tung có $2$ kết quả có thể ($S$ hoặc $N$).
   Vì có $3$ đồng xu tung đồng thời, theo quy tắc nhân, tổng số kết quả có thể là:
   $$2 \times 2 \times 2 = 8.$$
   (Bao gồm $8$ kết quả: $SSS, SSN, SNS, SNN, NSS, NSN, NNS, NNN$).

2. Xét biến cố đối $\overline{H}$ của sự kiện $H$:
   Biến cố $H$ là *"Có ít nhất một đồng xu xuất hiện mặt sấp"*.
   Do đó, biến cố đối $\overline{H}$ là: *"Không có đồng xu nào ra mặt sấp"*, nghĩa là *"Cả 3 đồng xu đều ra mặt ngửa"*.
   Chỉ có duy nhất $1$ kết quả thuận lợi cho $\overline{H}$, đó là: $(N; N; N)$.
   Áp dụng kỹ thuật đếm phần bù, số kết quả thuận lợi cho $H$ là:
   $$n(H) = 8 - 1 = 7.$$
   (Giải thích: Trong $8$ khả năng, chỉ trừ duy nhất khả năng $NNN$ là không có mặt sấp, cả $7$ khả năng còn lại đều có ít nhất một mặt sấp).

---

### Chuyên đề 3: Phép thử chọn vật không hoàn lại và Tổ hợp các cặp không thứ tự

Khi lấy đồng thời hai hay nhiều vật từ một tập hợp, thứ tự xuất hiện của các vật **không đóng vai trò phân biệt** (ví dụ: bốc được cặp $\{$bi Đỏ, bi Xanh$\}$ hoàn toàn trùng khớp với $\{$bi Xanh, bi Đỏ$\}$).

> [!TIP]
> **Công thức đếm số cặp chọn từ $n$ phần tử khác nhau:**
> Nếu chọn cùng lúc $2$ vật từ một nhóm gồm $n$ vật phân biệt, số kết quả có thể là:
> $$\frac{n \times (n - 1)}{2}.$$

#### Bài toán Olympic 3
Trong một chiếc hộp có $5$ viên ngọc bích được đánh số từ $1$ đến $5$. Bạn Nam thò tay vào hộp lấy ra cùng một lúc $2$ viên ngọc bích.
1. Liệt kê tất cả các kết quả có thể (mỗi kết quả viết dưới dạng tập hợp $\{a; b\}$ với $a < b$). Có tất cả bao nhiêu kết quả có thể?
2. Sự kiện $T$: *"Tổng hai số ghi trên hai viên ngọc là một số chẵn"* có bao nhiêu kết quả thuận lợi? Hãy liệt kê cụ thể.

**Lời giải:**
1. Vì lấy cùng một lúc $2$ viên ngọc nên thứ tự không quan trọng. Ta liệt kê các cặp $\{a; b\}$ theo thứ tự tăng dần của $a$:
   - Với viên thứ nhất là $1$: $\{1; 2\}, \{1; 3\}, \{1; 4\}, \{1; 5\}$ ($4$ cặp);
   - Với viên thứ nhất là $2$: $\{2; 3\}, \{2; 4\}, \{2; 5\}$ ($3$ cặp);
   - Với viên thứ nhất là $3$: $\{3; 4\}, \{3; 5\}$ ($2$ cặp);
   - Với viên thứ nhất là $4$: $\{4; 5\}$ ($1$ cặp).
   Tổng số kết quả có thể là:
   $$4 + 3 + 2 + 1 = 10.$$
   (Hoặc tính theo công thức: $\frac{5 \times 4}{2} = 10$ kết quả).

2. Tổng của hai số là số chẵn khi và chỉ khi:
   - Cả hai số cùng là số lẻ; hoặc
   - Cả hai số cùng là số chẵn.
   
   Trong hộp có các số lẻ là $\{1; 3; 5\}$ và các số chẵn là $\{2; 4\}$.
   - Trường hợp hai số cùng lẻ: $\{1; 3\}$ (tổng $4$), $\{1; 5\}$ (tổng $6$), $\{3; 5\}$ (tổng $8$) $\implies 3$ kết quả.
   - Trường hợp hai số cùng chẵn: $\{2; 4\}$ (tổng $6$) $\implies 1$ kết quả.
   
   Vậy số kết quả thuận lợi cho sự kiện $T$ là:
   $$3 + 1 = 4.$$
   Các kết quả thuận lợi cụ thể là: $\{1; 3\}, \{1; 5\}, \{3; 5\}, \{2; 4\}$.

---

### Chuyên đề 4: Biến cố ghép (Hợp và Giao) và Nguyên lý bù trừ (Inclusion-Exclusion)

Khi xét một sự kiện có dạng *"Điều kiện A HOẶC Điều kiện B"*, nhiều học sinh thường cộng trực tiếp số kết quả thỏa mãn $A$ với số kết quả thỏa mãn $B$. Điều này dẫn tới sai lầm vì những kết quả thỏa mãn **cả hai điều kiện** đã bị đếm trùng hai lần!

> [!IMPORTANT]
> **Nguyên lý bù trừ cho hai sự kiện $A$ và $B$:**
> Gọi $n(A)$ là số kết quả thuận lợi cho $A$, $n(B)$ là số kết quả thuận lợi cho $B$, $n(A \cap B)$ là số kết quả thuận lợi cho cả $A$ và $B$.
> Khi đó, số kết quả thuận lợi cho sự kiện "$A$ hoặc $B$" (kí hiệu $A \cup B$) là:
> $$n(A \cup B) = n(A) + n(B) - n(A \cap B).$$

#### Bài toán Olympic 4
Chọn ngẫu nhiên một số tự nhiên từ $1$ đến $60$. Hỏi có bao nhiêu kết quả thuận lợi cho sự kiện: *"Số được chọn chia hết cho 3 HOẶC chia hết cho 5"*?

**Lời giải:**
Gọi số được chọn là $x$ ($1 \le x \le 60$).
- Số lượng số chia hết cho $3$ từ $1$ đến $60$ là: $n(A) = 60 : 3 = 20$.
- Số lượng số chia hết cho $5$ từ $1$ đến $60$ là: $n(B) = 60 : 5 = 12$.
- Số lượng số chia hết cho cả $3$ và $5$ (tức chia hết cho $15$) là:
  $$n(A \cap B) = 60 : 15 = 4.$$
  (Bốn số đó là: $15, 30, 45, 60$).

Áp dụng nguyên lý bù trừ, số kết quả thuận lợi cho sự kiện *"chia hết cho 3 hoặc chia hết cho 5"* là:
$$n(A \cup B) = 20 + 12 - 4 = 28.$$
Vậy có $28$ kết quả thuận lợi.

---

### Chuyên đề 5: Khái niệm "Trò chơi công bằng" (Fair Game) và Đánh giá sự kiện

Trong lý thuyết trò chơi và xác suất học, một trò chơi được gọi là **công bằng (Fair Game)** nếu mỗi người chơi đều có **số lượng kết quả thuận lợi để chiến thắng bằng nhau**. Nếu một bên có nhiều kết quả thuận lợi hơn, trò chơi đó bị thiên vị (Unfair Game).

#### Bài toán Olympic 5
An và Bình chơi một trò chơi với hai con xúc xắc chuẩn $6$ mặt. Mỗi lượt, An gieo đồng thời cả hai con xúc xắc và tính **tích số chấm** của hai mặt trên cùng:
- Nếu tích số chấm là **số chẵn**, An được $1$ điểm;
- Nếu tích số chấm là **số lẻ**, Bình được $1$ điểm.

Hỏi trò chơi này có công bằng không? Vì sao? Nếu không công bằng, người nào có lợi thế hơn?

**Lời giải:**
1. Mỗi con xúc xắc có $6$ kết quả có thể ($1, 2, 3, 4, 5, 6$).
   Khi gieo hai con xúc xắc, tổng số kết quả có thể xảy ra là:
   $$6 \times 6 = 36.$$

2. Xét điều kiện để **tích số chấm là số lẻ** (điều kiện để Bình ghi điểm):
   Tích của hai số là số lẻ khi và chỉ khi **cả hai con xúc xắc đều ra số lẻ**.
   - Con xúc xắc thứ nhất có $3$ mặt lẻ: $\{1; 3; 5\}$;
   - Con xúc xắc thứ hai có $3$ mặt lẻ: $\{1; 3; 5\}$.
   Theo quy tắc nhân, số kết quả để cả hai mặt đều lẻ là:
   $$3 \times 3 = 9.$$
   (Có $9$ kết quả thuận lợi cho Bình).

3. Xét điều kiện để **tích số chấm là số chẵn** (điều kiện để An ghi điểm):
   Tích là số chẵn khi có ít nhất một mặt chẵn.
   Số kết quả thuận lợi cho An là:
   $$36 - 9 = 27.$$
   (Có $27$ kết quả thuận lợi cho An).

4. **Kết luận:**
   Trò chơi này **hoàn toàn không công bằng**. An có tới $27$ kết quả thuận lợi để ghi điểm, trong khi Bình chỉ có vẻn vẹn $9$ kết quả thuận lợi (số cơ hội thắng của An gấp $3$ lần của Bình). Do đó, An có lợi thế áp đảo hoàn toàn!

---

## IV. Bài tập trắc nghiệm tương tác (10 Quiz chuẩn hóa)

Mỗi câu hỏi dưới đây được thiết kế độc lập, có phản hồi giải thích chi tiết giúp các em tự kiểm tra mức độ thấu hiểu bài học.

```quiz
question: 'Khi gieo một con xúc xắc chuẩn 6 mặt một lần, số kết quả có thể xảy ra về số chấm ở mặt trên là bao nhiêu?'
options:
  - '2 kết quả'
  - '4 kết quả'
  - '6 kết quả'
  - '12 kết quả'
answer: 3
explanation: 'Mặt trên của con xúc xắc chuẩn có thể xuất hiện 1; 2; 3; 4; 5 hoặc 6 chấm. Do đó có tất cả 6 kết quả có thể xảy ra.'
type: choice
```

```quiz
question: 'Một hộp đựng 4 quả bóng có màu: Đỏ, Xanh, Vàng, Trắng. Lấy ngẫu nhiên một quả bóng. Sự kiện "Lấy được quả bóng màu Đen" là loại sự kiện nào?'
options:
  - 'Sự kiện chắc chắn'
  - 'Sự kiện không thể'
  - 'Sự kiện có thể'
  - 'Không xác định được'
answer: 2
explanation: 'Trong hộp chỉ có bóng Đỏ, Xanh, Vàng, Trắng; hoàn toàn không có bóng màu Đen. Do đó sự kiện lấy được bóng màu Đen không bao giờ xảy ra, đây là sự kiện không thể.'
type: choice
```

```quiz
question: 'Tung một đồng xu một lần. Sự kiện "Mặt xuất hiện là mặt Sấp hoặc mặt Ngửa" thuộc loại sự kiện nào?'
options:
  - 'Sự kiện chắc chắn'
  - 'Sự kiện có thể'
  - 'Sự kiện không thể'
  - 'Sự kiện ngẫu nhiên'
answer: 1
explanation: 'Đồng xu chỉ có hai mặt là Sấp hoặc Ngửa. Khi tung đồng xu, mặt xuất hiện chắc chắn phải là một trong hai mặt này. Vì mọi kết quả đều làm sự kiện xảy ra nên đây là sự kiện chắc chắn.'
type: choice
```

```quiz
question: 'Một hộp đựng các tấm thẻ ghi số từ 1 đến 10. Rút ngẫu nhiên một tấm thẻ. Sự kiện "Rút được thẻ ghi số nguyên tố" có bao nhiêu kết quả thuận lợi?'
options:
  - '3 kết quả'
  - '4 kết quả'
  - '5 kết quả'
  - '6 kết quả'
answer: 2
explanation: 'Các số nguyên tố từ 1 đến 10 là 2, 3, 5, 7. Có tất cả 4 kết quả thuận lợi (lưu ý số 1 không phải là số nguyên tố).'
type: choice
```

```quiz
question: 'Gieo một con xúc xắc 6 mặt một lần. Sự kiện nào sau đây là sự kiện KHÔNG THỂ xảy ra?'
options:
  - 'Số chấm xuất hiện lớn hơn 5'
  - 'Số chấm xuất hiện chia hết cho 2'
  - 'Số chấm xuất hiện là số chia hết cho 7'
  - 'Số chấm xuất hiện là số lẻ'
answer: 3
explanation: 'Các kết quả có thể là 1, 2, 3, 4, 5, 6. Không có số nào trong tập hợp này chia hết cho 7. Do đó sự kiện số chấm chia hết cho 7 là sự kiện không thể.'
type: choice
```

```quiz
question: 'Tung một đồng xu 2 lần liên tiếp. Có tất cả bao nhiêu kết quả có thể xảy ra?'
options:
  - '2 kết quả'
  - '3 kết quả'
  - '4 kết quả'
  - '6 kết quả'
answer: 3
explanation: 'Mỗi lần tung có 2 kết quả (S hoặc N). Hai lần tung liên tiếp có 2 x 2 = 4 kết quả có thể, gồm: (S; S), (S; N), (N; S), (N; N).'
type: choice
```

```quiz
question: 'Một túi vải đựng 15 tấm thẻ đánh số từ 1 đến 15. Rút ngẫu nhiên một tấm thẻ. Số kết quả thuận lợi cho sự kiện "Số trên thẻ là bội của 4" là bao nhiêu?'
options:
  - '2 kết quả'
  - '3 kết quả'
  - '4 kết quả'
  - '5 kết quả'
answer: 2
explanation: 'Các bội của 4 nằm trong khoảng từ 1 đến 15 là: 4; 8; 12. Vậy có đúng 3 kết quả thuận lợi.'
type: choice
```

```quiz
question: 'Trong một giải cờ vua có 4 bạn tham gia: An, Bình, Cường, Dũng. Ban tổ chức chọn ngẫu nhiên một bạn làm đội trưởng. Sự kiện "Bạn được chọn có tên bắt đầu bằng chữ cái C" gồm những kết quả thuận lợi nào?'
options:
  - 'An, Bình'
  - 'Chỉ có Cường'
  - 'Cường và Dũng'
  - 'Không có kết quả nào'
answer: 2
explanation: 'Trong 4 bạn An, Bình, Cường, Dũng, chỉ có duy nhất bạn Cường có tên bắt đầu bằng chữ C. Vậy chỉ có 1 kết quả thuận lợi là Cường.'
type: choice
```

```quiz
question: 'Một hộp có 3 quả bóng xanh và 2 quả bóng đỏ. Lấy đồng thời 2 quả bóng. Sự kiện nào sau đây là sự kiện CHẮC CHẮN?'
options:
  - 'Lấy được 2 quả bóng màu xanh'
  - 'Lấy được ít nhất 1 quả bóng màu xanh'
  - 'Không lấy được quả bóng màu đỏ nào'
  - 'Lấy được ít nhất 1 quả bóng có màu xanh hoặc màu đỏ'
answer: 4
explanation: 'Vì trong hộp chỉ có bóng xanh và bóng đỏ, nên bất kỳ quả bóng nào lấy ra cũng có màu xanh hoặc màu đỏ. Do đó, sự kiện lấy được ít nhất 1 quả bóng có màu xanh hoặc đỏ là chắc chắn xảy ra. (Lưu ý: phương án 2 không chắc chắn vì vẫn có thể lấy được 2 quả bóng đỏ).'
type: choice
```

```quiz
question: 'Gieo đồng thời hai con xúc xắc chuẩn 6 mặt. Sự kiện "Tổng số chấm của hai mặt trên cùng bằng 13" thuộc loại sự kiện nào?'
options:
  - 'Sự kiện có thể'
  - 'Sự kiện chắc chắn'
  - 'Sự kiện không thể'
  - 'Sự kiện ngẫu nhiên'
answer: 3
explanation: 'Số chấm lớn nhất của mỗi con xúc xắc là 6, do đó tổng số chấm lớn nhất của hai con xúc xắc chỉ có thể đạt 6 + 6 = 12. Tổng số chấm không bao giờ có thể bằng 13. Đây là sự kiện không thể.'
type: choice
```

---

## V. Đề kiểm tra 15 phút đánh giá năng lực

Dưới đây là $2$ đề kiểm tra $15$ phút được biên soạn độc bản với ma trận chuẩn kiến thức kĩ năng, kèm thang điểm chi tiết $10$ điểm.

### Đề số 1

#### Phần I. Trắc nghiệm khách quan (4 điểm — Mỗi câu 1 điểm)

**Câu 1:** Một vòng quay có $8$ ô số ghi từ $1$ đến $8$. Quay vòng quay một lần. Số kết quả có thể xảy ra khi mũi tên dừng lại là:
- A. $4$
- B. $6$
- C. $8$
- D. $16$

**Câu 2:** Một hộp chỉ đựng toàn viên bi màu vàng. Lấy ngẫu nhiên một viên bi. Sự kiện *"Lấy được viên bi màu vàng"* là:
- A. Sự kiện có thể
- B. Sự kiện chắc chắn
- C. Sự kiện không thể
- D. Không xác định

**Câu 3:** Gieo một con xúc xắc $6$ mặt. Sự kiện *"Số chấm ở mặt trên là số chẵn lớn hơn 4"* gồm những kết quả nào?
- A. $2; 4; 6$
- B. $4; 6$
- C. Chỉ có $6$
- D. $5; 6$

**Câu 4:** Rút ngẫu nhiên một thẻ trong hộp có các thẻ từ $1$ đến $20$. Sự kiện *"Rút được thẻ ghi số chia hết cho 6"* có bao nhiêu kết quả thuận lợi?
- A. $2$
- B. $3$
- C. $4$
- D. $5$

#### Phần II. Tự luận (6 điểm)

**Bài 1 (3 điểm):** Một túi đựng $7$ tấm thẻ bài được đánh số: $2, 3, 5, 7, 8, 9, 10$. Rút ngẫu nhiên một tấm thẻ.
1. Liệt kê tất cả các kết quả có thể xảy ra của phép thử. *(1,0 điểm)*
2. Chỉ ra các kết quả thuận lợi cho sự kiện: *"Rút được tấm thẻ ghi số nguyên tố"*. *(1,0 điểm)*
3. Phân loại sự kiện sau thuộc loại nào (chắc chắn, không thể, có thể): *"Rút được tấm thẻ ghi số nhỏ hơn 1"*. *(1,0 điểm)*

**Bài 2 (3 điểm):** Bạn Minh tung một đồng xu cân đối hai lần liên tiếp (kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa).
1. Liệt kê tất cả các kết quả có thể xảy ra dưới dạng cặp (lần 1; lần 2). Có tất cả bao nhiêu kết quả? *(1,5 điểm)*
2. Sự kiện *"Cả hai lần tung xuất hiện hai mặt khác nhau"* có bao nhiêu kết quả thuận lợi? Kể tên các kết quả đó. *(1,5 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 1

#### Trắc nghiệm (4 điểm)
- Câu 1: **C** ($1$ điểm)
- Câu 2: **B** ($1$ điểm)
- Câu 3: **C** ($1$ điểm) — Số chẵn lớn hơn $4$ trong các số từ $1$ đến $6$ chỉ có duy nhất số $6$.
- Câu 4: **B** ($1$ điểm) — Các số chia hết cho $6$ là $6; 12; 18$ (gồm $3$ kết quả).

#### Tự luận (6 điểm)
**Bài 1:**
1. Các kết quả có thể xảy ra là: $2; 3; 5; 7; 8; 9; 10$. *(1,0 điểm)*
2. Các số nguyên tố trong túi là: $2; 3; 5; 7$.
   Vậy các kết quả thuận lợi cho sự kiện là: $2; 3; 5; 7$. *(1,0 điểm)*
3. Các số trên thẻ đều từ $2$ trở lên, không có số nào nhỏ hơn $1$.
   Do đó, sự kiện *"Rút được tấm thẻ ghi số nhỏ hơn 1"* là **sự kiện không thể**. *(1,0 điểm)*

**Bài 2:**
1. Các kết quả có thể xảy ra gồm $4$ kết quả:
   $$(S; S), \quad (S; N), \quad (N; S), \quad (N; N).$$ *(1,5 điểm)*
2. Sự kiện *"Cả hai lần tung xuất hiện hai mặt khác nhau"* gồm các kết quả thuận lợi:
   $$(S; N), \quad (N; S).$$
   Vậy có tất cả $2$ kết quả thuận lợi. *(1,5 điểm)*

---

### Đề số 2

#### Phần I. Trắc nghiệm khách quan (4 điểm — Mỗi câu 1 điểm)

**Câu 1:** Một túi quà có $3$ gói bánh quy, $4$ gói kẹo và $2$ hộp sữa. Bạn An nhặt ngẫu nhiên một món đồ. Số kết quả có thể về loại món đồ An lấy được là:
- A. $9$ loại
- B. $3$ loại (bánh quy, kẹo, sữa)
- C. $2$ loại
- D. $1$ loại

**Câu 2:** Gieo một con xúc xắc $6$ mặt. Sự kiện nào sau đây là sự kiện CHẮC CHẮN?
- A. Mặt xuất hiện có số chấm chia hết cho $2$
- B. Mặt xuất hiện có số chấm nhỏ hơn $7$
- C. Mặt xuất hiện có số chấm lớn hơn $1$
- D. Mặt xuất hiện có $6$ chấm

**Câu 3:** Chọn ngẫu nhiên một chữ cái trong từ "HOC SINH". Số kết quả có thể xảy ra về chữ cái được chọn (sau khi loại bỏ chữ cái lặp lại) là:
- A. $7$ kết quả
- B. $6$ kết quả
- C. $8$ kết quả
- D. $5$ kết quả

**Câu 4:** Một hộp có các viên bi đánh số từ $1$ đến $12$. Rút một viên bi. Sự kiện *"Viên bi rút được ghi số là ước của 12"* có bao nhiêu kết quả thuận lợi?
- A. $4$ kết quả
- B. $5$ kết quả
- C. $6$ kết quả
- D. $7$ kết quả

#### Phần II. Tự luận (6 điểm)

**Bài 1 (3 điểm):** Gieo một con xúc xắc chuẩn $6$ mặt một lần.
1. Hãy chỉ ra các kết quả thuận lợi cho sự kiện: *"Số chấm ở mặt trên là số chia hết cho 3"*. *(1,0 điểm)*
2. Cho biết mỗi sự kiện sau đây thuộc loại nào (chắc chắn, không thể, có thể):
   - $S_1$: *"Số chấm ở mặt trên là số chẵn"*. *(1,0 điểm)*
   - $S_2$: *"Số chấm ở mặt trên lớn hơn 0 và nhỏ hơn hoặc bằng 6"*. *(1,0 điểm)*

**Bài 2 (3 điểm):** Một lớp học có $3$ bạn nam (Nam, Cường, Dũng) và $2$ bạn nữ (Hoa, Lan). Cô giáo muốn chọn ngẫu nhiên một cặp gồm $1$ bạn nam và $1$ bạn nữ để làm ban cán sự lớp.
1. Hãy liệt kê tất cả các kết quả có thể của cặp đôi được chọn dưới dạng (Bạn nam, Bạn nữ). Có bao nhiêu kết quả có thể? *(1,5 điểm)*
2. Sự kiện *"Cặp đôi được chọn có bạn Hoa"* có bao nhiêu kết quả thuận lợi? Kể tên các kết quả đó. *(1,5 điểm)*

---

### Hướng dẫn chấm & Thang điểm Đề số 2

#### Trắc nghiệm (4 điểm)
- Câu 1: **B** ($1$ điểm) — Đề bài hỏi về *loại món đồ*, chỉ có $3$ loại: bánh quy, kẹo, sữa.
- Câu 2: **B** ($1$ điểm) — Mọi mặt của xúc xắc ($1, 2, 3, 4, 5, 6$) đều nhỏ hơn $7$.
- Câu 3: **B** ($1$ điểm) — Các chữ cái khác nhau trong cụm "HOC SINH" là: H, O, C, S, I, N (chữ H lặp lại $2$ lần), gồm $6$ chữ cái phân biệt.
- Câu 4: **C** ($1$ điểm) — Các ước của $12$ từ $1$ đến $12$ là: $1, 2, 3, 4, 6, 12$ (gồm $6$ số).

#### Tự luận (6 điểm)
**Bài 1:**
1. Các số chia hết cho $3$ từ $1$ đến $6$ là $3$ và $6$.
   Vậy các kết quả thuận lợi là: $3$ và $6$. *(1,0 điểm)*
2. Phân loại:
   - $S_1$: Sự kiện xảy ra khi gieo được mặt $2, 4, 6$ và không xảy ra khi gieo được $1, 3, 5$. Đây là **sự kiện có thể**. *(1,0 điểm)*
   - $S_2$: Mọi mặt từ $1$ đến $6$ đều lớn hơn $0$ và $\le 6$. Đây là **sự kiện chắc chắn**. *(1,0 điểm)*

**Bài 2:**
1. Liệt kê các cặp (Bạn nam, Bạn nữ):
   - (Nam, Hoa); (Nam, Lan);
   - (Cường, Hoa); (Cường, Lan);
   - (Dũng, Hoa); (Dũng, Lan).
   
   Có tất cả $3 \times 2 = 6$ kết quả có thể. *(1,5 điểm)*
2. Sự kiện *"Cặp đôi được chọn có bạn Hoa"* gồm các kết quả thuận lợi:
   (Nam, Hoa); (Cường, Hoa); (Dũng, Hoa).
   
   Vậy có tất cả $3$ kết quả thuận lợi. *(1,5 điểm)*
