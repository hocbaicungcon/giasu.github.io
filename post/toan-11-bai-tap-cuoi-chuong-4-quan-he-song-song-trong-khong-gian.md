---
title: 'Toán 11: Bài tập cuối chương 4 - Quan hệ song song trong không gian'
description: 'Tổng ôn toàn diện Chương 4 Hình học không gian 11 Kết nối tri thức: Bản đồ tư duy hệ thống quan hệ song song, bảng so sánh 3 cấp độ song song, 6 phương pháp giải toán hình không gian cốt lõi, mô hình 3D xoay tương tác đa khối và 12 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Quan hệ song song
  - Giao tuyến và giao điểm
  - Thiết diện không gian
  - Hình lăng trụ và hình hộp
  - Ôn tập chương 4
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài tập cuối chương IV. Quan hệ song song trong không gian

Chúc mừng các em đã hoàn thành toàn bộ chuyên đề **Chương IV: Quan hệ song song trong không gian** (Chương trình Toán 11 GDPT 2018 — Bộ sách Kết nối tri thức với cuộc sống)!

Hình học không gian là phần kiến thức kích thích trí tưởng tượng và tư duy logic hình học mạnh mẽ nhất. Từ những tiên đề cơ bản ban đầu, các em đã xây dựng nên cả một hệ thống định lý vững chắc để khảo sát các mối quan hệ song song giữa các đường thẳng và mặt phẳng trong không gian 3 chiều. Bài học tổng kết này sẽ xâu chuỗi toàn bộ phương pháp giải toán, giúp các em tự tin chinh phục mọi bài toán hình không gian trong các đề thi định kỳ và kỳ thi Tốt nghiệp THPT!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG IV: QUAN HỆ SONG SONG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Điểm, Đường & Mặt phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 6 tiên đề thừa nhận.<br>• 4 cách xác định mặt phẳng.<br>• Hình chóp và hình tứ diện.<br>• Cách tìm giao tuyến và giao điểm.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Hai đường thẳng song song</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vị trí: Cắt nhau, song song, <strong>chéo nhau</strong>.<br>• Tính bắc cầu: $a \parallel c$ và $b \parallel c \Rightarrow a \parallel b$.<br>• Định lý 3 giao tuyến (đồng quy hoặc song song).</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đường thẳng ∥ Mặt phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $d \not\subset (\alpha)$ và $d \parallel d' \subset (\alpha) \implies d \parallel (\alpha)$.<br>• Định lý giao tuyến: $(\beta) \supset d \parallel (\alpha) \implies (\beta) \cap (\alpha) \parallel d$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hai mặt phẳng song song</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(\alpha)$ chứa $a, b$ cắt nhau cùng $\parallel (\beta) \implies (\alpha) \parallel (\beta)$.<br>• Định lý Ta-lét trong không gian.<br>• <strong>Hình lăng trụ và Hình hộp</strong>.</p>
</div>
</div>
</div>

---

## I. Bảng So sánh 3 Cấp độ Quan hệ Song song trong Không gian

| Quan hệ song song | Điều kiện để chứng minh | Định lý giao tuyến tương ứng |
| :--- | :--- | :--- |
| **Đường thẳng $\parallel$ Đường thẳng** ($a \parallel b$) | Cùng nằm trong một mặt phẳng và song song theo hình học phẳng (đường trung bình, Ta-lét đảo, hình bình hành) HOẶC cùng song song với đường thẳng thứ ba. | Ba mặt phẳng cắt nhau theo 3 giao tuyến phân biệt thì 3 giao tuyến hoặc đồng quy hoặc đôi một song song. |
| **Đường thẳng $\parallel$ Mặt phẳng** ($d \parallel (\alpha)$) | Chứng minh $d$ song song với **một đường thẳng $d'$** nằm trong $(\alpha)$ (với $d \not\subset (\alpha)$). | Mặt phẳng $(\beta)$ chứa $d$ cắt $(\alpha)$ theo giao tuyến $c$ thì $c \parallel d$. |
| **Mặt phẳng $\parallel$ Mặt phẳng** ($(\alpha) \parallel (\beta)$) | Chứng minh $(\alpha)$ chứa **hai đường thẳng cắt nhau** $a$ và $b$ cùng song song với $(\beta)$. | Mặt phẳng thứ ba $(\gamma)$ cắt $(\alpha)$ và $(\beta)$ theo hai giao tuyến thì hai giao tuyến đó song song với nhau. |

---

## II. Phòng thí nghiệm 3D Tương tác Tổng ôn Toàn bộ Chương IV

Hãy bấm các nút dưới đây để **chuyển đổi linh hoạt giữa 4 mô hình hình học không gian kinh điển**: Hình tứ diện, Hình chóp tứ giác, Hình lăng trụ tam giác và Hình hộp chữ nhật. Dùng chuột hoặc ngón tay xoay mô hình đa chiều để kiểm chứng các quan hệ song song trong không gian!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">PHÒNG KHẢO SÁT HÌNH HỌC KHÔNG GIAN 3D ĐA KHỐI</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Xoay khối 3D để quan sát các cạnh bên, mặt bên và các quan hệ song song từ mọi hướng.</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnRevTetra" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">1. Tứ diện S.ABC</button>
<button id="btnRevPyramid" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">2. Chóp S.ABCD</button>
<button id="btnRevPrism" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">3. Lăng trụ tam giác</button>
<button id="btnRevBox" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">4. Hình hộp</button>
<button id="btnResetRev" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DReview" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<g id="gRevFaces"></g>
<g id="gRevEdges"></g>
<g id="gRevVertices"></g>
<g id="gRevLabels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang: <span id="valYawRev">35°</span></label>
<input id="sliderYawRev" type="range" min="-180" max="180" value="35" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng: <span id="valPitchRev">20°</span></label>
<input id="sliderPitchRev" type="range" min="-60" max="60" value="20" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var curM = 'tetra';
  var yaw = 35 * Math.PI / 180;
  var pitch = 20 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;

  var allModels = {
    tetra: {
      verts: {
        'S': [0, 110, 0], 'A': [-75, -50, -60], 'B': [80, -50, -50], 'C': [0, -60, 85]
      },
      edges: [
        ['S', 'A'], ['S', 'B'], ['S', 'C'], ['A', 'B'], ['B', 'C'], ['C', 'A']
      ],
      hidden: [['A', 'B']]
    },
    pyramid: {
      verts: {
        'S': [0, 120, 0], 'A': [-80, -50, -70], 'B': [80, -50, -70], 'C': [90, -50, 70], 'D': [-70, -50, 70]
      },
      edges: [
        ['S', 'A'], ['S', 'B'], ['S', 'C'], ['S', 'D'], ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A']
      ],
      hidden: [['A', 'B'], ['S', 'A']]
    },
    prism: {
      verts: {
        'A': [-70, -70, -50], 'B': [70, -70, -50], 'C': [0, -70, 70],
        "A'": [-70, 70, -50], "B'": [70, 70, -50], "C'": [0, 70, 70]
      },
      edges: [
        ['A', 'B'], ['B', 'C'], ['C', 'A'], ["A'", "B'"], ["B'", "C'"], ["C'", "A'"],
        ['A', "A'"], ['B', "B'"], ['C', "C'"]
      ],
      hidden: [['A', 'B'], ['A', "A'"]]
    },
    box: {
      verts: {
        'A': [-65, -60, -60], 'B': [65, -60, -60], 'C': [75, -60, 60], 'D': [-55, -60, 60],
        "A'": [-65, 60, -60], "B'": [65, 60, -60], "C'": [75, 60, 60], "D'": [-55, 60, 60]
      },
      edges: [
        ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A'],
        ["A'", "B'"], ["B'", "C'"], ["C'", "D'"], ["D'", "A'"],
        ['A', "A'"], ['B', "B'"], ['C', "C'"], ['D', "D'"]
      ],
      hidden: [['A', 'B'], ['A', 'D'], ['A', "A'"]]
    }
  };

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
    var svg = document.getElementById('svg3DReview');
    if(!svg) return;
    var w = 540, h = 380;
    var m = allModels[curM];
    var proj = {};
    for(var k in m.verts){
      proj[k] = project(m.verts[k], w, h);
    }

    var gEdges = document.getElementById('gRevEdges');
    var gVerts = document.getElementById('gRevVertices');
    var gLabels = document.getElementById('gRevLabels');

    var edgeMarkup = '';
    m.edges.forEach(function(e){
      var p1 = proj[e[0]], p2 = proj[e[1]];
      var isH = false;
      m.hidden.forEach(function(hEdge){
        if((hEdge[0] === e[0] && hEdge[1] === e[1]) || (hEdge[0] === e[1] && hEdge[1] === e[0])) isH = true;
      });
      var dash = isH ? 'stroke-dasharray="5,4" stroke="#94a3b8" stroke-width="1.8"' : 'stroke="#2563eb" stroke-width="2.2"';
      edgeMarkup += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" ' + dash + '/>';
    });
    gEdges.innerHTML = edgeMarkup;

    var vertMarkup = '';
    var labelMarkup = '';
    for(var name in proj){
      var p = proj[name];
      var isTop = name === 'S' || name.indexOf("'") !== -1;
      var col = isTop ? '#10b981' : '#1d4ed8';
      vertMarkup += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5" fill="' + col + '" stroke="#fff" stroke-width="2"/>';
      var offX = p.x > w/2 ? 8 : -18;
      var offY = isTop ? -8 : 16;
      labelMarkup += '<text x="' + (p.x + offX).toFixed(1) + '" y="' + (p.y + offY).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f172a">' + name + '</text>';
    }
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYawRev');
    var lblP = document.getElementById('valPitchRev');
    var sY = document.getElementById('sliderYawRev');
    var sP = document.getElementById('sliderPitchRev');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEventsRev(){
    var svg = document.getElementById('svg3DReview');
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

    var sY = document.getElementById('sliderYawRev');
    var sP = document.getElementById('sliderPitchRev');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var b1 = document.getElementById('btnRevTetra');
    var b2 = document.getElementById('btnRevPyramid');
    var b3 = document.getElementById('btnRevPrism');
    var b4 = document.getElementById('btnRevBox');
    var bReset = document.getElementById('btnResetRev');

    function setActiveBtn(activeBtn, modelKey){
      [b1, b2, b3, b4].forEach(function(b){
        if(b){ b.style.background = '#fff'; b.style.color = '#334155'; }
      });
      if(activeBtn){ activeBtn.style.background = '#2563eb'; activeBtn.style.color = '#fff'; }
      curM = modelKey;
      render();
    }

    if(b1) b1.addEventListener('click', function(){ setActiveBtn(b1, 'tetra'); });
    if(b2) b2.addEventListener('click', function(){ setActiveBtn(b2, 'pyramid'); });
    if(b3) b3.addEventListener('click', function(){ setActiveBtn(b3, 'prism'); });
    if(b4) b4.addEventListener('click', function(){ setActiveBtn(b4, 'box'); });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 35 * Math.PI / 180;
      pitch = 20 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupEventsRev);
  } else {
    setupEventsRev();
  }
})();
</script>

---

## III. Phân loại 6 Dạng toán trọng tâm Tổng ôn Chương IV

### Dạng 1: Tìm giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng

#### Bài toán 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$. Gọi $I$ là điểm nằm trên cạnh $SC$ ($I \neq S, C$).
a) Tìm giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$.  
b) Tìm giao điểm của đường thẳng $SD$ với mặt phẳng $(ABI)$.

#### Lời giải chi tiết:
**a) Tìm $(SAD) \cap (SBC)$:**
- Ta có $S$ là điểm chung thứ nhất.
- Trong mặt phẳng đáy $(ABCD)$: hai cạnh bên $AD$ và $BC$ không song song nên cắt nhau tại điểm $E$ ($E = AD \cap BC$).  
  Vì $E \in AD \subset (SAD) \Rightarrow E \in (SAD)$.  
  Vì $E \in BC \subset (SBC) \Rightarrow E \in (SBC)$.  
  Suy ra $E$ là điểm chung thứ hai.  
Vậy giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng **$SE$**.

**b) Tìm giao điểm của $SD$ với mặt phẳng $(ABI)$:**
- Xét mặt phẳng phụ $(SCD)$ chứa đường thẳng $SD$.
- Tìm giao tuyến của $(SCD)$ và $(ABI)$:
  + Ta có $I \in SC \subset (SCD)$ và $I \in (ABI) \Rightarrow I$ là điểm chung thứ nhất.
  + Trong mặt phẳng $(SCD)$ mở rộng: đường thẳng $AB$ cắt cạnh $CD$ tại điểm $F$ ($F = AB \cap CD$).  
    Vì $F \in CD \subset (SCD)$ và $F \in AB \subset (ABI) \Rightarrow F$ là điểm chung thứ hai.  
  Vậy $(SCD) \cap (ABI) = FI$.
- Trong mặt phẳng $(SCD)$: đoạn thẳng $FI$ cắt cạnh bên $SD$ tại điểm $K$ ($K = FI \cap SD$).  
Vì $K \in FI \subset (ABI)$ nên $K \in (ABI)$.  
Vậy **$K$ chính là giao điểm của $SD$ với mặt phẳng $(ABI)$**.

---

### Dạng 2: Chứng minh đường thẳng song song với mặt phẳng

#### Bài toán 2:
Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O_1, O_2$ lần lượt là tâm của hình bình hành $ABCD$ và $ABEF$.
a) Chứng minh rằng đường thẳng $O_1 O_2$ song song với các mặt phẳng $(ADF)$ và $(BCE)$.  
b) Gọi $M, N$ lần lượt là trọng tâm của các tam giác $ABD$ và $ABE$. Chứng minh rằng $MN \parallel (CDEF)$.

#### Lời giải chi tiết:
**a) Chứng minh $O_1 O_2 \parallel (ADF)$ và $(BCE)$:**
- Trong tam giác $ACE$: $O_1$ là trung điểm của $AC$, $O_2$ là trung điểm của $AE$.  
  Suy ra $O_1 O_2$ là đường trung bình của $\Delta ACE \Rightarrow O_1 O_2 \parallel CE$.
- Vì $CE \subset (BCE)$ và $O_1 O_2 \not\subset (BCE)$ nên:
  $$O_1 O_2 \parallel (BCE)$$
- Mặt khác, trong tam giác $BDF$: $O_1$ là trung điểm $BD$, $O_2$ là trung điểm $BF$ $\Rightarrow O_1 O_2 \parallel DF$.  
  Vì $DF \subset (ADF)$ và $O_1 O_2 \not\subset (ADF)$ nên:
  $$O_1 O_2 \parallel (ADF)$$

**b) Chứng minh $MN \parallel (CDEF)$:**
- Gọi $I$ là trung điểm của đoạn thẳng chung $AB$.
- Trong tam giác $ABD$: điểm $M$ là trọng tâm $\Rightarrow \frac{IM}{ID} = \frac{1}{3}$.
- Trong tam giác $ABE$: điểm $N$ là trọng tâm $\Rightarrow \frac{IN}{IE} = \frac{1}{3}$.
- Trong tam giác $IDE$: ta có $\frac{IM}{ID} = \frac{IN}{IE} = \frac{1}{3}$. Theo định lý Ta-lét đảo:
  $$MN \parallel DE$$
- Vì $DE \subset (CDEF)$ và $MN \not\subset (CDEF)$ nên suy ra:
  $$MN \parallel (CDEF)$$

---

### Dạng 3: Chứng minh hai mặt phẳng song song

#### Bài toán 3:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N, P$ lần lượt là trung điểm của $SA, SB, SC$.
a) Chứng minh rằng mặt phẳng $(MNP)$ song song với mặt đáy $(ABCD)$.  
b) Gọi $I$ là trung điểm của $SD$. Chứng minh rằng tứ giác $MNIP$ là hình bình hành.

#### Lời giải chi tiết:
**a) Chứng minh $(MNP) \parallel (ABCD)$:**
- Trong tam giác $SAB$: $M, N$ là trung điểm $SA, SB \Rightarrow MN$ là đường trung bình $\Rightarrow MN \parallel AB$.  
  Vì $AB \subset (ABCD) \Rightarrow MN \parallel (ABCD)$ (1).
- Trong tam giác $SBC$: $N, P$ là trung điểm $SB, SC \Rightarrow NP$ là đường trung bình $\Rightarrow NP \parallel BC$.  
  Vì $BC \subset (ABCD) \Rightarrow NP \parallel (ABCD)$ (2).
- Xét mặt phẳng $(MNP)$: chứa hai đường thẳng $MN$ và $NP$ cắt nhau tại $N$.  
Từ (1) và (2) suy ra **$(MNP) \parallel (ABCD)$**.

**b) Chứng minh $MNIP$ là hình bình hành:**
- Trong tam giác $SAD$: $M$ là trung điểm $SA$, $I$ là trung điểm $SD \Rightarrow MI \parallel AD$ và $MI = \frac{1}{2}AD$.
- Ta có $MN \parallel AB$ và $MN = \frac{1}{2}AB$; $IP \parallel CD$ và $IP = \frac{1}{2}CD$.  
Vì $ABCD$ là hình bình hành nên $AB \parallel CD$ và $AB = CD$.  
Suy ra $MN \parallel IP$ và $MN = IP = \frac{1}{2}AB$.  
Tứ giác $MNIP$ có một cặp cạnh đối vừa song song vừa bằng nhau nên $MNIP$ là một **hình bình hành**.

---

## IV. Đề Trắc nghiệm Tổng ôn Toàn bộ Chương IV (12 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hai đường thẳng chéo nhau trong không gian là hai đường thẳng:",
  "options": [
    "A. Không cắt nhau",
    "B. Không cùng nằm trong bất kỳ mặt phẳng nào",
    "C. Song song",
    "D. Cắt nhau tại vô cực"
  ],
  "answer": "B. Không cùng nằm trong bất kỳ mặt phẳng nào",
  "explanation": "Định nghĩa chuẩn: Hai đường thẳng chéo nhau là hai đường thẳng không đồng phẳng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Số mặt phẳng đi qua ba điểm phân biệt không thẳng hàng là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. Vô số",
    "D. 3"
  ],
  "answer": "A. 1",
  "explanation": "Theo Tiên đề 2: Có một và chỉ một mặt phẳng đi qua 3 điểm không thẳng hàng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hình chóp S.ABCD đáy hình bình hành. Giao tuyến của hai mặt phẳng (SAD) và (SBC) là:",
  "options": [
    "A. Đường thẳng SO",
    "B. Đường thẳng qua S song song với AD và BC",
    "C. Đường thẳng qua S song song với AB và CD",
    "D. Đoạn thẳng AC"
  ],
  "answer": "B. Đường thẳng qua S song song với AD và BC",
  "explanation": "Hai mặt phẳng chứa hai đường thẳng song song AD và BC, điểm chung là S nên giao tuyến là đường thẳng qua S song song với AD và BC."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Điều kiện để đường thẳng d song song với mặt phẳng (α) là:",
  "options": [
    "A. d song song với một đường thẳng nằm trong (α) và d không nằm trong (α)",
    "B. d vuông góc với (α)",
    "C. d có ít nhất một điểm chung với (α)",
    "D. d song song với mọi đường thẳng nằm trong (α)"
  ],
  "answer": "A. d song song với một đường thẳng nằm trong (α) và d không nằm trong (α)",
  "explanation": "Theo Định lý nhận biết: d ⊄ (α), d' ⊂ (α), d ∥ d' ⇒ d ∥ (α)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và CD. Cặp cạnh nào sau đây là hai cạnh đối diện chéo nhau?",
  "options": [
    "A. AB và BC",
    "B. AC và BD",
    "C. AD và CD",
    "D. AB và AC"
  ],
  "answer": "B. AC và BD",
  "explanation": "AC và BD là hai cạnh đối diện không có đỉnh chung của tứ diện nên chúng chéo nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Nếu (α) ∥ (β) và đường thẳng d nằm trong (α) thì:",
  "options": [
    "A. d cắt (β)",
    "B. d ∥ (β)",
    "C. d chéo với (β)",
    "D. d vuông góc với (β)"
  ],
  "answer": "B. d ∥ (β)",
  "explanation": "Vì (α) và (β) không có điểm chung nên mọi đường thẳng nằm trong (α) đều không có điểm chung với (β), tức là d ∥ (β)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Các mặt bên của một hình lăng trụ bất kỳ luôn là:",
  "options": [
    "A. Hình chữ nhật",
    "B. Hình bình hành",
    "C. Hình thang",
    "D. Hình thoi"
  ],
  "answer": "B. Hình bình hành",
  "explanation": "Theo định nghĩa, các mặt bên của hình lăng trụ luôn là các hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một hình hộp chữ nhật có tất cả bao nhiêu đường chéo?",
  "options": [
    "A. 2",
    "B. 4",
    "C. 6",
    "D. 8"
  ],
  "answer": "B. 4",
  "explanation": "Hình hộp có 4 đường chéo nối các cặp đỉnh đối diện: AC', BD', CA', DB'. Chúng cắt nhau tại trung điểm mỗi đường."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Phép chiếu song song KHÔNG bảo toàn tính chất nào sau đây?",
  "options": [
    "A. Tính thẳng hàng của ba điểm",
    "B. Thứ tự ba điểm thẳng hàng",
    "C. Quan hệ song song của hai đường thẳng",
    "D. Độ lớn của góc"
  ],
  "answer": "D. Độ lớn của góc",
  "explanation": "Phép chiếu song song không bảo toàn độ lớn góc (góc vuông có thể biến thành góc nhọn hoặc góc tù)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hình biểu diễn của một tam giác đều qua phép chiếu song song nói chung là:",
  "options": [
    "A. Tam giác đều",
    "B. Tam giác cân",
    "C. Tam giác vuông",
    "D. Tam giác bất kỳ"
  ],
  "answer": "D. Tam giác bất kỳ",
  "explanation": "Phép chiếu song song biến tam giác thành tam giác bất kỳ (không giữ nguyên tính đều hoặc cân)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 11: Cho hình chóp tứ giác S.ABCD. Thiết diện của hình chóp cắt bởi một mặt phẳng có thể có nhiều nhất bao nhiêu cạnh?",
  "options": [
    "A. 3 cạnh",
    "B. 4 cạnh",
    "C. 5 cạnh",
    "D. 6 cạnh"
  ],
  "answer": "C. 5 cạnh",
  "explanation": "Hình chóp tứ giác có 5 mặt (4 mặt bên + 1 đáy). Mặt phẳng cắt có thể giao với tối đa 5 mặt này tạo thành thiết diện là ngũ giác (5 cạnh)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 12: Cho ba mặt phẳng đôi một song song chắn trên hai cát tuyến d_1 và d_2 các đoạn thẳng AB, BC và A'B', B'C'. Biết AB = 3, BC = 5, A'B' = 4.5. Độ dài B'C' bằng:",
  "options": [
    "A. 6.5",
    "B. 7.0",
    "C. 7.5",
    "D. 8.0"
  ],
  "answer": "C. 7.5",
  "explanation": "Theo Định lý Ta-lét không gian: AB / BC = A'B' / B'C' ⇔ 3/5 = 4.5 / B'C' ⇒ B'C' = (5 * 4.5) / 3 = 7.5."
}'></div>

---

## V. Lời kết và Hướng dẫn học tiếp

Chúc mừng các em đã chinh phục thành công trọn vẹn **Chương IV: Quan hệ song song trong không gian**! 

Năng lực tư duy 3D và phương pháp dựng hình không gian mà các em đã làm chủ trong chương này chính là chìa khóa mở đường trực tiếp cho:
- **Học kỳ 2 Lớp 11:** **Quan hệ vuông góc trong không gian** (Đường thẳng vuông góc mặt phẳng, Hai mặt phẳng vuông góc, Khoảng cách và Thể tích khối đa diện).
- **Hình học Lớp 12:** Hệ trục tọa độ $Oxyz$ trong không gian (Giải tích không gian bằng vectơ và tọa độ).
