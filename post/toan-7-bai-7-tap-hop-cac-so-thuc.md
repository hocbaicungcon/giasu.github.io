---
title: 'Bài 7: Tập hợp các số thực - Trục số, Giá trị tuyệt đối, Làm tròn số và 5 Chuyên đề Nâng cao'
description: 'Toàn bộ lý thuyết Toán 7 Bài 7 Tập hợp các số thực: định nghĩa số thực R, trục số thực, so sánh số thực, số đối, giá trị tuyệt đối, quy tắc làm tròn theo độ chính xác d, 5 chuyên đề Olympic bất đẳng thức trị tuyệt đối và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Số thực
  - Tập hợp R
  - Trục số thực
  - Giá trị tuyệt đối
  - Làm tròn số
  - Độ chính xác
  - Kết nối tri thức
grade: 7
---

# Bài 7. Tập hợp các số thực

Trải qua hàng nghìn năm phát triển của nền văn minh nhân loại, bức tranh về các con số đã từng bước được mở rộng:
- Bắt đầu từ nhu cầu đếm đồ vật, con người sáng tạo ra **Tập hợp số tự nhiên** $\mathbb{N} = \{0; 1; 2; 3; \dots\}$.
- Để ghi nhận nợ nần, nhiệt độ âm hay độ sâu dưới mực nước biển, ta mở rộng sang **Tập hợp số nguyên** $\mathbb{Z} = \{\dots; -2; -1; 0; 1; 2; \dots\}$.
- Để đo lường các phần chia lẻ của một đơn vị, ta có **Tập hợp số hữu tỉ** $\mathbb{Q} = \left\{\left. \frac{a}{b} \;\right|\; a, b \in \mathbb{Z}, b \ne 0\right\}$, tương ứng với các số thập phân hữu hạn và số thập phân vô hạn tuần hoàn.
- Và ở bài học trước, khi đo độ dài đường chéo hình vuông hay chu vi hình tròn, chúng ta đã bắt gặp **Số vô tỉ** $\mathbb{I}$ — những số thập phân vô hạn không tuần hoàn.

Hôm nay, hai đại gia đình **Số hữu tỉ** $\mathbb{Q}$ và **Số vô tỉ** $\mathbb{I}$ sẽ chính thức hợp nhất để tạo thành một vương quốc số hoàn chỉnh nhất của chương trình THCS: **TẬP HỢP CÁC SỐ THỰC $\mathbb{R}$**.

Cùng với số thực, trục số hình học sẽ được "lấp đầy" hoàn toàn không còn một khe hở nào, mở ra những công cụ tính toán mạnh mẽ: **Giá trị tuyệt đối**, **Quy tắc làm tròn số** theo độ chính xác và những bất đẳng thức cực trị tuyệt đẹp!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 7: TẬP HỢP CÁC SỐ THỰC $\mathbb{R}$</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm & Quan hệ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Số thực = Số hữu tỉ + Số vô tỉ.<br>• Ký hiệu: $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$.<br>• Chuỗi quan hệ tập con cốt lõi:<br>&nbsp;&nbsp;$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.<br>• $\mathbb{I} \subset \mathbb{R}$ và $\mathbb{Q} \cap \mathbb{I} = \varnothing$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Trục số thực & Thứ tự</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mỗi số thực biểu diễn bởi 1 điểm duy nhất trên trục số.<br>• Trục số được lấp đầy kín khít.<br>• Nếu $x < y$: điểm $x$ nằm bên trái điểm $y$.<br>• So sánh số thực bằng cách đưa về cùng dạng thập phân.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Giá trị tuyệt đối $|x|$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là khoảng cách từ điểm $x$ đến gốc $0$.<br>• Luôn có $|x| \geqslant 0$ với mọi $x \in \mathbb{R}$.<br>• $|x| = x$ nếu $x \geqslant 0$; $|x| = -x$ nếu $x < 0$.<br>• Hai số đối nhau có giá trị tuyệt đối bằng nhau: $|-x| = |x|$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Làm tròn & Độ chính xác $d$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quy tắc làm tròn chuẩn theo chữ số đầu tiên bỏ đi.<br>• Làm tròn với độ chính xác $d$:<br>&nbsp;&nbsp;$d = 0{,}005 \to$ hàng phần trăm.<br>&nbsp;&nbsp;$d = 0{,}0005 \to$ hàng phần nghìn.<br>&nbsp;&nbsp;$d = 50 \to$ hàng trăm; $d = 500 \to$ hàng nghìn.</p>
    </div>
  </div>
</div>

---

## Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy khởi động cùng $5$ bài toán nền tảng để củng cố hệ thống kiến thức trước khi bước vào tập hợp số thực:

### Câu hỏi khởi động

1. **Điền ký hiệu thích hợp ($\in$ hoặc $\notin$) vào các ô trống:**
   - a) $-8 \dots \mathbb{Z}$
   - b) $\frac{5}{7} \dots \mathbb{Z}$
   - c) $-\frac{12}{4} \dots \mathbb{Q}$
   - d) $\sqrt{25} \dots \mathbb{N}$
   - e) $\sqrt{3} \dots \mathbb{Q}$

2. **Trong các số sau, số nào là số hữu tỉ, số nào là số vô tỉ?**
   $$-\dfrac{3}{8};\quad \sqrt{81};\quad \sqrt{10};\quad 0{,}(36);\quad 1{,}41421356\dots;\quad -2{,}75.$$

3. **Nêu số đối của mỗi số thực sau:**
   $$\dfrac{4}{9};\quad -3{,}6;\quad \sqrt{7};\quad -\sqrt{11};\quad 0.$$

4. **So sánh hai số trong mỗi trường hợp sau:**
   - a) $-0{,}75$ và $-\frac{4}{5}$
   - b) $2{,}345$ và $2{,}34(5)$
   - c) $\sqrt{15}$ và $4$

5. **Tính:**
   $$|-6|;\quad |3{,}2|;\quad |0|;\quad \left|-\dfrac{7}{12}\right|;\quad |-\sqrt{5}|.$$

---

### Lời giải chi tiết phần khởi động

1. **Điền ký hiệu:**
   - a) $-8 \in \mathbb{Z}$ (vì $-8$ là số nguyên âm).
   - b) $\frac{5}{7} \notin \mathbb{Z}$ (vì $5$ không chia hết cho $7$).
   - c) $-\frac{12}{4} = -3 = -\frac{3}{1} \in \mathbb{Q}$.
   - d) $\sqrt{25} = 5 \in \mathbb{N}$.
   - e) $\sqrt{3} \notin \mathbb{Q}$ (vì $3$ không phải số chính phương, $\sqrt{3}$ là số vô tỉ).

2. **Phân loại số:**
   - Các số hữu tỉ: $-\frac{3}{8}$ (phân số); $\sqrt{81} = 9$ (số nguyên); $0{,}(36) = \frac{36}{99} = \frac{4}{11}$ (vô hạn tuần hoàn); $-2{,}75$ (thập phân hữu hạn).
   - Các số vô tỉ: $\sqrt{10}$ (căn bậc hai của số không chính phương); $1{,}41421356\dots$ (thập phân vô hạn không tuần hoàn).

3. **Số đối:**
   - Số đối của $\frac{4}{9}$ là $-\frac{4}{9}.$
   - Số đối của $-3{,}6$ là $3{,}6.$
   - Số đối của $\sqrt{7}$ là $-\sqrt{7}.$
   - Số đối của $-\sqrt{11}$ là $\sqrt{11}.$
   - Số đối của $0$ là chính nó ($0$).

4. **So sánh:**
   - a) Đổi $-\frac{4}{5} = -0{,}8$. Vì $-0{,}75 > -0{,}8$ nên $-0{,}75 > -\frac{4}{5}.$
   - b) Ta có $2{,}34(5) = 2{,}34555\dots$ Vì $2{,}3450 < 2{,}3455\dots$ nên $2{,}345 < 2{,}34(5).$
   - c) $4 = \sqrt{16}$. Vì $15 < 16$ nên $\sqrt{15} < \sqrt{16} = 4.$

5. **Giá trị tuyệt đối:**
   - $|-6| = 6.$
   - $|3{,}2| = 3{,}2.$
   - $|0| = 0.$
   - $\left|-\frac{7}{12}\right| = \frac{7}{12}.$
   - $|-\sqrt{5}| = \sqrt{5}.$

---

## 1. Lý thuyết trọng tâm

### 1.1. Khái niệm Tập hợp số thực $\mathbb{R}$

> [!IMPORTANT]
> **Định nghĩa:**
> - **Số hữu tỉ** và **số vô tỉ** được gọi chung là **số thực**.
> - Tập hợp tất cả các số thực được ký hiệu là $\mathbb{R}$ (viết tắt từ tiếng Anh *Real numbers*).
> - Tập hợp số vô tỉ ký hiệu là $\mathbb{I}$. Ta có:
>   $$\mathbb{R} = \mathbb{Q} \cup \mathbb{I} \quad \text{và} \quad \mathbb{Q} \cap \mathbb{I} = \varnothing.$$

**Mối quan hệ bao hàm giữa các tập hợp số đã học:**
- Mỗi số tự nhiên đều là một số nguyên: $\mathbb{N} \subset \mathbb{Z}.$
- Mỗi số nguyên đều là một số hữu tỉ: $\mathbb{Z} \subset \mathbb{Q}.$
- Mỗi số hữu tỉ đều là một số thực: $\mathbb{Q} \subset \mathbb{R}.$
- Mỗi số vô tỉ đều là một số thực: $\mathbb{I} \subset \mathbb{R}.$

Do đó ta có chuỗi quan hệ tập con kinh điển:
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}.$$

*Sơ đồ Ven biểu diễn mối quan hệ giữa các tập hợp số:*

<div style="text-align: center; margin: 20px 0;">
  <div style="display: inline-block; background: #e0f2fe; border: 2px solid #0284c7; border-radius: 16px; padding: 18px 24px; text-align: left; max-width: 560px;">
    <strong style="color: #0369a1; font-size: 1.1em;">TẬP HỢP SỐ THỰC $\mathbb{R}$</strong>
    <div style="display: flex; gap: 16px; margin-top: 12px; flex-wrap: wrap;">
      <div style="flex: 2; background: #ffffff; border: 1.5px solid #3b82f6; border-radius: 12px; padding: 12px;">
        <strong style="color: #1d4ed8;">Tập hợp số hữu tỉ $\mathbb{Q}$</strong>
        <div style="background: #f1f5f9; border: 1px dashed #64748b; border-radius: 8px; padding: 8px; margin-top: 8px;">
          <strong style="color: #334155;">Tập hợp số nguyên $\mathbb{Z}$</strong>
          <div style="background: #fef08a; border: 1px solid #ca8a04; border-radius: 6px; padding: 6px; margin-top: 6px;">
            <strong style="color: #854d0e;">Tập hợp số tự nhiên $\mathbb{N}$</strong>: $0, 1, 2, 3, \dots$
          </div>
          <span style="font-size: 0.85em; color: #475569;">Số nguyên âm: $-1, -2, -3, \dots$</span>
        </div>
        <span style="font-size: 0.85em; color: #1e40af;">Phân số, số thập phân hữu hạn & vô hạn tuần hoàn</span>
      </div>
      <div style="flex: 1.2; background: #fef2f2; border: 1.5px solid #ef4444; border-radius: 12px; padding: 12px;">
        <strong style="color: #b91c1c;">Tập hợp số vô tỉ $\mathbb{I}$</strong>
        <p style="margin: 8px 0 0 0; font-size: 0.85em; color: #7f1d1d; line-height: 1.4;">
          Thập phân vô hạn không tuần hoàn:<br>
          $\sqrt{2}, \sqrt{3}, \sqrt{5}, \pi, 0{,}1010010001\dots$
        </p>
      </div>
    </div>
  </div>
</div>

---

### 1.2. Trục số thực và So sánh hai số thực

#### a) Trục số thực
- Trước đây, khi chỉ có các số hữu tỉ, trục số vẫn còn vô số "lỗ hổng" li ti (chính là vị trí của các số vô tỉ như $\sqrt{2}, \sqrt{3}, \pi, \dots$).
- Khi bổ sung toàn bộ các số vô tỉ, **mỗi số thực được biểu diễn bởi một điểm duy nhất trên trục số**, và ngược lại, **mỗi điểm trên trục số biểu diễn đúng một số thực**.
- Vì vậy, trục số được gọi là **trục số thực** và nó hoàn toàn liên tục, không còn một kẽ hở nào.

#### b) So sánh hai số thực
Với hai số thực $x$ và $y$ bất kỳ, luôn xảy ra một và chỉ một trong ba trường hợp:
$$x = y \quad \text{hoặc} \quad x < y \quad \text{hoặc} \quad x > y.$$
- Trên trục số thực nằm ngang: nếu $x < y$ thì điểm $x$ nằm **bên trái** điểm $y$.
- Tính chất bắc cầu: Nếu $x < y$ và $y < z$ thì $x < z.$
- Phương pháp so sánh:
  - Nếu hai số cùng dấu dương: so sánh dạng số thập phân từ hàng cao xuống hàng thấp.
  - Nếu hai số cùng dấu âm: số nào có giá trị tuyệt đối lớn hơn thì số đó nhỏ hơn:
    $$a < b \iff -a > -b.$$
  - Nếu số chứa căn bậc hai: dùng tính chất $0 \leqslant a < b \iff \sqrt{a} < \sqrt{b}$.

---

### 1.3. Giá trị tuyệt đối của một số thực

> [!IMPORTANT]
> **Định nghĩa hình học & đại số:**
> - **Hình học:** Giá trị tuyệt đối của số thực $x$, ký hiệu là $|x|$, là **khoảng cách** từ điểm $x$ đến điểm gốc $0$ trên trục số thực.
> - **Đại số:**
>   $$|x| = \begin{cases} x & \text{khi } x \geqslant 0 \\ -x & \text{khi } x < 0 \end{cases}$$

**Các tính chất nền tảng:**
1. Giá trị tuyệt đối của mọi số thực luôn không âm:
   $$|x| \geqslant 0 \quad \text{với mọi } x \in \mathbb{R}.$$
   Dấu đẳng thức xảy ra khi và chỉ khi $x = 0$.
2. Hai số đối nhau có cùng giá trị tuyệt đối:
   $$|-x| = |x|.$$
3. Giá trị tuyệt đối của một số luôn không nhỏ hơn chính nó:
   $$|x| \geqslant x \quad \text{và} \quad |x| \geqslant -x.$$
4. Phương trình chứa dấu giá trị tuyệt đối cơ bản:
   - Nếu $k < 0$: Phương trình $|x| = k$ **vô nghiệm**.
   - Nếu $k = 0$: $|x| = 0 \iff x = 0.$
   - Nếu $k > 0$: $|x| = k \iff x = k$ hoặc $x = -k.$

---

### 1.4. Quy tắc làm tròn số và Độ chính xác $d$

#### a) Quy tắc làm tròn số
Để làm tròn một số thập phân đến một hàng nào đó (gọi là hàng làm tròn):
1. **Xét chữ số ngay sau hàng làm tròn (chữ số đầu tiên bị bỏ đi):**
   - Nếu chữ số đó **nhỏ hơn $5$** ($0, 1, 2, 3, 4$): ta **giữ nguyên** chữ số hàng làm tròn.
   - Nếu chữ số đó **lớn hơn hoặc bằng $5$** ($5, 6, 7, 8, 9$): ta **cộng thêm $1$** vào chữ số hàng làm tròn.
2. **Đối với các chữ số sau hàng làm tròn:**
   - Ở phần thập phân: bỏ hẳn đi.
   - Ở phần nguyên: thay thế bằng các chữ số $0$.

#### b) Làm tròn số với độ chính xác $d$ cho trước
Khi đề bài yêu cầu làm tròn số với độ chính xác $d$, ta xác định hàng làm tròn theo quy tắc sau:
> [!TIP]
> **Quy tắc xác định hàng làm tròn từ độ chính xác $d$:**
> Hàng làm tròn là hàng có giá trị gấp $10$ lần hàng của độ chính xác $d$ (tức là hàng đứng liền kề trước chữ số khác $0$ đầu tiên của $d$):
> - Độ chính xác $d = 0{,}5 \implies$ Làm tròn đến **hàng đơn vị**.
> - Độ chính xác $d = 0{,}05 \implies$ Làm tròn đến **hàng phần mười** (chữ số thập phân thứ nhất).
> - Độ chính xác $d = 0{,}005 \implies$ Làm tròn đến **hàng phần trăm** (chữ số thập phân thứ hai).
> - Độ chính xác $d = 0{,}0005 \implies$ Làm tròn đến **hàng phần nghìn** (chữ số thập phân thứ ba).
> - Độ chính xác $d = 50 \implies$ Làm tròn đến **hàng trăm**.
> - Độ chính xác $d = 500 \implies$ Làm tròn đến **hàng nghìn**.

*Ví dụ:* Làm tròn số $x = 3{,}141592$:
- Với độ chính xác $d = 0{,}005$: Làm tròn đến hàng phần trăm $\implies x \approx 3{,}14$ (vì chữ số sau hàng phần trăm là $1 < 5$).
- Với độ chính xác $d = 0{,}0005$: Làm tròn đến hàng phần nghìn $\implies x \approx 3{,}142$ (vì chữ số sau hàng phần nghìn là $5 \geqslant 5$).

---

## 2. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Sử dụng các ký hiệu $\in, \notin, \subset$ giữa các tập hợp số

**Phương pháp giải:**
- Dùng ký hiệu $\in$ (thuộc) hoặc $\notin$ (không thuộc) khi phần tử đứng trước là **một số cụ thể**.
- Dùng ký hiệu $\subset$ (tập con) khi đứng trước và sau đều là **tập hợp**.
- Ghi nhớ mối quan hệ: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$ và $\mathbb{I} \subset \mathbb{R}$.

---

#### Ví dụ 1
Điền ký hiệu thích hợp ($\in, \notin, \subset$) vào chỗ trống:
- a) $-7 \dots \mathbb{Q}$
- b) $\sqrt{11} \dots \mathbb{I}$
- c) $\sqrt{11} \dots \mathbb{R}$
- d) $\mathbb{Z} \dots \mathbb{R}$
- e) $0{,}(45) \dots \mathbb{I}$
- f) $\pi \dots \mathbb{R}$
- g) $\mathbb{Q} \dots \mathbb{R}$
- h) $\sqrt{4} \dots \mathbb{N}$

**Lời giải chi tiết:**
- a) $-7 = -\frac{7}{1} \in \mathbb{Q}.$
- b) Vì $11$ không chính phương nên $\sqrt{11} \in \mathbb{I}.$
- c) Mọi số vô tỉ đều là số thực nên $\sqrt{11} \in \mathbb{R}.$
- d) Mọi số nguyên đều là số thực nên $\mathbb{Z} \subset \mathbb{R}.$
- e) $0{,}(45)$ là số thập phân vô hạn tuần hoàn nên là số hữu tỉ, do đó $0{,}(45) \notin \mathbb{I}.$
- f) $\pi$ là số vô tỉ nên $\pi \in \mathbb{R}.$
- g) Mọi số hữu tỉ đều là số thực nên $\mathbb{Q} \subset \mathbb{R}.$
- h) $\sqrt{4} = 2 \in \mathbb{N}.$

---

### Dạng 2: So sánh các số thực

**Phương pháp giải:**
1. Đưa các số về cùng biểu diễn thập phân (viết bung chu kỳ của số thập phân tuần hoàn, tính xấp xỉ căn bậc hai).
2. So sánh từng hàng số từ trái sang phải.
3. Đối với số chứa căn, có thể bình phương hai vế (với các số dương) hoặc kẹp giữa hai số chính phương.

---

#### Ví dụ 2
So sánh các cặp số thực sau:
- a) $4{,}182$ và $4{,}1(82)$
- b) $-3{,}245$ và $-3{,}2(4)$
- c) $\sqrt{29}$ và $5{,}4$
- d) $3\sqrt{7}$ và $8$

**Lời giải chi tiết:**
- a) Viết bung chu kỳ:
  $4{,}1(82) = 4{,}18282\dots$
  So sánh $4{,}1820$ và $4{,}1828\dots$: Chữ số ở hàng phần chục nghìn có $0 < 8$.
  Do đó: $4{,}182 < 4{,}1(82).$

- b) Ta có $-3{,}2(4) = -3{,}2444\dots$
  Xét giá trị tuyệt đối: $|-3{,}245| = 3{,}2450$; $|-3{,}2(4)| = 3{,}2444\dots$
  Vì $3{,}2450 > 3{,}2444\dots$ nên $-3{,}245 < -3{,}2(4).$

- c) Tính bình phương:
  $(\sqrt{29})^2 = 29.$
  $(5{,}4)^2 = 29{,}16.$
  Vì $29 < 29{,}16$ nên $\sqrt{29} < 5{,}4.$

- d) Đưa thừa số vào căn:
  $3\sqrt{7} = \sqrt{3^2 \cdot 7} = \sqrt{9 \cdot 7} = \sqrt{63}.$
  $8 = \sqrt{8^2} = \sqrt{64}.$
  Vì $63 < 64$ nên $\sqrt{63} < \sqrt{64}$, hay $3\sqrt{7} < 8.$

---

### Dạng 3: Tính giá trị tuyệt đối và tìm $x$ chứa dấu giá trị tuyệt đối

**Phương pháp giải:**
- Tính giá trị: $|x| = x$ nếu $x \geqslant 0$; $|x| = -x$ nếu $x < 0$.
- Giải phương trình $|A(x)| = k$:
  - Nếu $k < 0$: Kết luận phương trình vô nghiệm.
  - Nếu $k = 0$: $A(x) = 0$.
  - Nếu $k > 0$: Chia thành hai trường hợp: $A(x) = k$ hoặc $A(x) = -k$.

---

#### Ví dụ 3
Tìm số thực $x$, biết:
- a) $|x| = 3{,}75$
- b) $|x| = -\sqrt{2}$
- c) $|2x - 1| = 5$
- d) $\left|x + \frac{3}{4}\right| - \frac{1}{2} = \frac{5}{4}$
- e) $3|x - 2| + 4 = 19$

**Lời giải chi tiết:**
- a) Vì $3{,}75 > 0$ nên $|x| = 3{,}75 \iff x = 3{,}75$ hoặc $x = -3{,}75.$
  Vậy $x \in \{3{,}75; -3{,}75\}.$

- b) Vì $-\sqrt{2} < 0$ mà $|x| \geqslant 0$ với mọi $x \in \mathbb{R}$, nên không có giá trị nào của $x$ thỏa mãn.
  Vậy phương trình vô nghiệm.

- c) $|2x - 1| = 5 \iff 2x - 1 = 5$ hoặc $2x - 1 = -5.$
  - TH1: $2x - 1 = 5 \implies 2x = 6 \implies x = 3.$
  - TH2: $2x - 1 = -5 \implies 2x = -4 \implies x = -2.$
  Vậy $x \in \{3; -2\}.$

- d) Chuyển vế:
  $$\left|x + \dfrac{3}{4}\right| = \dfrac{5}{4} + \dfrac{1}{2} = \dfrac{5}{4} + \dfrac{2}{4} = \dfrac{7}{4}.$$
  - TH1: $x + \frac{3}{4} = \frac{7}{4} \implies x = \frac{7}{4} - \frac{3}{4} = \frac{4}{4} = 1.$
  - TH2: $x + \frac{3}{4} = -\frac{7}{4} \implies x = -\frac{7}{4} - \frac{3}{4} = -\frac{10}{4} = -\frac{5}{2}.$
  Vậy $x \in \left\{1; -\frac{5}{2}\right\}.$

- e) Ta có:
  $$3|x - 2| = 19 - 4 = 15 \implies |x - 2| = 15 : 3 = 5.$$
  - TH1: $x - 2 = 5 \implies x = 7.$
  - TH2: $x - 2 = -5 \implies x = -3.$
  Vậy $x \in \{7; -3\}.$

---

### Dạng 4: Làm tròn số và ước lượng kết quả phép tính

**Phương pháp giải:**
1. Xác định đúng hàng làm tròn (hoặc quy đổi từ độ chính xác $d$).
2. Xét chữ số ngay sau hàng làm tròn và áp dụng quy tắc làm tròn.
3. Trong bài toán ước lượng: làm tròn các thừa số trước rồi mới nhân/chia/cộng/trừ để tính nhẩm nhanh.

---

#### Ví dụ 4
a) Làm tròn số $A = 78\,492$ đến hàng trăm và hàng nghìn.
b) Làm tròn số $B = 4{,}72851$ đến chữ số thập phân thứ ba và với độ chính xác $d = 0{,}005$.
c) Ước lượng kết quả phép tính sau bằng cách làm tròn mỗi số đến hàng đơn vị:
$$M = 19{,}8 \cdot 4{,}15 - 5{,}82 \cdot 3{,}04.$$

**Lời giải chi tiết:**
a) Với số $A = 78\,492$:
- Làm tròn đến hàng trăm: Chữ số hàng trăm là $4$, chữ số ngay sau là $9 \geqslant 5$. Cộng thêm $1$ vào chữ số hàng trăm:
  $$78\,492 \approx 78\,500.$$
- Làm tròn đến hàng nghìn: Chữ số hàng nghìn là $8$, chữ số ngay sau là $4 < 5$. Giữ nguyên chữ số hàng nghìn:
  $$78\,492 \approx 78\,000.$$

b) Với số $B = 4{,}72851$:
- Đến chữ số thập phân thứ ba (hàng phần nghìn): Chữ số hàng phần nghìn là $8$, chữ số ngay sau là $5 \geqslant 5$:
  $$B \approx 4{,}729.$$
- Với độ chính xác $d = 0{,}005$: Quy tắc yêu cầu làm tròn đến hàng phần trăm (chữ số thập phân thứ hai). Chữ số hàng phần trăm là $2$, chữ số ngay sau là $8 \geqslant 5$:
  $$B \approx 4{,}73.$$

c) Làm tròn mỗi số đến hàng đơn vị:
- $19{,}8 \approx 20$
- $4{,}15 \approx 4$
- $5{,}82 \approx 6$
- $3{,}04 \approx 3$

Khi đó giá trị ước lượng của $M$ là:
$$M \approx 20 \cdot 4 - 6 \cdot 3 = 80 - 18 = 62.$$
*(Kiểm tra tính chính xác bằng máy tính: $19{,}8 \cdot 4{,}15 - 5{,}82 \cdot 3{,}04 = 82{,}17 - 17{,}6928 = 64{,}4772 \approx 64$, ước lượng $62$ rất sát và hợp lý).*

---

### Dạng 5: Bài toán thực tế về số thực và làm tròn số

**Phương pháp giải:**
Phân tích bối cảnh bài toán, lập công thức liên hệ, tính toán và làm tròn kết quả theo đúng đơn vị yêu cầu.

---

#### Ví dụ 5
Một căn phòng hình chữ nhật có chiều dài đo được là $6{,}45\text{ m}$ và chiều rộng đo được là $4{,}2\text{ m}$.
a) Tính chu vi và diện tích căn phòng (làm tròn kết quả đến hàng phần mười).
b) Người ta lát sàn căn phòng bằng loại gạch hình vuông có cạnh $40\text{ cm}$. Hỏi cần ít nhất bao nhiêu viên gạch để lát kín căn phòng, biết diện tích mạch vữa không đáng kể và hao hụt thi công là $5\%$?

**Lời giải chi tiết:**
a) Chu vi căn phòng là:
$$P = (6{,}45 + 4{,}2) \cdot 2 = 10{,}65 \cdot 2 = 21{,}3\text{ m}.$$
Diện tích căn phòng là:
$$S = 6{,}45 \cdot 4{,}2 = 27{,}09\text{ m}^2.$$
Làm tròn đến hàng phần mười (chữ số ngay sau là $9 \geqslant 5$):
$$S \approx 27{,}1\text{ m}^2.$$

b) Đổi cạnh gạch $40\text{ cm} = 0{,}4\text{ m}$.
Diện tích một viên gạch lát sàn:
$$S_{\text{gạch}} = 0{,}4 \cdot 0{,}4 = 0{,}16\text{ m}^2.$$
Số viên gạch cần theo lý thuyết:
$$N_0 = \dfrac{27{,}09}{0{,}16} = 169{,}3125\text{ viên}.$$
Do hao hụt thi công $5\%$, số viên gạch thực tế cần mua là:
$$N = N_0 \cdot 105\% = 169{,}3125 \cdot 1{,}05 = 177{,}778\dots\text{ viên}.$$
Vì số viên gạch phải là số nguyên và không thể thiếu gạch để hoàn thiện sàn, ta làm tròn lên:
Cần mua ít nhất **$178$ viên gạch**.

---

## 3. 5 Chuyên đề Olympic & Học sinh giỏi Toán 7 Nâng cao

---

### Chuyên đề 1: Bất đẳng thức giá trị tuyệt đối $|a + b| \leqslant |a| + |b|$ và Cực trị

> [!IMPORTANT]
> **Bất đẳng thức tam giác cho giá trị tuyệt đối:**
> Với mọi số thực $a, b \in \mathbb{R}$, ta luôn có:
> $$|a + b| \leqslant |a| + |b|$$
> Dấu đẳng thức "$=$" xảy ra khi và chỉ khi $a$ và $b$ cùng dấu (tức $a \cdot b \geqslant 0$).
> 
> Hệ quả quan trọng:
> $$|a - b| \leqslant |a| + |b|$$
> $$|a| - |b| \leqslant |a - b| \leqslant |a| + |b|$$
> Và đẳng thức triệt tiêu biến số: $|x - a| + |b - x| \geqslant |(x - a) + (b - x)| = |b - a|.$

#### Bài toán 1.1
Tìm giá trị nhỏ nhất của biểu thức:
$$A = |x - 3| + |x - 8|.$$

**Lời giải chi tiết:**
Áp dụng tính chất $|x - 8| = |8 - x|$, ta viết lại biểu thức $A$:
$$A = |x - 3| + |8 - x|.$$
Áp dụng bất đẳng thức $|a| + |b| \geqslant |a + b|$:
$$A = |x - 3| + |8 - x| \geqslant |(x - 3) + (8 - x)| = |5| = 5.$$
Dấu "$=$" xảy ra khi:
$$(x - 3)(8 - x) \geqslant 0 \iff (x - 3)(x - 8) \leqslant 0 \iff 3 \leqslant x \leqslant 8.$$
Vậy giá trị nhỏ nhất của $A$ là $5$, đạt được với mọi số thực $x$ thỏa mãn $3 \leqslant x \leqslant 8.$

#### Bài toán 1.2
Tìm giá trị nhỏ nhất của biểu thức chứa ba dấu giá trị tuyệt đối:
$$B = |x - 2| + |x - 5| + |x - 9|.$$

**Lời giải chi tiết:**
Ta nhóm số hạng đầu và số hạng cuối để triệt tiêu biến $x$:
$$B = (|x - 2| + |9 - x|) + |x - 5|.$$
Áp dụng bất đẳng thức $|a| + |b| \geqslant |a + b|$ cho nhóm thứ nhất:
$$|x - 2| + |9 - x| \geqslant |x - 2 + 9 - x| = 7.$$
Dấu "$=$" xảy ra khi $2 \leqslant x \leqslant 9$.
Đối với số hạng còn lại: $|x - 5| \geqslant 0$. Dấu "$=$" xảy ra khi $x = 5$.
Vì $x = 5$ thỏa mãn khoảng $2 \leqslant 5 \leqslant 9$, nên cả hai dấu đẳng thức có thể đồng thời xảy ra tại $x = 5$!
Khi đó:
$$B \geqslant 7 + 0 = 7.$$
Vậy giá trị nhỏ nhất của $B$ là $7$, đạt được khi $x = 5.$

---

### Chuyên đề 2: Phương trình chứa nhiều dấu giá trị tuyệt đối nâng cao

> [!TIP]
> **Phương pháp chia khoảng (xét dấu) trên trục số:**
> Khi phương trình chứa các biểu thức $|x - a|, |x - b|, \dots$, ta tìm nghiệm của các biểu thức trong căn rồi chia trục số thành các khoảng không giao nhau. Trên mỗi khoảng, dấu của các biểu thức hoàn toàn xác định, giúp ta phá bỏ dấu giá trị tuyệt đối dễ dàng.

#### Bài toán 2.1
Giải phương trình:
$$|x - 1| + |x + 3| = 6.$$

**Lời giải chi tiết:**
Nghiệm của các nhị thức trong dấu giá trị tuyệt đối là $x = 1$ và $x = -3$.
Hai điểm này chia trục số thành $3$ khoảng:

- **Khoảng 1:** $x < -3$
  Khi đó $x - 1 < 0$ và $x + 3 < 0$, phương trình trở thành:
  $$-(x - 1) - (x + 3) = 6 \iff -x + 1 - x - 3 = 6 \iff -2x - 2 = 6 \iff -2x = 8 \iff x = -4.$$
  Giá trị $x = -4 < -3$ (thỏa mãn điều kiện khoảng 1).

- **Khoảng 2:** $-3 \leqslant x \leqslant 1$
  Khi đó $x - 1 \leqslant 0$ và $x + 3 \geqslant 0$, phương trình trở thành:
  $$-(x - 1) + (x + 3) = 6 \iff -x + 1 + x + 3 = 6 \iff 4 = 6\text{ (vô lý)}.$$
  Do đó không có nghiệm nào trong khoảng này.

- **Khoảng 3:** $x > 1$
  Khi đó $x - 1 > 0$ và $x + 3 > 0$, phương trình trở thành:
  $$(x - 1) + (x + 3) = 6 \iff 2x + 2 = 6 \iff 2x = 4 \iff x = 2.$$
  Giá trị $x = 2 > 1$ (thỏa mãn điều kiện khoảng 3).

Kết luận: Tập nghiệm của phương trình là $S = \{-4; 2\}.$

---

### Chuyên đề 3: So sánh biểu thức số thực chứa căn thức không dùng máy tính

#### Bài toán 3.1
Không dùng máy tính cầm tay, hãy chứng minh:
$$\sqrt{17} + \sqrt{26} > 9.$$

**Lời giải chi tiết:**
Ta có:
$17 > 16 \implies \sqrt{17} > \sqrt{16} = 4.$
$26 > 25 \implies \sqrt{26} > \sqrt{25} = 5.$
Cộng vế theo vế hai bất đẳng thức cùng chiều:
$$\sqrt{17} + \sqrt{26} > 4 + 5 = 9.$$
Vậy bất đẳng thức được chứng minh xong. $\blacksquare$

#### Bài toán 3.2
So sánh hai số thực:
$$M = \sqrt{11} - \sqrt{10} \quad \text{và} \quad N = \sqrt{10} - \sqrt{9}.$$

**Lời giải chi tiết:**
Ta sẽ biến đổi hai biểu thức về dạng so sánh tích:
Ta có $N = \sqrt{10} - 3$.
Nhận xét:
$(\sqrt{11} - \sqrt{10})(\sqrt{11} + \sqrt{10}) = 11 - 10 = 1 \implies \sqrt{11} - \sqrt{10} = \frac{1}{\sqrt{11} + \sqrt{10}}.$
$(\sqrt{10} - \sqrt{9})(\sqrt{10} + \sqrt{9}) = 10 - 9 = 1 \implies \sqrt{10} - \sqrt{9} = \frac{1}{\sqrt{10} + \sqrt{9}}.$
So sánh hai mẫu số:
Vì $11 > 10 \implies \sqrt{11} > \sqrt{10}$ và $10 > 9 \implies \sqrt{10} > \sqrt{9}$,
nên:
$$\sqrt{11} + \sqrt{10} > \sqrt{10} + \sqrt{9} > 0.$$
Hai phân số có cùng tử số dương bằng $1$, phân số nào có mẫu lớn hơn thì phân số đó nhỏ hơn:
$$\dfrac{1}{\sqrt{11} + \sqrt{10}} < \dfrac{1}{\sqrt{10} + \sqrt{9}}.$$
Suy ra:
$$\sqrt{11} - \sqrt{10} < \sqrt{10} - \sqrt{9}.$$
Vậy $M < N.$ $\blacksquare$

---

### Chuyên đề 4: Sai số, Độ chính xác $d$ và Đánh giá cận trong đo lường

> [!NOTE]
> **Bản chất của độ chính xác:**
> Khi nói số gần đúng $a$ có độ chính xác $d$, nghĩa là giá trị đúng $\overline{a}$ nằm trong đoạn:
> $$a - d \leqslant \overline{a} \leqslant a + d.$$

#### Bài toán 4.1
Một nhà khoa học đo gia tốc trọng trường tại một địa điểm và ghi nhận kết quả là $g = 9{,}81\text{ m/s}^2$ với độ chính xác $d = 0{,}02\text{ m/s}^2$.
a) Giá trị thực sự của $g$ nằm trong khoảng nào?
b) Nếu dùng kết quả này để tính vận tốc $v = g \cdot t$ của một vật rơi tự do sau $t = 5\text{ s}$, hãy xác định khoảng giá trị thực của vận tốc $v$.

**Lời giải chi tiết:**
a) Theo định nghĩa về độ chính xác:
$$9{,}81 - 0{,}02 \leqslant g_{\text{thực}} \leqslant 9{,}81 + 0{,}02 \iff 9{,}79\text{ m/s}^2 \leqslant g_{\text{thực}} \leqslant 9{,}83\text{ m/s}^2.$$

b) Sau thời gian $t = 5\text{ s}$:
$$v_{\text{thực}} = g_{\text{thực}} \cdot 5.$$
Nhân $5$ vào các vế của bất đẳng thức trên:
$$9{,}79 \cdot 5 \leqslant v_{\text{thực}} \leqslant 9{,}83 \cdot 5 \iff 48{,}95\text{ m/s} \leqslant v_{\text{thực}} \leqslant 49{,}15\text{ m/s}.$$
Vậy vận tốc thực tế của vật sau $5$ giây dao động trong đoạn từ $48{,}95\text{ m/s}$ đến $49{,}15\text{ m/s}.$

---

### Chuyên đề 5: Cực trị của biểu thức phối hợp giữa Căn bậc hai và Giá trị tuyệt đối

#### Bài toán 5.1
Tìm giá trị nhỏ nhất của biểu thức:
$$P = |x - 4| + \sqrt{y - 2} + 2026.$$

**Lời giải chi tiết:**
Điều kiện xác định: $y - 2 \geqslant 0 \iff y \geqslant 2$.
Với mọi $x \in \mathbb{R}$, ta luôn có:
$$|x - 4| \geqslant 0.$$
Dấu "$=$" xảy ra khi $x - 4 = 0 \iff x = 4$.
Với mọi $y \geqslant 2$, ta luôn có:
$$\sqrt{y - 2} \geqslant 0.$$
Dấu "$=$" xảy ra khi $y - 2 = 0 \iff y = 2$.
Do đó:
$$P = |x - 4| + \sqrt{y - 2} + 2026 \geqslant 0 + 0 + 2026 = 2026.$$
Dấu đẳng thức xảy ra khi và chỉ khi:
$$\begin{cases} x = 4 \\ y = 2 \end{cases}$$
Vậy giá trị nhỏ nhất của biểu thức $P$ là $2026$, đạt được khi $(x; y) = (4; 2).$

---

## 4. Bộ Quiz Trắc nghiệm tương tác (10 câu)

```quiz
type: choice
question: 'Tập hợp các số thực được ký hiệu là gì?'
options:
  - 'A) \mathbb{Q}'
  - 'B) \mathbb{Z}'
  - 'C) \mathbb{R}'
  - 'D) \mathbb{I}'
answer: 3
explanation: 'Tập hợp các số thực ký hiệu là \mathbb{R} (Real numbers), bao gồm cả số hữu tỉ \mathbb{Q} và số vô tỉ \mathbb{I}.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG?'
options:
  - 'A) \mathbb{R} \subset \mathbb{Q}'
  - 'B) \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}'
  - 'C) \sqrt{3} \in \mathbb{Q}'
  - 'D) -5 \in \mathbb{N}'
answer: 2
explanation: 'Chuỗi quan hệ tập hợp đúng là \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}.'
```

```quiz
type: choice
question: 'Giá trị tuyệt đối của -\sqrt{7} bằng:'
options:
  - 'A) -7'
  - 'B) 7'
  - 'C) -\sqrt{7}'
  - 'D) \sqrt{7}'
answer: 4
explanation: 'Giá trị tuyệt đối là khoảng cách tới gốc 0 nên luôn không âm: |-\sqrt{7}| = \sqrt{7}.'
```

```quiz
type: choice
question: 'Tất cả các giá trị của x thỏa mãn |x| = 4{,}5 là:'
options:
  - 'A) x = 4{,}5'
  - 'B) x = -4{,}5'
  - 'C) x = 4{,}5 hoặc x = -4{,}5'
  - 'D) Không có giá trị nào'
answer: 3
explanation: 'Phương trình |x| = k với k > 0 luôn có hai nghiệm đối nhau x = \pm k. Do đó x = 4{,}5 hoặc x = -4{,}5.'
```

```quiz
type: choice
question: 'Số nào sau đây nằm giữa -\dfrac{1}{2} và 0 trên trục số?'
options:
  - 'A) -0{,}75'
  - 'B) -0{,}25'
  - 'C) 0{,}25'
  - 'D) -1'
answer: 2
explanation: 'Ta có -\dfrac{1}{2} = -0{,}5. Ta thấy -0{,}5 < -0{,}25 < 0 nên số -0{,}25 nằm giữa.'
```

```quiz
type: choice
question: 'Làm tròn số 25\,846 đến hàng trăm:'
options:
  - 'A) 25\,800'
  - 'B) 25\,900'
  - 'C) 25\,850'
  - 'D) 26\,000'
answer: 1
explanation: 'Chữ số hàng trăm là 8, chữ số ngay sau là 4 < 5 nên giữ nguyên 8 và thay hai chữ số sau bằng 0: được 25\,800.'
```

```quiz
type: choice
question: 'Làm tròn số 8{,}3746 với độ chính xác d = 0{,}005:'
options:
  - 'A) 8{,}37'
  - 'B) 8{,}38'
  - 'C) 8{,}375'
  - 'D) 8{,}4'
answer: 1
explanation: 'Độ chính xác d = 0{,}005 ứng với làm tròn đến hàng phần trăm (hai chữ số thập phân). Chữ số hàng phần trăm là 7, chữ số sau là 4 < 5 nên giữ nguyên: 8{,}37.'
```

```quiz
type: choice
question: 'So sánh 3\sqrt{2} và 4:'
options:
  - 'A) 3\sqrt{2} > 4'
  - 'B) 3\sqrt{2} < 4'
  - 'C) 3\sqrt{2} = 4'
  - 'D) Không so sánh được'
answer: 1
explanation: 'Ta có 3\sqrt{2} = \sqrt{9 \cdot 2} = \sqrt{18}. Số 4 = \sqrt{16}. Vì 18 > 16 nên 3\sqrt{2} > 4.'
```

```quiz
type: choice
question: 'Phương trình |x - 3| = -2 có bao nhiêu nghiệm?'
options:
  - 'A) 1 nghiệm'
  - 'B) 2 nghiệm'
  - 'C) Vô số nghiệm'
  - 'D) 0 nghiệm (vô nghiệm)'
answer: 4
explanation: 'Vì |A| \geqslant 0 với mọi biến, mà vế phải -2 < 0 nên phương trình vô nghiệm.'
```

```quiz
type: choice
question: 'Giá trị nhỏ nhất của biểu thức H = |x - 6| + 15 là:'
options:
  - 'A) 6'
  - 'B) 15'
  - 'C) 21'
  - 'D) 9'
answer: 2
explanation: 'Vì |x - 6| \geqslant 0 nên H \geqslant 0 + 15 = 15. Dấu bằng đạt được khi x = 6.'
```

---

## 5. Phiếu bài tập tự luyện toàn diện (10 bài tập tự luận)

### Đề bài

**Bài 1 (Quan hệ tập hợp):**
Điền ký hiệu thích hợp ($\in, \notin, \subset$) vào chỗ trống:
- a) $-\sqrt{9} \dots \mathbb{Z}$
- b) $\sqrt{5} \dots \mathbb{Q}$
- c) $\sqrt{5} \dots \mathbb{R}$
- d) $\mathbb{I} \dots \mathbb{R}$
- e) $0{,}(18) \dots \mathbb{R}$
- f) $\mathbb{Q} \cap \mathbb{I} = \dots$

**Bài 2 (So sánh các số thực):**
Sắp xếp các số thực sau theo thứ tự tăng dần (từ bé đến lớn):
$$-1{,}75;\quad \sqrt{5};\quad 0;\quad -2;\quad \dfrac{7}{3};\quad -\sqrt{3};\quad 2{,}3(4).$$

**Bài 3 (Tính giá trị tuyệt đối):**
Tính giá trị của các biểu thức sau:
- a) $A = |-4{,}8| + \left|-\frac{7}{5}\right| - |0|.$
- b) $B = \left|\sqrt{16} - 7\right| + \left|3 - \sqrt{25}\right|.$
- c) $C = |2 - \sqrt{5}| + \sqrt{5}.$

**Bài 4 (Tìm $x$ cơ bản):**
Tìm số thực $x$, biết:
- a) $|x| = \frac{5}{8}$
- b) $|x - 2{,}5| = 1{,}5$
- c) $4|2x + 3| - 7 = 13$
- d) $\left|x - \frac{1}{3}\right| + 2 = 0$

**Bài 5 (Làm tròn số):**
Cho số thực $X = 34\,827{,}5164$.
a) Làm tròn số $X$ đến hàng chục, hàng trăm, hàng nghìn.
b) Làm tròn số $X$ đến chữ số thập phân thứ nhất, thứ hai.
c) Làm tròn số $X$ với độ chính xác $d = 50$ và $d = 0{,}005$.

**Bài 6 (Ước lượng phép tính):**
Ước lượng kết quả của các phép tính sau bằng cách làm tròn mỗi số đến hàng đơn vị rồi tính:
- a) $P = 12{,}3 \cdot 5{,}8 - 4{,}1 \cdot 7{,}9.$
- b) $Q = \frac{48{,}25 + 51{,}7}{19{,}85}.$

**Bài 7 (Bài toán thực tế):**
Một thửa ruộng hình chữ nhật có kích thước đo được là chiều dài $48{,}6\text{ m}$ và chiều rộng $24{,}3\text{ m}$.
a) Tính chu vi và diện tích thửa ruộng đó (làm tròn đến hàng đơn vị).
b) Năng suất lúa thu hoạch đạt $0{,}65\text{ kg/m}^2$. Hỏi thửa ruộng thu hoạch được khoảng bao nhiêu tạ thóc? (Làm tròn đến hàng phần mười của tạ, biết $1\text{ tạ} = 100\text{ kg}$).

**Bài 8 (Tìm $x$ nâng cao):**
Tìm các số thực $x$ thỏa mãn:
$|3x - 1| = |x + 5|.$

**Bài 9 (Bất đẳng thức & Cực trị):**
Tìm giá trị nhỏ nhất của biểu thức:
$$M = |x - 1| + |x - 7| + 2026.$$

**Bài 10 (Toán chứng minh):**
Cho $a$ và $b$ là hai số thực tùy ý. Chứng minh rằng:
$$|a| + |b| \geqslant |a - b|.$$
Khi nào dấu đẳng thức xảy ra?

---

### Hướng dẫn giải chi tiết

**Bài 1:**
- a) $-\sqrt{9} = -3 \in \mathbb{Z}.$
- b) $\sqrt{5} \notin \mathbb{Q}$ (vì $\sqrt{5}$ là số vô tỉ).
- c) $\sqrt{5} \in \mathbb{R}.$
- d) $\mathbb{I} \subset \mathbb{R}.$
- e) $0{,}(18) \in \mathbb{R}.$
- f) $\mathbb{Q} \cap \mathbb{I} = \varnothing.$

**Bài 2:**
Đổi các số về cùng dạng thập phân để so sánh:
- $-2 = -2{,}0$
- $-1{,}75$
- $-\sqrt{3} \approx -1{,}732\dots$
- $0$
- $\sqrt{5} \approx 2{,}236\dots$
- $\frac{7}{3} \approx 2{,}333\dots = 2{,}(3)$
- $2{,}3(4) = 2{,}3444\dots$

So sánh các số âm: $-2 < -1{,}75 < -\sqrt{3} < 0$.
So sánh các số dương: $\sqrt{5} < \frac{7}{3} < 2{,}3(4)$.
Thứ tự tăng dần:
$$-2 < -1{,}75 < -\sqrt{3} < 0 < \sqrt{5} < \dfrac{7}{3} < 2{,}3(4).$$

**Bài 3:**
- a) $A = 4{,}8 + 1{,}4 - 0 = 6{,}2.$
- b) $B = |4 - 7| + |3 - 5| = |-3| + |-2| = 3 + 2 = 5.$
- c) Vì $2 = \sqrt{4} < \sqrt{5} \implies 2 - \sqrt{5} < 0$.
  Do đó $|2 - \sqrt{5}| = -(2 - \sqrt{5}) = \sqrt{5} - 2$.
  Suy ra $C = (\sqrt{5} - 2) + \sqrt{5} = 2\sqrt{5} - 2.$

**Bài 4:**
- a) $|x| = \frac{5}{8} \implies x = \frac{5}{8}$ hoặc $x = -\frac{5}{8}.$
- b) $|x - 2{,}5| = 1{,}5 \implies x - 2{,}5 = 1{,}5$ hoặc $x - 2{,}5 = -1{,}5$.
  - TH1: $x = 1{,}5 + 2{,}5 = 4.$
  - TH2: $x = -1{,}5 + 2{,}5 = 1.$
  Vậy $x \in \{4; 1\}.$
- c) $4|2x + 3| = 20 \implies |2x + 3| = 5$.
  - TH1: $2x + 3 = 5 \implies 2x = 2 \implies x = 1.$
  - TH2: $2x + 3 = -5 \implies 2x = -8 \implies x = -4.$
  Vậy $x \in \{1; -4\}.$
- d) $\left|x - \frac{1}{3}\right| = -2 < 0 \implies$ phương trình vô nghiệm.

**Bài 5:**
Với số $X = 34\,827{,}5164$:
a)
- Hàng chục: $34\,830$ (chữ số hàng đơn vị là $7 \geqslant 5$).
- Hàng trăm: $34\,800$ (chữ số hàng chục là $2 < 5$).
- Hàng nghìn: $35\,000$ (chữ số hàng trăm là $8 \geqslant 5$).
b)
- Chữ số thập phân thứ nhất (hàng phần mười): $34\,827{,}5$ (chữ số sau là $1 < 5$).
- Chữ số thập phân thứ hai (hàng phần trăm): $34\,827{,}52$ (chữ số sau là $6 \geqslant 5$).
c)
- Độ chính xác $d = 50$: Làm tròn đến hàng trăm $\implies 34\,800$.
- Độ chính xác $d = 0{,}005$: Làm tròn đến hàng phần trăm $\implies 34\,827{,}52$.

**Bài 6:**
a) Làm tròn đến hàng đơn vị: $12{,}3 \approx 12$; $5{,}8 \approx 6$; $4{,}1 \approx 4$; $7{,}9 \approx 8$.
$$P \approx 12 \cdot 6 - 4 \cdot 8 = 72 - 32 = 40.$$
b) Làm tròn đến hàng đơn vị: $48{,}25 \approx 48$; $51{,}7 \approx 52$; $19{,}85 \approx 20$.
$$Q \approx \dfrac{48 + 52}{20} = \dfrac{100}{20} = 5.$$

**Bài 7:**
a) Chu vi thửa ruộng:
$$P = (48{,}6 + 24{,}3) \cdot 2 = 72{,}9 \cdot 2 = 145{,}8\text{ m} \approx 146\text{ m}.$$
Diện tích thửa ruộng:
$$S = 48{,}6 \cdot 24{,}3 = 1\,180{,}98\text{ m}^2 \approx 1\,181\text{ m}^2.$$
b) Khối lượng thóc thu hoạch được:
$$M = 1\,180{,}98 \cdot 0{,}65 = 767{,}637\text{ kg}.$$
Đổi sang tạ:
$$M = \dfrac{767{,}637}{100} = 7{,}67637\text{ tạ} \approx 7{,}7\text{ tạ}.$$

**Bài 8:**
Đẳng thức $|3x - 1| = |x + 5| \iff 3x - 1 = x + 5$ hoặc $3x - 1 = -(x + 5)$.
- TH1: $3x - 1 = x + 5 \implies 2x = 6 \implies x = 3.$
- TH2: $3x - 1 = -x - 5 \implies 4x = -4 \implies x = -1.$
Vậy $x \in \{3; -1\}.$

**Bài 9:**
Viết lại $M = |x - 1| + |7 - x| + 2026.$
Áp dụng $|a| + |b| \geqslant |a + b|$:
$$|x - 1| + |7 - x| \geqslant |x - 1 + 7 - x| = |6| = 6.$$
Do đó:
$$M \geqslant 6 + 2026 = 2032.$$
Dấu "$=$" xảy ra khi $(x - 1)(7 - x) \geqslant 0 \iff 1 \leqslant x \leqslant 7.$
Vậy giá trị nhỏ nhất của $M$ là $2032$, đạt được với mọi $1 \leqslant x \leqslant 7.$

**Bài 10:**
Đặt $x = a - b$ và $y = b$. Khi đó $a = x + y$.
Theo bất đẳng thức tam giác $|x + y| \leqslant |x| + |y|$, ta có:
$$|a| \leqslant |a - b| + |b| \iff |a - b| \geqslant |a| - |b|.$$
Đổi vai trò ta cũng có: $|b - a| = |a - b| \geqslant |b| - |a|$.
Mặt khác, thay $b$ bằng $-b$ vào $|a + (-b)| \leqslant |a| + |-b|$, ta được:
$$|a - b| \leqslant |a| + |b| \iff |a| + |b| \geqslant |a - b|.$$
Dấu đẳng thức xảy ra khi $a$ và $-b$ cùng dấu, tức $a \cdot (-b) \geqslant 0 \iff a \cdot b \leqslant 0$ (tức $a$ và $b$ trái dấu hoặc có ít nhất một số bằng $0$). $\blacksquare$

---

## 6. Đề kiểm tra đánh giá năng lực

---

### Đề kiểm tra 15 phút

#### Phần I: Trắc nghiệm (4 câu — 4,0 điểm)

**Câu 1:** Trong các khẳng định sau, khẳng định nào đúng?
- A) $\mathbb{R} \subset \mathbb{I}$
- B) $\sqrt{2} \in \mathbb{Q}$
- C) $\mathbb{Q} \subset \mathbb{R}$
- D) $-4 \in \mathbb{N}$

**Câu 2:** Giá trị của $|-3{,}8|$ là:
- A) $-3{,}8$
- B) $3{,}8$
- C) $\pm 3{,}8$
- D) $0$

**Câu 3:** Cho biết $|x| = 7$. Số $x$ bằng:
- A) $7$
- B) $-7$
- C) $7$ hoặc $-7$
- D) $49$

**Câu 4:** Làm tròn số $4{,}185$ đến hàng phần mười được:
- A) $4{,}1$
- B) $4{,}2$
- C) $4{,}18$
- D) $4{,}19$

#### Phần II: Tự luận (2 câu — 6,0 điểm)

**Câu 5 (3,0 điểm):** Tính giá trị biểu thức:
$$E = | -2{,}5 | \cdot 4 + \left| \dfrac{3}{4} - 1 \right| : \dfrac{1}{8}.$$

**Câu 6 (3,0 điểm):**
Tìm $x$, biết: $|2x - 3| - 1 = 6.$

---

#### Đáp án & Thang điểm đề 15 phút

**Phần I: Trắc nghiệm (4,0 điểm — mỗi câu 1,0 điểm)**
1. **C** ($\mathbb{Q} \subset \mathbb{R}$).
2. **B** ($|-3{,}8| = 3{,}8$).
3. **C** ($x = \pm 7$).
4. **B** (Chữ số ngay sau hàng phần mười là $8 \geqslant 5$ nên làm tròn lên $4{,}2$).

**Phần II: Tự luận (6,0 điểm)**
- **Câu 5 (3,0 điểm):**
  - $|-2{,}5| \cdot 4 = 2{,}5 \cdot 4 = 10$ *(1,0 điểm)*
  - $\left|\frac{3}{4} - 1\right| = \left|-\frac{1}{4}\right| = \frac{1}{4}$ *(1,0 điểm)*
  - $\frac{1}{4} : \frac{1}{8} = \frac{1}{4} \cdot 8 = 2$ *(0,5 điểm)*
  - $E = 10 + 2 = 12$ *(0,5 điểm)*
- **Câu 6 (3,0 điểm):**
  - $|2x - 3| = 6 + 1 = 7$ *(1,0 điểm)*
  - TH1: $2x - 3 = 7 \implies 2x = 10 \implies x = 5$ *(1,0 điểm)*
  - TH2: $2x - 3 = -7 \implies 2x = -4 \implies x = -2$ *(1,0 điểm)*
  - Kết luận: $x \in \{5; -2\}$.

---

### Đề kiểm tra 45 phút định kỳ

#### Ma trận đề thi

| Mức độ nhận thức | Nhận biết (30%) | Thông hiểu (30%) | Vận dụng (30%) | Vận dụng cao (10%) | Tổng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Khái niệm số thực & Quan hệ tập số** | 2 TN (1,0đ) | 1 TL (1,0đ) | | | **2,0đ** |
| **So sánh số thực & Trục số** | 1 TN (0,5đ) | 1 TN (0,5đ) | 1 TL (1,0đ) | | **2,0đ** |
| **Giá trị tuyệt đối** | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | 1 TL (1,0đ) | **3,5đ** |
| **Làm tròn & Độ chính xác** | 1 TN (0,5đ) | 1 TN (0,5đ) | 1 TL (1,0đ) | 1 TL (0,5đ) | **2,5đ** |
| **Tổng điểm** | **2,5đ** | **3,0đ** | **3,0đ** | **1,5đ** | **10,0đ** |

---

#### Phần I: Trắc nghiệm khách quan (6 câu — 3,0 điểm)

**Câu 1:** Số nào sau đây **không phải** là số thực?
- A) $\sqrt{2}$
- B) $-3{,}5$
- C) $\pi$
- D) Không có số nào (mọi số đã học đều là số thực)

**Câu 2:** Cho hai số thực $a = -2{,}15$ và $b = -2{,}1(5)$. Khẳng định nào sau đây đúng?
- A) $a > b$
- B) $a < b$
- C) $a = b$
- D) Không so sánh được

**Câu 3:** Khẳng định nào sau đây luôn đúng với mọi số thực $x$?
- A) $|x| = x$
- B) $|x| = -x$
- C) $|x| \geqslant 0$
- D) $|x| > 0$

**Câu 4:** Giá trị của $x$ thỏa mãn $|x + 1| = 0$ là:
- A) $x = 1$
- B) $x = -1$
- C) $x = \pm 1$
- D) Vô nghiệm

**Câu 5:** Làm tròn số $354\,819$ đến hàng nghìn ta được:
- A) $354\,000$
- B) $355\,000$
- C) $354\,800$
- D) $350\,000$

**Câu 6:** Làm tròn số $12{,}457$ với độ chính xác $d = 0{,}05$ được kết quả là:
- A) $12{,}4$
- B) $12{,}5$
- C) $12{,}46$
- D) $12{,}45$

---

#### Phần II: Tự luận (4 bài — 7,0 điểm)

**Bài 1 (2,0 điểm):**
a) Điền các ký hiệu $\in, \notin, \subset$ thích hợp vào chỗ trống:
$$-\sqrt{16} \dots \mathbb{Z};\quad \sqrt{8} \dots \mathbb{I};\quad \mathbb{Q} \dots \mathbb{R};\quad 0{,}(3) \dots \mathbb{I}.$$
b) Sắp xếp các số thực sau theo thứ tự giảm dần (từ lớn đến bé):
$$3{,}15;\quad \pi;\quad \sqrt{10};\quad 3{,}(14);\quad 3{,}145.$$

**Bài 2 (2,0 điểm):** Tìm số thực $x$, biết:
- a) $|3x - 2| = 7$
- b) $2|x + 1| - \frac{3}{2} = \frac{5}{2}$

**Bài 3 (2,0 điểm):**
Một hồ bơi hình chữ nhật có chiều dài $25{,}4\text{ m}$ và chiều rộng $12{,}8\text{ m}$.
a) Tính diện tích mặt nước của hồ bơi và làm tròn đến hàng đơn vị.
b) Người ta đo độ sâu trung bình của hồ bơi là $1{,}65\text{ m}$ với độ chính xác $d = 0{,}02\text{ m}$. Hãy xác định khoảng thể tích nước thực tế trong hồ (theo mét khối).

**Bài 4 (1,0 điểm — Vận dụng cao):**
a) Tìm giá trị nhỏ nhất của biểu thức: $A = |x - 2| + |x - 7| + 5.$
b) Tìm các số nguyên $x$ thỏa mãn: $|x - 1| + |x - 4| = 3.$

---

#### Đáp án & Hướng dẫn chấm đề 45 phút

**Phần I: Trắc nghiệm (3,0 điểm — mỗi câu 0,5 điểm)**
1. **D** (Mọi số tự nhiên, nguyên, hữu tỉ, vô tỉ đều là số thực).
2. **A** (Vì $b = -2{,}1555\dots$ có $|b| > |a| \implies a > b$).
3. **C** (Định nghĩa giá trị tuyệt đối luôn không âm).
4. **B** ($x + 1 = 0 \iff x = -1$).
5. **B** (Chữ số hàng trăm là $8 \geqslant 5$ nên cộng $1$ vào hàng nghìn: $355\,000$).
6. **B** (Độ chính xác $0{,}05$ ứng với hàng phần mười. Chữ số phần trăm là $5 \geqslant 5 \implies 12{,}5$).

**Phần II: Tự luận (7,0 điểm)**

- **Bài 1 (2,0 điểm):**
  - a) Điền đúng mỗi vị trí được 0,25đ:
    $-\sqrt{16} = -4 \in \mathbb{Z}$; $\sqrt{8} \in \mathbb{I}$; $\mathbb{Q} \subset \mathbb{R}$; $0{,}(3) \notin \mathbb{I}$ *(1,0 điểm)*.
  - b) Đổi về thập phân: $\pi \approx 3{,}14159\dots$; $\sqrt{10} \approx 3{,}16227\dots$; $3{,}(14) = 3{,}141414\dots$
    So sánh: $\sqrt{10} > 3{,}15 > 3{,}145 > \pi > 3{,}(14)$ *(1,0 điểm)*.

- **Bài 2 (2,0 điểm):**
  - a) $|3x - 2| = 7 \iff 3x - 2 = 7$ hoặc $3x - 2 = -7$ *(0,25 điểm)*.
    - TH1: $3x = 9 \implies x = 3$ *(0,25 điểm)*.
    - TH2: $3x = -5 \implies x = -\frac{5}{3}$ *(0,25 điểm)*.
    - Kết luận: $x \in \left\{3; -\frac{5}{3}\right\}$ *(0,25 điểm)*.
  - b) $2|x + 1| = \frac{5}{2} + \frac{3}{2} = 4 \implies |x + 1| = 2$ *(0,5 điểm)*.
    - TH1: $x + 1 = 2 \implies x = 1$ *(0,25 điểm)*.
    - TH2: $x + 1 = -2 \implies x = -3$ *(0,25 điểm)*.
    - Kết luận: $x \in \{1; -3\}$.

- **Bài 3 (2,0 điểm):**
  - a) Diện tích hồ bơi: $S = 25{,}4 \cdot 12{,}8 = 325{,}12\text{ m}^2$ *(0,5 điểm)*.
    Làm tròn đến hàng đơn vị: $S \approx 325\text{ m}^2$ *(0,5 điểm)*.
  - b) Độ sâu thực tế: $1{,}65 - 0{,}02 \leqslant h \leqslant 1{,}65 + 0{,}02 \iff 1{,}63\text{ m} \leqslant h \leqslant 1{,}67\text{ m}$ *(0,5 điểm)*.
    Thể tích nước thực tế: $V = S \cdot h = 325{,}12 \cdot h$.
    $325{,}12 \cdot 1{,}63 \leqslant V \leqslant 325{,}12 \cdot 1{,}67 \iff 529{,}9456\text{ m}^3 \leqslant V \leqslant 542{,}9504\text{ m}^3$ *(0,5 điểm)*.

- **Bài 4 (1,0 điểm):**
  - a) $A = |x - 2| + |7 - x| + 5 \geqslant |x - 2 + 7 - x| + 5 = 5 + 5 = 10$.
    Dấu "$=$" xảy ra khi $2 \leqslant x \leqslant 7$.
    Vậy GTNN của $A$ là $10$ *(0,5 điểm)*.
  - b) Ta có $|x - 1| + |4 - x| \geqslant |x - 1 + 4 - x| = 3$.
    Dấu "$=$" xảy ra khi $(x - 1)(4 - x) \geqslant 0 \iff 1 \leqslant x \leqslant 4$.
    Vì $x \in \mathbb{Z}$ nên $x \in \{1; 2; 3; 4\}$ *(0,5 điểm)*.
