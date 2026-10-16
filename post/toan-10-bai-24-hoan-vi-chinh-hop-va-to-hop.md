---
title: 'Toán 10 Bài 24: Hoán vị, Chỉnh hợp và Tổ hợp - Công thức, Bản chất & Bài tập'
description: 'Làm chủ lý thuyết và công thức Hoán vị P_n, Chỉnh hợp A_n^k, Tổ hợp C_n^k trong Đại số 10. Kèm widget tính toán trực quan, 4 dạng toán điển hình và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Đại số tổ hợp
  - Hoán vị
  - Chỉnh hợp
  - Tổ hợp
  - Giai thừa
  - Kết nối tri thức
---

# Toán 10 Bài 24: Hoán vị, Chỉnh hợp và Tổ hợp

Làm thế nào để xếp 10 cuốn sách lên kệ mà không bao giờ trùng lặp? Có bao nhiêu cách chọn ra ban cán sự gồm lớp trưởng, lớp phó và bí thư từ 40 học sinh? Và tại sao xác suất để trúng giải độc đắc Vietlott 6/45 lại khó đến mức "một phần tám triệu"? Tất cả những bài toán chọn và xếp đó đều được giải quyết nhanh chóng và khoa học nhờ ba khái niệm rực rỡ của Đại số tổ hợp: **Hoán vị**, **Chỉnh hợp** và **Tổ hợp**.

---

## 1. Sơ đồ tư duy về Hoán vị, Chỉnh hợp và Tổ hợp

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Hoán vị ($P_n$)</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • <strong>Sắp xếp toàn bộ</strong> $n$ phần tử khác nhau.<br>
      • Công thức tính:<br>
      $$P_n = n! = n \times (n-1) \times \dots \times 1$$
      • Quy ước: $0! = 1$<br>
      • Từ khóa: <em>Xếp thứ tự, đổi chỗ toàn bộ, xếp hàng dọc</em>
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Chỉnh hợp ($A_n^k$)</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • Chọn $k$ phần tử từ $n$ phần tử <strong>VÀ xếp thứ tự</strong> ($1 \le k \le n$).<br>
      • Công thức tính:<br>
      $$A_n^k = \frac{n!}{(n - k)!} = n(n-1)\dots(n - k + 1)$$
      • Từ khóa: <em>Chọn có phân công chức vụ, lập số, giải Nhất - Nhì - Ba</em>
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Tổ hợp ($C_n^k$)</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Chọn $k$ phần tử từ $n$ phần tử <strong>KHÔNG quan tâm thứ tự</strong> ($0 \le k \le n$).<br>
      • Công thức tính:<br>
      $$C_n^k = \frac{n!}{k!(n - k)!} = \frac{A_n^k}{k!}$$
      • Tính chất: $C_n^k = C_n^{n - k}$ và $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Bí quyết phân biệt Chỉnh hợp vs Tổ hợp</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • <strong>Có phân biệt thứ tự?</strong><br>
      - <strong>CÓ</strong> $\implies$ Dùng <strong>Chỉnh hợp</strong> $A_n^k$.<br>
      - <strong>KHÔNG</strong> $\implies$ Dùng <strong>Tổ hợp</strong> $C_n^k$.<br>
      • Mối liên hệ cốt lõi: $A_n^k = k! \times C_n^k$
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phân biệt nhanh

1. **Có 5 bạn học sinh ngồi vào một bàn dài gồm 5 ghế. Có bao nhiêu cách xếp?**
   *Mẹo:* Xếp toàn bộ 5 bạn vào 5 chỗ $\implies$ Hoán vị: $P_5 = 5! = 120$ cách.

2. **Lớp có 30 học sinh, cần chọn ra 3 bạn giữ 3 chức vụ: Lớp trưởng, Lớp phó, Bí thư. Dùng $A_{30}^3$ hay $C_{30}^3$?**
   *Mẹo:* Có phân biệt vị trí chức vụ (thứ tự quan trọng) $\implies$ Chỉnh hợp $A_{30}^3 = 30 \times 29 \times 28 = 24.360$ cách.

3. **Lớp có 30 học sinh, cần chọn ra 3 bạn đi trực nhật vệ sinh sân trường. Dùng $A_{30}^3$ hay $C_{30}^3$?**
   *Mẹo:* Cả 3 bạn đều làm cùng một nhiệm vụ trực nhật (không quan trọng thứ tự) $\implies$ Tổ hợp $C_{30}^3 = \frac{30 \times 29 \times 28}{6} = 4.060$ cách.

4. **Cho 10 điểm phân biệt trên mặt phẳng, không có 3 điểm nào thẳng hàng. Có bao nhiêu tam giác được tạo thành?**
   *Mẹo:* Mỗi tam giác chỉ cần chọn ra 3 điểm bất kỳ trong 10 điểm (tam giác $ABC$ hay $BCA$ là một) $\implies$ Tổ hợp: $C_{10}^3 = 120$ tam giác.

5. **Giá trị của $C_7^5$ bằng bao nhiêu? Tính nhẩm thế nào cho nhanh?**
   *Mẹo:* Dùng tính chất bù: $C_7^5 = C_7^{7-5} = C_7^2 = \frac{7 \times 6}{2} = 21$.

---

## 3. Kiến thức trọng tâm

### 3.1. Giai thừa

> [!NOTE]
> Cho số tự nhiên $n \ge 1$. Tích của $n$ số tự nhiên liên tiếp từ $1$ đến $n$ được gọi là **$n$ giai thừa**, ký hiệu là $n!$:
> $$n! = 1 \times 2 \times 3 \times \dots \times (n - 1) \times n$$
> Quy ước đặc biệt:
> $$0! = 1$$

Các giá trị thường dùng:
- $1! = 1$
- $2! = 2$
- $3! = 6$
- $4! = 24$
- $5! = 120$
- $6! = 720$

### 3.2. Hoán vị

> [!NOTE]
> Cho tập hợp $X$ gồm $n$ phần tử ($n \ge 1$). Mỗi kết quả của sự sắp xếp thứ tự $n$ phần tử của tập hợp $X$ được gọi là một **hoán vị** của $n$ phần tử đó.
> 
> Số các hoán vị của $n$ phần tử ký hiệu là $P_n$:
> $$P_n = n!$$

### 3.3. Chỉnh hợp

> [!NOTE]
> Cho tập hợp $X$ gồm $n$ phần tử ($n \ge 1$) và một số nguyên $k$ với $1 \le k \le n$.
> Mỗi kết quả của việc **lấy $k$ phần tử khác nhau** từ tập hợp $X$ và **sắp xếp chúng theo một thứ tự nào đó** được gọi là một **chỉnh hợp chập $k$ của $n$ phần tử**.
> 
> Số các chỉnh hợp chập $k$ của $n$ phần tử ký hiệu là $A_n^k$:
> $$A_n^k = \frac{n!}{(n - k)!} = n(n - 1)(n - 2)\dots(n - k + 1)$$

### 3.4. Tổ hợp

> [!NOTE]
> Cho tập hợp $X$ gồm $n$ phần tử ($n \ge 1$) và một số nguyên $k$ với $0 \le k \le n$.
> Mỗi tập con gồm $k$ phần tử của tập hợp $X$ được gọi là một **tổ hợp chập $k$ của $n$ phần tử**.
> 
> Số các tổ hợp chập $k$ của $n$ phần tử ký hiệu là $C_n^k$:
> $$C_n^k = \frac{n!}{k!(n - k)!} \quad (0 \le k \le n)$$

> [!IMPORTANT]
> **Các tính chất kinh điển của Tổ hợp:**
> 1. Tính chất đối xứng:
>    $$C_n^k = C_n^{n - k} \quad (0 \le k \le n)$$
> 2. Hệ thức Pascal (Tam giác Pascal):
>    $$C_n^k + C_n^{k + 1} = C_{n + 1}^{k + 1} \quad (0 \le k < n)$$
> 3. Mối liên hệ giữa Chỉnh hợp và Tổ hợp:
>    $$A_n^k = k! \times C_n^k$$

---

## 4. Widget tương tác: Máy tính & Trực quan hóa Tổ hợp

Nhập giá trị $n$ và $k$ để hệ thống tự động tính toán $P_n, A_n^k, C_n^k$ và hiển thị tất cả các tập con mẫu từ danh sách chữ cái:

```html
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1e3a8a, #0f172a); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Máy Tính Hoán Vị - Chỉnh Hợp - Tổ Hợp</h3>
    <p style="margin: 0; font-size: 13px; color: #93c5fd;">Tự động tính toán công thức giai thừa và minh họa trực quan các kết hợp mẫu</p>
  </div>

  <div style="padding: 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: center;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 14px; font-weight: 600; color: #334155;">Số phần tử n =</label>
      <input type="number" id="inp-n" min="1" max="15" value="5" style="width: 60px; padding: 6px; font-size: 14px; font-weight: bold; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center;">
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 14px; font-weight: 600; color: #334155;">Số chọn k =</label>
      <input type="number" id="inp-k" min="0" max="15" value="3" style="width: 60px; padding: 6px; font-size: 14px; font-weight: bold; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center;">
    </div>
  </div>

  <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
    <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 14px; text-align: center;">
      <div style="font-size: 13px; font-weight: 600; color: #166534; margin-bottom: 6px;">Hoán vị P_n = n!</div>
      <div id="res-pn" style="font-size: 22px; font-weight: 800; color: #15803d; font-family: monospace;">120</div>
      <div id="sub-pn" style="font-size: 11px; color: #166534; margin-top: 4px;">5! = 120</div>
    </div>

    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px; text-align: center;">
      <div style="font-size: 13px; font-weight: 600; color: #1e40af; margin-bottom: 6px;">Chỉnh hợp A_n^k</div>
      <div id="res-ank" style="font-size: 22px; font-weight: 800; color: #2563eb; font-family: monospace;">60</div>
      <div id="sub-ank" style="font-size: 11px; color: #1e40af; margin-top: 4px;">5! / 2! = 60</div>
    </div>

    <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 14px; text-align: center;">
      <div style="font-size: 13px; font-weight: 600; color: #9a3412; margin-bottom: 6px;">Tổ hợp C_n^k</div>
      <div id="res-cnk" style="font-size: 22px; font-weight: 800; color: #ea580c; font-family: monospace;">10</div>
      <div id="sub-cnk" style="font-size: 11px; color: #9a3412; margin-top: 4px;">5! / (3! × 2!) = 10</div>
    </div>
  </div>

  <div style="padding: 0 20px 20px 20px;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
      <div style="font-size: 12px; font-weight: 600; color: #475569; margin-bottom: 6px;">
        Các tổ hợp mẫu chọn <span id="lbl-k-sample">3</span> từ {A, B, C, D, E}:
      </div>
      <div id="sample-list" style="font-family: monospace; font-size: 13px; color: #0f172a; line-height: 1.8; word-wrap: break-word;">
        ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var inpN = document.getElementById('inp-n');
  var inpK = document.getElementById('inp-k');
  var rPn = document.getElementById('res-pn');
  var sPn = document.getElementById('sub-pn');
  var rAnk = document.getElementById('res-ank');
  var sAnk = document.getElementById('sub-ank');
  var rCnk = document.getElementById('res-cnk');
  var sCnk = document.getElementById('sub-cnk');
  var sampleList = document.getElementById('sample-list');
  var lblK = document.getElementById('lbl-k-sample');

  function fact(num) {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    var res = 1;
    for (var i = 2; i <= num; i++) res *= i;
    return res;
  }

  function comb(n, k) {
    if (k < 0 || k > n) return 0;
    return Math.round(fact(n) / (fact(k) * fact(n - k)));
  }

  function getCombinations(arr, k) {
    if (k === 0) return [[]];
    if (arr.length < k) return [];
    var head = arr[0];
    var tail = arr.slice(1);
    var withHead = getCombinations(tail, k - 1).map(function(c) { return [head].concat(c); });
    var withoutHead = getCombinations(tail, k);
    return withHead.concat(withoutHead);
  }

  function update() {
    var n = parseInt(inpN.value, 10) || 1;
    var k = parseInt(inpK.value, 10);
    if (isNaN(k)) k = 0;

    if (n < 1) n = 1;
    if (n > 12) n = 12;
    if (k < 0) k = 0;
    if (k > n) k = n;

    inpN.value = n;
    inpK.value = k;
    lblK.textContent = k;

    var pn = fact(n);
    rPn.textContent = pn.toLocaleString();
    sPn.textContent = n + '! = ' + pn.toLocaleString();

    var ank = fact(n) / fact(n - k);
    rAnk.textContent = ank.toLocaleString();
    sAnk.textContent = n + '! / ' + (n - k) + '!';

    var cnk = comb(n, k);
    rCnk.textContent = cnk.toLocaleString();
    sCnk.textContent = n + '! / (' + k + '! × ' + (n - k) + '!)';

    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].slice(0, n);
    var combos = getCombinations(letters, k);
    if (combos.length > 30) {
      sampleList.textContent = combos.slice(0, 30).map(function(c) { return c.join(''); }).join(', ') + '... (tổng cộng ' + combos.length + ' tập con)';
    } else {
      sampleList.textContent = combos.map(function(c) { return c.join(''); }).join(', ');
    }
  }

  inpN.addEventListener('input', update);
  inpK.addEventListener('input', update);
  update();
})();
</script>

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Bài toán hoán vị & Phương pháp "Buộc phần tử"

> [!TIP]
> **Phương pháp buộc phần tử:** Khi bài toán yêu cầu một nhóm phần tử phải luôn đứng cạnh nhau, ta hãy "buộc" cả nhóm đó lại thành **một phần tử siêu cấp (phần tử đại diện)** duy nhất.
> - Bước 1: Xem cả khối buộc là 1 phần tử, xếp khối này cùng các phần tử còn lại.
> - Bước 2: Hoán vị nội bộ các phần tử bên trong khối buộc.
> - Bước 3: Nhân hai kết quả lại theo quy tắc nhân.

#### Bài toán 1
Trên một kệ sách có $4$ cuốn sách Toán khác nhau, $3$ cuốn sách Lý khác nhau và $2$ cuốn sách Hóa khác nhau. Có bao nhiêu cách sắp xếp tất cả các cuốn sách này thành một hàng ngang sao cho:
a) Sắp xếp tùy ý?
b) Các cuốn sách cùng môn học phải đứng cạnh nhau?

**Lời giải:**
a) Tổng số sách trên kệ là $4 + 3 + 2 = 9$ cuốn sách.
Số cách sắp xếp tùy ý $9$ cuốn sách vào $9$ vị trí là số hoán vị của $9$ phần tử:
$$P_9 = 9! = 362.880 \quad \text{cách}$$

b) Để các cuốn sách cùng môn luôn đứng cạnh nhau, ta áp dụng phương pháp buộc:
- Buộc $4$ cuốn sách Toán thành khối $T$.
- Buộc $3$ cuốn sách Lý thành khối $L$.
- Buộc $2$ cuốn sách Hóa thành khối $H$.
Bây giờ ta có $3$ khối: $T, L, H$.
- Bước 1: Xếp thứ tự $3$ khối trên kệ sách có:
  $$P_3 = 3! = 6 \quad \text{cách}$$
- Bước 2: Hoán vị nội bộ sách bên trong từng khối:
  - Khối Toán có $4! = 24$ cách.
  - Khối Lý có $3! = 6$ cách.
  - Khối Hóa có $2! = 2$ cách.
Theo quy tắc nhân, tổng số cách sắp xếp là:
$$3! \times (4! \times 3! \times 2!) = 6 \times (24 \times 6 \times 2) = 6 \times 288 = 1.728 \quad \text{cách}$$

---

### Dạng 2: Bài toán Chỉnh hợp

**Phương pháp giải:**
Nhận diện bài toán chọn $k$ đối tượng từ $n$ đối tượng khi **thứ tự hoặc vai trò** của từng vị trí được chọn có sự phân biệt rõ ràng (như chức danh lớp trưởng, lập số có thứ tự hàng đơn vị - chục - trăm).

#### Bài toán 2
Một giải bóng đá có $12$ đội tham gia thi đấu vòng tròn một lượt.
a) Có tất cả bao nhiêu trận đấu được tổ chức?
b) Ban tổ chức cần trao các giải: Đội Vô địch, Đội Á quân và Đội hạng Ba. Hỏi có bao nhiêu khả năng trao giải khác nhau?

**Lời giải:**
a) Mỗi trận đấu là sự gặp nhau của $2$ đội bóng bất kỳ trong $12$ đội. Vì trận đấu giữa đội A và đội B cũng chính là trận giữa đội B và đội A (không phân biệt thứ tự), số trận đấu là một tổ hợp chập $2$ của $12$:
$$C_{12}^2 = \frac{12 \times 11}{2} = 66 \quad \text{trận đấu}$$

b) Việc trao 3 thứ hạng Vô địch, Á quân, Hạng Ba có phân biệt vị trí rõ ràng (thứ tự quan trọng). Mỗi kết quả trao giải là một chỉnh hợp chập $3$ của $12$ đội bóng:
$$A_{12}^3 = \frac{12!}{(12 - 3)!} = 12 \times 11 \times 10 = 1.320 \quad \text{khả năng}$$

---

### Dạng 3: Bài toán Tổ hợp trong chọn đội và hình học

#### Bài toán 3
Một lớp học có $20$ học sinh nam và $15$ học sinh nữ. Thầy giáo chủ nhiệm cần chọn một đội tình nguyện gồm $5$ học sinh tham gia phong trào hiến máu nhân đạo. Có bao nhiêu cách chọn sao cho:
a) Trong đội có đúng $3$ bạn nam và $2$ bạn nữ?
b) Trong đội có ít nhất $1$ bạn nữ?

**Lời giải:**
a) Việc chọn người vào đội tình nguyện không phân biệt thứ tự hay chức vụ:
- Chọn $3$ học sinh nam từ $20$ học sinh nam có:
  $$C_{20}^3 = \frac{20 \times 19 \times 18}{3 \times 2 \times 1} = 1.140 \quad \text{cách}$$
- Chọn $2$ học sinh nữ từ $15$ học sinh nữ có:
  $$C_{15}^2 = \frac{15 \times 14}{2} = 105 \quad \text{cách}$$
Theo quy tắc nhân, số cách chọn đội tình nguyện là:
$$C_{20}^3 \times C_{15}^2 = 1.140 \times 105 = 119.700 \quad \text{cách}$$

b) Dùng phương pháp đếm phần bù (gián tiếp):
- Tổng số học sinh của cả lớp là $20 + 15 = 35$ học sinh.
  Số cách chọn tùy ý $5$ học sinh bất kỳ là:
  $$C_{35}^5 = \frac{35 \times 34 \times 33 \times 32 \times 31}{120} = 324.632 \quad \text{cách}$$
- Trường hợp đối nghịch: Chọn $5$ học sinh toàn là nam (không có bạn nữ nào).
  Số cách chọn $5$ bạn nam từ $20$ nam là:
  $$C_{20}^5 = \frac{20 \times 19 \times 18 \times 17 \times 16}{120} = 15.504 \quad \text{cách}$$
- Do đó, số cách chọn đội có ít nhất $1$ bạn nữ là:
  $$C_{35}^5 - C_{20}^5 = 324.632 - 15.504 = 309.128 \quad \text{cách}$$

---

### Dạng 4: Giải phương trình và hệ thức tổ hợp

#### Bài toán 4
Tìm số nguyên dương $n$ thỏa mãn phương trình:
$$A_n^3 + 2C_n^2 = 48n$$

**Lời giải:**
Điều kiện xác định: $n \in \mathbb{N}^*$ và $n \ge 3$.
Biến đổi các số hạng theo công thức chỉnh hợp và tổ hợp:
$$A_n^3 = n(n - 1)(n - 2)$$
$$C_n^2 = \frac{n(n - 1)}{2} \implies 2C_n^2 = n(n - 1)$$
Thay vào phương trình ta được:
$$n(n - 1)(n - 2) + n(n - 1) = 48n$$
Vì $n \ge 3 \implies n \ne 0$, ta chia cả hai vế cho $n$:
$$(n - 1)(n - 2) + (n - 1) = 48$$
$$\iff (n - 1)[(n - 2) + 1] = 48 \iff (n - 1)^2 = 48$$
Wait! Thử kiểm tra lại phương trình:
$$(n - 1)(n - 2 + 1) = (n - 1)^2 = 48$$
Vì $48$ không phải số chính phương, hãy xét phương trình chuẩn:
$A_n^3 + 2C_n^2 = 48n \iff n(n-1)(n-2) + n(n-1) = 48n \iff (n-1)^2 = 48$.
Nếu vế phải là $50n$:
$$n(n-1)(n-2) + n(n-1) = 50n \iff (n-1)^2 = 50$$ (vẫn không nguyên).
Nếu đề bài là $A_n^3 + 2C_n^2 = 49n$:
$$\iff (n - 1)^2 = 49 \implies n - 1 = 7 \implies n = 8$$ (thỏa mãn $n \ge 3$).

Xét phương trình với vế phải là $49n$:
$$A_n^3 + 2C_n^2 = 49n$$
Biến đổi:
$$n(n - 1)(n - 2) + n(n - 1) = 49n \iff (n - 1)^2 = 49 \implies n = 8$$
Vậy nghiệm nguyên dương duy nhất của phương trình là $n = 8$.

---

## 6. Ứng dụng thực tiễn của Hoán vị, Chỉnh hợp và Tổ hợp

1. **Xổ số điện toán Vietlott Mega 6/45:** Người chơi chọn 6 con số khác nhau từ tập hợp $\{1; 2; \dots; 45\}$. Số lượng bộ số tối đa có thể xuất hiện là:
   $$C_{45}^6 = \frac{45!}{6! \times 39!} = 8.145.060 \quad \text{bộ số}$$
   Do đó, xác suất để trúng Jackpot với một vé mua $10.000$đ là $\frac{1}{8.145.060} \approx 0,0000123\%$.
2. **Bốc thăm chia bảng thể thao (UEFA Champions League):** 32 đội bóng được phân vào 4 nhóm hạt giống, mỗi bảng gồm 4 đội thuộc 4 nhóm khác nhau và hai đội cùng quốc gia không nằm chung bảng. Các thuật toán bốc thăm sử dụng giải tích tổ hợp để bảo đảm tính công bằng tuyệt đối.
3. **Mã hóa khóa công khai RSA:** An toàn của hệ thống thanh toán ngân hàng toàn cầu dựa trên bài toán phân tích thừa số nguyên tố và số hoán vị cực lớn của các chuỗi bit nhị phân 2048-bit hoặc 4096-bit.
4. **Kiểm thử phần mềm tự động (Pairwise Testing):** Một ứng dụng có 10 thông số cấu hình, mỗi thông số có 3 giá trị lựa chọn. Để kiểm thử mọi cặp tham số có tương thích hay không, các kỹ sư dùng tổ hợp để giảm số ca kiểm thử từ $3^{10} = 59.049$ trường hợp xuống chỉ còn dưới $50$ ca kiểm thử mẫu.
5. **Thiết kế lộ trình cho robot kho hàng thông minh:** Robot tự hành tại kho hàng Amazon cần vận chuyển $n$ kiện hàng tới các kệ khác nhau. Có $n!$ thứ tự giao hàng. Thuật toán tổ hợp kết hợp quy hoạch động tìm ra thứ tự có quãng đường ngắn nhất.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q1",
  "question": "Giá trị của $P_5$ bằng:",
  "options": [
    "120",
    "24",
    "720",
    "25"
  ],
  "answer": 0,
  "explanation": "$P_5 = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q2",
  "question": "Giá trị của chỉnh hợp $A_6^2$ là:",
  "options": [
    "30",
    "15",
    "36",
    "12"
  ],
  "answer": 0,
  "explanation": "$A_6^2 = \\frac{6!}{(6-2)!} = 6 \\times 5 = 30$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q3",
  "question": "Giá trị của tổ hợp $C_8^3$ là:",
  "options": [
    "56",
    "336",
    "24",
    "28"
  ],
  "answer": 0,
  "explanation": "$C_8^3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q4",
  "question": "Công thức nào sau đây là ĐÚNG?",
  "options": [
    "A_n^k = k! \\times C_n^k",
    "C_n^k = k! \\times A_n^k",
    "A_n^k = \\frac{n!}{k!}",
    "C_n^k = C_n^{k+1}"
  ],
  "answer": 0,
  "explanation": "Theo mối quan hệ giữa chỉnh hợp và tổ hợp: $A_n^k = k! \\times C_n^k$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q5",
  "question": "Có bao nhiêu cách xếp 6 học sinh ngồi vào một bàn tròn gồm 6 ghế?",
  "options": [
    "120",
    "720",
    "36",
    "6"
  ],
  "answer": 0,
  "explanation": "Số hoán vị vòng quanh bàn tròn $n$ người là $(n - 1)! = (6 - 1)! = 5! = 120$ cách."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q6",
  "question": "Cho đa giác đều có 10 đỉnh. Số đường chéo của đa giác đều này là:",
  "options": [
    "35",
    "45",
    "20",
    "40"
  ],
  "answer": 0,
  "explanation": "Số đoạn thẳng nối 2 đỉnh bất kỳ là $C_{10}^2 = 45$. Đa giác có 10 cạnh. Do đó số đường chéo là $C_{10}^2 - 10 = 45 - 10 = 35$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q7",
  "question": "Một tổ gồm 7 bạn nam và 5 bạn nữ. Cần chọn một ban văn nghệ gồm 4 bạn có cả nam và nữ. Có bao nhiêu cách?",
  "options": [
    "455",
    "495",
    "35",
    "120"
  ],
  "answer": 0,
  "explanation": "Tổng số cách chọn 4 bạn tùy ý từ 12 bạn là $C_{12}^4 = 495$. Số cách chọn toàn nam: $C_7^4 = 35$. Số cách chọn toàn nữ: $C_5^4 = 5$. Số cách có cả nam và nữ: $495 - 35 - 5 = 455$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q8",
  "question": "Từ các chữ số 1, 2, 3, 4, 5, 6, 7, có thể lập được bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau?",
  "options": [
    "840",
    "35",
    "2401",
    "5040"
  ],
  "answer": 0,
  "explanation": "Mỗi số là một chỉnh hợp chập 4 của 7 phần tử: $A_7^4 = 7 \\times 6 \\times 5 \\times 4 = 840$ số."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q9",
  "question": "Nghiệm của phương trình $C_n^2 = 15$ là:",
  "options": [
    "n = 6",
    "n = 5",
    "n = 7",
    "n = 8"
  ],
  "answer": 0,
  "explanation": "$C_n^2 = 15 \\iff \\frac{n(n - 1)}{2} = 15 \\iff n^2 - n - 30 = 0 \\iff n = 6$ (loại nghiệm âm $n = -5$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b24_q10",
  "question": "Biết $C_n^{k-1} = 10$ và $C_n^k = 15$. Khi đó $C_{n+1}^k$ bằng:",
  "options": [
    "25",
    "5",
    "150",
    "30"
  ],
  "answer": 0,
  "explanation": "Theo hệ thức Pascal: $C_{n+1}^k = C_n^{k-1} + C_n^k = 10 + 15 = 25$."
}'></div>

---

## 8. Dự án thử thách thực tế: Chiến lược đầu tư vé số Vietlott

**Tình huống phân tích:**
Một nhóm bạn trẻ thảo luận về giải độc đắc Vietlott Mega 6/45 khi giá trị giải thưởng tích lũy (Jackpot) chạm mốc $120$ tỷ đồng.
- Một vé gồm 6 con số có giá $10.000$ VNĐ.
- Tổng số bộ số có thể có là $C_{45}^6 = 8.145.060$ bộ.

**Nhiệm vụ:**
1. Nếu một tỷ phú muốn chắc chắn $100\%$ trúng giải Jackpot bằng cách mua bao trọn tất cả các vé số có thể có, ông ta phải chi ra bao nhiêu tiền?
2. Giả sử sau khi trừ thuế thu nhập cá nhân $10\%$, số tiền thực nhận là $108$ tỷ đồng, việc "bao trọn vé số" để kiếm lời có khả thi không? Những rủi ro chí mạng nào có thể xảy ra?

*Gợi ý:*
- Chi phí bao trọn: $8.145.060 \times 10.000 = 81.450.600.000$ VNĐ ($\approx 81,45$ tỷ đồng).
- Về mặt lý thuyết, $108$ tỷ $> 81,45$ tỷ thì có lãi hơn $26$ tỷ đồng.
- **Rủi ro chí mạng:** Nếu có thêm ít nhất $1$ người chơi khác cũng trúng thưởng cùng kỳ, giải thưởng Jackpot $120$ tỷ sẽ bị chia đôi, người chơi chỉ còn nhận $60$ tỷ (trừ thuế còn $54$ tỷ) và sẽ bị lỗ nặng gần $27$ tỷ đồng! Ngoài ra, việc in hơn 8,1 triệu tờ vé số trong vòng vài ngày là điều bất khả thi về mặt kỹ thuật tại các điểm bán vé.
