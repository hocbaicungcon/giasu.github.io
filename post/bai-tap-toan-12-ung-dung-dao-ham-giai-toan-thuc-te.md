---
title: "Bài tập Toán 12: Ứng dụng đạo hàm giải bài toán thực tiễn"
description: "Các bài toán tối ưu thực tế, kinh tế, vật lý, hình học ứng dụng đạo hàm Toán 12 chương trình mới có hướng dẫn giải chi tiết và trắc nghiệm tự luyện."
category: Toán học
type: Bài tập
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Toán thực tế
- Ứng dụng đạo hàm
- Bài toán tối ưu
grade: 12
---

# Bài tập Toán 12: Ứng dụng đạo hàm giải bài toán thực tiễn

> **Tóm tắt chuyên đề:** Các bài toán tối ưu thực tế, kinh tế, vật lý, hình học ứng dụng đạo hàm Toán 12 chương trình mới có hướng dẫn giải chi tiết và trắc nghiệm tự luyện.

## I. Lý thuyết trọng tâm cần nhớ

### 1.TỐC ĐỘ THAY ĐỔI CỦA MỘT ĐẠI LƯỢNG.

Một số ứng dụng của đạo hàm đối với vật lý, hóa học, sinh học và kinh tế
- Nếu $s=s\left ( { t } \right.  )$ là hàm vị trí của một vật chuyển động trên một đường thẳng thì $v\left ( { t } \right.  )=s'\left ( { t } \right.  )$ biểu thị vận tốc tức thời của vật (tốc độ thay đổi của độ dịch chuyển theo thời gian). Tốc độ thay đổi tức thời của vận tốc theo thời gian là gia tốc tức thời $a\left ( { t } \right.  )$ của vật, như vậy $a\left ( { t } \right.  )=v'\left ( { t } \right.  )=s'$.
- Nếu $C=C\left ( { t } \right.  )$ là nồng độ của một chất tham gia phản ứng hóa học tại thời điểm $t$, thì $C'\left ( { t } \right.  )$ là tốc độ phản ứng tức thời (tức là độ thay đổi nồng độ) của chất đó tại thời điểm $t$.
- Nếu $P=P\left ( { t } \right.  )$ là số lượng cá thể trong một quần thể động vật hoặc thực vật tại thời điểm $t$, thì $P'\left ( { t } \right.  )$ biểu thị tốc độ tăng trưởng tức thời của quần thể tại thời điểm $t$.
- Nếu $C=C\left ( { x } \right.  )$ là hàm chi phí, tức là tổng chi phí khi sản xuất $x$ đơn vị hang hóa, thì tốc độ thay đổi tức thời $C'\left ( { x } \right.  )$ của chi phí đối với số lượng đơn vị hàng được sản xuất được gọi là chi phí biên.
- Về ý nghĩa kinh tế, chi phí biên $C'\left ( { x } \right.  )$ xấp xỉ với chi phí để sản xuất thêm một đơn vị hàng hóa tiếp theo, tức là đơn vị hang hóa thứ $x+1$.

### 2. MỘT VÀI BÀI TOÁN TỚI ƯU HÓA ĐƠN GIẢN.

Quy trình giải một số bài toán tối ưu hóa:


- **Bước 1:** Xác định đại lượng $Q$ mà ta cần làm cho giá trị của đại lượng ấy lớn nhất hoặc nhỏ nhất và biểu diễn nó qua đại lượng khác trong bài toán.


- **Bước 2:** Chọn một đại lượng thích hợp nào đó, kí hiệu là $x$, và biểu diễn của các đại lượng khác ở bước 1 theo $x$, khi đó, đại lượng $Q$ sẽ là hàm số của một biến $x$. Tìm tập xác định của hàm số $Q=Q\left ( { x } \right.  )$.


- **Bước 3:** Tìm giá trị lớn nhất, hoặc giá trị nhỏ nhất của hàm số $Q=Q\left ( { x } \right.  )$ bằng các phương pháp đã biết và kết luận.

BDạng bài tập

## II. Phân dạng bài tập & Phương pháp giải

### Dạng 1: Tốc độ thay đổi của một đại lượng biến thiên trong vật lý

I. PHƯƠNG PHÁP


- **Bước 1:** Xác định mối quan hệ các đại lượng


- **Bước 2:** Đưa bài toán về mối quan hệ hàm số, lập bảng biến thiên để xét tính tăng giảm $y'$ theo biến $x$, tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số với điều kiện ràng buộc cho trước.

❀ Bài toán chuyển động: Tính vận tốc tức thời, tính gia tốc tại thời điểm vận tốc lớn nhất;

→ Nếu $s=s\left ( { t } \right.  )$ là hàm vị trí của một vật chuyển động trên một đường thẳng thì $v\left ( { t } \right.  )=s'\left ( { t } \right.  )$ biểu thị vận tốc tức thời của vật (tốc độ thay đổi của độ dịch chuyển theo thời gian).

→ Tốc độ thay đổi tức thời của vận tốc theo thời gian là gia tốc tức thời của vật:$a\left ( { t_{ 0 } } \right.  )=v'\left ( { t_{ 0 } } \right.  )=s'$.

→ Khi $v\left ( { t } \right.  )=0$ là vận tốc bị triệt tiêu.

→ Nếu $v'\left ( { t } \right.  )>0$ là vận tốc tăng,$v'\left ( { t } \right.  ) < 0$ là vận tốc giảm.

→ Để xác định vận tốc lớn nhất hoặc nhỏ nhất lập bảng biến thiên của hàm số $v\left ( { t } \right.  )$. Dựa vào bảng biến thiên để kết luận. (Có thể dùng bất đẳng thức đánh giá).

❀ Bài toán về dòng điện:

→ Điện lượng $Q$ truyền qua dây dẫn là một hàm số của thời gian $t$,$Q=Q\left ( { t } \right.  )$. Cường độ dòng điện tức thời tại thời điểm $t_{ o }$ được tính bằng công thức $I\left ( { t_{ 0 } } \right.  )=Q'\left ( { t_{ 0 } } \right.  )$.

II. CÁC VÍ DỤ

**Ví dụ 1. Xét một chất điểm chuyển động trên một trục số nằm ngang, chiều dương từ trái sang phải. Giả sử vị trí $s\left ( { t } \right.  )$ (mét) của chất điểm trên trục số đã chọn tại thời điểm $t$ (giây) được cho bởi công thức $s\left ( { t } \right.  )=t ^ { 3 } +3t ^ { 2 } -9t+27,t≥0.$**

(a) Tính vận tốc của chất điểm tại thời điểm $t=2$ (giây).

(b) Tính gia tốc của chất điểm tại thời điểm vận tốc của chất điểm bị triệt tiêu.

*Lời giải:*

(a) Tính vận tốc của chất điểm tại thời điểm $t=2$ (giây).

Do $v\left ( { t } \right.  )=s'\left ( { t } \right.  )=(t ^ { 3 } +3t ^ { 2 } -9t+27)'=3t ^ { 2 } +6t-9$.

Tại thời điểm $t=2$ (giây), vận tốc của vật là $v=3.2 ^ { 2 } +6.2-9=15\left ( { m/s } \right.  )$.

(b) Tính gia tốc của chất điểm tại thời điểm vận tốc của chất điểm bị triệt tiêu.

Ta lại có $a\left ( { t_{ 0 } } \right.  )=v'\left ( { t_{ 0 } } \right.  )=s'$.

Tại thời điểm vận tốc triệt tiêu:$3t ^ { 2 } +6t-9=0⇔\left[ t=1t=-3{ \rm{ } }{ \rm{ ( } }{ \rm{ l } }{ \rm{ o } }{ \rm{ a } }{ \rm{ i } }) \right.$.

Với $t=1$ thì gia tốc chuyển động là:$a=6.1+6=12\left ( { m{ \rm{ / } }s ^ { 2 } } \right.  )$

**Ví dụ 2. Một tàu đổ bộ tiếp cận Mặt Trăng theo cách tiếp cận thẳng đứng và đốt cháy các tên lửa hãm ở độ cao $250\,km$ so với bề mặt của Mặt Trăng. Trong khoảng $50$ giây đầu tiên kể từ khi đốt cháy các tên lửa hãm, độ cao $h$ của con tàu so với bề mặt của Mặt Trăng được tính (gần đúng) bởi hàm $h\left ( { t } \right.  )=-0,01t ^ { 3 } +1,1t ^ { 2 } -30t+250$ trong đó $t$ là thời gian tính bằng giây và $h$ là độ cao tính bằng kilomet.**

(a) Vận tốc của con tàu tăng trong khoảng thời gian nào?

(b) Tính độ cao so với bề mặt Mặt Trăng của con tàu tại thời điểm vận tốc của con tàu lớn nhất .

*Lời giải:*

Xét hàm số:$h\left ( { t } \right.  )=-0,01t ^ { 3 } +1,1t ^ { 2 } -30t+250$.

Tập xác định:$D=\mathbb{R}$.

$h\left ( { t } \right.  )=-0,01t ^ { 3 } +1,1t ^ { 2 } -30t+250⇒v\left ( { t } \right.  )=h'\left ( { t } \right.  )=-0,03t ^ { 2 } +2,2t-30$

$⇒a\left ( { t } \right.  )=v'\left ( { t } \right.  )=-0,06t+2,2⇒a\left ( { t } \right.  )=0⇔t=\frac { 110 } { 3 }$.

<p align="center"><img src="/assets/images/toan-12/c1_b5_image64.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

(a) Vận tốc của con tàu tăng trong khoảng thời gian nào?

Vận tốc của con tàu tăng trong khoảng thời gian $\left ( { 0s;\frac { 110 } { 3 }s } \right.  )$.

(b) Tính độ cao so với bề mặt Mặt Trăng của con tàu tại thời điểm vận tốc của con tàu lớn nhất .

$v_{ { \rm{ m } }{ \rm{ a } }{ \rm{ x } } } =\frac { 31 } { 3 }$ khi $t=\frac { 110 } { 3 }$.

Vậy độ cao của con tàu so với bề mặt Mặt Trăng tại thời điểm vận tốc của con tàu lớn nhất là $h\left ( { 37 } \right.  )=\frac { 3670 } { 27 }≈135,9km$.

### Dạng 2: Tốc độ thay đổi cẩu một đại lượng biến thiên trong hoá học, sinh học

I. PHƯƠNG PHÁP


- **Bước 1:** Chuyển bài toán thực tế đại lượng $y$ biến thiên theo đại lượng $x$ hoặc đã cho trong giả thiết bài toán.


- **Bước 2:** Thực hiện giải bài toán theo yêu cầu tương ứng.


- **Bước 3:** Kết luận vấn đề đặt ra.

II. CÁC VÍ DỤ

**Ví dụ 3. Enzyme là protein hoạt động như một chất xúc ta làm tăng tốc độ phản ứng hóa học xuất hiện trong các tế bào. Trong một phản ứng nào đó, một enzyme được chuyển hóa thành một enzyme khác, được gọi là enzyme sản phẩm. Enzyme sản phẩm này hoạt động như một chất xúc tác cho chính sự hình thành của nó. Tốc độ $R$ mà tại đó enxyme sản phẩm được tạo thành được cho bởi phương trình $R=kp\left ( { l-p ^ { 2 } } \right.  ),$ trong đó $l$ là tổng số lượng enzyme ban đầu và enzyme sản phẩm,$p$ là lượng enzyme sản phẩm, và $k$ là hằng số dương. Với giá trị nào của $p$ thì $R$ đạt giá trị lớn nhất?**

*Lời giải:*

Ta có $R=k\left ( { pl-p ^ { 2 } } \right.  )⇒R'=k\left ( { l-2p } \right.  )$.

Đạo hàm $R'\left ( { p } \right.  )=0⇔k\left ( { l-2p } \right.  )=0⇔p=\frac { l } { 2 }$.

Ta có $R'$, nên hàm số đạt cực đại tại $p=\frac { l } { 2 }$.

Vậy $R$ đạt giá trị lớn nhất bằng $\frac { kl ^ { 2 } } { 4 }$ khi $p=\frac { l } { 2 }$.

**Ví dụ 4. Sau khi phát hiện một bệnh dịch lở mồm long móng của đàn gia xúc của một xã vùng cao, cán bộ y tế ước tính số gia xúc nhiễm bệnh. Kể từ ngày xuất hiện gia xúc nhiễm bệnh đầu tiên đến ngày thứ $t$ là $G\left ( { t } \right.  )=45t ^ { 2 } -t ^ { 3 }$, (kết quả khảo sát được trong 10 ngày vừa qua). Nếu xem $G'\left ( { t } \right.  )$ là tốc độ truyền bệnh (con/ngày) tại thời điểm $t$ thì tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ bao nhiêu?**

*Lời giải:*

Ta có:

$G'\left ( { t } \right.  )=90t-3t ^ { 2 }$.

$G'$.

$G'$.

Bảng biến thiên:

<p align="center"><img src="/assets/images/toan-12/c1_b5_image92.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Vậy tốc độ truyền bệnh lớn nhất sẽ vào ngày thứ 15.

### Dạng 3:Tốc độ thay đổi của một đại lượng biến thiên trong kinh tế - xã hội; nêu ý nghĩa về giá trị ngưỡng đối với một đại lượng biến thiên

I. PHƯƠNG PHÁP


- **Bước 1:** Chọn một hoặc 1 số chữ cái $x,a,b$,… gọi là biến để biểu thị những đại lượng chưa biết và viết biểu thức biểu thị đại lượng, kí hiệu $P$, cần tìm giá trị lớn nhất, giá trị nhỏ nhất theo các biến đó.


- **Bước 2:** Viết lại biểu thức $P$ thành biểu thức chứa một biến, chẳng hạn là $x$, bằng cách biểu thị các biến khác theo biến $x$ nhờ các dữ kiện đề bài đã cho. Từ đó, ta nhận được hàm số xác định bởi công thức $P=f\left ( { x } \right.  )$.


- **Bước 3:** Xác định tập hợp $D$ gồm các giá trị mà biến $x$ có thể nhận.


- **Bước 4:** Tìm giá trị lớn nhất , gái trị nhỏ nhất của hàm số $P=f\left ( { x } \right.  )$ trên $D$ và trả lời bài toán.

II. CÁC VÍ DỤ

**Ví dụ 5. Dân số của một quốc gia sau $t$ (năm) kể từ năm 2023 được ước tính bởi công thức $N\left ( { t } \right.  )=100e ^ { 0,012t } ,\,N\left ( { t } \right.  )$ được tính bằng triệu người,$0≤t≤50$. Đạo hàm của hàm số $N\left ( { t } \right.  )$ biểu thị tốc độ tăng dân số của quốc gia đó (tính bằng triệu người/ năm). Vào năm nào tốc độ tăng dân số của quốc gia đó là $1,6$ triệu người/năm?**

*Lời giải:*

Tốc độ tăng dân số của quốc gia được biểu thị bằng biểu thức:$N'\left ( { t } \right.  )=\left ( { 100.e ^ { 0,012t } } \right.  ) ' = 100.0,012.e ^ { 0,012t } =1,2.e ^ { 0,012t }$.

Theo giả thiết tốc độ tăng dân số là $1,6$ triệu người/năm.

Khi đó ta có $1,2.e ^ { 0,012t } =1,6⇔e ^ { 0,012t } =\frac { 4 } { 3 }⇔0,012t=ln\frac { 4 } { 3 }⇒t≈23,97$.

Vậy sau 24 năm, tốc độ tăng dân số của quốc gia đó là $1,6$ triệu người/năm.

**Ví dụ 6. Một cửa hàng đồ điện dân dụng đã bán được 200 máy sấy tóc mỗi tháng với giá mỗi máy là 150 nghìn đồng. Một cuộc khảo sát thị trường chỉ ra rằng, đối với máy sấy tóc giảm giá 5 nghìn đồng cho người mua thì số lượng máy sấy tóc bán ra sẽ tăng thêm 20 chiếc mỗi tháng. Cửa hàng nên giảm giá bao nhiêu nghìn đồng để doanh thu lớn nhất?**

*Lời giải:*

Gọi $x$ (nghìn đồng) là giá cửa hàng giảm cho mỗi chiếc máy sấy tóc,$0≤x≤150$.

Số lượng máy sấy tóc cửa hàng bán ra trong 1 tháng là $200+20x.\frac { 1 } { 5 }=200+4x$ (chiếc).

Giá bán thực tế của mỗi chiếc máy sấy tóc là:$150-x$ (nghìn đồng).

Doanh thu của cửa hàng là $f\left ( { x } \right.  )=\left ( { 200+4x } \right.  )\left ( { 150-x } \right.  )=-4x ^ { 2 } +400x+30000$.

Ta có $f'\left ( { x } \right.  )=-8x+400⇒f'\left ( { x } \right.  )=0⇔x=50$.

<p align="center"><img src="/assets/images/toan-12/c1_b5_image118.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Vậy để doanh thu đạt tối đa, cửa hàng giảm giá 50 nghìn đồng cho 1 chiếc máy sấy tóc.

### Dạng 4: Ứng dụng đạo hàm cho bài toán tối ưu trong các mô hình toán học.

I. PHƯƠNG PHÁP


- **Bước 1:** Xác định đại lượng $Q$ mà ta cần làm cho giá trị của đại lượng ấy lớn nhất hoặc nhỏ nhất và biểu diễn nó qua các đại lượng khác trong bài toán.


- **Bước 2:** Chọn một đại lượng thích hợp nào đó, kí hiệu là $x$ và biểu diễn các đại lượng khác ở Bước 1 theo $x$. Khi đó, đại lượng $Q$ sẽ là hàm số của một biến $x$. Tìm tập xác định của hàm số $Q=Q\left ( { x } \right.  )$


- **Bước 3:** Tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số $Q=Q\left ( { x } \right.  )$ bằng các phương pháp đã biết và kết luận.

II. CÁC VÍ DỤ

**Ví dụ 7. Cắt một miếng giấy hình vuông như hình bên và xếp thành một hình chóp tứ giác đều. Biết các cạnh hình vuông bằng $20\,cm$,$OM=x\left ( { cm } \right.  )$. Tìm $x$ để hình chóp đều ấy có thể lớn nhất**

<p align="center"><img src="/assets/images/toan-12/c1_b5_image129.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

*Lời giải:*

<p align="center"><img src="/assets/images/toan-12/c1_b5_image130.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Giả sử được hình chóp tứ giác đều như hình vẽ

Ta có:$OM=x⇒OH=HM=\frac { x } { \sqrt{ 2 } }⇒SH=10\sqrt{ 2 }-\frac { x } { \sqrt{ 2 } }$.

Suy ra $SO=\sqrt{ SH ^ { 2 } -OH ^ { 2 } }=\sqrt{ \left ( { 10\sqrt{ 2 }-\frac { x } { \sqrt{ 2 } } } \right.  ) ^ { 2 } -\left ( { \frac { x } { \sqrt{ 2 } } } \right.  ) ^ { 2 } }=\sqrt{ 20\left ( { 10-x } \right.  ) }$.

Thể tích $V=\frac { 1 } { 3 }.S_{ MNPQ } .SO=\frac { 1 } { 3 }.2x ^ { 2 } .\sqrt{ 20\left ( { 10-x } \right.  ) }=\frac { 2\sqrt{ 20 } } { 3 }x ^ { 2 } \sqrt{ 10-x }$, (với $0≤x≤10$).

Xét hàm số $f\left ( { x } \right.  )=x ^ { 2 } \sqrt{ 10-x }⇒f'\left ( { x } \right.  )=2x\sqrt{ 10-x }-\frac { x ^ { 2 } } { 2\sqrt{ 10-x } }⇒f'\left ( { x } \right.  )=0⇔x=8$, vì $0≤x≤10$.

$V_{ { \rm{ m } }{ \rm{ a } }{ \rm{ x } } } =\frac { 256\sqrt{ 10 } } { 3 }$ khi $x=8$.

**Ví dụ 8. Một tấm kẽm hình chữ nhậtABCDcó cạnh $AD=40cm,\,\,AB=60 cm.$ Người ta gập tấm kẽm theo hai cạnh $EF$ và $GH$ cho đến khi $AD$ và $BC$ trùng nhau như hình vẽ bên để được một hình lăng trụ đứng khuyết hai đáy , biết $DF=HC=x$.**

<p align="center"><img src="/assets/images/toan-12/c1_b5_image146.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Tính thể tích lớn nhất khối lăng trụ được tạo thành.

*Lời giải:*

Thể tích khối lăng trụ là:$V=BC.S_{ AEG } =40S_{ AEG } .$ Theo giả thiết ta phải có $0 < 2x < 60⇔0 < x < 30$.

Ta cóΔAEGcó độ dài các cạnh là $AE=AG=x \left ( { cm } \right.  ),EG=60-2x \left ( { cm } \right.  )$ nên diện tích là

$S_{ AEG } =\sqrt{ 30\left ( { 30-x } \right.  )\left ( { 30-x } \right.  )\left[ 30-\left ( { 60-2x } \right.  ) \right] }=\sqrt{ 30\left ( { 30-x } \right.  ) ^ { 2 } \left ( { 2x-30 } \right.  ) } \left ( { cm ^ { 2 } } \right.  )$.

Giá trị lớn nhất của thể tích đạt được khi và chỉ khi diện tích $S_{ AEG }$ đạt giá trị lớn nhất

Áp dụng bất đẳng thức Cô-si cho ba số dương $30-x;\,\,30-x;\,\,2x-30$ ta được

$\left ( { 30-x } \right.  ) ^ { 2 } \left ( { 2x-30 } \right.  )=\left ( { 30-x } \right.  )\left ( { 30-x } \right.  )\left ( { 2x-30 } \right.  )$

$≤\left ( { \frac { \left ( { 30-x } \right.  )+\left ( { 30-x } \right.  )+\left ( { 2x-30 } \right.  ) } { 3 } } \right.  ) ^ { 3 } =10 ^ { 3 }$.

Dấu “=” xảy ra khi $30-x=2x-30⇔x=20$.

Do đó $S_{ AEG } ≤\sqrt{ 30.10 ^ { 3 } }=100\sqrt{ 3 }$ khi tam giác $AEG$ đều cạnh bằng 20 cm.

Vậy thể tích lớn nhất của lăng trụ được tạo thành là:

$V=40.100\sqrt{ 3 }=4000\sqrt{ 3 }\,cm ^ { 3 }$.

### Dạng 5: Ứng dụng đạo hàm cho bài toán tối ưu trong liên môn học (vật lý, hóa học, sinh học,…)

I. PHƯƠNG PHÁP


- **Bước 1:** Biểu diễn các đại lượng tromg bài toán thông qua hàm số.


- **Bước 2:** Giải quyết yêu cầu bài toán thông qua hàm số.


- **Bước 3:** Từ kết quả tìm được đưa ra kết luận yêu cầu của bài toán.

II. CÁC VÍ DỤ

**Ví dụ 9. Một loại thuốc được dùng cho một bệnh nhân và nồng độ thuốc trong máu của bệnh nhân được giám sát bởi bác sĩ. Biết rằng nồng độ thuốc trong máu của bệnh nhân sau khi tiêm vào cơ thể trong $t$ giờ được cho bởi công thức $c\left ( { t } \right.  )=\frac { t } { t ^ { 2 } +1 }$ $\left ( { mg/L } \right.  )$. Sau khi tiêm thuốc bao lâu thì nồng độ thuốc trong máu của bệnh nhân cao nhất?**

*Lời giải:*

Xét hàm số $c\left ( { t } \right.  )=\frac { t } { t ^ { 2 } +1 }$,$(t>0)$.

$c'\left ( { t } \right.  )=\frac { 1-t ^ { 2 } } { \left ( { t ^ { 2 } +1 } \right.  ) ^ { 2 } }$.

$c'\left ( { t } \right.  )=0⇔\left[ t=1t=-1 \right.$.

<p align="center"><img src="/assets/images/toan-12/c1_b5_image167.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Với $t=1$ giờ thì nồng độ thuốc trong máu của bênh nhân cao nhất.

**Ví dụ 10. Một vật chuyển động theo quy luật $S=10t ^ { 2 } -\frac { 1 } { 3 }t ^ { 3 }$, với $t$ (giây) là khoảng thời gian tính từ lúc vật bắt đầu chuyển động và $S\left ( { m } \right.  )$ là quãng đường vật đi được trong khoảng thời gian đó. Hỏi trong khoảng thời gian $15$ giây từ lúc vật bắt đầu chuyển động vận tốc $v\left ( { m/s } \right.  )$ của vật đạt giá trị lớn nhất tại thời điểm $t\left ( { s } \right.  )$ bằng bao nhiêu?**

*Lời giải:*

Ta có:$S=10t ^ { 2 } -\frac { 1 } { 3 }t ^ { 3 }$ $⇒v\left ( { t } \right.  )=S'=20t-t ^ { 2 }$.

Xét hàm số $v\left ( { t } \right.  );t∈\left[ 0;15 \right]$, ta có:$v'\left ( { t } \right.  )=20-2t=0⇔t=10$.

$v\left ( { 0 } \right.  )=0;\,\,v\left ( { 15 } \right.  )=75;v\left ( { 10 } \right.  )=100$. Do đó:$\mathop { max } \limits_{ \left[ 0;15 \right] } v\left ( { t } \right.  )=100⇔t=10$.

### Dạng 6: Ứng dụng đạo hàm cho bài toán tối ưu trong kinh tế - xã hội

I. PHƯƠNG PHÁP


- **Bước 1:** Gọi ẩn và xác định điều kiện cho ẩn.


- **Bước 2:** Biểu diễn các đại lượng chưa biết theo ẩn số và các đại lượng đã biết.


- **Bước 3:** Xét hàm số biểu thị đại lượng mà đề bài yêu cầu. Tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số đó trên điều kiện của ẩn.


- **Bước 4:** Kết luận.

II. CÁC VÍ DỤ

**Ví dụ 11. Khi nuôi tôm trong một hồ tự nhiên, một nhà khoa học đã thống kê được rằng: nếu trên mỗi mét vuông mặt hồ thả $x$ con tôm giống thì cuối vụ mỗi con tôm có cân nặng trung bình là $108-x ^ { 2 }$ (gam). Hỏi nên thả bao nhiêu con tôm giống trên mỗi mét vuông mặt hồ tự nhiên đó để cuối vụ thu hoạch được nhiều tôm nhất.**

*Lời giải:*

Sau một vụ lượng tôm trung bình trên mỗi $m ^ { 2 }$ mặt hồ nặng $x\left ( { 108-x ^ { 2 } } \right.  )=108x-x ^ { 3 } \,\,(gam)$

Xét hàm số $f\left ( { x } \right.  )=108x-x ^ { 3 }$ trên khoảng $\left ( { 0;+∞ } \right.  )$ ta có

$f'\left ( { x } \right.  )=108-3x ^ { 2 } ;\,\,\,\,f'\left ( { x } \right.  )=0⇔108-3x ^ { 2 } =0⇔\left[ x=6x=-6\,\,\, < 0 \right.$

<p align="center"><img src="/assets/images/toan-12/c1_b5_image188.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Trên khoảng $\left ( { 0;+∞ } \right.  )$ hàm số $f\left ( { x } \right.  )=108x-x ^ { 3 }$ đạt GTLN tại $x=6$.

Vậy nên thả 6 con tôm giống trên mỗi mét vuông mặt hồ thì cuối vụ thu hoạch được nhiều tôm nhất.

**Ví dụ 12. Một người cần đi từ khách sạn $A$ bên bờ biển đến hòn đảo $C$. Biết rằng khoảng cách từ đảo $C$ đến bờ biển là $BC=10\,{ \rm{ k } }{ \rm{ m } }$, khoảng cách từ khách sạn $A$ đến điểm ngắn nhất tính từ đảo $C$ vào bờ là $AB=40\,{ \rm{ k } }{ \rm{ m } }$. Người đó có thể đi đường thủy hoặc đi đường bộ rồi đi đường thủy từ khách sạn ra đảo (như hình vẽ dưới đây). Biết kinh phí đi đường thủy là 20.000 đ/km, kinh phí đi đường bộ là 12.000 đ/km. Hỏi người đó phải đi đường bộ một đoạn $AD$ bao nhiêu để kinh phí đi từ $A$ đến $C$ nhỏ nhất? ($AB$ vuông góc $BC$- hình dưới đây)**

<p align="center"><img src="/assets/images/toan-12/c1_b5_image202.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

*Lời giải:*

Gọi khoảng cách từ $D$ đến $B$ là $x\,{ \rm{ k } }{ \rm{ m } } \,\left ( { 0≤x≤40 } \right.  )$.

Khi đó:$AD=40-x$ và $DC=\sqrt{ x ^ { 2 } +100 }$.

Người đó đi từ $A$ đến $C$ hết số tiền là:$f\left ( { x } \right.  )=12\left ( { 40-x } \right.  )+20\sqrt{ x ^ { 2 } +100 }$ (nghìn đồng).

Người đó đi từ $A$ đến $C$ hết chi phí ít nhất khi $f\left ( { x } \right.  )$ đạt giá trị nhỏ nhất.

Hàm số $f\left ( { x } \right.  )=12\left ( { 40-x } \right.  )+20\sqrt{ x ^ { 2 } +100 }$ liên tục trên đoạn $\left[ 0;40 \right]$.

$f'\left ( { x } \right.  )=-12+\frac { 20x } { \sqrt{ x ^ { 2 } +100 } }$.

$f'\left ( { x } \right.  )=0⇔x=\frac { 15 } { 2 }$.

$\mathop { min } \limits_{ \left[ 0;40 \right] } f\left ( { x } \right.  )=min\left\{ \begin{array}{l} f\left ( { 0 } \right.  );f\left ( { \frac { 15 } { 2 } } \right.  );f\left ( { 40 } \right.  ) \end{array} \right\}=f\left ( { \frac { 15 } { 2 } } \right.  )$.

Vậy người đó phải đi đường bộ một đoạn $AD=\frac { 15 } { 2 }\,{ \rm{ k } }{ \rm{ m } }$ để kinh phí đi từ $A$ đến $C$ nhỏ nhất.
## III. Bài tập trắc nghiệm nhiều phương án lựa chọn (Tự luyện tương tác)

Học sinh làm bài trực tiếp trên hệ thống để được chấm điểm và xem lời giải chi tiết tức thì.

```quiz
type: choice
question: 'Câu 1: Giả sử chi phí $C\left ( { x } \right.  )$ (nghìn đồng) để sản xuất $x$ đơn vị của một loại hàng hóa được cho bởi hàm số $C\left ( { x } \right.  )=30000+300x-2,5x ^ { 2 } +0,25x ^ { 3 }$. Tìm hàm chi phí biên'
options:
  - 'A. $y=300-5x+0,75x ^ { 2 }$'
  - 'B. $y=300-5x+0,5x ^ { 2 }$'
  - 'C. $y=300-0,25x+0,25x ^ { 2 }$'
  - 'D. $y=300+0,25x+0,125x ^ { 2 }$'
answer: 1
explanation: '$C''\left ( { x } \right.  )=300-5x+0,375x ^ { 2 }$.'
```

```quiz
type: choice
question: 'Câu 2: Giả sử hàm cầu đối với một loại hàng hóa được cho bởi công thức $P(x)=\frac{400}{1+0,01x}$ ($x>0$), trong đó $P(x)$ là giá bán (nghìn đồng) của mỗi đơn vị sản phẩm và $x$ là số lượng sản phẩm bán ra. Khẳng định nào sau đây là đúng?'
options:
  - 'A. Khi giá bán tăng thì số lượng sản phẩm bán ra tăng'
  - 'B. Giá bán không ảnh hưởng đến số lượng sản phẩm bán ra'
  - 'C. Giá bán càng thấp thì số lượng sản phẩm bán ra càng tăng'
  - 'D. Luôn luôn bán được sản phẩm dù tăng giá bán đến bất kì mức nào'
answer: 3
explanation: 'Ta có $P''(x) = \frac{-4}{(1+0,01x)^2} < 0, \forall x > 0 \Rightarrow P(x)$ là hàm số nghịch biến trên $(0; +\infty)$. Do đó khi giá bán càng thấp thì số lượng sản phẩm bán ra càng tăng. Khẳng định đúng là C.'
```

## IV. Bài tập trắc nghiệm Đúng / Sai (Cấu trúc mới GDPT 2018)

Thí sinh trả lời từ câu hỏi dưới đây. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.

**Câu 1:** Giả sử một hạt chuyển động trên một trục thẳng đứng chiều dương hướng lên trên sao cho toạ độ của hạt (đơn vị: mét) tại thời điểm $t$ (giây) là $y=t ^ { 3 } -12t+3,\,\,t≥0$. Xét tính đúng sai của các khẳng định sau:

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

(a) Hàm gia tốc của hạt chuyển động có dạng:$a\left ( { t } \right.  )=6t-12,\,\,t≥0$

$y=t ^ { 3 } -12t+3\,,\,\,\left ( { t≥0 } \right.  )$.

Vận tốc của hạt chuyển động là:$v\left ( { t } \right.  )=y'\left ( { t } \right.  )=3t ^ { 2 } -12$

Gia tốc của hạt chuyển động là:$a\left ( { t } \right.  )=6t-12,\,\,t≥0$.

**Chọn SAI.**

(b) Trong khoảng thời gian từ $0$ đến $2s$, hạt chuyển động lên trên.

Hạt chuyển động lên trên khi $v\left ( { t } \right.  )>0⇔3t ^ { 2 } -12>0⇔t>2$.

Hạt chuyển động xuống dưới khi $v\left ( { t } \right.  ) < 0⇔3t ^ { 2 } -12 < 0⇔0 < t < 2$.

**Chọn SAI.**

(c) Quãng đường hạt đi được trong khoảng thời gian từ $0$ đến $3s$ là $20\,\,\left ( { m } \right.  )$.

Trong khoảng thời gian từ từ $0$ đến $2s$, hạt chuyển động xuống dưới nên quãng đường hạt đi được là:$S_{ 1 } =y\left ( { 0 } \right.  )-y\left ( { 2 } \right.  )=0-\left ( { -13 } \right.  )=13\,\,\left ( { m } \right.  )$.

Trong khoảng thời gian từ từ $2$ đến $3s$, hạt chuyển động lên trên nên quãng đường hạt đi được là:$S_{ 2 } =y\left ( { 3 } \right.  )-y\left ( { 2 } \right.  )=-6-\left ( { -13 } \right.  )=7\,\,\left ( { m } \right.  )$.

Vậy quãng đường hạt đi được trong khoảng thời gian từ $0$ đến $3s$ là $S=13+7=20\,\,\left ( { m } \right.  )$

**Chọn ĐÚNG.**

(d) Vị trí của hạt tại thời điểm $4s$ là $19\,{ \rm{ m } }$.

Vị trí của hạt tại thời điểm $4s$ là $y\left ( { 4 } \right.  )=19m$.

**Chọn ĐÚNG.**

</details>

**Câu 2:** Một vật đang chuyển động thẳng được xác định bởi phương trình:$s\left ( { t } \right.  )=-\frac { 1 } { 3 }t ^ { 3 } +6t ^ { 2 } +13t+2$, trong đó $s$ tính bằng mét $\left ( { m } \right.  )$,$t$ tính bằng giây $\left ( { s } \right.  )$.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Xét tính đúng sai của các khẳng định sau:

Lời giải

Vận tốc của vật theo thời gian là:$v\left ( { t } \right.  )=s'\left ( { t } \right.  )=-t ^ { 2 } +12t+13$ $\left ( { m{ \rm{ / } }s } \right.  )$.

Gia tốc của vật theo thời gian là:$a\left ( { t } \right.  )=v'\left ( { t } \right.  )=-2t+12$.

(a) Vận tốc ban đầu của vật bằng $13\,m{ \rm{ / } }s$.

Vận tốc ban đầu của vật là:$v\left ( { 0 } \right.  )=13\,\,\left ( { m{ \rm{ / } }s } \right.  )$

**Chọn ĐÚNG.**

(b) Tại thời điểm gia tốc đạt $6\,m{ \rm{ / } }s ^ { 2 }$, vật đã di chuyển được $86$ mét.

Tại thời điểm gia tốc đạt $6\,m{ \rm{ / } }s ^ { 2 }$ (giây).

$a\left ( { t } \right.  )=6\,$ suy ra $-2t+12=6⇒t=3$

Tại thời điểm $t=0$, vị trí của vật là:$s\left ( { 0 } \right.  )=2\,\,\left ( { m } \right.  )$.

Tại thời điểm $t=3$, vị trí của vật là:$s\left ( { 3 } \right.  )=86$.

Suy ra vật đã di chuyển được $86-2=84\,\,\left ( { m } \right.  )$.

**Chọn SAI.**

(c) Tại giây thứ $5$, vật đang chuyển động chậm dần đều.

Tại giây thứ $5$, gia tốc của vật là:$a\left ( { 5 } \right.  )=-2.5+12=2\,\left ( { m{ \rm{ / } }s ^ { 2 } } \right.  )>0$.

Suy ra tại giây thứ $5$, vật đang chuyển động nhanh dần đều.

**Chọn SAI.**

(d) Trong quá trình chuyển động (tính từ lúc bắt đầu đến khi dừng lại), tại thời điểm vận tốc của vật lớn nhất, gia tốc của vật cũng đạt giá trị lớn nhất.

Khi vật dừng lại tức là $v\left ( { t } \right.  )=0\,\,\left ( { t>0 } \right.  )$ suy ra $-t ^ { 2 } +12t+13=0⇔\left[ t=-1\,\,\left ( { l } \right.  )t=13\,\,\left ( { n } \right.  ) \right.$

Xét sự biến thiên của vận tốc trong quá trình di chuyển:

<p align="center"><img src="/assets/images/toan-12/c1_b5_image581.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Suy ra vật đạt vận tốc lớn nhất tại thời điểm $t=6\,\left ( { s } \right.  )$.

Khi đó gia tốc của vật bằng $a\left ( { 6 } \right.  )=0$.

Mà $t∈\left[ 0;13 \right]⇒a\left ( { t } \right.  )∈\left[ -14\,;12 \right]$.

Suy ra tại thời điểm vật đạt vận tốc lớn nhất, gia tốc của vật không đạt giá trị lớn nhất.

**Chọn SAI.**

</details>

**Câu 3:** Một công ty sản xuất một sản phẩm. Bộ phận tài chính của công ty đưa ra hàm giá bán là $p\left ( { x } \right.  )=1000-25x$, trong đó $p\left ( { x } \right.  )$ (triệu đồng) là giá bán của mỗi sản phẩm mà tại giá bán này có $x$ sản phẩm được bán ra.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Xét tính đúng sai của các khẳng định sau:

Lời giải

(a) Hàm doanh thu của công ty là $f\left ( { x } \right.  )=x⋅p\left ( { x } \right.  )$.

Mỗi sản phẩm có giá là $p\left ( { x } \right.  )$ ứng với $x$ sản phẩm được bán ra nên doanh thu của công ty là $f\left ( { x } \right.  )=x⋅p\left ( { x } \right.  )$.

**Chọn ĐÚNG.**

(b) Hàm số $f\left ( { x } \right.  )=-25x ^ { 2 } +1000x$ có đạo hàm $f'\left ( { x } \right.  )=-50x+1000$.

Ta có:$f\left ( { x } \right.  )=-25x ^ { 2 } +1000x$.

suy ra $f'\left ( { x } \right.  )=-50x+1000$.

**Chọn ĐÚNG.**

(c) Nếu $f\left ( { x } \right.  )=x⋅p\left ( { x } \right.  )$ là hàm doanh thu thì phương trình $f'\left ( { x } \right.  )=0$ có nghiệm là $x=2$.

Ta có phương trình $f'\left ( { x } \right.  )=0$ $⇔-50x+1000=0$

$⇔x=20$.

**Chọn SAI.**

(d) Hàm doanh thu đạt giá trị lớn nhất bằng $10000$.

Ta có:$f\left ( { x } \right.  )=-25x ^ { 2 } +1000x$.

$f'\left ( { x } \right.  )=-50x+1000$.

$f'\left ( { x } \right.  )=0$ $⇔-50x+1000=0$

$⇔x=20$.

Bảng biến thiên của hàm $f\left ( { x } \right.  )$

<p align="center"><img src="/assets/images/toan-12/c1_b5_image616.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Vậy hàm doanh thu đạt giá trị lớn nhất là $10000$.

**Chọn ĐÚNG.**

</details>

**Câu 4:** Để thiết kế một chiếc bể cá không có nắp đậy hình hộp chữ nhật có chiều cao $60\,{ \rm{ c } }{ \rm{ m } }$, thể tích là $96.000\,\,{ \rm{ c } }{ \rm{ m } } ^ { { \rm{ 3 } } }$, người thợ dùng loại kính để sử dụng làm mặt bên có giá thành là $70.000$ đồng/${ \rm{ m } } ^ { { \rm{ 2 } } }$ và loại kính để làm mặt đáy có giá thành là $100.000$ đồng/${ \rm{ m } } ^ { { \rm{ 2 } } }$. Nếu coi chiều dài của hình chữ nhật đáy là $x\,\left ( { { \rm{ m } } } \right.  )$ $\left ( { x>0 } \right.  )$. Xét tính đúng sai của các khẳng định sau:

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

<p align="center"><img src="/assets/images/toan-12/c1_b5_image631.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Gọi $x\,\left ( { { \rm{ m } } } \right.  )$ là chiều dài của hình chữ nhật đáy $\left ( { x>0 } \right.  )$.

(a) Chiều rộng của hình chữ nhật là:$\frac { 1 } { 25x }\left ( { { \rm{ m } } } \right.  )$.

Khi đó chiều rộng là:$\frac { 0,096 } { 0,6x }=\frac { 4 } { 25x }.$

**Chọn SAI.**

(b) Diện tích các mặt xung quanh của bể cá là:$1,2\left ( { x+\frac { 4 } { 25x } } \right.  )\left ( { { \rm{ m } } ^ { { \rm{ 2 } } } } \right.  )$.

Khi đó diện tích mặt xung quanh là:$1,2\left ( { x+\frac { 4 } { 25x } } \right.  )$.

**Chọn ĐÚNG.**

(c) Nếu $x\,=1\left ( { { \rm{ m } } } \right.  )$ thì chi phí làm mặt xung quanh là:$97.440$ đồng.

Chi phí để làm mặt xung quanh là:$70.1,2\left ( { x+\frac { 4 } { 25x } } \right.  )=84\left ( { x+\frac { 4 } { 25x } } \right.  )$ (nghìn đồng).

Nếu $x\,=1\left ( { { \rm{ m } } } \right.  )$ thì tổng chi phí làm mặt xung quanh là $97.440$ đồng.

**Chọn ĐÚNG.**

(d) Chi phí thấp nhất để làm bể cá là:$83.000$ đồng.

Diện tích mặt đáy là:$x.\frac { 4 } { 25x }=\frac { 4 } { 25 }.$

Cho phí để làm mặt đáy là:$100.\frac { 4 } { 25 }=16$ (nghìn đồng).

Chi phí để làm bể cá thấp nhất khi và chỉ khi chi phí làm mặt bên thấp nhất

Xét hàm số $f\left ( { x } \right.  )=x+\frac { 4 } { 25x }\,\,,\,x>0$.

$f'\left ( { x } \right.  )=1-\frac { 4 } { 25x ^ { 2 } }=\frac { 25x ^ { 2 } -4 } { 25x ^ { 2 } }$

$f'\left ( { x } \right.  )=0⇔25x ^ { 2 } -4=0⇔x=\frac { 2 } { 5 }.$

Bảng biến thiên

<p align="center"><img src="/assets/images/toan-12/c1_b5_image649.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Khi đó chi phí thấp nhất là:$84.\frac { 4 } { 5 }+16=83.200$ đồng.

**Chọn SAI.**

</details>

**Câu 5:** Nhân ngày phụ nữ Việt Nam 20 – 10 năm 2024, ông An quyết định mua tặng vợ một món quà và đặt nó vào trong một chiếc hộp có thể tích là $32\,{ \rm{ c } }{ \rm{ m } } ^ { 3 }$, có đáy là hình vuông và không có nắp. Để món quà trở nên thật đặc biệt và xứng đáng với giá trị của nó ông quyết định mạ vàng cho chiếc hộp, biết rằng độ dày $d\left ( { { \rm{ m } }{ \rm{ m } } } \right.  )$ của lớp mạ tại mọi nơi bên mặt ngoài hộp là như nhau. Gọi chiều cao và cạnh đáy của chiếc hộp lần lượt là $h\,\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$ và $x\,\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

(a) Chiều cao của hộp là $h=\frac { 32 } { x ^ { 2 } }$.

Thể tích của hộp là $V=32⇔x ^ { 2 } .h=32⇔h=\frac { 32 } { x ^ { 2 } }$.

**Chọn ĐÚNG.**

(b) Diện tích của phần hộp cần mạ vàng là $S(x)=4xh+2x ^ { 2 }$.

Diện tích của phần hộp cần mạ vàng gồm diện tích 4 mặt xung quanh là hình chữ nhật cạnh $x,\,h$ và một đáy hộp hình vuông cạnh $x$.

Do đó $S(x)=4xh+x ^ { 2 }$.

**Chọn SAI.**

(c) Khối lượng vàng cần dùng tỉ lệ thuận với diện tích của phần hộp cần mạ.

Ta có khối lượng vàng cần dùng là:$m=P_{ { \rm{ v } }{ \rm{ µ } }{ \rm{ n } }{ \rm{ g } } } .d.S\left ( { x } \right.  )$,

với $P_{ { \rm{ v } }{ \rm{ µ } }{ \rm{ n } }{ \rm{ g } } }$ là khối lượng riêng của vàng (là hằng số).

Suy ra khối lượng vàng cần dùng tỉ lệ thuận với diện tích của phần hộp cần mạ.

**Chọn ĐÚNG.**

(d) Nếu độ dày $d\left ( { { \rm{ m } }{ \rm{ m } } } \right.  )$ của lớp mạ không thay đổi. Để lượng vàng cần dùng là nhỏ nhất thì $h=2\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$ và $x=4\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$.

Ta có $S(x)=4xh+x ^ { 2 } =4x.\frac { 32 } { x ^ { 2 } }+x ^ { 2 } =\frac { 128 } { x }+x ^ { 2 }$

Để lượng vàng cần dùng là nhỏ nhất thì $S\left ( { x } \right.  )$ phải nhỏ nhất trên $\left ( { 0;+∞ } \right.  )$.

Ta có $S'(x)=2x-\frac { 128 } { x ^ { 2 } }$

$S'(x)=0⇔2x-\frac { 128 } { x ^ { 2 } }=0⇒x=4$

Bảng biến thiên

<p align="center"><img src="/assets/images/toan-12/c1_b5_image676.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Vậy lượng vàng cần dùng là nhỏ nhất khi $x=4\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$ $⇒h=\frac { 32 } { x ^ { 2 } }=2\left ( { { \rm{ c } }{ \rm{ m } } } \right.  )$.

**Chọn ĐÚNG.**

</details>

**Câu 6:** Vị trí một chuyển động thẳng được cho bởi phương trình:$s(t)=t ^ { 3 } -3t ^ { 2 } +7t-2$, trong đó $t>0$ và tính bằng giây và $s$ tính bằng mét. Khi đó:

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

Ta có:$s'\left ( { t } \right.  )=3t ^ { 2 } -6t+7$ và $s'$.

(a) Vận tốc của vật tại thời điểm $t=2$ là $7\,\left ( { { \rm{ m } }{ \rm{ / } }{ \rm{ s } } } \right.  )$.

Vận tốc của vật tại thời điểm $t=2$ là:$v\left ( { 2 } \right.  )=s'\left ( { 2 } \right.  )=3.2 ^ { 2 } -6.2+7=7\,\left ( { { \rm{ m } }{ \rm{ / } }{ \rm{ s } } } \right.  )$.

**Chọn ĐÚNG.**

(b) Gia tốc của vật tại thời điểm $t=2$ là $6\,\left ( { { \rm{ m } }{ \rm{ / } }{ \rm{ s } } ^ { 2 } } \right.  )$.

Gia tốc của vật tại thời điểm $t=2$ là:$a\left ( { 2 } \right.  )=v'\left ( { 2 } \right.  )=s'$.

**Chọn ĐÚNG.**

(c) Gia tốc của vật tại thời điểm mà vận tốc của chuyển động bằng $16 \,{ \rm{ m } }{ \rm{ / } }{ \rm{ s } } ^ { { \rm{ 2 } } }$ là $10\,\left ( {  { \rm{ m } }{ \rm{ / } }{ \rm{ s } } ^ { { \rm{ 2 } } } } \right.  )$.

Vận tốc của chuyển động bằng $16 \,{ \rm{ m } }{ \rm{ / } }{ \rm{ s } } ^ { { \rm{ 2 } } }$ tại thời điểm $t$ nghĩa là:

$v\left ( { t } \right. )=s'\left ( { t } \right. )=16{ \rm{ } }⇔3t ^ { 2 } -6t+7=16⇔$.

Gia tốc của vật tại thời điểm $t=3$ là:$a\left ( { 3 } \right.  )=v\left ( { 3 } \right.  )=s'$.

**Chọn SAI.**

(d) Thời điểm $t=1$ (giây) tại đó vận tốc của chuyển động đạt giá trị nhỏ nhất.

Vận tốc của chuyển động có phương trình $v\left ( { t } \right.  )=3t ^ { 2 } -6t+7$.

Có $v'\left ( { t } \right.  )=6t-6=0⇔t=1$.

Bảng biến thiên

<p align="center"><img src="/assets/images/toan-12/c1_b5_image709.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Từ bảng biến thiên suy ra hàm số có giá trị nhỏ nhất bằng 4 tại $t=1$.

Vậy tại thời điểm $t=1$ thì vận tốc của chuyển động đạt giá trị nhỏ nhất bằng $4\,\left ( { { \rm{ m } }{ \rm{ / } }{ \rm{ s } } } \right.  )$.

**Chọn ĐÚNG.**

</details>

**Câu 7:** Một hộ làm nghề dệt vải lụa tơ tằm sản xuất mỗi ngày được $x$ mét vải lụa $\left ( { 1≤x≤18 } \right.  )$. Tổng chi phí sản xuất $x$ mét vải lụa, tính bằng nghìn đồng, cho bởi hàm chi phí:$C\left ( { x } \right.  )=x ^ { 3 } -3x ^ { 2 } -20x+500$. Giả sử hộ làm nghề dệt này bán hết sản phẩm mỗi ngày với giá 220 nghìn đồng/mét. Gọi $B\left ( { x } \right.  )$ là số tiền bán được và $L\left ( { x } \right.  )$ là lợi nhuận thu được khi bán $x$ mét vải lụa.

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

Khi bán ra $x$ mét vải lụa:

(a) Biểu thức tính $B\left ( { x } \right.  )$ theo $x$ là $B\left ( { x } \right.  )=220x$ (nghìn đồng).

Số tiền thu được là $B\left ( { x } \right.  )=220x$ (nghìn đồng).

**Chọn ĐÚNG.**

(b) Biểu thức tính $L\left ( { x } \right.  )$ theo $x$ là $L\left ( { x } \right.  )=-x ^ { 3 } +3x ^ { 2 } +220x-500$ (nghìn đồng).

Lợi nhuận thu được là $L\left ( { x } \right.  )=B\left ( { x } \right.  )-C\left ( { x } \right.  )=220x-\left ( { x ^ { 3 } -3x ^ { 2 } -20x+500 } \right.  )=-x ^ { 3 } +3x ^ { 2 } +240x-500$ (nghìn đồng).

**Chọn SAI.**

(c) Hộ làm nghề dệt này cần sản xuất và bán ra mỗi ngày 10 mét vải lụa để thu được lợi nhuận tối đa.

Hàm lợi nhuận $L\left ( { x } \right.  )=L\left ( { x } \right.  )=-x ^ { 3 } +3x ^ { 2 } +240x-500$ xác định trên đoạn $\left[ 1;18 \right]$.

Ta có $L'\left ( { x } \right.  )=-3x ^ { 2 } +6x+240$;$L'\left ( { x } \right.  )=0⇔\left[ x=10x=-8{ \rm{ } }\left ( { L } \right.  ) \right.$

<p align="center"><img src="/assets/images/toan-12/c1_b5_image740.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Từ bảng biến thiên ta có lợi nhuận $L\left ( { x } \right.  )$ đạt giá trị lớn nhất khi $x=10$

**Chọn ĐÚNG.**

(d) Lợi nhuận tối đa mỗi ngày của hộ làm nghề dệt vải lụa tơ tằm này là $1\,000\,000$ đồng.

Theo phần (c) lợi nhuận $L\left ( { x } \right.  )$ đạt giá trị lớn nhất là $1200$ nghìn đồng hay $1\,200\,000$ đồng

**Chọn SAI.**

</details>

**Câu 8:** Để doanh thu cao nhất trong mùa hè năm 2024, Ban quản lý bể bơi thành phố tiến hành thăm dò dư luận. Qua thăm dò dư luận cho thấy số khách đến bơi thay đổi phụ thuộc vào giá vé $x$ theo hàm cầu là:$y\left ( { x } \right.  )=-\frac { 1 } { 50 }x+1300$, với $x$ giá mỗi vé bơi đơn vị đồng. Xét tính Đúng – Sai các khẳng định sau đây?

<details>
<summary><b>Xem lời giải chi tiết & đáp án các ý a, b, c, d</b></summary>

Lời giải

(a) Giá vé $40\,000$ đồng thì mỗi ngày bể bơi có $500$ khách.

Giá vé $x=40\,000$ đồng thì số khách đến bể bơi là:$y\left ( { 40000 } \right.  )=-\frac { 1 } { 50 }.40000+1300=500$ khách.

**Chọn ĐÚNG.**

(b) Hàm doanh thu là:$R\left ( { x } \right.  )=-\frac { 1 } { 50 }x ^ { 2 } +1300.x+500$.

Hàm doanh thu là:$R\left ( { x } \right.  )=x.y\left ( { x } \right.  )=x.\left[ -\frac { 1 } { 50 }x+1300 \right]=-\frac { 1 } { 50 }x ^ { 2 } +1300.x$ $⇒R\left ( { x } \right.  )=-\frac { 1 } { 50 }x ^ { 2 } +1300x$.

**Chọn SAI.**

(c) Giá vé $35000$ đồng thì doanh thu cao nhất.

Hàm doanh thu là:$R\left ( { x } \right.  )=-\frac { 1 } { 50 }x ^ { 2 } +1300x$

$⇒R'\left ( { x } \right.  )=-\frac { 1 } { 25 }x+1300$

Có $R'\left ( { x } \right.  )=0⇔x=32500$

Ta có bảng biến thiên

<p align="center"><img src="/assets/images/toan-12/c1_b5_image766.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Từ bảng biến thiên ta có $R\left ( { x } \right.  )$ đạt giá trị lớn nhất khi $x=32500$ (đồng).

**Chọn SAI.**

(d) Doanh thu cao nhất là:$21125000$

Theo bảng biến thiên ở phần c) ta có doanh thu tối đa bể bơi có thể thu được mỗi ngày là $21\,\,125\,\,000$ (đồng).

**Chọn ĐÚNG.**

</details>

## V. Bài tập trắc nghiệm Trả lời ngắn (Cấu trúc mới GDPT 2018)

Thí sinh giải bài toán và điền đáp số vào ô trống tương ứng.

**Câu 1:** Giả sử một hạt chuyển động trên một trục thẳng đứng chiều dương hướng lên trên sao cho tọa độ của hạt (đơn vị: mét) tại thời điểm $t$ (giây) là $y=t ^ { 3 } -12t+3$,$t≥0$. Tìm vận tốc chuyển động của hạt tại thời điểm $t=6$.

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 96</b></summary>

> **Đáp số:** `96`

Hàm vận tốc là $v\left ( { t } \right.  )=y'=3.t ^ { 2 } -12$,$t≥0$. Ta có, tại thời điểm $t=6$,$v(6)=3.6 ^ { 2 } -12=96$ Vậy $v\left ( { 6 } \right.  )=96$

</details>

**Câu 2:** Người ta giới thiệu một loại thuốc kích thích sự sinh sản của một loại vi khuẩn. Sau $t$ phút, số vi khuẩn được xác định theo công thức:$f\left ( { t } \right.  )=1000+30t ^ { 2 } -t ^ { 3 } { \rm{ } }{ \rm{ } }{ \rm{ } }\left ( { 0≤t≤30 } \right.  )$. Hỏi sau bao nhiêu phút thì số vi khuẩn lớn nhất?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 20</b></summary>

> **Đáp số:** `20`

Ta có:$f'\left ( { t } \right.  )=-3t ^ { 2 } +60t$,$f'\left ( { t } \right.  )=0⇔\left[ t=0t=20 \right.$. $f\left ( { 0 } \right.  )=f\left ( { 30 } \right.  )=1000$,$f\left ( { 20 } \right.  )=5000$. Vậy $\mathop { max } \limits_{ \left[ 0;30 \right] } f\left ( { t } \right.  )=5000$ tại $t=20$ (phút).

</details>

**Câu 3:** Dân số của một quốc gia sau t (năm) kể từ năm 2023 được ước tính bởi công thức:$N\left ( { t } \right.  )=100e ^ { 0,012t }$ ($N\left ( { t } \right.  )$ được tính bằng triệu người,$0≤t≤50$). Ước tính dân số của quốc gia này vào năm 2030 là bao nhiêu (Làm tròn đến hàng đơn vị)?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 109</b></summary>

> **Đáp số:** `109`

Dân số của quốc gia này vào các năm 2030 (t = 7) là: N(7) = 100e0,012.7 = 108,763 triệu người $≈$ 109 triệu người.

</details>

**Câu 4:** Mỗi chuyến xe buýt có sức chứa tối đa là 60 hành khách. Một chuyến xe buýt chở $x$ hành khách thì giá tiền cho mỗi hành khách là $\left ( { 3-\frac { x } { 40 } } \right.  ) ^ { 2 }$ $\left ( { USD } \right.  )$. Hỏi một chuyến xe buýt thu được lợi nhuận cao nhất bằng bao nhiêu USD?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 160</b></summary>

> **Đáp số:** `160`

Ta có:$y=x\left ( { 3-\frac { x } { 40 } } \right.  ) ^ { 2 } ⇒y'=9-\frac { 3 } { 10 }x+\frac { 3x ^ { 2 } } { 1600 }=0⇔\left[ x=40x=120 \right. { \rm{ } }{ \rm{ } }0≤x≤60$. $⇒y_{ max } =160⇔x=40$. Số tiền thu được là:$160$ $\left ( { USD } \right.  )$.

</details>

**Câu 5:** Một công ty nghệ thuật kiến trúc trong công viên thành phố Thanh Hóa có dạng là một tòa nhà hình chóp tứ giác đềunội tiếp một mặt cầu bán kính bằng $5\left ( { m } \right.  )$. Toàn bộ tòa nhà được trang trí các hình ảnh lịch sử và tượng anh hùng. Do vậy để có không gian rộng bên trong tòa nhà người ta đã xây dựng tòa nhà sao cho thể tích lớn nhất. Chiều cao của tòa nhà đó bằng (Kết quả làm tròn đến hai chữ số sau dấu phẩy).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 6,67</b></summary>

> **Đáp số:** `6,67`

Đặt $AB=AD=x,SH=h\left ( { x>0,h>0 } \right.  )$ Gọi $M$ là trung điểm $SA$, qua $M$ dựng $OM⊥SA$ tại $M$ và cắt $SH$ tại $O⇒O$ là tâm của mặt cầu. Ta có $SO=5\left ( { m } \right.  )⇒OH=h-5$ Trong tam giác vuông $OHC$ có $HC=\sqrt{ OC ^ { 2 } -OH ^ { 2 } }=\sqrt{ 25-\left ( { h-5 } \right.  ) ^ { 2 } }⇔\frac { x\sqrt{ 2 } } { 2 }=\sqrt{ 10h-h ^ { 2 } }⇔x=\sqrt{ 20h-2h ^ { 2 } }\left ( { 5 < h < 10 } \right.  )$ $⇒V_{ S.ABCD } =\frac { 1 } { 3 }Bh=\frac { 1 } { 3 }\left ( { \sqrt{ 20h-2h ^ { 2 } } } \right.  ) ^ { 2 } h=\frac { 1 } { 3 }\left ( { 20h ^ { 2 } -2h ^ { 3 } } \right.  )$ Ta có $V'\left ( { h } \right.  )=\frac { 1 } { 3 }\left ( { 40h-6h ^ { 2 } } \right.  )⇒V'\left ( { h } \right.  )=0⇔h=\frac { 20 } { 3 }$ Vậy chiều cao của tòa nhà đó bằng $h≈6,67$

</details>

**Câu 6:** Cần phải xây dựng một hố ga, dạng hình hộp chữ nhật có thể tích $3\left ( { m ^ { 3 } } \right.  )$. Tỉ số giữa chiều cao $\left ( { h } \right.  )$ và chiều rộng của đáy $\left ( { y } \right.  )$ bằng $4$. Biết rằng hố ga chỉ có các mặt bên và mặt đáy (tức không có mặt trên). Chiều dài của đáy $\left ( { x } \right.  )$ bằng bao nhiêu để người thợ tốn ít nguyên vật liệu để xây hố ga.(kết quả làm tròn đến hai chữ số sau dấu phẩy)

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 1,33</b></summary>

> **Đáp số:** `1,33`

Theo bài ra ta có $\left\{ \begin{array}{l} h=4yxyh=3 \end{array} \right.⇒\left\{ \begin{array}{l} y=\frac { 1 } { 4 }hh=\frac { \sqrt{ 12 } } { \sqrt{ x } } \end{array} \right.$ Người thợ sử dụng ít vật liệu nhất khi tổng diện tích các mặt bên và đáy là nhỏ nhất hay $S=2xh+2hy+xy=2\sqrt{ 12 }\sqrt{ x }+2\frac { \sqrt{ 12 } } { \sqrt{ x } }.\frac { \sqrt{ 3 } } { 2\sqrt{ x } }+\frac { \sqrt{ 3 } } { 2 }\sqrt{ x }=\frac { 6 } { x }+\frac { 9\sqrt{ 3 } } { 2 }\sqrt{ x }$ Áp dụng cô si ta có $S=\frac { 6 } { x }+\frac { 9\sqrt{ 3 } } { 4 }\sqrt{ x }+\frac { 9\sqrt{ 3 } } { 4 }\sqrt{ x }≥3\sqrt[3] { \frac { 6 } { x }\left ( { \frac { 9\sqrt{ 3 } } { 4 } } \right.  ) ^ { 2 } x }=\frac { 27 } { 2 }$ Dấu bằng xảy ra khi và chỉ khi $x=\frac { 4 } { 3 }≈1,33$.

</details>

**Câu 7:** Một màn ảnh hình chữ nhật cao $1,4\left ( { m } \right.  )$ và đặt ở độ cao $1,8\left ( { m } \right.  )$ so với tầm mặt (Tính từ đầu méo dưới của màn hình).

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 2,4</b></summary>

> **Đáp số:** `2,4`

Bạn Huyền muốn nhìn màn ảnh rõ nét nhất thì phải đứng cách vị trí $A$ bao nhiêu mét? Biết rằng góc $\widehat { BOC }$ là góc nhọn. Đặt $OA=x\left ( { m } \right.  )\left ( { x>0 } \right.  )⇒OB=\sqrt{ AB ^ { 2 } +OA ^ { 2 } }=\sqrt{ 3,24+x ^ { 2 } }$. Trong tam giác $OBC$ ta có $cos \widehat { BOC }=\frac { OB ^ { 2 } +OC ^ { 2 } -BC ^ { 2 } } { 2OBOC }=\frac { 5,76+x ^ { 2 } } { \sqrt{ \left ( { 3,24+x ^ { 2 } } \right.  )\left ( { 10,24+x ^ { 2 } } \right.  ) } }$ Vì $\widehat { BOC }$ nhọn nên bài toán trở thành tìm $x$ để $F\left ( { x } \right.  )=\frac { 5,76+x ^ { 2 } } { \sqrt{ \left ( { 3,24+x ^ { 2 } } \right.  )\left ( { 10,24+x ^ { 2 } } \right.  ) } }$ đạt giá trị nhỏ nhất. Đặt $t=2,24+x ^ { 2 } \left ( { t>3,24 } \right.  )$ $⇒F\left ( { t } \right.  )=\frac { t+\frac { 63 } { 25 } } { \sqrt{ t\left ( { t+7 } \right.  ) } }=\frac { 25t+63 } { 25\sqrt{ t\left ( { t+7 } \right.  ) } }⇒F'\left ( { t } \right.  )=\frac { 1 } { 25 }\left ( { \frac { 49t-441 } { 2t\left ( { t+7 } \right.  )\sqrt{ t\left ( { t+7 } \right.  ) } } } \right.  )$ $⇒F'\left ( { t } \right.  )=0⇔t=9$ Vậy $F\left ( { t } \right.  )_{ Min } ⇔t=9⇒3,24+x ^ { 2 } =9⇔x=2,4$

</details>

**Câu 8:** Một con cá hồi bơi ngược dòng (từ nơi sinh sống) để vượt khoảng cách $400km$ tới nơi sinh sản. Vận tốc dòng nước là $6km/h$. Giả sử vận tốc bơi của cá khi nước đứng yên là $v\,\left ( { km/h } \right.  )$ thì năng lượng tiêu hao của cá trong $t$ giờ cho bởi công thức $E\left ( { v } \right.  )=cv ^ { 3 } t$, trong đó $c$ là hằng số cho trước,$E$ tính bằng Jun. Vận tốc bơi của cá khi nước đứng yên để năng lượng của cá tiêu hao ít nhất bằng

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 9</b></summary>

> **Đáp số:** `9`

Vận tốc của cá khi bơi ngược dòng là $v-6\left ( { km/h,v>6 } \right.  )$. Năng lượng tiêu hao của cả quá trình tìm về nguồn là:$E\left ( { v } \right.  )=cv ^ { 3 } t=cv ^ { 3 } .\frac { 400 } { v-6 }$ Ta có $E'\left ( { v } \right.  )=c.400.\frac { 2v ^ { 3 } -18v ^ { 2 } } { \left ( { v-6 } \right.  ) ^ { 2 } }⇒E'\left ( { v } \right.  )=0⇔v=9\left ( { km/h } \right.  )$ Ta có bảng biến thiên Từ bảng biến thiên ta có $E\left ( { v } \right.  )_{ Min } =E\left ( { 9 } \right.  )$ Vậy $v=9$.

</details>

**Câu 9:** Một vật được phóng thẳng đứng lên trên từ độ cao $2 m$ với vận tốc ban đầu là $24,5 m/s$. Trong Vật lí, ta biết rằng khi bỏ qua sức cản của không khí thì độ cao $h$ (mét) của vật sau $t$ (giây) được cho bởi công thức $h(t)=2+24,5t-4,9t ^ { 2 } .$ Hỏi sau bao nhiêu giây thì vật đạt độ cao lớn nhất?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 2,5</b></summary>

> **Đáp số:** `2,5`

Xét hàm số:$h(t)=2+24,5t-4,9t ^ { 2 }$. Tập xác định của hàm số là $\mathbb{R}$. Ta có:$h ^ { ′ } (t)=-9,8t+24,5;$ $h ^ { ′ } (t)=0⇔-9,8t+24,5=0⇔t=\frac { 5 } { 2 }$ Bảng biến thiên: <p align="center"><img src="/assets/images/toan-12/c1_b5_image863.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p> Từ bảng biến thiên ta có: Hàm số đạt cực đại tại $t=\frac { 5 } { 2 }$. Vậy thời điểm vật đạt độ cao lớn nhất là $t=\frac { 5 } { 2 }=2,5$ giây

</details>

**Câu 10:** Một công ty muốn làm một đường ống dẫn dầu từ một kho A ở trên bờ biển đến một vị trí B trên một hòn đảo. Hòn đảo cách bờ biển $6{ \rm{ } }{ \rm{ k } }{ \rm{ m } }$. Gọi C là điểm trên bờ sao cho $BC$ vuông góc với bờ biển. Khoảng cách từ $A$ đến $C$ là $9{ \rm{ } }{ \rm{ k } }{ \rm{ m } }$. Người ta cần xác định một ví trí $D$ trên $AC$ để lắp ống dẫn theo đường gấp khúc $ADB$. Tính khoảng cách $AD$ để số tiền chi phí thấp nhất, biết rằng giá để lắp đặt mỗi ${ \rm{ k } }{ \rm{ m } }$ đường ống trên bờ là $100.000.000$ đồng và dưới nước là $260.000.000$ đồng.

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 6,5</b></summary>

> **Đáp số:** `6,5`

<p align="center"><img src="/assets/images/toan-12/c1_b5_image878.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p> Đặt$AD=x$km,$x>0$.$CD=9-x$;$BD=\sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } }$ Giá thành lắp đặt là:$100.10 ^ { 6 } x+\sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } }.260.10 ^ { 6 } =10 ^ { 7 } \left[ 10x+26\sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } } \right]$ Xét hàm số$f\left ( { x } \right.  )=10x+\sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } }.26{ \rm{ } }\left ( { { \rm{ 0 } }{ \rm{ } }{ \rm{ < } }{ \rm{ } }x{ \rm{ } }{ \rm{ < } }{ \rm{ } }{ \rm{ 9 } } } \right.  )$ $f'\left ( { x } \right.  )=10-26.\frac { 9-x } { \sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } } }=0$ $⇔10\sqrt{ 36+\left ( { 9-x } \right.  ) ^ { 2 } }-26\left ( { 9-x } \right.  )=0$ $⇔\left\{ \begin{array}{l} x≤9-576x ^ { 2 } +10368x-43056=0 \end{array} \right.$ $⇔x=\frac { 13 } { 2 }$. Bảng biến thiên: <p align="center"><img src="/assets/images/toan-12/c1_b5_image889.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p> Từ BBT, ta thấy hàm số đạt giá trị nhỏ nhất khi$x=\frac { 13 } { 2 }$. Vậy$AD=6.5{ \rm{ } }{ \rm{ k } }{ \rm{ m } }$.

</details>

**Câu 11:** Người quản lí của một khu chung cư có 100 căn hộ cho thuê nhận thấy rằng tất cả các căn hộ sẽ có người thê nếu giá thuê một căn hộ lag 8 triệu đồng một tháng. Một cuộc khảo sát thị trường cho thấy rằng, trung bình cứ mỗi lần tăng giá thuê căn hộ thêm 100 nghìn đồng thì sẽ có thêm một căn hộ bị bỏ trống. Người quản lí nên đặt giá thuê mỗi căn hộ là bao nhiêu triệu đồng một tháng để doanh thu là lớn nhất?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 9</b></summary>

> **Đáp số:** `9`

Gọi $x$ là số lần tăng giá 100 nghìn đồng $\left ( { x>0 } \right.  )$. Khi đó, số căn được cho thuê là $100-x$ (căn) Tổng số tiền thu được trong một tháng là: $\left ( { 100-x } \right.  )\left ( { 8000000+100000x } \right.  )=100000\left ( { 100-x } \right.  )\left ( { 80+x } \right.  )$ $\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,=100000\left ( { -x ^ { 2 } +20x+8000 } \right.  )$ $\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\,=100000\left[ -\left ( { x-10 } \right.  ) ^ { 2 } +8100 \right]≤810000000,$∀x>0. Dấu “=” xảy ra khi $x=10\,\left ( { tm } \right.  )$ Vậy để thu được doanh thu là lớn nhất thì người quản lý nên đặt giá thuê mỗi căn hộ là: $8000000+100000.10=9000000$ (đồng).

</details>

**Câu 12:** Giả sử bạn là chủ của một xưởng cơ khí vừa nhận được một đơn đặt hàng là thiết kế một bồn chứa nước hình trụ có nắp với dung tích 20 lít. Để tốn ít nguyên vật liệu nhất thì chiều cao bồn nước lúc đó bằng bao nhiêu (Làm tròn đến hàng phần trăm)?

<details>
<summary><b>Xem đáp số & lời giải chi tiết: 0,29</b></summary>

> **Đáp số:** `0,29`

<p align="center"><img src="/assets/images/toan-12/c1_b5_image900.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p> Gọi$r,h\,\,(r,h>0)$lần lượt là bán kính đáy và chiều cao của khối trụ. Khi đó ta có: $V=πr ^ { 2 } h⇒h=\frac { V } { πr ^ { 2 } }.$ Để tốn ít nguyên vật liệu nhất, ta cần tìm$r$sao cho diện tích toàn phần của khối trụ nhỏ nhất. Ta có$S_{ tp } =2πr ^ { 2 } +2πrh=2πr ^ { 2 } +2πr\frac { V } { πr ^ { 2 } }=2π\left ( { r ^ { 2 } +\frac { V } { πr } } \right.  )$ Xét hàm số$f(r)=r ^ { 2 } +\frac { V } { πr }$. Bài toán trở thành tìm$min_{ r>0 } f(r)=$? Ta có$f ^ { ′ } (r)=2r-\frac { V } { πr ^ { 2 } },f ^ { ′ } (r)=0⇔r=\sqrt[3] { \frac { V } { 2π } }⇒h=\sqrt[3] { \frac { 4V } { π } }.$ Lập bảng biến thiên, ta được <p align="center"><img src="/assets/images/toan-12/c1_b5_image908.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p> Từ bảng biến thiên, ta rút ra$min_{ r>0 } f(r)=f\left ( { \sqrt[3] { \frac { V } { 2π } } } \right.  )$ Khi đó$h=\sqrt[3] { \frac { 4V } { π } }=\sqrt[3] { \frac { 4⋅20 } { π } }≈0,29 m$. ---------------------------------- Hết ----------------------------------

</details>
