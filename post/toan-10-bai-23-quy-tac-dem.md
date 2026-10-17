---
title: 'Toán 10 Bài 23: Quy tắc đếm - Quy tắc cộng, Quy tắc nhân & Sơ đồ cây'
description: 'Khám phá quy tắc cộng, quy tắc nhân, sơ đồ hình cây trong Đại số tổ hợp Toán 10. Kèm widget tương tác tạo sơ đồ cây trực quan, 4 dạng toán lập số và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Đại số tổ hợp
  - Quy tắc đếm
  - Quy tắc cộng
  - Quy tắc nhân
  - Sơ đồ cây
  - Kết nối tri thức
---

# Toán 10 Bài 23: Quy tắc đếm - Quy tắc cộng, Quy tắc nhân & Sơ đồ hình cây

Bạn đã bao giờ tự hỏi có bao nhiêu cách phối một bộ đồ đi học, có bao nhiêu mật khẩu gồm 6 chữ số có thể tạo ra, hay tại sao các nhà mạng không bao giờ lo thiếu số điện thoại? Mọi câu hỏi lớn về tính toán khả năng trong kỷ nguyên máy tính và trí tuệ nhân tạo đều bắt đầu từ một nguyên lý toán học tưởng chừng rất đơn giản: **Quy tắc đếm**.

---

## 1. Sơ đồ tư duy về Quy tắc đếm

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Quy tắc cộng (CÁC PHƯƠNG ÁN)</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • Một công việc hoàn thành bằng 1 trong $k$ phương án độc lập.<br>
      • Phương án 1 có $n_1$ cách, phương án 2 có $n_2$ cách,...<br>
      • Tổng số cách hoàn thành công việc:<br>
      $$N = n_1 + n_2 + \dots + n_k$$
      • Từ khóa nhận diện: <em>"Hoặc", "Trường hợp", "Phương án"</em>
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Quy tắc nhân (CÁC CÔNG ĐOẠN)</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • Một công việc gồm $k$ công đoạn nối tiếp nhau.<br>
      • Công đoạn 1 có $m_1$ cách, công đoạn 2 có $m_2$ cách,...<br>
      • Tổng số cách hoàn thành công việc:<br>
      $$N = m_1 \times m_2 \times \dots \times m_k$$
      • Từ khóa nhận diện: <em>"Và", "Nối tiếp", "Đồng thời", "Bước"</em>
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Sơ đồ hình cây (Tree Diagram)</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Biểu diễn trực quan mọi chuỗi quyết định nối tiếp.<br>
      • Gốc cây là điểm khởi đầu của công việc.<br>
      • Mỗi nhánh cây tương ứng với một lựa chọn.<br>
      • Số ngọn cây cuối cùng chính là tích số cách của quy tắc nhân.
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Nguyên lý bù trừ (Đếm phần bù)</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • Nếu hai phương án $A$ và $B$ có phần chung:<br>
      $$|A \cup B| = |A| + |B| - |A \cap B|$$<br>
      • Khi việc đếm trực tiếp quá nhiều trường hợp phức tạp:<br>
      $$\text{Số cách thỏa mãn} = \text{Tổng số cách tùy ý} - \text{Số cách không thỏa mãn}$$
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Bạn có 4 chiếc áo sơ mi khác nhau và 3 chiếc quần âu khác nhau. Có bao nhiêu cách chọn 1 bộ trang phục (gồm 1 áo và 1 quần)?**
   *Mẹo:* Đây là hai công đoạn nối tiếp: chọn áo (4 cách) VÀ chọn quần (3 cách). Theo quy tắc nhân: $4 \times 3 = 12$ cách.

2. **Một tiệm trà sữa có 5 loại trà và 4 loại nước ép. Bạn muốn chọn mua 1 ly đồ uống. Có bao nhiêu cách chọn?**
   *Mẹo:* Bạn chỉ chọn 1 ly (hoặc trà HOẶC nước ép). Theo quy tắc cộng: $5 + 4 = 9$ cách.

3. **Từ thành phố A đến B có 3 con đường, từ B đến C có 4 con đường. Hỏi có bao nhiêu lộ trình đi từ A đến C qua B?**
   *Mẹo:* Chuyến đi gồm 2 chặng liên tiếp: $3 \times 4 = 12$ lộ trình.

4. **Có bao nhiêu mã số PIN ngân hàng gồm 4 chữ số (mỗi chữ số từ 0 đến 9, có thể trùng nhau)?**
   *Mẹo:* Chữ số thứ 1, 2, 3, 4 mỗi chữ số đều có 10 lựa chọn: $10 \times 10 \times 10 \times 10 = 10^4 = 10.000$ mã số.

5. **Lớp bạn có 20 bạn nam và 15 bạn nữ. Có bao nhiêu cách chọn ra một đôi song ca gồm 1 nam và 1 nữ?**
   *Mẹo:* Công đoạn 1 chọn nam (20 cách), công đoạn 2 chọn nữ (15 cách): $20 \times 15 = 300$ cách.

---

## 3. Kiến thức trọng tâm

### 3.1. Quy tắc cộng

> [!NOTE]
> Giả sử một công việc có thể thực hiện theo một trong hai phương án $A$ hoặc $B$:
> - Phương án $A$ có $m$ cách thực hiện.
> - Phương án $B$ có $n$ cách thực hiện.
> - Hai phương án $A$ và $B$ không có cách thực hiện nào trùng nhau (rời nhau).
> 
> Khi đó, công việc có thể được hoàn thành bằng:
> $$m + n \quad \text{cách}$$

**Mở rộng:** Nếu công việc có thể thực hiện theo một trong $k$ phương án độc lập và không trùng lặp, các phương án có lần lượt $n_1, n_2, \dots, n_k$ cách thì tổng số cách hoàn thành là:
$$N = n_1 + n_2 + \dots + n_k$$

> [!WARNING]
> Quy tắc cộng chỉ áp dụng khi các phương án **hoàn toàn loại trừ lẫn nhau** (rời nhau). Nếu phương án $A$ và phương án $B$ có những trường hợp chung, ta phải sử dụng công thức bù trừ:
> $$|A \cup B| = |A| + |B| - |A \cap B|$$

### 3.2. Quy tắc nhân

> [!NOTE]
> Giả sử một công việc bao gồm hai công đoạn nối tiếp nhau:
> - Công đoạn thứ nhất có $m$ cách thực hiện.
> - Ứng với mỗi cách thực hiện công đoạn thứ nhất, có $n$ cách thực hiện công đoạn thứ hai.
> 
> Khi đó, toàn bộ công việc có thể được hoàn thành bằng:
> $$m \times n \quad \text{cách}$$

**Mở rộng:** Một công việc gồm $k$ công đoạn nối tiếp nhau, mỗi công đoạn có tương ứng $m_1, m_2, \dots, m_k$ cách thực hiện thì số cách hoàn thành công việc là:
$$N = m_1 \times m_2 \times \dots \times m_k$$

### 3.3. Sơ đồ hình cây (Tree Diagram)

Sơ đồ hình cây là một sơ đồ phân nhánh giúp liệt kê có hệ thống mọi kết quả có thể xảy ra của một quá trình gồm nhiều bước lựa chọn.
- **Gốc (Root):** Điểm khởi đầu của hành động.
- **Nhánh (Branch):** Mỗi lựa chọn ở từng công đoạn rẽ ra các nhánh con.
- **Ngọn (Leaves):** Mỗi ngọn cây tương ứng với một kết quả hoàn chỉnh của công việc.

---

## 4. Widget tương tác: Trình mô phỏng Sơ đồ cây & Bộ đếm tổ hợp

Tùy chỉnh số lượng lựa chọn ở từng công đoạn (Màu áo, Loại quần, Phụ kiện) để quan sát sơ đồ cây tự động mở rộng và đếm tổng số kết hợp:

```widget
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #047857, #065f46); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Bộ Đếm Tổ Hợp & Sơ Đồ Cây Tương Tác</h3>
    <p style="margin: 0; font-size: 13px; color: #a7f3d0;">Mô phỏng phối đồ 3 công đoạn: Chọn Áo x Chọn Quần x Chọn Giày</p>
  </div>

  <div style="padding: 16px; background: #f0fdf4; border-bottom: 1px solid #bbf7d0; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-around;">
    <div>
      <label style="display: block; font-size: 13px; font-weight: 600; color: #166534; margin-bottom: 4px;">Bước 1: Áo (<span id="txt-ao">3</span> màu)</label>
      <input type="range" id="rng-ao" min="1" max="4" value="3" style="cursor: pointer;">
    </div>
    <div>
      <label style="display: block; font-size: 13px; font-weight: 600; color: #166534; margin-bottom: 4px;">Bước 2: Quần (<span id="txt-quan">2</span> kiểu)</label>
      <input type="range" id="rng-quan" min="1" max="3" value="2" style="cursor: pointer;">
    </div>
    <div>
      <label style="display: block; font-size: 13px; font-weight: 600; color: #166534; margin-bottom: 4px;">Bước 3: Giày (<span id="txt-giay">2</span> đôi)</label>
      <input type="range" id="rng-giay" min="1" max="2" value="2" style="cursor: pointer;">
    </div>
  </div>

  <div style="padding: 16px; display: grid; grid-template-columns: 1fr 220px; gap: 16px; align-items: center;">
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow-x: auto; min-height: 280px; display: flex; align-items: center; justify-content: center;">
      <svg data-interactive-done="true" id="tree-svg" viewBox="0 0 460 260" style="width: 100%; min-width: 380px; height: 260px; font-family: monospace;"></svg>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px;">Quy tắc nhân:</div>
      <div id="tree-math-expr" style="font-family: monospace; font-size: 16px; font-weight: bold; color: #047857; margin-bottom: 12px;">
        3 × 2 × 2 = 12
      </div>
      <div style="font-size: 12px; color: #64748b; line-height: 1.5;">
        Mỗi đường đi từ gốc bên trái đến ngọn bên phải là 1 bộ trang phục hoàn chỉnh gồm 3 món.
      </div>
      <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #cbd5e1; font-size: 12px; font-weight: 600; color: #0f172a;">
        Tổng số ngọn: <span id="lbl-total-outfits" style="color: #2563eb; font-size: 15px;">12 bộ</span>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var rAo = document.getElementById('rng-ao');
  var rQuan = document.getElementById('rng-quan');
  var rGiay = document.getElementById('rng-giay');
  var tAo = document.getElementById('txt-ao');
  var tQuan = document.getElementById('txt-quan');
  var tGiay = document.getElementById('txt-giay');
  var expr = document.getElementById('tree-math-expr');
  var totalLbl = document.getElementById('lbl-total-outfits');
  var svg = document.getElementById('tree-svg');

  function renderTree() {
    var n1 = parseInt(rAo.value, 10);
    var n2 = parseInt(rQuan.value, 10);
    var n3 = parseInt(rGiay.value, 10);

    tAo.textContent = n1;
    tQuan.textContent = n2;
    tGiay.textContent = n3;

    var total = n1 * n2 * n3;
    expr.textContent = n1 + ' × ' + n2 + ' × ' + n3 + ' = ' + total;
    totalLbl.textContent = total + ' bộ';

    var html = '';
    var startX = 25;
    var startY = 130;
    var x1 = 120;
    var x2 = 250;
    var x3 = 390;

    // Gốc
    html += '<circle cx="' + startX + '" cy="' + startY + '" r="5" fill="#047857"/>';
    html += '<text x="' + (startX - 18) + '" y="' + (startY + 4) + '" font-size="10" fill="#065f46" font-weight="bold">Bắt đầu</text>';

    var totalLeaves = total;
    var leafIndex = 0;

    for (var i = 0; i < n1; i++) {
      var y1 = 20 + (220 / (n1 + 1)) * (i + 1);
      html += '<line x1="' + startX + '" y1="' + startY + '" x2="' + x1 + '" y2="' + y1 + '" stroke="#10b981" stroke-width="1.8"/>';
      html += '<circle cx="' + x1 + '" cy="' + y1 + '" r="4" fill="#10b981"/>';
      html += '<text x="' + (x1 + 6) + '" y="' + (y1 - 4) + '" font-size="9" fill="#047857" font-weight="600">Áo ' + (i + 1) + '</text>';

      for (var j = 0; j < n2; j++) {
        var subSpan = 220 / n1;
        var y2 = (y1 - subSpan / 2) + (subSpan / (n2 + 1)) * (j + 1);
        html += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#3b82f6" stroke-width="1.4"/>';
        html += '<circle cx="' + x2 + '" cy="' + y2 + '" r="3.5" fill="#3b82f6"/>';
        html += '<text x="' + (x2 + 5) + '" y="' + (y2 - 3) + '" font-size="8" fill="#1d4ed8">Q' + (j + 1) + '</text>';

        for (var k = 0; k < n3; k++) {
          leafIndex++;
          var y3 = 12 + (236 / (totalLeaves + 1)) * leafIndex;
          html += '<line x1="' + x2 + '" y1="' + y2 + '" x2="' + x3 + '" y2="' + y3 + '" stroke="#f59e0b" stroke-width="1.1"/>';
          html += '<circle cx="' + x3 + '" cy="' + y3 + '" r="2.8" fill="#d97706"/>';
          html += '<text x="' + (x3 + 5) + '" y="' + (y3 + 3) + '" font-size="8" fill="#78350f">Bộ ' + leafIndex + '</text>';
        }
      }
    }

    svg.innerHTML = html;
  }

  rAo.addEventListener('input', renderTree);
  rQuan.addEventListener('input', renderTree);
  rGiay.addEventListener('input', renderTree);

  renderTree();
})();
</script>
```

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Áp dụng quy tắc cộng (Phương án độc lập)

**Phương pháp giải:**
1. Xác định công việc cần thực hiện.
2. Chia công việc thành các phương án độc lập, không có phương án nào trùng lặp nhau.
3. Đếm số cách của từng phương án rồi lấy tổng.

#### Bài toán 1
Một câu lạc bộ tình nguyện của trường THPT gồm có $12$ học sinh lớp 10, $15$ học sinh lớp 11 và $10$ học sinh lớp 12.
a) Có bao nhiêu cách cử ra $1$ học sinh tham gia ban đón tiếp đại biểu?
b) Có bao nhiêu cách chọn ra $2$ học sinh thuộc hai khối lớp khác nhau?

**Lời giải:**
a) Cử $1$ học sinh đại diện có thể thuộc một trong ba khối lớp:
- Phương án 1: Chọn $1$ học sinh khối 10 $\implies 12$ cách.
- Phương án 2: Chọn $1$ học sinh khối 11 $\implies 15$ cách.
- Phương án 3: Chọn $1$ học sinh khối 12 $\implies 10$ cách.
Theo quy tắc cộng, tổng số cách chọn là:
$$12 + 15 + 10 = 37 \quad \text{cách}$$

b) Chọn $2$ học sinh thuộc hai khối khác nhau, ta chia thành 3 trường hợp:
- **Trường hợp 1:** $1$ học sinh khối 10 và $1$ học sinh khối 11.
  Theo quy tắc nhân: $12 \times 15 = 180$ cách.
- **Trường hợp 2:** $1$ học sinh khối 10 và $1$ học sinh khối 12.
  Theo quy tắc nhân: $12 \times 10 = 120$ cách.
- **Trường hợp 3:** $1$ học sinh khối 11 và $1$ học sinh khối 12.
  Theo quy tắc nhân: $15 \times 10 = 150$ cách.
Ba trường hợp này là các phương án độc lập, theo quy tắc cộng:
$$180 + 120 + 150 = 450 \quad \text{cách}$$

---

### Dạng 2: Áp dụng quy tắc nhân (Các công đoạn nối tiếp)

**Phương pháp giải:**
1. Phân tích công việc thành chuỗi các công đoạn liên tiếp bắt buộc: Bước 1 $\to$ Bước 2 $\to \dots \to$ Bước $k$.
2. Đếm số cách thực hiện công đoạn 1 ($m_1$).
3. Ứng với mỗi cách của các công đoạn trước, đếm số cách thực hiện công đoạn tiếp theo.
4. Lấy tích các kết quả: $N = m_1 \times m_2 \times \dots \times m_k$.

#### Bài toán 2
Từ các chữ số thuộc tập hợp $S = \{1; 2; 3; 4; 5; 6; 7\}$ có thể lập được bao nhiêu số tự nhiên gồm $4$ chữ số sao cho:
a) Các chữ số có thể lặp lại tùy ý?
b) Các chữ số đôi một khác nhau?

**Lời giải:**
Gọi số tự nhiên cần tìm có dạng $\overline{abcd}$, trong đó $a, b, c, d \in S$. Tập $S$ có $7$ phần tử.
a) Trường hợp các chữ số có thể giống nhau:
- Chọn chữ số $a$: có $7$ cách chọn (từ $1$ đến $7$).
- Chọn chữ số $b$: có $7$ cách chọn.
- Chọn chữ số $c$: có $7$ cách chọn.
- Chọn chữ số $d$: có $7$ cách chọn.
Theo quy tắc nhân, số các số tự nhiên lập được là:
$$7 \times 7 \times 7 \times 7 = 7^4 = 2401 \quad \text{số}$$

b) Trường hợp các chữ số đôi một khác nhau:
- Chọn $a \in S$: có $7$ cách.
- Chọn $b \in S \setminus \{a\}$: có $6$ cách.
- Chọn $c \in S \setminus \{a; b\}$: có $5$ cách.
- Chọn $d \in S \setminus \{a; b; c\}$: có $4$ cách.
Theo quy tắc nhân, số các số tự nhiên thỏa mãn là:
$$7 \times 6 \times 5 \times 4 = 840 \quad \text{số}$$

---

### Dạng 3: Bài toán lập số tự nhiên có điều kiện ràng buộc đặc biệt

> [!TIP]
> **Nguyên tắc ưu tiên khi lập số:**
> - Luôn chọn vị trí có điều kiện ràng buộc ngặt nghèo nhất trước tiên!
> - Chữ số đầu tiên $a \ne 0$.
> - Số chẵn/lẻ: chữ số tận cùng phải thuộc tập chẵn/lẻ.
> - Số chia hết cho 5: chữ số tận cùng là $0$ hoặc $5$ (cần xét riêng nếu tập số chứa số $0$).

#### Bài toán 3
Cho tập hợp $X = \{0; 1; 2; 3; 4; 5\}$. Có bao nhiêu số tự nhiên chẵn gồm $3$ chữ số đôi một khác nhau được lập từ tập $X$?

**Lời giải:**
Gọi số tự nhiên chẵn cần tìm là $\overline{abc}$ với $a, b, c \in X, a \ne 0$ và $a, b, c$ đôi một khác nhau.
Vì số là số chẵn nên chữ số tận cùng $c \in \{0; 2; 4\}$. Do vị trí $c$ có thể chứa số $0$ (ảnh hưởng trực tiếp tới điều kiện $a \ne 0$), ta chia làm 2 trường hợp:

- **Trường hợp 1:** Chữ số tận cùng $c = 0$.
  - Chọn $c$: có $1$ cách ($c = 0$).
  - Chọn $a \in X \setminus \{0\}$: có $5$ cách (chọn một trong các số $\{1; 2; 3; 4; 5\}$).
  - Chọn $b \in X \setminus \{a; 0\}$: có $4$ cách.
  Số các số ở trường hợp 1 là:
  $$1 \times 5 \times 4 = 20 \quad \text{số}$$

- **Trường hợp 2:** Chữ số tận cùng $c \ne 0 \implies c \in \{2; 4\}$.
  - Chọn $c$: có $2$ cách chọn ($c = 2$ hoặc $c = 4$).
  - Chọn $a \ne 0$ và $a \ne c$: tập $X$ có 6 phần tử, loại bỏ số $0$ và số $c$, còn lại $4$ cách chọn cho $a$.
  - Chọn $b \in X \setminus \{a; c\}$: còn lại $4$ cách chọn cho $b$ (kể cả số $0$).
  Số các số ở trường hợp 2 là:
  $$2 \times 4 \times 4 = 32 \quad \text{số}$$

Theo quy tắc cộng, tổng các số tự nhiên chẵn thỏa mãn yêu cầu bài toán là:
$$20 + 32 = 52 \quad \text{số}$$

---

### Dạng 4: Phương pháp đếm phần bù (Gián tiếp)

#### Bài toán 4
Một hộp đựng $8$ viên bi xanh và $6$ viên bi đỏ có kích thước khác nhau. Người ta muốn lấy ra $3$ viên bi. Có bao nhiêu cách lấy được **ít nhất một viên bi màu đỏ**?

**Lời giải:**
- **Cách đếm gián tiếp (Phần bù):**
  1. Tổng số viên bi trong hộp là $8 + 6 = 14$ viên bi.
     Số cách lấy tùy ý $3$ viên bi có thứ tự: $14 \times 13 \times 12 = 2184$ cách (hoặc dùng tổ hợp $C_{14}^3 = 364$ cách nếu không tính thứ tự).
     Xét lấy $3$ viên bi theo từng lượt lấy:
     - Lượt 1: $14$ cách.
     - Lượt 2: $13$ cách.
     - Lượt 3: $12$ cách.
     Tổng số cách lấy 3 viên bi tùy ý là $14 \times 13 \times 12 = 2184$ cách.
  2. Biến cố đối nghịch: "Lấy được $3$ viên bi toàn màu xanh (không có viên đỏ nào)".
     - Lượt 1 chọn bi xanh: $8$ cách.
     - Lượt 2 chọn bi xanh: $7$ cách.
     - Lượt 3 chọn bi xanh: $6$ cách.
     Số cách lấy 3 viên toàn xanh: $8 \times 7 \times 6 = 336$ cách.
  3. Số cách lấy được ít nhất một viên bi đỏ là:
     $$2184 - 336 = 1848 \quad \text{cách}$$
     *(Nếu không xét thứ tự lấy: $C_{14}^3 - C_8^3 = 364 - 56 = 308$ cách).*

---

## 6. Ứng dụng thực tiễn của Quy tắc đếm

1. **An ninh mạng & Độ phức tạp mật khẩu:** Một mật khẩu 8 ký tự chỉ gồm chữ số có $10^8 = 100.000.000$ khả năng (máy tính bẻ khóa trong $0,01$ giây). Nhưng nếu thêm chữ hoa, chữ thường và ký tự đặc biệt ($94$ ký tự), số khả năng tăng vọt lên $94^8 \approx 6 \times 10^{15}$, khiến hacker mất hàng nghìn năm để thử vét cạn.
2. **Quy hoạch dải địa chỉ Internet (IPv4 & IPv6):** Địa chỉ IPv4 gồm 4 khối số dạng `A.B.C.D` (mỗi khối từ 0 đến 255 $\implies 256$ lựa chọn), tạo ra $256^4 = 2^{32} \approx 4,3$ tỷ địa chỉ. Khi IPv4 cạn kiệt, thế giới chuyển sang IPv6 với 128 bit, cung cấp tới $2^{128} \approx 3,4 \times 10^{38}$ địa chỉ duy nhất.
3. **Mã vạch sản phẩm & QR Code:** Mã vạch tiêu chuẩn quốc tế EAN-13 gồm 13 chữ số, trong đó 12 chữ số đầu mã hóa mã quốc gia, doanh nghiệp, mã sản phẩm và chữ số cuối là mã kiểm tra checksum, bảo đảm hàng trăm triệu mặt hàng không bao giờ trùng nhau.
4. **Mã di truyền trong tế bào sống:** Phân tử ADN được cấu thành từ 4 loại bazơ nitơ: A, T, G, X. Mỗi bộ ba bazơ (codon) mã hóa một axit amin. Số tổ hợp bộ ba tối đa là $4 \times 4 \times 4 = 4^3 = 64$ codon, đủ để mã hóa chính xác 20 loại axit amin cấu tạo nên sự sống.
5. **Cây quyết định trong Trí tuệ nhân tạo (AI Game Tree):** Trong cờ vua hoặc cờ ca-rô, mỗi nước đi của người chơi mở ra một loạt nhánh phản ứng của đối thủ. Quy tắc nhân giải thích tại sao không gian trạng thái của cờ vua đạt tới $10^{120}$ thế cờ (Số Shannon), đòi hỏi thuật toán AI tìm kiếm Alpha-Beta Pruning để cắt tỉa cây.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q1",
  "question": "Một quán ăn phục vụ bữa sáng gồm 4 món nước (phở, bún, miến, hủ tiếu) và 3 món khô (bánh mì, xôi, bánh cuốn). Khách hàng muốn chọn đúng một món ăn sáng. Có bao nhiêu cách chọn?",
  "options": [
    "7",
    "12",
    "1",
    "10"
  ],
  "answer": 0,
  "explanation": "Khách chọn 1 món (hoặc món nước hoặc món khô), áp dụng quy tắc cộng: $4 + 3 = 7$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q2",
  "question": "Bạn An có 5 chiếc áo thun và 4 chiếc quần soóc. Hỏi An có bao nhiêu cách phối một bộ quần áo (gồm 1 áo và 1 quần)?",
  "options": [
    "20",
    "9",
    "1",
    "25"
  ],
  "answer": 0,
  "explanation": "Công việc gồm 2 công đoạn: chọn áo (5 cách) và chọn quần (4 cách). Theo quy tắc nhân: $5 \\times 4 = 20$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q3",
  "question": "Có bao nhiêu số tự nhiên có 3 chữ số khác nhau được lập từ các chữ số 1, 2, 3, 4, 5?",
  "options": [
    "60",
    "125",
    "15",
    "20"
  ],
  "answer": 0,
  "explanation": "Số có dạng $\\overline{abc}$. Chọn $a$ có 5 cách, chọn $b$ có 4 cách, chọn $c$ có 3 cách. Số các số là $5 \\times 4 \\times 3 = 60$ số."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q4",
  "question": "Có bao nhiêu số tự nhiên có 3 chữ số tùy ý (từ 100 đến 999)?",
  "options": [
    "900",
    "1000",
    "899",
    "999"
  ],
  "answer": 0,
  "explanation": "Số có dạng $\\overline{abc}$. Chữ số $a \\in \\{1;...;9\\}$ có 9 cách; $b, c \\in \\{0;...;9\\}$ mỗi chữ số có 10 cách. Số lượng: $9 \\times 10 \\times 10 = 900$ số."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q5",
  "question": "Từ các chữ số 0, 1, 2, 3, 4, có thể lập được bao nhiêu số tự nhiên gồm 3 chữ số đôi một khác nhau?",
  "options": [
    "48",
    "60",
    "64",
    "100"
  ],
  "answer": 0,
  "explanation": "Số dạng $\\overline{abc}$. Chọn $a \\ne 0$ có 4 cách; chọn $b \\ne a$ có 4 cách (kể cả số 0); chọn $c \\ne a, c \\ne b$ có 3 cách. Số lượng: $4 \\times 4 \\times 3 = 48$ số."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q6",
  "question": "Một bài thi trắc nghiệm gồm 5 câu hỏi, mỗi câu có 4 phương án trả lời. Hỏi có bao nhiêu phương án điền phiếu trả lời trắc nghiệm khác nhau?",
  "options": [
    "1024",
    "20",
    "625",
    "256"
  ],
  "answer": 0,
  "explanation": "Mỗi câu trong số 5 câu có 4 lựa chọn. Theo quy tắc nhân: $4^5 = 1024$ phương án."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q7",
  "question": "Từ tỉnh A đến tỉnh B có 3 tuyến xe buýt, từ tỉnh B đến tỉnh C có 5 chuyến tàu hỏa. Có bao nhiêu cách đi từ A đến C rồi quay về A (cả đi lẫn về đều qua B)?",
  "options": [
    "225",
    "15",
    "30",
    "120"
  ],
  "answer": 0,
  "explanation": "Hành trình gồm 4 chặng: A đến B (3 cách), B đến C (5 cách), C về B (5 cách), B về A (3 cách). Tổng số cách: $3 \\times 5 \\times 5 \\times 3 = 225$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q8",
  "question": "Có bao nhiêu số tự nhiên lẻ gồm 3 chữ số đôi một khác nhau lập từ các chữ số 1, 2, 3, 4, 6?",
  "options": [
    "24",
    "12",
    "36",
    "48"
  ],
  "answer": 0,
  "explanation": "Số dạng $\\overline{abc}$ lẻ $\\implies c \\in \\{1; 3\\}$ (2 cách). Sau đó chọn $a \\ne c$ có 4 cách, chọn $b \\ne a, b \\ne c$ có 3 cách. Số lượng: $2 \\times 4 \\times 3 = 24$ số."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q9",
  "question": "Gieo đồng thời hai con xúc xắc 6 mặt cân đối và đồng chất. Có bao nhiêu kết quả có thể xảy ra?",
  "options": [
    "36",
    "12",
    "6",
    "18"
  ],
  "answer": 0,
  "explanation": "Mỗi con xúc xắc có 6 khả năng xuất hiện mặt chấm (từ 1 đến 6). Theo quy tắc nhân: $6 \\times 6 = 36$ kết quả."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b23_q10",
  "question": "Số các ước số nguyên dương của số 360 là bao nhiêu?",
  "options": [
    "24",
    "18",
    "12",
    "30"
  ],
  "answer": 0,
  "explanation": "Phân tích ra thừa số nguyên tố: $360 = 2^3 \\times 3^2 \\times 5^1$. Ước số có dạng $2^x \\times 3^y \\times 5^z$ với $x \\in \\{0,1,2,3\\}$ (4 cách), $y \\in \\{0,1,2\\}$ (3 cách), $z \\in \\{0,1\\}$ (2 cách). Số ước số là $4 \\times 3 \\times 2 = 24$."
}'></div>

---

## 8. Dự án thử thách thực tế: Tính dung lượng kho biển số ô tô

**Bối cảnh:**
Tại Việt Nam, biển số ô tô con đăng ký mới hiện nay gồm:
- 2 chữ số đầu là mã địa phương (ví dụ `30`, `29` ở Hà Nội, `51`, `50` ở TP.HCM).
- 1 chữ cái seri trong bảng chữ cái tiếng Anh gồm 20 chữ cái: A, B, C, D, E, F, G, H, K, L, M, N, P, S, T, U, V, X, Y, Z.
- 5 chữ số phía sau từ `000.01` đến `999.99` (bỏ đi số `000.00`).

**Nhiệm vụ:**
1. Với mỗi đầu số seri địa phương (ví dụ biển số `30A`), có thể cấp phát tối đa cho bao nhiêu chiếc xe ô tô?
2. Thành phố Hà Nội hiện đang sử dụng 4 mã số địa phương (`29`, `30`, `31`, `32`). Với 20 chữ cái seri cho mỗi mã, tổng kho biển số ô tô con lý thuyết của Hà Nội có thể phục vụ được tối đa bao nhiêu phương tiện trước khi bị cạn kiệt kho số?

*Gợi ý:*
- Mỗi seri có $99.999$ biển số hợp lệ.
- Với 4 mã số và 20 seri: $4 \times 20 \times 99.999 = 7.999.920$ biển số (gần 8 triệu xe ô tô).
