---
title: 'Toán 7 Bài 37: Hình lăng trụ đứng tam giác và Hình lăng trụ đứng tứ giác'
description: 'Làm chủ lý thuyết hình lăng trụ đứng Toán 7 Bài 37: Cấu tạo lăng trụ đứng tam giác, lăng trụ đứng tứ giác, công thức tính diện tích xung quanh, thể tích, 4 dạng toán thực tế, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình khối thực tiễn
  - Hình lăng trụ đứng
  - Lăng trụ đứng tam giác
  - Lăng trụ đứng tứ giác
  - Thể tích lăng trụ
  - Kết nối tri thức
grade: 7
---

# Bài 37. Hình lăng trụ đứng tam giác và Hình lăng trụ đứng tứ giác

Khi đi cắm trại trong rừng, chiếc lều vải chữ A che mưa gió có hình dáng gì? Khi thưởng thức thanh sô-cô-la Toblerone nổi tiếng của Thụy Sĩ, hộp đựng của nó có cấu trúc thế nào? Hay những cuốn lịch để bàn hình tam giác, những viên gạch lát vỉa hè hình lục giác, những con đê chắn sóng hình thang bên bờ biển?

Tất cả những vật thể quen thuộc đó đều có chung một cấu trúc hình học không gian tuyệt đẹp: **Hình lăng trụ đứng**.

Nếu hình hộp chữ nhật có hai mặt đáy là hình chữ nhật thì hình lăng trụ đứng mở rộng đáy ra thành **tam giác, tứ giác, hình thang hay bất kỳ đa giác nào**. Sự kết hợp giữa đáy phẳng song song và các mặt bên hình chữ nhật vuông góc thẳng đứng tạo nên một kết cấu chịu lực phi thường.

Bài 37 sẽ trang bị cho các em kiến thức toàn diện về cấu tạo, cách tính diện tích xung quanh và thể tích của hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác, giúp các em tự tin ứng dụng vào các bài toán thực tiễn của cuộc sống!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 37: HÌNH LĂNG TRỤ ĐỨNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Lăng trụ Đứng Tam giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 2 mặt đáy là <strong>hai tam giác bằng nhau</strong> và song song.<br>• 3 mặt bên là các <strong>hình chữ nhật</strong>.<br>• 6 đỉnh, 9 cạnh (3 cạnh bên bằng nhau = chiều cao $h$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Lăng trụ Đứng Tứ giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 2 mặt đáy là <strong>hai tứ giác bằng nhau</strong> (hình thang, hình thoi...).<br>• 4 mặt bên là các <strong>hình chữ nhật</strong>.<br>• 8 đỉnh, 12 cạnh (4 cạnh bên bằng nhau = chiều cao $h$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Diện tích Xung quanh ($S_{xq}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tổng diện tích tất cả các mặt bên:<br>  $$S_{xq} = C_{\text{đáy}} \cdot h$$<br>• $C_{\text{đáy}}$: Chu vi mặt đáy của hình lăng trụ.<br>• $h$: Chiều cao (độ dài cạnh bên).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thể tích ($V$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tích diện tích đáy với chiều cao:<br>  $$V = S_{\text{đáy}} \cdot h$$<br>• $S_{\text{đáy}}$: Diện tích tam giác hoặc tứ giác đáy.<br>• $h$: Chiều cao của lăng trụ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số mặt bên:** Một hình lăng trụ đứng tam giác có bao nhiêu mặt bên và các mặt bên đó là hình gì?
2. **Số mặt đáy:** Một hình lăng trụ đứng có bao nhiêu mặt đáy? Hai mặt đáy có quan hệ gì với nhau?
3. **Cạnh bên:** Các cạnh bên của hình lăng trụ đứng có mối quan hệ gì về phương hướng và độ dài?
4. **Chu vi tam giác:** Một tam giác có độ dài ba cạnh là $3\text{ cm}, 4\text{ cm}, 5\text{ cm}$. Chu vi của tam giác bằng bao nhiêu?
5. **Diện tích hình thang:** Công thức tính diện tích hình thang có đáy lớn $a$, đáy nhỏ $b$ và chiều cao $h$ là gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Có $3$ mặt bên, tất cả đều là các hình chữ nhật.
> 2. Có $2$ mặt đáy bằng nhau và nằm trên hai mặt phẳng song song.
> 3. Các cạnh bên song song và bằng nhau (độ dài cạnh bên chính là chiều cao lăng trụ).
> 4. $C = 3 + 4 + 5 = 12\text{ cm}$.
> 5. $S = \frac{(a + b) \cdot h}{2}$.

---

## I. Lý thuyết Trọng tâm

### 1. Hình Lăng Trụ Đứng Tam Giác

#### a) Định nghĩa và cấu tạo
Hình lăng trụ đứng tam giác $ABC.A'B'C'$ gồm có:
- **Hai mặt đáy:** Mặt đáy $ABC$ và mặt đáy $A'B'C'$ là **hai hình tam giác bằng nhau** và nằm trên hai mặt phẳng song song.
- **Ba mặt bên:** $ABB'A', BCC'B', CAA'C'$ đều là các **hình chữ nhật**.
- **Ba cạnh bên:** $AA', BB', CC'$ song song và có độ dài bằng nhau. Độ dài của một cạnh bên được gọi là **chiều cao** của hình lăng trụ đứng, thường kí hiệu là $h$.
- **6 đỉnh:** $A, B, C, A', B', C'$.
- **9 cạnh:** Gồm 6 cạnh đáy và 3 cạnh bên.

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Mô hình không gian của Hình lăng trụ đứng tam giác">
    <!-- Cạnh đáy dưới khuất AC nét đứt -->
    <line x1="80" y1="220" x2="220" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="220" y1="180" x2="320" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="220" y1="180" x2="220" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" />

    <!-- Đáy trên A'B'C' -->
    <polygon points="80,90 220,50 320,90" fill="#e0f2fe" fill-opacity="0.6" stroke="#0284c7" stroke-width="2" />
    <!-- Cạnh bên AA', BB' -->
    <line x1="80" y1="90" x2="80" y2="220" stroke="#2563eb" stroke-width="2" />
    <line x1="320" y1="90" x2="320" y2="220" stroke="#2563eb" stroke-width="2" />
    <!-- Đáy dưới phần thấy AB -->
    <line x1="80" y1="220" x2="320" y2="220" stroke="#2563eb" stroke-width="2" />

    <!-- Mặt trước ABB'A' -->
    <polygon points="80,90 320,90 320,220 80,220" fill="#eff6ff" fill-opacity="0.4" stroke="#2563eb" stroke-width="2" />

    <!-- Nhãn đỉnh -->
    <text x="65" y="85" font-size="15" font-weight="700" fill="#1e293b">A'</text>
    <text x="215" y="40" font-size="15" font-weight="700" fill="#1e293b">C'</text>
    <text x="330" y="85" font-size="15" font-weight="700" fill="#1e293b">B'</text>
    <text x="65" y="235" font-size="15" font-weight="700" fill="#1e293b">A</text>
    <text x="330" y="235" font-size="15" font-weight="700" fill="#1e293b">B</text>
    <text x="225" y="195" font-size="15" font-weight="700" fill="#64748b">C</text>

    <!-- Chiều cao h -->
    <text x="40" y="160" font-size="15" font-weight="700" fill="#dc2626">h</text>
  </svg>
</div>

---

### 2. Hình Lăng Trụ Đứng Tứ Giác

#### a) Định nghĩa và cấu tạo
Hình lăng trụ đứng tứ giác $ABCD.A'B'C'D'$ gồm có:
- **Hai mặt đáy:** Mặt đáy $ABCD$ và mặt đáy $A'B'C'D'$ là **hai hình tứ giác bằng nhau** (có thể là hình bình hành, hình thoi, hình thang...) nằm trên hai mặt phẳng song song.
- **Bốn mặt bên:** Đều là các **hình chữ nhật**.
- **Bốn cạnh bên:** Song song và có độ dài bằng nhau ($AA' = BB' = CC' = DD' = h$).
- **8 đỉnh** và **12 cạnh**.

*(Chú ý: Hình hộp chữ nhật và hình lập phương chính là các trường hợp đặc biệt của hình lăng trụ đứng tứ giác khi đáy là hình chữ nhật hoặc hình vuông).*

---

### 3. Công thức tính Diện tích xung quanh và Thể tích của Hình lăng trụ đứng

> [!IMPORTANT]
> **CÔNG THỨC CHUNG CHO MỌI HÌNH LĂNG TRỤ ĐỨNG:**
> 
> 1. **Diện tích xung quanh ($S_{xq}$):**
>    $$S_{xq} = C_{\text{đáy}} \cdot h$$
>    *Bằng chu vi đáy nhân với chiều cao.*
> 
> 2. **Diện tích toàn phần ($S_{tp}$):**
>    $$S_{tp} = S_{xq} + 2 \cdot S_{\text{đáy}}$$
>    *Bằng diện tích xung quanh cộng với diện tích hai mặt đáy.*
> 
> 3. **Thể tích ($V$):**
>    $$V = S_{\text{đáy}} \cdot h$$
>    *Bằng diện tích đáy nhân với chiều cao.*

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Nhận diện các yếu tố và đọc hình khai triển

**Phương pháp giải:**
Khi trải phẳng một hình lăng trụ đứng lên mặt bàn:
- Các mặt bên trải ra thành một hình chữ nhật lớn có chiều dài bằng **chu vi đáy** ($C_{\text{đáy}}$) và chiều rộng bằng **chiều cao** ($h$).
- Hai mặt đáy gắn vào hai mép đối diện của hình chữ nhật lớn.

---

#### Bài toán 1:
Cho một hình lăng trụ đứng tam giác có kích thước đáy là tam giác vuông có hai cạnh góc vuông lần lượt là $6\text{ cm}$ và $8\text{ cm}$, cạnh huyền bằng $10\text{ cm}$. Chiều cao của lăng trụ bằng $12\text{ cm}$.
a) Kể tên số mặt, số đỉnh và số cạnh của hình lăng trụ.
b) Tính diện tích của một mặt đáy.
c) Tính diện tích xung quanh của hình lăng trụ đó.

**Lời giải:**

a) Hình lăng trụ đứng tam giác có:
- **5 mặt:** Gồm 2 mặt đáy tam giác và 3 mặt bên hình chữ nhật.
- **6 đỉnh.**
- **9 cạnh:** Gồm 6 cạnh đáy và 3 cạnh bên.

b) Mặt đáy là tam giác vuông có hai cạnh góc vuông $a = 6\text{ cm}$ và $b = 8\text{ cm}$.
Diện tích mặt đáy là:
$$S_{\text{đáy}} = \frac{1}{2} \cdot a \cdot b = \frac{1}{2} \cdot 6 \cdot 8 = 24\text{ (cm}^2\text{)}$$

c) Chu vi của mặt đáy tam giác là:
$$C_{\text{đáy}} = 6 + 8 + 10 = 24\text{ (cm)}$$
Diện tích xung quanh của hình lăng trụ đứng là:
$$S_{xq} = C_{\text{đáy}} \cdot h = 24 \cdot 12 = 288\text{ (cm}^2\text{)}$$

---

### Dạng 2: Tính thể tích của Hình lăng trụ đứng tam giác

**Phương pháp giải:**
1. Tính diện tích tam giác đáy: $S_{\text{đáy}} = \frac{1}{2} a \cdot h_a$ (hoặc $\frac{1}{2} a \cdot b$ nếu là tam giác vuông).
2. Áp dụng công thức thể tích: $V = S_{\text{đáy}} \cdot h$.

---

#### Bài toán 2:
Một thanh sô-cô-la có dạng hình lăng trụ đứng tam giác. Đáy là một tam giác đều có cạnh $3\text{ cm}$ và chiều cao của tam giác đáy là $2{,}6\text{ cm}$. Chiều dài của thanh sô-cô-la (chiều cao lăng trụ) là $20\text{ cm}$.
a) Tính thể tích của thanh sô-cô-la.
b) Biết khối lượng riêng của sô-cô-la là $1{,}2\text{ g/cm}^3$. Tính khối lượng của thanh sô-cô-la đó.

**Lời giải:**

a) Diện tích của một mặt đáy tam giác đều là:
$$S_{\text{đáy}} = \frac{1}{2} \cdot 3 \cdot 2{,}6 = 3{,}9\text{ (cm}^2\text{)}$$
Thể tích của thanh sô-cô-la là:
$$V = S_{\text{đáy}} \cdot h = 3{,}9 \cdot 20 = 78\text{ (cm}^3\text{)}$$

b) Khối lượng của thanh sô-cô-la là:
$$m = V \cdot D = 78 \cdot 1{,}2 = 93{,}6\text{ (gam)}$$

---

### Dạng 3: Tính diện tích và thể tích của Lăng trụ đứng tứ giác (Đáy hình thang)

**Phương pháp giải:**
1. Tính diện tích hình thang đáy: $S_{\text{đáy}} = \frac{(a + b) \cdot h_{\text{thang}}}{2}$.
2. Tính chu vi đáy: $C_{\text{đáy}} = a + b + c + d$.
3. Tính $S_{xq} = C_{\text{đáy}} \cdot h$ và $V = S_{\text{đáy}} \cdot h$.

---

#### Bài toán 3:
Một con đê chắn sóng bằng bê tông có mặt cắt ngang là một hình thang cân có đáy lớn $5\text{ m}$, đáy nhỏ $3\text{ m}$, chiều cao của hình thang là $2\text{ m}$ và hai cạnh bên của hình thang mỗi cạnh dài $2{,}24\text{ m}$. Chiều dài của đoạn đê chắn sóng là $50\text{ m}$.
a) Tính diện tích mặt cắt ngang (diện tích đáy lăng trụ) của con đê.
b) Tính thể tích bê tông cần dùng để đúc đoạn đê chắn sóng đó.
c) Người ta quét một lớp sơn chống thấm xung quanh mặt ngoài của thân đê (hai mặt dốc bên và mặt đỉnh đê, không sơn mặt đáy tiếp giáp mặt đất). Tính diện tích cần quét sơn.

**Lời giải:**

Con đê là một hình lăng trụ đứng tứ giác có đáy là hình thang cân và chiều cao lăng trụ là $h = 50\text{ m}$.

a) Diện tích mặt cắt ngang (mặt đáy) là:
$$S_{\text{đáy}} = \frac{(5 + 3) \cdot 2}{2} = \frac{8 \cdot 2}{2} = 8\text{ (m}^2\text{)}$$

b) Thể tích bê tông cần dùng là:
$$V = S_{\text{đáy}} \cdot h = 8 \cdot 50 = 400\text{ (m}^3\text{)}$$

c) Phần diện tích cần quét sơn gồm hai mặt bên ứng với hai cạnh bên ($2{,}24\text{ m}$) và một mặt bên ứng với đáy nhỏ ($3\text{ m}$):
- Tổng chiều rộng của ba mặt cần sơn là:
  $$C' = 2{,}24 + 3 + 2{,}24 = 7{,}48\text{ (m)}$$
- Diện tích cần quét sơn là:
  $$S_{\text{sơn}} = C' \cdot h = 7{,}48 \cdot 50 = 374\text{ (m}^2\text{)}$$

---

### Dạng 4: Bài toán dựng lều và sản xuất bao bì thực tế

**Phương pháp giải:**
Quy mô hình thực tế về hình lăng trụ đứng tam giác. Chiều dài chiếc lều chính là chiều cao lăng trụ $h$. Diện tích vải bạt chính là diện tích xung quanh (hoặc toàn phần tùy theo lều có đáy vải hay không).

---

#### Bài toán 4:
Một chiếc lều trại du lịch bằng vải bạt có dạng hình lăng trụ đứng tam giác với kích thước như sau: hai mặt mái lều nghiêng mỗi bên dài $2\text{ m}$, đáy lều rộng $2{,}4\text{ m}$ và chiều dài lều là $3\text{ m}$. Chiều cao từ đỉnh lều xuống mặt đất là $1{,}6\text{ m}$.
a) Tính diện tích vải bạt cần dùng để dựng chiếc lều đó (bao gồm cả hai mái lều, hai cửa lều hình tam giác ở hai đầu và đáy lều, bỏ qua mép may).
b) Tính thể tích không gian không khí bên trong chiếc lều.

**Lời giải:**

a) Chiếc lều là hình lăng trụ đứng tam giác có:
- Đáy là tam giác cân có cạnh đáy $2{,}4\text{ m}$, hai cạnh bên là $2\text{ m}$, chiều cao tam giác là $1{,}6\text{ m}$.
- Chiều cao lăng trụ là $h = 3\text{ m}$.

Diện tích hai mặt đáy tam giác (hai đầu lều):
$$2 \cdot S_{\text{đáy}} = 2 \cdot \left(\frac{1}{2} \cdot 2{,}4 \cdot 1{,}6\right) = 2{,}4 \cdot 1{,}6 = 3{,}84\text{ (m}^2\text{)}$$
Chu vi của mặt đáy tam giác:
$$C_{\text{đáy}} = 2 + 2 + 2{,}4 = 6{,}4\text{ (m)}$$
Diện tích xung quanh của lều (hai mái và mặt đáy lều):
$$S_{xq} = C_{\text{đáy}} \cdot h = 6{,}4 \cdot 3 = 19{,}2\text{ (m}^2\text{)}$$
Tổng diện tích vải bạt cần dùng là:
$$S_{\text{vải}} = S_{xq} + 2S_{\text{đáy}} = 19{,}2 + 3{,}84 = 23{,}04\text{ (m}^2\text{)}$$

b) Thể tích không gian bên trong chiếc lều là:
$$V = S_{\text{đáy}} \cdot h = \left(\frac{1}{2} \cdot 2{,}4 \cdot 1{,}6\right) \cdot 3 = 1{,}92 \cdot 3 = 5{,}76\text{ (m}^3\text{)}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Lăng kính Quang học và Thí nghiệm Tán sắc của Newton (1666)

Năm 1666, chàng sinh viên 23 tuổi Isaac Newton đã làm một thí nghiệm làm thay đổi lịch sử quang học:
Cho một chùm ánh sáng Mặt Trời chiếu qua một **chiếc lăng kính thủy tinh hình lăng trụ đứng tam giác**.
- Chùm ánh sáng trắng bị bẻ cong và tán sắc thành dải cầu vồng 7 màu: Đỏ, Cam, Vàng, Lục, Lam, Chàm, Tím.
- Lăng trụ đứng tam giác với hai mặt bên nghiêng góc nhau đóng vai trò như một môi trường khúc xạ vi sai, chứng minh rằng ánh sáng trắng thực chất là sự hòa trộn của vô số ánh sáng đơn sắc.

---

### Chuyên đề 2: Cấu trúc Tổ ong Hình lăng trụ Lục giác và Bài toán Tối ưu Thần thánh

Tại sao loài ong mật qua hàng triệu năm tiến hóa lại luôn xây tổ dạng **những ống lăng trụ đứng lục giác đều** mà không phải hình lăng trụ tam giác hay hình tròn?
Năm 1999, nhà toán học Thomas Hales đã chứng minh **Giả thuyết Tổ ong (Honeycomb Conjecture)**:
*Lăng trụ lục giác đều là hình khối phân chia không gian phẳng hoàn hảo nhất, sử dụng chu vi mép sáp nhỏ nhất để bao quanh một diện tích thể tích chứa mật ong lớn nhất!*
Loài ong đã biết ứng dụng bài toán tối ưu cực trị toán học trước con người hàng triệu năm!

---

### Chuyên đề 3: Cột Đá Bazan Cổ Thạch và Kỳ quan Ghềnh Đá Đĩa Phú Yên

Tại Ghềnh Đá Đĩa (Phú Yên) hay bờ biển Giant's Causeway (Bắc Ireland), hàng vạn cột đá bazan hình lăng trụ đứng ngũ giác và lục giác cao hàng chục mét xếp chồng khít khao như tổ ong khổng lồ.
- Hàng triệu năm trước, khi dòng dung nham núi lửa nguội đi, bề mặt đá co ngót đẳng hướng về các tâm làm nguội.
- Lực co ngót tự nhiên đã bẻ gãy khối đá bazan thành các cột lăng trụ đứng lục giác có độ bền cơ học vững chãi nhất trước sóng gió biển Đông.

---

### Chuyên đề 4: Máy in 3D FDM và Nguyên lý Lát cắt Lăng trụ Vi phân

Làm thế nào một chiếc máy in 3D có thể tạo ra một bức tượng rồng hay một chiếc cúp lưu niệm phức tạp?
Phần mềm cắt lớp (Slicer) biến đổi mô hình 3D thành hàng ngàn lớp mỏng xếp chồng lên nhau:
- Mỗi lớp in dày khoảng $0{,}1 - 0{,}2\text{ mm}$ thực chất là một **khối lăng trụ đứng vi mô** có diện tích đáy $S_i$ và chiều cao $\Delta h$.
- Thể tích của vật thể in 3D chính là tổng thể tích của tất cả các khối lăng trụ vi phân đó:
  $$V \approx \sum S_i \cdot \Delta h$$
Đây chính là nền tảng của phép tính Tích phân Riemann trong Giải tích đại học!

---

### Chuyên đề 5: Khí động học Tàng hình F-117 Nighthawk và Thiết kế Góc lăng trụ

Chiếc máy bay ném bom tàng hình đầu tiên trên thế giới F-117 Nighthawk không có bất kỳ một đường cong tròn nào trên thân máy bay. Thân vỏ của nó được ghép từ hàng chục tấm phẳng tạo thành các hình lăng trụ góc cạnh:
- Sóng radar của đối phương khi bắn tới các mặt phẳng hình chữ nhật nghiêng sẽ bị phản xạ chệch hướng lên trời hoặc xuống đất thay vì phản xạ ngược lại đài phát radar.
- Diện tích phản xạ radar (RCS) của một chiếc máy bay dài $20\text{ m}$ giảm xuống chỉ bằng kích thước của một con chim sẻ!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Bài 37: Hình lăng trụ đứng tam giác và tứ giác",
  "questions": [
    {
      "question": "Hình lăng trụ đứng tam giác có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?",
      "options": [
        "5 mặt, 6 đỉnh, 9 cạnh",
        "6 mặt, 8 đỉnh, 12 cạnh",
        "5 mặt, 5 đỉnh, 8 cạnh",
        "4 mặt, 4 đỉnh, 6 cạnh"
      ],
      "answer": 0,
      "hint": "Gồm 2 đáy tam giác và 3 mặt bên hình chữ nhật.",
      "explanation": "Hình lăng trụ đứng tam giác có 5 mặt (2 đáy tam giác, 3 mặt bên chữ nhật), 6 đỉnh và 9 cạnh."
    },
    {
      "question": "Các mặt bên của một hình lăng trụ đứng luôn là hình gì?",
      "options": [
        "Hình tam giác",
        "Hình chữ nhật",
        "Hình thoi",
        "Hình vuông"
      ],
      "answer": 1,
      "hint": "Cạnh bên vuông góc với mặt phẳng đáy tạo nên các mặt bên phẳng vuông.",
      "explanation": "Theo định nghĩa hình lăng trụ đứng, các mặt bên của nó luôn là các hình chữ nhật."
    },
    {
      "question": "Công thức tính diện tích xung quanh của hình lăng trụ đứng có chu vi đáy C_đáy và chiều cao h là:",
      "options": [
        "Sxq = C_đáy * h",
        "Sxq = 2 * C_đáy * h",
        "Sxq = 1/2 * C_đáy * h",
        "Sxq = C_đáy + h"
      ],
      "answer": 0,
      "hint": "Diện tích xung quanh bằng chu vi đáy nhân với chiều cao.",
      "explanation": "Diện tích xung quanh của hình lăng trụ đứng bằng chu vi đáy nhân với chiều cao: $S_{xq} = C_{\\text{đáy}} \\cdot h$."
    },
    {
      "question": "Một hình lăng trụ đứng tam giác có diện tích đáy là 15 cm^2 và chiều cao là 8 cm. Thể tích của hình lăng trụ đó bằng:",
      "options": [
        "60 cm^3",
        "120 cm^3",
        "180 cm^3",
        "40 cm^3"
      ],
      "answer": 1,
      "hint": "V = S_đáy * h = 15 * 8.",
      "explanation": "Thể tích hình lăng trụ đứng là: $V = S_{\\text{đáy}} \\cdot h = 15 \\cdot 8 = 120\\text{ cm}^3$."
    },
    {
      "question": "Hình lăng trụ đứng tứ giác có bao nhiêu cạnh bên?",
      "options": [
        "3 cạnh bên",
        "4 cạnh bên",
        "6 cạnh bên",
        "8 cạnh bên"
      ],
      "answer": 1,
      "hint": "Đáy là tứ giác có 4 đỉnh, tương ứng với 4 cạnh bên nối hai đáy.",
      "explanation": "Hình lăng trụ đứng tứ giác có đúng 4 cạnh bên song song và bằng nhau."
    },
    {
      "question": "Một lăng trụ đứng tam giác có đáy là tam giác vuông có hai cạnh góc vuông là 3 cm và 4 cm. Chiều cao lăng trụ là 10 cm. Thể tích của lăng trụ bằng:",
      "options": [
        "60 cm^3",
        "120 cm^3",
        "30 cm^3",
        "50 cm^3"
      ],
      "answer": 0,
      "hint": "S_đáy = (1/2) * 3 * 4 = 6 cm^2. V = 6 * 10.",
      "explanation": "Diện tích đáy là $S_{\\text{đáy}} = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6\\text{ cm}^2$. Thể tích là $V = 6 \\cdot 10 = 60\\text{ cm}^3$."
    },
    {
      "question": "Chiều cao của hình lăng trụ đứng chính là độ dài của:",
      "options": [
        "Một cạnh đáy",
        "Một cạnh bên",
        "Đường chéo đáy",
        "Nửa chu vi đáy"
      ],
      "answer": 1,
      "hint": "Cạnh bên vuông góc với hai đáy nên độ dài cạnh bên là khoảng cách giữa hai đáy.",
      "explanation": "Độ dài của một cạnh bên chính là chiều cao của hình lăng trụ đứng."
    },
    {
      "question": "Một hình lăng trụ đứng có đáy là hình thoi có hai đường chéo dài 6 cm và 8 cm. Chiều cao lăng trụ là 7 cm. Thể tích của lăng trụ là:",
      "options": [
        "168 cm^3",
        "336 cm^3",
        "84 cm^3",
        "112 cm^3"
      ],
      "answer": 0,
      "hint": "Diện tích hình thoi đáy: S_đáy = (1/2) * d1 * d2 = (1/2) * 6 * 8 = 24 cm^2. V = 24 * 7.",
      "explanation": "Diện tích đáy hình thoi là $S = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24\\text{ cm}^2$. Thể tích là $V = 24 \\cdot 7 = 168\\text{ cm}^3$."
    },
    {
      "question": "Hình hộp chữ nhật có phải là một hình lăng trụ đứng tứ giác không?",
      "options": [
        "Đúng, là trường hợp đặc biệt khi đáy là hình chữ nhật",
        "Sai, hai hình hoàn toàn khác nhau",
        "Chỉ đúng khi các cạnh bên bằng cạnh đáy",
        "Không thể so sánh"
      ],
      "answer": 0,
      "hint": "Hình hộp chữ nhật có 2 đáy hình chữ nhật và các mặt bên vuông góc.",
      "explanation": "Hình hộp chữ nhật chính là một hình lăng trụ đứng tứ giác có đáy là hình chữ nhật."
    },
    {
      "question": "Khi trải phẳng hình lăng trụ đứng tam giác thì các mặt bên tạo thành một hình chữ nhật lớn có một kích thước bằng:",
      "options": [
        "Diện tích đáy",
        "Chu vi đáy của lăng trụ",
        "Nửa chu vi đáy",
        "Đường cao của tam giác đáy"
      ],
      "answer": 1,
      "hint": "Ba mặt bên ghép liền nhau theo mép các cạnh đáy.",
      "explanation": "Khi trải phẳng các mặt bên, ba cạnh đáy xếp liên tiếp thành một đoạn thẳng có độ dài đúng bằng chu vi đáy."
    }
  ]
}
````

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Một hình lăng trụ đứng tam giác có chiều cao $15\text{ cm}$. Đáy là một tam giác có ba cạnh lần lượt là $5\text{ cm}, 12\text{ cm}, 13\text{ cm}$.
a) Chứng minh rằng tam giác đáy là một tam giác vuông.
b) Tính diện tích toàn phần của hình lăng trụ đứng đó.
c) Tính thể tích của hình lăng trụ đứng đó.

### Bài tập 2:
Một bồn chứa nước bằng inox hình lăng trụ đứng có đáy là hình vuông cạnh $1{,}2\text{ m}$ và chiều cao của bồn là $1{,}8\text{ m}$.
a) Tính dung tích tối đa của bồn chứa nước theo lít.
b) Hiện tại lượng nước trong bồn đang chiếm $70\%$ dung tích của bồn. Hỏi cần bơm thêm bao nhiêu lít nước nữa thì bồn đầy?

### Bài tập 3 (Toán thực tế):
Một cái chặn giấy bằng pha lê có dạng hình lăng trụ đứng tứ giác. Đáy là hình thang vuông có hai đáy lần lượt là $4\text{ cm}$ và $6\text{ cm}$, chiều cao của hình thang là $3\text{ cm}$. Chiều cao của khối chặn giấy pha lê là $8\text{ cm}$.
a) Tính thể tích của khối pha lê.
b) Biết khối lượng riêng của pha lê là $2{,}5\text{ g/cm}^3$. Tính khối lượng của cái chặn giấy đó.
