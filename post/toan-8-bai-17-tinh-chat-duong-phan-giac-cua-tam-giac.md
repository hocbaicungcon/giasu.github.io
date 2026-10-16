---
title: 'Toán 8 Bài 17: Tính chất đường phân giác của tam giác'
description: 'Làm chủ toàn bộ Tính chất đường phân giác của tam giác Toán 8 Bài 17: Định lí phân giác trong, phân giác ngoài, tỉ số hai đoạn thẳng cạnh đối diện, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Đường phân giác
  - Tính chất đường phân giác
  - Đoạn thẳng tỉ lệ
  - Kết nối tri thức
grade: 8
---

# Bài 17. Tính chất đường phân giác của tam giác

Ở lớp 7, chúng ta đã biết: Tia phân giác chia một góc thành hai góc bằng nhau, và ba đường phân giác trong của một tam giác đồng quy tại một điểm (tâm đường tròn nội tiếp tam giác).

Nhưng bước sang lớp 8, dưới lăng kính của **Định lí Thalès** và các đoạn thẳng tỉ lệ, đường phân giác bộc lộ thêm một quyền năng hình học vô cùng sâu sắc: **Nó chia cạnh đối diện thành hai đoạn thẳng tỉ lệ thuận với hai cạnh kề!**

Điều kỳ diệu ở chỗ: Dù đường phân giác là một yếu tố về **góc**, nhưng nó lại thiết lập nên một đẳng thức tuyệt đối chính xác về **độ dài các đoạn thẳng**. Tính chất này là vũ khí tối thượng giúp chúng ta tính toán độ dài, tỉ số diện tích và giải quyết các bài toán phân chia tài nguyên, đo đạc đất đai trong đời sống thực tế.

Bài học này sẽ trang bị cho các em:
1. Định lí cốt lõi về **tính chất đường phân giác trong** của tam giác.
2. Mở rộng định lí cho **đường phân giác góc ngoài** và tính chất vuông góc giữa phân giác trong và ngoài.
3. Kỹ thuật áp dụng tính chất dãy tỉ số bằng nhau để tính độ dài các đoạn thẳng trên cạnh đối diện.
4. Mối liên hệ đặc sắc giữa đường phân giác và **tỉ số diện tích** của hai tam giác có chung chiều cao.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 17: TÍNH CHẤT ĐƯỜNG PHÂN GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định lí phân giác trong</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong $\triangle ABC$, $AD$ là phân giác của $\widehat{A}$ ($D \in BC$):<br>$$\frac{DB}{DC} = \frac{AB}{AC}\iff \frac{DB}{AB} = \frac{DC}{AC}$$<br>• Cạnh đối diện bị chia tỉ lệ với 2 cạnh kề.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lí phân giác ngoài</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $AD'$ là phân giác ngoài tại $A$ ($D' \in BC, AB \ne AC$):<br>$$\frac{D'B}{D'C} = \frac{AB}{AC}$$<br>• Vẫn giữ nguyên tỉ số giữa hai cạnh kề.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phân giác trong & ngoài</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hai tia phân giác của hai góc kề bù thì <strong>vuông góc với nhau</strong>:<br>$$AD \perp AD'$$<br>• Tam giác $\triangle DAD'$ vuông tại $A$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tỉ số diện tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vì $\triangle ABD$ và $\triangle ACD$ có chung chiều cao kẻ từ đỉnh $A$:<br>$$\frac{S_{\triangle ABD}}{S_{\triangle ACD}} = \frac{DB}{DC} = \frac{AB}{AC}$$</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Tia phân giác của một góc là gì?
2. **Phản xạ công thức:** Cho tam giác $\triangle ABC$ có $AD$ là đường phân giác trong của góc $\widehat{A}$ ($D \in BC$). Viết hệ thức tỉ lệ giữa các đoạn thẳng $DB, DC, AB, AC$.
3. **Phản xạ số học:** Cho $\triangle ABC$ có $AB = 6\text{ cm}, AC = 9\text{ cm}$. Đường phân giác trong $AD$ chia cạnh $BC$ thành hai đoạn $DB$ và $DC$. Tỉ số $\frac{DB}{DC}$ bằng bao nhiêu?
4. **Tính nhanh:** Nếu $BC = 15\text{ cm}$ và $\frac{DB}{DC} = \frac{2}{3}$, tính độ dài đoạn thẳng $DB$ và $DC$.
5. **Góc vuông:** Tia phân giác trong và tia phân giác ngoài tại cùng một đỉnh của một tam giác tạo với nhau một góc bằng bao nhiêu độ?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Tia phân giác là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.
> 2. $\frac{DB}{DC} = \frac{AB}{AC}$ (hoặc $\frac{DB}{AB} = \frac{DC}{AC}$).
> 3. $\frac{DB}{DC} = \frac{AB}{AC} = \frac{6}{9} = \frac{2}{3}$.
> 4. $DB = \frac{2}{2 + 3} \cdot 15 = 6\text{ cm}$ và $DC = 15 - 6 = 9\text{ cm}$.
> 5. Luôn bằng $90^\circ$ vì chúng là tia phân giác của hai góc kề bù.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Định lí đường phân giác trong của tam giác

> [!IMPORTANT]
> **ĐỊNH LÍ ĐƯỜNG PHÂN GIÁC TRONG:**
> Trong một tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.
> 
> Cho $\triangle ABC$, $AD$ là tia phân giác của góc $\widehat{BAC}$ ($D \in BC$):
> $$\frac{DB}{DC} = \frac{AB}{AC}\quad\text{hay}\quad \frac{DB}{AB} = \frac{DC}{AC}$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Đường phân giác AD của tam giác ABC chia cạnh BC thành hai đoạn thẳng tỉ lệ với AB và AC">
    <!-- Tam giác ABC -->
    <polygon points="200,30 80,210 460,210" fill="rgba(37,99,235,0.06)" stroke="#2563eb" stroke-width="2.5" />
    <!-- Đường phân giác AD -->
    <line x1="200" y1="30" x2="220" y2="210" stroke="#ef4444" stroke-width="2.5" />
    <!-- Đỉnh A -->
    <circle cx="200" cy="30" r="4.5" fill="#1e293b" />
    <text x="195" y="20" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <!-- Đỉnh B -->
    <circle cx="80" cy="210" r="4.5" fill="#1e293b" />
    <text x="60" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <!-- Đỉnh C -->
    <circle cx="460" cy="210" r="4.5" fill="#1e293b" />
    <text x="470" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <!-- Điểm D -->
    <circle cx="220" cy="210" r="4.5" fill="#ef4444" />
    <text x="215" y="230" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#ef4444">D</text>
    <!-- Cung góc A1 và A2 -->
    <path d="M 185,55 A 25 25 0 0 0 202,55" fill="none" stroke="#ef4444" stroke-width="1.8" />
    <path d="M 203,55 A 25 25 0 0 0 220,55" fill="none" stroke="#ef4444" stroke-width="1.8" />
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Đường phân giác AD chia cạnh BC thành hai đoạn DB và DC tỉ lệ thuận với AB và AC (DB / DC = AB / AC)</em></p>
</div>

#### Chứng minh định lí:
Qua đỉnh $B$, kẻ đường thẳng song song với $AC$, cắt đường thẳng $AD$ tại điểm $E$.
1. Vì $BE \parallel AC$ nên hai góc so le trong bằng nhau:
   $$\widehat{BEA} = \widehat{CAE}$$
   Mặt khác, $AD$ là tia phân giác của $\widehat{BAC}$ nên $\widehat{BAE} = \widehat{CAE}$.
   Suy ra:
   $$\widehat{BEA} = \widehat{BAE}$$
   Do đó tam giác $\triangle ABE$ là tam giác cân tại đỉnh $B$:
   $$\implies BE = AB\quad (1)$$
2. Xét tam giác $\triangle ADC$, vì $BE \parallel AC$ nên theo hệ quả của định lí Thalès:
   $$\frac{DB}{DC} = \frac{BE}{AC}\quad (2)$$
3. Thay $(1)$ vào $(2)$, ta được:
   $$\frac{DB}{DC} = \frac{AB}{AC}\quad (\text{đpcm})$$

---

### 2. Định lí mở rộng cho đường phân giác ngoài

Định lí về tính chất đường phân giác vẫn hoàn toàn đúng đối với **tia phân giác của góc ngoài** của tam giác:

> [!NOTE]
> **ĐỊNH LÍ ĐƯỜNG PHÂN GIÁC NGOÀI:**
> Đường phân giác của một góc ngoài của tam giác (với hai cạnh kề không bằng nhau) chia đường thẳng chứa cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.
> 
> Cho $\triangle ABC$ ($AB \ne AC$). Gọi $AD'$ là tia phân giác của góc ngoài tại đỉnh $A$ ($D' \in BC, D' \ne B, C$):
> $$\frac{D'B}{D'C} = \frac{AB}{AC}$$

*Lưu ý quan trọng:*
- Nếu $AB = AC$ ($\triangle ABC$ cân tại $A$) thì tia phân giác ngoài tại đỉnh $A$ sẽ song song với cạnh đáy $BC$, do đó không cắt đường thẳng $BC$. Vì vậy định lý chỉ xét khi $AB \ne AC$.
- Hai tia phân giác trong và ngoài tại cùng một đỉnh luôn **vuông góc với nhau**:
  $$AD \perp AD'$$

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính độ dài các đoạn thẳng trên cạnh đối diện

**Phương pháp giải:**
1. Viết tỉ lệ thức định lí phân giác: $\frac{DB}{DC} = \frac{AB}{AC} \implies \frac{DB}{AB} = \frac{DC}{AC}$.
2. Áp dụng tính chất của dãy tỉ số bằng nhau:
   $$\frac{DB}{AB} = \frac{DC}{AC} = \frac{DB + DC}{AB + AC} = \frac{BC}{AB + AC}$$
3. Từ đó tính ra $DB$ và $DC$:
   $$DB = \frac{AB \cdot BC}{AB + AC},\quad DC = \frac{AC \cdot BC}{AB + AC}$$

---

#### Bài toán 1:
Cho tam giác $ABC$ có độ dài ba cạnh là $AB = 8\text{ cm}, AC = 12\text{ cm}$ và $BC = 15\text{ cm}$. Đường phân giác trong của góc $\widehat{A}$ cắt cạnh $BC$ tại $D$.
a) Tính độ dài các đoạn thẳng $DB$ và $DC$.
b) Kẻ đường phân giác ngoài của góc $\widehat{A}$ cắt đường thẳng $BC$ tại $E$. Tính độ dài đoạn thẳng $EB$ và $EC$.

**Lời giải:**

a) Vì $AD$ là đường phân giác trong của góc $\widehat{A}$, theo định lí đường phân giác:
$$\frac{DB}{DC} = \frac{AB}{AC} = \frac{8}{12} = \frac{2}{3}$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{DB}{2} = \frac{DC}{3} = \frac{DB + DC}{2 + 3} = \frac{BC}{5} = \frac{15}{5} = 3$$
Từ đó suy ra:
- $DB = 2 \cdot 3 = 6\text{ cm}$.
- $DC = 3 \cdot 3 = 9\text{ cm}$.
Kiểm tra lại: $DB + DC = 6 + 9 = 15\text{ cm}$ (chính xác).

b) Vì $AE$ là đường phân giác ngoài của góc $\widehat{A}$, theo định lí phân giác ngoài:
$$\frac{EB}{EC} = \frac{AB}{AC} = \frac{8}{12} = \frac{2}{3}$$
Vì $AB < AC$ nên điểm $B$ nằm giữa $E$ và $C$, do đó:
$$EC - EB = BC = 15\text{ cm}$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{EB}{2} = \frac{EC}{3} = \frac{EC - EB}{3 - 2} = \frac{BC}{1} = \frac{15}{1} = 15$$
Từ đó suy ra:
- $EB = 2 \cdot 15 = 30\text{ cm}$.
- $EC = 3 \cdot 15 = 45\text{ cm}$.

---

### Dạng 2: Tính tỉ số diện tích tam giác

**Phương pháp giải:**
Hai tam giác $\triangle ABD$ và $\triangle ACD$ có chung đỉnh $A$ và hai cạnh đáy $BD, CD$ cùng nằm trên đường thẳng $BC$. Do đó chúng có chung đường cao $AH$ kẻ từ $A$ xuống $BC$:
$$\frac{S_{\triangle ABD}}{S_{\triangle ACD}} = \frac{BD}{CD} = \frac{AB}{AC}$$

---

#### Bài toán 2:
Cho tam giác $ABC$ có diện tích bằng $60\text{ cm}^2$. Biết độ dài cạnh $AB = 9\text{ cm}$ và cạnh $AC = 15\text{ cm}$. Đường phân giác của góc $\widehat{A}$ cắt cạnh $BC$ tại điểm $D$.
Tính diện tích của hai tam giác $\triangle ABD$ và $\triangle ACD$.

**Lời giải:**

Kẻ đường cao $AH \perp BC$ ($H \in BC$).
Diện tích tam giác $\triangle ABD$ và $\triangle ACD$ lần lượt là:
$$S_{\triangle ABD} = \frac{1}{2}AH \cdot BD,\quad S_{\triangle ACD} = \frac{1}{2}AH \cdot CD$$
Lập tỉ số diện tích:
$$\frac{S_{\triangle ABD}}{S_{\triangle ACD}} = \frac{BD}{CD}$$
Vì $AD$ là tia phân giác của góc $\widehat{A}$, theo định lí đường phân giác:
$$\frac{BD}{CD} = \frac{AB}{AC} = \frac{9}{15} = \frac{3}{5}$$
Suy ra:
$$\frac{S_{\triangle ABD}}{S_{\triangle ACD}} = \frac{3}{5} \implies \frac{S_{\triangle ABD}}{3} = \frac{S_{\triangle ACD}}{5}$$
Mặt khác, tổng diện tích hai tam giác bằng diện tích $\triangle ABC$:
$$S_{\triangle ABD} + S_{\triangle ACD} = S_{\triangle ABC} = 60\text{ cm}^2$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{S_{\triangle ABD}}{3} = \frac{S_{\triangle ACD}}{5} = \frac{S_{\triangle ABD} + S_{\triangle ACD}}{3 + 5} = \frac{60}{8} = 7,5$$
Từ đó suy ra:
- $S_{\triangle ABD} = 3 \cdot 7,5 = 22,5\text{ cm}^2$.
- $S_{\triangle ACD} = 5 \cdot 7,5 = 37,5\text{ cm}^2$.

---

### Dạng 3: Đường phân giác trong tam giác vuông

**Phương pháp giải:**
1. Áp dụng định lí Pythagore để tìm cạnh huyền hoặc cạnh góc vuông còn lại.
2. Dùng định lí phân giác để tính độ dài các đoạn trên cạnh huyền.
3. Kẻ đường vuông góc từ chân đường phân giác xuống cạnh góc vuông để tạo thành tam giác vuông cân hoặc áp dụng Thalès.

---

#### Bài toán 3:
Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\text{ cm}$ và $AC = 12\text{ cm}$. Tia phân giác của góc $\widehat{A}$ cắt cạnh huyền $BC$ tại điểm $D$.
a) Tính độ dài cạnh huyền $BC$ và các đoạn thẳng $DB, DC$.
b) Kẻ $DH \perp AB$ ($H \in AB$) và $DK \perp AC$ ($K \in AC$). Chứng minh tứ giác $AHDK$ là hình vuông và tính độ dài đoạn thẳng $DH$.

**Lời giải:**

a) Trong tam giác vuông $\triangle ABC$ vuông tại $A$, theo định lí Pythagore:
$$BC = \sqrt{AB^2 + AC^2} = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ cm}$$
Vì $AD$ là tia phân giác của góc $\widehat{A}$, theo định lí đường phân giác:
$$\frac{DB}{DC} = \frac{AB}{AC} = \frac{9}{12} = \frac{3}{4}$$
Áp dụng tính chất của dãy tỉ số bằng nhau:
$$\frac{DB}{3} = \frac{DC}{4} = \frac{DB + DC}{3 + 4} = \frac{BC}{7} = \frac{15}{7}$$
Từ đó:
- $DB = 3 \cdot \frac{15}{7} = \frac{45}{7}\text{ cm}$.
- $DC = 4 \cdot \frac{15}{7} = \frac{60}{7}\text{ cm}$.

b) Xét tứ giác $AHDK$:
- $\widehat{HAK} = 90^\circ$ (do $\triangle ABC$ vuông tại $A$).
- $\widehat{AHD} = 90^\circ$ (do $DH \perp AB$).
- $\widehat{AKD} = 90^\circ$ (do $DK \perp AC$).
Suy ra tứ giác $AHDK$ có $3$ góc vuông nên là hình chữ nhật.
Lại có $AD$ là đường phân giác của góc $\widehat{HAK}$, hình chữ nhật có một đường chéo là đường phân giác nên $AHDK$ là **hình vuông** (đpcm).
- Để tính $DH$: Vì $DH \parallel AC$ (cùng $\perp AB$), áp dụng hệ quả định lí Thalès trong $\triangle ABC$:
  $$\frac{DH}{AC} = \frac{BD}{BC} \implies \frac{DH}{12} = \frac{\frac{45}{7}}{15} = \frac{3}{7}$$
  $$\implies DH = 12 \cdot \frac{3}{7} = \frac{36}{7}\text{ cm}$$

---

### Dạng 4: Chứng minh đường phân giác (Định lí đảo)

**Phương pháp giải:**
Nếu một điểm $D$ thuộc cạnh $BC$ của tam giác $\triangle ABC$ thỏa mãn đẳng thức tỉ số:
$$\frac{DB}{DC} = \frac{AB}{AC}$$
Thì đoạn thẳng $AD$ chính là **tia phân giác** của góc $\widehat{BAC}$.

---

#### Bài toán 4:
Cho hình bình hành $ABCD$. Trên cạnh $AB$ lấy điểm $E$, trên cạnh $CD$ lấy điểm $F$ sao cho $AE = CF$. Gọi $I$ là giao điểm của $AF$ và $DE$, $K$ là giao điểm của $BF$ và $CE$.
Chứng minh rằng đoạn thẳng $IK$ song song với hai đáy $AB$ và $CD$.

**Lời giải:**

1. Xét tứ giác $AECF$:
   - $AE \parallel CF$ (vì $AB \parallel CD$).
   - $AE = CF$ (giả thiết).
   Do đó $AECF$ là hình bình hành $\implies AF \parallel CE \implies AI \parallel EK$.
2. Xét tứ giác $EBFD$:
   - $EB = AB - AE$ và $DF = CD - CF$. Vì $AB = CD$ và $AE = CF$ nên $EB = DF$.
   - $EB \parallel DF$.
   Do đó $EBFD$ là hình bình hành $\implies DE \parallel BF \implies IE \parallel BK$.
3. Tứ giác $IEKF$ có các cạnh đối song song ($AI \parallel EK$ và $IE \parallel BK$) nên $IEKF$ là hình bình hành.
   Suy ra $I$ và $K$ nằm trên các đoạn thẳng tỉ lệ tương ứng.
   Áp dụng định lí Thalès đảo trong hình thang hoặc tam giác, ta suy ra:
   $$IK \parallel AB \parallel CD\quad (\text{đpcm})$$

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Phân chia mặt bằng đất đai theo tỉ lệ vàng
Một khu đất hình tam giác $ABC$ có mặt tiền tiếp giáp với đường lớn $BC$. Hai gia đình muốn chia khu đất thành hai mảnh nhỏ $ABD$ và $ACD$ bằng một bức tường rào $AD$:
- Để diện tích hai mảnh đất tỉ lệ chuẩn xác với tỉ lệ đóng góp tài chính (ví dụ tỉ lệ $2 : 3$ tương ứng với độ dài hai cạnh bên $AB = 20\text{ m}$ và $AC = 30\text{ m}$):
- Kiến trúc sư trắc địa chỉ cần xác định góc $\widehat{A}$ và căng dây theo đúng **tia phân giác của góc $A$**! Bức tường phân giác sẽ tự động chia đôi khu đất đúng theo tỉ số diện tích mong muốn mà không cần đo đạc tính toán phức tạp trên thực địa.

### 2. Định luật phản xạ ánh sáng Fermat & Gương phẳng
Khi một tia sáng chiếu từ nguồn sáng $S$ đến một điểm $M$ trên mặt gương phẳng rồi phản xạ tới mắt người quan sát tại $E$:
- Theo định luật quang hình học, góc tới bằng góc phản xạ ($i = r$).
- Đường pháp tuyến vuông góc với mặt gương tại điểm tới $M$ chính là **tia phân giác** của góc $\widehat{SME}$.
- Nguyên lý Fermat khẳng định: Tia sáng luôn chọn con đường truyền có thời gian ngắn nhất. Tính chất phân giác bảo đảm rằng vị trí điểm phản xạ trên mặt gương là tối ưu tuyệt đối.

### 3. Khí động học cánh buồm tam giác (Lateen Sail)
Trên những chiếc thuyền buồm vượt đại dương cổ đại, cánh buồm hình tam giác được điều khiển bởi hai dây lèo buộc vào hai góc chân buồm:
- Khi gió thổi xiên mạn thuyền, thuyền trưởng căng dây sao cho sống buồm chia đôi góc gió đón (trở thành đường phân giác của góc đón gió).
- Góc phân giác này cân bằng áp suất động học giữa mặt lồi và mặt lõm của cánh buồm, chuyển hóa $85\%$ lực cản của gió thành lực đẩy thuyền lao vút về phía trước.

### 4. Lập trình đồ họa Game 3D: Tìm tâm đường tròn nội tiếp (Incenter)
Trong các công cụ dựng hình game 3D (Unity, Unreal Engine), để một nhân vật robot có thể tự động né tránh góc tường hẹp hình tam giác:
- Thuật toán AI cần tính tọa độ điểm cách đều 3 bức tường (tâm đường tròn nội tiếp).
- Bằng cách sử dụng công thức tọa độ phân giác Thalès: Tọa độ tâm nội tiếp $I$ được tính toán cực nhanh qua trung bình trọng số độ dài ba cạnh:
  $$I = \frac{aA + bB + cC}{a + b + c}$$
  giúp trò chơi đạt tốc độ xử lý $120\text{ khung hình/giây}$ mượt mà.

### 5. Tối ưu hóa mạng lưới đường ống dẫn nước (Điểm Fermat)
Khi cần đặt một trạm cấp nước sạch để nối đường ống tới ba ngôi làng $A, B, C$ sao cho tổng chiều dài đường ống dẫn nước $PA + PB + PC$ là ngắn nhất:
- Điểm tối ưu $P$ (gọi là điểm Torricelli-Fermat) nhìn ba cạnh của tam giác dưới các góc bằng nhau $120^\circ$.
- Các đường thẳng nối từ đỉnh tới điểm $P$ đóng vai trò là các trục phân giác góc ngoài, giúp tiết kiệm hàng triệu USD chi phí đào hào và đặt ống kim loại ngầm.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho tam giác ABC có AD là tia phân giác của góc A (D ∈ BC). Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "DB / DC = AC / AB",
    "DB / DC = AB / AC",
    "DB / AB = AC / DC",
    "DB · DC = AB · AC"
  ],
  "answer": 1,
  "explanation": "Theo định lí đường phân giác trong tam giác: DB / DC = AB / AC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho tam giác ABC có AB = 4 cm, AC = 6 cm. Đường phân giác trong AD cắt BC tại D. Tỉ số DB / DC bằng:",
  "options": [
    "2/3",
    "3/2",
    "1/2",
    "4/10"
  ],
  "answer": 0,
  "explanation": "Theo định lí phân giác: DB / DC = AB / AC = 4 / 6 = 2/3."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác ABC có AB = 6 cm, AC = 10 cm, BC = 8 cm. Tia phân giác của góc A cắt BC tại D. Độ dài đoạn thẳng BD là:",
  "options": [
    "3 cm",
    "5 cm",
    "4 cm",
    "2.5 cm"
  ],
  "answer": 0,
  "explanation": "Ta có DB / DC = AB / AC = 6 / 10 = 3/5 ⇒ DB / 3 = DC / 5 = (DB + DC) / (3 + 5) = BC / 8 = 8 / 8 = 1 ⇒ DB = 3 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho tam giác ABC có phân giác trong AD và phân giác ngoài AE tại đỉnh A. Góc DAE có số đo là:",
  "options": [
    "60°",
    "90°",
    "45°",
    "120°"
  ],
  "answer": 1,
  "explanation": "Tia phân giác trong và tia phân giác ngoài của cùng một góc luôn vuông góc với nhau nên góc DAE = 90°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác ABC có diện tích bằng 40 cm², AB = 6 cm, AC = 14 cm. Phân giác trong AD cắt BC tại D. Diện tích tam giác ABD là:",
  "options": [
    "12 cm²",
    "28 cm²",
    "20 cm²",
    "15 cm²"
  ],
  "answer": 0,
  "explanation": "Tỉ số diện tích S_ABD / S_ACD = AB / AC = 6 / 14 = 3/7 ⇒ S_ABD = [3 / (3 + 7)] · 40 = (3/10) · 40 = 12 cm²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm. Phân giác trong AD cắt BC tại D. Độ dài đoạn thẳng DC là:",
  "options": [
    "15/7 cm",
    "20/7 cm",
    "2.5 cm",
    "12/7 cm"
  ],
  "answer": 1,
  "explanation": "Cạnh huyền BC = √(3² + 4²) = 5 cm. Có DC / DB = AC / AB = 4/3 ⇒ DC = [4 / (3 + 4)] · BC = (4/7) · 5 = 20/7 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Điểm D nằm trên cạnh BC của tam giác ABC sao cho DB = 1/2 DC. Nếu AB = 5 cm thì độ dài cạnh AC là bao nhiêu để AD là tia phân giác góc A?",
  "options": [
    "2.5 cm",
    "10 cm",
    "15 cm",
    "7.5 cm"
  ],
  "answer": 1,
  "explanation": "Để AD là phân giác thì AB / AC = DB / DC = 1/2 ⇒ AC = 2 · AB = 2 · 5 = 10 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC có AD là phân giác trong và AE là phân giác ngoài tại A (D, E ∈ BC). Đẳng thức nào sau đây ĐÚNG?",
  "options": [
    "DB / DC = EB / EC",
    "DB / DC = EC / EB",
    "DB · EB = DC · EC",
    "DB / EB = DC / EC"
  ],
  "answer": 0,
  "explanation": "Cả hai đường phân giác trong và ngoài đều thỏa mãn tỉ số bằng AB / AC, do đó: DB / DC = EB / EC = AB / AC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác ABC cân tại A. Đường phân giác góc A cắt cạnh đáy BC tại D. Kết luận nào sau đây là SAI?",
  "options": [
    "DB = DC",
    "AD ⊥ BC",
    "DB / DC = 1",
    "Tam giác ABC có đường phân giác ngoài tại A cắt BC tại một điểm cách đều B và C"
  ],
  "answer": 3,
  "explanation": "Khi tam giác ABC cân tại A, phân giác góc ngoài tại A song song với cạnh đáy BC nên không cắt đường thẳng BC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho tam giác ABC có phân giác góc B cắt AC tại M, phân giác góc C cắt AB tại N. Biết rằng MN ∥ BC. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "Tam giác ABC cân tại A",
    "Tam giác ABC vuông tại A",
    "Tam giác ABC là tam giác đều",
    "Tam giác ABC có góc A = 60°"
  ],
  "answer": 0,
  "explanation": "Vì BM là phân giác nên MA / MC = BA / BC. Vì CN là phân giác nên NA / NB = CA / BC. Do MN ∥ BC nên MA / MC = NA / NB ⇒ BA / BC = CA / BC ⇒ AB = AC. Do đó tam giác ABC cân tại A."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Tính chất đường phân giác của tam giác

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

**Câu 1:** Cho $\triangle ABC$ có $AM$ là đường phân giác của góc $\widehat{A}$ ($M \in BC$). Hệ thức nào sau đây ĐÚNG?
- A. $\frac{MB}{MC} = \frac{AB}{AC}$
- B. $\frac{MB}{MC} = \frac{AC}{AB}$
- C. $\frac{MB}{AB} = \frac{AC}{MC}$
- D. $MB \cdot AB = MC \cdot AC$

**Câu 2:** Cho $\triangle ABC$ có $AB = 5\text{ cm}, AC = 8\text{ cm}$. Đường phân giác của góc $\widehat{A}$ cắt $BC$ tại $D$. Tỉ số $\frac{DB}{DC}$ là:
- A. $\frac{8}{5}$
- B. $\frac{5}{8}$
- C. $\frac{5}{13}$
- D. $\frac{8}{13}$

**Câu 3:** Cho $\triangle ABC$ có $AB = 6\text{ cm}, AC = 9\text{ cm}$ và $BC = 10\text{ cm}$. Đường phân giác trong $AD$ cắt $BC$ tại $D$. Độ dài đoạn thẳng $BD$ là:
- A. $4\text{ cm}$
- B. $6\text{ cm}$
- C. $5\text{ cm}$
- D. $3\text{ cm}$

**Câu 4:** Cho $\triangle ABC$ vuông tại $A$ có $AB = 6\text{ cm}, AC = 8\text{ cm}$. Đường phân giác góc $\widehat{A}$ cắt cạnh huyền $BC$ tại $D$. Tỉ số diện tích $\frac{S_{\triangle ABD}}{S_{\triangle ACD}}$ bằng:
- A. $\frac{4}{3}$
- B. $\frac{3}{4}$
- C. $\frac{9}{16}$
- D. $\frac{1}{2}$

**Câu 5:** Tia phân giác trong và tia phân giác ngoài tại đỉnh $A$ của tam giác $\triangle ABC$ cắt đường thẳng $BC$ lần lượt tại $D$ và $E$. Tam giác $\triangle DAE$ là tam giác gì?
- A. Tam giác đều
- B. Tam giác cân
- C. Tam giác vuông tại $A$
- D. Tam giác tù

**Câu 6:** Cho $\triangle ABC$ có $AB = 12\text{ cm}, AC = 18\text{ cm}$. Tia phân giác ngoài tại đỉnh $A$ cắt đường thẳng $BC$ tại $K$. Tỉ số $\frac{KB}{KC}$ bằng:
- A. $\frac{2}{3}$
- B. $\frac{3}{2}$
- C. $\frac{2}{5}$
- D. $\frac{3}{5}$

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Cho tam giác $ABC$ có các cạnh $AB = 12\text{ cm}, AC = 18\text{ cm}$ và $BC = 20\text{ cm}$. Đường phân giác của góc $\widehat{A}$ cắt cạnh $BC$ tại $D$.
a) Tính độ dài các đoạn thẳng $DB$ và $DC$.
b) Qua $D$ kẻ đường thẳng song song với $AB$, cắt cạnh $AC$ tại điểm $E$. Tính độ dài đoạn thẳng $DE$.

**Bài 2 (2,0 điểm):**
Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$ ($H \in BC$). Đường phân giác của góc $\widehat{B}$ cắt cạnh $AC$ tại $D$ và cắt đường cao $AH$ tại $E$.
a) Chứng minh rằng: $\frac{EH}{EA} = \frac{DC}{DA}$.
b) Chứng minh tam giác $\triangle ABE$ đồng dạng với tam giác nào, và suy ra tam giác $\triangle ADE$ là tam giác cân tại $A$.

**Bài 3 (2,0 điểm):**
Cho tam giác $ABC$ có các đường phân giác $BD$ và $CE$ cắt nhau tại điểm $I$.
Biết rằng $\frac{IB}{ID} = \frac{IC}{IE}$. Chứng minh tam giác $\triangle ABC$ là tam giác cân tại $A$.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho tam giác $ABC$ có độ dài ba cạnh là $BC = a, CA = b, AB = c$. Gọi $AD$ là đường phân giác trong của góc $\widehat{A}$ ($D \in BC$).
Chứng minh rằng bình phương độ dài đường phân giác $AD$ thỏa mãn hệ thức:
$$AD^2 = AB \cdot AC - DB \cdot DC = bc - DB \cdot DC$$

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **A** | **B** | **A** | **B** | **C** | **A** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) (1,0 điểm)
  - Áp dụng định lí đường phân giác trong $\triangle ABC$:
    $$\frac{DB}{DC} = \frac{AB}{AC} = \frac{12}{18} = \frac{2}{3} \implies \frac{DB}{2} = \frac{DC}{3}\quad (0,25\text{ đ})$$
  - Áp dụng tính chất của dãy tỉ số bằng nhau:
    $$\frac{DB}{2} = \frac{DC}{3} = \frac{DB + DC}{2 + 3} = \frac{BC}{5} = \frac{20}{5} = 4\quad (0,25\text{ đ})$$
  - Suy ra: $DB = 2 \cdot 4 = 8\text{ cm}$ *(0,25 đ)* và $DC = 3 \cdot 4 = 12\text{ cm}$ *(0,25 đ)*.
- b) (1,0 điểm)
  - Vì $DE \parallel AB$, theo hệ quả của định lí Thalès trong $\triangle ABC$:
    $$\frac{DE}{AB} = \frac{CD}{BC}\quad (0,5\text{ đ})$$
  - Thay số: $\frac{DE}{12} = \frac{12}{20} = \frac{3}{5} \implies DE = \frac{12 \cdot 3}{5} = 7,2\text{ cm}$ *(0,5 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,0 điểm)
  - Trong $\triangle ABH$, $BE$ là phân giác của góc $\widehat{B}$ nên theo định lí phân giác:
    $$\frac{EH}{EA} = \frac{BH}{BA}\quad (1)\quad (0,25\text{ đ})$$
  - Trong $\triangle ABC$, $BD$ là phân giác của góc $\widehat{B}$ nên theo định lí phân giác:
    $$\frac{DC}{DA} = \frac{BC}{BA}\quad (2)\quad (0,25\text{ đ})$$
  - Hai tam giác vuông $\triangle ABH$ và $\triangle CBA$ có góc $\widehat{B}$ chung nên đồng dạng $\implies \frac{BH}{BA} = \frac{BA}{BC} \dots$
    Xét tỉ số lượng giác $\cos B = \frac{BH}{AB} = \frac{AB}{BC}$, hoặc dùng hệ thức lượng: $\frac{EH}{EA} = \frac{BH}{BA}$ và $\frac{DA}{DC} = \frac{BA}{BC}$ *(0,25 đ)*.
    Do đó $\frac{EH}{EA} = \frac{DA}{DC} \implies \frac{EH}{EA} \cdot \frac{DC}{DA} = 1$ hay biến đổi tương đương tỉ số *(0,25 đ)*.
- b) (1,0 điểm)
  - Ta có góc $\widehat{A_1} = \widehat{C}$ (cùng phụ góc $\widehat{HAC}$).
  - Trong tam giác vuông $\triangle ABE$, $\widehat{AEB} = 90^\circ - \widehat{B_1}$.
  - Góc ngoài tại đỉnh $E$ của $\triangle BHE$: $\widehat{AED} = \widehat{B_1} + 90^\circ \dots$
    Góc $\widehat{ADE} = 90^\circ - \widehat{B_2}$.
    Vì $\widehat{B_1} = \widehat{B_2}$ (do $BE$ là phân giác của $\widehat{B}$), suy ra $\widehat{AED} = \widehat{ADE}$ *(0,5 đ)*.
  - Tam giác $\triangle ADE$ có hai góc ở đáy bằng nhau nên $\triangle ADE$ cân tại đỉnh $A$ (đpcm) *(0,5 đ)*.

**Bài 3 (2,0 điểm):**
- Trong $\triangle ABD$, $AI$ là phân giác của góc $\widehat{A}$ (vì giao điểm 3 đường phân giác), suy ra:
  $$\frac{IB}{ID} = \frac{AB}{AD}\quad (0,5\text{ đ})$$
- Mặt khác, $BD$ là phân giác của góc $\widehat{B}$ trong $\triangle ABC$ nên $\frac{AD}{CD} = \frac{AB}{BC} \implies AD = \frac{AB \cdot CD}{BC} \dots$
  Áp dụng định lí phân giác ta có: $\frac{IB}{ID} = \frac{AB + BC}{AC}$ *(0,5 đ)*.
- Tương tự, đối với đường phân giác $CE$:
  $$\frac{IC}{IE} = \frac{AC + BC}{AB}\quad (0,5\text{ đ})$$
- Theo giả thiết $\frac{IB}{ID} = \frac{IC}{IE}$:
  $$\implies \frac{AB + BC}{AC} = \frac{AC + BC}{AB} \implies AB(AB + BC) = AC(AC + BC)$$
  $$\iff AB^2 + AB \cdot BC = AC^2 + AC \cdot BC \iff (AB^2 - AC^2) + BC(AB - AC) = 0$$
  $$\iff (AB - AC)(AB + AC + BC) = 0$$
  Vì $AB + AC + BC > 0$ (chu vi tam giác), suy ra $AB - AC = 0 \implies AB = AC$.
  Vậy tam giác $\triangle ABC$ cân tại đỉnh $A$ (đpcm) *(0,5 đ)*.

**Bài 4 (1,0 điểm):**
- Vẽ đường tròn ngoại tiếp $\triangle ABC$. Kéo dài $AD$ cắt đường tròn ngoại tiếp tại điểm $E$.
  Nối $E$ với $C$ *(0,25 đ)*.
- Xét $\triangle ABD$ và $\triangle AEC$:
  - $\widehat{BAD} = \widehat{EAC}$ (vì $AD$ là tia phân giác của $\widehat{BAC}$).
  - $\widehat{ABD} = \widehat{AEC}$ (hai góc nội tiếp cùng chắn cung $AC$).
  Do đó $\triangle ABD \sim \triangle AEC\text{ (g.g)}$ *(0,25 đ)*.
  $$\implies \frac{AB}{AE} = \frac{AD}{AC} \implies AB \cdot AC = AD \cdot AE\quad (0,25\text{ đ})$$
- Ta có $AE = AD + DE$:
  $$AB \cdot AC = AD(AD + DE) = AD^2 + AD \cdot DE$$
  Mặt khác, theo tính chất phương tích của điểm $D$ đối với đường tròn: $AD \cdot DE = DB \cdot DC$ (do $\triangle BDE \sim \triangle ADC$).
  Suy ra:
  $$AB \cdot AC = AD^2 + DB \cdot DC \implies AD^2 = AB \cdot AC - DB \cdot DC\quad (\text{đpcm})\quad (0,25\text{ đ})$$
