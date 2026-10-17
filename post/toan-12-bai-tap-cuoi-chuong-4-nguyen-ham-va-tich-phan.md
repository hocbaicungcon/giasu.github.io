---
title: 'Toán 12 Bài tập cuối chương 4: Nguyên hàm và Tích phân - Đề ôn tập chuẩn cấu trúc 2025'
description: 'Tổng hợp toàn diện kiến thức Chương 4 Toán 12 Kết nối tri thức: Hệ thống công thức nguyên hàm, tích phân, ứng dụng diện tích hình phẳng, thể tích tròn xoay kèm đề ôn tập chuẩn cấu trúc 2025 (3 phần: Nhiều lựa chọn, Đúng/Sai, Trả lời ngắn) có lời giải chi tiết và trắc nghiệm tự chấm.'
category: Toán học
type: Bài tập
date: '2026-10-17'
tags:
  - Toán học
  - Toán 12
  - Bài tập cuối chương
  - Giải tích
  - Nguyên hàm
  - Tích phân
  - Đề thi 2025
  - Kết nối tri thức
grade: 12
---

# Bài tập cuối chương 4: Nguyên hàm và Tích phân

Chương 4 – **Nguyên hàm và Tích phân** là một trong những trụ cột lớn nhất và chiếm tỷ trọng điểm số cao nhất trong các đề thi Tốt nghiệp THPT và các kỳ thi Đánh giá năng lực. Từ việc giải các phương trình vi phân chuyển động, tính công cơ học, tính điện lượng trong Vật lý cho đến việc tính diện tích hình phẳng, thể tích khối tròn xoay trong Hình học và Kỹ thuật thực tế, tích phân là chiếc cầu nối kỳ diệu giữa lý thuyết trừu tượng và ứng dụng thực tiễn.

Bài học tổng kết này cung cấp:
1. **Hệ thống bảng tra cứu công thức nguyên hàm – tích phân toàn diện**.
2. **Đề kiểm tra ôn tập chuẩn ma trận cấu trúc đề thi Tốt nghiệp THPT mới từ năm 2025**:
   - **Phần I:** 12 câu trắc nghiệm nhiều phương án lựa chọn (3.0 điểm).
   - **Phần II:** 4 câu trắc nghiệm Đúng / Sai (4.0 điểm, 16 ý hỏi).
   - **Phần III:** 6 câu trắc nghiệm trả lời ngắn (3.0 điểm).
3. **Lời giải chi tiết từng câu** và hệ thống làm bài trực tuyến tự chấm điểm.

---

## I. Bảng tổng hợp công thức trọng tâm Chương 4

### 1. Bảng nguyên hàm các hàm số sơ cấp thường gặp

| Hàm số $f(x)$ | Nguyên hàm cơ bản $\int f(x)dx$ | Nguyên hàm mở rộng $\int f(ax+b)dx$ ($a \neq 0$) |
| :--- | :--- | :--- |
| **Hằng số $k$** | $\int k \, dx = kx + C$ | $\int k \, dx = kx + C$ |
| **Lũy thừa $x^\alpha$** ($\alpha \neq -1$) | $\int x^\alpha \, dx = \frac{x^{\alpha+1}}{\alpha+1} + C$ | $\int (ax+b)^\alpha \, dx = \frac{1}{a} \cdot \frac{(ax+b)^{\alpha+1}}{\alpha+1} + C$ |
| **Phân thức $\frac{1}{x}$** | $\int \frac{1}{x} \, dx = \ln|x| + C$ | $\int \frac{1}{ax+b} \, dx = \frac{1}{a} \ln|ax+b| + C$ |
| **Hàm mũ $e^x$** | $\int e^x \, dx = e^x + C$ | $\int e^{ax+b} \, dx = \frac{1}{a} e^{ax+b} + C$ |
| **Hàm mũ $a^x$** ($0 < a \neq 1$) | $\int a^x \, dx = \frac{a^x}{\ln a} + C$ | $\int a^{kx} \, dx = \frac{1}{k} \cdot \frac{a^{kx}}{\ln a} + C$ |
| **Hàm $\cos x$** | $\int \cos x \, dx = \sin x + C$ | $\int \cos(ax+b) \, dx = \frac{1}{a} \sin(ax+b) + C$ |
| **Hàm $\sin x$** | $\int \sin x \, dx = -\cos x + C$ | $\int \sin(ax+b) \, dx = -\frac{1}{a} \cos(ax+b) + C$ |
| **Hàm $\frac{1}{\cos^2 x} = 1 + \tan^2 x$** | $\int \frac{1}{\cos^2 x} \, dx = \tan x + C$ | $\int \frac{1}{\cos^2(ax+b)} \, dx = \frac{1}{a} \tan(ax+b) + C$ |
| **Hàm $\frac{1}{\sin^2 x} = 1 + \cot^2 x$** | $\int \frac{1}{\sin^2 x} \, dx = -\cot x + C$ | $\int \frac{1}{\sin^2(ax+b)} \, dx = -\frac{1}{a} \cot(ax+b) + C$ |

---

### 2. Hai phương pháp cốt lõi

| Phương pháp | Dành cho Nguyên hàm | Dành cho Tích phân | Lưu ý đặc biệt |
| :--- | :--- | :--- | :--- |
| **Đổi biến số** | $\int f(u(x)) u'(x) dx = F(u) + C = F(u(x)) + C$ | $\int_a^b f(u(x)) u'(x) dx = \int_{u(a)}^{u(b)} f(u) du$ | Với tích phân: **Bắt buộc phải đổi cận**, tính xong theo $u$ không cần đổi về $x$. |
| **Từng phần** | $\int u \, dv = u \cdot v - \int v \, du$ | $\int_a^b u \, dv = \left. uv \right|_a^b - \int_a^b v \, du$ | Thứ tự ưu tiên đặt $u$: **"Nhất log, nhì đa, tam lượng, tứ mũ"**. |

---

### 3. Công thức ứng dụng hình học và thực tiễn

1. **Diện tích hình phẳng:**
   - Giới hạn bởi $y = f(x)$, $Ox$, $x = a, x = b$: $S = \int_a^b |f(x)| \, dx$.
   - Giới hạn bởi $y = f(x)$, $y = g(x)$, $x = a, x = b$: $S = \int_a^b |f(x) - g(x)| \, dx$.
2. **Thể tích vật thể:** $V = \int_a^b S(x) \, dx$ với $S(x)$ là diện tích thiết diện vuông góc trục $Ox$.
3. **Thể tích khối tròn xoay (quay quanh $Ox$):** $V = \pi \int_a^b [f(x)]^2 \, dx$.
4. **Vật lý chuyển động:** $s(t) = \int v(t) \, dt$ và $v(t) = \int a(t) \, dt$.

---

## II. Đề ôn tập chuẩn cấu trúc thi tốt nghiệp THPT 2025

### PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu - 3.0 điểm)

**Câu 1:** Mệnh đề nào sau đây **sai**?  
A. $\int [f(x) + g(x)] dx = \int f(x) dx + \int g(x) dx$.  
B. $\int k f(x) dx = k \int f(x) dx$ ($k \in \mathbb{R}, k \neq 0$).  
C. $\int [f(x) \cdot g(x)] dx = \int f(x) dx \cdot \int g(x) dx$.  
D. $\left( \int f(x) dx \right)' = f(x)$.

**Câu 2:** Họ nguyên hàm của hàm số $f(x) = e^{2x} + 1$ là:  
A. $2e^{2x} + x + C$.  
B. $\frac{1}{2} e^{2x} + x + C$.  
C. $e^{2x} + x + C$.  
D. $\frac{1}{2} e^{2x} + C$.

**Câu 3:** Cho $\int_1^2 f(x)dx = 3$ và $\int_1^2 g(x)dx = -1$. Khi đó $\int_1^2 [2f(x) - 3g(x)] dx$ bằng:  
A. 9.  
B. 3.  
C. -9.  
D. 7.

**Câu 4:** Biết $F(x) = x^2$ là một nguyên hàm của hàm số $f(x)$ trên $\mathbb{R}$. Giá trị của $\int_1^3 [2 + f(x)] dx$ bằng:  
A. 12.  
B. 10.  
C. 8.  
D. 6.

**Câu 5:** Tích phân $I = \int_0^1 \frac{1}{2x + 1} dx$ bằng:  
A. $\ln 3$.  
B. $\frac{1}{2} \ln 3$.  
C. $2\ln 3$.  
D. $\frac{1}{2} \ln 2$.

**Câu 6:** Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = 2x - x^2$ và trục hoành $Ox$. Diện tích của $(H)$ bằng:  
A. $\frac{4}{3}$.  
B. $\frac{2}{3}$.  
C. $\frac{1}{3}$.  
D. 2.

**Câu 7:** Thể tích của khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \sqrt{x}$, trục hoành và đường thẳng $x = 4$ xung quanh trục $Ox$ là:  
A. $8\pi$.  
B. $16\pi$.  
C. $\frac{16\pi}{3}$.  
D. 8.

**Câu 8:** Tính tích phân $I = \int_0^{\pi/2} x \cos x \, dx$.  
A. $\frac{\pi}{2} - 1$.  
B. $\frac{\pi}{2} + 1$.  
C. 1.  
D. $\pi - 1$.

**Câu 9:** Cho hàm số $f(x)$ liên tục trên $\mathbb{R}$ và thỏa mãn $\int_0^6 f(x)dx = 9$. Giá trị của tích phân $I = \int_0^2 f(3x)dx$ là:  
A. 27.  
B. 3.  
C. 6.  
D. 18.

**Câu 10:** Một vật thể chuyển động có vận tốc thay đổi theo quy luật $v(t) = 3t^2 + 4t$ (m/s). Quãng đường vật đi được trong 3 giây đầu tiên (từ $t = 0$ đến $t = 3$) là:  
A. 45 m.  
B. 39 m.  
C. 48 m.  
D. 54 m.

**Câu 11:** Diện tích hình phẳng giới hạn bởi hai đường cong $y = x^3$ và $y = x$ bằng:  
A. 0.  
B. $\frac{1}{2}$.  
C. $\frac{1}{4}$.  
D. 1.

**Câu 12:** Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Gọi $S$ là diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$. Khẳng định nào sau đây **luôn luôn đúng**?  
A. $S = \int_a^b f(x)dx$.  
B. $S = \left| \int_a^b f(x)dx \right|$.  
C. $S = \int_a^b |f(x)|dx$.  
D. $S = \pi \int_a^b [f(x)]^2 dx$.

---

### PHẦN II: Câu trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm)

**Câu 1:** Cho hàm số $f(x) = 3x^2 - 4x + 1$ có một nguyên hàm là $F(x)$ thỏa mãn $F(1) = 2$.  
Các mệnh đề sau đúng hay sai?  
a) Một nguyên hàm tổng quát của $f(x)$ là $F_0(x) = x^3 - 2x^2 + x$.  
b) Hằng số tích phân tương ứng với $F(1) = 2$ là $C = 2$.  
c) $F(2) = 6$.  
d) Giá trị của tích phân $\int_0^2 f(x)dx = 4$.

**Câu 2:** Cho tích phân $I = \int_0^1 x e^{x^2} dx$.  
Các mệnh đề sau đúng hay sai?  
a) Khi đổi biến $u = x^2 \implies du = 2x \, dx$.  
b) Khi $x = 0$ thì $u = 0$, khi $x = 1$ thì $u = 1$.  
c) Tích phân $I$ được viết lại theo biến $u$ là $I = \int_0^1 e^u du$.  
d) Giá trị của tích phân là $I = \frac{e - 1}{2}$.

**Câu 3:** Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = x^2$ và đường thẳng $y = 2x$.  
Các mệnh đề sau đúng hay sai?  
a) Phương trình hoành độ giao điểm của hai đồ thị có hai nghiệm là $x = 0$ và $x = 2$.  
b) Trên đoạn $[0; 2]$, đường thẳng $y = 2x$ nằm phía trên parabol $y = x^2$.  
c) Diện tích hình phẳng $(H)$ là $S = \frac{4}{3}$ (đvdt).  
d) Thể tích khối tròn xoay khi quay $(H)$ xung quanh trục hoành $Ox$ là $V = \frac{64\pi}{15}$ (đvtt).

**Câu 4:** Một bể chứa nước có thể tích được mô phỏng như một khối tròn xoay tạo thành khi quay cung parabol $y = \frac{x^2}{4}$ (với $0 \le x \le 4$, đơn vị dm) xung quanh trục $Ox$.  
Các mệnh đề sau đúng hay sai?  
a) Khi $x = 4$ thì $y = 4$ (dm).  
b) Thể tích khối tròn xoay này được tính bởi công thức $V = \pi \int_0^4 \frac{x^2}{4} dx$.  
c) Giá trị thể tích của khối nước là $V = \frac{64\pi}{5}$ (dm$^3$).  
d) Dung tích thực tế của bể lớn hơn 40 lít (lấy $\pi \approx 3.1416$).

---

### PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu - 3.0 điểm)

**Câu 1:** Cho $\int_0^3 f(x)dx = 5$ và $\int_0^5 f(x)dx = 12$. Tính giá trị của tích phân $\int_3^5 f(x)dx$.  
*Đáp số:* `...`

**Câu 2:** Tính giá trị của tích phân $I = \int_0^1 (4x^3 - 6x^2 + 2) dx$.  
*Đáp số:* `...`

**Câu 3:** Cho hình phẳng giới hạn bởi đồ thị hàm số $y = 3x^2$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$. Tính diện tích $S$ của hình phẳng đó.  
*Đáp số:* `...`

**Câu 4:** Một đoàn tàu đang chạy với vận tốc $v_0 = 15$ m/s thì hãm phanh chuyển động chậm dần đều với gia tốc $a(t) = -3$ m/s$^2$. Tính quãng đường tàu đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn (đơn vị: mét).  
*Đáp số:* `...`

**Câu 5:** Biết $\int_1^2 \frac{2x + 3}{x} dx = a + b \ln 2$ với $a, b \in \mathbb{Z}$. Tính giá trị của biểu thức $P = a^2 + b^2$.  
*Đáp số:* `...`

**Câu 6:** Cho hình phẳng giới hạn bởi đường cong $y = x^2$, trục $Ox$ và đường thẳng $x = 3$ quay quanh trục $Ox$. Thể tích khối tròn xoay tạo thành có dạng $\frac{a\pi}{b}$ (với $\frac{a}{b}$ là phân số tối giản). Tính tổng $a + b$.  
*Đáp số:* `...`

---

## III. Hướng dẫn giải chi tiết đề ôn tập

### HƯỚNG DẪN GIẢI PHẦN I

- **Câu 1:** Chọn **C**. Tích phân của một tích **không bằng** tích các tích phân!
- **Câu 2:** Chọn **B**. $\int (e^{2x} + 1) dx = \frac{1}{2} e^{2x} + x + C$.
- **Câu 3:** Chọn **A**. $\int_1^2 [2f(x) - 3g(x)] dx = 2(3) - 3(-1) = 6 + 3 = 9$.
- **Câu 4:** Chọn **A**. $\int_1^3 [2 + f(x)] dx = \left.(2x + F(x))\right|_1^3 = (2 \cdot 3 + 3^2) - (2 \cdot 1 + 1^2) = (6 + 9) - (2 + 1) = 15 - 3 = 12$.
- **Câu 5:** Chọn **B**. $\int_0^1 \frac{1}{2x+1} dx = \left. \frac{1}{2} \ln|2x+1| \right|_0^1 = \frac{1}{2}(\ln 3 - \ln 1) = \frac{1}{2} \ln 3$.
- **Câu 6:** Chọn **A**. Nghiệm $2x - x^2 = 0 \iff x = 0, x = 2$. $S = \int_0^2 (2x - x^2)dx = \left.(x^2 - \frac{x^3}{3})\right|_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.
- **Câu 7:** Chọn **A**. $V = \pi \int_0^4 (\sqrt{x})^2 dx = \pi \int_0^4 x dx = \pi \left. \frac{x^2}{2} \right|_0^4 = 8\pi$.
- **Câu 8:** Chọn **A**. Đặt $u = x, dv = \cos x dx \implies du = dx, v = \sin x$. $I = \left.(x\sin x)\right|_0^{\pi/2} - \int_0^{\pi/2} \sin x dx = \frac{\pi}{2} - \left.(-\cos x)\right|_0^{\pi/2} = \frac{\pi}{2} - (0 - (-1)) = \frac{\pi}{2} - 1$.
- **Câu 9:** Chọn **B**. Đặt $t = 3x \implies dt = 3dx \implies dx = \frac{dt}{3}$. Khi $x = 0 \implies t = 0$, $x = 2 \implies t = 6$. Vậy $I = \frac{1}{3} \int_0^6 f(t)dt = \frac{1}{3}(9) = 3$.
- **Câu 10:** Chọn **A**. $s = \int_0^3 (3t^2 + 4t) dt = \left. (t^3 + 2t^2) \right|_0^3 = 27 + 2(9) = 27 + 18 = 45$ m.
- **Câu 11:** Chọn **B**. Phương trình hoành độ giao điểm $x^3 - x = 0 \iff x = 0, x = \pm 1$. Do đối xứng, $S = 2 \int_0^1 (x - x^3) dx = 2 \left.(\frac{x^2}{2} - \frac{x^4}{4})\right|_0^1 = 2(\frac{1}{4}) = \frac{1}{2}$.
- **Câu 12:** Chọn **C**. Định nghĩa diện tích hình phẳng luôn chứa dấu trị tuyệt đối bên trong tích phân: $\int_a^b |f(x)|dx$.

---

### HƯỚNG DẪN GIẢI PHẦN II

**Câu 1:**
- a) **Đúng**. $\int (3x^2 - 4x + 1)dx = x^3 - 2x^2 + x + C$. Chọn $F_0(x) = x^3 - 2x^2 + x$.
- b) **Đúng**. $F(1) = 1^3 - 2(1)^2 + 1 + C = 0 + C = 2 \implies C = 2$.
- c) **Đúng**. $F(x) = x^3 - 2x^2 + x + 2 \implies F(2) = 2^3 - 2(4) + 2 + 2 = 8 - 8 + 4 = 4 \neq 6 \implies$ c là **Sai**!
- d) **Sai**. $\int_0^2 f(x)dx = \left.(x^3 - 2x^2 + x)\right|_0^2 = 8 - 8 + 2 = 2 \neq 4$.

**Câu 2:**
- a) **Đúng**. Đạo hàm $u = x^2 \implies du = 2x \, dx$.
- b) **Đúng**. Đổi cận: $x = 0 \implies u = 0$, $x = 1 \implies u = 1$.
- c) **Sai**. Vì $x dx = \frac{1}{2} du$, tích phân đúng phải là $I = \frac{1}{2} \int_0^1 e^u du$.
- d) **Đúng**. $I = \frac{1}{2} (e^1 - e^0) = \frac{e - 1}{2}$.

**Câu 3:**
- a) **Đúng**. $x^2 = 2x \iff x^2 - 2x = 0 \iff x = 0$ hoặc $x = 2$.
- b) **Đúng**. Với $x \in (0; 2)$ thì $2x > x^2$.
- c) **Đúng**. $S = \int_0^2 (2x - x^2)dx = \left.(x^2 - \frac{x^3}{3})\right|_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.
- d) **Đúng**. Thể tích quay quanh $Ox$: $V = \pi \int_0^2 [(2x)^2 - (x^2)^2] dx = \pi \int_0^2 (4x^2 - x^4) dx = \pi \left.(\frac{4x^3}{3} - \frac{x^5}{5})\right|_0^2 = \pi (\frac{32}{3} - \frac{32}{5}) = \pi \cdot \frac{64}{15}$.

**Câu 4:**
- a) **Đúng**. Thay $x = 4 \implies y = \frac{16}{4} = 4$.
- b) **Sai**. Thể tích khối tròn xoay phải bình phương hàm số: $V = \pi \int_0^4 \left(\frac{x^2}{4}\right)^2 dx$.
- c) **Đúng**. $V = \pi \int_0^4 \frac{x^4}{16} dx = \frac{\pi}{16} \left. \frac{x^5}{5} \right|_0^4 = \frac{\pi \cdot 1024}{80} = \frac{64\pi}{5}$ dm$^3$.
- d) **Đúng**. $V = \frac{64 \cdot 3.1416}{5} \approx 40.21$ dm$^3$ ($= 40.21$ lít) $> 40$ lít.

---

### HƯỚNG DẪN GIẢI PHẦN III

- **Câu 1:** Áp dụng tính chất chèn cận: $\int_3^5 f(x)dx = \int_0^5 f(x)dx - \int_0^3 f(x)dx = 12 - 5 = 7$.
- **Câu 2:** Nguyên hàm $x^4 - 2x^3 + 2x$. Thay cận từ 0 đến 1: $(1 - 2 + 2) - 0 = 1$.
- **Câu 3:** $S = \int_0^2 3x^2 dx = \left. x^3 \right|_0^2 = 8$.
- **Câu 4:** $v(t) = \int (-3) dt = -3t + 15$. Tàu dừng khi $v(t) = 0 \iff t = 5$ s.  
  Quãng đường: $s = \int_0^5 (-3t + 15) dt = \left. (-\frac{3t^2}{2} + 15t) \right|_0^5 = -\frac{75}{2} + 75 = 37.5$ mét.
- **Câu 5:** Ta biến đổi: $\int_1^2 \left(2 + \frac{3}{x}\right) dx = \left.(2x + 3\ln x)\right|_1^2 = (4 + 3\ln 2) - (2 + 3\ln 1) = 2 + 3\ln 2$.  
  Suy ra $a = 2, b = 3 \implies P = a^2 + b^2 = 2^2 + 3^2 = 4 + 9 = 13$.
- **Câu 6:** $V = \pi \int_0^3 (x^2)^2 dx = \pi \int_0^3 x^4 dx = \pi \left. \frac{x^5}{5} \right|_0^3 = \frac{243\pi}{5}$.  
  Phân số $\frac{243}{5}$ tối giản $\implies a = 243, b = 5 \implies a + b = 248$.

---

## IV. Đề kiểm tra trắc nghiệm tương tác tự động chấm (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Giá trị của $\\int_0^5 f(x)dx$ là:",
  "options": [
    "A. 10",
    "B. 4",
    "C. -4",
    "D. 21"
  ],
  "answer": "A. 10",
  "explanation": "Theo tính chất chèn cận: $\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{3x + 1}$ là:",
  "options": [
    "A. $\\ln|3x + 1| + C$",
    "B. $\\frac{1}{3} \\ln|3x + 1| + C$",
    "C. $3\\ln|3x + 1| + C$",
    "D. $-\\frac{3}{(3x+1)^2} + C$"
  ],
  "answer": "B. $\\frac{1}{3} \\ln|3x + 1| + C$",
  "explanation": "Áp dụng công thức $\\int \\frac{1}{ax+b}dx = \\frac{1}{a}\\ln|ax+b| + C$ với $a = 3$, ta có $\\frac{1}{3}\\ln|3x+1| + C$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính tích phân $I = \\int_0^1 (3x^2 - 2x) dx$.",
  "options": [
    "A. 1",
    "B. 0",
    "C. -1",
    "D. 2"
  ],
  "answer": "B. 0",
  "explanation": "Nguyên hàm là $x^3 - x^2$. Thay cận từ 0 đến 1: $(1^3 - 1^2) - 0 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4$ bằng:",
  "options": [
    "A. $\\frac{16}{3}$",
    "B. $\\frac{32}{3}$",
    "C. $16$",
    "D. $\\frac{8}{3}$"
  ],
  "answer": "B. $\\frac{32}{3}$",
  "explanation": "Giao điểm: $x^2 = 4 \\iff x = \\pm 2$. Diện tích $S = \\int_{-2}^2 (4 - x^2) dx = 2 \\left.(4x - \\frac{x^3}{3})\\right|_0^2 = 2(8 - \\frac{8}{3}) = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = x$, $Ox$, $x = 0, x = 3$ quanh trục hoành là:",
  "options": [
    "A. $9\\pi$",
    "B. $\\frac{9\\pi}{2}$",
    "C. $27\\pi$",
    "D. $\\frac{27\\pi}{2}$"
  ],
  "answer": "A. $9\\pi$",
  "explanation": "$V = \\pi \\int_0^3 x^2 dx = \\pi \\left. \\frac{x^3}{3} \\right|_0^3 = \\pi \\cdot \\frac{27}{3} = 9\\pi$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Biết $\\int_0^1 f(x)dx = 4$. Khi đổi biến $t = 2x$, tích phân $J = \\int_0^2 f\\left(\\frac{t}{2}\\right) dt$ bằng:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 8",
    "D. 16"
  ],
  "answer": "C. 8",
  "explanation": "Đặt $x = \\frac{t}{2} \\implies dx = \\frac{1}{2} dt \\implies dt = 2dx$. Khi $t = 0 \\implies x = 0$; $t = 2 \\implies x = 1$. Khi đó $J = \\int_0^1 f(x) \\cdot 2dx = 2 \\int_0^1 f(x)dx = 2 \\cdot 4 = 8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tính tích phân $I = \\int_0^1 x e^x dx$ bằng phương pháp từng phần.",
  "options": [
    "A. $e$",
    "B. 1",
    "C. $e - 1$",
    "D. $2e - 1$"
  ],
  "answer": "B. 1",
  "explanation": "$I = \\left.(xe^x)\\right|_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Một chất điểm đang đứng yên thì tăng tốc với gia tốc $a(t) = 6t$ (m/s$^2$). Vận tốc của chất điểm sau 4 giây là:",
  "options": [
    "A. 24 m/s",
    "B. 48 m/s",
    "C. 96 m/s",
    "D. 16 m/s"
  ],
  "answer": "B. 48 m/s",
  "explanation": "$v(t) = \\int 6t dt = 3t^2 + C$. Vì ban đầu đứng yên nên $v(0) = 0 \\implies C = 0$. Sau 4 giây: $v(4) = 3(4^2) = 48$ m/s."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Tích phân $I = \\int_0^{\\pi} \\sin x \\, dx$ bằng:",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. -2"
  ],
  "answer": "C. 2",
  "explanation": "Nguyên hàm là $-\\cos x$. Thay cận: $-\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Giá trị của $\\int_1^e \\frac{\\ln x}{x} dx$ bằng:",
  "options": [
    "A. $\\frac{1}{2}$",
    "B. 1",
    "C. $\\frac{e}{2}$",
    "D. 2"
  ],
  "answer": "A. $\\frac{1}{2}$",
  "explanation": "Đặt $u = \\ln x \\implies du = \\frac{dx}{x}$. Cận: $x = 1 \\implies u = 0$; $x = e \\implies u = 1$. Khi đó $I = \\int_0^1 u du = \\left. \\frac{u^2}{2} \\right|_0^1 = \\frac{1}{2}$."
}'></div>
