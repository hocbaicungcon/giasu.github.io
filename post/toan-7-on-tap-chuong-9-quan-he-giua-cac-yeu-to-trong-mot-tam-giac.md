---
title: 'Ôn tập Chương 9: Quan hệ giữa các yếu tố trong một tam giác - Toàn diện Lý thuyết, Ma trận Đối sánh và 5 Chuyên đề Nâng cao'
description: 'Hệ thống hóa toàn bộ kiến thức Chương 9 Toán 7: Quan hệ góc - cạnh đối diện, đường vuông góc - đường xiên, bất đẳng thức tam giác, 4 điểm đồng quy (G, I, O, H) kèm 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Quan hệ góc và cạnh
  - Đường vuông góc và đường xiên
  - Bất đẳng thức tam giác
  - Trọng tâm
  - Trực tâm
  - Ôn tập chương 9
  - Kết nối tri thức
grade: 7
---

# Ôn tập Chương 9. Quan hệ giữa các yếu tố trong một tam giác

Nếu toàn bộ hình học phẳng cổ điển được ví như một tòa lâu đài nguy nga tráng lệ thì **Tam giác** chính là viên gạch nền móng kiên cố nhất. Trong cuốn *Cơ sở (Elements)* ra đời hơn 2300 năm trước, Euclid đã dành phần lớn dung lượng để giải mã những quy luật nội tại sâu sắc chi phối hình tam giác.

Chương 9 đã dẫn dắt chúng ta qua một chuyến du hành hình học logic chặt chẽ gồm 5 bài học tuyệt đẹp:
1. **Bài 31:** Quan hệ giữa góc và cạnh đối diện ($AC > AB \iff \widehat{B} > \widehat{C}$), hệ quả cạnh huyền trong tam giác vuông.
2. **Bài 32:** Quan hệ giữa đường vuông góc và đường xiên ($AH \le AB$), khoảng cách từ một điểm đến đường thẳng và nguyên lý tối ưu khoảng cách.
3. **Bài 33:** Bất đẳng thức tam giác ($|b - c| < a < b + c$) — điều kiện ắt có và đủ để ba đoạn thẳng khép kín thành một tam giác.
4. **Bài 34:** Sự đồng quy của **Ba đường trung tuyến tại Trọng tâm $G$** (tỉ lệ $\frac{2}{3}$) và **Ba đường phân giác tại Tâm nội tiếp $I$** (cách đều ba cạnh).
5. **Bài 35:** Sự đồng quy của **Ba đường trung trực tại Tâm ngoại tiếp $O$** (cách đều ba đỉnh) và **Ba đường cao tại Trực tâm $H$**, khép lại bằng vẻ đẹp kỳ diệu của **Đường thẳng Euler** ($H - G - O$).

Bài ôn tập tổng hợp này sẽ giúp các em xâu chuỗi toàn bộ Chương 9 thành một bản đồ tư duy logic hoàn chỉnh, rèn luyện tư duy chứng minh hình học sắc bén và làm chủ trọn vẹn mọi bài thi học kỳ!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC TỔNG ÔN CHƯƠNG 9: HÌNH HỌC TAM GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quan hệ Bất đẳng thức</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Góc đối diện cạnh lớn hơn là góc lớn hơn.<br>• Cạnh huyền lớn nhất trong tam giác vuông.<br>• Đường vuông góc ngắn hơn mọi đường xiên.<br>• Bất đẳng thức tam giác: $|b - c| < a < b + c$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Trọng tâm G & Tâm nội tiếp I</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Trọng tâm G:</strong> Giao 3 đường trung tuyến. Tỉ lệ: $GA = \frac{2}{3} AM = 2 GM$.<br>• <strong>Tâm nội tiếp I:</strong> Giao 3 đường phân giác. Cách đều 3 cạnh: $d(I, AB) = d(I, BC) = d(I, CA) = r$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tâm ngoại tiếp O & Trực tâm H</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tâm ngoại tiếp O:</strong> Giao 3 đường trung trực. Cách đều 3 đỉnh: $OA = OB = OC = R$.<br>• <strong>Trực tâm H:</strong> Giao 3 đường cao.<br>• Tam giác vuông: $O$ là trung điểm cạnh huyền, $H$ trùng đỉnh góc vuông.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính Đối xứng Đỉnh cao</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tam giác cân:</strong> 4 điểm $G, I, O, H$ thẳng hàng trên trục đối xứng.<br>• <strong>Tam giác đều:</strong> Cả 4 điểm $G, I, O, H$ trùng nhau làm một.<br>• <strong>Đường thẳng Euler:</strong> $H, G, O$ luôn thẳng hàng ($HG = 2 GO$).</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ toàn diện 5 câu (5 phút)

1. **Góc và cạnh:** Tam giác $ABC$ có $\widehat{A} = 100^\circ$. Cạnh nào là cạnh dài nhất của tam giác?
2. **Vuông góc và xiên:** Điểm $A$ cách đường thẳng $d$ một khoảng $6\text{ cm}$. Một đường xiên $AB$ kẻ từ $A$ đến $d$ có thể có độ dài $5\text{ cm}$ được không? Vì sao?
3. **Bất đẳng thức tam giác:** Cho hai đoạn thẳng $4\text{ cm}$ và $9\text{ cm}$. Đoạn thẳng thứ ba phải có độ dài nguyên nằm trong khoảng nào để tạo thành tam giác?
4. **Trọng tâm:** Cho tam giác $ABC$ có trung tuyến $AM = 18\text{ cm}$. Khoảng cách từ trọng tâm $G$ đến đỉnh $A$ bằng bao nhiêu?
5. **Vị trí trực tâm:** Trực tâm của tam giác vuông nằm ở đâu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Cạnh $BC$ (vì đối diện với góc tù $100^\circ$ là góc lớn nhất).
> 2. Không thể, vì đường xiên luôn lớn hơn đoạn vuông góc ($AB > 6\text{ cm}$).
> 3. $9 - 4 < x < 9 + 4 \implies 5 < x < 13\text{ (cm)}$. Các giá trị nguyên là $\{6; 7; 8; 9; 10; 11; 12\}$.
> 4. $AG = \frac{2}{3} \cdot 18 = 12\text{ cm}$.
> 5. Trùng với đỉnh góc vuông của tam giác.

---

## I. Bảng Ma trận So sánh 4 Đường và 4 Điểm Đặc biệt

| Tên đường | Điểm đồng quy | Kí hiệu | Tính chất hình học cốt lõi | Vị trí trong tam giác vuông |
| :--- | :--- | :---: | :--- | :--- |
| **Đường Trung tuyến** | **Trọng tâm** | $G$ | Cách mỗi đỉnh $\frac{2}{3}$ độ dài trung tuyến, chia tam giác thành 3 phần có diện tích bằng nhau | Nằm trên trung tuyến ứng với cạnh huyền |
| **Đường Phân giác** | **Tâm đường tròn nội tiếp** | $I$ | **Cách đều ba cạnh** của tam giác: $d(I, AB) = d(I, BC) = d(I, CA) = r$ | Luôn nằm bên trong tam giác |
| **Đường Trung trực** | **Tâm đường tròn ngoại tiếp**| $O$ | **Cách đều ba đỉnh** của tam giác: $OA = OB = OC = R$ | **Trùng trung điểm của cạnh huyền** |
| **Đường Cao** | **Trực tâm** | $H$ | Giao điểm 3 đường vuông góc kẻ từ đỉnh đến cạnh đối diện | **Trùng đỉnh góc vuông** |

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: So sánh góc, cạnh và các đoạn thẳng

**Phương pháp giải:**
1. Góc đối diện cạnh lớn hơn là góc lớn hơn; cạnh đối diện góc lớn hơn là cạnh lớn hơn.
2. Đường vuông góc ngắn hơn mọi đường xiên.
3. Sử dụng tính chất góc ngoài của tam giác để tạo chuỗi bất đẳng thức trung gian.

---

#### Bài toán 1:
Cho tam giác $ABC$ cân tại $A$ có $\widehat{A} < 60^\circ$. Kẻ $AH \perp BC$ tại $H$. Trên tia đối của tia $BC$ lấy điểm $M$, trên tia đối của tia $CB$ lấy điểm $N$ sao cho $BM = CN$.
a) So sánh độ dài các cạnh $AB, AC$ với $BC$.
b) Chứng minh tam giác $AMN$ là tam giác cân.
c) So sánh độ dài các đoạn thẳng $AH, AB, AM$.

**Lời giải:**

a) Trong tam giác cân $ABC$ ($AB = AC$):
$$\widehat{B} = \widehat{C} = \frac{180^\circ - \widehat{A}}{2}$$
Vì $\widehat{A} < 60^\circ$ nên:
$$\widehat{B} = \widehat{C} > \frac{180^\circ - 60^\circ}{2} = 60^\circ > \widehat{A}$$
Trong $\triangle ABC$, vì $\widehat{B} > \widehat{A}$ nên theo định lý quan hệ giữa góc và cạnh đối diện:
$$AC > BC \implies AB = AC > BC$$

b) Xét hai tam giác $\triangle ABM$ và $\triangle ACN$:
- $AB = AC$ (giả thiết $\triangle ABC$ cân tại $A$).
- Vì $\widehat{ABC} = \widehat{ACB}$ nên hai góc kề bù với chúng bằng nhau:
  $$\widehat{ABM} = 180^\circ - \widehat{ABC} = 180^\circ - \widehat{ACB} = \widehat{ACN}$$
- $BM = CN$ (giả thiết).
Do đó $\triangle ABM = \triangle ACN\text{ (c.g.c)}$.
$\implies AM = AN$ (hai cạnh tương ứng).
Vậy tam giác $AMN$ cân tại $A$.

c) Xét điểm $A$ nằm ngoài đường thẳng $MN$:
- $AH \perp BC \implies AH \perp MN$ tại $H$. Đoạn $AH$ là đoạn vuông góc.
- $AB$ và $AM$ là hai đường xiên kẻ từ $A$ đến đường thẳng $MN$.
- Hình chiếu của $AB$ là đoạn $HB$; hình chiếu của $AM$ là đoạn $HM$.
Vì $M$ nằm trên tia đối của $BC$ nên $H, B, M$ thẳng hàng theo thứ tự đó $\implies HB < HM$.
Theo định lý quan hệ giữa đường xiên và hình chiếu:
Đường vuông góc ngắn hơn đường xiên: $AH < AB$.
Hình chiếu lớn hơn thì đường xiên lớn hơn: $HB < HM \implies AB < AM$.
Từ đó ta có chuỗi bất đẳng thức:
$$AH < AB < AM$$

---

### Dạng 2: Bất đẳng thức tam giác và tìm giá trị nguyên của cạnh

**Phương pháp giải:**
1. Áp dụng bất đẳng thức kép: $|b - c| < a < b + c$.
2. Kết hợp điều kiện bài toán (cạnh nguyên, tam giác cân, nửa chu vi) để xác định giá trị cạnh.

---

#### Bài toán 2:
Cho tam giác $ABC$ có độ dài hai cạnh $AB = 4\text{ cm}, AC = 10\text{ cm}$.
a) Tìm khoảng giá trị của cạnh $BC$.
b) Biết độ dài cạnh $BC$ là một số tự nhiên chẵn, tính chu vi của tam giác $ABC$.
c) Tam giác $ABC$ có thể là tam giác vuông được không? Vì sao?

**Lời giải:**

a) Theo bất đẳng thức tam giác, cạnh $BC$ thỏa mãn:
$$|AC - AB| < BC < AC + AB \implies 10 - 4 < BC < 10 + 4 \implies 6 < BC < 14\text{ (cm)}$$

b) Vì $BC$ là số tự nhiên chẵn và $6 < BC < 14$ nên $BC$ có thể nhận các giá trị:
$$BC \in \{8; 10; 12\}\text{ (cm)}$$
Chu vi tương ứng của tam giác $ABC$ ($C = AB + AC + BC = 14 + BC$):
- Với $BC = 8\text{ cm}$: $C = 14 + 8 = 22\text{ cm}$.
- Với $BC = 10\text{ cm}$: $C = 14 + 10 = 24\text{ cm}$ (khi đó $\triangle ABC$ cân tại $A$).
- Với $BC = 12\text{ cm}$: $C = 14 + 12 = 26\text{ cm}$.

c) Để tam giác $ABC$ vuông, theo định lý Pythagore:
- Nếu $BC$ là cạnh huyền: $BC^2 = 4^2 + 10^2 = 16 + 100 = 116 \implies BC = \sqrt{116} \approx 10{,}77\text{ cm}$.
- Nếu $AC = 10\text{ cm}$ là cạnh huyền: $BC^2 = 10^2 - 4^2 = 100 - 16 = 84 \implies BC = \sqrt{84} \approx 9{,}17\text{ cm}$.
Cả hai giá trị này đều nằm trong khoảng $(6; 14)$ nên về mặt hình học, tam giác $ABC$ hoàn toàn **có thể là tam giác vuông** khi $BC = \sqrt{116}\text{ cm}$ hoặc $BC = \sqrt{84}\text{ cm}$.

---

### Dạng 3: Bài toán Trọng tâm và Tỉ lệ độ dài

**Phương pháp giải:**
Sử dụng công thức trọng tâm: $AG = \frac{2}{3} AM, GM = \frac{1}{3} AM, AG = 2 GM$. Kết hợp tính chất trung điểm.

---

#### Bài toán 3:
Cho tam giác $ABC$ có hai đường trung tuyến $BM$ và $CN$ cắt nhau tại $G$. Trên tia đối của tia $MB$ lấy điểm $P$ sao cho $MP = MG$. Trên tia đối của tia $NC$ lấy điểm $Q$ sao cho $NQ = NG$.
a) Chứng minh rằng $G$ là trung điểm của $BP$ và $CQ$.
b) Chứng minh $\triangle MGN = \triangle MPB$.
c) Chứng minh $PQ = BC$.

**Lời giải:**

a) Vì $G$ là trọng tâm của tam giác $ABC$ nên theo định lý trọng tâm:
$$BG = 2 GM$$
Theo giả thiết dựng điểm: $MP = MG \implies GP = GM + MP = 2 GM$.
Do đó:
$$BG = GP = 2 GM$$
Vì $B, M, G, P$ thẳng hàng theo thứ tự đó nên điểm $G$ chính là **trung điểm của đoạn thẳng $BP$**.
Chứng minh hoàn toàn tương tự, ta có:
$$CG = GQ = 2 GN$$
Vậy điểm $G$ cũng là **trung điểm của đoạn thẳng $CQ$**.

b) Xét hai tam giác $\triangle MGN$ và $\triangle MPB$:
- $GM = MP$ (giả thiết).
- $\widehat{GMN} = \widehat{PMB}$ (hai góc đối đỉnh).
- $MN = MB$? Không, xét theo cách khác:
  Xét $\triangle GBC$ và $\triangle GPQ$:
  Ta có $GB = GP$ (chứng minh ở câu a), $GC = GQ$ (chứng minh ở câu a).
  Góc $\widehat{BGC} = \widehat{PGQ}$ (hai góc đối đỉnh).
  Do đó:
  $$\triangle GBC = \triangle GPQ\text{ (c.g.c)}$$
  $$\implies PQ = BC\text{ (hai cạnh tương ứng)}$$
Đây là một kết quả tuyệt đẹp: Đoạn thẳng $PQ$ nối hai điểm đối xứng luôn bằng đúng cạnh đáy $BC$!

---

### Dạng 4: Chứng minh vuông góc và thẳng hàng thông qua sự đồng quy

**Phương pháp giải:**
- Chứng minh trực tâm $H$: Giao điểm 2 đường cao $\implies$ Đường thẳng nối đỉnh thứ ba với $H$ vuông góc cạnh đối diện.
- Chứng minh thẳng hàng: Sử dụng tính chất tam giác cân (đường trung tuyến đồng thời là đường cao, phân giác, trung trực) hoặc đường thẳng Euler ($H - G - O$).

---

#### Bài toán 4:
Cho tam giác $ABC$ cân tại $A$. Các đường cao $BD$ và $CE$ cắt nhau tại $H$.
a) Chứng minh rằng: $\triangle ABD = \triangle ACE$.
b) Chứng minh rằng: Tam giác $HBC$ là tam giác cân.
c) Chứng minh rằng: Ba điểm $A, H, M$ thẳng hàng, với $M$ là trung điểm của cạnh $BC$.

**Lời giải:**

a) Xét hai tam giác vuông $\triangle ABD$ (vuông tại $D$) và $\triangle ACE$ (vuông tại $E$):
- Cạnh huyền: $AB = AC$ (giả thiết $\triangle ABC$ cân tại $A$).
- Góc nhọn chung: $\widehat{A}$.
Do đó $\triangle ABD = \triangle ACE$ (cạnh huyền - góc nhọn).
$\implies \widehat{ABD} = \widehat{ACE}$ (hai góc tương ứng).

b) Ta có:
$$\widehat{HBC} = \widehat{ABC} - \widehat{ABD}$$
$$\widehat{HCB} = \widehat{ACB} - \widehat{ACE}$$
Vì $\widehat{ABC} = \widehat{ACB}$ (do $\triangle ABC$ cân tại $A$) và $\widehat{ABD} = \widehat{ACE}$ (theo câu a), nên:
$$\widehat{HBC} = \widehat{HCB}$$
Tam giác $HBC$ có hai góc ở đáy bằng nhau nên tam giác $HBC$ **cân tại $H$**.

c) Chứng minh $A, H, M$ thẳng hàng:
- Vì $H$ là giao điểm của hai đường cao $BD$ và $CE$ nên $H$ là **trực tâm** của tam giác $ABC$.
- Do đó, đoạn thẳng nối từ đỉnh $A$ đi qua $H$ ($AH$) vuông góc với cạnh đáy $BC$:
  $$AH \perp BC$$
- Mặt khác, tam giác $ABC$ cân tại $A$ có $M$ là trung điểm của cạnh đáy $BC$ nên đường trung tuyến $AM$ đồng thời là đường cao:
  $$AM \perp BC$$
- Qua điểm $A$ chỉ có duy nhất một đường thẳng vuông góc với $BC$, do đó hai đường thẳng $AH$ và $AM$ phải trùng nhau.
**Kết luận:** Ba điểm $A, H, M$ **thẳng hàng**!

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Trực tâm Fermat - Torricelli và Bài toán Mạng lưới Cáp tối ưu

Năm 1640, Pierre de Fermat đã thách thức các nhà toán học:
*Tìm một điểm $P$ bên trong tam giác $ABC$ sao cho tổng khoảng cách đến ba đỉnh $PA + PB + PC$ là nhỏ nhất!*

Nhà vật lý Evangelista Torricelli (học trò của Galileo) đã tìm ra lời giải:
- Nếu tam giác có cả ba góc $< 120^\circ$, điểm $P$ kỳ diệu đó nhìn ba cạnh dưới các góc bằng nhau đúng $120^\circ$:
  $$\widehat{APB} = \widehat{BPC} = \widehat{CPA} = 120^\circ$$
Điểm này được gọi là **Điểm Fermat - Torricelli**. Ngày nay, thuật toán này được ứng dụng để tối ưu hóa việc đặt trạm biến áp trung tâm nối với 3 khu công nghiệp, tiết kiệm hàng triệu mét dây cáp đồng đắt đỏ.

---

### Chuyên đề 2: Đường cong Bézier và Thiết kế Thân vỏ Ô tô Khí động học

Trong phần mềm thiết kế ô tô (như Ferrari, Porsche) hay thiết kế phông chữ vector đồ họa (TrueType, Adobe):
- Các đường cong uốn lượn mượt mà được tạo bởi **Đường cong Bézier** dựa trên các tam giác kiểm soát (Control Triangles).
- Vị trí của các điểm kiểm soát tuân theo bất đẳng thức tam giác và tỉ lệ trọng tâm $2 : 1$, đảm bảo luồng không khí lướt qua thân xe êm ái nhất, giảm thiểu hệ số cản gió $C_d < 0{,}2$.

---

### Chuyên đề 3: Khảo sát Địa chất và Bản đồ Đẳng cao tuyến

Khi các nhà địa chất đo vẽ bản đồ địa hình 3D của một dãy núi:
- Họ sử dụng lưới tam giác bất quy tắc (TIN - Triangulated Irregular Network).
- Mỗi tam giác địa hình được kiểm tra bằng định lý tâm ngoại tiếp Delaunay: *Không có điểm đo đạc nào khác nằm bên trong đường tròn ngoại tiếp của bất kỳ tam giác nào*.
Nguyên lý này đảm bảo các tam giác không bị méo mó, tái hiện chân thực từng khe núi, thung lũng và sườn dốc hiểm trở.

---

### Chuyên đề 4: Hệ thống Cân bằng Bánh lái Tự động trên Siêu du thuyền

Khi một con tàu container khổng lồ dài $400\text{ m}$ rẽ sóng trên đại dương, các lực tác động gồm: trọng lực khối lượng, lực nâng Ac-si-mét, lực đẩy chân vịt và lực cản của nước.
- Bốn lực này phân bố tạo thành một tứ diện hình học với các đường cao và đường trung trực trọng tâm.
- Hệ thống máy tính điều khiển bánh lái tự động tính toán vị trí trực tâm thủy lực liên tục $100$ lần mỗi giây, triệt tiêu hiện tượng lắc ngang (roll), giúp con tàu không bao giờ bị lật úp giữa những con sóng thần cao $15\text{ m}$.

---

### Chuyên đề 5: Vẻ đẹp Tuyệt đối của Đường thẳng Euler và Tỉ lệ Vàng Vũ trụ

Leonhard Euler đã chứng minh định lý vĩ đại năm 1765:
$$HG = 2 GO$$
Khoảng cách từ Trực tâm $H$ đến Trọng tâm $G$ luôn gấp đúng $2$ lần khoảng cách từ Trọng tâm $G$ đến Tâm ngoại tiếp $O$.
Tại sao một hình tam giác hoàn toàn ngẫu nhiên, không hề cân hay đều, lại luôn chứa đựng một trật tự thẳng hàng và tỉ lệ số học $2 : 1$ hoàn mỹ đến vậy? 
Các nhà vật lý thiên văn hiện đại nhận thấy tỉ lệ đối xứng này xuất hiện lặp lại trong cơ học quỹ đạo của hệ ba vật thể (Three-Body Problem) và sự phân bố thiên hà trong vũ trụ sâu thẳm.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực Toàn diện Chương 9: Hình học Tam giác",
  "questions": [
    {
      "question": "Cho tam giác ABC có AB = 6 cm, AC = 8 cm, BC = 10 cm. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Góc A < Góc B < Góc C",
        "Góc C < Góc B < Góc A",
        "Góc B < Góc C < Góc A",
        "Góc A < Góc C < Góc B"
      ],
      "answer": 1,
      "hint": "Cạnh đối diện: AB -> C, AC -> B, BC -> A. Sắp xếp: 6 < 8 < 10.",
      "explanation": "Vì $AB < AC < BC$ ($6 < 8 < 10$) nên góc đối diện tương ứng là $\\widehat{C} < \\widehat{B} < \\widehat{A}$."
    },
    {
      "question": "Bộ ba đoạn thẳng nào sau đây KHÔNG THỂ tạo thành một tam giác?",
      "options": [
        "4 cm, 6 cm, 9 cm",
        "3 cm, 5 cm, 8 cm",
        "7 cm, 8 cm, 10 cm",
        "5 cm, 12 cm, 13 cm"
      ],
      "answer": 1,
      "hint": "Kiểm tra tổng hai cạnh nhỏ: 3 + 5 = 8 (bằng cạnh lớn nhất, không lớn hơn).",
      "explanation": "Ta có $3 + 5 = 8$. Tổng hai cạnh bằng cạnh thứ ba nên ba điểm thẳng hàng, không thể tạo thành tam giác."
    },
    {
      "question": "Cho điểm A nằm ngoài đường thẳng d. Trong các đoạn thẳng nối từ A đến d, đoạn thẳng ngắn nhất là:",
      "options": [
        "Đoạn vuông góc",
        "Đường xiên bất kỳ",
        "Đoạn nối A với trung điểm của d",
        "Đoạn thẳng tạo với d một góc 45 độ"
      ],
      "answer": 0,
      "hint": "Đoạn vuông góc luôn ngắn hơn mọi đường xiên.",
      "explanation": "Theo định lý: Đoạn vuông góc là đoạn thẳng ngắn nhất nối từ một điểm ngoài đường thẳng đến đường thẳng đó."
    },
    {
      "question": "Cho tam giác ABC có đường trung tuyến AM = 15 cm. Trọng tâm G của tam giác cách đỉnh A một khoảng bằng:",
      "options": [
        "5 cm",
        "10 cm",
        "7,5 cm",
        "12 cm"
      ],
      "answer": 1,
      "hint": "AG = 2/3 AM = 2/3 * 15.",
      "explanation": "Theo tính chất trọng tâm: $AG = \\frac{2}{3} AM = \\frac{2}{3} \\cdot 15 = 10\\text{ cm}$."
    },
    {
      "question": "Điểm cách đều ba cạnh của một tam giác là giao điểm của:",
      "options": [
        "Ba đường trung tuyến",
        "Ba đường phân giác",
        "Ba đường trung trực",
        "Ba đường cao"
      ],
      "answer": 1,
      "hint": "Điểm này là tâm đường tròn nội tiếp tam giác.",
      "explanation": "Giao điểm của ba đường phân giác trong tam giác là điểm cách đều ba cạnh của tam giác đó."
    },
    {
      "question": "Tâm đường tròn ngoại tiếp của một tam giác là giao điểm của:",
      "options": [
        "Ba đường trung trực",
        "Ba đường cao",
        "Ba đường phân giác",
        "Ba đường trung tuyến"
      ],
      "answer": 0,
      "hint": "Điểm này cách đều ba đỉnh của tam giác.",
      "explanation": "Giao điểm của ba đường trung trực trong tam giác là tâm của đường tròn ngoại tiếp tam giác."
    },
    {
      "question": "Trong tam giác vuông, trực tâm của tam giác nằm ở vị trí nào?",
      "options": [
        "Trung điểm cạnh huyền",
        "Bên trong tam giác",
        "Trùng với đỉnh góc vuông",
        "Bên ngoài tam giác"
      ],
      "answer": 2,
      "hint": "Hai cạnh góc vuông chính là hai đường cao của tam giác.",
      "explanation": "Trong tam giác vuông, hai cạnh góc vuông cắt nhau tại đỉnh góc vuông, do đó trực tâm trùng với đỉnh góc vuông."
    },
    {
      "question": "Cho tam giác ABC có chu vi bằng 24 cm, độ dài hai cạnh là 6 cm và 10 cm. Độ dài cạnh còn lại là:",
      "options": [
        "8 cm",
        "7 cm",
        "9 cm",
        "12 cm"
      ],
      "answer": 0,
      "hint": "Cạnh còn lại = Chu vi - (6 + 10) = 24 - 16.",
      "explanation": "Độ dài cạnh còn lại là: $24 - (6 + 10) = 8\\text{ cm}$. Bộ ba $(6; 8; 10)$ thỏa mãn bất đẳng thức tam giác."
    },
    {
      "question": "Trong một tam giác đều, khẳng định nào sau đây là SAI?",
      "options": [
        "Ba góc đều bằng 60 độ",
        "Trọng tâm, Trực tâm, Tâm nội tiếp và Tâm ngoại tiếp trùng nhau",
        "Độ dài ba đường trung tuyến bằng nhau",
        "Trực tâm nằm bên ngoài tam giác"
      ],
      "answer": 3,
      "hint": "Tam giác đều là tam giác nhọn có các góc bằng 60 độ nên trực tâm nằm bên trong.",
      "explanation": "Khẳng định D sai, vì tam giác đều là tam giác nhọn nên trực tâm nằm bên trong và trùng với tâm đối xứng của tam giác."
    },
    {
      "question": "Đường thẳng Euler đi qua ba điểm đặc biệt nào trong tam giác?",
      "options": [
        "Trọng tâm, Tâm nội tiếp, Trực tâm",
        "Trực tâm, Trọng tâm, Tâm ngoại tiếp",
        "Tâm nội tiếp, Tâm ngoại tiếp, Trực tâm",
        "Trọng tâm, Tâm nội tiếp, Tâm ngoại tiếp"
      ],
      "answer": 1,
      "hint": "Đường thẳng Euler chứa H, G, O theo tỉ lệ HG = 2 GO.",
      "explanation": "Đường thẳng Euler luôn đi qua Trực tâm ($H$), Trọng tâm ($G$) và Tâm ngoại tiếp ($O$)."
    }
  ]
}
````

---

## V. Đề Kiểm tra 45 phút Đánh giá Năng lực Chương 9 (Chuẩn Ma trận & Barem Điểm)

### 1. Ma trận đề kiểm tra

| Mạch nội dung | Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Quan hệ góc - cạnh & Bất đẳng thức tam giác** | 1,0 đ (C1a) | 1,5 đ (C1b) | | | **2,5 đ** |
| **Đường vuông góc và đường xiên** | | 1,5 đ (C2a) | 1,0 đ (C2b) | | **2,5 đ** |
| **Đường trung tuyến & Trọng tâm tam giác** | 1,0 đ (C3a) | | 1,5 đ (C3b) | | **2,5 đ** |
| **Sự đồng quy của các đường & Bài toán thực tế** | | 1,0 đ (C4a) | | 1,5 đ (C4b) | **2,5 đ** |
| **Tổng điểm** | **2,0 đ** | **4,0 đ** | **2,5 đ** | **1,5 đ** | **10,0 đ** |

---

### 2. Đề bài chi tiết

**Bài 1 (2,5 điểm):**
a) Cho tam giác $ABC$ có $\widehat{A} = 80^\circ, \widehat{B} = 45^\circ$. Tính số đo góc $\widehat{C}$ và sắp xếp ba cạnh $AB, BC, CA$ theo thứ tự tăng dần về độ dài.
b) Cho tam giác cân có độ dài hai cạnh là $3\text{ cm}$ và $8\text{ cm}$. Hãy giải thích vì sao cạnh đáy của tam giác cân đó bắt buộc phải bằng $3\text{ cm}$ và tính chu vi của tam giác.

**Bài 2 (2,5 điểm):**
Cho tam giác $ABC$ vuông tại $A$. Trên cạnh $AC$ lấy điểm $D$ ($D$ khác $A$ và $C$).
a) So sánh độ dài các đoạn thẳng $BA, BD, BC$.
b) Kẻ $DH \perp BC$ tại $H$. Chứng minh rằng: $DH < DC$.

**Bài 3 (2,5 điểm):**
Cho tam giác $ABC$ nhọn có hai đường trung tuyến $BD$ và $CE$ cắt nhau tại trọng tâm $G$.
a) Biết $BD = 12\text{ cm}$, tính độ dài đoạn thẳng $BG$ và $GD$.
b) Gọi $M$ là trung điểm của $BC$. Chứng minh rằng ba điểm $A, G, M$ thẳng hàng và $AG = 2 GM$.

**Bài 4 (2,5 điểm — Vận dụng cao):**
a) Cho tam giác $ABC$ có đường trung trực của cạnh $AB$ và đường trung trực của cạnh $AC$ cắt nhau tại điểm $O$. Chứng minh rằng điểm $O$ nằm trên đường trung trực của cạnh $BC$.
b) Ba ngôi trường mầm non $A, B, C$ nằm ở ba vị trí không thẳng hàng trên một địa bàn huyện. Phòng Giáo dục muốn xây dựng một sân chơi trung tâm $P$ sao cho tổng khoảng cách từ sân chơi đến ba ngôi trường là ngắn nhất. Hãy nêu cơ sở toán học để xác định vị trí của điểm $P$.

---

### 3. Hướng dẫn chấm & Barem điểm chi tiết

| Bài | Ý | Nội dung giải chi tiết | Điểm |
| :---: | :---: | :--- | :---: |
| **Bài 1** *(2,5 đ)* | **a** | $\widehat{C} = 180^\circ - (80^\circ + 45^\circ) = 55^\circ$. <br> So sánh góc: $\widehat{B} = 45^\circ < \widehat{C} = 55^\circ < \widehat{A} = 80^\circ$. <br> Thứ tự cạnh tăng dần: $AC < AB < BC$. | 0,5 đ <br> 0,5 đ <br> 0,5 đ |
| | **b** | Nếu cạnh bên bằng $3\text{ cm}$ thì hai cạnh bên là $3\text{ cm}, 3\text{ cm}$. <br> Khi đó tổng hai cạnh: $3 + 3 = 6 < 8$ (vi phạm bất đẳng thức tam giác). <br> Do đó hai cạnh bên phải bằng $8\text{ cm}$, cạnh đáy là $3\text{ cm}$. <br> Chu vi tam giác: $C = 8 + 8 + 3 = 19\text{ cm}$. | 0,5 đ <br> 0,5 đ |
| **Bài 2** *(2,5 đ)* | **a** | Xét đường thẳng $AC$ và điểm $B$ nằm ngoài $AC$: <br> - $BA \perp AC$ nên $BA$ là đoạn vuông góc $\implies BA < BD$. <br> - Xét $\triangle BDC$: góc $\widehat{BDC}$ là góc ngoài tại $D$ của $\triangle ABD$ vuông tại $A$ nên $\widehat{BDC} > 90^\circ$ (góc tù). <br> Trong tam giác tù $BDC$, cạnh huyền $BC$ đối diện góc tù là cạnh lớn nhất $\implies BD < BC$. <br> Chuỗi kết luận: $BA < BD < BC$. | 0,5 đ <br> 0,5 đ <br> 0,5 đ |
| | **b** | Trong tam giác vuông $DHC$ vuông tại $H$: <br> Đoạn $DH$ là cạnh góc vuông, đoạn $DC$ là cạnh huyền. <br> Cạnh huyền luôn lớn hơn cạnh góc vuông $\implies DH < DC$. | 1,0 đ |
| **Bài 3** *(2,5 đ)* | **a** | $G$ là trọng tâm của $\triangle ABC$ nên: <br> $BG = \frac{2}{3} BD = \frac{2}{3} \cdot 12 = 8\text{ cm}$. <br> $GD = BD - BG = 12 - 8 = 4\text{ cm}$ (hoặc $GD = \frac{1}{3} BD = 4\text{ cm}$). | 0,5 đ <br> 0,5 đ |
| | **b** | Theo định lý về sự đồng quy của ba đường trung tuyến: đường trung tuyến thứ ba xuất phát từ đỉnh $A$ đi qua trung điểm $M$ của $BC$ bắt buộc phải đi qua trọng tâm $G$. <br> Do đó ba điểm $A, G, M$ thẳng hàng. <br> Theo tính chất trọng tâm: $AG = \frac{2}{3} AM$ và $GM = \frac{1}{3} AM \implies AG = 2 GM$. | 1,0 đ <br> 0,5 đ |
| **Bài 4** *(2,5 đ)* | **a** | Vì $O$ thuộc trung trực của $AB \implies OA = OB$. <br> Vì $O$ thuộc trung trực của $AC \implies OA = OC$. <br> Suy ra $OB = OC$. <br> Theo định lý đảo tính chất đường trung trực: Điểm cách đều hai đầu mút $B$ và $C$ thì nằm trên đường trung trực của $BC$. <br> Vậy $O$ nằm trên đường trung trực của cạnh $BC$. | 0,25 đ <br> 0,25 đ <br> 0,25 đ <br> 0,25 đ |
| | **b** | Đặt bài toán tìm điểm $P$ sao cho tổng khoảng cách $PA + PB + PC$ nhỏ nhất. <br> - Nếu tam giác $ABC$ có một góc $\ge 120^\circ$ (ví dụ $\widehat{A} \ge 120^\circ$), điểm tối ưu $P$ chính là đỉnh $A$. <br> - Nếu cả ba góc đều $< 120^\circ$, điểm $P$ chính là **Điểm Fermat - Torricelli**, tại đó các góc nhìn ba cạnh đều bằng $120^\circ$: $\widehat{APB} = \widehat{BPC} = \widehat{CPA} = 120^\circ$. | 0,75 đ <br> 0,75 đ |
