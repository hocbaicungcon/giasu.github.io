---
title: 'Toán 8 Bài 26: Giải bài toán bằng cách lập phương trình'
description: 'Làm chủ kỹ năng Giải bài toán bằng cách lập phương trình Toán 8 Bài 26: 3 bước chuẩn hóa, kỹ thuật lập bảng phân tích đại lượng, các dạng toán chuyển động, năng suất, quan hệ số, phần trăm kèm 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Lập phương trình
  - Toán chuyển động
  - Toán năng suất
  - Toán thực tế
  - Kết nối tri thức
grade: 8
---

# Bài 26. Giải bài toán bằng cách lập phương trình

Trong đời sống thực tế, các bài toán hiếm khi xuất hiện dưới dạng những phương trình có sẵn như $ax + b = 0$. Thay vào đó, chúng ẩn mình dưới dạng các tình huống thực tiễn: hai chiếc ô tô xuất phát từ hai thành phố ngược chiều nhau và gặp nhau sau mấy giờ; một tổ sản xuất cần bao nhiêu ngày để may xong lô hàng cứu trợ; hay giá niêm yết của một chiếc áo khoác sau hai lần giảm giá là bao nhiêu?

Kỹ năng **Giải bài toán bằng cách lập phương trình** chính là chiếc cầu nối kỳ diệu chuyển đổi ngôn ngữ đời thường thành ngôn ngữ toán học. Bằng cách chọn một đại lượng chưa biết làm "ẩn số", ta biến những mối liên hệ phức tạp thành một phương trình toán học rõ ràng, mạch lạc và giải ra đáp số chính xác.

Đây là dạng toán trọng tâm nhất trong cấu trúc đề thi vào lớp 10, chiếm trọn $2{,}0$ điểm tự luận bắt buộc. Bài học này sẽ trang bị cho các em phương pháp lập bảng phân tích đại lượng "bất bại", giúp xử lý triệt để mọi dạng toán chuyển động, năng suất và kinh tế thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">QUY TRÌNH 3 BƯỚC GIẢI BÀI TOÁN BẰNG CÁCH LẬP PHƯƠNG TRÌNH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">Bước 1: Lập phương trình</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Chọn ẩn số:</strong> Thường chọn trực tiếp đại lượng câu hỏi yêu cầu tìm.<br>• <strong>Đặt điều kiện & đơn vị:</strong> $x > 0$, $x \in \mathbb{N}^*$, km/h, ngày...<br>• <strong>Lập bảng:</strong> Biểu diễn các đại lượng chưa biết qua ẩn.<br>• <strong>Lập phương trình:</strong> Cân bằng mối quan hệ trong đề bài.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">Bước 2: Giải phương trình</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khai triển các dấu ngoặc (nếu có).<br>• Quy đồng khử mẫu số học.<br>• Chuyển vế và thu gọn về dạng $ax = c$.<br>• Tìm giá trị của ẩn $x$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">Bước 3: Đối chiếu & Trả lời</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Đối chiếu:</strong> So sánh nghiệm vừa tìm được với điều kiện ban đầu.<br>• Loại bỏ các nghiệm vi phạm điều kiện.<br>• Viết câu trả lời đầy đủ kèm đơn vị đo.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Công thức chuyển động:** Viết công thức liên hệ giữa quãng đường $s$, vận tốc $v$ và thời gian $t$. Nếu biết $s$ và $v$, ta tìm $t$ như thế nào?
2. **Đổi đơn vị thời gian:** $45\text{ phút}$ bằng bao nhiêu giờ? $1\text{ giờ } 15\text{ phút}$ bằng bao nhiêu giờ?
3. **Bài toán năng suất:** Một người làm xong công việc trong $6$ ngày. Hỏi trong $1$ ngày, người đó làm được bao nhiêu phần công việc?
4. **Biểu diễn tỉ số:** Một mảnh vườn có chiều dài gấp $3$ lần chiều rộng. Nếu gọi chiều rộng là $x\text{ (m)}$ thì chiều dài là bao nhiêu? Chu vi là bao nhiêu?
5. **Điều kiện thực tế:** Nếu $x$ là số học sinh của một lớp học, thì điều kiện của $x$ phải là gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $s = v \cdot t \implies t = \frac{s}{v}$.
> 2. $45\text{ phút} = \frac{45}{60} = \frac{3}{4}\text{ giờ} = 0{,}75\text{ giờ}$; $1\text{ giờ } 15\text{ phút} = 1 + \frac{15}{60} = \frac{5}{4}\text{ giờ} = 1{,}25\text{ giờ}$.
> 3. Trong $1$ ngày làm được $\frac{1}{6}$ khối lượng công việc.
> 4. Chiều dài là $3x\text{ (m)}$; Chu vi là $2(x + 3x) = 8x\text{ (m)}$.
> 5. $x \in \mathbb{N}^*$ (số nguyên dương, học sinh không thể là số lẻ thập phân hay số âm).

---

## I. Lý thuyết Trọng tâm & Phương pháp Kẻ bảng Phân tích Đại lượng

### 1. Bí quyết thành công: Phương pháp Kẻ bảng Phân tích

Trong mọi bài toán đố thực tế, luôn tồn tại một hệ thức 3 đại lượng ràng buộc nhau:

| Dạng toán | Đại lượng 1 | Đại lượng 2 | Đại lượng 3 | Mối quan hệ ràng buộc |
| :--- | :---: | :---: | :---: | :---: |
| **Chuyển động** | Quãng đường $s$ | Vận tốc $v$ | Thời gian $t$ | $s = v \cdot t$ hay $t = \frac{s}{v}$ |
| **Năng suất lao động** | Tổng sản phẩm $A$ | Năng suất 1 ngày $N$ | Thời gian làm $t$ | $A = N \cdot t$ hay $N = \frac{A}{t}$ |
| **Làm chung làm riêng** | Khối lượng việc ($1$) | Năng suất 1 giờ | Thời gian xong việc | $1 = N \cdot t \implies N = \frac{1}{t}$ |
| **Mua bán kinh tế** | Tổng số tiền | Đơn giá 1 sản phẩm | Số lượng mua | $\text{Tổng tiền} = \text{Đơn giá} \times \text{Số lượng}$ |
| **Hình học chữ nhật** | Diện tích $S$ | Chiều dài | Chiều rộng | $S = \text{Dài} \times \text{Rộng}$ |

> [!TIP]
> **QUY TẮC VÀNG KHI LẬP BẢNG:**
> - Bảng thường có 3 cột tương ứng 3 đại lượng và 2 đến 3 dòng (đối tượng 1, đối tượng 2 hoặc Kế hoạch, Thực tế).
> - Điền các đại lượng đề bài đã cho trực tiếp.
> - Chọn 1 ô làm ẩn $x$ $\implies$ Điền các ô còn lại theo công thức đại số.
> - Cột cuối cùng chưa dùng đến sẽ là cơ sở để **thiết lập phương trình**!

---

## Ứng dụng Tương tác Trực quan

Dưới đây là công cụ mô phỏng bài toán chuyển động: Một ô tô và một xe máy cùng xuất phát từ bến A đến bến B. Hãy điều chỉnh vận tốc để quan sát thời gian đến đích và phương trình tương ứng:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: BÀI TOÁN CHUYỂN ĐỘNG TRÊN TUYẾN ĐƯỜNG 120 KM</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Quãng đường $AB = 120\text{ km}$. Xe máy đi với vận tốc $v$, ô tô đi nhanh hơn xe máy $20\text{ km/h}$.
  </p>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; max-width: 440px;">
      <label for="speed-slider" style="font-weight: bold; min-width: 140px;">Vận tốc xe máy $v$:</label>
      <input type="range" id="speed-slider" min="30" max="60" step="5" value="40" style="flex: 1;" oninput="updateMotionDemo(this.value)">
      <span id="speed-val" style="font-weight: bold; font-size: 1.1em; color: #2563eb; min-width: 50px;">40 km/h</span>
    </div>
  </div>
  <div id="motion-table-result" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 16px; border: 1px dashed #cbd5e1; font-size: 1.0em; line-height: 1.8;">
    Đang tải mô phỏng...
  </div>
</div>

<script>
function updateMotionDemo(val) {
  var vMotor = parseInt(val, 10);
  document.getElementById('speed-val').innerText = vMotor + ' km/h';
  var vCar = vMotor + 20;
  var tMotor = (120 / vMotor).toFixed(2);
  var tCar = (120 / vCar).toFixed(2);
  var diffHours = (120 / vMotor - 120 / vCar);
  var diffMinutes = Math.round(diffHours * 60);

  var html = '<table style="width:100%; border-collapse: collapse; text-align: center; margin-bottom: 12px;">' +
    '<tr style="background:#e2e8f0; font-weight:bold;">' +
    '  <th style="padding:6px; border:1px solid #cbd5e1;">Phương tiện</th>' +
    '  <th style="padding:6px; border:1px solid #cbd5e1;">Vận tốc (km/h)</th>' +
    '  <th style="padding:6px; border:1px solid #cbd5e1;">Quãng đường (km)</th>' +
    '  <th style="padding:6px; border:1px solid #cbd5e1;">Thời gian đi (giờ)</th>' +
    '</tr>' +
    '<tr>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold; color:#d97706;">Xe máy</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">' + vMotor + '</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">120</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">120 / ' + vMotor + ' = <strong>' + tMotor + ' giờ</strong></td>' +
    '</tr>' +
    '<tr>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">Ô tô</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">' + vCar + ' (' + vMotor + ' + 20)</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">120</td>' +
    '  <td style="padding:6px; border:1px solid #cbd5e1;">120 / ' + vCar + ' = <strong>' + tCar + ' giờ</strong></td>' +
    '</tr>' +
    '</table>' +
    '• <strong>Chênh lệch thời gian đến đích:</strong> Ô tô đến sớm hơn xe máy ' + diffHours.toFixed(2) + ' giờ (tương đương <strong>' + diffMinutes + ' phút</strong>).<br>' +
    '• <strong>Phương trình đại số biểu thị bài toán:</strong> <span style="color:#b91c1c; font-weight:bold; font-family:monospace;">120/v - 120/(v + 20) = ' + diffHours.toFixed(2) + '</span>';

  document.getElementById('motion-table-result').innerHTML = html;
}
setTimeout(function() { updateMotionDemo(40); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Bài toán chuyển động (Đường bộ và Đường thủy)

**Phương pháp giải:**
1. Áp dụng công thức $s = v \cdot t$.
2. Nếu là chuyển động đường thủy có dòng nước chảy:
   - $v_{\text{xuôi}} = v_{\text{thực}} + v_{\text{nước}}$
   - $v_{\text{ngược}} = v_{\text{thực}} - v_{\text{nước}}$
   - $v_{\text{xuôi}} - v_{\text{ngược}} = 2 \cdot v_{\text{nước}}$
3. Hai xe đi ngược chiều gặp nhau: $s_1 + s_2 = s_{AB}$.
4. Hai xe đi cùng chiều đuổi kịp nhau: $s_1 - s_2 = \text{Khoảng cách ban đầu}$.

---

#### Bài toán 1 (Chuyển động cùng chiều xuất phát lệch giờ):
Một người đi xe đạp từ địa điểm A đến địa điểm B với vận tốc trung bình $15\text{ km/h}$. Sau đó $1\text{ giờ } 30\text{ phút}$, một người đi xe máy cũng xuất phát từ A đuổi theo người đi xe đạp với vận tốc $40\text{ km/h}$. Hỏi sau bao lâu kể từ lúc xe máy xuất phát thì xe máy đuổi kịp xe đạp?

**Lời giải:**

- Đổi: $1\text{ giờ } 30\text{ phút} = 1{,}5\text{ giờ} = \frac{3}{2}\text{ giờ}$.
- Gọi thời gian từ lúc xe máy xuất phát cho đến khi đuổi kịp xe đạp là $x\text{ (giờ)}$.
- Điều kiện: $x > 0$.

Trong thời gian đó:
- Xe máy đi được quãng đường là:
  $$s_{\text{máy}} = 40 \cdot x\text{ (km)}$$
- Vì xe đạp xuất phát trước xe máy $1{,}5$ giờ nên tổng thời gian xe đạp đã đi là:
  $$t_{\text{đạp}} = x + 1{,}5\text{ (giờ)}$$
- Quãng đường xe đạp đi được là:
  $$s_{\text{đạp}} = 15(x + 1{,}5)\text{ (km)}$$

Khi xe máy đuổi kịp xe đạp, quãng đường hai xe đi được từ A là bằng nhau, ta có phương trình:
$$40x = 15(x + 1{,}5)$$
Giải phương trình:
$$40x = 15x + 22{,}5 \iff 40x - 15x = 22{,}5 \iff 25x = 22{,}5 \iff x = \frac{22{,}5}{25} = 0{,}9\text{ (giờ)}$$
Đổi: $0{,}9\text{ giờ} = 0{,}9 \times 60 = 54\text{ phút}$.

Đối chiếu điều kiện: $x = 0{,}9 > 0$ (thỏa mãn điều kiện).
Vậy sau $54$ phút kể từ lúc xuất phát, xe máy đuổi kịp xe đạp.

---

### Dạng 2: Bài toán năng suất làm việc (Kế hoạch vs Thực tế)

**Phương pháp giải:**
1. Công thức cơ bản: $\text{Tổng sản phẩm} = \text{Năng suất 1 ngày} \times \text{Số ngày làm việc}$.
2. Thường chọn năng suất một ngày hoặc số ngày hoàn thành công việc làm ẩn.
3. Chú ý mối liên hệ giữa thời gian dự định và thời gian thực tế: $\text{Thời gian thực tế} = \text{Thời gian kế hoạch} - \text{Số ngày xong sớm}$.

---

#### Bài toán 2:
Một xưởng may theo kế hoạch phải may $1\,500$ chiếc áo trong một thời gian quy định. Khi thực hiện, nhờ cải tiến kỹ thuật, mỗi ngày xưởng may được thêm $10$ chiếc áo so với kế hoạch, do đó xưởng không những hoàn thành trước thời hạn $3$ ngày mà còn may vượt mức $60$ chiếc áo. Hỏi theo kế hoạch, mỗi ngày xưởng phải may bao nhiêu chiếc áo?

**Lời giải:**

Gọi số chiếc áo xưởng phải may trong một ngày theo kế hoạch là $x\text{ (chiếc)}$.
- Điều kiện: $x \in \mathbb{N}^*$.
- Theo kế hoạch:
  + Tổng số áo cần may: $1\,500$ chiếc.
  + Thời gian quy định để hoàn thành là: $\frac{1\,500}{x}\text{ (ngày)}$.
- Thực tế:
  + Mỗi ngày may được: $x + 10\text{ (chiếc)}$.
  + Tổng số áo thực tế may được: $1\,500 + 60 = 1\,560\text{ (chiếc)}$.
  + Thời gian thực tế may xong là: $\frac{1\,560}{x + 10}\text{ (ngày)}$.

Vì thực tế hoàn thành sớm hơn kế hoạch $3$ ngày nên ta có phương trình:
$$\frac{1\,500}{x} - \frac{1\,560}{x + 10} = 3$$
Rút gọn hai vế cho 3:
$$\frac{500}{x} - \frac{520}{x + 10} = 1$$
Quy đồng và khử mẫu với $\text{MTC} = x(x + 10)$:
$$500(x + 10) - 520x = x(x + 10)$$
$$500x + 5\,000 - 520x = x^2 + 10x$$
$$-20x + 5\,000 = x^2 + 10x \iff x^2 + 30x - 5\,000 = 0$$
Phân tích thành nhân tử:
$$x^2 + 30x - 5\,000 = (x - 50)(x + 100) = 0$$
$$\implies x = 50\text{ (thỏa mãn)} \quad\text{hoặc}\quad x = -100\text{ (loại vì } x > 0)$$
Vậy theo kế hoạch, mỗi ngày xưởng phải may $50$ chiếc áo.

---

### Dạng 3: Bài toán quan hệ số học và hình học

**Phương pháp giải:**
1. Số tự nhiên có hai chữ số: $\overline{ab} = 10a + b$ ($a, b \in \mathbb{N}, 1 \le a \le 9, 0 \le b \le 9$).
2. Chu vi hình chữ nhật: $P = 2(a + b) \implies a + b = \frac{P}{2}$ (nửa chu vi).

---

#### Bài toán 3:
Một thửa ruộng hình chữ nhật có chu vi là $160\text{ m}$. Nếu tăng chiều rộng thêm $10\text{ m}$ và giảm chiều dài đi $10\text{ m}$ thì diện tích thửa ruộng tăng thêm $100\text{ m}^2$. Tính chiều dài và chiều rộng ban đầu của thửa ruộng.

**Lời giải:**

- Nửa chu vi hình chữ nhật là:
  $$160 : 2 = 80\text{ (m)}$$
- Gọi chiều rộng ban đầu của thửa ruộng là $x\text{ (m)}$.
- Điều kiện: $0 < x < 40$ (chiều rộng phải nhỏ hơn nửa chu vi và nhỏ hơn chiều dài).
- Chiều dài ban đầu của thửa ruộng là:
  $$80 - x\text{ (m)}$$
- Diện tích ban đầu của thửa ruộng là:
  $$S_1 = x(80 - x)\text{ (m}^2\text{)}$$

Khi thay đổi kích thước:
- Chiều rộng mới là: $x + 10\text{ (m)}$.
- Chiều dài mới là: $(80 - x) - 10 = 70 - x\text{ (m)}$.
- Diện tích mới của thửa ruộng là:
  $$S_2 = (x + 10)(70 - x)\text{ (m}^2\text{)}$$

Vì diện tích mới tăng thêm $100\text{ m}^2$ so với diện tích ban đầu, ta có phương trình:
$$(x + 10)(70 - x) - x(80 - x) = 100$$
Khai triển và thu gọn:
$$70x - x^2 + 700 - 10x - (80x - x^2) = 100$$
$$-x^2 + 60x + 700 - 80x + x^2 = 100$$
$$-20x + 700 = 100 \iff -20x = -600 \iff x = 30$$
Kiểm tra điều kiện: $x = 30$ thỏa mãn $0 < x < 40$.
- Chiều rộng ban đầu là $30\text{ m}$.
- Chiều dài ban đầu là: $80 - 30 = 50\text{ m}$.
Vậy chiều dài ban đầu là $50\text{ m}$ và chiều rộng ban đầu là $30\text{ m}$.

---

### Dạng 4: Bài toán phần trăm, lãi suất và dung dịch hóa học

**Phương pháp giải:**
1. Giá sau khi giảm $a\%$: $P_{\text{mới}} = P_{\text{gốc}} \cdot (1 - \frac{a}{100})$.
2. Khối lượng chất tan: $m_{\text{ct}} = m_{\text{dd}} \cdot C\%$.
3. Tổng khối lượng chất tan bảo toàn khi pha trộn: $m_1 \cdot C_1\% + m_2 \cdot C_2\% = (m_1 + m_2) \cdot C_{\text{hh}}\%$.

---

#### Bài toán 4:
Bác An gửi tiết kiệm $100$ triệu đồng vào ngân hàng kỳ hạn $1$ năm. Sau một năm, bác nhận được cả vốn lẫn lãi là $106{,}5$ triệu đồng.
a) Hỏi lãi suất tiền gửi kỳ hạn một năm của ngân hàng đó là bao nhiêu phần trăm một năm?
b) Nếu sang năm thứ hai, ngân hàng tăng lãi suất thêm $0{,}5\%$/năm và bác An gửi tiếp toàn bộ số tiền $106{,}5$ triệu đồng đó thì sau năm thứ hai, bác An nhận được tất cả bao nhiêu tiền cả gốc lẫn lãi?

**Lời giải:**

a) Gọi lãi suất tiết kiệm kỳ hạn 1 năm của ngân hàng là $r\%$ ($r > 0$).
Tiền lãi sau năm thứ nhất là:
$$100 \cdot \frac{r}{100} = r\text{ (triệu đồng)}$$
Tổng số tiền cả gốc và lãi sau 1 năm là:
$$100 + r = 106{,}5 \iff r = 6{,}5$$
Vậy lãi suất tiền gửi của ngân hàng là $6{,}5\%$/năm.

b) Ở năm thứ hai:
- Lãi suất mới là: $6{,}5\% + 0{,}5\% = 7{,}0\%$/năm.
- Số tiền gửi đầu năm thứ hai là: $106{,}5$ triệu đồng.
- Tiền lãi nhận được trong năm thứ hai là:
  $$106{,}5 \cdot 7\% = 106{,}5 \cdot 0{,}07 = 7{,}455\text{ (triệu đồng)}$$
- Tổng số tiền bác An nhận được sau năm thứ hai là:
  $$106{,}5 + 7{,}455 = 113{,}955\text{ (triệu đồng)} = 113\,955\,000\text{ đồng}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Tối ưu Hóa Lộ trình Giao hàng Logistics (Amazon, Shopee)

Trong kỷ nguyên thương mại điện tử, các thuật toán phân bổ xe giao hàng giải các bài toán lập phương trình thời gian thực:
$$T_{\text{tổng}} = \sum \frac{s_i}{v_i} + N \cdot t_{\text{giao}}$$
Để tối ưu hóa số lượng bưu kiện giao trong ngày, máy chủ giải phương trình cân bằng thời gian giữa các cung đường để phân chia kiện hàng tự động cho các tài xế, giúp giảm $30\%$ lượng nhiên liệu tiêu thụ và giao hàng siêu tốc trong vòng $2$ giờ!

---

### Chuyên đề 2: Cân bằng Tải Dòng dữ liệu trong Mạng Internet (Load Balancing)

Tại các trung tâm dữ liệu khổng lồ của Google và Cloudflare, lưu lượng truy cập từ hàng triệu người dùng được chuyển hướng qua các máy chủ theo phương trình bảo toàn thông lượng:
$$C_{\text{tổng}} = c_1 x_1 + c_2 x_2 + \dots + c_k x_k$$
Bằng việc giải phương trình bậc nhất một ẩn theo tỉ lệ phân phối $x$, hệ thống đảm bảo không có máy chủ nào bị nghẽn mạng (quá tải CPU) trong các sự kiện trực tiếp như Chung kết World Cup.

---

### Chuyên đề 3: Phân bổ Vốn Danh mục Đầu tư Tài chính (Portfolio Optimization)

Một nhà đầu tư mạo hiểm phân bổ $10$ tỷ đồng vào hai kênh: Trái phiếu chính phủ an toàn lãi suất $6\%$/năm và Cổ phiếu công nghệ kỳ vọng lợi nhuận $14\%$/năm.
Để đạt mức lợi nhuận mục tiêu $10\%$/năm, số vốn rót vào cổ phiếu $x$ tuân theo phương trình:
$$x \cdot 14\% + (10 - x) \cdot 6\% = 10 \cdot 10\% \iff 0{,}14x + 0{,}6 - 0{,}06x = 1 \iff 0{,}08x = 0{,}4 \iff x = 5\text{ (tỷ đồng)}$$
Phương trình bậc nhất này chính là nền tảng của Lý thuyết danh mục đầu tư hiện đại từng đạt giải Nobel Kinh tế của Harry Markowitz!

---

### Chuyên đề 4: Dự đoán Va chạm (Collision Detection) trong Lập trình Game 3D

Trong các trò chơi đua xe (Need for Speed, Forza Horizon), để xác định thời điểm hai chiếc xe va chạm nhau, bộ xử lý vật lý giải phương trình vị trí:
$$x_1(t) = x_2(t) \iff x_{01} + v_1 t = x_{02} + v_2 t$$
Phương trình bậc nhất một ẩn theo thời gian $t$ này được giải liên tục $240$ lần mỗi giây, giúp render chính xác các hiệu ứng tóe lửa và biến dạng khung xe chân thực đến từng milimét.

---

### Chuyên đề 5: Phương trình Cân bằng Nhiệt trong Kỹ thuật Năng lượng Xanh

Khi pha trộn dòng nước nóng $80^\circ\text{C}$ từ bình năng lượng mặt trời với dòng nước lạnh $20^\circ\text{C}$ để cấp cho hệ thống sưởi sàn đạt nhiệt độ lý tưởng $35^\circ\text{C}$:
$$m_1 c (80 - 35) = m_2 c (35 - 20) \iff 45 m_1 = 15 m_2 \iff m_2 = 3 m_1$$
Phương trình cân bằng nhiệt cho thấy lượng nước lạnh cần gấp đúng 3 lần lượng nước nóng. Các van điều nhiệt thông minh tự động điều khiển động cơ bước theo phương trình này để giữ nhiệt độ phòng ổn định tuyệt đối trong mùa đông băng giá.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Bước đầu tiên khi giải bài toán bằng cách lập phương trình là:",
  "options": [
    "Chọn ẩn số, đặt điều kiện và đơn vị cho ẩn số",
    "Giải phương trình",
    "Đối chiếu điều kiện và trả lời",
    "Khai triển các hằng đẳng thức"
  ],
  "answer": 0,
  "explanation": "Bước 1 là bước lập phương trình: chọn ẩn số và đặt điều kiện thích hợp cho ẩn số."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một người đi xe máy với vận tốc 45 km/h trong thời gian t giờ. Biểu thức biểu thị quãng đường s là:",
  "options": [
    "s = 45 * t",
    "s = 45 / t",
    "s = t / 45",
    "s = 45 + t"
  ],
  "answer": 0,
  "explanation": "Quãng đường = Vận tốc · Thời gian = 45 · t (km)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đổi 36 phút sang đơn vị giờ ta được:",
  "options": [
    "0.6 giờ (3/5 giờ)",
    "0.36 giờ",
    "0.5 giờ",
    "1.2 giờ"
  ],
  "answer": 0,
  "explanation": "36 phút = 36 / 60 giờ = 3 / 5 giờ = 0.6 giờ."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một mảnh vườn hình chữ nhật có chu vi 100 m. Nếu gọi chiều rộng là x (m) thì chiều dài là:",
  "options": [
    "50 - x (m)",
    "100 - x (m)",
    "100 - 2x (m)",
    "50 + x (m)"
  ],
  "answer": 0,
  "explanation": "Nửa chu vi = 100 / 2 = 50 m. Chiều dài = Nửa chu vi - Chiều rộng = 50 - x (m)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một ca nô đi xuôi dòng với vận tốc riêng là v (km/h) và vận tốc dòng nước là 3 km/h. Vận tốc của ca nô khi đi xuôi dòng là:",
  "options": [
    "v + 3 (km/h)",
    "v - 3 (km/h)",
    "3 - v (km/h)",
    "3 * v (km/h)"
  ],
  "answer": 0,
  "explanation": "Khi xuôi dòng, vận tốc ca nô = vận tốc thực + vận tốc dòng nước = v + 3 (km/h)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một tổ may theo kế hoạch mỗi ngày may x chiếc áo. Thực tế mỗi ngày may thêm 5 chiếc. Biểu thức biểu thị số áo may trong 10 ngày thực tế là:",
  "options": [
    "10(x + 5)",
    "10x + 5",
    "10(x - 5)",
    "x + 50"
  ],
  "answer": 0,
  "explanation": "Năng suất thực tế mỗi ngày là (x + 5) chiếc. Trong 10 ngày may được 10(x + 5) chiếc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tổng của hai số là 80, số lớn gấp 3 lần số bé. Số bé là:",
  "options": [
    "20",
    "60",
    "25",
    "15"
  ],
  "answer": 0,
  "explanation": "Gọi số bé là x => số lớn là 3x. Phương trình: x + 3x = 80 <=> 4x = 80 <=> x = 20."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Hai người đi ngược chiều từ hai điểm cách nhau 150 km và gặp nhau sau 2 giờ. Tổng vận tốc của hai người là:",
  "options": [
    "75 km/h",
    "150 km/h",
    "50 km/h",
    "100 km/h"
  ],
  "answer": 0,
  "explanation": "Tổng quãng đường = (v1 + v2) · t = 150 <=> (v1 + v2) · 2 = 150 <=> v1 + v2 = 75 km/h."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Năm nay tuổi mẹ gấp 3 lần tuổi con. Biết mẹ hơn con 26 tuổi. Tuổi của con hiện nay là:",
  "options": [
    "13 tuổi",
    "12 tuổi",
    "14 tuổi",
    "10 tuổi"
  ],
  "answer": 0,
  "explanation": "Gọi tuổi con là x => tuổi mẹ là 3x. Ta có: 3x - x = 26 <=> 2x = 26 <=> x = 13 tuổi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một món hàng có giá niêm yết 200 000 đồng được giảm giá 15%. Số tiền khách hàng phải thanh toán là:",
  "options": [
    "170 000 đồng",
    "185 000 đồng",
    "160 000 đồng",
    "30 000 đồng"
  ],
  "answer": 0,
  "explanation": "Số tiền được giảm: 200 000 · 15% = 30 000 đồng. Số tiền phải trả: 200 000 - 30 000 = 170 000 đồng."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1 (Toán chuyển động ngược chiều):
Hai thành phố A và B cách nhau $180\text{ km}$. Cùng một lúc, một ô tô đi từ A đến B và một xe máy đi từ B về A. Sau $2$ giờ hai xe gặp nhau. Tính vận tốc của mỗi xe, biết vận tốc của ô tô lớn hơn vận tốc của xe máy là $10\text{ km/h}$.

### Bài tập 2 (Toán năng suất làm việc):
Một đội thợ mỏ theo kế hoạch mỗi ngày phải khai thác $50\text{ tấn}$ than. Nhờ nâng cao kỹ thuật, mỗi ngày đội đã khai thác được $57\text{ tấn}$ than. Do đó đội đã hoàn thành kế hoạch trước $1$ ngày và còn khai thác vượt mức thêm $13\text{ tấn}$ than. Tính khối lượng than đội phải khai thác theo kế hoạch.

### Bài tập 3 (Toán hình học thực tế):
Một khu đất hình chữ nhật có chiều dài hơn chiều rộng $8\text{ m}$. Nếu giảm chiều dài đi $3\text{ m}$ và tăng chiều rộng thêm $2\text{ m}$ thì diện tích khu đất không đổi. Tính chiều dài và chiều rộng ban đầu của khu đất đó.

### Bài tập 4 (Toán kinh tế thương mại):
Một cửa hàng kinh doanh đồ điện tử nhập về một lô máy tính xách tay. Cửa hàng dự định bán ra với giá lãi $20\%$ so với giá nhập. Nhưng trong tuần lễ khuyến mại, cửa hàng đã giảm giá $10\%$ so với giá dự định bán, nên mỗi chiếc máy tính vẫn lãi $1\,600\,000$ đồng so với giá nhập. Hỏi giá nhập về ban đầu của mỗi chiếc máy tính xách tay là bao nhiêu?
