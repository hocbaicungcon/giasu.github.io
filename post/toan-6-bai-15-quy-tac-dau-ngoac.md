---
title: 'Toán 6 Bài 15: Quy tắc dấu ngoặc - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Khám phá trọn vẹn lý thuyết Toán 6 Bài 15 Quy tắc dấu ngoặc: quy tắc bỏ ngoặc có dấu cộng, dấu trừ đằng trước, đặt dấu ngoặc, biến đổi tổng đại số, tính nhanh và rút gọn biểu thức độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số nguyên
  - Quy tắc dấu ngoặc
  - Tổng đại số
  - Rút gọn biểu thức
  - Kết nối tri thức
grade: 6
---

# Bài 15. Quy tắc dấu ngoặc

Chào các em học sinh! Trong các phép tính số học, **dấu ngoặc** $( )$ đóng vai trò như một chiếc "hộp đóng gói" giúp gom các phép tính cần ưu tiên thực hiện trước. Tuy nhiên, khi chuyển sang tính toán trong tập hợp số nguyên $\mathbb{Z}$, nếu cứ máy móc thực hiện trong ngoặc trước, chúng ta sẽ thường xuyên gặp phải những phép tính rất cồng kềnh.

Để tính nhanh, ghép các cặp số đối nhau (có tổng bằng $0$) hoặc kết hợp các số tạo thành số tròn chục, tròn trăm, chúng ta cần phải biết cách **"mở hộp" (bỏ dấu ngoặc)** một cách an toàn mà không làm sai lệch giá trị của biểu thức. Bài học hôm nay sẽ trang bị cho các em chiếc chìa khóa vạn năng đó: **Quy tắc dấu ngoặc**!

---

## 0. Khởi động — Thử thách phản xạ dấu (5–7 phút)

Hãy kiểm tra trực giác của các em qua 3 câu hỏi trắc nghiệm khởi động nhanh sau:

```quiz
type: choice
question: 'Khi bỏ dấu ngoặc trong biểu thức -(a - b + c), kết quả chuẩn xác thu được là:'
options:
  - '-a - b + c'
  - '-a + b - c'
  - '-a - b - c'
  - 'a + b - c'
answer: 2
explanation: 'Trước ngoặc là dấu trừ "-", khi bỏ ngoặc ta phải đổi dấu tất cả các số hạng: +a thành -a, -b thành +b, và +c thành -c.'
```

```quiz
type: choice
question: 'Biểu thức 15 - (15 - 8) có giá trị bằng:'
options:
  - '-8'
  - '8'
  - '22'
  - '38'
answer: 2
explanation: 'Bỏ ngoặc có dấu trừ đằng trước: 15 - 15 + 8 = 0 + 8 = 8.'
```

```quiz
type: choice
question: 'Khi nhóm hai số hạng sau dấu trừ trong biểu thức x - y - z, cách đặt dấu ngoặc nào sau đây là ĐÚNG?'
options:
  - 'x - (y - z)'
  - 'x - (y + z)'
  - 'x - (-y + z)'
  - 'x - (-y - z)'
answer: 2
explanation: 'Khi đặt dấu ngoặc có dấu trừ đằng trước, ta phải đổi dấu các số hạng đưa vào: -y thành +y, -z thành +z. Do đó x - y - z = x - (y + z).'
```

---

## A. Tóm tắt lý thuyết trọng tâm

### 1. Bỏ dấu ngoặc có dấu "$+$" đằng trước

> **Quy tắc giữ nguyên dấu:**  
> Khi bỏ dấu ngoặc có dấu cộng "$+$" đằng trước thì **dấu của các số hạng trong ngoặc vẫn giữ nguyên**:
> $$a + (b - c + d) = a + b - c + d.$$

*Ghi nhớ:* Dấu "$+$" phía trước ngoặc là "dấu hiền lành" — nó mở cửa cho các số hạng bước ra ngoài mà không làm thay đổi dấu của bất kỳ ai!

#### Ví dụ mẫu 1
Bỏ dấu ngoặc rồi tính giá trị của biểu thức:

$$A = (-85) + (15 - 45).$$

**Lời giải:**  
Trước dấu ngoặc là dấu "$+$", ta giữ nguyên dấu của cả hai số hạng $15$ và $-45$:
$$A = -85 + 15 - 45 = (-85 + 15) - 45 = -70 - 45 = -115.$$

---

### 2. Bỏ dấu ngoặc có dấu "$-$" đằng trước

> **Quy tắc đổi dấu toàn bộ:**  
> Khi bỏ dấu ngoặc có dấu trừ "$-$" đằng trước, ta phải **đổi dấu tất cả các số hạng** trong ngoặc:
> - Dấu cộng "$+$" đổi thành dấu trừ "$-$".
> - Dấu trừ "$-$" đổi thành dấu cộng "$+$".
> $$a - (b - c + d) = a - b + c - d.$$

*Ghi nhớ:* Dấu "$-$" phía trước ngoặc là "dấu nghịch đảo" — nó bắt tất cả mọi số hạng bên trong ngoặc phải đổi ngược dấu khi bước ra ngoài!

#### Ví dụ mẫu 2
Bỏ dấu ngoặc rồi tính giá trị của biểu thức:

$$B = 34 - (34 - 12 + 5).$$

**Lời giải:**  
Trước dấu ngoặc là dấu "$-$", ta đổi dấu cả ba số hạng trong ngoặc ($34 \to -34$; $-12 \to +12$; $+5 \to -5$):
$$B = 34 - 34 + 12 - 5 = 0 + 12 - 5 = 7.$$

---

### 3. Tổng đại số và kỹ thuật đặt dấu ngoặc để nhóm

Một dãy các phép tính cộng, trừ các số nguyên được gọi là một **tổng đại số**.

Trong một tổng đại số, ta có toàn quyền:
1. **Đổi chỗ tùy ý các số hạng**, nhưng **bắt buộc phải mang theo dấu** đứng ngay trước nó:
   $$-a + b - c = b - a - c = -c - a + b.$$
2. **Đặt dấu ngoặc để nhóm các số hạng tùy ý**:
   - Nếu đặt dấu "$+$" đằng trước ngoặc: giữ nguyên dấu của các số hạng:
     $$a + b - c = a + (b - c).$$
   - Nếu đặt dấu "$-$" đằng trước ngoặc: phải **đổi dấu toàn bộ các số hạng** đưa vào trong ngoặc:
     $$a - b - c = a - (b + c).$$

#### Ví dụ mẫu 3
Tính một cách hợp lý:

$$C = (-45) + 238 + 45 + (-138).$$

**Lời giải:**  
Đổi chỗ và nhóm cặp số đối nhau, nhóm cặp số dễ trừ:
$$C = [(-45) + 45] + [238 + (-138)] = 0 + (238 - 138) = 100.$$

---

### 4. Bốn sai lầm kinh điển học sinh thường mắc phải

> [!WARNING]
> **Sai lầm 1: Bỏ ngoặc sau dấu trừ nhưng chỉ đổi dấu số hạng đầu tiên**
> - *Lỗi sai:* $15 - (7 - 12) = 15 - 7 - 12 = -4$ *(quên đổi dấu số $-12$)*.
> - *Cách làm đúng:* $15 - (7 - 12) = 15 - 7 + 12 = 8 + 12 = 20.$
>
> **Sai lầm 2: Đổi dấu máy móc khi trước ngoặc là dấu cộng**
> - *Lỗi sai:* $20 + (8 - 5) = 20 - 8 + 5.$
> - *Cách làm đúng:* Trước ngoặc là "$+$" thì **giữ nguyên dấu**: $20 + (8 - 5) = 20 + 8 - 5 = 23.$
>
> **Sai lầm 3: Quên đổi dấu khi đưa số hạng vào trong ngoặc sau dấu trừ**
> - *Lỗi sai:* $a - b - c = a - (b - c).$
> - *Cách làm đúng:* $a - b - c = a - (b + c).$
>
> **Sai lầm 4: Bỏ ngoặc khi biểu thức có nhiều lớp ngoặc $[ \ ]$ và $( \ )$**
> - *Quy tắc:* Nên ưu tiên bỏ từ ngoặc tròn $( \ )$ ở bên trong trước, rồi mới bỏ ngoặc vuông $[ \ ]$ ở bên ngoài (hoặc xử lý từng lớp cẩn thận).

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1. Thực hiện phép tính (Bỏ ngoặc rồi tính, tính hợp lý)

**Phương pháp giải:**
1. Áp dụng quy tắc dấu ngoặc để phá bỏ toàn bộ các dấu ngoặc.
2. Đổi chỗ và nhóm các số hạng:
   - Ưu tiên ghép các cặp số đối nhau: $a + (-a) = 0.$
   - Ghép các số tạo thành số tròn chục, tròn trăm.
   - Gom các số nguyên âm với nhau, các số nguyên dương với nhau.

#### Luyện tập 1.1
Bỏ ngoặc rồi tính:  
a) $(-18) + 42 - (130 - 30)$;  
b) $315 - 35 + (-420).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.1</strong></summary>

- a) Phá ngoặc có dấu trừ:
  $$(-18) + 42 - (130 - 30) = -18 + 42 - 130 + 30 = (-18 + 42) - (130 - 30) = 24 - 100 = -76.$$
- b) Bỏ ngoặc có dấu cộng:
  $$315 - 35 + (-420) = (315 - 35) - 420 = 280 - 420 = -140.$$
</details>

#### Luyện tập 1.2
Bỏ ngoặc rồi tính:  
a) $74 - 14 - [(-30) + 38]$;  
b) $95 - 25 - [(-40) - (-10)].$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.2</strong></summary>

- a) Tính trong ngoặc vuông trước hoặc phá ngoặc:
  $$74 - 14 - [(-30) + 38] = 60 - [8] = 52.$$
- b) Xử lý ngoặc vuông:
  $$95 - 25 - [(-40) + 10] = 70 - [-30] = 70 + 30 = 100.$$
</details>

#### Luyện tập 1.3
Tính một cách hợp lý:  
a) $[145 + (-45)] + [(-200) + 20]$;  
b) $(-156) - (24 - 156).$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.3</strong></summary>

- a) Tính trong từng ngoặc rồi cộng:
  $$[145 - 45] + [-200 + 20] = 100 + (-180) = -80.$$
- b) Phá ngoặc để triệt tiêu cặp số đối:
  $$(-156) - (24 - 156) = -156 - 24 + 156 = [(-156) + 156] - 24 = 0 - 24 = -24.$$
</details>

---

### Dạng 2. Tính giá trị của biểu thức đại số tại giá trị cho trước của biến

**Phương pháp giải:**
1. **Bước 1 (Rút gọn):** Áp dụng quy tắc dấu ngoặc để phá ngoặc và thu gọn biểu thức chữ trước. Triệt tiêu các cặp số đối nhau để biểu thức trở nên ngắn gọn nhất.
2. **Bước 2 (Thay số):** Thay giá trị cụ thể của các chữ vào biểu thức đã thu gọn rồi tính kết quả.

#### Luyện tập 2.1
Tính giá trị của biểu thức:  
a) $A = (-37) + 24 - x + 37$ với $x = 9$;  
b) $B = (25 - x) + (35 - y + 8)$ với $x = 8;\; y = 10.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.1</strong></summary>

- a) Thu gọn biểu thức $A$:
  $$A = [(-37) + 37] + 24 - x = 0 + 24 - x = 24 - x.$$
  Thay $x = 9$ vào biểu thức $A$:
  $$A = 24 - 9 = 15.$$

- b) Thu gọn biểu thức $B$:
  $$B = 25 - x + 35 - y + 8 = (25 + 35 + 8) - x - y = 68 - x - y.$$
  Thay $x = 8$ và $y = 10$ vào biểu thức $B$:
  $$B = 68 - 8 - 10 = 50.$$
</details>

#### Luyện tập 2.2
Tính giá trị của biểu thức:  
a) $M = (-128) + 28 - x + 128$ với $x = 6$;  
b) $N = (84 - x) + (36 - y + 15)$ với $x = 5;\; y = 10.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.2</strong></summary>

- a) Thu gọn:
  $$M = [(-128) + 128] + 28 - x = 28 - x.$$
  Với $x = 6 \implies M = 28 - 6 = 22.$

- b) Thu gọn:
  $$N = 84 - x + 36 - y + 15 = (84 + 36 + 15) - x - y = 135 - x - y.$$
  Với $x = 5;\; y = 10 \implies N = 135 - 5 - 10 = 120.$
</details>

#### Luyện tập 2.3
Tính giá trị của biểu thức:  
a) $P = (38 + x) + 162 - (162 - x)$ với $x = 5$;  
b) $Q = (305 + x) + 25 - (25 - x)$ với $x = 15.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.3</strong></summary>

- a) Phá ngoặc và rút gọn:
  $$P = 38 + x + 162 - 162 + x = 38 + (162 - 162) + (x + x) = 38 + 2x.$$
  Với $x = 5 \implies P = 38 + 2 \cdot 5 = 38 + 10 = 48.$

- b) Phá ngoặc và rút gọn:
  $$Q = 305 + x + 25 - 25 + x = 305 + (25 - 25) + 2x = 305 + 2x.$$
  Với $x = 15 \implies Q = 305 + 2 \cdot 15 = 305 + 30 = 335.$
</details>

---

### Dạng 3. Rút gọn biểu thức chứa chữ

**Phương pháp giải:**
1. Phá ngoặc theo quy tắc dấu ngoặc.
2. Nhóm các hạng tử đồng dạng: các số tự do nhóm với nhau, các hạng tử chứa cùng chữ nhóm với nhau.
3. Cộng/trừ các hệ số để thu được biểu thức tối giản.

#### Luyện tập 3.1
Rút gọn biểu thức: $A = -(35 - x) + 5.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.1</strong></summary>

Áp dụng quy tắc bỏ ngoặc có dấu "$-$" đằng trước:
$$A = -35 + x + 5 = x + (-35 + 5) = x - 30.$$
</details>

#### Luyện tập 3.2
Rút gọn các biểu thức sau:  
a) $B = -(a - c) - (a - b + c)$;  
b) $C = [a + (a + 5)] - [(a + 3) - (a - 3)].$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.2</strong></summary>

- a) Phá hai dấu ngoặc có dấu trừ:
  $$B = -a + c - a + b - c = (-a - a) + b + (c - c) = -2a + b.$$

- b) Phá các ngoặc từ trong ra ngoài:
  $$C = (a + a + 5) - (a + 3 - a + 3) = (2a + 5) - (6) = 2a + 5 - 6 = 2a - 1.$$
</details>

#### Luyện tập 3.3
Rút gọn các biểu thức sau:  
a) $B = -(x + z) - (x - y - z)$;  
b) $C = [x - (x - 4)] - [(x + 5) + (-x - 5)].$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.3</strong></summary>

- a) Bỏ ngoặc có dấu trừ:
  $$B = -x - z - x + y + z = (-x - x) + y + (-z + z) = -2x + y.$$

- b) Phá các ngoặc bên trong:
  $$C = (x - x + 4) - (x + 5 - x - 5) = 4 - 0 = 4.$$
  *(Nhận xét: Giá trị của biểu thức $C$ luôn bằng $4$, không phụ thuộc vào biến $x$!).*
</details>

---

## C. Phiếu bài tập tự luyện (Độc bản 100%)

### Bài 1. Ghép cặp số đối
Tính một cách hợp lý:  
a) $(-38) + 45 + 55 + 38$;  
b) $(-9) + (-314) + 19 + 314.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 1</strong></summary>

- a) Ghép hai số đối và hai số tròn chục:
  $$[(-38) + 38] + (45 + 55) = 0 + 100 = 100.$$
- b) Ghép hai số đối và hai số còn lại:
  $$[(-314) + 314] + [(-9) + 19] = 0 + 10 = 10.$$
</details>

### Bài 2. Tính hợp lý tổng nhiều số hạng
Tính hợp lý:  
a) $68 + 42 + (-32) + (-68)$;  
b) $(-4) + (-8) + 75 + 27.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 2</strong></summary>

- a) Ghép cặp đối và cặp số dương:
  $$[68 + (-68)] + [42 + (-32)] = 0 + 10 = 10.$$
- b) Gom các số âm và các số dương:
  $$[(-4) + (-8)] + (75 + 27) = (-12) + 102 = 90.$$
</details>

### Bài 3. Bỏ ngoặc triệt tiêu số hạng
Bỏ dấu ngoặc rồi tính:  
a) $(142 - 38) - (142 + 162)$;  
b) $(85 - 34) - (85 - 35).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 3</strong></summary>

- a) Phá ngoặc:
  $$142 - 38 - 142 - 162 = (142 - 142) - (38 + 162) = 0 - 200 = -200.$$
- b) Phá ngoặc:
  $$85 - 34 - 85 + 35 = (85 - 85) + (35 - 34) = 0 + 1 = 1.$$
</details>

### Bài 4. Nhiều lớp dấu ngoặc
Tính hợp lý:  
a) $(-425) - (83 - 425) + (-37)$;  
b) $(-80 + 170) - (20 - 70).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 4</strong></summary>

- a) Phá ngoặc đổi dấu:
  $$-425 - 83 + 425 - 37 = [(-425) + 425] - (83 + 37) = 0 - 120 = -120.$$
- b) Tính trong từng ngoặc:
  $$90 - (-50) = 90 + 50 = 140.$$
</details>

### Bài 5. Tổng tròn trăm, tròn nghìn
Tính hợp lý:  
a) $(-202) + (-600) + (-198)$;  
b) $(-620) + 2030 + (-380) + 1000$;  
c) $(-85) + 346 + 85 + (-46).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 5</strong></summary>

- a) Nhóm hai số có tổng tròn trăm:
  $$[(-202) + (-198)] + (-600) = (-400) + (-600) = -1000.$$
- b) Nhóm hai số âm và hai số dương:
  $$[(-620) + (-380)] + (2030 + 1000) = (-1000) + 3030 = 2030.$$
- c) Nhóm cặp số đối và cặp số tận cùng $46$:
  $$[(-85) + 85] + (346 - 46) = 0 + 300 = 300.$$
</details>

### Bài 6. Rút gọn rồi thay số
Tính giá trị của các biểu thức sau:  
a) $A = 58 - (x + 58) - 92$ với $x = -8$;  
b) $B = (-94 + y - 36) + 94$ với $y = 15.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 6</strong></summary>

- a) Rút gọn biểu thức $A$:
  $$A = 58 - x - 58 - 92 = (58 - 58) - x - 92 = -x - 92.$$
  Thay $x = -8$ vào $A$:
  $$A = -(-8) - 92 = 8 - 92 = -84.$$

- b) Rút gọn biểu thức $B$:
  $$B = -94 + y - 36 + 94 = [(-94) + 94] + y - 36 = y - 36.$$
  Thay $y = 15$ vào $B$:
  $$B = 15 - 36 = -21.$$
</details>

### Bài 7. Rút gọn biểu thức chứa biến
Rút gọn các biểu thức sau:  
a) $M = x + (385 - 140) - (380 - 140)$;  
b) $N = y + (-45) - [120 + (-55) + (-45)].$

<details>
<summary><strong>Xem lời giải chi tiết Bài 7</strong></summary>

- a) Phá ngoặc:
  $$M = x + 385 - 140 - 380 + 140 = x + (385 - 380) + (-140 + 140) = x + 5.$$

- b) Thu gọn ngoặc vuông trước:
  $$120 - 55 - 45 = 120 - 100 = 20.$$
  Do đó:
  $$N = y - 45 - 20 = y - 65.$$
</details>

### Bài 8. Tính tổng các phần tử của tập hợp số nguyên
Cho tập hợp $A = \{x \in \mathbb{Z} \mid -12 < x < 13\}$. Hãy tính tổng tất cả các phần tử của tập hợp $A$.

<details>
<summary><strong>Xem lời giải chi tiết Bài 8</strong></summary>

Tập hợp $A$ gồm các số nguyên: $\{-11; -10; \dots; 10; 11; 12\}.$  
Tổng các phần tử của $A$ là:
$$S = [(-11 + 11) + (-10 + 10) + \dots + (-1 + 1) + 0] + 12 = 0 + 12 = 12.$$
</details>

### Bài 9. Phát hiện và phân tích lỗi sai
Khi tính giá trị của biểu thức $P = 18 - (9 - 14)$, hai bạn An và Bình có bài làm như sau:
- **Bài làm của An:** $P = 18 - (9 - 14) = 18 - 9 - 14 = -5.$
- **Bài làm của Bình:** $P = 18 - (9 - 14) = 18 - 9 + 14 = 23.$

Hỏi bạn nào làm đúng, bạn nào làm sai? Hãy chỉ rõ nguyên nhân dẫn đến sai sót.

<details>
<summary><strong>Xem lời giải chi tiết Bài 9</strong></summary>

- **Bạn Bình làm ĐÚNG.** Vì trước ngoặc có dấu trừ, khi bỏ ngoặc phải đổi dấu tất cả các số hạng trong ngoặc ($9 \to -9$ và $-14 \to +14$).
- **Bạn An làm SAI.** Bạn An chỉ đổi dấu số hạng đầu tiên ($9 \to -9$) mà quên đổi dấu số hạng thứ hai (vẫn giữ nguyên $-14$).  
  *Kiểm tra cách tính thông thường:* $9 - 14 = -5 \implies 18 - (-5) = 18 + 5 = 23$ (khớp với kết quả của Bình).
</details>

### Bài 10. Tính tổng đại số đan dấu
Tính hợp lý:  
a) $635 - 74 + (-635) - 26$;  
b) $328 + 57 + (-328) + (-37)$;  
c) $1 + (-4) + 7 + (-10) + 13 + (-16).$

<details>
<summary><strong>Xem lời giải chi tiết Bài 10</strong></summary>

- a) $[635 + (-635)] - (74 + 26) = 0 - 100 = -100.$
- b) $[328 + (-328)] + [57 + (-37)] = 0 + 20 = 20.$
- c) Nhóm từng cặp hai số liên tiếp:
  $$[1 + (-4)] + [7 + (-10)] + [13 + (-16)] = (-3) + (-3) + (-3) = -9.$$
</details>

---

## D. Đề kiểm tra cơ bản 15 phút

### Phần 1. Trắc nghiệm khách quan (4 điểm)

```quiz
type: choice
question: 'Biểu thức nào sau đây bằng với a - (b - c)?'
options:
  - 'a - b - c'
  - 'a - b + c'
  - 'a + b - c'
  - '-a + b - c'
answer: 2
explanation: 'Trước ngoặc là dấu trừ "-", ta đổi dấu mọi số hạng trong ngoặc: +b thành -b, -c thành +c. Vậy a - (b - c) = a - b + c.'
```

```quiz
type: choice
question: 'Kết quả của phép tính (-18) - (25 - 18) là:'
options:
  - '-25'
  - '25'
  - '-11'
  - '0'
answer: 1
explanation: 'Bỏ ngoặc: (-18) - 25 + 18 = [(-18) + 18] - 25 = 0 - 25 = -25.'
```

```quiz
type: choice
question: 'Rút gọn biểu thức M = (x - 5) - (x + 3) ta được kết quả là:'
options:
  - '2x - 8'
  - '-2'
  - '-8'
  - '8'
answer: 3
explanation: 'M = x - 5 - x - 3 = (x - x) - (5 + 3) = -8.'
```

```quiz
type: choice
question: 'Biểu thức 12 - (5 - 9) có kết quả bằng:'
options:
  - '16'
  - '8'
  - '-2'
  - '26'
answer: 1
explanation: '12 - (5 - 9) = 12 - 5 + 9 = 7 + 9 = 16 (hoặc 12 - (-4) = 12 + 4 = 16).'
```

---

### Phần 2. Tự luận (6 điểm)

#### Câu 1 (2.0 điểm)
Tính giá trị của các biểu thức sau một cách hợp lý:  
a) $(35 - 47) + (-35) + (-13)$;  
b) $(45 - 25) + (-5) - (-25).$

#### Câu 2 (2.0 điểm)
Rút gọn biểu thức rồi tính giá trị của biểu thức tại $x = 250$:

$$P = x - (384 + 150) + (84 + 150).$$

#### Câu 3 (2.0 điểm)
Cho tập hợp $B = \{x \in \mathbb{Z} \mid -4 \le x \le 6\}$. Tính tổng tất cả các phần tử của tập hợp $B$.

---

### Đáp án và Barem điểm chi tiết

<details>
<summary><strong>Xem đáp án tự luận và thang điểm chi tiết</strong></summary>

- **Câu 1 (2.0 điểm):**
  - a) Phá ngoặc: $35 - 47 - 35 - 13 = (35 - 35) - (47 + 13) = 0 - 60 = -60.$ *(1.0 điểm)*
  - b) Phá ngoặc: $45 - 25 - 5 + 25 = 45 - 5 + (-25 + 25) = 40 + 0 = 40.$ *(1.0 điểm)*

- **Câu 2 (2.0 điểm):**
  - Rút gọn biểu thức $P$:
    $$P = x - 384 - 150 + 84 + 150 = x + (-384 + 84) + (-150 + 150) = x - 300.$$ *(1.25 điểm)*
  - Thay $x = 250$ vào $P$:
    $$P = 250 - 300 = -50.$$ *(0.75 điểm)*

- **Câu 3 (2.0 điểm):**
  - Tập hợp $B = \{-4; -3; -2; -1;\; 0;\; 1;\; 2;\; 3;\; 4;\; 5;\; 6\}.$ *(0.75 điểm)*
  - Nhóm các số đối nhau từ $-4$ đến $4$:
    $$S = [(-4 + 4) + (-3 + 3) + \dots + 0] + 5 + 6 = 0 + 5 + 6 = 11.$$ *(1.25 điểm)*
</details>

---

## E. Bài tập nâng cao và phát triển tư duy

### Bài nâng cao 1. Phân tích nhận diện các biểu thức bằng nhau
Cho biểu thức: $a = 160 - (285 - 390).$  
Trong bốn biểu thức sau đây, biểu thức nào có giá trị luôn bằng $a$?  
- $b = 160 - 390 - 285$  
- $c = 160 - 390 + 285$  
- $d = 160 + 390 - 285$  

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 1</strong></summary>

**Lời giải:**  
Áp dụng quy tắc bỏ dấu ngoặc có dấu "$-$" đằng trước đối với $a$:
$$a = 160 - (285 - 390) = 160 - 285 + 390.$$
Áp dụng tính chất giao hoán, ta có thể đổi chỗ các số hạng kèm theo dấu:
$$a = 160 + 390 - 285.$$

So sánh với các biểu thức đã cho:
- Biểu thức $b = 160 - 390 - 285 \ne a$ (sai dấu của $390$).
- Biểu thức $c = 160 - 390 + 285 \ne a$ (sai dấu của cả $390$ và $285$).
- Biểu thức $d = 160 + 390 - 285$ hoàn toàn trùng khớp với $a$.

**Kết luận:** Biểu thức bằng $a$ là **biểu thức $d$**.
</details>

---

### Bài nâng cao 2. Tính giá trị biểu thức theo cụm tổng / hiệu
Không cần tìm riêng từng giá trị của các biến, hãy tính giá trị của các biểu thức sau:  
a) $M = (a + 24) - (b + 6)$ biết rằng $a - b = 12$;  
b) $N = (48 - x) - (y - 12)$ biết rằng $x + y = 30.$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 2</strong></summary>

**Ý tưởng:** Bỏ dấu ngoặc, sắp xếp và nhóm các số hạng để xuất hiện cụm đại số $(a - b)$ hoặc $(x + y)$ mà đề bài đã cung cấp.

- **a) Tính $M$:**
  $$M = a + 24 - b - 6 = (a - b) + (24 - 6) = (a - b) + 18.$$
  Thay $a - b = 12$ vào:
  $$M = 12 + 18 = 30.$$

- **b) Tính $N$:**
  $$N = 48 - x - y + 12 = (48 + 12) - (x + y) = 60 - (x + y).$$
  Thay $x + y = 30$ vào:
  $$N = 60 - 30 = 30.$$
</details>

---

### Bài nâng cao 3. Tính tổng dãy số đan dấu chẵn / lẻ
Tính giá trị của các biểu thức sau:  
a) $A = (1 - 2) + (3 - 4) + (5 - 6) + \dots + (79 - 80)$;  
b) $B = (-2 + 4) + (-6 + 8) + (-10 + 12) + \dots + (-118 + 120).$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 3</strong></summary>

- **a) Tính $A$:**  
  Dãy từ $1$ đến $80$ gồm $80$ số hạng, chia thành $80 : 2 = 40$ cặp ngoặc.  
  Mỗi cặp ngoặc có giá trị: $1 - 2 = -1$.  
  Do đó:
  $$A = (-1) \cdot 40 = -40.$$

- **b) Tính $B$:**  
  Xét các số trong dãy: $2, 4, 6, 8, \dots, 120$.  
  Số lượng số hạng là: $\frac{120 - 2}{2} + 1 = 60$ số hạng.  
  Số cặp ngoặc là: $60 : 2 = 30$ cặp.  
  Mỗi cặp có giá trị: $-2 + 4 = 2$.  
  Do đó:
  $$B = 2 \cdot 30 = 60.$$
</details>

---

### Bài nâng cao 4. Chứng minh biểu thức không phụ thuộc vào biến
Chứng minh rằng giá trị của các biểu thức sau không phụ thuộc vào giá trị của các biến $a, b$:  
a) $M = (a - b + 7) - (a + 5) - (2 - b)$;  
b) $N = (8 - a) - (b - a + 8) + (b - 4).$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 4</strong></summary>

- **a) Rút gọn biểu thức $M$:**  
  Áp dụng quy tắc bỏ ngoặc:
  $$M = a - b + 7 - a - 5 - 2 + b = (a - a) + (-b + b) + (7 - 5 - 2) = 0 + 0 + 0 = 0.$$
  Vì $M = 0$ với mọi giá trị của $a$ và $b$, nên giá trị của $M$ **không phụ thuộc vào $a$ và $b$**.

- **b) Rút gọn biểu thức $N$:**  
  Áp dụng quy tắc bỏ ngoặc:
  $$N = 8 - a - b + a - 8 + b - 4 = (-a + a) + (-b + b) + (8 - 8 - 4) = 0 + 0 - 4 = -4.$$
  Vì $N = -4$ với mọi giá trị của $a$ và $b$, nên giá trị của $N$ **không phụ thuộc vào $a$ và $b$**.
</details>

---

### Bài nâng cao 5. Đổi dấu toàn bộ các phần tử trong biểu thức
Cho biểu thức đại số $P = x - y + z - t$.  
Nếu ta đồng thời thay thế các biến $x, y, z, t$ bằng các số đối của chúng (tức là thay $x$ bằng $-x$, $y$ bằng $-y$, $z$ bằng $-z$, $t$ bằng $-t$), thì giá trị của biểu thức $P$ thay đổi như thế nào?

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 5</strong></summary>

**Lời giải:**  
Gọi biểu thức mới sau khi thay thế là $P'$:
$$P' = (-x) - (-y) + (-z) - (-t).$$
Áp dụng quy tắc trừ số nguyên (trừ số âm thành cộng số dương) và quy tắc cộng:
$$P' = -x + y - z + t.$$
Đặt dấu trừ "$-$" ra ngoài toàn bộ biểu thức và mở dấu ngoặc:
$$P' = -(x - y + z - t).$$
Nhận thấy biểu thức trong ngoặc chính là biểu thức $P$ ban đầu, do đó:
$$P' = -P.$$

**Kết luận:** Giá trị của biểu thức mới $P'$ chính là **số đối** của biểu thức ban đầu $P$.
</details>

---

## 4. Bảng tổng kết ghi nhớ bài học

<div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
  <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 12px; color: #0f172a;">QUY TẮC DẤU NGOẶC TRONG TẬP HỢP SỐ NGUYÊN</div>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #334155;">
    <li><strong>Trước ngoặc là dấu "+":</strong> Giữ nguyên dấu của mọi số hạng bên trong.</li>
    <li><strong>Trước ngoặc là dấu "-":</strong> Đổi dấu tất cả số hạng: $+$ thành $-$, và $-$ thành $+$.</li>
    <li><strong>Đặt dấu ngoặc sau dấu "-":</strong> Phải đổi dấu tất cả các số hạng đưa vào trong ngoặc!</li>
    <li><strong>Đổi chỗ số hạng:</strong> Bắt buộc phải mang theo dấu đứng ngay phía trước số hạng đó!</li>
  </ul>
</div>
