---
title: "Toán 11 Bài 27: Thể tích của một số khối đa diện - Công thức & Bài tập"
description: "Tổng hợp toàn diện công thức tính thể tích khối chóp, khối lăng trụ, chóp cụt đều và định lí tỉ số thể tích Simson. Kèm mô hình 3D tương tác xoay đa chiều và trắc nghiệm tự chấm."
category: Toán học
type: Bài học
date: "2026-10-16"
tags:
  - Toán học
  - Toán 11
  - Hình học không gian
  - Thể tích
  - Thể tích khối chóp
  - Thể tích khối lăng trụ
  - Tỉ số thể tích Simson
---

# Toán 11 Bài 27: Thể tích của một số khối đa diện

Từ thời cổ đại, khi người Ai Cập xây dựng Đại Kim tự tháp Giza với hơn 2,3 triệu khối đá vôi, nhu cầu đo lường lượng không gian chiếm chỗ của một vật thể đã khai sinh ra khái niệm **Thể tích**. 

Trong kỹ thuật xây dựng ngày nay, việc tính toán chính xác thể tích bê tông tươi cần đổ cho móng cọc, thể tích đất cần đào đắp cho hầm đường bộ, hay dung tích của các bể chứa dầu hình khối chữ nhật là nhiệm vụ thiết yếu của mọi kỹ sư. Trong bài học này, chúng ta sẽ làm chủ hệ thống công thức thể tích của các khối đa diện kinh điển!

---

## Sơ đồ Tư duy: Bản đồ Công thức Thể tích Khối Đa diện

```mermaid
flowchart TD
    A["THỂ TÍCH KHỐI ĐA DIỆN"] --> B["Khối Lăng Trụ<br/>V = B . h"]
    A --> C["Khối Chóp<br/>V = 1/3 . B . h"]
    A --> D["Khối Chóp Cụt Đều<br/>V = 1/3 . h . (S1 + S2 + √(S1 . S2))"]
    
    B --> B1["Hộp chữ nhật: V = a . b . c"]
    B --> B2["Lập phương: V = a³"]
    B --> B3["Lăng trụ đứng: h = độ dài cạnh bên"]
    
    C --> C1["Chóp có cạnh bên ⊥ đáy:<br/>h = cạnh bên"]
    C --> C2["Chóp đều:<br/>h = SO (O là tâm đáy)"]
    C --> C3["TỈ SỐ THỂ TÍCH SIMSON (đáy tam giác):<br/>V(S.A'B'C') / V(S.ABC) = (SA'/SA) . (SB'/SB) . (SC'/SC)"]
    
    style A fill:#eff6ff,stroke:#2563eb,stroke-width:2px;
    style B fill:#ecfdf5,stroke:#10b981,stroke-width:2px;
    style C fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;
    style C3 fill:#fef2f2,stroke:#ef4444,stroke-width:2px;
```

---

## Khởi động Nhanh: 5 Câu Hỏi Trắc nghiệm Đầu Giờ

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Khởi động: Kiểm tra Nhớ nhanh Công thức</h3>

<div class="quiz-item" data-quiz="kd1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Khối chóp có diện tích đáy bằng $B$ và chiều cao bằng $h$ có thể tích là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd1" value="A"> A. $V = B \cdot h$.</label><br>
    <label><input type="radio" name="kd1" value="B"> B. $V = \dfrac{1}{3} B \cdot h$.</label><br>
    <label><input type="radio" name="kd1" value="C"> C. $V = \dfrac{1}{2} B \cdot h$.</label><br>
    <label><input type="radio" name="kd1" value="D"> D. $V = \dfrac{1}{6} B \cdot h$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Thể tích khối chóp luôn bằng một phần ba tích diện tích đáy và chiều cao: $V = \dfrac{1}{3} Bh$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Khối lập phương có cạnh bằng $2a$ thì thể tích bằng bao nhiêu?</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd2" value="A"> A. $2a^3$.</label><br>
    <label><input type="radio" name="kd2" value="B"> B. $4a^3$.</label><br>
    <label><input type="radio" name="kd2" value="C"> C. $8a^3$.</label><br>
    <label><input type="radio" name="kd2" value="D"> D. $6a^2$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. Thể tích hình lập phương cạnh $x$ là $x^3 \implies (2a)^3 = 8a^3$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Một khối hộp chữ nhật có ba kích thước lần lượt là $a, 2a, 3a$. Thể tích của khối hộp đó là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd3" value="A"> A. $6a^3$.</label><br>
    <label><input type="radio" name="kd3" value="B"> B. $2a^3$.</label><br>
    <label><input type="radio" name="kd3" value="C"> C. $a^3$.</label><br>
    <label><input type="radio" name="kd3" value="D"> D. $12a^3$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. $V = a \cdot b \cdot c = a \cdot 2a \cdot 3a = 6a^3$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho khối chóp $S.ABC$. Lấy $M$ là trung điểm của $SA$. Tỉ số thể tích $\dfrac{V_{S.MBC}}{V_{S.ABC}}$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd4" value="A"> A. $\dfrac{1}{2}$.</label><br>
    <label><input type="radio" name="kd4" value="B"> B. $\dfrac{1}{4}$.</label><br>
    <label><input type="radio" name="kd4" value="C"> C. $\dfrac{1}{8}$.</label><br>
    <label><input type="radio" name="kd4" value="D"> D. $\dfrac{1}{3}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Áp dụng tỉ số thể tích Simson: $\dfrac{V_{S.MBC}}{V_{S.ABC}} = \dfrac{SM}{SA} \cdot \dfrac{SB}{SB} \cdot \dfrac{SC}{SC} = \dfrac{1}{2} \cdot 1 \cdot 1 = \dfrac{1}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho hình lăng trụ có diện tích đáy $B = 10\text{ cm}^2$ và chiều cao $h = 6\text{ cm}$. Thể tích của lăng trụ đó là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd5" value="A"> A. $20\text{ cm}^3$.</label><br>
    <label><input type="radio" name="kd5" value="B"> B. $30\text{ cm}^3$.</label><br>
    <label><input type="radio" name="kd5" value="C"> C. $60\text{ cm}^3$.</label><br>
    <label><input type="radio" name="kd5" value="D"> D. $120\text{ cm}^3$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. Thể tích khối lăng trụ là $V = B \cdot h = 10 \cdot 6 = 60\text{ cm}^3$. (Lưu ý: Không có hệ số $\frac{1}{3}$).
  </div>
</div>

<button id="btnCheckKD" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Kiểm tra đáp án Khởi động</button>
</div>

---

## I. Lý thuyết Trọng tâm

### 1. Thể tích khối lăng trụ
> **Công thức chung:** Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ là:
> $$V = B \cdot h$$

- **Khối hộp chữ nhật:** Có ba kích thước $a, b, c$:
  $$V = a \cdot b \cdot c$$
- **Khối lập phương:** Có cạnh bằng $a$:
  $$V = a^3$$
- **Lăng trụ đứng:** Chiều cao $h$ chính là độ dài của cạnh bên. Do đó $V = S_{\text{đáy}} \cdot (\text{cạnh bên})$.

---

### 2. Thể tích khối chóp
> **Công thức chung:** Thể tích của khối chóp có diện tích đáy $B$ và chiều cao $h$ là:
> $$V = \frac{1}{3} B \cdot h$$

- Chiều cao $h = d(S, (\text{đáy}))$ là khoảng cách từ đỉnh $S$ đến mặt phẳng đáy.
- **Tứ diện vuông $OABC$:** (có $OA, OB, OC$ đôi một vuông góc tại $O$):
  $$V = \frac{1}{6} OA \cdot OB \cdot OC$$
- **Tứ diện đều cạnh $a$:**
  $$V = \frac{a^3\sqrt{2}}{12}$$

---

### 3. Thể tích khối chóp cụt đều
> **Công thức:** Thể tích khối chóp cụt đều có chiều cao $h$, diện tích hai đáy lần lượt là $S_1$ và $S_2$:
> $$V = \frac{1}{3} h \left( S_1 + S_2 + \sqrt{S_1 \cdot S_2} \right)$$

---

### 4. Công thức tỉ số thể tích Simson (Dành riêng cho chóp tam giác)
> Cho hình chóp $S.ABC$. Trên các tia $SA, SB, SC$ lần lượt lấy các điểm $A', B', C'$ (khác $S$). Khi đó:
> $$\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \frac{SA'}{SA} \cdot \frac{SB'}{SB} \cdot \frac{SC'}{SC}$$

> **Cảnh báo cực kì quan trọng:** Định lí Simson **chỉ đúng cho khối chóp đáy tam giác**. Tuyệt đối **không được áp dụng trực tiếp** cho khối chóp đáy tứ giác $S.ABCD$! Đối với chóp đáy tứ giác, bắt buộc phải chia đôi đáy bằng đường chéo $AC$ hoặc $BD$ thành hai khối chóp tam giác $S.ABC$ và $S.ACD$ rồi mới áp dụng Simson cho từng nửa.

---

## II. Phòng thí nghiệm 3D Tương tác: Thể tích Khối Chóp Biến thiên

Hãy kéo thanh trượt để thay đổi **Chiều cao $h$** và **Độ rộng đáy $a$** của khối chóp tứ giác $S.ABCD$. Khối hình 3D sẽ co giãn trực tiếp và máy tính sẽ tính ngay thể tích thực theo thời gian thực! Em cũng có thể kéo chuột để xoay khối hình 3D trong không gian.

<div class="interactive-3d-box" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
  <h3 style="margin-top: 0; color: #2563eb;">PHÒNG THÍ NGHIỆM 3D: THỂ TÍCH KHỐI CHÓP THEO KÍCH THƯỚC</h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    <em>Điều chỉnh thanh trượt chiều cao và cạnh đáy để quan sát sự thay đổi thể tích.</em>
  </p>

  <div style="position: relative; max-width: 580px; margin: 0 auto; user-select: none;">
    <svg id="svgVol3D" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06); cursor: grab; touch-action: none;">
      <g id="gVolFaces"></g>
      <g id="gVolEdges"></g>
      <g id="gVolVertices"></g>
      <g id="gVolLabels"></g>
    </svg>

    <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <div>
        <label style="font-weight: bold; color: #334155;">Cạnh đáy $a$: <span id="valSide">6 cm</span></label>
        <input id="sliderSide" type="range" min="3" max="10" step="0.5" value="6" style="width: 100%; margin-top: 4px;">
      </div>
      <div>
        <label style="font-weight: bold; color: #334155;">Chiều cao $h$: <span id="valHeight">8 cm</span></label>
        <input id="sliderHeight" type="range" min="3" max="12" step="0.5" value="8" style="width: 100%; margin-top: 4px;">
      </div>
    </div>
  </div>

  <div style="margin-top: 12px; padding: 12px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe; font-size: 0.95em; color: #1e40af;">
    <strong>Tính toán tức thì:</strong><br>
    Diện tích đáy: $B = a^2 = $ <span id="outArea" style="font-weight:bold;">36.00</span> $\text{cm}^2$<br>
    Thể tích khối chóp: $V = \frac{1}{3} B \cdot h = \frac{1}{3} \times $ <span id="outArea2">36.00</span> $\times$ <span id="outH">8.00</span> = <strong id="outVol" style="color:#dc2626; font-size:1.15em;">96.00</strong> $\text{cm}^3$
  </div>
</div>

<script>
(function(){
  var yaw = 35 * Math.PI / 180;
  var pitch = 22 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;
  var side = 6;
  var hVal = 8;

  function project(p) {
    var x = p[0], y = p[1], z = p[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var y2 = y * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y * Math.sin(pitch) + z1 * Math.cos(pitch);
    return {
      x: 270 + x1 * 1.5,
      y: 200 - y2 * 1.5,
      z: z2
    };
  }

  function render() {
    var scaleS = side * 12;
    var scaleH = hVal * 12;

    var V = {
      'S': [0, scaleH/2, 0],
      'A': [-scaleS/2, -scaleH/2, -scaleS/2],
      'B': [scaleS/2, -scaleH/2, -scaleS/2],
      'C': [scaleS/2, -scaleH/2, scaleS/2],
      'D': [-scaleS/2, -scaleH/2, scaleS/2],
      'O': [0, -scaleH/2, 0]
    };

    var pProj = {};
    for (var k in V) pProj[k] = project(V[k]);

    // Faces
    var faces = [
      { pts: ['A', 'B', 'C', 'D'], fill: '#3b82f6', op: 0.1 },
      { pts: ['S', 'A', 'B'], fill: '#6366f1', op: 0.08 },
      { pts: ['S', 'B', 'C'], fill: '#10b981', op: 0.1 },
      { pts: ['S', 'C', 'D'], fill: '#f59e0b', op: 0.08 },
      { pts: ['S', 'D', 'A'], fill: '#ec4899', op: 0.06 }
    ];
    var htmlFaces = '';
    faces.forEach(function(f){
      var ptsStr = f.pts.map(function(pt){ return pProj[pt].x+','+pProj[pt].y; }).join(' ');
      htmlFaces += '<polygon points="'+ptsStr+'" fill="'+f.fill+'" fill-opacity="'+f.op+'"/>';
    });
    document.getElementById('gVolFaces').innerHTML = htmlFaces;

    // Edges
    var edges = [
      { p1: 'S', p2: 'O', col: '#dc2626', w: 2.5, dash: '4,3' }, // height
      { p1: 'A', p2: 'C', col: '#94a3b8', w: 1, dash: '3,3' },
      { p1: 'B', p2: 'D', col: '#94a3b8', w: 1, dash: '3,3' },
      { p1: 'A', p2: 'B', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'B', p2: 'C', col: '#334155', w: 2 },
      { p1: 'C', p2: 'D', col: '#334155', w: 2 },
      { p1: 'D', p2: 'A', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'S', p2: 'A', col: '#475569', w: 1.5, dash: '4,4' },
      { p1: 'S', p2: 'B', col: '#334155', w: 2 },
      { p1: 'S', p2: 'C', col: '#334155', w: 2.5 },
      { p1: 'S', p2: 'D', col: '#334155', w: 2 }
    ];
    var htmlEdges = '';
    edges.forEach(function(e){
      var p1 = pProj[e.p1], p2 = pProj[e.p2];
      var d = e.dash ? ' stroke-dasharray="'+e.dash+'"' : '';
      htmlEdges += '<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+e.col+'" stroke-width="'+e.w+'"'+d+' stroke-linecap="round"/>';
    });
    document.getElementById('gVolEdges').innerHTML = htmlEdges;

    // Vertices & labels
    var htmlVert = '';
    var htmlLabels = '';
    for (var k in pProj) {
      var p = pProj[k];
      var col = (k === 'S' || k === 'O') ? '#dc2626' : '#1e293b';
      htmlVert += '<circle cx="'+p.x+'" cy="'+p.y+'" r="4" fill="'+col+'"/>';
      htmlLabels += '<text x="'+(p.x+7)+'" y="'+(p.y-5)+'" fill="#0f172a" font-weight="bold" font-size="13">'+k+'</text>';
    }
    document.getElementById('gVolVertices').innerHTML = htmlVert;
    document.getElementById('gVolLabels').innerHTML = htmlLabels;

    // Numerical updates
    var area = side * side;
    var vol = (1/3) * area * hVal;
    document.getElementById('valSide').textContent = side.toFixed(1) + ' cm';
    document.getElementById('valHeight').textContent = hVal.toFixed(1) + ' cm';
    document.getElementById('outArea').textContent = area.toFixed(2);
    document.getElementById('outArea2').textContent = area.toFixed(2);
    document.getElementById('outH').textContent = hVal.toFixed(2);
    document.getElementById('outVol').textContent = vol.toFixed(2);
  }

  var svg = document.getElementById('svgVol3D');
  svg.addEventListener('pointerdown', function(e){
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', function(e){
    if (!isDragging) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    yaw += dx * 0.01;
    pitch -= dy * 0.01;
    pitch = Math.max(-Math.PI/3, Math.min(Math.PI/3, pitch));
    startX = e.clientX;
    startY = e.clientY;
    render();
  });
  function stopDrag(){ isDragging = false; }
  svg.addEventListener('pointerup', stopDrag);
  svg.addEventListener('pointercancel', stopDrag);

  document.getElementById('sliderSide').addEventListener('input', function(e){
    side = parseFloat(e.target.value);
    render();
  });
  document.getElementById('sliderHeight').addEventListener('input', function(e){
    hVal = parseFloat(e.target.value);
    render();
  });

  render();
})();
</script>

---

## III. Các Dạng Toán Điển Hình và Phương Pháp Giải

### Dạng 1: Tính thể tích khối chóp có cạnh bên vuông góc với đáy

---

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA \perp (ABCD)$. Cạnh bên $SC$ tạo với mặt phẳng đáy một góc $60^\circ$. Tính theo $a$ thể tích của khối chóp $S.ABCD$.

**Lời giải chi tiết:**
1. **Tính diện tích đáy:**
   Đáy $ABCD$ là hình vuông cạnh $a$ nên:
   $$B = S_{ABCD} = a^2$$
2. **Xác định và tính chiều cao $SA$:**
   - Vì $SA \perp (ABCD)$ nên $A$ là hình chiếu của $S$ lên $(ABCD)$.
   - Hình chiếu của $SC$ lên mặt phẳng đáy là đoạn thẳng $AC$.
   - Do đó, góc giữa $SC$ và đáy là góc $\widehat{SCA} = 60^\circ$.
   - Vì $ABCD$ là hình vuông cạnh $a$ nên độ dài đường chéo $AC = a\sqrt{2}$.
   - Xét tam giác $SAC$ vuông tại $A$:
     $$SA = AC \cdot \tan 60^\circ = a\sqrt{2} \cdot \sqrt{3} = a\sqrt{6}$$
3. **Tính thể tích:**
   $$V = \frac{1}{3} \cdot B \cdot SA = \frac{1}{3} \cdot a^2 \cdot a\sqrt{6} = \frac{a^3\sqrt{6}}{3}$$

---

### Dạng 2: Tính thể tích khối chóp đều

---

#### Ví dụ 2:
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt phẳng đáy bằng $45^\circ$. Tính thể tích khối chóp $S.ABCD$.

**Lời giải chi tiết:**
1. **Diện tích đáy:** $B = S_{ABCD} = a^2$.
2. **Xác định tâm đáy và góc giữa mặt bên với đáy:**
   - Gọi $O$ là giao điểm của $AC$ và $BD$. Vì $S.ABCD$ là chóp đều nên $SO \perp (ABCD)$. Chiều cao của chóp là $h = SO$.
   - Gọi $M$ là trung điểm của cạnh $CD$.
   - Vì $\triangle OCD$ vuông cân tại $O$ nên $OM \perp CD$ và $OM = \dfrac{AD}{2} = \dfrac{a}{2}$.
   - Theo định lí ba đường vuông góc, $SM \perp CD$.
   - Do đó, góc giữa mặt bên $(SCD)$ và đáy $(ABCD)$ là góc $\widehat{SMO} = 45^\circ$.
3. **Tính chiều cao $SO$:**
   - Xét tam giác vuông $SOM$ vuông tại $O$:
     $$SO = OM \cdot \tan 45^\circ = \frac{a}{2} \cdot 1 = \frac{a}{2}$$
4. **Tính thể tích khối chóp:**
   $$V = \frac{1}{3} \cdot B \cdot SO = \frac{1}{3} \cdot a^2 \cdot \frac{a}{2} = \frac{a^3}{6}$$

---

### Dạng 3: Bài toán Tỉ số Thể tích (Định lí Simson)

---

#### Ví dụ 3:
Cho khối chóp $S.ABC$ có thể tích $V = 36\text{ cm}^3$. Trên các cạnh $SA, SB, SC$ lần lượt lấy các điểm $M, N, P$ sao cho $SM = \dfrac{1}{3} SA$, $SN = \dfrac{1}{2} SB$, và $SP = \dfrac{2}{3} SC$. 
1. Tính thể tích khối chóp $S.MNP$.
2. Tính thể tích khối đa diện $ABCPNM$.

**Lời giải chi tiết:**
1. **Tính thể tích $S.MNP$:**
   - Áp dụng công thức tỉ số thể tích Simson cho chóp tam giác:
     $$\frac{V_{S.MNP}}{V_{S.ABC}} = \frac{SM}{SA} \cdot \frac{SN}{SB} \cdot \frac{SP}{SC} = \frac{1}{3} \cdot \frac{1}{2} \cdot \frac{2}{3} = \frac{2}{18} = \frac{1}{9}$$
   - Do đó:
     $$V_{S.MNP} = \frac{1}{9} V_{S.ABC} = \frac{1}{9} \cdot 36 = 4\text{ cm}^3$$
2. **Tính thể tích khối đa diện $ABCPNM$:**
   - Khối chóp $S.ABC$ được phân chia thành hai phần: khối chóp chóp đỉnh $S.MNP$ và khối chóp đa diện phía dưới $ABCPNM$.
   - Do đó:
     $$V_{ABCPNM} = V_{S.ABC} - V_{S.MNP} = 36 - 4 = 32\text{ cm}^3 .$$

---

## IV. Bài tập Trắc nghiệm Tự luyện (Chấm điểm Tức thì)

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Luyện tập Trắc nghiệm Toàn diện Bài 27</h3>

<div class="quiz-item" data-quiz="tn1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Thể tích của khối tứ diện vuông $OABC$ có $OA = 3, OB = 4, OC = 5$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn1" value="A"> A. $60$.</label><br>
    <label><input type="radio" name="tn1" value="B"> B. $20$.</label><br>
    <label><input type="radio" name="tn1" value="C"> C. $10$.</label><br>
    <label><input type="radio" name="tn1" value="D"> D. $30$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. $V = \dfrac{1}{6} OA \cdot OB \cdot OC = \dfrac{1}{6} \cdot 3 \cdot 4 \cdot 5 = 10$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $B$, $AB = a$, cạnh bên $AA' = a\sqrt{2}$. Thể tích của khối lăng trụ đó là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn2" value="A"> A. $\dfrac{a^3\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn2" value="B"> B. $\dfrac{a^3\sqrt{2}}{6}$.</label><br>
    <label><input type="radio" name="tn2" value="C"> C. $a^3\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn2" value="D"> D. $\dfrac{a^3}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. $S_{\triangle ABC} = \dfrac{1}{2} a^2$. Chiều cao $h = AA' = a\sqrt{2} \implies V = B \cdot h = \dfrac{1}{2} a^2 \cdot a\sqrt{2} = \dfrac{a^3\sqrt{2}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hình chóp tam giác đều có cạnh đáy bằng $a$ và chiều cao $h = a\sqrt{3}$. Thể tích khối chóp đó là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn3" value="A"> A. $\dfrac{a^3}{4}$.</label><br>
    <label><input type="radio" name="tn3" value="B"> B. $\dfrac{a^3\sqrt{3}}{4}$.</label><br>
    <label><input type="radio" name="tn3" value="C"> C. $\dfrac{a^3}{12}$.</label><br>
    <label><input type="radio" name="tn3" value="D"> D. $\dfrac{a^3\sqrt{3}}{12}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. $S_{\text{đáy}} = \dfrac{a^2\sqrt{3}}{4}$. Chiều cao $h = a\sqrt{3} \implies V = \dfrac{1}{3} B h = \dfrac{1}{3} \cdot \dfrac{a^2\sqrt{3}}{4} \cdot a\sqrt{3} = \dfrac{a^3}{4}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Nếu tăng cạnh của một khối lập phương lên $3$ lần thì thể tích của nó sẽ tăng lên bao nhiêu lần?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn4" value="A"> A. $3$ lần.</label><br>
    <label><input type="radio" name="tn4" value="B"> B. $9$ lần.</label><br>
    <label><input type="radio" name="tn4" value="C"> C. $27$ lần.</label><br>
    <label><input type="radio" name="tn4" value="D"> D. $6$ lần.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. Thể tích tỉ lệ với lập phương của kích thước: $V' = (3a)^3 = 27 a^3 = 27 V$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho khối chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Mặt bên $(SAB)$ là tam giác cân tại $S$ và nằm trong mặt phẳng vuông góc với đáy. Biết $SA = a$. Thể tích khối chóp $S.ABC$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn5" value="A"> A. $\dfrac{a^3}{8}$.</label><br>
    <label><input type="radio" name="tn5" value="B"> B. $\dfrac{a^3\sqrt{3}}{8}$.</label><br>
    <label><input type="radio" name="tn5" value="C"> C. $\dfrac{a^3}{12}$.</label><br>
    <label><input type="radio" name="tn5" value="D"> D. $\dfrac{a^3\sqrt{3}}{24}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Gọi $H$ là trung điểm $AB \implies SH \perp AB \implies SH \perp (ABC)$. Vì $\triangle SAB$ đều cạnh $a$ ($SA = SB = AB = a$) nên $SH = \dfrac{a\sqrt{3}}{2}$. $S_{\triangle ABC} = \dfrac{a^2\sqrt{3}}{4} \implies V = \dfrac{1}{3} \cdot \dfrac{a^2\sqrt{3}}{4} \cdot \dfrac{a\sqrt{3}}{2} = \dfrac{3a^3}{24} = \dfrac{a^3}{8}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn6" style="margin-bottom: 16px;">
  <p><strong>Câu 6:</strong> Một hình chóp cụt tứ giác đều có chiều cao $h = 3\text{ cm}$, cạnh đáy lớn $a = 4\text{ cm}$ và cạnh đáy nhỏ $b = 2\text{ cm}$. Thể tích khối chóp cụt đó bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn6" value="A"> A. $28\text{ cm}^3$.</label><br>
    <label><input type="radio" name="tn6" value="B"> B. $84\text{ cm}^3$.</label><br>
    <label><input type="radio" name="tn6" value="C"> C. $24\text{ cm}^3$.</label><br>
    <label><input type="radio" name="tn6" value="D"> D. $36\text{ cm}^3$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. $S_1 = 4^2 = 16, S_2 = 2^2 = 4 \implies \sqrt{S_1 S_2} = 8$. $V = \dfrac{1}{3} \cdot 3 \cdot (16 + 4 + 8) = 28\text{ cm}^3$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn7" style="margin-bottom: 16px;">
  <p><strong>Câu 7:</strong> Khối tứ diện đều cạnh $a$ có thể tích bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn7" value="A"> A. $\dfrac{a^3\sqrt{2}}{12}$.</label><br>
    <label><input type="radio" name="tn7" value="B"> B. $\dfrac{a^3\sqrt{3}}{12}$.</label><br>
    <label><input type="radio" name="tn7" value="C"> C. $\dfrac{a^3\sqrt{2}}{6}$.</label><br>
    <label><input type="radio" name="tn7" value="D"> D. $\dfrac{a^3}{12}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Công thức chuẩn tính thể tích khối tứ diện đều cạnh $a$ là $V = \dfrac{a^3\sqrt{2}}{12}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn8" style="margin-bottom: 16px;">
  <p><strong>Câu 8:</strong> Cho hình lăng trụ tam giác $ABC.A'B'C'$ có thể tích bằng $V$. Thể tích của khối chóp $A'.ABC$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn8" value="A"> A. $\dfrac{V}{3}$.</label><br>
    <label><input type="radio" name="tn8" value="B"> B. $\dfrac{V}{2}$.</label><br>
    <label><input type="radio" name="tn8" value="C"> C. $\dfrac{2V}{3}$.</label><br>
    <label><input type="radio" name="tn8" value="D"> D. $\dfrac{V}{4}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Khối chóp $A'.ABC$ có cùng đáy $ABC$ và cùng chiều cao hạ từ $A'$ với khối lăng trụ $ABC.A'B'C'$, nên $V_{A'.ABC} = \dfrac{1}{3} V_{\text{lăng trụ}} = \dfrac{V}{3}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn9" style="margin-bottom: 16px;">
  <p><strong>Câu 9:</strong> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi có hai đường chéo $AC = 2a, BD = a\sqrt{3}$. Chiều cao $h = 2a$. Thể tích khối chóp là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn9" value="A"> A. $\dfrac{2a^3\sqrt{3}}{3}$.</label><br>
    <label><input type="radio" name="tn9" value="B"> B. $2a^3\sqrt{3}$.</label><br>
    <label><input type="radio" name="tn9" value="C"> C. $\dfrac{a^3\sqrt{3}}{3}$.</label><br>
    <label><input type="radio" name="tn9" value="D"> D. $a^3\sqrt{3}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Diện tích đáy hình thoi: $B = \dfrac{1}{2} d_1 d_2 = \dfrac{1}{2} \cdot 2a \cdot a\sqrt{3} = a^2\sqrt{3}$. Thể tích: $V = \dfrac{1}{3} B h = \dfrac{1}{3} a^2\sqrt{3} \cdot 2a = \dfrac{2a^3\sqrt{3}}{3}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn10" style="margin-bottom: 16px;">
  <p><strong>Câu 10:</strong> Cho hình chóp $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Tỉ số thể tích $\dfrac{V_{S.MNC}}{V_{S.ABC}}$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn10" value="A"> A. $\dfrac{1}{4}$.</label><br>
    <label><input type="radio" name="tn10" value="B"> B. $\dfrac{1}{2}$.</label><br>
    <label><input type="radio" name="tn10" value="C"> C. $\dfrac{1}{8}$.</label><br>
    <label><input type="radio" name="tn10" value="D"> D. $\dfrac{3}{4}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. $\dfrac{V_{S.MNC}}{V_{S.ABC}} = \dfrac{SM}{SA} \cdot \dfrac{SN}{SB} \cdot \dfrac{SC}{SC} = \dfrac{1}{2} \cdot \dfrac{1}{2} \cdot 1 = \dfrac{1}{4}$.
  </div>
</div>

<button id="btnCheckTN" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Nộp bài & Xem điểm</button>
<span id="tnScore" style="margin-left: 15px; font-weight: bold; color: #1e293b;"></span>
</div>

<script>
document.getElementById('btnCheckKD').addEventListener('click', function(){
  var items = document.querySelectorAll('.quiz-item[data-quiz^="kd"]');
  items.forEach(function(item){
    var expl = item.querySelector('.quiz-explanation');
    if (expl) expl.style.display = 'block';
  });
});

document.getElementById('btnCheckTN').addEventListener('click', function(){
  var correct = {
    tn1: 'C', tn2: 'A', tn3: 'A', tn4: 'C', tn5: 'A',
    tn6: 'A', tn7: 'A', tn8: 'A', tn9: 'A', tn10: 'A'
  };
  var score = 0;
  var total = Object.keys(correct).length;
  for (var q in correct) {
    var sel = document.querySelector('input[name="'+q+'"]:checked');
    var item = document.querySelector('.quiz-item[data-quiz="'+q+'"]');
    var expl = item.querySelector('.quiz-explanation');
    if (sel && sel.value === correct[q]) {
      score++;
      item.style.borderLeft = '4px solid #10b981';
    } else {
      item.style.borderLeft = '4px solid #ef4444';
    }
    if (expl) expl.style.display = 'block';
  }
  var res = document.getElementById('tnScore');
  res.textContent = 'Kết quả: ' + score + '/' + total + ' câu đúng (' + Math.round(score/total*100) + '%)';
  res.style.color = score >= 8 ? '#15803d' : (score >= 5 ? '#b45309' : '#b91c1c');
});
</script>

---

## V. Ứng dụng Thực tiễn: Tính Khối lượng Bê tông và Chi phí Xây dựng

Trong dự án thi công hố ga hoặc bể phốt ngầm bằng bê tông cốt thép, việc tính toán chuẩn xác thể tích cấu kiện giúp dự trù vật tư, tránh lãng phí hàng chục mét khối bê tông thương phẩm hoặc thiếu hụt gây ngừng trệ thi công.

Giả sử một bồn nước chữa cháy dạng khối hộp chữ nhật có kích thước phủ bì: dài $8\text{ m}$, rộng $5\text{ m}$, cao $3\text{ m}$. Bề dày thành bê tông và đáy bồn là $0,25\text{ m}$. 
1. **Thể tích dung tích chứa nước (lọt lòng):**
   - Chiều dài bên trong: $8 - 2 \times 0,25 = 7,5\text{ m}$.
   - Chiều rộng bên trong: $5 - 2 \times 0,25 = 4,5\text{ m}$.
   - Chiều cao bên trong: $3 - 0,25 = 2,75\text{ m}$.
   - Thể tích chứa nước: $V_{\text{nước}} = 7,5 \times 4,5 \times 2,75 = 92,8125\text{ m}^3$ (gần $93.000\text{ lít}$ nước).
2. **Thể tích bê tông cần dùng:**
   - Thể tích khối phủ bì: $V_{\text{ngoài}} = 8 \times 5 \times 3 = 120\text{ m}^3$.
   - Thể tích bê tông đổ thành và đáy: $V_{\text{bê tông}} = 120 - 92,8125 = 27,1875\text{ m}^3$.

Với đơn giá bê tông thương phẩm Mác 300 khoảng $1.400.000\text{ đ/m}^3$, kỹ sư có thể dự toán chính xác chi phí vật liệu là hơn $38$ triệu đồng một cách nhanh chóng!
