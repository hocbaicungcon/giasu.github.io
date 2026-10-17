---
title: "Bài tập Toán 12: Xác suất có điều kiện và sơ đồ hình cây"
description: "Chuyên đề Xác suất có điều kiện, công thức nhân xác suất và phương pháp sử dụng sơ đồ hình cây Toán 12 kèm bài tập trắc nghiệm tự chấm có lời giải chi tiết."
category: Toán học
type: Bài tập
date: '2024-10-02'
tags:
- Toán học
- Toán 12
- Xác suất có điều kiện
- Sơ đồ hình cây
- Công thức nhân xác suất
grade: 12
---

# Bài tập Toán 12: Xác suất có điều kiện và sơ đồ hình cây

> **Tóm tắt chuyên đề:** Chuyên đề Xác suất có điều kiện, công thức nhân xác suất và phương pháp sử dụng sơ đồ hình cây Toán 12 kèm bài tập trắc nghiệm tự chấm có lời giải chi tiết.

## I. Lý thuyết trọng tâm cần nhớ

### 1. Định nghĩa xác suất có điều kiện

> **Định nghĩa:** Cho hai biến cố $A$ và $B$. » Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là xác suất của $A$ với điều kiện $B$. » Kí hiệu $P\left ( { A\left | { B } \right.  . } \right.  )$.

### 2. Công thức tính xác suất có điều kiện

> **Định nghĩa:** Cho hai biến cố $A$ và $B$ trong đó $P\left ( { B } \right.  )>0$ khi đó $P\left ( { A\left | { B } \right.  . } \right.  )=\frac { P\left ( { A∩B } \right.  ) } { P\left ( { B } \right.  ) }$

» Nếu $P\left ( { B } \right.  )>0$ thì $P\left ( { A∩B } \right.  )=P\left ( { B } \right.  ).P\left ( { A\left | { B } \right.  . } \right.  )$» Nếu $A$ và $B$ là hai biến cố bất kì thì:$P\left ( { A∩B } \right.  )=P\left ( { A } \right.  ).P\left ( { A\left | { B } \right.  . } \right.  )=P\left ( { B } \right.  ).P\left ( { A\left | { B } \right.  . } \right.  )$.» Cho $A$ và $B$ là hai biến cố với $P\left ( { B } \right.  )>0$. Khi đó, ta có:$P\left ( { A\left | { B } \right.  . } \right.  )=\frac { n\left ( { A∩B } \right.  ) } { n\left ( { B } \right.  ) }$ Trong đó $n\left ( { A∩B } \right.  )$ là số các trường hợp thuận lợi của $\left ( { A∩B } \right.  )$;$n\left ( { B } \right.  )$ là số các trường hợp thuận lợi của $B$.» Nếu $A$ và $B$ là hai biến cố bất kì, với $P\left ( { B } \right.  )>0$ thì:$P\left ( { \bar A\left | { B } \right.  . } \right.  )=1-P\left ( { A\left | { B } \right.  . } \right.  )$» Cho $A$ và $B$ là hai biến cố với $0 < P\left ( { A } \right.  ) < 1;{ \rm{ } }0 < P\left ( { B } \right.  ) < 1$. Khi đó,$A$ và $B$ là hai biến cố độc lập khi và chỉ khi:$P\left ( { A } \right.  )=P\left ( { A\left | { B } \right.  . } \right.  )=P\left ( { A\left | { \bar B } \right.  . } \right.  )$ và $P\left ( { B } \right.  )=P\left ( { B\left | { A } \right.  . } \right.  )=P\left ( { B\left | { \bar A } \right.  . } \right.  )$» Nếu $A$ và $B$ là hai biến cố bất kì, với $P\left ( { B } \right.  )>0$ thì:$P\left ( { \bar A\left | { B } \right.  . } \right.  )=1-P\left ( { A\left | { B } \right.  . } \right.  )$ Chú ý

KIẾN THỨC CẦN NHỚ 1. Xác suất điều kiện:$P\left ( { A\left | { B } \right.  . } \right.  )\frac { P\left ( { A∩B } \right.  ) } { P\left ( { B } \right.  ) }=\frac { n\left ( { A∩B } \right.  ) } { n\left ( { B } \right.  ) }$ 2. Công thức nhân xác suất:$P\left ( { A∩B } \right.  )=P\left ( { A } \right.  ).P\left ( { A\left | { B } \right.  . } \right.  )=P\left ( { B } \right.  ).P\left ( { A\left | { B } \right.  . } \right.  )$ Chú ý 1: Cho hai biến cố độc lập $A$ và $B$, với $0 < P\left ( { A } \right.  ) < 1;{ \rm{ } }0 < P\left ( { B } \right.  ) < 1$. »$P\left ( { A } \right.  )=P\left ( { A\left | { B } \right.  . } \right.  )=P\left ( { A\left | { \bar B } \right.  . } \right.  )$»$P\left ( { B } \right.  )=P\left ( { B\left | { A } \right.  . } \right.  )=P\left ( { B\left | { \bar A } \right.  . } \right.  )$ Chú ý 2: »$P\left ( { A } \right.  )+P\left ( { \bar A } \right.  )=1$»$P\left ( { A\left | { B } \right.  . } \right.  )+P\left ( { \bar A\left | { B } \right.  . } \right.  )=1$»$P\left ( { A∩B } \right.  )+P\left ( { A∩ \bar B } \right.  )=P\left ( { A } \right.  )$»$P\left ( { A∩B } \right.  )+P\left ( { \bar A∩B } \right.  )=P\left ( { B } \right.  )$» Cách ghi $P\left ( { A∩B } \right.  )$ với $P\left ( { AB } \right.  )$ hoàn toàn như nhau. Chú ý 3: » Những bài toán xảy ra xác suất điều kiện thường đi kèm với việc sử dụng quy tắc nhân xác suất, khi gặp bài toán này ta cần lưu ý đến sự độc lập của biến cố để vận dụng công thức đúng.
## II. Phân dạng bài tập & Phương pháp giải

### Dạng 1. Tính xác suất có điều kiện không sử dụng công thức.

Mô tả không gian mẫu» Cách 1: Liệt kê các phần tử của không gian mẫu và biến cố rồi đếm.» Cách 2: Sử dụng quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp để đếm só phần tử của không gian mẫu và biến cố.» Chú ý:1. chia hết cho $2$ (hay là số chẵn) thì chữ số $c∈\left\{ \begin{array}{l} 0;2;4;6;8 \end{array} \right\}$.2. chia hết cho $5$ thì chữ số $c∈\left\{ \begin{array}{l} 0;5 \end{array} \right\}$.3. chia hết cho $3$ thì chữ số $a+b+c$ chia hết cho $3$.4. chia hết cho $9$ thì chữ số $a+b+c$ chia hết cho $9$. Phương pháp

**Ví dụ 1.1.** Cho các chữ số $1;2;3;4;5;6$. Lấy ngẫu nhiên ba chữ số và sắp xếp theo một thứ tự. Xét biến Số $A$:“Ba số lập thành một số chia hết cho $2$”. Kết quả thuận lợi của biến cố $A$ bằng?

*Lời giải:*

Gọi số cần lập có dạng .

Số $n$ chia hết cho $2$ nên $c$ có $3$ cách chọn.

Tương ứng với mỗi cách chọn chữ số cho $c$, sẽ có $5$ cách chọn cho $a$.

Tương ứng với mỗi cách chọn chữ số cho $c;a$, sẽ có $4$ cách chọn cho $b$.

Theo quy tắc nhân, có $3.5.4=60$ số.

Vậy kết quả thuận lợi cho biến cố $A$ bằng $60$.

**Ví dụ 1.2.** Một nhóm các nhà khoa học gồm $4$ nhà toán học nam;$3$ nhà toán học nữ và $4$ nhà vật lí học nam. Lấy ngẫu nhiên ba người. Xác suất trong ba người có cả nam và nữ, cả toán và lí bằng?

*Lời giải:*

Không gian mẫu $n\left ( { Ω } \right.  )=C_{ 11 } ^{ 3 }$.

Gọi biến cố $A$:“ba người có cả nam và nữ, cả toán và lí”.

Ta có các trường hợp sau cho biến cố $A$

Trường hợp 1:$1$ nữ toán học;$1$ nam toán học và $1$ nam vật lí $⇒C_{ ^ { 3 } } ^{ 1 }.C_{ 4 } ^{ 1 }.C_{ 4 } ^{ 1 }=48$.

Trường hợp 2:$1$ nữ toán học;$0$ nam toán học và $2$ nam vật lí $⇒C_{ ^ { 3 } } ^{ 1 }.C_{ 4 } ^{ 0 }.C_{ 4 } ^{ 2 }=18$.

Trường hợp 3:$2$ nữ toán học;$0$ nam toán học và $1$ nam vật lí $⇒C_{ ^ { 3 } } ^{ 2 }.C_{ 4 } ^{ 0 }.C_{ 4 } ^{ 1 }=12$.

Theo qui tắc cộng thì $n\left ( { A } \right.  )=48+18+12=78$ cách.

Vậy xác suất của biến cố $A$ bằng $p\left ( { A } \right.  )=\frac { n\left ( { A } \right.  ) } { n\left ( { Ω } \right.  ) }=\frac { 78 } { 165 }$.

### Dạng 2. Tính xác suất có điều kiện sử dụng công thức.

Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$, tính trong điều kiện biết rằng biến cố $B$ đã xảy ra, được gọi là xác suất của biến $A$ với điều kiện $B$ và kí hiệu là $P\left ( { A\|B } \right.  )$. Cho hai biến cố $A$ và $B$ bất kỳ, với $P\left ( { B } \right.  )>0$. Khi đó $P\left ( { A\|B } \right.  )=\frac { P\left ( { AB } \right.  ) } { P\left ( { B } \right.  ) }$. Phương pháp

**Ví dụ 2.1.** Một hộp chứa 8 bi trắng, 2 bi đỏ. Lần lượt bốc từng bi. Giả sử lần đầu tiên bốc được bi trắng. Xác định xác suất lần thứ 2 bốc được bi đỏ.

*Lời giải:*

Gọi A: “lần 1 bốc được bi trắng”

và B: “lần 2 bốc được bi đỏ”

Xác suất lần 2 bốc được bi đỏ khi lần 1 đã bốc được bi trắng là $P\left ( { B\|A } \right.  )$

ta có:$P\left ( { A } \right.  )=\frac { 8.9 } { 10.9 }=\frac { 4 } { 5 }$;$P\left ( { A∩B } \right.  )=\frac { 8.2 } { 10.9 }=\frac { 8 } { 45 }$

Do đó:$P\left ( { B\|A } \right.  )=\frac { P\left ( { A∩B } \right.  ) } { P\left ( { A } \right.  ) }=\frac { \frac { 8 } { 45 } } { \frac { 4 } { 5 } }=\frac { 2 } { 9 }$

**Ví dụ 2.2.** Một bình đựng 5 viên bi kích thước và chất liệu giống nhau, chỉ khác nhau về màu sắc. Trong đó có 3 viên bi xanh và 2 viên bi đỏ. Lấy ngẫu nhiên từ bình ra một viên bi ta được viên bi màu xanh, rồi lại lấy ngẫu nhiên ra một viên bi nữa. Tính xác suất để lấy được viên bi đỏ ở lần thứ hai.

*Lời giải:*

Gọi A: “lấy viên bi thứ nhất là màu xanh”

và B: “lấy viên bi thứ hai là màu đỏ”,

Ta đi tính $P\left ( { B\|A } \right.  )$

ta có:$P\left ( { A } \right.  )=\frac { 3.4 } { 5.4 }=\frac { 3 } { 5 }$;$P\left ( { A∩B } \right.  )=\frac { 3.2 } { 5.4 }=\frac { 3 } { 10 }$

Do đó:$P\left ( { B\|A } \right.  )=\frac { P\left ( { A∩B } \right.  ) } { P\left ( { A } \right.  ) }=\frac { \frac { 3 } { 10 } } { \frac { 3 } { 5 } }=\frac { 1 } { 2 }$

**Ví dụ 2.3.** Một hộp có $30$ viên bi trắng và $10$ viên bi đen, các viên bi có cùng kích thước và khối lượng. Lần thứ nhất lấy ngẫu nhiên một viên bi trong hộp, không trả lại. Sau đó, lần thứ 2 lấy ngẫu nhiên thêm một viên bi trong hộp đó. Gọi $A$ là biến cố: “Lần thứ hai lấy được viên bi trắng”; và $B$ là biến cố: “Lần thứ nhất lấy được viên bi đen”. Tính $P\left ( { A\|B } \right.  )$.

*Lời giải:*

$n\left ( { Ω } \right.  )=40.39$.

Lần thứ nhất có $10$ cách chọn một viên bi đen,

Lần thứ hai có $39$ cách chọn từ $39$ viên bi còn lại.

Do đó $n\left ( { B } \right.  )=10.39$ $⇒P\left ( { B } \right.  )=\frac { n\left ( { B } \right.  ) } { n\left ( { Ω } \right.  ) }=\frac { 1 } { 4 }$.

Lần thứ nhất có $10$ cách chọn một viên bi đen,

Lần thứ hai có $30$ cách chọn bi trắng từ $30$ viên bi trắng.

Do đó $n\left ( { AB } \right.  )=10.30$ $⇒P\left ( { AB } \right.  )=\frac { n\left ( { AB } \right.  ) } { n\left ( { Ω } \right.  ) }$.

Vậy $P\left ( { A\|B } \right.  )=\frac { P\left ( { AB } \right.  ) } { P\left ( { B } \right.  ) }=\frac { n\left ( { AB } \right.  ) } { n\left ( { B } \right.  ) }=\frac { 10.30 } { 10.39 }=\frac { 30 } { 39 }=\frac { 10 } { 13 }$.

**Ví dụ 2.4.** Trong cơ quan có $100$ người. Trong đó có $60$ người gần cơ quan (trong đó có $40$ người là nam), có tổng cộng $30$ nữ nhân viên. Theo quy định của cơ quan thì người nào hoặc là nam hoặc gần cơ quan sẽ phải tham gia trực. Tính xác suất để chọn ngẫu nhiên một người trong danh sách mà người đó lại là nữ trực cơ quan?

*Lời giải:*

Ta có 100 người gồm: 30 nữ và 70 nam

Trong đó: 60 người gần cơ quan, lại có 40 nam.

Từ đó có 20 người nữ gần cơ quan. Khi đó gần cơ quan có 90 người.

Gọi A: “Người nữ” và B:“Người phải trực”.

$AB$: “Người nữ gần cơ quan”$⇒n\left ( { AB } \right.  )=20⇒P\left ( { AB } \right.  )=\frac { n\left ( { AB } \right.  ) } { n\left ( { Ω } \right.  ) }=\frac { 2 } { 10 }$.

$B$: “Người phải trực”$⇒n\left ( { B } \right.  )=90⇒P\left ( { B } \right.  )=\frac { n\left ( { B } \right.  ) } { n\left ( { Ω } \right.  ) }=\frac { 9 } { 10 }$.

Xác suất người được chọn là nữ và là người trực cơ quan là:

$P\left ( { A\left | { B } \right.  . } \right.  )=\frac { P\left ( { AB } \right.  ) } { P\left ( { B } \right.  ) }=\frac { \frac { 2 } { 10 } } { \frac { 9 } { 10 } }=\frac { 2 } { 9 }$.

**Ví dụ 2.5.** Một gia đình có 2 đứa trẻ. Biết rằng có ít nhất 1 đứa trẻ là con gái. Hỏi xác suất 2 đứa trẻ đều là con gái là bao nhiêu? Cho biết xác suất để một đứa trẻ là trai hoặc gái là bằng nhau.

*Lời giải:*

Giới tính cả 2 đứa trẻ là ngẫu nhiên và không liên quan đến nhau.

Do gia đình có 2 đứa trẻ nên sẽ có thể xảy ra 4 khả năng:

(trai, trai), (gái, gái), (gái, trai), (trai, gái).

Gọi A: “Cả hai đứa trẻ đều là con gái”

và B: “Có ít nhất một đứa trẻ là con gái”

Ta có $P\left ( { A } \right.  )=\frac { 1 } { 4 };P\left ( { B } \right.  )=\frac { 3 } { 4 }$

Do nếu xảy ra A thì đương nhiên sẽ xảy ra B nên ta có:

$P\left ( { A∩B } \right.  )=P\left ( { A } \right.  )=\frac { 1 } { 4 }$

Suy ra, xác suất để cả hai đứa trẻ đều là con gái khi biết ít nhất có một đứa trẻ là gái là

$P\left ( { A\|B } \right.  )=\frac { P\left ( { A∩B } \right.  ) } { P\left ( { B } \right.  ) }=\frac { \frac { 1 } { 4 } } { \frac { 3 } { 4 } }=\frac { 1 } { 3 }$

**Ví dụ 2.6.** Ba khẩu súng độc lập bắn vào một mục tiêu. Xác suất để khẩu thứ nhất bắn trúng bằng 0,7 , để khẩu thứ hai bắn trúng bằng 0,8 , để khẩu thứ ba bắn trúng bằng 0,5 . Mỗi khẩu bắn 1 viên. Tính xác suất để khẩu thứ nhất bắn trúng biết rằng chỉ có 2 viên trúng mục tiêu.

*Lời giải:*

Gọi $A_{ i }$ là biến cố khẩu thứ nhất bắn trúng

Gọi $B$ là biến cố có đúng hai khẩu bắn trúng.

Ta có:

$=0,7.0,8.0,5+0,7.0,2.0,5+0,3.0,8.0,5=0,47$.

Xác suất để khẩu thứ nhất bắn trúng khi chỉ có 2 viên trúng mục tiêu:

.

### Dạng 3. Tính xác suất có điều kiện sử dụng sơ đồ hình cây.

Xây dựng sơ đồ cây theo mẫu (hình bên dưới) và xác định xác suất trên mỗi nhánh. Tính $P\left ( { A∩B } \right.  )$ bằng xác suất của lộ trình $\left ( { O-A-B } \right.  )$ Tính $P\left ( { B } \right.  )$ bằng tổng xác suất của 2 lộ trình dẫn đến B là $\left ( { O-A-B } \right.  )$ và $\left ( { O- \bar A-B } \right.  )$.

<p align="center"><img src="/assets/images/toan-12/c6_b1_image171.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Phương pháp

**Ví dụ 3.1.** Ông An hằng ngày đi làm bằng xe máy hoặc xe buýt. Nếu hôm nay ông đi làm bằng xe buýt thì xác suất để hôm sau ông đi làm bằng xe máy là $0,4$. Nếu hôm nay ông đi làm bằng xe máy thì xác suất để hôm sau ông đi làm bằng xe buýt là $0,7$. Xét một tuần mà thứ Hai ông An đi làm bằng xe buýt. Tính xác suất để thứ Tư trong tuần đó, ông An đi làm bằng xe máy

*Lời giải:*

Kí hiệu $A$ là biến cố: "Thứ Ba, ông An đi làm bằng xe máy";

Và $B$ là biến cố: "Thứ Tư, ông An đi làm bằng xe máy".

Ta vẽ sơ đồ hình cây như sau:

<p align="center"><img src="/assets/images/toan-12/c6_b1_image176.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Trên nhánh cây $OA$ và tương ứng ghi $P\left ( { A } \right.  )$ và ;

Trên nhánh cây $AB$ và tương ứng ghi $P\left ( { B∣A } \right.  )$ và ;

Trên nhánh cây $\bar AB$ và tương ứng ghi $P\left ( { B∣ \bar A } \right.  )$ và $P\left ( { \bar B∣ \bar A } \right.  )$.

Có hai nhánh cây đi tới $B$ là $OAB$ và .

Vậy:$P\left ( { B } \right.  )=0,4\,.\,0,3+0,6\,.\,0,4=0,36$.

**Ví dụ 3.2.** Tại một nhà máy sản xuất linh kiện điện tử tỉ lệ sản phẩm đạt tiêu chuẩn là $80\%$. Trước khi xuất xưởng ra thị trường, các linh kiện điện tử đều phải qua khâu kiểm tra chất lượng để đóng dấu OTK. Vì sự kiểm tra không tuyệt đối hoàn hảo nên » Nếu một linh kiện điện tử đạt tiêu chuẩn thì nó có xác suất $0,99$ được đóng dấu OTK; » Nếu một linh kiện điện tử không đạt tiêu chuẩn thì nó có xác suất $0,95$ không được đóng dấu OTK. Chọn ngẫu nhiên một linh kiện điện tử của nhà máy này trên thị trường. Dùng sơ đồ hình cây, hãy mô tả cách tính xác suất để linh kiện điện tử được chọn không được đóng dấu OTK.

*Lời giải:*

Với $A$ là biến cố: “Linh kiện điện tử được chọn đạt tiêu chuẩn”;

Và $B$ là biến cố: “Linh kiện điện tử được chọn được đóng dấu OTK”.

Khi đó,  là biến cố: “Linh kiện điện tử được chọn không được đóng dấu OTK”.

Ta vẽ sơ đồ hình cây như sau:

<p align="center"><img src="/assets/images/toan-12/c6_b1_image199.png" alt="Hình vẽ minh họa" style="max-width: min(100%, 480px); height: auto; border-radius: 8px;" /></p>

Có hai nhánh cây đi tới là và .

Vậy: .
## III. Bài tập trắc nghiệm nhiều phương án lựa chọn (Tự luyện tương tác)

Học sinh làm bài trực tiếp trên hệ thống để được chấm điểm và xem lời giải chi tiết tức thì.

```quiz
type: choice
question: 'Câu 1: Một hộp chứa 4 quả bóng được đánh số từ 1 đến 4. An lấy ngẫu nhiên một quả bóng, bỏ ra ngoài, rồi lấy tiếp một quả bóng nữa. Xét các biến cố: $A$: "Quả bóng lấy ra lần đầu có số chẵn" $B$: "Quả bóng lấy ra lần hai có số lẻ". Xác định biến cố $C=B\|A$: "biến cố $B$ với điều kiện biết $A$ đã xảy ra".'
options:
  - 'A. $B\|A=\left\{ \begin{array}{l} \left ( { 2,1 } \right.  ),\left ( { 2,3 } \right.  ),\left ( { 4,1 } \right.  ),\left ( { 4,3 } \right.  ) \end{array} \right\}$'
  - 'B. $B\|A=\left\{ \begin{array}{l} \left ( { 2,1 } \right.  ),\left ( { 2,3 } \right.  ),\left ( { 2,4 } \right.  ),\left ( { 4,1 } \right.  ),\left ( { 4,2 } \right.  ),\left ( { 4,3 } \right.  ) \end{array} \right\}$'
  - 'C. $B\|A=\left\{ \begin{array}{l} \left ( { 1,1 } \right.  ),\left ( { 1,3 } \right.  ),\left ( { 2,1 } \right.  ),\left ( { 2,3 } \right.  ),\left ( { 3,1 } \right.  ),\left ( { 3,3 } \right.  ),\left ( { 4,1 } \right.  ),\left ( { 4,3 } \right.  ) \end{array} \right\}$'
  - 'D. $B\|A=\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),\left ( { 1,3 } \right.  ),\left ( { 1,4 } \right.  ),\left ( { 2,1 } \right.  ),\left ( { 2,3 } \right.  ),\left ( { 2,4 } \right.  ),\left ( { 3,1 } \right.  ),\left ( { 3,2 } \right.  ),\left ( { 3,4 } \right.  ),\left ( { 4,1 } \right.  ),\left ( { 4,2 } \right.  ),\left ( { 4,3 } \right.  ) \end{array} \right\}$'
answer: 1
explanation: '$A=\left\{ \begin{array}{l} (2,1),(2,3),(2,4),(4,1),(4,2),(4,3) \end{array} \right\}$.$B=\left\{ \begin{array}{l} (1,1),(1,3),(2,1),(2,3),(3,1),(3,3),(4,1),(4,3) \end{array} \right\}$. Khi biến cố $B$ xảy ra, thì không gian mẫu mới là $B$. Khi đó, biến cố $C=B\|A$ $=A∩B=\left\{ \begin{array}{l} \left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 4,1 } \right.  ),{ \rm{ } }\left ( { 4,3 } \right.  ) \end{array} \right\}$.'
```

```quiz
type: choice
question: 'Câu 2: Một con xúc xắc cân đối, đánh số từ 1 đến 6, được gieo 2 lần liên tiếp. Xét các biến cố: $A$: "Tổng số chấm trong hai lần gieo là số chẵn", $B$: "Số chấm ở lần gieo thứ nhất là số lẻ" , Xác định biến cố $A$ khi biết $B$ đã xảy ra.'
options:
  - 'A. $A\|B{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,1 } \right.  ),{ \rm{ } }\left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 3,1 } \right.  ),{ \rm{ } }\left ( { 3,3 } \right.  ),{ \rm{ } }\left ( { 3,5 } \right.  ),{ \rm{ } }\left ( { 5,1 } \right.  ),{ \rm{ } }\left ( { 5,3 } \right.  ),{ \rm{ } }\left ( { 5,5 } \right.  ) \end{array} \right\}$'
  - 'B. $A\|B{ \rm{ } }={ \rm{ } }\{\left ( { 1,1 } \right.  ),{ \rm{ } }\left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 3,1 } \right.  ),{ \rm{ } }\left ( { 3,3 } \right.  ),{ \rm{ } }\left ( { 3,5 } \right.  ),{ \rm{ } }\left ( { 5,1 } \right.  ),{ \rm{ } }\left ( { 5,3 } \right.  ),{ \rm{ } }\left ( { 5,5 } \right.  ),{ \rm{ } } \,\,\,\,\left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 1,6 } \right.  ),{ \rm{ } }\left ( { 3,2 } \right.  ),{ \rm{ } }\left ( { 3,4 } \right.  ),{ \rm{ } }\left ( { 3,6 } \right.  ),{ \rm{ } }\left ( { 5,2 } \right.  ),{ \rm{ } }\left ( { 5,4 } \right.  ),{ \rm{ } }\left ( { 5,6 } \right.  )\}$'
  - 'C. $A\|B{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 1,6 } \right.  ),{ \rm{ } }\left ( { 3,2 } \right.  ),{ \rm{ } }\left ( { 3,4 } \right.  ),{ \rm{ } }\left ( { 3,6 } \right.  ),{ \rm{ } }\left ( { 5,2 } \right.  ),{ \rm{ } }\left ( { 5,4 } \right.  ),{ \rm{ } }\left ( { 5,6 } \right.  ) \end{array} \right\}$'
  - 'D. $A\|B={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,1 } \right.  ),{ \rm{ } }\left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 3,3 } \right.  ),{ \rm{ } }\left ( { 3,5 } \right.  ),{ \rm{ } }\left ( { 5,1 } \right.  ),{ \rm{ } }\left ( { 5,3 } \right.  ),{ \rm{ } }\left ( { 5,5 } \right.  ) \end{array} \right\}$'
answer: 1
explanation: 'Khi B đã xảy ra, nghĩa là lần gieo đầu tiên ra số lẻ (1, 3 hoặc 5). Do đó, không gian mẫu mới là $B={ \rm{ } }\{\left ( { 1,1 } \right.  ),\left ( { 1,2 } \right.  ),\left ( { 1,3 } \right.  ),\left ( { 1,4 } \right.  ),\left ( { 1,5 } \right.  ),\left ( { 1,6 } \right.  ),\left ( { 3,1 } \right.  ),\left ( { 3,2 } \right.  ),\left ( { 3,3 } \right.  ),\left ( { 3,4 } \right.  ),\left ( { 3,5 } \right.  ),\left ( { 3,6 } \right.  ),$ $\left ( { 5,1 } \right.  ),\left ( { 5,2 } \right.  ),\left ( { 5,3 } \right.  ),\left ( { 5,4 } \right.  ),\left ( { 5,5 } \right.  ),\left ( { 5,6 } \right.  )\}$ Khi đó, biến cố $A$ khi biết $B$ đã xảy ra là $A\|B{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,1 } \right.  ),{ \rm{ } }\left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 3,1 } \right.  ),{ \rm{ } }\left ( { 3,3 } \right.  ),{ \rm{ } }\left ( { 3,5 } \right.  ),{ \rm{ } }\left ( { 5,1 } \right.  ),{ \rm{ } }\left ( { 5,3 } \right.  ),{ \rm{ } }\left ( { 5,5 } \right.  ) \end{array} \right\}$'
```

```quiz
type: choice
question: 'Câu 3: MMột hộp chứa 5 quả bóng: 2 quả màu đỏ (đánh số 1 và 2), 2 quả màu xanh (đánh số 3 và 4) và 1 quả màu vàng (đánh số 5). Lấy ngẫu nhiên 2 quả bóng liên tiếp không hoàn lại. Xét các biến cố: $A$: "Quả bóng lấy ra đầu tiên có màu đỏ" $B$: "Tổng số của hai quả bóng lấy ra là số lẻ" Xác định $B\|A$ là biến cố $B$ khi biết $A$ đã xảy ra.'
options:
  - 'A. $B\|A{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 2,5 } \right.  ) \end{array} \right\}$'
  - 'B. $B\|A{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ) \end{array} \right\}$'
  - 'C. $B\|A{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 2,5 } \right.  ) \end{array} \right\}$'
  - 'D. $B\|A{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 2,5 } \right.  ) \end{array} \right\}$'
answer: 1
explanation: 'Khi $A$ đã xảy ra, nghĩa là quả bóng đầu tiên lấy ra có màu đỏ (số 1 hoặc 2). Do đó, không gian mẫu mới là $Ω''=A{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,3 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 1,5 } \right.  ),{ \rm{ } }\left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 2,4 } \right.  ),{ \rm{ } }\left ( { 2,5 } \right.  ) \end{array} \right\}$. Biến cố $B$ khi biết $A$ đã xảy ra là $B\|A=A∩B{ \rm{ } }={ \rm{ } }\left\{ \begin{array}{l} \left ( { 1,2 } \right.  ),{ \rm{ } }\left ( { 1,4 } \right.  ),{ \rm{ } }\left ( { 2,1 } \right.  ),{ \rm{ } }\left ( { 2,3 } \right.  ),{ \rm{ } }\left ( { 2,5 } \right.  ) \end{array} \right\}$.'
```

```quiz
type: choice
question: 'Câu 4: Một công ty xây dựng đấu thầu 2 dự án độc lập. Khả năng thắng thầu của các dự án 1 là 0,6 và dự án 2 là 0,7. (a) Tìm xác suất công ty thắng thầu đúng 1 dự án. (b) Biết công ty thắng thầu dự án 1, tìm xác suất công ty thắng thầu dự án 2. (c) Biết công ty không thắng thầu dự án 1, tìm xác suất công ty thắng thầu dự án 2. (a) Tìm xác suất công ty thắng thầu đúng 1 dự án.'
options:
  - 'A. $0,28$.B.$0,7$.C.$0,46$.D.$0,18$'
  - 'B. $0,6$.B.$0,7$.C.$0,46$.D.$0,3$'
  - 'C. $0,4$.B.$0,7$.C.$0,28$'
  - 'D. $0,6$'
answer: 3
explanation: 'Gọi $A$ là biến cố”thắng thầu dự án 1″ Gọi $B$ là biến cố”thắng thầu dự án 2″ theo đề bài $P\left ( { A } \right.  )=0,6⇒P\left ( { \bar A } \right.  )=0,4;P\left ( { B } \right.  )=0,7⇒P\left ( { \bar B } \right.  )=0,3$ với 2 biến cố $A,B$ độc lập Gọi $C$ là biến cố “thắng thầu đúng 1 dự án” $P\left ( { C } \right.  )=P\left ( { A∩ \bar B+ \bar A∩B } \right.  )=P\left ( { A∩ \bar B } \right.  )+P\left ( { \bar A∩B } \right.  )=P\left ( { A } \right.  ).P\left ( { \bar B } \right.  )+P\left ( { \bar A } \right.  ).P\left ( { B } \right.  )$ $=0,6.0,3+0,4.0,7=0,46$ (b) Biết công ty thắng thầu dự án 1, tìm xác suất công ty thắng thầu dự án 2. Chọn B Gọi $D$ là biến cố “thắng thầu dự án thứ 2 biết thắng thầu dự án 1” do $A,B$ là hai biến cố độc lập nên:$P\left ( { D } \right.  )=P\left ( { B\|A } \right.  )=P\left ( { B } \right.  )=0,7$ (c) Biết công ty không thắng thầu dự án 1, tìm xác suất công ty thắng thầu dự án 2. Chọn B Gọi $E$ là biến cố “thắng thầu dự án 2 biết không thắng thầu dự án 1” do $A,B$ là hai biến cố độc lập nên:$P\left ( { E } \right.  )=P\left ( { B\| \bar A } \right.  )=P\left ( { B } \right.  )=0,7$'
```
