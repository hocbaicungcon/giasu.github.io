---
title: 'Toán 8 Bài 16: Đường trung bình của tam giác'
description: 'Làm chủ toàn bộ kiến thức Đường trung bình của tam giác Toán 8 Bài 16: Định nghĩa, định lý 1 (đoạn thẳng qua trung điểm một cạnh và song song cạnh thứ hai), định lý 2 (tính chất song song và bằng nửa cạnh đáy), 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Đường trung bình của tam giác
  - Tính chất đường trung bình
  - Đoạn thẳng song song
  - Kết nối tri thức
grade: 8
---

# Bài 16. Đường trung bình của tam giác

Hãy quan sát vì kèo gỗ nâng đỡ mái ngói của những ngôi nhà cổ, chiếc thang nhôm gấp chữ A hay giàn giáo thép trên các công trình cao tầng: Ở chính giữa hai cạnh bên xiên chéo, người thợ luôn gắn một thanh ngang song song với mặt đất.

Thanh giằng ngang ở vị trí "nửa chừng" ấy không chỉ tạo điểm tựa cân bằng mà còn có một sức mạnh cơ học kỳ diệu: Nó chia đôi áp lực, giữ cho hai cạnh bên không bị choãi ra và tăng khả năng chịu tải trọng lên gấp đôi. Trong toán học, đoạn thẳng đặc biệt này được gọi là **Đường trung bình của tam giác**.

Đường trung bình là một trường hợp đặc biệt vô cùng đẹp đẽ của **Định lí Thalès** khi tỉ số chia cạnh đúng bằng $\frac{1}{2}$. Nó vừa mang tính chất song song, vừa có độ dài bằng đúng một nửa cạnh đáy, trở thành "chiếc cầu nối" đắc lực giúp chúng ta chứng minh song song, tính độ dài và khám phá các tứ giác đặc biệt.

Bài học này sẽ giúp các em:
1. Nắm vững định nghĩa **đường trung bình của tam giác** (một tam giác có đúng $3$ đường trung bình).
2. Khắc sâu **Định lí 1**: Đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba.
3. Làm chủ **Định lí 2 (Tính chất cốt lõi)**: Đường trung bình thì song song với cạnh thứ ba và bằng nửa cạnh ấy.
4. Vận dụng linh hoạt đường trung bình để giải quyết các bài toán đo khoảng cách thực tế không thể tiếp cận trực tiếp.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 16: ĐƯỜNG TRUNG BÌNH CỦA TAM GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đoạn thẳng nối <strong>trung điểm hai cạnh</strong> của tam giác.<br>• Trong $\triangle ABC$, nếu $D$ là trung điểm $AB$, $E$ là trung điểm $AC$ thì $DE$ là đường trung bình.<br>• Một tam giác có đúng <strong>3 đường trung bình</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lí 1 (Xác định trung điểm)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường thẳng đi qua <strong>trung điểm một cạnh</strong> của tam giác và <strong>song song với cạnh thứ hai</strong> thì đi qua <strong>trung điểm của cạnh thứ ba</strong>.<br>• Công cụ chứng minh trung điểm rất mạnh.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Định lí 2 (Tính chất cốt lõi)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường trung bình của tam giác thì <strong>song song với cạnh thứ ba và bằng nửa cạnh ấy</strong>:<br>$$DE \parallel BC\quad\text{và}\quad DE = \frac{1}{2}BC$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tam giác trung bình</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nối 3 đường trung bình tạo thành <strong>tam giác trung bình</strong>.<br>• Chu vi tam giác trung bình bằng <em>nửa chu vi</em> $\triangle ABC$.<br>• Diện tích tam giác trung bình bằng <em>một phần tư</em> diện tích $\triangle ABC$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Đoạn thẳng nối trung điểm hai cạnh của tam giác được gọi là gì?
2. **Số lượng:** Một tam giác có tất cả bao nhiêu đường trung bình?
3. **Phản xạ số học:** Tam giác $\triangle ABC$ có cạnh $BC = 18\text{ cm}$. Gọi $D, E$ lần lượt là trung điểm của $AB$ và $AC$. Độ dài đoạn thẳng $DE$ bằng bao nhiêu?
4. **Chu vi:** Nếu chu vi của tam giác $\triangle ABC$ bằng $30\text{ cm}$ thì chu vi của tam giác tạo bởi ba đường trung bình của nó bằng bao nhiêu?
5. **Nhận diện:** Trong $\triangle MNP$, qua trung điểm $I$ của cạnh $MN$, kẻ đường thẳng song song với $NP$ cắt cạnh $MP$ tại $K$. Điểm $K$ có vị trí gì trên cạnh $MP$?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Đó là **đường trung bình của tam giác**.
> 2. Có đúng **$3$** đường trung bình (ứng với 3 cặp cạnh).
> 3. Theo tính chất đường trung bình: $DE = \frac{BC}{2} = \frac{18}{2} = 9\text{ cm}$.
> 4. Bằng một nửa: $P' = \frac{30}{2} = 15\text{ cm}$.
> 5. Điểm $K$ là **trung điểm của cạnh $MP$** (theo Định lí 1).

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Định nghĩa đường trung bình của tam giác

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Đường trung bình của tam giác** là đoạn thẳng nối trung điểm hai cạnh của tam giác.

Trong tam giác $\triangle ABC$:
- Nếu $D$ là trung điểm của cạnh $AB$ ($DA = DB$).
- Và $E$ là trung điểm của cạnh $AC$ ($EA = EC$).
Thì đoạn thẳng $DE$ là **đường trung bình** của tam giác $\triangle ABC$.

Mỗi tam giác có $3$ đỉnh và $3$ cạnh nên có đúng **$3$ đường trung bình**. Khi vẽ cả $3$ đường trung bình, chúng chia tam giác ban đầu thành $4$ tam giác nhỏ bằng nhau từng đôi một!

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto;" class="lesson-diagram" role="img" aria-label="Đường trung bình DE của tam giác ABC song song và bằng nửa cạnh đáy BC">
    <!-- Tam giác ABC -->
    <polygon points="270,30 90,210 450,210" fill="rgba(16,185,129,0.06)" stroke="#10b981" stroke-width="2.5" />
    <!-- Đường trung bình DE -->
    <line x1="180" y1="120" x2="360" y2="120" stroke="#2563eb" stroke-width="2.5" />
    <!-- Đỉnh A -->
    <circle cx="270" cy="30" r="4.5" fill="#1e293b" />
    <text x="265" y="20" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <!-- Đỉnh B -->
    <circle cx="90" cy="210" r="4.5" fill="#1e293b" />
    <text x="70" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <!-- Đỉnh C -->
    <circle cx="450" cy="210" r="4.5" fill="#1e293b" />
    <text x="460" y="225" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <!-- Điểm D -->
    <circle cx="180" cy="120" r="4.5" fill="#2563eb" />
    <text x="155" y="125" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#2563eb">D</text>
    <!-- Điểm E -->
    <circle cx="360" cy="120" r="4.5" fill="#2563eb" />
    <text x="370" y="125" font-family="Source Sans Pro, Helvetica, Arial, sans-serif" font-weight="bold" font-size="16" fill="#2563eb">E</text>
    <!-- Vạch bằng nhau AD = DB (1 vạch) -->
    <line x1="220" y1="72" x2="230" y2="78" stroke="#10b981" stroke-width="2" />
    <line x1="130" y1="162" x2="140" y2="168" stroke="#10b981" stroke-width="2" />
    <!-- Vạch bằng nhau AE = EC (2 vạch) -->
    <line x1="310" y1="72" x2="320" y2="78" stroke="#10b981" stroke-width="2" />
    <line x1="316" y1="68" x2="326" y2="74" stroke="#10b981" stroke-width="2" />
    <line x1="400" y1="162" x2="410" y2="168" stroke="#10b981" stroke-width="2" />
    <line x1="406" y1="158" x2="416" y2="164" stroke="#10b981" stroke-width="2" />
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Đoạn thẳng DE nối trung điểm D của AB và trung điểm E của AC là đường trung bình của tam giác ABC</em></p>
</div>

---

### 2. Định lí 1: Điều kiện đi qua trung điểm cạnh thứ ba

> [!NOTE]
> **ĐỊNH LÍ 1:**
> Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì **đi qua trung điểm của cạnh thứ ba**.
> 
> Trong $\triangle ABC$:
> $$D\text{ là trung điểm của } AB\quad\text{và}\quad DE \parallel BC\; (E \in AC) \implies E\text{ là trung điểm của } AC$$

#### Chứng minh định lí:
Áp dụng định lí Thalès trong $\triangle ABC$:
Vì $DE \parallel BC$ nên:
$$\frac{AD}{DB} = \frac{AE}{EC}$$
Mà $D$ là trung điểm của $AB \implies AD = DB \implies \frac{AD}{DB} = 1$.
Do đó:
$$\frac{AE}{EC} = 1 \implies AE = EC$$
Vậy $E$ chính là trung điểm của $AC\quad (\text{đpcm})$.

---

### 3. Định lí 2: Tính chất của đường trung bình

> [!IMPORTANT]
> **ĐỊNH LÍ 2 (TÍNH CHẤT CỐT LÕI):**
> Đường trung bình của tam giác thì **song song với cạnh thứ ba và bằng nửa cạnh ấy**.
> $$DE\text{ là đường trung bình của } \triangle ABC \implies DE \parallel BC\quad\text{và}\quad DE = \frac{1}{2}BC$$

#### Chứng minh định lí:
Vì $D, E$ lần lượt là trung điểm của $AB$ và $AC$:
$$\frac{AD}{AB} = \frac{1}{2}\quad\text{và}\quad \frac{AE}{AC} = \frac{1}{2}$$
Suy ra $\frac{AD}{AB} = \frac{AE}{AC} = \frac{1}{2}$.
Theo định lí Thalès đảo, ta có:
$$DE \parallel BC$$
Áp dụng hệ quả của định lí Thalès cho $DE \parallel BC$:
$$\frac{DE}{BC} = \frac{AD}{AB} = \frac{1}{2} \implies DE = \frac{1}{2}BC\quad (\text{đpcm})$$

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính độ dài đoạn thẳng và chu vi tam giác

**Phương pháp giải:**
- Nếu $DE$ là đường trung bình ứng với cạnh $BC$ thì:
  $$DE = \frac{BC}{2} \iff BC = 2DE$$
- Chu vi của tam giác tạo bởi 3 đường trung bình bằng một nửa chu vi tam giác ban đầu:
  $$P_{DEF} = \frac{1}{2}P_{ABC}$$

---

#### Bài toán 1:
Cho tam giác $ABC$ có chu vi bằng $36\text{ cm}$. Gọi $D, E, F$ lần lượt là trung điểm của các cạnh $AB, BC, CA$.
a) Cho $BC = 14\text{ cm}, AB = 10\text{ cm}$. Tính độ dài cạnh $AC$ và độ dài ba đường trung bình $DE, EF, FD$.
b) Chứng minh chu vi của tam giác $\triangle DEF$ bằng nửa chu vi của tam giác $\triangle ABC$ và tính chu vi tam giác $\triangle DEF$.

**Lời giải:**

a) Ta có chu vi $\triangle ABC$:
$$AB + BC + CA = 36 \implies 10 + 14 + CA = 36 \implies CA = 36 - 24 = 12\text{ cm}$$
Các đường trung bình của $\triangle ABC$:
- $DE$ nối trung điểm của $AB$ và $BC \implies DE = \frac{AC}{2} = \frac{12}{2} = 6\text{ cm}$.
- $EF$ nối trung điểm của $BC$ và $CA \implies EF = \frac{AB}{2} = \frac{10}{2} = 5\text{ cm}$.
- $FD$ nối trung điểm của $CA$ và $AB \implies FD = \frac{BC}{2} = \frac{14}{2} = 7\text{ cm}$.

b) Chu vi tam giác $\triangle DEF$ là:
$$P_{DEF} = DE + EF + FD = \frac{AC}{2} + \frac{AB}{2} + \frac{BC}{2} = \frac{AB + BC + CA}{2} = \frac{1}{2}P_{ABC}$$
Thay số:
$$P_{DEF} = \frac{36}{2} = 18\text{ cm}$$

---

### Dạng 2: Chứng minh hai đường thẳng song song và hai đoạn thẳng bằng nhau

**Phương pháp giải:**
- Để chứng minh $MN \parallel BC$ hoặc $MN = \frac{1}{2}BC$, ta chứng minh $MN$ là đường trung bình của $\triangle ABC$.
- Kết hợp đường trung bình với hình bình hành: Nếu tứ giác có các cạnh đối song song và bằng nhau thì là hình bình hành.

---

#### Bài toán 2:
Cho tam giác $ABC$ cân tại $A$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $AC$.
a) Chứng minh tứ giác $BMNC$ là hình thang cân.
b) Lấy điểm $P$ sao cho $N$ là trung điểm của đoạn thẳng $MP$. Chứng minh tứ giác $AMCP$ là hình bình hành.

**Lời giải:**

a) Xét $\triangle ABC$:
Vì $M$ là trung điểm của $AB$ và $N$ là trung điểm của $AC$ nên $MN$ là **đường trung bình** của $\triangle ABC$.
Theo tính chất đường trung bình:
$$MN \parallel BC$$
Tứ giác $BMNC$ có $MN \parallel BC$ nên $BMNC$ là **hình thang**.
Mặt khác, $\triangle ABC$ cân tại $A$ nên $\widehat{B} = \widehat{C}$.
Hình thang $BMNC$ có hai góc kề đáy bằng nhau ($\widehat{B} = \widehat{C}$) nên $BMNC$ là **hình thang cân** (đpcm).

b) Xét tứ giác $AMCP$:
- Hai đường chéo là $AC$ và $MP$ cắt nhau tại điểm $N$.
- Theo giả thiết: $N$ là trung điểm của $AC$ và $N$ là trung điểm của $MP$.
Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường nên $AMCP$ là **hình bình hành** (đpcm).

---

### Dạng 3: Chứng minh một điểm là trung điểm của đoạn thẳng (Vận dụng Định lí 1)

**Phương pháp giải:**
Để chứng minh $E$ là trung điểm của đoạn thẳng $AC$:
1. Tìm một tam giác chứa cạnh $AC$ (thường là $\triangle ABC$).
2. Tìm điểm $D$ là trung điểm của cạnh thứ nhất ($AB$).
3. Chỉ ra đường thẳng qua $D$ song song với cạnh thứ hai ($BC$) và cắt $AC$ tại $E$.
4. Kết luận $E$ là trung điểm của $AC$ theo Định lí 1.

---

#### Bài toán 3:
Cho hình thang $ABCD$ ($AB \parallel CD$). Gọi $M$ là trung điểm của cạnh bên $AD$. Qua $M$ kẻ đường thẳng song song với hai đáy, cắt đường chéo $BD$ tại $I$ và cắt cạnh bên $BC$ tại $N$.
a) Chứng minh $I$ là trung điểm của $BD$.
b) Chứng minh $N$ là trung điểm của $BC$.
c) Cho biết $AB = 8\text{ cm}$ và $CD = 14\text{ cm}$. Tính độ dài các đoạn thẳng $MI, IN$ và $MN$.

**Lời giải:**

a) Xét tam giác $\triangle DAB$:
- $M$ là trung điểm của $AD$ (giả thiết).
- $MI \parallel AB$ (vì $MN \parallel AB$).
Theo Định lí 1, đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba:
Suy ra $I$ là **trung điểm của đường chéo $BD$** (đpcm).

b) Xét tam giác $\triangle BDC$:
- $I$ là trung điểm của $BD$ (chứng minh câu a).
- $IN \parallel CD$ (vì $MN \parallel CD$).
Theo Định lí 1 trong $\triangle BDC$, suy ra $N$ là **trung điểm của cạnh bên $BC$** (đpcm).

c) Tính độ dài:
- Trong $\triangle DAB$, $MI$ là đường trung bình ứng với đáy $AB$:
  $$MI = \frac{AB}{2} = \frac{8}{2} = 4\text{ cm}$$
- Trong $\triangle BDC$, $IN$ là đường trung bình ứng với đáy $CD$:
  $$IN = \frac{CD}{2} = \frac{14}{2} = 7\text{ cm}$$
- Độ dài đoạn thẳng $MN$ là:
  $$MN = MI + IN = 4 + 7 = 11\text{ cm}$$
  *(Nhận xét: $MN = \frac{AB + CD}{2} = \frac{8 + 14}{2} = 11\text{ cm}$, $MN$ chính là đường trung bình của hình thang $ABCD$)*.

---

### Dạng 4: Bài toán ứng dụng thực tế đo khoảng cách gián tiếp

**Phương pháp giải:**
Chọn một điểm mốc $A$ sao cho có thể quan sát và đo được khoảng cách từ $A$ đến hai điểm $B$ và $C$ cần tính. Lấy trung điểm $D, E$ của $AB, AC$, đo độ dài đoạn thẳng $DE$ trên thực địa rồi nhân đôi: $BC = 2DE$.

---

#### Bài toán 4:
Hai địa điểm $B$ và $C$ nằm ở hai bờ của một hồ nước nên không thể dùng thước đo trực tiếp khoảng cách giữa chúng.
Để đo khoảng cách $BC$, một nhóm học sinh chọn một vị trí $A$ trên bờ hồ sao cho từ $A$ có thể ngắm thẳng và đi tới được cả $B$ và $C$.
Các bạn đo được $AB = 60\text{ m}$ và $AC = 80\text{ m}$. Trên đoạn $AB$, các bạn cắm cọc tiêu tại điểm $D$ cách $A$ một khoảng $30\text{ m}$; trên đoạn $AC$, cắm cọc tiêu tại điểm $E$ cách $A$ một khoảng $40\text{ m}$.
Dùng thước dây đo được khoảng cách giữa hai cọc $DE = 45\text{ m}$.
Hãy tính khoảng cách giữa hai địa điểm $B$ và $C$.

**Lời giải:**

Xét tam giác $\triangle ABC$:
- Ta có $AD = 30\text{ m}$ và $AB = 60\text{ m} \implies AD = \frac{1}{2}AB$, do đó $D$ là trung điểm của cạnh $AB$.
- Ta có $AE = 40\text{ m}$ và $AC = 80\text{ m} \implies AE = \frac{1}{2}AC$, do đó $E$ là trung điểm của cạnh $AC$.
Đoạn thẳng $DE$ nối trung điểm của hai cạnh $AB$ và $AC$, do đó $DE$ là **đường trung bình** của tam giác $\triangle ABC$.
Theo tính chất đường trung bình của tam giác:
$$DE = \frac{1}{2}BC \implies BC = 2 \cdot DE$$
Thay số đo thực địa:
$$BC = 2 \cdot 45 = 90\text{ m}$$
Vậy khoảng cách giữa hai địa điểm $B$ và $C$ là $90\text{ m}$.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Vì kèo mái nhà & Thanh xà gồ chống cong võng
Trong kỹ thuật mộc dựng nhà gỗ truyền thống (nhà rường Huế, nhà ba gian Bắc Bộ), bộ vì kèo hình tam giác chịu tải trọng hàng tấn ngói bên trên:
- Các thanh kèo dốc có xu hướng bị oằn cong võng xuống ở chính giữa.
- Thợ mộc luôn lắp thanh **quá giang** hoặc **thanh giằng ngang** nối đúng trung điểm hai thanh kèo chính (đường trung bình của tam giác vì kèo).
- Thanh giằng trung bình này hoạt động như một thanh chống nén, triệt tiêu mô-men uốn tại điểm yếu nhất, giúp mái nhà vững chãi qua hàng trăm năm bão gió.

### 2. Thang gấp chữ A và dây xích hãm an toàn
Một chiếc thang nhôm chữ A có hai chân tạo thành hai cạnh của tam giác cân:
- Nếu không có sợi dây cáp khóa ở giữa, khi người trèo lên bậc trên cùng, lực nén thẳng đứng sẽ đẩy hai chân thang choãi sang hai bên gây sập thang.
- Đoạn dây cáp thép nối đúng trung điểm hai chân thang (đường trung bình): Theo tính chất đường trung bình, nó chịu lực căng cực đại để cố định góc mở chân thang, đảm bảo an toàn tuyệt đối theo tiêu chuẩn châu Âu EN131.

### 3. Kỹ thuật định vị hải đồ & Cắm cọc tiêu bờ biển
Khi hoa tiêu tàu thuyền muốn đo khoảng cách giữa hai bãi đá ngầm nguy hiểm $B$ và $C$ ngoài khơi xa:
- Họ chọn trạm hải đăng $A$ trên bờ biển, xác định hai điểm mốc trung điểm $D, E$ trên đường ngắm.
- Bằng cách đo cự ly $DE$ ngay trên bờ cát bằng máy toàn đạc điện tử, hải quân tính chính xác khoảng cách giữa hai bãi ngầm ngoài khơi để vẽ luồng lạch cho tàu container di chuyển an toàn.

### 4. Cầu giàn thép Warren (Warren Truss Bridge)
Cầu thép đường sắt Bắc Nam thường dùng cấu trúc giàn tam giác lặp lại liên hoàn (Warren Truss):
- Mỗi tam giác chịu lực lớn đều được chia nhỏ bởi các thanh giằng trung bình nối trung điểm các cạnh.
- Việc chia nhỏ này giúp giảm độ mảnh của các thanh thép chịu nén, chống hiện tượng mất ổn định cục bộ (buckling) khi đoàn tàu hỏa tải trọng hàng nghìn tấn lăn bánh qua cầu.

### 5. Fractal học: Tam giác quỷ Sierpinski
Nhà toán học Ba Lan Waclaw Sierpinski đã sáng tạo ra một hình học phân mảnh (Fractal) nổi tiếng thế giới:
- Bắt đầu từ một tam giác đều, nối 3 đường trung bình của tam giác.
- Xóa bỏ tam giác trung bình ở chính giữa, còn lại 3 tam giác nhỏ ở 3 góc.
- Tiếp tục nối các đường trung bình trong từng tam giác nhỏ và xóa tam giác giữa vô hạn lần.
- Kết quả thu được là một hình có diện tích tiến dần về $0$ nhưng tổng chu vi các cạnh lại tiến tới vô cùng! Cấu trúc này ngày nay được ứng dụng để thiết kế ăng-ten ngầm đa băng tần siêu nhỏ trong điện thoại thông minh 5G.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đường trung bình của tam giác là đoạn thẳng nối:",
  "options": [
    "Đỉnh với trung điểm của cạnh đối diện",
    "Trung điểm hai cạnh của tam giác",
    "Hai điểm bất kì trên hai cạnh của tam giác",
    "Đỉnh với một điểm chia cạnh đối diện theo tỉ số 1:2"
  ],
  "answer": 1,
  "explanation": "Theo định nghĩa chuẩn sách giáo khoa: Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một tam giác có tất cả bao nhiêu đường trung bình?",
  "options": [
    "1",
    "2",
    "3",
    "Vô số"
  ],
  "answer": 2,
  "explanation": "Một tam giác có 3 cặp cạnh nên có đúng 3 đường trung bình nối trung điểm của từng cặp cạnh."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho tam giác ABC có D là trung điểm AB, E là trung điểm AC. Biết cạnh BC = 16 cm. Độ dài đoạn thẳng DE là:",
  "options": [
    "32 cm",
    "8 cm",
    "16 cm",
    "4 cm"
  ],
  "answer": 1,
  "explanation": "DE là đường trung bình của tam giác ABC nên DE = BC / 2 = 16 / 2 = 8 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì:",
  "options": [
    "Bằng một nửa cạnh thứ ba",
    "Đi qua trung điểm của cạnh thứ ba",
    "Vuông góc với cạnh thứ ba",
    "Cắt cạnh thứ ba tại điểm chia tỉ lệ 1:3"
  ],
  "answer": 1,
  "explanation": "Theo Định lí 1: Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tam giác ABC có chu vi bằng 28 cm. Nối trung điểm 3 cạnh của tam giác ABC ta được tam giác mới có chu vi là:",
  "options": [
    "56 cm",
    "14 cm",
    "7 cm",
    "28 cm"
  ],
  "answer": 1,
  "explanation": "Mỗi cạnh của tam giác mới bằng một nửa cạnh tương ứng của tam giác ABC, nên chu vi tam giác mới bằng một nửa chu vi tam giác ABC: 28 / 2 = 14 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tam giác ABC đều có cạnh bằng 10 cm. Độ dài đường trung bình của tam giác ABC là:",
  "options": [
    "5 cm",
    "10 cm",
    "2.5 cm",
    "5√3 cm"
  ],
  "answer": 0,
  "explanation": "Cả ba cạnh đều bằng 10 cm nên cả ba đường trung bình đều có độ dài bằng 10 / 2 = 5 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khẳng định nào sau đây là SAI về đường trung bình MN của tam giác ABC (M ∈ AB, N ∈ AC)?",
  "options": [
    "MN ∥ BC",
    "MN = 1/2 BC",
    "Tứ giác BMNC là hình thang",
    "Diện tích tam giác AMN bằng 1/2 diện tích tam giác ABC"
  ],
  "answer": 3,
  "explanation": "Tam giác AMN có đáy MN = 1/2 BC và chiều cao hạ từ A bằng 1/2 chiều cao tam giác ABC, do đó diện tích S_AMN = (1/2) · (1/2) · S_ABC = 1/4 S_ABC (chứ không phải 1/2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hình thang ABCD (AB ∥ CD). Gọi M, N lần lượt là trung điểm của hai cạnh bên AD và BC. Đoạn thẳng MN có độ dài bằng:",
  "options": [
    "CD - AB",
    "(AB + CD) / 2",
    "2(AB + CD)",
    "(CD - AB) / 2"
  ],
  "answer": 1,
  "explanation": "Đoạn thẳng MN nối trung điểm hai cạnh bên của hình thang là đường trung bình của hình thang, có độ dài bằng nửa tổng hai đáy: MN = (AB + CD) / 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Gọi D, E lần lượt là trung điểm của AB và AC. Độ dài đoạn thẳng DE là:",
  "options": [
    "10 cm",
    "5 cm",
    "7 cm",
    "4 cm"
  ],
  "answer": 1,
  "explanation": "Theo định lí Pythagore: BC = √(6² + 8²) = 10 cm. Đoạn DE là đường trung bình ứng với cạnh huyền BC nên DE = BC / 2 = 10 / 2 = 5 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tứ giác MNPQ có 4 đỉnh lần lượt là trung điểm các cạnh của một tứ giác ABCD bất kì. Tứ giác MNPQ luôn là:",
  "options": [
    "Hình chữ nhật",
    "Hình thoi",
    "Hình bình hành",
    "Hình thang cân"
  ],
  "answer": 2,
  "explanation": "Theo định lý Varignon, nhờ tính chất đường trung bình song song và bằng nửa đường chéo, tứ giác có các đỉnh là trung điểm 4 cạnh của tứ giác bất kì luôn là hình bình hành."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Đường trung bình của tam giác

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

**Câu 1:** Trong tam giác, đoạn thẳng nối trung điểm hai cạnh được gọi là:
- A. Đường trung tuyến
- B. Đường cao
- C. Đường trung trực
- D. Đường trung bình

**Câu 2:** Cho $\triangle ABC$ có $M$ là trung điểm của $AB$, $N$ là trung điểm của $AC$. Khẳng định nào sau đây ĐÚNG?
- A. $MN \parallel BC$ và $MN = \frac{1}{2}BC$
- B. $MN \perp BC$
- C. $MN = BC$
- D. $MN = 2BC$

**Câu 3:** Cho $\triangle MNP$ có $I, K$ lần lượt là trung điểm của $MN$ và $MP$. Biết $IK = 7\text{ cm}$. Độ dài cạnh $NP$ là:
- A. $3,5\text{ cm}$
- B. $14\text{ cm}$
- C. $21\text{ cm}$
- D. $10,5\text{ cm}$

**Câu 4:** Cho tam giác $ABC$ có chu vi bằng $42\text{ cm}$. Gọi $D, E, F$ lần lượt là trung điểm của ba cạnh $AB, BC, CA$. Chu vi tam giác $\triangle DEF$ là:
- A. $84\text{ cm}$
- B. $21\text{ cm}$
- C. $14\text{ cm}$
- D. $28\text{ cm}$

**Câu 5:** Cho hình thang $ABCD$ ($AB \parallel CD$) có $AB = 6\text{ cm}$ và $CD = 10\text{ cm}$. Đoạn thẳng nối trung điểm hai cạnh bên của hình thang có độ dài là:
- A. $8\text{ cm}$
- B. $16\text{ cm}$
- C. $4\text{ cm}$
- D. $12\text{ cm}$

**Câu 6:** Cho $\triangle ABC$ vuông tại $A$ có $AB = 5\text{ cm}, BC = 13\text{ cm}$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $BC$. Độ dài đoạn thẳng $MN$ là:
- A. $6\text{ cm}$
- B. $12\text{ cm}$
- C. $6,5\text{ cm}$
- D. $2,5\text{ cm}$

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Cho tam giác $ABC$. Gọi $D, E$ lần lượt là trung điểm của các cạnh $AB$ và $AC$.
a) Biết $BC = 16\text{ cm}$. Tính độ dài đoạn thẳng $DE$.
b) Kẻ đường thẳng qua $D$ song song với $AC$, cắt cạnh $BC$ tại điểm $F$. Chứng minh tứ giác $DECF$ là hình bình hành.

**Bài 2 (2,0 điểm):**
Cho tam giác $ABC$ có đường trung tuyến $AM$. Gọi $I$ là trung điểm của $AM$. Tia $BI$ cắt cạnh $AC$ tại điểm $K$.
a) Kẻ đường thẳng qua $M$ song song với $BK$, cắt $AC$ tại điểm $E$. Chứng minh $K$ là trung điểm của đoạn thẳng $AE$.
b) Chứng minh rằng: $AK = \frac{1}{2}KC$ (hay $AK = \frac{1}{3}AC$).

**Bài 3 (2,0 điểm):**
Cho tứ giác $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$.
a) Chứng minh tứ giác $MNPQ$ là hình bình hành.
b) Tứ giác $ABCD$ cần thêm điều kiện gì về hai đường chéo $AC$ và $BD$ để tứ giác $MNPQ$ trở thành hình chữ nhật?

**Bài 4 (1,0 điểm — Vận dụng cao):**
Cho tam giác $ABC$ nhọn có các đường cao $BD$ và $CE$. Gọi $M, N$ lần lượt là trung điểm của các đoạn thẳng $BC$ và $DE$.
Chứng minh rằng đoạn thẳng $MN$ vuông góc với đoạn thẳng $DE$.

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **D** | **A** | **B** | **B** | **A** | **A** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) (1,0 điểm)
  - Vì $D, E$ lần lượt là trung điểm của $AB$ và $AC$ nên $DE$ là đường trung bình của $\triangle ABC$ *(0,5 đ)*.
  - Theo tính chất đường trung bình: $DE = \frac{BC}{2} = \frac{16}{2} = 8\text{ cm}$ *(0,5 đ)*.
- b) (1,0 điểm)
  - Ta có $DE \parallel BC \implies DE \parallel FC$ *(0,25 đ)*.
  - Theo giả thiết: $DF \parallel AC \implies DF \parallel EC$ *(0,25 đ)*.
  - Tứ giác $DECF$ có các cạnh đối song song ($DE \parallel FC$ và $DF \parallel EC$) nên là **hình bình hành** (đpcm) *(0,5 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,0 điểm)
  - Xét tam giác $\triangle AME$:
    $I$ là trung điểm của $AM$ và $IK \parallel ME$ (do $BK \parallel ME$) *(0,25 đ)*.
    Theo Định lí 1, đường thẳng đi qua trung điểm một cạnh và song song cạnh thứ hai thì đi qua trung điểm cạnh thứ ba:
    Suy ra $K$ là **trung điểm của đoạn thẳng $AE$** *(0,5 đ)*.
    $$\implies AK = KE\quad (1)\quad (0,25\text{ đ})$$
- b) (1,0 điểm)
  - Xét tam giác $\triangle BCK$:
    $M$ là trung điểm của $BC$ và $ME \parallel BK$ *(0,25 đ)*.
    Theo Định lí 1, suy ra $E$ là trung điểm của đoạn thẳng $KC$ *(0,25 đ)*.
    $$\implies KE = EC\quad (2)\quad (0,25\text{ đ})$$
  - Từ $(1)$ và $(2)$ suy ra: $AK = KE = EC \implies KC = 2AK$.
    Do đó $AK = \frac{1}{2}KC$ và $AK = \frac{1}{3}AC$ (đpcm) *(0,25 đ)*.

**Bài 3 (2,0 điểm):**
- a) (1,0 điểm)
  - Nối đường chéo $AC$.
    Trong $\triangle ABC$: $M, N$ là trung điểm $AB, BC \implies MN$ là đường trung bình $\implies MN \parallel AC$ và $MN = \frac{AC}{2}$ *(0,25 đ)*.
    Trong $\triangle ADC$: $Q, P$ là trung điểm $AD, CD \implies QP$ là đường trung bình $\implies QP \parallel AC$ và $QP = \frac{AC}{2}$ *(0,25 đ)*.
  - Suy ra $MN \parallel QP$ và $MN = QP = \frac{AC}{2}$.
    Tứ giác $MNPQ$ có một cặp cạnh đối vừa song song vừa bằng nhau nên là **hình bình hành** *(0,5 đ)*.
- b) (1,0 điểm)
  - Nối đường chéo $BD$. Trong $\triangle ABD$, $MQ$ là đường trung bình $\implies MQ \parallel BD$ *(0,25 đ)*.
  - Hình bình hành $MNPQ$ là hình chữ nhật $\iff \widehat{QMN} = 90^\circ \iff MQ \perp MN$ *(0,25 đ)*.
  - Mà $MQ \parallel BD$ và $MN \parallel AC$, suy ra $MQ \perp MN \iff AC \perp BD$ *(0,25 đ)*.
  - **Kết luận:** Tứ giác $ABCD$ có **hai đường chéo vuông góc với nhau** ($AC \perp BD$) thì $MNPQ$ là hình chữ nhật *(0,25 đ)*.

**Bài 4 (1,0 điểm):**
- Trong tam giác vuông $\triangle BDC$ vuông tại $D$:
  $M$ là trung điểm cạnh huyền $BC \implies DM$ là đường trung tuyến ứng với cạnh huyền:
  $$DM = \frac{BC}{2}\quad (0,25\text{ đ})$$
- Trong tam giác vuông $\triangle BEC$ vuông tại $E$:
  $M$ là trung điểm cạnh huyền $BC \implies EM$ là đường trung tuyến ứng với cạnh huyền:
  $$EM = \frac{BC}{2}\quad (0,25\text{ đ})$$
- Suy ra $DM = EM = \frac{BC}{2}$, do đó tam giác $\triangle MDE$ là **tam giác cân tại đỉnh $M$** *(0,25 đ)*.
- Trong tam giác cân $\triangle MDE$, đoạn thẳng $MN$ nối đỉnh $M$ với trung điểm $N$ của cạnh đáy $DE$ là đường trung tuyến.
  Trong tam giác cân, đường trung tuyến đồng thời là đường cao:
  $$MN \perp DE\quad (\text{đpcm})\quad (0,25\text{ đ})$$
