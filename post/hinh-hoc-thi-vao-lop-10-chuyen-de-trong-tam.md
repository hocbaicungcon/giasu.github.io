---
title: 'Hình học thi vào lớp 10: Chuyên đề trọng tâm và tuyển tập bài toán'
description: 'Cẩm nang hình học thi vào lớp 10: Chùm bài toán Định lý Pythagore, Định lý Thales, trực tâm, tứ giác nội tiếp và phương tích kèm hướng dẫn giải chi tiết.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Toán 9
  - Thi vào 10
  - Hình học phẳng
  - Định lý Thales
  - Pythagore
  - Phương tích
  - TS. Nguyễn Văn Lợi
grade: 9
---

# Hình học thi vào lớp 10: Chuyên đề trọng tâm và tuyển tập bài toán

> [!NOTE] Thông tin tác giả & Bản quyền tài liệu
> - **Tác giả / Chủ biên:** TS. Nguyễn Văn Lợi (chủ biên), Đặng Thị Thu Thủy, ThS. Hoàng Văn Tựu
> - **Đơn vị phát hành:** Lợi Center / Sigma-Maths
> - **Mục đích:** Bồi dưỡng học sinh khá giỏi, rèn luyện tư duy logic, kỹ năng giải toán sáng tạo và nâng cao năng lực toán học cho học sinh phổ thông ôn thi vào lớp 10.

---

## Lời giới thiệu

Thân gửi các em học sinh!

Vậy là chặng đường học tập THCS sắp trôi qua. Bốn năm THCS là bốn năm đầy khó khăn với nhiều kiến thức từ đại số đến hình học. Điều đó phần nào làm cho các em choáng ngợp với lượng kiến thức lớn, đặc biệt là môn hình học.

Để cùng các bạn học sinh chủ động tự tin trong học tập môn hình học phẳng, chúng tôi tập trung kiến thức vào bốn nhóm chuyên đề trọng tâm: **Định lý Pythagore**, **Định lý Thales**, **Chùm bài toán trực tâm** và **Chùm bài toán về phương tích**. Mỗi nhóm đề tài như một chùm bài toán cơ bản phân nhánh. Nếu chúng ta tự làm để hiểu thấu đáo các bài toán này thì việc giải các bài toán trong đề thi vào lớp 10 sẽ dễ dàng hơn nhiều và vẻ đẹp tự nhiên của hình học cũng được bộc lộ một cách trọn vẹn.

Vị trí của bài toán hình học trong đề thi vào lớp 10 là vô cùng quan trọng. Vì thế, việc không nắm chắc kiến thức phần này có thể quyết định sự thành bại trong kì thi tuyển sinh. Vì lẽ đó, chúng tôi biên soạn cuốn tài liệu *Hình học thi lớp 10* với mục đích giúp đỡ các em có một cẩm nang hữu ích để ôn tập hiệu quả.

Chúng tôi mong nhận được ý kiến đóng góp quý báu của quý bạn đọc để cuốn sách ngày càng hoàn thiện hơn.

Xin trân trọng cảm ơn!  
*Mọi ý kiến đóng góp xin chuyển về:* `sigmathsgroup@gmail.com`

---

## 1. Chùm bài toán về định lý Pythagore

*Trong hai chương đầu, chúng tôi tham khảo rất nhiều ý tưởng của thầy Nguyễn Bá Đang về hai định lý hình học nổi tiếng và có sử dụng một số bài tập của thầy trong cuốn sách "Những định lí chọn lọc trong hình học phẳng và các bài toán áp dụng".*

### 1.1. Lý thuyết

**Định lý 1.1.1 (Định lý Pythagore thuận):**  
Trong một tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông:
$$
a^2 + b^2 = c^2
$$

Dưới đây là một số cách chứng minh tiêu biểu và giàu tính trực quan:

1. **Chứng minh bằng đại số:**  
Dựng hình vuông lớn cạnh $(a+b)$ chứa bốn tam giác vuông bằng nhau và hình vuông cạnh $c$ ở giữa:
$$
(a+b)^2 = 4 \cdot \left(\frac{1}{2}ab\right) + c^2 \iff a^2 + 2ab + b^2 = 2ab + c^2 \iff a^2 + b^2 = c^2
$$

2. **Chứng minh bằng cắt ghép hình:**  
Ghép 4 tam giác vuông và 2 hình vuông $a^2, b^2$ để tạo thành cấu trúc tương đương với hình vuông $c^2$.

![Chứng minh định lý Pythagore bằng đại số và cắt ghép](/assets/images/hinh-hoc-10/pythagore-chung-minh-1.png)

3. **Chứng minh của Tổng thống Hoa Kỳ James A. Garfield (1876):**  
Dựng hình thang vuông gồm 2 tam giác vuông bằng nhau và 1 tam giác vuông cân có cạnh huyền $c$:
- Diện tích hình thang: $S = \frac{1}{2}(a+b)(a+b) = \frac{1}{2}(a+b)^2$.
- Tổng diện tích 3 tam giác: $S = 2 \cdot \left(\frac{1}{2}ab\right) + \frac{1}{2}c^2 = ab + \frac{1}{2}c^2$.
- Do đó: $\frac{1}{2}(a+b)^2 = ab + \frac{1}{2}c^2 \iff a^2 + b^2 = c^2$.

4. **Chứng minh của danh họa Leonardo da Vinci:**  
Sử dụng phép quay và phân chia đa giác đồng dạng để chỉ ra tính bảo toàn diện tích.

5. **Chứng minh biến thể đại số hình học:**  
$$
(a - b)^2 + 4 \cdot \left(\frac{1}{2}ab\right) = c^2 \iff a^2 - 2ab + b^2 + 2ab = c^2 \iff a^2 + b^2 = c^2
$$

6. **Chứng minh bằng gấp hình (thông qua mệnh đề mở rộng):**  
*Tổng diện tích các đa giác đồng dạng dựng trên hai cạnh góc vuông của một tam giác vuông bằng diện tích đa giác đồng dạng dựng trên cạnh huyền.*

![Các phương pháp chứng minh định lý Pythagore của Garfield, Da Vinci và gấp hình](/assets/images/hinh-hoc-10/pythagore-chung-minh-2.png)

**Định lý 1.1.2 (Định lý Pythagore đảo):**  
Nếu tam giác $ABC$ thỏa mãn $BC^2 = AB^2 + AC^2$ thì tam giác $ABC$ vuông tại $A$.

*Chứng minh:* Dựng tam giác vuông $A'B'C'$ có hai cạnh góc vuông $A'B' = AB$ và $A'C' = AC$. Khi đó $B'C'^2 = A'B'^2 + A'C'^2 = AB^2 + AC^2 = BC^2 \Rightarrow B'C' = BC$. Suy ra $\Delta ABC = \Delta A'B'C'\text{ (c-c-c)}$, do đó $\widehat{A} = \widehat{A'} = 90^\circ$.
- Nếu $BC^2 > AB^2 + AC^2$ thì tam giác $ABC$ có góc $A$ tù.
- Nếu $BC^2 = AB^2 + AC^2$ thì tam giác $ABC$ có góc $A$ vuông.
- Nếu $BC^2 < AB^2 + AC^2$ thì tam giác $ABC$ có góc $A$ nhọn.

![Định lý Pythagore đảo](/assets/images/hinh-hoc-10/pythagore-dao.png)

---

### 1.2. Bài tập

**Câu 1.2.1 (Cửa thiên đường):** Một thanh gỗ thẳng dài $2000\text{ m}$, hai đầu được buộc chặt bởi một sợi dây dài $2001\text{ m}$. Ai muốn thử lòng dũng cảm thì chui qua khe hở của sợi dây và thanh gỗ! Bao nhiêu người đi đám vượt qua tìm may mắn?

![Bài toán Cửa thiên đường - Câu 1.2.1](/assets/images/hinh-hoc-10/cau-1-2-1.png)

**Câu 1.2.2:** Chứng minh rằng $S_{\Delta CAG} = S_{\Delta CBD}$.  
*Gợi ý:* Hai tam giác chồng khít lên nhau qua phép quay góc $90^\circ$.

![Chứng minh diện tích hai tam giác bằng nhau - Câu 1.2.2](/assets/images/hinh-hoc-10/cau-1-2-2.png)

**Câu 1.2.3:** Chứng minh diện tích các tam giác sơn màu trong hình dưới đây có diện tích bằng nhau.

![Các tam giác sơn màu có diện tích bằng nhau - Câu 1.2.3](/assets/images/hinh-hoc-10/cau-1-2-3.png)

**Câu 1.2.4:** Chứng minh diện tích các hình cùng màu sơn bằng nhau:

![Các hình cùng màu sơn bằng nhau - Câu 1.2.4](/assets/images/hinh-hoc-10/cau-1-2-4.png)

*Gợi ý:* $GU \cdot GJ = GD \cdot GQ,\quad GQ = GQ,\quad GT = GU$.

**Câu 1.2.5:** Cho tam giác vuông, vẽ các hình vuông về phía ngoài tam giác (hình vẽ). Chứng minh các đường thẳng qua $A$ vuông góc với $BL$, qua $B$ vuông góc với $AD$, qua $C$ vuông góc với $AB$ đồng quy.  
*Gợi ý:* Ba đường cao gặp nhau tại một điểm.

![Ba đường vuông góc đồng quy - Câu 1.2.5](/assets/images/hinh-hoc-10/cau-1-2-5.png)

**Câu 1.2.6:** Chứng minh rằng: diện tích tam giác vuông bằng tổng diện tích hai hình trăng khuyết Hippocrates.  
*Gợi ý:* Sử dụng định lý Pythagore và diện tích nửa hình tròn.

![Hình trăng khuyết Hippocrates - Câu 1.2.6](/assets/images/hinh-hoc-10/cau-1-2-6.png)

**Câu 1.2.7:** Trong hình chữ nhật $ABCD$, lấy điểm $P$ bất kỳ. Chứng minh rằng:
$$
PA^2 + PC^2 = PB^2 + PD^2
$$
*Gợi ý:* Từ $P$ hạ các đường vuông góc xuống các cạnh. Sử dụng định lý Pythagore.  
*Nhận xét:* Kết quả của bài toán không thay đổi khi điểm $P$ ở vị trí tổng quát trong không gian.

![Định lý lá cờ Anh - Câu 1.2.7](/assets/images/hinh-hoc-10/cau-1-2-7.png)

**Câu 1.2.8:** Người ta muốn đo khoảng cách từ $D$ đến $C$ nhưng không thể nào đến $C$ được. Hỏi có thể đo gián tiếp $CD$ không? Biết rằng:
$$
AB = 240\text{ m},\quad \widehat{DAC} = \widehat{ABC} = 90^\circ,\quad \widehat{BAC} = 60^\circ,\quad \widehat{ADC} = 30^\circ
$$

![Đo khoảng cách CD gián tiếp - Câu 1.2.8](/assets/images/hinh-hoc-10/cau-1-2-8.png)

**Câu 1.2.9:** Cho tam giác $EDF$ vuông tại $D$. Vẽ các hình vuông ra phía ngoài. Chứng minh rằng:
$$
KE = DL
$$

![Hình vuông dựng ngoài tam giác vuông - Câu 1.2.9](/assets/images/hinh-hoc-10/cau-1-2-9.png)

**Câu 1.2.10:** Cho các hình vuông như hình vẽ. Chứng minh rằng:
$$
b = 2d
$$

![Bài toán Sangaku hình vuông tiếp xúc - Câu 1.2.10](/assets/images/hinh-hoc-10/cau-1-2-10.png)

**Câu 1.2.11:** Cho các số $a, b$ thỏa mãn $0 < a < b$. Chứng minh các bất đẳng thức sau:
$$
a < \frac{2ab}{a+b} < \sqrt{ab} < \frac{a+b}{2} < \sqrt{\frac{a^2+b^2}{2}} < \frac{a^2+b^2}{a+b} < b
$$

![Chứng minh hình học chuỗi bất đẳng thức trung bình - Câu 1.2.11](/assets/images/hinh-hoc-10/cau-1-2-11.png)

---

## 2. Chùm bài toán về định lý Thales

### 2.1. Lý thuyết

**Định lý 2.1.1 (Định lý đường trung bình):** Cho tam giác $ABC$.
- Đoạn thẳng đi qua trung điểm $D$ của $AB$ và song song với $BC$ thì đi qua trung điểm $E$ của $AC$.
- Đoạn thẳng đi qua trung điểm $D$ của $AB$ và trung điểm $E$ của $AC$ thì song song với $BC$ và bằng nửa $BC$:
$$
DE \parallel BC \quad \text{và} \quad DE = \frac{1}{2}BC
$$

![Đường trung bình trong tam giác - Định lý 2.1.1](/assets/images/hinh-hoc-10/thales-trung-binh.png)

**Bổ đề 2.1.1 (Bổ đề các đoạn thẳng song song):** Hai nửa đường thẳng $Ox, Oy$ cùng xuất phát từ điểm $O$. Trên nửa đường thẳng $Ox$ lấy các điểm $A_1, A_2, \dots, A_n$ sao cho $OA_1 = A_1 A_2 = \dots = A_{n-1} A_n$. Trên nửa đường thẳng $Oy$ lấy các điểm $B_1, B_2, \dots, B_n$ sao cho $OB_1 = B_1 B_2 = \dots = B_{n-1} B_n$. Chứng minh rằng $A_i B_i \parallel A_{i+1} B_{i+1}$ với mọi $i = 1, 2, \dots, n-1$.

![Bổ đề các đoạn thẳng song song cách đều](/assets/images/hinh-hoc-10/thales-bo-de-1.png)

**Bổ đề 2.1.2 (Bổ đề hữu tỷ):** Cho góc $xOy$. Trên cạnh $Ox$ lấy hai điểm $A, B$, trên cạnh $Oy$ lấy hai điểm $C, D$ sao cho:
$$
OA : OB = m : n = OC : OD \quad (m, n \in \mathbb{N}^*)
$$
Khi đó $AC \parallel BD$.

**Bổ đề 2.1.3 (Bổ đề vô tỷ):** Cho góc $xOy$. Trên cạnh $Ox$ lấy hai điểm $A, B$, trên cạnh $Oy$ lấy hai điểm $C, D$ sao cho:
$$
OA : OB = m : n = OC : OD. \quad \text{Khi đó } AC \parallel BD.
$$

**Bổ đề 2.1.4 (Định lý hình bình hành):** Cho hình bình hành $ABCD$. Trên cạnh $AB$ và $CD$ lần lượt lấy hai điểm $P$ và $Q$ sao cho:
$$
PA : PB = m : n = QC : QD. \quad \text{Khi đó } PQ \parallel BC.
$$

![Bổ đề hình bình hành](/assets/images/hinh-hoc-10/thales-bo-de-2.png)

**Định lý 2.1.2 (Định lý Thales):** Các đường thẳng song song chắn trên hai cát tuyến (đường thẳng) $d, d'$ thì tạo ra trên $d, d'$ các đoạn thẳng tương ứng tỉ lệ.

---

### 2.2. Bài tập

**Câu 2.2.1:** Cho hình thang cân $ABCD$. $C'$ là điểm tùy ý trên cạnh $BC$. Kẻ đường thẳng qua $C'$ và song song với $BD$ cắt $AB$ tại $D'$. Chứng minh rằng:
$$
AC' = B'C
$$

![Hình thang cân ABCD - Câu 2.2.1](/assets/images/hinh-hoc-10/cau-2-2-1.png)

**Câu 2.2.2:** Cho tam giác $ABC$, $M$ là trung điểm của cạnh $BC$. Qua $B$ và $C$ dựng các đường thẳng song song với $AM$ cắt $AC$ và $AB$ lần lượt tại $P$ và $Q$. Chứng minh rằng:
$$
\frac{1}{AM} = \frac{1}{PB} + \frac{1}{QC}
$$
*Gợi ý:* Nhân hai vế với $AM$ rồi dùng các đoạn thẳng tỉ lệ trên $BC$.

![Hệ thức nghịch đảo qua trung tuyến AM - Câu 2.2.2](/assets/images/hinh-hoc-10/cau-2-2-2.png)

**Câu 2.2.3:** Cho tam giác cân $ABC$ ($AB = AC$), kéo dài $BC$ về phía $C$ lấy điểm $M$. Đường thẳng qua $M$ cắt $AB$ và $AC$ lần lượt tại $P$ và $Q$. Chứng minh rằng:
$$
\frac{BM}{BP} - \frac{CM}{CQ}
$$
không phụ thuộc vào vị trí của $M$ và đường thẳng $d$.

![Đường thẳng cắt tam giác cân - Câu 2.2.3](/assets/images/hinh-hoc-10/cau-2-2-3.png)

**Câu 2.2.4:** Cho tam giác $ABC$ có $AB > AC$, $M$ là trung điểm của $BC$. Phân giác góc $A$ cắt $BC$ tại $L$. Từ $M$ kẻ đường vuông góc với $AL$ cắt $AB$ tại $D$, cắt $AC$ tại $E$. Chứng minh rằng:
- a) $AD = \frac{1}{2}(AB + AC)$;
- b) Gọi $F$ là trung điểm của $AC$. Chứng minh rằng: $EF = \frac{1}{2}AB$.

![Đường vuông góc với phân giác trong - Câu 2.2.4](/assets/images/hinh-hoc-10/cau-2-2-4.png)

**Câu 2.2.5:** Cho tam giác $ABC$. $D$ và $E$ nằm lần lượt trên các cạnh $AB$ và $AC$ sao cho $BD = CE$. Gọi $P$ là trung điểm $DE$, $M$ là trung điểm của $BC$. Chứng minh rằng: $PM$ song song với phân giác góc $A$.

![Trung điểm PM song song phân giác - Câu 2.2.5](/assets/images/hinh-hoc-10/cau-2-2-5.png)

**Câu 2.2.6 (Đường thẳng Gauss):** Cho tứ giác toàn phần $ABCDEF$ (hình vẽ).
- a) Chứng minh rằng trung điểm của các đường chéo $AC, BD, EF$ cùng nằm trên một đường thẳng $g$, ta gọi là *đường thẳng Gauss*.
- b) $g$ cắt $AD$ và $BC$ lần lượt tại $Y$ và $Z$. Chứng minh rằng:
$$
\frac{AY}{YD} = \frac{CZ}{BZ}
$$

![Đường thẳng Gauss cho tứ giác toàn phần - Câu 2.2.6](/assets/images/hinh-hoc-10/cau-2-2-6.png)

**Câu 2.2.7:** Cho hình bình hành $ABCD$, $P$ là điểm trong hình bình hành sao cho $\widehat{APB} + \widehat{CPD} = 180^\circ$. Chứng minh rằng góc $\widehat{PBC} = \widehat{PDC}$.  
*Gợi ý:* Tịnh tiến $P$ thành $X$ theo $\vec{BC}$. Tứ giác $DPCX$ nội tiếp.

**Câu 2.2.8:** Cho tam giác $ABC$, $O$ là điểm nằm trong tam giác. $AO, BO, CO$ cắt cạnh $BC, CA, AB$ lần lượt tại $D, E, F$. Qua $O$ kẻ các đường thẳng song song với $BC$ cắt $D, E$ lần lượt tại $N$ và $M$. Chứng minh rằng:
$$
ON = OM
$$

**Câu 2.2.9:** Cho tam giác nhọn $ABC$, đường phân giác $AD$. Gọi $M$ và $N$ lần lượt là hình chiếu của $D$ trên $AC$ và $AB$. Giao điểm của $BM$ và $CN$ là $P$. Chứng minh rằng $AP \perp BC$.

**Câu 2.2.10:** Các cạnh của tứ giác được chia thành ba phần bằng nhau. Chứng minh rằng:
- a) Diện tích phần tô xám bằng $\frac{1}{9}$ diện tích tứ giác.
- b) Các đoạn thẳng đều bị chia thành ba phần bằng nhau.

![Tứ giác chia cạnh làm 3 phần - Câu 2.2.10](/assets/images/hinh-hoc-10/cau-2-2-10.png)

---

### 2.3. Các bài toán bổ sung

**Câu 2.3.1 (Định lý Ptolemy):** Cho tứ giác lồi $ABCD$. Chứng minh rằng:  
Nếu tứ giác $ABCD$ nội tiếp thì:
$$
AB \cdot CD + BC \cdot AD = AC \cdot BD
$$
*Gợi ý:* Trên $AC$ lấy điểm $E$ sao cho $\widehat{ABE} = \widehat{CBD}$.

![Định lý Ptolemy cho tứ giác nội tiếp - Câu 2.3.1](/assets/images/hinh-hoc-10/cau-2-3-1.png)

**Câu 2.3.2:** Cho hình bình hành $ABCD$. Đường tròn $(k)$ cắt các cạnh $AB, AD$ và đường chéo $AC$ lần lượt tại $B', D'$ và $C'$. Chứng minh rằng:
$$
AB' \cdot AB + AD' \cdot AD = AC' \cdot AC
$$
*Gợi ý:* Sử dụng định lý Ptolemy cho tứ giác nội tiếp $AD'C'B'$ và $\Delta ADC \sim \Delta B'D'C'$.

![Hình bình hành và đường tròn cắt các cạnh - Câu 2.3.2](/assets/images/hinh-hoc-10/cau-2-3-2.png)

**Câu 2.3.3:** Cho tam giác $ABC$ có $2BC = AB + AC$. Gọi $I$ là tâm đường tròn nội tiếp, $O$ là tâm đường tròn ngoại tiếp. Chứng minh rằng:
$$
AI \perp OI
$$
*Gợi ý:* Sử dụng định lý Ptolemy cho tứ giác nội tiếp $ABDC$ (với $D$ là điểm chính giữa cung $BC$).

![Tam giác thỏa mãn 2BC = AB + AC - Câu 2.3.3](/assets/images/hinh-hoc-10/cau-2-3-3.png)

**Câu 2.3.4:** Cho hai điểm $D$ và $E$ nằm trên nửa đường tròn đường kính $AB$. Dựng hình bình hành $ADCE$. Chứng minh rằng:
$$
DE \perp BC
$$
*Gợi ý:* Chỉ ra $E$ là trực tâm của tam giác $BCD$.

![Hai điểm trên nửa đường tròn - Câu 2.3.4](/assets/images/hinh-hoc-10/cau-2-3-4.png)

---

## 3. Chùm bài toán về trực tâm

*Trong chương này, chúng tôi xét bài toán xung quanh mối quan hệ giữa trọng tâm, trực tâm, tâm đường tròn ngoại tiếp và các tính chất kinh điển của trực tâm trong đề thi vào 10.*

### 3.1. Mô hình cơ bản

Cho tam giác $ABC$ nhọn nội tiếp đường tròn $(O; R)$. Các đường cao $AD, BE, CF$ cắt nhau tại trực tâm $H$. Kéo dài $AD, BE, CF$ cắt đường tròn $(O; R)$ lần lượt tại $P, Q, R$. Gọi $M$ là trung điểm của $BC$.

### 3.2. Khai thác mô hình

- **Câu 3.2.1:** Chứng minh rằng tứ giác $BFEC$ nội tiếp một đường tròn.
- **Câu 3.2.2:** Chứng minh rằng $P$ đối xứng với $H$ qua $BC$, $Q$ đối xứng với $H$ qua $AC$, và $R$ đối xứng với $H$ qua $AB$.
- **Câu 3.2.3:** Chứng minh rằng bán kính các đường tròn ngoại tiếp các tam giác $\Delta AHB, \Delta AHC, \Delta BHC$ bằng nhau và cùng bằng bán kính $R$ của đường tròn $(O)$.
- **Câu 3.2.4:** Kéo dài đường kính $AO$ cắt đường tròn $(O)$ tại $K$. Chứng minh rằng tứ giác $BHCK$ là hình bình hành.
- **Câu 3.2.5:** Chứng minh rằng ba điểm $K, H, M$ thẳng hàng và $H, M, K$ theo thứ tự đó, với $M$ là trung điểm của đoạn thẳng $HK$.
- **Câu 3.2.6:** Chứng minh rằng $A$ là điểm chính giữa của cung $QR$.
- **Câu 3.2.7:** Chứng minh rằng: $EF \parallel RQ$.
- **Câu 3.2.8:** Chứng minh rằng: $OA \perp EF$.
- **Câu 3.2.9:** Cho $BC$ là dây cung cố định của đường tròn $(O; R)$. Điểm $A$ chuyển động trên cung lớn $BC$ sao cho tam giác $ABC$ nhọn, có các đường cao $BE, CF$. Chứng minh rằng đường thẳng đi qua $A$ và vuông góc với $EF$ luôn đi qua một điểm cố định (chính là tâm $O$).
- **Câu 3.2.10 (Đường thẳng Euler):** Gọi $G$ là trọng tâm của tam giác $ABC$. Chứng minh rằng: ba điểm $H, G, O$ thẳng hàng và $HG = 2GO$ (đường thẳng đi qua $H, G, O$ được gọi là *đường thẳng Euler*).
- **Câu 3.2.11:** Chứng minh rằng khi $A$ chuyển động trên cung lớn $BC$ thì bán kính đường tròn ngoại tiếp tam giác $AEF$ không đổi.
- **Câu 3.2.12:** Tìm vị trí của đỉnh $A$ trên cung lớn $BC$ sao cho tích $(HD \cdot AD)$ đạt giá trị lớn nhất.
- **Câu 3.2.13:** Chứng minh rằng:
$$
BH \cdot BE + CH \cdot CF = BC^2
$$
- **Câu 3.2.14:** Chứng minh rằng:
$$
AH \cdot AD + BH \cdot BE + CH \cdot CF = \frac{AB^2 + BC^2 + CA^2}{2}
$$
- **Câu 3.2.15:** Chứng minh rằng trực tâm $H$ là tâm đường tròn nội tiếp của tam giác trực giác $EFD$.
- **Câu 3.2.16:** Khi góc $\widehat{ABC} = 60^\circ$, chứng minh rằng tam giác $MEF$ là tam giác đều.
- **Câu 3.2.17:** Cho góc $\widehat{BAC} = 45^\circ$. Tính diện tích tam giác $MEF$ theo bán kính $R$.
- **Câu 3.2.18:** Chứng minh đẳng thức:
$$
\frac{AP}{AD} + \frac{BQ}{BE} + \frac{CR}{CF} = 4
$$
- **Câu 3.2.19:** Đường tròn đường kính $AB$ cắt $CF$ tại $A_1$, đường tròn đường kính $AC$ cắt $BE$ tại $A_2$. Chứng minh rằng: $AA_1 = AA_2$.
- **Câu 3.2.20:** Kẻ đường kính $BOS$. Từ $C$ kẻ $CT \perp BS$. Chứng minh rằng: $EF = CT$.
- **Câu 3.2.21:** Gọi $A_3$ là trung điểm của $EF$. Chứng minh rằng: $OA \cdot AA_3 = AM \cdot MO$.
- **Câu 3.2.22:** Tìm vị trí của đỉnh $A$ trên cung lớn $BC$ sao cho chu vi tam giác trực giác $EF + ED + FD$ đạt giá trị lớn nhất.
- **Câu 3.2.23:** Chứng minh rằng:
$$
AB \cdot AC = 2R \cdot AD
$$
- **Câu 3.2.24:** Chứng minh công thức tính diện tích tam giác:
$$
S = \frac{AB \cdot BC \cdot CA}{4R}
$$
- **Câu 3.2.25:** Tìm hệ thức liên hệ giữa tỉ số lượng giác của góc $B$ và góc $C$ để đoạn thẳng nối trực tâm và tâm ngoại tiếp $OH \parallel BC$.
- **Câu 3.2.26:** Đường kính $AK$ cắt $EF$ tại $A_1$. Chứng minh rằng tứ giác $FA_1KB$ nội tiếp đường tròn.
- **Câu 3.2.27:** Từ $A$ kẻ hai tiếp tuyến $AL, AN$ đến đường tròn ngoại tiếp tứ giác $BFEC$. Chứng minh rằng: ba điểm $L, H, N$ thẳng hàng.

---

### 3.3. Hướng dẫn giải chương 3

- **Câu 3.2.1:** Tứ giác $BFEC$ có $\widehat{BEC} = \widehat{BFC} = 90^\circ$ cùng nhìn cạnh $BC$ dưới một góc vuông, nên $BFEC$ nội tiếp đường tròn đường kính $BC$.
- **Câu 3.2.2:** Ta có $\widehat{CBP} = \widehat{CAP}$ (cùng chắn cung $CP$). Mặt khác $\widehat{CAP} = \widehat{CBH}$ (cùng phụ với $\widehat{C}$). Suy ra $\widehat{CBP} = \widehat{CBH}$, do đó $BC$ là phân giác góc $\widehat{HBP}$. Vì $BC \perp HP$ tại $D$ nên $\Delta HBP$ cân tại $B$, suy ra $D$ là trung điểm $HP$, tức $P$ đối xứng với $H$ qua $BC$. Tương tự cho $Q$ và $R$.
- **Câu 3.2.3:** Vì $\Delta HBC = \Delta KBC$ (đối xứng qua $BC$) và đường tròn ngoại tiếp $\Delta KBC$ chính là $(O)$, nên bán kính đường tròn ngoại tiếp $\Delta HBC$ bằng bán kính $R$ của $(O)$. Tương tự cho $\Delta HAB$ và $\Delta HAC$.
- **Câu 3.2.4:** Vì $AK$ là đường kính nên $\widehat{ABK} = \widehat{ACK} = 90^\circ$. Suy ra $CK \perp AC \Rightarrow CK \parallel BH$ (cùng vuông góc $AC$) và $BK \perp AB \Rightarrow BK \parallel CH$ (cùng vuông góc $AB$). Vậy tứ giác $BHCK$ là hình bình hành.
- **Câu 3.2.5:** Do $BHCK$ là hình bình hành nên hai đường chéo $BC$ và $HK$ cắt nhau tại trung điểm của mỗi đường. Vì $M$ là trung điểm của $BC$ nên $M$ cũng là trung điểm của $HK$. Do đó $K, H, M$ thẳng hàng.
- **Câu 3.2.6:** Ta có $\widehat{ACF} = \widehat{ABE}$ (cùng phụ $\widehat{A}$), suy ra cung $\overset{\frown}{AR} = \overset{\frown}{AQ}$, do đó $A$ là điểm chính giữa của cung $QR$.
- **Câu 3.2.7:** Do $A$ là điểm chính giữa cung $QR$ nên tiếp tuyến tại $A$ song song với $QR$. Mặt khác tiếp tuyến tại $A$ vuông góc với $OA$, mà $OA \perp EF$ nên $EF \parallel QR$.
- **Câu 3.2.8:** Kẻ tiếp tuyến $Ax$ của $(O)$ tại $A$. Ta có $\widehat{xAB} = \widehat{ACB}$ (góc tạo bởi tiếp tuyến và dây cung). Mặt khác do tứ giác $BFEC$ nội tiếp nên $\widehat{AEF} = \widehat{ABC}$. Suy ra $Ax \parallel EF$, mà $OA \perp Ax$ nên $OA \perp EF$.
- **Câu 3.2.9:** Theo chứng minh ở câu 3.2.8, đường thẳng qua $A$ vuông góc với $EF$ chính là đường thẳng chứa bán kính $AO$, luôn đi qua tâm $O$ cố định.
- **Câu 3.2.10:** Xét tam giác $AHK$, ta có $AM$ là trung tuyến. Vì $G$ là trọng tâm tam giác $ABC$ nên $G$ nằm trên $AM$ và $AG = \frac{2}{3}AM$. Mặt khác trong tam giác $AHK$, $OM$ là đường trung bình ứng với cạnh $AH$ nên $OM \parallel AH$ và $AH = 2OM$. Do đó $\Delta HGA \sim \Delta OGM\text{ (c-g-c)}$, suy ra $\widehat{HGA} = \widehat{OGM}$, tức $H, G, O$ thẳng hàng và $HG = 2GO$.
- **Câu 3.2.11:** Tứ giác $AFHE$ nội tiếp đường tròn đường kính $AH$. Bán kính của đường tròn ngoại tiếp $\Delta AEF$ bằng $\frac{AH}{2} = OM$. Vì dây $BC$ cố định nên khoảng cách $OM$ từ $O$ đến $BC$ không đổi, do đó bán kính này không đổi.
- **Câu 3.2.12:** Do tứ giác $ABPC$ nội tiếp nên $DA \cdot DP = DB \cdot DC$. Vì $P$ đối xứng với $H$ qua $BC$ nên $DP = HD$. Do đó $HD \cdot AD = DB \cdot DC$. Tích này lớn nhất khi $D$ trùng với trung điểm $M$ của $BC$, tức tam giác $ABC$ cân tại $A$.
- **Câu 3.2.13:** Xét $\Delta BHE \sim \Delta BCD\text{ (g-g)} \Rightarrow BH \cdot BE = BD \cdot BC$. Tương tự $\Delta CHF \sim \Delta CBD \Rightarrow CH \cdot CF = CD \cdot BC$. Cộng từng vế ta được:
$$
BH \cdot BE + CH \cdot CF = BC(BD + CD) = BC^2
$$
- **Câu 3.2.14:** Tương tự câu 3.2.13:
$$
AH \cdot AD + BH \cdot BE = AB^2,\quad AH \cdot AD + CH \cdot CF = AC^2,\quad BH \cdot BE + CH \cdot CF = BC^2
$$
Cộng cả ba hệ thức lại ta thu được kết quả:
$$
AH \cdot AD + BH \cdot BE + CH \cdot CF = \frac{AB^2 + BC^2 + CA^2}{2}
$$
- **Câu 3.2.15:** Chứng minh các góc $\widehat{HDE} = \widehat{HDF}$ bằng cách quan sát các tứ giác nội tiếp $DHEC$ và $DHFA$. Khi đó $DA$ là phân giác trong của góc $\widehat{EDF}$. Tương tự $EB, FC$ là phân giác trong của các góc còn lại, nên $H$ là tâm đường tròn nội tiếp tam giác $EFD$.
- **Câu 3.2.16:** Ta có $\widehat{ABC} = 60^\circ \Rightarrow \widehat{FEB} = 30^\circ$. Trong tam giác vuông $BEC$ có $M$ là trung điểm $BC$ nên $ME = MB = MC \Rightarrow \Delta MBE$ cân tại $M \Rightarrow \widehat{EMF} = 2\widehat{FEB} = 60^\circ$. Kết hợp $ME = MF = \frac{1}{2}BC$ suy ra tam giác $MEF$ đều.
- **Câu 3.2.17:** Khi $\widehat{BAC} = 45^\circ$, tứ giác $AFHE$ có $\widehat{A} = 45^\circ$ nên $\widehat{FHE} = 135^\circ \Rightarrow \widehat{BHC} = 135^\circ$. Khi đó tam giác $MEF$ vuông cân tại $M$, tính được diện tích theo $R$.
- **Câu 3.2.18:** Ta có:
$$
\frac{AP}{AD} = \frac{AD + DP}{AD} = 1 + \frac{HD}{AD}
$$
Do đó:
$$
\frac{AP}{AD} + \frac{BQ}{BE} + \frac{CR}{CF} = 3 + \left(\frac{HD}{AD} + \frac{HE}{BE} + \frac{HF}{CF}\right)
$$
Mặt khác, $\frac{S_{HBC}}{S_{ABC}} = \frac{HD}{AD}$, $\frac{S_{HAC}}{S_{ABC}} = \frac{HE}{BE}$, $\frac{S_{HAB}}{S_{ABC}} = \frac{HF}{CF}$. Tổng ba tỉ số này bằng $1$, nên:
$$
\frac{AP}{AD} + \frac{BQ}{BE} + \frac{CR}{CF} = 3 + 1 = 4
$$
- **Câu 3.2.19:** Theo hệ thức lượng trong tam giác vuông: $AA_1^2 = AF \cdot AB$ và $AA_2^2 = AE \cdot AC$. Mặt khác do tứ giác $BFEC$ nội tiếp nên $AF \cdot AB = AE \cdot AC$, do đó $AA_1 = AA_2$.
- **Câu 3.2.20:** Chứng minh tứ giác $FETC$ là hình thang cân nên hai đường chéo bằng nhau: $EF = CT$.
- **Câu 3.2.21:** Sử dụng tam giác đồng dạng $\Delta AEF \sim \Delta ABC$ kết hợp tỉ số trung tuyến tương ứng.
- **Câu 3.2.22:** Gọi $W, Z$ lần lượt là hình chiếu của $O$ trên $AB, AC$. Ta có $2S_{ABC} = OM \cdot BC + OW \cdot AC + OZ \cdot AB$, kết hợp tính chất chu vi tam giác trực giác đạt giá trị lớn nhất khi $A$ là điểm chính giữa cung lớn $BC$.
- **Câu 3.2.23:** Kẻ đường kính $AK = 2R$. Ta có $\Delta ABK \sim \Delta ADC\text{ (g-g)} \Rightarrow \frac{AB}{AD} = \frac{AK}{AC} \Rightarrow AB \cdot AC = 2R \cdot AD$.
- **Câu 3.2.24:** Từ câu 3.2.23, ta có $AD = \frac{AB \cdot AC}{2R}$. Thay vào công thức diện tích $S = \frac{1}{2}BC \cdot AD = \frac{AB \cdot BC \cdot CA}{4R}$.
- **Câu 3.2.25:** $OH \parallel BC \iff AH = OM \iff \tan B \cdot \tan C = 3$.
- **Câu 3.2.26:** Sử dụng tính chất $AK \perp EF$ tại $A_1$, kết hợp $\widehat{ABK} = 90^\circ$ để suy ra tứ giác $FA_1KB$ nội tiếp đường tròn đường kính $AK$.
- **Câu 3.2.27:** Chứng minh $\Delta ALH \sim \Delta ADL$ thông qua phương tích của điểm $A$ đối với đường tròn $(BFEC)$, suy ra $L, H, N$ thẳng hàng.

---

## 4. Chùm bài toán về phương tích

*Phương tích của một điểm đối với đường tròn là công cụ cực kỳ mạnh mẽ để giải quyết các bài toán chứng minh hệ thức nhân, điểm thuộc đường tròn cố định, tiếp tuyến và sự đồng quy, thẳng hàng trong các kì thi vào lớp 10 chuyên.*

### 4.1. Mô hình cơ bản

Cho đường tròn tâm $(O)$. Cho điểm $M$ nằm ngoài $(O)$, kẻ hai tiếp tuyến $MA, MB$ ($A, B$ là các tiếp điểm) và cát tuyến $MCD$ tới $(O)$, với $MC < MD$ và đường thẳng $CD$ không đi qua tâm $O$. Gọi $I$ là trung điểm của dây cung $CD$. Đoạn thẳng $AB$ cắt $MO$ tại $H$.

![Mô hình cơ bản về phương tích của điểm M tới đường tròn (O)](/assets/images/hinh-hoc-10/phuong-tich-mo-hinh.png)

### 4.2. Khai thác mô hình

- **Câu 4.2.1:** Chứng minh rằng:
$$
MA^2 = MC \cdot MD
$$
- **Câu 4.2.2:** Chứng minh rằng:
$$
OH \cdot OM + MC \cdot MD = MO^2
$$
- **Câu 4.2.3:** Chứng minh rằng 5 điểm $M, A, I, O, B$ cùng thuộc một đường tròn.
- **Câu 4.2.4:** Gọi $H_1$ là trực tâm tam giác $\Delta MAB$. Chứng minh rằng độ dài của đoạn thẳng $H_1 A$ không phụ thuộc vào vị trí của điểm $M$.
- **Câu 4.2.5:** Chứng minh rằng $IM$ là tia phân giác của góc $\widehat{AIB}$.
- **Câu 4.2.6:** Chứng minh rằng: Tứ giác $CHOD$ nội tiếp một đường tròn.
- **Câu 4.2.7:** Chứng minh rằng: $HA$ là tia phân giác của góc $\widehat{CHD}$.
- **Câu 4.2.8:** Tia $BI$ cắt đường tròn $(O)$ tại điểm $Y'$. Chứng minh rằng: $AY' \parallel MD$.
- **Câu 4.2.9 (Trích đề thi vào 10 Hà Nội, 2013-2014):** Kẻ đường thẳng $d \parallel MO$ cắt đường kính $AA'$ tại $Y$. Chứng minh rằng: $IY \parallel A'C$.
- **Câu 4.2.10:** Gọi $E$ là trung điểm của $MA$, $W$ là hình chiếu của $E$ trên $MO$. Kẻ tiếp tuyến $WV$ với $(O)$. Chứng minh rằng: $MV \perp VH$.
- **Câu 4.2.11:** Gọi $J$ là giao điểm của đoạn thẳng $MO$ với $(O)$. Chứng minh rằng $J$ là tâm đường tròn nội tiếp của tam giác $\Delta MAB$.
- **Câu 4.2.12:** Gọi $N$ là giao điểm của $AB$ và $CD$. Chứng minh rằng: Tứ giác $OHNI$ nội tiếp một đường tròn.
- **Câu 4.2.13:** Chứng minh rằng:
$$
MA^2 = MN \cdot MI
$$
- **Câu 4.2.14:** Tiếp tuyến tại $C$ và $D$ của $(O)$ cắt nhau tại $K$. Từ $K$ kẻ đường thẳng vuông góc với $MO$ cắt $(O)$ tại $A$ và $B$. Chứng minh $MA$ và $MB$ là các tiếp tuyến của $(O)$.
- **Câu 4.2.15:** Tiếp tuyến tại $C$ và $D$ của $(O)$ cắt nhau tại $K$. Chứng minh rằng: ba điểm $A, B, K$ thẳng hàng.
- **Câu 4.2.16:** Giả sử $M, C, D$ cố định. Đường tròn $(O)$ thay đổi nhưng luôn đi qua $C$ và $D$. Chứng minh các tiếp điểm $A, B$ luôn chuyển động trên một đường tròn cố định.
- **Câu 4.2.17:** Đường thẳng đi qua $C$ và vuông góc với $OA$ cắt $AB, AD$ lần lượt tại $A_1$ và $A_2$. Chứng minh rằng: $CA_1 = A_1 A_2$.
- **Câu 4.2.18:** Gọi $P$ là trung điểm của $MA$, $E$ là giao điểm của $BP$ với đường tròn $(O)$. Tia $ME$ cắt đường tròn $(O)$ tại $F$. Chứng minh rằng $\Delta MPE \sim \Delta BPM$ và $BF \parallel MA$.
- **Câu 4.2.19:** Xác định vị trí của điểm $M$ để tứ giác $AMBF$ là hình bình hành.
- **Câu 4.2.20:** Qua $O$ kẻ đường thẳng vuông góc với $MO$ cắt $MA$ và $MB$ lần lượt tại $P$ và $Q$. Tìm vị trí của điểm $M$ để diện tích tam giác $\Delta MPQ$ đạt giá trị nhỏ nhất.
- **Câu 4.2.21 (Trích đề thi vào 10 Ninh Bình, 2017-2018):** Tiếp tuyến tại một điểm trên cung nhỏ $AB$ của đường tròn $(O)$ cắt $MA$ và $MB$ lần lượt tại $E$ và $F$. Chứng minh rằng: $\widehat{POE} = \widehat{OFQ}$ và $PE + QF \ge PQ$.
- **Câu 4.2.22:** $AB$ cắt $OE$ và $OF$ lần lượt tại $Q'$ và $P'$. Chứng minh rằng tâm đường tròn ngoại tiếp tam giác $\Delta OEF$ luôn nằm trên một đường thẳng cố định khi cát tuyến $MCD$ quay quanh $M$.

---

### 4.3. Hướng dẫn giải chương 4

- **Câu 4.2.1:** Xét hai tam giác $\Delta MAC$ và $\Delta MDA$, ta có góc $\widehat{M}$ chung và $\widehat{MAC} = \widehat{MDA}$ (góc tạo bởi tiếp tuyến và dây cung cùng chắn cung $AC$). Do đó $\Delta MAC \sim \Delta MDA\text{ (g-g)} \Rightarrow \frac{MA}{MD} = \frac{MC}{MA} \Rightarrow MA^2 = MC \cdot MD$.
- **Câu 4.2.2:** Trong tam giác vuông $MAO$ có đường cao $AH$, theo hệ thức lượng ta có $OH \cdot OM = OA^2 = R^2$ và $MA^2 = MO^2 - OA^2$. Do đó $OH \cdot OM + MC \cdot MD = R^2 + MA^2 = MO^2$.
- **Câu 4.2.3:** Vì $MA, MB$ là tiếp tuyến nên $\widehat{MAO} = \widehat{MBO} = 90^\circ$. Do $I$ là trung điểm dây cung $CD$ không qua tâm nên $OI \perp CD \Rightarrow \widehat{MIO} = 90^\circ$. Năm điểm $M, A, I, O, B$ cùng nhìn đoạn $MO$ dưới góc $90^\circ$ nên cùng thuộc đường tròn đường kính $MO$.
- **Câu 4.2.4:** Tứ giác $AOBH_1$ có các cạnh đối song song nên là hình bình hành, suy ra $H_1 A = OB = R$ không đổi khi $M$ di chuyển.
- **Câu 4.2.5:** Do 5 điểm $M, A, I, O, B$ cùng nằm trên đường tròn đường kính $MO$ và $MA = MB$ (tính chất 2 tiếp tuyến cắt nhau), nên hai cung chắn $\overset{\frown}{MA} = \overset{\frown}{MB}$. Suy ra góc nội tiếp $\widehat{AIM} = \widehat{BIM}$, tức $IM$ là tia phân giác của góc $\widehat{AIB}$.
- **Câu 4.2.6:** Theo hệ thức lượng: $MH \cdot MO = MA^2 = MC \cdot MD \Rightarrow \frac{MH}{MD} = \frac{MC}{MO}$. Kết hợp góc $\widehat{M}$ chung suy ra $\Delta MHC \sim \Delta MDO\text{ (c-g-c)} \Rightarrow \widehat{MHC} = \widehat{MDO}$. Do đó tứ giác $CHOD$ nội tiếp đường tròn.
- **Câu 4.2.7:** Từ tứ giác $CHOD$ nội tiếp, ta có $\widehat{CHO} = \widehat{CDO}$. Kết hợp tính chất góc ngoài suy ra tia $HA$ (vuông góc với $MO$) là phân giác của góc $\widehat{CHD}$.
- **Câu 4.2.8:** Chứng minh $\widehat{AY'B} = \widehat{MIB}$ từ các góc nội tiếp chắn cùng cung, suy ra $AY' \parallel MD$.
- **Câu 4.2.9:** Chứng minh góc $\widehat{DIY} = \widehat{DCA'}$ dựa trên tính đồng dạng và các đường thẳng song song $d \parallel MO$.
- **Câu 4.2.10:** Sử dụng phương tích đối với điểm $W$ và $E$: chứng minh đẳng thức $OV^2 + WV^2 = WH^2 + OA^2$, từ đó suy ra $MV \perp VH$.
- **Câu 4.2.11:** Đoạn thẳng $MO$ là tia phân giác của góc $\widehat{AMB}$. Mặt khác ta chứng minh được $AJ$ là tia phân giác của góc $\widehat{MAB}$, do đó $J$ là giao điểm các đường phân giác trong của tam giác $\Delta MAB$, tức $J$ là tâm đường tròn nội tiếp $\Delta MAB$.
- **Câu 4.2.12:** Xét tích $NM \cdot NI = NC \cdot ND = NA \cdot NB = NH \cdot NO$, suy ra tứ giác $OHNI$ nội tiếp đường tròn (với $\widehat{NIO} + \widehat{NHO} = 180^\circ$).
- **Câu 4.2.13:** Dựa vào hệ thức phương tích của cụm tứ giác nội tiếp $HNIO$ và $CHOD$, ta có $MA^2 = MH \cdot MO = MN \cdot MI$.
- **Câu 4.2.14:** Vì $KC, KD$ là tiếp tuyến của $(O)$ nên $OK \perp CD$ tại $I$, do đó $OI \cdot OK = OC^2 = OA^2$. Suy ra $\Delta OIA \sim \Delta OAK$, dẫn đến $MA, MB$ là tiếp tuyến.
- **Câu 4.2.15:** Đường thẳng $AB$ là trục đẳng phương của điểm $M$ và đường tròn $(O)$, điểm $K$ có cùng phương tích đối với các đường tròn liên quan nên $K, H, A, B$ thẳng hàng.
- **Câu 4.2.16:** Ta có $MA^2 = MB^2 = MC \cdot MD$. Vì $M, C, D$ cố định nên tích $MC \cdot MD = k^2$ không đổi, suy ra $MA = MB = k$ không đổi. Vậy các tiếp điểm $A, B$ luôn di chuyển trên đường tròn tâm $M$ cố định bán kính $k = \sqrt{MC \cdot MD}$.
- **Câu 4.2.17:** Chứng minh đoạn thẳng $A_1 I$ là đường trung bình của tam giác $\Delta CA_2 D$, từ đó suy ra $CA_1 = A_1 A_2$.
- **Câu 4.2.18:** Do $P$ là trung điểm $MA$ nên $PA^2 = PE \cdot PB \Rightarrow PM^2 = PE \cdot PB \Rightarrow \Delta MPE \sim \Delta BPM$. Từ đó so sánh góc suy ra $BF \parallel MA$.
- **Câu 4.2.19:** Tứ giác $AMBF$ là hình bình hành khi và chỉ khi tam giác $\Delta MAB$ là tam giác đều, tương ứng với $MO = 2R$.
- **Câu 4.2.20:** Diện tích tam giác $\Delta MPQ$ là $S = \frac{1}{2}MO \cdot PQ$. Ta có $PQ = MP + MQ = 2MP$, và $MP = MA + AP \ge 2\sqrt{MA \cdot AP} = 2R$. Dấu bằng xảy ra khi $M$ cách $O$ một khoảng $MO = R\sqrt{2}$.
- **Câu 4.2.21:** Vận dụng tính chất hai tiếp tuyến cắt nhau và biến đổi góc để chứng minh $\widehat{POE} = \widehat{OFQ}$, kết hợp bất đẳng thức tam giác để có $PE + QF \ge PQ$.
- **Câu 4.2.22:** Gọi $T$ là giao điểm của đường tròn ngoại tiếp tam giác $\Delta OEF$ với đường thẳng $MO$. Chứng minh $OT$ là đường kính không đổi, suy ra tâm đường tròn ngoại tiếp $\Delta OEF$ luôn chạy trên đường trung trực của đoạn thẳng $OT$ cố định.

---

> [!TIP] Lời khuyên học tập
> Chuyên đề hình học thi vào lớp 10 tập hợp bốn khối kiến thức nền tảng quan trọng nhất: Pythagore, Thales, Trực tâm và Phương tích. Các em học sinh hãy rèn luyện thói quen vẽ hình chính xác, nhận diện mô hình quen thuộc trước khi đặt bút biến đổi. Chúc các em tự tin bứt phá điểm số tối đa trong kỳ thi tuyển sinh vào lớp 10!
