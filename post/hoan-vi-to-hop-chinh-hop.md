---
title: Hoán vị – Tổ hợp – Chỉnh hợp
description: Để giải quyết các bài toán đếm, ngoài 3 quy tắc đếm cơ bản, chúng ta còn cần thêm công thức hoán vị, tổ hợp, chỉnh hợp để trình bày lời giải ngắn gọn, chính xác.
category: Toán học
type: Bài học
grade: 11
date: '2021-08-17'
tags:
- Toán học
- Tổ hợp
- Xác suất
- Hoán vị
- Chỉnh hợp
- Toán 11
---

Để giải quyết các bài toán đếm, ngoài 3 quy tắc đếm cơ bản, chúng ta còn cần thêm một số kiên thức nữa mới giúp việc trình bày lời giải một cách ngắn gọn, đơn giản. Chẳng hạn, các bài toán sau đều cần sử dụng công thức về hoán vị, tổ hợp, chỉnh hợp:

Các bạn Xuân, Hạ, Thu, Đông đi chụp ảnh kỉ niệm, ông thợ ảnh sắp xếp bốn bạn thành một hàng ngang. Hỏi ông ta có mấy cách sắp xếp?

Lớp 11A có 40 học sinh. Cô chủ nhiệm muốn chọn ra 5 học sinh để làm ban cán sự lớp gồm: 1 lớp trưởng, 1 lớp phó lao động, 1 lớp phó học tập, 1 lớp phó văn nghệ và 1 thủ quỹ. Hỏi cô có bao nhiêu cách chọn?

Vẫn lớp 11A đó, cô giáo muốn chọn ra 5 học sinh để đi dự lễ kỉ niệm ngày Quốc khánh. Hỏi cô có bao nhiêu cách?

![Hoán vị Tổ hợp Chỉnh hợp](assets/images/hoan-vi-to-hop-chinh-hop-Hoan-vi-to-hop-chinh-hop.png)

Xem thêm [1000 bài toán Đại số Tổ hợp – Xác Suất có lời giải](/bai-viet/1000-bai-toan-dai-so-to-hop-xac-suat-co-loi-giai.html)

## 1. Khái niệm Hoán vị – Tổ hợp – Chỉnh hợp

### 1.1. Hoán vị

Cho tập hợp $A$ gồm $n$ phần tử $(n\ge 1).$ Mỗi cách sắp xếp thứ tự $n$ phần tử của tập hợp $A$ được gọi là một hoán vị của $n$ phần tử đó.

Gọi $P_n$ là số các hoán vị của tập gồm $n$ phần tử thì ta có 

$$
P_n=n!=n(n-1)(n-2)….3.2.1
$$

### 1.2. Chỉnh hợp.

Cho tập hợp $A$ gồm $n$ phần tử $(n\ge 1).$ Mỗi bộ gồm $k$ phần tử $(0\le k\le n)$ *sắp thứ tự* của tập hợp $A$ được gọi là chỉnh hợp chập $k$ của $n$ phần tử đã cho. Gọi $A^k_n$ là số chỉnh hợp chập $k$ của $n$ phần tử, thì ta có 

$$
A^k_n=n(n-1)(n-2)…(n-k+1)=\frac{n!}{(n-k)!}
$$

### 1.3. Tổ hợp.

Mỗi tập con gồm $k$ phần tử của tập hợp $A$ được gọi là một tổ hợp chập $k$ của $n$ phần tử đã cho. Gọi $C^k_n$ là số tổ hợp chập $k$ của $n$ phần tử, thì ta có 

$$
C^k_n=\frac{n!}{k!(n-k)!}=\frac{A^k_n}{k!}
$$

### 1.4. Các tính chất của hoán vị, tổ hợp, chỉnh hợp

- $n!=n\cdot (n-1)!$

- $C^k_n=C^{n-k}_n$

- $C^k_n+C^{k+1}_n=C^{k+1}_{n+1}$

### 1.5. Phân biệt hoán vị, chỉnh hợp, tổ hợp

Hoán vị và chỉnh hợp có phân biệt *thứ tự, vị trí, chức năng, vai trò, nhiệm vụ…* giữa các phần tử được chọn ra; còn tổ hợp thì không!

Để chọn ra các chỉnh hợp chập $k$ của $n$ phần tử có thể hiểu là gồm hai bước:

- Bước 1. Chọn ra $k$ phần tử của $n$ phần tử, nên có $C^k_n$ cách.

- Bước 2. Ứng với mỗi $k$ phần tử được chọn, ta đem sắp xếp cả $k$ phần tử này vào các thứ tự (nhiệm vụ…) khác nhau nên bước này có $k!$ cách.

Như vậy, theo quy tắc nhân có $k!C^k_n$ cách, nghĩa là $A^k_n=k!C^k_n$ hay $C^k_n=\frac{A^k_n}{k!}$

## 2. Các dạng toán về hoán vị – tổ hợp – chỉnh hợp

### 2.1. Bài toán đếm

Để giải quyết các bài toán đếm, ta có hai cách làm: *đếm trực triếp* (hỏi gì đếm nấy) và *đếm gián tiếp*(đây chính là sử dụng nguyên lý bù trừ đã nói ở bài [3 quy tắc đếm cơ bản và bài tập vận dụng](/bai-viet/3-quy-tac-dem-co-ban-nguyen-ly-bu-tru.html), tức là đếm phần dễ đếm để suy ra phần cần đếm). Chúng ta sẽ lần lượt xét hai cách đó qua các ví dụ sau. Đầu tiên là *phương pháp đếm trực tiếp*:

**Ví dụ 1.** Từ 5 chữ số $1, 2, 3, 4, 5$ có thể lập được bao nhiêu số tự nhiên gồm 5 chữ số khác nhau?

**Hướng dẫn.** Mỗi cách sắp xếp bộ 5 chữ số $1,2,3,4,5$ cho ta một số tự nhiên. Nói cách khác, mỗi một số tự nhiên cần lập tương ứng với một hoán vị của 5 phần tử đã cho. Do đó, có tất cả $5!=120$ số.

**Ví dụ 2.** Trong mặt phẳng cho 5 điểm phân biệt. Hỏi có bao nhiêu đoạn thẳng, bao nhiêu véctơ được tạo thành từ 5 điểm đó?

**Hướng dẫn.** Mỗi một đoạn thẳng tương ứng với một tổ hợp chập 2 của 5 phần tử, nên có $C^2_5=10$ đoạn thẳng.

Mỗi một véctơ tương ứng với một chỉnh hợp chập hai của 5 phần tử, nên có $A^2_5= 20$ véctơ.

**Ví dụ 3.** Từ các chữ số $0, 1, 2, 3, 4$ có thể lập được bao nhiêu số tự nhiên có 5 chữ số khác nhau?

**Hướng dẫn.** Giả sử số cần lập là $\overline{a_1a_2a_3a_4a_5}$ trong đó $a_1\ne 0$ và $a_i\ne a_j.$ Để tạo thành số thỏa mãn yêu cầu ta phải trải qua hai bước:

- **Bước 1.** Chọn $a_1\ne 0$ nên có 4 cách chọn, sau bước này còn lại $4$ số chưa được chọn.

- **Bước 2.** Sắp xếp bốn chữ số còn lại vào bốn vị trí còn lại, có $4!=24$ cách.

Như vậy, theo qui tắc nhân, ta có $4.24=96$ số thỏa mãn yêu cầu.

**Ví dụ 4.** [CĐ KTKT 2006] Cho tập $E=\{1,2,3,4,5,6,7\}.$ Từ tập $E$ lập được bao nhiêu số chẵn có 5 chữ số khác nhau?

**Hướng dẫn.** Giả sử số cần lập là $\overline{a_1a_2a_3a_4a_5}$ trong đó $a_i\in E, a_1\ne 0$ và $a_i\ne a_j,a_5$ chẵn. Để lập được số thỏa mãn yêu cầu ta tiến hành hai bước:

- Chọn $a_5$ chẵn từ các số $2,4,6$: Có 3 cách.

- Còn lại 6 chữ số chưa được chọn. Mỗi cách chọn có phân biệt thứ tự bộ 4 số $a_1,a_2,a_3,a_4$ từ 6 chữ số còn lại là một chỉnh hợp chập $4$ của 6 phần tử. Do đó, có $A^4_6=360$ cách.

Theo quy tắc nhân, có $3.360=1080$ số thỏa mãn yêu cầu.

**Ví dụ 5.** [CĐ2007] Từ các chữ số $0,1,2,3,4,5$ có thể lập được bao nhiêu số tự nhiên gồm 5 chữ số khác nhau và chia hết cho 3?

**Hướng dẫn.** Gọi số cần lập là $\overline{a_1a_2a_3a_4a_5}$ với $a_i\ne a_j, a_1\ne 0, (a_1+a_2+a_3+a_4+a_5)$ chia hết cho 3.

Có 6 chữ số tất cả, mà lập số có 5 chữ số khác nhau nên số cần lập được tạo thành từ các chữ số: $0,1,2,3,4$ hoặc $0,1,2,3,5$ hoặc $0,1,2,4,5$ hoặc $0,1,3,4,5$ hoặc $0,2,3,4,5$ hoặc $1,2,3,4,5.$

Trong 6 trường hợp này, chỉ có hai trường hợp thỏa mãn yêu cầu $a_1+a_2+a_3+a_4+a_5$ chia hết cho 3. Do đó ta xét hai trường hợp:

- TH1. Số cần lập được tạo thành từ các chữ số $1,2,3,4,5.$ Mỗi số cần lập tương ứng với một hoán vị của 5 phần tử, nên có $5!=120$ số.

- TH2. Số cần lập được tạo thành từ các chữ số $0,1,2,4,5.$ Ta tiến hành 2 bước:

Bước 1. Chọn $a_1\ne 0$: Có 4 cách chọn.

- Sắp xếp 4 chữ số còn lại vào 4 vị trí còn lại: Có $4!=24$ cách.

  Theo qui tắc nhân, TH2 có $4.24=96$ số.

Vậy, có tất cả $120+96=216$ số thỏa mãn yêu cầu.

**Ví dụ 6.** [CĐ SPTW 2007] Một tổ học sinh 10 người gồm 6 nam và 4 nữ. Hỏi có bao nhiêu cách chọn ra nhóm 5 người để làm trực nhật mà nhóm đó có không quá một nữ?

**Hướng dẫn.** Vì nhóm đó có không quá một nữ nên ta xét hai phương án:

- Phương án 1: Nhóm gồm 1 nữ và 4 nam. Việc lập nhóm gồm 2 bước:

Chọn 1 nữ từ 4 nữ, có $C^1_4=4$ cách.

- Sau đó, chọn 4 nam từ 6 nam, có $C^4_6=15$ cách.

Theo quy tắc nhân, phương án 1 có $4.15=60$ cách.

- Phương án 1: Nhóm gồm 0 nữ và 5 nam. Chọn 5 học sinh nam từ nhóm 6 học sinh nam, nên có $C^5_6=6$ cách.

Theo quy tắc cộng, ta có $60+6=66$ cách chọn nhóm 5 người thỏa mãn yêu cầu.

**Ví dụ 7.** [ĐHY 2000] Có 5 nhà toán học nam, 3 nhà toán học nữ và 4 nhà vật lý nam. Lập một đoàn công tác có 3 người cần có cả nam và nữ, cần có cả nhà toán học và nhà vật lý. Hỏi có bao nhiêu cách?

**Hướng dẫn.** Xét ba trường hợp:

- Có 1 nhà toán học nam, 1 nhà toán học nữ, 1 nhà vật lý: $C_{5}^{1}.C_{3}^{1}.C_{4}^{1}$

- Có 2 nhà toán học nữ, 1 nhà vật lý: $C_{3}^{2}.C_{4}^{1}$

- Có 1 nhà toán học nữ, 2 nhà vật lý: $C_{3}^{1}.C_{4}^{2}$

Vậy có $C_{3}^{2}.C_{4}^{1}+C_{5}^{1}.C_{3}^{1}.C_{4}^{1}+C_{3}^{1}.C_{4}^{2}=90$ cách.

**Ví dụ 8.** Có bao nhiêu số tự nhiên có 5 chữ số, chia hết cho 2 mà chữ số đầu tiên của nó cũng là số chẵn?

**Hướng dẫn.**

Vì đề bài không có yêu cầu các chữ số phải khác nhau nên chúng ta chọn thoải mái.

- **Bước 1.** Chọn chữ số đứng đầu tiên, chữ số này phải khác $0$ và chẵn, nên có $4$ cách chọn (một trong các chữ số $2,4,6,8$).

- **Bước 2.** Chọn chữ số đứng thứ hai là một trong các chữ số $0,1,2,…,9$ nên có $10$ cách.

- **Bước 3.** Chọn chữ số đứng thứ ba là một trong các chữ số $0,1,2,…,9$ nên có $10$ cách.

- **Bước 4.** Chọn chữ số đứng thứ tư là một trong các chữ số $0,1,2,…,9$ nên có $10$ cách.

- **Bước 5.** Chọn chữ số đứng cuối cùng là một chữ số chẵn $0,2,4,6,8$ nên có $5$ cách.

Theo quy tắc nhân, có $4\times 10^3\times 5=20000$ số.

**Ví dụ 9.** [B2005]Một đội thanh niên tình nguyện có 15 người, gồm 12 nam và 3 nữ. Hỏi có bao nhiêu cách phân công đội thanh niên tình nguyện đó về giúp đỡ 3 tỉnh miền núi, sao cho mỗi tỉnh có 4 nam 1 nữ.

**Hướng dẫn.** Việc phân công đội thanh niên tình nguyện về ba tỉnh gồm các bước:

- Phân công các thanh niên tình nguyện về tỉnh thứ nhất: Có $C_{3}^{1}C_{12}^{4}$ cách.

- Phân công các thanh niên tình nguyện về tỉnh thứ hai: Có $C_{2}^{1}C_{8}^{4}$ cách.

- Phân công các thanh niên tình nguyện về tỉnh thứ ba: Có $C_{1}^{1}C_{4}^{4}$ cách.

Theo quy tắc nhân, có có: $C_{3}^{1}C_{12}^{4}.$$C_{2}^{1}C_{8}^{4}.$$C_{1}^{1}C_{4}^{4}$=207900 cách phân công đội thanh niên tình nguyện về 3 tỉnh thỏa mãn yêu cầu bài toán.

**Ví dụ 10.** [B2004] Trong một môn học, thầy giáo có 30 câu hỏi khác nhau gồm 5 câu hỏi khó, 10 câu hỏi trung bình, 15 câu hỏi dễ. Từ 30 câu hỏi đó có thể lập được bao nhiêu đề kiểm tra, mỗi đề gồm 5 câu hỏi khác nhau, sao cho trong mỗi đề nhất thiết phải có đủ 3 loại câu hỏi (khó, trung bình, dễ) và số câu hỏi dễ không ít hơn 2?

**Hướng dẫn.** Mỗi đề kiểm tra phải có số câu dễ là 2 hoặc 3, nên ta có ba phương án:

- Đề có 2 câu dễ, 02 câu trung bình, 01 câu khó, thì có số cách chọn là: $C_{15}^{2}.C_{10}^{2}.C_{5}^{1}=23625$

- Đề có 2 câu dễ, 01 câu trung bình, 02 câu khó, thì có số cách chọn là: $C_{15}^{2}.C_{10}^{1}.C_{5}^{2}=10500$

- Đề có 3 câu dễ, 01 câu trung bình, 01 câu khó, thì có số cách chọn là: $C_{15}^{3}.C_{10}^{1}.C_{5}^{1}=22750$

Theo quy tắc cộng, số đề kiểm tra có thể lập được là: $23625+10500+22750=56875.$

**Ví dụ 11.** [CĐ2004] Một lớp học có 30 học sinh, trong đó có 3 cán bộ lớp. Hỏi có bao nhiêu cách để chọn 3 học sinh làm nhiệm vụ trực tuần sao cho trong 3 em đó luôn có cán bộ lớp?

**Hướng dẫn.** Chọn 3 học sinh, để đảm bảo luôn có cán bộ lớp ta xét 3 trường hợp:

- Có 1 cán bộ lớp: Có $C^1_3.C^2_{27}=1053$ cách.

- Có 2 cán bộ lớp: Có $C^2_3.C^1_{27}=81$ cách.

- Có 3 cán bộ lớp: Có $C^3_3=1$ cách.

Theo quy tắc cộng, ta có $1053+81+1=1135$ cách chọn 3 học sinh thỏa mãn yêu cầu.

Khi bài toán xuất hiện các cụm từ: {có ít nhất, luôn có…} ta thường dùng {phương pháp đếm gián tiếp!} Sau đây là một số ví dụ:

**Ví dụ 12.** [CĐ2004] Một lớp học có 30 học sinh, trong đó có 3 cán bộ lớp. Hỏi có bao nhiêu cách để chọn 3 học sinh làm nhiệm vụ trực tuần sao cho trong 3 em đó luôn có cán bộ lớp?

**Hướng dẫn.** Chúng ta sẽ giải lại bài toán này theo phương pháp đếm gián tiếp.

- Mỗi cách chọn ngẫu nhiên 3 học sinh từ lớp có 30 học sinh là một tổ hợp chập 3 của 30 phần tử. Do đó có $C^3_{30}=4060$ cách.

- Mỗi cách chọn ngẫu nhiên 3 học sinh không có cán bộ lớp là một tổ hợp chập 3 của 27 phần tử còn lại. Do đó có $C^3_{27}=2925$ cách.

- Suy ra số cách chọn 3 học sinh luôn có cán bộ lớp là $4060-2925=1135$ cách.

Để thấy tính hiệu quả của phương pháp này ta xét tiếp các ví dụ sau:

**Ví dụ 13.** Một nhóm 15 học sinh có 7 nam và 8 nữ. Chọn ra 5 người sao cho trong đó có ít nhất 1 nữ. Hỏi có bao nhiêu cách?

**Hướng dẫn.** Nếu chọn cách tính trực tiếp, chia thành các trường hợp có 1 nữ, 2 nữ, 3 nữ… 5 nữ thì sẽ rất cồng kềnh, phức tạp. Nhưng nếu chọn phương pháp tính gián tiếp, ta xem có bao nhiêu cách chọn {không có học sinh nữ } nào thì lời giải sẽ đơn giản hơn rất nhiều.

- Chọn 5 học sinh từ 15 học sinh, có $C^{5}_{15}=3003$ cách.

- Chọn 5 học sinh không có nữ thì có $C^5_7=21$ cách.

Do đó, số cách chọn 5 người sao cho trong đó có ít nhất 1 nữ là $3003-21=2982$ cách.

**Ví dụ 14.** [CĐ SPHN 2005] Trong một tổ học sinh của lớp 12A có 8 nam và 4 nữ. Thầy giáo muốn chọn ra 3 học sinh để làm trực nhật trong đó có ít nhất 1 học sinh nam. Hỏi thầy có bao nhiêu cách chọn?

**Hướng dẫn.** Có $C^3_{12}-C^3_4=216$ cách.

**Ví dụ 15.** [D2006] Đội thanh niên xung kích của một trường phổ thông có 12 học sinh, gồm 5 học sinh lớp A, 4 học sinh lớp B và 3 học sinh lớp C. Cần chọn 4 học sinh đi làm nhiệm vụ, sao cho 4 học sinh này thuộc không quá 2 trong 3 lớp trên. Hỏi có bao nhiêu cách chọn như vậy?

**Hướng dẫn.** Số cách chọn 4 học sinh trong 12 học sinh là $C_{12}^{4}=495.$

Số cách chọn 4 em học sinh mà mỗi lớp ít nhất 01 em là:

- Lớp A có 2 học sinh, lớp B và C có 01 học sinh: $C_{5}^{2}.C_{4}^{1}.C_{3}^{1}=120$

- Lớp B có 2 học sinh, lớp A và C có 01 học sinh: $C_{5}^{1}.C_{4}^{2}.C_{3}^{1}=90$

- Lớp C có 2 học sinh, lớp B và A có 01 học sinh: $C_{5}^{1}.C_{4}^{1}.C_{3}^{2}=60$

Số cách chọn 4 em mà mỗi lớp ít nhất một em là: $120+90+60=270.$

Vậy số cách chọn phải tìm là: $495-270=225.$

**Ví dụ 16.** [Chuyên Nguyễn Huệ L3 2015] Một hoppj đựng 5 viên bi đỏ, 6 viên bi trắng và 7 viên bi vàng. Chọn ngẫu nhiên 4 viên bi từ hộp đó. Hỏi có bao nhiêu cách chọn không có đủ ba màu?

**Hướng dẫn.** Nếu tính trực tiếp thì phải chia rất nhiều trường hợp! Chọn ngẫu nhiên 4 viên bi từ 18 viên bi, có $C^4_{18}=3060$ cách. Để chọn đủ ba màu ta xét 3 trường hợp:

- 1 đỏ, 1 trắng và 2 vàng: Có $C^1_5.C^1_6.C^2_7=630$ cách.

- 1 đỏ, 2 trắng và 1 vàng: Có $C^1_5.C^2_6.C^1_7=525$ cách.

- 2 đỏ, 1 trắng và 1 vàng: Có $C^2_5.C^1_6.C^1_7=420$ cách.

Do đó, số cách chọn {không đủ ba màu là}: $3060-630-525-420=1485$ cách.

### 2.2. Chứng minh các đẳng thức tổ hợp

Trong phần này, chúng ta chủ yếu sử dụng các công thức tính số tổ hợp, số hoán vị và 3 công thức sau:

- $n!=n\cdot (n-1)! = n(n-1)\cdot (n-1)!=…$

- $C^k_n=C^{n-k}_n$

- $C^k_n+C^{k+1}_n=C^{k+1}_{n+1}$

**Ví dụ 1.** Tính giá trị các biểu thức sau:

- $A=\dfrac{3!.7!}{4!.6!}$

- $B=\dfrac{(m+1)!}{m!}-\dfrac{(m+2)!}{(m+1)!}$

- $C=\dfrac{6!}{3!.2!}\left( {{P}_{4}}+{{P}_{3}}{{P}_{5}}-{{P}_{2}}{{P}_{6}} \right)$

**Ví dụ 2.** Chứng minh rằng:

- $P_n – P_{n-1} = (n – 1)P_{n-1}$

- $\frac{1}{A_{n}^{2}}=\frac{1}{n-1}-\frac{1}{n}$

- $\frac{{{n}^{2}}}{n!}=\frac{1}{(n-1)!}+\frac{1}{(n-2)!}$

- ${{P}_{n}}=(n-1)\left( {{P}_{n-1}}+{{P}_{n-2}} \right)$

- $k.C_{n}^{k}=n.C_{n-1}^{k-1}$

- $A_{n}^{k}=k!.C_{n}^{k}$

- $C_{n+1}^{p}=\frac{n+1}{p}C_{n}^{p-1}$

- $A_{n+k}^{n+2}+A_{n+k}^{n+1}={{k}^{2}}.A_{n+k}^{n}$

- $\frac{A_{n+4}^{n}}{{{P}_{n+2}}}-\frac{143}{4{{P}_{n}}}=\frac{4{{n}^{2}}+28n-95}{4.n!}$

**Ví dụ 3.** Chứng minh rằng

- $P_k.A^2_{n+1}.A^2_{n+3}.A^2_{n+5}=n.k!.A^5_{n+5}$

- $k(k-1)C_{n}^{k}=n(n-1)C_{n-2}^{k-2},\;( 2 < k < n)$

- $C_{n}^{k}+3C_{n}^{k-1}+3C_{n}^{k-2}+C_{n}^{k-3}=C_{n+3}^{k},\; (3 \le k \le n)$

- $C_{n}^{k}+4C_{n}^{k-1}+6C_{n}^{k-2}+4C_{n}^{k-3}+C_{n}^{k-4}=C_{n+4}^{k},\;(4 \le k \le n)$

- $\frac{1}{A_{2}^{2}}+\frac{1}{A_{3}^{2}}+…+\frac{1}{A_{n}^{2}}=\frac{n-1}{n},\; n\ge 1$

### 2.3. Phương trình, bất phương trình tổ hợp

Chú ý khi giải phương trình, bất phương trình chứa các biểu thức công thức hoán vị, tổ hợp, chỉnh hợp cần có điều kiện xét trên tập số nguyên.

**Ví dụ 1.** [CĐ GTVT 2007] Giải phương trình $P_xC^2_x+36=6(P_x+C^2_x)$

**Hướng dẫn.** Điều kiện: $x\ge 2, x\in \mathbb{N}.$ Phương trình đã cho tương đương với

$$
\begin{aligned}
& x!\frac{x(x-1)}{2}+36=6(x!+\frac{x(x-1)}{2})\\ 
\Leftrightarrow\;& (x!-6)(x^2-x-12)=0\\ 
\Leftrightarrow\;& x=3,x=4.
\end{aligned}
$$

So sánh điều kiện được nghiệm của phương trình đã cho là $x=3,x=4.$

**Ví dụ 2.** Giải các phương trình

- (CĐSP TP HCM 99) $C_{14}^{x}+C_{14}^{x+2}=2C_{14}^{x+1}$

- $4.C_{n}^{3}=5.C_{n+1}^{2}$

- $30{{P}_{n}}=14{{P}_{n-1}}+7A_{n+1}^{n-1}$

- (ĐHNN HN 99) $C_{n}^{1}+6C_{n}^{2}+C_{n}^{3}=9{{n}^{2}}-14n$

- $\frac{A_{n}^{4}}{A_{n+1}^{3}-C_{n}^{n-4}}=\frac{24}{23}$

- $C_{x}^{1}+C_{x}^{2}+C_{x}^{3}=\frac{7}{2}x$

**Ví dụ 3.** [D2005] Giải phương trình $C^2{n+1}+2C^2{n+2}+2C^2{n+3}+C^2{n+4}=149$

**Hướng dẫn.** Biến đổi thành $n^2+4n-45=0.$ Đáp số $n=5.$

**Ví dụ 4.** [BKHN-2000] Giải bất phương trình: 

$$
\frac{1}{2}A_{2x}^{2}-A_{x}^{2}\le \frac{6}{x}C_{x}^{3}+10
$$

**Hướng dẫn.** Điều kiện $x\in \mathbb{N}$ và $x\ge 3.$ Bất phương trình đã cho tương đương với

$$
\begin{aligned}
&\frac{\left( 2x-1 \right)2x}{2}-\left( x-1 \right)x\le \frac{6\left( x-2 \right)\left( x-1 \right)}{3!x}+10 \\ 
\Leftrightarrow\;& 2x\left( 2x-1 \right)-x\left( x-2 \right)\le \left( x-2 \right)\left( x-1 \right)+10 \\ 
\Leftrightarrow \;& x\le 4
\end{aligned}
$$

Kết hợp điều kiện, tìm được $x=3$ và $x=4.$

**Ví dụ 5.** [ĐH SP Tiền Giang 2006] Giải bất phương trình $A^2_x+C^2_{x+1}\le 20$

**Hướng dẫn.** Điều kiện $x\ge 2, x\in \mathbb{N}.$ Với điều kiện đó, bất phương trình tương đương với

$$
\begin{aligned}
& x(x-1)+\frac{(x+1)x}{2}\le 20\\ 
\Leftrightarrow\;& 3x^2-x-40\le 0\\ 
\Leftrightarrow\;& \frac{1-\sqrt{481}}{6}\le x\le \frac{1+\sqrt{481}}{6}
\end{aligned}
$$

Kết hợp điều kiện được đáp số $x=2,x=3.$

**Ví dụ 6.** Giải các bất phương trình

- $14{{P}_{3}}.C_{n-1}^{n-3}<A_{n+1}^{4}$

- $14{{P}_{3}}<\frac{A_{x+1}^{4}}{C_{x-1}^{x-3}}$

- $\frac{A_{x+4}^{4}}{(x+2)!}<\frac{15}{(x-1)!}$

- $\frac{1}{2}A_{2n}^{2}-A_{n}^{2}-\frac{6}{n}C_{n}^{3}\le 10$

- (ĐHHH 99) $\frac{C_{n-1}^{n-3}}{A_{n+1}^{4}}<\dfrac{1}{14{{P}_{3}}}$

- (TN04-05) $C^n_{n+3}>\frac{5}{2}A^2_n$

**Ví dụ 7.** [TN2003-2004] Giải bất phương trình $\frac{P_{n+5}}{(n-k)!}\le 60A^{k+2}_{n+3}$

**Hướng dẫn.** Điều kiện $n\ge k\ge -2; n,k\in \mathbb{Z}.$ Biến đổi bất phương trình thành 

$$
(n+5)(n+4)(n-k+1)\le 60
$$

- Với $n\ge 4$ bất phương trình vô nghiệm.

- Với $n\in\{0,1,2,3\}$ tìm được các nghiệm $(n,k)$ của bất phương trình là $(0,0), (1,0),(1,1),(2,2),(3,3).$

**Ví dụ 8.** Giải các hệ phương trình

- $\left\{ \begin{array}{l} 3C_{{x}}^{y}=C_{x+2}^{y} \\ 24C_{x}^{y}=A_{x}^{y} \end{array} \right.$

- (BK01)$\left\{ \begin{array}{l} 2A_{x}^{y}+5C_{x}^{y}=90 \\ 5A_{x}^{y}-2C_{x}^{y}=80\end{array} \right.$

- $\left\{ \begin{array}{l} 5C_{x+1}^{y}=6C_{x}^{y+1} \\ C_{x+1}^{y}=3C_{x}^{y-1} \end{array} \right.$

Một số tài liệu tiếng Anh về Hoán vị – Tổ hợp – Chỉnh hợp hay:

- [https://www.whitman.edu/mathematics/cgt_online/cgt.pdf](https://www.whitman.edu/mathematics/cgt_online/cgt.pdf)

- [https://www.dartmouth.edu/~chance/teaching_aids/books_articles/probability_book/Chapter3.pdf](https://www.dartmouth.edu/~chance/teaching_aids/books_articles/probability_book/Chapter3.pdf)
