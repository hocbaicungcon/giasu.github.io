---
title: Giải bài toán bằng cách lập hệ phương trình Toán 9 ôn thi vào 10
description: 'Phương pháp giải bài toán bằng cách lập hệ phương trình Toán 9: toán chuyển động, năng suất, hình học, tìm số kèm các ví dụ và bài tập có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2022-03-21'
tags:
- Toán học
- Toán 9
- Hệ phương trình
- Giải bài toán bằng cách lập hệ phương trình
grade: 9
---

**Giải bài toán bằng cách lập hệ phương trình** là một trong những dạng toán thực tế trọng tâm trong chương trình môn [Toán 9](/lop-9.html), chiếm khoảng 1,5 đến 2,0 điểm trong các đề thi học kì cũng như đề thi tuyển sinh vào lớp 10 THPT công lập trên toàn quốc.

Để đạt điểm tuyệt đối ở dạng toán này, học sinh cần nắm vững quy trình các bước lập hệ phương trình, biết cách chuyển tải giả thiết bài toán bằng lời thành các biểu thức đại số và thuần thục hai phương pháp giải hệ cơ bản: **phương pháp thế** và **phương pháp cộng đại số**.

---

## 1. Phương pháp giải bài toán bằng cách lập hệ phương trình

Quy trình chuẩn gồm 3 bước rõ ràng:

### Bước 1: Lập hệ phương trình
1. **Chọn hai ẩn số** (thường chọn trực tiếp các đại lượng mà bài toán yêu cầu tìm).
2. **Đặt đơn vị và điều kiện thích hợp cho ẩn:**
   - Ẩn là số người, sản phẩm, đồ vật, chữ số... thì điều kiện phải là nguyên dương ($x, y \in \mathbb{N}^*$).
   - Ẩn là độ dài, vận tốc, thời gian, khối lượng... thì điều kiện phải dương ($x > 0, y > 0$).
   - Ẩn là chữ số của một số tự nhiên: chữ số hàng đầu tiên $1 \le a \le 9$, các chữ số tiếp theo $0 \le b \le 9$.
3. **Biểu diễn các đại lượng chưa biết** theo hai ẩn và các đại lượng đã biết.
4. **Lập hai phương trình** biểu diễn mối quan hệ giữa các đại lượng theo giả thiết đề bài, từ đó ghép lại thành một hệ hai phương trình bậc nhất hai ẩn.

### Bước 2: Giải hệ phương trình
- Sử dụng phương pháp cộng đại số, phương pháp thế hoặc đặt ẩn phụ thích hợp để tìm nghiệm $(x; y)$.

### Bước 3: Kiểm tra và kết luận
- Đối chiếu các giá trị $x, y$ vừa tìm được với điều kiện đã đặt ở Bước 1.
- Chọn nghiệm thỏa mãn và viết câu kết luận đầy đủ kèm đơn vị đo theo đúng yêu cầu đề bài.

---

## 2. Các dạng toán trọng tâm và ví dụ có lời giải chi tiết

### Dạng 1: Bài toán chuyển động (Đường bộ, đường sông)

#### Kiến thức cần nhớ
- Mối liên hệ ba đại lượng: Quãng đường = Vận tốc $\times$ Thời gian ($s = v \cdot t \implies v = \frac{s}{t}, t = \frac{s}{v}$).
- Chuyển động trên đường sông (có dòng nước):
  - $v_{\text{xuôi}} = v_{\text{riêng}} + v_{\text{dòng nước}}$
  - $v_{\text{ngược}} = v_{\text{riêng}} - v_{\text{dòng nước}}$
  - $v_{\text{xuôi}} - v_{\text{ngược}} = 2 \cdot v_{\text{dòng nước}}$
- Đổi đơn vị thời gian và vận tốc:
  - $1\text{ giờ} = 60\text{ phút} = 3600\text{ giây}$.
  - $1\text{ m/s} = 3{,}6\text{ km/h}$; $1\text{ km/h} = \frac{5}{18}\text{ m/s}$.

---

#### Ví dụ 1 (Chuyển động ngược chiều)
Hai thị xã A và B cách nhau 90 km. Một chiếc ô tô khởi hành từ A và một xe máy khởi hành từ B cùng một lúc, đi ngược chiều nhau. Sau khi gặp nhau, ô tô chạy thêm 30 phút nữa thì đến B, còn xe máy chạy thêm 2 giờ nữa mới đến A. Tìm vận tốc của mỗi xe.

**Lời giải:**

Đổi 30 phút = 0,5 giờ.

Gọi vận tốc của ô tô là $x$ (km/h) và vận tốc của xe máy là $y$ (km/h). Điều kiện: $x > 0, y > 0$.

Giả sử hai xe gặp nhau tại điểm C trên quãng đường AB:
- Sau khi gặp nhau tại C, ô tô đi hết đoạn đường CB trong 0,5 giờ với vận tốc $x$ nên độ dài đoạn CB là: $0{,}5x$ (km).
- Xe máy đi hết đoạn đường CA trong 2 giờ với vận tốc $y$ nên độ dài đoạn CA là: $2y$ (km).

Vì tổng quãng đường AB dài 90 km nên ta có phương trình:
$$2y + 0{,}5x = 90 \quad (1)$$

Mặt khác, thời gian hai xe đi từ lúc xuất phát cho đến khi gặp nhau tại C là như nhau:
- Thời gian ô tô đi đoạn AC là: $\frac{2y}{x}$ (giờ).
- Thời gian xe máy đi đoạn BC là: $\frac{0{,}5x}{y}$ (giờ).

Ta có phương trình:
$$\frac{2y}{x} = \frac{0{,}5x}{y} \implies x^2 = 4y^2 \quad (2)$$

Vì $x > 0, y > 0$ nên từ (2) suy ra $x = 2y$.

Thay $x = 2y$ vào phương trình (1):
$$2y + 0{,}5(2y) = 90 \iff 3y = 90 \iff y = 30\text{ (thỏa mãn)}$$

Suy ra $x = 2 \cdot 30 = 60$ (thỏa mãn).

Vậy vận tốc của ô tô là 60 km/h và vận tốc của xe máy là 30 km/h.

---

#### Ví dụ 2 (Chuyển động trên sông)
Một ca nô xuôi dòng từ bến A đến bến B hết 4 giờ và chạy ngược dòng từ bến B về bến A hết 5 giờ. Biết vận tốc dòng nước là 2 km/h. Tính vận tốc riêng của ca nô và khoảng cách giữa hai bến A và B.

**Lời giải:**

Gọi vận tốc riêng của ca nô là $x$ (km/h) và khoảng cách giữa hai bến A, B là $y$ (km). Điều kiện: $x > 2, y > 0$.

- Vận tốc ca nô khi xuôi dòng là: $x + 2$ (km/h).
- Vận tốc ca nô khi ngược dòng là: $x - 2$ (km/h).

Vì ca nô xuôi dòng từ A đến B hết 4 giờ nên ta có phương trình:
$$y = 4(x + 2) \iff 4x - y = -8 \quad (1)$$

Vì ca nô ngược dòng từ B về A hết 5 giờ nên ta có phương trình:
$$y = 5(x - 2) \iff 5x - y = 10 \quad (2)$$

Từ (1) và (2) ta có hệ phương trình:
$$\begin{cases} 4x - y = -8 \\ 5x - y = 10 \end{cases}$$

Lấy phương trình thứ hai trừ đi phương trình thứ nhất theo từng vế:
$$x = 18\text{ (thỏa mãn điều kiện)}$$

Thay $x = 18$ vào phương trình (1):
$$y = 4(18 + 2) = 80\text{ (thỏa mãn)}$$

Vậy vận tốc riêng của ca nô là 18 km/h và khoảng cách giữa hai bến A, B là 80 km.

---

### Dạng 2: Bài toán công việc chung – công việc riêng (Năng suất, vòi nước)

#### Kiến thức cần nhớ
- Quy ước toàn bộ khối lượng công việc hoàn thành là $1$ (hoặc bể đầy nước là $1$).
- Nếu một đội làm một mình hoàn thành công việc trong $x$ ngày thì trong $1$ ngày đội đó làm được $\frac{1}{x}$ khối lượng công việc (đây chính là **năng suất làm việc trong 1 ngày**).
- Khối lượng công việc = Năng suất trong 1 đơn vị thời gian $\times$ Thời gian làm việc.
- Khi cùng làm chung, tổng năng suất bằng tổng các năng suất riêng: $\frac{1}{x} + \frac{1}{y}$.

---

#### Ví dụ 1 (Hai vòi nước cùng chảy vào bể)
Hai vòi nước cùng chảy vào một bể không có nước trong 3 giờ 45 phút thì đầy bể. Nếu chảy riêng, mỗi vòi phải chảy trong bao lâu mới đầy bể? Biết rằng vòi thứ hai chảy một mình đầy bể lâu hơn vòi thứ nhất là 4 giờ.

**Lời giải:**

Đổi 3 giờ 45 phút = $3 + \frac{45}{60} = \frac{15}{4}$ giờ.

Gọi thời gian vòi thứ nhất chảy một mình đầy bể là $x$ (giờ).  
Gọi thời gian vòi thứ hai chảy một mình đầy bể là $y$ (giờ).  
Điều kiện: $y > x > \frac{15}{4}$.

- Trong 1 giờ, vòi thứ nhất chảy được: $\frac{1}{x}$ (bể).
- Trong 1 giờ, vòi thứ hai chảy được: $\frac{1}{y}$ (bể).
- Trong 1 giờ, cả hai vòi cùng chảy được: $\frac{1}{x} + \frac{1}{y}$ (bể).

Vì cả hai vòi cùng chảy trong $\frac{15}{4}$ giờ thì đầy bể nên trong 1 giờ cả hai vòi chảy được:
$$1 : \frac{15}{4} = \frac{4}{15}\text{ (bể)}$$

Ta có phương trình thứ nhất:
$$\frac{1}{x} + \frac{1}{y} = \frac{4}{15} \quad (1)$$

Mặt khác, vòi thứ hai chảy lâu hơn vòi thứ nhất 4 giờ nên ta có phương trình thứ hai:
$$y - x = 4 \iff y = x + 4 \quad (2)$$

Thay $y = x + 4$ vào phương trình (1):
$$\frac{1}{x} + \frac{1}{x + 4} = \frac{4}{15} \iff \frac{2x + 4}{x(x + 4)} = \frac{4}{15}$$

Nhân chéo và quy đồng mẫu số:
$$15(2x + 4) = 4x(x + 4) \iff 30x + 60 = 4x^2 + 16x \iff 4x^2 - 14x - 60 = 0 \iff 2x^2 - 7x - 30 = 0$$

Giải phương trình bậc hai:
$$\Delta = (-7)^2 - 4 \cdot 2 \cdot (-30) = 49 + 240 = 289 = 17^2$$
$$x_1 = \frac{7 + 17}{4} = 6\text{ (thỏa mãn)}, \quad x_2 = \frac{7 - 17}{4} = -2{,}5\text{ (loại)}$$

Với $x = 6$, suy ra $y = 6 + 4 = 10$ (thỏa mãn).

Vậy vòi thứ nhất chảy một mình đầy bể trong 6 giờ; vòi thứ hai chảy một mình đầy bể trong 10 giờ.

---

#### Ví dụ 2 (Cùng làm chung rồi tách ra làm riêng)
Hai đội công nhân cùng làm chung một công việc thì sau 6 giờ sẽ hoàn thành. Nếu làm riêng thì đội I hoàn thành công việc nhanh hơn đội II là 5 giờ. Hỏi nếu làm riêng, mỗi đội mất bao nhiêu thời gian để hoàn thành công việc?

**Lời giải:**

Gọi thời gian đội I làm một mình hoàn thành công việc là $x$ (giờ).  
Gọi thời gian đội II làm một mình hoàn thành công việc là $y$ (giờ).  
Điều kiện: $y > x > 6$.

- Trong 1 giờ, đội I làm được: $\frac{1}{x}$ (công việc).
- Trong 1 giờ, đội II làm được: $\frac{1}{y}$ (công việc).
- Trong 1 giờ, cả hai đội làm được: $\frac{1}{x} + \frac{1}{y}$ (công việc).

Vì hai đội cùng làm trong 6 giờ thì xong công việc nên trong 1 giờ hai đội làm được $\frac{1}{6}$ công việc. Ta có phương trình:
$$\frac{1}{x} + \frac{1}{y} = \frac{1}{6} \quad (1)$$

Vì đội I làm nhanh hơn đội II là 5 giờ nên ta có:
$$y - x = 5 \iff y = x + 5 \quad (2)$$

Thay (2) vào (1):
$$\frac{1}{x} + \frac{1}{x + 5} = \frac{1}{6} \iff \frac{2x + 5}{x(x + 5)} = \frac{1}{6} \iff 6(2x + 5) = x^2 + 5x \iff x^2 - 7x - 30 = 0$$

Phương trình có hai nghiệm:
$$x = 10\text{ (thỏa mãn)}, \quad x = -3\text{ (loại)}$$

Với $x = 10 \implies y = 10 + 5 = 15$ (thỏa mãn).

Vậy đội I làm một mình xong trong 10 giờ, đội II làm một mình xong trong 15 giờ.

---

### Dạng 3: Bài toán năng suất và tỉ lệ phần trăm

#### Kiến thức cần nhớ
- Lượng thực tế = Lượng kế hoạch $\pm$ Lượng tăng/giảm.
- Khi tăng thêm $a\%$ so với lượng $x$:
  - Phần tăng thêm là: $\frac{a}{100} x$.
  - Lượng mới đạt được là: $x + \frac{a}{100} x = \left(1 + \frac{a}{100}\right) x$.

---

#### Ví dụ 1 (Vượt mức kế hoạch sản xuất)
Theo kế hoạch, hai tổ sản xuất phải hoàn thành 600 sản phẩm trong một thời gian nhất định. Nhờ áp dụng cải tiến kĩ thuật, tổ I đã vượt mức 18% và tổ II đã vượt mức 21%. Do đó, cả hai tổ đã hoàn thành vượt mức 120 sản phẩm so với kế hoạch. Hỏi theo kế hoạch, mỗi tổ phải sản xuất bao nhiêu sản phẩm?

**Lời giải:**

Gọi số sản phẩm tổ I và tổ II phải làm theo kế hoạch lần lượt là $x$ và $y$ (sản phẩm).  
Điều kiện: $x, y \in \mathbb{N}^*; x, y < 600$.

Vì theo kế hoạch hai tổ phải làm 600 sản phẩm nên ta có phương trình:
$$x + y = 600 \quad (1)$$

Số sản phẩm vượt mức của tổ I là: $\frac{18}{100} x = 0{,}18x$ (sản phẩm).  
Số sản phẩm vượt mức của tổ II là: $\frac{21}{100} y = 0{,}21y$ (sản phẩm).

Vì cả hai tổ vượt mức tất cả 120 sản phẩm nên ta có phương trình:
$$0{,}18x + 0{,}21y = 120 \quad (2)$$

Từ (1) và (2) ta có hệ phương trình:
$$\begin{cases} x + y = 600 \\ 0{,}18x + 0{,}21y = 120 \end{cases} \iff \begin{cases} 0{,}18x + 0{,}18y = 108 \\ 0{,}18x + 0{,}21y = 120 \end{cases}$$

Lấy phương trình dưới trừ phương trình trên:
$$0{,}03y = 12 \iff y = 400\text{ (thỏa mãn)}$$

Suy ra $x = 600 - 400 = 200$ (thỏa mãn).

Vậy theo kế hoạch, tổ I phải sản xuất 200 sản phẩm và tổ II phải sản xuất 400 sản phẩm.

---

#### Ví dụ 2 (Tăng trưởng dân số)
Năm ngoái, tổng số dân của hai tỉnh A và B là 4 triệu người. Năm nay, dân số của tỉnh A tăng 1,2%, còn dân số tỉnh B tăng 1,1%. Tổng số dân của cả hai tỉnh năm nay là 4 045 000 người. Tính số dân của mỗi tỉnh năm ngoái và năm nay.

**Lời giải:**

Gọi số dân năm ngoái của tỉnh A là $x$ (người) và tỉnh B là $y$ (người).  
Điều kiện: $x, y \in \mathbb{N}^*; x, y < 4\,000\,000$.

Tổng số dân năm ngoái của hai tỉnh là 4 triệu người nên:
$$x + y = 4\,000\,000 \quad (1)$$

Số dân tăng thêm của tỉnh A trong năm nay là: $1{,}2\% \cdot x = 0{,}012x$ (người).  
Số dân tăng thêm của tỉnh B trong năm nay là: $1{,}1\% \cdot y = 0{,}011y$ (người).

Tổng số dân hai tỉnh tăng thêm là:
$$4\,045\,000 - 4\,000\,000 = 45\,000\text{ (người)}$$

Ta có phương trình:
$$0{,}012x + 0{,}011y = 45\,000 \quad (2)$$

Từ (1) suy ra $y = 4\,000\,000 - x$. Thay vào (2):
$$0{,}012x + 0{,}011(4\,000\,000 - x) = 45\,000$$
$$0{,}001x + 44\,000 = 45\,000 \iff 0{,}001x = 1000 \iff x = 1\,000\,000\text{ (thỏa mãn)}$$

Suy ra $y = 4\,000\,000 - 1\,000\,000 = 3\,000\,000$ (thỏa mãn).

Dân số năm nay:
- Tỉnh A: $1\,000\,000 \times 1{,}012 = 1\,012\,000$ (người).
- Tỉnh B: $3\,000\,000 \times 1{,}011 = 3\,033\,000$ (người).

Vậy năm ngoái tỉnh A có 1 000 000 người, tỉnh B có 3 000 000 người. Năm nay tỉnh A có 1 012 000 người, tỉnh B có 3 033 000 người.

---

### Dạng 4: Bài toán có nội dung hình học

#### Kiến thức cần nhớ
- Chu vi hình chữ nhật: $P = 2(a + b)$.
- Diện tích hình chữ nhật: $S = a \cdot b$.
- Diện tích tam giác vuông: $S = \frac{1}{2} a \cdot b$ (với $a, b$ là hai cạnh góc vuông).
- Định lí Pytago trong tam giác vuông: $a^2 + b^2 = c^2$ ($c$ là cạnh huyền).

---

#### Ví dụ 1 (Chu vi và diện tích hình chữ nhật)
Một mảnh vườn hình chữ nhật có chu vi là 34 m. Nếu tăng chiều dài thêm 3 m và tăng chiều rộng thêm 2 m thì diện tích mảnh vườn tăng thêm 45 $\text{m}^2$. Tính chiều dài và chiều rộng ban đầu của mảnh vườn.

**Lời giải:**

Gọi chiều rộng ban đầu là $x$ (m) và chiều dài ban đầu là $y$ (m).  
Điều kiện: $y > x > 0$.

Nửa chu vi hình chữ nhật là: $34 : 2 = 17$ (m). Ta có phương trình:
$$x + y = 17 \quad (1)$$

Diện tích ban đầu của mảnh vườn là: $x \cdot y$ ($\text{m}^2$).

Khi tăng chiều dài thêm 3 m và chiều rộng thêm 2 m:
- Chiều rộng mới là: $x + 2$ (m).
- Chiều dài mới là: $y + 3$ (m).
- Diện tích mới là: $(x + 2)(y + 3)$ ($\text{m}^2$).

Vì diện tích mới tăng thêm 45 $\text{m}^2$ nên ta có phương trình:
$$(x + 2)(y + 3) = xy + 45 \iff xy + 3x + 2y + 6 = xy + 45 \iff 3x + 2y = 39 \quad (2)$$

Từ (1) và (2) ta có hệ phương trình:
$$\begin{cases} x + y = 17 \\ 3x + 2y = 39 \end{cases} \iff \begin{cases} 2x + 2y = 34 \\ 3x + 2y = 39 \end{cases}$$

Trừ hai phương trình:
$$x = 5\text{ (thỏa mãn)}$$

Suy ra $y = 17 - 5 = 12$ (thỏa mãn).

Vậy mảnh vườn có chiều dài ban đầu là 12 m và chiều rộng ban đầu là 5 m.

---

#### Ví dụ 2 (Diện tích tam giác vuông)
Cho một thửa ruộng hình tam giác vuông. Nếu tăng hai cạnh góc vuông lên lần lượt là 2 m và 3 m thì diện tích tăng thêm 50 $\text{m}^2$. Nếu giảm cả hai cạnh đi 2 m thì diện tích giảm đi 32 $\text{m}^2$. Tính độ dài hai cạnh góc vuông ban đầu của thửa ruộng.

**Lời giải:**

Gọi độ dài hai cạnh góc vuông lần lượt là $x$ và $y$ (m). Điều kiện: $x > 2, y > 2$.

Diện tích tam giác vuông ban đầu là: $\frac{1}{2}xy$ ($\text{m}^2$).

- Khi tăng các cạnh góc vuông lên 2 m và 3 m, diện tích tăng 50 $\text{m}^2$:
$$\frac{1}{2}(x + 2)(y + 3) = \frac{1}{2}xy + 50 \iff (x + 2)(y + 3) = xy + 100 \iff 3x + 2y = 94 \quad (1)$$

- Khi giảm cả hai cạnh đi 2 m, diện tích giảm 32 $\text{m}^2$:
$$\frac{1}{2}(x - 2)(y - 2) = \frac{1}{2}xy - 32 \iff (x - 2)(y - 2) = xy - 64 \iff -2x - 2y + 4 = -64 \iff x + y = 34 \quad (2)$$

Từ (1) và (2) ta có hệ phương trình:
$$\begin{cases} 3x + 2y = 94 \\ x + y = 34 \end{cases} \iff \begin{cases} 3x + 2y = 94 \\ 2x + 2y = 68 \end{cases} \iff \begin{cases} x = 26 \\ y = 8 \end{cases}\text{ (thỏa mãn)}$$

Vậy hai cạnh góc vuông ban đầu của thửa ruộng lần lượt là 26 m và 8 m.

---

### Dạng 5: Bài toán cấu tạo số

#### Kiến thức cần nhớ
- Số có hai chữ số: $\overline{ab} = 10a + b$ ($a, b \in \mathbb{N}; 1 \le a \le 9; 0 \le b \le 9$).
- Số có ba chữ số: $\overline{abc} = 100a + 10b + c$ ($a, b, c \in \mathbb{N}; 1 \le a \le 9; 0 \le b, c \le 9$).
- Viết xen số: Số $\overline{a1b} = 100a + 10 + b$.
- Đổi vị trí chữ số: Số ban đầu $\overline{ab} = 10a + b$, số mới $\overline{ba} = 10b + a$.

---

#### Ví dụ 1 (Đổi chỗ hai chữ số)
Tìm một số tự nhiên có hai chữ số, biết tổng của chữ số hàng chục và chữ số hàng đơn vị bằng 14. Nếu đổi chỗ hai chữ số cho nhau thì được số mới lớn hơn số đã cho 18 đơn vị.

**Lời giải:**

Gọi chữ số hàng chục là $x$ và chữ số hàng đơn vị là $y$.  
Điều kiện: $x, y \in \mathbb{N}; 1 \le x \le 9; 0 \le y \le 9$.

Số tự nhiên ban đầu là: $\overline{xy} = 10x + y$.

Tổng chữ số hàng chục và chữ số hàng đơn vị bằng 14:
$$x + y = 14 \quad (1)$$

Khi đổi chỗ hai chữ số, ta được số mới là: $\overline{yx} = 10y + x$.

Vì số mới lớn hơn số ban đầu 18 đơn vị nên ta có phương trình:
$$(10y + x) - (10x + y) = 18 \iff 9y - 9x = 18 \iff y - x = 2 \quad (2)$$

Từ (1) và (2) ta có hệ phương trình:
$$\begin{cases} x + y = 14 \\ -x + y = 2 \end{cases} \iff \begin{cases} 2y = 16 \\ x = y - 2 \end{cases} \iff \begin{cases} y = 8 \\ x = 6 \end{cases}\text{ (thỏa mãn)}$$

Vậy số tự nhiên cần tìm là 68.

---

#### Ví dụ 2 (Chia có dư và cấu tạo số)
Tìm một số tự nhiên có hai chữ số, biết rằng số đó gấp 7 lần chữ số hàng đơn vị của nó. Nếu đem số đó chia cho tổng các chữ số của nó thì được thương là 4 và dư là 3.

**Lời giải:**

Gọi số cần tìm là $\overline{ab} = 10a + b$ ($a, b \in \mathbb{N}; 1 \le a \le 9; 0 \le b \le 9$).

Số đó gấp 7 lần chữ số hàng đơn vị nên:
$$10a + b = 7b \iff 10a = 6b \iff 5a = 3b \quad (1)$$

Đem số đó chia cho tổng các chữ số của nó được thương là 4 và dư là 3:
$$10a + b = 4(a + b) + 3 \iff 6a - 3b = 3 \iff 2a - b = 1 \iff b = 2a - 1 \quad (2)$$

Thay (2) vào (1):
$$5a = 3(2a - 1) \iff 5a = 6a - 3 \iff a = 3\text{ (thỏa mãn)}$$

Suy ra $b = 2(3) - 1 = 5$ (thỏa mãn).

Vậy số tự nhiên cần tìm là 35.

---

## 3. Hệ thống bài tập tự luyện (kèm đáp số)

| Bài | Đề bài tóm tắt | Dạng toán | Đáp số |
| :---: | :--- | :--- | :--- |
| **Bài 1** | Hai ca nô khởi hành ngược chiều từ A và B cách nhau 85 km. Sau 1 giờ 40 phút gặp nhau. Vận tốc xuôi lớn hơn vận tốc ngược 9 km/h, nước chảy 3 km/h. Tìm vận tốc riêng mỗi ca nô. | Chuyển động đường sông | Ca nô A: 27 km/h; Ca nô B: 24 km/h |
| **Bài 2** | Hai ô tô đi từ A đến B dài 120 km. Xe I chạy nhanh hơn xe II là 10 km/h nên đến trước 24 phút ($\frac{2}{5}$ giờ). Tính vận tốc mỗi xe. | Chuyển động đường bộ | Xe I: 60 km/h; Xe II: 50 km/h |
| **Bài 3** | Hai đội làm chung xong việc trong 6 giờ. Làm chung 2 giờ thì đội II chuyển đi, đội I làm nốt phần còn lại trong 10 giờ. Hỏi mỗi đội làm riêng mất bao lâu? | Năng suất công việc | Đội I: 15 giờ; Đội II: 10 giờ |
| **Bài 4** | Hai đội làm chung công việc. Đội I làm riêng nhanh hơn đội II 4 giờ. Tổng thời gian hai đội làm riêng gấp 4,5 lần thời gian cùng làm chung. Tính thời gian mỗi đội. | Năng suất công việc | Đội I: 8 giờ; Đội II: 12 giờ (chung: $\frac{24}{5}$ h) |
| **Bài 5** | Tháng giêng hai tổ làm 720 chi tiết máy. Tháng hai tổ I vượt 15%, tổ II vượt 12% nên cả hai làm được 819 chi tiết. Tính số chi tiết mỗi tổ làm tháng giêng. | Năng suất phần trăm | Tổ I: 420; Tổ II: 300 chi tiết |
| **Bài 6** | Cần trộn bao nhiêu lít dung dịch axit 30% với dung dịch axit 5% để thu được 50 lít dung dịch axit 10%? | Dung dịch - phần trăm | 10 lít dung dịch 30% và 40 lít dung dịch 5% |
| **Bài 7** | Một khu vườn hình chữ nhật có chiều dài bằng $\frac{7}{4}$ chiều rộng và diện tích bằng 1792 $\text{m}^2$. Tính chu vi khu vườn. | Hình học | Chiều rộng: 32 m; dài: 56 m; Chu vi: 176 m |
| **Bài 8** | Một hình chữ nhật, tăng dài 10 m và tăng rộng 5 m thì diện tích tăng 500 $\text{m}^2$. Giảm dài 15 m và giảm rộng 9 m thì diện tích giảm 600 $\text{m}^2$. Tính kích thước ban đầu. | Hình học | Dài: 40 m; Rộng: 25 m |
| **Bài 9** | Tìm số có hai chữ số biết chữ số hàng đơn vị hơn hàng chục 5 đơn vị. Nếu viết xen chữ số 1 vào giữa thì được số mới lớn hơn số ban đầu 280 đơn vị. | Cấu tạo số | Số 38 |
| **Bài 10** | Tìm phân số $\frac{a}{b}$, biết nếu thêm 4 vào cả tử và mẫu thì phân số giảm 1; nếu bớt 1 ở cả tử và mẫu thì phân số tăng $\frac{3}{2}$. | Cấu tạo phân số | Phân số $\frac{-3}{2}$ |

---

## 4. Những sai lầm thường gặp và mẹo làm bài đạt điểm tối đa

1. **Thiếu điều kiện hoặc đặt điều kiện không chặt chẽ:**  
   Ví dụ gọi số sản phẩm, con người nhưng chỉ ghi $x, y > 0$ thay vì $x, y \in \mathbb{N}^*$. Đối với toán chuyển động ngược dòng, học sinh hay quên điều kiện $v_{\text{riêng}} > v_{\text{dòng nước}}$.
2. **Không đồng nhất đơn vị đo:**  
   Rất nhiều bạn quên đổi các đại lượng thời gian phút ra giờ (ví dụ 40 phút phải đổi thành $\frac{2}{3}$ giờ; 1 giờ 20 phút thành $\frac{4}{3}$ giờ) dẫn đến phương trình sai hoàn toàn.
3. **Nhầm lẫn giữa làm một mình và làm chung:**  
   Cần phân biệt rõ: đại lượng cộng lại được là **năng suất trong 1 đơn vị thời gian** ($\frac{1}{x} + \frac{1}{y} = \frac{1}{t_{\text{chung}}}$), tuyệt đối không cộng thời gian hoàn thành ($x + y \ne t_{\text{chung}}$).
4. **Quên đối chiếu điều kiện:**  
   Sau khi giải ra nghiệm của hệ phương trình, bắt buộc phải viết chữ **(thỏa mãn điều kiện)** hoặc **(loại)** và có câu kết luận rõ ràng, đầy đủ đơn vị.
