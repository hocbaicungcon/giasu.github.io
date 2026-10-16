---
title: 'Toán 7 Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác'
description: 'Làm chủ lý thuyết trọng tâm và tâm đường tròn nội tiếp Toán 7 Bài 34: Tính chất ba đường trung tuyến, tỉ lệ 2/3 của trọng tâm, tính chất ba đường phân giác, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Đường trung tuyến
  - Trọng tâm
  - Đường phân giác
  - Tâm đường tròn nội tiếp
  - Kết nối tri thức
grade: 7
---

# Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác

Nếu bạn cắt một miếng bìa carton hình tam giác bất kỳ, liệu bạn có thể đặt đầu một chiếc bút bi tại một điểm duy nhất trên miếng bìa để nó thăng bằng hoàn hảo nằm ngang mà không hề bị nghiêng đổ?

Điểm kỳ diệu ấy chính là **Trọng tâm (Centroid)** của tam giác — điểm đồng quy giao nhau của ba đường trung tuyến. Từ thời cổ đại, nhà bác học vĩ đại Archimedes xứ Syracuse (thế kỷ thứ III TCN) đã phát hiện ra nguyên lý đòn bẩy và trọng tâm của các vật thể hình học.

Trong Bài 34, chúng ta sẽ cùng khám phá sự gặp gỡ kỳ diệu của hai bộ ba đường đặc biệt trong tam giác:
1. **Ba đường trung tuyến** đồng quy tại **Trọng tâm** với tỉ lệ vàng $\frac{2}{3}$ — chìa khóa của cân bằng cơ học và thiết kế khí động học hàng không.
2. **Ba đường phân giác** đồng quy tại một điểm **cách đều ba cạnh** — tâm của đường tròn nội tiếp tam giác.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 34: TRỌNG TÂM VÀ ĐƯỜNG PHÂN GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Ba đường Trung tuyến & Trọng tâm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đoạn nối đỉnh với trung điểm cạnh đối diện.<br>• Ba đường trung tuyến đồng quy tại điểm $G$ (<strong>Trọng tâm</strong>).<br>• Tỉ lệ khoảng cách:<br>  $$\frac{GA}{AM} = \frac{GB}{BN} = \frac{GC}{CP} = \frac{2}{3}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Ba đường Phân giác & Tâm nội tiếp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chia đôi góc trong của tam giác.<br>• Ba đường phân giác đồng quy tại điểm $I$.<br>• Điểm $I$ <strong>cách đều ba cạnh</strong> của tam giác:<br>  $$d(I, AB) = d(I, BC) = d(I, CA)$$<br>• $I$ là tâm đường tròn nội tiếp tam giác.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tam giác Cân đặc biệt</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong tam giác cân tại đỉnh $A$:<br>  Đường trung tuyến xuất phát từ $A$ đồng thời là <strong>đường phân giác</strong>, đường cao và đường trung trực của cạnh đáy $BC$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tam giác Đều</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong tam giác đều: Trọng tâm $G$ và tâm đường tròn nội tiếp $I$ <strong>trùng nhau hoàn toàn</strong>!</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm trung tuyến:** Đoạn thẳng nối đỉnh $A$ của tam giác $ABC$ với trung điểm $M$ của cạnh $BC$ gọi là đường gì của tam giác?
2. **Khái niệm phân giác:** Tia phân giác của một góc chia góc đó thành mấy phần và quan hệ giữa chúng là gì?
3. **Tính chất điểm trên tia phân giác:** Điểm nằm trên tia phân giác của một góc có tính chất gì đối với hai cạnh của góc đó?
4. **Tỉ lệ phân số:** Nếu đoạn thẳng $AM = 9\text{ cm}$ và điểm $G$ nằm trên đoạn $AM$ sao cho $AG = \frac{2}{3} AM$ thì độ dài đoạn $AG$ và $GM$ bằng bao nhiêu?
5. **Tam giác cân:** Trong tam giác cân $ABC$ ($AB = AC$), đường trung tuyến $AM$ có vuông góc với cạnh đáy $BC$ không?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Đường trung tuyến ứng với cạnh $BC$.
> 2. Chia thành hai góc bằng nhau.
> 3. Cách đều hai cạnh của góc đó.
> 4. $AG = \frac{2}{3} \cdot 9 = 6\text{ cm}$ và $GM = 9 - 6 = 3\text{ cm}$ (đoạn $AG$ gấp đôi đoạn $GM$).
> 5. Có, $AM \perp BC$ (đường trung tuyến đồng thời là đường cao).

---

## I. Lý thuyết Trọng tâm

### 1. Sự đồng quy của ba đường trung tuyến — Trọng tâm tam giác

#### a) Định nghĩa đường trung tuyến
Đoạn thẳng nối một đỉnh của tam giác với trung điểm cạnh đối diện được gọi là một **đường trung tuyến** của tam giác đó.
Mỗi tam giác có đúng **3 đường trung tuyến**.

#### b) Định lý về sự đồng quy và tính chất trọng tâm

> [!IMPORTANT]
> **ĐỊNH LÝ TRỌNG TÂM (CENTROID THEOREM):**
> Ba đường trung tuyến của một tam giác cùng đi qua một điểm (đồng quy tại một điểm). 
> Điểm gặp nhau đó được gọi là **trọng tâm** của tam giác, thường kí hiệu là $G$.
> 
> Trọng tâm của một tam giác cách mỗi đỉnh một khoảng bằng $\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó:
> $$\frac{GA}{AM} = \frac{GB}{BN} = \frac{GC}{CP} = \frac{2}{3}$$

*Các tỉ lệ tương đương quan trọng:*
- Đoạn từ đỉnh đến trọng tâm bằng $2$ lần đoạn từ trọng tâm đến trung điểm:
  $$GA = 2 GM, \quad GB = 2 GN, \quad GC = 2 GP$$
- Đoạn từ trọng tâm đến trung điểm bằng $\frac{1}{3}$ độ dài đường trung tuyến:
  $$GM = \frac{1}{3} AM, \quad GN = \frac{1}{3} BN, \quad GP = \frac{1}{3} CP$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 260" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Ba đường trung tuyến đồng quy tại Trọng tâm G">
    <!-- Tam giác ABC -->
    <polygon points="180,30 40,220 500,220" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    <circle cx="180" cy="30" r="5" fill="#2563eb" />
    <circle cx="40" cy="220" r="5" fill="#2563eb" />
    <circle cx="500" cy="220" r="5" fill="#2563eb" />
    <text x="175" y="20" font-size="16" font-weight="700" fill="#1e293b">A</text>
    <text x="20" y="235" font-size="16" font-weight="700" fill="#1e293b">B</text>
    <text x="510" y="235" font-size="16" font-weight="700" fill="#1e293b">C</text>

    <!-- Trung điểm M, N, P -->
    <!-- M là trung điểm BC (270, 220) -->
    <circle cx="270" cy="220" r="4" fill="#059669" />
    <text x="265" y="245" font-size="15" font-weight="700" fill="#059669">M</text>
    <!-- N là trung điểm AC (340, 125) -->
    <circle cx="340" cy="125" r="4" fill="#059669" />
    <text x="355" y="130" font-size="15" font-weight="700" fill="#059669">N</text>
    <!-- P là trung điểm AB (110, 125) -->
    <circle cx="110" cy="125" r="4" fill="#059669" />
    <text x="85" y="130" font-size="15" font-weight="700" fill="#059669">P</text>

    <!-- Ba đường trung tuyến -->
    <line x1="180" y1="30" x2="270" y2="220" stroke="#dc2626" stroke-width="2" />
    <line x1="40" y1="220" x2="340" y2="125" stroke="#2563eb" stroke-width="2" />
    <line x1="500" y1="220" x2="110" y2="125" stroke="#7c3aed" stroke-width="2" />

    <!-- Trọng tâm G (240, 157) -->
    <circle cx="240" cy="157" r="6" fill="#e11d48" />
    <text x="250" y="160" font-size="16" font-weight="700" fill="#e11d48">G (Trọng tâm)</text>
  </svg>
</div>

---

### 2. Sự đồng quy của ba đường phân giác — Tâm đường tròn nội tiếp

#### a) Định nghĩa đường phân giác trong tam giác
Trong tam giác $ABC$, tia phân giác của góc $\widehat{A}$ cắt cạnh đối diện $BC$ tại điểm $D$. Đoạn thẳng $AD$ được gọi là **đường phân giác** xuất phát từ đỉnh $A$ của tam giác $ABC$.
Mỗi tam giác có đúng **3 đường phân giác**.

#### b) Định lý về sự đồng quy của ba đường phân giác

> [!IMPORTANT]
> **ĐỊNH LÝ TÂM NỘI TIẾP (INCENTER THEOREM):**
> Ba đường phân giác của một tam giác cùng đi qua một điểm (đồng quy tại một điểm).
> Điểm đồng quy này **cách đều ba cạnh** của tam giác:
> $$d(I, AB) = d(I, BC) = d(I, CA) = r$$
> 
> *Ý nghĩa hình học:* Điểm $I$ chính là **tâm của đường tròn nội tiếp** tam giác (đường tròn tiếp xúc trong với cả ba cạnh của tam giác có bán kính $r$).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 2: Ba đường phân giác đồng quy tại tâm đường tròn nội tiếp I">
    <!-- Tam giác ABC -->
    <polygon points="170,30 50,220 470,220" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    <text x="165" y="20" font-size="16" font-weight="700" fill="#1e293b">A</text>
    <text x="30" y="235" font-size="16" font-weight="700" fill="#1e293b">B</text>
    <text x="480" y="235" font-size="16" font-weight="700" fill="#1e293b">C</text>

    <!-- Đường tròn nội tiếp tâm I (215, 155), r = 65 -->
    <circle cx="215" cy="155" r="65" fill="#e0f2fe" fill-opacity="0.5" stroke="#0284c7" stroke-width="2" />
    <circle cx="215" cy="155" r="5" fill="#0284c7" />
    <text x="225" y="150" font-size="15" font-weight="700" fill="#0284c7">I (Tâm nội tiếp)</text>

    <!-- Ba đường phân giác nét đứt -->
    <line x1="170" y1="30" x2="235" y2="220" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3" />
    <line x1="50" y1="220" x2="310" y2="120" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3" />
    <line x1="470" y1="220" x2="110" y2="125" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3" />

    <!-- Đoạn vuông góc cách đều ba cạnh -->
    <line x1="215" y1="155" x2="215" y2="220" stroke="#dc2626" stroke-width="2" />
    <text x="220" y="195" font-size="13" font-weight="700" fill="#dc2626">r</text>
  </svg>
</div>

---

### 3. Tính chất đặc biệt trong tam giác cân và tam giác đều

> [!NOTE]
> **ĐỊNH LÝ TRÙNG NHAU:**
> 1. Trong **tam giác cân**, đường trung tuyến kẻ từ đỉnh đối diện với cạnh đáy đồng thời là **đường phân giác**, đường cao và đường trung trực của cạnh đáy.
> 2. Trong **tam giác đều**, trọng tâm $G$ và tâm đường tròn nội tiếp $I$ **trùng nhau**. Cả 3 đường trung tuyến đồng thời là 3 đường phân giác, 3 đường cao và 3 đường trung trực!

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Tính độ dài các đoạn thẳng dựa vào tỉ lệ trọng tâm

**Phương pháp giải:**
Sử dụng công thức tỉ lệ vàng của trọng tâm $G$ trên đường trung tuyến $AM$:
$$AG = \frac{2}{3} AM, \quad GM = \frac{1}{3} AM, \quad AG = 2 GM$$

---

#### Bài toán 1:
Cho tam giác $ABC$ có đường trung tuyến $AM = 15\text{ cm}$. Gọi $G$ là trọng tâm của tam giác $ABC$.
a) Tính độ dài các đoạn thẳng $AG$ và $GM$.
b) Tia $BG$ cắt cạnh $AC$ tại $N$. Biết $GN = 4\text{ cm}$, tính độ dài đoạn thẳng $BG$ và độ dài đường trung tuyến $BN$.

**Lời giải:**

a) Vì $G$ là trọng tâm của tam giác $ABC$ và $AM$ là đường trung tuyến nên theo định lý trọng tâm:
$$AG = \frac{2}{3} AM = \frac{2}{3} \cdot 15 = 10\text{ (cm)}$$
Độ dài đoạn $GM$ là:
$$GM = AM - AG = 15 - 10 = 5\text{ (cm)} \quad \left(\text{hoặc } GM = \frac{1}{3} AM = 5\text{ cm}\right)$$

b) Vì $BN$ là đường trung tuyến đi qua trọng tâm $G$:
Theo tính chất trọng tâm, khoảng cách từ đỉnh $B$ đến trọng tâm gấp $2$ lần khoảng cách từ trọng tâm đến trung điểm $N$:
$$BG = 2 GN = 2 \cdot 4 = 8\text{ (cm)}$$
Độ dài của cả đường trung tuyến $BN$ là:
$$BN = BG + GN = 8 + 4 = 12\text{ (cm)}$$

---

### Dạng 2: Chứng minh một điểm là Trọng tâm của tam giác

**Phương pháp giải:**
Để chứng minh điểm $G$ là trọng tâm của tam giác $ABC$, ta thường dùng một trong hai cách:
- **Cách 1:** Chứng minh $G$ là giao điểm của **hai đường trung tuyến**.
- **Cách 2:** Chứng minh $G$ nằm trên **một đường trung tuyến** $AM$ và thỏa mãn tỉ lệ $AG = \frac{2}{3} AM$ (hoặc $AG = 2 GM$).

---

#### Bài toán 2:
Cho tam giác $ABC$. Trên tia đối của tia $BA$ lấy điểm $D$ sao cho $BD = BA$. Gọi $M$ là trung điểm của $BC$. Đoạn thẳng $DM$ cắt cạnh $AC$ tại $E$.
Chứng minh rằng: Điểm $E$ là trọng tâm của tam giác $ADC$.

**Lời giải:**

Xét tam giác $ADC$:
1. Theo giả thiết, $BD = BA$ nên $B$ là trung điểm của cạnh $AD$.
   Do đó, đoạn thẳng $CB$ là đường trung tuyến xuất phát từ đỉnh $C$ của $\triangle ADC$.
2. Điểm $M$ là trung điểm của $BC$ nên:
   $$CM = MB = \frac{1}{2} BC \implies CB = 2 CM \implies \frac{CM}{CB} = \frac{1}{2}$$
   Mặt khác $E$ là giao điểm của $DM$ với $AC$.
   Vẽ đường thẳng qua $B$ song song với $AC$, áp dụng tính chất đường trung bình ta chứng minh được:
   $$CE = \frac{2}{3} CA$$
   Vì $E$ nằm trên đường trung tuyến và cách đỉnh $C$ một khoảng bằng $\frac{2}{3}$ độ dài đường trung tuyến nên $E$ chính là **trọng tâm của tam giác $ADC$**.

---

### Dạng 3: Tính góc và khoảng cách dựa vào tính chất ba đường phân giác

**Phương pháp giải:**
1. Áp dụng tính chất tia phân giác: Chia đôi số đo góc.
2. Tổng ba góc trong tam giác bằng $180^\circ$.
3. Điểm đồng quy $I$ cách đều ba cạnh: Khoảng cách từ $I$ đến $AB, BC, CA$ bằng nhau.

---

#### Bài toán 3:
Cho tam giác $ABC$ có $\widehat{B} = 70^\circ$ và $\widehat{C} = 50^\circ$. Hai đường phân giác của góc $\widehat{B}$ và $\widehat{C}$ cắt nhau tại điểm $I$.
a) Tính số đo góc $\widehat{BIC}$.
b) Kẻ $IH \perp BC$ ($H \in BC$), $IK \perp AC$ ($K \in AC$), $IL \perp AB$ ($L \in AB$). Biết $IH = 3\text{ cm}$, tính độ dài $IK$ và $IL$.
c) Đoạn thẳng $AI$ có phải là tia phân giác của góc $\widehat{A}$ không? Vì sao?

**Lời giải:**

a) Vì $BI$ là tia phân giác của góc $\widehat{B}$ nên:
$$\widehat{IBC} = \frac{\widehat{B}}{2} = \frac{70^\circ}{2} = 35^\circ$$
Vì $CI$ là tia phân giác của góc $\widehat{C}$ nên:
$$\widehat{ICB} = \frac{\widehat{C}}{2} = \frac{50^\circ}{2} = 25^\circ$$
Xét tam giác $IBC$, áp dụng định lý tổng ba góc:
$$\widehat{BIC} = 180^\circ - (\widehat{IBC} + \widehat{ICB}) = 180^\circ - (35^\circ + 25^\circ) = 180^\circ - 60^\circ = 120^\circ$$

b) Vì $I$ là giao điểm hai đường phân giác của $\triangle ABC$ nên $I$ chính là tâm đường tròn nội tiếp, cách đều ba cạnh của tam giác:
$$IK = IL = IH = 3\text{ (cm)}$$

c) Theo định lý về sự đồng quy của ba đường phân giác trong tam giác:
Vì hai đường phân giác của góc $B$ và $C$ cắt nhau tại $I$ nên đường phân giác xuất phát từ đỉnh $A$ cũng phải đi qua điểm $I$.
Do đó, tia $AI$ chính là **tia phân giác của góc $\widehat{A}$**.

---

### Dạng 4: Bài toán cân bằng cơ học và chia đất thực tế

**Phương pháp giải:**
Trọng tâm $G$ chia tam giác $ABC$ thành ba tam giác nhỏ có diện tích bằng nhau:
$$S_{\triangle GAB} = S_{\triangle GBC} = S_{\triangle GCA} = \frac{1}{3} S_{\triangle ABC}$$

---

#### Bài toán 4:
Ba gia đình An, Bình, Cường cùng chung nhau mua một mảnh đất hình tam giác $ABC$ có diện tích $600\text{ m}^2$. Họ muốn chia mảnh đất thành ba phần bằng nhau cho ba gia đình và cùng xây một cái giếng nước chung tại điểm $O$ sao cho cái giếng nằm tại góc chung của ba mảnh đất.
a) Điểm $O$ đào giếng chung phải là điểm đặc biệt nào của tam giác $ABC$?
b) Hãy tính diện tích mảnh đất của mỗi gia đình.

**Lời giải:**

a) Để ba mảnh đất có chung điểm $O$ (tức là nối $O$ với $A, B, C$ tạo thành 3 tam giác $\triangle OAB, \triangle OBC, \triangle OCA$) và có diện tích bằng nhau:
$$S_{\triangle OAB} = S_{\triangle OBC} = S_{\triangle OCA}$$
Theo định lý hình học về diện tích tam giác, điểm duy nhất bên trong tam giác chia tam giác thành 3 phần có diện tích bằng nhau chính là **Trọng tâm $G$ của tam giác $ABC$**.
Do đó, điểm $O$ đào giếng chung phải đặt chính xác tại **Trọng tâm $G$**.

b) Diện tích mảnh đất của mỗi gia đình là:
$$S = \frac{1}{3} S_{\triangle ABC} = \frac{1}{3} \cdot 600 = 200\text{ (m}^2\text{)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Trọng tâm và Cân bằng Khí động học Tàu vũ trụ (Center of Gravity)

Trong ngành hàng không vũ trụ (NASA, SpaceX), việc tính toán trọng tâm của tên lửa đẩy và tàu con thoi là yếu tố sống còn:
- Nếu trọng tâm (CG) bị lệch khỏi trục đối xứng dù chỉ vài milimét, lực đẩy phản lực của động cơ rocket hàng ngàn tấn sẽ tạo ra mô-men xoắn làm tên lửa mất lái lộn nhào và phát nổ ngay sau khi rời bệ phóng.
- Các kỹ sư phải liên tục bơm chuyển nhiên liệu lỏng giữa các khoang chứa để giữ cho trọng tâm tàu luôn nằm trên trục cân bằng khí động học tuyệt đối.

---

### Chuyên đề 2: Đường tròn Euler và Đường thẳng Euler kỳ diệu (Leonhard Euler, 1765)

Năm 1765, nhà toán học vĩ đại nhất Thụy Sĩ Leonhard Euler đã khám phá ra một định lý làm rung động giới toán học:
Trong một tam giác bất kì, **Trọng tâm ($G$)**, **Trực tâm ($H$ - giao điểm 3 đường cao)** và **Tâm đường tròn ngoại tiếp ($O$)** luôn luôn:
1. **Thẳng hàng với nhau** trên cùng một đường thẳng (gọi là **Đường thẳng Euler**).
2. Trọng tâm $G$ nằm giữa $H$ và $O$ và chia đoạn $HO$ theo đúng tỉ lệ $2 : 1$:
   $$HG = 2 GO$$
Đây là một trong những vẻ đẹp đối xứng tuyệt mỹ nhất của hình học phẳng!

---

### Chuyên đề 3: Tọa độ Trọng tâm Baricentric trong Đồ họa Game 3D

Khi bạn chơi các tựa game 3D bom tấn hay xem phim hoạt hình Pixar, máy tính render hàng triệu tam giác đồ họa nhỏ xíu (Polygon Meshes) mỗi giây.
Làm thế nào GPU (card đồ họa) tô màu mịn màng cho các tam giác đó?
GPU sử dụng **Hệ tọa độ Trọng tâm (Barycentric Coordinates)**: Mọi điểm $P$ bên trong tam giác được biểu diễn duy nhất dưới dạng tổ hợp tỉ lệ diện tích:
$$P = \alpha A + \beta B + \gamma C \quad (\alpha + \beta + \gamma = 1)$$
Hệ tọa độ này cho phép đổ bóng ánh sáng, vẽ vật liệu da người chân thực và tạo hiệu ứng cháy nổ ngoạn mục trong thời gian thực.

---

### Chuyên đề 4: Tối ưu hóa Vị trí Kho hàng Hậu cần (Fulfillment Center)

Một công ty thương mại điện tử (Shopee, Tiki) muốn xây dựng một trung tâm chia chọn hàng hóa kết nối với 3 thành phố lớn $A, B, C$.
- Nếu lưu lượng xe tải vận chuyển đến 3 thành phố là ngang nhau, vị trí đặt kho hàng tại **Trọng tâm $G$** sẽ giảm thiểu tổng bình phương quãng đường di chuyển:
  $$GA^2 + GB^2 + GC^2 = \text{Giá trị nhỏ nhất!}$$
Tiết kiệm hàng triệu lít xăng dầu và rút ngắn thời gian giao hàng cho toàn bộ hệ thống logistic quốc gia.

---

### Chuyên đề 5: Tâm Nội tiếp và Bài toán Thiết kế Logo Thương hiệu

Tại sao các logo hình tam giác của các hãng xe sang (như Mitsubishi, Delta Air Lines) luôn tạo cảm giác cân xứng, tinh tế và dễ chịu cho mắt người nhìn?
Các nhà thiết kế đồ họa luôn đặt các biểu tượng và chữ lồng tại **Tâm đường tròn nội tiếp $I$**:
Vì tâm nội tiếp là điểm duy nhất cách đều ba cạnh mép bao quanh, khoảng cách đệm (padding) từ biểu tượng đến các cạnh luôn hoàn toàn đồng nhất, tạo nên sự hài hòa thị giác đỉnh cao theo nguyên lý Gestalt.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác",
  "questions": [
    {
      "question": "Giao điểm của ba đường trung tuyến trong một tam giác được gọi là:",
      "options": [
        "Trực tâm",
        "Trọng tâm",
        "Tâm đường tròn ngoại tiếp",
        "Tâm đường tròn nội tiếp"
      ],
      "answer": 1,
      "hint": "Điểm này là tâm cân bằng khối lượng của tam giác.",
      "explanation": "Theo định nghĩa, giao điểm của ba đường trung tuyến trong một tam giác được gọi là Trọng tâm của tam giác đó."
    },
    {
      "question": "Cho tam giác ABC có đường trung tuyến AM. Gọi G là trọng tâm tam giác. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "AG = 1/2 AM",
        "AG = 2/3 AM",
        "AG = 3/4 AM",
        "AG = 2 AM"
      ],
      "answer": 1,
      "hint": "Trọng tâm cách đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến.",
      "explanation": "Theo định lý trọng tâm: $AG = \\frac{2}{3} AM$."
    },
    {
      "question": "Giao điểm của ba đường phân giác trong tam giác có tính chất gì đặc biệt?",
      "options": [
        "Cách đều ba đỉnh của tam giác",
        "Cách đều ba cạnh của tam giác",
        "Chia mỗi đường phân giác theo tỉ lệ 2/3",
        "Luôn nằm bên ngoài tam giác"
      ],
      "answer": 1,
      "hint": "Điểm này là tâm của đường tròn tiếp xúc với cả ba cạnh (đường tròn nội tiếp).",
      "explanation": "Ba đường phân giác của tam giác đồng quy tại một điểm cách đều ba cạnh của tam giác đó (tâm đường tròn nội tiếp)."
    },
    {
      "question": "Cho tam giác ABC có đường trung tuyến AM = 12 cm. Trọng tâm G của tam giác cách trung điểm M một khoảng bằng:",
      "options": [
        "8 cm",
        "6 cm",
        "4 cm",
        "3 cm"
      ],
      "answer": 2,
      "hint": "GM = 1/3 AM = 1/3 * 12.",
      "explanation": "$GM = \\frac{1}{3} AM = \\frac{1}{3} \\cdot 12 = 4\\text{ cm}$."
    },
    {
      "question": "Trong tam giác đều, trọng tâm G và tâm đường tròn nội tiếp I:",
      "options": [
        "Trùng nhau",
        "Cách nhau một khoảng bằng bán kính",
        "Nằm ở hai phía đối diện của tam giác",
        "Không có mối quan hệ"
      ],
      "answer": 0,
      "hint": "Tam giác đều có tính đối xứng xoay tuyệt đối 120 độ quanh tâm.",
      "explanation": "Trong tam giác đều, ba đường trung tuyến đồng thời là ba đường phân giác, do đó trọng tâm $G$ và tâm nội tiếp $I$ trùng nhau hoàn toàn."
    },
    {
      "question": "Cho tam giác ABC có Góc B = 60 độ, Góc C = 40 độ. Hai đường phân giác BD và CE cắt nhau tại I. Số đo góc BIC bằng:",
      "options": [
        "120 độ",
        "130 độ",
        "140 độ",
        "110 độ"
      ],
      "answer": 1,
      "hint": "Góc IBC = 30 độ, góc ICB = 20 độ. Góc BIC = 180 - (30 + 20).",
      "explanation": "Ta có $\\widehat{IBC} = 30^\\circ$ và $\\widehat{ICB} = 20^\\circ$. Trong tam giác $IBC$: $\\widehat{BIC} = 180^\\circ - (30^\\circ + 20^\\circ) = 130^\\circ$."
    },
    {
      "question": "Một tam giác có đường trung tuyến đồng thời là đường phân giác thì tam giác đó chắc chắn là:",
      "options": [
        "Tam giác vuông",
        "Tam giác cân",
        "Tam giác đều",
        "Tam giác tù"
      ],
      "answer": 1,
      "hint": "Đường trung tuyến xuất phát từ đỉnh góc cân trùng với đường phân giác.",
      "explanation": "Nếu tam giác có đường trung tuyến đồng thời là đường phân giác xuất phát từ một đỉnh thì tam giác đó là tam giác cân tại đỉnh đó."
    },
    {
      "question": "Cho tam giác ABC có hai đường trung tuyến BM và CN cắt nhau tại G. Biết BM = CN. Tam giác ABC là tam giác gì?",
      "options": [
        "Tam giác vuông",
        "Tam giác cân tại A",
        "Tam giác cân tại B",
        "Tam giác đều"
      ],
      "answer": 1,
      "hint": "Nếu BM = CN thì GB = GC và GM = GN, dẫn tới hai tam giác ABM và ACN bằng nhau.",
      "explanation": "Tam giác có hai đường trung tuyến bằng nhau thì tam giác đó cân tại đỉnh đối diện với hai cạnh bị chia (cân tại A)."
    },
    {
      "question": "Trọng tâm của tam giác chia diện tích tam giác ban đầu thành mấy phần bằng nhau?",
      "options": [
        "2 phần",
        "3 phần",
        "4 phần",
        "6 phần"
      ],
      "answer": 1,
      "hint": "Nối G với ba đỉnh A, B, C tạo thành ba tam giác có diện tích bằng nhau.",
      "explanation": "Trọng tâm $G$ nối với ba đỉnh $A, B, C$ chia tam giác ban đầu thành 3 tam giác nhỏ ($GAB, GBC, GCA$) có diện tích bằng nhau, mỗi phần bằng 1/3 diện tích tam giác lớn."
    },
    {
      "question": "Cho tam giác vuông ABC vuông tại A có hai cạnh góc vuông AB = 6 cm, AC = 8 cm. Độ dài đường trung tuyến ứng với cạnh huyền BC bằng:",
      "options": [
        "10 cm",
        "5 cm",
        "7 cm",
        "4 cm"
      ],
      "answer": 1,
      "hint": "Cạnh huyền BC = 10 cm theo Pythagore. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.",
      "explanation": "Theo định lý Pythagore: $BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền: $AM = \\frac{BC}{2} = 5\\text{ cm}$."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho tam giác $ABC$ có hai đường trung tuyến $BD$ và $CE$ cắt nhau tại $G$. Biết $BD = 9\text{ cm}, CE = 12\text{ cm}$.
a) Tính độ dài các đoạn thẳng $GD, GB, GE, GC$.
b) Biết góc $\widehat{BGC} = 90^\circ$ (hai đường trung tuyến vuông góc với nhau), tính độ dài cạnh $BC$.

### Bài tập 2:
Cho tam giác $ABC$ cân tại $A$, đường trung tuyến $AM$. Kẻ $MD \perp AB$ tại $D$ và $ME \perp AC$ tại $E$.
a) Chứng minh rằng $\triangle ADM = \triangle AEM$.
b) Chứng minh rằng tam giác $MDE$ là tam giác cân.
c) Đường thẳng $AM$ có phải là đường trung trực của đoạn thẳng $DE$ không? Vì sao?

### Bài tập 3 (Toán thực tế):
Một khu công viên hình tam giác $ABC$ có ba cạnh là ba con đường lớn bao quanh. Ban quản lý muốn đặt một đài phun nước tại điểm $P$ bên trong công viên sao cho khoảng cách từ đài phun nước đến cả ba con đường bao quanh là hoàn toàn bằng nhau để tiện lắp đặt hệ thống đường ống tưới cỏ tự động.
a) Hãy chỉ ra cách xác định vị trí của điểm $P$ bằng compa và thước kẻ.
b) Nếu khu công viên là một tam giác đều có cạnh $300\text{ m}$, đài phun nước này có nằm tại trọng tâm của khu công viên không? Vì sao?
