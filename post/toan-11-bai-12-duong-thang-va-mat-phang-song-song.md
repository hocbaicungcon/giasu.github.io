---
title: 'Toán 11 Bài 12: Đường thẳng và mặt phẳng song song - Điều kiện, tính chất và thiết diện'
description: 'Lý thuyết trọng tâm Bài 12 Toán 11 Kết nối tri thức: Điều kiện đường thẳng song song mặt phẳng, định lý giao tuyến song song, phương pháp chứng minh d ∥ (α), cách dựng thiết diện và mô hình 3D tương tác xoay đa chiều.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Đường thẳng song song mặt phẳng
  - Thiết diện song song
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài 12. Đường thẳng và mặt phẳng song song

Chào mừng các em đến với bài học then chốt tiếp theo của Hình học không gian 11: **Đường thẳng và mặt phẳng song song**!

Hãy quan sát thế giới xung quanh:
- Một chiếc xà đơn thể thao được gắn nằm ngang song song với nền sân tập.
- Một thanh ray tàu điện trên cao chạy song song với mặt đường nhựa phía dưới.
- Mép trên của một bức tranh treo tường song song với sàn nhà.

Làm thế nào để các kỹ sư xây dựng khẳng định chắc chắn rằng một thanh dầm thép không bao giờ đâm xiên vào mặt sàn (tức là song song hoàn hảo với mặt phẳng) mà không cần phải kéo dài vô tận cả hai đối tượng để kiểm tra? Câu trả lời nằm ở **dấu hiệu nhận biết đường thẳng song song với mặt phẳng** mà chúng ta sẽ tìm hiểu ngay sau đây!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Song song</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường thẳng $d$ và mặt phẳng $(\alpha)$ gọi là song song nếu chúng <strong>không có điểm chung nào</strong>: $d \cap (\alpha) = \emptyset$.<br>• Ký hiệu: $d \parallel (\alpha)$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Dấu hiệu nhận biết (Cốt lõi)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Để chứng minh $d \parallel (\alpha)$:<br>$\begin{cases} d \not\subset (\alpha) \\ d' \subset (\alpha) \\ d \parallel d' \end{cases} \implies d \parallel (\alpha)$.<br>• <em>Chỉ cần song song với 1 đường nằm trong mặt phẳng!</em></p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Định lý Giao tuyến</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cho $a \parallel (\alpha)$. Nếu $(\beta) \supset a$ và $(\beta) \cap (\alpha) = b$ thì $b \parallel a$.<br>• Dùng để tìm giao tuyến và dựng thiết diện song song.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mặt phẳng song song đường thẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cho hai đường thẳng chéo nhau. Có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số điểm chung:** Nếu đường thẳng $d$ song song với mặt phẳng $(\alpha)$, số điểm chung của chúng là bao nhiêu?
2. **Dấu hiệu nhận biết:** Để chứng minh đường thẳng $d$ song song với mặt phẳng $(\alpha)$, ta cần tìm một đường thẳng $d'$ thỏa mãn những điều kiện gì?
3. **Mặt đáy hình chóp:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Đoạn thẳng $AB$ có song song với mặt phẳng $(SCD)$ không?
4. **Đường thẳng trên mặt phẳng:** Nếu $d \parallel (\alpha)$, thì $d$ có song song với mọi đường thẳng nằm trong $(\alpha)$ hay không?
5. **Giao tuyến:** Nếu mặt phẳng $(\beta)$ chứa đường thẳng $d$ (với $d \parallel (\alpha)$) cắt $(\alpha)$ theo giao tuyến $c$, thì $c$ có quan hệ gì với $d$?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Không có điểm chung nào ($d \cap (\alpha) = \emptyset$).
> 2. Tìm $d'$ nằm trong $(\alpha)$ ($d' \subset (\alpha)$) sao cho $d \parallel d'$ và $d$ không nằm trong $(\alpha)$.
> 3. Có! Vì $AB \parallel CD$ mà $CD \subset (SCD)$ và $AB \not\subset (SCD) \Rightarrow AB \parallel (SCD)$.
> 4. Không! $d$ chỉ song song với các đường thẳng trong $(\alpha)$ cùng phương với nó, còn đối với các đường thẳng khác trong $(\alpha)$, $d$ sẽ **chéo nhau**.
> 5. Giao tuyến $c$ bắt buộc phải song song với $d$ ($c \parallel d$).

---

## I. Vị trí tương đối của Đường thẳng và Mặt phẳng

Cho đường thẳng $d$ và mặt phẳng $(\alpha)$. Có ba vị trí tương đối xảy ra:

| Vị trí tương đối | Số điểm chung | Ký hiệu | Minh họa thực tế |
| :--- | :---: | :---: | :--- |
| **$d$ cắt $(\alpha)$** | Đúng 1 điểm chung | $d \cap (\alpha) = \{M\}$ | Cột cờ cắm xuyên qua mặt sân |
| **$d$ nằm trong $(\alpha)$** | Vô số điểm chung | $d \subset (\alpha)$ | Vạch kẻ sơn nằm trên mặt đường |
| **$d$ song song với $(\alpha)$** | **Không có điểm chung** | $d \parallel (\alpha)$ | Dây cáp điện căng song song mặt đất |

---

## II. Mô hình 3D Tương tác: Đường thẳng song song Mặt phẳng

Mô hình 3D dưới đây mô phỏng một hình chóp $S.ABCD$ với mặt đáy $(ABCD)$ và đoạn thẳng nối trung điểm $MN$. Các em hãy **rê chuột/chạm để xoay mô hình** và quan sát: đường thẳng màu đỏ $MN$ song song với đường thẳng màu xanh lục $AB$, từ đó $MN$ luôn bay lơ lửng song song với mặt đáy $(ABCD)$ dù ta nhìn từ bất kỳ góc độ nào!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">MÔ HÌNH 3D: ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Xoay khối 3D để kiểm chứng: MN song song với mặt phẳng đáy (ABCD).</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnTogglePlane12" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Đổi màu tô mặt phẳng đáy</button>
<button id="btnReset3D_12" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DSpace12" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<g id="g12Plane"></g>
<g id="g12Edges"></g>
<g id="g12Highlight"></g>
<g id="g12Vertices"></g>
<g id="g12Labels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang: <span id="valYaw12">45°</span></label>
<input id="sliderYaw12" type="range" min="-180" max="180" value="45" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng: <span id="valPitch12">22°</span></label>
<input id="sliderPitch12" type="range" min="-60" max="60" value="22" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var yaw = 45 * Math.PI / 180;
  var pitch = 22 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;
  var planeFillMode = true;

  var verts = {
    'S': [0, 120, 0],
    'A': [-85, -50, -65],
    'B': [85, -50, -65],
    'C': [95, -50, 75],
    'D': [-75, -50, 75],
    'M': [-42.5, 35, -32.5],
    'N': [42.5, 35, -32.5]
  };

  var edges = [
    ['S', 'A'], ['S', 'B'], ['S', 'C'], ['S', 'D'],
    ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A']
  ];

  function project(pt, w, h){
    var x = pt[0], y = pt[1], z = pt[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var y1 = y;
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var x2 = x1;
    var y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);
    var scale = 1.32;
    return {
      x: w/2 + x2 * scale,
      y: h/2 - y2 * scale,
      depth: z2
    };
  }

  function render(){
    var svg = document.getElementById('svg3DSpace12');
    if(!svg) return;
    var w = 540, h = 380;
    var proj = {};
    for(var k in verts){
      proj[k] = project(verts[k], w, h);
    }

    var gPlane = document.getElementById('g12Plane');
    var gEdges = document.getElementById('g12Edges');
    var gHigh = document.getElementById('g12Highlight');
    var gVerts = document.getElementById('g12Vertices');
    var gLabels = document.getElementById('g12Labels');

    var basePts = ['A', 'B', 'C', 'D'].map(function(v){ return proj[v].x.toFixed(1) + ',' + proj[v].y.toFixed(1); }).join(' ');
    var col = planeFillMode ? 'rgba(59,130,246,0.14)' : 'rgba(16,185,129,0.14)';
    gPlane.innerHTML = '<polygon points="' + basePts + '" fill="' + col + '" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4"/>';

    var edgeMarkup = '';
    edges.forEach(function(e){
      var p1 = proj[e[0]], p2 = proj[e[1]];
      var isHidden = (e[0] === 'A' && e[1] === 'B');
      var dash = isHidden ? 'stroke-dasharray="5,4" stroke="#94a3b8" stroke-width="1.8"' : 'stroke="#cbd5e1" stroke-width="2"';
      edgeMarkup += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" ' + dash + '/>';
    });
    gEdges.innerHTML = edgeMarkup;

    var pM = proj['M'], pN = proj['N'];
    var pA = proj['A'], pB = proj['B'];
    var highMarkup = '';
    highMarkup += '<line x1="' + pM.x.toFixed(1) + '" y1="' + pM.y.toFixed(1) + '" x2="' + pN.x.toFixed(1) + '" y2="' + pN.y.toFixed(1) + '" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>';
    highMarkup += '<line x1="' + pA.x.toFixed(1) + '" y1="' + pA.y.toFixed(1) + '" x2="' + pB.x.toFixed(1) + '" y2="' + pB.y.toFixed(1) + '" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>';
    gHigh.innerHTML = highMarkup;

    var vertMarkup = '';
    var labelMarkup = '';
    ['S', 'A', 'B', 'C', 'D', 'M', 'N'].forEach(function(name){
      var p = proj[name];
      var c = (name === 'M' || name === 'N') ? '#ef4444' : '#1d4ed8';
      vertMarkup += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5" fill="' + c + '" stroke="#ffffff" stroke-width="2"/>';
      var offX = p.x > w/2 ? 8 : -16;
      var offY = p.y < h/2 ? -8 : 16;
      labelMarkup += '<text x="' + (p.x + offX).toFixed(1) + '" y="' + (p.y + offY).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f172a">' + name + '</text>';
    });
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYaw12');
    var lblP = document.getElementById('valPitch12');
    var sY = document.getElementById('sliderYaw12');
    var sP = document.getElementById('sliderPitch12');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEvents12(){
    var svg = document.getElementById('svg3DSpace12');
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

    var sY = document.getElementById('sliderYaw12');
    var sP = document.getElementById('sliderPitch12');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var bToggle = document.getElementById('btnTogglePlane12');
    var bReset = document.getElementById('btnReset3D_12');

    if(bToggle) bToggle.addEventListener('click', function(){
      planeFillMode = !planeFillMode;
      render();
    });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 45 * Math.PI / 180;
      pitch = 22 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupEvents12);
  } else {
    setupEvents12();
  }
})();
</script>

---

## III. Dấu hiệu nhận biết và Tính chất cốt lõi

### 1. Dấu hiệu nhận biết (Định lý 1)

> [!IMPORTANT]
> **Định lý 1 (Điều kiện để đường thẳng song song với mặt phẳng):**  
> Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\alpha)$ và $d$ song song với một đường thẳng $d'$ nằm trong $(\alpha)$ thì $d$ song song với $(\alpha)$:
> $$\begin{cases} d \not\subset (\alpha) \\ d' \subset (\alpha) \\ d \parallel d' \end{cases} \implies d \parallel (\alpha)$$

### 2. Các tính chất quan trọng (Định lý 2 & Định lý 3)

> [!IMPORTANT]
> **Định lý 2 (Định lý giao tuyến song song):**  
> Cho đường thẳng $a$ song song với mặt phẳng $(\alpha)$. Nếu mặt phẳng $(\beta)$ chứa đường thẳng $a$ và cắt mặt phẳng $(\alpha)$ theo giao tuyến $b$, thì giao tuyến $b$ song song với $a$:
> $$\begin{cases} a \parallel (\alpha) \\ a \subset (\beta) \\ (\beta) \cap (\alpha) = b \end{cases} \implies b \parallel a$$

> [!IMPORTANT]
> **Định lý 3 (Mặt phẳng chứa một đường và song song đường kia):**  
> Cho hai đường thẳng chéo nhau. Có một và chỉ một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.

---

## IV. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Chứng minh đường thẳng song song với mặt phẳng

> [!NOTE]
> **Quy trình 3 bước chuẩn:**
> - **Bước 1:** Xác định đường thẳng $d$ cần chứng minh và mặt phẳng mục tiêu $(\alpha)$.
> - **Bước 2:** Tìm trong mặt phẳng $(\alpha)$ một đường thẳng $d'$ thích hợp (thường là cạnh của tam giác, đường chéo hình bình hành,...).
> - **Bước 3:** Chứng minh $d \parallel d'$ (dùng đường trung bình, Ta-lét đảo, hình bình hành) và chỉ ra $d \not\subset (\alpha)$. Kết luận $d \parallel (\alpha)$.

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $SA$ và $SD$.
a) Chứng minh rằng $MN \parallel (ABCD)$.  
b) Chứng minh rằng $OM \parallel (SBC)$.

#### Lời giải chi tiết:
**a) Chứng minh $MN \parallel (ABCD)$:**
- Xét tam giác $SAD$: $M$ là trung điểm của $SA$, $N$ là trung điểm của $SD$ $\Rightarrow MN$ là đường trung bình của $\Delta SAD$.
- Suy ra $MN \parallel AD$.
- Ta có:
  $$\begin{cases} MN \parallel AD \\ AD \subset (ABCD) \\ MN \not\subset (ABCD) \end{cases} \implies MN \parallel (ABCD)$$

**b) Chứng minh $OM \parallel (SBC)$:**
- Trong mặt phẳng đáy $(ABCD)$: $O$ là giao điểm của hai đường chéo $AC$ và $BD$ nên $O$ là trung điểm của $AC$.
- Xét tam giác $SAC$:
  - $M$ là trung điểm của $SA$.
  - $O$ là trung điểm của $AC$.
  - Suy ra $MO$ là đường trung bình của tam giác $SAC \Rightarrow MO \parallel SC$.
- Ta có:
  $$\begin{cases} MO \parallel SC \\ SC \subset (SBC) \\ MO \not\subset (SBC) \end{cases} \implies MO \parallel (SBC)$$

---

### Dạng 2: Dựng thiết diện song song với một đường thẳng

#### Ví dụ 2:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là một điểm thuộc miền trong của đoạn thẳng $SB$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với hai đường thẳng $AB$ và $SC$.
a) Dựng thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$.  
b) Thiết diện là hình gì?

#### Lời giải chi tiết:
**a) Các bước dựng thiết diện:**
- Vì $(\alpha) \parallel AB$ và $M \in (\alpha) \cap (SAB)$:  
  Áp dụng Định lý 2, giao tuyến của $(\alpha)$ với $(SAB)$ đi qua $M$ và song song với $AB$. Đường thẳng này cắt $SA$ tại $P$. Ta được đoạn giao tuyến **$PM \parallel AB$**.
- Vì $(\alpha) \parallel SC$ và $M \in (\alpha) \cap (SBC)$:  
  Giao tuyến của $(\alpha)$ với $(SBC)$ đi qua $M$ và song song với $SC$. Đường thẳng này cắt $BC$ tại $Q$. Ta được đoạn giao tuyến **$MQ \parallel SC$**.
- Vì $(\alpha) \parallel AB \parallel CD$ và $Q \in (\alpha) \cap (ABCD)$:  
  Giao tuyến của $(\alpha)$ với $(ABCD)$ đi qua $Q$ và song song với $AB$ (và $CD$). Đường thẳng này cắt $AD$ tại $R$. Ta được đoạn giao tuyến **$QR \parallel CD$**.
- Nối $R$ với $P$: đoạn thẳng $RP$ nằm trên mặt phẳng $(SAD)$.  
Khép kín các đoạn giao tuyến, ta được thiết diện là tứ giác **$PMQR$**.

**b) Xác định hình dạng:**
- Ta có $PM \parallel AB$ và $QR \parallel AB \Rightarrow PM \parallel QR$.  
Vậy thiết diện $PMQR$ là một **hình thang** (với hai đáy là $PM$ và $QR$).

---

## V. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Đường thẳng d song song với mặt phẳng (α) khi và chỉ khi:",
  "options": [
    "A. d và (α) có đúng 1 điểm chung",
    "B. d và (α) không có điểm chung nào",
    "C. d song song với mọi đường thẳng trong (α)",
    "D. d vuông góc với (α)"
  ],
  "answer": "B. d và (α) không có điểm chung nào",
  "explanation": "Theo định nghĩa: Đường thẳng và mặt phẳng song song khi chúng không có điểm chung."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Điều kiện cần và đủ để đường thẳng d song song với mặt phẳng (α) là:",
  "options": [
    "A. d song song với một đường thẳng nằm trong (α) và d không nằm trong (α)",
    "B. d song song với hai đường thẳng cắt nhau nằm trong (α)",
    "C. d không cắt (α)",
    "D. Cả A và C đều đúng"
  ],
  "answer": "D. Cả A và C đều đúng",
  "explanation": "A là định lý dấu hiệu nhận biết thực hành, C là định nghĩa chuẩn xác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho d ∥ (α). Nếu đường thẳng a nằm trong (α) thì d và a có thể:",
  "options": [
    "A. Song song hoặc chéo nhau",
    "B. Cắt nhau hoặc chéo nhau",
    "C. Song song hoặc cắt nhau",
    "D. Chỉ có thể song song"
  ],
  "answer": "A. Song song hoặc chéo nhau",
  "explanation": "Vì d không có điểm chung với (α) nên d không thể có điểm chung với a (không thể cắt nhau). Do đó d và a chỉ có thể song song hoặc chéo nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho hình chóp S.ABCD có đáy là hình bình hành. Khẳng định nào sau đây SAI?",
  "options": [
    "A. AB ∥ (SCD)",
    "B. CD ∥ (SAB)",
    "C. BC ∥ (SAD)",
    "D. SA ∥ (SBC)"
  ],
  "answer": "D. SA ∥ (SBC)",
  "explanation": "Đoạn SA cắt mặt phẳng (SBC) tại điểm S nên không thể song song."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và AC. Đường thẳng MN song song với mặt phẳng nào?",
  "options": [
    "A. (ABC)",
    "B. (BCD)",
    "C. (ABD)",
    "D. (ACD)"
  ],
  "answer": "B. (BCD)",
  "explanation": "MN là đường trung bình tam giác ABC nên MN ∥ BC. Vì BC ⊂ (BCD) và MN ⊄ (BCD) nên MN ∥ (BCD)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho đường thẳng a song song với mặt phẳng (P). Có bao nhiêu mặt phẳng chứa a và song song với (P)?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "B. 1",
  "explanation": "Có duy nhất một mặt phẳng chứa đường thẳng a và song song với mặt phẳng (P)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho hai đường thẳng chéo nhau a và b. Có bao nhiêu mặt phẳng chứa a và song song với b?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "B. 1",
  "explanation": "Theo Định lý 3: Cho hai đường thẳng chéo nhau, có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hình chóp S.ABCD đáy hình bình hành. Gọi d là giao tuyến của hai mặt phẳng (SAB) và (SCD). Quan hệ giữa d và mặt đáy (ABCD) là:",
  "options": [
    "A. d cắt (ABCD)",
    "B. d ∥ (ABCD)",
    "C. d ⊂ (ABCD)",
    "D. d vuông góc với (ABCD)"
  ],
  "answer": "B. d ∥ (ABCD)",
  "explanation": "Giao tuyến d đi qua S và song song với AB. Do AB ⊂ (ABCD) và S ∉ (ABCD) nên d ∥ (ABCD)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Nếu đường thẳng d song song với mặt phẳng (α) thì qua d có thể dựng được bao nhiêu mặt phẳng cắt (α)?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "D. Vô số",
  "explanation": "Mỗi mặt phẳng xoay quanh trục d (trừ mặt phẳng song song với α) đều cắt (α) theo một giao tuyến song song với d."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hình chóp S.ABCD có đáy là hình thang, AD ∥ BC và AD = 2BC. Gọi M là trung điểm SA. Đường thẳng BM song song với:",
  "options": [
    "A. (SCD)",
    "B. (SAD)",
    "C. (SBD)",
    "D. mp đi qua C, D và trung điểm SD"
  ],
  "answer": "D. mp đi qua C, D và trung điểm SD",
  "explanation": "Gọi N là trung điểm SD. Trong tam giác SAD, MN là đường trung bình nên MN ∥ AD và MN = 1/2 AD = BC. Tứ giác BCNM là hình bình hành ⇒ BM ∥ CN ⊂ (SCD) mở rộng."
}'></div>

---

## VI. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành.**  
   Gọi $M, N, P$ lần lượt là trung điểm của $AB, CD, SA$.  
   a) Chứng minh rằng $MN \parallel (SBC)$ và $SB \parallel (MNP)$.  
   b) Tìm giao tuyến của mặt phẳng $(MNP)$ với mặt phẳng $(SAD)$.

2. **Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AD$ sao cho $AM = 2MD$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với $AB$ và $CD$.**  
   Xác định thiết diện của tứ diện cắt bởi mặt phẳng $(\alpha)$ và tính tỉ số diện tích thiết diện so với diện tích mặt tương ứng.
