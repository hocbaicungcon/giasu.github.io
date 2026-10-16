---
title: 'Toán 11 Bài 11: Hai đường thẳng song song trong không gian - Vị trí tương đối và định lý giao tuyến'
description: 'Lý thuyết toàn diện Bài 11 Toán 11 Kết nối tri thức: Vị trí tương đối của hai đường thẳng (cắt nhau, song song, chéo nhau), định lý ba đường giao tuyến, phương pháp chứng minh song song và mô hình 3D tương tác xoay đa góc độ.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Hai đường thẳng song song
  - Hai đường thẳng chéo nhau
  - Định lý giao tuyến
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài 11. Hai đường thẳng song song

Chào mừng các em tiếp tục hành trình khám phá thế giới Hình học không gian 3D cùng **Bài 11: Hai đường thẳng song song**!

Trong hình học phẳng, hai đường thẳng phân biệt không cắt nhau thì chắc chắn phải song song với nhau. Nhưng trong không gian ba chiều:
- Hãy nhìn lên trần nhà: một mép tường nằm ngang ở trần và một mép chân tường ở phía đối diện chạy theo hướng vuông góc không bao giờ gặp nhau, nhưng chúng cũng không hề song song!
- Hai chiếc máy bay đang bay trên bầu trời theo hai hướng chéo nhau ở hai độ cao khác nhau: dù đường bay của chúng nhìn trên bản đồ 2D có vẻ cắt nhau, nhưng trong không gian 3D chúng lướt qua nhau an toàn mà không va chạm.

Đó chính là hiện tượng **Hai đường thẳng chéo nhau** — một nét đặc thù chỉ có trong không gian 3 chiều! Bài học này sẽ giúp các em phân biệt rõ ràng các vị trí tương đối và làm chủ định lý ba đường giao tuyến kỳ diệu.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cắt nhau (Đồng phẳng)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cùng thuộc một mặt phẳng $(P)$.<br>• Có đúng 1 điểm chung duy nhất: $a \cap b = \{M\}$.<br>• Xác định duy nhất mặt phẳng $(a, b)$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Song song (Đồng phẳng)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cùng thuộc một mặt phẳng $(P)$ và không có điểm chung: $a \cap b = \emptyset$.<br>• Tính bắc cầu: $a \parallel c$ và $b \parallel c \Rightarrow a \parallel b$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Chéo nhau (Không đồng phẳng)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Không cùng nằm trong bất kỳ mặt phẳng nào</strong>.<br>• Không có điểm chung nào: $a \cap b = \emptyset$.<br>• Ví dụ: Hai cạnh đối diện trong tứ diện ($AB$ và $CD$).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Định lý 3 Giao tuyến</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 3 mặt phẳng đôi một cắt nhau theo 3 giao tuyến phân biệt thì 3 giao tuyến đó <strong>hoặc đồng quy, hoặc đôi một song song</strong>.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phản xạ định nghĩa:** Nếu hai đường thẳng không có điểm chung thì chúng có nhất thiết phải song song với nhau không?
2. **Trong tứ diện:** Trong tứ diện $ABCD$, cặp cạnh $AB$ và $CD$ có vị trí tương đối là gì?
3. **Tính chất bắc cầu:** Nếu $a \parallel b$ và $b \parallel c$ thì quan hệ giữa $a$ và $c$ là gì?
4. **Hình lập phương:** Trong hình lập phương $ABCD.A'B'C'D'$, đường thẳng $AA'$ và $BC$ có cắt nhau không? Chúng có song song không?
5. **Số đường song song:** Qua một điểm $M$ nằm ngoài đường thẳng $d$, ta có thể dựng được bao nhiêu đường thẳng song song với $d$?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Không nhất thiết! Chúng có thể **chéo nhau** (không cùng nằm trong một mặt phẳng).
> 2. Chéo nhau (vì 4 điểm $A, B, C, D$ không đồng phẳng).
> 3. $a$ song song với $c$ (hoặc $a$ trùng $c$ nếu không xét phân biệt).
> 4. Không cắt nhau và cũng không song song — chúng là hai đường thẳng chéo nhau vuông góc.
> 5. Duy nhất 1 đường thẳng (Tiên đề Ơ-clit mở rộng trong không gian).

---

## I. Vị trí tương đối của hai đường thẳng trong không gian

Cho hai đường thẳng phân biệt $a$ và $b$ trong không gian. Có hai trường hợp xảy ra:

### Trường hợp 1: Có một mặt phẳng chứa cả $a$ và $b$ (Hai đường thẳng đồng phẳng)

- **$a$ cắt $b$:** $a$ và $b$ có đúng một điểm chung duy nhất: $a \cap b = \{M\}$.
- **$a$ song song với $b$ ($a \parallel b$):** $a$ và $b$ cùng nằm trong mặt phẳng $(P)$ và không có điểm chung nào:
  $$a \parallel b \Leftrightarrow \begin{cases} a \subset (P), \; b \subset (P) \\ a \cap b = \emptyset \end{cases}$$

### Trường hợp 2: Không có mặt phẳng nào chứa cả $a$ và $b$ (Hai đường thẳng không đồng phẳng)

- **$a$ và $b$ chéo nhau:** Hai đường thẳng không cùng thuộc một mặt phẳng. Khi đó chúng cũng không có bất kỳ điểm chung nào.

> [!WARNING]
> **PHÂN BIỆT RÕ RÀNG:**
> - Trong mặt phẳng: Không cắt nhau $\Leftrightarrow$ Song song.
> - Trong không gian: Không cắt nhau $\Leftrightarrow$ **Song song HOẶC Chéo nhau**!

---

## II. Mô hình 3D Tương tác: Đường thẳng Song song và Chéo nhau

Dưới đây là mô hình không gian 3D trực quan. Các em hãy xoay khối hình để quan sát hai đường thẳng màu đỏ và màu xanh lục: khi nào chúng nằm trên cùng một mặt phẳng (song song) và khi nào chúng lướt qua nhau ở hai tầng không gian khác nhau (chéo nhau)!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">MÔ HÌNH 3D: SO SÁNH HAI ĐƯỜNG THẲNG SONG SONG VÀ CHÉO NHAU</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Kéo trực tiếp trên hình hoặc trượt thanh điều khiển góc nhìn để kiểm tra tính đồng phẳng.</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnModeParallel" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #10b981; color: #fff; font-weight: bold; cursor: pointer;">Chế độ: Hai đường SONG SONG (MN ∥ BC)</button>
<button id="btnModeSkew" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">Chế độ: Hai đường CHÉO NHAU (SA và BC)</button>
<button id="btnReset3D_11" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DSpace11" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<g id="g11Faces"></g>
<g id="g11Edges"></g>
<g id="g11FocusLines"></g>
<g id="g11Vertices"></g>
<g id="g11Labels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang: <span id="valYaw11">40°</span></label>
<input id="sliderYaw11" type="range" min="-180" max="180" value="40" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng: <span id="valPitch11">20°</span></label>
<input id="sliderPitch11" type="range" min="-60" max="60" value="20" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var mode = 'parallel';
  var yaw = 40 * Math.PI / 180;
  var pitch = 20 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;

  var verts = {
    'S': [0, 115, 0],
    'A': [-80, -50, -60],
    'B': [80, -50, -60],
    'C': [0, -50, 80],
    'M': [-40, 32.5, -30],
    'N': [40, 32.5, -30]
  };

  var baseEdges = [
    ['S', 'A'], ['S', 'B'], ['S', 'C'],
    ['A', 'B'], ['B', 'C'], ['C', 'A']
  ];

  function project(pt, w, h){
    var x = pt[0], y = pt[1], z = pt[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var y1 = y;
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var x2 = x1;
    var y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);
    var scale = 1.35;
    return {
      x: w/2 + x2 * scale,
      y: h/2 - y2 * scale,
      depth: z2
    };
  }

  function render(){
    var svg = document.getElementById('svg3DSpace11');
    if(!svg) return;
    var w = 540, h = 380;
    var proj = {};
    for(var k in verts){
      proj[k] = project(verts[k], w, h);
    }

    var gFaces = document.getElementById('g11Faces');
    var gEdges = document.getElementById('g11Edges');
    var gFocus = document.getElementById('g11FocusLines');
    var gVerts = document.getElementById('g11Vertices');
    var gLabels = document.getElementById('g11Labels');

    var facePts = ['S', 'A', 'C'].map(function(v){ return proj[v].x.toFixed(1) + ',' + proj[v].y.toFixed(1); }).join(' ');
    gFaces.innerHTML = '<polygon points="' + facePts + '" fill="rgba(37,99,235,0.06)" stroke="none"/>';

    var edgeMarkup = '';
    baseEdges.forEach(function(e){
      var p1 = proj[e[0]], p2 = proj[e[1]];
      var isHidden = (e[0] === 'A' && e[1] === 'B');
      var dash = isHidden ? 'stroke-dasharray="5,4" stroke="#94a3b8" stroke-width="1.8"' : 'stroke="#cbd5e1" stroke-width="2"';
      edgeMarkup += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" ' + dash + '/>';
    });
    gEdges.innerHTML = edgeMarkup;

    var focusMarkup = '';
    if(mode === 'parallel'){
      var pM = proj['M'], pN = proj['N'];
      var pB = proj['B'], pC = proj['C'];
      focusMarkup += '<line x1="' + pM.x.toFixed(1) + '" y1="' + pM.y.toFixed(1) + '" x2="' + pN.x.toFixed(1) + '" y2="' + pN.y.toFixed(1) + '" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>';
      focusMarkup += '<line x1="' + pB.x.toFixed(1) + '" y1="' + pB.y.toFixed(1) + '" x2="' + pC.x.toFixed(1) + '" y2="' + pC.y.toFixed(1) + '" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>';
    } else {
      var pS = proj['S'], pA = proj['A'];
      var pB2 = proj['B'], pC2 = proj['C'];
      focusMarkup += '<line x1="' + pS.x.toFixed(1) + '" y1="' + pS.y.toFixed(1) + '" x2="' + pA.x.toFixed(1) + '" y2="' + pA.y.toFixed(1) + '" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>';
      focusMarkup += '<line x1="' + pB2.x.toFixed(1) + '" y1="' + pB2.y.toFixed(1) + '" x2="' + pC2.x.toFixed(1) + '" y2="' + pC2.y.toFixed(1) + '" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>';
    }
    gFocus.innerHTML = focusMarkup;

    var vertMarkup = '';
    var labelMarkup = '';
    var activeVerts = mode === 'parallel' ? ['S', 'A', 'B', 'C', 'M', 'N'] : ['S', 'A', 'B', 'C'];
    activeVerts.forEach(function(name){
      var p = proj[name];
      var col = (name === 'M' || name === 'N') ? '#ef4444' : '#1d4ed8';
      vertMarkup += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5" fill="' + col + '" stroke="#ffffff" stroke-width="2"/>';
      var offX = p.x > w/2 ? 8 : -16;
      var offY = p.y < h/2 ? -8 : 16;
      labelMarkup += '<text x="' + (p.x + offX).toFixed(1) + '" y="' + (p.y + offY).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f172a">' + name + '</text>';
    });
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYaw11');
    var lblP = document.getElementById('valPitch11');
    var sY = document.getElementById('sliderYaw11');
    var sP = document.getElementById('sliderPitch11');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEvents11(){
    var svg = document.getElementById('svg3DSpace11');
    if(!svg) return;

    svg.addEventListener('pointerdown', function(e){
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      svg.style.cursor = 'grabbing';
      if(svg.setPointerCapture) svg.setPointerCapture(e.pointerId);
    });

    window.addEventListener('pointermove', function(e){
      if(!isDragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      yaw += dx * 0.012;
      pitch += dy * 0.012;
      pitch = Math.max(-Math.PI/3, Math.min(Math.PI/3, pitch));
      render();
    });

    window.addEventListener('pointerup', function(){
      if(isDragging){
        isDragging = false;
        svg.style.cursor = 'grab';
      }
    });

    var sY = document.getElementById('sliderYaw11');
    var sP = document.getElementById('sliderPitch11');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var bPara = document.getElementById('btnModeParallel');
    var bSkew = document.getElementById('btnModeSkew');
    var bReset = document.getElementById('btnReset3D_11');

    if(bPara) bPara.addEventListener('click', function(){
      mode = 'parallel';
      bPara.style.background = '#10b981'; bPara.style.color = '#fff';
      if(bSkew){ bSkew.style.background = '#fff'; bSkew.style.color = '#334155'; }
      render();
    });

    if(bSkew) bSkew.addEventListener('click', function(){
      mode = 'skew';
      bSkew.style.background = '#f59e0b'; bSkew.style.color = '#fff';
      if(bPara){ bPara.style.background = '#fff'; bPara.style.color = '#334155'; }
      render();
    });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 40 * Math.PI / 180;
      pitch = 20 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupEvents11);
  } else {
    setupEvents11();
  }
})();
</script>

---

## III. Các Tính chất của Hai đường thẳng song song

> [!IMPORTANT]
> **Định lý 1 (Tiên đề Ơ-clit về đường thẳng song song):**  
> Trong không gian, qua một điểm nằm ngoài một đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đã cho.

> [!IMPORTANT]
> **Định lý 2 (Tính chất bắc cầu):**  
> Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau:
> $$\begin{cases} a \parallel c \\ b \parallel c \\ a \neq b \end{cases} \implies a \parallel b$$

---

## IV. Định lý Ba đường giao tuyến (Định lý mái nhà)

Đây là định lý có ứng dụng mạnh mẽ nhất trong việc tìm giao tuyến và thiết diện của hình chóp:

> [!IMPORTANT]
> **Định lý 3 (Định lý ba đường giao tuyến):**  
> Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó **hoặc đồng quy, hoặc đôi một song song**:
> $$\begin{cases} (P) \cap (Q) = d_1 \\ (Q) \cap (R) = d_2 \\ (R) \cap (P) = d_3 \end{cases} \implies \left[\begin{matrix} d_1, d_2, d_3 \text{ đồng quy tại một điểm } O \\ d_1 \parallel d_2 \parallel d_3 \end{matrix}\right.$$

> [!NOTE]
> **Hệ quả ứng dụng thực hành:**  
> Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ lần lượt chứa hai đường thẳng song song $a$ và $b$ ($a \subset (P), b \subset (Q), a \parallel b$), thì giao tuyến $d$ của $(P)$ và $(Q)$ (nếu có) sẽ **song song với $a$ và $b$**:
> $$d = (P) \cap (Q) \implies d \parallel a \parallel b$$

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Chứng minh hai đường thẳng song song trong không gian

> [!NOTE]
> **Các phương pháp chứng minh thường dùng:**
> 1. **Dùng tính chất hình học phẳng:** Tìm một mặt phẳng chứa cả hai đường thẳng đó, sau đó áp dụng định lý Ta-lét đảo, tính chất đường trung bình trong tam giác/hình thang, hoặc hai cạnh đối của hình bình hành.
> 2. **Dùng tính chất bắc cầu:** Chứng minh cả hai đường thẳng cùng song song với một đường thẳng thứ ba ($a \parallel c$ và $b \parallel c \Rightarrow a \parallel b$).
> 3. **Dùng định lý giao tuyến:** Tìm hai mặt phẳng lần lượt chứa hai đường thẳng đó và áp dụng hệ quả định lý ba giao tuyến.

#### Ví dụ 1:
Cho tứ diện $ABCD$. Gọi $M, N, P, Q, R, S$ lần lượt là trung điểm của các cạnh $AB, CD, BC, AD, AC, BD$.
a) Chứng minh tứ giác $MPNQ$ là hình bình hành.  
b) Chứng minh ba đoạn thẳng $MN, PQ, RS$ cùng cắt nhau tại trung điểm của mỗi đoạn.

#### Lời giải chi tiết:
**a)** Xét tam giác $ABC$:
- $M$ là trung điểm của $AB$, $P$ là trung điểm của $BC$ $\Rightarrow MP$ là đường trung bình của $\Delta ABC$.
- Suy ra $MP \parallel AC$ và $MP = \frac{1}{2}AC$.

Xét tam giác $ACD$:
- $Q$ là trung điểm của $AD$, $N$ là trung điểm của $CD$ $\Rightarrow QN$ là đường trung bình của $\Delta ACD$.
- Suy ra $QN \parallel AC$ và $QN = \frac{1}{2}AC$.

Từ hai điều trên ta có:
$$\begin{cases} MP \parallel QN \text{ (cùng song song với } AC) \\ MP = QN = \frac{1}{2}AC \end{cases}$$
Tứ giác $MPNQ$ có một cặp cạnh đối vừa song song vừa bằng nhau nên $MPNQ$ là **hình bình hành**.

**b)** Vì $MPNQ$ là hình bình hành nên hai đường chéo $MN$ và $PQ$ cắt nhau tại trung điểm $G$ của mỗi đoạn.  
Chứng minh hoàn toàn tương tự cho tứ giác $MQNR$ hoặc $PRQS$, ta cũng có hình bình hành và nhận $RS$ đi qua đúng trung điểm $G$ đó.  
Vậy ba đoạn thẳng $MN, PQ, RS$ đồng quy tại điểm $G$ và điểm $G$ là trung điểm của mỗi đoạn (điểm $G$ được gọi là **trọng tâm của tứ diện $ABCD$**).

---

### Dạng 2: Tìm giao tuyến của hai mặt phẳng chứa hai đường thẳng song song

> [!NOTE]
> **Phương pháp:**
> Để tìm giao tuyến của $(P)$ và $(Q)$ khi biết $a \subset (P), b \subset (Q)$ với $a \parallel b$:
> 1. Tìm một điểm chung $M \in (P) \cap (Q)$.
> 2. Theo hệ quả định lý ba giao tuyến, giao tuyến $d$ là đường thẳng **đi qua $M$ và song song với $a$ và $b$**.

#### Ví dụ 2:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành.
a) Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.  
b) Tìm giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$.

#### Lời giải chi tiết:
**a) Tìm $(SAB) \cap (SCD)$:**
- Ta có $S$ là điểm chung: $S \in (SAB) \cap (SCD)$.
- Mặt phẳng $(SAB)$ chứa đường thẳng $AB$.
- Mặt phẳng $(SCD)$ chứa đường thẳng $CD$.
- Vì đáy $ABCD$ là hình bình hành nên $AB \parallel CD$.  
Theo hệ quả định lý giao tuyến, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng **$d_1$ đi qua $S$ và song song với $AB$ (và $CD$)**.

**b) Tìm $(SAD) \cap (SBC)$:**
- Điểm $S$ là điểm chung của hai mặt phẳng.
- Mặt phẳng $(SAD)$ chứa đường thẳng $AD$.
- Mặt phẳng $(SBC)$ chứa đường thẳng $BC$.
- Vì $ABCD$ là hình bình hành nên $AD \parallel BC$.  
Suy ra giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng **$d_2$ đi qua $S$ và song song với $AD$ (và $BC$)**.

---

### Dạng 3: Xác định thiết diện song song với một đường thẳng

#### Ví dụ 3:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB = 2CD$. Gọi $M$ là một điểm thuộc cạnh bên $SA$ sao cho $SM = 2MA$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với $AB$ và $SC$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$.

#### Lời giải chi tiết:
- Điểm $M \in (\alpha) \cap (SAB)$ và $(\alpha) \parallel AB$:  
  Trong mặt phẳng $(SAB)$, qua $M$ kẻ đường thẳng song song với $AB$ cắt $SB$ tại điểm $N$. Ta có đoạn giao tuyến **$MN \parallel AB$**.
- Điểm $N \in (\alpha) \cap (SBC)$ và $(\alpha) \parallel SC$:  
  Trong mặt phẳng $(SBC)$, qua $N$ kẻ đường thẳng song song với $SC$ cắt $BC$ tại điểm $P$. Ta có đoạn giao tuyến **$NP \parallel SC$**.
- Điểm $P \in (\alpha) \cap (ABCD)$ và $(\alpha) \parallel AB \parallel CD$:  
  Trong mặt đáy $(ABCD)$, qua $P$ kẻ đường thẳng song song với $CD$ (và $AB$) cắt $AD$ tại điểm $Q$. Ta có đoạn giao tuyến **$PQ \parallel CD$**.
- Nối $Q$ với $M$: đoạn thẳng $QM$ nằm trong mặt bên $(SAD)$.
- Khép kín các đoạn giao tuyến: $MN, NP, PQ, QM$ tạo thành tứ giác $MNPQ$.  
Vì $MN \parallel AB$ và $PQ \parallel AB \Rightarrow MN \parallel PQ$.  
Vậy thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$ là **hình thang $MNPQ$**.

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hai đường thẳng chéo nhau là hai đường thẳng:",
  "options": [
    "A. Không có điểm chung",
    "B. Không cùng nằm trong bất kỳ mặt phẳng nào",
    "C. Cắt nhau",
    "D. Song song với nhau"
  ],
  "answer": "B. Không cùng nằm trong bất kỳ mặt phẳng nào",
  "explanation": "Hai đường thẳng chéo nhau theo định nghĩa là hai đường thẳng không đồng phẳng. Điều kiện không có điểm chung chưa đủ (vì song song cũng không có điểm chung)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho hai đường thẳng phân biệt a và b cùng song song với đường thẳng c. Khẳng định nào sau đây đúng?",
  "options": [
    "A. a và b chéo nhau",
    "B. a và b cắt nhau",
    "C. a và b song song với nhau",
    "D. a và b trùng nhau"
  ],
  "answer": "C. a và b song song với nhau",
  "explanation": "Theo tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hình chóp S.ABCD có đáy là hình bình hành. Giao tuyến của hai mặt phẳng (SAB) và (SCD) là:",
  "options": [
    "A. Đường thẳng SO (với O là tâm hình bình hành)",
    "B. Đường thẳng đi qua S và song song với AB, CD",
    "C. Đường thẳng đi qua S và song song với AD, BC",
    "D. Không có giao tuyến"
  ],
  "answer": "B. Đường thẳng đi qua S và song song với AB, CD",
  "explanation": "Hai mặt phẳng chứa hai đường thẳng song song AB và CD, điểm chung là S nên giao tuyến là đường thẳng qua S song song với AB và CD."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Trong tứ diện ABCD, có bao nhiêu cặp cạnh đối diện chéo nhau?",
  "options": [
    "A. 1 cặp",
    "B. 2 cặp",
    "C. 3 cặp",
    "D. 4 cặp"
  ],
  "answer": "C. 3 cặp",
  "explanation": "Có đúng 3 cặp cạnh đối diện là (AB và CD), (AC và BD), (AD và BC)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong không gian, cho ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt d_1, d_2, d_3. Nếu d_1 cắt d_2 tại O thì d_3 sẽ:",
  "options": [
    "A. Song song với d_1",
    "B. Đi qua điểm O",
    "C. Chéo với d_1",
    "D. Vuông góc với d_1"
  ],
  "answer": "B. Đi qua điểm O",
  "explanation": "Theo định lý ba đường giao tuyến: nếu hai giao tuyến cắt nhau tại O thì giao tuyến thứ ba cũng phải đi qua O (ba giao tuyến đồng quy)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và AC. Cặp đường thẳng nào sau đây song song?",
  "options": [
    "A. MN và CD",
    "B. MN và BC",
    "C. MN và BD",
    "D. MN và AD"
  ],
  "answer": "B. MN và BC",
  "explanation": "Trong tam giác ABC, MN là đường trung bình nên MN song song với cạnh đáy BC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khẳng định nào sau đây là SAI?",
  "options": [
    "A. Qua một điểm nằm ngoài đường thẳng cho trước, có duy nhất một đường thẳng song song với nó",
    "B. Hai đường thẳng không có điểm chung thì song song",
    "C. Hai đường thẳng song song thì đồng phẳng",
    "D. Hai đường thẳng chéo nhau thì không đồng phẳng"
  ],
  "answer": "B. Hai đường thẳng không có điểm chung thì song song",
  "explanation": "Mệnh đề B sai vì hai đường thẳng không có điểm chung có thể chéo nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Trong hình chóp S.ABCD đáy hình bình hành, đoạn thẳng nối trung điểm SA và trung điểm SB song song với đường thẳng nào?",
  "options": [
    "A. BC",
    "B. CD",
    "C. AB",
    "D. SC"
  ],
  "answer": "C. AB",
  "explanation": "Đoạn thẳng nối hai trung điểm trong tam giác SAB là đường trung bình nên song song với cạnh đáy AB (và do đó cũng song song với CD)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hình chóp S.ABCD. Gọi I, J lần lượt là giao điểm của các cạnh đối của tứ giác đáy ABCD. Khi đó giao tuyến của (SAB) và (SCD) đi qua:",
  "options": [
    "A. Điểm I",
    "B. Điểm J",
    "C. Đỉnh S và giao điểm của AB với CD",
    "D. Trọng tâm tam giác SAB"
  ],
  "answer": "C. Đỉnh S và giao điểm của AB với CD",
  "explanation": "Nếu AB và CD cắt nhau tại một điểm E thì giao tuyến của (SAB) và (SCD) chính là đường thẳng SE."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai đường thẳng chéo nhau có thể cùng song song với một mặt phẳng không?",
  "options": [
    "A. Không bao giờ",
    "B. Luôn luôn",
    "C. Có thể",
    "D. Chỉ khi chúng vuông góc với nhau"
  ],
  "answer": "C. Có thể",
  "explanation": "Hoàn toàn có thể. Ví dụ hai đường chéo của hai mặt đối diện trong hình hộp chữ nhật chéo nhau nhưng cùng song song với các mặt phẳng đáy."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$. Mặt phẳng $(\alpha)$ đi qua trung điểm $M$ của $AB$ và song song với $CD$ và $BG$.**  
   Xác định thiết diện của tứ diện cắt bởi mặt phẳng $(\alpha)$.

2. **Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AD = 2BC$. Gọi $O$ là giao điểm của $AC$ và $BD$. Gọi $M$ là trung điểm của $SD$.**  
   a) Chứng minh rằng $OM$ song song với mặt phẳng $(SBC)$.  
   b) Tìm giao điểm của đường thẳng $SB$ với mặt phẳng $(MAC)$.
