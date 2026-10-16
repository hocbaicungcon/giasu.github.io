---
title: 'Toán 9 Bài 3: Giải bài toán bằng cách lập hệ phương trình'
description: 'Làm chủ phương pháp Giải bài toán bằng cách lập hệ phương trình Toán 9 Bài 3: Quy trình 3 bước chuẩn mực, bài toán chuyển động, bài toán làm chung làm riêng, quan hệ chữ số, pha trộn dung dịch, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Giải bài toán bằng cách lập hệ phương trình
  - Toán chuyển động
  - Toán năng suất
  - Pha trộn dung dịch
  - Kết nối tri thức
grade: 9
---

# Bài 3. Giải bài toán bằng cách lập hệ phương trình

Trong toàn bộ đề thi tuyển sinh vào Lớp 10 THPT trên cả nước, **Giải bài toán bằng cách lập hệ phương trình** (hoặc lập phương trình) luôn chiếm vị trí trang trọng với $1.5$ đến $2.0$ điểm — là câu hỏi phân loại cốt lõi kiểm tra năng lực tư duy mô hình hóa toán học của học sinh.

Khác với lớp 8 khi chúng ta chỉ được chọn một ẩn số duy nhất (buộc phải biểu diễn đại lượng thứ hai qua những biểu thức phân số cồng kềnh), ở lớp 9, chúng ta được trang bị "vũ khí kép": **chọn đồng thời hai ẩn số $x$ và $y$**!

Việc sử dụng hai ẩn số giúp các mối quan hệ thực tế được phản ánh tự nhiên, mạch lạc và tránh tối đa sai sót tính toán. Bài học này sẽ cung cấp cho các em bộ cẩm nang phương pháp xử lý bách chiến bách thắng mọi thể loại bài toán thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 3: GIẢI BÀI TOÁN BẰNG CÁCH LẬP HỆ PHƯƠNG TRÌNH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quy trình 3 bước chuẩn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>B1:</strong> Chọn 2 ẩn $x, y$, đặt đơn vị và điều kiện.<br>• Biểu diễn đại lượng chưa biết theo $x, y$.<br>• Lập 2 phương trình độc lập.<br>• <strong>B2:</strong> Giải hệ phương trình.<br>• <strong>B3:</strong> Đối chiếu điều kiện và kết luận.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Toán chuyển động</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Công thức: $s = v \cdot t$.<br>• Ngược chiều gặp nhau: $s_1 + s_2 = s_{\text{tong}}$.<br>• Ca nô dòng nước:<br>$v_{\text{xuôi}} = v_{\text{thực}} + v_{\text{nước}}$<br>$v_{\text{ngược}} = v_{\text{thực}} - v_{\text{nước}}$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Làm chung – Làm riêng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quy ước toàn bộ công việc là $1$ (hoặc bể nước đầy là $1$).<br>• Năng suất 1 ngày/giờ: $\frac{1}{x}$ và $\frac{1}{y}$.<br>• Cùng làm trong $T$ giờ:<br>$$T \cdot \left(\frac{1}{x} + \frac{1}{y}\right) = 1$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kinh tế & Pha trộn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chữ số: $\overline{ab} = 10a + b$.<br>• Vượt mức kế hoạch: $x(1 + r\%)$.<br>• Nồng độ dung dịch: $m_{\text{ct}} = m_{\text{dd}} \cdot C\%$.<br>• Tổng chất tan được bảo toàn!</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Điều kiện của ẩn:** Một bài toán hỏi số học sinh nam $x$ và nữ $y$ của một lớp. Điều kiện của $x$ và $y$ là gì?
2. **Ca nô xuôi ngược:** Vận tốc thực của ca nô là $x\text{ km/h}$, vận tốc dòng nước là $y\text{ km/h}$ ($x > y > 0$). Biểu diễn vận tốc xuôi dòng và vận tốc ngược dòng của ca nô.
3. **Năng suất 1 ngày:** Người thứ nhất làm một mình xong công việc trong $x$ ngày ($x > 0$). Trong 1 ngày, người đó hoàn thành được bao nhiêu phần công việc?
4. **Cấu tạo số:** Một số có hai chữ số gồm chữ số hàng chục là $x$ và chữ số hàng đơn vị là $y$. Khi viết xen chữ số 0 vào giữa hai chữ số đó thì số mới có giá trị bằng bao nhiêu?
5. **Tăng năng suất:** Theo kế hoạch tổ sản xuất phải dệt $x$ tấm thảm. Thực tế tổ đã dệt vượt mức $15\%$. Số thảm thực tế tổ đã dệt được biểu diễn như thế nào?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. $x, y \in \mathbb{N}^*$ (số nguyên dương) và $x, y < \text{tổng số học sinh}$.
> 2. Vận tốc xuôi dòng là $x + y\text{ (km/h)}$, vận tốc ngược dòng là $x - y\text{ (km/h)}$.
> 3. Trong 1 ngày, người đó hoàn thành $\frac{1}{x}$ (công việc).
> 4. Số ban đầu là $\overline{xy} = 10x + y$. Khi xen chữ số 0 vào giữa, số mới là $\overline{x0y} = 100x + y$.
> 5. Thực tế vượt mức $15\%$, số thảm dệt được là $x + 15\%x = 1.15x$ (tấm thảm).

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### Quy trình 3 bước chuẩn mực giải bài toán bằng cách lập hệ phương trình

> [!IMPORTANT]
> **QUY TRÌNH 3 BƯỚC BẮT BUỘC:**
> 
> **Bước 1: Lập hệ phương trình:**
> - Chọn hai ẩn số $x$ và $y$ (chỉ rõ hai ẩn đại diện cho đại lượng gì, kèm theo **đơn vị đo** và **điều kiện thích hợp** của ẩn).
> - Biểu diễn các đại lượng chưa biết khác theo hai ẩn $x, y$ và các số liệu đã biết trong đề bài.
> - Dựa vào hai mối quan hệ độc lập trong đề bài để lập ra **hai phương trình bậc nhất hai ẩn**, từ đó ghép thành hệ phương trình.
> 
> **Bước 2: Giải hệ phương trình:**
> - Tùy cấu trúc hệ số của hệ, lựa chọn **phương pháp thế** hoặc **phương pháp cộng đại số** thích hợp nhất để tìm nghiệm $(x; y)$.
> 
> **Bước 3: Đối chiếu điều kiện và Kết luận:**
> - So sánh các giá trị $x, y$ vừa tìm được với điều kiện đặt ra ở Bước 1.
> - Chọn nghiệm thỏa mãn và viết câu trả lời kết luận kèm đúng đơn vị theo yêu cầu của đề bài.

---

### Bảng tóm tắt công thức các dạng toán kinh điển

| Thể loại bài toán | Công thức cốt lõi | Mối liên hệ lập phương trình thường gặp |
| :--- | :--- | :--- |
| **1. Toán chuyển động** | $s = v \cdot t$<br>$t = \frac{s}{v};\ v = \frac{s}{t}$ | • Hai xe ngược chiều gặp nhau: $s_1 + s_2 = s_{\text{AB}}$.<br>• Hai xe cùng chiều đuổi kịp: $s_1 - s_2 = s_{\text{khoảng cách}}$.<br>• Ca nô: $v_{\text{xuôi}} - v_{\text{ngược}} = 2 v_{\text{nước}}$. |
| **2. Làm chung – Làm riêng** | $\text{Khối lượng} = \text{Năng suất} \times \text{Thời gian}$<br>Quy ước toàn bộ công việc $= 1$ | • 1 giờ làm chung: $\frac{1}{x} + \frac{1}{y} = \frac{1}{T_{\text{chung}}}$.<br>• Làm riêng từng phần: $t_1 \cdot \frac{1}{x} + t_2 \cdot \frac{1}{y} = 1$ (hoặc phần việc xong). |
| **3. Quan hệ số học** | Số có hai chữ số:<br>$\overline{ab} = 10a + b$ ($a, b \in \mathbb{N}, 1 \le a \le 9, 0 \le b \le 9$) | • Đổi chỗ 2 chữ số: $\overline{ba} = 10b + a$.<br>• Thêm chữ số $c$ vào bên phải: $\overline{abc} = 100a + 10b + c$. |
| **4. Hình học phẳng** | Hình chữ nhật kích thước $x, y$:<br>Chu vi $C = 2(x + y) \implies x + y = \frac{C}{2}$<br>Diện tích $S = x \cdot y$ | • Tăng giảm kích thước: $(x + a)(y - b) = S_{\text{mới}}$.<br>• Tam giác vuông: $x^2 + y^2 = c^2$ (Pythagore). |
| **5. Phần trăm kinh tế & Pha trộn** | Khối lượng chất tan: $m_{\text{ct}} = m_{\text{dd}} \cdot C\%$<br>Giá trị sau tăng: $x \cdot (1 + r\%)$ | • Tổng lượng chất tan trước pha trộn $=$ tổng lượng chất tan sau pha trộn: $m_1 C_1\% + m_2 C_2\% = (m_1 + m_2) C_{\text{mới}}\%$. |

---

## Ứng dụng Tương tác Trực quan

### Mô phỏng Chuyển động Ca nô Xuôi dòng & Ngược dòng sông

Điều chỉnh vận tốc thực của ca nô ($v_{\text{canô}}$) và vận tốc dòng nước ($v_{\text{nước}}$) cùng khoảng cách giữa hai bến $AB$. Quan sát trực quan sự chênh lệch thời gian xuôi dòng và ngược dòng và hệ phương trình được thiết lập tự động:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: BÀI TOÁN CA NÔ DÒNG NƯỚC</h4>

  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px; margin: 0 auto 16px auto;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <label for="cano-v" style="font-weight: bold; min-width: 170px; font-size: 0.95em;">Vận tốc thực ca nô x (km/h):</label>
      <input type="range" id="cano-v" min="15" max="40" step="1" value="25" style="flex: 1;" oninput="updateCanoSimulation()">
      <span id="cano-v-val" style="font-weight: bold; color: #2563eb; width: 35px; text-align: right;">25</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <label for="water-v" style="font-weight: bold; min-width: 170px; font-size: 0.95em;">Vận tốc dòng nước y (km/h):</label>
      <input type="range" id="water-v" min="1" max="6" step="1" value="3" style="flex: 1;" oninput="updateCanoSimulation()">
      <span id="water-v-val" style="font-weight: bold; color: #ef4444; width: 35px; text-align: right;">3</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <label for="dist-s" style="font-weight: bold; min-width: 170px; font-size: 0.95em;">Khoảng cách AB (km):</label>
      <input type="range" id="dist-s" min="40" max="120" step="5" value="84" style="flex: 1;" oninput="updateCanoSimulation()">
      <span id="dist-s-val" style="font-weight: bold; color: #10b981; width: 35px; text-align: right;">84</span>
    </div>
  </div>

  <div style="text-align: center; margin: 16px 0;">
    <svg id="cano-svg" viewBox="0 0 520 160" style="width: 100%; max-width: 520px; height: auto; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
      <!-- Dòng sông -->
      <rect x="20" y="30" width="480" height="100" fill="#e0f2fe" rx="6" />
      
      <!-- Bến A và Bến B -->
      <rect x="20" y="30" width="25" height="100" fill="#94a3b8" />
      <text x="24" y="85" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ffffff">A</text>
      <rect x="475" y="30" width="25" height="100" fill="#94a3b8" />
      <text x="480" y="85" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ffffff">B</text>

      <!-- Mũi tên dòng nước -->
      <line x1="180" y1="45" x2="340" y2="45" stroke="#3b82f6" stroke-width="2.5" />
      <polygon points="340,40 350,45 340,50" fill="#3b82f6" />
      <text id="water-arrow-txt" x="220" y="42" font-family="sans-serif" font-size="11" fill="#1d4ed8">Dòng nước chảy: y = 3 km/h</text>

      <!-- Ca nô xuôi dòng (xanh lá) -->
      <g transform="translate(140, 60)">
        <polygon points="0,15 60,15 70,25 0,25" fill="#10b981" />
        <rect x="15" y="5" width="30" height="10" fill="#047857" rx="2" />
        <text id="txt-cano-down" x="75" y="22" font-family="sans-serif" font-weight="bold" font-size="12" fill="#047857">Xuôi: 28 km/h</text>
      </g>

      <!-- Ca nô ngược dòng (cam) -->
      <g transform="translate(300, 95)">
        <polygon points="10,25 70,25 70,15 0,15" fill="#f59e0b" />
        <rect x="25" y="5" width="30" height="10" fill="#b45309" rx="2" />
        <text id="txt-cano-up" x="-85" y="22" font-family="sans-serif" font-weight="bold" font-size="12" fill="#b45309">Ngược: 22 km/h</text>
      </g>
    </svg>
  </div>

  <div id="cano-result-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 0.95em; line-height: 1.8;">
    Đang tính toán thông số ca nô...
  </div>
</div>

<script>
function updateCanoSimulation() {
  var x = parseInt(document.getElementById('cano-v').value);
  var y = parseInt(document.getElementById('water-v').value);
  var s = parseInt(document.getElementById('dist-s').value);

  document.getElementById('cano-v-val').innerText = x;
  document.getElementById('water-v-val').innerText = y;
  document.getElementById('dist-s-val').innerText = s;

  var vDown = x + y;
  var vUp = x - y;

  var tDown = s / vDown;
  var tUp = s / vUp;

  var wTxt = document.getElementById('water-arrow-txt');
  if (wTxt) wTxt.textContent = "Dòng nước chảy: y = " + y + " km/h";

  var cDown = document.getElementById('txt-cano-down');
  if (cDown) cDown.textContent = "Xuôi: " + vDown + " km/h";

  var cUp = document.getElementById('txt-cano-up');
  if (cUp) cUp.textContent = "Ngược: " + vUp + " km/h";

  var resBox = document.getElementById('cano-result-box');
  if (resBox) {
    resBox.innerHTML = 
      '<strong>Phân tích hệ phương trình mô hình hóa chuyển động:</strong><br>' +
      '• Vận tốc xuôi dòng: $v_{\\text{xuôi}} = x + y = ' + x + ' + ' + y + ' = ' + vDown + '\\text{ km/h}$. Thời gian xuôi $AB$: $t_{\\text{xuôi}} = \\frac{' + s + '}{' + vDown + '} \\approx ' + tDown.toFixed(2) + '\\text{ giờ}$.<br>' +
      '• Vận tốc ngược dòng: $v_{\\text{ngược}} = x - y = ' + x + ' - ' + y + ' = ' + vUp + '\\text{ km/h}$. Thời gian ngược $BA$: $t_{\\text{ngược}} = \\frac{' + s + '}{' + vUp + '} \\approx ' + tUp.toFixed(2) + '\\text{ giờ}$.<br>' +
      '• <strong>Hệ hai phương trình đại số:</strong><br>' +
      '$$\\begin{cases} (x + y) \\cdot ' + tDown.toFixed(2) + ' = ' + s + ' \\\\ (x - y) \\cdot ' + tUp.toFixed(2) + ' = ' + s + ' \\end{cases} \\implies \\begin{cases} x = ' + x + '\\text{ km/h} \\\\ y = ' + y + '\\text{ km/h} \\end{cases}$$';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  updateCanoSimulation();
});
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Bài toán chuyển động (Ca nô, ô tô, xe máy)

**Phương pháp giải:**
1. Lập bảng phân tích 3 cột: Vận tốc ($v$), Thời gian ($t$), Quãng đường ($s$).
2. Thiết lập 2 phương trình dựa trên quãng đường bằng nhau hoặc chênh lệch thời gian.

---

#### Bài toán 1:
Một ca nô chạy xuôi dòng một khúc sông từ bến $A$ đến bến $B$ hết $3\text{ giờ}$ và chạy ngược dòng khúc sông đó từ bến $B$ về bến $A$ hết $4\text{ giờ}$. Biết vận tốc dòng nước chảy là $3\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng và khoảng cách giữa hai bến $A$ và $B$.

**Lời giải:**

Gọi vận tốc thực của ca nô là $x\text{ (km/h)}$ và độ dài khúc sông $AB$ là $y\text{ (km)}$.
Điều kiện: $x > 3$ và $y > 0$.

- Vận tốc của ca nô khi xuôi dòng là: $x + 3\text{ (km/h)}$.
  Quãng đường ca nô xuôi dòng trong $3\text{ giờ}$ là: $3(x + 3)\text{ (km)}$.
  Vì quãng đường xuôi dòng chính là khúc sông $AB$ nên ta có phương trình:
  $$3(x + 3) = y \iff 3x - y = -9 \quad (1)$$

- Vận tốc của ca nô khi ngược dòng là: $x - 3\text{ (km/h)}$.
  Quãng đường ca nô ngược dòng trong $4\text{ giờ}$ là: $4(x - 3)\text{ (km)}$.
  Vì quãng đường ngược dòng cũng là khúc sông $AB$ nên ta có phương trình:
  $$4(x - 3) = y \iff 4x - y = 12 \quad (2)$$

Từ $(1)$ và $(2)$, ta có hệ phương trình:
$$\begin{cases} 3x - y = -9 \\ 4x - y = 12 \end{cases}$$

Lấy phương trình $(2)$ trừ phương trình $(1)$ theo từng vế:
$$(4x - 3x) + (-y - (-y)) = 12 - (-9) \implies x = 21$$
Thay $x = 21$ vào $(1)$:
$$y = 3(21 + 3) = 3 \cdot 24 = 72$$

Cả hai giá trị $x = 21$ và $y = 72$ đều thỏa mãn điều kiện bài toán.
Vậy vận tốc thực của ca nô là $21\text{ km/h}$ và khoảng cách giữa hai bến $A, B$ là $72\text{ km}$.

---

### Dạng 2: Bài toán năng suất làm chung – làm riêng (Vòi nước chảy vào bể)

**Phương pháp giải:**
1. Quy ước toàn bộ công việc (hoặc bể nước đầy) là $1$.
2. Gọi thời gian làm riêng hoàn thành công việc là $x$ và $y$ ($x, y > T_{\text{chung}}$).
3. Năng suất trong một đơn vị thời gian là $\frac{1}{x}$ và $\frac{1}{y}$.

---

#### Bài toán 2:
Hai vòi nước cùng chảy vào một bể cạn không có nước thì sau $4\text{ giờ } 48\text{ phút}$ sẽ đầy bể. Nếu mở vòi thứ nhất chảy một mình trong $3\text{ giờ}$ rồi khóa lại, sau đó mở vòi thứ hai chảy tiếp trong $4\text{ giờ}$ thì cả hai vòi chảy được $\frac{7}{10}$ bể. Hỏi nếu chảy riêng một mình thì mỗi vòi mất bao lâu mới đầy bể?

**Lời giải:**

Đổi: $4\text{ giờ } 48\text{ phút} = 4 + \frac{48}{60} = \frac{24}{5}\text{ giờ}$.

Gọi thời gian vòi thứ nhất chảy một mình đầy bể là $x\text{ (giờ)}$.
Gọi thời gian vòi thứ hai chảy một mình đầy bể là $y\text{ (giờ)}$.
Điều kiện: $x, y > \frac{24}{5}$.

- Trong $1\text{ giờ}$:
  + Vòi 1 chảy được: $\frac{1}{x}$ (bể).
  + Vòi 2 chảy được: $\frac{1}{y}$ (bể).
  + Cả hai vòi cùng chảy được: $1 : \frac{24}{5} = \frac{5}{24}$ (bể).
  Ta có phương trình thứ nhất:
  $$\frac{1}{x} + \frac{1}{y} = \frac{5}{24} \quad (1)$$

- Trong $3\text{ giờ}$, vòi 1 chảy được: $\frac{3}{x}$ (bể).
  Trong $4\text{ giờ}$, vòi 2 chảy được: $\frac{4}{y}$ (bể).
  Theo đề bài, lượng nước chảy được bằng $\frac{7}{10}$ bể nên ta có phương trình:
  $$\frac{3}{x} + \frac{4}{y} = \frac{7}{10} \quad (2)$$

Từ $(1)$ và $(2)$, ta có hệ phương trình:
$$\begin{cases} \frac{1}{x} + \frac{1}{y} = \frac{5}{24} \\ \frac{3}{x} + \frac{4}{y} = \frac{7}{10} \end{cases}$$

Đặt $u = \frac{1}{x}$ và $v = \frac{1}{y}$ ($u, v > 0$), hệ trở thành:
$$\begin{cases} u + v = \frac{5}{24} \quad (3) \\ 3u + 4v = \frac{7}{10} \quad (4) \end{cases}$$
Nhân phương trình $(3)$ với $3$:
$$\begin{cases} 3u + 3v = \frac{15}{24} = \frac{5}{8} \\ 3u + 4v = \frac{7}{10} \end{cases}$$
Lấy phương trình dưới trừ phương trình trên:
$$v = \frac{7}{10} - \frac{5}{8} = \frac{28 - 25}{40} = \frac{3}{40}$$
Thay $v = \frac{3}{40}$ vào $(3)$:
$$u = \frac{5}{24} - \frac{3}{40} = \frac{25 - 9}{120} = \frac{16}{120} = \frac{2}{15}$$
Suy ra:
$$\begin{cases} \frac{1}{x} = \frac{2}{15} \implies x = \frac{15}{2} = 7.5\text{ (thỏa mãn)} \\ \frac{1}{y} = \frac{3}{40} \implies y = \frac{40}{3} = 13\frac{1}{3}\text{ (thỏa mãn)} \end{cases}$$

Đổi: $7.5\text{ giờ} = 7\text{ giờ } 30\text{ phút}$; $\frac{40}{3}\text{ giờ} = 13\text{ giờ } 20\text{ phút}$.
Vậy vòi 1 chảy một mình trong $7\text{ giờ } 30\text{ phút}$ thì đầy bể; vòi 2 chảy một mình trong $13\text{ giờ } 20\text{ phút}$ thì đầy bể.

---

### Dạng 3: Bài toán cấu tạo số và quan hệ chữ số

**Phương pháp giải:**
Số tự nhiên có hai chữ số: $\overline{xy} = 10x + y$ với $x, y \in \mathbb{N}, 1 \le x \le 9, 0 \le y \le 9$.

---

#### Bài toán 3:
Tìm một số tự nhiên có hai chữ số, biết rằng hai lần chữ số hàng chục lớn hơn ba lần chữ số hàng đơn vị là $1$. Nếu đổi chỗ hai chữ số cho nhau thì ta thu được một số mới nhỏ hơn số ban đầu là $27$ đơn vị.

**Lời giải:**

Gọi chữ số hàng chục của số cần tìm là $x$, chữ số hàng đơn vị là $y$.
Điều kiện: $x, y \in \mathbb{N}$ và $1 \le x \le 9;\ 0 \le y \le 9$.

- Số ban đầu là: $\overline{xy} = 10x + y$.
  Theo đề bài, hai lần chữ số hàng chục lớn hơn ba lần chữ số hàng đơn vị là $1$:
  $$2x - 3y = 1 \quad (1)$$

- Khi đổi chỗ hai chữ số, ta được số mới là: $\overline{yx} = 10y + x$.
  Số mới nhỏ hơn số ban đầu là $27$ đơn vị nên ta có phương trình:
  $$(10x + y) - (10y + x) = 27$$
  $$9x - 9y = 27 \iff x - y = 3 \quad (2)$$

Từ $(1)$ và $(2)$ ta có hệ phương trình:
$$\begin{cases} 2x - 3y = 1 \\ x - y = 3 \end{cases}$$
Từ $(2) \implies x = y + 3$. Thế vào $(1)$:
$$2(y + 3) - 3y = 1 \iff 2y + 6 - 3y = 1 \iff -y = -5 \implies y = 5$$
Suy ra:
$$x = 5 + 3 = 8$$
Cả $x = 8$ và $y = 5$ đều thỏa mãn điều kiện đề bài.
Vậy số tự nhiên cần tìm là **$85$**.

---

### Dạng 4: Bài toán phần trăm kinh tế và pha trộn nồng độ dung dịch

**Phương pháp giải:**
1. Khối lượng chất tan ban đầu cộng lại bằng khối lượng chất tan trong dung dịch mới.
2. Thiết lập 2 phương trình: tổng khối lượng dung dịch và tổng khối lượng chất tan.

---

#### Bài toán 4:
Trong phòng thí nghiệm hóa học, một bạn học sinh cần pha chế $500\text{ gam}$ dung dịch muối nồng độ $12\%$ từ hai loại dung dịch muối có sẵn: dung dịch muối $A$ nồng độ $8\%$ và dung dịch muối $B$ nồng độ $18\%$. Hỏi bạn học sinh đó cần phải lấy bao nhiêu gam mỗi loại dung dịch $A$ và $B$?

**Lời giải:**

Gọi khối lượng dung dịch muối $A$ cần lấy là $x\text{ (gam)}$, khối lượng dung dịch muối $B$ cần lấy là $y\text{ (gam)}$.
Điều kiện: $0 < x, y < 500$.

- Vì tổng khối lượng dung dịch mới thu được là $500\text{ gam}$ nên ta có phương trình:
  $$x + y = 500 \quad (1)$$

- Lượng muối nguyên chất có trong từng dung dịch:
  + Trong dung dịch $A$ nồng độ $8\%$: $8\% \cdot x = 0.08x\text{ (gam)}$.
  + Trong dung dịch $B$ nồng độ $18\%$: $18\% \cdot y = 0.18y\text{ (gam)}$.
  + Trong $500\text{ gam}$ dung dịch mới nồng độ $12\%$: $12\% \cdot 500 = 60\text{ (gam)}$.
  Ta có phương trình bảo toàn khối lượng chất tan:
  $$0.08x + 0.18y = 60 \iff 8x + 18y = 6000 \iff 4x + 9y = 3000 \quad (2)$$

Từ $(1)$ và $(2)$ ta có hệ phương trình:
$$\begin{cases} x + y = 500 \quad (1) \\ 4x + 9y = 3000 \quad (2) \end{cases}$$
Từ $(1) \implies x = 500 - y$. Thế vào $(2)$:
$$4(500 - y) + 9y = 3000 \iff 2000 - 4y + 9y = 3000 \iff 5y = 1000 \implies y = 200$$
Suy ra:
$$x = 500 - 200 = 300$$
Cả $x = 300$ và $y = 200$ đều thỏa mãn điều kiện $0 < x, y < 500$.
Vậy bạn học sinh cần lấy $300\text{ gam}$ dung dịch muối $A$ và $200\text{ gam}$ dung dịch muối $B$.

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Phối trộn Hợp kim Titanium trong Công nghiệp Hàng không Vũ trụ
Khi sản xuất vỏ tàu vũ trụ SpaceX Dragon hay thân máy bay Boeing 787:
- Các kỹ sư phải nấu chảy và phối trộn hai thỏi hợp kim titan với nồng độ nhôm và vanadi khác nhau để đạt chuẩn độ bền kéo $950\text{ MPa}$.
- Việc lập hệ phương trình bậc nhất hai ẩn đảm bảo chính xác tỷ lệ khối lượng từng mẻ nấu lò hồ quang chân không.

### 2. Thuật toán Lập kế hoạch Sản xuất Chuỗi cung ứng (Supply Chain)
Các nhà máy lắp ráp điện thoại Samsung hay VinFast:
- Có hai dây chuyền sản xuất $A$ và $B$ với công suất linh kiện và thời gian kiểm thử khác nhau.
- Người quản lý lập hệ hai phương trình bậc nhất hai ẩn về tổng số giờ máy và tổng lượng linh kiện để phân bổ lịch làm việc ca ngày - ca đêm tối ưu nhất.

### 3. Dược học: Tính liều lượng phối hợp Kháng sinh Điều trị
Trong các ca nhiễm khuẩn nặng tại phòng hồi sức cấp cứu ICU:
- Bác sĩ cần phối hợp hai loại kháng sinh để tăng hiệu quả diệt khuẩn mà không gây suy thận cho người bệnh.
- Hệ phương trình nồng độ thẩm thấu dược chất trong máu theo thời gian bán thải $T_{1/2}$ giúp y tá truyền đúng tốc độ giọt dung dịch qua máy tiêm điện tử.

### 4. Quản lý Hồ thủy điện Đa mục tiêu mùa Mưa lũ
Hồ thủy điện Hòa Bình và Sơn La trên sông Đà:
- Có lưu lượng nước đổ về hồ và hai cửa xả đáy, xả mặt.
- Việc lập hệ phương trình cân bằng dung tích hồ chứa nước giúp ban chỉ huy phòng chống thiên tai tính toán đóng mở van xả chuẩn xác, vừa phát tối đa công suất điện lưới quốc gia, vừa bảo đảm tuyệt đối an toàn đê điều cho đồng bằng Bắc Bộ.

### 5. Công nghệ Trộn Màu Mực In Offset & Màn hình RGB / CMYK
Để in màu chính xác trên bao bì sản phẩm:
- Máy in công nghiệp tự động hòa trộn các đầu phun mực gốc Cyan, Magenta, Yellow.
- Mỗi sắc thái màu sắc được giải mã thành một hệ phương trình tuyến tính hai ẩn về mật độ hạt mực, đảm bảo hàng triệu cuốn sách in ra có màu sắc chuẩn y như bản vẽ thiết kế trên máy tính.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Bước đầu tiên bắt buộc phải thực hiện khi giải bài toán bằng cách lập hệ phương trình là:",
  "options": [
    "Giải hệ phương trình",
    "Chọn ẩn, đặt đơn vị và điều kiện thích hợp cho ẩn",
    "Đối chiếu điều kiện và kết luận",
    "Nhân chéo các phương trình"
  ],
  "answer": 1,
  "explanation": "Quy trình chuẩn: Bước 1 luôn là chọn hai ẩn số, xác định đơn vị đo và đặt điều kiện thích hợp cho ẩn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hai người cùng làm một công việc thì sau 12 ngày xong. Nếu gọi x, y là số ngày người thứ nhất và người thứ hai làm một mình xong công việc thì phương trình lập được là:",
  "options": [
    "x + y = 12",
    "1/x + 1/y = 12",
    "1/x + 1/y = 1/12",
    "12x + 12y = 1"
  ],
  "answer": 2,
  "explanation": "Trong 1 ngày mỗi người làm được 1/x và 1/y công việc. Cả hai cùng làm 1 ngày được 1/12 công việc ⇒ 1/x + 1/y = 1/12."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một ca nô xuôi dòng với vận tốc (x + 2) km/h và ngược dòng với vận tốc (x - 2) km/h. Vận tốc dòng nước chảy là:",
  "options": [
    "1 km/h",
    "2 km/h",
    "4 km/h",
    "x km/h"
  ],
  "answer": 1,
  "explanation": "Vận tốc dòng nước bằng nửa hiệu của vận tốc xuôi và ngược: [(x + 2) - (x - 2)] / 2 = 4 / 2 = 2 km/h."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một mảnh đất hình chữ nhật có chu vi bằng 40 m. Nếu gọi chiều dài là x (m) và chiều rộng là y (m) thì phương trình biểu thị là:",
  "options": [
    "x + y = 40",
    "x + y = 20",
    "x · y = 40",
    "2x + y = 40"
  ],
  "answer": 1,
  "explanation": "Nửa chu vi hình chữ nhật bằng chu vi chia đôi: x + y = 40 / 2 = 20."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Số tự nhiên có hai chữ số gồm chữ số hàng chục x và hàng đơn vị y được biểu diễn đại số là:",
  "options": [
    "x + y",
    "10x + y",
    "10y + x",
    "x · y"
  ],
  "answer": 1,
  "explanation": "Giá trị của số có hai chữ số là 10x + y (x là chữ số hàng chục, y là chữ số hàng đơn vị)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một trang trại nuôi gà và lợn đếm được tất cả 36 con và 100 chân. Nếu gọi x là số gà, y là số lợn thì hệ phương trình lập được là:",
  "options": [
    "Hệ { x + y = 36 ; 2x + 4y = 100 }",
    "Hệ { x + y = 36 ; 4x + 2y = 100 }",
    "Hệ { x + y = 100 ; 2x + 4y = 36 }",
    "Hệ { 2x + y = 36 ; x + 4y = 100 }"
  ],
  "answer": 0,
  "explanation": "Tổng số con: x + y = 36. Gà có 2 chân, lợn có 4 chân nên tổng số chân là 2x + 4y = 100."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Giải bài toán ở Câu 6, số con gà và số con lợn của trang trại lần lượt là:",
  "options": [
    "20 gà, 16 lợn",
    "22 gà, 14 lợn",
    "24 gà, 12 lợn",
    "18 gà, 18 lợn"
  ],
  "answer": 1,
  "explanation": "Từ x + y = 36 ⇒ 2x + 2y = 72. Trừ với 2x + 4y = 100 ⇒ 2y = 28 ⇒ y = 14 (lợn). Số gà x = 36 - 14 = 22 (gà)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Hai xe ô tô khởi hành cùng một lúc từ hai địa điểm A và B cách nhau 180 km đi ngược chiều nhau và gặp nhau sau 2 giờ. Tổng vận tốc của hai xe là:",
  "options": [
    "60 km/h",
    "90 km/h",
    "180 km/h",
    "45 km/h"
  ],
  "answer": 1,
  "explanation": "Hai xe chuyển động ngược chiều gặp nhau: s = (v1 + v2) · t ⇒ 180 = (v1 + v2) · 2 ⇒ v1 + v2 = 90 km/h."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một cửa hàng bán hai loại áo với tổng số 50 chiếc thu được 12 triệu đồng. Áo loại A giá 200 nghìn, áo loại B giá 300 nghìn. Số áo loại B đã bán là:",
  "options": [
    "20 chiếc",
    "30 chiếc",
    "25 chiếc",
    "15 chiếc"
  ],
  "answer": 0,
  "explanation": "Hệ: { x + y = 50 ; 200x + 300y = 12000 } ⇒ { 2x + 2y = 100 ; 2x + 3y = 120 } ⇒ y = 20 chiếc (áo loại B)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khối lượng muối nguyên chất có trong 200 gam dung dịch nước muối nồng độ 15% là:",
  "options": [
    "15 gam",
    "30 gam",
    "20 gam",
    "45 gam"
  ],
  "answer": 1,
  "explanation": "Khối lượng chất tan m = m_dd · C% = 200 · 15% = 30 gam."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Hai giá sách có tổng cộng $450$ cuốn sách. Nếu chuyển $50$ cuốn từ giá thứ nhất sang giá thứ hai thì số sách ở giá thứ hai sẽ gấp đôi số sách còn lại ở giá thứ nhất. Tính số sách ban đầu ở mỗi giá.
2. Một mảnh vườn hình chữ nhật có chu vi $64\text{ m}$. Nếu tăng chiều rộng thêm $3\text{ m}$ và giảm chiều dài đi $2\text{ m}$ thì diện tích mảnh vườn tăng thêm $14\text{ m}^2$. Tính chiều dài và chiều rộng ban đầu của mảnh vườn.
3. Một ô tô đi từ tỉnh $A$ đến tỉnh $B$ với vận tốc xác định. Nếu vận tốc tăng thêm $10\text{ km/h}$ thì xe đến sớm hơn dự định $45\text{ phút}$. Nếu vận tốc giảm đi $10\text{ km/h}$ thì xe đến muộn hơn dự định $1\text{ giờ}$. Tính quãng đường $AB$ và thời gian dự định đi.

### Bài tập nâng cao & Vận dụng thực tế
4. **Bài toán sản xuất nông nghiệp công nghệ cao:** Hai tổ nông dân trồng hoa lan hồ điệp xuất khẩu nhận kế hoạch ươm tổng cộng $18\,000$ cây giống. Nhờ áp dụng công nghệ nhà màng tự động, tổ I làm vượt mức $15\%$, tổ II làm vượt mức $12\%$, nên cả hai tổ đã ươm được $20\,460$ cây giống. Hỏi theo kế hoạch ban đầu, mỗi tổ phải ươm bao nhiêu cây giống?
5. Để cung cấp nước sạch cho một khu dân cư nông thôn mới, hai trạm bơm cùng vận hành thì sau $12\text{ giờ}$ sẽ bơm đầy bể ngầm dự trữ. Nếu trạm I vận hành một mình trong $4\text{ giờ}$, sau đó cả hai trạm cùng vận hành thêm $6\text{ giờ}$ nữa thì bể chứa được $\frac{2}{3}$ dung tích. Hỏi nếu mỗi trạm bơm vận hành một mình thì mất bao lâu mới bơm đầy bể nước ngầm?
