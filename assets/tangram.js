import {levels} from './tangram-levels.js';
import {createGameResult} from './game-result.js';
import {sound} from './puzzle-audio.js';

const svg=document.querySelector('#tangram-board');
const scene=document.querySelector('#tangram-scene');
const status=document.querySelector('#tangram-status');
const NS='http://www.w3.org/2000/svg';

// ============================================================
// TANGRAM SOURCE
// ============================================================

const source=[
 [[0,0],[100,100],[0,200]],
 [[0,0],[200,0],[100,100]],
 [[50,150],[100,100],[150,150]],
 [[200,100],[150,50],[200,0]],
 [[200,100],[200,200],[100,200]],
 [[100,100],[150,50],[200,100],[150,150]],
 [[0,200],[50,150],[150,150],[100,200]]
];

const colors=[
 '#d97866',
 '#e8a95e',
 '#89a56d',
 '#b890a8',
 '#7597b4',
 '#ddc16f',
 '#75b5a2'
];

const centers=source.map(poly=>[
 poly.reduce((n,p)=>n+p[0],0)/poly.length,
 poly.reduce((n,p)=>n+p[1],0)/poly.length
]);

const local=source.map((poly,i)=>
 poly.map(([x,y])=>[
  x-centers[i][0],
  y-centers[i][1]
 ])
);

// Các target tương thích với từng loại mảnh.
const groups=[
 [0,1],
 [0,1],
 [2,3],
 [2,3],
 [4],
 [5],
 [6]
];

// ============================================================
// SNAP SETTINGS
// ============================================================

// Ưu tiên cao nhất: đỉnh ↔ đỉnh.
const SNAP_TARGET_VERTEX=18;
const SNAP_PIECE_VERTEX=16;

// Ưu tiên thứ hai: cạnh ↔ cạnh.
const SNAP_FULL_EDGE=12;
const SNAP_EDGE_ANGLE=4;
const SNAP_LENGTH_RATIO=0.12;

// Ưu tiên cuối: đỉnh ↔ cạnh.
const SNAP_TARGET_EDGE=9;
const SNAP_PIECE_EDGE=8;

// Sai số kiểm tra đáp án.
const MATCH_TOLERANCE=9;

// ============================================================
// STATE
// ============================================================

let level=0;
let targets=[];
let targetOutline=[];
let pieces=[];
let selected=-1;
let drag=null;
let hint=false;
let pieceScale=1;
let completed=false;

// ============================================================
// GAME RESULT
// ============================================================

const result=createGameResult(scene,{
 restart:reset,

 next:()=>{
  if(level<levels.length-1){
   level++;
   hint=false;
   reset();
  }
 }
});

// ============================================================
// SVG HELPERS
// ============================================================

const make=(tag,attrs={})=>{
 const node=document.createElementNS(NS,tag);

 for(const [k,v] of Object.entries(attrs))
  node.setAttribute(k,v);

 return node;
};

const pointsString=points=>
 points
  .map(([x,y])=>`${x.toFixed(2)},${y.toFixed(2)}`)
  .join(' ');

const shape=(i,x,y,a,flip,scale)=>{
 const r=a*Math.PI/180;
 const c=Math.cos(r);
 const s=Math.sin(r);

 return local[i].map(([px,py])=>{
  const u=flip?-px:px;

  return [
   x+scale*(u*c-py*s),
   y+scale*(u*s+py*c)
  ];
 });
};

// ============================================================
// POINTER
// ============================================================

function point(event){
 const p=svg.createSVGPoint();

 p.x=event.clientX;
 p.y=event.clientY;

 return p.matrixTransform(
  svg.getScreenCTM().inverse()
 );
}

// ============================================================
// TARGET SETUP
// ============================================================

function setupTargets(){

 const raw=levels[level].poses.map(
  ([x,y,a,flip],i)=>
   shape(i,x,y,a,flip,1)
 );

 const xs=raw.flat().map(p=>p[0]);
 const ys=raw.flat().map(p=>p[1]);

 const box=[
  Math.min(...xs),
  Math.min(...ys),
  Math.max(...xs),
  Math.max(...ys)
 ];

 pieceScale=Math.min(
  1.22,
  390/(box[2]-box[0]),
  285/(box[3]-box[1])
 );

 const mx=(box[0]+box[2])/2;
 const my=(box[1]+box[3])/2;

 targetOutline=levels[level].outline.map(
  ([x,y])=>[
   350+(x-mx)*pieceScale,
   235+(y-my)*pieceScale
  ]
 );

 targets=levels[level].poses.map(
  ([x,y,a,flip])=>[
   350+(x-mx)*pieceScale,
   235+(y-my)*pieceScale,
   a,
   flip
  ]
 );
}

// ============================================================
// GEOMETRY
// ============================================================

function piecePoints(i){

 const p=pieces[i];

 return shape(
  i,
  p.x,
  p.y,
  p.a,
  p.flip,
  pieceScale
 );
}

function distance(a,b){
 return Math.hypot(
  a[0]-b[0],
  a[1]-b[1]
 );
}

function closestPointOnSegment(p,a,b){

 const [px,py]=p;
 const [ax,ay]=a;
 const [bx,by]=b;

 const vx=bx-ax;
 const vy=by-ay;

 const len2=vx*vx+vy*vy;

 if(!len2)
  return [ax,ay];

 let t=
  ((px-ax)*vx+(py-ay)*vy)/len2;

 t=Math.max(
  0,
  Math.min(1,t)
 );

 return [
  ax+t*vx,
  ay+t*vy
 ];
}

function edgeVector(a,b){
 return [
  b[0]-a[0],
  b[1]-a[1]
 ];
}

function edgeLength(a,b){
 return distance(a,b);
}

function edgeMidpoint(a,b){
 return [
  (a[0]+b[0])/2,
  (a[1]+b[1])/2
 ];
}

// Góc nhỏ nhất giữa hai cạnh.
// 0° = song song, bất kể cùng hay ngược hướng.
function parallelAngle(a,b,c,d){

 const u=edgeVector(a,b);
 const v=edgeVector(c,d);

 const lu=Math.hypot(u[0],u[1]);
 const lv=Math.hypot(v[0],v[1]);

 if(!lu || !lv)
  return 180;

 let cos=
  Math.abs(
   (u[0]*v[0]+u[1]*v[1])/
   (lu*lv)
  );

 cos=Math.max(
  -1,
  Math.min(1,cos)
 );

 return Math.acos(cos)*180/Math.PI;
}

// ============================================================
// FIND VERTEX ↔ VERTEX
// ============================================================

function findVertexSnap(
 moving,
 fixed,
 threshold,
 sourceType
){

 let best=null;
 let bestDist=Infinity;

 for(const a of moving){

  for(const b of fixed){

   const d=distance(a,b);

   if(
    d<threshold*pieceScale &&
    d<bestDist
   ){

    bestDist=d;

    best={
     dx:b[0]-a[0],
     dy:b[1]-a[1],
     score:d,
     distance:d,
     type:'vertex',
     source:sourceType
    };
   }
  }
 }

 return best;
}

// ============================================================
// FIND EDGE ↔ EDGE
// ============================================================

function findEdgeSnap(
 moving,
 fixed,
 threshold,
 sourceType
){

 let best=null;
 let bestScore=Infinity;

 for(let i=0;i<moving.length;i++){

  const a=moving[i];
  const b=moving[(i+1)%moving.length];

  const lenAB=edgeLength(a,b);

  for(let j=0;j<fixed.length;j++){

   const c=fixed[j];
   const d=fixed[(j+1)%fixed.length];

   const lenCD=edgeLength(c,d);

   const angle=
    parallelAngle(a,b,c,d);

   if(angle>SNAP_EDGE_ANGLE)
    continue;

   const ratio=
    Math.abs(lenAB-lenCD)/
    Math.max(lenAB,lenCD);

   const sameLength=
    ratio<SNAP_LENGTH_RATIO;

   // --------------------------------------------------------
   // Cạnh có chiều dài gần bằng nhau.
   // --------------------------------------------------------

   if(sameLength){

    const options=[
     {
      dx:c[0]-a[0],
      dy:c[1]-a[1],
      d1:distance(a,c),
      d2:distance(b,d)
     },

     {
      dx:d[0]-a[0],
      dy:d[1]-a[1],
      d1:distance(a,d),
      d2:distance(b,c)
     }
    ];

    for(const option of options){

     const maxD=
      Math.max(
       option.d1,
       option.d2
      );

     if(
      maxD>
      threshold*pieceScale
     )
      continue;

     const score=
      option.d1+
      option.d2+
      angle*2;

     if(score<bestScore){

      bestScore=score;

      best={
       dx:option.dx,
       dy:option.dy,
       score,
       distance:
        Math.hypot(
         option.dx,
         option.dy
        ),
       type:'full-edge',
       source:sourceType
      };
     }
    }
   }

   // --------------------------------------------------------
   // Cạnh ngắn nằm trên một phần cạnh dài.
   // --------------------------------------------------------

   if(lenAB<lenCD){

    const mid=
     edgeMidpoint(a,b);

    const q=
     closestPointOnSegment(
      mid,
      c,
      d
     );

    const dist=
     distance(mid,q);

    if(
     dist<
     threshold*pieceScale
    ){

     const score=
      dist+
      angle*2+
      ratio*5;

     if(score<bestScore){

      bestScore=score;

      best={
       dx:q[0]-mid[0],
       dy:q[1]-mid[1],
       score,
       distance:dist,
       type:'partial-edge',
       source:sourceType
      };
     }
    }
   }
  }
 }

 return best;
}

// ============================================================
// FIND VERTEX ↔ EDGE
// ============================================================

function findVertexEdgeSnap(
 moving,
 fixed,
 threshold,
 sourceType
){

 let best=null;
 let bestDist=Infinity;

 for(const a of moving){

  for(let i=0;i<fixed.length;i++){

   const b=fixed[i];
   const c=fixed[(i+1)%fixed.length];

   const q=
    closestPointOnSegment(
     a,
     b,
     c
    );

   const d=
    distance(a,q);

   if(
    d<threshold*pieceScale &&
    d<bestDist
   ){

    bestDist=d;

    best={
     dx:q[0]-a[0],
     dy:q[1]-a[1],
     score:d,
     distance:d,
     type:'vertex-edge',
     source:sourceType
    };
   }
  }
 }

 return best;
}

// ============================================================
// CHOOSE BEST CANDIDATE
// ============================================================

function bestCandidate(
 current,
 candidate
){

 if(!candidate)
  return current;

 if(!current)
  return candidate;

 // Chọn dịch chuyển ngắn nhất.
 if(
  candidate.distance<
  current.distance
 ){
  return candidate;
 }

 return current;
}

// ============================================================
// APPLY SNAP
// ============================================================

function applySnap(i,snap){

 if(!snap)
  return false;

 pieces[i].x+=snap.dx;
 pieces[i].y+=snap.dy;

 return true;
}

// ============================================================
// GLOBAL MAGNETIC SNAP
// ============================================================
//
// Thứ tự ưu tiên TOÀN CỤC:
//
// 1. Đỉnh ↔ đỉnh
// 2. Cạnh ↔ cạnh
// 3. Đỉnh ↔ cạnh
//
// Không còn chuyện cạnh của target thắng một snap đỉnh tốt hơn
// với mảnh bên cạnh.
// ============================================================

function magneticSnap(i){

 const moving=
  piecePoints(i);

 let best=null;

 // ==========================================================
 // PRIORITY 1
 // ĐỈNH ↔ ĐỈNH
 // ==========================================================

 // Target.
 best=
  bestCandidate(
   best,
   findVertexSnap(
    moving,
    targetOutline,
    SNAP_TARGET_VERTEX,
    'target'
   )
  );

 // Các mảnh khác.
 for(let j=0;j<pieces.length;j++){

  if(j===i)
   continue;

  best=
   bestCandidate(
    best,
    findVertexSnap(
     moving,
     piecePoints(j),
     SNAP_PIECE_VERTEX,
     'piece'
    )
   );
 }

 // Nếu có bất kỳ snap đỉnh nào,
 // dùng ngay và không xét loại thấp hơn.
 if(best)
  return applySnap(i,best);

 // ==========================================================
 // PRIORITY 2
 // CẠNH ↔ CẠNH
 // ==========================================================

 best=null;

 // Target.
 best=
  bestCandidate(
   best,
   findEdgeSnap(
    moving,
    targetOutline,
    SNAP_FULL_EDGE,
    'target'
   )
  );

 // Các mảnh khác.
 for(let j=0;j<pieces.length;j++){

  if(j===i)
   continue;

  best=
   bestCandidate(
    best,
    findEdgeSnap(
     moving,
     piecePoints(j),
     SNAP_FULL_EDGE,
     'piece'
    )
   );
 }

 if(best)
  return applySnap(i,best);

 // ==========================================================
 // PRIORITY 3
 // ĐỈNH ↔ CẠNH
 // ==========================================================

 best=null;

 // Target.
 best=
  bestCandidate(
   best,
   findVertexEdgeSnap(
    moving,
    targetOutline,
    SNAP_TARGET_EDGE,
    'target'
   )
  );

 // Các mảnh khác.
 for(let j=0;j<pieces.length;j++){

  if(j===i)
   continue;

  best=
   bestCandidate(
    best,
    findVertexEdgeSnap(
     moving,
     piecePoints(j),
     SNAP_PIECE_EDGE,
     'piece'
    )
   );
 }

 if(best)
  return applySnap(i,best);

 return false;
}

// ============================================================
// CHECK PIECE AGAINST TARGET
// ============================================================

function pieceMatchesTarget(
 pieceIndex,
 targetIndex
){

 const p=pieces[pieceIndex];
 const t=targets[targetIndex];

 const actual=shape(
  pieceIndex,
  p.x,
  p.y,
  p.a,
  p.flip,
  pieceScale
 );

 const expected=shape(
  targetIndex,
  t[0],
  t[1],
  t[2],
  t[3],
  pieceScale
 );

 return actual.every(
  ([x,y])=>
   expected.some(
    ([u,v])=>
     Math.hypot(
      x-u,
      y-v
     )<
     pieceScale*MATCH_TOLERANCE
   )
 );
}

// ============================================================
// FIND MATCHED TARGET
// ============================================================

function findMatchedTarget(
 pieceIndex,
 usedTargets
){

 for(
  const targetIndex
  of groups[pieceIndex]
 ){

  if(
   usedTargets.has(targetIndex)
  )
   continue;

  if(
   pieceMatchesTarget(
    pieceIndex,
    targetIndex
   )
  ){
   return targetIndex;
  }
 }

 return -1;
}

// ============================================================
// CHECK PUZZLE
// ============================================================

function checkPuzzle(){

 const usedTargets=
  new Set();

 let count=0;

 for(let i=0;i<pieces.length;i++){

  const target=
   findMatchedTarget(
    i,
    usedTargets
   );

  if(target>=0){

   usedTargets.add(target);

   count++;
  }
 }

 // ----------------------------------------------------------
 // COMPLETE
 // ----------------------------------------------------------

 if(count===7){

  status.textContent=
   'Hoàn thành! Tất cả 7 mảnh đã đúng vị trí.';

  if(!completed){

   completed=true;

   sound('win');

   result.show({
    won:true,
    description:
     `Bạn đã ghép được ${levels[level].name.toLowerCase()} từ 7 mảnh Tangram!`,
    hasNext:
     level<levels.length-1
   });
  }

  return;
 }

 // ----------------------------------------------------------
 // Người chơi kéo mảnh ra sau khi đã thắng.
 // ----------------------------------------------------------

 if(completed){

  completed=false;

  result.clear();
 }

 if(count>0){

  status.textContent=
   `Đã đúng vị trí ${count}/7 mảnh.`;

 }else{

  status.textContent=
   'Kéo các mảnh vào hình mục tiêu.';
 }
}

// ============================================================
// RENDER
// ============================================================

function render(){

 svg.replaceChildren(

  make('rect',{
   width:620,
   height:560,
   class:'tangram-bg'
  }),

  make('path',{
   d:'M20 415H600',
   class:'tangram-divider'
  })
 );

 // ----------------------------------------------------------
 // HÌNH VUÔNG GỐC
 // ----------------------------------------------------------

 source.forEach((poly,i)=>{

  svg.append(
   make('polygon',{
    points:
     pointsString(
      poly.map(
       ([x,y])=>[
        30+x*.38,
        115+y*.38
       ]
      )
     ),
    fill:colors[i],
    class:'tangram-origin-piece'
   })
  );
 });

 const caption=
  make('text',{
   x:68,
   y:218,
   'text-anchor':'middle',
   class:'tangram-origin-caption'
  });

 caption.textContent=
  'HÌNH VUÔNG GỐC';

 svg.append(caption);

 // ----------------------------------------------------------
 // SILHOUETTE
 // ----------------------------------------------------------

 svg.append(
  make('polygon',{
   points:
    pointsString(
     targetOutline
    ),
   class:'tangram-silhouette'
  })
 );

 // ----------------------------------------------------------
 // HINT
 // ----------------------------------------------------------

 if(hint){

  targets.forEach(
   (t,i)=>{

    svg.append(
     make('polygon',{
      points:
       pointsString(
        shape(
         i,
         t[0],
         t[1],
         t[2],
         t[3],
         pieceScale
        )
       ),
      class:'tangram-seam-guide'
     })
    );
   }
  );
 }

 // ----------------------------------------------------------
 // PIECES
 // ----------------------------------------------------------

 const drawPiece=i=>{

  const p=pieces[i];

  const polygon=
   make('polygon',{
    points:
     pointsString(
      shape(
       i,
       p.x,
       p.y,
       p.a,
       p.flip,
       pieceScale
      )
     ),
    fill:colors[i]
   });

  const g=
   make('g',{
    class:
     'tangram-piece'+
     (
      selected===i
       ?' selected'
       :''
     ),
    'data-piece':i,
    tabindex:0,
    role:'button',
    'aria-label':
     `Mảnh ghép ${i+1}`
   });

  g.append(polygon);

  svg.append(g);
 };

 pieces.forEach(
  (_,i)=>{

   if(i!==selected)
    drawPiece(i);
  }
 );

 if(selected>=0)
  drawPiece(selected);

 // ----------------------------------------------------------
 // CONTROLS
 // ----------------------------------------------------------

 for(const id of [
  'tangram-left',
  'tangram-right',
  'tangram-flip'
 ]){

  document.querySelector(
   '#'+id
  ).disabled=
   selected<0;
 }

 document.querySelector(
  '#tangram-prev'
 ).disabled=
  level===0;

 document.querySelector(
  '#tangram-next'
 ).disabled=
  level===levels.length-1;

 document.querySelector(
  '#tangram-level-label'
 ).textContent=
  `${level+1}/${levels.length} · ${levels[level].name}`;

 document.querySelector(
  '#tangram-hint'
 ).setAttribute(
  'aria-pressed',
  String(hint)
 );

 document.querySelector(
  '#tangram-hint'
 ).textContent=
  hint
   ?'Ẩn đường ghép'
   :'Hiện đường ghép';
}

// ============================================================
// RESET
// ============================================================

function reset(){

 result.clear();

 setupTargets();

 pieces=
  source.map(
   (_,i)=>({
    type:i,
    x:55+i*85,
    y:490,
    a:0,
    flip:0
   })
  );

 selected=-1;
 drag=null;
 completed=false;

 status.textContent=
  'Kéo mảnh vào hình bóng. Đỉnh, cạnh và góc sẽ tự hút khi đến gần.';

 render();
}

// ============================================================
// ROTATE
// ============================================================

function turn(delta){

 if(selected<0)
  return;

 const p=
  pieces[selected];

 p.a=
  (p.a+delta+360)%360;

 magneticSnap(
  selected
 );

 checkPuzzle();

 render();
}

// ============================================================
// FLIP
// ============================================================

function flip(){

 if(selected<0)
  return;

 pieces[selected].flip^=1;

 magneticSnap(
  selected
 );

 checkPuzzle();

 render();
}

// ============================================================
// POINTER DOWN
// ============================================================

svg.addEventListener(
 'pointerdown',
 event=>{

  const el=
   event.target.closest(
    '[data-piece]'
   );

  if(!el)
   return;

  const i=
   Number(
    el.dataset.piece
   );

  const pos=
   point(event);

  drag={
   i,
   dx:
    pos.x-pieces[i].x,
   dy:
    pos.y-pieces[i].y,
   start:pos,
   moved:false,
   wasSelected:
    selected===i
  };

  selected=i;

  svg.setPointerCapture(
   event.pointerId
  );

  render();
 }
);

// ============================================================
// POINTER MOVE
// ============================================================

svg.addEventListener(
 'pointermove',
 event=>{

  if(!drag)
   return;

  const pos=
   point(event);

  if(
   Math.hypot(
    pos.x-drag.start.x,
    pos.y-drag.start.y
   )>5
  ){
   drag.moved=true;
  }

  if(!drag.moved)
   return;

  const p=
   pieces[drag.i];

  // ----------------------------------------------------------
  // Vị trí tự do theo con trỏ.
  // ----------------------------------------------------------

  p.x=
   Math.max(
    30,
    Math.min(
     590,
     pos.x-drag.dx
    )
   );

  p.y=
   Math.max(
    65,
    Math.min(
     505,
     pos.y-drag.dy
    )
   );

  // ----------------------------------------------------------
  // SNAP TOÀN CỤC
  // ----------------------------------------------------------

  magneticSnap(
   drag.i
  );

  render();
 }
);

// ============================================================
// POINTER UP
// ============================================================

svg.addEventListener(
 'pointerup',
 event=>{

  if(!drag)
   return;

  const {
   i,
   moved,
   wasSelected
  }=drag;

  drag=null;

  if(
   svg.hasPointerCapture(
    event.pointerId
   )
  ){
   svg.releasePointerCapture(
    event.pointerId
   );
  }

  if(moved){

   // Snap chính xác lần cuối.
   magneticSnap(i);

   // Chỉ kiểm tra đáp án.
   // Không khóa mảnh.
   checkPuzzle();

   render();

  }else if(wasSelected){

   turn(45);

  }else{

   status.textContent=
    'Mảnh đã được chọn. Chạm lần nữa để xoay hoặc kéo.';

   render();
  }
 }
);

// ============================================================
// POINTER CANCEL
// ============================================================

svg.addEventListener(
 'pointercancel',
 ()=>{
  drag=null;
  render();
 }
);

// ============================================================
// KEYBOARD
// ============================================================

svg.addEventListener(
 'keydown',
 event=>{

  const el=
   event.target.closest(
    '[data-piece]'
   );

  if(!el)
   return;

  const i=
   Number(
    el.dataset.piece
   );

  selected=i;

  const offsets={
   ArrowLeft:[-8,0],
   ArrowRight:[8,0],
   ArrowUp:[0,-8],
   ArrowDown:[0,8]
  };

  if(offsets[event.key]){

   event.preventDefault();

   pieces[i].x+=
    offsets[event.key][0];

   pieces[i].y+=
    offsets[event.key][1];

   magneticSnap(i);

   checkPuzzle();

   render();

   svg.querySelector(
    `[data-piece="${i}"]`
   )?.focus();

  }else if(
   event.key.toLowerCase()==='r'
  ){

   event.preventDefault();

   turn(
    event.shiftKey
     ?-45
     :45
   );

  }else if(
   event.key.toLowerCase()==='f'
  ){

   event.preventDefault();

   flip();
  }
 }
);

// ============================================================
// BUTTONS
// ============================================================

document.querySelector(
 '#tangram-left'
).addEventListener(
 'click',
 ()=>turn(-45)
);

document.querySelector(
 '#tangram-right'
).addEventListener(
 'click',
 ()=>turn(45)
);

document.querySelector(
 '#tangram-flip'
).addEventListener(
 'click',
 flip
);

document.querySelector(
 '#tangram-reset'
).addEventListener(
 'click',
 reset
);

document.querySelector(
 '#tangram-hint'
).addEventListener(
 'click',
 ()=>{
  hint=!hint;
  render();
 }
);

// ============================================================
// LEVEL NAVIGATION
// ============================================================

for(const [id,delta] of [
 ['tangram-prev',-1],
 ['tangram-next',1]
]){

 document.querySelector(
  '#'+id
 ).addEventListener(
  'click',
  ()=>{

   level=
    Math.max(
     0,
     Math.min(
      levels.length-1,
      level+delta
     )
    );

   hint=false;

   reset();
  }
 );
}

// ============================================================
// START
// ============================================================

reset();