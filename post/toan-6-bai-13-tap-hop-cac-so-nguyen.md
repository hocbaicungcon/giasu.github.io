---
title: 'Toán 6 Bài 13: Tập hợp các số nguyên - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Khám phá toàn bộ lý thuyết Toán 6 Bài 13 Tập hợp các số nguyên: số nguyên âm, số nguyên dương, tập hợp Z, biểu diễn trên trục số, quy tắc so sánh số nguyên, bài tập thực tế và bài tập nâng cao độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số nguyên
  - Tập hợp Z
  - Trục số
  - So sánh số nguyên
  - Kết nối tri thức
grade: 6
---

# Bài 13. Tập hợp các số nguyên

Chào các em học sinh! Trong hai chương học trước, chúng ta đã làm việc hoàn toàn với thế giới của **tập hợp các số tự nhiên** $\mathbb{N} = \{0; 1; 2; 3; \dots\}.$ Tập hợp số tự nhiên rất tuyệt vời để đếm số lượng bàn ghế, tính tuổi tác hay tính số tiền ta đang có.

Thế nhưng, thế giới thực tế phong phú hơn thế rất nhiều:
- Khi mùa đông về ở các vùng núi cao, nhiệt độ có thể hạ xuống **dưới $0^\circ\text{C}$**. Làm sao ghi lại nhiệt độ này?
- Khi đo đạc địa lý, đỉnh núi Fansipan cao hơn mặt biển hàng ngàn mét, nhưng đáy rãnh biển Mariana lại nằm sâu **dưới mực nước biển**.
- Trong kinh doanh, bên cạnh khoản **tiền lãi** (sinh lời), người ta còn phải ghi nhận các khoản **tiền lỗ**, **tiền nợ**.
- Trong các tòa nhà cao tầng, bên cạnh các **tầng nổi** ($1, 2, 3\dots$), còn có các **tầng hầm** nằm sâu dưới lòng đất.

Để giải quyết những bài toán đó, các nhà toán học đã mở rộng tập hợp số tự nhiên thành **tập hợp các số nguyên** $\mathbb{Z}.$ Bài học hôm nay sẽ giúp các em làm quen với những người bạn số mới: **số nguyên âm**, cách biểu diễn chúng trên **trục số** và quy tắc so sánh số nguyên chuẩn xác nhất!

---

## 0. Khởi động — Thử thách tư duy thực tế (5–7 phút)

Hãy kiểm tra trực giác và tư duy số học của các em qua 3 câu hỏi trắc nghiệm ngắn sau:

```quiz
type: choice
question: 'Nếu quy ước nhiệt độ $0^\circ\text{C}$ là điểm đóng băng của nước tinh khiết, nhiệt độ 5 độ dưới $0^\circ\text{C}$ được ghi thuận tiện nhất bằng ký hiệu nào sau đây?'
options:
  - '$+5^\circ\text{C}$'
  - '$-5^\circ\text{C}$'
  - '$0,5^\circ\text{C}$'
  - '$50^\circ\text{C}$'
answer: 2
explanation: 'Các đại lượng nằm dưới mốc chuẩn 0 thường được biểu diễn bằng số có dấu trừ đằng trước, đọc là âm năm độ C: $-5^\circ\text{C}.$'
```

```quiz
type: choice
question: 'Một chiếc thang máy đang ở tầng trệt (tầng G ứng với mức 0). Bác bảo vệ bấm nút đi xuống tầng hầm thứ 2 để lấy xe. Nút bấm tầng hầm này thường ghi ký hiệu toán học nào?'
options:
  - 'Hầm +2'
  - '-2 (hoặc B2)'
  - '2'
  - '0'
answer: 2
explanation: 'Tầng nằm dưới mặt đất (tầng trệt mốc 0) tương ứng với số nguyên âm: $-1$ là hầm 1, $-2$ là hầm 2 (thường ký hiệu là B2 hay $-2$).'
```

```quiz
type: choice
question: 'Theo em, giữa khoản nợ 10 triệu đồng và khoản nợ 30 triệu đồng, trường hợp nào có nhiều tài sản hơn (hoặc ít khó khăn hơn)?'
options:
  - 'Nợ 30 triệu đồng có nhiều tài sản hơn'
  - 'Nợ 10 triệu đồng có nhiều tài sản hơn'
  - 'Hai trường hợp bằng nhau'
  - 'Không thể so sánh được'
answer: 2
explanation: 'Nợ 10 triệu đồng (tương ứng $-10$) ít âm hơn, tức là tài sản thực tế cao hơn so với người đang nợ tận 30 triệu đồng (tương ứng $-30$). Vì vậy, ta sẽ thấy $-10 > -30.$'
```

---

## A. Tóm tắt lý thuyết trọng tâm

### 1. Số nguyên âm, số nguyên dương và tập hợp số nguyên $\mathbb{Z}$

#### a) Định nghĩa
- Các số $1; 2; 3; 4; \dots$ được gọi là các **số nguyên dương** (chính là các số tự nhiên khác $0$). Đôi khi người ta viết thêm dấu cộng ở phía trước: $+1; +2; +3; \dots$ nhưng thông thường dấu cộng được lược bỏ.
- Các số $-1; -2; -3; -4; \dots$ được gọi là các **số nguyên âm** (đọc là: *âm một, âm hai, âm ba, âm bốn* hoặc *trừ một, trừ hai...*).
- **Số $0$ không phải là số nguyên dương, cũng không phải là số nguyên âm.** Số $0$ đóng vai trò là ranh giới chuẩn (mốc mốc không).
- Tập hợp gồm các số nguyên âm, số $0$ và các số nguyên dương được gọi là **tập hợp các số nguyên**, ký hiệu là $\mathbb{Z}$ (chữ cái đầu của từ tiếng Đức *Zahlen*, nghĩa là "các con số"):

$$\mathbb{Z} = \{\dots; -4; -3; -2; -1;\; 0;\; 1;\; 2;\; 3;\; 4; \dots\}.$$

#### b) Mối quan hệ giữa tập hợp $\mathbb{N}$ và $\mathbb{Z}$
- Vì mọi số tự nhiên $0; 1; 2; 3; \dots$ đều là số nguyên, nên tập hợp số tự nhiên là một tập con của tập hợp số nguyên:

$$\mathbb{N} \subset \mathbb{Z}.$$

> [!NOTE]
> Mọi số tự nhiên đều là số nguyên ($n \in \mathbb{N} \Rightarrow n \in \mathbb{Z}$). Tuy nhiên, các số nguyên âm chỉ thuộc $\mathbb{Z}$ mà **không thuộc $\mathbb{N}$** (ví dụ: $-5 \in \mathbb{Z}$ nhưng $-5 \notin \mathbb{N}$).

---

### 2. Biểu diễn số nguyên trên trục số

Để hình dung trực quan toàn bộ các số nguyên, ta dùng một đường thẳng gọi là **trục số**:

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin: 20px 0; overflow-x: auto; text-align: center;">
  <div style="font-weight: 600; margin-bottom: 15px; color: #1e293b;">Mô hình Trục số nằm ngang</div>
  <svg viewBox="0 0 700 110" style="width: 100%; max-width: 700px; height: auto; font-family: system-ui, -apple-system, sans-serif;">
    <!-- Trục chính -->
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
      </marker>
    </defs>
    <line x1="20" y1="50" x2="680" y2="50" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow)" />
    
    <!-- Điểm mốc 0 -->
    <line x1="350" y1="38" x2="350" y2="62" stroke="#dc2626" stroke-width="3" />
    <circle cx="350" cy="50" r="5" fill="#dc2626" />
    <text x="350" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#dc2626">0</text>
    <text x="350" y="25" text-anchor="middle" font-size="13" font-weight="600" fill="#dc2626">Gốc O</text>
    
    <!-- Các vạch âm -->
    <line x1="300" y1="42" x2="300" y2="58" stroke="#475569" stroke-width="2" />
    <text x="300" y="80" text-anchor="middle" font-size="14" fill="#334155">-1</text>
    <line x1="250" y1="42" x2="250" y2="58" stroke="#475569" stroke-width="2" />
    <text x="250" y="80" text-anchor="middle" font-size="14" fill="#334155">-2</text>
    <line x1="200" y1="42" x2="200" y2="58" stroke="#475569" stroke-width="2" />
    <text x="200" y="80" text-anchor="middle" font-size="14" fill="#334155">-3</text>
    <line x1="150" y1="42" x2="150" y2="58" stroke="#475569" stroke-width="2" />
    <text x="150" y="80" text-anchor="middle" font-size="14" fill="#334155">-4</text>
    <line x1="100" y1="42" x2="100" y2="58" stroke="#475569" stroke-width="2" />
    <text x="100" y="80" text-anchor="middle" font-size="14" fill="#334155">-5</text>
    <line x1="50" y1="42" x2="50" y2="58" stroke="#475569" stroke-width="2" />
    <text x="50" y="80" text-anchor="middle" font-size="14" fill="#334155">-6</text>

    <!-- Các vạch dương -->
    <line x1="400" y1="42" x2="400" y2="58" stroke="#475569" stroke-width="2" />
    <text x="400" y="80" text-anchor="middle" font-size="14" fill="#334155">1</text>
    <line x1="450" y1="42" x2="450" y2="58" stroke="#475569" stroke-width="2" />
    <text x="450" y="80" text-anchor="middle" font-size="14" fill="#334155">2</text>
    <line x1="500" y1="42" x2="500" y2="58" stroke="#475569" stroke-width="2" />
    <text x="500" y="80" text-anchor="middle" font-size="14" fill="#334155">3</text>
    <line x1="550" y1="42" x2="550" y2="58" stroke="#475569" stroke-width="2" />
    <text x="550" y="80" text-anchor="middle" font-size="14" fill="#334155">4</text>
    <line x1="600" y1="42" x2="600" y2="58" stroke="#475569" stroke-width="2" />
    <text x="600" y="80" text-anchor="middle" font-size="14" fill="#334155">5</text>
    <line x1="650" y1="42" x2="650" y2="58" stroke="#475569" stroke-width="2" />
    <text x="650" y="80" text-anchor="middle" font-size="14" fill="#334155">6</text>

    <!-- Chú thích chiều -->
    <text x="660" y="25" text-anchor="end" font-size="13" font-weight="bold" fill="#0284c7">Chiều dương (+)&gt;</text>
    <text x="35" y="25" text-anchor="start" font-size="13" font-weight="bold" fill="#64748b">&lt; Chiều âm (-)</text>
  </svg>
</div>

**Đặc điểm của trục số nằm ngang:**
1. **Gốc của trục số:** Là điểm biểu diễn số $0$ (thường ký hiệu là điểm $O$).
2. **Chiều dương:** Chiều từ trái sang phải (được chỉ định bằng mũi tên ở đầu bên phải).
3. **Chiều âm:** Chiều ngược lại (từ phải sang trái).
4. **Vị trí các điểm:**
   - Các điểm biểu diễn số nguyên dương nằm **bên phải** điểm $0$.
   - Các điểm biểu diễn số nguyên âm nằm **bên trái** điểm $0$.
   - Các vạch chia trên trục số phải **cách đều nhau** một khoảng bằng độ dài đơn vị.

---

### 3. So sánh hai số nguyên

Quy tắc cốt lõi khi so sánh hai số nguyên dựa trên vị trí của chúng trên trục số nằm ngang:
> Trên trục số nằm ngang, nếu điểm $a$ nằm bên trái điểm $b$ thì số $a$ **nhỏ hơn** số $b$ (viết là $a < b$), hay số $b$ **lớn hơn** số $a$ (viết là $b > a$).

Từ nguyên lý này, ta suy ra các quy tắc so sánh thực hành nhanh sau:

| Trường hợp | Quy tắc so sánh | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Số âm với số 0** | Mọi số nguyên âm đều **nhỏ hơn $0$** | $-8 < 0;\; -125 < 0.$ |
| **Số dương với số 0** | Mọi số nguyên dương đều **lớn hơn $0$** | $5 > 0;\; 24 > 0.$ |
| **Số âm với số dương** | Mọi số nguyên âm đều **nhỏ hơn mọi số nguyên dương** | $-100 < 2;\; -9999 < 1.$ |
| **Hai số nguyên dương** | So sánh như hai số tự nhiên đã học | $15 < 24$ vì $15$ ít đơn vị hơn $24.$ |
| **Hai số nguyên âm** | Nếu bỏ dấu "$-$" đi mà số nào **lớn hơn** thì số âm tương ứng lại **nhỏ hơn**:<br>$\forall a, b > 0: a > b \Rightarrow -a < -b$ | So sánh $-7$ và $-3$:<br>Vì $7 > 3$ nên $-7 < -3.$ |

> [!TIP]
> **Mẹo ghi nhớ trực quan cho hai số âm:**
> - Càng nằm xa gốc $0$ về bên trái thì giá trị càng bé (giống như nợ càng nhiều tiền thì càng nghèo).
> - Số nguyên âm lớn nhất là $-1$ (vì nó nằm sát ngay cạnh số $0$ về bên trái).

---

### 4. Bốn sai lầm kinh điển học sinh thường mắc phải

> [!WARNING]
> **Sai lầm 1: Cho rằng $-7 > -2$ vì $7 > 2$**
> - *Thực tế:* Với hai số âm, thứ tự bị đảo ngược hoàn toàn! Điểm $-7$ nằm lùi sâu về bên trái điểm $-2$ trên trục số, nên $-7 < -2.$
>
> **Sai lầm 2: Nhầm lẫn số 0 là số nguyên dương**
> - *Thực tế:* Số $0$ là ranh giới trung lập. Số $0$ **không phải** số nguyên dương và cũng **không phải** số nguyên âm.
>
> **Sai lầm 3: Nhầm tưởng $-12 \in \mathbb{N}$**
> - *Thực tế:* $-12 \in \mathbb{Z}$ nhưng $-12 \notin \mathbb{N}.$ Tập $\mathbb{N}$ chỉ bắt đầu từ $0, 1, 2, \dots$
>
> **Sai lầm 4: Nhầm tưởng số âm càng nhiều chữ số thì càng lớn**
> - *Thực tế:* Ngược lại hoàn toàn, $-1000$ nhỏ hơn rất nhiều so với $-2$ ($-1000 < -2$).

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1. Nhận biết số nguyên; dùng ký hiệu $\in, \notin, \subset$ với $\mathbb{N}$ và $\mathbb{Z}$

**Phương pháp giải:**
1. Kiểm tra bản chất số:
   - Các số $1, 2, 3\dots$: Là số nguyên dương và số tự nhiên ($\in \mathbb{N}, \in \mathbb{Z}$).
   - Số $0$: Là số tự nhiên và số nguyên ($\in \mathbb{N}, \in \mathbb{Z}$).
   - Các số $-1, -2, -3\dots$: Là số nguyên âm ($\in \mathbb{Z}$, nhưng $\notin \mathbb{N}$).
2. Mối quan hệ tập hợp: $\mathbb{N} \subset \mathbb{Z}.$

#### Ví dụ mẫu 1
Điền ký hiệu thích hợp ($\in$ hoặc $\notin$) vào chỗ trống:
a) $24 \dots \mathbb{N}$;  
b) $-37 \dots \mathbb{Z}$;  
c) $-58 \dots \mathbb{N}$;  
d) $105 \dots \mathbb{Z}.$

**Lời giải:**
a) $24$ là số tự nhiên, do đó $24 \in \mathbb{N}.$  
b) $-37$ là số nguyên âm, thuộc tập hợp số nguyên: $-37 \in \mathbb{Z}.$  
c) $-58$ là số nguyên âm, không phải số tự nhiên: $-58 \notin \mathbb{N}.$  
d) $105$ là số tự nhiên, mà mọi số tự nhiên đều là số nguyên nên $105 \in \mathbb{Z}.$

#### Luyện tập 1.1
Phân loại các số sau thành ba nhóm: số nguyên dương, số nguyên âm, số không phải số nguyên dương cũng không phải số nguyên âm:

$$-14;\; 25;\; 0;\; -3;\; 2028;\; -89.$$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.1</strong></summary>

- **Các số nguyên dương:** $25;\; 2028.$
- **Các số nguyên âm:** $-14;\; -3;\; -89.$
- **Số không phải số nguyên dương cũng không phải số nguyên âm:** Số $0.$
</details>

#### Luyện tập 1.2
Trong các khẳng định sau, khẳng định nào đúng ($\text{Đ}$), khẳng định nào sai ($\text{S}$)?
a) $-7 \in \mathbb{N}$;  
b) $18 \in \mathbb{Z}$;  
c) $0 \notin \mathbb{Z}$;  
d) $-12 \in \mathbb{Z}$;  
e) $-6 \notin \mathbb{Z}$;  
f) $9 \in \mathbb{N}.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.2</strong></summary>

- a) Sai ($\text{S}$), vì số nguyên âm không thuộc $\mathbb{N}$ (sửa đúng: $-7 \notin \mathbb{N}$).
- b) Đúng ($\text{Đ}$), vì $18$ là số tự nhiên nên cũng là số nguyên ($18 \in \mathbb{Z}$).
- c) Sai ($\text{S}$), vì số $0$ là một phần tử của $\mathbb{Z}$ (sửa đúng: $0 \in \mathbb{Z}$).
- d) Đúng ($\text{Đ}$), vì $-12$ là số nguyên âm nên $-12 \in \mathbb{Z}.$
- e) Sai ($\text{S}$), vì $-6$ là số nguyên âm nên $-6 \in \mathbb{Z}.$
- f) Đúng ($\text{Đ}$), vì $9$ là số tự nhiên.
</details>

#### Luyện tập 1.3
Hãy viết các số thỏa mãn yêu cầu sau:
a) Số nguyên âm nhỏ nhất có một chữ số;  
b) Số nguyên âm lớn nhất có hai chữ số;  
c) Số nguyên âm nhỏ nhất có bốn chữ số đôi một khác nhau;  
d) Số nguyên âm lớn nhất có bốn chữ số đôi một khác nhau.

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 1.3</strong></summary>

- a) Số nguyên âm có một chữ số gồm: $-1; -2; -3; \dots; -9.$ Số nhỏ nhất (nằm xa gốc $0$ nhất về bên trái) là $-9.$
- b) Số nguyên âm có hai chữ số gồm: $-10; -11; \dots; -99.$ Số lớn nhất (gần gốc $0$ nhất) là $-10.$
- c) Để số nguyên âm là nhỏ nhất, giá trị tuyệt đối (bỏ dấu "$-$") phải lớn nhất có thể. Bốn chữ số đôi một khác nhau lớn nhất là $9876.$ Vậy số cần tìm là $-9876.$
- d) Để số nguyên âm là lớn nhất, giá trị tuyệt đối (bỏ dấu "$-$") phải nhỏ nhất có thể. Bốn chữ số đôi một khác nhau nhỏ nhất tạo thành số là $1023.$ Vậy số cần tìm là $-1023.$
</details>

---

### Dạng 2. Biểu diễn số nguyên trên trục số và đọc tọa độ điểm

**Phương pháp giải:**
1. **Biểu diễn:** Vẽ đường thẳng nằm ngang, chấm điểm mốc $0$, chọn đoạn đơn vị thích hợp.
   - Điểm dương $+k$: Đếm $k$ đơn vị sang bên phải điểm $0$.
   - Điểm âm $-k$: Đếm $k$ đơn vị sang bên trái điểm $0$.
2. **Đọc số:** Xác định điểm đó nằm bên trái hay bên phải điểm $0$, đếm số vạch khoảng cách tới $0$.

#### Ví dụ mẫu 2
Viết tập hợp các số nguyên có điểm biểu diễn nằm giữa hai điểm $-6$ và $3$ trên trục số (không kể hai điểm đó).

**Lời giải:**
Quan sát trục số, các số nguyên nằm giữa điểm $-6$ và điểm $3$ gồm các số nguyên âm nằm bên phải $-6$, số $0$ và các số nguyên dương nằm bên trái $3$:

$$S = \{-5; -4; -3; -2; -1;\; 0;\; 1;\; 2\}.$$

Tập hợp trên có tất cả $8$ phần tử.

#### Luyện tập 2.1
Vẽ một trục số nằm ngang với độ dài đơn vị $1\text{ cm}$ và biểu diễn các số sau trên trục số:

$$-6;\; -4;\; -1;\; 2;\; 5;\; 7.$$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.1</strong></summary>

- **Cách vẽ:**
  1. Vẽ đường thẳng nằm ngang có mũi tên chỉ sang phải.
  2. Lấy điểm $0$ ở giữa trục số.
  3. Lấy thước kẻ chia các vạch cách nhau $1\text{ cm}$.
  4. Từ điểm $0$ dịch sang trái $1\text{ cm}, 4\text{ cm}, 6\text{ cm}$ lần lượt đánh dấu các điểm biểu diễn số $-1, -4, -6.$
  5. Từ điểm $0$ dịch sang phải $2\text{ cm}, 5\text{ cm}, 7\text{ cm}$ lần lượt đánh dấu các điểm biểu diễn số $2, 5, 7.$
</details>

#### Luyện tập 2.2
Cho trục số sau với các vạch chia cách đều nhau:

```
    E        F             G        H
<---|---|---|---|---|---|---|---|---|---|--->
   -6          -2       0   1           5
```

Hãy xác định các điểm $E, F, G, H$ tương ứng với các số nguyên nào.

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 2.2</strong></summary>

Từ gốc $0$, mỗi khoảng cách giữa hai vạch liên tiếp biểu thị $1$ đơn vị:
- Điểm $E$ cách $0$ năm vạch về bên trái, nên $E$ biểu diễn số $-5.$
- Điểm $F$ cách $0$ hai vạch về bên trái, nên $F$ biểu diễn số $-2.$
- Điểm $G$ cách $0$ một vạch về bên phải, nên $G$ biểu diễn số $1.$
- Điểm $H$ cách $0$ bốn vạch về bên phải, nên $H$ biểu diễn số $4.$

Vậy: $E(-5),\; F(-2),\; G(1),\; H(4).$
</details>

---

### Dạng 3. So sánh hai số nguyên

**Phương pháp giải:**
1. **Xét dấu:**
   - Số âm luôn nhỏ hơn $0$ ($-\text{a} < 0$).
   - Số dương luôn lớn hơn $0$ ($b > 0$).
   - Số âm luôn nhỏ hơn số dương ($-\text{a} < b$).
2. **Cùng dấu dương:** So sánh như các số tự nhiên.
3. **Cùng dấu âm:** Bỏ dấu trừ, so sánh phần số tự nhiên:
   $$x > y > 0 \implies -x < -y.$$
   *(Số nào trông càng "lớn" thì khi gắn dấu trừ lại càng nhỏ).*

#### Ví dụ mẫu 3
So sánh các cặp số nguyên sau:
a) $4$ và $9$;  
b) $-4$ và $-9$;  
c) $7$ và $-15.$

**Lời giải:**
a) $4$ và $9$ là hai số nguyên dương, so sánh bình thường: $4 < 9.$  
b) Ta có $4 < 9$, theo quy tắc so sánh hai số nguyên âm, số đối của chúng sẽ đảo chiều so sánh: $-4 > -9.$ (Trên trục số, điểm $-4$ nằm gần số $0$ hơn, ở bên phải điểm $-9$).  
c) $7$ là số nguyên dương, $-15$ là số nguyên âm. Mọi số dương đều lớn hơn mọi số âm, do đó $7 > -15.$

#### Luyện tập 3.1
Điền dấu thích hợp ($<, >, =$) vào chỗ chấm:
a) $-6 \dots 5$;  
b) $-12 \dots -7$;  
c) $0 \dots -9$;  
d) $-250 \dots 250$;  
e) $-15 \dots -15.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.1</strong></summary>

- a) $-6 < 5$ (số âm luôn nhỏ hơn số dương).
- b) $-12 < -7$ (vì $12 > 7$ nên $-12 < -7$).
- c) $0 > -9$ (số $0$ luôn lớn hơn mọi số nguyên âm).
- d) $-250 < 250$ (số âm nhỏ hơn số dương).
- e) $-15 = -15.$
</details>

#### Luyện tập 3.2
So sánh các cặp số sau:
a) $-23$ và $-21$;  
b) $-1$ và $-5000$;  
c) $-8$ và $4$;  
d) $0$ và $-14.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.2</strong></summary>

- a) Vì $23 > 21$ nên $-23 < -21.$
- b) Vì $1 < 5000$ nên $-1 > -5000.$
- c) $-8$ là số âm, $4$ là số dương nên $-8 < 4.$
- d) Số $0$ lớn hơn mọi số âm nên $0 > -14.$
</details>

#### Luyện tập 3.3
Không cần vẽ trục số, hãy giải thích cặn kẽ vì sao $-2030 < -2029.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 3.3</strong></summary>

**Cách 1 (Quy tắc số học):**  
Hai số $-2030$ và $-2029$ đều là các số nguyên âm.  
Bỏ dấu trừ của cả hai số, ta so sánh phần dương: $2030 > 2029.$  
Theo quy tắc so sánh hai số nguyên âm, số có phần dương lớn hơn thì số âm tương ứng sẽ nhỏ hơn, do đó: $-2030 < -2029.$

**Cách 2 (Trực quan vị trí):**  
Trên trục số, điểm biểu diễn số $-2030$ cách điểm gốc $0$ là $2030$ khoảng đơn vị về bên trái, nằm xa gốc $0$ hơn và ở bên trái của điểm $-2029$. Do điểm nằm bên trái luôn nhỏ hơn điểm nằm bên phải nên $-2030 < -2029.$
</details>

---

### Dạng 4. Tìm số nguyên thỏa mãn điều kiện và sắp xếp thứ tự

**Phương pháp giải:**
- **Tìm $x$ thỏa mãn:** Xác định kỹ các mốc hai đầu.
  - Dấu $<$ hoặc $>$: Không lấy giá trị tại mốc.
  - Dấu $\le$ hoặc $\ge$: Có lấy giá trị tại mốc.
- **Sắp xếp tăng dần:** Số âm nhỏ nhất $\to$ số âm lớn hơn $\to 0 \to$ số dương nhỏ $\to$ số dương lớn.
- **Sắp xếp giảm dần:** Số dương lớn nhất $\to$ số dương nhỏ hơn $\to 0 \to$ số âm gần $0 \to$ số âm xa $0$.

#### Luyện tập 4.1
Tìm tất cả các số nguyên $x$ thỏa mãn:
a) $-14 \le x \le -10$;  
b) $-6 < x < 4$;  
c) $-4 \le x < 3$;  
d) $-3 < x \le 2.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.1</strong></summary>

- a) Vì dấu là $\le$ ở cả hai đầu nên $x$ lấy cả $-14$ và $-10$:
  $$x \in \{-14; -13; -12; -11; -10\}.$$
- b) Vì dấu là $<$ ở cả hai đầu nên không lấy $-6$ và $4$:
  $$x \in \{-5; -4; -3; -2; -1;\; 0;\; 1;\; 2;\; 3\}.$$
- c) Có lấy mốc $-4$, không lấy mốc $3$:
  $$x \in \{-4; -3; -2; -1;\; 0;\; 1;\; 2\}.$$
- d) Không lấy mốc $-3$, có lấy mốc $2$:
  $$x \in \{-2; -1;\; 0;\; 1;\; 2\}.$$
</details>

#### Luyện tập 4.2
a) Sắp xếp các số sau theo thứ tự tăng dần: $5;\; -22;\; 8;\; -6;\; 0;\; 14.$  
b) Sắp xếp các số sau theo thứ tự giảm dần: $-350;\; 0;\; -15;\; 7;\; 18;\; -2.$

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 4.2</strong></summary>

- a) **Thứ tự tăng dần (từ bé đến lớn):**
  - Nhóm số âm: $-22 < -6.$
  - Số $0$: $-6 < 0.$
  - Nhóm số dương: $0 < 5 < 8 < 14.$
  - Kết quả: $-22;\; -6;\; 0;\; 5;\; 8;\; 14.$

- b) **Thứ tự giảm dần (từ lớn đến bé):**
  - Nhóm số dương: $18 > 7.$
  - Số $0$: $7 > 0.$
  - Nhóm số âm: $0 > -2 > -15 > -350.$
  - Kết quả: $18;\; 7;\; 0;\; -2;\; -15;\; -350.$
</details>

---

### Dạng 5. Ứng dụng số nguyên trong đời sống thực tế

**Phương pháp giải:**
Các đại lượng mang tính đối lập, hai chiều ngược nhau thường được quy ước:
- Chiều thuận/tăng/trên chuẩn: Dùng số dương ($+$).
- Chiều nghịch/giảm/dưới chuẩn: Dùng số âm ($-$).

| Đại lượng thực tế | Quy ước chiều dương ($+$) | Quy ước chiều âm ($-$) |
| :--- | :--- | :--- |
| **Nhiệt độ** | Trên $0^\circ\text{C}$ (ấm áp) | Dưới $0^\circ\text{C}$ (giá rét, đông đá) |
| **Độ cao địa lý** | Trên mực nước biển (đỉnh núi, cao nguyên) | Dưới mực nước biển (đáy biển, vực sâu) |
| **Tài chính / Ngân hàng** | Tiền có, tiền lãi, tiền gửi tiết kiệm | Tiền nợ, tiền lỗ, tiền thâm hụt |
| **Kiến trúc công trình** | Tầng nổi trên mặt đất ($1, 2, 3\dots$) | Tầng hầm ngầm dưới đất ($-1, -2\dots$) |
| **Thời gian lịch sử** | Sau Công nguyên ($\text{SCN}$) | Trước Công nguyên ($\text{TCN}$) |

#### Luyện tập 5.1
Dùng số nguyên âm hoặc số nguyên dương thích hợp để diễn tả các tình huống sau:
a) Nhiệt độ tại một trạm nghiên cứu ở Nam Cực đo được là $32$ độ C dưới $0^\circ\text{C}$.  
b) Một tàu khảo sát đại dương đang lặn ở độ sâu $180\text{ m}$ dưới mực nước biển.  
c) Đỉnh núi Fansipan có độ cao $3143\text{ m}$ trên mực nước biển.  
d) Một công ty bị thâm hụt ngân sách $450$ triệu đồng trong quý vừa qua.

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.1</strong></summary>

- a) Nhiệt độ là $-32^\circ\text{C}.$
- b) Độ cao của tàu khảo sát là $-180\text{ m}.$
- c) Độ cao của đỉnh Fansipan là $+3143\text{ m}$ (hoặc $3143\text{ m}$).
- d) Ngân sách công ty thay đổi $-450$ triệu đồng.
</details>

#### Luyện tập 5.2
Nhiệt độ đo được lúc 6 giờ sáng mùa đông tại bốn thủ đô như sau:  
- Luân Đôn: $-4^\circ\text{C}$;  
- Berlin: $-7^\circ\text{C}$;  
- Tokyo: $8^\circ\text{C}$;  
- Ottawa: $-16^\circ\text{C}$.  

Thành phố nào lạnh nhất? Thành phố nào ấm nhất? Sắp xếp bốn thành phố theo thứ tự nhiệt độ tăng dần.

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.2</strong></summary>

So sánh nhiệt độ của 4 thành phố:
$$-16 < -7 < -4 < 8.$$

- Nhiệt độ thấp nhất là $-16^\circ\text{C}$ (Ottawa) $\implies$ **Ottawa lạnh nhất.**
- Nhiệt độ cao nhất là $8^\circ\text{C}$ (Tokyo) $\implies$ **Tokyo ấm nhất.**
- Thứ tự nhiệt độ tăng dần của 4 thành phố là: **Ottawa, Berlin, Luân Đôn, Tokyo.**
</details>

#### Luyện tập 5.3
Nhà toán học cổ đại Euclid sinh vào khoảng năm $-325$ (năm 325 trước Công nguyên). Nhà bác học Thales sinh vào khoảng năm $-624$ (năm 624 trước Công nguyên). Hỏi nhà bác học nào sinh ra trước?

<details>
<summary><strong>Xem lời giải chi tiết Luyện tập 5.3</strong></summary>

Ta so sánh hai năm sinh: $-624$ và $-325.$  
Vì $624 > 325$ nên:
$$-624 < -325.$$

Năm có giá trị số nhỏ hơn biểu thị thời điểm diễn ra sớm hơn trong lịch sử. Do đó, năm $-624$ diễn ra trước năm $-325$.  
Vậy **nhà bác học Thales sinh ra trước nhà toán học Euclid.**
</details>

---

## C. Phiếu bài tập tự luyện (Độc bản 100%)

### Bài 1. Phân loại số
Cho các số sau: $-11;\; 9;\; -45;\; 0;\; 150;\; -2.$  
Trong các số trên, hãy chỉ ra:
a) Các số nguyên dương;  
b) Các số nguyên âm;  
c) Số không thuộc cả hai nhóm trên.

<details>
<summary><strong>Xem lời giải chi tiết Bài 1</strong></summary>

- a) Số nguyên dương: $9;\; 150.$
- b) Số nguyên âm: $-11;\; -45;\; -2.$
- c) Số không thuộc cả hai nhóm: $0.$
</details>

### Bài 2. Sử dụng ký hiệu $\in, \notin$
Điền ký hiệu thích hợp ($\in$ hoặc $\notin$) vào chỗ chấm:
a) $-12 \dots \mathbb{Z}$;  
b) $-12 \dots \mathbb{N}$;  
c) $2030 \dots \mathbb{N}$;  
d) $0 \dots \mathbb{Z}$;  
e) $-5 \dots \mathbb{N}$;  
f) $78 \dots \mathbb{Z}.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 2</strong></summary>

- a) $-12 \in \mathbb{Z}.$
- b) $-12 \notin \mathbb{N}.$
- c) $2030 \in \mathbb{N}.$
- d) $0 \in \mathbb{Z}.$
- e) $-5 \notin \mathbb{N}.$
- f) $78 \in \mathbb{Z}.$
</details>

### Bài 3. Đọc điểm trên trục số
Cho trục số sau với khoảng cách mỗi vạch chia là $1$ đơn vị:

```
        K           L       O   M           N
<---|---|---|---|---|---|---|---|---|---|---|---|--->
   -6                      0               5
```

a) Hãy viết tọa độ của các điểm $K, L, M, N.$  
b) Trong bốn điểm trên, điểm nào nằm xa gốc $O$ nhất? Điểm nào nằm gần gốc $O$ nhất?

<details>
<summary><strong>Xem lời giải chi tiết Bài 3</strong></summary>

a) Đếm vạch từ gốc $O(0)$:
- $K$ lùi về bên trái $5$ đơn vị $\implies K(-5).$
- $L$ lùi về bên trái $2$ đơn vị $\implies L(-2).$
- $M$ tiến về bên phải $1$ đơn vị $\implies M(1).$
- $N$ tiến về bên phải $4$ đơn vị $\implies N(4).$

b) Khoảng cách tới gốc $O$:
- Điểm $K$ cách $O$ là $5$ đơn vị.
- Điểm $L$ cách $O$ là $2$ đơn vị.
- Điểm $M$ cách $O$ là $1$ đơn vị.
- Điểm $N$ cách $O$ là $4$ đơn vị.

Vậy **điểm $K$ nằm xa gốc $O$ nhất** ($5$ đơn vị) và **điểm $M$ nằm gần gốc $O$ nhất** ($1$ đơn vị).
</details>

### Bài 4. Vẽ và biểu diễn số
Vẽ một trục số nằm ngang từ $-6$ đến $6$ và biểu diễn các số nguyên sau trên trục số:

$$-5;\; -3;\; 2;\; 4.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài 4</strong></summary>

1. Vẽ đường thẳng nằm ngang có mũi tên định hướng sang phải.
2. Lấy điểm $0$ ở chính giữa làm gốc $O$.
3. Chia vạch đều nhau mỗi vạch $1\text{ cm}$:
   - Phía bên trái gốc $O$: Đánh dấu các vạch $-1, -2, -3, -4, -5, -6.$ Tại vạch $-3$ và $-5$, chấm tròn đậm và ghi rõ số $-3$ và $-5.$
   - Phía bên phải gốc $O$: Đánh dấu các vạch $1, 2, 3, 4, 5, 6.$ Tại vạch $2$ và $4$, chấm tròn đậm và ghi rõ số $2$ và $4.$
</details>

### Bài 5. Điền dấu so sánh
Điền dấu thích hợp ($<, >, =$) vào ô trống:
a) $-8 \dots 4$;  
b) $-15 \dots -9$;  
c) $0 \dots -5$;  
d) $-120 \dots -119$;  
e) $12 \dots -30$;  
f) $-8 \dots -8.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 5</strong></summary>

- a) $-8 < 4$ (âm nhỏ hơn dương).
- b) $-15 < -9$ (vì $15 > 9$).
- c) $0 > -5$ (0 luôn lớn hơn số âm).
- d) $-120 < -119$ (vì $120 > 119$).
- e) $12 > -30$ (dương luôn lớn hơn âm).
- f) $-8 = -8.$
</details>

### Bài 6. Sắp xếp dãy số
a) Sắp xếp các số sau theo thứ tự tăng dần: $-9;\; 7;\; -4;\; 0;\; 3;\; -1.$  
b) Sắp xếp các số sau theo thứ tự giảm dần: $15;\; -18;\; 6;\; 0;\; -3;\; -25.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 6</strong></summary>

- a) Sắp xếp tăng dần:
  $$-9 < -4 < -1 < 0 < 3 < 7.$$
  Dãy số viết lại: $-9;\; -4;\; -1;\; 0;\; 3;\; 7.$

- b) Sắp xếp giảm dần:
  $$15 > 6 > 0 > -3 > -18 > -25.$$
  Dãy số viết lại: $15;\; 6;\; 0;\; -3;\; -18;\; -25.$
</details>

### Bài 7. Tìm số nguyên $x$
Tìm tất cả các số nguyên $x$ thỏa mãn:
a) $-5 < x < 4$;  
b) $-7 \le x \le -3$;  
c) $-2 \le x < 5.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 7</strong></summary>

- a) Các số nguyên lớn hơn $-5$ và nhỏ hơn $4$:
  $$x \in \{-4; -3; -2; -1;\; 0;\; 1;\; 2;\; 3\}.$$
- b) Các số nguyên từ $-7$ đến $-3$:
  $$x \in \{-7; -6; -5; -4; -3\}.$$
- c) Các số nguyên từ $-2$ đến dưới $5$:
  $$x \in \{-2; -1;\; 0;\; 1;\; 2;\; 3;\; 4\}.$$
</details>

### Bài 8. Đánh giá tính đúng / sai
Xét tính Đúng ($\text{Đ}$) hoặc Sai ($\text{S}$) của mỗi phát biểu sau. Nếu sai, hãy giải thích và sửa lại cho đúng:
a) Vì $8 > 3$ nên $-8 > -3.$  
b) Số $0$ là số nguyên dương nhỏ nhất.  
c) $-18 \in \mathbb{N}.$  
d) Mọi số nguyên âm đều nhỏ hơn mọi số nguyên dương.  
e) Không có số nguyên âm nào lớn hơn $-1.$

<details>
<summary><strong>Xem lời giải chi tiết Bài 8</strong></summary>

- a) **Sai.** Vì $8 > 3$ nên theo quy tắc so sánh số nguyên âm, $-8 < -3$ (số âm có phần tự nhiên lớn hơn thì lại nhỏ hơn).
- b) **Sai.** Số $0$ không phải là số nguyên dương. Số nguyên dương nhỏ nhất là số $1.$
- c) **Sai.** $-18 \notin \mathbb{N}$ (sửa đúng: $-18 \in \mathbb{Z}$).
- d) **Đúng.** Vì mọi số âm $< 0 <$ mọi số dương.
- e) **Đúng.** Vì $-1$ là số nguyên âm lớn nhất, các số nguyên âm khác đều nằm bên trái $-1$ trên trục số.
</details>

### Bài 9. Bài toán thực tế về nhiệt độ
Tại 5 trạm quan trắc trên các đỉnh núi cao, nhiệt độ ghi nhận được vào đêm giao thừa lần lượt là:  
- Mẫu Sơn: $-4^\circ\text{C}$;  
- Fansipan: $-7^\circ\text{C}$;  
- Bạch Mã: $6^\circ\text{C}$;  
- Bà Nà: $11^\circ\text{C}$;  
- Tây Côn Lĩnh: $-2^\circ\text{C}$.  

a) Hãy sắp xếp 5 đỉnh núi theo thứ tự nhiệt độ từ thấp đến cao.  
b) Đỉnh núi nào ghi nhận nhiệt độ lạnh nhất?  
c) Những đỉnh núi nào có nhiệt độ xảy ra hiện tượng đóng băng (nhiệt độ dưới $0^\circ\text{C}$)?

<details>
<summary><strong>Xem lời giải chi tiết Bài 9</strong></summary>

a) So sánh 5 nhiệt độ:
$$-7 < -4 < -2 < 6 < 11.$$
Thứ tự nhiệt độ từ thấp đến cao là: **Fansipan, Mẫu Sơn, Tây Côn Lĩnh, Bạch Mã, Bà Nà.**

b) Đỉnh núi lạnh nhất là **Fansipan** ($-7^\circ\text{C}$).

c) Các đỉnh núi có nhiệt độ dưới $0^\circ\text{C}$ (số nguyên âm) là: **Fansipan ($-7^\circ\text{C}$), Mẫu Sơn ($-4^\circ\text{C}$) và Tây Côn Lĩnh ($-2^\circ\text{C}$).**
</details>

### Bài 10. Tìm các số nguyên đặc biệt
Tìm các số nguyên thỏa mãn mô tả sau, sau đó sắp xếp chúng theo thứ tự tăng dần:
a) Số nguyên âm lớn nhất;  
b) Số nguyên dương nhỏ nhất;  
c) Số nguyên âm lớn nhất có ba chữ số;  
d) Số nguyên âm nhỏ nhất có ba chữ số.

<details>
<summary><strong>Xem lời giải chi tiết Bài 10</strong></summary>

- a) Số nguyên âm lớn nhất là: $-1.$
- b) Số nguyên dương nhỏ nhất là: $1.$
- c) Tập hợp số nguyên âm có 3 chữ số là từ $-100$ đến $-999$. Số lớn nhất (gần $0$ nhất) là: $-100.$
- d) Số nhỏ nhất có 3 chữ số (xa $0$ nhất) là: $-999.$

Bốn số tìm được là: $-1;\; 1;\; -100;\; -999.$  
Sắp xếp theo thứ tự tăng dần:
$$-999 < -100 < -1 < 1.$$
</details>

---

## D. Đề kiểm tra cơ bản 15 phút

### Phần 1. Trắc nghiệm khách quan (4 điểm)

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG về tập hợp các số nguyên Z?'
options:
  - 'Tập hợp Z chỉ gồm các số nguyên âm và số nguyên dương'
  - 'Số 0 là số nguyên dương nhỏ nhất'
  - 'Tập hợp N là con của tập hợp Z (N ⊂ Z)'
  - 'Mọi số nguyên đều là số tự nhiên'
answer: 3
explanation: 'Mọi số tự nhiên đều là số nguyên nên N ⊂ Z. Số 0 không là số nguyên dương cũng không là số âm. Số nguyên âm không phải là số tự nhiên.'
```

```quiz
type: choice
question: 'Trong các số nguyên: -15; -3; -28; -1, số có giá trị LỚN NHẤT là:'
options:
  - '-28'
  - '-15'
  - '-3'
  - '-1'
answer: 4
explanation: 'Trong các số nguyên âm, số nào có phần tự nhiên nhỏ nhất thì giá trị lớn nhất (gần gốc 0 nhất). Vì vậy -1 là số lớn nhất.'
```

```quiz
type: choice
question: 'Tập hợp các số nguyên x thỏa mãn điều kiện -3 ≤ x < 2 là:'
options:
  - '{-3; -2; -1; 0; 1}'
  - '{-2; -1; 0; 1}'
  - '{-3; -2; -1; 0; 1; 2}'
  - '{-2; -1; 0; 1; 2}'
answer: 1
explanation: 'Vì dấu ≤ ở đầu -3 nên có lấy -3, và dấu < ở đầu 2 nên không lấy 2. Tập hợp gồm {-3; -2; -1; 0; 1}.'
```

```quiz
type: choice
question: 'Một thợ lặn ở độ cao -35 m so với mực nước biển, một tàu ngầm ở độ cao -120 m. Khẳng định nào sau đây là chính xác?'
options:
  - 'Tàu ngầm ở vị trí cao hơn thợ lặn vì 120 > 35'
  - 'Thợ lặn ở vị trí cao hơn tàu ngầm vì -35 > -120'
  - 'Hai vị trí có độ cao ngang nhau'
  - 'Tàu ngầm ở gần mặt nước biển hơn thợ lặn'
answer: 2
explanation: 'Vì -35 > -120 nên thợ lặn ở vị trí cao hơn (gần mặt nước biển hơn) so với tàu ngầm.'
```

---

### Phần 2. Tự luận (6 điểm)

#### Câu 1 (1.5 điểm)
Điền ký hiệu $\in$ hoặc $\notin$ thích hợp vào ô trống:  
a) $-19 \dots \mathbb{N}$;  
b) $-19 \dots \mathbb{Z}$;  
c) $0 \dots \mathbb{N}.$

#### Câu 2 (1.5 điểm)
Sắp xếp dãy số sau theo thứ tự giảm dần:

$$-8;\; 5;\; 0;\; -14;\; 9;\; -1.$$

#### Câu 3 (1.5 điểm)
Tìm tất cả các số nguyên $x$ thỏa mãn: $-4 < x \le 1.$

#### Câu 4 (1.5 điểm)
Không dùng máy tính hay vẽ hình, hãy giải thích tại sao: $-1 > -500.$

---

### Đáp án và Barem điểm chi tiết

<details>
<summary><strong>Xem đáp án tự luận và thang điểm chi tiết</strong></summary>

- **Câu 1 (1.5 điểm):**
  - a) $-19 \notin \mathbb{N}$ *(0.5 điểm)*
  - b) $-19 \in \mathbb{Z}$ *(0.5 điểm)*
  - c) $0 \in \mathbb{N}$ *(0.5 điểm)*

- **Câu 2 (1.5 điểm):**
  - Nhóm số dương: $9 > 5.$
  - Số $0$: $5 > 0.$
  - Nhóm số âm: $0 > -1 > -8 > -14.$
  - Sắp xếp giảm dần: $9;\; 5;\; 0;\; -1;\; -8;\; -14.$ *(1.5 điểm)*

- **Câu 3 (1.5 điểm):**
  - Vì $-4 < x \le 1$ nên $x$ không lấy giá trị $-4$ và có lấy giá trị $1.$
  - Các số nguyên thỏa mãn là: $x \in \{-3; -2; -1;\; 0;\; 1\}.$ *(1.5 điểm)*

- **Câu 4 (1.5 điểm):**
  - Ta có $1 < 500.$
  - Vì $-1$ và $-500$ đều là các số nguyên âm, theo quy tắc so sánh hai số nguyên âm, số nào có phần số tự nhiên nhỏ hơn thì số nguyên âm tương ứng sẽ lớn hơn.
  - Do đó: $-1 > -500.$ (Trên trục số, điểm $-1$ nằm sát ngay bên trái điểm $0$, còn điểm $-500$ nằm rất xa về bên trái). *(1.5 điểm)*
</details>

---

## E. Bài tập nâng cao và phát triển tư duy

### Bài nâng cao 1. Đối xứng trục số
Tìm số tự nhiên $a$, biết rằng có đúng $45$ số nguyên nằm giữa hai điểm $-a$ và $a$ trên trục số (không kể hai điểm đó).

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 1</strong></summary>

**Phân tích & Lời giải:**  
Trên trục số, các số nguyên nằm giữa $-a$ và $a$ (với $a \in \mathbb{N}^*$) bao gồm:
1. Số $0$ ở chính giữa.
2. Các số nguyên dương: $1; 2; 3; \dots; a - 1.$ (gồm $a - 1$ số).
3. Các số nguyên âm: $-1; -2; -3; \dots; -(a - 1).$ (gồm $a - 1$ số).

Tổng số lượng các số nguyên nằm giữa $-a$ và $a$ là:
$$(a - 1) + 1 + (a - 1) = 2a - 1.$$

Theo đề bài, có đúng $45$ số nguyên, do đó:
$$2a - 1 = 45 \implies 2a = 46 \implies a = 23.$$

**Thử lại:**  
Giữa $-23$ và $23$ có các số từ $-22$ đến $22$:
- Số âm: $22$ số (từ $-22$ đến $-1$).
- Số $0$: $1$ số.
- Số dương: $22$ số (từ $1$ đến $22$).
- Tổng cộng: $22 + 1 + 22 = 45$ số (thỏa mãn đề bài).

**Kết luận:** Số tự nhiên cần tìm là $a = 23.$
</details>

---

### Bài nâng cao 2. Điền chữ số thích hợp
Tìm chữ số thích hợp thay cho dấu $*$ để được khẳng định đúng (mỗi dấu $*$ là một chữ số từ $0$ đến $9$):
a) $47 < 4*$;  
b) $-*3 > -23$;  
c) $-1*5 > -115$;  
d) $-145 < -14* < -143.$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 2</strong></summary>

- **a) $47 < 4*$:**  
  Hai số cùng có chữ số hàng chục là $4$. Để $47 < 4*$, chữ số hàng đơn vị phải thỏa mãn $* > 7$.  
  Vì $*$ là chữ số nên $* \in \{8; 9\}.$  
  *(Các số tương ứng là $48$ và $49$).*

- **b) $-*3 > -23$:**  
  Hai số cùng là số nguyên âm có hai chữ số, tận cùng là $3$.  
  Để $-*3 > -23$, theo quy tắc so sánh hai số âm thì phần số tự nhiên phải nhỏ hơn: $*3 < 23.$  
  Vì $*3$ là số có hai chữ số nên chữ số hàng chục $* \ge 1.$  
  Do $*3 < 23$ nên $* < 2$, suy ra $* = 1.$  
  *(Số đó là $-13$, và $-13 > -23$).*

- **c) $-1*5 > -115$:**  
  Bỏ dấu trừ, bất đẳng thức đảo chiều: $1*5 < 115.$  
  Hai số cùng có hàng trăm là $1$ và hàng đơn vị là $5$.  
  Để $1*5 < 115$ thì chữ số hàng chục phải nhỏ hơn $1$, tức là $* < 1.$  
  Vì $*$ là chữ số nên $* = 0.$  
  *(Số đó là $-105$, và $-105 > -115$).*

- **d) $-145 < -14* < -143$:**  
  Bỏ dấu trừ, đổi chiều so sánh: $143 < 14* < 145.$  
  Chữ số nằm giữa $143$ và $145$ duy nhất là $144$, do đó $* = 4.$  
  *(Số đó là $-144$, và $-145 < -144 < -143$).*
</details>

---

### Bài nâng cao 3. So sánh tổng quát với tham số
Cho $a$ và $b$ là hai số nguyên dương thỏa mãn $a > b > 0.$  
Hãy sắp xếp năm số sau theo thứ tự tăng dần và giải thích:

$$-a;\; -b;\; 0;\; b;\; a.$$

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 3</strong></summary>

**Chứng minh:**
1. **So sánh nhóm số dương:**  
   Theo giả thiết, $a$ và $b$ là các số nguyên dương và $a > b > 0$, tức là $0 < b < a.$
2. **So sánh nhóm số âm:**  
   Vì $a > b > 0$, lấy số đối cả hai vế thì chiều bất đẳng thức đảo ngược: $-a < -b < 0.$
3. **Kết hợp:**  
   Mọi số nguyên âm đều nhỏ hơn $0$ và nhỏ hơn mọi số nguyên dương, ghép nối các bất đẳng thức trên:
   $$-a < -b < 0 < b < a.$$

**Ví dụ số minh họa:**  
Chọn $a = 7$ và $b = 3$ (rõ ràng $7 > 3 > 0$):  
Ta có thứ tự tăng dần: $-7 < -3 < 0 < 3 < 7.$
</details>

---

### Bài nâng cao 4. Đếm số phần tử trong khoảng đối xứng
a) Có bao nhiêu số nguyên $x$ thỏa mãn $-2028 \le x \le 2028$?  
b) Trong các số đó, có bao nhiêu số nguyên âm, bao nhiêu số nguyên dương?

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 4</strong></summary>

**Lời giải:**
a) Tập hợp các số nguyên $x$ thỏa mãn là:
$$X = \{-2028; -2027; \dots; -1;\; 0;\; 1;\; \dots; 2027; 2028\}.$$

Công thức tính số phần tử của dãy số nguyên cách đều $1$ đơn vị:
$$\text{Số lượng} = \frac{\text{Số cuối} - \text{Số đầu}}{\text{Khoảng cách}} + 1 = \frac{2028 - (-2028)}{1} + 1 = 4056 + 1 = 4057\text{ (số)}.$$

b) Phân loại cấu trúc tập hợp $X$:
- **Nhóm số nguyên âm:** Gồm các số từ $-2028$ đến $-1$, có:
  $$(-1) - (-2028) + 1 = 2028\text{ (số nguyên âm)}.$$
- **Số $0$:** Có đúng $1$ số.
- **Nhóm số nguyên dương:** Gồm các số từ $1$ đến $2028$, có:
  $$2028 - 1 + 1 = 2028\text{ (số nguyên dương)}.$$

Tổng cộng: $2028 + 1 + 2028 = 4057$ số (khớp hoàn toàn với câu a).
</details>

---

### Bài nâng cao 5. Bài toán logic xếp hạng điểm số
Trong một cuộc thi kiến thức mini, mỗi câu trả lời đúng được cộng điểm, trả lời sai bị trừ điểm. Kết thúc vòng thi, ban tổ chức ghi nhận điểm số của 4 bạn: An, Bình, Cường và Dũng.  
Biết rằng:
- Bạn An có số điểm cao hơn bạn Bình;
- Bạn Cường có số điểm thấp hơn bạn Bình;
- Bạn Dũng có số điểm cao hơn bạn An;
- Điểm số của bạn Bình bằng $0$.

a) Bạn nào chắc chắn có điểm là số nguyên âm?  
b) Hãy sắp xếp tên 4 bạn theo thứ tự điểm số từ thấp đến cao.  
c) Giả sử bạn Én tham gia cuộc thi và có số điểm đúng bằng số đối của điểm bạn Dũng. Hãy xác định vị trí điểm số của bạn Én trên bảng xếp hạng so với các bạn còn lại.

<details>
<summary><strong>Xem lời giải chi tiết Bài nâng cao 5</strong></summary>

**Lời giải:**  
Ký hiệu điểm số của mỗi bạn bằng chữ cái đầu tên: $A, B, C, D, E.$  
Theo giả thiết:
- Điểm của Bình: $B = 0.$
- An cao hơn Bình: $A > B \implies A > 0$ ($A$ là số nguyên dương).
- Cường thấp hơn Bình: $C < B \implies C < 0$ ($C$ là số nguyên âm).
- Dũng cao hơn An: $D > A > 0$ ($D$ là số nguyên dương lớn hơn $A$).

**a) Bạn có điểm âm:**  
Vì $C < 0$ nên **bạn Cường chắc chắn có điểm là số nguyên âm.**

**b) Thứ tự điểm từ thấp đến cao:**  
Kết hợp các so sánh trên:
$$C < B < A < D.$$
Thứ tự điểm tăng dần là: **Cường < Bình < An < Dũng.**

**c) Vị trí điểm của bạn Én:**  
Điểm của Én bằng số đối của điểm Dũng: $E = -D.$  
Vì $D$ là số nguyên dương cao nhất ($D > A > 0$), nên số đối của nó là một số nguyên âm rất bé:
$$D > 0 \implies -D < 0.$$
Đặc biệt, nếu $D$ có giá trị tuyệt đối lớn hơn hoặc bằng các số còn lại, điểm $E = -D$ sẽ nằm ở vị trí thấp hơn $0$.  
Nếu $D$ lớn hơn điểm dương của các bạn, thì $-D$ sẽ nằm lùi về cực bên trái trục số (tùy thuộc vào việc so sánh cụ thể giữa $-D$ và $C$). Nhưng chắc chắn $E$ là một số nguyên âm ($E < 0$).
</details>

---

## 4. Bảng tổng kết ghi nhớ bài học

<div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
  <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 12px; color: #0f172a;">CẨM NANG GHI NHỚ TOÁN 6 - BÀI 13</div>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #334155;">
    <li><strong>Tập hợp Z:</strong> $\mathbb{Z} = \{\dots; -3; -2; -1;\; 0;\; 1;\; 2;\; 3; \dots\}.$ Bao gồm số nguyên âm, số $0$ và số nguyên dương.</li>
    <li><strong>Mối quan hệ:</strong> $\mathbb{N} \subset \mathbb{Z}.$ Số $0$ là trung lập (không âm, không dương).</li>
    <li><strong>Trục số:</strong> Điểm nằm bên trái luôn nhỏ hơn điểm nằm bên phải.</li>
    <li><strong>Quy tắc so sánh:</strong>
      <br>&bull; $\text{Số âm} < 0 < \text{Số dương}.$
      <br>&bull; Với hai số âm: $a > b > 0 \implies -a < -b.$ Số nào có phần tự nhiên lớn hơn thì lại nhỏ hơn.
    </li>
    <li><strong>Số đặc biệt:</strong> Số nguyên âm lớn nhất là $-1$; số nguyên dương nhỏ nhất là $1.$</li>
  </ul>
</div>
