---
title: 'Toán 7 Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác'
description: 'Làm chủ lý thuyết trực tâm và tâm đường tròn ngoại tiếp Toán 7 Bài 35: Tính chất ba đường trung trực, ba đường cao, vị trí trực tâm trong tam giác nhọn, vuông, tù, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Đường trung trực
  - Tâm đường tròn ngoại tiếp
  - Đường cao
  - Trực tâm
  - Kết nối tri thức
grade: 7
---

# Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác

Nếu ở Bài 34, chúng ta đã chiêm ngưỡng sự hội tụ của ba đường trung tuyến tại **Trọng tâm $G$** và ba đường phân giác tại **Tâm nội tiếp $I$**, thì bức tranh hình học tam giác sẽ chỉ thực sự hoàn hảo khi chúng ta khám phá hai điểm kỳ diệu còn lại:
1. **Tâm đường tròn ngoại tiếp ($O$)** — điểm giao nhau của ba đường trung trực, điểm cách đều cả ba đỉnh của tam giác.
2. **Trực tâm ($H$)** — điểm đồng quy của ba đường cao vuông góc.

Từ bài toán tìm vị trí đặt trạm cấp cứu hay bệnh viện dã chiến cách đều ba khu dân cư, cho đến việc xác định tâm bão trên biển Đông qua tín hiệu của ba trạm radar ven bờ, sự đồng quy của ba đường trung trực và ba đường cao chính là nền tảng hình học của các thuật toán định vị hiện đại nhất thế giới.

Hãy cùng bước vào Bài 35 để hoàn thiện bản giao hưởng của bốn điểm đặc biệt kinh điển trong hình học tam giác!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 35: TÂM NGOẠI TIẾP VÀ TRỰC TÂM</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Ba đường Trung trực & Tâm ngoại tiếp O</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vuông góc tại trung điểm của mỗi cạnh.<br>• Ba đường trung trực đồng quy tại $O$.<br>• Điểm $O$ <strong>cách đều ba đỉnh</strong>:<br>  $$OA = OB = OC = R$$<br>• $O$ là tâm đường tròn ngoại tiếp tam giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Vị trí Tâm O theo loại tam giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tam giác nhọn:</strong> $O$ nằm bên trong tam giác.<br>• <strong>Tam giác vuông:</strong> $O$ là <strong>trung điểm cạnh huyền</strong> ($R = \frac{BC}{2}$).<br>• <strong>Tam giác tù:</strong> $O$ nằm bên ngoài tam giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">3. Ba đường Cao & Trực tâm H</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đoạn vuông góc kẻ từ đỉnh đến cạnh đối diện.<br>• Ba đường cao đồng quy tại điểm $H$ (<strong>Trực tâm</strong>).<br>• <strong>Tam giác vuông:</strong> Trực tâm trùng đỉnh góc vuông!<br>• <strong>Tam giác tù:</strong> Trực tâm nằm ngoài tam giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tam giác Cân & Đều</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong tam giác cân: Bốn điểm $G, I, O, H$ cùng nằm trên đường trung trực cạnh đáy.<br>• Trong <strong>tam giác đều</strong>: Cả 4 điểm $G, I, O, H$ <strong>trùng nhau làm một</strong>!</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm đường trung trực:** Đường trung trực của một đoạn thẳng có hai tính chất gì đối với đoạn thẳng đó?
2. **Khái niệm đường cao:** Đường cao của tam giác xuất phát từ một đỉnh có quan hệ như thế nào với cạnh đối diện?
3. **Trung điểm cạnh huyền:** Trong tam giác vuông $ABC$ vuông tại $A$, trung điểm $M$ của cạnh huyền $BC$ có cách đều ba đỉnh $A, B, C$ không?
4. **Góc vuông:** Hai đường thẳng $AH$ và $BC$ vuông góc với nhau tạo thành góc bao nhiêu độ?
5. **Đường cao tam giác vuông:** Trong tam giác vuông $ABC$ vuông tại $A$, hai cạnh góc vuông $AB$ và $AC$ có phải là hai đường cao của tam giác không?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Đi qua trung điểm và vuông góc với đoạn thẳng.
> 2. Đoạn thẳng kẻ từ đỉnh và vuông góc với cạnh đối diện.
> 3. Có, vì trong tam giác vuông đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền ($MA = MB = MC = \frac{BC}{2}$).
> 4. Góc vuông $90^\circ$.
> 5. Đúng vậy, $AB$ là đường cao ứng với cạnh $AC$, còn $AC$ là đường cao ứng với cạnh $AB$.

---

## I. Lý thuyết Trọng tâm

### 1. Sự đồng quy của ba đường trung trực — Tâm đường tròn ngoại tiếp

#### a) Định nghĩa đường trung trực của tam giác
Trong một tam giác, đường trung trực của mỗi cạnh được gọi là một **đường trung trực của tam giác**. Mỗi tam giác có đúng **3 đường trung trực**.

#### b) Định lý về sự đồng quy

> [!IMPORTANT]
> **ĐỊNH LÝ TÂM NGOẠI TIẾP (CIRCUMCENTER THEOREM):**
> Ba đường trung trực của một tam giác cùng đi qua một điểm (đồng quy tại một điểm).
> Điểm gặp nhau này **cách đều ba đỉnh** của tam giác:
> $$OA = OB = OC = R$$
> 
> *Ý nghĩa hình học:* Điểm $O$ chính là **tâm của đường tròn ngoại tiếp** tam giác (đường tròn đi qua cả ba đỉnh của tam giác, bán kính $R = OA$).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Ba đường trung trực đồng quy tại tâm đường tròn ngoại tiếp O">
    <!-- Đường tròn ngoại tiếp (260, 140), R = 115 -->
    <circle cx="260" cy="140" r="115" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    
    <!-- Tam giác ABC nội tiếp -->
    <polygon points="260,25 155,200 375,190" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
    <circle cx="260" cy="25" r="5" fill="#2563eb" />
    <circle cx="155" cy="200" r="5" fill="#2563eb" />
    <circle cx="375" cy="190" r="5" fill="#2563eb" />
    <text x="255" y="15" font-size="16" font-weight="700" fill="#1e293b">A</text>
    <text x="135" y="210" font-size="16" font-weight="700" fill="#1e293b">B</text>
    <text x="385" y="200" font-size="16" font-weight="700" fill="#1e293b">C</text>

    <!-- Tâm O (260, 140) -->
    <circle cx="260" cy="140" r="5" fill="#dc2626" />
    <text x="270" y="145" font-size="15" font-weight="700" fill="#dc2626">O (Tâm ngoại tiếp)</text>

    <!-- Bán kính R -->
    <line x1="260" y1="140" x2="260" y2="25" stroke="#dc2626" stroke-width="1.5" />
    <line x1="260" y1="140" x2="155" y2="200" stroke="#dc2626" stroke-width="1.5" />
    <line x1="260" y1="140" x2="375" y2="190" stroke="#dc2626" stroke-width="1.5" />
    <text x="200" y="165" font-size="13" font-weight="700" fill="#dc2626">R</text>

    <!-- Ba đường trung trực nét xanh lá -->
    <line x1="260" y1="0" x2="260" y2="250" stroke="#059669" stroke-width="1.5" />
  </svg>
</div>

#### c) Vị trí của tâm ngoại tiếp $O$ đối với tam giác:
- **Tam giác nhọn:** Tâm $O$ nằm **bên trong** tam giác.
- **Tam giác vuông:** Tâm $O$ chính là **trung điểm của cạnh huyền** ($R = \frac{\text{Cạnh huyền}}{2}$).
- **Tam giác tù:** Tâm $O$ nằm **bên ngoài** tam giác.

---

### 2. Sự đồng quy của ba đường cao — Trực tâm tam giác

#### a) Định nghĩa đường cao trong tam giác
Đoạn thẳng vuông góc kẻ từ một đỉnh đến đường thẳng chứa cạnh đối diện gọi là một **đường cao** của tam giác đó.
Mỗi tam giác có đúng **3 đường cao**.

#### b) Định lý về sự đồng quy của ba đường cao

> [!IMPORTANT]
> **ĐỊNH LÝ TRỰC TÂM (ORTHOCENTER THEOREM):**
> Ba đường cao của một tam giác cùng đi qua một điểm (đồng quy tại một điểm).
> Điểm gặp nhau này được gọi là **trực tâm** của tam giác, thường kí hiệu là $H$.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 2: Ba đường cao đồng quy tại Trực tâm H">
    <!-- Tam giác ABC -->
    <polygon points="190,30 50,220 450,220" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    <text x="185" y="20" font-size="16" font-weight="700" fill="#1e293b">A</text>
    <text x="30" y="235" font-size="16" font-weight="700" fill="#1e293b">B</text>
    <text x="460" y="235" font-size="16" font-weight="700" fill="#1e293b">C</text>

    <!-- Ba đường cao AD, BE, CF -->
    <line x1="190" y1="30" x2="190" y2="220" stroke="#2563eb" stroke-width="2" />
    <circle cx="190" cy="220" r="3" fill="#2563eb" />
    <text x="185" y="240" font-size="14" font-weight="600" fill="#2563eb">D</text>

    <line x1="50" y1="220" x2="280" y2="95" stroke="#2563eb" stroke-width="2" />
    <circle cx="280" cy="95" r="3" fill="#2563eb" />
    <text x="290" y="90" font-size="14" font-weight="600" fill="#2563eb">E</text>

    <line x1="450" y1="220" x2="135" y2="105" stroke="#2563eb" stroke-width="2" />
    <circle cx="135" cy="105" r="3" fill="#2563eb" />
    <text x="115" y="105" font-size="14" font-weight="600" fill="#2563eb">F</text>

    <!-- Trực tâm H (190, 137) -->
    <circle cx="190" cy="137" r="6" fill="#e11d48" />
    <text x="200" y="142" font-size="16" font-weight="700" fill="#e11d48">H (Trực tâm)</text>
  </svg>
</div>

#### c) Vị trí của trực tâm $H$ đối với tam giác:
- **Tam giác nhọn:** Trực tâm $H$ nằm **bên trong** tam giác.
- **Tam giác vuông:** Trực tâm $H$ **trùng với đỉnh góc vuông** (vì hai cạnh góc vuông chính là hai đường cao!).
- **Tam giác tù:** Trực tâm $H$ nằm **bên ngoài** tam giác.

---

### 3. Bảng Tổng kết 4 Điểm Kỳ diệu trong Tam giác

| Điểm đặc biệt | Kí hiệu | Giao điểm của 3 đường | Tính chất cốt lõi | Vị trí trong tam giác vuông |
| :--- | :---: | :--- | :--- | :--- |
| **Trọng tâm** | $G$ | 3 đường trung tuyến | Tỉ lệ khoảng cách $\frac{2}{3}$, chia 3 diện tích bằng nhau | Nằm trên đường trung tuyến ứng cạnh huyền |
| **Tâm nội tiếp** | $I$ | 3 đường phân giác | **Cách đều ba cạnh** (tiếp xúc trong 3 cạnh) | Luôn nằm bên trong tam giác |
| **Tâm ngoại tiếp**| $O$ | 3 đường trung trực | **Cách đều ba đỉnh** (đi qua 3 đỉnh) | **Trùng trung điểm cạnh huyền** |
| **Trực tâm** | $H$ | 3 đường cao | Ba đường vuông góc đồng quy | **Trùng đỉnh góc vuông** |

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Xác định trực tâm và chứng minh hai đường thẳng vuông góc

**Phương pháp giải:**
Muốn chứng minh đường thẳng $d$ vuông góc với cạnh $BC$:
1. Chứng minh điểm $H$ nằm trên đường thẳng $d$ là giao điểm của **hai đường cao** khác của tam giác.
2. Suy ra $H$ là **trực tâm** của tam giác.
3. Khi đó đường thẳng đi qua đỉnh thứ ba và $H$ bắt buộc phải là đường cao thứ ba $\implies$ Vuông góc với cạnh đối diện.

---

#### Bài toán 1:
Cho tam giác $ABC$ nhọn. Vẽ hai đường cao $BD$ ($D \in AC$) và $CE$ ($E \in AB$). Gọi $H$ là giao điểm của $BD$ và $CE$.
a) Điểm $H$ là điểm gì của tam giác $ABC$?
b) Đoạn thẳng $AH$ kéo dài cắt cạnh $BC$ tại $F$. Chứng minh rằng: $AF \perp BC$.

**Lời giải:**

a) Xét tam giác $ABC$:
- $BD \perp AC$ nên $BD$ là đường cao xuất phát từ đỉnh $B$.
- $CE \perp AB$ nên $CE$ là đường cao xuất phát từ đỉnh $C$.
- Điểm $H$ là giao điểm của hai đường cao $BD$ và $CE$.
Theo định lý về sự đồng quy của ba đường cao, $H$ chính là **trực tâm của tam giác $ABC$**.

b) Vì $H$ là trực tâm của tam giác $ABC$ nên đường thẳng đi qua đỉnh $A$ và trực tâm $H$ chính là đường cao thứ ba của tam giác $ABC$.
Đoạn thẳng $AF$ đi qua đỉnh $A$ và trực tâm $H$, cắt cạnh $BC$ tại $F$.
Do đó, $AF$ là đường cao của tam giác $ABC$ $\implies AF \perp BC$ tại $F$ (điều phải chứng minh).

---

### Dạng 2: Bài toán về Tâm đường tròn ngoại tiếp

**Phương pháp giải:**
1. Điểm cách đều ba đỉnh $A, B, C$ là tâm ngoại tiếp $O$ (giao điểm 3 đường trung trực).
2. Trong tam giác vuông, tâm ngoại tiếp là trung điểm cạnh huyền: $OA = OB = OC = \frac{BC}{2}$.

---

#### Bài toán 2:
Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\text{ cm}$ và $AC = 8\text{ cm}$.
a) Tính độ dài cạnh huyền $BC$.
b) Gọi $M$ là trung điểm của cạnh huyền $BC$. Chứng minh rằng điểm $M$ cách đều ba đỉnh $A, B, C$.
c) Tính bán kính đường tròn ngoại tiếp tam giác $ABC$.

**Lời giải:**

a) Tam giác $ABC$ vuông tại $A$. Áp dụng định lý Pythagore:
$$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$$
$$\implies BC = \sqrt{100} = 10\text{ (cm)}$$

b) Xét tam giác vuông $ABC$ vuông tại $A$:
Đoạn thẳng $AM$ nối đỉnh góc vuông với trung điểm cạnh huyền $BC$ là **đường trung tuyến ứng với cạnh huyền**.
Theo định lý đường trung tuyến trong tam giác vuông:
$$AM = \frac{1}{2} BC$$
Mặt khác, vì $M$ là trung điểm của $BC$ nên:
$$MB = MC = \frac{1}{2} BC$$
Do đó:
$$MA = MB = MC = \frac{1}{2} BC = \frac{10}{2} = 5\text{ (cm)}$$
Vậy điểm $M$ cách đều cả ba đỉnh $A, B, C$. Điểm $M$ chính là tâm đường tròn ngoại tiếp tam giác $ABC$.

c) Bán kính đường tròn ngoại tiếp tam giác $ABC$ là:
$$R = MA = 5\text{ (cm)}$$

---

### Dạng 3: Tính các góc liên quan đến trực tâm

**Phương pháp giải:**
Sử dụng tính chất góc nhọn trong tam giác vuông phụ nhau (tổng bằng $90^\circ$) và tứ giác có hai góc vuông đối nhau có tổng bằng $180^\circ$.

---

#### Bài toán 3:
Cho tam giác $ABC$ nhọn có $\widehat{A} = 65^\circ$. Hai đường cao $BD$ và $CE$ cắt nhau tại trực tâm $H$.
Tính số đo của góc $\widehat{BHC}$.

**Lời giải:**

Xét tam giác $ABD$ vuông tại $D$ ($BD \perp AC$):
$$\widehat{ABD} + \widehat{A} = 90^\circ \implies \widehat{ABD} = 90^\circ - 65^\circ = 25^\circ$$
Xét tam giác $BEH$ vuông tại $E$ ($CE \perp AB$):
Góc $\widehat{BHC}$ là góc ngoài tại đỉnh $H$ của tam giác $BEH$:
$$\widehat{BHC} = \widehat{BEH} + \widehat{EBH} = 90^\circ + 25^\circ = 115^\circ$$

*(Cách 2 nhanh hơn:* Xét tứ giác $AEHD$ có góc $\widehat{E} = \widehat{D} = 90^\circ$, suy ra $\widehat{EHD} = 180^\circ - \widehat{A} = 180^\circ - 65^\circ = 115^\circ$. Vì $\widehat{BHC}$ và $\widehat{EHD}$ là hai góc đối đỉnh nên $\widehat{BHC} = 115^\circ$).

---

### Dạng 4: Bài toán quy hoạch vị trí thực tế

**Phương pháp giải:**
- Nếu bài toán yêu cầu tìm điểm **cách đều ba địa điểm (ba đỉnh)** $\to$ Điểm đó là **Tâm đường tròn ngoại tiếp $O$** (giao điểm 3 đường trung trực).
- Nếu bài toán yêu cầu tìm điểm **cách đều ba con đường (ba cạnh)** $\to$ Điểm đó là **Tâm đường tròn nội tiếp $I$** (giao điểm 3 đường phân giác).

---

#### Bài toán 4:
Ba khu dân cư $A, B, C$ nằm ở ba vị trí tạo thành một tam giác nhọn. Ủy ban nhân dân huyện muốn xây dựng một bệnh viện đa khoa trung tâm tại điểm $O$ sao cho khoảng cách từ bệnh viện đến cả ba khu dân cư là hoàn toàn bằng nhau.
a) Điểm $O$ phải là điểm đặc biệt nào của tam giác $ABC$?
b) Nêu cách vẽ bằng thước kẻ và compa để xác định chính xác vị trí của điểm $O$ trên bản đồ địa hình.

**Lời giải:**

a) Theo yêu cầu đề bài, khoảng cách từ bệnh viện $O$ đến ba khu dân cư $A, B, C$ phải bằng nhau:
$$OA = OB = OC$$
Điểm cách đều ba đỉnh của một tam giác chính là **Tâm của đường tròn ngoại tiếp tam giác $ABC$** (giao điểm của ba đường trung trực).

b) Cách dựng vị trí điểm $O$:
- **Bước 1:** Dùng thước thẳng và compa vẽ đường trung trực $d_1$ của đoạn thẳng $AB$.
- **Bước 2:** Vẽ đường trung trực $d_2$ của đoạn thẳng $BC$.
- **Bước 3:** Xác định giao điểm $O$ của hai đường trung trực $d_1$ và $d_2$.
Giao điểm $O$ chính là vị trí cần xây dựng bệnh viện đa khoa trung tâm.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Tam giác đạc Radar và Định vị Tâm bão trên Biển

Khi một cơn bão nhiệt đới di chuyển trên biển Đông, làm thế nào Trung tâm Dự báo Khí tượng Thủy văn Quốc gia định vị chính xác tâm bão?
Ba trạm radar cảnh báo ven bờ biển tại Hải Phòng ($A$), Đà Nẵng ($B$) và Quy Nhơn ($C$) cùng phát sóng quét tín hiệu.
- Nếu sóng phản xạ ghi nhận khoảng cách từ tâm bão đến ba trạm bằng nhau, tâm bão chính là tâm ngoại tiếp của tam giác $ABC$.
- Định lý tâm ngoại tiếp kết hợp sai phân thời gian đến (TDoA) là cốt lõi của công nghệ định vị máy bay hàng không dân dụng ADS-B toàn cầu.

---

### Chuyên đề 2: Lưới Tam giác Voronoi trong Địa tin học (GIS) và Trí tuệ Nhân tạo

Nếu bạn mở Google Maps để tìm *"Cây xăng gần nhất"* hay *"Bệnh viện gần nhất"*, máy chủ máy tính không đo khoảng cách đến từng trạm một. Nó sử dụng **Sơ đồ phân chia Voronoi (Voronoi Diagram)**:
- Mặt phẳng bản đồ được chia thành các ô đa giác tế bào bao quanh mỗi địa điểm.
- Đường ranh giới giữa các ô tế bào chính là **các đường trung trực** của các đoạn thẳng nối hai địa điểm lân cận!
- Điểm nút nơi ba tế bào gặp nhau chính là **Tâm đường tròn ngoại tiếp $O$** của tam giác tạo bởi ba điểm.
Cấu trúc này được ứng dụng trong thuật toán nén bản đồ, phân tích mật độ tế bào ung thư và mô phỏng sự tạo bọt xà phòng trong vật lý phân tử.

---

### Chuyên đề 3: Cấu trúc Tinh thể Kim cương và Tính đối xứng Tứ diện đều

Tại sao kim cương là vật chất cứng nhất trong tự nhiên, trong khi than chì (cũng cấu tạo từ cacbon) lại mềm đến mức viết được lên giấy?
Trong tinh thể kim cương:
- Mỗi nguyên tử cacbon nằm tại **Trực tâm / Trọng tâm** của một tứ diện đều liên kết với 4 nguyên tử cacbon ở 4 đỉnh.
- Trong hình tứ diện đều, cả 4 trục đối xứng, đường cao và trung trực đồng quy tại một điểm duy nhất, triệt tiêu mọi ứng suất cơ học và tạo nên độ cứng tuyệt đối đạt điểm 10/10 trên thang độ cứng Mohs.

---

### Chuyên đề 4: Đường tròn chín điểm Feuerbach (Karl Feuerbach, 1822)

Năm 1822, nhà toán học người Đức Karl Feuerbach đã tìm ra một định lý làm kinh ngạc thế giới:
Trong một tam giác bất kì, tồn tại một đường tròn thần kỳ đi qua đúng **9 điểm đặc biệt**:
1. Ba trung điểm của ba cạnh.
2. Ba chân đường cao của tam giác.
3. Ba trung điểm của các đoạn thẳng nối Trực tâm $H$ với ba đỉnh!
Đường tròn chín điểm này có bán kính đúng bằng một nửa bán kính đường tròn ngoại tiếp ($R_9 = \frac{R}{2}$) và tâm của nó nằm chính giữa đoạn thẳng Euler nối Trực tâm $H$ và Tâm ngoại tiếp $O$.

---

### Chuyên đề 5: Khí động học Tàu lướt Siêu tốc (Hydrofoil)

Các du thuyền cánh ngầm và tàu lướt siêu tốc hiện đại nâng toàn bộ thân tàu lên khỏi mặt nước nhờ 3 cánh ngầm chìm dưới nước tạo thành tam giác nâng đỡ.
- Lực nâng thủy động học tập trung tại **Trực tâm áp suất $H$**.
- Bằng cách điều khiển cánh tà sao cho trực tâm áp suất luôn thẳng hàng theo phương đứng với trọng tâm khối lượng $G$, con tàu lướt trên đầu ngọn sóng với vận tốc $80\text{ km/h}$ êm ái mà không bao giờ bị lật úp.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao",
  "questions": [
    {
      "question": "Giao điểm của ba đường trung trực trong một tam giác là:",
      "options": [
        "Tâm đường tròn ngoại tiếp",
        "Tâm đường tròn nội tiếp",
        "Trực tâm",
        "Trọng tâm"
      ],
      "answer": 0,
      "hint": "Giao điểm này cách đều ba đỉnh của tam giác.",
      "explanation": "Theo định nghĩa, giao điểm của ba đường trung trực trong tam giác là tâm của đường tròn đi qua ba đỉnh (tâm đường tròn ngoại tiếp)."
    },
    {
      "question": "Trực tâm của một tam giác là giao điểm của:",
      "options": [
        "Ba đường trung tuyến",
        "Ba đường phân giác",
        "Ba đường trung trực",
        "Ba đường cao"
      ],
      "answer": 3,
      "hint": "Chữ 'Trực' nghĩa là thẳng đứng, vuông góc.",
      "explanation": "Trực tâm của tam giác là giao điểm của ba đường cao."
    },
    {
      "question": "Trong tam giác vuông, trực tâm của tam giác nằm ở vị trí nào?",
      "options": [
        "Nằm tại trung điểm cạnh huyền",
        "Trùng với đỉnh góc vuông",
        "Nằm bên trong tam giác",
        "Nằm bên ngoài tam giác"
      ],
      "answer": 1,
      "hint": "Hai cạnh góc vuông chính là hai đường cao của tam giác vuông.",
      "explanation": "Trong tam giác vuông, hai cạnh góc vuông là hai đường cao cắt nhau tại đỉnh góc vuông. Do đó trực tâm trùng với đỉnh góc vuông."
    },
    {
      "question": "Tâm đường tròn ngoại tiếp của một tam giác vuông nằm ở:",
      "options": [
        "Đỉnh góc vuông",
        "Trung điểm của cạnh huyền",
        "Bên trong tam giác",
        "Bên ngoài tam giác"
      ],
      "answer": 1,
      "hint": "Đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.",
      "explanation": "Tâm đường tròn ngoại tiếp của tam giác vuông là trung điểm của cạnh huyền."
    },
    {
      "question": "Cho tam giác nhọn ABC có góc A = 70 độ. Hai đường cao BD và CE cắt nhau tại H. Số đo góc BHC bằng:",
      "options": [
        "110 độ",
        "120 độ",
        "140 độ",
        "100 độ"
      ],
      "answer": 0,
      "hint": "Góc BHC = 180 độ - góc A = 180 - 70.",
      "explanation": "Trong tứ giác $AEHD$ có hai góc vuông tại $E$ và $D$, nên $\\widehat{EHD} = 180^\\circ - 70^\\circ = 110^\\circ$. Vì $\\widehat{BHC}$ đối đỉnh với $\\widehat{EHD}$ nên $\\widehat{BHC} = 110^\\circ$."
    },
    {
      "question": "Tam giác có trực tâm nằm bên ngoài tam giác là loại tam giác nào?",
      "options": [
        "Tam giác nhọn",
        "Tam giác vuông",
        "Tam giác tù",
        "Tam giác cân"
      ],
      "answer": 2,
      "hint": "Khi một góc lớn hơn 90 độ, các đường cao hạ từ hai góc nhọn phải kéo dài ra ngoài tam giác.",
      "explanation": "Trong tam giác tù, hai đường cao hạ từ hai đỉnh nhọn nằm bên ngoài tam giác, do đó trực tâm nằm bên ngoài tam giác."
    },
    {
      "question": "Trong một tam giác đều, các điểm Trọng tâm (G), Tâm nội tiếp (I), Tâm ngoại tiếp (O) và Trực tâm (H):",
      "options": [
        "Thẳng hàng nhưng không trùng nhau",
        "Trùng nhau hoàn toàn thành một điểm",
        "Tạo thành một tam giác đều nhỏ hơn",
        "Không có mối liên hệ"
      ],
      "answer": 1,
      "hint": "Tam giác đều có tính đối xứng hoàn hảo.",
      "explanation": "Trong tam giác đều, các đường trung tuyến, phân giác, trung trực và đường cao trùng nhau, do đó 4 điểm $G, I, O, H$ trùng nhau hoàn toàn làm một điểm."
    },
    {
      "question": "Cho tam giác ABC có góc A = 90 độ, AB = 5 cm, AC = 12 cm. Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng:",
      "options": [
        "13 cm",
        "6,5 cm",
        "6 cm",
        "2,5 cm"
      ],
      "answer": 1,
      "hint": "Tính cạnh huyền BC = 13 cm theo Pythagore. R = BC / 2.",
      "explanation": "Cạnh huyền $BC = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$. Bán kính đường tròn ngoại tiếp là $R = \\frac{BC}{2} = \\frac{13}{2} = 6{,}5\\text{ cm}$."
    },
    {
      "question": "Điểm nào sau đây là điểm DUY NHẤT cách đều ba đỉnh của một tam giác?",
      "options": [
        "Trọng tâm",
        "Trực tâm",
        "Tâm đường tròn ngoại tiếp",
        "Tâm đường tròn nội tiếp"
      ],
      "answer": 2,
      "hint": "Khoảng cách từ điểm đó đến A, B, C đều bằng bán kính R.",
      "explanation": "Tâm đường tròn ngoại tiếp $O$ là điểm duy nhất thỏa mãn $OA = OB = OC = R$ (cách đều ba đỉnh)."
    },
    {
      "question": "Đường thẳng Euler trong tam giác đi qua ba điểm đặc biệt nào?",
      "options": [
        "Trọng tâm, Tâm nội tiếp, Trực tâm",
        "Trực tâm, Trọng tâm, Tâm ngoại tiếp",
        "Tâm nội tiếp, Tâm ngoại tiếp, Trực tâm",
        "Tâm nội tiếp, Trọng tâm, Tâm ngoại tiếp"
      ],
      "answer": 1,
      "hint": "Đường thẳng Euler chứa H, G, O theo tỉ lệ HG = 2 GO.",
      "explanation": "Theo định lý Euler (1765), ba điểm Trực tâm ($H$), Trọng tâm ($G$) và Tâm ngoại tiếp ($O$) luôn thẳng hàng trên đường thẳng Euler."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho tam giác $ABC$ cân tại $A$ có $\widehat{A} = 50^\circ$. Đường trung trực của cạnh $AC$ cắt cạnh $BC$ tại điểm $D$.
a) Tính số đo góc $\widehat{B}$ và $\widehat{C}$.
b) Chứng minh rằng tam giác $ADC$ là tam giác cân.
c) Tính số đo góc $\widehat{ADB}$.

### Bài tập 2:
Cho tam giác $ABC$ nhọn. Vẽ đường cao $AH$. Lấy điểm $D$ sao cho $AB$ là đường trung trực của $HD$, lấy điểm $E$ sao cho $AC$ là đường trung trực của $HE$. Đoạn thẳng $DE$ cắt $AB$ tại $I$ và cắt $AC$ tại $K$.
Chứng minh rằng:
a) Tam giác $ADE$ là tam giác cân tại $A$.
b) Ba đường thẳng $AH, BK, CI$ đồng quy tại một điểm (trực tâm của tam giác $ABC$).

### Bài tập 3 (Toán thực tế):
Một hòn đảo du lịch có ba bãi tắm nổi tiếng $A, B, C$ tạo thành một tam giác nhọn. Ban quản lý đảo muốn thả một chiếc phao tiêu cứu hộ gắn đèn hải đăng tại vị trí $O$ trên mặt biển sao cho khoảng cách từ phao cứu hộ đến cả ba bãi tắm là bằng nhau.
a) Chiếc phao tiêu cứu hộ phải được thả tại vị trí nào của tam giác $ABC$?
b) Nếu bãi tắm $A$ và $B$ cách nhau $600\text{ m}$, bãi tắm $A$ và $C$ cách nhau $800\text{ m}$, và góc $\widehat{BAC} = 90^\circ$, hãy tính khoảng cách từ phao cứu hộ $O$ đến mỗi bãi tắm.
