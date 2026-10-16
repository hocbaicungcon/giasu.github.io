---
title: 'Ôn tập Chương 8: Làm quen với biến cố và xác suất của biến cố - Toàn diện Lý thuyết, Ma trận Phương pháp và 5 Chuyên đề Nâng cao'
description: 'Hệ thống hóa toàn bộ kiến thức Chương 8 Toán 7: Biến cố chắc chắn, không thể, ngẫu nhiên, công thức xác suất cổ điển P = k/n, mô hình tung đồng xu, gieo xúc xắc, chọn bóng kèm 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Xác suất và thống kê
  - Biến cố
  - Xác suất của biến cố
  - Ôn tập chương 8
  - Kết nối tri thức
grade: 7
---

# Ôn tập Chương 8. Làm quen với Biến cố và Xác suất của Biến cố

Có một câu danh ngôn nổi tiếng của triết gia và nhà toán học Pháp Pierre-Simon Laplace: *"Về bản chất, lý thuyết xác suất chẳng qua chỉ là nhận thức thông thường được quy thành các phép tính toán học"*. Trong cuộc sống hiện đại ngập tràn thông tin, khả năng phân tích sự không chắc chắn, lượng hóa rủi ro và ra quyết định dựa trên dữ liệu là kỹ năng tư duy sống còn của thế kỷ XXI.

Chương 8 đã mở ra cánh cửa dẫn chúng ta vào vương quốc kỳ thú của Xác suất học qua hai bài học nền tảng:
1. **Bài 29:** Làm quen với các khái niệm thực nghiệm, phân loại rạch ròi 3 trạng thái của biến cố: **Chắc chắn** ($P = 1$), **Không thể** ($P = 0$) và **Ngẫu nhiên** ($0 < P < 1$), nhận diện tính đồng khả năng trong các trò chơi đối xứng.
2. **Bài 30:** Thiết lập công thức xác suất cổ điển $P(E) = \frac{k}{n}$, đo lường chính xác cơ hội xảy ra của các sự kiện trong trò chơi gieo xúc xắc, tung đồng xu, rút thẻ, bốc thăm may mắn và vòng quay số học.

Bài tổng ôn tập này sẽ giúp các em xâu chuỗi toàn bộ kiến thức Chương 8 thành một bản đồ tư duy sắc nét, làm chủ các kỹ thuật đếm kết quả thuận lợi và tự tin giải quyết trọn vẹn mọi bài thi!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC TỔNG ÔN CHƯƠNG 8: BIẾN CỐ & XÁC SUẤT</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">1. Phân loại Biến cố</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Chắc chắn:</strong> Luôn xảy ra ($P = 1$).<br>• <strong>Không thể:</strong> Không bao giờ xảy ra ($P = 0$).<br>• <strong>Ngẫu nhiên:</strong> Có thể xảy ra ($0 < P < 1$).<br>• Biến cố đồng khả năng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">2. Công thức Xác suất Cổ điển</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">$$P(E) = \frac{k}{n}$$<br>• $k$: Số kết quả thuận lợi.<br>• $n$: Tổng số kết quả có thể (đồng khả năng).<br>• Luôn rút gọn phân số tối giản.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Các Mô hình Thí nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tung đồng xu:</strong> $n = 2$ ($S, N$); 2 xu: $n = 4$.<br>• <strong>Gieo xúc xắc 6 mặt:</strong> $n = 6$.<br>• <strong>Hộp bóng/thẻ:</strong> $n = \text{Tổng số vật phẩm}$.<br>• <strong>Vòng quay số:</strong> $n = \text{Số hình quạt}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật Đếm nâng cao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Liệt kê có thứ tự dạng bảng / sơ đồ cây.<br>• Quy tắc biến cố đối: $P(E) = 1 - P(\bar{E})$.<br>• Đánh giá tính công bằng của trò chơi.<br>• Mối quan hệ xác suất lý thuyết vs thực nghiệm.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (3 phút)

1. Gieo một con xúc xắc 6 mặt. Xác suất để số chấm xuất hiện nhỏ hơn 7 là bao nhiêu? Biến cố này thuộc loại biến cố nào?
2. Trong một hộp có $6$ viên bi xanh và $4$ viên bi đỏ. Lấy ngẫu nhiên $1$ viên. Xác suất lấy được viên bi màu vàng là bao nhiêu?
3. Tung một đồng xu 2 lần. Có tất cả bao nhiêu kết quả có thể xảy ra?
4. Nếu biến cố $A$ có xác suất $P(A) = 0{,}7$ thì biến cố $A$ không xảy ra có xác suất là bao nhiêu?
5. Một trò chơi có công bằng không nếu người chơi A có xác suất thắng là $\frac{1}{3}$, còn người chơi B có xác suất thắng là $\frac{2}{3}$?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $P = 1$ ($100\%$). Đây là **biến cố chắc chắn** (vì mọi mặt đều từ 1 đến 6).
> 2. $P = 0$. Đây là **biến cố không thể** (trong hộp không có viên bi vàng nào).
> 3. $n = 2 \times 2 = 4$ kết quả: $(S, S), (S, N), (N, S), (N, N)$.
> 4. $P(\bar{A}) = 1 - 0{,}7 = 0{,}3$.
> 5. **Không công bằng** (vì người chơi B có cơ hội thắng cao gấp đôi người chơi A).

---

## I. Bảng So sánh và Tổng hợp Lý thuyết Cốt lõi

| Khái niệm | Định nghĩa toán học | Giá trị xác suất $P$ | Ví dụ điển hình |
| :--- | :--- | :---: | :--- |
| **Biến cố chắc chắn** | Biến cố luôn xảy ra trong mọi lần thực hiện phép thử | $P = 1$ ($100\%$) | Gieo xúc xắc 6 mặt ra số chấm $\ge 1$. |
| **Biến cố không thể** | Biến cố không bao giờ xảy ra trong phép thử | $P = 0$ ($0\%$) | Rút 1 lá thăm từ hộp số $1 \to 10$ được số âm. |
| **Biến cố ngẫu nhiên** | Biến cố có thể xảy ra hoặc không xảy ra | $0 < P < 1$ | Tung đồng xu xuất hiện mặt Ngửa ($P = \frac{1}{2}$). |
| **Biến cố đồng khả năng** | Các biến cố có cơ hội xảy ra ngang bằng nhau | $P(A) = P(B)$ | Xuất hiện mặt Sấp và mặt Ngửa của đồng xu cân đối. |
| **Biến cố đối** | Biến cố "Biến cố $E$ không xảy ra", kí hiệu $\bar{E}$ | $P(\bar{E}) = 1 - P(E)$ | $E$: "Bắn trúng bia" $\to \bar{E}$: "Bắn trượt bia". |

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Phân loại biến cố và giải thích bản chất

**Phương pháp giải:**
- Xác định không gian các kết quả có thể xảy ra của phép thử.
- Đối chiếu điều kiện của biến cố: Nếu xảy ra $100\% \to$ Chắc chắn; nếu $0\% \to$ Không thể; nếu phụ thuộc kết quả cụ thể $\to$ Ngẫu nhiên.

---

#### Bài toán 1:
Một tổ học sinh gồm $5$ bạn nam (Nam, Bình, Cường, Dũng, Giang) và $4$ bạn nữ (Hoa, Lan, Mai, Nga). Thầy giáo chọn ngẫu nhiên một bạn làm tổ trưởng.
Hãy phân loại các biến cố sau:
- $A$: "Bạn được chọn có tên bắt đầu bằng chữ cái H".
- $B$: "Bạn được chọn là học sinh dưới 20 tuổi".
- $C$: "Bạn được chọn là một bạn nữ có tên Nam".
- $D$: "Bạn được chọn là một bạn nam".

**Lời giải:**

- **Biến cố $A$:** Trong tổ chỉ có bạn Hoa có tên bắt đầu bằng chữ H. Nếu thầy chọn bạn Hoa thì $A$ xảy ra; nếu chọn các bạn khác thì $A$ không xảy ra. $\implies A$ là **biến cố ngẫu nhiên**.
- **Biến cố $B$:** Mọi học sinh lớp 7 đều trong độ tuổi khoảng $12 - 13$ tuổi, chắc chắn đều dưới 20 tuổi. Bất kể chọn bạn nào thì biến cố $B$ cũng xảy ra. $\implies B$ là **biến cố chắc chắn**.
- **Biến cố $C$:** Bạn Nam trong tổ là học sinh nam, trong 4 bạn nữ (Hoa, Lan, Mai, Nga) không có ai tên Nam. Biến cố $C$ không bao giờ xảy ra. $\implies C$ là **biến cố không thể**.
- **Biến cố $D$:** Trong tổ có cả nam và nữ. Nếu chọn trúng 1 trong 5 bạn nam thì $D$ xảy ra; chọn trúng bạn nữ thì $D$ không xảy ra. $\implies D$ là **biến cố ngẫu nhiên**.

---

### Dạng 2: Tính xác suất bằng phương pháp liệt kê không gian mẫu

**Phương pháp giải:**
1. Liệt kê toàn bộ các kết quả có thể của phép thử $\implies$ Tìm $n$.
2. Liệt kê các kết quả thỏa mãn điều kiện biến cố $\implies$ Tìm $k$.
3. Tính xác suất: $P = \frac{k}{n}$.

---

#### Bài toán 2:
Gieo đồng thời hai con xúc xắc 6 mặt cân đối (một con màu trắng, một con màu đen). Tính xác suất của các biến cố sau:
a) $E$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 7".
b) $F$: "Hai con xúc xắc xuất hiện số chấm bằng nhau".
c) $G$: "Tích số chấm xuất hiện trên hai con xúc xắc là một số lẻ".

**Lời giải:**

Mỗi con xúc xắc có $6$ kết quả có thể ($1, 2, 3, 4, 5, 6$).
Khi gieo 2 con xúc xắc phân biệt, kết quả là cặp số $(x, y)$ với $x, y \in \{1; 2; 3; 4; 5; 6\}$.
Tổng số kết quả có thể xảy ra là:
$$n = 6 \times 6 = 36\text{ kết quả đồng khả năng}$$

a) **Xét biến cố $E$ ("Tổng số chấm bằng 7"):**
Các cặp số có tổng bằng 7 là:
$$(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$$
Số kết quả thuận lợi: $k = 6$.
Xác suất:
$$P(E) = \frac{6}{36} = \frac{1}{6}$$

b) **Xét biến cố $F$ ("Hai con xúc xắc có số chấm bằng nhau"):**
Các cặp số thỏa mãn là:
$$(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)$$
Số kết quả thuận lợi: $k = 6$.
Xác suất:
$$P(F) = \frac{6}{36} = \frac{1}{6}$$

c) **Xét biến cố $G$ ("Tích số chấm là một số lẻ"):**
Tích hai số là số lẻ khi và chỉ khi **cả hai số đều là số lẻ**.
Các số lẻ trên mặt xúc xắc là $\{1; 3; 5\}$ ($3$ số).
Số cặp gồm hai số lẻ là: $3 \times 3 = 9$ cặp:
$$\{(1,1), (1,3), (1,5), (3,1), (3,3), (3,5), (5,1), (5,3), (5,5)\}$$
Số kết quả thuận lợi: $k = 9$.
Xác suất:
$$P(G) = \frac{9}{36} = \frac{1}{4} = 25\%$$

---

### Dạng 3: Bài toán ngược tìm số lượng phần tử trong hộp

**Phương pháp giải:**
- Biết xác suất $P = \frac{k}{n}$, thiết lập phương trình liên hệ giữa số vật phẩm chưa biết $x$ với tổng số vật phẩm trong hộp, từ đó giải phương trình tìm $x$.

---

#### Bài toán 3:
Trong một hộp kín có $12$ viên bi màu đỏ và một số viên bi màu xanh có cùng kích thước. Bạn An lấy ngẫu nhiên một viên bi từ hộp, quan sát màu rồi trả lại hộp. An lặp lại phép thử này nhiều lần và nhận thấy xác suất lý thuyết để lấy được một viên bi màu đỏ là $\frac{3}{5}$.
Hỏi ban đầu trong hộp có bao nhiêu viên bi màu xanh?

**Lời giải:**

Gọi số viên bi màu xanh trong hộp là $x$ ($x \in \mathbb{N}^*$).
Tổng số viên bi có trong hộp là:
$$n = 12 + x\text{ (viên bi)}$$
Số kết quả thuận lợi cho việc lấy được viên bi màu đỏ là $k = 12$.
Xác suất để lấy được viên bi màu đỏ là:
$$P = \frac{12}{12 + x}$$
Theo đề bài, xác suất này bằng $\frac{3}{5}$, ta có phương trình:
$$\frac{12}{12 + x} = \frac{3}{5}$$
Áp dụng tính chất tỉ lệ thức (nhân chéo):
$$3 \cdot (12 + x) = 12 \cdot 5$$
$$36 + 3x = 60$$
$$3x = 60 - 36$$
$$3x = 24 \implies x = 8\text{ (thỏa mãn)}$$

**Kết luận:** Ban đầu trong hộp có $8$ viên bi màu xanh.

---

### Dạng 4: Thiết kế và kiểm định tính công bằng của trò chơi xác suất

**Phương pháp giải:**
- Tính xác suất thắng cuộc của từng người chơi: $P_A$ và $P_B$.
- So sánh:
  + Nếu $P_A = P_B \implies$ Trò chơi **công bằng**.
  + Nếu $P_A \neq P_B \implies$ Trò chơi **không công bằng** (người có xác suất cao hơn nắm giữ lợi thế).

---

#### Bài toán 4:
Hai bạn Minh và Tuấn cùng chơi một trò chơi tung đồng thời hai đồng xu cân đối:
- Minh thắng nếu hai đồng xu xuất hiện hai mặt cùng loại (cả hai cùng Sấp hoặc cả hai cùng Ngửa).
- Tuấn thắng nếu hai đồng xu xuất hiện hai mặt khác loại (một Sấp, một Ngửa).
Trò chơi này có công bằng không? Vì sao?

**Lời giải:**

Không gian các kết quả có thể xảy ra khi tung hai đồng xu cân đối là:
$$\Omega = \{(S, S); (S, N); (N, S); (N, N)\} \implies n = 4\text{ kết quả đồng khả năng}$$

1. **Khả năng Minh thắng:**
- Các kết quả thuận lợi: $(S, S)$ và $(N, N) \implies k_M = 2$.
- Xác suất Minh thắng:
  $$P_M = \frac{2}{4} = \frac{1}{2} = 50\%$$

2. **Khả năng Tuấn thắng:**
- Các kết quả thuận lợi: $(S, N)$ và $(N, S) \implies k_T = 2$.
- Xác suất Tuấn thắng:
  $$P_T = \frac{2}{4} = \frac{1}{2} = 50\%$$

Vì $P_M = P_T = 50\%$ nên cơ hội chiến thắng của hai bạn là hoàn toàn ngang nhau.
**Kết luận:** Trò chơi này hoàn toàn **công bằng**!

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Thử nghiệm Buffon và Cách tính số $\pi$ bằng que đóm (1777)

Năm 1777, nhà tự nhiên học người Pháp Georges-Louis Leclerc, Bá tước xứ Buffon, đã công bố một bài toán hình học xác suất kinh ngạc:
*Thả rơi ngẫu nhiên một que kim có chiều dài $L$ xuống một sàn gỗ có các đường kẻ song song cách nhau một khoảng $D$ (với $L \le D$). Xác suất để que kim rơi vắt ngang qua một đường kẻ là bao nhiêu?*

Buffon đã chứng minh bằng giải tích toán học rằng xác suất này chính xác bằng:
$$P = \frac{2L}{\pi D}$$
Từ công thức này, ta suy ra: $\pi = \frac{2L}{P \cdot D}$. Bằng cách thả hàng ngàn que kim xuống sàn và đếm tần số que cắt đường kẻ, các nhà khoa học đã tính được giá trị của số $\pi \approx 3{,}14159\dots$ thuần túy bằng thực nghiệm ngẫu nhiên!

---

### Chuyên đề 2: Xác suất Trúng Xổ số và Bài toán Chia sẻ Rủi ro Bảo hiểm

Tại sao các công ty bảo hiểm nhân thọ hay bảo hiểm xe hơi vẫn có thể kinh doanh siêu lợi nhuận dù họ phải chi trả hàng trăm tỷ đồng tiền bồi thường tai nạn mỗi năm?
Nguyên lý vận hành dựa trên **Quy luật Số lớn**:
- Đối với một cá nhân, tai nạn là một biến cố ngẫu nhiên bất ngờ không thể đoán trước.
- Nhưng đối với một tập hợp $1\,000\,000$ người, tỉ lệ tai nạn hàng năm là một con số xác suất gần như **cố định và cực kỳ ổn định** (ví dụ $0{,}05\%$).
Công ty bảo hiểm thu một khoản phí nhỏ từ hàng triệu người để tạo thành một quỹ rủi ro khổng lồ, đủ sức chi trả cho một số ít người gặp nạn và vẫn giữ lại lợi nhuận vận hành bền vững.

---

### Chuyên đề 3: Nghịch lý Ngày sinh (Birthday Paradox)

Trong một phòng học cần có ít nhất bao nhiêu học sinh để xác suất có **ít nhất hai bạn có cùng ngày sinh nhật** (ngày và tháng) vượt quá $50\%$?
Đa số mọi người đoán phải cần khoảng $180$ hoặc $200$ người (vì một năm có 365 ngày).
Nhưng toán học xác suất chứng minh rằng: **Chỉ cần đúng 23 người!**
- Lý do: Ta không so sánh ngày sinh của các học sinh với một ngày cố định, mà so sánh **tất cả các cặp học sinh** với nhau.
- Với 23 người, số cặp đôi được tạo ra là: $\frac{23 \times 22}{2} = 253$ cặp so sánh! 
Số lượng cặp đối sánh khổng lồ này khiến cho khả năng trùng lặp tăng vọt lên tới $50{,}7\%$.

---

### Chuyên đề 4: Thuật toán Ngẫu nhiên hóa trong An ninh mạng và Blockchain

Tại sao các mạng Blockchain như Bitcoin hay Ethereum lại an toàn trước các cuộc tấn công của hacker?
Các thuật toán đồng thuận Proof of Work (PoW) yêu cầu máy đào phải giải một câu đố mã hóa bằng cách thử hàng tỷ số ngẫu nhiên (nonce) mỗi giây. Xác suất để một kẻ tấn công đoán trúng liên tiếp các khối mật mã nhằm thao túng chuỗi khối là nhỏ đến mức bé hơn xác suất một thiên thạch rơi trúng phòng ngủ của bạn $10$ lần liên tiếp!

---

### Chuyên đề 5: Khử nhiễu ảnh và Thị giác Máy tính bằng Lọc hạt ngẫu nhiên (Particle Filter)

Khi ô tô tự hành Tesla hay Waymo tự lái trong điều kiện trời mưa tuyết dày đặc hoặc ban đêm, camera bị nhiễu hạt nặng nề. Xe làm thế nào để nhận diện được làn đường và người đi bộ?
Máy tính áp dụng thuật toán **Lọc hạt Monte Carlo (Particle Filter)**: Rải hàng ngàn giả thuyết ngẫu nhiên về vị trí của người đi bộ trong không gian, sau đó cập nhật xác suất liên tục qua từng khung hình (theo định lý Bayes). Chỉ sau vài mili-giây, các hạt ngẫu nhiên tụ lại chính xác quanh vật thể, giúp xe tự hành phanh gấp an toàn!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Toàn diện Chương 8: Biến cố và Xác suất",
  "questions": [
    {
      "question": "Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây có xác suất bằng 1/3?",
      "options": [
        "Số chấm xuất hiện là số chia hết cho 2",
        "Số chấm xuất hiện là số chia hết cho 3",
        "Số chấm xuất hiện là số lớn hơn 4",
        "Cả B và C đều đúng"
      ],
      "answer": 3,
      "hint": "Số chia hết cho 3 gồm {3; 6} (2 kết quả). Số lớn hơn 4 gồm {5; 6} (2 kết quả).",
      "explanation": "Cả biến cố ở câu B (kết quả 3; 6) và câu C (kết quả 5; 6) đều có 2 kết quả thuận lợi trên tổng số 6 kết quả, do đó đều có xác suất là $P = \\frac{2}{6} = \\frac{1}{3}$. Do đó phương án D đúng."
    },
    {
      "question": "Một hộp chứa 5 viên bi xanh, 7 viên bi đỏ và 8 viên bi vàng có cùng kích thước. Lấy ngẫu nhiên 1 viên bi. Xác suất để lấy được viên bi không phải màu vàng là:",
      "options": [
        "3/5",
        "2/5",
        "7/20",
        "1/4"
      ],
      "answer": 0,
      "hint": "Tổng số bi là 5 + 7 + 8 = 20. Bi không phải vàng gồm bi xanh và bi đỏ.",
      "explanation": "Tổng số bi là $5 + 7 + 8 = 20$. Số bi không phải màu vàng là $5 + 7 = 12$. Xác suất là $P = \\frac{12}{20} = \\frac{3}{5}$."
    },
    {
      "question": "Tung đồng thời hai đồng xu cân đối. Xác suất để có ít nhất một đồng xu xuất hiện mặt Sấp là:",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      "answer": 2,
      "hint": "Chỉ có duy nhất 1 trường hợp không có mặt sấp nào là cả hai mặt cùng ngửa (N, N).",
      "explanation": "Không gian mẫu có 4 kết quả: SS, SN, NS, NN. Các kết quả có ít nhất 1 mặt sấp là SS, SN, NS (3 kết quả). Xác suất là $P = \\frac{3}{4}$."
    },
    {
      "question": "Một cỗ bài tú lơ khơ 52 lá. Rút ngẫu nhiên một lá bài. Xác suất để rút được lá bài hình người (J, Q, K) là:",
      "options": [
        "3/52",
        "3/13",
        "1/4",
        "4/13"
      ],
      "answer": 1,
      "hint": "Có 3 loại lá hình người (J, Q, K), mỗi loại có 4 chất.",
      "explanation": "Số lá bài hình người là $3 \\times 4 = 12$ lá. Xác suất là $P = \\frac{12}{52} = \\frac{3}{13}$."
    },
    {
      "question": "Biến cố nào sau đây là biến cố chắc chắn?",
      "options": [
        "Gieo một con xúc xắc 6 mặt được số chấm không vượt quá 6",
        "Tung một đồng xu được mặt Ngửa",
        "Bốc thăm trúng thưởng được giải đặc biệt",
        "Ngày mai nhiệt độ ngoài trời tại Sa Pa đạt 50 độ C"
      ],
      "answer": 0,
      "hint": "Xúc xắc 6 mặt chỉ có các mặt 1, 2, 3, 4, 5, 6 đều không vượt quá 6.",
      "explanation": "Mọi mặt xúc xắc đều mang số chấm từ 1 đến 6 nên luôn thỏa mãn 'không vượt quá 6'. Đây là biến cố chắc chắn."
    },
    {
      "question": "Chọn ngẫu nhiên một số tự nhiên có hai chữ số từ 10 đến 99. Xác suất để số được chọn có hai chữ số giống nhau (11, 22, ..., 99) là:",
      "options": [
        "1/10",
        "1/9",
        "9/100",
        "1/11"
      ],
      "answer": 0,
      "hint": "Từ 10 đến 99 có 90 số. Các số có 2 chữ số giống nhau là 11, 22, 33, 44, 55, 66, 77, 88, 99 (9 số).",
      "explanation": "Tổng số các số tự nhiên có 2 chữ số là: $99 - 10 + 1 = 90$ số. Có 9 số có 2 chữ số giống nhau. Xác suất là $P = \\frac{9}{90} = \\frac{1}{10}$."
    },
    {
      "question": "Một túi đựng 15 quả cầu trắng và một số quả cầu đen. Biết xác suất lấy được một quả cầu đen là 2/5. Số quả cầu đen trong túi là:",
      "options": [
        "6",
        "10",
        "25",
        "12"
      ],
      "answer": 1,
      "hint": "Xác suất lấy cầu trắng là $1 - 2/5 = 3/5$.",
      "explanation": "Xác suất lấy quả cầu trắng là $1 - \\frac{2}{5} = \\frac{3}{5}$. Tổng số quả cầu trong túi là $15 : \\frac{3}{5} = 25$ quả. Số quả cầu đen là $25 - 15 = 10$ quả."
    },
    {
      "question": "Quay một bánh xe may mắn chia làm 10 hình quạt bằng nhau đánh số từ 1 đến 10. Xác suất để mũi tên dừng ở hình quạt ghi số nguyên tố là:",
      "options": [
        "2/5",
        "1/2",
        "3/10",
        "3/5"
      ],
      "answer": 0,
      "hint": "Các số nguyên tố từ 1 đến 10 là: 2, 3, 5, 7.",
      "explanation": "Có 4 số nguyên tố $\{2; 3; 5; 7\}$ trong 10 số. Xác suất là $P = \\frac{4}{10} = \\frac{2}{5}$."
    },
    {
      "question": "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện bằng 12 là:",
      "options": [
        "1/36",
        "1/12",
        "1/6",
        "2/36"
      ],
      "answer": 0,
      "hint": "Tổng bằng 12 chỉ có duy nhất cặp (6, 6).",
      "explanation": "Tổng số kết quả là $6 \\times 6 = 36$. Chỉ có duy nhất 1 kết quả (6, 6) cho tổng bằng 12. Xác suất là $P = \\frac{1}{36}$."
    },
    {
      "question": "Hai biến cố đối nhau E và không E có tính chất nào sau đây?",
      "options": [
        "P(E) = P(không E)",
        "P(E) + P(không E) = 1",
        "P(E) * P(không E) = 1",
        "P(E) + P(không E) = 0"
      ],
      "answer": 1,
      "hint": "Trong mọi phép thử, hoặc E xảy ra hoặc không E xảy ra.",
      "explanation": "Tổng xác suất của hai biến cố đối luôn bằng 1: $P(E) + P(\\bar{E}) = 1$."
    }
  ]
}
````

---

## V. Đề Kiểm tra 45 phút Đánh giá Năng lực Chương 8 (Chuẩn Ma trận & Barem Điểm)

### 1. Ma trận đề kiểm tra

| Mạch nội dung | Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Phân loại biến cố** | 1,0 đ (C1a) | 1,0 đ (C1b) | | | **2,0 đ** |
| **Xác suất xúc xắc & đồng xu** | | 1,5 đ (C2a) | 1,5 đ (C2b) | | **3,0 đ** |
| **Xác suất chọn bóng & rút thẻ** | | 1,5 đ (C3a) | 1,5 đ (C3b) | | **3,0 đ** |
| **Bài toán ngược & Trò chơi công bằng** | | | 1,0 đ (C4) | 1,0 đ (C5) | **2,0 đ** |
| **Tổng điểm** | **1,0 đ** | **4,0 đ** | **4,0 đ** | **1,0 đ** | **10,0 đ** |

---

### 2. Đề bài chi tiết

**Bài 1 (2,0 điểm):**
Một hộp có $8$ thẻ ghi các số: $2, 4, 6, 8, 10, 12, 14, 16$. Rút ngẫu nhiên một thẻ từ hộp.
Hãy chỉ ra biến cố nào sau đây là biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên:
a) $A$: "Số ghi trên thẻ là số chia hết cho 2".
b) $B$: "Số ghi trên thẻ là số lẻ".
c) $C$: "Số ghi trên thẻ lớn hơn 10".
d) $D$: "Số ghi trên thẻ là số chính phương".

**Bài 2 (3,0 điểm):**
Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối một lần. Tính xác suất của các biến cố sau:
a) $E$: "Mặt xuất hiện có số chấm là số chia hết cho 3".
b) $F$: "Mặt xuất hiện có số chấm là số nguyên tố".
c) $G$: "Mặt xuất hiện có số chấm không nhỏ hơn 3".

**Bài 3 (3,0 điểm):**
Một túi vải đựng $30$ quả bóng bàn có kích thước và trọng lượng như nhau, gồm $12$ quả màu cam và $18$ quả màu trắng. Bạn Bình nhắm mắt lấy ngẫu nhiên một quả bóng từ túi.
a) Tính xác suất để quả bóng lấy ra có màu cam.
b) Tính xác suất để quả bóng lấy ra có màu trắng.
c) Nếu Bình lấy ra một quả bóng và thấy nó màu cam (không bỏ lại vào túi), sau đó bạn An lấy tiếp một quả bóng nữa. Tính xác suất để bạn An lấy được một quả bóng màu cam.

**Bài 4 (1,0 điểm):**
Trong một hộp có một số viên bi đỏ và $15$ viên bi xanh có cùng kích thước. Biết rằng xác suất để lấy ngẫu nhiên được một viên bi màu đỏ là $\frac{2}{5}$. Hỏi trong hộp có bao nhiêu viên bi màu đỏ?

**Bài 5 (1,0 điểm — Vận dụng cao):**
Hai bạn Nam và Việt chơi trò chơi gieo đồng thời hai con xúc xắc 6 mặt cân đối:
- Nam thắng nếu tổng số chấm xuất hiện trên hai con xúc xắc là số chẵn.
- Việt thắng nếu tổng số chấm xuất hiện trên hai con xúc xắc là số lẻ.
Hỏi trò chơi này có công bằng không? Hãy tính xác suất chiến thắng của mỗi bạn để chứng minh nhận định của em.

---

### 3. Hướng dẫn chấm & Barem điểm chi tiết

| Bài | Ý | Nội dung giải chi tiết | Điểm |
| :---: | :---: | :--- | :---: |
| **Bài 1** *(2,0 đ)* | **a** | Mọi số trong tập $\{2, 4, 6, 8, 10, 12, 14, 16\}$ đều là số chẵn $\implies A$ là **biến cố chắc chắn**. | 0,5 đ |
| | **b** | Trong hộp không có số lẻ nào $\implies B$ là **biến cố không thể**. | 0,5 đ |
| | **c** | Các số lớn hơn 10 là $\{12, 14, 16\}$ $\implies C$ là **biến cố ngẫu nhiên**. | 0,5 đ |
| | **d** | Các số chính phương là $4 = 2^2$ và $16 = 4^2 \implies D$ là **biến cố ngẫu nhiên**. | 0,5 đ |
| **Bài 2** *(3,0 đ)* | **a** | Không gian mẫu có $n = 6$. Các số chia hết cho 3 là $\{3; 6\} \implies k = 2$. <br> $P(E) = \frac{2}{6} = \frac{1}{3}$. | 1,0 đ |
| | **b** | Các số nguyên tố là $\{2; 3; 5\} \implies k = 3$. <br> $P(F) = \frac{3}{6} = \frac{1}{2}$. | 1,0 đ |
| | **c** | Số chấm không nhỏ hơn 3 là các số $\ge 3$: $\{3; 4; 5; 6\} \implies k = 4$. <br> $P(G) = \frac{4}{6} = \frac{2}{3}$. | 1,0 đ |
| **Bài 3** *(3,0 đ)* | **a** | Tổng số bóng là $n = 30$. Số bóng cam là $12$. <br> Xác suất lấy bóng cam: $P = \frac{12}{30} = \frac{2}{5} = 40\%$. | 1,0 đ |
| | **b** | Số bóng trắng là $18$. <br> Xác suất lấy bóng trắng: $P = \frac{18}{30} = \frac{3}{5} = 60\%$. | 1,0 đ |
| | **c** | Sau khi Bình lấy 1 quả bóng cam, trong túi còn: $30 - 1 = 29$ quả bóng. <br> Số bóng cam còn lại là: $12 - 1 = 11$ quả. <br> Xác suất để An lấy được bóng cam là: $P = \frac{11}{29}$. | 1,0 đ |
| **Bài 4** *(1,0 đ)* | | Gọi số bi đỏ là $x$ ($x \in \mathbb{N}^*$). Tổng số bi trong hộp là $x + 15$. <br> Xác suất lấy bi đỏ: $\frac{x}{x + 15} = \frac{2}{5}$. <br> Nhân chéo: $5x = 2(x + 15) \iff 5x = 2x + 30 \iff 3x = 30 \iff x = 10$. <br> Vậy có $10$ viên bi màu đỏ. | 1,0 đ |
| **Bài 5** *(1,0 đ)* | | Tổng số kết quả khi gieo 2 con xúc xắc là $6 \times 6 = 36$ kết quả đồng khả năng. <br> Tổng hai số là số chẵn khi: cả 2 cùng chẵn ($3 \times 3 = 9$ kết quả) hoặc cả 2 cùng lẻ ($3 \times 3 = 9$ kết quả). <br> Số kết quả tổng chẵn (Nam thắng) là: $9 + 9 = 18$ kết quả $\implies P_{\text{Nam}} = \frac{18}{36} = \frac{1}{2}$. <br> Số kết quả tổng lẻ (Việt thắng) là: $36 - 18 = 18$ kết quả $\implies P_{\text{Việt}} = \frac{18}{36} = \frac{1}{2}$. <br> Vì $P_{\text{Nam}} = P_{\text{Việt}} = \frac{1}{2}$ nên trò chơi này hoàn toàn **công bằng**! | 1,0 đ |
