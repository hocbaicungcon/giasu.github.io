---
title: "Toán 11 Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng - Lý thuyết & Bài tập"
description: "Làm chủ định nghĩa phép chiếu vuông góc, định lí ba đường vuông góc và phương pháp xác định góc giữa đường thẳng và mặt phẳng. Kèm mô hình không gian 3D tương tác xoay đa chiều và trắc nghiệm tự chấm."
category: Toán học
type: Bài học
date: "2026-10-16"
tags:
  - Toán học
  - Toán 11
  - Hình học không gian
  - Phép chiếu vuông góc
  - Góc giữa đường thẳng và mặt phẳng
  - Định lí ba đường vuông góc
---

# Toán 11 Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng

Khi ánh mặt trời chiếu thẳng đứng vào buổi trưa hè, bóng của một chiếc cột cờ in trên mặt đất chính là hình ảnh đời thực của **phép chiếu vuông góc**. Góc tạo bởi thân cột cờ nghiêng và bóng của nó trên mặt đất chính là **góc giữa đường thẳng và mặt phẳng**.

Trong các đề thi THPT Quốc gia và kiểm tra định kì, câu hỏi tính góc giữa cạnh bên và mặt đáy hoặc mặt bên luôn là bài toán trọng tâm, mang tính phân loại học sinh. Nắm chắc "thần chú" **Đỉnh - Giao - Chân** sẽ giúp em xác định chính xác góc chỉ trong vài giây!

---

## Sơ đồ Tư duy: Góc giữa Đường thẳng và Mặt phẳng

```mermaid
flowchart TD
    A["Đường thẳng d và Mặt phẳng (P)"] --> B{"d ⊥ (P)?"}
    B -->|Đúng| C["Góc (d, (P)) = 90°"]
    B -->|Sai| D{"d // (P) hoặc d ⊂ (P)?"}
    D -->|Đúng| E["Góc (d, (P)) = 0°"]
    D -->|Sai: d cắt (P) tại O| F["Tìm hình chiếu d' của d trên (P)"]
    
    F --> G["Quy tắc 3 bước ĐỈNH - GIAO - CHÂN:<br/>1. Giao điểm: d ∩ (P) = O<br/>2. Lấy điểm S ∈ d (S ≠ O)<br/>3. Kẻ SH ⊥ (P) tại H (Chân)"]
    G ==> H["Góc (d, (P)) = (SO, OH) = ∠SOH"]
    
    A --> K["ĐỊNH LÍ BA ĐƯỜNG VUÔNG GÓC:<br/>a ⊂ (P), b là đường xiên, b' là hình chiếu của b<br/>a ⊥ b ⟺ a ⊥ b'"]
    
    style A fill:#eff6ff,stroke:#2563eb,stroke-width:2px;
    style G fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;
    style H fill:#ecfdf5,stroke:#10b981,stroke-width:2px;
    style K fill:#fef2f2,stroke:#ef4444,stroke-width:2px;
```

---

## Khởi động Nhanh: 5 Câu Hỏi Trắc nghiệm Đầu Giờ

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Khởi động: Thử thách Xác định Hình chiếu và Góc</h3>

<div class="quiz-item" data-quiz="kd1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ có thể nhận giá trị trong đoạn nào?</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd1" value="A"> A. $[0^\circ; 180^\circ]$.</label><br>
    <label><input type="radio" name="kd1" value="B"> B. $[0^\circ; 90^\circ]$.</label><br>
    <label><input type="radio" name="kd1" value="C"> C. $(0^\circ; 90^\circ)$.</label><br>
    <label><input type="radio" name="kd1" value="D"> D. $[0^\circ; 360^\circ]$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Theo định nghĩa, góc giữa đường thẳng và mặt phẳng luôn là góc không tù: $0^\circ \le (d, (P)) \le 90^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng đáy $(ABC)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd2" value="A"> A. Đường thẳng $SC$.</label><br>
    <label><input type="radio" name="kd2" value="B"> B. Đường thẳng $AB$.</label><br>
    <label><input type="radio" name="kd2" value="C"> C. Đường thẳng $BC$.</label><br>
    <label><input type="radio" name="kd2" value="D"> D. Đường thẳng $AC$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì $SA \perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$. Điểm $B \in (ABC)$ nên hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ lên $(ABC)$ là $AB$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$. Góc giữa cạnh bên $SB$ và mặt đáy $(ABC)$ là góc nào?</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd3" value="A"> A. $\widehat{ASB}$.</label><br>
    <label><input type="radio" name="kd3" value="B"> B. $\widehat{SBA}$.</label><br>
    <label><input type="radio" name="kd3" value="C"> C. $\widehat{SBC}$.</label><br>
    <label><input type="radio" name="kd3" value="D"> D. $\widehat{SAB}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì hình chiếu của $SB$ lên $(ABC)$ là $AB$, góc giữa $SB$ và $(ABC)$ chính là góc giữa $SB$ và $AB$, tức là góc $\widehat{SBA}$ (do $\triangle SAB$ vuông tại $A$ nên góc này luôn nhọn).
  </div>
</div>

<div class="quiz-item" data-quiz="kd4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho đường thẳng $a$ nằm trong $(P)$ và đường thẳng $b$ không vuông góc với $(P)$, có hình chiếu vuông góc trên $(P)$ là $b'$. Định lí ba đường vuông góc khẳng định:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd4" value="A"> A. $a \perp b \iff a \perp b'$.</label><br>
    <label><input type="radio" name="kd4" value="B"> B. $a \parallel b \iff a \parallel b'$.</label><br>
    <label><input type="radio" name="kd4" value="C"> C. $a$ cắt $b \iff a$ cắt $b'$.</label><br>
    <label><input type="radio" name="kd4" value="D"> D. $a \perp b \implies a \parallel b'$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Đây là phát biểu chuẩn của định lí ba đường vuông góc: đường thẳng $a$ trong mặt phẳng vuông góc với đường xiên $b$ khi và chỉ khi nó vuông góc với hình chiếu $b'$ của $b$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa đường chéo $A'C$ và mặt phẳng đáy $(ABCD)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd5" value="A"> A. Góc $\widehat{A'CA}$.</label><br>
    <label><input type="radio" name="kd5" value="B"> B. Góc $\widehat{A'CD}$.</label><br>
    <label><input type="radio" name="kd5" value="C"> C. Góc $\widehat{A'CB}$.</label><br>
    <label><input type="radio" name="kd5" value="D"> D. Góc $\widehat{CA'A}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Vì $A'A \perp (ABCD)$ nên hình chiếu của $A'$ lên $(ABCD)$ là $A$. Điểm $C \in (ABCD)$ nên hình chiếu của $A'C$ là $AC$. Vậy góc là $\widehat{A'CA}$.
  </div>
</div>

<button id="btnCheckKD" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Kiểm tra đáp án Khởi động</button>
</div>

---

## I. Lý thuyết Trọng tâm

### 1. Phép chiếu vuông góc
> **Định nghĩa:** Cho mặt phẳng $(P)$. Phép đặt tương ứng mỗi điểm $M$ trong không gian với hình chiếu vuông góc $M'$ của nó lên mặt phẳng $(P)$ được gọi là **phép chiếu vuông góc lên mặt phẳng $(P)$**.

- Điểm $M'$ gọi là hình chiếu vuông góc (hay hình chiếu) của $M$ lên $(P)$.
- Nếu $M \in (P)$ thì $M' \equiv M$.
- Cho hình $H$, tập hợp các hình chiếu $M'$ của mọi điểm $M \in H$ lên $(P)$ được gọi là **hình chiếu vuông góc của hình $H$ lên $(P)$**, kí hiệu là $H'$.
- **Đặc điểm hình chiếu của đường thẳng:**
  - Nếu đường thẳng $d \perp (P)$ thì hình chiếu của $d$ là một điểm (chính là giao điểm $d \cap (P)$).
  - Nếu $d$ không vuông góc với $(P)$ thì hình chiếu của $d$ lên $(P)$ là một đường thẳng $d'$.

---

### 2. Định lí ba đường vuông góc
> **Định lí:** Cho đường thẳng $a$ nằm trong mặt phẳng $(P)$ và $b$ là đường thẳng không thuộc $(P)$ đồng thời không vuông góc với $(P)$. Gọi $b'$ là hình chiếu vuông góc của $b$ lên $(P)$. Khi đó:
> $$a \perp b \iff a \perp b'$$

**Ý nghĩa thực chiến:** Thay vì phải chứng minh trực tiếp đường thẳng $a$ vuông góc với một đường xiên $b$ lơ lửng trong không gian, ta chỉ cần chứng minh $a$ vuông góc với hình chiếu $b'$ nằm gọn ngay trong mặt phẳng chứa $a$!

---

### 3. Góc giữa đường thẳng và mặt phẳng

> **Định nghĩa:**
> - Nếu đường thẳng $d \perp (P)$ thì ta nói góc giữa $d$ và $(P)$ bằng $90^\circ$.
> - Nếu đường thẳng $d$ song song hoặc nằm trong $(P)$ thì góc giữa chúng bằng $0^\circ$.
> - Nếu đường thẳng $d$ cắt $(P)$ tại điểm $O$ và không vuông góc với $(P)$ thì **góc giữa đường thẳng $d$ và mặt phẳng $(P)$ là góc giữa $d$ và hình chiếu $d'$ của nó trên $(P)$**.

Kí hiệu: $(d, (P)) = (d, d') = \varphi$. 
Quy ước: $0^\circ \le \varphi \le 90^\circ$.

#### "Bí kíp" 3 bước xác định góc giữa đường thẳng và mặt phẳng:
Giả sử cần tìm góc giữa đường thẳng $SM$ và mặt phẳng $(P)$:
- **Bước 1 (Giao điểm):** Tìm giao điểm của đường thẳng với mặt phẳng: $SM \cap (P) = M$ (đỉnh góc là $M$).
- **Bước 2 (Chân đường cao):** Từ điểm còn lại $S$, kẻ $SH \perp (P)$ tại $H$ ($H$ là chân đường cao).
- **Bước 3 (Nối và kết luận):** Nối $H$ với giao điểm $M$ để có hình chiếu $HM$.
  $$\widehat{(SM, (P))} = \widehat{(SM, HM)} = \widehat{SMH}$$
  Sau đó giải tam giác vuông $SHM$ (vuông tại $H$):
  $$\tan \widehat{SMH} = \frac{SH}{HM}, \quad \sin \widehat{SMH} = \frac{SH}{SM}, \quad \cos \widehat{SMH} = \frac{HM}{SM}$$

---

## II. Phòng thí nghiệm 3D Tương tác: Góc Cạnh Bên & Mặt Đáy / Mặt Bên

Hãy tương tác trực tiếp với mô hình hình chóp $S.ABCD$ có đáy hình vuông, cạnh bên $SA \perp (ABCD)$. Em có thể kéo chuột để xoay khối hình theo mọi góc nhìn, và nhấp chọn các chế độ hiển thị góc để quan sát bóng chiếu (hình chiếu) đổi màu trực tiếp!

<div class="interactive-3d-box" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
  <h3 style="margin-top: 0; color: #2563eb;">PHÒNG THÍ NGHIỆM 3D: XÁC ĐỊNH GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG</h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    <em>Rê chuột/vuốt màn hình để xoay không gian 3D. Chọn nút để khám phá từng loại góc!</em>
  </p>

  <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
    <button id="btnAngleSC_Base" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Góc giữa SC và Đáy (ABCD)</button>
    <button id="btnAngleSC_SAB" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: bold; cursor: pointer;">Góc giữa SC và Mặt bên (SAB)</button>
    <button id="btnResetAngle3D" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
  </div>

  <div style="position: relative; max-width: 580px; margin: 0 auto; user-select: none;">
    <svg id="svgAngle3D" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06); cursor: grab; touch-action: none;">
      <g id="gAngleFaces"></g>
      <g id="gAngleEdges"></g>
      <g id="gAngleProjections"></g>
      <g id="gAngleVertices"></g>
      <g id="gAngleLabels"></g>
    </svg>

    <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <div>
        <label style="font-weight: bold; color: #334155;">Góc xoay ngang (Yaw): <span id="valAngleYaw">45°</span></label>
        <input id="sliderAngleYaw" type="range" min="-180" max="180" value="45" style="width: 100%; margin-top: 4px;">
      </div>
      <div>
        <label style="font-weight: bold; color: #334155;">Góc nghiêng đứng (Pitch): <span id="valAnglePitch">20°</span></label>
        <input id="sliderAnglePitch" type="range" min="-60" max="60" value="20" style="width: 100%; margin-top: 4px;">
      </div>
    </div>
  </div>
  <div id="angleModeInfo" style="margin-top: 10px; font-size: 0.9em; font-weight: 500; color: #1e293b;">
    Góc giữa đường thẳng $SC$ (đỏ) và mặt đáy $(ABCD)$ là góc $\widehat{SCA}$ (xanh lá).
  </div>
</div>

<script>
(function(){
  var yaw = 45 * Math.PI / 180;
  var pitch = 20 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;
  var mode = 'base'; // 'base' or 'sab'

  var V = {
    'S': [-65, 115, -45],
    'A': [-65, -50, -45],
    'B': [45, -50, -45],
    'C': [45, -50, 65],
    'D': [-65, -50, 65]
  };

  function project(p) {
    var x = p[0], y = p[1], z = p[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var y2 = y * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y * Math.sin(pitch) + z1 * Math.cos(pitch);
    return {
      x: 270 + x1 * 1.5,
      y: 190 - y2 * 1.5,
      z: z2
    };
  }

  function render() {
    var pProj = {};
    for (var k in V) pProj[k] = project(V[k]);

    // Faces
    var faces = [
      { pts: ['A', 'B', 'C', 'D'], fill: '#3b82f6', op: 0.07 },
      { pts: ['S', 'A', 'B'], fill: '#6366f1', op: mode === 'sab' ? 0.16 : 0.05 },
      { pts: ['S', 'B', 'C'], fill: '#10b981', op: 0.05 },
      { pts: ['S', 'C', 'D'], fill: '#f59e0b', op: 0.05 },
      { pts: ['S', 'D', 'A'], fill: '#8b5cf6', op: 0.05 }
    ];
    var htmlFaces = '';
    faces.forEach(function(f){
      var ptsStr = f.pts.map(function(pt){ return pProj[pt].x+','+pProj[pt].y; }).join(' ');
      htmlFaces += '<polygon points="'+ptsStr+'" fill="'+f.fill+'" fill-opacity="'+f.op+'"/>';
    });
    document.getElementById('gAngleFaces').innerHTML = htmlFaces;

    // Edges
    var edges = [
      { p1: 'S', p2: 'A', col: '#ef4444', w: 2 },
      { p1: 'A', p2: 'B', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'B', p2: 'C', col: '#475569', w: 2 },
      { p1: 'C', p2: 'D', col: '#475569', w: 2 },
      { p1: 'D', p2: 'A', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'S', p2: 'B', col: mode === 'sab' ? '#059669' : '#475569', w: mode === 'sab' ? 3 : 2 },
      { p1: 'S', p2: 'C', col: '#ef4444', w: 3 }, // Target line SC
      { p1: 'S', p2: 'D', col: '#475569', w: 2 }
    ];
    var htmlEdges = '';
    edges.forEach(function(e){
      var p1 = pProj[e.p1], p2 = pProj[e.p2];
      var d = e.dash ? ' stroke-dasharray="'+e.dash+'"' : '';
      htmlEdges += '<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+e.col+'" stroke-width="'+e.w+'"'+d+' stroke-linecap="round"/>';
    });
    document.getElementById('gAngleEdges').innerHTML = htmlEdges;

    // Projections & Angle Sector
    var htmlProj = '';
    if (mode === 'base') {
      // AC is projection
      var pA = pProj['A'], pC = pProj['C'];
      htmlProj += '<line x1="'+pA.x+'" y1="'+pA.y+'" x2="'+pC.x+'" y2="'+pC.y+'" stroke="#10b981" stroke-width="3" stroke-dasharray="5,4"/>';
      htmlProj += '<text x="'+((pA.x+pC.x)/2)+'" y="'+((pA.y+pC.y)/2+14)+'" fill="#059669" font-size="12" font-weight="bold">Hình chiếu AC</text>';
      // Arc at C (angle SCA)
      htmlProj += '<circle cx="'+pC.x+'" cy="'+pC.y+'" r="18" fill="none" stroke="#f59e0b" stroke-width="2.5"/>';
      htmlProj += '<text x="'+(pC.x-30)+'" y="'+(pC.y-10)+'" fill="#d97706" font-size="13" font-weight="bold">∠SCA</text>';
    } else {
      // SC on (SAB): CB perp (SAB) => projection is SB
      var pB = pProj['B'], pC = pProj['C'], pS = pProj['S'];
      htmlProj += '<line x1="'+pC.x+'" y1="'+pC.y+'" x2="'+pB.x+'" y2="'+pB.y+'" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="5,4"/>';
      htmlProj += '<text x="'+((pB.x+pC.x)/2+10)+'" y="'+((pB.y+pC.y)/2)+'" fill="#2563eb" font-size="12" font-weight="bold">CB ⊥ (SAB)</text>';
      // Arc at S (angle CSB)
      htmlProj += '<circle cx="'+pS.x+'" cy="'+pS.y+'" r="22" fill="none" stroke="#f59e0b" stroke-width="2.5"/>';
      htmlProj += '<text x="'+(pS.x+15)+'" y="'+(pS.y+30)+'" fill="#d97706" font-size="13" font-weight="bold">∠CSB</text>';
    }
    document.getElementById('gAngleProjections').innerHTML = htmlProj;

    // Vertices & labels
    var htmlVert = '';
    var htmlLabels = '';
    for (var k in pProj) {
      var p = pProj[k];
      htmlVert += '<circle cx="'+p.x+'" cy="'+p.y+'" r="4.5" fill="#1e293b"/>';
      htmlLabels += '<text x="'+(p.x+8)+'" y="'+(p.y-6)+'" fill="#0f172a" font-weight="bold" font-size="14">'+k+'</text>';
    }
    document.getElementById('gAngleVertices').innerHTML = htmlVert;
    document.getElementById('gAngleLabels').innerHTML = htmlLabels;

    document.getElementById('valAngleYaw').textContent = Math.round(yaw * 180 / Math.PI) + '°';
    document.getElementById('valAnglePitch').textContent = Math.round(pitch * 180 / Math.PI) + '°';
    document.getElementById('sliderAngleYaw').value = Math.round(yaw * 180 / Math.PI);
    document.getElementById('sliderAnglePitch').value = Math.round(pitch * 180 / Math.PI);
  }

  var svg = document.getElementById('svgAngle3D');
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

  document.getElementById('sliderAngleYaw').addEventListener('input', function(e){
    yaw = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });
  document.getElementById('sliderAnglePitch').addEventListener('input', function(e){
    pitch = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });

  document.getElementById('btnAngleSC_Base').addEventListener('click', function(){
    mode = 'base';
    this.style.background = '#2563eb'; this.style.color = '#fff';
    document.getElementById('btnAngleSC_SAB').style.background = '#ecfdf5';
    document.getElementById('btnAngleSC_SAB').style.color = '#047857';
    document.getElementById('angleModeInfo').innerHTML = 'Góc giữa cạnh xiên $SC$ (đỏ) và mặt đáy $(ABCD)$ là góc $\\widehat{SCA}$ (xanh lá).';
    render();
  });

  document.getElementById('btnAngleSC_SAB').addEventListener('click', function(){
    mode = 'sab';
    this.style.background = '#10b981'; this.style.color = '#fff';
    document.getElementById('btnAngleSC_Base').style.background = '#f1f5f9';
    document.getElementById('btnAngleSC_Base').style.color = '#334155';
    document.getElementById('angleModeInfo').innerHTML = 'Góc giữa $SC$ và mặt bên $(SAB)$ là góc $\\widehat{CSB}$ (vì $CB \\perp (SAB) \\implies SB$ là hình chiếu của $SC$).';
    render();
  });

  document.getElementById('btnResetAngle3D').addEventListener('click', function(){
    yaw = 45 * Math.PI / 180;
    pitch = 20 * Math.PI / 180;
    mode = 'base';
    document.getElementById('btnAngleSC_Base').style.background = '#2563eb';
    document.getElementById('btnAngleSC_Base').style.color = '#fff';
    document.getElementById('btnAngleSC_SAB').style.background = '#ecfdf5';
    document.getElementById('btnAngleSC_SAB').style.color = '#047857';
    render();
  });

  render();
})();
</script>

---

## III. Các Dạng Toán Điển Hình và Phương Pháp Giải

### Dạng 1: Xác định và tính góc giữa cạnh bên và mặt phẳng đáy

**Phương pháp giải:**
Cho hình chóp $S.A_1A_2...A_n$ có đường cao $SH \perp (\text{đáy})$.
1. Để tìm góc giữa cạnh bên $SA_i$ và mặt đáy:
   - Giao điểm của $SA_i$ với mặt đáy là $A_i$.
   - Hình chiếu của đỉnh $S$ lên mặt đáy là chân đường cao $H$.
   - Hình chiếu của $SA_i$ lên mặt đáy là đoạn thẳng $HA_i$.
2. Góc cần tìm là $\widehat{SA_iH}$.
3. Xét tam giác vuông $\triangle SHA_i$ (vuông tại $H$):
   $$\tan \widehat{SA_iH} = \frac{SH}{HA_i}$$

---

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA \perp (ABCD)$ và $SA = a\sqrt{6}$.
1. Tính góc giữa cạnh bên $SC$ và mặt phẳng đáy $(ABCD)$.
2. Tính góc giữa cạnh bên $SD$ và mặt phẳng đáy $(ABCD)$.

**Lời giải chi tiết:**
1. **Góc giữa $SC$ và $(ABCD)$:**
   - Vì $SA \perp (ABCD)$ nên $A$ là hình chiếu của $S$ lên $(ABCD)$.
   - Điểm $C \in (ABCD)$ nên hình chiếu của $C$ là chính nó.
   - Do đó, hình chiếu của $SC$ lên $(ABCD)$ là $AC$.
   - Suy ra góc giữa $SC$ và $(ABCD)$ là góc $\widehat{SCA}$.
   - Vì đáy $ABCD$ là hình vuông cạnh $a$ nên độ dài đường chéo $AC = a\sqrt{2}$.
   - Tam giác $SAC$ vuông tại $A$ có:
     $$\tan \widehat{SCA} = \frac{SA}{AC} = \frac{a\sqrt{6}}{a\sqrt{2}} = \sqrt{3}$$
   - Vậy $\widehat{SCA} = 60^\circ$. Góc giữa $SC$ và $(ABCD)$ bằng $60^\circ$.

2. **Góc giữa $SD$ và $(ABCD)$:**
   - Hình chiếu của $SD$ lên $(ABCD)$ là đoạn thẳng $AD$.
   - Do đó góc giữa $SD$ và đáy là $\widehat{SDA}$.
   - Tam giác $SAD$ vuông tại $A$ có:
     $$\tan \widehat{SDA} = \frac{SA}{AD} = \frac{a\sqrt{6}}{a} = \sqrt{6}$$
   - Suy ra $(SD, (ABCD)) = \arctan \sqrt{6} \approx 67^\circ 47'$.

---

### Dạng 2: Góc giữa cạnh bên và mặt phẳng bên (hoặc mặt phẳng đứng)

**Phương pháp giải:**
Tìm góc giữa đường thẳng $d$ và mặt phẳng $(\alpha)$ không phải mặt đáy:
1. Tìm giao điểm $M = d \cap (\alpha)$.
2. Từ điểm $N \in d$ ($N \neq M$), hạ đường vuông góc $NK \perp (\alpha)$ ($K \in (\alpha)$).
3. Góc cần tìm là $\widehat{NMK}$.
4. Tính độ dài $NK$ và $KM$ để suy ra góc.

---

#### Ví dụ 2:
Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Cạnh bên $SA \perp (ABC)$ và $SA = a$. Tính góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$.

**Lời giải chi tiết:**
1. Giao điểm của đường thẳng $SC$ và mặt phẳng $(SAB)$ là điểm $S$.
2. Từ điểm $C$, ta cần tìm hình chiếu vuông góc lên mặt phẳng $(SAB)$:
   - Gọi $M$ là trung điểm của $AB$.
   - Vì $\triangle ABC$ đều nên $CM \perp AB$.
   - Lại có $SA \perp (ABC) \implies SA \perp CM$, hay $CM \perp SA$.
   - Vì $CM \perp AB$ và $CM \perp SA$ nên $CM \perp (SAB)$.
   - Vậy hình chiếu vuông góc của điểm $C$ lên mặt phẳng $(SAB)$ chính là điểm $M$.
3. Do đó, hình chiếu vuông góc của đường thẳng $SC$ lên mặt phẳng $(SAB)$ là đường thẳng $SM$.
4. Góc giữa $SC$ và $(SAB)$ là góc giữa $SC$ và $SM$, tức là góc $\widehat{CSM}$ (vì $\triangle SMC$ vuông tại $M$ do $CM \perp (SAB)$).
5. Tính toán các cạnh:
   - Trong $\triangle ABC$ đều cạnh $a$: $CM = \dfrac{a\sqrt{3}}{2}$.
   - Trong $\triangle SAB$ vuông tại $A$: $AM = \dfrac{a}{2} \implies SM = \sqrt{SA^2 + AM^2} = \sqrt{a^2 + \left(\frac{a}{2}\right)^2} = \frac{a\sqrt{5}}{2}$.
6. Trong tam giác vuông $SMC$ (vuông tại $M$):
   $$\tan \widehat{CSM} = \frac{CM}{SM} = \frac{\frac{a\sqrt{3}}{2}}{\frac{a\sqrt{5}}{2}} = \sqrt{\frac{3}{5}} = \frac{\sqrt{15}}{5}$$
   Vậy $(SC, (SAB)) = \arctan\left(\dfrac{\sqrt{15}}{5}\right) \approx 37^\circ 46'$.

---

### Dạng 3: Ứng dụng Định lí Ba đường Vuông góc

---

#### Ví dụ 3:
Cho tứ diện $SABC$ có $SA \perp (ABC)$, đáy $ABC$ vuông tại $B$. Kẻ $AH \perp SB$ tại $H$.
1. Chứng minh rằng $AH \perp (SBC)$.
2. Xác định góc giữa đường thẳng $SB$ và mặt phẳng $(AHC)$.

**Lời giải chi tiết:**
1. Ta có:
   - $BC \perp AB$ (giả thiết đáy vuông tại $B$).
   - $BC \perp SA$ (vì $SA \perp (ABC)$).
   - Suy ra $BC \perp (SAB)$.
   - Mà $AH \subset (SAB) \implies BC \perp AH$.
   - Lại có $AH \perp SB$ (theo giả thiết).
   - Do đó $AH \perp (SBC)$.
2. Vì $AH \perp (SBC)$ nên $AH \perp SC$.
   - Xét đường thẳng $SB$ và mặt phẳng $(AHC)$:
   - Ta thấy $H \in SB$ và $H \in (AHC)$, do đó giao điểm là $H$.
   - Vì $AH \perp (SBC)$ nên tại điểm $A$, hình chiếu vuông góc của $A$ lên $(SBC)$ là $H$.
   - Theo định lí ba đường vuông góc và các quan hệ vuông góc đã chứng minh, góc giữa $SB$ và mặt phẳng $(AHC)$ chính là góc giữa $SB$ và $HC$, tức góc $\widehat{BHC} = 90^\circ$ (do $BC \perp (SAB) \implies BC \perp BH$).

---

## IV. Bài tập Trắc nghiệm Tự luyện (Chấm điểm Tức thì)

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Luyện tập Trắc nghiệm Toàn diện Bài 24</h3>

<div class="quiz-item" data-quiz="tn1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \perp (ABCD)$ và $SA = a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABCD)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn1" value="A"> A. $30^\circ$.</label><br>
    <label><input type="radio" name="tn1" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn1" value="C"> C. $60^\circ$.</label><br>
    <label><input type="radio" name="tn1" value="D"> D. $90^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Hình chiếu của $SB$ lên $(ABCD)$ là $AB$. Do đó góc là $\widehat{SBA}$. Tam giác $SAB$ vuông cân tại $A$ ($SA = AB = a$) nên $\widehat{SBA} = 45^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa đường thẳng $A'C'$ và mặt phẳng $(ABCD)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn2" value="A"> A. $0^\circ$.</label><br>
    <label><input type="radio" name="tn2" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn2" value="C"> C. $90^\circ$.</label><br>
    <label><input type="radio" name="tn2" value="D"> D. $60^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Vì $A'C' \parallel AC \subset (ABCD) \implies A'C' \parallel (ABCD)$. Theo quy ước, đường thẳng song song với mặt phẳng tạo một góc bằng $0^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính $\tan$ của góc giữa đường chéo $BD'$ và mặt phẳng đáy $(ABCD)$.</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn3" value="A"> A. $\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn3" value="B"> B. $\dfrac{\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn3" value="C"> C. $\dfrac{1}{\sqrt{3}}$.</label><br>
    <label><input type="radio" name="tn3" value="D"> D. $1$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì $D'D \perp (ABCD)$ nên hình chiếu của $BD'$ lên $(ABCD)$ là $BD$. Góc là $\widehat{D'BD}$. Ta có $\tan \widehat{D'BD} = \dfrac{D'D}{BD} = \dfrac{a}{a\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Gọi $O$ là tâm đáy $ABCD$. Góc giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn4" value="A"> A. Góc $\widehat{SAO}$ với $\cos \widehat{SAO} = \dfrac{\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn4" value="B"> B. Góc $\widehat{SAB} = 60^\circ$.</label><br>
    <label><input type="radio" name="tn4" value="C"> C. Góc $\widehat{SOA} = 90^\circ$.</label><br>
    <label><input type="radio" name="tn4" value="D"> D. Góc $\widehat{SAD} = 60^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Do chóp đều nên $SO \perp (ABCD)$. Hình chiếu của $SA$ lên đáy là $AO$, do đó góc là $\widehat{SAO}$. Trong tam giác vuông $SOA$: $AO = \dfrac{a\sqrt{2}}{2}, SA = a \implies \cos \widehat{SAO} = \dfrac{AO}{SA} = \dfrac{\sqrt{2}}{2} \implies \widehat{SAO} = 45^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$ và đáy $ABC$ vuông tại $B$. Gọi $H$ là hình chiếu của $A$ lên $SB$. Khẳng định nào sau đây là <strong>sai</strong>?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn5" value="A"> A. $AH \perp BC$.</label><br>
    <label><input type="radio" name="tn5" value="B"> B. $AH \perp (SBC)$.</label><br>
    <label><input type="radio" name="tn5" value="C"> C. Góc giữa $SC$ và $(SAB)$ là góc $\widehat{CSB}$.</label><br>
    <label><input type="radio" name="tn5" value="D"> D. Góc giữa $SC$ và $(ABC)$ là góc $\widehat{SBA}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: D</strong>. Góc giữa $SC$ và $(ABC)$ là góc $\widehat{SCA}$, không phải $\widehat{SBA}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn6" style="margin-bottom: 16px;">
  <p><strong>Câu 6:</strong> Cho tam giác đều $ABC$ cạnh $a$. Trên đường thẳng $d$ vuông góc với mặt phẳng $(ABC)$ tại trọng tâm $G$ của tam giác, lấy điểm $S$ sao cho $SG = \dfrac{a}{2}$. Góc giữa $SA$ và $(ABC)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn6" value="A"> A. $30^\circ$.</label><br>
    <label><input type="radio" name="tn6" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn6" value="C"> C. $60^\circ$.</label><br>
    <label><input type="radio" name="tn6" value="D"> D. $\arctan\left(\dfrac{\sqrt{3}}{2}\right)$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: D</strong>. Hình chiếu của $SA$ lên $(ABC)$ là $GA \implies$ góc là $\widehat{SAG}$. Ta có $GA = \dfrac{2}{3} \cdot \dfrac{a\sqrt{3}}{2} = \dfrac{a\sqrt{3}}{3}$. Do đó $\tan \widehat{SAG} = \dfrac{SG}{GA} = \dfrac{a/2}{a\sqrt{3}/3} = \dfrac{3}{2\sqrt{3}} = \dfrac{\sqrt{3}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn7" style="margin-bottom: 16px;">
  <p><strong>Câu 7:</strong> Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = a, BC = a\sqrt{3}, AA' = 2a$. Góc giữa đường thẳng $A'C$ và mặt phẳng đáy $(ABC)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn7" value="A"> A. $30^\circ$.</label><br>
    <label><input type="radio" name="tn7" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn7" value="C"> C. $60^\circ$.</label><br>
    <label><input type="radio" name="tn7" value="D"> D. $90^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì lăng trụ đứng nên $A'A \perp (ABC) \implies$ hình chiếu của $A'C$ lên đáy là $AC$. Góc là $\widehat{A'CA}$. Ta có $AC = \sqrt{AB^2 + BC^2} = \sqrt{a^2 + 3a^2} = 2a$. Tam giác $A'AC$ vuông tại $A$ có $A'A = 2a = AC \implies \widehat{A'CA} = 45^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn8" style="margin-bottom: 16px;">
  <p><strong>Câu 8:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$, tam giác $ABC$ vuông tại $C$. Hình chiếu của tam giác $SBC$ lên mặt phẳng $(SAB)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn8" value="A"> A. Tam giác $SAB$.</label><br>
    <label><input type="radio" name="tn8" value="B"> B. Tam giác $SAC$.</label><br>
    <label><input type="radio" name="tn8" value="C"> C. Đoạn thẳng $SB$.</label><br>
    <label><input type="radio" name="tn8" value="D"> D. Một điểm duy nhất.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Kẻ hình chiếu của $C$ lên $(SAB)$ là một điểm $K$ nằm trong $(SAB)$, các điểm $S$ và $B$ giữ nguyên, nên hình chiếu tạo thành tam giác.
  </div>
</div>

<div class="quiz-item" data-quiz="tn9" style="margin-bottom: 16px;">
  <p><strong>Câu 9:</strong> Cho đường thẳng $d$ cắt mặt phẳng $(P)$ tại $O$. Điểm $A \in d$ ($A \neq O$), $H$ là hình chiếu vuông góc của $A$ lên $(P)$. Gọi $\alpha$ là góc giữa $d$ và $(P)$. Mệnh đề nào sau đây đúng?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn9" value="A"> A. $\sin \alpha = \dfrac{AH}{AO}$.</label><br>
    <label><input type="radio" name="tn9" value="B"> B. $\cos \alpha = \dfrac{AH}{AO}$.</label><br>
    <label><input type="radio" name="tn9" value="C"> C. $\tan \alpha = \dfrac{OH}{AH}$.</label><br>
    <label><input type="radio" name="tn9" value="D"> D. $\cot \alpha = \dfrac{AH}{OH}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Tam giác $AHO$ vuông tại $H$ có góc tại $O$ là $\alpha$, suy ra $\sin \alpha = \dfrac{\text{đối}}{\text{huyền}} = \dfrac{AH}{AO}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn10" style="margin-bottom: 16px;">
  <p><strong>Câu 10:</strong> Góc giữa đường thẳng và mặt phẳng luôn là góc nhỏ nhất trong các góc tạo bởi đường thẳng đó với:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn10" value="A"> A. Mọi đường thẳng nằm trong mặt phẳng đó.</label><br>
    <label><input type="radio" name="tn10" value="B"> B. Đường cao hạ từ một đỉnh xuống mặt phẳng.</label><br>
    <label><input type="radio" name="tn10" value="C"> C. Trục đối xứng của mặt phẳng.</label><br>
    <label><input type="radio" name="tn10" value="D"> D. Mọi đường thẳng vuông góc với mặt phẳng đó.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Đây là một định lí cực kì quan trọng: Trong tất cả các góc giữa một đường xiên $d$ với các đường thẳng nằm trong mặt phẳng $(P)$, góc giữa $d$ và hình chiếu vuông góc của nó $d'$ là góc có số đo **nhỏ nhất**.
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
    tn1: 'B', tn2: 'A', tn3: 'B', tn4: 'A', tn5: 'D',
    tn6: 'D', tn7: 'B', tn8: 'A', tn9: 'A', tn10: 'A'
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

## V. Ứng dụng Thực tiễn: Góc Nghiêng Tối Ưu Của Tấm Pin Năng Lượng Mặt Trời

Để thu được công suất bức xạ cực đại từ mặt trời, các tấm pin quang điện (Solar Panels) không bao giờ được đặt nằm ngang bằng phẳng với mặt đất. 

Tại Việt Nam (nằm ở bán cầu Bắc với vĩ độ trung bình khoảng $10^\circ - 22^\circ\text{B}$), các kỹ sư năng lượng tính toán góc nghiêng giữa bề mặt tấm pin và mặt phẳng nằm ngang sao cho tia nắng mặt trời vào giữa trưa tạo một góc xấp xỉ $90^\circ$ (vuông góc) với tấm pin. Nhờ áp dụng chính xác công thức góc giữa đường thẳng (tia sáng) và mặt phẳng (bề mặt tấm pin), hiệu suất phát điện của các trang trại điện mặt trời ở Ninh Thuận và Bình Thuận tăng thêm hơn 15% mỗi năm!
