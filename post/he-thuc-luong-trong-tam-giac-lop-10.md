---
title: 'Hệ Thức Lượng Trong Tam Giác Lớp 10 Đầy Đủ Công Thức và Các Dạng Bài'
description: 'Tóm tắt toàn bộ công thức hệ thức lượng trong tam giác lớp 10: định lý Cosin, định lý Sin, độ dài trung tuyến, phân giác, diện tích tam giác và các dạng toán có lời giải.'
category: Toán học
type: Bài học
date: '2024-10-02'
tags:
- Hệ thức lượng
- Tam giác
- Định lý Cosin
- Toán 10
grade: 10
---

**Hệ thức lượng trong tam giác** là một trong những nội dung trọng tâm của chương trình [Toán lớp 10](/lop-10.html). Chuyên đề này liên kết chặt chẽ giữa hình học thuần túy và lượng giác, đóng vai trò nền tảng để giải quyết các bài toán thực tế (đo đạc khoảng cách, chiều cao, định vị) cũng như các câu hỏi phân loại trong đề thi học kì và đề thi tốt nghiệp THPT.

Dưới đây là bảng tổng hợp toàn bộ lý thuyết, công thức tính nhanh và phương pháp giải 3 dạng toán điển hình kèm lời giải chi tiết.

---

## 1. Bảng tra cứu nhanh toàn bộ công thức hệ thức lượng

| Tên định lý / Công thức | Hệ thức toán học | Ý nghĩa & Ứng dụng |
| :--- | :--- | :--- |
| **Định lý Cosin** | $a^2 = b^2 + c^2 - 2bc\cos A$<br>$b^2 = c^2 + a^2 - 2ca\cos B$<br>$c^2 = a^2 + b^2 - 2ab\cos C$ | Tính một cạnh khi biết 2 cạnh và góc xen giữa; tính góc khi biết 3 cạnh |
| **Hệ quả định lý Cosin** | $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$<br>$\cos B = \dfrac{a^2 + c^2 - b^2}{2ac}$<br>$\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}$ | Tính số đo các góc của tam giác |
| **Định lý Sin** | $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$ | Tính bán kính đường tròn ngoại tiếp $R$; tính cạnh khi biết 1 cạnh và 2 góc |
| **Độ dài đường trung tuyến** | $m_a^2 = \dfrac{b^2 + c^2}{2} - \dfrac{a^2}{4}$<br>$m_b^2 = \dfrac{a^2 + c^2}{2} - \dfrac{b^2}{4}$<br>$m_c^2 = \dfrac{a^2 + b^2}{2} - \dfrac{c^2}{4}$ | Tính độ dài trung tuyến kẻ từ đỉnh $A, B, C$ |
| **Độ dài đường phân giác trong** | $l_a = \dfrac{2bc\cos \frac{A}{2}}{b+c}$<br>$l_b = \dfrac{2ac\cos \frac{B}{2}}{a+c}$<br>$l_c = \dfrac{2ab\cos \frac{C}{2}}{a+b}$ | Tính độ dài các đường phân giác trong |
| **5 Công thức diện tích tam giác** | 1. $S = \dfrac{1}{2}ah_a = \dfrac{1}{2}bh_b = \dfrac{1}{2}ch_c$<br>2. $S = \dfrac{1}{2}ab\sin C = \dfrac{1}{2}bc\sin A = \dfrac{1}{2}ca\sin B$<br>3. $S = \dfrac{abc}{4R}$<br>4. $S = pr$ (với $p = \dfrac{a+b+c}{2}$)<br>5. $S = \sqrt{p(p-a)(p-b)(p-c)}$ (Công thức Heron) | Tính diện tích tam giác linh hoạt tùy theo các yếu tố đã biết |

---

## 2. Hệ thống lý thuyết trọng tâm

### 2.1. Quy ước các kí hiệu trong tam giác $ABC$

![Hệ thức lượng trong tam giác lớp 10](assets/images/he-thuc-luong-trong-tam-giac-lop-10-he-thuc-luong-trong-tam-giac-o2.png)

- $A, B, C$: Số đo các góc tại các đỉnh $A, B, C$.
- $a, b, c$: Độ dài các cạnh đối diện với các đỉnh $A, B, C$ (tương ứng là $BC, CA, AB$).
- $h_a, h_b, h_c$: Độ dài các đường cao hạ từ các đỉnh $A, B, C$.
- $m_a, m_b, m_c$: Độ dài các đường trung tuyến kẻ từ $A, B, C$.
- $l_a, l_b, l_c$: Độ dài các đường phân giác trong kẻ từ $A, B, C$.
- $R$: Bán kính đường tròn ngoại tiếp tam giác $ABC$.
- $r$: Bán kính đường tròn nội tiếp tam giác $ABC$.
- $p = \dfrac{a+b+c}{2}$: Nửa chu vi tam giác $ABC$.
- $S$: Diện tích tam giác $ABC$.

### 2.2. Các hệ thức lượng trong tam giác vuông (Ôn tập)

Cho tam giác $ABC$ vuông tại $A$, đường cao $AH = h$. Gọi $b' = AC'$, $c' = AB'$ là hình chiếu vuông góc của các cạnh góc vuông $b, c$ lên cạnh huyền $a = BC$:

![Hệ thức lượng trong tam giác vuông](assets/images/he-thuc-luong-trong-tam-giac-lop-10-he-thuc-luong-trong-tam-giac-vuong.png)

1. $b^2 = a \cdot b'$ và $c^2 = a \cdot c'$
2. $a^2 = b^2 + c^2$ (Định lý Pythagoras)
3. $h^2 = b' \cdot c'$
4. $\dfrac{1}{h^2} = \dfrac{1}{b^2} + \dfrac{1}{c^2}$
5. $a \cdot h = b \cdot c$
6. $b = a\sin B = a\cos C = c\tan B = c\cot C$
7. $c = a\sin C = a\cos B = b\tan C = b\cot B$

---

## 3. Các dạng toán hệ thức lượng thường gặp và Phương pháp giải

### Dạng 1: Chứng minh đẳng thức lượng giác trong tam giác

**Phương pháp giải:**
- **Cách 1:** Biến đổi một vế (thường là vế phức tạp) về vế còn lại bằng cách áp dụng các công thức lượng giác cơ bản: công thức biến đổi tổng thành tích, tích thành tổng, nhân đôi, góc bù, góc phụ ($A+B+C = 180^\circ \Rightarrow A+B = 180^\circ - C$).
- **Cách 2:** Biến đổi đẳng thức cần chứng minh tương đương với một đẳng thức luôn đúng.

#### Ví dụ minh họa 1
Cho tam giác $ABC$. Chứng minh rằng:
$$\sin A + \sin B + \sin C = 4\cos \dfrac{A}{2}\cos \dfrac{B}{2}\cos \dfrac{C}{2}$$

**Lời giải chi tiết:**
Áp dụng công thức biến đổi tổng thành tích cho hai số hạng đầu:
$$\sin A + \sin B = 2\sin \dfrac{A+B}{2}\cos \dfrac{A-B}{2}$$

Vì $A+B+C = 180^\circ \Rightarrow \dfrac{A+B}{2} = 90^\circ - \dfrac{C}{2}$, suy ra $\sin \dfrac{A+B}{2} = \cos \dfrac{C}{2}$.

Mặt khác, khai triển $\sin C = 2\sin \dfrac{C}{2}\cos \dfrac{C}{2}$. Ta có vế trái:
$$\begin{aligned}
\text{VT} &= 2\cos \dfrac{C}{2}\cos \dfrac{A-B}{2} + 2\sin \dfrac{C}{2}\cos \dfrac{C}{2} \\
&= 2\cos \dfrac{C}{2} \left[ \cos \dfrac{A-B}{2} + \sin \dfrac{C}{2} \right]
\end{aligned}$$

Do $\sin \dfrac{C}{2} = \cos \dfrac{A+B}{2}$, thay vào biểu thức:
$$\begin{aligned}
\text{VT} &= 2\cos \dfrac{C}{2} \left[ \cos \dfrac{A-B}{2} + \cos \dfrac{A+B}{2} \right] \\
&= 2\cos \dfrac{C}{2} \cdot 2\cos \dfrac{A}{2}\cos \dfrac{B}{2} \\
&= 4\cos \dfrac{A}{2}\cos \dfrac{B}{2}\cos \dfrac{C}{2} = \text{VP} \text{ (đpcm)}.
\end{aligned}$$

#### Ví dụ minh họa 2
Cho tam giác $ABC$ không vuông. Chứng minh rằng:
$$\tan A + \tan B + \tan C = \tan A \cdot \tan B \cdot \tan C$$

**Lời giải chi tiết:**
Vì $A + B + C = 180^\circ \Rightarrow A + B = 180^\circ - C$, do đó:
$$\tan(A + B) = \tan(180^\circ - C) = -\tan C$$

Áp dụng công thức cộng cho $\tan(A+B)$:
$$\dfrac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$$
$$\Leftrightarrow \tan A + \tan B = -\tan C(1 - \tan A\tan B) = -\tan C + \tan A\tan B\tan C$$
$$\Leftrightarrow \tan A + \tan B + \tan C = \tan A \cdot \tan B \cdot \tan C \text{ (đpcm)}.$$

---

### Dạng 2: Chứng minh bất đẳng thức lượng giác trong tam giác

**Phương pháp giải:**
- Sử dụng các bất đẳng thức đại số kinh điển như BĐT Cauchy (AM-GM), BĐT Bunhiacopxki (Cauchy-Schwarz).
- Khảo sát hàm số hoặc đưa về tam thức bậc hai theo một biến lượng giác ($\cos \dfrac{A}{2}, \sin \dfrac{A}{2},\dots$) với điều kiện biệt thức $\Delta \le 0$.

#### Ví dụ minh họa
Cho tam giác $ABC$. Chứng minh rằng:
$$\sin \dfrac{A}{2}\sin \dfrac{B}{2}\sin \dfrac{C}{2} \le \dfrac{1}{8}$$

**Lời giải chi tiết:**
Biến đổi tích thành tổng cho hai thừa số đầu:
$$\begin{aligned}
P &= \sin \dfrac{A}{2}\sin \dfrac{B}{2}\sin \dfrac{C}{2} = \dfrac{1}{2}\left[\cos \dfrac{A-B}{2} - \cos \dfrac{A+B}{2}\right]\sin \dfrac{C}{2} \\
&= \dfrac{1}{2}\left[\cos \dfrac{A-B}{2} - \sin \dfrac{C}{2}\right]\sin \dfrac{C}{2} \quad \left(\text{do } \cos \dfrac{A+B}{2} = \sin \dfrac{C}{2}\right) \\
&= -\dfrac{1}{2}\sin^2 \dfrac{C}{2} + \dfrac{1}{2}\cos \dfrac{A-B}{2}\sin \dfrac{C}{2}
\end{aligned}$$

Đưa về dạng bình phương hoàn chỉnh:
$$P = -\dfrac{1}{2}\left( \sin \dfrac{C}{2} - \dfrac{1}{2}\cos \dfrac{A-B}{2} \right)^2 + \dfrac{1}{8}\cos^2 \dfrac{A-B}{2}$$

Vì $\cos^2 \dfrac{A-B}{2} \le 1$ và $-\dfrac{1}{2}\left( \sin \dfrac{C}{2} - \dfrac{1}{2}\cos \dfrac{A-B}{2} \right)^2 \le 0$, ta có:
$$P \le \dfrac{1}{8}$$
Dấu đẳng thức xảy ra khi và chỉ khi $\cos \dfrac{A-B}{2} = 1 \Rightarrow A = B$ và $\sin \dfrac{C}{2} = \dfrac{1}{2} \Rightarrow C = 60^\circ \Rightarrow A = B = C = 60^\circ$ (tam giác $ABC$ đều).

---

### Dạng 3: Nhận dạng tam giác (Vuông, Cân, Đều)

**Phương pháp giải:**
Chuyển đổi giả thiết của bài toán bằng các định lý Sin, Cosin hoặc công thức lượng giác về mối quan hệ giữa các cạnh ($a, b, c$) hoặc các góc ($A, B, C$):
- Nếu dẫn đến $a = b$ hoặc $A = B$: Tam giác cân tại $C$.
- Nếu dẫn đến $a^2 + b^2 = c^2$ hoặc $A = 90^\circ$: Tam giác vuông.
- Nếu dẫn đến $a = b = c$ hoặc $A = B = C = 60^\circ$: Tam giác đều.

#### Ví dụ minh họa 1
Nhận dạng tam giác $ABC$ biết:
$$\dfrac{\sin A + \cos B}{\sin B + \cos A} = \tan A$$

**Lời giải chi tiết:**
Điều kiện xác định: $\cos A \ne 0$ và $\sin B + \cos A \ne 0$.
Quy đồng và nhân chéo:
$$\begin{aligned}
\sin A + \cos B &= \dfrac{\sin A}{\cos A}(\sin B + \cos A) \\
\Leftrightarrow \cos A(\sin A + \cos B) &= \sin A(\sin B + \cos A) \\
\Leftrightarrow \sin A\cos A + \cos A\cos B &= \sin A\sin B + \sin A\cos A \\
\Leftrightarrow \cos A\cos B - \sin A\sin B &= 0 \\
\Leftrightarrow \cos(A + B) &= 0
\end{aligned}$$

Vì trong tam giác $ABC$, $0^\circ < A + B < 180^\circ$, do đó:
$$\cos(A + B) = 0 \Leftrightarrow A + B = 90^\circ \Rightarrow C = 90^\circ$$

Vậy tam giác $ABC$ là **tam giác vuông tại $C$**.

#### Ví dụ minh họa 2
Chứng minh rằng nếu tam giác $ABC$ thỏa mãn điều kiện sau thì tam giác đó là tam giác cân:
$$\tan A + \tan B = 2\cot \dfrac{C}{2}$$

**Lời giải chi tiết:**
Ta có:
$$\text{VT} = \tan A + \tan B = \dfrac{\sin(A+B)}{\cos A\cos B} = \dfrac{\sin C}{\cos A\cos B}$$
Mặt khác:
$$\text{VP} = 2\cot \dfrac{C}{2} = 2\dfrac{\cos \frac{C}{2}}{\sin \frac{C}{2}} = \dfrac{2\cos^2 \frac{C}{2}}{\sin \frac{C}{2}\cos \frac{C}{2}} = \dfrac{1 + \cos C}{\frac{1}{2}\sin C} = \dfrac{2(1 + \cos C)}{\sin C}$$

Đẳng thức tương đương:
$$\dfrac{\sin C}{\cos A\cos B} = \dfrac{2\cos \frac{C}{2}}{\sin \frac{C}{2}} = \dfrac{2\sin \frac{A+B}{2}}{\cos \frac{A+B}{2}}$$

Biến đổi và thu gọn đưa về:
$$\cos(A - B) = 1 \Leftrightarrow A = B$$
Vậy tam giác $ABC$ **cân tại $C$**.

---

## 4. Bài tập tự luyện có hướng dẫn

**Bài 1:** Cho tam giác $ABC$ có $a = 7$, $b = 8$, $c = 5$.
1. Tính số đo góc $A$ của tam giác. *(Đáp số: $\cos A = \dfrac{8^2 + 5^2 - 7^2}{2 \times 8 \times 5} = \dfrac{40}{80} = \dfrac{1}{2} \Rightarrow A = 60^\circ$)*.
2. Tính diện tích tam giác $ABC$. *(Đáp số: $S = \dfrac{1}{2}bc\sin A = \dfrac{1}{2} \times 8 \times 5 \times \dfrac{\sqrt{3}}{2} = 10\sqrt{3}$)*.
3. Tính bán kính đường tròn ngoại tiếp $R$ và nội tiếp $r$. *(Đáp số: $R = \dfrac{a}{2\sin A} = \dfrac{7}{\sqrt{3}} = \dfrac{7\sqrt{3}}{3}$; $p = 10 \Rightarrow r = \dfrac{S}{p} = \sqrt{3}$)*.

**Bài 2:** Cho tam giác $ABC$ thỏa mãn $\sin^2 A = \sin B \cdot \sin C$ và $b + c = 2a$. Chứng minh tam giác $ABC$ là tam giác đều.
