---
title: 'Toán 7 Bài 32: Quan hệ giữa đường vuông góc và đường xiên'
description: 'Làm chủ định lý quan hệ giữa đường vuông góc và đường xiên Toán 7 Bài 32: Khoảng cách từ một điểm đến đường thẳng, đường vuông góc ngắn hơn mọi đường xiên, hình chiếu, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Đường vuông góc
  - Đường xiên
  - Hình chiếu
  - Khoảng cách
  - Kết nối tri thức
grade: 7
---

# Bài 32. Quan hệ giữa đường vuông góc và đường xiên

Trong quy hoạch giao thông đô thị và xây dựng đê điều, một câu hỏi luôn được các kỹ sư đặt ra đầu tiên: *"Từ một ngôi làng (điểm $A$) muốn xây một con đường nối ra quốc lộ hay bờ kênh (đường thẳng $d$), làm thế nào để con đường có chiều dài ngắn nhất, tiết kiệm chi phí giải phóng mặt bằng và vật liệu xây dựng nhất?"*.

Câu trả lời trực quan mà ai trong chúng ta cũng biết là: **Phải đi thẳng vuông góc!** Nhưng tại sao đường vuông góc lại luôn luôn ngắn hơn mọi con đường xiên khác? Điều này được chứng minh chặt chẽ như thế nào bằng ngôn ngữ toán học?

Bài 32 sẽ giúp các em giải mã định lý hình học tuyệt mỹ về **Quan hệ giữa đường vuông góc và đường xiên**, làm quen với khái niệm hình chiếu và ứng dụng nguyên lý tối ưu khoảng cách vào vô số bài toán thực tiễn của cuộc sống.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 32: ĐƯỜNG VUÔNG GÓC & ĐƯỜNG XIÊN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Kẻ $AH \perp d$ tại $H$:<br>  - $AH$: Đoạn vuông góc.<br>  - $H$: Chân đường vuông góc (hình chiếu của $A$).<br>• Điểm $B \in d$ ($B \neq H$): $AB$ là <strong>đường xiên</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lý ngắn nhất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Trong các đoạn thẳng nối điểm $A$ với các điểm trên $d$:<br>• Đoạn vuông góc là đoạn <strong>ngắn nhất</strong>:<br>  $$AH < AB \quad (\forall B \neq H)$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Khoảng cách đến đường thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Độ dài đoạn vuông góc $AH$ gọi là <strong>khoảng cách từ điểm $A$ đến đường thẳng $d$</strong>.<br>• Kí hiệu: $d(A, d) = AH$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quan hệ Hình chiếu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $HB$ là hình chiếu của đường xiên $AB$.<br>• Đường xiên lớn hơn $\iff$ Hình chiếu lớn hơn.<br>• Hai đường xiên bằng nhau $\iff$ Hai hình chiếu bằng nhau.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm vuông góc:** Hai đường thẳng vuông góc tạo thành góc bao nhiêu độ?
2. **Cạnh lớn nhất trong tam giác vuông:** Trong tam giác vuông, cạnh nào luôn là cạnh có độ dài lớn nhất? Vì sao?
3. **Quan hệ góc:** Trong một tam giác vuông, một góc nhọn có thể lớn hơn $90^\circ$ được không?
4. **Khoảng cách:** Khoảng cách ngắn nhất giữa hai điểm bất kỳ trong hình học phẳng là hình gì?
5. **Thực tế:** Một người đang bơi ở giữa sông muốn bơi vào bờ nhanh nhất (với vận tốc bơi không đổi và bỏ qua dòng nước chảy) thì nên bơi theo hướng nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Góc vuông $90^\circ$.
> 2. Cạnh huyền (vì đối diện với góc vuông $90^\circ$ là góc lớn nhất).
> 3. Không thể, vì hai góc nhọn phụ nhau có tổng bằng $90^\circ$ nên mỗi góc đều $< 90^\circ$.
> 4. Đoạn thẳng nối hai điểm đó.
> 5. Bơi theo hướng vuông góc với mép bờ sông.

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Đường vuông góc và Đường xiên

Cho đường thẳng $d$ và một điểm $A$ không nằm trên $d$:
- Kẻ đoạn thẳng $AH$ vuông góc với đường thẳng $d$ tại điểm $H$ ($H \in d$).
  + Đoạn thẳng $AH$ gọi là **đoạn vuông góc** (hay **đường vuông góc**) kẻ từ $A$ đến đường thẳng $d$.
  + Điểm $H$ gọi là **chân đường vuông góc** hoặc **hình chiếu** của điểm $A$ trên đường thẳng $d$.
- Lấy một điểm $B$ bất kỳ trên đường thẳng $d$ ($B \neq H$).
  + Đoạn thẳng $AB$ gọi là một **đường xiên** kẻ từ $A$ đến đường thẳng $d$.
  + Đoạn thẳng $HB$ gọi là **hình chiếu của đường xiên $AB$** trên đường thẳng $d$.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình đường vuông góc, đường xiên và hình chiếu">
    <!-- Đường thẳng d -->
    <line x1="40" y1="200" x2="500" y2="200" stroke="#334155" stroke-width="2.5" />
    <text x="510" y="205" font-size="16" font-weight="700" fill="#334155">d</text>
    
    <!-- Điểm A -->
    <circle cx="160" cy="50" r="5" fill="#2563eb" />
    <text x="155" y="38" font-size="16" font-weight="700" fill="#1e293b">A</text>

    <!-- Đường vuông góc AH -->
    <line x1="160" y1="50" x2="160" y2="200" stroke="#dc2626" stroke-width="2.5" />
    <circle cx="160" cy="200" r="4" fill="#dc2626" />
    <text x="165" y="220" font-size="15" font-weight="700" fill="#dc2626">H (Hình chiếu của A)</text>
    <text x="70" y="130" font-size="14" font-weight="600" fill="#dc2626">Đoạn vuông góc</text>

    <!-- Kí hiệu góc vuông tại H -->
    <path d="M 160 185 L 175 185 L 175 200" fill="none" stroke="#dc2626" stroke-width="1.5" />

    <!-- Đường xiên AB1 -->
    <line x1="160" y1="50" x2="320" y2="200" stroke="#2563eb" stroke-width="2" />
    <circle cx="320" cy="200" r="4" fill="#2563eb" />
    <text x="315" y="220" font-size="15" font-weight="700" fill="#2563eb">B</text>
    <text x="260" y="115" font-size="14" font-weight="600" fill="#2563eb">Đường xiên AB</text>

    <!-- Hình chiếu HB -->
    <line x1="160" y1="197" x2="320" y2="197" stroke="#059669" stroke-width="4" stroke-linecap="round" />
    <text x="210" y="188" font-size="13" font-weight="700" fill="#059669">Hình chiếu HB</text>

    <!-- Đường xiên AB2 xa hơn -->
    <line x1="160" y1="50" x2="450" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    <circle cx="450" cy="200" r="4" fill="#64748b" />
    <text x="445" y="220" font-size="15" font-weight="700" fill="#64748b">C</text>
  </svg>
</div>

---

### 2. Định lý về Quan hệ giữa Đường vuông góc và Đường xiên

> [!IMPORTANT]
> **ĐỊNH LÝ 1 (ĐƯỜNG VUÔNG GÓC LÀ ĐOẠN NGẮN NHẤT):**
> Trong các đoạn thẳng nối từ một điểm ở ngoài một đường thẳng đến các điểm trên đường thẳng đó, **đoạn vuông góc là đoạn thẳng ngắn nhất**.
> 
> Với mọi điểm $B$ thuộc đường thẳng $d$ ($B \neq H$):
> $$AH < AB$$

*Chứng minh đơn giản nhờ Bài 31:*
Xét tam giác $AHB$ vuông tại $H$.
Góc $\widehat{AHB} = 90^\circ$ là góc lớn nhất trong tam giác vuông $AHB$.
Theo định lý về quan hệ giữa góc và cạnh đối diện trong tam giác (Bài 31), cạnh đối diện với góc vuông là cạnh huyền $AB$.
Do đó:
$$AB > AH \iff AH < AB$$

---

### 3. Khoảng cách từ một điểm đến một đường thẳng

> [!NOTE]
> **ĐỊNH NGHĨA KHOẢNG CÁCH:**
> Độ dài của đoạn vuông góc $AH$ kẻ từ điểm $A$ đến đường thẳng $d$ được gọi là **khoảng cách từ điểm $A$ đến đường thẳng $d$**.
> Kí hiệu: $d(A, d) = AH$.
> 
> *Ý nghĩa tối ưu:* Khoảng cách chính là giá trị nhỏ nhất trong tất cả các khoảng cách từ $A$ đến một điểm tùy ý trên $d$.

---

### 4. Quan hệ giữa Đường xiên và Hình chiếu

Khi kẻ nhiều đường xiên từ cùng một điểm $A$ đến đường thẳng $d$, độ dài của đường xiên phụ thuộc chặt chẽ vào độ dài hình chiếu của nó:

> [!IMPORTANT]
> **ĐỊNH LÝ 2 (QUAN HỆ ĐƯỜNG XIÊN VÀ HÌNH CHIẾU):**
> Trong hai đường xiên kẻ từ một điểm nằm ngoài đường thẳng đến đường thẳng đó:
> 1. Đường xiên nào có **hình chiếu lớn hơn** thì **lớn hơn**:
>    $$HB > HC \iff AB > AC$$
> 2. Hai đường xiên **bằng nhau** khi và chỉ khi hai **hình chiếu bằng nhau**:
>    $$AB = AC \iff HB = HC$$

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Xác định đường vuông góc, đường xiên và hình chiếu

**Phương pháp giải:**
- Tìm điểm xuất phát chung ở ngoài đường thẳng.
- Tìm đoạn thẳng tạo góc $90^\circ$ với đường thẳng $\to$ Đó là đoạn vuông góc, chân vuông góc là hình chiếu.
- Các đoạn thẳng còn lại nối tới các điểm trên đường thẳng là các đường xiên.
- Đoạn thẳng nằm trên đường thẳng nối từ chân vuông góc tới chân đường xiên là hình chiếu tương ứng.

---

#### Bài toán 1:
Cho tam giác $ABC$ nhọn có đường cao $AH$.
a) Chỉ ra đoạn vuông góc, các đường xiên kẻ từ đỉnh $A$ đến đường thẳng $BC$.
b) Tìm hình chiếu của các đường xiên $AB$ và $AC$ trên đường thẳng $BC$.
c) Nếu $HB = 4\text{ cm}$ và $HC = 6\text{ cm}$, hãy so sánh độ dài của hai cạnh $AB$ và $AC$.

**Lời giải:**

a) Vì $AH \perp BC$ tại $H$ nên:
- Đoạn vuông góc kẻ từ $A$ đến đường thẳng $BC$ là: **đoạn $AH$**.
- Các đường xiên kẻ từ $A$ đến đường thẳng $BC$ là: **đoạn $AB$ và đoạn $AC$**.

b) 
- Chân đường vuông góc của $A$ trên $BC$ là điểm $H$.
- Điểm $B$ nằm trên $BC$ nên hình chiếu của $B$ chính là $B$.
  $\implies$ Hình chiếu của đường xiên $AB$ trên $BC$ là **đoạn thẳng $HB$**.
- Tương tự, hình chiếu của đường xiên $AC$ trên $BC$ là **đoạn thẳng $HC$**.

c) Ta có:
- Hình chiếu của $AB$ là $HB = 4\text{ cm}$.
- Hình chiếu của $AC$ là $HC = 6\text{ cm}$.
Vì $HB < HC$ ($4\text{ cm} < 6\text{ cm}$), theo định lý quan hệ giữa đường xiên và hình chiếu:
Đường xiên nào có hình chiếu nhỏ hơn thì nhỏ hơn $\implies AB < AC$.

---

### Dạng 2: So sánh các đoạn thẳng và chứng minh bất đẳng thức hình học

**Phương pháp giải:**
Sử dụng tính chất: Đoạn vuông góc ngắn hơn mọi đường xiên để thiết lập các bất đẳng thức:
$$AH \le AB \quad (\text{dấu bằng xảy ra } \iff B \equiv H)$$

---

#### Bài toán 2:
Cho tam giác $ABC$ vuông tại $A$. Điểm $M$ là một điểm nằm giữa $A$ và $B$.
a) So sánh độ dài $CM$ và $CA$.
b) So sánh độ dài $CM$ và $CB$.

**Lời giải:**

a) Xét đường thẳng $AB$ và điểm $C$ nằm ngoài đường thẳng $AB$:
Vì $\triangle ABC$ vuông tại $A$ nên $CA \perp AB$ tại $A$.
- Do đó, $CA$ là đoạn vuông góc kẻ từ $C$ đến đường thẳng $AB$.
- $M$ là điểm thuộc đường thẳng $AB$ ($M \neq A$) nên $CM$ là một đường xiên kẻ từ $C$ đến đường thẳng $AB$.
Theo định lý đường vuông góc ngắn hơn đường xiên:
$$CA < CM \quad (\text{hay } CM > CA)$$

b) Xét tam giác $AMC$ vuông tại $A$:
Góc $\widehat{AMC}$ là góc nhọn ($< 90^\circ$).
Vì $\widehat{AMC}$ và $\widehat{BMC}$ là hai góc kề bù nên:
$$\widehat{BMC} = 180^\circ - \widehat{AMC} > 180^\circ - 90^\circ = 90^\circ$$
Do đó góc $\widehat{BMC}$ là một **góc tù**.
Trong tam giác $BMC$, vì $\widehat{BMC}$ là góc tù (góc lớn nhất) nên cạnh đối diện với nó là $BC$ phải là cạnh lớn nhất:
$$\implies CM < CB$$

*Kết luận chung chuỗi bất đẳng thức:* $CA < CM < CB$.

---

### Dạng 3: Bài toán vị trí và tìm khoảng cách ngắn nhất

**Phương pháp giải:**
Khoảng cách từ một điểm $A$ đến một đường thẳng $d$ đạt giá trị nhỏ nhất khi điểm nối trên đường thẳng chính là chân đường vuông góc $H$.

---

#### Bài toán 3:
Một trạm phát điện đặt tại điểm $P$ cách bờ sông (đường thẳng $d$) một khoảng $300\text{ m}$. Một nhà máy đóng tàu đặt tại điểm $Q$ nằm ngay bên bờ sông.
Kỹ sư cần kéo một đường dây cáp ngầm từ trạm $P$ ra bờ sông rồi nối về nhà máy $Q$.
a) Để đoạn dây cáp từ trạm $P$ đến bờ sông là ngắn nhất thì điểm tiếp đất trên bờ sông phải đặt ở đâu? Chiều dài ngắn nhất đó là bao nhiêu?
b) Nếu điểm tiếp đất $M$ cách chân đường vuông góc $H$ một khoảng $400\text{ m}$, hãy tính độ dài đường dây cáp $PM$.

**Lời giải:**

a) Gọi $H$ là chân đường vuông góc kẻ từ $P$ xuống bờ sông $d$ ($PH \perp d$).
Theo định lý đường vuông góc và đường xiên, với mọi vị trí $M$ trên bờ sông:
$$PM \ge PH$$
Dấu bằng xảy ra khi và chỉ khi $M$ trùng với $H$.
Vậy để đoạn dây cáp từ $P$ đến bờ sông ngắn nhất thì điểm tiếp đất phải đặt tại **chân đường vuông góc $H$**.
Chiều dài ngắn nhất đó chính là khoảng cách: $PH = 300\text{ m}$.

b) Khi điểm tiếp đất $M$ cách $H$ một khoảng $HM = 400\text{ m}$:
Tam giác $PHM$ vuông tại $H$. Áp dụng định lý Pythagore:
$$PM^2 = PH^2 + HM^2 = 300^2 + 400^2 = 90\,000 + 160\,000 = 250\,000$$
$$PM = \sqrt{250\,000} = 500\text{ (m)}$$
Vậy độ dài đường dây cáp $PM$ khi đó là $500\text{ m}$.

---

### Dạng 4: Chứng minh điểm cách đều và tính chất đối xứng

**Phương pháp giải:**
Nếu hai hình chiếu bằng nhau thì hai đường xiên bằng nhau. Ngược lại, nếu hai đường xiên bằng nhau thì hai hình chiếu bằng nhau. Kết hợp với tính chất đường trung trực của đoạn thẳng.

---

#### Bài toán 4:
Cho đoạn thẳng $BC$. Trên đường trung trực $d$ của đoạn thẳng $BC$, lấy một điểm $A$ bất kỳ.
Từ $A$ kẻ đường thẳng vuông góc với $BC$, cắt $BC$ tại $H$.
a) Điểm $H$ có vị trí như thế nào đối với đoạn thẳng $BC$?
b) So sánh hai hình chiếu $HB$ và $HC$.
c) Từ đó suy ra mối liên hệ giữa hai đường xiên $AB$ và $AC$.

**Lời giải:**

a) Theo định nghĩa đường trung trực của đoạn thẳng, đường trung trực $d$ vuông góc với $BC$ tại trung điểm của $BC$.
Vì $A \in d$ và $AH \perp BC$ tại $H$ nên $AH$ chính là một phần của đường thẳng $d$.
Do đó điểm $H$ chính là **trung điểm của đoạn thẳng $BC$**.

b) Vì $H$ là trung điểm của $BC$ nên:
$$HB = HC$$
Hai hình chiếu $HB$ và $HC$ bằng nhau.

c) Áp dụng định lý quan hệ giữa đường xiên và hình chiếu:
Vì hai hình chiếu bằng nhau ($HB = HC$) nên hai đường xiên kẻ từ $A$ cũng bằng nhau:
$$AB = AC$$
*(Kết quả này hoàn toàn trùng khớp với định lý tính chất đường trung trực: Điểm nằm trên đường trung trực cách đều hai đầu mút của đoạn thẳng).*

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Nguyên lý Fermat về Thời gian Ngắn nhất trong Quang học

Khi một tia sáng truyền từ không khí vào môi trường nước, nó bị bẻ gãy khúc tại mặt phân cách (khúc xạ ánh sáng). Tại sao ánh sáng lại không đi theo đường thẳng tắp?
Năm 1662, nhà toán học Pierre de Fermat đã đề xuất **Nguyên lý Thời gian Ngắn nhất (Fermat's Principle)**:
*Ánh sáng luôn chọn con đường di chuyển mất ít thời gian nhất giữa hai điểm!*

Vì vận tốc ánh sáng trong nước chậm hơn trong không khí ($v_{\text{nước}} \approx \frac{3}{4} v_{\text{không khí}}$), ánh sáng chủ động đi một quãng đường dài hơn trong không khí (đường xiên) và chọn một con đường vuông góc ngắn hơn trong nước để giảm thiểu tổng thời gian di chuyển. Nguyên lý đường vuông góc ngắn nhất chính là gốc rễ của định luật khúc xạ ánh sáng Snell!

---

### Chuyên đề 2: Kỹ thuật Bắn phá Sỏi thận bằng Sóng xung kích hội tụ (ESWL)

Trong y học ngoại khoa hiện đại, phương pháp tán sỏi ngoài cơ thể (ESWL) sử dụng chùm sóng siêu âm năng lượng cao bắn phá sỏi thận mà không cần phẫu thuật mổ mở.
- Để giảm thiểu tổn thương cho các mô mềm xung quanh, các bác sĩ định vị đầu phát sóng sao cho chùm sóng đi theo phương vuông góc ngắn nhất xuyên qua da tới vị trí viên sỏi.
- Đường vuông góc đảm bảo năng lượng suy hao trên đường đi là nhỏ nhất, tập trung toàn bộ xung lực phá tan viên sỏi thành cát vụn để đào thải ra ngoài tự nhiên.

---

### Chuyên đề 3: Thiết kế Mái nhà và Khả năng Thoát nước mưa

Tại sao ở các vùng nhiệt đới mưa nhiều như Việt Nam, mái nhà truyền thống luôn có độ dốc từ $30^\circ$ đến $45^\circ$, trong khi ở các vùng sa mạc khô cằn người ta làm mái bằng?
- Giả sử giọt nước mưa rơi từ đỉnh nóc nhà $A$ xuống máng xối $B$.
- Chiều cao thẳng đứng $AH$ là đoạn vuông góc ngắn nhất.
- Khi tăng độ dốc của mái (tăng góc nghiêng), đường xiên $AB$ dốc hơn, thành phần gia tốc trọng trường kéo nước chảy dọc mái $g \sin\alpha$ lớn hơn, giúp nước mưa thoát nhanh gấp nhiều lần, chống thấm dột tuyệt đối cho ngôi nhà.

---

### Chuyên đề 4: Thuật toán Tối ưu Khoảng cách trong Hệ thống Định vị Toàn cầu (GPS)

Khi ứng dụng Grab hay Google Maps chỉ đường cho bạn từ vị trí $A$ ra đại lộ gần nhất, thuật toán phần mềm tính toán như thế nào?
Bản đồ biểu diễn con đường là một đường thẳng $d$. Thuật toán tọa độ vector tính toán tích vô hướng để xác định hình chiếu vuông góc $H$ của vị trí bạn trên con đường đó. Đoạn vuông góc $AH$ chính là vector dẫn đường ngắn nhất, giúp người lái xe tiếp cận lộ trình nhanh nhất.

---

### Chuyên đề 5: Phương pháp Bình phương Tối thiểu (Least Squares) của Gauss trong AI

Làm thế nào các nhà khoa học máy tính tìm được một đường thẳng hồi quy tuyến tính $y = ax + b$ khớp nhất với hàng triệu điểm dữ liệu phân tán?
Năm 1795, thần đồng toán học Carl Friedrich Gauss đã phát minh ra **Phương pháp Bình phương Tối thiểu (Ordinary Least Squares - OLS)**:
Khoảng cách sai số từ mỗi điểm dữ liệu đến đường thẳng dự báo chính là đoạn vuông góc kẻ từ điểm đó đến đường thẳng! Bằng cách tối thiểu hóa tổng bình phương các đoạn vuông góc này, mô hình AI đạt được độ chính xác dự báo cao nhất.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 32: Quan hệ giữa đường vuông góc và đường xiên",
  "questions": [
    {
      "question": "Cho điểm A nằm ngoài đường thẳng d. Đoạn thẳng ngắn nhất nối A với một điểm trên đường thẳng d là:",
      "options": [
        "Đoạn vuông góc",
        "Đường xiên bất kỳ",
        "Đoạn thẳng nối A với trung điểm của d",
        "Tất cả các đoạn thẳng đều bằng nhau"
      ],
      "answer": 0,
      "hint": "Trong các đoạn thẳng nối từ một điểm ngoài đường thẳng đến đường thẳng, đoạn vuông góc luôn là đoạn ngắn nhất.",
      "explanation": "Theo định lý cơ bản: Đoạn vuông góc là đoạn ngắn nhất trong các đoạn thẳng nối từ một điểm ngoài đường thẳng đến đường thẳng đó."
    },
    {
      "question": "Cho AH vuông góc với d tại H, B là điểm trên d khác H. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "AH > AB",
        "AH = AB",
        "AH < AB",
        "AH >= AB"
      ],
      "answer": 2,
      "hint": "AH là đoạn vuông góc, AB là đường xiên. Tam giác AHB vuông tại H có AB là cạnh huyền.",
      "explanation": "Trong tam giác vuông $AHB$ vuông tại $H$, cạnh huyền $AB$ luôn lớn hơn cạnh góc vuông $AH$, do đó $AH < AB$."
    },
    {
      "question": "Khoảng cách từ điểm A đến đường thẳng d được định nghĩa là:",
      "options": [
        "Độ dài của một đường xiên bất kỳ kẻ từ A đến d",
        "Độ dài đoạn vuông góc kẻ từ A đến d",
        "Nửa độ dài đoạn thẳng AB với B thuộc d",
        "Độ dài hình chiếu của đường xiên trên d"
      ],
      "answer": 1,
      "hint": "Khoảng cách là độ dài đường ngắn nhất.",
      "explanation": "Khoảng cách từ một điểm $A$ đến đường thẳng $d$ là độ dài của đoạn vuông góc kẻ từ $A$ đến đường thẳng $d$."
    },
    {
      "question": "Từ một điểm A ở ngoài đường thẳng d, kẻ đoạn vuông góc AH và hai đường xiên AB, AC đến d. Biết rằng HB > HC. Kết luận nào sau đây là ĐÚNG?",
      "options": [
        "AB < AC",
        "AB = AC",
        "AB > AC",
        "Không thể so sánh"
      ],
      "answer": 2,
      "hint": "Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.",
      "explanation": "Theo định lý quan hệ giữa đường xiên và hình chiếu: vì $HB > HC$ nên đường xiên tương ứng là $AB > AC$."
    },
    {
      "question": "Cho tam giác ABC có góc A = 90 độ. Khi đó khoảng cách từ đỉnh B đến đường thẳng AC chính là độ dài của:",
      "options": [
        "Đoạn thẳng BC",
        "Đoạn thẳng BA",
        "Đoạn thẳng AC",
        "Đường cao hạ từ A"
      ],
      "answer": 1,
      "hint": "Tam giác vuông tại A nên BA vuông góc với AC.",
      "explanation": "Vì tam giác $ABC$ vuông tại $A$ nên $BA \\perp AC$ tại $A$. Đoạn vuông góc kẻ từ $B$ đến đường thẳng $AC$ chính là đoạn $BA$."
    },
    {
      "question": "Cho tam giác ABC có AB = AC (tam giác cân tại A). Gọi H là chân đường vuông góc kẻ từ A xuống BC. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "HB > HC",
        "HB < HC",
        "HB = HC",
        "Không có mối liên hệ"
      ],
      "answer": 2,
      "hint": "Hai đường xiên bằng nhau thì hai hình chiếu tương ứng như thế nào?",
      "explanation": "Vì $AB = AC$ (hai đường xiên bằng nhau) nên hai hình chiếu của chúng trên $BC$ phải bằng nhau, tức là $HB = HC$ (H là trung điểm của BC)."
    },
    {
      "question": "Trong tam giác ABC nhọn, kẻ AH vuông góc với BC. Biết AB = 13 cm, AH = 12 cm, AC = 15 cm. Tính độ dài đoạn thẳng BC:",
      "options": [
        "14 cm",
        "9 cm",
        "5 cm",
        "18 cm"
      ],
      "answer": 0,
      "hint": "Áp dụng định lý Pythagore tính HB và HC trong hai tam giác vuông AHB và AHC, sau đó cộng lại: BC = HB + HC.",
      "explanation": "Trong $\\triangle AHB$: $HB = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = 5\\text{ cm}$. Trong $\\triangle AHC$: $HC = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = 9\\text{ cm}$. Vì tam giác nhọn nên $H$ nằm giữa $B$ và $C$, do đó $BC = HB + HC = 5 + 9 = 14\\text{ cm}$."
    },
    {
      "question": "Cho điểm M nằm trên đường trung trực của đoạn thẳng EF. Khẳng định nào sau đây SAI?",
      "options": [
        "ME = MF",
        "Hình chiếu của ME và MF trên đường thẳng EF có độ dài bằng nhau",
        "Khoảng cách từ M đến E bằng khoảng cách từ M đến F",
        "ME luôn vuông góc với MF"
      ],
      "answer": 3,
      "hint": "Điểm trên đường trung trực thì cách đều hai đầu mút, góc tạo bởi ME và MF có thể là góc bất kỳ không nhất thiết phải vuông.",
      "explanation": "Điểm nằm trên đường trung trực thì $ME = MF$, góc $\\widehat{EMF}$ phụ thuộc vào vị trí của $M$ xa hay gần đoạn thẳng, không bắt buộc phải bằng $90^\\circ$. Do đó khẳng định D sai."
    },
    {
      "question": "Từ một điểm O nằm ngoài đường thẳng a, có thể kẻ được bao nhiêu đường thẳng vuông góc với a?",
      "options": [
        "Vô số đường thẳng",
        "Đúng 1 đường thẳng",
        "2 đường thẳng",
        "Không có đường thẳng nào"
      ],
      "answer": 1,
      "hint": "Tính chất cơ bản: Qua một điểm ở ngoài một đường thẳng, có một và chỉ một đường thẳng vuông góc với đường thẳng đó.",
      "explanation": "Theo tiên đề hình học cơ bản, qua một điểm nằm ngoài đường thẳng chỉ kẻ được duy nhất một đường thẳng vuông góc với đường thẳng đã cho."
    },
    {
      "question": "Từ một điểm O nằm ngoài đường thẳng a, có thể kẻ được bao nhiêu đường xiên đến đường thẳng a?",
      "options": [
        "Đúng 1 đường xiên",
        "Đúng 2 đường xiên",
        "Vô số đường xiên",
        "Không kẻ được đường xiên nào"
      ],
      "answer": 2,
      "hint": "Trên đường thẳng a có vô số điểm khác chân đường vuông góc H.",
      "explanation": "Trên đường thẳng $a$ có vô số điểm khác điểm $H$, nối $O$ với mỗi điểm đó ta được một đường xiên. Do đó có vô số đường xiên."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho tam giác $ABC$ có $\widehat{B} = \widehat{C} = 40^\circ$. Kẻ $AH \perp BC$ ($H \in BC$).
a) Chứng minh rằng $\triangle ABH = \triangle ACH$.
b) So sánh độ dài các đoạn thẳng $AH, AB, AC$.
c) Lấy điểm $D$ trên cạnh $AC$ ($D$ khác $A$ và $C$). Chứng minh rằng $BD > AH$.

### Bài tập 2:
Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Trên cạnh $BC$ lấy điểm $M$ bất kỳ ($M \neq B, C, H$).
Chứng minh rằng: $AM < BC$.

### Bài tập 3 (Toán thực tế):
Một bạn học sinh đứng ở vị trí $A$ cách bờ hồ thẳng (đường thẳng $d$) một khoảng $20\text{ m}$. Một quả bóng đang trôi trên mặt nước tại điểm $B$ trên bờ hồ cách chân đường vuông góc $H$ một đoạn $15\text{ m}$.
a) Tính khoảng cách từ bạn học sinh đến quả bóng (đoạn $AB$).
b) Nếu bạn học sinh muốn chạy ra bờ hồ để nhặt một chiếc que củi trôi dạt sao cho quãng đường chạy là ngắn nhất, bạn ấy nên chạy theo hướng nào và quãng đường đó dài bao nhiêu mét?
