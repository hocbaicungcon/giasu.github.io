---
title: 'Toán 9 Bài 21: Giải bài toán bằng cách lập phương trình - Phương pháp 3 bước & 5 Dạng toán thực tế then chốt'
description: 'Lý thuyết và phương pháp giải Bài 21 Toán 9: Quy trình 3 bước giải bài toán bằng cách lập phương trình bậc hai, các dạng toán chuyển động ca-nô, năng suất, hình học, phần trăm tăng trưởng, widget mô phỏng và 10 câu trắc nghiệm chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Giải bài toán bằng cách lập phương trình
  - Toán chuyển động
  - Toán năng suất
  - Toán hình học
  - Kết nối tri thức
grade: 9
---

# Bài 21. Giải bài toán bằng cách lập phương trình

Toán học không chỉ tồn tại trên những trang giấy lý thuyết hay các công thức trừu tượng, mà sức mạnh vĩ đại nhất của nó là **khả năng mô hình hóa hiện thực cuộc sống**:
- Một người thuyền trưởng muốn tính thời gian tàu cập cảng an toàn khi dòng nước thủy triều cuồn cuộn chảy ngược hướng,
- Hai đội công nhân cùng đào một đường hầm xuyên núi muốn biết năng suất mỗi đội để kịp tiến độ khánh thành,
- Một chủ trang trại muốn mở rộng diện tích chuồng trại sao cho chi phí rào chắn thép gai là thấp nhất.

Tất cả những bài toán hóc búa trong đời sống thực tế đều có thể được chuyển đổi kỳ diệu thành một phương trình đại số thông qua phương pháp **Giải bài toán bằng cách lập phương trình**.

Đây là dạng bài tập chiếm từ $1{,}5$ đến $2{,}0$ điểm trong cấu trúc đề thi tuyển sinh vào lớp 10 THPT trên toàn quốc — một câu hỏi vừa kiểm tra tư duy logic ngôn ngữ, vừa thử thách kỹ năng tính toán chuẩn xác. Hãy cùng nhau làm chủ quy trình 3 bước tiêu chuẩn để tự tin chinh phục mọi bài toán thực tế nhé!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: GIẢI BÀI TOÁN BẰNG CÁCH LẬP PHƯƠNG TRÌNH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quy trình Chuẩn 3 Bước</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>B1: Lập PT:</strong> Chọn ẩn + ĐK $\to$ Biểu diễn đại lượng chưa biết $\to$ Lập PT.<br>• <strong>B2: Giải PT:</strong> Đưa về bậc hai $ax^2 + bx + c = 0$, giải bằng $\Delta$ hoặc phân tích.<br>• <strong>B3: Đối chiếu & Kết luận:</strong> Loại nghiệm âm/ngoại lai, trả lời theo câu hỏi.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Toán Chuyển động</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hệ thức vàng: $s = v \cdot t \iff t = \frac{s}{v}$.<br>• <strong>Ca-nô trên sông:</strong><br>&nbsp;&nbsp;+ $v_{\text{xuôi}} = v_{\text{thực}} + v_{\text{nước}}$<br>&nbsp;&nbsp;+ $v_{\text{ngược}} = v_{\text{thực}} - v_{\text{nước}}$<br>• Lập PT theo chênh lệch thời gian: $t_{\text{ngược}} - t_{\text{xuôi}} = \Delta t$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Năng suất & Làm chung riêng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quy ước toàn bộ công việc là $1$.<br>• Năng suất $= \frac{1}{\text{thời gian hoàn thành}}$.<br>• Năng suất chung $= N_1 + N_2$.<br>• Công việc $=$ Năng suất $\times$ Thời gian làm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình học & Kinh tế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hình chữ nhật: $S = a \cdot b$; Tam giác vuông: $a^2 + b^2 = c^2$.<br>• Tăng trưởng $2$ năm liên tiếp: $A_2 = A_0(1 + r)^2$.<br>• Doanh thu $=$ Giá bán $\times$ Số lượng.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Công thức chuyển động:** Một xe ô tô đi quãng đường $120\text{ km}$ với vận tốc $x\text{ km/h}$. Thời gian ô tô đi hết quãng đường là bao nhiêu?
2. **Ca-nô xuôi dòng:** Ca-nô có vận tốc riêng là $25\text{ km/h}$, dòng nước chảy với vận tốc $3\text{ km/h}$. Vận tốc ca-nô khi xuôi dòng và ngược dòng lần lượt là bao nhiêu?
3. **Năng suất 1 giờ:** Một vòi nước chảy một mình trong $x$ giờ thì đầy bể. Trong 1 giờ vòi đó chảy được bao nhiêu phần bể?
4. **Hình học:** Một tam giác vuông có hai cạnh góc vuông hơn kém nhau $3\text{ cm}$ và cạnh huyền bằng $15\text{ cm}$. Nếu gọi cạnh góc vuông nhỏ là $x$ ($x > 0$), phương trình định lý Pythagore là gì?
5. **Điều kiện ẩn số:** Khi gọi số công nhân của một xưởng may là $x$, điều kiện chính xác của ẩn $x$ là gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Thời gian là $t = \frac{120}{x}$ (giờ).
> 2. Xuôi dòng: $25 + 3 = 28\text{ km/h}$; Ngược dòng: $25 - 3 = 22\text{ km/h}$.
> 3. Trong 1 giờ chảy được $\frac{1}{x}$ (bể).
> 4. Phương trình: $x^2 + (x + 3)^2 = 15^2 \iff 2x^2 + 6x - 216 = 0$.
> 5. Điều kiện: $x \in \mathbb{N}^*$ (số nguyên dương).

---

## I. Lý thuyết Trọng tâm

### Quy trình Chuẩn 3 Bước Giải Bài toán bằng cách Lập Phương trình

#### Bước 1: Lập phương trình
1. **Chọn ẩn số và đặt điều kiện thích hợp cho ẩn:**
   - Thông thường, bài toán hỏi đại lượng nào thì ta chọn trực tiếp đại lượng đó làm ẩn $x$ (chọn ẩn trực tiếp). Đôi khi chọn một đại lượng trung gian làm ẩn sẽ giúp phương trình đơn giản hơn (chọn ẩn gián tiếp).
   - Đặt đơn vị đo và điều kiện toán học, thực tế cho ẩn:
     + Vận tốc, chiều dài, diện tích, thời gian, khối lượng: $x > 0$.
     + Số người, số cây, số sản phẩm: $x \in \mathbb{N}^*$.
     + Chữ số hàng chục, hàng đơn vị: $x \in \{1; 2; \dots; 9\}$.
2. **Biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết.**
3. **Lập phương trình:** Dựa vào mối liên hệ giữa các đại lượng (như: hơn kém nhau thời gian, tổng khối lượng, tổng diện tích) để thiết lập một phương trình đại số.

#### Bước 2: Giải phương trình
- Quy đồng mẫu thức và khử mẫu (nếu phương trình có chứa ẩn ở mẫu thức).
- Rút gọn và biến đổi phương trình về dạng chính tắc bậc hai: $ax^2 + bx + c = 0$.
- Giải phương trình bằng công thức nghiệm $\Delta$, $\Delta'$ hoặc phân tích thành nhân tử.

#### Bước 3: Đối chiếu điều kiện và Kết luận
- So sánh các nghiệm tìm được với điều kiện đã đặt ở Bước 1.
- Loại các nghiệm ngoại lai (nghiệm âm, phân số không thỏa mãn $\mathbb{N}^*$, làm mẫu số bằng $0$).
- Trả lời đầy đủ, chính xác theo đúng yêu cầu đề bài (chú ý đơn vị).

---

## II. Mô phỏng Tương tác: Giải Toán Ca-nô Xuôi & Ngược Dòng

Bài toán chuyển động của ca-nô trên sông là dạng bài điển hình nhất dẫn đến phương trình bậc hai chứa ẩn ở mẫu thức. Hãy điều chỉnh các tham số thực tế để quan sát toàn bộ quá trình thiết lập và giải phương trình tự động!

<div class="interactive-motion-solver" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: BÀI TOÁN CA-NÔ XUÔI DÒNG VÀ NGƯỢC DÒNG</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- Controls -->
    <div style="flex: 1 1 280px; max-width: 320px;">
      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.88em; font-weight: bold; display: flex; justify-content: space-between;">
          <span>Quãng đường sông $s$:</span>
          <span id="txtDist" style="color: #2563eb;">40 km</span>
        </label>
        <input type="range" id="slDist" min="20" max="80" step="5" value="40" style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.88em; font-weight: bold; display: flex; justify-content: space-between;">
          <span>Vận tốc dòng nước $v_n$:</span>
          <span id="txtVn" style="color: #047857;">4 km/h</span>
        </label>
        <input type="range" id="slVn" min="2" max="6" step="1" value="4" style="width: 100%;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.88em; font-weight: bold; display: flex; justify-content: space-between;">
          <span>Chênh lệch thời gian ngược - xuôi:</span>
          <span id="txtDt" style="color: #b45309;">40 phút (2/3 h)</span>
        </label>
        <input type="range" id="slDt" min="20" max="90" step="10" value="40" style="width: 100%;" />
      </div>
    </div>

    <!-- Live Equation Builder -->
    <div style="flex: 1 1 340px; max-width: 440px;">
      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.88em; line-height: 1.8;">
        <div>• Gọi vận tốc riêng của ca-nô là $x$ ($x > v_n$).</div>
        <div>• Vận tốc xuôi dòng: $x + v_n$; Vận tốc ngược dòng: $x - v_n$.</div>
        <div>• Thời gian xuôi: $t_1 = \frac{s}{x + v_n}$; Thời gian ngược: $t_2 = \frac{s}{x - v_n}$.</div>
        <div style="margin-top: 6px; padding: 8px; background: #eff6ff; border-radius: 6px; border-left: 3px solid #2563eb;">
          <strong>Phương trình:</strong> <span id="eqDisplay">$\frac{40}{x - 4} - \frac{40}{x + 4} = \frac{2}{3}$</span>
        </div>
        <div style="margin-top: 8px;">
          • Nghiệm vận tốc riêng ca-nô: <strong id="resSpeed" style="color: #10b981; font-size: 1.15em;">x = 22.0 km/h</strong>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const slDist = document.getElementById('slDist');
  const slVn = document.getElementById('slVn');
  const slDt = document.getElementById('slDt');
  if (!slDist || !slVn || !slDt) return;

  const txtDist = document.getElementById('txtDist');
  const txtVn = document.getElementById('txtVn');
  const txtDt = document.getElementById('txtDt');
  const eqDisplay = document.getElementById('eqDisplay');
  const resSpeed = document.getElementById('resSpeed');

  function update() {
    const s = parseFloat(slDist.value);
    const vn = parseFloat(slVn.value);
    const dtMin = parseFloat(slDt.value);
    const dtHour = dtMin / 60;

    txtDist.textContent = s + ' km';
    txtVn.textContent = vn + ' km/h';
    txtDt.textContent = dtMin + ' phút (' + dtHour.toFixed(2) + ' h)';

    eqDisplay.innerHTML = '$\\frac{' + s + '}{x - ' + vn + '} - \\frac{' + s + '}{x + ' + vn + '} = ' + dtHour.toFixed(2) + '$';

    // Equation: s/(x - vn) - s/(x + vn) = dt
    // s(2*vn) / (x^2 - vn^2) = dt
    // 2*s*vn = dt * (x^2 - vn^2)
    // x^2 - vn^2 = 2*s*vn / dt
    // x^2 = vn^2 + (2*s*vn / dt)
    const x2 = vn * vn + (2 * s * vn) / dtHour;
    const x = Math.sqrt(x2);

    resSpeed.textContent = 'x = ' + x.toFixed(1) + ' km/h';
  }

  slDist.addEventListener('input', update);
  slVn.addEventListener('input', update);
  slDt.addEventListener('input', update);
  update();
})();
</script>

---

## III. 4 Dạng Toán Trọng Tâm & Phương Pháp Giải Chi Tiết

### Dạng 1: Bài toán Chuyển động (Đường bộ, Đường sông)

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Lập bảng 3 cột 2 dòng gồm ba đại lượng: **Quãng đường ($s$)**, **Vận tốc ($v$)**, **Thời gian ($t$)**.
> 2. Mối liên hệ: $s = v \cdot t \implies t = \frac{s}{v}$.
> 3. Phương trình thường được lập dựa trên **chênh lệch thời gian**:
>    $$t_{\text{chậm}} - t_{\text{nhanh}} = \Delta t$$
>    *(Thời gian đi với vận tốc nhỏ hơn trừ thời gian đi với vận tốc lớn hơn bằng thời gian chênh lệch).*
>    *Chú ý:* Luôn đổi đơn vị thời gian từ phút sang giờ ($\text{ví dụ: } 15\text{ phút} = \frac{1}{4}\text{ giờ}$).

#### Bài toán mẫu 1.1:
Một tàu chở hàng đi xuôi dòng từ bến $A$ đến bến $B$ dài $60\text{ km}$, sau đó quay trở lại bến $A$. Thời gian đi xuôi dòng ít hơn thời gian đi ngược dòng là $1\text{ giờ } 15\text{ phút}$. Biết vận tốc của dòng nước là $2\text{ km/h}$. Hãy tính vận tốc riêng của tàu chở hàng khi nước yên lặng.

**Lời giải chi tiết:**
- Đổi đơn vị: $1\text{ giờ } 15\text{ phút} = 1 + \frac{15}{60} = \frac{5}{4}\text{ giờ}$.
- Gọi vận tốc riêng của tàu khi nước yên lặng là $x$ ($\text{km/h}$, điều kiện: $x > 2$).
- Khi xuôi dòng:
  + Vận tốc xuôi dòng là: $x + 2$ ($\text{km/h}$).
  + Thời gian đi xuôi dòng từ $A$ đến $B$ là: $\frac{60}{x + 2}$ (giờ).
- Khi ngược dòng:
  + Vận tốc ngược dòng là: $x - 2$ ($\text{km/h}$).
  + Thời gian đi ngược dòng từ $B$ về $A$ là: $\frac{60}{x - 2}$ (giờ).
- Vì thời gian đi xuôi dòng ít hơn thời gian đi ngược dòng là $\frac{5}{4}\text{ giờ}$, ta có phương trình:
$$\frac{60}{x - 2} - \frac{60}{x + 2} = \frac{5}{4}$$

*Giải phương trình:*
Quy đồng mẫu thức chung $4(x - 2)(x + 2)$ và khử mẫu:
$$4 \times 60(x + 2) - 4 \times 60(x - 2) = 5(x^2 - 4)$$
$$\iff 240(x + 2 - x + 2) = 5(x^2 - 4)$$
$$\iff 240 \times 4 = 5x^2 - 20 \iff 960 = 5x^2 - 20$$
$$\iff 5x^2 = 980 \iff x^2 = 196 \implies x = \pm 14$$

- Đối chiếu điều kiện $x > 2$:
  + $x = 14$ (Thỏa mãn).
  + $x = -14$ (Loại vì vận tốc không thể âm).
Vậy vận tốc riêng của tàu chở hàng là $14\text{ km/h}$.

---

### Dạng 2: Bài toán Năng suất Lao động & Làm chung - Làm riêng

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Quy ước toàn bộ công việc phải hoàn thành là $1$ (đơn vị công việc).
> 2. Gọi thời gian đội 1 làm một mình xong công việc là $x$ (ngày/giờ, $x > 0$).
>    Thời gian đội 2 làm một mình xong công việc là $y$ (ngày/giờ, $y > 0$).
> 3. Trong $1$ đơn vị thời gian:
>    - Đội 1 làm được: $\frac{1}{x}$ (công việc).
>    - Đội 2 làm được: $\frac{1}{y}$ (công việc).
>    - Cả hai đội làm được: $\frac{1}{x} + \frac{1}{y} = \frac{1}{T_{\text{chung}}}$.

#### Bài toán mẫu 2.1:
Hai tổ công nhân cùng làm chung một đoạn đường bê tông nông thôn thì sau $6\text{ ngày}$ sẽ hoàn thành. Nếu làm riêng thì tổ thứ nhất hoàn thành công việc nhanh hơn tổ thứ hai là $5\text{ ngày}$. Hỏi nếu làm một mình thì mỗi tổ mất bao nhiêu ngày để hoàn thành đoạn đường đó?

**Lời giải chi tiết:**
- Gọi thời gian tổ thứ nhất làm một mình hoàn thành đoạn đường là $x$ (ngày, điều kiện: $x > 6$).
- Vì tổ thứ nhất làm nhanh hơn tổ thứ hai $5\text{ ngày}$, nên thời gian tổ thứ hai làm một mình xong đoạn đường là:
  $$x + 5\text{ (ngày)}$$
- Trong $1\text{ ngày}$:
  + Tổ thứ nhất làm được: $\frac{1}{x}$ (đoạn đường).
  + Tổ thứ hai làm được: $\frac{1}{x + 5}$ (đoạn đường).
  + Cả hai tổ làm chung xong trong $6\text{ ngày}$, nên trong $1\text{ ngày}$ cả hai tổ làm được: $\frac{1}{6}$ (đoạn đường).
- Ta có phương trình:
$$\frac{1}{x} + \frac{1}{x + 5} = \frac{1}{6}$$

*Giải phương trình:*
Quy đồng mẫu thức chung $6x(x + 5)$ và khử mẫu:
$$6(x + 5) + 6x = x(x + 5)$$
$$\iff 6x + 30 + 6x = x^2 + 5x \iff x^2 + 5x - 12x - 30 = 0 \iff x^2 - 7x - 30 = 0$$
Tính biệt thức:
$$\Delta = (-7)^2 - 4 \times 1 \times (-30) = 49 + 120 = 169 = 13^2 > 0$$
Phương trình có hai nghiệm:
$$x_1 = \frac{7 + 13}{2} = 10 \quad (\text{thỏa mãn } x > 6)$$
$$x_2 = \frac{7 - 13}{2} = -3 \quad (\text{loại vì } x > 6)$$

Vậy:
- Tổ thứ nhất làm một mình xong trong $10\text{ ngày}$.
- Tổ thứ hai làm một mình xong trong $10 + 5 = 15\text{ ngày}$.

---

### Dạng 3: Bài toán có Nội dung Hình học

> [!TIP]
> **Phương pháp cốt lõi:**
> - Hình chữ nhật: Diện tích $S = \text{dài} \times \text{rộng}$; Chu vi $P = 2 \times (\text{dài} + \text{rộng})$.
> - Tam giác vuông: Áp dụng định lý Pythagore: $a^2 + b^2 = c^2$.
> - Chú ý bài toán bớt chiều dài, tăng chiều rộng để so sánh diện tích ban đầu và diện tích mới.

#### Bài toán mẫu 3.1:
Một khu vườn hình chữ nhật có chu vi là $70\text{ m}$. Nếu tăng chiều rộng thêm $3\text{ m}$ và giảm chiều dài đi $5\text{ m}$ thì diện tích khu vườn không đổi. Hãy tính diện tích ban đầu của khu vườn.

**Lời giải chi tiết:**
- Nửa chu vi khu vườn là: $70 : 2 = 35\text{ m}$.
- Gọi chiều rộng ban đầu của khu vườn là $x$ (mét, điều kiện: $0 < x < 17{,}5$).
- Chiều dài ban đầu của khu vườn là: $35 - x$ (mét).
- Diện tích ban đầu của khu vườn là: $x(35 - x)$ ($\text{m}^2$).
- Khi thay đổi kích thước:
  + Chiều rộng mới là: $x + 3$ (mét).
  + Chiều dài mới là: $(35 - x) - 5 = 30 - x$ (mét).
  + Diện tích mới là: $(x + 3)(30 - x)$ ($\text{m}^2$).
- Vì diện tích khu vườn không đổi, ta có phương trình:
$$(x + 3)(30 - x) = x(35 - x)$$
$$\iff 30x - x^2 + 90 - 3x = 35x - x^2$$
Triệt tiêu $-x^2$ ở cả hai vế:
$$27x + 90 = 35x \iff 35x - 27x = 90 \iff 8x = 90 \implies x = \frac{90}{8} = 11{,}25\text{ m}$$
Thỏa mãn điều kiện $0 < x < 17{,}5$.
- Chiều rộng ban đầu là $11{,}25\text{ m}$.
- Chiều dài ban đầu là $35 - 11{,}25 = 23{,}75\text{ m}$.
Diện tích ban đầu của khu vườn là:
$$S = 11{,}25 \times 23{,}75 = 267{,}1875\text{ m}^2$$

---

### Dạng 4: Bài toán Kinh tế, Tăng trưởng & Phần trăm

> [!TIP]
> **Phương pháp cốt lõi:**
> - Nếu một đại lượng $A$ tăng $r\%$ thì giá trị mới là: $A \times (1 + r\%)$.
> - Nếu tăng $r\%$ liên tiếp trong 2 kỳ (2 năm/2 đợt):
>   $$A_2 = A_0 \times (1 + x)^2 \quad (\text{với } x = r\%)$$
> - Nếu giảm $r\%$ liên tiếp trong 2 đợt:
>   $$A_2 = A_0 \times (1 - x)^2$$

#### Bài toán mẫu 4.1:
Dân số của một thành phố vệ tinh hiện nay là $200.000$ người. Sau hai năm, dân số thành phố đó tăng lên thành $216.320$ người. Biết rằng tỉ lệ tăng dân số mỗi năm là như nhau. Hỏi trung bình mỗi năm dân số thành phố đó tăng bao nhiêu phần trăm?

**Lời giải chi tiết:**
- Gọi tỉ lệ tăng dân số hàng năm của thành phố là $x$ (điều kiện: $0 < x < 1$).
- Sau năm thứ nhất, dân số của thành phố là:
  $$200000 + 200000x = 200000(1 + x)\text{ (người)}$$
- Sau năm thứ hai, dân số của thành phố là:
  $$200000(1 + x) + 200000(1 + x)x = 200000(1 + x)^2\text{ (người)}$$
- Theo đề bài, sau 2 năm dân số đạt $216.320$ người, ta có phương trình:
$$200000(1 + x)^2 = 216320$$
$$\iff (1 + x)^2 = \frac{216320}{200000} = 1{,}0816$$
Khai căn bậc hai hai vế (vì $1 + x > 0$):
$$1 + x = \sqrt{1{,}0816} = 1{,}04 \implies x = 1{,}04 - 1 = 0{,}04 = 4\%$$
Thỏa mãn điều kiện $0 < x < 1$.
Vậy trung bình mỗi năm dân số thành phố tăng $4\%$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG LẬP PHƯƠNG TRÌNH TRONG THỰC TIỄN HIỆN ĐẠI
 ┌────────────────────────────────────────────────────────┐
 │ 1. Hàng hải & Hàng không: Dòng tia phản lực Jet Stream │
 │ 2. Quản lý dự án: Phương pháp đường găng (CPM)         │
 │ 3. Logistics & Chuỗi cung ứng: Tính quy mô lô hàng EOQ │
 │ 4. Ngân hàng & Đầu tư: Lãi suất hoàn vốn nội bộ (IRR) │
 │ 5. Nông nghiệp chính xác: Tối ưu mật độ gieo trồng     │
 └────────────────────────────────────────────────────────┘
```

### 1. Hàng không: Tận dụng luồng gió phản lực Jet Stream
Các phi công lái máy bay dân dụng bay từ Châu Á sang Bắc Mỹ qua Thái Bình Dương luôn lập phương trình vận tốc theo luồng gió phản lực tầng bình lưu (Jet Stream với sức gió có thể đạt $250\text{ km/h}$).
Bằng cách lập phương trình thời gian $t = \frac{s}{v_{\text{bay}} + v_{\text{gió}}}$, hệ thống quản lý bay tính toán chính xác lượng nhiên liệu tiết kiệm được và rút ngắn thời gian bay thương mại tới $1{,}5$ tiếng đồng hồ, tiết kiệm hàng chục nghìn lít nhiên liệu phản lực!

### 2. Quản trị Dự án: Phương pháp Đường găng (Critical Path Method)
Trong các đại công trình xây dựng sân bay Long Thành hay tuyến đường sắt đô thị, các kỹ sư quản lý dự án chia công việc cho nhiều nhà thầu cùng lúc.
Họ thiết lập phương trình năng suất tương tự dạng toán "làm chung - làm riêng":
$$\sum \frac{1}{t_i} = \frac{1}{T_{\text{mục tiêu}}}$$
Nhờ đó, quản lý dự án nhận diện chính xác "mắt xích cổ chai" đang chậm tiến độ để điều chuyển thêm nhân lực và máy móc thiết bị bù đắp kịp thời.

### 3. Chuỗi cung ứng: Mô hình Lô hàng Kinh tế EOQ
Trong thương mại điện tử (như Shopee, Amazon), bài toán tồn kho được mô hình hóa bằng phương trình chi phí tổng hợp:
$$C(Q) = \frac{D}{Q} S + \frac{Q}{2} H$$
Việc tìm quy mô đặt hàng tối ưu $Q$ để chi phí đặt hàng bằng chi phí lưu kho đưa trực tiếp về phương trình bậc hai $Q^2 = \frac{2DS}{H} \implies Q = \sqrt{\frac{2DS}{H}}$, giúp doanh nghiệp giảm hàng triệu USD chi phí kho bãi mỗi năm.

### 4. Tài chính Ngân hàng: Tỉ suất Hoàn vốn Nội bộ (IRR)
Khi đánh giá một dự án đầu tư có dòng tiền thu về trong hai năm liên tiếp $C_1, C_2$, các nhà phân tích tài chính tìm tỷ suất sinh lời $r$ sao cho giá trị hiện tại ròng bằng $0$:
$$-C_0 + \frac{C_1}{1 + r} + \frac{C_2}{(1 + r)^2} = 0$$
Đặt ẩn phụ $X = \frac{1}{1 + r}$, phương trình tài chính lập tức biến thành phương trình bậc hai $C_2 X^2 + C_1 X - C_0 = 0$, giúp xác định dự án có đem lại lợi nhuận vượt trội hay không.

### 5. Nông nghiệp Thông minh: Mật độ gieo trồng tối ưu
Trên một héc-ta đất nông nghiệp, nếu trồng $x$ cây ăn trái thì năng suất trung bình của mỗi cây giảm đi do cạnh tranh ánh sáng và dinh dưỡng: $P(x) = x(A - Bx) = -Bx^2 + Ax$.
Các kỹ sư nông nghiệp giải phương trình bậc hai để tìm mật độ $x$ tối ưu mang lại tổng sản lượng thu hoạch cao nhất cho nhà nông.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Một người đi xe đạp từ A đến B với vận tốc $v\\text{ km/h}$. Khi đi từ B về A người đó tăng vận tốc thêm $3\\text{ km/h}$. Biểu thức biểu thị thời gian lúc về là:",
  "options": [
    "A. $\\frac{AB}{v}$",
    "B. $\\frac{AB}{v - 3}$",
    "C. $\\frac{AB}{v + 3}$",
    "D. $\\frac{v + 3}{AB}$"
  ],
  "correct": 2,
  "explanation": "Vận tốc lúc về là $v + 3\\text{ km/h}$. Thời gian lúc về bằng quãng đường chia vận tốc: $\\frac{AB}{v + 3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Ca-nô đi xuôi dòng trên khúc sông dài $45\\text{ km}$ với vận tốc riêng $x\\text{ km/h}$ và vận tốc dòng nước $3\\text{ km/h}$. Thời gian ca-nô đi xuôi dòng là:",
  "options": [
    "A. $\\frac{45}{x - 3}$ giờ",
    "B. $\\frac{45}{x + 3}$ giờ",
    "C. $\\frac{x + 3}{45}$ giờ",
    "D. $45(x + 3)$ giờ"
  ],
  "correct": 1,
  "explanation": "Vận tốc xuôi dòng là $x + 3\\text{ km/h}$, do đó thời gian xuôi dòng là $\\frac{45}{x + 3}$ giờ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Hai người cùng làm chung một công việc trong 4 giờ thì xong. Trong 1 giờ, cả hai người làm được bao nhiêu phần công việc?",
  "options": [
    "A. $\\frac{1}{2}$ công việc",
    "B. $\\frac{1}{4}$ công việc",
    "C. 4 công việc",
    "D. $\\frac{3}{4}$ công việc"
  ],
  "correct": 1,
  "explanation": "Cả hai người làm xong trong 4 giờ thì trong 1 giờ làm được $\\frac{1}{4}$ công việc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tích của hai số tự nhiên liên tiếp là 156. Phương trình tìm số nhỏ $x$ ($x \\in \\mathbb{N}$) là:",
  "options": [
    "A. $x(x + 1) = 156$",
    "B. $x(x + 2) = 156$",
    "C. $x^2 + 156 = 0$",
    "D. $2x + 1 = 156$"
  ],
  "correct": 0,
  "explanation": "Hai số tự nhiên liên tiếp là $x$ và $x + 1$. Tích của chúng là $x(x + 1) = 156$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nghiệm dương của phương trình $x(x + 1) = 156$ là:",
  "options": [
    "A. 11",
    "B. 12",
    "C. 13",
    "D. 14"
  ],
  "correct": 1,
  "explanation": "$x^2 + x - 156 = 0 \\iff (x - 12)(x + 13) = 0$. Vì $x$ dương nên $x = 12$ ($12 \\times 13 = 156$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một mảnh vườn hình chữ nhật có chu vi $50\\text{ m}$ và diện tích $150\\text{ m}^2$. Chiều dài và chiều rộng của mảnh vườn lần lượt là:",
  "options": [
    "A. $20\\text{ m}$ và $5\\text{ m}$",
    "B. $15\\text{ m}$ và $10\\text{ m}$",
    "C. $30\\text{ m}$ và $5\\text{ m}$",
    "D. $25\\text{ m}$ và $6\\text{ m}$"
  ],
  "correct": 1,
  "explanation": "Nửa chu vi $S = 25\\text{ m}$, diện tích $P = 150\\text{ m}^2$. Hai kích thước là nghiệm của $X^2 - 25X + 150 = 0 \\iff (X - 15)(X - 10) = 0 \\implies 15\\text{ m}$ và $10\\text{ m}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một xưởng theo kế hoạch may 300 áo. Nhờ cải tiến kỹ thuật, mỗi ngày may thêm 5 áo nên hoàn thành sớm 2 ngày. Gọi số áo may mỗi ngày theo kế hoạch là $x$ ($x > 0$), phương trình là:",
  "options": [
    "A. $\\frac{300}{x} - \\frac{300}{x + 5} = 2$",
    "B. $\\frac{300}{x + 5} - \\frac{300}{x} = 2$",
    "C. $\\frac{300}{x} + \\frac{300}{x + 5} = 2$",
    "D. $300x - 300(x + 5) = 2$"
  ],
  "correct": 0,
  "explanation": "Thời gian theo kế hoạch là $\\frac{300}{x}$, thời gian thực tế là $\\frac{300}{x + 5}$. Vì hoàn thành sớm 2 ngày nên thời gian kế hoạch nhiều hơn thực tế: $\\frac{300}{x} - \\frac{300}{x + 5} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giá một chiếc máy tính sau hai lần giảm giá cùng một tỉ lệ phần trăm $x$ (tính từ giá ban đầu $A$) là:",
  "options": [
    "A. $A(1 - 2x)$",
    "B. $A(1 - x)^2$",
    "C. $A(1 + x)^2$",
    "D. $A(1 - x^2)$"
  ],
  "correct": 1,
  "explanation": "Sau lần giảm thứ nhất giá là $A(1 - x)$. Sau lần giảm thứ hai giá là $A(1 - x)(1 - x) = A(1 - x)^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tam giác vuông có cạnh huyền $10\\text{ cm}$ và hai cạnh góc vuông hơn kém nhau $2\\text{ cm}$. Độ dài cạnh góc vuông lớn là:",
  "options": [
    "A. 6 cm",
    "B. 8 cm",
    "C. 7 cm",
    "D. 9 cm"
  ],
  "correct": 1,
  "explanation": "Gọi cạnh nhỏ là $x \\implies x^2 + (x + 2)^2 = 10^2 \\iff 2x^2 + 4x - 96 = 0 \\iff x^2 + 2x - 48 = 0 \\iff (x - 6)(x + 8) = 0 \\implies x = 6\\text{ cm}$. Cạnh lớn là $6 + 2 = 8\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Bước nào sau đây KHÔNG thuộc quy trình giải bài toán bằng cách lập phương trình?",
  "options": [
    "A. Đặt ẩn số và điều kiện cho ẩn",
    "B. Lập phương trình biểu thị mối liên hệ",
    "C. Vẽ đồ thị hàm số trong hệ trục tọa độ",
    "D. Đối chiếu điều kiện và kết luận"
  ],
  "correct": 2,
  "explanation": "Vẽ đồ thị không phải là bước bắt buộc trong quy trình 3 bước giải bài toán bằng cách lập phương trình."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Phân bổ Đội Xe Cứu Trợ Thiên Tai
Một đội xe tình nguyện dự định điều động một số xe tải cùng loại để vận chuyển $60\text{ tấn}$ hàng cứu trợ đồng bào lũ lụt miền Trung.
Khi chuẩn bị khởi hành, do có $2\text{ xe}$ phải điều gấp đi nhiệm vụ khẩn cấp khác, nên mỗi xe còn lại phải chở thêm $1\text{ tấn}$ hàng so với dự định ban đầu để chở hết số hàng.
Hỏi ban đầu đội xe dự định điều động bao nhiêu xe tải?

> [!TIP]
> **Hướng dẫn giải thử thách:**
> - Gọi số xe tải dự định ban đầu là $x$ (xe, điều kiện: $x \in \mathbb{N}^*, x > 2$).
> - Theo dự định, mỗi xe phải chở:
>   $$\frac{60}{x}\text{ (tấn)}$$
> - Thực tế, số xe tham gia chở hàng là: $x - 2$ (xe).
>   Mỗi xe thực tế phải chở:
>   $$\frac{60}{x - 2}\text{ (tấn)}$$
> - Vì mỗi xe phải chở thêm $1\text{ tấn}$ so với dự định, ta có phương trình:
>   $$\frac{60}{x - 2} - \frac{60}{x} = 1$$
> 
> *Giải phương trình:*
> Quy đồng mẫu thức chung $x(x - 2)$ và khử mẫu:
> $$60x - 60(x - 2) = x(x - 2)$$
> $$\iff 60x - 60x + 120 = x^2 - 2x \iff x^2 - 2x - 120 = 0$$
> Nhận thấy phương trình có dạng: $(x - 12)(x + 10) = 0$.
> Nghiệm của phương trình:
> $$x_1 = 12 \quad (\text{thỏa mãn } x \in \mathbb{N}^*, x > 2)$$
> $$x_2 = -10 \quad (\text{loại})$$
> Vậy ban đầu đội dự định điều động đúng **12 xe tải**.

---

### Bài tập Tự luyện

**Bài 1 (Toán chuyển động):** Một người đi xe máy từ Hải Phòng về Hà Nội cách nhau $100\text{ km}$. Khi về người đó đi với vận tốc lớn hơn vận tốc lúc đi là $10\text{ km/h}$, do đó thời gian về ít hơn thời gian đi là $30\text{ phút}$. Tính vận tốc lúc đi của xe máy.

**Bài 2 (Toán năng suất):** Hai vòi nước cùng chảy vào một bể cạn thì sau $4\text{ giờ } 48\text{ phút}$ đầy bể. Nếu mở vòi thứ nhất chảy trong $3\text{ giờ}$ và vòi thứ hai chảy trong $4\text{ giờ}$ thì được $\frac{7}{10}$ bể. Hỏi nếu chảy một mình thì mỗi vòi chảy bao lâu mới đầy bể?

**Bài 3 (Toán hình học):** Một mảnh đất hình chữ nhật có diện tích $360\text{ m}^2$. Nếu giảm chiều rộng đi $2\text{ m}$ và tăng chiều dài thêm $3\text{ m}$ thì diện tích mảnh đất giảm đi $18\text{ m}^2$. Hãy tính chiều dài và chiều rộng ban đầu của mảnh đất.
