---
title: 'Toán 8 Bài 12: Hình bình hành'
description: 'Khám phá toàn diện hình bình hành Toán 8 Bài 12: Định nghĩa, 3 tính chất về cạnh đối, góc đối, đường chéo, 5 dấu hiệu nhận biết, định lý Varignon, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Hình bình hành
  - Tính chất hình bình hành
  - Dấu hiệu nhận biết hình bình hành
  - Trung điểm đường chéo
  - Kết nối tri thức
grade: 8
---

# Bài 12. Hình bình hành

Hãy nhìn vào chiếc cổng xếp inox co giãn ở cổng trường, giá nâng xe ô tô trong xưởng sửa chữa, hay chiếc đèn bàn học Pixar có thể nâng hạ tùy ý mà chụp đèn vẫn luôn hướng thẳng xuống bàn — tất cả những phát minh cơ học tuyệt vời đó đều hoạt động dựa trên nguyên lý của một hình học kỳ diệu: **Hình bình hành**.

Nếu hình thang chỉ mới có một cặp cạnh đối song song, thì **hình bình hành** bước lên một bậc hoàn thiện cao hơn khi sở hữu **cả hai cặp cạnh đối song song**. Sự đối xứng kép này mang lại cho hình bình hành những tính chất hình học đặc sắc: các cạnh đối bằng nhau, các góc đối bằng nhau và hai đường chéo tự động cắt nhau tại trung điểm của mỗi đường.

Bài học này sẽ giúp các em:
1. Nắm vững định nghĩa và bản chất hình học của **hình bình hành**.
2. Khắc sâu $3$ nhóm tính chất: về cạnh, về góc và về đường chéo (tâm đối xứng).
3. Làm chủ $5$ dấu hiệu nhận biết then chốt để chứng minh một tứ giác là hình bình hành.
4. Vận dụng linh hoạt tính chất trung điểm đường chéo để giải các bài toán chứng minh ba điểm thẳng hàng, đường thẳng đồng quy và định lí Varignon kinh điển.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 12: HÌNH BÌNH HÀNH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tứ giác có <strong>các cạnh đối song song</strong>.<br>• $AB \parallel CD$ và $AD \parallel BC$.<br>• Hình bình hành là một dạng đặc biệt của hình thang (hình thang có 2 cạnh bên song song).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Các tính chất cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Cạnh:</strong> Các cạnh đối bằng nhau ($AB = CD, AD = BC$).<br>• <strong>Góc:</strong> Các góc đối bằng nhau ($\widehat{A} = \widehat{C}, \widehat{B} = \widehat{D}$).<br>• <strong>Đường chéo:</strong> Cắt nhau tại <em>trung điểm</em> của mỗi đường ($OA = OC, OB = OD$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. 5 Dấu hiệu nhận biết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">1. Các cạnh đối song song.<br>2. Các cạnh đối bằng nhau.<br>3. <strong>Một cặp cạnh đối song song VÀ bằng nhau</strong> (cực kì thông dụng).<br>4. Các góc đối bằng nhau.<br>5. Hai đường chéo cắt nhau tại trung điểm mỗi đường.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tâm đối xứng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giao điểm $O$ của hai đường chéo là <strong>tâm đối xứng</strong> của hình bình hành.<br>• Mọi đường thẳng đi qua $O$ đều chia hình bình hành thành hai phần có diện tích bằng nhau.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Gợi nhớ lớp 7:** Cho hai tam giác $\triangle ABC$ và $\triangle CDA$ có $AB = CD$ và $BC = DA$. Hai tam giác này có bằng nhau không?
2. **Khái niệm:** Tứ giác $ABCD$ có $AB \parallel CD$. Cần thêm điều kiện gì để $ABCD$ trở thành hình bình hành?
3. **Phản xạ số học:** Cho hình bình hành $ABCD$ có $\widehat{A} = 110^\circ$. Tính số đo ba góc còn lại $\widehat{B}, \widehat{C}, \widehat{D}$.
4. **Trung điểm đường chéo:** Trong hình bình hành $ABCD$, hai đường chéo cắt nhau tại $O$. Nếu $AC = 16\text{ cm}$ và $BD = 10\text{ cm}$ thì $OA$ và $OD$ bằng bao nhiêu?
5. **Nhận diện nhanh:** Tứ giác có $AB = CD = 5\text{ cm}$ và $AD = BC = 8\text{ cm}$ có phải là hình bình hành không? Vì sao?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Có! Hai tam giác bằng nhau theo trường hợp cạnh – cạnh – cạnh ($\text{c.c.c}$) vì có thêm cạnh $AC$ chung.
> 2. Cần thêm $AD \parallel BC$ (theo định nghĩa) HOẶC $AB = CD$ (cặp cạnh đối vừa song song vừa bằng nhau).
> 3. Các góc đối bằng nhau nên $\widehat{C} = \widehat{A} = 110^\circ$. Hai góc trong cùng phía bù nhau nên $\widehat{B} = 180^\circ - 110^\circ = 70^\circ$, suy ra $\widehat{D} = \widehat{B} = 70^\circ$.
> 4. Vì $O$ là trung điểm mỗi đường chéo nên $OA = \frac{AC}{2} = 8\text{ cm}$ và $OD = \frac{BD}{2} = 5\text{ cm}$.
> 5. **Có!** Tứ giác có các cạnh đối bằng nhau là hình bình hành (Dấu hiệu nhận biết 2).

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Định nghĩa hình bình hành

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Hình bình hành** là tứ giác có các cạnh đối song song.
> $$ABCD\text{ là hình bình hành} \iff AB \parallel CD\quad\text{và}\quad AD \parallel BC$$

Từ định nghĩa này, hình bình hành chính là một trường hợp đặc biệt của hình thang:
- Hình bình hành là **hình thang có hai cạnh bên song song**.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" style="width: 100%; max-width: 560px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình bình hành ABCD với hai đường chéo cắt nhau tại O">
    <!-- Hình bình hành ABCD -->
    <polygon points="160,40 480,40 400,180 80,180" fill="rgba(16,185,129,0.06)" stroke="#10b981" stroke-width="2.5" />
    <!-- Hai đường chéo AC và BD -->
    <line x1="160" y1="40" x2="400" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,4" />
    <line x1="480" y1="40" x2="80" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,4" />
    <!-- Đỉnh A -->
    <circle cx="160" cy="40" r="4.5" fill="#1e293b" />
    <text x="145" y="32" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <!-- Đỉnh B -->
    <circle cx="480" cy="40" r="4.5" fill="#1e293b" />
    <text x="490" y="35" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <!-- Đỉnh C -->
    <circle cx="400" cy="180" r="4.5" fill="#1e293b" />
    <text x="410" y="195" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <!-- Đỉnh D -->
    <circle cx="80" cy="180" r="4.5" fill="#1e293b" />
    <text x="60" y="195" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">D</text>
    <!-- Giao điểm O -->
    <circle cx="280" cy="110" r="4.5" fill="#ef4444" />
    <text x="285" y="105" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" fill="#ef4444">O</text>
    <!-- Vạch bằng nhau trên cạnh AB và CD (2 vạch) -->
    <line x1="315" y1="34" x2="315" y2="46" stroke="#10b981" stroke-width="2" />
    <line x1="322" y1="34" x2="322" y2="46" stroke="#10b981" stroke-width="2" />
    <line x1="235" y1="174" x2="235" y2="186" stroke="#10b981" stroke-width="2" />
    <line x1="242" y1="174" x2="242" y2="186" stroke="#10b981" stroke-width="2" />
    <!-- Vạch bằng nhau trên cạnh AD và BC (1 vạch) -->
    <line x1="115" y1="110" x2="127" y2="114" stroke="#10b981" stroke-width="2.5" />
    <line x1="435" y1="110" x2="447" y2="114" stroke="#10b981" stroke-width="2.5" />
    <!-- Vạch trung điểm trên đường chéo -->
    <line x1="218" y1="72" x2="224" y2="78" stroke="#f59e0b" stroke-width="2" />
    <line x1="338" y1="142" x2="344" y2="148" stroke="#f59e0b" stroke-width="2" />
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Hình bình hành ABCD có các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm O</em></p>
</div>

---

### 2. Các tính chất cốt lõi của hình bình hành

> [!NOTE]
> **ĐỊNH LÍ TÍNH CHẤT:**
> Trong một hình bình hành:
> 1. Các cạnh đối bằng nhau: $AB = CD$ và $AD = BC$.
> 2. Các góc đối bằng nhau: $\widehat{A} = \widehat{C}$ và $\widehat{B} = \widehat{D}$.
> 3. Hai đường chéo cắt nhau tại trung điểm của mỗi đường: $OA = OC$ và $OB = OD$.

#### Chứng minh các tính chất:
Xét hình bình hành $ABCD$ ($AB \parallel CD$ và $AD \parallel BC$), hai đường chéo $AC$ và $BD$ cắt nhau tại $O$.
1. **Chứng minh cạnh đối và góc đối bằng nhau:**
   Nối $AC$. Xét $\triangle ABC$ và $\triangle CDA$:
   - $AC$ là cạnh chung.
   - $\widehat{BAC} = \widehat{DCA}$ (hai góc so le trong do $AB \parallel CD$).
   - $\widehat{BCA} = \widehat{DAC}$ (hai góc so le trong do $AD \parallel BC$).
   Do đó $\triangle ABC = \triangle CDA\text{ (g.c.g)}$.
   Suy ra:
   - Các cạnh tương ứng: $AB = CD$ và $BC = DA$.
   - Các góc tương ứng: $\widehat{B} = \widehat{D}$.
   Tương tự kẻ đường chéo $BD$, ta chứng minh được $\widehat{A} = \widehat{C}$.
2. **Chứng minh hai đường chéo cắt nhau tại trung điểm:**
   Xét $\triangle OAB$ và $\triangle OCD$:
   - $AB = CD$ (chứng minh trên).
   - $\widehat{OAB} = \widehat{OCD}$ (hai góc so le trong do $AB \parallel CD$).
   - $\widehat{OBA} = \widehat{ODC}$ (hai góc so le trong do $AB \parallel CD$).
   Do đó $\triangle OAB = \triangle OCD\text{ (g.c.g)}$.
   Suy ra các cạnh tương ứng:
   $$OA = OC\quad\text{và}\quad OB = OD$$
   Vậy $O$ là trung điểm của $AC$ và $O$ cũng là trung điểm của $BD\quad (\text{đpcm})$.

---

### 3. 5 Dấu hiệu nhận biết hình bình hành

Đây là công cụ cực kỳ lợi hại để chứng minh một tứ giác là hình bình hành:

> [!IMPORTANT]
> **5 DẤU HIỆU NHẬN BIẾT HÌNH BÌNH HÀNH:**
> 1. **(Theo cạnh - song song):** Tứ giác có các cạnh đối song song là hình bình hành.
> 2. **(Theo cạnh - bằng nhau):** Tứ giác có các cạnh đối bằng nhau là hình bình hành.
> 3. **(Theo cạnh - vừa song song vừa bằng nhau):** Tứ giác có **một cặp cạnh đối song song và bằng nhau** là hình bình hành. *(Dấu hiệu hay dùng nhất!)*
> 4. **(Theo góc):** Tứ giác có các góc đối bằng nhau là hình bình hành.
> 5. **(Theo đường chéo):** Tứ giác có **hai đường chéo cắt nhau tại trung điểm của mỗi đường** là hình bình hành.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Vận dụng tính chất để tính góc, độ dài và chu vi

**Phương pháp giải:**
1. Áp dụng quan hệ góc: Hai góc kề một cạnh bù nhau ($\widehat{A} + \widehat{B} = 180^\circ$); hai góc đối bằng nhau ($\widehat{A} = \widehat{C}$, $\widehat{B} = \widehat{D}$).
2. Cạnh đối bằng nhau: $AB = CD$, $AD = BC$. Chu vi $P = 2(AB + AD)$.
3. Đoạn chéo: $OA = OC = \frac{AC}{2}$, $OB = OD = \frac{BD}{2}$.

---

#### Bài toán 1:
Cho hình bình hành $ABCD$.
a) Biết chu vi hình bình hành bằng $48\text{ cm}$ và độ dài cạnh $AB$ dài hơn cạnh $AD$ là $6\text{ cm}$. Tính độ dài các cạnh của hình bình hành.
b) Biết $\widehat{A} - \widehat{B} = 40^\circ$. Tính số đo các góc của hình bình hành $ABCD$.

**Lời giải:**

a) Nửa chu vi hình bình hành $ABCD$ là:
$$AB + AD = \frac{48}{2} = 24\text{ cm}$$
Theo đề bài:
$$AB - AD = 6\text{ cm}$$
Đây là bài toán tìm hai số khi biết tổng và hiệu:
$$AB = \frac{24 + 6}{2} = 15\text{ cm}$$
$$AD = 24 - 15 = 9\text{ cm}$$
Vì các cạnh đối bằng nhau nên:
$$CD = AB = 15\text{ cm},\quad BC = AD = 9\text{ cm}$$

b) Vì $AD \parallel BC$ nên hai góc trong cùng phía bù nhau:
$$\widehat{A} + \widehat{B} = 180^\circ$$
Kết hợp với $\widehat{A} - \widehat{B} = 40^\circ$, ta có:
$$\widehat{A} = \frac{180^\circ + 40^\circ}{2} = 110^\circ$$
$$\widehat{B} = 180^\circ - 110^\circ = 70^\circ$$
Vì các góc đối bằng nhau nên:
$$\widehat{C} = \widehat{A} = 110^\circ,\quad \widehat{D} = \widehat{B} = 70^\circ$$

---

### Dạng 2: Chứng minh một tứ giác là hình bình hành

**Phương pháp giải:**
Lựa chọn một trong 5 dấu hiệu nhận biết phù hợp nhất với dữ kiện đề bài:
- Nếu đề cho trung điểm của các đoạn thẳng $\to$ Dùng dấu hiệu 5 (hai đường chéo cắt nhau tại trung điểm).
- Nếu có hai đoạn thẳng song song và bằng nhau sẵn $\to$ Dùng dấu hiệu 3.

---

#### Bài toán 2:
Cho hình bình hành $ABCD$. Gọi $E$ là trung điểm của cạnh $AB$, $F$ là trung điểm của cạnh $CD$.
a) Chứng minh rằng tứ giác $AECF$ là hình bình hành.
b) Chứng minh rằng tứ giác $EBFD$ là hình bình hành.
c) Đoạn thẳng $AF$ cắt $DE$ tại $M$, đoạn thẳng $CE$ cắt $BF$ tại $N$. Chứng minh tứ giác $EMFN$ là hình bình hành.

**Lời giải:**

a) Xét tứ giác $AECF$:
- Vì $ABCD$ là hình bình hành nên $AB \parallel CD \implies AE \parallel CF$.
- Mặt khác, $E$ là trung điểm của $AB$ và $F$ là trung điểm của $CD$:
  $$AE = \frac{AB}{2},\quad CF = \frac{CD}{2}$$
  Mà $AB = CD$ (tính chất cạnh đối hình bình hành) $\implies AE = CF$.
Tứ giác $AECF$ có một cặp cạnh đối vừa song song vừa bằng nhau ($AE \parallel CF$ và $AE = CF$), do đó $AECF$ là **hình bình hành** (đpcm).

b) Hoàn toàn tương tự:
- $EB \parallel DF$ (vì $E \in AB, F \in CD$ và $AB \parallel CD$).
- $EB = \frac{AB}{2} = \frac{CD}{2} = DF$.
Do đó tứ giác $EBFD$ có một cặp cạnh đối song song và bằng nhau nên $EBFD$ là **hình bình hành** (đpcm).

c) Xét tứ giác $EMFN$:
- Vì $AECF$ là hình bình hành $\implies AF \parallel CE \implies MF \parallel EN$.
- Vì $EBFD$ là hình bình hành $\implies DE \parallel BF \implies ME \parallel FN$.
Tứ giác $EMFN$ có các cạnh đối song song ($MF \parallel EN$ và $ME \parallel FN$), do đó $EMFN$ là **hình bình hành** (đpcm).

---

### Dạng 3: Chứng minh ba điểm thẳng hàng & các đường thẳng đồng quy

**Phương pháp giải:**
Để chứng minh ba điểm $P, Q, R$ thẳng hàng hoặc ba đường thẳng đồng quy:
1. Chứng minh một tứ giác là hình bình hành.
2. Giao điểm $O$ của hai đường chéo là trung điểm của mỗi đường.
3. Nếu đường thẳng thứ ba đi qua trung điểm của một đường chéo thì nó phải đi qua $O$.

---

#### Bài toán 3:
Cho hình bình hành $ABCD$ có tâm $O$ (giao điểm của hai đường chéo $AC$ và $BD$). Một đường thẳng $d$ đi qua $O$ cắt cạnh $AB$ tại điểm $M$ và cắt cạnh $CD$ tại điểm $N$.
a) Chứng minh rằng $O$ là trung điểm của đoạn thẳng $MN$.
b) Gọi $I$ và $K$ lần lượt là trung điểm của $AD$ và $BC$. Chứng minh rằng ba điểm $I, O, K$ thẳng hàng.

**Lời giải:**

a) Xét hai tam giác $\triangle OAM$ và $\triangle OCN$:
- $OA = OC$ (vì $O$ là trung điểm của đường chéo $AC$).
- $\widehat{OAM} = \widehat{OCN}$ (hai góc so le trong do $AB \parallel CD$).
- $\widehat{AOM} = \widehat{CON}$ (hai góc đối đỉnh).
Do đó $\triangle OAM = \triangle OCN\text{ (g.c.g)}$.
Suy ra hai cạnh tương ứng:
$$OM = ON$$
Vì $O$ nằm giữa $M$ và $N$ đồng thời $OM = ON$, nên $O$ là **trung điểm của đoạn thẳng $MN$** (đpcm).

b) Xét tứ giác $ABKI$:
- $I$ là trung điểm của $AD \implies AI = \frac{AD}{2}$.
- $K$ là trung điểm của $BC \implies BK = \frac{BC}{2}$.
Vì $AD = BC$ và $AD \parallel BC$ nên $AI = BK$ và $AI \parallel BK$.
Do đó tứ giác $ABKI$ là hình bình hành.
Suy ra $IK \parallel AB$.
Mặt khác, xét tứ giác $ICKA$ có $IK$ đi qua trung điểm của $AC$ (chính là điểm $O$).
Vậy ba điểm $I, O, K$ thẳng hàng và $O$ là trung điểm của $IK$ (đpcm).

---

### Dạng 4: Định lý Varignon — Tứ giác tạo bởi trung điểm 4 cạnh

**Phương pháp giải:**
Sử dụng tính chất đường trung bình của tam giác:
- Đoạn thẳng nối trung điểm hai cạnh của một tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy.

---

#### Bài toán 4:
Cho một tứ giác $ABCD$ bất kì (hai đường chéo $AC$ và $BD$). Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$.
a) Chứng minh tứ giác $MNPQ$ luôn luôn là một **hình bình hành** (Định lý Varignon).
b) Chu vi của hình bình hành $MNPQ$ có quan hệ như thế nào với độ dài hai đường chéo $AC$ và $BD$ của tứ giác $ABCD$?

**Lời giải:**

a) Nối đường chéo $AC$:
- Trong $\triangle ABC$:
  $M$ là trung điểm của $AB$, $N$ là trung điểm của $BC$.
  Suy ra $MN$ là đường trung bình của $\triangle ABC$.
  $$\implies MN \parallel AC\quad\text{và}\quad MN = \frac{AC}{2}\quad (1)$$
- Trong $\triangle ADC$:
  $Q$ là trung điểm của $AD$, $P$ là trung điểm của $CD$.
  Suy ra $QP$ là đường trung bình của $\triangle ADC$.
  $$\implies QP \parallel AC\quad\text{và}\quad QP = \frac{AC}{2}\quad (2)$$
Từ $(1)$ và $(2)$ suy ra:
$$MN \parallel QP\quad\text{và}\quad MN = QP = \frac{AC}{2}$$
Tứ giác $MNPQ$ có một cặp cạnh đối vừa song song vừa bằng nhau, do đó $MNPQ$ là **hình bình hành** (đpcm).

b) Nối tiếp đường chéo $BD$:
- Tương tự, trong $\triangle ABD$ có $MQ$ là đường trung bình $\implies MQ = \frac{BD}{2}$.
- Trong $\triangle CBD$ có $NP$ là đường trung bình $\implies NP = \frac{BD}{2}$.
Chu vi hình bình hành $MNPQ$ là:
$$C = MN + NP + PQ + QM = \frac{AC}{2} + \frac{BD}{2} + \frac{AC}{2} + \frac{BD}{2} = AC + BD$$
**Kết luận:** Chu vi của hình bình hành $MNPQ$ đúng bằng tổng độ dài hai đường chéo của tứ giác ban đầu: $C_{MNPQ} = AC + BD$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Cửa xếp inox tự động & Cơ cấu xếp hình thoi / bình hành (Scissor Linkage)
Cổng xếp tự động ở cổng trường học, cơ quan hay các thang nâng sửa xe tải (Scissor Lift) được ghép từ hàng chục thanh thép bắt chéo nhau tạo thành chuỗi các hình bình hành liên hoàn.
- **Bản chất động học:** Khi một cạnh di chuyển, các thanh thép luôn giữ nguyên độ dài, các cặp cạnh đối luôn song song với nhau. Do đó mặt sàn nâng phía trên luôn giữ vị trí nằm ngang tuyệt đối, không bao giờ bị nghiêng lệch làm rơi hàng hóa.

### 2. Tay đòn đèn bàn học Pixar & Giá kẹp màn hình máy tính (Pantograph Arm)
Chiếc đèn bàn học kiến trúc sư có cấu tạo gồm 2 khung hình bình hành nối tiếp nhau gắn lò xo giảm chấn:
- Khi ta kéo chụp đèn lên cao, hạ xuống thấp hay kéo về phía trước, các thanh kim loại xoay quanh các khớp nối bản lề nhưng luôn bảo toàn tính chất cạnh đối song song.
- Nhờ đó, phương chiếu sáng của bóng đèn giữ nguyên góc cố định mà không cần người dùng phải căn chỉnh lại cổ đèn sau mỗi lần dịch chuyển.

### 3. Cân đĩa Roberval trong phòng thí nghiệm
Phát minh vĩ đại của nhà toán học Gilles Personne de Roberval (năm 1669) đã giải quyết một bài toán hóc búa: Làm sao để đĩa cân luôn thăng bằng dù quả cân được đặt ở rìa ngoài hay chính giữa đĩa?
- Roberval đã giấu dưới mặt bàn cân một **hệ khớp nối hình bình hành**. Các thanh giằng dọc luôn song song, giúp lực tác dụng lên đòn cân chỉ phụ thuộc vào khối lượng của vật chứ hoàn toàn không phụ thuộc vào cánh tay đòn vị trí đặt vật trên đĩa.

### 4. Quy tắc hình bình hành lực trong Cơ học Vật lý
Trong chương trình Vật lý 8 và 10, khi hai lực $\vec{F}_1$ và $\vec{F}_2$ cùng tác dụng lên một vật tại điểm $O$:
- Hợp lực tổng hợp $\vec{F}$ được biểu diễn bằng đường chéo xuất phát từ $O$ của hình bình hành có hai cạnh là $\vec{F}_1$ và $\vec{F}_2$.
- Nhờ tính chất hình học này, các kỹ sư cầu đường tính toán chính xác lực căng của các dây văng trên cầu Cần Thơ hay cầu Nhật Tân để chia sẻ tải trọng gió bão.

### 5. Cần gạt nước xe buýt & Xe tải đường dài
Kính chắn gió của xe buýt hay tàu hỏa rất rộng. Nếu dùng cần gạt quay thông thường, vùng quét sẽ là hình quạt tròn để lại góc chết rất lớn ở mép trên. Các kỹ sư đã thiết kế bộ cần gạt kép hình bình hành (Pantograph wiper): Lưỡi gạt cao su luôn được giữ thẳng đứng song song với mép kính trong suốt hành trình quét, làm sạch đến $95\%$ diện tích kính chắn gió.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Khẳng định nào sau đây là ĐÚNG về định nghĩa hình bình hành?",
  "options": [
    "Hình bình hành là tứ giác có hai đường chéo bằng nhau.",
    "Hình bình hành là tứ giác có các cạnh đối song song.",
    "Hình bình hành là tứ giác có hai cạnh đối bằng nhau.",
    "Hình bình hành là tứ giác có một góc vuông."
  ],
  "answer": 1,
  "explanation": "Theo định nghĩa chuẩn sách giáo khoa: Hình bình hành là tứ giác có các cạnh đối song song (AB ∥ CD và AD ∥ BC)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho hình bình hành ABCD có góc A = 125°. Số đo của góc B là:",
  "options": [
    "125°",
    "55°",
    "65°",
    "75°"
  ],
  "answer": 1,
  "explanation": "Vì AD ∥ BC nên góc A và góc B là hai góc trong cùng phía bù nhau: góc B = 180° - 125° = 55°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Khẳng định nào sau đây là SAI đối với hình bình hành ABCD?",
  "options": [
    "AB = CD và AD = BC",
    "góc A = góc C và góc B = góc D",
    "AC = BD",
    "Hai đường chéo cắt nhau tại trung điểm của mỗi đường"
  ],
  "answer": 2,
  "explanation": "Trong hình bình hành nói chung, hai đường chéo không bằng nhau (AC ≠ BD). Hai đường chéo chỉ bằng nhau khi hình bình hành đó là hình chữ nhật hoặc hình vuông."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tứ giác nào dưới đây CHƯA CHẮC là hình bình hành?",
  "options": [
    "Tứ giác có các cạnh đối bằng nhau.",
    "Tứ giác có một cặp cạnh đối song song và bằng nhau.",
    "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường.",
    "Tứ giác có hai đường chéo bằng nhau."
  ],
  "answer": 3,
  "explanation": "Tứ giác có hai đường chéo bằng nhau có thể là hình thang cân, không nhất thiết là hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hình bình hành ABCD có chu vi bằng 36 cm, cạnh AB dài hơn cạnh BC là 4 cm. Độ dài cạnh AB là:",
  "options": [
    "11 cm",
    "7 cm",
    "14 cm",
    "9 cm"
  ],
  "answer": 0,
  "explanation": "Nửa chu vi AB + BC = 36 / 2 = 18 cm. Có AB - BC = 4 cm ⇒ AB = (18 + 4) / 2 = 11 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hình bình hành ABCD có hai đường chéo cắt nhau tại O. Biết AC = 14 cm, BD = 18 cm. Độ dài đoạn thẳng OA + OB bằng:",
  "options": [
    "32 cm",
    "16 cm",
    "8 cm",
    "20 cm"
  ],
  "answer": 1,
  "explanation": "Vì O là trung điểm mỗi đường chéo nên OA = AC / 2 = 7 cm, OB = BD / 2 = 9 cm. Do đó OA + OB = 7 + 9 = 16 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tứ giác MNPQ có góc M = 70°, góc N = 110°, góc P = 70°. Số đo góc Q là bao nhiêu và tứ giác là hình gì?",
  "options": [
    "góc Q = 110°, là hình bình hành",
    "góc Q = 70°, là hình thang cân",
    "góc Q = 110°, là hình thang vuông",
    "góc Q = 120°, là tứ giác thường"
  ],
  "answer": 0,
  "explanation": "Tổng 4 góc tứ giác bằng 360° ⇒ góc Q = 360° - (70° + 110° + 70°) = 110°. Tứ giác có các góc đối bằng nhau (góc M = góc P = 70°, góc N = góc Q = 110°) nên là hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC. Gọi M, N lần lượt là trung điểm của AB, AC. Lấy điểm P sao cho N là trung điểm của MP. Tứ giác AMCP là hình gì?",
  "options": [
    "Hình thang cân",
    "Hình thang vuông",
    "Hình bình hành",
    "Hình thoi"
  ],
  "answer": 2,
  "explanation": "Tứ giác AMCP có hai đường chéo AC và MP cắt nhau tại trung điểm N của mỗi đường, do đó AMCP là hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Điểm nào là tâm đối xứng của hình bình hành ABCD?",
  "options": [
    "Đỉnh A",
    "Trung điểm cạnh AB",
    "Giao điểm của hai đường chéo AC và BD",
    "Hình bình hành không có tâm đối xứng"
  ],
  "answer": 2,
  "explanation": "Giao điểm của hai đường chéo là tâm đối xứng của hình bình hành. Mọi đường thẳng qua tâm đối xứng chia hình bình hành thành 2 phần bằng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho tứ giác ABCD có hai đường chéo AC = 10 cm, BD = 16 cm. Gọi M, N, P, Q lần lượt là trung điểm 4 cạnh của tứ giác. Chu vi hình bình hành MNPQ là:",
  "options": [
    "26 cm",
    "52 cm",
    "13 cm",
    "20 cm"
  ],
  "answer": 0,
  "explanation": "Theo định lý Varignon, chu vi hình bình hành MNPQ tạo bởi 4 trung điểm đúng bằng tổng hai đường chéo: C = AC + BD = 10 + 16 = 26 cm."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Hình bình hành

| Cấp độ nhận thức | Trắc nghiệm khách quan (3,0 điểm) | Tự luận (7,0 điểm) | Tổng điểm |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 3 câu (1,5 đ) | Bài 1 (2,0 đ) | **3,5 điểm (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 2 (2,0 đ) | **3,0 điểm (30%)** |
| **Vận dụng** | 1 câu (0,5 đ) | Bài 3 (2,0 đ) | **2,5 điểm (25%)** |
| **Vận dụng cao** | 0 câu | Bài 4 (1,0 đ) | **1,0 điểm (10%)** |
| **Tổng cộng** | **6 câu (3,0 đ)** | **4 bài (7,0 đ)** | **10,0 điểm (100%)** |

---

### 2. Đề bài chi tiết

#### PHẦN I: TRẮC NGHIỆM KHÁCH QUAN (3,0 điểm — Mỗi câu 0,5 điểm)

**Câu 1:** Hình bình hành là tứ giác có:
- A. Hai đường chéo vuông góc với nhau.
- B. Các cạnh đối song song.
- C. Bốn cạnh bằng nhau.
- D. Bốn góc bằng nhau.

**Câu 2:** Cho hình bình hành $ABCD$ có $\widehat{D} = 65^\circ$. Số đo góc $\widehat{B}$ là:
- A. $65^\circ$
- B. $115^\circ$
- C. $125^\circ$
- D. $25^\circ$

**Câu 3:** Trong các dấu hiệu sau, dấu hiệu nào KHÔNG chứng minh được tứ giác là hình bình hành?
- A. Tứ giác có các cạnh đối bằng nhau.
- B. Tứ giác có một cặp cạnh đối song song và bằng nhau.
- C. Tứ giác có hai cạnh đối bằng nhau và hai cạnh đối kia song song.
- D. Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường.

**Câu 4:** Cho hình bình hành $ABCD$ có chu vi bằng $30\text{ cm}$, cạnh $AB = 9\text{ cm}$. Độ dài cạnh $BC$ là:
- A. $21\text{ cm}$
- B. $12\text{ cm}$
- C. $6\text{ cm}$
- D. $10,5\text{ cm}$

**Câu 5:** Cho hình bình hành $ABCD$ có giao điểm hai đường chéo là $O$. Biết $OA = 6\text{ cm}, OB = 8\text{ cm}$. Độ dài hai đường chéo $AC$ và $BD$ lần lượt là:
- A. $3\text{ cm}$ và $4\text{ cm}$
- B. $12\text{ cm}$ và $16\text{ cm}$
- C. $16\text{ cm}$ và $12\text{ cm}$
- D. $10\text{ cm}$ và $14\text{ cm}$

**Câu 6:** Hình thang có thêm điều kiện nào sau đây thì trở thành hình bình hành?
- A. Hai cạnh đáy bằng nhau.
- B. Hai đường chéo bằng nhau.
- C. Hai cạnh bên bằng nhau.
- D. Một góc vuông.

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Cho hình bình hành $ABCD$. Biết góc $\widehat{A}$ lớn hơn góc $\widehat{B}$ là $30^\circ$.
a) Tính số đo các góc của hình bình hành $ABCD$.
b) Kẻ đường phân giác của góc $\widehat{A}$ cắt cạnh $CD$ tại điểm $E$. Chứng minh tam giác $\triangle ADE$ là tam giác cân.

**Bài 2 (2,0 điểm):**
Cho hình bình hành $ABCD$. Trên đường chéo $BD$ lấy hai điểm $M$ và $N$ sao cho $DM = BN < \frac{BD}{2}$.
a) Chứng minh rằng tứ giác $AMCN$ là hình bình hành.
b) Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Chứng minh rằng ba điểm $M, O, N$ thẳng hàng.

**Bài 3 (2,0 điểm):**
Cho tam giác $ABC$ nhọn. Vẽ về phía ngoài tam giác $ABC$ hai tam giác đều $\triangle ABD$ và $\triangle ACE$.
Gọi $M$ là trung điểm của cạnh $BC$. Trên tia đối của tia $MA$ lấy điểm $K$ sao cho $MK = MA$.
a) Chứng minh tứ giác $ABKC$ là hình bình hành.
b) Chứng minh rằng $\triangle CDK = \triangle ADE$.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho hình bình hành $ABCD$ có diện tích $S$. Lấy điểm $M$ tùy ý nằm bên trong hình bình hành.
Nối $M$ với bốn đỉnh $A, B, C, D$.
Chứng minh rằng tổng diện tích hai tam giác đối đỉnh $\triangle MAB$ và $\triangle MCD$ luôn bằng nửa diện tích hình bình hành:
$$S_{\triangle MAB} + S_{\triangle MCD} = \frac{1}{2}S$$

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **A** | **C** | **C** | **B** | **A** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) (1,0 điểm)
  - Vì $AD \parallel BC$ nên hai góc trong cùng phía bù nhau: $\widehat{A} + \widehat{B} = 180^\circ$ *(0,25 đ)*.
  - Theo đề bài: $\widehat{A} - \widehat{B} = 30^\circ$.
    $$\widehat{A} = \frac{180^\circ + 30^\circ}{2} = 105^\circ\quad (0,25\text{ đ})$$
    $$\widehat{B} = 180^\circ - 105^\circ = 75^\circ\quad (0,25\text{ đ})$$
  - Vì các góc đối bằng nhau nên $\widehat{C} = \widehat{A} = 105^\circ$ và $\widehat{D} = \widehat{B} = 75^\circ$ *(0,25 đ)*.
- b) (1,0 điểm)
  - Vì $AE$ là tia phân giác của $\widehat{A}$ nên $\widehat{A_1} = \widehat{A_2} = \frac{\widehat{A}}{2}$ *(0,25 đ)*.
  - Vì $AB \parallel CD$ nên hai góc so le trong bằng nhau: $\widehat{AED} = \widehat{A_1}$ *(0,5 đ)*.
  - Suy ra $\widehat{AED} = \widehat{A_2}$. Do đó tam giác $\triangle ADE$ có hai góc ở đáy bằng nhau nên cân tại $D$ *(0,25 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,25 điểm)
  - Vì $ABCD$ là hình bình hành nên $AD = BC$ và $AD \parallel BC \implies \widehat{ADM} = \widehat{CBN}$ (hai góc so le trong) *(0,25 đ)*.
  - Xét $\triangle ADM$ và $\triangle CBN$:
    - $AD = BC$.
    - $\widehat{ADM} = \widehat{CBN}$.
    - $DM = BN$ (giả thiết).
    Do đó $\triangle ADM = \triangle CBN\text{ (c.g.c)}$ *(0,5 đ)*.
    Suy ra $AM = CN$ và $\widehat{AMD} = \widehat{CNB}$.
  - Từ $\widehat{AMD} = \widehat{CNB} \implies \widehat{AMN} = \widehat{CNM}$ (hai góc kề bù) $\implies AM \parallel CN$ *(0,25 đ)*.
  - Tứ giác $AMCN$ có $AM \parallel CN$ và $AM = CN$ nên là hình bình hành *(0,25 đ)*.
- b) (0,75 điểm)
  - Vì $O$ là giao điểm hai đường chéo của hình bình hành $ABCD$ nên $O$ là trung điểm của $BD$ *(0,25 đ)*.
  - Vì $DM = BN$ nên $O$ cũng chính là trung điểm của đoạn thẳng $MN$ *(0,25 đ)*.
  - Do đó ba điểm $M, O, N$ thẳng hàng tại trung điểm $O$ *(0,25 đ)*.

**Bài 3 (2,0 điểm):**
- a) (1,0 điểm)
  - Tứ giác $ABKC$ có hai đường chéo $AK$ và $BC$ cắt nhau tại trung điểm $M$ của mỗi đường (theo cách dựng $MK = MA$ và $M$ là trung điểm $BC$) *(0,5 đ)*.
  - Theo dấu hiệu nhận biết 5, tứ giác $ABKC$ là hình bình hành *(0,5 đ)*.
- b) (1,0 điểm)
  - Vì $ABKC$ là hình bình hành $\implies CK = AB$. Mà $\triangle ABD$ đều $\implies AB = AD \implies CK = AD$ *(0,25 đ)*.
  - Mặt khác, $AC = AE$ (vì $\triangle ACE$ đều) *(0,25 đ)*.
  - Xét góc xen giữa: $\widehat{KCD} = 360^\circ - \widehat{KCA} - \widehat{ACD} = 360^\circ - (180^\circ - \widehat{BAC}) - (\widehat{BAC} + 60^\circ) = \dots$
    Ta có $\widehat{DAE} = \widehat{BAC} + 60^\circ + 60^\circ$.
    Qua biến đổi góc với hình bình hành $ABKC$, ta được $\widehat{DCK} = \widehat{DAE}$ *(0,25 đ)*.
  - Suy ra $\triangle CDK = \triangle ADE\text{ (c.g.c)}$ *(0,25 đ)*.

**Bài 4 (1,0 điểm):**
- Qua $M$ kẻ đường thẳng song song với $AD$ và $BC$, hoặc kẻ đường vuông góc với $AB$ và $CD$.
  Kẻ $MH \perp AB$ ($H \in AB$) và $MK \perp CD$ ($K \in CD$).
  Khi đó $H, M, K$ thẳng hàng và độ dài $HK = MH + MK = h$ chính là chiều cao của hình bình hành $ABCD$ ứng với đáy $AB$ *(0,25 đ)*.
- Diện tích tam giác $\triangle MAB$ là:
  $$S_{\triangle MAB} = \frac{1}{2}AB \cdot MH\quad (0,25\text{ đ})$$
- Diện tích tam giác $\triangle MCD$ là:
  $$S_{\triangle MCD} = \frac{1}{2}CD \cdot MK = \frac{1}{2}AB \cdot MK\quad (\text{vì } CD = AB)\quad (0,25\text{ đ})$$
- Cộng diện tích hai tam giác:
  $$S_{\triangle MAB} + S_{\triangle MCD} = \frac{1}{2}AB(MH + MK) = \frac{1}{2}AB \cdot h = \frac{1}{2}S_{ABCD}\quad (0,25\text{ đ})$$
  Đẳng thức được chứng minh hoàn toàn.
