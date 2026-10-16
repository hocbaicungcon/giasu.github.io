---
title: 'Toán 8 Bài 15: Định lí Thalès trong tam giác'
description: 'Làm chủ Định lí Thalès trong tam giác Toán 8 Bài 15: Tỉ số đoạn thẳng, định lí Thalès thuận, định lí đảo chứng minh song song, hệ quả định lí Thalès, phương pháp đo khoảng cách gián tiếp, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Định lí Thalès
  - Đoạn thẳng tỉ lệ
  - Định lí Thalès đảo
  - Hệ quả định lí Thalès
  - Kết nối tri thức
grade: 8
---

# Bài 15. Định lí Thalès trong tam giác

Khoảng năm 600 trước Công nguyên, nhà thông thái Hy Lạp cổ đại **Thalès** (Ta-lét) thành Milet đã khiến các vị Pharaoh Ai Cập kinh ngạc tột độ: Ông đã đo được chính xác chiều cao của Đại kim tự tháp Kheops khổng lồ mà không cần trèo lên đỉnh chóp hiểm trở!

Bí mật của Thalès vô cùng giản dị mà thông tuệ phi thường: Ông cắm một chiếc gậy thẳng đứng xuống bãi cát sa mạc, chờ đến thời điểm trong ngày khi *chiều dài bóng của chiếc gậy bằng đúng chiều cao của chiếc gậy*. Khi đó, chiều dài bóng của Kim tự tháp đo trên mặt đất cũng bằng đúng chiều cao của Kim tự tháp!

Bằng cách so sánh bóng nắng song song từ Mặt Trời, Thalès đã khai sinh ra một trong những định lý nền tảng vĩ đại nhất của hình học nhân loại: **Định lí Thalès** — mở ra cánh cửa dẫn tới thế giới các đoạn thẳng tỉ lệ, tam giác đồng dạng và các kỹ thuật đo đạc gián tiếp hiện đại.

Bài học mở đầu Chương 4 sẽ giúp các em:
1. Thấu hiểu khái niệm **tỉ số của hai đoạn thẳng** và **đoạn thẳng tỉ lệ**.
2. Nắm vững **Định lí Thalès thuận** để tính độ dài các đoạn thẳng.
3. Sử dụng thành thạo **Định lí Thalès đảo** làm công cụ sắc bén chứng minh hai đường thẳng song song.
4. Làm chủ **Hệ quả của định lí Thalès** để thiết lập mối quan hệ tỉ lệ giữa các cạnh của tam giác mới và tam giác ban đầu.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 15: ĐỊNH LÍ THALÈS TRONG TAM GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đoạn thẳng tỉ lệ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tỉ số hai đoạn thẳng: $\frac{AB}{CD}$ (cùng đơn vị đo).<br>• $AB, CD$ tỉ lệ với $A'B', C'D'$ khi:<br>$$\frac{AB}{CD} = \frac{A'B'}{C'D'}\iff \frac{AB}{A'B'} = \frac{CD}{C'D'}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lí Thalès thuận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $MN \parallel BC$ ($M \in AB, N \in AC$):<br>$$\frac{AM}{AB} = \frac{AN}{AC};\quad \frac{AM}{MB} = \frac{AN}{NC};\quad \frac{MB}{AB} = \frac{NC}{AC}$$<br>• Dùng để <strong>tính độ dài đoạn thẳng</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Định lí Thalès đảo</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu đường thẳng cắt 2 cạnh và:<br>$$\frac{AM}{MB} = \frac{AN}{NC}\implies MN \parallel BC$$<br>• Công cụ chứng minh <strong>song song</strong> cực mạnh.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hệ quả của Định lí Thalès</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $MN \parallel BC$ thì tam giác mới $\triangle AMN$ có 3 cạnh tỉ lệ với $\triangle ABC$:<br>$$\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$<br>• Đúng cả khi cắt phần <em>kéo dài</em> của 2 cạnh!</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tỉ số đoạn thẳng:** Đoạn thẳng $AB = 6\text{ cm}$ và đoạn thẳng $CD = 15\text{ cm}$. Tỉ số $\frac{AB}{CD}$ bằng bao nhiêu?
2. **Quy đổi đơn vị:** Đoạn thẳng $MN = 4\text{ dm}$, đoạn thẳng $PQ = 80\text{ cm}$. Tỉ số $\frac{MN}{PQ}$ bằng bao nhiêu?
3. **Phản xạ Thalès:** Trong tam giác $\triangle ABC$, lấy $M$ trên $AB$ và $N$ trên $AC$ sao cho $MN \parallel BC$. Biết $AM = 4\text{ cm}, MB = 2\text{ cm}, AN = 6\text{ cm}$. Tính độ dài đoạn thẳng $NC$.
4. **Hệ quả cạnh đáy:** Nếu $AM = \frac{2}{3}AB$ và $MN \parallel BC$, biết $BC = 18\text{ cm}$ thì độ dài cạnh $MN$ bằng bao nhiêu?
5. **Đảo:** Cho $\triangle ABC$, $M \in AB, N \in AC$ có $AM = 3, MB = 6, AN = 4, NC = 8$. Đường thẳng $MN$ có song song với $BC$ không?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $\frac{AB}{CD} = \frac{6}{15} = \frac{2}{5}$.
> 2. Đổi $4\text{ dm} = 40\text{ cm}$. Tỉ số $\frac{MN}{PQ} = \frac{40}{80} = \frac{1}{2}$ (phải đưa về cùng đơn vị đo!).
> 3. Áp dụng định lí Thalès: $\frac{AM}{MB} = \frac{AN}{NC} \implies \frac{4}{2} = \frac{6}{NC} \implies NC = \frac{2 \cdot 6}{4} = 3\text{ cm}$.
> 4. Theo hệ quả định lí Thalès: $\frac{MN}{BC} = \frac{AM}{AB} = \frac{2}{3} \implies MN = \frac{2}{3} \cdot 18 = 12\text{ cm}$.
> 5. **Có!** Vì $\frac{AM}{MB} = \frac{3}{6} = \frac{1}{2}$ và $\frac{AN}{NC} = \frac{4}{8} = \frac{1}{2} \implies \frac{AM}{MB} = \frac{AN}{NC}$, theo định lí Thalès đảo suy ra $MN \parallel BC$.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Tỉ số của hai đoạn thẳng & Đoạn thẳng tỉ lệ

- **Định nghĩa tỉ số:** Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng theo cùng một đơn vị đo.
  - Tỉ số của hai đoạn thẳng $AB$ và $CD$ được kí hiệu là $\frac{AB}{CD}$.
  - *Đặc điểm quan trọng:* Tỉ số của hai đoạn thẳng **không phụ thuộc vào đơn vị đo** (miễn là hai đoạn thẳng đo cùng một đơn vị).
- **Đoạn thẳng tỉ lệ:** Hai đoạn thẳng $AB$ và $CD$ gọi là tỉ lệ với hai đoạn thẳng $A'B'$ và $C'D'$ nếu có tỉ lệ thức:
  $$\frac{AB}{CD} = \frac{A'B'}{C'D'}\quad\text{hay}\quad \frac{AB}{A'B'} = \frac{CD}{C'D'}$$

---

### 2. Định lí Thalès trong tam giác (Định lí thuận)

> [!IMPORTANT]
> **ĐỊNH LÍ THALÈS:**
> Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.

Cho tam giác $\triangle ABC$. Nếu đường thẳng $d$ song song với $BC$, cắt cạnh $AB$ tại $M$ và cắt cạnh $AC$ tại $N$, thì:
$$\frac{AM}{AB} = \frac{AN}{AC};\quad \frac{AM}{MB} = \frac{AN}{NC};\quad \frac{MB}{AB} = \frac{NC}{AC}$$

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Định lí Thalès trong tam giác ABC với MN song song BC">
    <!-- Tam giác ABC -->
    <polygon points="270,30 90,210 450,210" fill="rgba(37,99,235,0.06)" stroke="#2563eb" stroke-width="2.5" />
    <!-- Đường thẳng MN song song BC -->
    <line x1="180" y1="120" x2="360" y2="120" stroke="#ef4444" stroke-width="2.5" />
    <!-- Đỉnh A -->
    <circle cx="270" cy="30" r="4.5" fill="#1e293b" />
    <text x="265" y="20" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <!-- Đỉnh B -->
    <circle cx="90" cy="210" r="4.5" fill="#1e293b" />
    <text x="70" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <!-- Đỉnh C -->
    <circle cx="450" cy="210" r="4.5" fill="#1e293b" />
    <text x="460" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <!-- Điểm M -->
    <circle cx="180" cy="120" r="4.5" fill="#ef4444" />
    <text x="155" y="125" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#ef4444">M</text>
    <!-- Điểm N -->
    <circle cx="360" cy="120" r="4.5" fill="#ef4444" />
    <text x="370" y="125" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#ef4444">N</text>
    <!-- Mũi tên chỉ song song -->
    <path d="M 265,115 L 275,120 L 265,125" fill="none" stroke="#ef4444" stroke-width="2" />
    <path d="M 265,205 L 275,210 L 265,215" fill="none" stroke="#2563eb" stroke-width="2" />
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: MN song song với BC cắt AB tại M, cắt AC tại N, chia hai cạnh bên thành các đoạn thẳng tỉ lệ</em></p>
</div>

---

### 3. Định lí Thalès đảo

> [!NOTE]
> **ĐỊNH LÍ THALÈS ĐẢO:**
> Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh này những đoạn thẳng tương ứng tỉ lệ thì đường thẳng đó **song song với cạnh còn lại** của tam giác.
> 
> Trong $\triangle ABC$, nếu có một trong các tỉ lệ thức:
> $$\frac{AM}{MB} = \frac{AN}{NC}\quad\text{hoặc}\quad \frac{AM}{AB} = \frac{AN}{AC}\quad\text{hoặc}\quad \frac{MB}{AB} = \frac{NC}{AC} \implies MN \parallel BC$$

*Ý nghĩa phương pháp luận:* Định lí Thalès đảo là một trong những công cụ toán học mạnh mẽ nhất để **chứng minh hai đường thẳng song song** mà không cần dựa vào các góc so le trong hay đồng vị.

---

### 4. Hệ quả của Định lí Thalès

Định lí Thalès thuận chỉ cho tỉ lệ giữa các đoạn thẳng trên hai cạnh bên ($AB$ và $AC$). Để liên hệ với **cạnh thứ ba ($BC$)**, ta dùng Hệ quả:

> [!IMPORTANT]
> **HỆ QUẢ CỦA ĐỊNH LÍ THALÈS:**
> Nếu một đường thẳng cắt hai cạnh của một tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác đã cho.
> $$MN \parallel BC \implies \frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$

#### Mở rộng quan trọng:
Hệ quả trên **vẫn đúng** trong trường hợp đường thẳng song song cắt phần kéo dài của hai cạnh tam giác (tạo thành mô hình đồng hồ cát / đỉnh đối đỉnh):
- Khi $M$ thuộc tia đối của tia $AB$ và $N$ thuộc tia đối của tia $AC$.
- Tỉ số vẫn bảo toàn: $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính độ dài đoạn thẳng bằng định lí Thalès thuận và hệ quả

**Phương pháp giải:**
1. Xác định hai đường thẳng song song trong tam giác.
2. Thiết lập đúng tỉ lệ thức có chứa đoạn thẳng cần tính.
3. Thay các số đo đã biết và áp dụng quy tắc nhân chéo chia ngang: Nếu $\frac{x}{b} = \frac{c}{d} \implies x = \frac{b \cdot c}{d}$.

---

#### Bài toán 1:
Cho tam giác $ABC$. Một đường thẳng song song với $BC$ cắt cạnh $AB$ tại điểm $D$ và cắt cạnh $AC$ tại điểm $E$.
a) Cho $AD = 6\text{ cm}, DB = 3\text{ cm}$ và $AE = 8\text{ cm}$. Tính độ dài đoạn thẳng $EC$ và $AC$.
b) Cho $AB = 15\text{ cm}, AD = 5\text{ cm}$ và cạnh đáy $BC = 24\text{ cm}$. Tính độ dài đoạn thẳng $DE$.

**Lời giải:**

a) Vì $DE \parallel BC$, áp dụng định lí Thalès trong $\triangle ABC$:
$$\frac{AD}{DB} = \frac{AE}{EC}$$
Thay số:
$$\frac{6}{3} = \frac{8}{EC} \implies 2 = \frac{8}{EC} \implies EC = \frac{8}{2} = 4\text{ cm}$$
Độ dài cạnh $AC$ là:
$$AC = AE + EC = 8 + 4 = 12\text{ cm}$$

b) Vì $DE \parallel BC$, áp dụng hệ quả của định lí Thalès trong $\triangle ABC$:
$$\frac{AD}{AB} = \frac{DE}{BC}$$
Thay số:
$$\frac{5}{15} = \frac{DE}{24} \implies \frac{1}{3} = \frac{DE}{24} \implies DE = \frac{24 \cdot 1}{3} = 8\text{ cm}$$

---

### Dạng 2: Chứng minh hai đường thẳng song song bằng định lí Thalès đảo

**Phương pháp giải:**
1. Tính tỉ số của hai đoạn thẳng trên cạnh thứ nhất: $\frac{AM}{MB}$ (hoặc $\frac{AM}{AB}$).
2. Tính tỉ số của hai đoạn thẳng trên cạnh thứ hai: $\frac{AN}{NC}$ (hoặc $\frac{AN}{AC}$).
3. So sánh: Nếu hai tỉ số bằng nhau $\implies MN \parallel BC$ theo định lí Thalès đảo.

---

#### Bài toán 2:
Cho tam giác $ABC$. Trên cạnh $AB$ lấy điểm $M$ sao cho $AM = 4\text{ cm}, MB = 6\text{ cm}$. Trên cạnh $AC$ lấy điểm $N$ sao cho $AN = 6\text{ cm}, NC = 9\text{ cm}$.
a) Chứng minh rằng $MN \parallel BC$.
b) Gọi $I$ là trung điểm của $BC$, đường thẳng $AI$ cắt $MN$ tại $K$. Chứng minh $K$ là trung điểm của $MN$.

**Lời giải:**

a) Xét các tỉ số trên hai cạnh $AB$ và $AC$:
$$\frac{AM}{MB} = \frac{4}{6} = \frac{2}{3}$$
$$\frac{AN}{NC} = \frac{6}{9} = \frac{2}{3}$$
Vì $\frac{AM}{MB} = \frac{AN}{NC} = \frac{2}{3}$, theo định lí Thalès đảo ta suy ra:
$$MN \parallel BC\quad (\text{đpcm})$$

b) Vì $MN \parallel BC$, suy ra $MK \parallel BI$ và $KN \parallel IC$.
- Trong $\triangle ABI$, vì $MK \parallel BI$ nên theo hệ quả định lí Thalès:
  $$\frac{MK}{BI} = \frac{AK}{AI}\quad (1)$$
- Trong $\triangle ACI$, vì $KN \parallel IC$ nên theo hệ quả định lí Thalès:
  $$\frac{KN}{IC} = \frac{AK}{AI}\quad (2)$$
Từ $(1)$ và $(2)$ suy ra:
$$\frac{MK}{BI} = \frac{KN}{IC}$$
Mà $I$ là trung điểm của $BC$ nên $BI = IC$.
Suy ra:
$$MK = KN$$
Vậy $K$ chính là **trung điểm của đoạn thẳng $MN$** (đpcm).

---

### Dạng 3: Chứng minh hệ thức hình học và tính chất tỉ số

**Phương pháp giải:**
Sử dụng một đoạn thẳng trung gian hoặc một tỉ số bắc cầu xuất hiện đồng thời trong hai tam giác khác nhau có các đường thẳng song song.

---

#### Bài toán 3:
Cho hình thang $ABCD$ ($AB \parallel CD$). Hai đường chéo $AC$ và $BD$ cắt nhau tại điểm $O$. Qua $O$ kẻ đường thẳng song song với hai đáy, cắt cạnh bên $AD$ tại $M$ và cắt cạnh bên $BC$ tại $N$.
a) Chứng minh rằng: $\frac{OM}{AB} = \frac{DM}{DA}$ và $\frac{OM}{CD} = \frac{AM}{AD}$.
b) Chứng minh rằng: $OM = ON$, từ đó suy ra $O$ là trung điểm của đoạn thẳng $MN$.
c) Chứng minh hệ thức: $\frac{1}{OM} = \frac{1}{AB} + \frac{1}{CD}$.

**Lời giải:**

a) Vì $MN \parallel AB \parallel CD$:
- Trong $\triangle DAB$, có $OM \parallel AB \implies \frac{OM}{AB} = \frac{DM}{DA}$ (theo hệ quả định lí Thalès).
- Trong $\triangle ADC$, có $OM \parallel CD \implies \frac{OM}{CD} = \frac{AM}{AD}$ (theo hệ quả định lí Thalès).

b) Tương tự bên tam giác $\triangle CAB$ và $\triangle BCD$:
- Trong $\triangle CAB$, có $ON \parallel AB \implies \frac{ON}{AB} = \frac{CN}{CB}$.
- Theo định lí Thalès trong hình thang $ABCD$ có $MN \parallel AB \parallel CD$:
  $$\frac{DM}{DA} = \frac{CN}{CB}$$
Do đó:
$$\frac{OM}{AB} = \frac{ON}{AB} \implies OM = ON$$
Vậy $O$ là **trung điểm của đoạn thẳng $MN$** (đpcm).

c) Cộng hai tỉ số ở câu a:
$$\frac{OM}{AB} + \frac{OM}{CD} = \frac{DM}{DA} + \frac{AM}{AD} = \frac{DM + AM}{AD} = \frac{AD}{AD} = 1$$
Đặt $OM$ làm nhân tử chung:
$$OM \left(\frac{1}{AB} + \frac{1}{CD}\right) = 1$$
Chia cả hai vế cho $OM$:
$$\frac{1}{OM} = \frac{1}{AB} + \frac{1}{CD}\quad (\text{đpcm})$$

---

### Dạng 4: Bài toán ứng dụng thực tế đo đạc gián tiếp

**Phương pháp giải:**
Mô hình hóa thực tế thành tam giác và các đường thẳng song song (tia sáng mặt trời, cọc tiêu thẳng đứng vuông góc mặt đất), sau đó áp dụng hệ quả định lí Thalès.

---

#### Bài toán 4:
Để đo chiều cao $h$ của một cây cổ thụ ven hồ mà không thể trèo lên ngọn cây, bạn Nam cắm một chiếc cọc tiêu thẳng đứng $EF$ cao $2\text{ m}$ cách gốc cây một khoảng $EA = 18\text{ m}$. Nam lùi ra xa cọc một khoảng $DE = 3\text{ m}$ và ngắm sao cho đỉnh cọc $F$ thẳng hàng với ngọn cây $B$. Mắt của Nam đặt tại điểm $D$ cách mặt đất $1,2\text{ m}$ (ngang tầm mắt).
Biết cây và cọc cùng vuông góc với mặt đất. Hãy tính chiều cao của cây cổ thụ.

**Lời giải:**

Kẻ đường thẳng nằm ngang qua mắt bạn Nam song song với mặt đất, cắt cọc tiêu tại $K$ và cắt thân cây tại $H$.
- Chiều cao cọc tiêu: $EF = 2\text{ m}$. Chiều cao mắt: $1,2\text{ m}$.
  Độ dài đoạn trên của cọc:
  $$KF = EF - 1,2 = 2 - 1,2 = 0,8\text{ m}$$
- Khoảng cách từ mắt đến cọc: $DK = DE = 3\text{ m}$.
- Khoảng cách từ mắt đến cây:
  $$DH = DE + EA = 3 + 18 = 21\text{ m}$$
Vì cọc tiêu và thân cây cùng thẳng đứng vuông góc với tia nhìn ngang $DH$ nên $KF \parallel HB$.
Xét tam giác $\triangle DHB$, có $KF \parallel HB$. Áp dụng hệ quả định lí Thalès:
$$\frac{KF}{HB} = \frac{DK}{DH}$$
Thay số:
$$\frac{0,8}{HB} = \frac{3}{21} = \frac{1}{7} \implies HB = 0,8 \cdot 7 = 5,6\text{ m}$$
Chiều cao của cây cổ thụ từ ngọn cây xuống mặt đất là:
$$h = HB + 1,2 = 5,6 + 1,2 = 6,8\text{ m}$$
Vậy cây cổ thụ cao $6,8\text{ m}$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Phương pháp đo chiều cao Kim tự tháp Kheops của Thalès
Vào thế kỷ VI TCN, Thalès thành Milet đã giải bài toán đo kim tự tháp vĩ đại bằng cách:
- Cắm một chiếc cọc có chiều dài $h_c$ thẳng đứng trên cát, bóng của cọc là $s_c$.
- Cùng thời điểm đó, bóng của Kim tự tháp có chiều dài đo từ tâm đáy đến mút bóng là $S_k$.
- Vì các tia nắng Mặt Trời chiếu xuống Trái Đất coi như song song tuyệt đối, hai tam giác tạo bởi vật thể và bóng nắng là đồng dạng (theo hệ quả Thalès):
  $$\frac{H_k}{h_c} = \frac{S_k}{s_c} \implies H_k = h_c \cdot \frac{S_k}{s_c}$$
Nhờ công thức này, Thalès đã công bố chiều cao kim tự tháp là xấp xỉ $147\text{ m}$ trước sự thán phục của toàn thể giới thiên văn học Ai Cập!

### 2. Đo bề rộng dòng sông mà không cần bơi qua bờ bên kia
Để đo khoảng cách giữa hai bờ sông $AB$ ($A$ ở bờ bên này, $B$ ở bờ bên kia):
- Các kỹ sư trắc địa cắm cọc tiêu tại $A$, vạch đường thẳng vuông góc $AC$, lấy điểm $D$ trên $AC$.
- Từ $D$ kẻ đường thẳng song song với $AB$, ngắm điểm $E$ sao cho $B, D, E$ thẳng hàng.
- Bằng cách đo các đoạn thẳng ngắn trên bờ đất liền, áp dụng hệ quả Thalès, khoảng cách qua sông $AB$ được tính chính xác tới từng milimét.

### 3. Quang học hình học & Công thức thấu kính hội tụ
Trong máy ảnh kỹ thuật số và kính thiên văn, hình ảnh của vật thể qua thấu kính mỏng được tạo nên bởi các tia sáng truyền thẳng và tia khúc xạ qua tiêu điểm:
- Khi dựng ảnh $A'B'$ của vật $AB$ qua thấu kính hội tụ, các cặp tam giác tạo bởi trục chính và tia song song chính là mô hình hệ quả Thalès mở rộng.
- Từ đó rút ra công thức thấu kính kinh điển trong Vật lý 9 và 11:
  $$\frac{1}{f} = \frac{1}{d} + \frac{1}{d'}$$

### 4. Nghệ thuật phối cảnh xa gần (Perspective Drawing) thời kỳ Phục hưng
Các danh họa Leonardo da Vinci và Filippo Brunelleschi đã tạo nên cuộc cách mạng trong hội họa nhờ ứng dụng hình học xạ ảnh dựa trên định lí Thalès:
- Tất cả các đường song song chạy về phía chân trời (đường ray xe lửa, dãy cột đình) đều quy tụ về một "điểm biến mất" (Vanishing Point).
- Khoảng cách giữa các thanh tà vẹt đường ray thu hẹp dần theo đúng tỉ lệ nghịch của định lí Thalès, tạo ra ảo giác thị giác về độ sâu ba chiều kỳ vĩ trên mặt vải toan phẳng $2D$.

### 5. Cảm biến khoảng cách siêu âm & Xe tự hành LiDAR
Robot hút bụi thông minh và xe tự lái Tesla phát ra các chùm sóng siêu âm hoặc tia laser hồng ngoại theo dạng hình nón tỏa rộng:
- Dựa trên góc phản xạ và thời gian sóng dội lại, bộ vi xử lý áp dụng tỉ số đoạn thẳng Thalès trong tam giác quét để tính toán vật cản phía trước đang cách đầu xe bao nhiêu mét trong tích tắc, tự động kích hoạt phanh khẩn cấp ngăn ngừa tai nạn.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho đoạn thẳng AB = 8 cm và CD = 12 cm. Tỉ số của hai đoạn thẳng AB và CD là:",
  "options": [
    "2/3",
    "3/2",
    "4 cm",
    "2/5"
  ],
  "answer": 0,
  "explanation": "Tỉ số AB / CD = 8 / 12 = 2/3 (tỉ số là số thuần túy không có đơn vị kèm theo)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho tam giác ABC có MN ∥ BC (M thuộc AB, N thuộc AC). Khẳng định nào sau đây là SAI?",
  "options": [
    "AM / AB = AN / AC",
    "AM / MB = AN / NC",
    "MB / AB = NC / AC",
    "AM / AB = NC / AC"
  ],
  "answer": 3,
  "explanation": "Theo định lí Thalès, các đoạn thẳng tương ứng tỉ lệ phải cùng ở vị trí tương ứng: AM / AB = AN / AC. Khẳng định AM / AB = NC / AC là sai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác ABC có MN ∥ BC (M ∈ AB, N ∈ AC). Biết AM = 3 cm, MB = 6 cm, AN = 4 cm. Độ dài đoạn thẳng NC là:",
  "options": [
    "6 cm",
    "8 cm",
    "12 cm",
    "2 cm"
  ],
  "answer": 1,
  "explanation": "Theo định lí Thalès: AM / MB = AN / NC ⇒ 3 / 6 = 4 / NC ⇒ 1/2 = 4 / NC ⇒ NC = 8 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho tam giác ABC có AB = 10 cm, AC = 15 cm. Lấy D trên AB, E trên AC sao cho AD = 4 cm, AE = 6 cm. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "DE không song song với BC",
    "DE ∥ BC theo định lí Thalès đảo",
    "DE vuông góc với BC",
    "Chưa đủ dữ kiện để kết luận"
  ],
  "answer": 1,
  "explanation": "Ta có AD / AB = 4 / 10 = 2/5 và AE / AC = 6 / 15 = 2/5. Vì AD / AB = AE / AC nên theo định lí Thalès đảo, DE ∥ BC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác ABC có MN ∥ BC (M ∈ AB, N ∈ AC). Biết AM = 2 cm, AB = 5 cm và MN = 6 cm. Độ dài cạnh BC là:",
  "options": [
    "15 cm",
    "12 cm",
    "10 cm",
    "7.5 cm"
  ],
  "answer": 0,
  "explanation": "Áp dụng hệ quả định lí Thalès: AM / AB = MN / BC ⇒ 2 / 5 = 6 / BC ⇒ BC = (5 · 6) / 2 = 15 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hình thang ABCD (AB ∥ CD). Hai đường chéo AC và BD cắt nhau tại O. Biết OA = 4 cm, OC = 8 cm, AB = 6 cm. Độ dài cạnh đáy CD là:",
  "options": [
    "10 cm",
    "12 cm",
    "14 cm",
    "16 cm"
  ],
  "answer": 1,
  "explanation": "Vì AB ∥ CD nên theo hệ quả định lí Thalès mở rộng: OA / OC = AB / CD ⇒ 4 / 8 = 6 / CD ⇒ 1/2 = 6 / CD ⇒ CD = 12 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cùng một thời điểm, một cây cọc cao 1.5 m đổ bóng dài 2 m trên mặt đất, một cột cờ đổ bóng dài 16 m. Chiều cao của cột cờ là:",
  "options": [
    "12 m",
    "24 m",
    "18 m",
    "10 m"
  ],
  "answer": 0,
  "explanation": "Tỉ số chiều cao bằng tỉ số độ dài bóng: h / 1.5 = 16 / 2 = 8 ⇒ h = 8 · 1.5 = 12 m."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC, điểm D trên AB sao cho AD = 1/3 AB. Kẻ DE ∥ BC (E ∈ AC). Tỉ số diện tích của tam giác ADE và tam giác ABC là:",
  "options": [
    "1/3",
    "1/6",
    "1/9",
    "2/3"
  ],
  "answer": 2,
  "explanation": "Tam giác ADE có các cạnh đáy và đường cao đều bằng 1/3 tam giác ABC, do đó tỉ số diện tích là (1/3)² = 1/9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác ABC có MN ∥ BC. Khẳng định nào sau đây thể hiện ĐÚNG hệ quả của định lí Thalès?",
  "options": [
    "AM / MB = AN / NC = MN / BC",
    "AM / AB = AN / AC = MN / BC",
    "MB / AB = NC / AC = MN / BC",
    "AM / AN = MB / NC = BC / MN"
  ],
  "answer": 1,
  "explanation": "Hệ quả định lí Thalès phải gắn liền với cạnh của tam giác: AM / AB = AN / AC = MN / BC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Điểm M thuộc cạnh AB của tam giác ABC sao cho AM = 2MB. Đường thẳng qua M song song với BC cắt AC tại N. Tỉ số AN / AC bằng:",
  "options": [
    "2/1",
    "2/3",
    "1/3",
    "1/2"
  ],
  "answer": 1,
  "explanation": "Vì AM = 2MB nên AB = AM + MB = 3MB ⇒ AM / AB = 2/3. Do MN ∥ BC nên theo định lí Thalès: AN / AC = AM / AB = 2/3."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Định lí Thalès trong tam giác

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

**Câu 1:** Đoạn thẳng $MN = 5\text{ cm}$, đoạn thẳng $PQ = 20\text{ cm}$. Tỉ số của hai đoạn thẳng $\frac{MN}{PQ}$ là:
- A. $4$
- B. $\frac{1}{4}$
- C. $\frac{1}{4}\text{ cm}$
- D. $\frac{1}{5}$

**Câu 2:** Cho $\triangle ABC$ có $EF \parallel BC$ ($E \in AB, F \in AC$). Tỉ lệ thức nào sau đây ĐÚNG theo định lí Thalès?
- A. $\frac{AE}{EB} = \frac{AF}{FC}$
- B. $\frac{AE}{AB} = \frac{FC}{AC}$
- C. $\frac{EB}{AB} = \frac{AF}{AC}$
- D. $\frac{AE}{EF} = \frac{AF}{BC}$

**Câu 3:** Cho $\triangle ABC$ có $MN \parallel BC$ ($M \in AB, N \in AC$). Biết $AM = 4\text{ cm}, AB = 10\text{ cm}$ và $AC = 15\text{ cm}$. Độ dài đoạn thẳng $AN$ là:
- A. $6\text{ cm}$
- B. $8\text{ cm}$
- C. $9\text{ cm}$
- D. $5\text{ cm}$

**Câu 4:** Cho $\triangle ABC$. Điểm $D$ thuộc $AB$, điểm $E$ thuộc $AC$ sao cho $AD = 3\text{ cm}, DB = 6\text{ cm}, AE = 4\text{ cm}, EC = 8\text{ cm}$. Khẳng định nào sau đây ĐÚNG?
- A. $DE$ cắt $BC$ tại trung điểm của $BC$
- B. $DE \parallel BC$ theo định lí Thalès đảo
- C. $DE$ vuông góc với $BC$
- D. $DE$ không song song với $BC$

**Câu 5:** Cho $\triangle ABC$ có $HK \parallel BC$ ($H \in AB, K \in AC$). Biết $AH = 3\text{ cm}, HB = 6\text{ cm}$ và $BC = 18\text{ cm}$. Độ dài đoạn thẳng $HK$ là:
- A. $9\text{ cm}$
- B. $6\text{ cm}$
- C. $12\text{ cm}$
- D. $4,5\text{ cm}$

**Câu 6:** Một bóng của chiếc cọc cao $1\text{ m}$ in trên mặt đất dài $1,5\text{ m}$. Cùng thời điểm đó, bóng của một tòa nhà cao tầng dài $45\text{ m}$. Chiều cao của tòa nhà là:
- A. $30\text{ m}$
- B. $67,5\text{ m}$
- C. $45\text{ m}$
- D. $60\text{ m}$

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Cho tam giác $ABC$. Một đường thẳng song song với cạnh $BC$ cắt cạnh $AB$ tại $M$ và cắt cạnh $AC$ tại $N$.
a) Biết $AM = 8\text{ cm}, MB = 4\text{ cm}$ và $AN = 10\text{ cm}$. Tính độ dài đoạn thẳng $NC$ và cạnh $AC$.
b) Biết $AB = 16\text{ cm}, AM = 6\text{ cm}$ và cạnh đáy $BC = 24\text{ cm}$. Tính độ dài đoạn thẳng $MN$.

**Bài 2 (2,0 điểm):**
Cho tam giác $ABC$. Trên cạnh $AB$ lấy điểm $D$, trên cạnh $AC$ lấy điểm $E$ sao cho $AD = 6\text{ cm}, DB = 9\text{ cm}, AE = 8\text{ cm}, EC = 12\text{ cm}$.
a) Chứng minh rằng tứ giác $BDEC$ là hình thang.
b) Gọi $I$ là giao điểm của $BE$ và $CD$. Chứng minh rằng: $\frac{IB}{IE} = \frac{IC}{ID}$.

**Bài 3 (2,0 điểm):**
Cho hình bình hành $ABCD$. Một đường thẳng đi qua đỉnh $A$ cắt đoạn thẳng $BD$ tại $E$, cắt cạnh $BC$ tại $F$ và cắt tia đối của tia $CD$ tại $G$.
a) Chứng minh rằng: $\frac{AE}{EF} = \frac{DE}{EB}$.
b) Chứng minh hệ thức: $AE^2 = EF \cdot EG$.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho tam giác $ABC$ có đường trung tuyến $AM$. Một đường thẳng song song với $BC$ cắt các cạnh $AB, AC$ lần lượt tại $D, E$ và cắt trung tuyến $AM$ tại $I$.
Chứng minh rằng $I$ luôn là trung điểm của đoạn thẳng $DE$.

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **A** | **A** | **B** | **B** | **A** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) (1,0 điểm)
  - Vì $MN \parallel BC$, áp dụng định lí Thalès trong $\triangle ABC$:
    $$\frac{AM}{MB} = \frac{AN}{NC} \implies \frac{8}{4} = \frac{10}{NC} \implies 2 = \frac{10}{NC} \implies NC = 5\text{ cm}\quad (0,5\text{ đ})$$
  - Độ dài cạnh $AC = AN + NC = 10 + 5 = 15\text{ cm}$ *(0,5 đ)*.
- b) (1,0 điểm)
  - Vì $MN \parallel BC$, áp dụng hệ quả của định lí Thalès:
    $$\frac{AM}{AB} = \frac{MN}{BC}\quad (0,5\text{ đ})$$
  - Thay số: $\frac{6}{16} = \frac{MN}{24} \implies \frac{3}{8} = \frac{MN}{24} \implies MN = \frac{3 \cdot 24}{8} = 9\text{ cm}$ *(0,5 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,0 điểm)
  - Ta có: $\frac{AD}{DB} = \frac{6}{9} = \frac{2}{3}$ *(0,25 đ)*.
  - $\frac{AE}{EC} = \frac{8}{12} = \frac{2}{3}$ *(0,25 đ)*.
  - Vì $\frac{AD}{DB} = \frac{AE}{EC} = \frac{2}{3}$, theo định lí Thalès đảo ta có $DE \parallel BC$ *(0,25 đ)*.
  - Tứ giác $BDEC$ có $DE \parallel BC$ nên $BDEC$ là hình thang *(0,25 đ)*.
- b) (1,0 điểm)
  - Xét hình thang $BDEC$ có $DE \parallel BC$.
  - Trong $\triangle IBC$, đường thẳng $DE \parallel BC$ cắt $IB$ tại $E$ và cắt $IC$ tại $D$ *(0,25 đ)*.
  - Áp dụng hệ quả định lí Thalès (hoặc tỉ số Thalès mở rộng):
    $$\frac{IE}{IB} = \frac{ID}{IC} = \frac{DE}{BC}\quad (0,5\text{ đ})$$
  - Nghịch đảo hai vế, ta được:
    $$\frac{IB}{IE} = \frac{IC}{ID}\quad (\text{đpcm})\quad (0,25\text{ đ})$$

**Bài 3 (2,0 điểm):**
- a) (1,0 điểm)
  - Vì $ABCD$ là hình bình hành nên $AD \parallel BC \implies AD \parallel BF$ *(0,25 đ)*.
  - Áp dụng hệ quả của định lí Thalès cho tam giác $\triangle EAD$ và $\triangle EFB$ (hai đường chéo cắt nhau tại $E$):
    $$\frac{AE}{EF} = \frac{DE}{EB}\quad (1)\quad (0,75\text{ đ})$$
- b) (1,0 điểm)
  - Mặt khác, vì $AB \parallel CD \implies AB \parallel DG$ *(0,25 đ)*.
  - Áp dụng hệ quả của định lí Thalès cho $\triangle EAB$ và $\triangle EGD$:
    $$\frac{EG}{AE} = \frac{DE}{EB}\quad (2)\quad (0,5\text{ đ})$$
  - Từ $(1)$ và $(2)$ suy ra:
    $$\frac{AE}{EF} = \frac{EG}{AE}\quad (0,25\text{ đ})$$
  - Nhân chéo hai vế:
    $$AE \cdot AE = EF \cdot EG \implies AE^2 = EF \cdot EG\quad (\text{đpcm})\quad (0,25\text{ đ})$$

**Bài 4 (1,0 điểm):**
- Vì $DE \parallel BC \implies DI \parallel BM$ và $IE \parallel MC$.
- Trong $\triangle ABM$, có $DI \parallel BM$. Áp dụng hệ quả định lí Thalès:
  $$\frac{DI}{BM} = \frac{AI}{AM}\quad (1)\quad (0,25\text{ đ})$$
- Trong $\triangle ACM$, có $IE \parallel MC$. Áp dụng hệ quả định lí Thalès:
  $$\frac{IE}{MC} = \frac{AI}{AM}\quad (2)\quad (0,25\text{ đ})$$
- Từ $(1)$ và $(2)$ suy ra:
  $$\frac{DI}{BM} = \frac{IE}{MC}\quad (0,25\text{ đ})$$
- Mà $M$ là trung điểm của $BC$ nên $BM = MC$.
  Từ đó suy ra:
  $$DI = IE\quad (0,25\text{ đ})$$
  Vậy $I$ luôn là trung điểm của đoạn thẳng $DE$ (đpcm).
