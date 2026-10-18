/* TexCraft worksheet generator — bundled. Generates LaTeX for worksheets and tests (Toán, Tiếng Việt, Tiếng Anh,
   Tiếng Trung, Tiếng Nhật, Bé làm quen). See README.md. Pictures: Twemoji (CC-BY 4.0); Chinese/Japanese strokes: AnimCJK (APL). */

/* ---- studio-worksheet-art.js ---- */
/* Worksheet illustrations: original flat-colour vector pictures drawn with TikZ.
   Every picture is a macro (\icApple, or \icOApple for the colour-me outline version) that is defined
   once in the preamble, so a page with 60 pictures stays small and compiles fast.
   Coordinates are in cm inside a 1 x 1 box centred on the origin. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});

  // P(colour): the fill colour, or white in the outline version (for children to colour in).
  const ICONS = {
    // ---------- fruit ----------
    apple: { vi: 'quả táo', en: 'apple', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('red!85!black')}] (0,-0.38) .. controls (-0.2,-0.45) and (-0.5,-0.25) .. (-0.42,0.05) .. controls (-0.35,0.3) and (-0.1,0.3) .. (0,0.2) .. controls (0.1,0.3) and (0.35,0.3) .. (0.42,0.05) .. controls (0.5,-0.25) and (0.2,-0.45) .. (0,-0.38) -- cycle;
\draw[brown!70!black,line width=1.1pt] (0,0.2) .. controls (0,0.3) and (0.02,0.38) .. (0.06,0.45);
\filldraw[fill=${P('green!65!black')}] (0.05,0.4) .. controls (0.15,0.52) and (0.32,0.5) .. (0.34,0.45) .. controls (0.28,0.32) and (0.12,0.32) .. (0.05,0.4) -- cycle;
\fill[white,opacity=0.55] (-0.26,0.04) ellipse (0.05 and 0.1);` },
    banana: { vi: 'quả chuối', en: 'banana', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('yellow!90!orange')}] (-0.42,0.12) .. controls (-0.38,-0.3) and (0.2,-0.5) .. (0.44,0.2) .. controls (0.46,0.3) and (0.38,0.32) .. (0.36,0.26) .. controls (0.14,-0.12) and (-0.2,-0.1) .. (-0.34,0.2) .. controls (-0.38,0.28) and (-0.44,0.24) .. (-0.42,0.12) -- cycle;
\fill[brown!70!black] (-0.43,0.17) circle (0.035) (0.43,0.27) circle (0.035);
\draw[white,opacity=0.6,line width=0.6pt] (-0.25,-0.05) .. controls (-0.1,-0.25) and (0.1,-0.28) .. (0.25,-0.12);` },
    orange: { vi: 'quả cam', en: 'orange', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('orange')}] (0,-0.03) circle (0.37);
\filldraw[fill=${P('green!60!black')}] (0,0.33) .. controls (0.08,0.5) and (0.25,0.5) .. (0.3,0.42) .. controls (0.2,0.32) and (0.1,0.3) .. (0,0.33) -- cycle;
\draw[brown!70!black,line width=1pt] (0,0.32)--(0,0.4);
\fill[white,opacity=0.5] (-0.17,0.1) ellipse (0.05 and 0.09);
\fill[${P('orange!60!red')},opacity=0.5] (-0.1,-0.2) circle (0.02) (0.05,-0.12) circle (0.02) (0.16,-0.24) circle (0.02) (0.14,0.03) circle (0.02);` },
    strawberry: { vi: 'quả dâu tây', en: 'strawberry', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('red!85!black')}] (0,-0.43) .. controls (-0.1,-0.4) and (-0.42,-0.1) .. (-0.38,0.12) .. controls (-0.3,0.3) and (0.3,0.3) .. (0.38,0.12) .. controls (0.42,-0.1) and (0.1,-0.4) .. (0,-0.43) -- cycle;
\filldraw[fill=${P('green!60!black')}] (0,0.2) -- (-0.22,0.36) -- (-0.1,0.25) -- (0,0.46) -- (0.1,0.25) -- (0.22,0.36) -- cycle;
\fill[yellow!85!orange] (-0.15,0.05) ellipse (0.025 and 0.04) (0.12,0.07) ellipse (0.025 and 0.04) (0,-0.05) ellipse (0.025 and 0.04) (-0.2,-0.12) ellipse (0.025 and 0.04) (0.2,-0.1) ellipse (0.025 and 0.04) (-0.07,-0.22) ellipse (0.025 and 0.04) (0.08,-0.24) ellipse (0.025 and 0.04);` },
    grape: { vi: 'chùm nho', en: 'grapes', cat: 'fruit', code: P => String.raw`
\draw[brown!70!black,line width=1.1pt] (0,0.25)--(0.02,0.42);
\filldraw[fill=${P('green!60!black')}] (0.03,0.4) .. controls (0.12,0.52) and (0.3,0.5) .. (0.34,0.44) .. controls (0.26,0.34) and (0.1,0.32) .. (0.03,0.4) -- cycle;
\foreach \x/\y in {-0.2/0.12,0/0.14,0.2/0.12,-0.1/-0.06,0.1/-0.06,0/-0.25}{\filldraw[fill=${P('violet!80!purple')}] (\x,\y) circle (0.12);\fill[white,opacity=0.5] (\x-0.04,\y+0.04) circle (0.025);}` },
    watermelon: { vi: 'miếng dưa hấu', en: 'watermelon', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('green!55!black')}] (-0.46,0.2) arc (180:360:0.46) -- cycle;
\fill[${P('green!25!white')}] (-0.4,0.2) arc (180:360:0.4) -- cycle;
\fill[${P('red!80!pink')}] (-0.35,0.2) arc (180:360:0.35) -- cycle;
\fill[black!80] (-0.15,0.02) ellipse (0.025 and 0.045) (0.05,-0.04) ellipse (0.025 and 0.045) (0.2,0.05) ellipse (0.025 and 0.045) (-0.05,-0.2) ellipse (0.025 and 0.045) (0.14,-0.18) ellipse (0.025 and 0.045) (-0.22,-0.14) ellipse (0.025 and 0.045);` },
    pear: { vi: 'quả lê', en: 'pear', cat: 'fruit', code: P => String.raw`
\filldraw[fill=${P('yellow!70!green')}] (0,0.36) .. controls (0.12,0.36) and (0.15,0.15) .. (0.22,0.0) .. controls (0.45,-0.25) and (0.3,-0.45) .. (0,-0.45) .. controls (-0.3,-0.45) and (-0.45,-0.25) .. (-0.22,0.0) .. controls (-0.15,0.15) and (-0.12,0.36) .. (0,0.36) -- cycle;
\draw[brown!70!black,line width=1.1pt] (0,0.36)--(0.03,0.48);
\filldraw[fill=${P('green!60!black')}] (0.04,0.44) .. controls (0.14,0.52) and (0.3,0.5) .. (0.34,0.44) .. controls (0.26,0.36) and (0.1,0.36) .. (0.04,0.44) -- cycle;
\fill[white,opacity=0.5] (-0.2,-0.18) ellipse (0.05 and 0.1);` },
    cherry: { vi: 'quả anh đào', en: 'cherry', cat: 'fruit', code: P => String.raw`
\draw[green!40!black,line width=1pt] (-0.15,-0.1) .. controls (-0.1,0.2) and (0.05,0.35) .. (0.14,0.44) (0.18,-0.14) .. controls (0.2,0.2) and (0.18,0.35) .. (0.14,0.44);
\filldraw[fill=${P('green!60!black')}] (0.14,0.44) .. controls (0.25,0.52) and (0.4,0.45) .. (0.42,0.4) .. controls (0.34,0.32) and (0.2,0.34) .. (0.14,0.44) -- cycle;
\filldraw[fill=${P('red!85!black')}] (-0.15,-0.26) circle (0.17) (0.18,-0.31) circle (0.17);
\fill[white,opacity=0.55] (-0.21,-0.2) circle (0.035) (0.12,-0.25) circle (0.035);` },

    // ---------- animals ----------
    cat: { vi: 'con mèo', en: 'cat', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('orange!85!yellow')}] (-0.38,0.02) -- (-0.34,0.45) -- (-0.08,0.28) -- cycle;
\filldraw[fill=${P('orange!85!yellow')}] (0.38,0.02) -- (0.34,0.45) -- (0.08,0.28) -- cycle;
\fill[pink!75] (-0.32,0.1) -- (-0.31,0.34) -- (-0.15,0.25) -- cycle (0.32,0.1) -- (0.31,0.34) -- (0.15,0.25) -- cycle;
\filldraw[fill=${P('orange!85!yellow')}] (0,-0.08) ellipse (0.42 and 0.36);
\draw[orange!60!brown,line width=1pt] (0,0.26)--(0,0.15) (-0.09,0.25)--(-0.07,0.14) (0.09,0.25)--(0.07,0.14);
\filldraw[fill=white] (-0.15,0.0) circle (0.075) (0.15,0.0) circle (0.075);
\fill[black] (-0.15,0.0) circle (0.04) (0.15,0.0) circle (0.04);
\fill[pink!80!red] (0,-0.1) -- (-0.045,-0.05) -- (0.045,-0.05) -- cycle;
\draw[black!70,line width=0.4pt] (0,-0.1)--(0,-0.14) (0,-0.14) .. controls (-0.04,-0.19) and (-0.09,-0.18) .. (-0.11,-0.15) (0,-0.14) .. controls (0.04,-0.19) and (0.09,-0.18) .. (0.11,-0.15);
\draw[black!50,line width=0.3pt] (-0.2,-0.12)--(-0.46,-0.07) (-0.2,-0.16)--(-0.46,-0.19) (0.2,-0.12)--(0.46,-0.07) (0.2,-0.16)--(0.46,-0.19);` },
    dog: { vi: 'con chó', en: 'dog', cat: 'animal', code: P => String.raw`
\filldraw[rotate around={20:(-0.39,0.06)},fill=${P('brown!80!black')}] (-0.39,0.06) ellipse (0.11 and 0.24);
\filldraw[rotate around={-20:(0.39,0.06)},fill=${P('brown!80!black')}] (0.39,0.06) ellipse (0.11 and 0.24);
\filldraw[fill=${P('yellow!60!orange!70!brown')}] (0,0) ellipse (0.37 and 0.38);
\filldraw[fill=${P('yellow!25!white')}] (0,-0.17) ellipse (0.2 and 0.15);
\fill[pink!85!red] (0,-0.3) .. controls (-0.07,-0.3) and (-0.07,-0.4) .. (0,-0.4) .. controls (0.07,-0.4) and (0.07,-0.3) .. (0,-0.3);
\filldraw[fill=white] (-0.14,0.08) circle (0.065) (0.14,0.08) circle (0.065);
\fill[black] (-0.14,0.08) circle (0.035) (0.14,0.08) circle (0.035);
\fill[black!85] (0,-0.09) ellipse (0.07 and 0.05);
\draw[black!70,line width=0.4pt] (0,-0.13)--(0,-0.22) (0,-0.22) .. controls (-0.08,-0.28) and (-0.14,-0.24) .. (-0.15,-0.2) (0,-0.22) .. controls (0.08,-0.28) and (0.14,-0.24) .. (0.15,-0.2);` },
    rabbit: { vi: 'con thỏ', en: 'rabbit', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('white')}] (-0.14,0.34) ellipse (0.09 and 0.27) (0.14,0.34) ellipse (0.09 and 0.27);
\fill[pink!70] (-0.14,0.33) ellipse (0.045 and 0.19) (0.14,0.33) ellipse (0.045 and 0.19);
\filldraw[fill=${P('white')}] (0,-0.12) ellipse (0.36 and 0.31);
\filldraw[fill=white] (-0.14,-0.07) circle (0.06) (0.14,-0.07) circle (0.06);
\fill[black] (-0.14,-0.07) circle (0.033) (0.14,-0.07) circle (0.033);
\fill[pink!80!red] (0,-0.16) -- (-0.04,-0.12) -- (0.04,-0.12) -- cycle;
\draw[black!60,line width=0.4pt] (0,-0.16)--(0,-0.2) (0,-0.2) .. controls (-0.04,-0.24) and (-0.08,-0.23) .. (-0.1,-0.2) (0,-0.2) .. controls (0.04,-0.24) and (0.08,-0.23) .. (0.1,-0.2);
\filldraw[fill=white] (-0.035,-0.2) rectangle (0.035,-0.27);
\draw[black!40,line width=0.3pt] (-0.2,-0.18)--(-0.42,-0.15) (-0.2,-0.22)--(-0.42,-0.26) (0.2,-0.18)--(0.42,-0.15) (0.2,-0.22)--(0.42,-0.26);` },
    fish: { vi: 'con cá', en: 'fish', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('orange!85!red')}] (0.2,0) -- (0.46,0.22) -- (0.46,-0.22) -- cycle;
\filldraw[fill=${P('orange')}] (-0.08,0) ellipse (0.34 and 0.24);
\filldraw[fill=${P('orange!85!red')}] (-0.12,0.2) -- (0,0.36) -- (0.08,0.2) -- cycle;
\draw[orange!40!red,line width=0.8pt] (0.05,0.2) .. controls (0.12,0.05) and (0.12,-0.05) .. (0.05,-0.2) (0.15,0.15) .. controls (0.2,0.05) and (0.2,-0.05) .. (0.15,-0.15);
\filldraw[fill=white] (-0.24,0.05) circle (0.06);
\fill[black] (-0.25,0.05) circle (0.03);
\draw[black!60,line width=0.5pt] (-0.38,-0.05) .. controls (-0.34,-0.09) and (-0.3,-0.08) .. (-0.28,-0.05);
\draw[blue!50,line width=0.5pt] (-0.42,0.3) circle (0.04) (-0.34,0.4) circle (0.025);` },
    bird: { vi: 'con chim', en: 'bird', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('blue!60!cyan')}] (0.22,-0.02) -- (0.46,0.08) -- (0.42,-0.1) -- cycle;
\filldraw[fill=${P('blue!60!cyan')}] (0,-0.05) ellipse (0.3 and 0.23);
\filldraw[fill=${P('blue!60!cyan')}] (-0.2,0.14) circle (0.16);
\filldraw[fill=${P('yellow!85!orange')}] (-0.34,0.15) -- (-0.5,0.1) -- (-0.34,0.06) -- cycle;
\filldraw[fill=${P('blue!80!black')}] (0.02,-0.03) .. controls (0.18,0.08) and (0.22,-0.1) .. (0.1,-0.17) .. controls (0.0,-0.2) and (-0.08,-0.12) .. (0.02,-0.03) -- cycle;
\filldraw[fill=white] (-0.23,0.18) circle (0.045);
\fill[black] (-0.24,0.18) circle (0.022);
\draw[orange!80!brown,line width=1pt] (-0.05,-0.27)--(-0.05,-0.42) (0.06,-0.27)--(0.06,-0.42) (-0.05,-0.42)--(-0.12,-0.42) (0.06,-0.42)--(-0.01,-0.42);` },
    duck: { vi: 'con vịt', en: 'duck', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('yellow!90!orange')}] (0.14,-0.08) ellipse (0.3 and 0.22);
\filldraw[fill=${P('yellow!90!orange')}] (0.4,0.0) -- (0.5,0.08) -- (0.38,0.1) -- cycle;
\filldraw[fill=${P('yellow!90!orange')}] (-0.14,0.17) circle (0.18);
\filldraw[fill=${P('orange')}] (-0.3,0.13) .. controls (-0.48,0.2) and (-0.5,0.08) .. (-0.3,0.08) -- cycle;
\filldraw[fill=${P('yellow!70!orange')}] (0.1,-0.06) .. controls (0.26,0.02) and (0.3,-0.16) .. (0.16,-0.2) .. controls (0.08,-0.2) and (0.02,-0.12) .. (0.1,-0.06) -- cycle;
\filldraw[fill=white] (-0.17,0.22) circle (0.045);
\fill[black] (-0.18,0.22) circle (0.022);
\draw[orange!80!brown,line width=1pt] (0,-0.3)--(0,-0.42) (0.18,-0.3)--(0.18,-0.42) (0,-0.42)--(-0.07,-0.42) (0.18,-0.42)--(0.11,-0.42);` },
    pig: { vi: 'con heo', en: 'pig', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('pink!85!red')}] (-0.36,0.1) -- (-0.3,0.42) -- (-0.08,0.3) -- cycle;
\filldraw[fill=${P('pink!85!red')}] (0.36,0.1) -- (0.3,0.42) -- (0.08,0.3) -- cycle;
\filldraw[fill=${P('pink!85!red')}] (0,0) circle (0.38);
\filldraw[fill=${P('pink!60!red')}] (0,-0.09) ellipse (0.19 and 0.14);
\fill[red!50!black,opacity=0.8] (-0.06,-0.09) ellipse (0.03 and 0.05) (0.06,-0.09) ellipse (0.03 and 0.05);
\filldraw[fill=white] (-0.18,0.1) circle (0.06) (0.18,0.1) circle (0.06);
\fill[black] (-0.18,0.1) circle (0.032) (0.18,0.1) circle (0.032);` },
    frog: { vi: 'con ếch', en: 'frog', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('green!70!lime')}] (0,-0.1) ellipse (0.43 and 0.3);
\filldraw[fill=${P('green!70!lime')}] (-0.2,0.2) circle (0.15) (0.2,0.2) circle (0.15);
\filldraw[fill=white] (-0.2,0.21) circle (0.09) (0.2,0.21) circle (0.09);
\fill[black] (-0.2,0.21) circle (0.045) (0.2,0.21) circle (0.045);
\draw[green!30!black,line width=0.6pt] (-0.25,-0.1) .. controls (-0.1,-0.25) and (0.1,-0.25) .. (0.25,-0.1);
\fill[pink!70,opacity=0.8] (-0.3,-0.12) circle (0.05) (0.3,-0.12) circle (0.05);
\fill[green!30!black] (-0.03,0.0) circle (0.012) (0.03,0.0) circle (0.012);` },
    bear: { vi: 'con gấu', en: 'bear', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('brown!70!orange')}] (-0.27,0.3) circle (0.14) (0.27,0.3) circle (0.14);
\fill[brown!30!yellow] (-0.27,0.3) circle (0.07) (0.27,0.3) circle (0.07);
\filldraw[fill=${P('brown!70!orange')}] (0,0) circle (0.38);
\filldraw[fill=${P('yellow!45!orange!40!white')}] (0,-0.1) ellipse (0.2 and 0.15);
\fill[black!85] (0,-0.04) ellipse (0.055 and 0.04);
\draw[black!70,line width=0.4pt] (0,-0.08)--(0,-0.13) (0,-0.13) .. controls (-0.05,-0.19) and (-0.1,-0.17) .. (-0.11,-0.14) (0,-0.13) .. controls (0.05,-0.19) and (0.1,-0.17) .. (0.11,-0.14);
\filldraw[fill=white] (-0.15,0.1) circle (0.055) (0.15,0.1) circle (0.055);
\fill[black] (-0.15,0.1) circle (0.03) (0.15,0.1) circle (0.03);` },
    butterfly: { vi: 'con bướm', en: 'butterfly', cat: 'animal', code: P => String.raw`
\filldraw[rotate around={35:(-0.22,0.17)},fill=${P('violet!70!pink')}] (-0.22,0.17) ellipse (0.24 and 0.16);
\filldraw[rotate around={-35:(0.22,0.17)},fill=${P('violet!70!pink')}] (0.22,0.17) ellipse (0.24 and 0.16);
\filldraw[rotate around={-30:(-0.17,-0.15)},fill=${P('pink!80!red')}] (-0.17,-0.15) ellipse (0.19 and 0.12);
\filldraw[rotate around={30:(0.17,-0.15)},fill=${P('pink!80!red')}] (0.17,-0.15) ellipse (0.19 and 0.12);
\fill[white,opacity=0.75] (-0.27,0.22) circle (0.05) (0.27,0.22) circle (0.05) (-0.2,-0.17) circle (0.035) (0.2,-0.17) circle (0.035);
\filldraw[fill=black!80] (0,0) ellipse (0.045 and 0.28);
\draw[black!80,line width=0.5pt] (0,0.26) .. controls (-0.05,0.4) and (-0.1,0.42) .. (-0.13,0.44) (0,0.26) .. controls (0.05,0.4) and (0.1,0.42) .. (0.13,0.44);` },
    chick: { vi: 'con gà', en: 'chicken', cat: 'animal', code: P => String.raw`
\draw[orange!80!brown,line width=1pt] (-0.1,-0.34)--(-0.1,-0.46) (0.1,-0.34)--(0.1,-0.46) (-0.1,-0.46)--(-0.17,-0.46) (0.1,-0.46)--(0.03,-0.46);
\filldraw[fill=${P('yellow!90!orange')}] (0,-0.03) circle (0.36);
\filldraw[fill=${P('yellow!90!orange')}] (0,0.36) circle (0.06) (-0.07,0.34) circle (0.05) (0.07,0.34) circle (0.05);
\filldraw[fill=white] (-0.14,0.05) circle (0.065) (0.14,0.05) circle (0.065);
\fill[black] (-0.14,0.05) circle (0.034) (0.14,0.05) circle (0.034);
\filldraw[fill=${P('orange')}] (-0.07,-0.07) -- (0.07,-0.07) -- (0,-0.18) -- cycle;
\fill[red!60,opacity=0.5] (-0.26,-0.08) circle (0.05) (0.26,-0.08) circle (0.05);
\filldraw[fill=${P('yellow!80!orange')}] (-0.36,-0.05) .. controls (-0.5,-0.1) and (-0.5,-0.25) .. (-0.3,-0.22) -- cycle;
\filldraw[fill=${P('yellow!80!orange')}] (0.36,-0.05) .. controls (0.5,-0.1) and (0.5,-0.25) .. (0.3,-0.22) -- cycle;` },
    cow: { vi: 'con bò', en: 'cow', cat: 'animal', code: P => String.raw`
\filldraw[fill=${P('white')}] (-0.44,0.12) ellipse (0.12 and 0.07) (0.44,0.12) ellipse (0.12 and 0.07);
\filldraw[fill=${P('yellow!30!white')}] (-0.2,0.32) -- (-0.26,0.46) -- (-0.1,0.36) -- cycle (0.2,0.32) -- (0.26,0.46) -- (0.1,0.36) -- cycle;
\filldraw[fill=${P('white')}] (0,0.0) ellipse (0.33 and 0.38);
\fill[black!85] (-0.18,0.2) ellipse (0.13 and 0.1);
\fill[black!85] (0.28,-0.02) circle (0.07);
\filldraw[fill=${P('pink!80!red')}] (0,-0.22) ellipse (0.22 and 0.15);
\fill[red!50!black,opacity=0.8] (-0.07,-0.22) ellipse (0.03 and 0.045) (0.07,-0.22) ellipse (0.03 and 0.045);
\filldraw[fill=white] (-0.15,0.06) circle (0.06) (0.15,0.06) circle (0.06);
\fill[black] (-0.15,0.06) circle (0.032) (0.15,0.06) circle (0.032);` },

    // ---------- things ----------
    book: { vi: 'quyển sách', en: 'book', cat: 'thing', code: P => String.raw`
\filldraw[fill=${P('blue!75!cyan')}] (-0.3,-0.42) rectangle (0.3,0.42);
\fill[white] (-0.24,-0.42) rectangle (0.3,-0.36);
\draw[white,line width=0.8pt] (-0.2,0.32)--(-0.2,-0.3);
\filldraw[fill=${P('yellow!85!orange')}] (-0.1,0.12) rectangle (0.2,0.32);
\draw[white,line width=0.8pt] (-0.04,0.0)--(0.2,0.0) (-0.04,-0.1)--(0.14,-0.1);` },
    pencil: { vi: 'cây bút chì', en: 'pencil', cat: 'thing', code: P => String.raw`
\begin{scope}[rotate=45]
\filldraw[fill=${P('pink!80!red')}] (-0.48,-0.08) rectangle (-0.38,0.08);
\filldraw[fill=${P('gray!40')}] (-0.38,-0.08) rectangle (-0.3,0.08);
\filldraw[fill=${P('yellow!90!orange')}] (-0.3,-0.08) rectangle (0.24,0.08);
\draw[orange!70!black,line width=0.4pt] (-0.3,0)--(0.24,0);
\filldraw[fill=${P('orange!30!yellow')}] (0.24,-0.08) -- (0.48,0) -- (0.24,0.08) -- cycle;
\fill[black!80] (0.4,-0.025) -- (0.48,0) -- (0.4,0.025) -- cycle;
\end{scope}` },
    ball: { vi: 'quả bóng', en: 'ball', cat: 'thing', code: P => String.raw`
\filldraw[fill=white] (0,0) circle (0.4);
\fill[${P('red!85!black')}] (0,0) -- (20:0.4) arc (20:80:0.4) -- cycle;
\fill[${P('blue!75!cyan')}] (0,0) -- (140:0.4) arc (140:200:0.4) -- cycle;
\fill[${P('yellow!90!orange')}] (0,0) -- (260:0.4) arc (260:320:0.4) -- cycle;
\draw[line width=0.4pt] (0,0)--(20:0.4) (0,0)--(80:0.4) (0,0)--(140:0.4) (0,0)--(200:0.4) (0,0)--(260:0.4) (0,0)--(320:0.4);
\draw (0,0) circle (0.4);` },
    star: { vi: 'ngôi sao', en: 'star', cat: 'thing', code: P => String.raw`
\filldraw[fill=${P('yellow!90!orange')}] (90:0.46) -- (126:0.19) -- (162:0.44) -- (198:0.19) -- (234:0.44) -- (270:0.19) -- (306:0.44) -- (342:0.19) -- (18:0.44) -- (54:0.19) -- cycle;
\fill[white,opacity=0.5] (90:0.3) circle (0.03);` },
    flower: { vi: 'bông hoa', en: 'flower', cat: 'nature', code: P => String.raw`
\draw[green!50!black,line width=1.4pt] (0,-0.05)--(0,-0.46);
\filldraw[fill=${P('green!60!black')}] (0,-0.28) .. controls (0.12,-0.1) and (0.3,-0.12) .. (0.34,-0.18) .. controls (0.28,-0.32) and (0.1,-0.34) .. (0,-0.28) -- cycle;
\foreach \a in {90,162,234,306,18}{\filldraw[fill=${P('pink!80!red')}] (\a:0.19) circle (0.13);}
\filldraw[fill=${P('yellow!90!orange')}] (0,0) circle (0.1);` },
    tree: { vi: 'cái cây', en: 'tree', cat: 'nature', code: P => String.raw`
\filldraw[fill=${P('brown!70!orange')}] (-0.07,-0.46) rectangle (0.07,-0.05);
\filldraw[fill=${P('green!65!black')}] (0,0.18) circle (0.22) (-0.2,-0.02) circle (0.2) (0.2,-0.02) circle (0.2);
\fill[${P('green!65!black')}] (-0.2,-0.02) circle (0.19) (0.2,-0.02) circle (0.19) (0,0.18) circle (0.21) (0,0.0) circle (0.2);
\fill[${P('red!80')}] (-0.14,0.05) circle (0.035) (0.17,0.1) circle (0.035) (0.12,-0.1) circle (0.035);` },
    sun: { vi: 'mặt trời', en: 'sun', cat: 'nature', code: P => String.raw`
\foreach \a in {0,45,...,315}{\draw[orange!90!yellow,line width=1.4pt] (\a:0.3)--(\a:0.46);}
\filldraw[fill=${P('yellow!90!orange')}] (0,0) circle (0.24);
\filldraw[fill=white] (-0.09,0.04) circle (0.04) (0.09,0.04) circle (0.04);
\fill[black] (-0.09,0.04) circle (0.02) (0.09,0.04) circle (0.02);
\draw[orange!60!brown,line width=0.5pt] (-0.09,-0.06) .. controls (-0.04,-0.12) and (0.04,-0.12) .. (0.09,-0.06);` },
    house: { vi: 'ngôi nhà', en: 'house', cat: 'thing', code: P => String.raw`
\filldraw[fill=${P('red!70!black')}] (0.17,0.2) rectangle (0.3,0.42);
\filldraw[fill=${P('yellow!60!orange!40!white')}] (-0.36,-0.42) rectangle (0.36,0.05);
\filldraw[fill=${P('red!75!black')}] (-0.46,0.03) -- (0,0.43) -- (0.46,0.03) -- cycle;
\filldraw[fill=${P('brown!70!orange')}] (-0.08,-0.42) rectangle (0.1,-0.1);
\fill[yellow!80!orange] (0.06,-0.26) circle (0.012);
\filldraw[fill=${P('cyan!35')}] (-0.3,-0.2) rectangle (-0.16,-0.06) (0.18,-0.2) rectangle (0.32,-0.06);
\draw[line width=0.3pt] (-0.23,-0.2)--(-0.23,-0.06) (-0.3,-0.13)--(-0.16,-0.13);` },
    car: { vi: 'xe ô tô', en: 'car', cat: 'transport', code: P => String.raw`
\filldraw[fill=${P('red!85!black')}] (-0.46,-0.12) -- (-0.46,-0.02) -- (-0.3,0.0) -- (-0.2,0.2) -- (0.2,0.2) -- (0.32,0.0) -- (0.46,-0.02) -- (0.46,-0.12) -- cycle;
\filldraw[fill=${P('cyan!35')}] (-0.17,0.01) -- (-0.1,0.16) -- (-0.01,0.16) -- (-0.01,0.01) -- cycle (0.02,0.01) -- (0.02,0.16) -- (0.18,0.16) -- (0.26,0.01) -- cycle;
\filldraw[fill=black!80] (-0.27,-0.14) circle (0.1) (0.27,-0.14) circle (0.1);
\fill[gray!50] (-0.27,-0.14) circle (0.04) (0.27,-0.14) circle (0.04);
\fill[yellow!90!orange] (0.44,-0.04) rectangle (0.47,0.0);` },
    balloon: { vi: 'quả bóng bay', en: 'balloon', cat: 'thing', code: P => String.raw`
\draw[black!50,line width=0.5pt] (0,-0.1) .. controls (-0.08,-0.2) and (0.08,-0.3) .. (0,-0.46);
\filldraw[fill=${P('red!85!pink')}] (0,-0.02) .. controls (-0.5,0.0) and (-0.42,0.5) .. (0,0.5) .. controls (0.42,0.5) and (0.5,0.0) .. (0,-0.02) -- cycle;
\filldraw[fill=${P('red!85!pink')}] (0,-0.02) -- (-0.05,-0.1) -- (0.05,-0.1) -- cycle;
\fill[white,opacity=0.6] (-0.2,0.32) ellipse (0.05 and 0.09);` },
    umbrella: { vi: 'cái ô', en: 'umbrella', cat: 'thing', code: P => String.raw`
\draw[brown!70!black,line width=1.3pt] (0,0.1) -- (0,-0.34) arc (180:360:0.08);
\filldraw[fill=${P('red!85!pink')}] (-0.46,0.1) arc (180:0:0.46) .. controls (0.3,0.03) and (0.15,0.1) .. (0.15,0.1) .. controls (0.1,0.03) and (0.02,0.03) .. (0,0.1) .. controls (-0.02,0.03) and (-0.1,0.03) .. (-0.15,0.1) .. controls (-0.15,0.1) and (-0.3,0.03) .. (-0.46,0.1) -- cycle;
\fill[${P('yellow!90!orange')}] (0,0.1) -- (0.15,0.1) .. controls (0.1,0.3) and (0.06,0.45) .. (0,0.46) .. controls (-0.06,0.45) and (-0.1,0.3) .. (-0.15,0.1) -- cycle;
\draw[black!55,line width=0.5pt] (-0.46,0.1) arc (180:0:0.46);` },
    heart: { vi: 'trái tim', en: 'heart', cat: 'thing', code: P => String.raw`
\filldraw[fill=${P('red!80!pink')}] (0,-0.38) .. controls (-0.55,-0.02) and (-0.4,0.4) .. (-0.17,0.36) .. controls (-0.05,0.34) and (0,0.24) .. (0,0.2) .. controls (0,0.24) and (0.05,0.34) .. (0.17,0.36) .. controls (0.4,0.4) and (0.55,-0.02) .. (0,-0.38) -- cycle;
\fill[white,opacity=0.55] (-0.24,0.18) ellipse (0.05 and 0.08);` },
    bag: { vi: 'cái cặp', en: 'bag', cat: 'thing', code: P => String.raw`
\draw[black!65,line width=1.6pt] (-0.12,0.28) .. controls (-0.12,0.5) and (0.12,0.5) .. (0.12,0.28);
\filldraw[fill=${P('blue!70!violet')},rounded corners=3pt] (-0.34,-0.42) rectangle (0.34,0.32);
\filldraw[fill=${P('yellow!85!orange')},rounded corners=2pt] (-0.22,-0.34) rectangle (0.22,-0.08);
\draw[black!55,line width=0.4pt] (-0.34,0.08)--(0.34,0.08);
\fill[white] (0,-0.21) circle (0.035);` },
    cloud: { vi: 'đám mây', en: 'cloud', cat: 'nature', code: P => String.raw`
\foreach \x/\y/\r in {-0.22/-0.08/0.16,-0.04/0.06/0.22,0.2/-0.02/0.17,0.0/-0.14/0.16}{\filldraw[fill=${P('cyan!15')}] (\x,\y) circle (\r);}
\fill[${P('cyan!15')}] (-0.2,-0.07) circle (0.15) (-0.04,0.06) circle (0.21) (0.2,-0.02) circle (0.16) (0,-0.14) circle (0.15) (-0.12,-0.1) rectangle (0.12,-0.0);` },
    rainbow: { vi: 'cầu vồng', en: 'rainbow', cat: 'nature', code: P => String.raw`
\foreach \ro/\ri/\c in {0.5/0.43/red!80!orange,0.43/0.36/orange,0.36/0.29/yellow!90!orange,0.29/0.22/green!65!black,0.22/0.15/blue!70!cyan}{\filldraw[fill=${P('\\c')}] (\ro,-0.15) arc (0:180:\ro) -- (-\ri,-0.15) arc (180:0:\ri) -- cycle;}
\fill[white] (-0.55,-0.15) .. controls (-0.55,-0.35) and (-0.3,-0.4) .. (-0.18,-0.24) .. controls (-0.2,-0.14) and (-0.4,-0.1) .. (-0.55,-0.15);
\foreach \x in {-0.4,0.4}{\filldraw[fill=white] (\x,-0.2) circle (0.1);}` },
    bus: { vi: 'xe buýt', en: 'bus', cat: 'transport', code: P => String.raw`
\filldraw[fill=${P('yellow!90!orange')},rounded corners=3pt] (-0.47,-0.22) rectangle (0.47,0.26);
\foreach \x in {-0.36,-0.16,0.04,0.24}{\filldraw[fill=${P('cyan!35')}] (\x,0.04) rectangle (\x+0.15,0.2);}
\filldraw[fill=${P('cyan!35')}] (0.38,-0.12) rectangle (0.44,0.2);
\draw[red!70!black,line width=1pt] (-0.47,-0.06)--(0.47,-0.06);
\filldraw[fill=black!80] (-0.3,-0.22) circle (0.1) (0.28,-0.22) circle (0.1);
\fill[gray!50] (-0.3,-0.22) circle (0.04) (0.28,-0.22) circle (0.04);` },

    // ---------- shapes ----------
    shapecircle: { vi: 'hình tròn', en: 'circle', cat: 'shape', code: P => String.raw`
\filldraw[fill=${P('blue!70!cyan')},line width=0.8pt] (0,0) circle (0.34);` },
    shapesquare: { vi: 'hình vuông', en: 'square', cat: 'shape', code: P => String.raw`
\filldraw[fill=${P('red!80!orange')},line width=0.8pt] (-0.3,-0.3) rectangle (0.3,0.3);` },
    shapetriangle: { vi: 'hình tam giác', en: 'triangle', cat: 'shape', code: P => String.raw`
\filldraw[fill=${P('green!65!black')},line width=0.8pt] (0,0.38) -- (-0.42,-0.3) -- (0.42,-0.3) -- cycle;` },
    shaperectangle: { vi: 'hình chữ nhật', en: 'rectangle', cat: 'shape', code: P => String.raw`
\filldraw[fill=${P('yellow!90!orange')},line width=0.8pt] (-0.44,-0.24) rectangle (0.44,0.24);` }
  };

  const NAMES = Object.keys(ICONS);
  const macroName = (name, outline) => '\\ic' + (outline ? 'O' : '') + name.charAt(0).toUpperCase() + name.slice(1);
  const palette = outline => color => outline ? 'white' : color;

  // \icApple[scale]; the picture is baseline-centred so it sits in a line of text.
  function definition(name, outline = false) {
    const icon = ICONS[name];
    if (!icon) throw Error('Không có hình ' + name);
    let body = icon.code(palette(outline)).replace(/^\n/, '');
    // Colour-me version: every coloured stroke becomes black and the outline grows with the picture size.
    if (outline) body = body.replace(/\\draw\[([a-z]+(?:![a-z0-9]+)*),line width/g, '\\draw[black!70,line width');
    const style = outline ? 'ico,line width={0.6pt+0.55pt*#1}' : 'ico';
    return `\\newcommand{${macroName(name, outline)}}[1][1]{\\begin{tikzpicture}[${style},scale=#1,baseline=(current bounding box.center)]\n${body}\n\\end{tikzpicture}\\hskip0pt\\relax}`;
  }
  const preambleStyle = '\\tikzset{ico/.style={line width=0.5pt,draw=black!55,line join=round,line cap=round}}';

  W.art = { ICONS, NAMES, macroName, definition, preambleStyle,
    info: name => ICONS[name], byCategory: cat => NAMES.filter(name => ICONS[name].cat === cat) };
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-library.js ---- */
/* Picture library for worksheets: ~230 colourful flat pictures from Twemoji
   (https://github.com/jdecked/twemoji, graphics CC-BY 4.0 — credit is printed on every worksheet).
   Each entry: id, Unicode code point (= SVG file name), category, Vietnamese name, English name, flags.
   Flags: u = uncountable (bread), p = plural only (socks); "|plural" gives an irregular English plural. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});

  // id|codepoint|category|tiếng Việt|English|flags
  const TABLE = `
apple|1f34e|fruit|quả táo|apple
banana|1f34c|fruit|quả chuối|banana
orange|1f34a|fruit|quả cam|orange
strawberry|1f353|fruit|quả dâu tây|strawberry|strawberries
grape|1f347|fruit|chùm nho|grapes|p
watermelon|1f349|fruit|miếng dưa hấu|watermelon
pear|1f350|fruit|quả lê|pear
cherry|1f352|fruit|quả anh đào|cherry|cherries
pineapple|1f34d|fruit|quả dứa|pineapple
mango|1f96d|fruit|quả xoài|mango|mangoes
kiwi|1f95d|fruit|quả kiwi|kiwi
lemon|1f34b|fruit|quả chanh|lemon
peach|1f351|fruit|quả đào|peach|peaches
coconut|1f965|fruit|quả dừa|coconut
tomato|1f345|veg|quả cà chua|tomato|tomatoes
carrot|1f955|veg|củ cà rốt|carrot
corn|1f33d|veg|bắp ngô|corn|u
broccoli|1f966|veg|bông cải xanh|broccoli|u
eggplant|1f346|veg|quả cà tím|eggplant
potato|1f954|veg|củ khoai tây|potato|potatoes
mushroom|1f344|veg|cây nấm|mushroom
cucumber|1f952|veg|quả dưa chuột|cucumber
bread|1f35e|food|ổ bánh mì|bread|u
egg|1f95a|food|quả trứng|egg
rice|1f35a|food|bát cơm|rice|u
noodles|1f35c|food|tô mì|noodles|p
cake|1f370|food|miếng bánh|cake
icecream|1f366|food|cây kem|ice cream
cookie|1f36a|food|chiếc bánh quy|cookie
chocolate|1f36b|food|thanh sô-cô-la|chocolate|u
candy|1f36c|food|viên kẹo|candy|candies
milk|1f95b|food|cốc sữa|milk|u
hamburger|1f354|food|bánh ham-bơ-gơ|hamburger
pizza|1f355|food|miếng bánh pi-da|pizza
fries|1f35f|food|khoai tây chiên|fries|p
donut|1f369|food|bánh vòng|donut
sandwich|1f96a|food|bánh mì kẹp|sandwich|sandwiches
cat|1f431|animal|con mèo|cat
dog|1f436|animal|con chó|dog
rabbit|1f430|animal|con thỏ|rabbit
fish|1f41f|animal|con cá|fish|fish
bird|1f426|animal|con chim|bird
duck|1f986|animal|con vịt|duck
pig|1f437|animal|con heo|pig
frog|1f438|animal|con ếch|frog
bear|1f43b|animal|con gấu|bear
butterfly|1f98b|animal|con bướm|butterfly|butterflies
chicken|1f414|animal|con gà|chicken
cow|1f42e|animal|con bò|cow
buffalo|1f403|animal|con trâu|buffalo|buffaloes
elephant|1f418|animal|con voi|elephant
lion|1f981|animal|con sư tử|lion
tiger|1f42f|animal|con hổ|tiger
monkey|1f435|animal|con khỉ|monkey
giraffe|1f992|animal|con hươu cao cổ|giraffe
horse|1f434|animal|con ngựa|horse
sheep|1f411|animal|con cừu|sheep|sheep
turtle|1f422|animal|con rùa|turtle
snake|1f40d|animal|con rắn|snake
bee|1f41d|animal|con ong|bee
ladybug|1f41e|animal|con bọ rùa|ladybug
octopus|1f419|animal|con bạch tuộc|octopus|octopuses
dolphin|1f42c|animal|con cá heo|dolphin
whale|1f433|animal|con cá voi|whale
crab|1f980|animal|con cua|crab
mouse|1f42d|animal|con chuột|mouse|mice
panda|1f43c|animal|con gấu trúc|panda
fox|1f98a|animal|con cáo|fox|foxes
koala|1f428|animal|con gấu túi|koala
penguin|1f427|animal|con chim cánh cụt|penguin
chick|1f425|animal|con gà con|chick
owl|1f989|animal|con cú mèo|owl
crocodile|1f40a|animal|con cá sấu|crocodile
goat|1f410|animal|con dê|goat
snail|1f40c|animal|con ốc sên|snail
zebra|1f993|animal|con ngựa vằn|zebra
ant|1f41c|animal|con kiến|ant
caterpillar|1f41b|animal|con sâu|caterpillar
books|1f4da|school|chồng sách|books|p
book|1f4d6|school|quyển sách|book
notebook|1f4d3|school|quyển vở|notebook
pencil|270f|school|cây bút chì|pencil
pen|1f58a|school|cây bút mực|pen
crayon|1f58d|school|cây bút sáp màu|crayon
scissors|2702|school|cái kéo|pair of scissors|scissors|u
bag|1f392|school|cái cặp|schoolbag
ruler|1f4cf|school|cái thước kẻ|ruler
setsquare|1f4d0|school|cái ê ke|set square
palette|1f3a8|school|bảng màu|paint palette
school|1f3eb|school|ngôi trường|school
microscope|1f52c|school|kính hiển vi|microscope
ball|26bd|toy|quả bóng|ball
basketball|1f3c0|toy|quả bóng rổ|basketball
balloon|1f388|toy|quả bóng bay|balloon
kite|1fa81|toy|cái diều|kite
teddy|1f9f8|toy|con gấu bông|teddy bear
gift|1f381|toy|hộp quà|present
birthday|1f382|toy|bánh sinh nhật|birthday cake
drum|1f941|toy|cái trống|drum
guitar|1f3b8|toy|cây đàn ghi-ta|guitar
puzzle|1f9e9|toy|mảnh ghép|puzzle piece
dice|1f3b2|toy|con xúc xắc|dice|dice
star|2b50|toy|ngôi sao|star
heart|2764|toy|trái tim|heart
trophy|1f3c6|toy|chiếc cúp|trophy|trophies
medal|1f3c5|toy|tấm huy chương|medal
sun|2600|nature|mặt trời|sun
moon|1f319|nature|mặt trăng|moon
cloud|2601|nature|đám mây|cloud
rainbow|1f308|nature|cầu vồng|rainbow
rain|1f327|nature|cơn mưa|rain|u
snowman|26c4|nature|người tuyết|snowman|snowmen
blossom|1f338|nature|bông hoa|flower
sunflower|1f33b|nature|hoa hướng dương|sunflower
rose|1f339|nature|hoa hồng|rose
tulip|1f337|nature|hoa tuy-líp|tulip
tree|1f333|nature|cái cây|tree
pine|1f332|nature|cây thông|pine tree
palm|1f334|nature|cây dừa|palm tree
clover|1f340|nature|cỏ ba lá|clover
leaf|1f341|nature|chiếc lá|leaf|leaves
mountain|26f0|nature|ngọn núi|mountain
wave|1f30a|nature|con sóng|wave
fire|1f525|nature|ngọn lửa|fire
drop|1f4a7|nature|giọt nước|drop of water
lightning|26a1|nature|tia chớp|lightning|u
earth|1f30d|nature|trái đất|Earth
seedling|1f331|nature|cây non|seedling
car|1f697|transport|xe ô tô|car
bus|1f68c|transport|xe buýt|bus|buses
train|1f686|transport|tàu hỏa|train
plane|2708|transport|máy bay|plane
helicopter|1f681|transport|máy bay trực thăng|helicopter
ship|1f6a2|transport|con tàu|ship
sailboat|26f5|transport|thuyền buồm|sailboat
rocket|1f680|transport|tên lửa|rocket
firetruck|1f692|transport|xe cứu hỏa|fire truck
ambulance|1f691|transport|xe cứu thương|ambulance
tractor|1f69c|transport|máy kéo|tractor
bicycle|1f6b2|transport|xe đạp|bicycle
taxi|1f695|transport|xe taxi|taxi
house|1f3e0|home|ngôi nhà|house|houses
chair|1fa91|home|cái ghế|chair
bed|1f6cf|home|cái giường|bed
alarmclock|23f0|home|đồng hồ báo thức|alarm clock
phone|1f4f1|home|điện thoại|phone
lightbulb|1f4a1|home|bóng đèn|light bulb
key|1f511|home|chìa khoá|key
door|1f6aa|home|cánh cửa|door
spoon|1f944|home|cái thìa|spoon
cup|2615|home|tách trà|cup
toothbrush|1faa5|home|bàn chải đánh răng|toothbrush|toothbrushes
tv|1f4fa|home|cái ti vi|TV
laptop|1f4bb|home|máy tính xách tay|laptop
camera|1f4f7|home|máy ảnh|camera
bathtub|1f6c1|home|bồn tắm|bathtub
sofa|1f6cb|home|ghế sô-pha|sofa
umbrella|2602|home|cái ô|umbrella
broom|1f9f9|home|cái chổi|broom
eye|1f441|body|con mắt|eye
ear|1f442|body|cái tai|ear
nose|1f443|body|cái mũi|nose|noses
mouth|1f444|body|cái miệng|mouth
hand|270b|body|bàn tay|hand
foot|1f9b6|body|bàn chân|foot|feet
leg|1f9b5|body|cái chân|leg
tooth|1f9b7|body|cái răng|tooth|teeth
brain|1f9e0|body|bộ não|brain
tongue|1f445|body|cái lưỡi|tongue
tshirt|1f455|clothes|cái áo phông|T-shirt
jeans|1f456|clothes|quần dài|jeans|p
dress|1f457|clothes|cái váy|dress|dresses
shoe|1f45f|clothes|chiếc giày|shoe
cap|1f9e2|clothes|cái mũ lưỡi trai|cap
socks|1f9e6|clothes|đôi tất|socks|p
gloves|1f9e4|clothes|đôi găng tay|gloves|p
glasses|1f453|clothes|cái kính|glasses|p
scarf|1f9e3|clothes|cái khăn quàng|scarf|scarves
coat|1f9e5|clothes|cái áo khoác|coat
boy|1f466|people|bạn nam|boy
girl|1f467|people|bạn nữ|girl
man|1f468|people|người đàn ông|man|men
woman|1f469|people|người phụ nữ|woman|women
grandpa|1f474|people|ông|grandfather
grandma|1f475|people|bà|grandmother
baby|1f476|people|em bé|baby|babies
happy|1f600|feeling|vui vẻ|happy
sad|1f622|feeling|buồn|sad
angry|1f621|feeling|tức giận|angry
sleepy|1f634|feeling|buồn ngủ|sleepy
surprised|1f62e|feeling|ngạc nhiên|surprised
red|1f534|color|màu đỏ|red
blue|1f535|color|màu xanh dương|blue
green|1f7e2|color|màu xanh lá|green
yellow|1f7e1|color|màu vàng|yellow
orangecolor|1f7e0|color|màu cam|orange
purple|1f7e3|color|màu tím|purple
brown|1f7e4|color|màu nâu|brown
black|26ab|color|màu đen|black
white|26aa|color|màu trắng|white
shapecircle||shape|hình tròn|circle
shapesquare||shape|hình vuông|square
shapetriangle||shape|hình tam giác|triangle
shaperectangle||shape|hình chữ nhật|rectangle
`;

  const lib = { items: {}, order: [] };
  for (const line of TABLE.trim().split('\n')) {
    const [id, cp, cat, vi, en, extra, flags] = line.split('|');
    // the 6th field is either a plural (word) or a flag letter set
    const isFlag = value => /^[up]+$/.test(value || '');
    const plural = extra && !isFlag(extra) ? extra : '', letters = isFlag(extra) ? extra : (flags || '');
    lib.items[id] = { id, cp, cat, vi, en, plural, uncountable: letters.includes('u'), pluralOnly: letters.includes('p') };
    lib.order.push(id);
  }
  const vowel = word => /^[aeiou]/i.test(word) && !/^(uni|eu)/i.test(word);
  Object.assign(lib, {
    get: id => lib.items[id],
    byCat: cat => lib.order.filter(id => lib.items[id].cat === cat),
    countable: cat => lib.order.filter(id => { const item = lib.items[id]; return (!cat || item.cat === cat) && !item.uncountable && !item.pluralOnly && item.cp; }),
    // "an apple", "a cat"
    withArticle: id => { const item = lib.items[id]; return item.uncountable || item.pluralOnly ? item.en : (vowel(item.en) ? 'an ' : 'a ') + item.en; },
    plural: id => { const item = lib.items[id]; if (item.pluralOnly || item.uncountable) return item.en; return item.plural || (/(s|x|z|ch|sh)$/.test(item.en) ? item.en + 'es' : item.en + 's'); },
    codepoints: () => lib.order.map(id => lib.items[id].cp).filter(Boolean),
    ATTRIBUTION: 'Hình minh hoạ: Twemoji (Twitter, Inc. và những người đóng góp), giấy phép CC-BY 4.0 — github.com/jdecked/twemoji'
  });
  W.lib = lib;
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-core.js ---- */
/* Worksheet generator core: seeded random numbers, number formatting, colourful page decoration,
   and assembly of a worksheet or a test (with answer key) from the topics of a subject.
   Subjects (Toán, Tiếng Việt, Tiếng Anh) register their topics in the other studio-worksheet-*.js files. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  W.SUBJECTS = W.SUBJECTS || {};

  // ---------- random numbers (same seed, same worksheet) ----------
  function rng(seed) {
    let state = (Number(seed) || 1) >>> 0;
    const next = () => { state = (state + 0x6D2B79F5) >>> 0; let t = state; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const R = {
      next,
      int: (low, high) => low + Math.floor(next() * (high - low + 1)),
      pick: list => list[Math.floor(next() * list.length)],
      chance: p => next() < p,
      shuffle: list => { const a = [...list]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
      sample: (list, n) => R.shuffle(list).slice(0, n)
    };
    return R;
  }

  // ---------- numbers: 12 345 and 3,5 as Vietnamese schools write them ----------
  const groupDigits = digits => digits.length < 5 ? digits : digits.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  const fmtInt = n => (n < 0 ? '-' : '') + groupDigits(String(Math.abs(Math.round(n))));
  // value given as an integer scaled by 10^places; trailing zeros dropped
  function fmtDec(scaled, places) {
    const negative = scaled < 0, digits = String(Math.abs(Math.round(scaled))).padStart(places + 1, '0');
    const whole = digits.slice(0, digits.length - places);
    let fraction = digits.slice(digits.length - places).replace(/0+$/, '');
    return (negative ? '-' : '') + groupDigits(whole) + (fraction ? '{,}' + fraction : '');
  }
  const esc = text => String(text ?? '').replace(/[\\{}$&#_%^~]/g, ch => ({ '\\': '\\textbackslash{}', '~': '\\textasciitilde{}', '^': '\\textasciicircum{}' }[ch] || '\\' + ch));
  const points = x => String(x).replace('.', ',');
  // cheerful colours for headings, numbers and letters (all readable on white)
  const RAINBOW = ['red!85!black', 'orange!95!black', 'green!55!black', 'blue!70!cyan', 'violet', 'magenta!80!black'];
  // every letter in its own colour (done here because LaTeX cannot split UTF-8 letters reliably)
  const BW = ['black'];
  const rainbow = (text, palette = RAINBOW) => { let i = 0; return Array.from(String(text)).map(ch => /\s/.test(ch) ? '\\ ' : `\\textcolor{${palette[i++ % palette.length]}}{${esc(ch)}}`).join(''); };

  // ---------- extra macros some topics need ----------
  const EXTRA = {
    // a blank line to write on, with a small hint (the tone) above it: \wsblank[sắc]{1.6cm}
    blank: String.raw`\newcommand{\wsblank}[2][]{\underline{\makebox[#2][c]{\raisebox{1.3ex}{\tiny\itshape #1}}}}`,
    grid: String.raw`\usepackage{array,colortbl}`,
    clock: String.raw`\newcommand{\wsclock}[2]{\begin{tikzpicture}[ico,scale=0.62,baseline=(current bounding box.center)]
\filldraw[fill=white,line width=1pt] (0,0) circle (1.5);
\foreach \a in {0,30,...,330}{\draw[black!70,line width=0.7pt] (\a:1.3)--(\a:1.5);}
\foreach \n in {1,...,12}{\node[font=\tiny\bfseries] at ({90-30*\n}:1.05) {\n};}
\draw[red!80!black,line width=1.6pt,->] (0,0)--(#1:0.72);
\draw[blue!70!black,line width=1.1pt,->] (0,0)--(#2:1.05);
\fill (0,0) circle (0.07);
\end{tikzpicture}}`,
    rect: String.raw`\newcommand{\wsrect}[2]{\begin{tikzpicture}[ico,baseline=(current bounding box.center)]
\filldraw[fill=yellow!35,line width=0.8pt] (0,0) rectangle (2.2,1.2);
\node[below] at (1.1,0) {\small #1};\node[right] at (2.2,0.6) {\small #2};
\end{tikzpicture}}`,
    // a writing line to copy over in light grey (handwriting practice)
    trace: String.raw`\newcommand{\wstrace}[1]{\textcolor{black!35}{\Large #1}}`,
    // outline letters and digits in dots (text render mode 1 = stroke), and the dotted line style for tracing paths
    // open "V" arrowhead drawn with round strokes: \wsarrow[angle]{scale}
    arrow: String.raw`\newcommand{\wsarrow}[2][0]{\begin{tikzpicture}[baseline=-0.6ex,rotate=#1,scale=#2]
\draw[wsMain,line width=2.6pt,line cap=round,line join=round] (-0.3,0)--(0.3,0) (0.04,0.25)--(0.3,0)--(0.04,-0.25);
\end{tikzpicture}}`,
    dash: String.raw`\newcommand{\wsdash}[2][58]{{\fontsize{#1}{#1}\selectfont\fontfamily{pag}\fontseries{b}\selectfont\pdfliteral{1 J 1.1 w [0.1 3.4] 0 d 0.35 0.35 0.35 RG}\pdfliteral direct{1 Tr}#2\pdfliteral direct{0 Tr}\pdfliteral{[] 0 d 0 w 0 J 0 G}}}
\tikzset{wsdashline/.style={draw=black!40,line width=2.4pt,dash pattern=on 0.1pt off 5.5pt,line cap=round}}`
  };

  // ---------- subjects ----------
  W.registerSubject = subject => { W.SUBJECTS[subject.id] = subject; };
  // mode: 'color' | 'bw' | undefined (all). A topic with modes: ['bw'] only suits a black-and-white print, and vice versa.
  W.topicsFor = (subjectId, grade, mode) => (W.SUBJECTS[subjectId]?.topics || []).filter(topic => topic.grades.includes(Number(grade)) && (!mode || !topic.modes || topic.modes.includes(mode)));
  W.defaultTopics = (subjectId, grade, mode) => W.topicsFor(subjectId, grade, mode).filter(topic => topic.defaults?.includes(Number(grade))).map(topic => topic.id);

  const SIZE = { short: 0.6, normal: 1, long: 1.5 };
  const KIND_TITLE = { worksheet: 'PHIẾU BÀI TẬP', exam: 'ĐỀ KIỂM TRA' };

  function itemCount(topic, size, exam) {
    const factor = (SIZE[size] || 1) * (exam ? 0.6 : 1), cols = topic.cols || 1;
    const wanted = Math.max(cols > 1 ? cols : 1, Math.round((topic.count || 4) * factor));
    return cols > 1 ? Math.max(cols, Math.round(wanted / cols) * cols) : wanted;
  }

  function renderItems(block) {
    const cols = block.cols || 1;
    const list = '\\begin{enumerate}\n' + block.items.map(item => '\\item ' + item.q).join('\n') + '\n\\end{enumerate}';
    return cols > 1 ? `\\begin{multicols}{${cols}}\n${list}\n\\end{multicols}` : list;
  }
  function renderAnswers(block) {
    if (block.noAnswer) return '';
    if (block.answer) return block.answer;
    if (!block.items?.length) return '';
    if (block.long) return '\\begin{enumerate}\n' + block.items.map(item => '\\item ' + item.a).join('\n') + '\n\\end{enumerate}';
    return block.items.map((item, i) => `${i + 1}) ${item.a}`).join(' \\quad ');
  }
  const renderBody = block => block.body != null ? block.body : renderItems(block);

  // ---------- multiple choice (exam part I) ----------
  const LETTERS = ['A', 'B', 'C', 'D'];
  function renderChoice(item) {
    const options = item.options.map((option, i) => `\\textbf{${LETTERS[i]}.} ${option}`);
    const long = item.options.some(option => option.replace(/\$[^$]*\$/g, 'xxx').length > 22);
    return `\\item ${item.stem}\\\\\n${options.join(long ? '\\\\\n' : ' \\quad ')}`;
  }

  // ---------- page and heading decoration ----------
  const hex = value => String(value).replace('#', '').toUpperCase();
  function preambleDecor(subject, decor, bw) {
    const p = bw ? { main: '#1a1a1a', accent: '#555555', light: '#f3f3f3' } : subject.palette;
    return [`\\definecolor{wsMain}{HTML}{${hex(p.main)}}`, `\\definecolor{wsAccent}{HTML}{${hex(p.accent)}}`, `\\definecolor{wsLight}{HTML}{${hex(p.light)}}`,
      decor && bw
        ? String.raw`\newcommand{\bai}[3][wsMain]{\par\Needspace{5\baselineskip}\bigskip\noindent\begin{tikzpicture}[baseline=(n.base)]
\node[circle,fill=black,text=white,inner sep=1pt,minimum size=0.82cm,font=\bfseries\large] (n) {#2};
\node[anchor=west,fill=white,draw=black,line width=0.9pt,rounded corners=6pt,inner sep=5pt,text width=\dimexpr\linewidth-1.6cm\relax,font=\bfseries] at ([xshift=3pt]n.east) {#3};
\end{tikzpicture}\par\smallskip}`
        : decor
        ? String.raw`\newcommand{\bai}[3][wsMain]{\par\Needspace{5\baselineskip}\bigskip\noindent\begin{tikzpicture}[baseline=(n.base)]
\node[circle,fill=#1,text=white,inner sep=1pt,minimum size=0.82cm,font=\bfseries\large] (n) {#2};
\node[anchor=west,fill=#1!13,draw=#1!60,line width=0.8pt,rounded corners=6pt,inner sep=5pt,text width=\dimexpr\linewidth-1.6cm\relax,font=\bfseries\color{#1!85!black}] at ([xshift=3pt]n.east) {#3};
\end{tikzpicture}\par\smallskip}`
        : String.raw`\newcommand{\bai}[3][wsMain]{\par\Needspace{5\baselineskip}\bigskip\noindent\textbf{Bài #2.} #3\par\smallskip}`,
      // a word in a box (word banks)
      decor ? String.raw`\newcommand{\wsbox}[1]{\fcolorbox{wsAccent}{white}{\strut\textcolor{wsMain}{\bfseries #1}}}` : String.raw`\newcommand{\wsbox}[1]{\fbox{\strut #1}}`
    ].join('\n');
  }
  // Frame with a small picture in each corner, drawn on every page (no second pass needed).
  function pageFrame(subject, corners) {
    const [a, b] = corners;
    return String.raw`\AddToShipoutPictureBG{\ifdefined\TexCraftFragment\else\AtPageLowerLeft{\begin{tikzpicture}[x=1pt,y=1pt]
\useasboundingbox (0,0) rectangle (1pt,1pt);   % the picture is placed by its bounding box, which must start at the page corner
\draw[wsAccent,line width=1.6pt,rounded corners=10pt] (22,22) rectangle (\dimexpr\paperwidth-22pt\relax,\dimexpr\paperheight-22pt\relax);
\draw[wsMain,line width=0.5pt,rounded corners=8pt] (28,28) rectangle (\dimexpr\paperwidth-28pt\relax,\dimexpr\paperheight-28pt\relax);
\node[fill=white,inner sep=2pt] at (46,\dimexpr\paperheight-26pt\relax) {${a}};
\node[fill=white,inner sep=2pt] at (\dimexpr\paperwidth-46pt\relax,\dimexpr\paperheight-26pt\relax) {${b}};
\node[fill=white,inner sep=2pt] at (46,26) {${b}};
\node[fill=white,inner sep=2pt] at (\dimexpr\paperwidth-46pt\relax,26) {${a}};
\end{tikzpicture}}\fi}`;
  }

  // ---------- main entry ----------
  function generate(options = {}) {
    const o = { subject: 'math', kind: 'worksheet', grade: 2, level: 0, topics: null, size: 'normal', versions: 1, seed: 1, school: '', title: '', pictures: 'emoji', color: 'color',
      minutes: 40, mcCount: null, answers: true, decor: null, ...options };
    const subject = W.SUBJECTS[o.subject];
    if (!subject) throw Error('Chưa có môn ' + o.subject);
    const wantedGrade = Number(o.grade), grade = subject.grades.includes(wantedGrade) ? wantedGrade : subject.grades.reduce((best, g) => Math.abs(g - wantedGrade) < Math.abs(best - wantedGrade) ? g : best, subject.grades[0]);
    const bw = o.color === 'bw', warm = bw ? 'black' : 'red!80!black', paint = bw ? BW : RAINBOW, mode = bw ? 'bw' : 'color';
    const level = o.level ? 1 : 0, exam = o.kind === 'exam' && !(subject.kinds && !subject.kinds.includes('exam'));
    const levelText = subject.levelLabel ? subject.levelLabel(grade, level) : `Lớp ${grade}`;
    const decor = o.decor == null ? !exam : !!o.decor;
    const fun = (o.font || (decor ? 'fun' : 'classic')) === 'fun';
    const available = W.topicsFor(o.subject, grade, mode);
    const chosenIds = o.topics?.length ? o.topics : W.defaultTopics(o.subject, grade, mode);
    const topics = available.filter(topic => chosenIds.includes(topic.id));
    if (!topics.length) throw Error('Hãy chọn ít nhất một dạng bài.');
    const versions = Math.max(1, Math.min(6, Number(o.versions) || 1));

    const used = new Set(), extras = new Set(), emoji = new Set(), cjk = new Set();
    const TIKZ_NAME = { chicken: 'chick', blossom: 'flower' };
    const tikzOf = id => W.art.ICONS[id] ? id : (W.art.ICONS[TIKZ_NAME[id]] ? TIKZ_NAME[id] : null);
    // A picture of a library concept: a Twemoji PNG (embedded as an image), or a hand-drawn TikZ macro.
    // outline = a line drawing to colour in (TikZ only; other pictures stay in colour).
    const pic = (id, scale = 1, outline = false) => {
      const item = W.lib.get(id);
      if (!item) throw Error('Không có hình ' + id);
      const tikz = tikzOf(id);
      // black and white: line drawings to save ink (and so children can colour them in); other pictures are greyed by the dialog
      if (tikz && (outline || bw || o.pictures === 'tikz' || !item.cp)) {
        const line = outline || bw;
        used.add((line ? 'O' : '') + tikz);
        return W.art.macroName(tikz, line) + (scale === 1 ? '' : `[${scale}]`);
      }
      emoji.add(item.cp);
      return `\\wspic[${Math.round(scale * 100) / 100 * 1.0}cm]{ws-${item.cp}}`;
    };
    const canOutline = id => !!tikzOf(id);
    // A Chinese / Japanese character as a picture (stroke outlines, drawn to PNG by the dialog):
    // mode f = final glyph, t = pale glyph to trace, s<k> = the first k strokes.
    const hz = (set, ch, mode = 'f', height = 1) => {
      const name = `cjk-${set}-${ch.codePointAt(0).toString(16)}-${mode}`;
      cjk.add(name);
      return `\\wshz[${Math.round(height * 100) / 100}cm]{${name}}`;
    };

    const pages = [], answerPages = [], pageCredit = [];
    const sheets = [];   // the structured blocks of each version, for callers that draw the worksheet themselves (the web practice page)
    for (let v = 0; v < versions; v++) {
      const R = rng((Number(o.seed) || 1) * 7919 + v * 104729 + grade * 31);
      const ctxBase = { R, g: grade, lvl: level, pic, canOutline, hz, bw, rb: i => paint[Math.abs(i) % paint.length], need: name => extras.add(name), subject: subject.id, exam, lib: W.lib };
      const blocks = [];
      for (const topic of topics) {
        const block = topic.make({ ...ctxBase, n: itemCount(topic, o.size, exam), topic });
        if (block) blocks.push({ topic, ...block });
      }
      // multiple-choice questions come from the topics that know how to make them
      const mcTopics = topics.filter(topic => topic.mc);
      const mcWanted = exam ? (o.mcCount == null ? (grade === 1 ? 0 : 6) : Math.max(0, Math.min(12, Number(o.mcCount) || 0))) : 0;
      const mcItems = [];
      for (let i = 0; i < mcWanted && mcTopics.length; i++) {
        const item = mcTopics[i % mcTopics.length].mc({ ...ctxBase, topic: mcTopics[i % mcTopics.length] });
        if (item) mcItems.push(item);
      }
      sheets.push({ blocks: blocks.map(block => ({ id: block.topic.id, name: block.topic.name, instr: block.instr, cols: block.cols || 1, items: block.items || [], body: block.body != null, long: !!block.long, noAnswer: !!block.noAnswer, answer: block.answer || '' })), mc: mcItems });
      const variantLabel = versions > 1 ? ` — ${exam ? 'Mã đề' : 'Đề'} ${v + 1}` : '';
      const title = esc(o.title) || (KIND_TITLE[exam ? 'exam' : 'worksheet'] + ' ' + subject.title.toUpperCase());
      let body = '';
      if (decor) {
        const [mascotA, mascotB] = subject.mascots;
        const banner = o.title ? title : rainbow(KIND_TITLE[exam ? 'exam' : 'worksheet'] + ' ' + subject.title.toUpperCase(), paint);
        body += `\\begin{center}\n\\begin{tikzpicture}\\node[draw=wsAccent,fill=white,line width=2.2pt,rounded corners=16pt,inner xsep=14pt,inner ysep=8pt]{${pic(mascotA, 0.95)}\\ {\\fontseries{b}\\selectfont\\huge ${banner}}\\ ${pic(mascotB, 0.95)}};\\end{tikzpicture}\\\\[5pt]\n{\\color{wsMain}\\large\\bfseries ${levelText}${variantLabel}${exam ? ` \\quad Thời gian: ${Number(o.minutes) || 40} phút` : ''}}\n\\end{center}\n`;
        body += `\\begin{tcolorbox}[colback=wsLight,colframe=wsMain,arc=5pt,boxrule=1pt,left=6pt,right=6pt,top=3pt,bottom=3pt]\n\\textcolor{wsMain}{\\textbf{Họ và tên:}} \\dotfill\\quad \\textcolor{wsAccent}{\\textbf{Lớp:}} \\makebox[2.3cm]{\\dotfill}\\quad ${exam ? `\\textcolor{${warm}}{\\textbf{Điểm:}} \\makebox[2cm]{\\dotfill}` : `\\textcolor{${warm}}{\\textbf{Ngày:}} \\makebox[2.8cm]{\\dotfill}`}\n\\end{tcolorbox}\n`;
      } else {
        body += `\\noindent\\textbf{${o.school ? esc(o.school) : 'Trường: \\dotfill'}}\\hfill\\textbf{${exam ? 'ĐỀ KIỂM TRA' : 'PHIẾU BÀI TẬP'}${variantLabel}}\n\\begin{center}\n{\\Large\\bfseries ${title}}\\\\[2pt]\n{\\bfseries ${levelText}}${exam ? ` \\quad Thời gian làm bài: ${Number(o.minutes) || 40} phút` : ''}\n\\end{center}\n`;
        body += `\\noindent\\fbox{\\parbox{0.62\\linewidth}{\\vspace{2pt}Họ và tên: \\dotfill\\\\[5pt]Lớp: \\makebox[2.2cm]{\\dotfill}\\ ${exam ? 'Trường: \\dotfill' : 'Ngày: \\dotfill'}\\vspace{2pt}}}\\hfill\\fbox{\\parbox[c][1.55cm][c]{0.3\\linewidth}{\\centering\\textbf{${exam ? 'Điểm' : 'Nhận xét'}}}}\n`;
      }

      // points: 0.5 per multiple-choice question, the rest shared by the written exercises (halves)
      let shares = blocks.map(() => 0);
      if (exam) {
        const halves = Math.round((10 - 0.5 * mcItems.length) * 2), base = Math.floor(halves / Math.max(1, blocks.length));
        shares = blocks.map((_, i) => (base + (i < halves - base * blocks.length ? 1 : 0)) / 2);
      }
      let number = 1;
      if (exam && mcItems.length) {
        body += `\\bai[wsMain]{I}{TRẮC NGHIỆM (${points(mcItems.length * 0.5)} điểm). \\textit{Khoanh vào chữ cái đặt trước câu trả lời đúng.}}\n\\begin{enumerate}\n${mcItems.map(renderChoice).join('\n')}\n\\end{enumerate}\n`;
        body += `\\bai[wsAccent]{II}{TỰ LUẬN (${points(10 - mcItems.length * 0.5)} điểm).}\n`;
      }
      blocks.forEach((block, i) => {
        const suffix = exam ? ` \\textit{(${points(shares[i])} điểm)}` : '';
        body += `\\bai[${paint[(number - 1) % paint.length]}]{${number}}{${block.instr}${suffix}}\n${renderBody(block)}\n`;
        number++;
      });
      if (decor) body += `\\vfill\\begin{center}\\bfseries ${rainbow(subject.cheer || 'Chúc em làm bài thật tốt!', paint)}\\end{center}\n`;
      pageCredit.push(true);
      pages.push(body);

      let key = `\\begin{center}{\\Large\\bfseries ĐÁP ÁN${variantLabel}}\\end{center}\n`;
      if (mcItems.length) key += `\\textbf{Phần I (trắc nghiệm).} ${mcItems.map((item, i) => `Câu ${i + 1}: ${LETTERS[item.correct]}`).join(' \\quad ')}\n\n`;
      let keyNumber = 1;
      for (const block of blocks) {
        const text = renderAnswers(block);
        if (text) key += `\\medskip\\noindent\\textbf{Bài ${keyNumber}.} ${text}\n`;
        keyNumber++;
      }
      answerPages.push(key);
    }

    // ---------- preamble: only the pictures that are used ----------
    const mascots = subject.mascots;
    const frame = decor ? pageFrame(subject, [pic(mascots[0], 0.55), pic(mascots[1], 0.55)]) : '';
    const allDefs = [...used].sort().map(key => W.art.definition(key.replace(/^O/, ''), key.startsWith('O'))).join('\n');
    const preamble = [
      '\\documentclass[12pt,a4paper]{article}', '\\usepackage[utf8]{inputenc}', '\\usepackage[T5]{fontenc}',
      '\\usepackage{amsmath,amssymb,multicol,xcolor,graphicx,needspace}', '\\usepackage{tikz}', '\\usetikzlibrary{calc}',
      ...(decor ? ['\\usepackage{tcolorbox}', '\\usepackage{eso-pic}'] : []),
      '\\usepackage[a4paper,margin=1.9cm,bottom=2.4cm,footskip=0.9cm]{geometry}', '\\usepackage{fancyhdr}',
      '\\setlength{\\parindent}{0pt}\\setlength{\\columnsep}{1cm}\\linespread{1.25}',
      '\\setlength{\\itemsep}{4pt}',
      // sans-serif everywhere (text and the digits in formulas), whatever the style
      '\\renewcommand{\\familydefault}{pag}\\renewcommand{\\sfdefault}{pag}',
      '\\DeclareSymbolFont{operators}{OT1}{pag}{m}{n}\\SetSymbolFont{operators}{bold}{OT1}{pag}{b}{n}\\DeclareMathAlphabet{\\mathrm}{OT1}{pag}{m}{n}',
      ...(fun ? ['\\renewcommand{\\labelenumi}{\\textcolor{wsAccent}{\\bfseries\\theenumi.}}'] : []),
      // the empty glue after each picture is a place where a row of pictures may break, so it never runs past the margin
      '\\newcommand{\\wspic}[2][1cm]{\\raisebox{-0.22\\height}{\\includegraphics[height=#1]{#2}}\\hskip0pt\\relax}',
      '\\newcommand{\\wshz}[2][1cm]{\\raisebox{-0.12\\height}{\\includegraphics[height=#1]{#2}}\\hskip0pt\\relax}',
      '\\pagestyle{fancy}\\fancyhf{}\\renewcommand{\\headrulewidth}{0pt}\\setlength{\\headheight}{15pt}',
      `\\fancyfoot[L]{\\footnotesize\\textcolor{${bw ? 'black!70' : 'wsMain'}}{Gia sư AI \\textbullet\\ https://giasu.ai.vn}}\\fancyfoot[R]{\\footnotesize\\thepage}`,
      preambleDecor(subject, decor, bw), W.art.preambleStyle, allDefs,
      ...[...extras].map(name => EXTRA[name]).filter(Boolean).map(code => bw ? code.replace(/red!80!black/g, 'black').replace(/blue!70!black/g, 'black!75') : code),
      frame
    ].filter(Boolean).join('\n');
    const separator = '\n\\newpage\n';
    const credit = (emoji.size || cjk.size) ? `\n\\vspace{4pt}{\\centering\\tiny\\color{black!55} ${[emoji.size ? W.lib.ATTRIBUTION : '', cjk.size ? 'Nét chữ: AnimCJK / Make Me a Hanzi (Arphic Public License), github.com/parsimonhi/animCJK' : ''].filter(Boolean).join(' \\quad ')}\\par}` : '';
    let document = pages.map(page => page + credit).join(separator);
    if (o.answers) document += separator + answerPages.join(separator);
    const tex = preamble + '\n\\begin{document}\n' + (subject.big ? '\\large\\linespread{1.35}\\selectfont\n' : '') + document + '\n\\end{document}\n';
    const slug = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { tex, bw, filename: `${exam ? 'de-kiem-tra' : 'phieu-bai-tap'}-${slug(subject.title)}${subject.fileSuffix ? subject.fileSuffix(grade, level) : '-lop' + grade}.tex`, emoji: [...emoji].sort(), cjk: [...cjk].sort(), usedPictures: [...used], versions, sheets };
  }

  Object.assign(W, { RAINBOW, rainbow, rng, fmtInt, fmtDec, esc, points, generate, EXTRA, itemCount });
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-math.js ---- */
/* Worksheet topics for Toán, lớp 1–5. Every number and answer is computed, never typed in. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  const F = n => W.fmtInt(n), D = (scaled, places) => W.fmtDec(scaled, places);
  const SYM = { '+': '+', '-': '-', '×': '\\times', ':': ':' };
  const JS = { '+': '+', '-': '-', '×': '*', ':': '/' };
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);

  // ---------- one calculation of a given kind for a grade: [a, b, result] ----------
  function pair(op, g, T, R) {
    if (op === '+') {
      if (g === 1) { const max = T ? 20 : 10, a = R.int(1, max - 1), b = R.int(1, max - a); return [a, b, a + b]; }
      if (g === 2) {
        if (!T) { const t1 = R.int(1, 8), t2 = R.int(1, 9 - t1), u1 = R.int(0, 8), u2 = R.int(1, 9 - u1), a = 10 * t1 + u1, b = 10 * t2 + u2; return [a, b, a + b]; }
        const a = R.int(11, 89), b = R.int(10, 99 - a); return [a, b, a + b];
      }
      const max = g === 3 ? (T ? 10000 : 1000) : (T ? 1000000 : 100000), a = R.int(Math.floor(max / 10), Math.floor(max * 0.7)), b = R.int(Math.floor(max / 20), max - a - 1);
      return [a, b, a + b];
    }
    if (op === '-') {
      if (g === 1) { const max = T ? 20 : 10, a = R.int(2, max), b = R.int(1, a - 1); return [a, b, a - b]; }
      if (g === 2) {
        if (!T) { const t1 = R.int(1, 9), t2 = R.int(0, t1), u1 = R.int(1, 9), u2 = R.int(0, u1), a = 10 * t1 + u1, b = 10 * t2 + u2; return [a, b, a - b]; }
        const a = R.int(20, 99), b = R.int(10, a - 1); return [a, b, a - b];
      }
      const max = g === 3 ? (T ? 10000 : 1000) : (T ? 1000000 : 100000), a = R.int(Math.floor(max / 5), max - 1), b = R.int(Math.floor(max / 20), a - 1);
      return [a, b, a - b];
    }
    if (op === '×') {
      let a, b;
      if (g === 2) { a = R.pick(T ? [2, 3, 4, 5] : [2, 5]); b = R.int(1, 10); }
      else if (g === 3) { if (T) { a = R.int(10, 99); b = R.int(2, 9); } else { a = R.int(2, 9); b = R.int(1, 10); } }
      else if (g === 4) { if (T) { a = R.int(11, 99); b = R.int(11, 99); } else { a = R.int(100, 999); b = R.int(2, 9); } }
      else { if (T) { a = R.int(1000, 9999); b = R.int(11, 99); } else { a = R.int(100, 999); b = R.int(11, 99); } }
      return [a, b, a * b];
    }
    let d, q;
    if (g === 2) { d = R.pick(T ? [2, 3, 4, 5] : [2, 5]); q = R.int(1, 10); }
    else if (g === 3) { d = R.int(2, 9); q = T ? R.int(10, 99) : R.int(1, 10); }
    else if (g === 4) { if (T) { d = R.int(11, 99); q = R.int(10, 99); } else { d = R.int(2, 9); q = R.int(100, 999); } }
    else { if (T) { d = R.int(11, 99); q = R.int(100, 999); } else { d = R.int(11, 50); q = R.int(10, 99); } }
    return [d * q, d, q];
  }
  const opsFor = g => g === 1 ? ['+', '-'] : ['+', '-', '×', ':'];

  // ---------- multiple choice from a number ----------
  function numericMc(R, stem, value, { fmt = F, unit = '' } = {}) {
    const wanted = new Set();
    for (const c of R.shuffle([value + 1, value - 1, value + 10, value - 10, value + 2, value - 2, value + 100, value * 10, Math.floor(value / 10) + (value % 10) * 10, value + 3, value + 5])) {
      if (c >= 0 && c !== value && !wanted.has(c)) wanted.add(c);
      if (wanted.size === 3) break;
    }
    for (let k = 4; wanted.size < 3; k++) if (!wanted.has(value + k)) wanted.add(value + k);
    const all = R.shuffle([value, ...wanted]);
    return { stem, options: all.map(v => `$${fmt(v)}$${unit ? ' ' + unit : ''}`), correct: all.indexOf(value) };
  }

  // ---------- 1. calculation ----------
  const calc = {
    id: 'calc', name: 'Tính nhẩm / Tính', grades: [1, 2, 3, 4, 5], defaults: [1, 2, 3, 5], cols: 3, count: 9,
    make({ R, g, lvl, n }) {
      const ops = R.shuffle(opsFor(g)), items = [];
      for (let i = 0; i < n; i++) {
        const op = ops[i % ops.length], [a, b, r] = pair(op, g, lvl, R);
        if (g <= 2 && (op === '+' || op === '-') && R.chance(0.25)) {
          const total = op === '+' ? r : a;   // a + ? = r  /  a - ? = r
          items.push(op === '+'
            ? { q: `$${F(a)} + \\ldots = ${F(r)}$`, a: `$${F(a)} + ${F(b)} = ${F(r)}$`, meta: { check: `${a}+X===${r}`, x: b } }
            : { q: `$${F(a)} - \\ldots = ${F(r)}$`, a: `$${F(a)} - ${F(b)} = ${F(r)}$`, meta: { check: `${a}-X===${r}`, x: b } });
          void total;
          continue;
        }
        items.push({ q: `$${F(a)} ${SYM[op]} ${F(b)} = \\ldots$`, a: `$${F(a)} ${SYM[op]} ${F(b)} = ${F(r)}$`, meta: { expr: `${a}${JS[op]}${b}`, value: r } });
      }
      return { instr: g <= 2 ? 'Tính nhẩm:' : 'Tính:', items, cols: 3 };
    },
    mc({ R, g, lvl }) {
      const op = R.pick(opsFor(g)), [a, b, r] = pair(op, g, lvl, R);
      return numericMc(R, `Kết quả của phép tính $${F(a)} ${SYM[op]} ${F(b)}$ là:`, r);
    }
  };

  // ---------- 2. written (vertical) calculation ----------
  function vertical(op, a, b) {
    const width = Math.max(String(a).length, String(b).length) + 1;
    return `$\\begin{array}{r@{\\,}r}\n & ${F(a)}\\\\\n ${SYM[op]} & ${F(b)}\\\\ \\hline\n & \\phantom{${'0'.repeat(width)}}\\\\[1.1ex]\n\\end{array}$`;
  }
  const written = {
    id: 'vertical', name: 'Đặt tính rồi tính', grades: [1, 2, 3, 4], defaults: [2, 3, 4], cols: 3, count: 6,
    make({ R, g, lvl, n }) {
      if (g === 1) {   // 2-digit and 1-digit numbers, no carrying
        const items = [];
        for (let i = 0; i < n; i++) {
          const plus = i % 2 === 0, a = plus ? R.int(10, 18) : R.int(11, 19), b = plus ? R.int(1, 19 - a) : R.int(1, a - 10), r = plus ? a + b : a - b, op = plus ? '+' : '-';
          items.push({ q: vertical(op, a, b), a: `$${a} ${SYM[op]} ${b} = ${r}$`, meta: { expr: `${a}${op}${b}`, value: r } });
        }
        return { instr: 'Đặt tính rồi tính:', items, cols: 5, long: false };
      }
      const ops = R.shuffle(g === 2 ? ['+', '-'] : ['+', '-', '×']), items = [];
      for (let i = 0; i < n; i++) {
        const op = ops[i % ops.length], [a, b, r] = pair(op, g, lvl, R);
        items.push({ q: vertical(op, a, b), a: `$${F(a)} ${SYM[op]} ${F(b)} = ${F(r)}$`, meta: { expr: `${a}${JS[op]}${b}`, value: r } });
      }
      return { instr: 'Đặt tính rồi tính:', items, cols: g === 2 ? 4 : 3, long: false };
    }
  };

  // ---------- 3. comparison ----------
  const frac = (n, d) => { const k = gcd(n, d); return { n: n / k, d: d / k }; };
  const dfrac = (n, d) => `\\dfrac{${n}}{${d}}`;
  function side(R, g, T, forceNumber) {
    if (g === 5 && !forceNumber) {
      if (R.chance(0.4)) { const d = R.int(3, 12), n = R.int(1, d - 1); return { tex: dfrac(n, d), n, d, kind: 'frac', denom: d }; }
      const places = R.pick([1, 2]), scale = 10 ** places, v = R.int(scale, 20 * scale);
      return { tex: D(v, places), n: v, d: scale, kind: 'dec' };
    }
    const max = g === 1 ? (T ? 20 : 10) : g === 2 ? (T ? 1000 : 100) : g === 3 ? 10000 : 1000000;
    const v = R.int(g === 1 ? 0 : Math.floor(max / 10), max);
    return { tex: F(v), n: v, d: 1 };
  }
  const compare = {
    id: 'compare', name: 'So sánh', grades: [1, 2, 3, 4, 5], defaults: [1, 2], cols: 3, count: 6,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) items.push(compare.one(R, g, lvl, i));
      return { instr: 'Điền dấu $>$, $<$, $=$ thích hợp vào ô trống:', items, cols: 3 };
    },
    one(R, g, T) {
      let L, Rt;
      if (g >= 2 && (T || g >= 3) && R.chance(0.35)) {
        const [a, b] = [R.int(2, g === 2 ? 40 : 400), R.int(2, g === 2 ? 40 : 400)], sum = a + b;
        const target = R.chance(0.3) ? sum : Math.max(1, sum + R.pick([-9, -5, -2, 2, 5, 9]));
        L = { tex: `${F(a)} + ${F(b)}`, n: sum, d: 1 }; Rt = { tex: F(target), n: target, d: 1 };
      } else if (g === 5) {
        const k = R.pick(['dec', 'frac']);
        if (k === 'frac') { const d = R.int(4, 12), n1 = R.int(1, d - 1); let n2 = R.chance(0.2) ? n1 : R.int(1, d - 1); L = { tex: dfrac(n1, d), n: n1, d }; Rt = { tex: dfrac(n2, d), n: n2, d }; }
        else { const places = R.pick([1, 2]), scale = 10 ** places, v1 = R.int(scale, 20 * scale); let v2 = R.chance(0.2) ? v1 : v1 + R.int(-9, 9); if (v2 < 1) v2 = v1 + 1; L = { tex: D(v1, places), n: v1, d: scale }; Rt = { tex: D(v2, places), n: v2, d: scale }; }
      } else {
        L = side(R, g, T); Rt = side(R, g, T);
        if (R.chance(0.15)) Rt = { ...L };
        else if (R.chance(0.4)) { const delta = R.int(1, g === 1 ? 2 : 20); const v = Math.max(0, L.n + R.pick([-delta, delta])); Rt = { tex: F(v), n: v, d: 1 }; }
      }
      const diff = L.n * Rt.d - Rt.n * L.d, symbol = diff > 0 ? '>' : diff < 0 ? '<' : '=';
      return { q: `$${L.tex}\\ \\boxed{\\phantom{>}}\\ ${Rt.tex}$`, a: `$${L.tex} ${symbol} ${Rt.tex}$`, meta: { cmp: [L.n / L.d, Rt.n / Rt.d], symbol }, symbol, L: L.tex, Rt: Rt.tex };
    },
    mc({ R, g, lvl }) {
      const item = compare.one(R, g, lvl, 0), options = ['$>$', '$<$', '$=$'];
      return { stem: `Dấu thích hợp điền vào chỗ chấm: $${item.L} \\ldots ${item.Rt}$`, options, correct: ['>', '<', '='].indexOf(item.symbol) };
    }
  };

  // ---------- 4. number sequences ----------
  const sequence = {
    id: 'sequence', name: 'Điền số vào dãy số', grades: [1, 2, 3, 4], defaults: [1], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        let step, max;
        if (g === 1) { step = R.pick(lvl ? [1, 2] : [1]); max = lvl ? 20 : 10; }
        else if (g === 2) { step = R.pick(lvl ? [2, 3, 5, 10] : [2, 5, 10]); max = 100; }
        else if (g === 3) { step = R.pick(lvl ? [25, 50, 100, 200] : [5, 10, 50, 100]); max = 1000; }
        else { step = R.pick(lvl ? [250, 500, 2000, 5000] : [1000, 500, 10000]); max = 100000; }
        const descending = R.chance(0.35), span = step * 5;
        const start = descending ? R.int(span, Math.max(span, max)) : R.int(0, Math.max(0, max - span));
        const terms = Array.from({ length: 6 }, (_, k) => descending ? start - k * step : start + k * step);
        const blanks = new Set(R.sample([1, 2, 3, 4, 5], g === 1 ? 2 : 2));
        const q = terms.map((v, k) => blanks.has(k) ? '\\ldots' : F(v)).join(',\\ ');
        items.push({ q: `$${q}$`, a: `$${terms.filter((_, k) => blanks.has(k)).map(F).join(';\\ ')}$`, meta: { terms, blanks: [...blanks].sort((a, b) => a - b) } });
      }
      return { instr: 'Điền số thích hợp vào chỗ chấm:', items, cols: 1 };
    }
  };

  // ---------- 5. place value ----------
  const place = {
    id: 'place', name: 'Cấu tạo số', grades: [1, 2, 3, 4, 5], defaults: [1], cols: 2, count: 4,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        if (g === 1) {
          const v = R.int(11, lvl ? 99 : 20), t = Math.floor(v / 10), u = v % 10;
          items.push({ q: `Số $${v}$ gồm \\ldots\\ chục và \\ldots\\ đơn vị.`, a: `${t} chục và ${u} đơn vị`, meta: { parts: [t * 10, u], value: v } });
        } else if (g === 2) {
          const h = R.int(1, 9), t = R.int(lvl ? 0 : 1, 9), u = R.int(lvl ? 0 : 1, 9), v = h * 100 + t * 10 + u;
          items.push(R.chance(0.5)
            ? { q: `Số $${v}$ gồm \\ldots\\ trăm, \\ldots\\ chục, \\ldots\\ đơn vị.`, a: `${h} trăm, ${t} chục, ${u} đơn vị`, meta: { parts: [h * 100, t * 10, u], value: v } }
            : { q: `$${v} = \\ldots + \\ldots + \\ldots$`, a: `$${v} = ${[h * 100, t * 10, u].filter(Boolean).join(' + ')}$`, meta: { parts: [h * 100, t * 10, u], value: v } });
        } else if (g === 3) {
          const digits = Array.from({ length: 4 }, (_, k) => R.int(k === 0 || !lvl ? 1 : 0, 9)), v = Number(digits.join(''));
          const parts = digits.map((d, k) => d * 10 ** (3 - k)).filter(Boolean);
          items.push({ q: `$${F(v)} = ${parts.map(() => '\\ldots').join(' + ')}$`, a: `$${F(v)} = ${parts.join(' + ')}$`, meta: { parts, value: v } });
        } else if (g === 4) {
          const len = R.int(5, 6), digits = Array.from({ length: len }, (_, k) => R.int(k === 0 ? 1 : 0, 9)), v = Number(digits.join(''));
          const pos = R.int(0, len - 1), d = digits[pos] || (digits[pos] = 7), value = d * 10 ** (len - 1 - pos), shown = Number(digits.join(''));
          items.push({ q: `Chữ số $${d}$ trong số $${F(shown)}$ có giá trị là: \\ldots`, a: `$${F(value)}$`, meta: { value, number: shown, digit: d } });
          void v;
        } else {
          const places = 3, whole = R.int(1, 99), fraction = R.int(100, 999), scaled = whole * 1000 + fraction, str = String(fraction);
          const k = R.int(0, 2), d = Number(str[k]) || 5, digits = str.split(''); digits[k] = String(d);
          const shownScaled = whole * 1000 + Number(digits.join(''));
          items.push({ q: `Chữ số $${d}$ trong số $${D(shownScaled, places)}$ thuộc hàng nào? Có giá trị là bao nhiêu?`, a: `Hàng ${['phần mười', 'phần trăm', 'phần nghìn'][k]}, giá trị $${dfrac(d, 10 ** (k + 1))}$`, meta: { digit: d, place: k } });
          void scaled;
        }
      }
      return { instr: g === 3 ? 'Viết mỗi số sau thành tổng (theo hàng):' : g === 2 ? 'Viết số vào chỗ chấm:' : 'Điền vào chỗ chấm:', items, cols: g >= 4 ? 1 : 2, long: g >= 4 };
    }
  };

  // ---------- 6. find x ----------
  const findx = {
    id: 'findx', name: 'Tìm x', grades: [2, 3, 4, 5], defaults: [2, 3, 4, 5], cols: 3, count: 6,
    make({ R, g, lvl, n }) {
      const items = [], kinds = ['+', '-', 'a-x', '×', ':'].concat(g >= 4 ? ['a:x'] : []).concat(g === 5 && lvl ? ['two'] : []);
      for (let i = 0; i < n; i++) {
        const kind = R.shuffle(kinds)[0], big = g === 2 ? 99 : g === 3 ? 999 : 99999;
        let eq, x, check;
        if (kind === '+') { const a = R.int(1, big - 1), xv = R.int(1, big - a); x = xv; eq = `x + ${F(a)} = ${F(a + xv)}`; check = `X+${a}===${a + xv}`; }
        else if (kind === '-') { const a = R.int(1, big - 1), r = R.int(1, a > 1 ? a - 1 : 1); x = a + r; eq = `x - ${F(a)} = ${F(r)}`; check = `X-${a}===${r}`; if (x > big * 2) { /* fine */ } }
        else if (kind === 'a-x') { const a = R.int(2, big), xv = R.int(1, a - 1); x = xv; eq = `${F(a)} - x = ${F(a - xv)}`; check = `${a}-X===${a - xv}`; }
        else if (kind === '×') { const a = g === 2 ? R.pick([2, 3, 4, 5]) : R.int(2, g === 3 ? 9 : 99), xv = R.int(2, g === 2 ? 10 : g === 3 ? 99 : 999); x = xv; eq = `x \\times ${a} = ${F(a * xv)}`; check = `X*${a}===${a * xv}`; }
        else if (kind === ':') { const a = g === 2 ? R.pick([2, 3, 4, 5]) : R.int(2, g === 3 ? 9 : 99), r = R.int(2, g === 2 ? 10 : g === 3 ? 99 : 999); x = a * r; eq = `x : ${a} = ${F(r)}`; check = `X/${a}===${r}`; }
        else if (kind === 'a:x') { const xv = R.int(2, 12), r = R.int(2, 40); x = xv; eq = `${F(xv * r)} : x = ${r}`; check = `${xv * r}/X===${r}`; }
        else { const a = R.int(2, 9), xv = R.int(2, 30), b = R.int(1, 50); x = xv; eq = `x \\times ${a} + ${b} = ${F(a * xv + b)}`; check = `X*${a}+${b}===${a * xv + b}`; }
        items.push({ q: `$${eq}$`, a: `$x = ${F(x)}$`, meta: { check, x }, eq, x });
      }
      return { instr: 'Tìm $x$:', items, cols: g === 2 ? 3 : 2 };
    },
    mc({ R, g, lvl }) { const item = findx.make({ R, g, lvl, n: 1 }).items[0]; return numericMc(R, `Giá trị của $x$ trong biểu thức $${item.eq}$ là:`, item.x); }
  };

  // ---------- 7. expressions ----------
  const expr = {
    id: 'expr', name: 'Tính giá trị biểu thức', grades: [3, 4, 5], defaults: [3, 4, 5], cols: 2, count: 4,
    make({ R, g, lvl, n }) {
      const items = [], big = g === 3 ? 90 : 900;
      for (let i = 0; i < n; i++) {
        const kind = R.int(1, g === 3 ? 4 : 6);
        let tex, js;
        const a = R.int(10, big), b = R.int(2, 9), c = R.int(2, 9), d = R.int(10, big);
        if (kind === 1) { tex = `${F(a)} + ${F(d)} \\times ${b}`; js = `${a}+${d}*${b}`; }
        else if (kind === 2) { tex = `(${F(a)} + ${F(d)}) \\times ${b}`; js = `(${a}+${d})*${b}`; }
        else if (kind === 3) { const sub = R.int(1, a * b - 1); tex = `${F(a)} \\times ${b} - ${F(sub)}`; js = `${a}*${b}-${sub}`; }
        else if (kind === 4) { const q = R.int(2, 12), dv = R.int(2, 9); tex = `${F(a + d)} - ${F(q * dv)} : ${dv}`; js = `${a + d}-${q * dv}/${dv}`; }
        else if (kind === 5) { const dv = R.int(2, 9), q = R.int(5, 60), tot = dv * q; tex = `(${F(tot + a)} - ${F(a)}) : ${dv} + ${c}`; js = `(${tot + a}-${a})/${dv}+${c}`; }
        else { tex = `${F(a)} \\times ${b} + ${F(d)} \\times ${c}`; js = `${a}*${b}+${d}*${c}`; }
        const value = Function('return ' + js)();
        items.push({ q: `$${tex} = \\ldots$`, a: `$${tex} = ${F(value)}$`, meta: { expr: js, value }, tex, value });
      }
      return { instr: 'Tính giá trị của biểu thức:', items, cols: 2 };
    },
    mc({ R, g, lvl }) { const item = expr.make({ R, g, lvl, n: 1 }).items[0]; return numericMc(R, `Giá trị của biểu thức $${item.tex}$ là:`, item.value); }
  };

  // ---------- 8. units ----------
  const T = u => `\\text{${u}}`;
  const UNITS = {
    2: [['m', 'dm', 10], ['dm', 'cm', 10], ['m', 'cm', 100], ['ngày', 'giờ', 24], ['giờ', 'phút', 60]],
    3: [['km', 'm', 1000], ['m', 'mm', 1000], ['cm', 'mm', 10], ['kg', 'g', 1000], ['l', 'ml', 1000], ['phút', 'giây', 60]],
    4: [['tấn', 'kg', 1000], ['tạ', 'kg', 100], ['yến', 'kg', 10], ['tấn', 'tạ', 10], ['giờ', 'phút', 60], ['phút', 'giây', 60], ['thế kỉ', 'năm', 100]],
    5: [['m', 'cm', 100], ['kg', 'g', 1000], ['km', 'm', 1000], ['ha', 'm²', 10000], ['km²', 'ha', 100], ['m²', 'dm²', 100], ['tấn', 'kg', 1000]]
  };
  const unitTex = u => u === 'm²' ? `${T('m')}^2` : u === 'dm²' ? `${T('dm')}^2` : u === 'km²' ? `${T('km')}^2` : u === 'cm²' ? `${T('cm')}^2` : T(u);
  const units = {
    id: 'unit', name: 'Đổi đơn vị đo', grades: [2, 3, 4, 5], defaults: [2, 3], cols: 3, count: 6,
    make({ R, g, lvl, n }) {
      const items = [], table = UNITS[g];
      for (let i = 0; i < n; i++) {
        const [big, small, f] = R.pick(table), toSmall = R.chance(0.55);
        let q, a, value, shown;
        if (g === 5 && f >= 10 && R.chance(0.5)) {   // decimal quantity, whole result
          const tenths = R.int(1, 99);
          shown = D(tenths, 1); value = tenths * f / 10;
          if (!Number.isInteger(value)) continue;
          q = `$${shown}\\ ${unitTex(big)} = \\ldots\\ ${unitTex(small)}$`; a = `$${shown}\\ ${unitTex(big)} = ${F(value)}\\ ${unitTex(small)}$`;
        } else if (toSmall) {
          const k = R.int(1, lvl ? 99 : 20); value = k * f;
          q = `$${F(k)}\\ ${unitTex(big)} = \\ldots\\ ${unitTex(small)}$`; a = `$${F(k)}\\ ${unitTex(big)} = ${F(value)}\\ ${unitTex(small)}$`;
        } else {
          const k = R.int(1, lvl ? 99 : 20); value = k;
          q = `$${F(k * f)}\\ ${unitTex(small)} = \\ldots\\ ${unitTex(big)}$`; a = `$${F(k * f)}\\ ${unitTex(small)} = ${F(k)}\\ ${unitTex(big)}$`;
        }
        items.push({ q, a, value, unit: toSmall ? small : big, meta: { value } });
      }
      while (items.length < n) items.push({ ...items[items.length % Math.max(1, items.length)] });
      return { instr: 'Viết số thích hợp vào chỗ chấm:', items, cols: 3 };
    },
    mc({ R, g, lvl }) { const b = units.make({ R, g, lvl, n: 1 }).items[0]; return numericMc(R, `Điền số thích hợp vào chỗ chấm: ${b.q.replace(/\\ldots/, '\\ldots')}`, b.value, { unit: '' }); }
  };

  // ---------- 9. clocks ----------
  const time = {
    id: 'time', name: 'Xem đồng hồ', grades: [1, 2, 3], defaults: [2], cols: 3, count: 3,
    make({ R, g, n, need }) {
      need('clock');
      const items = [], seen = new Set();
      while (items.length < n) {
        const h = R.int(1, 12), m = g === 1 ? 0 : g === 2 ? R.pick([0, 0, 30]) : R.pick([0, 15, 30, 45, 5, 10, 20, 25, 35, 40, 50, 55]);
        const key = h + ':' + m; if (seen.has(key)) continue; seen.add(key);
        const ha = Math.round((90 - 30 * (h % 12) - 0.5 * m) * 100) / 100, ma = 90 - 6 * m;
        const text = m === 0 ? `${h} giờ` : `${h} giờ ${m} phút`;
        items.push({ q: `\\wsclock{${ha}}{${ma}}\\\\ \\ldots\\ giờ${g > 1 ? ' \\ldots\\ phút' : ''}`, a: text, meta: { h, m, ha, ma } });
      }
      return { instr: 'Đồng hồ chỉ mấy giờ? Viết vào chỗ chấm:', items, cols: 3 };
    }
  };

  // ---------- 10. geometry ----------
  const geometry = {
    id: 'geometry', name: 'Hình học (chu vi, diện tích)', grades: [2, 3, 4, 5], defaults: [3, 4, 5], cols: 1, count: 3,
    make({ R, g, lvl, n, need }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        let q, a, meta;
        if (g === 2) {
          const x = R.int(3, 15), y = R.int(3, 15), z = R.int(3, 15);
          q = `Tính chu vi hình tam giác $ABC$, biết độ dài các cạnh là $${x}$ cm, $${y}$ cm và $${z}$ cm.`; a = `$${x} + ${y} + ${z} = ${x + y + z}$ (cm)`; meta = { value: x + y + z };
        } else if (g === 3) {
          const kind = R.int(1, 4), s = R.int(3, lvl ? 30 : 12);
          if (kind <= 2) {
            need('rect');
            const w = R.int(3, lvl ? 40 : 15), len = w + R.int(1, 12);
            if (kind === 1) { q = `Tính chu vi hình chữ nhật có chiều dài $${len}$ cm, chiều rộng $${w}$ cm.\\hfill\\wsrect{${len} cm}{${w} cm}`; a = `$(${len} + ${w}) \\times 2 = ${(len + w) * 2}$ (cm)`; meta = { value: (len + w) * 2 }; }
            else { q = `Tính diện tích hình chữ nhật có chiều dài $${len}$ cm, chiều rộng $${w}$ cm.\\hfill\\wsrect{${len} cm}{${w} cm}`; a = `$${len} \\times ${w} = ${len * w}$ ($\\text{cm}^2$)`; meta = { value: len * w }; }
          } else if (kind === 3) { q = `Tính chu vi hình vuông có cạnh $${s}$ cm.`; a = `$${s} \\times 4 = ${s * 4}$ (cm)`; meta = { value: s * 4 }; }
          else { q = `Tính diện tích hình vuông có cạnh $${s}$ cm.`; a = `$${s} \\times ${s} = ${s * s}$ ($\\text{cm}^2$)`; meta = { value: s * s }; }
        } else if (g === 4) {
          const kind = R.int(1, 3);
          if (kind === 1) { const base = R.int(5, 40), h = R.int(3, 30); q = `Một hình bình hành có độ dài đáy là $${base}$ cm và chiều cao là $${h}$ cm. Tính diện tích hình bình hành đó.`; a = `$${base} \\times ${h} = ${base * h}$ ($\\text{cm}^2$)`; meta = { value: base * h }; }
          else if (kind === 2) { const d1 = R.int(2, 25) * 2, d2 = R.int(3, 30); q = `Một hình thoi có độ dài hai đường chéo là $${d1}$ cm và $${d2}$ cm. Tính diện tích hình thoi đó.`; a = `$${d1} \\times ${d2} : 2 = ${d1 * d2 / 2}$ ($\\text{cm}^2$)`; meta = { value: d1 * d2 / 2 }; }
          else { const w = R.int(8, 90), len = w + R.int(5, 60); q = `Một mảnh vườn hình chữ nhật có chiều dài $${len}$ m, chiều rộng $${w}$ m. Tính chu vi và diện tích mảnh vườn.`; a = `Chu vi: $(${len} + ${w}) \\times 2 = ${(len + w) * 2}$ (m); diện tích: $${len} \\times ${w} = ${len * w}$ ($\\text{m}^2$)`; meta = { value: len * w }; }
        } else {
          const kind = R.int(1, 4);
          if (kind === 1) { const base = R.int(3, 30), h = R.int(2, 15) * 2; q = `Tính diện tích hình tam giác có độ dài đáy $${base}$ cm và chiều cao $${h}$ cm.`; a = `$${base} \\times ${h} : 2 = ${base * h / 2}$ ($\\text{cm}^2$)`; meta = { value: base * h / 2 }; }
          else if (kind === 2) { const a1 = R.int(4, 20), b1 = R.int(4, 20), h = R.int(2, 12) * 2; q = `Một hình thang có hai đáy dài $${a1}$ cm và $${b1}$ cm, chiều cao $${h}$ cm. Tính diện tích hình thang đó.`; a = `$(${a1} + ${b1}) \\times ${h} : 2 = ${(a1 + b1) * h / 2}$ ($\\text{cm}^2$)`; meta = { value: (a1 + b1) * h / 2 }; }
          else if (kind === 3) { const d = R.int(2, 30); q = `Một hình tròn có đường kính $${d}$ cm. Tính chu vi hình tròn đó (lấy $\\pi = 3{,}14$).`; a = `$${d} \\times 3{,}14 = ${D(d * 314, 2)}$ (cm)`; meta = { value: d * 314 / 100 }; }
          else { const r = R.int(2, 15); q = `Một hình tròn có bán kính $${r}$ cm. Tính diện tích hình tròn đó (lấy $\\pi = 3{,}14$).`; a = `$${r} \\times ${r} \\times 3{,}14 = ${D(r * r * 314, 2)}$ ($\\text{cm}^2$)`; meta = { value: r * r * 314 / 100 }; }
        }
        items.push({ q, a, meta });
      }
      return { instr: g === 2 ? 'Giải bài toán:' : 'Làm các bài toán sau:', items, cols: 1, long: true };
    }
  };

  // ---------- 11. fractions ----------
  const fractions = {
    id: 'fraction', name: 'Phân số', grades: [4, 5], defaults: [4, 5], cols: 3, count: 6,
    make({ R, g, lvl, n }) {
      const items = [];
      const show = f => f.d === 1 ? String(f.n) : dfrac(f.n, f.d);
      for (let i = 0; i < n; i++) {
        const kinds = g === 4 ? ['add', 'sub', 'simplify'].concat(lvl ? ['add2', 'sub2'] : []) : ['add', 'sub', 'mul', 'div', 'mulint'];
        const kind = R.pick(kinds);
        let tex, result;
        if (kind === 'add' || kind === 'sub') { const d = R.int(3, 12), lo = R.int(1, d - 2), hi = R.int(lo + 1, d - 1), a1 = kind === 'add' ? R.int(1, d - 1) : hi, b1 = kind === 'add' ? R.int(1, d - 1) : lo; tex = `${dfrac(a1, d)} ${kind === 'add' ? '+' : '-'} ${dfrac(b1, d)}`; result = frac(kind === 'add' ? a1 + b1 : a1 - b1, d); }
        else if (kind === 'add2' || kind === 'sub2') { const d = R.int(2, 6), k = R.int(2, 4), a = R.int(1, d * k - 1), b = R.int(1, d - 1); const top = kind === 'add2' ? a + b * k : Math.abs(a - b * k); tex = kind === 'add2' ? `${dfrac(a, d * k)} + ${dfrac(b, d)}` : (a >= b * k ? `${dfrac(a, d * k)} - ${dfrac(b, d)}` : `${dfrac(b, d)} - ${dfrac(a, d * k)}`); result = top === 0 ? { n: 0, d: 1 } : frac(top, d * k); }
        else if (kind === 'simplify') { const base = frac(R.int(1, 8), R.int(2, 9)); const k = R.int(2, 6); tex = `${dfrac(base.n * k, base.d * k)}`; result = base; }
        else if (kind === 'mul') { const a = R.int(1, 8), b = R.int(2, 9), c = R.int(1, 8), d = R.int(2, 9); tex = `${dfrac(a, b)} \\times ${dfrac(c, d)}`; result = frac(a * c, b * d); }
        else if (kind === 'div') { const a = R.int(1, 8), b = R.int(2, 9), c = R.int(1, 8), d = R.int(2, 9); tex = `${dfrac(a, b)} : ${dfrac(c, d)}`; result = frac(a * d, b * c); }
        else { const a = R.int(1, 8), b = R.int(2, 9), m = R.int(2, 9); tex = `${dfrac(a, b)} \\times ${m}`; result = frac(a * m, b); }
        items.push({ q: `$${tex} = \\ldots$`, a: `$${tex} = ${show(result)}$`, meta: { frac: [result.n, result.d] } });
      }
      return { instr: g === 4 ? 'Tính (viết kết quả dưới dạng phân số tối giản):' : 'Tính (rút gọn kết quả nếu có thể):', items, cols: 3 };
    }
  };

  // ---------- 12. decimals ----------
  const decimals = {
    id: 'decimal', name: 'Số thập phân', grades: [5], defaults: [5], cols: 3, count: 6,
    make({ R, lvl, n }) {
      const items = [], ops = ['+', '-', '×', ':'];
      for (let i = 0; i < n; i++) {
        const op = ops[i % 4], places = R.pick(lvl ? [1, 2] : [1]), scale = 10 ** places;
        let tex, result, rp = places;
        if (op === '+') { const a = R.int(scale, 99 * scale), b = R.int(scale, 99 * scale); tex = `${D(a, places)} + ${D(b, places)}`; result = a + b; }
        else if (op === '-') { const a = R.int(2 * scale, 99 * scale), b = R.int(scale, a - 1); tex = `${D(a, places)} - ${D(b, places)}`; result = a - b; }
        else if (op === '×') { const a = R.int(scale, 50 * scale), m = R.int(2, lvl ? 99 : 9); tex = `${D(a, places)} \\times ${m}`; result = a * m; }
        else { const q = R.int(scale, 50 * scale), d = R.int(2, 9); tex = `${D(q * d, places)} : ${d}`; result = q; }
        items.push({ q: `$${tex} = \\ldots$`, a: `$${tex} = ${D(result, rp)}$`, meta: { scaled: result, places: rp } });
      }
      return { instr: 'Tính:', items, cols: 3 };
    }
  };

  // ---------- 13. word problems ----------
  const NAMES = ['Lan', 'Mai', 'Nam', 'Hoa', 'Bình', 'An', 'Minh', 'Hà', 'Tuấn', 'Linh', 'Dũng', 'Hương'];
  const OBJECTS = ['apple', 'banana', 'orange', 'pear', 'strawberry', 'candy', 'cookie', 'egg', 'ball', 'balloon', 'pencil', 'book', 'notebook', 'star', 'blossom', 'kite', 'fish', 'duck', 'rabbit', 'chicken'];
  const word = {
    id: 'word', name: 'Toán có lời văn', grades: [1, 2, 3, 4, 5], defaults: [1, 2, 3, 4, 5], cols: 1, count: 3,
    make({ R, g, lvl, n, pic }) {
      const items = [], kinds = g === 1 ? ['add', 'sub', 'more'] : g === 2 ? ['add', 'sub', 'mul', 'div', 'more'] : g === 3 ? ['add', 'sub', 'mul', 'div', 'more', 'two'] : g === 4 ? ['add', 'sub', 'mul', 'div', 'two', 'rice', 'avg'] : ['two', 'rice', 'avg', 'percent', 'mul', 'div'];
      const order = R.shuffle(kinds);
      for (let i = 0; i < n; i++) {
        const kind = order[i % order.length], [A, B, C] = R.sample(NAMES, 3), id = R.pick(OBJECTS), vi = W.lib.get(id).vi;
        const pics = (k, scale) => Array.from({ length: k }, () => pic(id, scale)).join('\\,');
        const sol = (parts, r, unit) => `${parts.map(p => `$${p}$`).join('; ')}. Đáp số: $${F(r)}$ ${unit}.`;
        let q, a, value, picture = '';
        if (kind === 'add') { const [x, y, r] = pair('+', g, lvl, R); q = `${A} có $${F(x)}$ ${vi}, ${B} có $${F(y)}$ ${vi}. Hỏi cả hai bạn có tất cả bao nhiêu ${vi}?`; a = sol([`${F(x)} + ${F(y)} = ${F(r)}`], r, vi); value = r; if (r <= 12) picture = `\\par\\smallskip ${pics(x, 0.75)} $+$ ${pics(y, 0.75)}`; }
        else if (kind === 'sub') { const [x, y, r] = pair('-', g, lvl, R); q = `${A} có $${F(x)}$ ${vi}, ${A} cho ${B} $${F(y)}$ ${vi}. Hỏi ${A} còn lại bao nhiêu ${vi}?`; a = sol([`${F(x)} - ${F(y)} = ${F(r)}`], r, vi); value = r; if (x <= 12) picture = `\\par\\smallskip ${pics(x, 0.75)}`; }
        else if (kind === 'more') { const [x, y, r] = pair('-', g, lvl, R); q = `${A} có $${F(x)}$ ${vi}, ${B} có $${F(y)}$ ${vi}. Hỏi ${A} có nhiều hơn ${B} bao nhiêu ${vi}?`; a = sol([`${F(x)} - ${F(y)} = ${F(r)}`], r, vi); value = r; }
        else if (kind === 'mul') { const [x, y, r] = pair('×', Math.max(2, g), lvl, R); q = `Mỗi hộp có $${F(x)}$ ${vi}. Hỏi $${F(y)}$ hộp như vậy có tất cả bao nhiêu ${vi}?`; a = sol([`${F(x)} \\times ${F(y)} = ${F(r)}`], r, vi); value = r; }
        else if (kind === 'div') { const [x, y, r] = pair(':', Math.max(2, g), lvl, R); q = `Có $${F(x)}$ ${vi} chia đều vào $${F(y)}$ hộp. Hỏi mỗi hộp có bao nhiêu ${vi}?`; a = sol([`${F(x)} : ${F(y)} = ${F(r)}`], r, vi); value = r; }
        else if (kind === 'two') { const x = R.int(2, g === 3 ? 9 : 40), y = R.int(2, g === 3 ? 9 : 30), z = R.int(2, g === 3 ? 50 : 500); q = `Mỗi túi có $${x}$ ${vi}. ${A} mua $${y}$ túi và được tặng thêm $${z}$ ${vi}. Hỏi ${A} có tất cả bao nhiêu ${vi}?`; value = x * y + z; a = sol([`${x} \\times ${y} = ${x * y}`, `${x * y} + ${z} = ${value}`], value, vi); }
        else if (kind === 'rice') { const x = R.int(20, 900), y = R.int(5, 200); value = x + (x + y); q = `Buổi sáng một cửa hàng bán được $${F(x)}$ kg gạo, buổi chiều bán được nhiều hơn buổi sáng $${F(y)}$ kg gạo. Hỏi cả hai buổi cửa hàng bán được bao nhiêu ki-lô-gam gạo?`; a = sol([`${F(x)} + ${F(y)} = ${F(x + y)}\\ (\\text{kg})`, `${F(x)} + ${F(x + y)} = ${F(value)}`], value, 'kg'); }
        else if (kind === 'avg') { const m = R.int(5, 90), x = R.int(1, 2 * m), y = R.int(1, 3 * m - x - 1), z = 3 * m - x - y; q = `Ba bạn ${A}, ${B}, ${C} có lần lượt $${x}$, $${y}$, $${z}$ ${vi}. Hỏi trung bình mỗi bạn có bao nhiêu ${vi}?`; value = m; a = sol([`(${x} + ${y} + ${z}) : 3 = ${m}`], m, vi); }
        else { const total = R.pick([20, 40, 60, 80, 100, 200]), p = R.pick([10, 20, 25, 50]); value = total * p / 100; q = `Một lớp học có $${total}$ học sinh, trong đó $${p}\\%$ là học sinh giỏi. Hỏi lớp học đó có bao nhiêu học sinh giỏi?`; a = sol([`${total} \\times ${p} : 100 = ${value}`], value, 'học sinh'); }
        const text = kind === 'rice' || kind === 'percent' ? q : q;
        items.push({ q: `${text}${picture}`, a, value, meta: { value }, unit: kind === 'rice' ? 'kg' : kind === 'percent' ? 'học sinh' : vi, stem: q });
        if (g <= 2 && !picture) items[items.length - 1].q = `${text} \\hfill ${pic(id, 1.1)}`;
      }
      return { instr: g === 1 ? 'Giải bài toán (viết phép tính và đáp số):' : 'Giải bài toán:', items, cols: 1, long: true };
    },
    mc({ R, g, lvl, pic }) {
      const item = word.make({ R, g, lvl, n: 1, pic }).items[0];
      return numericMc(R, item.stem, item.value, { unit: item.unit });
    }
  };

  // ---------- 14. ordering ----------
  const order = {
    id: 'order', name: 'Sắp xếp thứ tự', grades: [1, 2, 3, 4, 5], defaults: [], cols: 1, count: 2,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const asc = R.chance(0.6);
        let values, text;
        if (g === 5) { values = R.sample(Array.from({ length: 80 }, (_, k) => 10 + k), 4); text = v => D(v, 1); }
        else { const max = g === 1 ? 20 : g === 2 ? 100 : g === 3 ? 1000 : 100000; values = R.sample(Array.from({ length: 40 }, (_, k) => Math.floor((k + 1) * max / 40)), 4); text = F; }
        const sorted = [...values].sort((a, b) => asc ? a - b : b - a);
        items.push({ q: `$${values.map(text).join(',\\ ')}$\\\\ ${asc ? 'Từ bé đến lớn' : 'Từ lớn đến bé'}: $\\ldots,\\ \\ldots,\\ \\ldots,\\ \\ldots$`, a: `$${sorted.map(text).join(' ; ')}$`, meta: { values, sorted, asc } });
      }
      return { instr: 'Sắp xếp các số sau theo thứ tự:', items, cols: 1, long: true };
    }
  };

  // ---------- 15. pictures: counting, adding with pictures, recognising shapes (lớp 1–2) ----------
  const counting = {
    id: 'count', name: 'Đếm hình', grades: [1, 2], defaults: [1], cols: 2, count: 4,
    make({ R, g, n, pic, lib }) {
      const items = [], ids = R.shuffle(lib.countable().filter(id => ['fruit', 'animal', 'toy', 'nature', 'school'].includes(lib.get(id).cat) && lib.get(id).cp));
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], k = R.int(g === 1 ? 2 : 5, g === 1 ? 9 : 15), vi = lib.get(id).vi;
        items.push({ q: `${Array.from({ length: k }, () => pic(id, k > 9 ? 0.8 : 1)).join('\\,')}\\\\ Có \\ldots\\ ${vi}.`, a: `${k} ${vi}`, meta: { value: k } });
      }
      return { instr: 'Đếm số hình rồi viết số vào chỗ chấm:', items, cols: g === 1 ? 2 : 1 };
    }
  };
  const picadd = {
    id: 'picadd', name: 'Cộng, trừ bằng hình', grades: [1], defaults: [1], cols: 1, count: 3,
    make({ R, n, pic, lib }) {
      const items = [], ids = R.shuffle(lib.countable().filter(id => ['fruit', 'animal', 'toy'].includes(lib.get(id).cat) && lib.get(id).cp));
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], plus = i % 2 === 0, x = R.int(2, 6), y = plus ? R.int(1, 10 - x) : R.int(1, x - 1), r = plus ? x + y : x - y;
        const row = k => Array.from({ length: k }, () => pic(id, 0.8)).join('\\,');
        items.push({ q: plus ? `${row(x)} $+$ ${row(y)} $=\\ \\boxed{\\phantom{00}}$` : `${row(x)} $-\\ ${y} =\\ \\boxed{\\phantom{00}}$`, a: `$${x} ${plus ? '+' : '-'} ${y} = ${r}$`, meta: { expr: `${x}${plus ? '+' : '-'}${y}`, value: r } });
      }
      return { instr: 'Nhìn hình, viết phép tính và kết quả vào ô trống:', items, cols: 1 };
    }
  };
  const shapes = {
    id: 'shapes', name: 'Nhận biết hình', grades: [1, 2], defaults: [1], cols: 1, count: 3,
    make({ R, n, pic }) {
      const kinds = [['shapecircle', 'hình tròn'], ['shapesquare', 'hình vuông'], ['shapetriangle', 'hình tam giác'], ['shaperectangle', 'hình chữ nhật']], items = [];
      for (let i = 0; i < n; i++) {
        const [id, name] = kinds[i % 4], row = Array.from({ length: 6 }, () => R.pick(kinds)), count = row.filter(k => k[0] === id).length || (row[R.int(0, 5)] = [id, name], 1);
        const final = row.filter(k => k[0] === id).length;
        items.push({ q: `Khoanh vào các ${name}: \\par\\smallskip ${row.map(k => pic(k[0], 1.3)).join('\\quad ')}`, a: `${final} ${name}`, meta: { value: final } });
        void count;
      }
      return { instr: 'Nhìn hình rồi làm theo yêu cầu:', items, cols: 1, long: false };
    }
  };


  // ---------- 16. lớp 1–2 workbook exercises: chains, blanks, signs, diagrams, matching ----------
  const SQ = '\\boxed{\\phantom{00}}', maxOf = (g, lvl) => g === 1 ? (lvl ? 20 : 10) : (lvl ? 100 : 20);
  const opSym = op => op;   // '+' and '-' print as they are in maths mode
  const chain3 = {
    id: 'chain3', name: 'Tính với ba số (3 + 1 + 4)', grades: [1, 2], defaults: [1], cols: 3, count: 9,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), items = [];
      for (let i = 0; i < n; i++) {
        const a = R.int(1, max), o1 = R.pick(['+', '-']), b = o1 === '+' ? R.int(0, max - a) : R.int(0, a), r1 = o1 === '+' ? a + b : a - b;
        const o2 = R.pick(['+', '-']), c = o2 === '+' ? R.int(0, max - r1) : R.int(0, r1), value = o2 === '+' ? r1 + c : r1 - c;
        items.push({ q: `$${a} ${opSym(o1)} ${b} ${opSym(o2)} ${c} = \\ldots$`, a: `$${a} ${o1} ${b} ${o2} ${c} = ${value}$`, meta: { expr: `${a}${o1}${b}${o2}${c}`, value } });
      }
      return { instr: 'Tính:', items, cols: 3 };
    }
  };
  const termOf = (R, max, want) => {   // "a + b" or "a - b" whose value is `want` (or any value when want is undefined)
    const plus = R.chance(0.5);
    if (want === undefined) { if (plus) { const a = R.int(0, max), b = R.int(0, max - a); return { tex: `${a} + ${b}`, v: a + b }; } const a = R.int(1, max), b = R.int(0, a); return { tex: `${a} - ${b}`, v: a - b }; }
    if (plus || want === max) { const a = R.int(0, want), b = want - a; return { tex: `${a} + ${b}`, v: want }; }
    const b = R.int(1, max - want); return { tex: `${want + b} - ${b}`, v: want };
  };
  const cmpexpr = {
    id: 'cmpexpr', name: 'So sánh hai phép tính (5 + 4 ○ 7 + 1)', grades: [1, 2], defaults: [1], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), items = [];
      for (let i = 0; i < n; i++) {
        const left = termOf(R, max), right = R.chance(0.3) ? termOf(R, max, left.v) : termOf(R, max), symbol = left.v > right.v ? '>' : left.v < right.v ? '<' : '=';
        items.push({ q: `$${left.tex}\\ \\boxed{\\phantom{>}}\\ ${right.tex}$`, a: `$${left.tex} ${symbol} ${right.tex}$`, meta: { cmp: [left.v, right.v], symbol } });
      }
      return { instr: 'Điền dấu $>$, $<$, $=$ thích hợp vào ô trống:', items, cols: 2 };
    }
  };
  const blanks = {
    id: 'blanks', name: 'Điền số vào ô trống (8 − ☐ = 4)', grades: [1, 2], defaults: [1], cols: 3, count: 9,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), items = [];
      for (let i = 0; i < n; i++) {
        let q, check, x;
        switch (R.int(0, 4)) {
          case 0: { const a = R.int(1, max - 1), b = R.int(1, max - a), c = a + b; q = `${a} + ${SQ} = ${c}`; check = `${a}+X===${c}`; x = b; break; }
          case 1: { const a = R.int(2, max), b = R.int(1, a - 1), c = a - b; q = `${a} - ${SQ} = ${c}`; check = `${a}-X===${c}`; x = b; break; }
          case 2: { const a = R.int(1, max - 1), b = R.int(1, max - a), c = a + b; q = `${SQ} + ${b} = ${c}`; check = `X+${b}===${c}`; x = a; break; }
          case 3: { const d = R.int(1, max - 1), e = R.int(0, max - d), sum = d + e, a = R.int(0, sum); q = `${a} + ${SQ} = ${d} + ${e}`; check = `${a}+X===${d}+${e}`; x = sum - a; break; }
          default: { const a = R.int(1, max - 1), b = R.int(1, max - a), sum = a + b, c = R.int(0, sum); q = `${a} + ${b} = ${SQ} + ${c}`; check = `${a}+${b}===X+${c}`; x = sum - c; }
        }
        items.push({ q: `$${q}$`, a: `$${x}$`, meta: { check, x } });
      }
      return { instr: 'Điền số thích hợp vào ô trống:', items, cols: 3 };
    }
  };
  const signs = {
    id: 'signs', name: 'Điền dấu + hoặc − vào ô trống', grades: [1, 2], defaults: [1], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), steps = lvl ? 3 : 2, items = [];
      while (items.length < n) {
        let value = R.int(2, max); const nums = [value], ops = [];
        for (let k = 0; k < steps; k++) {
          const options = []; if (value + 1 <= max) options.push('+'); if (value >= 1) options.push('-');
          const op = R.pick(options), b = op === '+' ? R.int(1, Math.min(max - value, 9)) : R.int(1, Math.min(value, 9));
          value = op === '+' ? value + b : value - b; ops.push(op); nums.push(b);
        }
        const boxes = nums.map((v, k) => k ? `\\boxed{\\phantom{+}}\\ ${v}` : String(v)).join('\\ ');
        const expr = nums.map((v, k) => (k ? ops[k - 1] : '') + v).join('');
        items.push({ q: `$${boxes} = ${value}$`, a: `$${nums.map((v, k) => (k ? ops[k - 1] + ' ' : '') + v).join(' ')} = ${value}$`, meta: { expr, value } });
      }
      return { instr: 'Điền dấu $+$, $-$ thích hợp vào ô trống:', items, cols: 2 };
    }
  };

  // a chain of numbers joined by arrows (-7, +6, …), some boxes already filled in
  function chainDiagram(R, g, lvl, zigzag) {
    const max = maxOf(g, lvl), steps = 5, values = [R.int(1, max)], ops = [];
    for (let k = 0; k < steps; k++) {
      const v = values[k], options = []; if (v < max) options.push('+'); if (v > 0) options.push('-');
      const op = R.pick(options), d = op === '+' ? R.int(1, Math.min(max - v, 9)) : R.int(0, Math.min(v, 9));
      ops.push(`${op}${d}`); values.push(op === '+' ? v + d : v - d);
    }
    const lastGiven = R.chance(0.5), shown = i => (lastGiven ? i === steps : i === 0);
    const pos = i => `(${(i * 2.4).toFixed(1)},${zigzag ? (i % 2 ? 0 : 1.3) : 0})`;
    const nodes = values.map((v, i) => `\\node[${zigzag ? 'circle' : 'rectangle'},draw,line width=0.8pt,minimum size=0.95cm,inner sep=1pt] (n${i}) at ${pos(i)} {${shown(i) ? `\\large ${v}` : ''}};`).join('\n');
    const arrows = ops.map((o, i) => `\\draw[->,>=stealth,line width=0.8pt] (n${i}) -- node[${zigzag ? (i % 2 ? 'above right' : 'below right') : 'above'},inner sep=2pt] {$${o}$} (n${i + 1});`).join('\n');
    return { tex: `\\begin{center}\\begin{tikzpicture}\n${nodes}\n${arrows}\n\\end{tikzpicture}\\end{center}`, values, ops, given: lastGiven ? steps : 0 };
  }
  const arrowChain = {
    id: 'arrowchain', name: 'Sơ đồ mũi tên (10 → − 7 → …)', grades: [1, 2], defaults: [], cols: 1, count: 2,
    make({ R, g, lvl, n }) {
      const diagrams = Array.from({ length: Math.min(3, n) }, () => chainDiagram(R, g, lvl, false));
      return { instr: 'Điền số thích hợp vào ô trống:', body: diagrams.map(d => d.tex).join('\n'), answer: diagrams.map((d, i) => `${i + 1}) ${d.values.join(', ')}`).join('; '), items: [], meta: { diagrams } };
    }
  };
  const zigzag = {
    id: 'zigzag', name: 'Sơ đồ vòng tròn lên xuống', grades: [1, 2], defaults: [], cols: 1, count: 1,
    make({ R, g, lvl, n }) {
      const diagrams = Array.from({ length: Math.min(2, n) }, () => chainDiagram(R, g, lvl, true));
      return { instr: 'Điền số thích hợp vào các vòng tròn:', body: diagrams.map(d => d.tex).join('\n'), answer: diagrams.map((d, i) => `${i + 1}) ${d.values.join(', ')}`).join('; '), items: [], meta: { diagrams } };
    }
  };

  // word problem in "Có / Thêm / Có tất cả" form, with five little cells for the calculation
  const ANSWER_CELLS = '\\begin{tabular}{|c|c|c|c|c|}\\hline \\rule{0pt}{0.8cm}\\makebox[0.8cm]{}&\\makebox[0.8cm]{}&\\makebox[0.8cm]{}&\\makebox[0.8cm]{}&\\makebox[0.8cm]{}\\\\ \\hline\\end{tabular}';
  const GIVE = ['quả táo', 'quả cam', 'cái kẹo', 'quả bóng', 'quyển vở', 'cái bút chì', 'bông hoa', 'quả trứng'];
  const storyExpr = {
    id: 'storyexpr', name: 'Viết phép tính (Có – Thêm – Có tất cả)', grades: [1, 2], defaults: [1], cols: 1, count: 1,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), rows = Math.max(1, Math.min(2, n)), items = [], stories = [];
      let body = '';
      for (let r = 0; r < rows; r++) {
        const things = R.sample(GIVE, 2), parts = [];
        ['add', 'sub'].forEach((kind, k) => {
          const total = R.int(Math.min(6, max - 1), max - 1), a = kind === 'add' ? R.int(2, total - 1) : total, b = kind === 'add' ? total - a : R.int(1, a - 1), result = kind === 'add' ? total : a - b;
          const has = kind === 'add' ? a : total, more = kind === 'add' ? b : b;
          stories.push({ kind, a: has, b: more, result });
          items.push({ q: '', a: `${has} ${kind === 'add' ? '+' : '-'} ${more} = ${result}`, meta: { expr: `${has}${kind === 'add' ? '+' : '-'}${more}`, value: result } });
          parts.push(`\\begin{minipage}[t]{0.47\\linewidth}${String.fromCharCode(97 + k)}) Có: ${has} ${things[k]}\\par\\smallskip\\hspace*{1.2em}${kind === 'add' ? 'Thêm' : 'Cho đi'}: ${more} ${things[k]}\\par\\smallskip\\hspace*{1.2em}${kind === 'add' ? 'Có tất cả' : 'Còn lại'}: \\ldots\\ ${things[k]}.\\par\\medskip${ANSWER_CELLS}\\end{minipage}`);
        });
        body += `\\noindent${parts.join('\\hfill')}\\par\\bigskip\n`;
      }
      return { instr: 'Viết phép tính thích hợp vào các ô trống:', body, answer: items.map((x, i) => `${String.fromCharCode(97 + i % 2)}) ${x.a}`).join('; '), items: [], meta: { stories } };
    }
  };

  // matching calculations with the same result
  function exprFor(R, result, max, avoid) {
    for (let t = 0; t < 40; t++) {
      const e = termOf(R, max, result);
      if (!avoid.has(e.tex)) { avoid.add(e.tex); return e.tex; }
    }
    return termOf(R, max, result).tex;
  }
  const matchExpr = {
    id: 'matchexpr', name: 'Nối hai phép tính có kết quả bằng nhau', grades: [1, 2], defaults: [], cols: 1, count: 1,
    make({ R, g, lvl }) {
      const max = maxOf(g, lvl), results = R.sample(Array.from({ length: max - 1 }, (_, i) => i + 2), 4), seen = new Set();
      const top = results.map(r => ({ r, tex: exprFor(R, r, max, seen) })), bottom = R.shuffle(results.map(r => ({ r, tex: exprFor(R, r, max, seen) })));
      const row = list => '\\noindent' + list.map(e => `\\fbox{\\rule{0pt}{0.7cm}\\ $${e.tex}$\\ }`).join('\\hfill') + '\\par';
      return { instr: 'Nối hai phép tính có kết quả bằng nhau:', body: `${row(top)}\\vspace{1.6cm}\n${row(bottom)}\\par\\medskip`,
        answer: top.map((e, i) => `$${e.tex}$ – $${bottom.find(b => b.r === e.r).tex}$`).join('; '), items: [], meta: { top, bottom } };
    }
  };
  const matchResult = {
    id: 'matchresult', name: 'Nối phép tính với kết quả đúng', grades: [1, 2], defaults: [], cols: 1, count: 1,
    make({ R, g, lvl }) {
      const max = maxOf(g, lvl), results = R.sample(Array.from({ length: max - 1 }, (_, i) => i + 2), 3), seen = new Set();
      const make3 = r => { const a = R.int(0, r), left = `${a} + ${r - a}`, extra = R.int(0, max - r); return { r, tex: `${left} + ${extra} - ${extra}` }; };
      const left = R.shuffle(results.map(r => lvl ? make3(r) : { r, tex: exprFor(R, r, max, seen) })), right = R.shuffle(results.map(r => ({ r, tex: exprFor(R, r, max, seen) })));
      const rows = results.map((r, i) => `\\fbox{\\rule{0pt}{0.7cm}\\ $${left[i].tex}$\\ } & \\tikz[baseline=-0.6ex]\\draw (0,0) circle (0.45) node {$${r}$}; & \\fbox{\\rule{0pt}{0.7cm}\\ $${right[i].tex}$\\ }`).join('\\\\[0.9cm]\n');
      return { instr: 'Nối phép tính với kết quả đúng:', body: `\\begin{center}\\begin{tabular}{c@{\\hspace{2.6cm}}c@{\\hspace{2.6cm}}c}\n${rows}\n\\end{tabular}\\end{center}`,
        answer: results.map(r => `${r}: $${left.find(e => e.r === r).tex}$ ; $${right.find(e => e.r === r).tex}$`).join('; '), items: [], meta: { results, left, right } };
    }
  };
  const trueFalse = {
    id: 'truefalse', name: 'Đúng ghi Đ, sai ghi S', grades: [1, 2], defaults: [], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), items = [];
      for (let i = 0; i < n; i++) {
        const term = termOf(R, max), correct = R.chance(0.5), claim = correct ? term.v : Math.max(0, term.v + R.pick([-2, -1, 1, 2])) === term.v ? term.v + 1 : Math.max(0, term.v + R.pick([-2, -1, 1, 2]));
        const right = claim === term.v;
        items.push({ q: `$${term.tex} = ${claim}$\\quad\\fbox{\\rule{0pt}{0.6cm}\\hspace{0.6cm}}`, a: `$${term.tex} = ${claim}$: ${right ? 'Đ' : 'S'}`, meta: { expr: term.tex.replace(/ /g, ''), value: term.v, claim } });
      }
      return { instr: 'Đúng ghi Đ, sai ghi S vào ô trống:', items, cols: 2 };
    }
  };

  // 3 x 3 numbers joined by signs along the rows and down the columns
  const gridCalc = {
    id: 'gridcalc', name: 'Bảng tính theo hàng ngang, cột dọc', grades: [1, 2], defaults: [], cols: 1, count: 1,
    make({ R, g, lvl, need }) {
      need('grid');
      const max = maxOf(g, lvl) > 20 ? 20 : maxOf(g, lvl);
      const line = (a, o1, b, o2, c) => { const r1 = o1 === '+' ? a + b : a - b; return r1 < 0 ? null : (o2 === '+' ? r1 + c : r1 - c); };
      let N, H, V, rowRes, colRes;
      for (let t = 0; t < 4000; t++) {
        N = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => R.int(0, Math.min(max, 9))));
        H = Array.from({ length: 3 }, () => [R.pick(['+', '-']), R.pick(['+', '-'])]); V = Array.from({ length: 3 }, () => [R.pick(['+', '-']), R.pick(['+', '-'])]);
        rowRes = N.map((row, i) => line(row[0], H[i][0], row[1], H[i][1], row[2])); colRes = [0, 1, 2].map(j => line(N[0][j], V[j][0], N[1][j], V[j][1], N[2][j]));
        if ([...rowRes, ...colRes].every(v => v !== null && v >= 0 && v <= max)) break;
        rowRes = null;
      }
      if (!rowRes) return null;
      const cell = (r, c) => {
        const ri = r / 2, ci = c / 2;
        if (r % 2 === 0 && r < 6) return c < 5 ? (c % 2 === 0 ? String(N[ri][ci]) : H[ri][(c - 1) / 2]) : c === 5 ? '=' : '';
        if (r % 2 === 1) return c % 2 === 0 && c < 5 ? V[ci][(r - 1) / 2] : c % 2 === 1 ? '\\cellcolor{black!12}' : '';
        if (r === 5) return c % 2 === 0 && c < 5 ? '=' : c % 2 === 1 ? '\\cellcolor{black!12}' : '';
        return c % 2 === 1 ? '\\cellcolor{black!12}' : '';
      };
      const rows = Array.from({ length: 7 }, (_, r) => Array.from({ length: 7 }, (_, c) => cell(r, c)).map(x => /^[+-]$|=/.test(x) && x !== '=' ? `$${x}$` : x === '=' ? '$=$' : x).join(' & ')).join('\\\\ \\hline\n');
      const body = `\\begin{center}\\renewcommand{\\arraystretch}{1.9}\\setlength{\\tabcolsep}{2pt}\\begin{tabular}{|*{7}{>{\\centering\\arraybackslash}p{0.95cm}|}}\\hline\n${rows}\\\\ \\hline\\end{tabular}\\end{center}`;
      return { instr: 'Thực hiện phép tính theo hàng ngang và theo cột dọc rồi điền kết quả vào ô trống:', body, answer: `hàng ngang: ${rowRes.join(', ')}; cột dọc: ${colRes.join(', ')}`, items: [], meta: { N, H, V, rowRes, colRes } };
    }
  };
  const threeSum = {
    id: 'threesum', name: 'Điền số: ba ô liền nhau có tổng bằng nhau', grades: [1, 2], defaults: [], cols: 1, count: 2,
    make({ R, g, lvl, n }) {
      const sums = lvl ? [15, 18, 20] : [9, 12, 15], rows = Math.max(1, Math.min(3, n)), seqs = [];
      let body = '';
      for (let r = 0; r < rows; r++) {
        const K = R.pick(sums), a = R.int(0, Math.min(K, 9)), b = R.int(0, Math.min(K - a, 9)), c = K - a - b;
        if (c > 9 && K > 18) { r--; continue; }
        const seq = Array.from({ length: 15 }, (_, i) => [a, b, c][i % 3]);
        const p1 = R.int(0, 14); let p2 = R.int(0, 14); while ((p2 - p1) % 3 === 0) p2 = R.int(0, 14);
        seqs.push({ K, seq });
        body += `\\par\\noindent Cộng ba số ở ba ô liền nhau đều bằng $${K}$:\\par\\smallskip\n\\noindent\\begin{tabular}{|*{15}{c|}}\\hline ${seq.map((v, i) => `\\rule{0pt}{0.85cm}\\makebox[0.5cm]{${i === p1 || i === p2 ? v : ''}}`).join(' & ')}\\\\ \\hline\\end{tabular}\\par\\medskip\n`;
      }
      return { instr: 'Điền số thích hợp vào ô trống:', body, answer: seqs.map((x, i) => `${i + 1}) ${x.seq.slice(0, 3).join(', ')} lặp lại`).join('; '), items: [], meta: { seqs } };
    }
  };
  const neighbours = {
    id: 'neighbour', name: 'Số liền trước, số liền sau', grades: [1, 2], defaults: [1], cols: 2, count: 4,
    make({ R, g, lvl, n }) {
      const max = maxOf(g, lvl), items = [];
      for (let i = 0; i < n; i++) {
        const v = R.int(1, max - 1), kind = i % 4;
        const forms = [[`Số liền trước của $${v}$ là: \\ldots`, v - 1, `X===${v}-1`], [`Số liền sau của $${v}$ là: \\ldots`, v + 1, `X===${v}+1`],
          [`Số $${v}$ là số liền trước của số: \\ldots`, v + 1, `X===${v}+1`], [`Số $${v}$ là số liền sau của số: \\ldots`, v - 1, `X===${v}-1`]];
        const [q, x, check] = forms[kind];
        items.push({ q, a: String(x), meta: { check, x } });
      }
      return { instr: 'Viết số thích hợp vào chỗ chấm:', items, cols: 2 };
    }
  };
  const picGroups = {
    id: 'picgroups', name: 'Nhìn hình viết phép tính cộng', grades: [1], defaults: [], cols: 1, count: 2,
    make({ R, n, pic, lib }) {
      const ids = R.shuffle(lib.countable().filter(id => ['fruit', 'animal', 'toy'].includes(lib.get(id).cat) && lib.get(id).cp)), items = [];
      let body = '';
      for (let i = 0; i < Math.max(1, Math.min(3, n)); i++) {
        const groups = R.int(2, 3), counts = Array.from({ length: groups }, () => R.int(1, 3)), id = ids[i % ids.length];
        const total = counts.reduce((x, y) => x + y, 0), cols = '|' + 'c|'.repeat(groups), cells = 2 * groups + 1;
        items.push({ q: '', a: `${counts.join(' + ')} = ${total}`, meta: { expr: counts.join('+'), value: total } });
        body += `\\begin{center}\\renewcommand{\\arraystretch}{1.6}\\begin{tabular}{${cols}}\\hline ${counts.map(k => `\\parbox[c]{3.6cm}{\\centering ${Array.from({ length: k }, () => pic(id, 0.95)).join('\\,')}}`).join(' & ')}\\\\ \\hline\\end{tabular}\\par\\medskip\n\\begin{tabular}{|${'c|'.repeat(cells)}}\\hline ${Array.from({ length: cells }, () => '\\rule{0pt}{0.8cm}\\makebox[0.8cm]{}').join(' & ')}\\\\ \\hline\\end{tabular}\\end{center}\n`;
      }
      return { instr: 'Dựa vào hình vẽ, viết phép tính cộng thích hợp vào các ô:', body, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; '), items: [] };
    }
  };


  // ---------- 17. thinking and IQ puzzles ----------
  const picPool = (lib, cats = ['fruit', 'animal', 'toy', 'nature', 'veg']) => lib.countable().filter(id => lib.get(id).cp && cats.includes(lib.get(id).cat) && id !== 'bee');
  const EMPTY_BOX = '\\fbox{\\rule{0pt}{1.2cm}\\rule{1.2cm}{0pt}}';
  // shared with the pre-school subject: a row of pictures that follows a pattern; the last ones are missing
  function patternBlock({ R, n, pic, lib, lvl, hideLast }) {
    const templates = lvl ? ['AAB', 'ABC', 'ABB', 'AABB', 'ABAC'] : ['AB', 'AAB', 'ABB'], items = [];
    let body = '';
    for (let i = 0; i < n; i++) {
      const kinds = R.sample(picPool(lib), 3), tpl = R.pick(templates), length = 8, seq = Array.from({ length }, (_, k) => kinds[tpl.charCodeAt(k % tpl.length) - 65]);
      const shown = seq.slice(0, length - hideLast), hidden = seq.slice(length - hideLast);
      items.push({ q: '', a: hidden.map(id => lib.get(id).vi).join(', '), meta: { seq, tpl, hideLast } });
      body += `\\noindent\\textbf{${i + 1}.}\\ ${shown.map(id => `\\fbox{\\rule{0pt}{1.2cm}\\ ${pic(id, 1)}\\ }`).join('\\ ')}\\ ${Array.from({ length: hideLast }, () => EMPTY_BOX).join('\\ ')}\\par\\bigskip\n`;
    }
    return { body, items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
  }
  const patternPic = {
    id: 'patternpic', name: 'Tìm hình tiếp theo (quy luật hình)', grades: [1, 2, 3], defaults: [], cols: 1, count: 3,
    make(ctx) { const { lvl } = ctx; return { instr: 'Nhìn quy luật, vẽ hoặc viết tên hình còn thiếu vào ô trống:', ...patternBlock({ ...ctx, hideLast: lvl ? 2 : 1 }) }; }
  };
  const oddNumber = {
    id: 'oddnumber', name: 'Tìm số khác loại', grades: [1, 2, 3, 4], defaults: [], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const max = g === 1 ? 20 : g === 2 ? 99 : 999, items = [];
      for (let i = 0; i < n; i++) {
        const kind = g === 1 ? 'parity' : R.pick(['parity', 'multiple']), k = kind === 'parity' ? 2 : R.pick(lvl ? [3, 4, 5, 6, 9] : [5, 10, 3]), mine = R.chance(0.5);
        const fits = v => (v % k === 0) === mine;   // the four that share the property
        const pool = Array.from({ length: max }, (_, v) => v + 1), same = R.sample(pool.filter(fits), 4), odd = R.pick(pool.filter(v => !fits(v)));
        const all = R.shuffle([...same, odd]);
        const why = kind === 'parity' ? (mine ? 'một số lẻ' : 'một số chẵn') : (mine ? `không chia hết cho ${k}` : `chia hết cho ${k}`);
        items.push({ q: `$${all.join(',\\ ')}$\\\\ Số khác loại: \\ldots`, a: `$${odd}$ (${why})`, meta: { value: odd, all } });
      }
      return { instr: 'Trong mỗi dãy số, tìm số khác loại với các số còn lại:', items, cols: 1, long: true };
    }
  };
  // 3 x 3 magic square: rows, columns and diagonals have the same sum
  const magic = {
    id: 'magic', name: 'Ô vuông kỳ diệu 3 × 3', grades: [2, 3, 4, 5], defaults: [], cols: 1, count: 1,
    make({ R, g, lvl, n }) {
      const base = [[2, 7, 6], [9, 5, 1], [4, 3, 8]], squares = [];
      let body = '', answer = [];
      for (let t = 0; t < Math.max(1, Math.min(2, n)); t++) {
        const step = g === 2 ? 1 : R.pick(lvl ? [2, 3, 4] : [1, 2]), add = R.int(0, g === 2 ? 4 : 10), turn = R.chance(0.5), flip = R.chance(0.5);
        let grid = base.map(row => row.map(v => v * step + add));
        if (turn) grid = grid[0].map((_, c) => grid.map(row => row[c]));
        if (flip) grid = grid.map(row => [...row].reverse());
        const sum = grid[0].reduce((x, y) => x + y, 0), keepRow = R.pick([0, 2]);
        const shown = (r, c) => (r === keepRow) || (r === 1 && c === 1);
        squares.push({ grid, sum });
        body += `\\begin{center}\\renewcommand{\\arraystretch}{1.2}\\begin{tabular}{|c|c|c|}\\hline\n${grid.map((row, r) => row.map((v, c) => `\\rule{0pt}{1cm}\\makebox[1cm]{\\Large ${shown(r, c) ? v : ''}}`).join(' & ')).join('\\\\ \\hline\n')}\\\\ \\hline\\end{tabular}\\par\\smallskip Tổng mỗi hàng, mỗi cột, mỗi đường chéo đều bằng $${sum}$.\\end{center}\n`;
        answer.push(grid.map(row => row.join(' ')).join(' / '));
      }
      return { instr: 'Điền các số thích hợp vào ô trống:', body, answer: answer.join('; '), items: [], meta: { squares } };
    }
  };
  // number pyramids: every number is the sum of the two below it
  const pyramid = {
    id: 'pyramid', name: 'Tháp số (hai số dưới cộng lại)', grades: [1, 2, 3], defaults: [], cols: 1, count: 2,
    make({ R, g, lvl, n }) {
      const max = g === 1 ? (lvl ? 6 : 4) : g === 2 ? 12 : 30, towers = [];
      const nodes = (v, hidden) => {
        const at = [[1.6, 2.4, 'top'], [0.8, 1.2, 'm1'], [2.4, 1.2, 'm2'], [0, 0, 'a'], [1.6, 0, 'b'], [3.2, 0, 'c']];
        return at.map(([x, y, key]) => `\\node[draw,minimum width=1.4cm,minimum height=1cm,${hidden.has(key) ? '' : 'font=\\Large'}] at (${x},${y}) {${hidden.has(key) ? '' : v[key]}};`).join('\n');
      };
      let body = '';
      const shownTowers = Math.max(2, Math.min(4, n));
      for (let t = 0; t < shownTowers; t++) {
        const a = R.int(1, max), b = R.int(1, max), c = R.int(1, max), v = { a, b, c, m1: a + b, m2: b + c, top: a + 2 * b + c };
        const hidden = new Set(R.pick([['top', 'm1', 'm2'], ['a', 'm2', 'b'], ['a', 'c', 'top'], ['m1', 'b', 'c']]));
        // the shown numbers must be enough to work the rest out: this is true for every set above
        towers.push({ v, hidden: [...hidden] });
        body += `\\begin{tikzpicture}[scale=0.82,baseline=0]\n${nodes(v, hidden)}\n\\end{tikzpicture}${t % 2 ? '\\par\\bigskip' : '\\hfill'}\n`;
      }
      return { instr: 'Điền số thích hợp vào ô trống (mỗi số ở hàng trên bằng tổng hai số ở ngay dưới nó):', body: `\\noindent ${body}`, answer: towers.map((x, i) => `${i + 1}) đáy ${x.v.a}, ${x.v.b}, ${x.v.c}; giữa ${x.v.m1}, ${x.v.m2}; đỉnh ${x.v.top}`).join('; '), items: [], meta: { towers } };
    }
  };
  const picEquation = {
    id: 'picequation', name: 'Hình nào có giá trị bao nhiêu?', grades: [1, 2, 3], defaults: [], cols: 1, count: 2,
    make({ R, g, lvl, n, pic, lib }) {
      const ids = picPool(lib, ['fruit', 'animal']), sets = [], max = g === 1 ? 5 : g === 2 ? 9 : 20;
      let body = '';
      for (let t = 0; t < Math.max(1, Math.min(2, n)); t++) {
        const [A, B, C] = R.sample(ids, 3), x = R.int(1, max), y = R.int(1, max), z = R.int(1, max), p = id => pic(id, 0.9);
        sets.push({ x, y, z, ids: [A, B, C], value: x + y + z });
        body += `\\begin{center}\\renewcommand{\\arraystretch}{1.5}\\begin{tabular}{l}\n${p(A)} $+$ ${p(A)} $= ${2 * x}$\\\\\n${p(A)} $+$ ${p(B)} $= ${x + y}$\\\\\n${p(B)} $+$ ${p(C)} $= ${y + z}$\\\\\n${p(A)} $+$ ${p(B)} $+$ ${p(C)} $=\\ \\boxed{\\phantom{00}}$\n\\end{tabular}\\end{center}\n`;
      }
      return { instr: 'Mỗi hình ứng với một số. Tìm số ứng với mỗi hình rồi điền kết quả vào ô trống:', body, answer: sets.map((q, i) => `${i + 1}) ${q.x}, ${q.y}, ${q.z}; tổng ${q.value}`).join('; '), items: [], meta: { sets } };
    }
  };
  // brain teasers with a computed answer
  const NAMES2 = ['An', 'Bình', 'Chi', 'Dũng', 'Hà', 'Lan', 'Minh', 'Nam'];
  const riddle = {
    id: 'riddle', name: 'Câu đố vui, tư duy (IQ)', grades: [1, 2, 3, 4, 5], defaults: [], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const kinds = ['height', 'week', 'cut', 'legs', 'digits', 'age', 'hands'].filter(k => ({ height: 1, week: 1, cut: 2, digits: 2, legs: 3, age: 3, hands: 4 })[k] <= g);
      const order = R.shuffle(kinds), items = [];
      for (let i = 0; i < n; i++) {
        const kind = order[i % order.length], [A, B, C] = R.sample(NAMES2, 3);
        let q, a, value;
        if (kind === 'height') { q = `${A} cao hơn ${B}, ${B} cao hơn ${C}. Hỏi ai cao nhất? Ai thấp nhất?`; a = `${A} cao nhất, ${C} thấp nhất`; value = A; }
        else if (kind === 'week') { const days = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Chủ nhật'], d = R.int(0, 6), k = R.int(2, 6), ask = days[(d + k) % 7]; q = `Hôm nay là thứ ${days[d] === 'Chủ nhật' ? 'Chủ nhật' : days[d]}. Hỏi sau $${k}$ ngày nữa là thứ mấy?`.replace('thứ Chủ nhật', 'Chủ nhật'); value = ask; a = ask === 'Chủ nhật' ? 'Chủ nhật' : `thứ ${ask}`; }
        else if (kind === 'cut') { const len = R.int(3, g > 3 ? 20 : 9); q = `Một sợi dây dài $${len}$ m được cắt thành các đoạn dài $1$ m. Hỏi phải cắt mấy nhát?`; value = len - 1; a = `$${value}$ nhát`; }
        else if (kind === 'legs') { const c = R.int(2, 9 + (lvl ? 6 : 0)), r = R.int(2, 9 + (lvl ? 6 : 0)); q = `Có $${c + r}$ con gà và thỏ, đếm được $${2 * c + 4 * r}$ cái chân. Hỏi có bao nhiêu con thỏ?`; value = r; a = `$${r}$ con thỏ ($${c}$ con gà)`; }
        else if (kind === 'digits') { const sum = R.int(6, 15), diff = R.pick([1, 2, 3, 4].filter(d => (sum + d) % 2 === 0 && (sum + d) / 2 <= 9 && (sum - d) / 2 >= 0)), tens = (sum + diff) / 2, units = (sum - diff) / 2; q = `Số có hai chữ số, tổng hai chữ số bằng $${sum}$, chữ số hàng chục hơn chữ số hàng đơn vị $${diff}$. Tìm số đó.`; value = tens * 10 + units; a = `$${value}$`; }
        else if (kind === 'age') { const gap = R.int(20, 35), years = R.int(3, 12); q = `Hiện nay mẹ hơn ${A} $${gap}$ tuổi. Hỏi sau $${years}$ năm nữa, mẹ hơn ${A} bao nhiêu tuổi?`; value = gap; a = `$${gap}$ tuổi (hiệu số tuổi không đổi)`; }
        else { const people = R.int(4, lvl ? 12 : 8); q = `Trong một buổi gặp mặt có $${people}$ bạn, mỗi hai bạn bắt tay nhau đúng một lần. Hỏi có tất cả bao nhiêu cái bắt tay?`; value = people * (people - 1) / 2; a = `$${value}$ cái`; }
        items.push({ q, a, meta: { value, kind } });
      }
      return { instr: 'Giải câu đố (suy nghĩ thật kĩ nhé!):', items, cols: 1, long: true };
    }
  };
  const iqSequence = {
    id: 'iqsequence', name: 'Tìm quy luật của dãy số', grades: [2, 3, 4, 5], defaults: [], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const items = [], kinds = ['grow', 'double', 'alt', 'fib', 'square'].filter(k => g > 2 || ['grow', 'alt', 'double'].includes(k)), order = R.shuffle(kinds);
      for (let i = 0; i < n; i++) {
        const kind = order[i % order.length]; let terms = [];
        if (kind === 'grow') { const a = R.int(1, 8), d = R.int(1, 2); let v = a, step = d; for (let k = 0; k < 7; k++) { terms.push(v); v += step; step += 1; } }
        else if (kind === 'double') { const a = R.int(1, 4), m = R.pick(g > 3 ? [2, 3] : [2]); terms = Array.from({ length: 7 }, (_, k) => a * m ** k); }
        else if (kind === 'alt') { const a = R.int(10, 30), p = R.int(2, 5), q = R.int(1, p - 1); let v = a; for (let k = 0; k < 7; k++) { terms.push(v); v += k % 2 === 0 ? p : -q; } }
        else if (kind === 'fib') { const a = R.int(1, 4), b = R.int(1, 4); terms = [a, b]; while (terms.length < 7) terms.push(terms.at(-1) + terms.at(-2)); }
        else { const a = R.int(1, 4); terms = Array.from({ length: 7 }, (_, k) => (a + k) ** 2); }
        const shown = terms.slice(0, 5), next = terms.slice(5, 7);
        items.push({ q: `$${shown.map(F).join(',\\ ')},\\ \\ldots,\\ \\ldots$`, a: `$${next.map(F).join(';\\ ')}$`, meta: { series: terms, kind } });
      }
      return { instr: 'Tìm quy luật rồi viết tiếp hai số vào chỗ chấm:', items, cols: 1, long: false };
    }
  };
  const countSquares = {
    id: 'countsquares', name: 'Đếm hình (có bao nhiêu hình vuông, hình chữ nhật?)', grades: [2, 3, 4, 5], defaults: [], cols: 1, count: 2,
    make({ R, lvl, n }) {
      const items = []; let body = '';
      for (let i = 0; i < Math.max(1, Math.min(2, n)); i++) {
        const square = R.chance(0.5) || !lvl, a = square ? R.int(2, lvl ? 4 : 3) : R.int(2, 3), b = square ? a : a + R.int(1, 2);
        const value = square ? Array.from({ length: a }, (_, k) => (k + 1) ** 2).reduce((x, y) => x + y, 0) : (a * (a + 1) / 2) * (b * (b + 1) / 2);
        items.push({ q: '', a: `${value} hình ${square ? 'vuông' : 'chữ nhật'}`, meta: { value, a, b, square } });
        body += `\\begin{center}\\begin{tikzpicture}[scale=0.9]\\draw[line width=1pt] (0,0) grid (${b},${a});\\end{tikzpicture}\\par\\medskip Có tất cả \\ldots\\ hình ${square ? 'vuông (kể cả hình vuông ghép từ các ô nhỏ)' : 'chữ nhật (kể cả hình vuông)'}.\\end{center}\n`;
      }
      return { instr: 'Quan sát hình rồi đếm:', body, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; '), items: [] };
    }
  };


  // ---------- 18. more variety: Roman numerals, rounding, fractions in pictures, number lines, dice, divisibility, time ----------
  const toRoman = v => [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']].reduce((out, [n, r]) => { while (v >= n) { out += r; v -= n; } return out; }, '');
  const fromRoman = text => [...text].reduce((sum, ch, i, a) => { const val = { I: 1, V: 5, X: 10 }, cur = val[ch], next = val[a[i + 1]] || 0; return sum + (cur < next ? -cur : cur); }, 0);
  const roman = {
    id: 'roman', name: 'Số La Mã', grades: [3, 4, 5], defaults: [], cols: 3, count: 9,
    make({ R, lvl, n }) {
      const max = lvl ? 30 : 12, items = [];
      for (let i = 0; i < n; i++) {
        const v = R.int(1, max), r = toRoman(v);
        items.push(i % 2 === 0 ? { q: `$${v} = \\ldots$ (số La Mã)`, a: r, meta: { value: v, roman: r } } : { q: `${r} $= \\ldots$`, a: String(v), meta: { value: v, roman: r } });
      }
      return { instr: 'Viết các số sau bằng số La Mã hoặc số tự nhiên:', items, cols: 3 };
    }
  };
  const rounding = {
    id: 'rounding', name: 'Làm tròn số', grades: [3, 4, 5], defaults: [], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const items = [], places = g === 3 ? [10] : g === 4 ? [10, 100, 1000] : [10, 100, 1000];
      for (let i = 0; i < n; i++) {
        const place = R.pick(lvl ? places : places.slice(0, 2)), v = R.int(place + 1, g === 3 ? 999 : g === 4 ? 99999 : 999999), value = Math.round(v / place) * place;
        const name = place === 10 ? 'hàng chục' : place === 100 ? 'hàng trăm' : 'hàng nghìn';
        items.push({ q: `Làm tròn số $${F(v)}$ đến ${name}: \\ldots`, a: `$${F(value)}$`, meta: { value, n: v, place } });
      }
      return { instr: 'Làm tròn các số sau (từ 5 trở lên thì làm tròn lên):', items, cols: 2 };
    }
  };
  const fractionPic = {
    id: 'fractionpic', name: 'Phân số bằng hình tô màu', grades: [3, 4], defaults: [], cols: 3, count: 6,
    make({ R, n, bw }) {
      const fill = bw ? 'black!30' : 'orange!60', items = [];
      for (let i = 0; i < n; i++) {
        const d = R.int(2, 8), m = R.int(1, d - 1), round = R.chance(0.4);
        const parts = round
          ? Array.from({ length: d }, (_, k) => `\\${k < m ? 'filldraw[fill=' + fill + ']' : 'draw'} (0,0) -- (${(90 - 360 * k / d).toFixed(2)}:0.9) arc (${(90 - 360 * k / d).toFixed(2)}:${(90 - 360 * (k + 1) / d).toFixed(2)}:0.9) -- cycle;`).join('')
          : Array.from({ length: d }, (_, k) => `\\${k < m ? 'filldraw[fill=' + fill + ']' : 'draw'} (${(k * 2.4 / d).toFixed(3)},0) rectangle (${((k + 1) * 2.4 / d).toFixed(3)},0.8);`).join('');
        items.push({ q: `\\begin{tikzpicture}[baseline=0,line width=0.8pt]${parts}\\end{tikzpicture}\\\\ Phân số chỉ phần tô màu: $\\ldots$`, a: `$\\dfrac{${m}}{${d}}$`, meta: { m, d } });
      }
      return { instr: 'Viết phân số chỉ phần đã tô màu của mỗi hình:', items, cols: 3 };
    }
  };
  const fmtTime = mins => { const h = Math.floor(mins / 60), m = mins % 60; return m ? `${h} giờ ${m} phút` : `${h} giờ`; };
  const duration = {
    id: 'duration', name: 'Tính thời gian (kết thúc lúc mấy giờ?)', grades: [3, 4, 5], defaults: [], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const start = R.int(6, 15) * 60 + R.pick(lvl ? [0, 15, 30, 45, 10, 20, 40, 50] : [0, 15, 30, 45]), len = R.pick(lvl ? [25, 35, 45, 70, 85, 100, 130] : [15, 30, 45, 60, 90]), end = start + len;
        const kind = i % 2;
        items.push(kind === 0
          ? { q: `Bạn Nam bắt đầu làm bài lúc ${fmtTime(start)}, làm trong $${len}$ phút. Hỏi bạn Nam làm xong lúc mấy giờ?`, a: fmtTime(end), meta: { value: end } }
          : { q: `Một buổi học bắt đầu lúc ${fmtTime(start)} và kết thúc lúc ${fmtTime(end)}. Hỏi buổi học kéo dài bao nhiêu phút?`, a: `$${len}$ phút`, meta: { value: len } });
      }
      return { instr: 'Giải các bài toán về thời gian:', items, cols: 1, long: true };
    }
  };
  const numberLine = {
    id: 'numberline', name: 'Điền số trên tia số', grades: [1, 2, 3], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const step = g === 1 ? (lvl ? 2 : 1) : g === 2 ? R.pick(lvl ? [5, 10] : [10]) : R.pick(lvl ? [50, 100] : [100]), lines = [];
      let body = '';
      for (let t = 0; t < n; t++) {
        const first = g === 1 ? R.int(0, lvl ? 10 : 4) : step * R.int(0, 5), values = Array.from({ length: 8 }, (_, i) => first + i * step), blank = new Set(R.sample([1, 2, 3, 4, 5, 6], 3));
        lines.push(values);
        const marks = values.map((v, i) => `\\draw (${i * 1.8},-0.15) -- (${i * 1.8},0.15);\\node[${blank.has(i) ? 'draw,minimum size=0.85cm' : ''}] at (${i * 1.8},-0.75) {${blank.has(i) ? '' : v}};`).join('');
        body += `\\begin{center}\\begin{tikzpicture}[scale=0.95]\\draw[->,>=stealth,line width=0.9pt] (-0.4,0) -- (${7 * 1.8 + 0.6},0);${marks}\\end{tikzpicture}\\end{center}\n`;
      }
      return { instr: 'Điền số thích hợp vào ô trống trên tia số:', body, answer: lines.map((v, i) => `${i + 1}) ${v.join(', ')}`).join('; '), items: [], meta: { lines } };
    }
  };
  const DOTS = { 1: [[0, 0]], 2: [[-1, 1], [1, -1]], 3: [[-1, 1], [0, 0], [1, -1]], 4: [[-1, 1], [1, 1], [-1, -1], [1, -1]], 5: [[-1, 1], [1, 1], [0, 0], [-1, -1], [1, -1]], 6: [[-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1]] };
  const dieTikz = (k, size = 1) => `\\tikz[baseline=-0.5ex,scale=${size}]{\\draw[rounded corners=3pt,line width=0.9pt,fill=white] (-0.55,-0.55) rectangle (0.55,0.55);${DOTS[k].map(([x, y]) => `\\fill (${x * 0.27},${y * 0.27}) circle (0.09);`).join('')}}`;
  const dice = {
    id: 'dice', name: 'Cộng số chấm trên xúc xắc', grades: [1, 2], defaults: [], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const a = R.int(1, 6), b = R.int(1, 6), c = lvl || g === 2 ? R.int(1, 6) : 0, value = a + b + c;
        items.push({ q: `${dieTikz(a)} $+$ ${dieTikz(b)}${c ? ` $+$ ${dieTikz(c)}` : ''} $=\\ \\boxed{\\phantom{00}}$`, a: `$${a} + ${b}${c ? ` + ${c}` : ''} = ${value}$`, meta: { expr: `${a}+${b}${c ? '+' + c : ''}`, value } });
      }
      return { instr: 'Đếm số chấm trên mỗi mặt xúc xắc rồi điền kết quả:', items, cols: 2 };
    }
  };
  const divisible = {
    id: 'divisible', name: 'Dấu hiệu chia hết (2, 3, 5, 9)', grades: [4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const k = R.pick(lvl ? [2, 3, 5, 9] : [2, 5, 3]), nums = Array.from({ length: 6 }, () => R.int(10, g === 4 ? 999 : 9999)), yes = nums.filter(v => v % k === 0);
        items.push({ q: `Trong các số $${nums.join(',\\ ')}$, những số chia hết cho $${k}$ là: \\ldots`, a: yes.length ? `$${yes.join(',\\ ')}$` : 'không có số nào', meta: { k, nums, yes } });
      }
      return { instr: 'Tìm các số chia hết cho số đã cho:', items, cols: 1, long: true };
    }
  };


  // ---------- 19. advanced lớp 2 (gifted-student themes): parts of a calculation, calendar, ages, digits, quick sums ----------
  const termsOf = {
    id: 'terms', name: 'Số hạng, tổng, số bị trừ, số trừ, hiệu (tìm thành phần chưa biết)', grades: [1, 2], defaults: [], cols: 1, count: 4,
    make({ R, g, lvl, n }) {
      const items = [], max = g === 1 ? (lvl ? 20 : 10) : lvl ? 100 : 50;
      for (let i = 0; i < n; i++) {
        const a = R.int(Math.min(5, max - 3), max - 2), b = R.int(1, Math.max(1, max - a)), sum = a + b, kind = i % 4;
        const forms = [
          [`Tổng của hai số là $${sum}$, một số hạng là $${a}$. Tìm số hạng kia.`, b, 'số hạng'],
          [`Số bị trừ là $${sum}$, số trừ là $${a}$. Tìm hiệu.`, sum - a, 'hiệu'],
          [`Hiệu là $${b}$, số trừ là $${a}$. Tìm số bị trừ.`, sum, 'số bị trừ'],
          [`Số bị trừ là $${sum}$, hiệu là $${b}$. Tìm số trừ.`, a, 'số trừ']];
        const [q, value, what] = forms[kind];
        items.push({ q, a: `${what} bằng $${value}$`, meta: { value, kind } });
      }
      return { instr: 'Tìm thành phần chưa biết của phép tính:', items, cols: 1, long: true };
    }
  };
  const DAYS = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Chủ nhật'], dayName = d => d === 6 ? 'Chủ nhật' : `thứ ${DAYS[d]}`;
  const calendarProblem = {
    id: 'calendar', name: 'Bài toán về lịch (ngày, thứ, tháng)', grades: [2, 3], defaults: [], cols: 1, count: 4,
    make({ R, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const kind = i % 3;
        if (kind === 0) { const d = R.int(0, 6), day = R.int(1, 10), later = R.int(2, 18); items.push({ q: `Ngày $${day}$ tháng này là ${dayName(d)}. Hỏi ngày $${day + later}$ tháng này là thứ mấy?`, a: dayName((d + later) % 7), meta: { value: (d + later) % 7 } }); }
        else if (kind === 1) { const len = R.pick([28, 30, 31]), d = R.int(0, 6); const sundays = Array.from({ length: len }, (_, k) => (d + k) % 7).filter(x => x === 6).length; items.push({ q: `Một tháng có $${len}$ ngày, ngày $1$ của tháng là ${dayName(d)}. Hỏi tháng đó có mấy ngày Chủ nhật?`, a: `$${sundays}$ ngày`, meta: { value: sundays } }); }
        else { const w = R.int(2, lvl ? 6 : 4); items.push({ q: `Một tuần lễ có $7$ ngày. Hỏi $${w}$ tuần lễ có bao nhiêu ngày?`, a: `$${7 * w}$ ngày`, meta: { value: 7 * w } }); }
      }
      return { instr: 'Giải các bài toán về lịch:', items, cols: 1, long: true };
    }
  };
  const ageProblem = {
    id: 'ageprob', name: 'Bài toán tính tuổi', grades: [2, 3], defaults: [], cols: 1, count: 3,
    make({ R, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const [A, B] = R.sample(NAMES2, 2), a = R.int(5, 9), gap = R.int(2, lvl ? 8 : 5), years = R.int(2, 5), kind = i % 3;
        if (kind === 0) items.push({ q: `${A} $${a}$ tuổi, anh của ${A} hơn ${A} $${gap}$ tuổi. Hỏi anh của ${A} bao nhiêu tuổi?`, a: `$${a + gap}$ tuổi`, meta: { value: a + gap } });
        else if (kind === 1) items.push({ q: `Năm nay ${A} $${a}$ tuổi. Hỏi sau $${years}$ năm nữa ${A} bao nhiêu tuổi?`, a: `$${a + years}$ tuổi`, meta: { value: a + years } });
        else items.push({ q: `Năm nay ${B} $${a + gap}$ tuổi, ${A} kém ${B} $${gap}$ tuổi. Hỏi $${years}$ năm trước ${A} bao nhiêu tuổi?`, a: `$${Math.max(0, a - years)}$ tuổi`, meta: { value: Math.max(0, a - years) } });
      }
      return { instr: 'Giải các bài toán về tuổi:', items, cols: 1, long: true };
    }
  };
  const digitNumbers = {
    id: 'digitnum', name: 'Lập số từ các chữ số cho trước', grades: [2, 3], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const digits = R.sample([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), all = [];
        for (const a of digits) for (const b of digits) if (a !== b) all.push(a * 10 + b);
        all.sort((x, y) => x - y);
        items.push({ q: `Từ ba chữ số $${digits.join(',\\ ')}$, viết tất cả các số có hai chữ số khác nhau. Có tất cả \\ldots\\ số. Số lớn nhất là \\ldots, số bé nhất là \\ldots`, a: `$${all.join(';\\ ')}$ (${all.length} số); lớn nhất $${all.at(-1)}$, bé nhất $${all[0]}$`, meta: { digits, all, value: all.length } });
      }
      return { instr: 'Lập số:', items, cols: 1, long: true };
    }
  };
  const quickSum = {
    id: 'quicksum', name: 'Tính nhanh (ghép tròn chục)', grades: [1, 2, 3], defaults: [], cols: 2, count: 6,
    make({ R, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const t = R.int(1, 9), u = R.int(1, 9), pairs = lvl ? 3 : 2, parts = [];
        for (let k = 0; k < pairs; k++) { const a = R.int(1, 9); parts.push(a, 10 - a); }
        const nums = R.shuffle(parts), value = nums.reduce((x, y) => x + y, 0);
        void t; void u;
        items.push({ q: `$${nums.join(' + ')} = \\ldots$`, a: `$${nums.join(' + ')} = ${value}$`, meta: { expr: nums.join('+'), value } });
      }
      return { instr: 'Tính nhanh bằng cách ghép các số có tổng bằng $10$:', items, cols: 2 };
    }
  };


  // ---------- 20. advanced lớp 3–5 themes: equal fractions, averages, forming numbers, sum–difference/ratio, motion, working backward ----------
  const equalFractions = {
    id: 'equalfrac', name: 'Phân số bằng nhau (rút gọn, quy đồng)', grades: [4, 5], defaults: [], cols: 2, count: 6,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const base = frac(R.int(1, 7), R.int(2, 9)), k = R.int(2, lvl ? 9 : 5), m = R.int(2, 6);
        if (i % 2 === 0) items.push({ q: `$${dfrac(base.n, base.d)} = \\dfrac{\\ldots}{${base.d * k}}$`, a: `$${dfrac(base.n, base.d)} = ${dfrac(base.n * k, base.d * k)}$`, meta: { frac: [base.n, base.d], k } });
        else items.push({ q: `Rút gọn: $${dfrac(base.n * m, base.d * m)} = \\ldots$`, a: `$${dfrac(base.n, base.d)}$`, meta: { frac: [base.n, base.d], m } });
      }
      return { instr: 'Điền số thích hợp vào chỗ chấm:', items, cols: 2 };
    }
  };
  const average = {
    id: 'average', name: 'Trung bình cộng', grades: [4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const count = R.int(3, lvl ? 5 : 4), mean = R.int(10, g === 4 ? 90 : 200), nums = Array.from({ length: count - 1 }, () => R.int(Math.floor(mean / 2), Math.floor(mean * 1.5)));
        nums.push(mean * count - nums.reduce((x, y) => x + y, 0));
        if (nums.at(-1) <= 0) { i--; continue; }
        items.push(i % 2 === 0 ? { q: `Tìm trung bình cộng của các số: $${nums.join(';\\ ')}$.`, a: `$${mean}$`, meta: { value: mean, nums } }
          : { q: `Trung bình cộng của $${count}$ số là $${mean}$. Hỏi tổng của $${count}$ số đó bằng bao nhiêu?`, a: `$${mean * count}$`, meta: { value: mean * count } });
      }
      return { instr: 'Giải các bài toán về trung bình cộng:', items, cols: 1, long: true };
    }
  };
  const formNumbers = {
    id: 'formnum', name: 'Lập số và quy tắc đếm', grades: [4, 5], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const digits = R.sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], R.pick([3, 4])), all = [];
        for (const a of digits) for (const b of digits) for (const c of digits) if (a && a !== b && b !== c && a !== c) all.push(a * 100 + b * 10 + c);
        const k = i % 2;
        items.push(k === 0 ? { q: `Từ các chữ số $${digits.join(',\\ ')}$, lập được bao nhiêu số có ba chữ số khác nhau?`, a: `$${all.length}$ số`, meta: { value: all.length } }
          : { q: `Từ các chữ số $${digits.join(',\\ ')}$, số lớn nhất có ba chữ số khác nhau là số nào? Số bé nhất là số nào?`, a: `lớn nhất $${Math.max(...all)}$, bé nhất $${Math.min(...all)}$`, meta: { value: Math.max(...all), min: Math.min(...all) } });
      }
      return { instr: 'Giải các bài toán lập số:', items, cols: 1, long: true };
    }
  };
  const conditionNumber = {
    id: 'condnum', name: 'Tìm số theo điều kiện cho trước', grades: [3, 4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, n }) {
      const items = [], digitsOf = v => String(v).split('').map(Number);
      for (let i = 0; i < n; i++) {
        const lo = g === 3 ? 100 : 1000, hi = g === 3 ? 999 : 9999, S = R.int(g === 3 ? 6 : 8, g === 3 ? 20 : 30), k = R.pick([2, 5, 3]), kind = i % 2;
        const pool = Array.from({ length: hi - lo + 1 }, (_, x) => lo + x);
        if (kind === 0) { const ok = pool.filter(v => digitsOf(v).reduce((x, y) => x + y, 0) === S), best = Math.max(...ok); items.push({ q: `Tìm số lớn nhất có ${g === 3 ? 'ba' : 'bốn'} chữ số mà tổng các chữ số bằng $${S}$.`, a: `$${best}$`, meta: { value: best } }); }
        else { const ok = pool.filter(v => v % k === 0 && new Set(digitsOf(v)).size === digitsOf(v).length), best = Math.min(...ok); items.push({ q: `Tìm số bé nhất có ${g === 3 ? 'ba' : 'bốn'} chữ số khác nhau và chia hết cho $${k}$.`, a: `$${best}$`, meta: { value: best } }); }
      }
      return { instr: 'Tìm số thỏa mãn điều kiện:', items, cols: 1, long: true };
    }
  };
  const sumDiff = {
    id: 'sumdiff', name: 'Tìm hai số khi biết tổng và hiệu', grades: [3, 4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const small = R.int(5, g === 3 ? 60 : 300), diff = R.int(2, g === 3 ? 30 : 150), big = small + diff, sum = small + big, [A, B] = R.sample(NAMES2, 2);
        items.push(i % 2 === 0 ? { q: `Tổng của hai số là $${sum}$, hiệu của hai số là $${diff}$. Tìm hai số đó.`, a: `số lớn $${big}$, số bé $${small}$`, meta: { big, small } }
          : { q: `${A} và ${B} có tất cả $${sum}$ viên bi. ${A} có nhiều hơn ${B} $${diff}$ viên bi. Hỏi mỗi bạn có bao nhiêu viên bi?`, a: `${A} $${big}$ viên, ${B} $${small}$ viên`, meta: { big, small } });
      }
      return { instr: 'Giải các bài toán (có thể vẽ sơ đồ đoạn thẳng):', items, cols: 1, long: true };
    }
  };
  const sumRatio = {
    id: 'sumratio', name: 'Tìm hai số khi biết tổng và tỉ số', grades: [4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const unit = R.int(3, g === 4 ? 30 : 80), a = R.int(1, 4), b = R.int(a + 1, 6), small = a * unit, big = b * unit, [A, B] = R.sample(NAMES2, 2);
        items.push(i % 2 === 0 ? { q: `Tổng của hai số là $${small + big}$. Tỉ số của hai số là $${dfrac(a, b)}$. Tìm hai số đó.`, a: `$${small}$ và $${big}$`, meta: { small, big } }
          : { q: `${A} và ${B} có tất cả $${small + big}$ nhãn vở. Số nhãn vở của ${A} bằng $${dfrac(a, b)}$ số nhãn vở của ${B}. Hỏi mỗi bạn có bao nhiêu nhãn vở?`, a: `${A} $${small}$, ${B} $${big}$`, meta: { small, big } });
      }
      return { instr: 'Giải các bài toán (vẽ sơ đồ đoạn thẳng rồi tính):', items, cols: 1, long: true };
    }
  };
  const motion = {
    id: 'motion', name: 'Toán chuyển động (quãng đường, vận tốc, thời gian)', grades: [5], defaults: [], cols: 1, count: 3,
    make({ R, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const v = R.pick([12, 15, 36, 40, 45, 48, 54, 60]), t = R.int(2, 6), kind = i % 3, v2 = R.pick([10, 12, 15, 20, 25, 30]);
        if (kind === 0) items.push({ q: `Một ô tô đi với vận tốc $${v}$ km/giờ trong $${t}$ giờ. Hỏi ô tô đi được bao nhiêu ki-lô-mét?`, a: `$${v * t}$ km`, meta: { value: v * t } });
        else if (kind === 1) items.push({ q: `Một người đi quãng đường dài $${v * t}$ km với vận tốc $${v}$ km/giờ. Hỏi người đó đi hết bao nhiêu giờ?`, a: `$${t}$ giờ`, meta: { value: t } });
        else { const total = (v + v2) * t; items.push({ q: `Hai xe xuất phát cùng lúc từ hai địa điểm cách nhau $${total}$ km, đi ngược chiều nhau với vận tốc $${v}$ km/giờ và $${v2}$ km/giờ. Hỏi sau mấy giờ hai xe gặp nhau?`, a: `$${t}$ giờ`, meta: { value: t } }); }
      }
      return { instr: 'Giải các bài toán chuyển động đều:', items, cols: 1, long: true };
    }
  };
  const backward = {
    id: 'backward', name: 'Toán làm ngược từ cuối', grades: [3, 4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const x = R.int(2, g === 3 ? 30 : 60), m = R.int(2, 5), add = R.int(1, 20), sub = R.int(1, 10), [A] = R.sample(NAMES2, 1);
        items.push(i % 2 === 0 ? { q: `${A} nghĩ một số, nhân với $${m}$ rồi cộng $${add}$ thì được $${x * m + add}$. Hỏi ${A} đã nghĩ số nào?`, a: `$${x}$`, meta: { value: x } }
          : { q: `${A} nghĩ một số, cộng với $${add}$ rồi trừ đi $${sub}$ thì được $${x + add - sub}$. Hỏi số ${A} nghĩ là số nào?`, a: `$${x}$`, meta: { value: x } });
      }
      return { instr: 'Giải bài toán bằng cách tính ngược từ cuối:', items, cols: 1, long: true };
    }
  };
  const fractionDiff = {
    id: 'fracdiff', name: 'Tìm phân số khi biết hiệu mẫu số và tử số', grades: [5], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const p = R.int(1, 4), q = R.int(p + 1, 7), k = R.int(2, 12), d = k * (q - p);
        items.push({ q: `Tìm một phân số biết mẫu số hơn tử số $${d}$ đơn vị và phân số đó bằng $${dfrac(p, q)}$.`, a: `$${dfrac(k * p, k * q)}$`, meta: { value: k * p, d } });
      }
      return { instr: 'Giải các bài toán về phân số:', items, cols: 1, long: true };
    }
  };
  const sumProduct = {
    id: 'trialselect', name: 'Phương pháp thử chọn (tổng và tích)', grades: [3, 4, 5], defaults: [], cols: 1, count: 3,
    make({ R, g, n }) {
      const items = [];
      for (let i = 0; i < n; i++) { const a = R.int(2, g === 3 ? 9 : 15), b = R.int(a, g === 3 ? 12 : 20); items.push({ q: `Tìm hai số tự nhiên có tổng bằng $${a + b}$ và tích bằng $${a * b}$.`, a: `$${a}$ và $${b}$`, meta: { a, b, sum: a + b, product: a * b } }); }
      return { instr: 'Dùng cách thử chọn để tìm hai số:', items, cols: 1, long: true };
    }
  };
  const percentage = {
    id: 'percent', name: 'Tỉ số phần trăm', grades: [5], defaults: [], cols: 1, count: 4,
    make({ R, lvl, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const p = R.pick([10, 20, 25, 40, 50, 75]), total = R.pick([40, 80, 120, 200, 400, 600]), part = total * p / 100;
        items.push(i % 2 === 0 ? { q: `Tìm $${p}\\%$ của $${total}$.`, a: `$${part}$`, meta: { value: part } } : { q: `Biết $${p}\\%$ của một số là $${part}$. Tìm số đó.`, a: `$${total}$`, meta: { value: total } });
      }
      return { instr: 'Giải các bài toán về phần trăm:', items, cols: 1, long: true };
    }
  };
  const jointWork = {
    id: 'jointwork', name: 'Toán công việc chung', grades: [4, 5], defaults: [], cols: 1, count: 2,
    make({ R, n }) {
      const options = [[6, 3, 2], [12, 4, 3], [6, 12, 4], [10, 15, 6], [20, 5, 4], [30, 15, 10], [12, 6, 4], [8, 8, 4]], items = [];
      for (let i = 0; i < n; i++) { const [a, b, t] = R.pick(options), [A, B] = R.sample(NAMES2, 2); items.push({ q: `${A} làm một mình xong công việc trong $${a}$ ngày, ${B} làm một mình xong công việc đó trong $${b}$ ngày. Hỏi nếu cả hai cùng làm thì sau mấy ngày xong?`, a: `$${t}$ ngày`, meta: { a, b, value: t } }); }
      return { instr: 'Giải các bài toán công việc chung:', items, cols: 1, long: true };
    }
  };

  const TOPICS = [counting, picadd, shapes, calc, chain3, written, cmpexpr, blanks, signs, storyExpr, neighbours, matchExpr, matchResult, trueFalse, arrowChain, zigzag, gridCalc, threeSum, picGroups, patternPic, oddNumber, magic, pyramid, picEquation, riddle, iqSequence, countSquares, roman, rounding, fractionPic, duration, numberLine, dice, divisible, termsOf, calendarProblem, ageProblem, digitNumbers, quickSum, equalFractions, average, formNumbers, conditionNumber, sumDiff, sumRatio, motion, backward, fractionDiff, sumProduct, percentage, jointWork, compare, sequence, place, findx, expr, units, time, geometry, fractions, decimals, word, order];
  W.registerSubject({
    id: 'math', name: 'Toán', title: 'Toán', palette: { main: '#1d6fb8', accent: '#f39c12', light: '#e6f1fb' },
    mascots: ['star', 'rocket'], cheer: 'Chúc em học giỏi Toán!', grades: [1, 2, 3, 4, 5], topics: TOPICS
  });
  W.mathHelpers = { pair, numericMc, SYM, JS, patternBlock, dieTikz, toRoman, fromRoman, fmtTime };
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-vi.js ---- */
/* Worksheet topics for Tiếng Việt, lớp 1–5. The word lists and passages are written for this app. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  const BLANK = '\\underline{\\hspace{2.6cm}}';
  const boxed = words => words.map(word => `\\wsbox{${word}}`).join('\\ ');
  const line = n => Array.from({ length: n }, () => '\\noindent\\makebox[\\linewidth]{\\dotfill}\\\\[0.55cm]').join('\n');
  const letters = 'abcdefgh';

  // a two-column matching exercise: pictures or words on the left, words on the right (students draw lines)
  function matchBody(left, right) {
    const rows = left.map((cell, i) => `${i + 1}. ${cell} & ${letters[i]}) ${right[i]}`).join('\\\\[0.35cm]\n');
    return `\\begin{center}\\renewcommand{\\arraystretch}{1.5}\\begin{tabular}{l@{\\hspace{4.2cm}}l}\n${rows}\n\\end{tabular}\\end{center}`;
  }
  function pairsBlock({ R, n, pool, instr, leftOf, answerLabel }) {
    const chosen = R.sample(pool, Math.min(4, pool.length)), right = R.shuffle(chosen.map((p, i) => ({ p, i })));
    return { instr, body: matchBody(chosen.map(leftOf), right.map(x => x.p.right)), answer: chosen.map((p, i) => `${i + 1}${answerLabel}${letters[right.findIndex(x => x.i === i)]}`).join(', '), items: [], meta: { pairs: chosen } };
  }

  // ---------- words for lớp 1 (picture, word, first sound, rest) ----------
  const ONSET = [
    ['cat', 'mèo', 'm', 'èo'], ['dog', 'chó', 'ch', 'ó'], ['fish', 'cá', 'c', 'á'], ['chicken', 'gà', 'g', 'à'], ['duck', 'vịt', 'v', 'ịt'], ['pig', 'heo', 'h', 'eo'],
    ['bear', 'gấu', 'g', 'ấu'], ['rabbit', 'thỏ', 'th', 'ỏ'], ['cow', 'bò', 'b', 'ò'], ['butterfly', 'bướm', 'b', 'ướm'], ['bird', 'chim', 'ch', 'im'], ['blossom', 'hoa', 'h', 'oa'],
    ['tree', 'cây', 'c', 'ây'], ['house', 'nhà', 'nh', 'à'], ['car', 'xe', 'x', 'e'], ['book', 'sách', 's', 'ách'], ['pencil', 'bút', 'b', 'út'], ['ball', 'bóng', 'b', 'óng'],
    ['star', 'sao', 's', 'ao'], ['cloud', 'mây', 'm', 'ây'], ['apple', 'táo', 't', 'áo'], ['banana', 'chuối', 'ch', 'uối'], ['orange', 'cam', 'c', 'am'], ['pear', 'lê', 'l', 'ê'],
    ['heart', 'tim', 't', 'im'], ['bag', 'cặp', 'c', 'ặp'], ['kite', 'diều', 'd', 'iều'], ['egg', 'trứng', 'tr', 'ứng'], ['milk', 'sữa', 's', 'ữa'], ['key', 'chìa', 'ch', 'ìa'],
    ['door', 'cửa', 'c', 'ửa'], ['tooth', 'răng', 'r', 'ăng'], ['eye', 'mắt', 'm', 'ắt'], ['nose', 'mũi', 'm', 'ũi'], ['ear', 'tai', 't', 'ai'], ['hand', 'tay', 't', 'ay'],
    ['foot', 'chân', 'ch', 'ân'], ['cap', 'mũ', 'm', 'ũ'], ['shoe', 'giày', 'gi', 'ày']
  ].map(([id, word, on, rime]) => ({ id, word, on, rime }));

  const onset = {
    id: 'onset', name: 'Nhìn hình, điền âm đầu', grades: [1], defaults: [1], cols: 3, count: 6,
    make({ R, n, pic }) {
      const items = R.sample(ONSET, n).map(w => ({ q: `${pic(w.id, 1.5)}\\\\[2pt] ${BLANK.replace('2.6cm', '1cm')}${w.rime}`, a: `${w.on}${w.rime}`, meta: w }));
      return { instr: 'Nhìn hình, điền chữ cái còn thiếu:', items, cols: 3 };
    }
  };
  const matchPics = {
    id: 'match', name: 'Nối hình với từ', grades: [1, 2], defaults: [1], cols: 1, count: 1,
    make({ R, n, pic }) {
      const block = pairsBlock({ R, n, pool: ONSET.map(w => ({ ...w, right: w.word })), instr: 'Nối mỗi hình với từ đúng:', leftOf: w => pic(w.id, 1.6), answerLabel: ' – ' });
      return block;
    }
  };
  const copy = {
    id: 'copy', name: 'Tập viết (tô theo mẫu)', grades: [1], defaults: [1], cols: 1, count: 3,
    make({ R, n, pic, need }) {
      need('trace');
      const words = R.sample(ONSET, n);
      const items = words.map(w => ({ q: `${pic(w.id, 1.2)}\\quad \\wstrace{${w.word}}\\ \\wstrace{${w.word}}\\ \\wstrace{${w.word}}\\ \\dotfill`, a: w.word }));
      return { instr: 'Tô màu mờ rồi viết tiếp từ vào dòng kẻ:', items, cols: 1, noAnswer: true };
    }
  };
  const picword = {
    id: 'picword', name: 'Nhìn hình viết từ', grades: [1, 2, 3], defaults: [2], cols: 3, count: 6,
    make({ R, g, n, pic, lib }) {
      const ids = lib.order.filter(id => lib.get(id).cp && ['animal', 'fruit', 'school', 'toy', 'nature', 'home', 'transport', 'food'].includes(lib.get(id).cat));
      const items = R.sample(ids, n).map(id => ({ q: `${pic(id, 1.5)}\\\\[3pt] ${BLANK}`, a: lib.get(id).vi, meta: { id } }));
      return { instr: g === 1 ? 'Nhìn hình rồi viết tên con vật, đồ vật:' : 'Nhìn hình, viết tên của mỗi hình:', items, cols: 3 };
    }
  };

  // ---------- spelling ----------
  const SPELL = {
    'ch / tr': [
      ['chim', 'ch', 'im', 'bird'], ['chó', 'ch', 'ó', 'dog'], ['chân', 'ch', 'ân', 'foot'], ['chuối', 'ch', 'uối', 'banana'], ['chìa', 'ch', 'ìa', 'key'], ['chổi', 'ch', 'ổi', 'broom'], ['chạy', 'ch', 'ạy'], ['chào', 'ch', 'ào'], ['chợ', 'ch', 'ợ'], ['chữ', 'ch', 'ữ'],
      ['trứng', 'tr', 'ứng', 'egg'], ['trâu', 'tr', 'âu', 'buffalo'], ['trăng', 'tr', 'ăng', 'moon'], ['trống', 'tr', 'ống', 'drum'], ['trường', 'tr', 'ường', 'school'], ['trời', 'tr', 'ời'], ['tre', 'tr', 'e'], ['trên', 'tr', 'ên'], ['trái', 'tr', 'ái'], ['trà', 'tr', 'à']
    ],
    's / x': [
      ['sách', 's', 'ách', 'book'], ['sao', 's', 'ao', 'star'], ['sữa', 's', 'ữa', 'milk'], ['sâu', 's', 'âu', 'caterpillar'], ['sông', 's', 'ông'], ['sáng', 's', 'áng'], ['sen', 's', 'en'], ['sân', 's', 'ân'], ['sắt', 's', 'ắt'],
      ['xe', 'x', 'e', 'car'], ['xoài', 'x', 'oài', 'mango'], ['xanh', 'x', 'anh'], ['xa', 'x', 'a'], ['xinh', 'x', 'inh'], ['xương', 'x', 'ương'], ['xôi', 'x', 'ôi'], ['xuồng', 'x', 'uồng'], ['xẻng', 'x', 'ẻng']
    ],
    'd / gi / r': [
      ['dê', 'd', 'ê', 'goat'], ['dừa', 'd', 'ừa', 'coconut'], ['diều', 'd', 'iều', 'kite'], ['dao', 'd', 'ao'], ['dép', 'd', 'ép'], ['dưa', 'd', 'ưa'], ['dạy', 'd', 'ạy'], ['dây', 'd', 'ây'],
      ['giày', 'gi', 'ày', 'shoe'], ['giường', 'gi', 'ường', 'bed'], ['giỏ', 'gi', 'ỏ'], ['giấy', 'gi', 'ấy'], ['gió', 'gi', 'ó'], ['giếng', 'gi', 'ếng'], ['giúp', 'gi', 'úp'], ['giặt', 'gi', 'ặt'],
      ['răng', 'r', 'ăng', 'tooth'], ['rắn', 'r', 'ắn', 'snake'], ['rùa', 'r', 'ùa', 'turtle'], ['rồng', 'r', 'ồng'], ['rau', 'r', 'au'], ['rổ', 'r', 'ổ'], ['rừng', 'r', 'ừng'], ['rễ', 'r', 'ễ'], ['rửa', 'r', 'ửa']
    ],
    'ng / ngh': [
      ['ngà', 'ng', 'à'], ['ngô', 'ng', 'ô', 'corn'], ['ngủ', 'ng', 'ủ'], ['ngựa', 'ng', 'ựa'], ['ngón', 'ng', 'ón'], ['ngày', 'ng', 'ày'], ['ngan', 'ng', 'an'], ['ngọt', 'ng', 'ọt'],
      ['nghe', 'ngh', 'e'], ['nghề', 'ngh', 'ề'], ['nghỉ', 'ngh', 'ỉ'], ['nghĩ', 'ngh', 'ĩ'], ['nghệ', 'ngh', 'ệ'], ['nghiêng', 'ngh', 'iêng'], ['nghìn', 'ngh', 'ìn']
    ],
    'g / gh': [
      ['gà', 'g', 'à', 'chicken'], ['gỗ', 'g', 'ỗ'], ['gấu', 'g', 'ấu', 'bear'], ['gạo', 'g', 'ạo'], ['gạch', 'g', 'ạch'], ['gân', 'g', 'ân'],
      ['ghế', 'gh', 'ế'], ['ghi', 'gh', 'i'], ['ghé', 'gh', 'é'], ['ghẹ', 'gh', 'ẹ'], ['ghềnh', 'gh', 'ềnh']
    ],
    'c / k': [
      ['cá', 'c', 'á', 'fish'], ['cờ', 'c', 'ờ'], ['cây', 'c', 'ây', 'tree'], ['cửa', 'c', 'ửa', 'door'], ['củ', 'c', 'ủ'], ['cô', 'c', 'ô'],
      ['kẻ', 'k', 'ẻ'], ['kì', 'k', 'ì'], ['kê', 'k', 'ê'], ['kéo', 'k', 'éo', 'scissors'], ['kính', 'k', 'ính'], ['kể', 'k', 'ể']
    ],
    'l / n': [
      ['lá', 'l', 'á', 'leaf'], ['lê', 'l', 'ê', 'pear'], ['lửa', 'l', 'ửa', 'fire'], ['lưỡi', 'l', 'ưỡi', 'tongue'], ['lợn', 'l', 'ợn', 'pig'], ['lọ', 'l', 'ọ'], ['lúa', 'l', 'úa'], ['lớp', 'l', 'ớp'], ['lạnh', 'l', 'ạnh'],
      ['nho', 'n', 'o', 'grape'], ['núi', 'n', 'úi', 'mountain'], ['nước', 'n', 'ước', 'drop'], ['nón', 'n', 'ón'], ['nắng', 'n', 'ắng'], ['nến', 'n', 'ến'], ['nơ', 'n', 'ơ'], ['nải', 'n', 'ải']
    ]
  };
  const spellPairs = g => g === 1 ? ['d / gi / r', 's / x', 'ng / ngh', 'ch / tr', 'g / gh', 'c / k'] : g === 2 ? ['ch / tr', 's / x'] : g === 3 ? ['ch / tr', 's / x', 'd / gi / r', 'l / n'] : ['ch / tr', 's / x', 'd / gi / r', 'l / n'];
  function spellItem(R, g) {
    const set = R.pick(spellPairs(g)), [word, on, rest, picId] = R.pick(SPELL[set]);
    return { set, word, on, rest, picId, options: set.split(' / ') };
  }
  const spell = {
    id: 'spell', name: 'Chính tả: ch/tr, s/x, d/gi/r, l/n, ng/ngh, g/gh, c/k', grades: [1, 2, 3, 4, 5], defaults: [1, 2, 3, 4], cols: 3, count: 9,
    make({ R, g, n, pic }) {
      const items = [], seen = new Set();
      while (items.length < n) {
        const it = spellItem(R, g); if (seen.has(it.word)) continue; seen.add(it.word);
        items.push({ q: `${it.picId ? pic(it.picId, 0.9) + '\\ ' : ''}${BLANK.replace('2.6cm', '0.8cm')}${it.rest}\\ \\textit{(${it.set})}`, a: it.word, meta: it });
      }
      return { instr: 'Chọn chữ cái thích hợp điền vào chỗ trống:', items, cols: g === 2 ? 3 : 3 };
    },
    mc({ R, g }) {
      const it = spellItem(R, g), others = R.shuffle(['ch', 'tr', 's', 'x', 'd', 'gi', 'r', 'l', 'n'].filter(x => !it.options.includes(x)));
      const picked = [...it.options, ...others].slice(0, 4);
      if (!picked.includes(it.on)) picked[picked.length - 1] = it.on;
      const options = R.shuffle(picked);
      return { stem: `Chữ cái thích hợp điền vào chỗ trống: \\ldots{}${it.rest}`, options, correct: options.indexOf(it.on) };
    }
  };

  // ---------- word classes: things / actions / qualities ----------
  const THINGS = ['bàn', 'ghế', 'cây', 'hoa', 'mèo', 'sách', 'trường', 'mẹ', 'bút', 'nhà', 'sông', 'trăng'];
  const ACTIONS = ['chạy', 'nhảy', 'hát', 'đọc', 'viết', 'ăn', 'ngủ', 'bơi', 'vẽ', 'múa', 'học'];
  const QUALITIES = ['đẹp', 'cao', 'xanh', 'nhanh', 'chậm', 'ngoan', 'thơm', 'ngọt', 'nhỏ', 'to', 'sáng', 'chăm chỉ'];
  const classify = {
    id: 'class', name: 'Từ chỉ sự vật, hoạt động, đặc điểm', grades: [2, 3], defaults: [3], cols: 1, count: 1,
    make({ R, n }) {
      const sets = Math.max(1, Math.min(2, n));
      let body = '', answer = '';
      for (let k = 0; k < sets; k++) {
        const t = R.sample(THINGS, 3), a = R.sample(ACTIONS, 3), q = R.sample(QUALITIES, 3), all = R.shuffle([...t, ...a, ...q]);
        body += `\\par ${boxed(all)}\\par\\medskip\n\\begin{center}\\renewcommand{\\arraystretch}{1.1}\\begin{tabular}{|p{4.6cm}|p{4.6cm}|p{4.6cm}|}\\hline\n\\textbf{Chỉ sự vật} & \\textbf{Chỉ hoạt động} & \\textbf{Chỉ đặc điểm}\\\\ \\hline\n\\rule{0pt}{2.4cm} & & \\\\ \\hline\n\\end{tabular}\\end{center}\n`;
        answer += `${k ? '; ' : ''}Sự vật: ${t.join(', ')}. Hoạt động: ${a.join(', ')}. Đặc điểm: ${q.join(', ')}`;
      }
      return { instr: 'Xếp các từ trong khung vào nhóm thích hợp:', body, answer, items: [] };
    }
  };

  // ---------- sentences ----------
  const SENTENCES = [
    'Mẹ em đi chợ mua rau.', 'Con mèo đang ngủ trên ghế.', 'Bạn Nam chạy rất nhanh.', 'Em học bài trong phòng.', 'Chim hót líu lo trên cành cây.', 'Hoa hồng nở đỏ rực trong vườn.',
    'Trời hôm nay nắng đẹp.', 'Bà nội kể chuyện cho em nghe.', 'Các bạn nhỏ chơi đá bóng ở sân trường.', 'Mặt trời mọc ở đằng đông.', 'Em giúp mẹ quét nhà.', 'Cô giáo giảng bài rất hay.',
    'Đàn cá bơi lội trong hồ nước.', 'Bố đưa em đến trường bằng xe đạp.', 'Em rất yêu quê hương của mình.', 'Những chú chim sâu bay về làm tổ.', 'Cả lớp cùng nhau trồng cây trong vườn trường.', 'Em bé cười tươi như hoa.'
  ];
  const unscramble = {
    id: 'order', name: 'Sắp xếp các từ thành câu', grades: [1, 2, 3, 4, 5], defaults: [1, 2, 3], cols: 1, count: 4,
    make({ R, g, n }) {
      const items = R.sample(g === 1 ? SENT1 : SENTENCES, n).map(s => {
        const words = s.replace(/\.$/, '').split(' ');
        let shuffled = R.shuffle(words); for (let k = 0; k < 6 && shuffled.join(' ') === words.join(' '); k++) shuffled = R.shuffle(words);
        return { q: `${boxed(shuffled)}\\\\[3pt]\n\\noindent\\makebox[\\linewidth]{\\dotfill}`, a: s, meta: { words, sentence: s } };
      });
      return { instr: 'Sắp xếp các từ sau thành câu hoàn chỉnh:', items, cols: 1, long: true };
    }
  };
  const PUNCT = [
    ['Em đang làm bài tập', '.'], ['Trời hôm nay mưa to', '.'], ['Mẹ nấu cơm cho cả nhà', '.'], ['Chúng em chào cô giáo', '.'],
    ['Bạn tên là gì', '?'], ['Hôm nay bạn đi học bằng gì', '?'], ['Con mèo đang ở đâu', '?'], ['Mấy giờ chúng ta ăn cơm', '?'],
    ['Ôi bông hoa đẹp quá', '!'], ['Chà con chó dễ thương quá', '!'], ['Trời ơi nóng quá', '!'], ['Hoan hô đội mình thắng rồi', '!']
  ];
  const PUNCT_NAME = { '.': 'dấu chấm', '?': 'dấu chấm hỏi', '!': 'dấu chấm than' };
  const punct = {
    id: 'punct', name: 'Điền dấu câu', grades: [2, 3, 4], defaults: [2], cols: 2, count: 6,
    make({ R, n }) {
      const items = R.sample(PUNCT, n).map(([s, mark]) => ({ q: `${s} \\fbox{\\phantom{?}}`, a: `${s}${mark}`, meta: { sentence: s, mark } }));
      return { instr: 'Điền dấu chấm (.), dấu chấm hỏi (?) hoặc dấu chấm than (!) vào ô trống:', items, cols: 2 };
    },
    mc({ R }) {
      const [s, mark] = R.pick(PUNCT), options = ['dấu chấm', 'dấu chấm hỏi', 'dấu chấm than'];
      return { stem: `Cuối câu “${s}” cần điền dấu gì?`, options, correct: ['.', '?', '!'].indexOf(mark) };
    }
  };

  // ---------- fill a word, with pictures ----------
  const CLOZE = [
    ['Con ___ kêu meo meo.', 'mèo', 'cat'], ['Con ___ sủa gâu gâu.', 'chó', 'dog'], ['Con ___ gáy ò ó o.', 'gà', 'chicken'], ['Con ___ kêu ộp ộp.', 'ếch', 'frog'],
    ['Con ___ kêu cạc cạc.', 'vịt', 'duck'], ['Con ___ ăn cỏ.', 'bò', 'cow'], ['Con ___ bay lượn trên bầu trời.', 'chim', 'bird'], ['Con ___ bơi trong nước.', 'cá', 'fish'],
    ['Quả ___ có màu vàng.', 'chuối', 'banana'], ['Quả ___ có màu đỏ.', 'táo', 'apple'], ['Chiếc ___ dùng để đựng sách vở.', 'cặp', 'bag'], ['Cây ___ dùng để viết.', 'bút', 'pencil'],
    ['Ngôi ___ sáng lấp lánh trên trời.', 'sao', 'star'], ['Con ___ có đôi cánh nhiều màu sắc.', 'bướm', 'butterfly'], ['Cái ___ che mưa cho em.', 'ô', 'umbrella']
  ];
  const cloze = {
    id: 'fill', name: 'Điền từ vào chỗ trống (có hình)', grades: [1, 2, 3], defaults: [], cols: 1, count: 5,
    make({ R, n, pic }) {
      const chosen = R.sample(CLOZE, n);
      const items = chosen.map(([s, w, id]) => ({ q: `${pic(id, 1)}\\ ${s.replace('___', BLANK.replace('2.6cm', '1.8cm'))}`, a: `${s.replace('___', w)}`, meta: { word: w } }));
      const body = `\\par ${boxed(R.shuffle(chosen.map(c => c[1])))}\\par\\smallskip\n` + `\\begin{enumerate}\n${items.map(i => '\\item ' + i.q).join('\n')}\n\\end{enumerate}`;
      return { instr: 'Chọn từ trong khung điền vào chỗ trống:', body, items, cols: 1, long: true };
    }
  };

  // ---------- antonyms and synonyms ----------
  const ANTONYMS = [['cao', 'thấp'], ['to', 'nhỏ'], ['nhanh', 'chậm'], ['sáng', 'tối'], ['nóng', 'lạnh'], ['vui', 'buồn'], ['ngày', 'đêm'], ['xa', 'gần'], ['trẻ', 'già'], ['mới', 'cũ'], ['dài', 'ngắn'], ['khen', 'chê'],
    ['yêu', 'ghét'], ['béo', 'gầy'], ['đẹp', 'xấu'], ['mạnh', 'yếu'], ['sạch', 'bẩn'], ['ngoan', 'hư'], ['giàu', 'nghèo'], ['đúng', 'sai'], ['lên', 'xuống'], ['vào', 'ra'], ['mở', 'đóng'], ['nhiều', 'ít'],
    ['thật', 'giả'], ['rộng', 'hẹp'], ['dày', 'mỏng'], ['nặng', 'nhẹ'], ['trên', 'dưới']];
  const SYNONYMS = [['to', 'lớn'], ['nhỏ', 'bé'], ['đẹp', 'xinh'], ['chăm chỉ', 'siêng năng'], ['nhanh', 'mau'], ['quả', 'trái'], ['bát', 'chén'], ['heo', 'lợn'], ['hổ', 'cọp'], ['ba', 'bố'],
    ['đất nước', 'tổ quốc'], ['dũng cảm', 'gan dạ'], ['kiên trì', 'bền bỉ'], ['bao la', 'mênh mông']];
  const matchWords = (id, name, pool, instr, grades, defaults) => ({
    id, name, grades, defaults, cols: 1, count: 1,
    make({ R }) { return pairsBlock({ R, n: 4, pool: pool.map(([a, b]) => ({ left: a, right: b })), instr, leftOf: p => `\\textbf{${p.left}}`, answerLabel: ' – ' }); },
    mc({ R }) {
      const [a, b] = R.pick(pool), others = R.sample(pool.flat().filter(w => w !== a && w !== b && !pool.some(([x, y]) => (x === a && y === w) || (y === a && x === w))), 3), options = R.shuffle([b, ...others]);
      return { stem: `Từ ${id === 'antonym' ? 'trái nghĩa' : 'đồng nghĩa'} với từ “${a}” là:`, options, correct: options.indexOf(b) };
    }
  });
  const antonym = matchWords('antonym', 'Nối từ trái nghĩa', ANTONYMS, 'Nối mỗi từ ở cột bên trái với từ trái nghĩa ở cột bên phải:', [2, 3, 4, 5], [4]);
  const synonym = matchWords('synonym', 'Nối từ đồng nghĩa', SYNONYMS, 'Nối mỗi từ ở cột bên trái với từ đồng nghĩa ở cột bên phải:', [3, 4, 5], [3, 5]);

  // ---------- word classes in a sentence (lớp 4–5) ----------
  const POS = [
    ['Chú mèo nhỏ chạy nhanh trên sân.', ['mèo', 'sân'], ['chạy'], ['nhỏ', 'nhanh']],
    ['Những bông hoa đỏ nở rực rỡ trong vườn.', ['hoa', 'vườn'], ['nở'], ['đỏ', 'rực rỡ']],
    ['Cô giáo hiền hậu giảng bài cho học sinh.', ['cô giáo', 'bài', 'học sinh'], ['giảng'], ['hiền hậu']],
    ['Dòng sông xanh chảy qua cánh đồng rộng.', ['sông', 'cánh đồng'], ['chảy'], ['xanh', 'rộng']],
    ['Con trâu chăm chỉ cày ruộng.', ['trâu', 'ruộng'], ['cày'], ['chăm chỉ']],
    ['Bé Hoa vẽ bức tranh đẹp tặng mẹ.', ['tranh', 'mẹ'], ['vẽ', 'tặng'], ['đẹp']],
    ['Mặt trời mọc rồi sưởi ấm cánh đồng vàng.', ['mặt trời', 'cánh đồng'], ['mọc', 'sưởi ấm'], ['vàng']],
    ['Em bé ngoan ngoãn ăn cơm.', ['em bé', 'cơm'], ['ăn'], ['ngoan ngoãn']]
  ];
  const pos = {
    id: 'pos', name: 'Danh từ, động từ, tính từ', grades: [4, 5], defaults: [4, 5], cols: 1, count: 3,
    make({ R, n }) {
      const items = R.sample(POS, n).map(([s, nouns, verbs, adjs]) => ({
        q: `${s}\\\\[2pt] Danh từ: \\dotfill\\\\ Động từ: \\dotfill\\\\ Tính từ: \\dotfill`,
        a: `Danh từ: ${nouns.join(', ')}; động từ: ${verbs.join(', ')}; tính từ: ${adjs.join(', ')}`, meta: { sentence: s, nouns, verbs, adjs }
      }));
      return { instr: 'Tìm và viết lại các danh từ, động từ, tính từ trong mỗi câu:', items, cols: 1, long: true };
    }
  };

  // ---------- connecting words ----------
  const CONNECT = [
    ['em chăm chỉ học bài', 'em đạt kết quả cao', 'Vì', 'nên'], ['trời mưa rất to', 'các bạn vẫn đến lớp đúng giờ', 'Tuy', 'nhưng'],
    ['ngày mai trời đẹp', 'cả lớp sẽ đi tham quan', 'Nếu', 'thì'], ['đường trơn', 'xe đi rất chậm', 'Vì', 'nên'],
    ['nhà nghèo', 'bạn Hùng luôn cố gắng học tập', 'Tuy', 'nhưng'], ['em bị ốm', 'em sẽ nghỉ học ở nhà', 'Nếu', 'thì'],
    ['cây cối được tưới nước đầy đủ', 'cây lớn rất nhanh', 'Vì', 'nên'], ['bài toán rất khó', 'bạn Mai vẫn giải được', 'Tuy', 'nhưng']
  ];
  const connect = {
    id: 'connect', name: 'Điền cặp quan hệ từ', grades: [4, 5], defaults: [4, 5], cols: 1, count: 4,
    make({ R, n }) {
      const chosen = R.sample(CONNECT, n), items = chosen.map(([a, b, c1, c2]) => ({ q: `\\ldots\\ ${a} \\ldots\\ ${b}.`, a: `${c1} ${a} ${c2} ${b}.`, meta: { c1, c2 } }));
      const body = `\\par ${boxed(['Vì … nên …', 'Tuy … nhưng …', 'Nếu … thì …'])}\\par\\smallskip\n\\begin{enumerate}\n${items.map(i => '\\item ' + i.q).join('\n')}\n\\end{enumerate}`;
      return { instr: 'Chọn cặp quan hệ từ thích hợp điền vào chỗ trống:', body, items, cols: 1, long: true };
    },
    mc({ R }) {
      const [a, b, c1, c2] = R.pick(CONNECT), pairs = ['Vì … nên', 'Tuy … nhưng', 'Nếu … thì'], right = `${c1} … ${c2}`, options = [...pairs, 'Không những … mà còn'];
      return { stem: `Điền cặp quan hệ từ thích hợp: \\ldots\\ ${a} \\ldots\\ ${b}.`, options, correct: options.indexOf(right) };
    }
  };

  // ---------- reading comprehension ----------
  const PASSAGES = [
    { grades: [2], text: 'Nhà bà em ở quê có một mảnh vườn nhỏ. Trong vườn có cây ổi, cây chuối và những luống rau xanh mướt. Mỗi dịp hè, em lại về thăm bà và hái ổi trong vườn.',
      qs: [['Nhà bà em ở đâu?', ['ở thành phố', 'ở quê', 'ở trường học'], 1], ['Trong vườn nhà bà có những gì?', ['cây ổi, cây chuối và rau xanh', 'chỉ có hoa hồng', 'một ao cá lớn'], 0], ['Em về thăm bà vào dịp nào?', ['dịp Tết', 'dịp hè', 'dịp khai giảng'], 1]] },
    { grades: [3, 4], text: 'Buổi sáng, sân trường rộn ràng tiếng nói cười. Các bạn học sinh xếp hàng ngay ngắn chào cờ. Cô Hoa nhắc nhở cả lớp phải biết giữ gìn sân trường sạch đẹp. Sau giờ ra chơi, Nam nhặt chiếc vỏ kẹo rơi dưới gốc cây bỏ vào thùng rác. Cô giáo mỉm cười khen Nam là một cậu bé ngoan.',
      qs: [['Buổi sáng, các bạn học sinh làm gì?', ['chơi đá bóng', 'xếp hàng chào cờ', 'ngồi học bài'], 1], ['Cô Hoa nhắc cả lớp điều gì?', ['giữ gìn sân trường sạch đẹp', 'làm bài tập về nhà', 'đi học đúng giờ'], 0], ['Nam đã làm việc tốt gì?', ['lau bảng', 'tưới cây', 'nhặt vỏ kẹo bỏ vào thùng rác'], 2]] },
    { grades: [3, 4, 5], text: 'Trên cánh đồng, những bông lúa chín vàng uốn mình trong gió. Bác nông dân đội chiếc nón lá, cúi xuống gặt từng bó lúa. Đàn cò trắng bay lượn trên cao rồi sà xuống bờ ruộng. Mùa gặt về, ai cũng vui như hội.',
      qs: [['Lúa trên cánh đồng có màu gì?', ['xanh non', 'chín vàng', 'trắng muốt'], 1], ['Bác nông dân đang làm gì?', ['gặt lúa', 'cày ruộng', 'tưới nước'], 0], ['Con vật nào bay lượn trên cao?', ['đàn cò trắng', 'đàn vịt', 'đàn trâu'], 0]] },
    { grades: [4, 5], text: 'Mùa thu, bầu trời trong xanh và cao vời vợi. Gió heo may se se lạnh. Hương cốm mới thoang thoảng khắp phố phường. Trên cành cây, những chiếc lá vàng khẽ rơi xuống như những cánh bướm nhỏ. Em rất yêu mùa thu vì đó là mùa của những ngày tựu trường.',
      qs: [['Bầu trời mùa thu như thế nào?', ['xám xịt', 'trong xanh và cao vời vợi', 'đầy mây đen'], 1], ['Chiếc lá vàng rơi được so sánh với gì?', ['những cánh bướm nhỏ', 'những giọt mưa', 'những ngôi sao'], 0], ['Vì sao em yêu mùa thu?', ['vì được nghỉ hè', 'vì đó là mùa của những ngày tựu trường', 'vì trời nóng'], 1]] },
    { grades: [5], text: 'Voi con rất tự hào về sức mạnh của mình và thường chê chú kiến nhỏ bé. Một hôm, chân voi bị gai đâm sâu, đau đến mức không bước nổi. Kiến nhỏ bò lên chân voi, cắn chiếc gai kéo ra. Voi con cảm ơn kiến và xin lỗi vì đã chê bai. Từ đó, voi hiểu rằng không nên coi thường ai chỉ vì họ nhỏ bé.',
      qs: [['Voi con thường chê ai?', ['chú kiến nhỏ bé', 'chú chim sẻ', 'bác nông dân'], 0], ['Kiến đã giúp voi con việc gì?', ['tìm nước uống', 'kéo chiếc gai ra khỏi chân', 'dẫn voi về nhà'], 1], ['Câu chuyện khuyên chúng ta điều gì?', ['không nên coi thường người khác', 'chỉ nên chơi với bạn to khỏe', 'phải khoe sức mạnh'], 0]] }
  ];
  const read = {
    id: 'read', name: 'Đọc hiểu', grades: [2, 3, 4, 5], defaults: [2, 3, 4, 5], cols: 1, count: 1,
    make({ R, g }) {
      const passage = R.pick(PASSAGES.filter(p => p.grades.includes(g)));
      const qs = passage.qs.map(([q, opts, right]) => ({ q, opts, right }));
      const body = `\\noindent\\fcolorbox{wsMain}{wsLight}{\\parbox{0.94\\linewidth}{\\vspace{3pt}${passage.text}\\vspace{3pt}}}\\par\\medskip\n\\begin{enumerate}\n` +
        qs.map(item => `\\item ${item.q}\\\\\n${item.opts.map((o, i) => `\\textbf{${letters[i].toUpperCase()}.} ${o}`).join(' \\quad ')}`).join('\n') + '\n\\end{enumerate}';
      return { instr: 'Đọc đoạn văn rồi khoanh vào chữ cái đặt trước ý đúng:', body, answer: qs.map((item, i) => `${i + 1}) ${letters[item.right].toUpperCase()}`).join('; '), items: [], meta: { qs } };
    },
    mc({ R, g }) {
      const passage = R.pick(PASSAGES.filter(p => p.grades.includes(g))), [q, opts, right] = R.pick(passage.qs);
      return { stem: `Đọc đoạn văn: \\textit{${passage.text}}\\\\ Câu hỏi: ${q}`, options: opts, correct: right };
    }
  };

  // ---------- writing ----------
  const WRITE = {
    1: ['Nhìn tranh, viết 1 – 2 câu: Đây là \\ldots', 2],
    2: ['Viết 3 – 4 câu về con vật hoặc đồ vật em thích. Gợi ý: Đó là con gì? Nó có đặc điểm gì? Em yêu nó như thế nào?', 4],
    3: ['Viết một đoạn văn ngắn (5 – 7 câu) tả con vật hoặc đồ vật trong tranh. Gợi ý: tên, hình dáng, màu sắc, ích lợi, tình cảm của em.', 6],
    4: ['Viết một đoạn văn (7 – 9 câu) tả con vật hoặc cây cối trong tranh. Gợi ý: giới thiệu, tả hình dáng, tả hoạt động, nêu cảm nghĩ.', 8],
    5: ['Viết đoạn văn (8 – 10 câu) tả cảnh vật hoặc đồ vật trong tranh, sử dụng ít nhất một hình ảnh so sánh.', 9]
  };
  const write = {
    id: 'write', name: 'Tập làm văn theo tranh', grades: [1, 2, 3, 4, 5], defaults: [1, 2, 3, 4, 5], cols: 1, count: 1,
    make({ R, g, pic, lib }) {
      const ids = lib.order.filter(id => lib.get(id).cp && ['animal', 'fruit', 'nature', 'toy', 'home', 'transport'].includes(lib.get(id).cat)), id = R.pick(ids);
      const [prompt, lines] = WRITE[g];
      const body = `\\begin{center}${pic(id, 2.4)}\\end{center}\n\\par ${prompt}\\par\\medskip\n${line(lines)}`;
      return { instr: 'Nhìn tranh và viết:', body, items: [], noAnswer: true };
    }
  };


  // ---------- lớp 1: vần (rhymes) ----------
  // Every word is split into onset + rime; the rime without its tone mark must be the vần it is filed under (checked by a test).
  const TONES = { '\u0301': 'sắc', '\u0300': 'huyền', '\u0309': 'hỏi', '\u0303': 'ngã', '\u0323': 'nặng' };
  const ONSETS = ['ngh', 'ng', 'nh', 'ph', 'th', 'tr', 'ch', 'gh', 'gi', 'kh', 'qu', 'g', 'b', 'c', 'd', 'đ', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'x'];
  function parseWord(word) {
    const low = word.toLowerCase(), on = ONSETS.find(o => low.startsWith(o)) || '', rest = low.slice(on.length);
    let tone = '', bare = '';
    for (const ch of rest.normalize('NFD')) { if (TONES[ch]) tone = TONES[ch]; else bare += ch; }
    return { word, on, rest, van: bare.normalize('NFC'), tone: tone || 'ngang' };
  }
  const VAN = {
    at: ['hát', 'cát', 'mát', 'bát', 'nát', 'rát', 'phát'], 'ăt': ['mắt', 'cắt', 'vắt', 'tắt', 'mặt', 'đắt', 'bắt', 'nhắt', 'thắt', 'chặt'], 'ât': ['đất', 'thật', 'mật', 'bật', 'gật', 'tất', 'vật', 'nhất', 'chật', 'giật'],
    et: ['nét', 'sét', 'két', 'mét', 'hét', 'vẹt', 'khét', 'rét', 'bét', 'quét'], 'êt': ['kết', 'rết', 'nết', 'tết', 'hết', 'mệt', 'dệt', 'vệt', 'bệt', 'hệt'],
    ot: ['hót', 'rót', 'chót', 'ngọt', 'vọt', 'nhọt', 'sọt', 'gọt', 'bọt', 'mọt'], 'ôt': ['cột', 'bột', 'một', 'tốt', 'dốt', 'rốt', 'hột', 'nốt', 'chột', 'lốt'], 'ơt': ['ớt', 'vớt', 'bớt', 'rớt', 'phớt', 'hớt', 'nớt', 'đớt'],
    ut: ['bút', 'hút', 'mút', 'nút', 'rút', 'sút', 'chút', 'phút', 'cút', 'út'], 'ưt': ['sứt', 'mứt', 'nứt', 'bứt', 'dứt', 'rứt', 'lứt'],
    oa: ['hoa', 'xoa', 'loa', 'toa', 'khóa', 'tòa', 'tỏa', 'hòa'], oe: ['khoẻ', 'xoè', 'loè', 'hoe', 'toe'],
    oai: ['khoai', 'xoài', 'hoài', 'loại', 'ngoại', 'thoại', 'ngoái'], oay: ['xoay', 'ngoáy', 'khoáy', 'xoáy', 'loay', 'hoáy'],
    oan: ['toán', 'ngoan', 'khoan', 'loan', 'hoàn', 'toàn', 'xoan', 'hoạn'], 'oăn': ['xoăn', 'khoăn', 'khoắn', 'thoăn', 'ngoằn'],
    oat: ['hoạt', 'thoát', 'toát', 'đoạt', 'soát', 'loát'], 'oăt': ['thoắt', 'loắt', 'choắt', 'ngoắt', 'hoắt'],
    oang: ['khoang', 'hoang', 'toang', 'loang', 'choang', 'hoảng', 'khoảng', 'thoảng', 'hoàng'], 'oăng': ['hoẵng', 'ngoẵng', 'thoắng', 'loăng'],
    oanh: ['khoanh', 'doanh', 'loanh', 'ngoảnh', 'hoành'], oach: ['hoạch', 'loạch', 'xoạch'], oac: ['khoác', 'hoác', 'toác', 'ngoạc'],
    'iêc': ['biếc', 'xiếc', 'việc', 'tiệc', 'liếc', 'chiếc', 'thiếc'], 'ươc': ['nước', 'bước', 'thước', 'lược', 'trước', 'được', 'ước']
  };
  const VAN_WORDS = Object.fromEntries(Object.entries(VAN).map(([van, words]) => [van, words.map(parseWord)]));
  const VAN_PAIRS = [['ăt', 'ât'], ['at', 'ăt'], ['et', 'êt'], ['ot', 'ôt'], ['ôt', 'ơt'], ['ut', 'ưt'], ['oa', 'oe'], ['oai', 'oay'], ['oan', 'oăn'], ['oat', 'oăt'], ['oang', 'oăng'], ['oanh', 'oach'], ['iêc', 'ươc']];
  // sentences containing one word with a given vần, the word in braces
  const VAN_SENTENCES = [
    ['Bà {hát} ru bé ngủ.', 'at'], ['Bãi {cát} vàng rất đẹp.', 'at'], ['Mẹ {cắt} tóc cho em.', 'ăt'], ['Bé đã {tắt} đèn đi ngủ.', 'ăt'], ['Trái {đất} quay quanh mặt trời.', 'ât'], ['Bé {thật} thà nhận lỗi.', 'ât'],
    ['Mùa đông trời {rét} căm căm.', 'et'], ['Con {vẹt} biết nói tiếng người.', 'et'], ['Cả nhà vui đón {Tết}.', 'êt'], ['Bé học {hết} bài mới đi chơi.', 'êt'], ['Quả xoài chín {ngọt} lịm.', 'ot'], ['Chú chim sâu {hót} líu lo.', 'ot'],
    ['Mẹ nấu cháo {bột} cho em bé.', 'ôt'], ['Bạn Nam học rất {tốt}.', 'ôt'], ['Mẹ nêm thêm trái {ớt} vào canh.', 'ơt'], ['Ba {vớt} lá rơi trên hồ cá.', 'ơt'], ['Em dùng {bút} chì để vẽ.', 'ut'], ['Mưa to gây ra lũ {lụt}.', 'ut'],
    ['Cô bán {mứt} dừa dịp Tết.', 'ưt'], ['Chiếc chén bị {sứt} mẻ.', 'ưt'], ['Mẹ trồng {hoa} ngoài vườn.', 'oa'], ['Bé {xoa} đầu chú mèo.', 'oa'], ['Em tập thể dục để {khoẻ} mạnh.', 'oe'], ['Bông hoa {xoè} cánh đẹp.', 'oe'],
    ['Mẹ nấu {khoai} lang cho cả nhà.', 'oai'], ['Quả {xoài} chín thơm lừng.', 'oai'], ['Chong chóng {xoay} tít trong gió.', 'oay'], ['Bé {hí hoáy} vẽ tranh.', 'oay'], ['Bé rất {ngoan} và lễ phép.', 'oan'], ['Chú thợ {khoan} tường.', 'oan'],
    ['Bạn Mai có mái tóc {xoăn}.', 'oăn'], ['Em còn {băn khoăn} về bài tập.', 'oăn'], ['Em tham gia {hoạt} động của lớp.', 'oat'], ['Chú thỏ {thoát} khỏi bẫy.', 'oat'], ['Chú sóc nhảy {thoắt} lên cây.', 'oăt'], ['Bạn Lan nhỏ nhắn, {loắt} choắt.', 'oăt'],
    ['Con đường {hoang} vắng.', 'oang'], ['Gió {thoảng} qua mùi hoa sữa.', 'oang'], ['Con {hoẵng} chạy nhanh trong rừng.', 'oăng'], ['Bạn nói {thoắng} một hồi.', 'oăng'], ['Em {khoanh} tròn đáp án đúng.', 'oanh'], ['Chim {oanh} hót rất hay.', 'oanh'],
    ['Cả lớp lập kế {hoạch} đi dã ngoại.', 'oach'], ['Bé {khoác} áo ấm đi học.', 'oac'], ['Em viết nguệch {ngoạc} vào vở.', 'oac'], ['Bé đang làm {việc} nhà.', 'iêc'], ['Cả nhà dự {tiệc} sinh nhật.', 'iêc'], ['Xem {xiếc} thật vui.', 'iêc'],
    ['Em dùng {thước} kẻ.', 'ươc'], ['Dòng {nước} trong veo.', 'ươc'], ['Bé {bước} lên xe buýt.', 'ươc']
  ].map(([text, van]) => { const word = text.match(/\{([^}]+)\}/)[1]; return { van, word, full: text.replace(/[{}]/g, ''), blank: text.replace(/\{[^}]+\}/, '___'), shown: text }; });
  const sentencesOf = vans => VAN_SENTENCES.filter(x => vans.includes(x.van));
  const tick = van => `\\textbf{\\textcolor{wsAccent}{${van}}}`;

  const findVan = {
    id: 'findvan', name: 'Tìm từ có tiếng chứa vần', grades: [1], defaults: [1], cols: 1, count: 1,
    make({ R }) {
      const pairs = R.sample(VAN_PAIRS, 2), vans = pairs.flat();
      const rows = Array.from({ length: pairs.length }, (_, k) => `${tick(pairs[k][0])}: \\makebox[0.38\\linewidth]{\\dotfill}\\hfill ${tick(pairs[k][1])}: \\makebox[0.38\\linewidth]{\\dotfill}`).join('\\par\\bigskip\n\\noindent ');
      return { instr: 'Tìm từ có tiếng chứa vần:', body: `\\noindent ${rows}\\par\\medskip`, answer: vans.map(v => `${v}: ${R.sample(VAN[v], 3).join(', ')}`).join('; '), items: [], meta: { vans } };
    }
  };
  const fillVan = {
    id: 'fillvan', name: 'Điền vần thích hợp (ăt hay ât?)', grades: [1], defaults: [1], cols: 3, count: 6,
    make({ R, lvl, n, need }) {
      need('blank');
      const [a, b] = R.pick(VAN_PAIRS), pool = [...VAN_WORDS[a], ...VAN_WORDS[b]].filter(w => w.on), items = R.sample(pool, Math.min(n, pool.length)).map(w => ({
        q: `${w.on}\\wsblank[${lvl ? '' : w.tone === 'ngang' ? '' : w.tone}]{1.7cm}`, a: w.word, meta: w }));
      return { instr: `Điền ${tick(a)} hay ${tick(b)}${lvl ? '' : ' (chữ nhỏ trên dòng kẻ là dấu thanh)'}?`, items, cols: 3 };
    }
  };
  const fillVanSentence = {
    id: 'vansentence', name: 'Điền tiếng có vần vào câu', grades: [1], defaults: [1], cols: 1, count: 4,
    make({ R, n }) {
      const [a, b] = R.pick(VAN_PAIRS), pool = sentencesOf([a, b]), picked = R.sample(pool, Math.min(Math.max(3, n), pool.length));
      const body = `\\par ${boxed(R.shuffle(picked.map(x => x.word)))}\\par\\smallskip\n\\begin{enumerate}\n${picked.map(x => `\\item ${x.blank.replace('___', '\\underline{\\hspace{2.6cm}}')}`).join('\n')}\n\\end{enumerate}`;
      return { instr: `Chọn từ có vần ${tick(a)} hoặc ${tick(b)} điền vào chỗ trống:`, body, answer: picked.map((x, i) => `${i + 1}) ${x.word}`).join('; '), items: [], meta: { picked } };
    }
  };
  const underlineVan = {
    id: 'underlinevan', name: 'Gạch dưới tiếng chứa vần', grades: [1], defaults: [], cols: 1, count: 1,
    make({ R }) {
      const [a, b] = R.pick(VAN_PAIRS), picked = R.sample(sentencesOf([a, b]), 4);
      return { instr: `Gạch dưới tiếng chứa vần ${tick(a)}, ${tick(b)} trong các câu sau:`, body: `\\begin{itemize}\n${picked.map(x => `\\item ${x.full}`).join('\n')}\n\\end{itemize}`, answer: picked.map(x => x.word).join('; '), items: [], meta: { picked } };
    }
  };
  const oddVan = {
    id: 'oddvan', name: 'Khoanh tiếng chứa vần khác', grades: [1], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const rows = [], answer = [];
      for (let i = 0; i < Math.max(2, Math.min(3, n)); i++) {
        const [a, b] = R.pick(VAN_PAIRS), flip = R.chance(0.5), main = flip ? b : a, odd = flip ? a : b;
        const same = R.sample(VAN[main], 4), other = R.pick(VAN[odd]), words = R.shuffle([...same, other]);
        rows.push({ words, odd: other, main, oddVan: odd });
        answer.push(`${String.fromCharCode(97 + i)}) ${other}`);
      }
      const body = rows.map((r, i) => `\\noindent ${String.fromCharCode(97 + i)}.\\quad ${r.words.join('\\qquad ')}\\par\\bigskip`).join('\n');
      return { instr: 'Khoanh vào tiếng chứa vần khác các tiếng còn lại:', body, answer: answer.join('; '), items: [], meta: { rows } };
    }
  };

  // sentence halves to join (boxes, as in the workbooks)
  const HALVES = [['Trời mùa thu', 'mát mẻ.'], ['Mẹ nấu', 'cháo bột cho em.'], ['Bé hát', 'líu lo như chim.'], ['Chú thỏ', 'chạy thoăn thoắt.'], ['Con mèo', 'rình bắt chuột nhắt.'], ['Bà ngoại', 'kể chuyện cổ tích.'],
    ['Mùa đông', 'trời rét căm căm.'], ['Quả xoài chín', 'ngọt lịm.'], ['Bạn Mai', 'có mái tóc xoăn.'], ['Chú bộ đội', 'về doanh trại.'], ['Hoa hồng', 'xoè cánh đẹp.'], ['Em tập thể dục', 'để khoẻ mạnh.'],
    ['Cả nhà', 'vui đón Tết.'], ['Dòng nước', 'trong veo.'], ['Cả lớp', 'lập kế hoạch đi dã ngoại.'], ['Chiếc thước kẻ', 'dài hai gang tay.'], ['Bé khoác áo ấm', 'đi học.'], ['Mẹ trồng', 'hoa ngoài vườn.']];
  const boxMatch = (left, right) => `\\begin{center}\\renewcommand{\\arraystretch}{1}\\begin{tabular}{l@{\\hspace{1.6cm}}l}\n${left.map((cell, i) => `\\fbox{\\parbox[c][0.8cm][c]{5.6cm}{\\ ${cell}}} & \\fbox{\\parbox[c][0.8cm][c]{6.8cm}{\\ ${right[i]}}}`).join('\\\\[0.5cm]\n')}\n\\end{tabular}\\end{center}`;
  const joinHalves = {
    id: 'joinhalves', name: 'Nối vế câu', grades: [1, 2], defaults: [1], cols: 1, count: 1,
    make({ R, n }) {
      const chosen = R.sample(HALVES, Math.max(3, Math.min(4, n + 2))), order = R.shuffle(chosen.map((p, i) => ({ p, i })));
      return { instr: 'Nối:', body: boxMatch(chosen.map(p => p[0]), order.map(x => x.p[1])), answer: chosen.map((p, i) => `${p[0]} – ${p[1]}`).join('; '), items: [], meta: { pairs: chosen } };
    }
  };

  const WRONG = [['Bé {iêu|yêu} mẹ và cô.'], ['Bà {rạy|dạy} em học bài.'], ['Trời {rết|rét} căm căm.'], ['Cô giáo {gảng|giảng} bài rất hay.'], ['Ba mua chiếc {se|xe} đạp mới.'], ['Bạn Lan rất {ngoang|ngoan}.'],
    ['Chú thỏ {thoặt|thoắt} chạy vào bụi.'], ['Cả lớp lập kế {hoạnh|hoạch} đi dã ngoại.'], ['Mẹ {cặt|cắt} tóc cho em.'], ['Quả xoài chín {ngột|ngọt} lịm.'], ['Mẹ nêm thêm trái {út|ớt} vào canh.'],
    ['Cô bán {mức|mứt} dừa dịp Tết.'], ['Chiếc chén bị {sức|sứt} mẻ.'], ['Bé {thặt|thật} thà nhận lỗi.']].map(([t]) => { const m = t.match(/\{([^|]+)\|([^}]+)\}/); return { wrong: m[1], right: m[2], bad: t.replace(/\{([^|]+)\|[^}]+\}/, '$1'), good: t.replace(/\{[^|]+\|([^}]+)\}/, '$1') }; });
  const fixSpelling = {
    id: 'fixspell', name: 'Gạch dưới chữ viết sai rồi sửa lại', grades: [1, 2], defaults: [1], cols: 1, count: 3,
    make({ R, n }) {
      const picked = R.sample(WRONG, Math.max(3, Math.min(4, n)));
      const body = `\\begin{itemize}\n${picked.map(x => `\\item ${x.bad}\\hfill \\textit{Sửa lại:} \\makebox[3.6cm]{\\dotfill}`).join('\n')}\n\\end{itemize}`;
      return { instr: 'Gạch dưới những chữ viết sai rồi sửa lại:', body, answer: picked.map(x => `${x.wrong} → ${x.right}`).join('; '), items: [], meta: { picked } };
    }
  };
  const COMPOUNDS = [['đôi', 'mắt'], ['trái', 'đất'], ['thật', 'thà'], ['chim', 'cút'], ['bút', 'chì'], ['mùa', 'thu'], ['bạn', 'tốt'], ['dây', 'diều'], ['sữa', 'chua'], ['khoai', 'lang'], ['hoa', 'sữa'], ['xoài', 'chín'],
    ['kế', 'hoạch'], ['hoạt', 'động'], ['thước', 'kẻ'], ['nước', 'mát'], ['việc', 'nhà'], ['xiếc', 'thú'], ['tết', 'trung thu'], ['mắt', 'kính']];
  const joinSyllables = {
    id: 'joinsyl', name: 'Ghép các tiếng thành từ', grades: [1], defaults: [], cols: 1, count: 1,
    make({ R }) {
      const picked = R.sample(COMPOUNDS, 4), syllables = R.shuffle(picked.flat());
      const body = `\\par ${boxed(syllables)}\\par\\medskip\n\\noindent Ví dụ: \\textbf{${picked[0].join(' ')}}\\par\\smallskip\n${picked.slice(1).map(() => '\\noindent\\makebox[\\linewidth]{\\dotfill}\\par\\medskip').join('\n')}`;
      return { instr: 'Ghép các tiếng sau thành những từ có nghĩa (mỗi tiếng dùng một lần):', body, answer: picked.map(p => p.join(' ')).join('; '), items: [], meta: { picked } };
    }
  };
  const writeSentence = {
    id: 'writesent', name: 'Viết một câu với từ cho trước', grades: [1, 2], defaults: [], cols: 1, count: 2,
    make({ R, n }) {
      const words = R.sample(COMPOUNDS, Math.max(1, Math.min(3, n))).map(p => p.join(' '));
      return { instr: 'Viết một câu với mỗi từ sau:', body: words.map(w => `\\noindent\\textbf{\\textcolor{wsAccent}{${w}}}: \\makebox[0.62\\linewidth]{\\dotfill}\\par\\bigskip`).join('\n'), items: [], noAnswer: true };
    }
  };
  const SENT1 = ['Bé hát líu lo.', 'Mẹ cắt tóc cho bé.', 'Trời mùa thu mát mẻ.', 'Chú thỏ chạy thoăn thoắt.', 'Bà kể chuyện cổ tích.', 'Cả nhà vui đón Tết.', 'Quả ớt đỏ rực.', 'Bé ngoan lễ phép.', 'Cô giáo giảng bài.',
    'Bé tập thể dục mỗi sáng.', 'Chim hót trên cành cây.', 'Mẹ nấu cơm cho cả nhà.'];


  // ---------- riddles and letter puzzles ----------
  const RIDDLES = [
    ['Con gì gáy ò ó o mỗi sáng sớm, gọi mọi người thức dậy?', 'con gà trống', [1, 2, 3]], ['Con gì kêu meo meo, rất giỏi bắt chuột?', 'con mèo', [1, 2, 3]], ['Con gì sủa gâu gâu, trông nhà giúp chủ?', 'con chó', [1, 2, 3]],
    ['Con gì sống dưới nước, thở bằng mang, bơi bằng vây?', 'con cá', [1, 2, 3]], ['Con gì có hai cánh sặc sỡ, hay bay lượn quanh các bông hoa?', 'con bướm', [1, 2, 3]], ['Con gì có cái vòi dài, tai to, thân hình to lớn?', 'con voi', [1, 2, 3]],
    ['Con gì có cổ rất dài, ăn lá trên cao?', 'con hươu cao cổ', [2, 3]], ['Con gì kêu cạc cạc, bơi lội trên ao?', 'con vịt', [1, 2, 3]], ['Quả gì vỏ xanh, ruột đỏ, hạt đen, ăn mát vào mùa hè?', 'quả dưa hấu', [1, 2, 3]],
    ['Quả gì vỏ vàng, cong cong, khỉ rất thích ăn?', 'quả chuối', [1, 2, 3]], ['Cái gì dùng để viết lên bảng, màu trắng, nhỏ như ngón tay?', 'viên phấn', [1, 2, 3]], ['Cái gì dùng để viết, ruột bằng chì, đầu nhọn?', 'bút chì', [1, 2, 3]],
    ['Cái gì đeo trên lưng, đựng sách vở, em mang đến trường mỗi ngày?', 'cái cặp', [1, 2, 3]], ['Cái gì sáng vào ban ngày, chiếu ấm áp cho muôn loài?', 'mặt trời', [1, 2, 3]], ['Cái gì sáng vào ban đêm, khi tròn khi khuyết?', 'mặt trăng', [1, 2, 3]],
    ['Cái gì che mưa che nắng, mở ra thì tròn, gấp lại thì gọn?', 'cái ô (cái dù)', [1, 2, 3]], ['Mùa nào hoa mai, hoa đào nở rộ, cả nhà vui đón Tết?', 'mùa xuân', [2, 3]], ['Mùa nào ve kêu râm ran, phượng nở đỏ rực, học sinh được nghỉ hè?', 'mùa hè', [2, 3]],
    ['Cái gì mỗi ngày đều đi qua nhưng không bao giờ quay lại?', 'thời gian', [3]], ['Cái gì có nhiều chân nhưng không biết đi, dùng để ngồi học?', 'cái bàn (cái ghế)', [2, 3]]
  ].map(([q, a, grades]) => ({ q, a, grades }));
  const riddleVi = {
    id: 'riddlevi', name: 'Câu đố vui (đoán con vật, đồ vật)', grades: [1, 2, 3], defaults: [], cols: 1, count: 4,
    make({ R, g, n }) {
      const items = R.sample(RIDDLES.filter(r => r.grades.includes(g)), n).map(r => ({ q: `${r.q}\\ \\dotfill`, a: r.a, meta: r }));
      return { instr: 'Giải câu đố:', items, cols: 1, long: true };
    }
  };
  const scrambleLetters = {
    id: 'scrambleviet', name: 'Sắp xếp chữ cái thành từ', grades: [1, 2, 3], defaults: [], cols: 2, count: 6,
    make({ R, g, n }) {
      const pool = (g === 1 ? Object.values(VAN).flat().filter(w => w.length >= 3 && w.length <= 5) : [...Object.values(VAN).flat().filter(w => w.length >= 4), ...COMPOUNDS.map(c => c.join(''))]), words = R.sample([...new Set(pool)], n);
      const items = words.map(w => {
        const letters = Array.from(w.normalize('NFC'));
        let mixed = R.shuffle(letters); for (let k = 0; k < 8 && mixed.join('') === letters.join(''); k++) mixed = R.shuffle(letters);
        return { q: `${mixed.map(c => `\\wsbox{${c}}`).join('\\,')}\\ $\\rightarrow$ \\underline{\\hspace{2.4cm}}`, a: w, meta: { word: w, scrambled: mixed.join('') } };
      });
      return { instr: 'Sắp xếp các chữ cái thành từ có nghĩa:', items, cols: 2 };
    }
  };


  // ---------- more Tiếng Việt: rhymes, alphabet order, counting words, capital letters ----------
  const matchRhyme = {
    id: 'matchrhyme', name: 'Nối các tiếng cùng vần', grades: [1], defaults: [], cols: 1, count: 1,
    make({ R }) {
      const vans = R.sample(Object.keys(VAN), 4), pairs = vans.map(v => { const [a, b] = R.sample(VAN[v], 2); return { van: v, a, b }; }), order = R.shuffle(pairs.map((p, i) => ({ p, i })));
      return { instr: 'Nối các tiếng có vần giống nhau:', body: boxMatch(pairs.map(p => p.a), order.map(x => x.p.b)), answer: pairs.map(p => `${p.a} – ${p.b} (vần ${p.van})`).join('; '), items: [], meta: { pairs } };
    }
  };
  const collator = new Intl.Collator('vi');
  const alphabetOrder = {
    id: 'abcorder', name: 'Sắp xếp theo thứ tự bảng chữ cái', grades: [2, 3, 4], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const pool = [...THINGS, ...ACTIONS, ...QUALITIES], items = [];
      for (let i = 0; i < Math.max(2, Math.min(4, n)); i++) {
        const words = R.sample(pool, 5), sorted = [...words].sort(collator.compare);
        items.push({ q: `${boxed(words)}\\\\[3pt]\n\\noindent\\makebox[\\linewidth]{\\dotfill}`, a: sorted.join(', '), meta: { words, sorted } });
      }
      return { instr: 'Sắp xếp các từ sau theo thứ tự bảng chữ cái (a, ă, â, b, c…):', items, cols: 1, long: true };
    }
  };
  const countWords = {
    id: 'countwords', name: 'Đếm số tiếng trong câu', grades: [1], defaults: [], cols: 1, count: 4,
    make({ R, n }) {
      const items = R.sample(SENT1, n).map(t => { const value = t.replace(/[.!?]/g, '').split(' ').length; return { q: `${t}\\hfill Có \\fbox{\\rule{0pt}{0.55cm}\\hspace{0.6cm}} tiếng.`, a: String(value), meta: { value, sentence: t } }; });
      return { instr: 'Đọc câu và đếm xem mỗi câu có mấy tiếng:', items, cols: 1, long: true };
    }
  };
  const NAME_SENTENCES = ['Bạn Lan sống ở Hà Nội.', 'Bà nội của Nam ở Huế.', 'Bác Hồ sinh ra ở Nghệ An.', 'Em đi chơi ở Đà Lạt cùng chị Mai.', 'Dũng và Hoa là bạn thân.', 'Sông Hồng chảy qua Hà Nội.',
    'Chúng em đến thăm Vịnh Hạ Long.', 'Cô Hương dạy môn Toán.', 'Chú Tuấn lái xe từ Hải Phòng đến Huế.', 'Mùa hè, em về quê ở Cần Thơ.', 'Bạn Minh và bạn Hà học cùng lớp.'];
  const capitalNames = {
    id: 'capitalname', name: 'Viết hoa tên riêng', grades: [2, 3], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const picked = R.sample(NAME_SENTENCES, Math.max(3, Math.min(5, n + 1)));
      const body = `\\begin{enumerate}\n${picked.map(t => `\\item ${t.toLowerCase().replace(/^./, c => c)}\\\\[1pt]\\noindent\\makebox[\\linewidth]{\\dotfill}`).join('\n')}\n\\end{enumerate}`;
      return { instr: 'Viết lại các câu sau cho đúng, nhớ viết hoa tên riêng và chữ cái đầu câu:', body, answer: picked.map((t, i) => `${i + 1}) ${t}`).join(' '), items: [], meta: { picked } };
    }
  };

  W.registerSubject({
    id: 'vi', name: 'Tiếng Việt', title: 'Tiếng Việt', palette: { main: '#c0392b', accent: '#27ae60', light: '#fdecea' },
    mascots: ['book', 'pencil'], cheer: 'Chúc em học giỏi Tiếng Việt!', grades: [1, 2, 3, 4, 5],
    topics: [onset, matchPics, copy, picword, findVan, fillVan, fillVanSentence, underlineVan, oddVan, joinHalves, fixSpelling, joinSyllables, writeSentence, riddleVi, scrambleLetters, matchRhyme, alphabetOrder, countWords, capitalNames, spell, classify, unscramble, punct, cloze, antonym, synonym, pos, connect, read, write]
  });
  W.viData = { RIDDLES, VAN, VAN_WORDS, VAN_PAIRS, VAN_SENTENCES, WRONG, COMPOUNDS, HALVES, SENT1, parseWord, ONSET, SPELL, SENTENCES, PUNCT, ANTONYMS, SYNONYMS, POS, CONNECT, PASSAGES, CLOZE, THINGS, ACTIONS, QUALITIES };
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-en.js ---- */
/* Worksheet topics for Tiếng Anh, lớp 1–5. Instructions are in English with a Vietnamese hint. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  const L = () => W.lib;
  const hint = (en, vi) => `${en}\\ \\textit{(${vi})}`;
  const LET = 'abcdefgh';
  const blank = width => `\\underline{\\hspace{${width}}}`;
  const boxed = words => words.map(word => `\\wsbox{${word}}`).join('\\ ');
  const line = n => Array.from({ length: n }, () => '\\noindent\\makebox[\\linewidth]{\\dotfill}\\\\[0.55cm]').join('\n');
  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numberWord = n => n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
  const single = id => /^[a-z]{3,8}$/.test(L().get(id).en);   // one word, letters only

  // categories available by grade
  const CATS = { 1: ['fruit', 'animal', 'school'], 2: ['fruit', 'animal', 'school', 'toy', 'nature', 'body'], 3: ['fruit', 'animal', 'school', 'toy', 'nature', 'body', 'home', 'food', 'clothes', 'transport'] };
  const idsFor = (g, filter = () => true) => L().order.filter(id => L().get(id).cp && CATS[Math.min(3, g)].includes(L().get(id).cat) && filter(id));

  function matchBody(left, right, gap = '4.2cm') {
    const rows = left.map((cell, i) => `${i + 1}. ${cell} & ${LET[i]}) ${right[i]}`).join('\\\\[0.35cm]\n');
    return `\\begin{center}\\renewcommand{\\arraystretch}{1.5}\\begin{tabular}{l@{\\hspace{${gap}}}l}\n${rows}\n\\end{tabular}\\end{center}`;
  }
  function pairsBlock({ R, pool, instr, leftOf }) {
    const chosen = R.sample(pool, Math.min(4, pool.length)), right = R.shuffle(chosen.map((p, i) => ({ p, i })));
    return { instr, body: matchBody(chosen.map(leftOf), right.map(x => x.p.right)), answer: chosen.map((p, i) => `${i + 1} – ${LET[right.findIndex(x => x.i === i)]}`).join(', '), items: [], meta: { pairs: chosen } };
  }

  // ---------- picture vocabulary ----------
  const lookWrite = {
    id: 'lookwrite', name: 'Look and write (nhìn hình viết từ)', grades: [1, 2, 3], defaults: [1, 2, 3], cols: 3, count: 6,
    make({ R, g, n, pic }) {
      const ids = R.sample(idsFor(g), n), words = ids.map(id => L().get(id).en);
      const items = ids.map((id, i) => {
        const word = words[i], first = g === 2 ? `${word[0]}\\ ${Array.from(word.slice(1)).map(c => c === ' ' ? '\\ ' : '\\_').join('\\ ')}` : '';
        return { q: `${pic(id, 1.5)}\\\\[3pt] ${g === 2 ? first : blank('2.6cm')}`, a: word, meta: { id, word } };
      });
      const bank = g === 1 ? `\\par ${boxed(R.shuffle(words))}\\par\\medskip\n` : '';
      return { instr: hint('Look and write.', 'Nhìn hình và viết từ'), body: bank + `\\begin{multicols}{3}\n\\begin{enumerate}\n${items.map(i => '\\item ' + i.q).join('\n')}\n\\end{enumerate}\n\\end{multicols}`, items, cols: 3 };
    }
  };
  const matchPicture = {
    id: 'match', name: 'Match (nối hình với từ)', grades: [1, 2, 3], defaults: [1, 2], cols: 1, count: 1,
    make({ R, g, pic }) {
      const ids = R.sample(idsFor(g), 4), pool = ids.map(id => ({ id, right: L().get(id).en }));
      return pairsBlock({ R, pool, instr: hint('Match the pictures with the words.', 'Nối hình với từ'), leftOf: p => pic(p.id, 1.6) });
    }
  };
  const circle = {
    id: 'circle', name: 'Circle the correct word (khoanh từ đúng)', grades: [1, 2, 3], defaults: [3], cols: 3, count: 6,
    make({ R, g, n, pic }) {
      const items = R.sample(idsFor(g), n).map(id => {
        const ans = L().get(id).en, others = R.sample(idsFor(g, x => x !== id && L().get(x).cat === L().get(id).cat), 2).map(x => L().get(x).en), options = R.shuffle([ans, ...others]);
        return { q: `${pic(id, 1.4)}\\\\[3pt] ${options.map(w => w).join(' \\ / \\ ')}`, a: ans, meta: { id, options, ans } };
      });
      return { instr: hint('Look and circle the correct word.', 'Nhìn hình và khoanh tròn từ đúng'), items, cols: 3 };
    },
    mc({ R, g, pic }) {
      const id = R.pick(idsFor(g)), ans = L().get(id).en, others = R.sample(idsFor(g, x => x !== id), 3).map(x => L().get(x).en), options = R.shuffle([ans, ...others]);
      return { stem: `What is this? ${pic(id, 1.2)}`, options, correct: options.indexOf(ans) };
    }
  };
  const missing = {
    id: 'missing', name: 'Missing letters (điền chữ cái còn thiếu)', grades: [1, 2, 3, 4], defaults: [], cols: 3, count: 6,
    make({ R, g, n, pic }) {
      const items = R.sample(idsFor(g, single), n).map(id => {
        const word = L().get(id).en, vowels = [...word].map((c, i) => 'aeiou'.includes(c) ? i : -1).filter(i => i >= 0), consonants = [...word].map((c, i) => 'aeiou'.includes(c) ? -1 : i).filter(i => i >= 0);
        const holes = new Set(g === 1 ? R.sample(vowels.length ? vowels : consonants, 1) : [...R.sample(vowels.length ? vowels : consonants, 1), ...R.sample(consonants.length ? consonants : vowels, 1)]);
        const shown = [...word].map((c, i) => holes.has(i) ? blank('0.38cm') : c).join('\\,');
        return { q: `${pic(id, 1.2)}\\\\[3pt] ${shown}`, a: word, meta: { id, word, holes: [...holes] } };
      });
      return { instr: hint('Fill in the missing letters.', 'Điền chữ cái còn thiếu'), items, cols: 3 };
    }
  };
  const scramble = {
    id: 'scramble', name: 'Unscramble the words (sắp xếp chữ cái)', grades: [2, 3, 4, 5], defaults: [3], cols: 3, count: 6,
    make({ R, g, n, pic }) {
      const items = R.sample(idsFor(Math.min(3, g), single), n).map(id => {
        const word = L().get(id).en; let letters = R.shuffle([...word]); for (let k = 0; k < 8 && letters.join('') === word; k++) letters = R.shuffle([...word]);
        return { q: `${g <= 3 ? pic(id, 1.2) + '\\\\[3pt] ' : ''}\\textbf{${letters.join(' ')}}\\\\[2pt] ${blank('2.6cm')}`, a: word, meta: { id, word, scrambled: letters.join('') } };
      });
      return { instr: hint('Unscramble the letters to make words.', 'Sắp xếp các chữ cái thành từ'), items, cols: 3 };
    }
  };
  const count = {
    id: 'count', name: 'Count and write (đếm và viết)', grades: [1, 2, 3], defaults: [1, 2], cols: 1, count: 4,
    make({ R, g, n, pic }) {
      const max = g === 1 ? 10 : g === 2 ? 12 : 20, ids = R.shuffle(L().countable().filter(id => ['fruit', 'animal', 'toy', 'nature', 'school'].includes(L().get(id).cat) && L().get(id).cp)), items = [];
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], k = R.int(2, max), plural = L().plural(id);
        const row = Array.from({ length: k }, () => pic(id, k > 10 ? 0.75 : 0.95)).join('\\,');
        items.push({ q: `${row}\\\\ How many ${plural}? ${g === 1 ? '\\ ' + blank('1.2cm') : `There are ${blank('2cm')} ${plural}.`}`, a: g === 1 ? String(k) : numberWord(k), meta: { id, k } });
      }
      return { instr: hint('Count and write.', 'Đếm và viết số'), items, cols: 1 };
    }
  };

  // ---------- colours ----------
  const COLOURS = [['red', 'red'], ['blue', 'blue'], ['green', 'green'], ['yellow', 'yellow'], ['orange', 'orange'], ['purple', 'violet'], ['brown', 'brown'], ['black', 'black']];
  const swatch = x11 => `{\\tikz\\fill[${x11}] (0,0) circle (0.28);}`;
  const colours = {
    id: 'colours', name: 'Match the colours (nối màu)', modes: ['color'], grades: [1, 2], defaults: [1], cols: 1, count: 1,
    make({ R }) {
      const pool = R.sample(COLOURS, 4).map(([name, x11]) => ({ name, x11, right: name }));
      return pairsBlock({ R, pool, instr: hint('Match the colours with the words.', 'Nối màu với từ'), leftOf: p => swatch(p.x11) });
    }
  };
  const colourIt = {
    id: 'colourit', name: 'Colour the pictures (tô màu)', grades: [1, 2], defaults: [1, 2], cols: 1, count: 4,
    make({ R, n, pic, canOutline, bw }) {
      const ids = R.shuffle(L().order.filter(id => L().get(id).cp && canOutline(id) && L().get(id).cat !== 'shape')), picked = COLOURS.filter(([name]) => !['black'].includes(name));
      const items = [];
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], [name, x11] = R.pick(picked), item = L().get(id);
        items.push({ q: `${pic(id, 1.9, true)}\\quad Colour the \\textbf{${item.en}} ${bw ? `\\textbf{${name}}` : `\\textcolor{${x11}}{\\textbf{${name}}}`}.`, a: `${item.en}: ${name}`, meta: { id, name } });
      }
      const palette = `\\par ${picked.map(([name, x11]) => `${bw ? '{\\tikz\\draw[line width=0.8pt] (0,0) circle (0.28);}' : swatch(x11)}\\,${name}`).join('\\quad ')}\\par\\smallskip\n`;
      return { instr: hint('Listen and colour.', 'Nghe và tô màu theo yêu cầu'), body: palette + `\\begin{enumerate}\n${items.map(i => '\\item ' + i.q).join('\n')}\n\\end{enumerate}`, items, cols: 1, noAnswer: true };
    }
  };

  // ---------- numbers ----------
  const numbers = {
    id: 'numbers', name: 'Numbers (viết số bằng chữ)', grades: [1, 2, 3], defaults: [1, 2], cols: 3, count: 6,
    make({ R, g, n, need }) {
      need('arrow');
      const max = g === 1 ? 10 : g === 2 ? 20 : 99, items = [], seen = new Set();
      while (items.length < n) {
        const v = R.int(1, max); if (seen.has(v)) continue; seen.add(v);
        items.push(items.length % 2 === 0
          ? { q: `$${v}$ \\wsarrow{0.7} ${blank('2.6cm')}`, a: `${v} = ${numberWord(v)}`, meta: { value: v, word: numberWord(v) } }
          : { q: `${numberWord(v)} \\wsarrow{0.7} ${blank('1.2cm')}`, a: `${numberWord(v)} = ${v}`, meta: { value: v, word: numberWord(v) } });
      }
      return { instr: hint('Write the numbers.', 'Viết số bằng chữ hoặc bằng số'), items, cols: 3 };
    }
  };

  // ---------- true / false with pictures ----------
  const tickCross = {
    id: 'tf', name: 'True or false (đúng hay sai)', grades: [2, 3, 4, 5], defaults: [3], cols: 2, count: 6,
    make({ R, g, n, pic }) {
      const items = R.sample(idsFor(g), n).map(id => {
        const truth = R.chance(0.5), shown = truth ? id : R.pick(idsFor(g, x => x !== id && L().get(x).cat === L().get(id).cat));
        const sentence = g >= 3 && R.chance(0.5) ? `It is ${L().withArticle(shown)}.` : `This is ${L().withArticle(shown)}.`;
        return { q: `${pic(id, 1.3)}\\ ${sentence}\\hfill T\\,/\\,F`, a: truth ? 'T' : 'F', meta: { id, shown, truth } };
      });
      return { instr: hint('Look and write T (true) or F (false).', 'Nhìn hình, viết T (đúng) hoặc F (sai)'), items, cols: 2 };
    }
  };

  // ---------- grammar with pictures ----------
  const article = {
    id: 'article', name: 'a / an', grades: [2, 3], defaults: [2], cols: 3, count: 6,
    make({ R, g, n, pic }) {
      const items = R.sample(L().countable().filter(id => L().get(id).cp && CATS[Math.min(3, g)].includes(L().get(id).cat) && !L().get(id).uncountable), n).map(id => {
        const item = L().get(id), art = L().withArticle(id).split(' ')[0];
        return { q: `${pic(id, 1.2)}\\\\[3pt] This is ${blank('0.9cm')} ${item.en}.`, a: `${art} ${item.en}`, meta: { id, art } };
      });
      return { instr: hint('Write a or an.', 'Điền a hoặc an'), items, cols: 3 };
    },
    mc({ R, g, pic }) {
      const id = R.pick(L().countable().filter(x => L().get(x).cp && CATS[Math.min(3, g)].includes(L().get(x).cat))), correct = L().withArticle(id).split(' ')[0], options = ['a', 'an', 'the'].slice(0, 3);
      return { stem: `${pic(id, 1.1)} This is \\ldots\\ ${L().get(id).en}.`, options, correct: options.indexOf(correct) };
    }
  };
  const plural = {
    id: 'plural', name: 'Plural nouns (danh từ số nhiều)', grades: [3, 4, 5], defaults: [4], cols: 3, count: 6,
    make({ R, n, pic, need }) {
      need('arrow');
      const items = R.sample(L().countable().filter(id => L().get(id).cp && !L().get(id).pluralOnly && !L().get(id).uncountable), n).map(id => ({
        q: `${pic(id, 1.1)}\\\\[3pt] one ${L().get(id).en} \\wsarrow{0.7} two ${blank('2.2cm')}`, a: `two ${L().plural(id)}`, meta: { id, plural: L().plural(id) }
      }));
      return { instr: hint('Write the plural form.', 'Viết danh từ ở dạng số nhiều'), items, cols: 3 };
    },
    mc({ R }) {
      const id = R.pick(L().countable().filter(x => L().get(x).cp)), right = L().plural(id), wrong = R.sample([L().get(id).en, L().get(id).en + 's', L().get(id).en + 'es', L().get(id).en + 'ies'].filter(w => w !== right), 3), options = R.shuffle([right, ...wrong]);
      return { stem: `The plural of “${L().get(id).en}” is:`, options, correct: options.indexOf(right) };
    }
  };
  const thereIs = {
    id: 'thereis', name: 'There is / There are', grades: [3, 4, 5], defaults: [3, 4], cols: 1, count: 4,
    make({ R, n, pic }) {
      const ids = R.shuffle(L().countable().filter(id => L().get(id).cp && ['fruit', 'animal', 'toy', 'school'].includes(L().get(id).cat))), items = [];
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], k = R.pick([1, 1, 2, 3, 4, 5, 6]), noun = k === 1 ? L().withArticle(id) : `${numberWord(k)} ${L().plural(id)}`;
        const row = Array.from({ length: k }, () => pic(id, 0.9)).join('\\,');
        items.push({ q: `${row}\\\\ There ${blank('1.4cm')} ${noun} in the picture. \\textit{(is / are)}`, a: `There ${k === 1 ? 'is' : 'are'} ${noun} in the picture.`, meta: { id, k, ans: k === 1 ? 'is' : 'are' } });
      }
      return { instr: hint('Look and write is or are.', 'Nhìn hình, điền is hoặc are'), items, cols: 1, long: true };
    }
  };
  const likes = {
    id: 'likes', name: 'I like / I don’t like', grades: [1, 2, 3], defaults: [2], cols: 2, count: 6,
    make({ R, n, pic }) {
      const ids = R.sample(L().order.filter(id => L().get(id).cp && ['fruit', 'food', 'animal', 'veg'].includes(L().get(id).cat)), n), items = ids.map(id => {
        const like = R.chance(0.5), noun = L().plural(id);
        return { q: `${pic(id, 1.2)}\\ ${like ? '$\\checkmark$' : '$\\times$'}\\ I ${blank('2.4cm')} ${noun}.`, a: `I ${like ? 'like' : 'don’t like'} ${noun}.`, meta: { id, like } };
      });
      return { instr: hint('Look and write “like” or “don’t like”.', 'Nhìn hình, viết like hoặc don’t like'), items, cols: 2 };
    }
  };

  // ---------- grammar sentences (circle the correct word) ----------
  const GRAMMAR = [
    { grades: [3], q: 'I ___ a pupil.', o: ['am', 'is', 'are'], a: 0 }, { grades: [3], q: 'She ___ my sister.', o: ['am', 'is', 'are'], a: 1 }, { grades: [3], q: 'They ___ in the classroom.', o: ['am', 'is', 'are'], a: 2 },
    { grades: [3], q: 'My brother ___ ten years old.', o: ['is', 'are', 'am'], a: 0 }, { grades: [3], q: 'We ___ good friends.', o: ['is', 'am', 'are'], a: 2 }, { grades: [3], q: 'The cat ___ under the table.', o: ['is', 'are', 'am'], a: 0 },
    { grades: [3], q: 'This is ___ book. I am Nam.', o: ['my', 'your', 'his'], a: 0 }, { grades: [3, 4], q: 'I ___ a new bag.', o: ['have', 'has'], a: 0 }, { grades: [3, 4], q: 'She ___ two cats.', o: ['have', 'has'], a: 1 },
    { grades: [3, 4], q: 'They ___ many books.', o: ['have', 'has'], a: 0 }, { grades: [3, 4], q: 'Tom ___ a red ball.', o: ['have', 'has'], a: 1 }, { grades: [3, 4], q: 'I can ___ very well.', o: ['swim', 'swims', 'swimming'], a: 0 },
    { grades: [3, 4], q: 'She can ___ English songs.', o: ['sings', 'sing', 'singing'], a: 1 },
    { grades: [3, 4, 5], q: '___ is your name?', o: ['What', 'Where', 'Who'], a: 0 }, { grades: [3, 4, 5], q: '___ are you from?', o: ['Where', 'Who', 'When'], a: 0 }, { grades: [3, 4, 5], q: '___ old are you?', o: ['How', 'What', 'Who'], a: 0 },
    { grades: [3, 4, 5], q: '___ is that man? He is my uncle.', o: ['Who', 'What', 'Where'], a: 0 }, { grades: [3, 4, 5], q: '___ do you get up? At six o’clock.', o: ['When', 'Where', 'Who'], a: 0 },
    { grades: [3, 4, 5], q: 'I go to school ___ bike.', o: ['by', 'on', 'in'], a: 0 }, { grades: [3, 4, 5], q: 'We have English ___ Monday.', o: ['on', 'at', 'in'], a: 0 }, { grades: [3, 4, 5], q: 'My birthday is ___ May.', o: ['in', 'on', 'at'], a: 0 },
    { grades: [3, 4, 5], q: 'School starts ___ seven o’clock.', o: ['at', 'in', 'on'], a: 0 },
    { grades: [4, 5], q: 'He ___ to school by bike every day.', o: ['go', 'goes', 'going'], a: 1 }, { grades: [4, 5], q: 'My mother ___ dinner at six.', o: ['cook', 'cooks', 'cooking'], a: 1 }, { grades: [4, 5], q: 'They ___ football on Sundays.', o: ['play', 'plays', 'playing'], a: 0 },
    { grades: [4, 5], q: 'She doesn’t ___ milk.', o: ['like', 'likes', 'liking'], a: 0 }, { grades: [4, 5], q: 'I ___ up at six o’clock.', o: ['get', 'gets', 'getting'], a: 0 }, { grades: [4, 5], q: 'Mai ___ her teeth twice a day.', o: ['brush', 'brushes', 'brushing'], a: 1 },
    { grades: [4, 5], q: 'The sun ___ in the east.', o: ['rise', 'rises', 'rising'], a: 1 },
    { grades: [5], q: 'Look! The children ___ in the yard.', o: ['are playing', 'is playing', 'play'], a: 0 }, { grades: [5], q: 'I ___ a book now.', o: ['am reading', 'read', 'reads'], a: 0 }, { grades: [5], q: 'What ___ you doing?', o: ['are', 'is', 'do'], a: 0 },
    { grades: [5], q: 'She ___ TV at the moment.', o: ['watches', 'is watching', 'watch'], a: 1 }, { grades: [5], q: 'Yesterday I ___ to the zoo.', o: ['go', 'went', 'goes'], a: 1 }, { grades: [5], q: 'She ___ a cake last Sunday.', o: ['made', 'make', 'makes'], a: 0 },
    { grades: [5], q: 'We ___ football yesterday.', o: ['play', 'played', 'plays'], a: 1 }, { grades: [5], q: 'He ___ happy last night.', o: ['is', 'was', 'were'], a: 1 }
  ];
  const grammar = {
    id: 'grammar', name: 'Choose the correct word (ngữ pháp)', grades: [3, 4, 5], defaults: [3, 4, 5], cols: 1, count: 6,
    make({ R, g, n }) {
      const items = R.sample(GRAMMAR.filter(x => x.grades.includes(g)), n).map(x => ({ q: `${x.q.replace('___', blank('1.5cm'))}\\\\ \\textit{(${x.o.join(' / ')})}`, a: x.q.replace('___', `\\textbf{${x.o[x.a]}}`), meta: x }));
      return { instr: hint('Choose the correct word and write it.', 'Chọn từ đúng và viết vào chỗ trống'), items, cols: 1, long: true };
    },
    mc({ R, g }) {
      const x = R.pick(GRAMMAR.filter(y => y.grades.includes(g))), options = R.shuffle(x.o.map((o, i) => ({ o, ok: i === x.a })));
      return { stem: x.q.replace('___', '\\ldots'), options: options.map(y => y.o), correct: options.findIndex(y => y.ok) };
    }
  };

  const QA = [['What’s your name?', 'My name is Nam.'], ['How old are you?', 'I’m nine years old.'], ['Where are you from?', 'I’m from Viet Nam.'], ['What’s this?', 'It’s a book.'], ['Do you like cats?', 'Yes, I do.'],
    ['What time is it?', 'It’s seven o’clock.'], ['What colour is it?', 'It’s red.'], ['Can you swim?', 'Yes, I can.'], ['Who is she?', 'She is my mother.'], ['How are you?', 'I’m fine, thank you.'],
    ['What’s the weather like today?', 'It’s sunny.'], ['Where is the cat?', 'It’s under the table.']];
  const qa = {
    id: 'qa', name: 'Match questions and answers', grades: [3, 4, 5], defaults: [4, 5], cols: 1, count: 1,
    make({ R }) { return pairsBlock({ R, pool: QA.map(([q, a]) => ({ left: q, right: a })), instr: hint('Match the questions with the answers.', 'Nối câu hỏi với câu trả lời'), leftOf: p => p.left }); },
    mc({ R }) {
      const [q, a] = R.pick(QA), options = R.shuffle([a, ...R.sample(QA.filter(x => x[1] !== a).map(x => x[1]), 3)]);
      return { stem: `${q}`, options, correct: options.indexOf(a) };
    }
  };

  // ---------- word order ----------
  const SENTENCES = {
    3: ['This is my school bag.', 'I have two small cats.', 'She is a good student.', 'What is your name?', 'My father is a doctor.', 'They are playing in the park.', 'I can ride a bike.', 'There is a book on the table.'],
    4: ['He gets up at six o’clock.', 'My mother cooks dinner every evening.', 'We are going to visit our grandparents.', 'She doesn’t like noodles.', 'What time do you go to school?', 'Do you like watching cartoons?'],
    5: ['Yesterday we went to the beach.', 'I’m taller than my brother.', 'What are you doing now?', 'My sister is reading a book in her room.', 'They visited the zoo last Sunday.', 'Which subject do you like best?']
  };
  const sentenceOrder = {
    id: 'order', name: 'Put the words in order', grades: [3, 4, 5], defaults: [4, 5], cols: 1, count: 4,
    make({ R, g, n }) {
      const pool = g === 3 ? SENTENCES[3] : g === 4 ? [...SENTENCES[3], ...SENTENCES[4]] : [...SENTENCES[4], ...SENTENCES[5]];
      const items = R.sample(pool, n).map(s => {
        const words = s.replace(/[.?]$/, '').split(' '); let sh = R.shuffle(words); for (let k = 0; k < 6 && sh.join(' ') === words.join(' '); k++) sh = R.shuffle(words);
        return { q: `${boxed(sh)}\\\\[3pt]\n\\noindent\\makebox[\\linewidth]{\\dotfill}`, a: s, meta: { words, sentence: s } };
      });
      return { instr: hint('Put the words in order to make sentences.', 'Sắp xếp các từ thành câu'), items, cols: 1, long: true };
    }
  };

  // ---------- reading ----------
  const PASSAGES = [
    { grades: [3], text: 'My name is Lan. I am nine years old. I live in Ha Noi. I have a cat. Its name is Mimi. Mimi is white. I like Mimi very much.',
      qs: [['Lan is ten years old.', false], ['Lan lives in Ha Noi.', true], ['Lan has a dog.', false], ['The cat is white.', true]] },
    { grades: [4], text: 'Tom gets up at six o’clock every morning. He brushes his teeth and has breakfast at six thirty. He goes to school by bike. School starts at seven fifteen. In the afternoon, he plays football with his friends.',
      qs: [['Tom gets up at six o’clock.', true], ['He goes to school by bus.', false], ['School starts at seven thirty.', false], ['He plays football in the afternoon.', true]] },
    { grades: [5], text: 'Last Sunday, my family went to the zoo. We saw elephants, monkeys and tigers. My little sister liked the monkeys because they were funny. We had lunch under a big tree. We came home at five o’clock. It was a wonderful day.',
      qs: [['They went to the zoo last Sunday.', true], ['They saw lions.', false], ['The monkeys were funny.', true], ['They came home at six o’clock.', false]] }
  ];
  const read = {
    id: 'read', name: 'Reading (đọc hiểu đúng / sai)', grades: [3, 4, 5], defaults: [3, 4, 5], cols: 1, count: 1,
    make({ R, g }) {
      const passage = R.pick(PASSAGES.filter(p => p.grades.includes(g)));
      const body = `\\noindent\\fcolorbox{wsMain}{wsLight}{\\parbox{0.94\\linewidth}{\\vspace{3pt}${passage.text}\\vspace{3pt}}}\\par\\medskip\n\\begin{enumerate}\n${passage.qs.map(([s]) => `\\item ${s} \\hfill T\\,/\\,F`).join('\n')}\n\\end{enumerate}`;
      return { instr: hint('Read and write T (true) or F (false).', 'Đọc và viết T (đúng) hoặc F (sai)'), body, answer: passage.qs.map(([, t], i) => `${i + 1}) ${t ? 'T' : 'F'}`).join('; '), items: [], meta: { passage } };
    }
  };

  // ---------- word search ----------
  function buildGrid(R, words, size, diagonal) {
    const grid = Array.from({ length: size }, () => Array(size).fill('')), dirs = [[0, 1], [1, 0]].concat(diagonal ? [[1, 1]] : []), placed = [];
    for (const word of words) {
      const text = word.toUpperCase();
      let ok = false;
      for (let attempt = 0; attempt < 300 && !ok; attempt++) {
        const [dr, dc] = R.pick(dirs), r = R.int(0, size - 1), c = R.int(0, size - 1), er = r + dr * (text.length - 1), ec = c + dc * (text.length - 1);
        if (er >= size || ec >= size) continue;
        const cells = [...text].map((ch, i) => [r + dr * i, c + dc * i, ch]);
        if (cells.some(([rr, cc, ch]) => grid[rr][cc] && grid[rr][cc] !== ch)) continue;
        cells.forEach(([rr, cc, ch]) => { grid[rr][cc] = ch; });
        placed.push({ word: text, row: r, col: c, dr, dc }); ok = true;
      }
      if (!ok) return null;
    }
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (!grid[r][c]) grid[r][c] = String.fromCharCode(65 + R.int(0, 25));
    return { grid, placed };
  }
  const wordSearch = {
    id: 'wordsearch', name: 'Word search (ô chữ)', grades: [2, 3, 4, 5], defaults: [3, 4], cols: 1, count: 1,
    make({ R, g, pic }) {
      const ids = R.sample(idsFor(g, id => single(id) && L().get(id).en.length <= 8), 6), size = g <= 2 ? 8 : 10;
      let built = null; for (let tries = 0; tries < 20 && !built; tries++) built = buildGrid(R, ids.map(id => L().get(id).en), size, g >= 4);
      if (!built) return null;
      const rows = built.grid.map(row => row.join(' & ')).join('\\\\ \\hline\n');
      const table = `\\begin{center}\\renewcommand{\\arraystretch}{1.45}\\setlength{\\tabcolsep}{6pt}\\large\\sffamily\\bfseries\\begin{tabular}{|*{${size}}{c|}}\\hline\n${rows}\\\\ \\hline\n\\end{tabular}\\end{center}`;
      const cells = ids.map(id => `${pic(id, 1)}\\,${blank('2.4cm')}`), list = `\\par\\medskip ${[cells.slice(0, 3).join('\\qquad '), cells.slice(3).join('\\qquad ')].filter(Boolean).join('\\par\\medskip ')}\\par`;
      return { instr: hint('Find the words and write them under the pictures.', 'Tìm các từ trong bảng rồi viết dưới mỗi hình'), body: table + list, answer: ids.map(id => L().get(id).en).join(', '), items: [], meta: { ids, ...built, size } };
    }
  };

  // ---------- writing ----------
  const WRITE = { 2: ['Look at the picture. Write two sentences: “This is a/an \\ldots. It is \\ldots.”', 2], 3: ['Look at the picture and write 3 – 4 sentences. What is it? What colour is it? Do you like it?', 4], 4: ['Write 4 – 5 sentences about your favourite animal or fruit.', 5], 5: ['Write 5 – 6 sentences about your last weekend. Where did you go? Who did you go with? What did you do?', 6] };
  const write = {
    id: 'write', name: 'Writing (viết theo gợi ý)', grades: [2, 3, 4, 5], defaults: [5], cols: 1, count: 1,
    make({ R, g, pic }) {
      const id = R.pick(idsFor(g)), [prompt, lines] = WRITE[g];
      return { instr: hint('Write about the picture.', 'Viết theo gợi ý'), body: `\\begin{center}${pic(id, 2.2)}\\end{center}\n\\par ${prompt}\\par\\medskip\n${line(lines)}`, items: [], noAnswer: true };
    }
  };


  // ---------- more variety: opposites, odd word out, ABC order, days, wh-words, rhymes, capital letters, past, comparatives ----------
  const OPPOSITES = [['big', 'small'], ['hot', 'cold'], ['up', 'down'], ['happy', 'sad'], ['fast', 'slow'], ['long', 'short'], ['old', 'new'], ['open', 'close'], ['day', 'night'], ['in', 'out'], ['full', 'empty'], ['clean', 'dirty'],
    ['hard', 'soft'], ['heavy', 'light'], ['black', 'white'], ['boy', 'girl'], ['yes', 'no'], ['young', 'old'], ['early', 'late'], ['wet', 'dry'], ['high', 'low'], ['love', 'hate']];
  const opposites = {
    id: 'opposites', name: 'Opposites (từ trái nghĩa)', grades: [2, 3, 4, 5], defaults: [3], cols: 1, count: 1,
    make({ R }) {
      const pool = R.sample(OPPOSITES, 4).map(([a, b]) => ({ left: a, right: b }));
      return pairsBlock({ R, pool, instr: hint('Match the opposites.', 'Nối các từ trái nghĩa'), leftOf: p => `\\textbf{${p.left}}` });
    }
  };
  const oddWord = {
    id: 'oddword', name: 'Odd one out (từ khác loại)', grades: [2, 3, 4, 5], defaults: [], cols: 1, count: 4,
    make({ R, g, n }) {
      const cats = ['fruit', 'animal', 'toy', 'food', 'clothes', 'transport', 'body', 'home'], items = [];
      for (let i = 0; i < n; i++) {
        const [ca, cb] = R.sample(cats, 2), words = id => L().get(id).en, same = R.sample(L().byCat(ca).filter(single), 3), odd = R.pick(L().byCat(cb).filter(single));
        const all = R.shuffle([...same.map(words), words(odd)]);
        items.push({ q: all.join(' \\quad '), a: words(odd), meta: { odd: words(odd), all } });
      }
      return { instr: hint('Circle the odd one out.', 'Khoanh từ khác loại'), items, cols: 1, long: true };
    }
  };
  const abcOrder = {
    id: 'abcorder', name: 'ABC order (xếp theo bảng chữ cái)', grades: [2, 3, 4], defaults: [], cols: 1, count: 3,
    make({ R, g, n }) {
      const pool = idsFor(g, single), items = [];
      for (let i = 0; i < Math.max(2, Math.min(4, n)); i++) {
        const words = R.sample([...new Set(pool.map(id => L().get(id).en))], 5), sorted = [...words].sort();
        items.push({ q: `${boxed(words)}\\\\[3pt]\n\\noindent\\makebox[\\linewidth]{\\dotfill}`, a: sorted.join(', '), meta: { words, sorted } });
      }
      return { instr: hint('Write the words in ABC order.', 'Viết các từ theo thứ tự bảng chữ cái'), items, cols: 1, long: true };
    }
  };
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysMonths = {
    id: 'daysmonths', name: 'Days and months (thứ, tháng)', grades: [2, 3, 4], defaults: [], cols: 1, count: 4,
    make({ R, g, n }) {
      const items = [];
      for (let i = 0; i < n; i++) {
        const list = i % 2 === 0 ? DAYS : MONTHS, start = R.int(0, list.length - 4), seq = list.slice(start, start + 4), hide = R.int(1, 2), shown = seq.map((w, k) => k === hide ? blank('3cm') : w);
        items.push({ q: shown.join(', '), a: seq[hide], meta: { seq, hide } });
      }
      return { instr: hint('Write the missing day or month.', 'Viết thứ hoặc tháng còn thiếu'), items, cols: 1, long: true };
    }
  };
  const WH = [['___ is your name?', 'What'], ['___ is your teacher?', 'Who'], ['___ do you live?', 'Where'], ['___ do you go to school?', 'When'], ['___ are you sad?', 'Why'], ['___ old are you?', 'How'],
    ['___ is your birthday?', 'When'], ['___ is that boy?', 'Who'], ['___ is your school bag?', 'Where'], ['___ do you like for lunch?', 'What'], ['___ many apples are there?', 'How'], ['___ did you come late?', 'Why']];
  const whWords = {
    id: 'whwords', name: 'Who, What, Where, When, Why, How', grades: [3, 4, 5], defaults: [], cols: 1, count: 6,
    make({ R, n }) {
      const picked = R.sample(WH, n), items = picked.map(([q, a]) => ({ q: q.replace('___', blank('2cm')), a, meta: { answer: a } }));
      const body = `\\par ${boxed(['Who', 'What', 'Where', 'When', 'Why', 'How'])}\\par\\medskip\n\\begin{multicols}{2}\\begin{enumerate}\n${items.map(i => '\\item ' + i.q).join('\n')}\n\\end{enumerate}\\end{multicols}`;
      return { instr: hint('Complete the questions with a word from the box.', 'Điền từ để hỏi trong khung'), body, items, cols: 2 };
    }
  };
  const RHYMES = [['cat', 'hat'], ['dog', 'frog'], ['bee', 'tree'], ['sun', 'run'], ['bed', 'red'], ['pen', 'ten'], ['star', 'car'], ['cake', 'lake'], ['moon', 'spoon'], ['fish', 'dish'], ['king', 'ring'], ['mouse', 'house']];
  const rhymes = {
    id: 'rhymes', name: 'Rhyming words (từ vần với nhau)', grades: [2, 3], defaults: [], cols: 1, count: 1,
    make({ R }) {
      const pool = R.sample(RHYMES, 4).map(([a, b]) => ({ left: a, right: b }));
      return pairsBlock({ R, pool, instr: hint('Match the words that rhyme.', 'Nối các từ có vần giống nhau'), leftOf: p => `\\textbf{${p.left}}` });
    }
  };
  const CAP = ['my name is anna.', 'i like red apples.', 'we go to school on monday.', 'the cat is on the bed.', 'tom has a new bike.', 'she is my best friend.', 'they play football in the park.', 'it is a sunny day.', 'my mother cooks dinner at home.', 'lan lives in ha noi.'];
  const capital = {
    id: 'capital', name: 'Capital letters and full stops', grades: [2, 3, 4], defaults: [], cols: 1, count: 3,
    make({ R, n }) {
      const picked = R.sample(CAP, Math.max(3, Math.min(5, n))), fix = t => t.replace(/(^|\. )([a-z])/g, (_, a, b) => a + b.toUpperCase()).replace(/\b(anna|tom|lan|ha noi|monday)\b/g, m => m.replace(/\b[a-z]/g, c => c.toUpperCase()));
      const items = picked.map(t => ({ q: `${t.replace(/\.$/, '')}\\\\ \\noindent\\makebox[\\linewidth]{\\dotfill}`, a: fix(t), meta: { sentence: fix(t) } }));
      return { instr: hint('Rewrite the sentences with capital letters and a full stop.', 'Viết lại câu: chữ hoa đầu câu, tên riêng và dấu chấm'), items, cols: 1, long: true };
    }
  };
  const PAST = [['go', 'went'], ['eat', 'ate'], ['see', 'saw'], ['play', 'played'], ['have', 'had'], ['come', 'came'], ['walk', 'walked'], ['write', 'wrote'], ['help', 'helped'], ['buy', 'bought'], ['drink', 'drank'], ['watch', 'watched']];
  const pastTense = {
    id: 'past', name: 'Past simple (động từ quá khứ)', grades: [4, 5], defaults: [], cols: 3, count: 6,
    make({ R, n }) {
      const items = R.sample(PAST, n).map(([a, b]) => ({ q: `${a} $\\rightarrow$ ${blank('2.2cm')}`, a: b, meta: { base: a, past: b } }));
      return { instr: hint('Write the past form of each verb.', 'Viết dạng quá khứ của động từ'), items, cols: 3 };
    }
  };
  const COMPARE = [['tall', 'taller'], ['short', 'shorter'], ['big', 'bigger'], ['small', 'smaller'], ['fast', 'faster'], ['happy', 'happier'], ['good', 'better'], ['bad', 'worse'], ['long', 'longer'], ['heavy', 'heavier'], ['old', 'older'], ['hot', 'hotter']];
  const comparatives = {
    id: 'compare', name: 'Comparatives (so sánh hơn)', grades: [4, 5], defaults: [], cols: 3, count: 6,
    make({ R, n }) {
      const items = R.sample(COMPARE, n).map(([a, b]) => ({ q: `${a} $\\rightarrow$ ${blank('2.4cm')}`, a: b, meta: { base: a, comp: b } }));
      return { instr: hint('Write the comparative form.', 'Viết dạng so sánh hơn'), items, cols: 3 };
    }
  };

  W.registerSubject({
    id: 'en', name: 'Tiếng Anh', title: 'Tiếng Anh', palette: { main: '#7d3cb5', accent: '#16a085', light: '#f2eafa' },
    mascots: ['balloon', 'rainbow'], cheer: 'Good luck! Chúc em học giỏi Tiếng Anh!', grades: [1, 2, 3, 4, 5],
    topics: [lookWrite, matchPicture, circle, missing, scramble, count, colours, colourIt, numbers, tickCross, article, plural, thereIs, likes, grammar, qa, sentenceOrder, read, wordSearch, write, opposites, oddWord, abcOrder, daysMonths, whWords, rhymes, capital, pastTense, comparatives]
  });
  W.enData = { OPPOSITES, RHYMES, PAST, COMPARE, WH, GRAMMAR, QA, SENTENCES, PASSAGES, COLOURS, numberWord, buildGrid };
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-pre.js ---- */
/* Worksheet topics for pre-school children (about 4–6 years old): tracing lines, shapes, letters and numbers,
   matching pictures with numbers and words, counting, colouring and dot-to-dot. Big pictures, little text. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  const L = () => W.lib;
  const LET = 'abcdefgh';
  const BOX = '\\fcolorbox{wsAccent}{white}{\\rule{0pt}{1.15cm}\\rule{1.15cm}{0pt}}';
  const num = n => `{\\Huge\\bfseries ${n}}`;
  const row = parts => parts.join('\\quad ');

  // big two-column matching (children draw the lines)
  function matchBody(left, right, gap = '5.5cm') {
    const rows = left.map((cell, i) => `${cell} & ${right[i]}`).join('\\\\[0.55cm]\n');
    return `\\begin{center}\\renewcommand{\\arraystretch}{1.3}\\begin{tabular}{l@{\\hspace{${gap}}}l}\n${rows}\n\\end{tabular}\\end{center}`;
  }
  function matchBlock({ R, pool, instr, leftOf, rightOf, size = 4 }) {
    const chosen = R.sample(pool, Math.min(size, pool.length)), right = R.shuffle(chosen.map((p, i) => ({ p, i })));
    return { instr, body: matchBody(chosen.map(leftOf), right.map(x => rightOf(x.p))), answer: chosen.map((p, i) => `${i + 1} – ${right.findIndex(x => x.i === i) + 1}`).join(', '), items: [], meta: { pairs: chosen } };
  }
  const swatch = x11 => `{\\tikz\\fill[${x11}] (0,0) circle (0.3);}`;

  // ---------- 1. tracing lines ----------
  const LINES = {
    straight: { icon: 'car', code: w => `(0,0.5) -- (${w},0.5)` },
    rain: { icon: 'cloud', code: w => Array.from({ length: Math.floor(w / 1.1) }, (_, i) => `(${(i * 1.1 + 0.3).toFixed(2)},1.05) -- (${(i * 1.1 + 0.3).toFixed(2)},0)`).join(' ') },
    zigzag: { icon: 'mountain', code: w => `(0,0) ${Array.from({ length: Math.floor(w / 1.1) }, (_, i) => `-- (${((i + 1) * 1.1).toFixed(2)},${i % 2 === 0 ? 1 : 0})`).join(' ')}` },
    wave: { icon: 'fish', code: w => `(0,0.5) ${Array.from({ length: Math.floor(w / 1.5) }, (_, i) => `${i % 2 === 0 ? 'sin' : 'cos'} (${((i + 1) * 1.5).toFixed(2)},${[1, 0.5, 0, 0.5][i % 4].toFixed(1)})`).join(' ')}` },
    loops: { icon: 'butterfly', code: w => `plot[domain=0:${(w * 2).toFixed(1)},samples=160,smooth] ({0.5*(\\x - 1.5*sin(\\x r))},{0.55 - 0.55*cos(\\x r)})` },
    arcs: { icon: 'rainbow', code: w => Array.from({ length: Math.floor(w / 1.6) }, (_, i) => `(${(i * 1.6).toFixed(1)},0) arc (180:0:0.8)`).join(' ') },
    steps: { icon: 'house', code: w => `(0,0) ${Array.from({ length: Math.floor(w / 1.4) }, (_, i) => `-- (${(i * 1.4 + 0.7).toFixed(1)},${(i * 0.28).toFixed(2)}) -- (${((i + 1) * 1.4).toFixed(1)},${(i * 0.28 + 0.28).toFixed(2)})`).join(' ')}` },
    circles: { icon: 'ball', code: w => Array.from({ length: Math.floor(w / 1.3) }, (_, i) => `(${(i * 1.3 + 0.55).toFixed(2)},0.5) circle (0.5)`).join(' ') }
  };
  // "mountain" has no picture in the library: use the closest ones
  const LINE_ICON = { mountain: 'mountain', car: 'car', cloud: 'cloud', fish: 'fish', butterfly: 'butterfly', rainbow: 'rainbow', house: 'house', ball: 'ball' };
  const traceLines = {
    id: 'lines', name: 'Tập tô nét (thẳng, cong, gấp khúc, sóng…)', grades: [0], defaults: [0], cols: 1, count: 6,
    make({ R, lvl, n, pic, need, bw }) {
      need('dash');
      const keys = R.shuffle(Object.keys(LINES).filter(k => lvl || !['loops', 'steps'].includes(k)));
      let body = '';
      for (let i = 0; i < n; i++) {
        const key = keys[i % keys.length], width = 11, path = LINES[key].code(width), icon = LINE_ICON[LINES[key].icon] ? LINES[key].icon : 'star';
        const draw = `\\draw[wsdashline] ${path};`;
        const startDot = key === 'rain' ? '' : `\\fill[${bw ? 'black' : 'green!60!black'}] (0,0.5) circle (0.13);`;
        body += `\\noindent\\begin{tikzpicture}[baseline=0.5cm]\\node[anchor=east] at (-0.2,0.5) {${L().get(icon) ? pic(icon, 1.05) : ''}};\n${draw}\n${startDot}\n\\end{tikzpicture}\\par\\bigskip\n`;
      }
      return { instr: `Tô theo nét chấm từ chấm ${bw ? 'đen' : 'xanh'}. Bé tô thật khéo nhé!`, body, items: [], noAnswer: true };
    }
  };

  // ---------- 2. shapes: trace and colour ----------
  const SHAPES = {
    circle: { vi: 'hình tròn', code: '(0,0) circle (1)' }, square: { vi: 'hình vuông', code: '(-0.95,-0.95) rectangle (0.95,0.95)' },
    triangle: { vi: 'hình tam giác', code: '(0,1) -- (-1.1,-0.85) -- (1.1,-0.85) -- cycle' }, rectangle: { vi: 'hình chữ nhật', code: '(-1.4,-0.75) rectangle (1.4,0.75)' },
    star: { vi: 'ngôi sao', code: Array.from({ length: 10 }, (_, k) => `(${(90 + 36 * k) % 360}:${k % 2 ? 0.45 : 1.1})`).join(' -- ') + ' -- cycle' },
    heart: { vi: 'trái tim', code: '(0,-0.95) .. controls (-1.6,0.05) and (-0.9,1.1) .. (0,0.35) .. controls (0.9,1.1) and (1.6,0.05) .. (0,-0.95) -- cycle' },
    oval: { vi: 'hình bầu dục', code: '(0,0) ellipse (1.35 and 0.8)' }, diamond: { vi: 'hình thoi', code: '(0,1.05) -- (0.85,0) -- (0,-1.05) -- (-0.85,0) -- cycle' }
  };
  const shapePath = (name, x, y, style) => `\\begin{scope}[shift={(${x},${y})}]\\path[${style}] ${SHAPES[name].code};\\end{scope}`;
  const shapeNames = lvl => lvl ? Object.keys(SHAPES) : ['circle', 'square', 'triangle', 'rectangle'];
  const traceShapes = {
    id: 'shapes', name: 'Tô theo nét hình học', grades: [0], defaults: [], cols: 1, count: 2,
    make({ R, lvl, n, need }) {
      need('dash');
      let body = '', answer = [];
      const pool = R.shuffle(shapeNames(lvl));
      for (let i = 0; i < n; i++) {
        const picks = [0, 1, 2].map(k => pool[(i * 3 + k) % pool.length]);
        const draws = picks.map((name, k) => shapePath(name, k * 5.7, 0, 'wsdashline')).join('\n');
        const names = picks.map((name, k) => `\\node[below] at (${k * 5.7},-1.35) {\\Large ${SHAPES[name].vi}};`).join('\n');
        body += `\\begin{center}\\begin{tikzpicture}[scale=1.15]\n${draws}\n${names}\n\\end{tikzpicture}\\end{center}\n`;
        answer.push(picks.map(name => SHAPES[name].vi).join(', '));
      }
      return { instr: 'Tô theo nét chấm rồi tô màu hình mà bé thích:', body, answer: answer.join('; '), items: [], noAnswer: true };
    }
  };
  const COLOURS = [['đỏ', 'red'], ['xanh dương', 'blue'], ['xanh lá', 'green'], ['vàng', 'yellow'], ['cam', 'orange'], ['tím', 'violet'], ['nâu', 'brown'], ['hồng', 'pink!60!red']];
  const colourShapes = {
    id: 'colourshapes', name: 'Nhận biết hình và tô màu', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, lvl, bw }) {
      const names = R.sample(shapeNames(lvl), 4), colours = R.sample(COLOURS, 4);
      const shapes = names.map((name, k) => shapePath(name, k * 4.4, 0, 'draw=black!70,line width=1.6pt,fill=white')).join('\n');
      const rules = names.map((name, k) => bw ? `\\textbf{Tô màu ${colours[k][0]}} cho ${SHAPES[name].vi}.` : `\\textcolor{${colours[k][1]}}{\\textbf{Tô màu ${colours[k][0]}}} cho ${SHAPES[name].vi}.`).join('\\par\\smallskip ');
      const body = `\\begin{center}\\begin{tikzpicture}[scale=0.95]\n${shapes}\n\\end{tikzpicture}\\end{center}\n\\par ${rules}`;
      return { instr: 'Nhìn hình rồi tô màu theo lời cô dặn:', body, answer: names.map((name, k) => `${SHAPES[name].vi}: ${colours[k][0]}`).join('; '), items: [] };
    }
  };

  // ---------- 3. digits and letters, dashed ----------
  const traceDigits = {
    id: 'digits', name: 'Tập tô chữ số nét đứt', grades: [0], defaults: [0], cols: 1, count: 5,
    make({ R, lvl, n, need, rb }) {
      need('dash');
      const digits = lvl ? R.shuffle(Array.from({ length: 10 }, (_, i) => i)) : R.shuffle([0, 1, 2, 3, 4, 5, 6]), picks = Array.from({ length: n }, (_, i) => digits[i % digits.length]);
      const body = picks.map((d, i) => `\\noindent{\\fontsize{58}{58}\\selectfont\\bfseries\\color{${rb(i)}}${d}}\\quad ${[0, 1, 2, 3].map(() => `\\wsdash{${d}}`).join('\\,')}\\quad ${BOX}\\ ${BOX}\\par\\smallskip`).join('\n');
      return { instr: 'Tô theo nét chấm rồi viết thêm vào ô trống:', body, items: [], noAnswer: true };
    }
  };
  const VI_LETTERS = ['a', 'ă', 'â', 'b', 'c', 'd', 'đ', 'e', 'ê', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'ô', 'ơ', 'p', 'q', 'r', 's', 't', 'u', 'ư', 'v', 'x', 'y'];
  const VI_PICS = { b: ['cow', 'bò'], c: ['fish', 'cá'], d: ['goat', 'dê'], 'đ': ['lightbulb', 'đèn'], 'ê': ['frog', 'ếch'], g: ['chicken', 'gà'], h: ['blossom', 'hoa'], k: ['scissors', 'kéo'], l: ['leaf', 'lá'], m: ['cat', 'mèo'],
    n: ['grape', 'nho'], o: ['bee', 'ong'], 'ô': ['car', 'ô tô'], q: ['apple', 'quả táo'], r: ['turtle', 'rùa'], s: ['star', 'sao'], t: ['heart', 'tim'], v: ['duck', 'vịt'], x: ['bus', 'xe buýt'] };
  const upper = c => c.toUpperCase();
  const traceViLetters = {
    id: 'viletters', name: 'Tập tô chữ cái tiếng Việt', grades: [0], defaults: [], cols: 1, count: 5,
    make({ R, lvl, n, pic, need, rb }) {
      need('dash');
      const pool = lvl ? VI_LETTERS : VI_LETTERS.filter(c => VI_PICS[c] || 'aăâ'.includes(c)).slice(0, 14), picks = R.sample(pool, Math.min(n, pool.length));
      const body = picks.map((c, i) => {
        const extra = VI_PICS[c] ? `\\hfill ${pic(VI_PICS[c][0], 1.2)} {\\Large\\bfseries ${VI_PICS[c][1]}}` : '';
        return `\\noindent{\\fontsize{52}{52}\\selectfont\\bfseries\\color{${rb(i)}}${c}}\\ {\\bfseries\\color{${rb(i)}}${upper(c)}}\\quad \\wsdash{${upper(c)}}\\,\\wsdash{${c}}\\,\\wsdash{${c}}\\ ${BOX}${extra}\\par\\smallskip`;
      }).join('\n');
      return { instr: 'Tô theo nét chấm, đọc to chữ cái và viết thêm:', body, items: [], noAnswer: true };
    }
  };
  const EN_PICS = { a: ['apple', 'apple'], b: ['ball', 'ball'], c: ['cat', 'cat'], d: ['dog', 'dog'], e: ['egg', 'egg'], f: ['fish', 'fish'], g: ['giraffe', 'giraffe'], h: ['house', 'house'], i: ['icecream', 'ice cream'], k: ['kite', 'kite'],
    l: ['lion', 'lion'], m: ['monkey', 'monkey'], n: ['nose', 'nose'], o: ['orange', 'orange'], p: ['pig', 'pig'], r: ['rabbit', 'rabbit'], s: ['sun', 'sun'], t: ['tree', 'tree'], u: ['umbrella', 'umbrella'], w: ['whale', 'whale'], z: ['zebra', 'zebra'] };
  const traceEnLetters = {
    id: 'abc', name: 'Tập tô chữ cái tiếng Anh (A a)', grades: [0], defaults: [], cols: 1, count: 5,
    make({ R, lvl, n, pic, need, rb }) {
      need('dash');
      const pool = Object.keys(EN_PICS).filter(c => lvl || 'abcdefghiklmnoprstu'.includes(c)), picks = R.sample(pool, Math.min(n, pool.length)).sort();
      const body = picks.map((c, i) => `\\noindent{\\fontsize{52}{52}\\selectfont\\bfseries\\color{${rb(i)}}${upper(c)}${c}}\\quad \\wsdash{${upper(c)}}\\,\\wsdash{${c}}\\ ${BOX}\\hfill ${pic(EN_PICS[c][0], 1.2)} {\\Large\\bfseries ${EN_PICS[c][1]}}\\par\\smallskip`).join('\n');
      return { instr: 'Trace the letters and say the words. (Tô chữ cái và đọc từ)', body, items: [], noAnswer: true };
    }
  };

  // ---------- 4. counting and numbers ----------
  const countDigit = {
    id: 'countdigit', name: 'Đếm hình rồi tô số', grades: [0], defaults: [], cols: 1, count: 4,
    make({ R, lvl, n, pic, lib, need }) {
      need('dash');
      const ids = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy', 'nature'].includes(lib.get(id).cat))), items = [];
      const body = Array.from({ length: n }, (_, i) => {
        const id = ids[i % ids.length], k = R.int(1, lvl ? 9 : 5);
        items.push({ q: String(k), a: String(k), meta: { id, k } });
        return `\\noindent${Array.from({ length: k }, () => pic(id, 1.05)).join('\\,')}\\hfill \\wsdash{${k}}\\ ${BOX}\\par\\medskip`;
      }).join('\n');
      return { instr: 'Đếm số hình rồi tô số tương ứng:', body, items, noAnswer: false, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
    }
  };
  const matchCount = {
    id: 'matchcount', name: 'Nối hình với số', grades: [0], defaults: [0], cols: 1, count: 1,
    make({ R, lvl, pic, lib }) {
      const ids = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy', 'nature'].includes(lib.get(id).cat))), counts = R.sample(Array.from({ length: lvl ? 9 : 5 }, (_, i) => i + 1), 4);
      const pool = counts.map((k, i) => ({ k, id: ids[i] }));
      return matchBlock({ R, pool, instr: 'Đếm số hình rồi nối với số đúng:', leftOf: p => Array.from({ length: p.k }, () => pic(p.id, 0.95)).join('\\,'), rightOf: p => num(p.k) });
    }
  };
  const moreLess = {
    id: 'moreless', name: 'Nhiều hơn – ít hơn', grades: [0], defaults: [], cols: 1, count: 3,
    make({ R, lvl, n, pic, lib }) {
      const ids = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy'].includes(lib.get(id).cat))), items = [];
      const body = Array.from({ length: n }, (_, i) => {
        const more = R.chance(0.5), a = R.int(1, lvl ? 8 : 5); let b = R.int(1, lvl ? 8 : 5); if (b === a) b = a < (lvl ? 8 : 5) ? a + 1 : a - 1;
        const ida = ids[(2 * i) % ids.length], idb = ids[(2 * i + 1) % ids.length];
        const winner = (more ? a > b : a < b) ? 'bên trái' : 'bên phải';
        items.push({ q: '', a: winner, meta: { a, b, more } });
        return `\\noindent\\textbf{${i + 1}.} ${more ? 'Khoanh vào nhóm \\textbf{nhiều hơn}' : 'Khoanh vào nhóm \\textbf{ít hơn}'}:\\par\\smallskip\n\\noindent\\fbox{\\parbox{0.44\\linewidth}{\\vspace{3pt}${Array.from({ length: a }, () => pic(ida, 0.95)).join('\\,')}\\vspace{3pt}}}\\hfill\\fbox{\\parbox{0.44\\linewidth}{\\vspace{3pt}${Array.from({ length: b }, () => pic(idb, 0.95)).join('\\,')}\\vspace{3pt}}}\\par\\medskip`;
      }).join('\n');
      return { instr: 'Nhìn hình rồi khoanh vào nhóm đúng:', body, items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
    }
  };
  const drawMore = {
    id: 'drawmore', name: 'Vẽ thêm cho đủ số lượng', grades: [0], defaults: [], cols: 1, count: 3,
    make({ R, lvl, n, pic, lib }) {
      const ids = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'toy', 'animal'].includes(lib.get(id).cat))), items = [];
      const body = Array.from({ length: n }, (_, i) => {
        const id = ids[i % ids.length], total = R.int(lvl ? 5 : 3, lvl ? 9 : 5), have = R.int(1, total - 1), vi = lib.get(id).vi;
        items.push({ q: '', a: `vẽ thêm ${total - have}`, meta: { id, total, have } });
        const placeholders = Array.from({ length: total - have }, () => '\\tikz[baseline=-0.3em]\\draw[dashed,black!45,line width=1pt] (0,0) circle (0.42);').join('\\,');
        return `\\noindent Bé hãy vẽ thêm cho đủ \\textbf{${num(total).replace(/\\Huge/, '\\Large')}} ${vi}:\\par\\smallskip\n\\noindent${Array.from({ length: have }, () => pic(id, 1.05)).join('\\,')}\\,${placeholders}\\par\\medskip`;
      }).join('\n');
      return { instr: 'Vẽ thêm vào các vòng tròn nét đứt cho đủ số lượng:', body, items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
    }
  };
  const missingNumber = {
    id: 'missingnum', name: 'Điền số còn thiếu', grades: [0], defaults: [], cols: 1, count: 3,
    make({ R, lvl, n }) {
      const items = [], body = Array.from({ length: n }, () => {
        const start = R.int(1, lvl ? 5 : 1), terms = Array.from({ length: 6 }, (_, k) => start + k), blanks = new Set(R.sample([1, 2, 3, 4], 2));
        items.push({ q: '', a: terms.filter((_, k) => blanks.has(k)).join(', '), meta: { terms, blanks: [...blanks] } });
        return `\\noindent${terms.map((t, k) => blanks.has(k) ? BOX : `\\fbox{\\parbox[c][1.15cm][c]{1.15cm}{\\centering ${num(t)}}}`).join('\\ ')}\\par\\bigskip`;
      }).join('\n');
      return { instr: 'Điền số còn thiếu vào ô trống:', body, items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
    }
  };

  // ---------- 5. matching pictures and words ----------
  const PRE_WORDS = [['cat', 'mèo'], ['dog', 'chó'], ['fish', 'cá'], ['chicken', 'gà'], ['duck', 'vịt'], ['pig', 'heo'], ['cow', 'bò'], ['bird', 'chim'], ['blossom', 'hoa'], ['tree', 'cây'], ['house', 'nhà'], ['car', 'xe'],
    ['ball', 'bóng'], ['star', 'sao'], ['sun', 'mặt trời'], ['apple', 'táo'], ['banana', 'chuối'], ['bag', 'cặp'], ['book', 'sách'], ['heart', 'tim']].map(([id, word]) => ({ id, word }));
  const matchWord = {
    id: 'matchword', name: 'Nối từ với hình', grades: [0], defaults: [0], cols: 1, count: 1,
    make({ R, lvl, pic, rb }) {
      return matchBlock({ R, pool: PRE_WORDS, size: lvl ? 5 : 4, instr: 'Nối mỗi hình với từ đúng:', leftOf: p => pic(p.id, 1.5), rightOf: p => `{\\Huge\\bfseries\\color{${rb(p.word.length)}}${p.word}}`, });
    }
  };
  const matchLetter = {
    id: 'matchletter', name: 'Nối chữ cái với hình', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, pic, rb }) {
      const keys = Object.keys(VI_PICS), pool = keys.map(c => ({ c, id: VI_PICS[c][0], word: VI_PICS[c][1] }));
      return matchBlock({ R, pool, instr: 'Nối chữ cái với hình có tên bắt đầu bằng chữ cái đó:', leftOf: p => `{\\fontsize{44}{44}\\selectfont\\bfseries\\color{${rb(p.c.charCodeAt(0))}}${p.c}}`, rightOf: p => pic(p.id, 1.5) });
    }
  };
  const oddOne = {
    id: 'odd', name: 'Khoanh vào hình khác loại', grades: [0], defaults: [], cols: 1, count: 3,
    make({ R, n, pic, lib }) {
      const cats = ['fruit', 'animal', 'toy', 'transport', 'home', 'clothes'], items = [];
      const body = Array.from({ length: n }, (_, i) => {
        const [ca, cb] = R.sample(cats, 2), same = R.sample(lib.byCat(ca).filter(id => lib.get(id).cp), 3), odd = R.pick(lib.byCat(cb).filter(id => lib.get(id).cp));
        const order = R.shuffle([...same.map(id => ({ id, odd: false })), { id: odd, odd: true }]);
        items.push({ q: '', a: `hình thứ ${order.findIndex(x => x.odd) + 1}`, meta: { odd, same } });
        return `\\noindent\\textbf{${i + 1}.}\\ ${order.map(x => pic(x.id, 1.4)).join('\\qquad ')}\\par\\bigskip`;
      }).join('\n');
      return { instr: 'Khoanh vào hình khác loại với các hình còn lại:', body, items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; ') };
    }
  };

  // ---------- 6. colouring and dot-to-dot ----------
  const colourPic = {
    id: 'colourpic', name: 'Tô màu theo lời dặn', grades: [0], defaults: [0], cols: 1, count: 4,
    make({ R, n, pic, canOutline, lib, bw }) {
      const ids = R.shuffle(lib.order.filter(id => lib.get(id).cp && canOutline(id) && lib.get(id).cat !== 'shape')), items = [];
      const body = Array.from({ length: n }, (_, i) => {
        const id = ids[i % ids.length], [vn, x11] = R.pick(COLOURS.filter(c => c[1] !== 'pink' || true));
        items.push({ q: '', a: `${lib.get(id).vi}: ${vn}`, meta: { id, vn } });
        return `\\noindent${pic(id, 2.3, true)}\\quad {\\Large Tô màu ${bw ? `\\textbf{${vn}}` : `\\textcolor{${x11}}{\\textbf{${vn}}}`} cho ${lib.get(id).vi}.}\\par\\medskip`;
      }).join('\n');
      const chips = COLOURS.map(([vn, x11]) => `${bw ? '{\\tikz\\draw[line width=0.8pt] (0,0) circle (0.3);}' : swatch(x11)}\\,${vn}`), palette = `\\par ${chips.slice(0, 4).join('\\quad ')}\\par\\smallskip ${chips.slice(4).join('\\quad ')}\\par\\bigskip\n`;
      return { instr: 'Nhìn bảng màu rồi tô màu cho đẹp:', body: palette + body, items, noAnswer: true };
    }
  };
  const DOTS = {
    'hình tam giác': [[0, 0], [2.6, 0], [1.3, 2.2]], 'hình vuông': [[0, 0], [2.2, 0], [2.2, 2.2], [0, 2.2]], 'ngôi nhà': [[0, 0], [2.6, 0], [2.6, 1.7], [1.3, 2.8], [0, 1.7]],
    'hình chữ nhật': [[0, 0], [3.2, 0], [3.2, 1.7], [0, 1.7]], 'ngôi sao': Array.from({ length: 10 }, (_, k) => { const r = k % 2 ? 0.55 : 1.3, a = (90 + 36 * k) * Math.PI / 180; return [r * Math.cos(a) + 1.3, r * Math.sin(a) + 1.3]; }),
    'hình thoi': [[1.2, 0], [2.4, 1.4], [1.2, 2.8], [0, 1.4]]
  };
  const dotToDot = {
    id: 'dots', name: 'Nối các chấm theo thứ tự', grades: [0], defaults: [], cols: 1, count: 2,
    make({ R, lvl, n }) {
      const names = R.sample(Object.keys(DOTS).filter(k => lvl || DOTS[k].length <= 5), Math.min(n, 3)), items = [];
      const pictures = names.map(name => {
        const pts = DOTS[name];
        items.push({ q: '', a: name, meta: { name, n: pts.length } });
        return `\\begin{tikzpicture}[scale=1.15]\n${pts.map(([x, y], i) => `\\fill (${x.toFixed(2)},${y.toFixed(2)}) circle (0.075);\n\\node[font=\\Large\\bfseries,color=wsMain,${y > 1.2 ? 'above' : 'below'}${x > 1.5 ? ' right' : ' left'}] at (${x.toFixed(2)},${y.toFixed(2)}) {${i + 1}};`).join('\n')}\n\\end{tikzpicture}`;
      });
      return { instr: 'Nối các chấm theo thứ tự 1, 2, 3… rồi tô màu hình vừa vẽ:', body: `\\begin{center}${pictures.join('\\qquad\\qquad ')}\\end{center}`, items, answer: items.map(x => x.a).join(', ') };
    }
  };

  // ---------- 7. mazes, tangled paths, following arrows, big colouring scenes ----------
  // A perfect maze (exactly one route between any two cells) carved by depth-first search.
  function makeMaze(R, cols, rows) {
    const walls = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ N: true, E: true, S: true, W: true })));
    const seen = Array.from({ length: rows }, () => Array(cols).fill(false)), stack = [[0, 0]];
    const DIRS = { N: [-1, 0, 'S'], S: [1, 0, 'N'], E: [0, 1, 'W'], W: [0, -1, 'E'] };
    seen[0][0] = true;
    while (stack.length) {
      const [r, c] = stack[stack.length - 1];
      const options = R.shuffle(Object.keys(DIRS)).filter(d => { const nr = r + DIRS[d][0], nc = c + DIRS[d][1]; return nr >= 0 && nr < rows && nc >= 0 && nc < cols && !seen[nr][nc]; });
      if (!options.length) { stack.pop(); continue; }
      const d = options[0], nr = r + DIRS[d][0], nc = c + DIRS[d][1];
      walls[r][c][d] = false; walls[nr][nc][DIRS[d][2]] = false; seen[nr][nc] = true; stack.push([nr, nc]);
    }
    return { walls, cols, rows, DIRS };
  }
  function solveMaze(maze) {
    const { walls, cols, rows, DIRS } = maze, prev = new Map(), queue = [[0, 0]], key = (r, c) => r * cols + c;
    prev.set(0, null);
    while (queue.length) {
      const [r, c] = queue.shift();
      if (r === rows - 1 && c === cols - 1) break;
      for (const d of Object.keys(DIRS)) {
        if (walls[r][c][d]) continue;
        const nr = r + DIRS[d][0], nc = c + DIRS[d][1];
        if (!prev.has(key(nr, nc))) { prev.set(key(nr, nc), [r, c]); queue.push([nr, nc]); }
      }
    }
    const path = []; let at = [rows - 1, cols - 1];
    while (at) { path.unshift(at); at = prev.get(key(at[0], at[1])); }
    return path;
  }
  const MAZE_PAIRS = [['rabbit', 'carrot'], ['cat', 'fish'], ['monkey', 'banana'], ['bear', 'strawberry'], ['chicken', 'corn'], ['turtle', 'leaf']];
  function mazeTikz(maze, { cell, from, to, pic, solution }) {
    const { walls, cols, rows } = maze, y = r => rows - r, lines = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const w = walls[r][c];
      if (w.N) lines.push(`(${c},${y(r)}) -- (${c + 1},${y(r)})`);
      if (w.W && !(r === 0 && c === 0)) lines.push(`(${c},${y(r)}) -- (${c},${y(r) - 1})`);
      if (c === cols - 1 && w.E && r !== rows - 1) lines.push(`(${c + 1},${y(r)}) -- (${c + 1},${y(r) - 1})`);
      if (r === rows - 1 && w.S) lines.push(`(${c},${y(r) - 1}) -- (${c + 1},${y(r) - 1})`);
    }
    let code = `\\begin{tikzpicture}[scale=${cell}]\n\\draw[line width=${(2.4 / cell).toFixed(2)}pt,line cap=round,black!75] ${lines.join('\n  ')};\n`;
    if (solution) code += `\\draw[red!80!black,line width=${(3 / cell).toFixed(2)}pt,line cap=round,line join=round,opacity=0.85] (-0.5,${rows - 0.5}) -- ${solution.map(([r, c]) => `(${c + 0.5},${y(r) - 0.5})`).join(' -- ')} -- (${cols + 0.5},0.5);\n`;
    else code += `\\node at (-0.8,${rows - 0.5}) {${pic(from, 1.15 / cell)}};\n\\node at (${cols + 0.8},0.5) {${pic(to, 1.15 / cell)}};\n`;
    return code + '\\end{tikzpicture}';
  }
  const maze = {
    id: 'maze', name: 'Mê cung', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, lvl, n, pic, lib }) {
      const size = lvl ? 7 : 5, cell = lvl ? 1.1 : 1.45, pairs = R.shuffle(MAZE_PAIRS), mazes = [];
      let body = '', answer = '';
      for (let i = 0; i < n; i++) {
        const m = makeMaze(R, size, size), [from, to] = pairs[i % pairs.length], path = solveMaze(m);
        mazes.push({ maze: m, path, from, to });
        body += `\\begin{center}${mazeTikz(m, { cell, from, to, pic })}\\end{center}\n\\par\\centering Giúp ${lib.get(from).vi} đi tìm ${lib.get(to).vi} nhé!\\par\\bigskip\n`;
        answer += `${n > 1 ? `Mê cung ${i + 1}: ` : ''}\\begin{center}${mazeTikz(m, { cell: cell * 0.55, from, to, pic, solution: path })}\\end{center}\n`;
      }
      return { instr: 'Vẽ đường đi qua mê cung, không được đi xuyên qua tường:', body, answer, items: [], meta: { mazes } };
    }
  };

  const COLOURS_LINE = ['red!75!black', 'blue!75!cyan', 'green!55!black', 'orange', 'violet'];
  const tangle = {
    id: 'tangle', name: 'Tìm đường (đường dây rối)', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, lvl, pic, lib, bw }) {
      const k = lvl ? 4 : 3, pairs = R.sample(MAZE_PAIRS, k);
      let perm = R.shuffle([...Array(k).keys()]); for (let t = 0; t < 8 && perm.every((v, i) => v === i); t++) perm = R.shuffle([...Array(k).keys()]);
      const gap = 2.1, y = i => -gap * i, colours = bw ? ['black', 'black', 'black', 'black', 'black'] : R.shuffle(COLOURS_LINE), dashes = ['', ',dash pattern=on 7pt off 3pt', ',dash pattern=on 1pt off 3pt', ',dash pattern=on 7pt off 3pt on 1pt off 3pt'];
      const curves = Array.from({ length: k }, (_, i) => {
        const j = perm[i], a = R.int(-9, 9) / 6, b = R.int(-9, 9) / 6;
        return `\\draw[${colours[i]},line width=2.2pt,line cap=round${bw ? dashes[i] : ''}] (0.9,${y(i)}) .. controls (${(3.6).toFixed(1)},${(y(i) + a * 2).toFixed(2)}) and (${(7.6).toFixed(1)},${(y(j) + b * 2).toFixed(2)}) .. (11.1,${y(j)});`;
      }).join('\n');
      const lefts = pairs.map(([a], i) => `\\node at (0,${y(i)}) {${pic(a, 1.5)}};`).join('\n');
      const rights = perm.map((j, i) => `\\node at (12,${y(j)}) {${pic(pairs[j][1], 1.5)}};`).join('\n');
      const body = `\\begin{center}\\begin{tikzpicture}\n${curves}\n${lefts}\n${rights}\n\\end{tikzpicture}\\end{center}`;
      const answer = pairs.map(([a], i) => `${lib.get(a).vi} → ${lib.get(pairs[perm[i]][1]).vi}`).join('; ');
      return { instr: 'Lần theo từng đường dây: mỗi bạn nhỏ tìm thấy món gì? Tô màu theo đường đi:', body, answer, items: [], meta: { pairs, perm } };
    }
  };

  const ARROWS = { N: ['\\uparrow', [-1, 0], 90], E: ['\\rightarrow', [0, 1], 0], S: ['\\downarrow', [1, 0], -90], W: ['\\leftarrow', [0, -1], 180] };
  const gridPath = {
    id: 'gridpath', name: 'Đi theo mũi tên trên lưới', grades: [0], defaults: [], cols: 1, count: 2,
    make({ R, lvl, n, pic, lib, need, bw }) {
      need('arrow');
      const size = lvl ? 5 : 4, steps = lvl ? 6 : 4;
      let body = '', answer = [];
      const pool = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy', 'veg'].includes(lib.get(id).cat) && id !== 'bee'));
      const meta = [];
      for (let t = 0; t < n; t++) {
        let r = size - 1, c = 0; const route = [];
        for (let s = 0; s < steps; s++) {
          const options = Object.keys(ARROWS).filter(d => { const nr = r + ARROWS[d][1][0], nc = c + ARROWS[d][1][1]; return nr >= 0 && nr < size && nc >= 0 && nc < size && !(route.length && ARROWS[route.at(-1)][1][0] === -ARROWS[d][1][0] && ARROWS[route.at(-1)][1][1] === -ARROWS[d][1][1]); });
          const d = R.pick(options); route.push(d); r += ARROWS[d][1][0]; c += ARROWS[d][1][1];
        }
        const cells = R.shuffle(pool).slice(0, size * size), at = (rr, cc) => cells[rr * size + cc];
        const nodes = [];
        for (let rr = 0; rr < size; rr++) for (let cc = 0; cc < size; cc++) nodes.push(rr === size - 1 && cc === 0 ? `\\node at (${cc + 0.5},${size - rr - 0.5}) {${pic('bee', 1.25)}};` : `\\node at (${cc + 0.5},${size - rr - 0.5}) {${pic(at(rr, cc), 1.15)}};`);
        const grid = `\\begin{tikzpicture}[scale=1.55]\n\\fill[${bw ? 'black!12' : 'green!20'}] (0,0) rectangle (1,1);\n\\draw[black!60,line width=1pt] (0,0) grid (${size},${size});\n${nodes.join('\n')}\n\\end{tikzpicture}`;
        const arrows = route.map(d => `\\wsarrow[${ARROWS[d][2]}]{1.7}`).join('\\ ');
        body += `\\begin{center}${grid}\\end{center}\\par\\centering ${arrows}\\par\\medskip\\centering Chú ong bay theo mũi tên sẽ tới hình nào? Khoanh tròn vào hình đó.\\par\\bigskip\n`;
        answer.push(`${t + 1}) ${lib.get(at(r, c)).vi}`);
        meta.push({ size, route, end: [r, c], target: at(r, c) });
      }
      return { instr: `Bắt đầu từ ô ${bw ? 'tô xám' : 'màu xanh'}, đi theo từng mũi tên:`, body, answer: answer.join('; '), items: [], meta };
    }
  };

  // big scenes made only of outline pictures, to colour in
  const SCENES = {
    'khu vườn': [['cloud', 2.6, 7.1, 3], ['sun', 14, 7.1, 2.6], ['house', 6.8, 3.3, 5.6], ['tree', 12.3, 3.3, 4.8], ['blossom', 1.6, 1.2, 2.4], ['blossom', 3.9, 0.9, 2], ['butterfly', 10.1, 6.5, 2.2], ['blossom', 9.6, 0.9, 2.2], ['blossom', 15, 1, 2]],
    'trang trại': [['sun', 2, 7.2, 2.6], ['cloud', 8.8, 7.3, 3], ['house', 12.2, 4, 5], ['cow', 3, 2.2, 3.6], ['chick', 7.4, 1.4, 2.6], ['pig', 9.4, 1.5, 2.8], ['tree', 14.8, 1.9, 3.6], ['bird', 6.2, 5.4, 2]],
    'vườn thú': [['sun', 14.4, 7.2, 2.4], ['cloud', 3, 7.2, 2.8], ['tree', 8, 5, 4.2], ['bear', 2.4, 2, 3.6], ['rabbit', 6.4, 1.8, 3.4], ['cat', 10.4, 1.7, 3.4], ['dog', 14.2, 1.9, 3.4], ['bird', 8.2, 6.8, 1.6], ['butterfly', 12.4, 5.6, 2]],
    'dưới nước': [['sun', 14.4, 7.3, 2.4], ['rainbow', 4, 6.6, 4.6], ['cloud', 10.2, 7.2, 3], ['fish', 3, 3.6, 3.2], ['fish', 8.2, 2.4, 3.8], ['fish', 13, 3.4, 3.2], ['frog', 2.8, 0.9, 2], ['duck', 12.6, 1, 2.4], ['turtle', 7.8, 0.9, 2]]
  };
  const SCENE_ICON = { turtle: 'turtle' };
  const colourScene = {
    id: 'colourscene', name: 'Tô màu tranh lớn (cả khung cảnh)', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, n, pic, canOutline }) {
      const names = R.shuffle(Object.keys(SCENES)), kinds = [];
      let body = '';
      for (let i = 0; i < n; i++) {
        const name = names[i % names.length], items = SCENES[name].filter(([id]) => canOutline(SCENE_ICON[id] || id));
        kinds.push(name);
        const nodes = items.map(([id, x, y, scale]) => `\\node at (${x},${y}) {${pic(SCENE_ICON[id] || id, scale * 1.0, true)}};`).join('\n');
        body += `\\begin{center}\\begin{tikzpicture}[scale=0.98]\n\\draw[rounded corners=10pt,wsMain,line width=1.4pt] (0,0) rectangle (16.6,8.6);\n\\draw[black!60,line width=1pt] (0,0.35) -- (16.6,0.35);\n${nodes}\n\\end{tikzpicture}\\end{center}\n`;
      }
      return { instr: 'Tô màu thật đẹp cho bức tranh nhé!', body, items: [], noAnswer: true, meta: { kinds } };
    }
  };
  const colourBig = {
    id: 'colourbig', name: 'Tô màu hình lớn', grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, n, pic, canOutline, lib }) {
      const ids = R.shuffle(lib.order.filter(id => lib.get(id).cp && canOutline(id) && ['animal', 'fruit', 'nature', 'toy', 'home', 'transport'].includes(lib.get(id).cat))), shown = [];
      let body = '';
      for (let i = 0; i < Math.max(1, Math.min(2, n)); i++) { const id = ids[i]; shown.push(id); body += `\\begin{center}${pic(id, 7.2, true)}\\par\\medskip {\\Large ${lib.get(id).vi}}\\end{center}\n`; }
      return { instr: 'Tô màu cho bức tranh thật rực rỡ:', body, items: [], noAnswer: true, meta: { shown } };
    }
  };


  // ---------- 8. topics that depend on how the sheet is printed ----------
  // colour print only: a coloured dot to match with its name
  const colourName = {
    id: 'colourname', name: 'Nối ô màu với tên màu', modes: ['color'], grades: [0], defaults: [], cols: 1, count: 1,
    make({ R, lvl }) {
      const pool = R.sample(COLOURS, lvl ? 5 : 4).map(([vn, x11]) => ({ vn, x11 }));
      return matchBlock({ R, pool, instr: 'Nối ô màu với tên màu đúng:', leftOf: p => `{\\tikz\\fill[${p.x11}] (0,0) circle (0.45);}`, rightOf: p => `{\\Huge\\bfseries ${p.vn}}` });
    }
  };
  // black-and-white print only: colour by number, the legend names the colours so the pencils do the work
  const PIXELS = {
    'ngôi nhà': { rows: ['00011000', '00111100', '01111110', '11111111', '22222222', '22233222', '22233222', '22233222'], legend: ['đỏ', 'vàng', 'nâu'] },
    'cái cây': { rows: ['00011000', '00111100', '01111110', '11111111', '01111110', '00022000', '00022000', '00022000'], legend: ['xanh lá', 'nâu'] },
    'trái tim': { rows: ['01100110', '12211111', '11111111', '11111111', '01111110', '00111100', '00011000', '00000000'], legend: ['đỏ', 'hồng'] },
    'bông hoa': { rows: ['00300300', '03330330', '00322300', '03322230', '00322300', '00020000', '01020100', '00111000'], legend: ['xanh lá', 'vàng', 'đỏ'] }
  };
  const colourNumber = {
    id: 'colourbynum', name: 'Tô màu theo số', modes: ['bw'], grades: [0], defaults: [0], cols: 1, count: 1,
    make({ R, n }) {
      const names = R.sample(Object.keys(PIXELS), Math.max(1, Math.min(2, n))), shown = [];
      let body = '';
      for (const name of names) {
        const { rows, legend } = PIXELS[name];
        shown.push(name);
        const cells = rows.map((row, r) => [...row].map((d, c) => `\\draw[black!55,line width=0.6pt] (${c},${7 - r}) rectangle ++(1,1);${d === '0' ? '' : `\\node[font=\\Large\\bfseries] at (${c + 0.5},${7 - r + 0.5}) {${d}};`}`).join('')).join('\n');
        body += `\\begin{center}\\begin{tikzpicture}[scale=0.95]\n${cells}\n\\end{tikzpicture}\\par\\medskip {\\large ${legend.map((c, i) => `\\textbf{${i + 1}} = ${c}`).join(',\\quad ')}}\\end{center}\n`;
      }
      return { instr: 'Tô màu các ô theo số, bé sẽ thấy một bức tranh hiện ra:', body, items: [], noAnswer: true, meta: { shown } };
    }
  };


  // ---------- 9. patterns and puzzles ----------
  const patternPre = {
    id: 'pattern', name: 'Hình nào đi tiếp? (quy luật)', grades: [0], defaults: [], cols: 1, count: 3,
    make(ctx) { return { instr: 'Nhìn quy luật, vẽ hình còn thiếu vào ô trống:', ...W.mathHelpers.patternBlock({ ...ctx, hideLast: 1 }) }; }
  };
  const shadowCount = {
    id: 'crossout', name: 'Gạch bỏ hình khác loại, đếm hình còn lại', grades: [0], defaults: [], cols: 1, count: 2,
    make({ R, lvl, n, pic, lib }) {
      const items = []; let body = '';
      for (let i = 0; i < n; i++) {
        const [A, B] = R.sample(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy'].includes(lib.get(id).cat)), 2), a = R.int(2, lvl ? 6 : 4), b = R.int(1, 4);
        const row = R.shuffle([...Array(a).fill(A), ...Array(b).fill(B)]);
        items.push({ q: '', a: `${a} ${lib.get(A).vi}`, meta: { A, B, a, b } });
        body += `\\noindent ${row.map(id => pic(id, 1.15)).join('\\,')}\\par\\smallskip Gạch bỏ ${lib.get(B).vi}. Còn lại ${BOX} ${lib.get(A).vi}.\\par\\bigskip\n`;
      }
      return { instr: 'Gạch bỏ hình khác loại rồi đếm số hình còn lại:', body, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; '), items: [] };
    }
  };


  const bigSmall = {
    id: 'bigsmall', name: 'To nhất – nhỏ nhất', grades: [0], defaults: [], cols: 1, count: 3,
    make({ R, n, pic, lib }) {
      const ids = R.shuffle(lib.countable().filter(id => lib.get(id).cp && ['fruit', 'animal', 'toy'].includes(lib.get(id).cat))), items = []; let body = '';
      for (let i = 0; i < n; i++) {
        const id = ids[i % ids.length], big = i % 2 === 0, sizes = R.shuffle([0.8, 1.35, 1.95]), target = big ? 1.95 : 0.8;
        items.push({ q: '', a: `hình thứ ${sizes.indexOf(target) + 1}`, meta: { sizes, big } });
        body += `\\noindent\\textbf{${i + 1}.}\\ ${sizes.map(sz => pic(id, sz)).join('\\qquad ')}\\par\\smallskip Khoanh vào hình \\textbf{${big ? 'to nhất' : 'nhỏ nhất'}}.\\par\\bigskip\n`;
      }
      return { instr: 'Nhìn kĩ rồi khoanh vào hình đúng:', body, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; '), items: [] };
    }
  };
  const longShort = {
    id: 'longshort', name: 'Dài hơn – ngắn hơn (băng giấy)', grades: [0], defaults: [], cols: 1, count: 2,
    make({ R, n }) {
      const sets = []; let body = '';
      for (let i = 0; i < n; i++) {
        const lens = R.sample([2.5, 4, 5.5, 7, 8.5, 10], 3), long = i % 2 === 0, bars = lens.map((l, k) => `\\draw[line width=0.8pt,fill=${'black!10'}] (0,${-k * 1.1}) rectangle (${l},${-k * 1.1 + 0.7});\\node at (-0.5,${-k * 1.1 + 0.35}) {\\Large\\bfseries ${k + 1}};`).join('');
        sets.push({ lens, long });
        body += `\\begin{center}\\begin{tikzpicture}${bars}\\end{tikzpicture}\\end{center}\\par Khoanh vào băng giấy \\textbf{${long ? 'dài nhất' : 'ngắn nhất'}}.\\par\\bigskip\n`;
      }
      return { instr: 'So sánh độ dài các băng giấy:', body, answer: sets.map((x, i) => `${i + 1}) băng ${1 + x.lens.indexOf((x.long ? Math.max : Math.min)(...x.lens))}`).join('; '), items: [], meta: { sets } };
    }
  };
  const diceCount = {
    id: 'dicecount', name: 'Đếm chấm xúc xắc', grades: [0], defaults: [], cols: 1, count: 4,
    make({ R, lvl, n, need }) {
      need('dash');
      const items = [];
      const body = Array.from({ length: n }, (_, i) => { const k = R.int(1, lvl ? 6 : 4); items.push({ q: String(k), a: String(k), meta: { k } }); return `\\noindent${W.mathHelpers.dieTikz(k, 1.5)}\\hfill \\wsdash{${k}}\\ ${BOX}\\par\\medskip`; }).join('\n');
      return { instr: 'Đếm số chấm rồi tô số tương ứng:', body: body.replace(/^/, ''), items, answer: items.map((x, i) => `${i + 1}) ${x.a}`).join('; '), extraNeed: 'dash' };
    }
  };

  W.registerSubject({
    id: 'pre', name: 'Bé làm quen (tiền tiểu học)', title: 'Bé làm quen', palette: { main: '#e67e22', accent: '#16a085', light: '#fef3e6' },
    mascots: ['rainbow', 'sun'], cheer: 'Bé giỏi lắm! Cô khen bé!', grades: [0], kinds: ['worksheet'],
    presets: [
      ['Tổng hợp', ['lines', 'digits', 'matchcount', 'matchword', 'colourpic']],
      ['Làm quen chữ số', ['digits', 'countdigit', 'matchcount', 'missingnum', 'moreless', 'drawmore']],
      ['Làm quen chữ cái', ['viletters', 'matchletter', 'matchword', 'abc']],
      ['Hình học và màu sắc', ['lines', 'shapes', 'colourshapes', 'colourpic', 'colourname', 'dots', 'odd']],
      ['Tìm đường, mê cung', ['maze', 'tangle', 'gridpath', 'dots']],
      ['Tô màu tranh', ['colourscene', 'colourbig', 'colourbynum', 'colourpic', 'colourshapes']]
    ],
    levelLabel: (g, lvl) => lvl ? 'Bé 5 – 6 tuổi' : 'Bé 4 – 5 tuổi', fileSuffix: (g, lvl) => lvl ? '-be-5-6-tuoi' : '-be-4-5-tuoi', big: true,
    topics: [traceLines, traceShapes, colourShapes, traceDigits, traceViLetters, traceEnLetters, countDigit, matchCount, moreLess, drawMore, missingNumber, matchWord, matchLetter, oddOne, maze, tangle, gridPath, colourScene, colourBig, colourPic, colourName, colourNumber, patternPre, shadowCount, bigSmall, longShort, diceCount, dotToDot]
  });
  W.preData = { PIXELS, makeMaze, solveMaze, MAZE_PAIRS, SCENES, SHAPES, VI_PICS, EN_PICS, DOTS, LINES, PRE_WORDS, VI_LETTERS };
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-zh-data.js ---- */
/* Generated by tools/build_cjk_data.py from the HSK 2012 word lists (levels 1-3). Do not edit by hand. */
(function (root) {
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  W.cjkData = W.cjkData || {};
  W.cjkData.zh = {"words":[{"h":"爱","p":"ài","m":"to love; affection","lv":1},{"h":"八","p":"bā","m":"eight; 8","lv":1},{"h":"杯子","p":"bēi zi","m":"cup; glass","lv":1},{"h":"北京","p":"Běi jīng","m":"Beijing; capital of People's Republic of China","lv":1},{"h":"本","p":"běn","m":"roots or stems of plants; origin","lv":1},{"h":"不客气","p":"bù kè qi","m":"you're welcome; impolite","lv":1},{"h":"不","p":"bù","m":"not; no","lv":1},{"h":"菜","p":"cài","m":"vegetables; vegetable","lv":1},{"h":"茶","p":"chá","m":"tea; tea plant","lv":1},{"h":"吃","p":"chī","m":"to eat; to consume","lv":1},{"h":"出租车","p":"chū zū chē","m":"taxi","lv":1},{"h":"打电话","p":"dǎ diàn huà","m":"to make a telephone call","lv":1},{"h":"大","p":"dà","m":"big; huge","lv":1},{"h":"的","p":"de","m":"of","lv":1},{"h":"点","p":"diǎn","m":"point; dot","lv":1},{"h":"电脑","p":"diàn nǎo","m":"computer","lv":1},{"h":"电视","p":"diàn shì","m":"television; TV","lv":1},{"h":"电影","p":"diàn yǐng","m":"movie; film","lv":1},{"h":"东西","p":"dōng xi","m":"thing; stuff","lv":1},{"h":"都","p":"dōu","m":"all; both","lv":1},{"h":"读","p":"dú","m":"to read; to study","lv":1},{"h":"对不起","p":"duì bu qǐ","m":"unworthy; to let down","lv":1},{"h":"多","p":"duō","m":"many; much","lv":1},{"h":"多少","p":"duō shao","m":"how much; how many","lv":1},{"h":"儿子","p":"ér zi","m":"son","lv":1},{"h":"二","p":"èr","m":"two; 2","lv":1},{"h":"饭馆","p":"fàn guǎn","m":"restaurant","lv":1},{"h":"飞机","p":"fēi jī","m":"airplane","lv":1},{"h":"分钟","p":"fēn zhōng","m":"minute","lv":1},{"h":"高兴","p":"gāo xìng","m":"happy; glad","lv":1},{"h":"工作","p":"gōng zuò","m":"to work; job","lv":1},{"h":"狗","p":"gǒu","m":"dog","lv":1},{"h":"汉语","p":"Hàn yǔ","m":"Chinese language","lv":1},{"h":"好","p":"hǎo","m":"good; well","lv":1},{"h":"喝","p":"hē","m":"to drink; My goodness!","lv":1},{"h":"和","p":"hé","m":"and; together with","lv":1},{"h":"很","p":"hěn","m":"quite; very","lv":1},{"h":"后面","p":"hòu mian","m":"rear; back","lv":1},{"h":"回","p":"huí","m":"to curve; to return","lv":1},{"h":"会","p":"huì","m":"can; be possible","lv":1},{"h":"火车站","p":"huǒ chē zhàn","m":"train station","lv":1},{"h":"几","p":"jǐ","m":"how much; how many","lv":1},{"h":"家","p":"jiā","m":"home; family","lv":1},{"h":"叫","p":"jiào","m":"to shout; to call","lv":1},{"h":"今天","p":"jīn tiān","m":"today; at the present","lv":1},{"h":"九","p":"jiǔ","m":"nine; 9","lv":1},{"h":"开","p":"kāi","m":"to open; to start","lv":1},{"h":"看","p":"kàn","m":"to see; to look at","lv":1},{"h":"看见","p":"kàn jiàn","m":"to see; to catch sight of","lv":1},{"h":"块","p":"kuài","m":"chunk; piece","lv":1},{"h":"来","p":"lái","m":"to come; to arrive","lv":1},{"h":"老师","p":"lǎo shī","m":"teacher","lv":1},{"h":"冷","p":"lěng","m":"cold","lv":1},{"h":"里","p":"lǐ","m":"home; hometown","lv":1},{"h":"零","p":"líng","m":"zero; nought","lv":1},{"h":"六","p":"liù","m":"six; 6","lv":1},{"h":"妈妈","p":"mā ma","m":"mama; mommy","lv":1},{"h":"买","p":"mǎi","m":"to buy; to purchase","lv":1},{"h":"猫","p":"māo","m":"cat","lv":1},{"h":"没","p":"méi","m":"have not; not","lv":1},{"h":"没关系","p":"méi guān xi","m":"it doesn't matter","lv":1},{"h":"明天","p":"míng tiān","m":"tomorrow","lv":1},{"h":"哪","p":"nǎ","m":"how; which","lv":1},{"h":"那","p":"nà","m":"that; those","lv":1},{"h":"呢","p":"ne","m":"particle signaling a pause; particle indicating strong affirmation","lv":1},{"h":"能","p":"néng","m":"to be able to; to be capable of","lv":1},{"h":"年","p":"nián","m":"year","lv":1},{"h":"女儿","p":"nǚ ér","m":"daughter","lv":1},{"h":"朋友","p":"péng you","m":"friend","lv":1},{"h":"漂亮","p":"piào liang","m":"pretty; beautiful","lv":1},{"h":"苹果","p":"píng guǒ","m":"apple","lv":1},{"h":"七","p":"qī","m":"seven; 7","lv":1},{"h":"钱","p":"qián","m":"coin; money","lv":1},{"h":"前面","p":"qián miàn","m":"ahead; in front","lv":1},{"h":"请","p":"qǐng","m":"to ask; to invite","lv":1},{"h":"去","p":"qù","m":"to go; to remove","lv":1},{"h":"热","p":"rè","m":"to warm up; to heat up","lv":1},{"h":"人","p":"rén","m":"man; person","lv":1},{"h":"认识","p":"rèn shi","m":"to know; to recognize","lv":1},{"h":"日","p":"rì","m":"sun; day","lv":1},{"h":"三","p":"sān","m":"three; 3","lv":1},{"h":"商店","p":"shāng diàn","m":"store; shop","lv":1},{"h":"上","p":"shàng","m":"on top; upon","lv":1},{"h":"上午","p":"shàng wǔ","m":"morning","lv":1},{"h":"少","p":"shǎo","m":"few; little","lv":1},{"h":"谁","p":"shéi","m":"who","lv":1},{"h":"什么","p":"shén me","m":"what?; who?","lv":1},{"h":"十","p":"shí","m":"ten; 10","lv":1},{"h":"时候","p":"shí hou","m":"time; length of time","lv":1},{"h":"是","p":"shì","m":"is; are","lv":1},{"h":"书","p":"shū","m":"book; letter","lv":1},{"h":"水","p":"shuǐ","m":"water; river","lv":1},{"h":"水果","p":"shuǐ guǒ","m":"fruit","lv":1},{"h":"睡觉","p":"shuì jiào","m":"to go to bed; to sleep","lv":1},{"h":"说话","p":"shuō huà","m":"to speak; to say","lv":1},{"h":"四","p":"sì","m":"four; 4","lv":1},{"h":"岁","p":"suì","m":"year","lv":1},{"h":"他","p":"tā","m":"he or him; other","lv":1},{"h":"她","p":"tā","m":"she","lv":1},{"h":"太","p":"tài","m":"highest; greatest","lv":1},{"h":"天气","p":"tiān qì","m":"weather","lv":1},{"h":"听","p":"tīng","m":"to listen; to hear","lv":1},{"h":"同学","p":"tóng xué","m":"to study at the same school; fellow student","lv":1},{"h":"喂","p":"wèi","m":"to feed","lv":1},{"h":"我","p":"wǒ","m":"I; me","lv":1},{"h":"我们","p":"wǒ men","m":"we; us","lv":1},{"h":"五","p":"wǔ","m":"five; 5","lv":1},{"h":"喜欢","p":"xǐ huan","m":"to like; to be fond of","lv":1},{"h":"下","p":"xià","m":"down; downwards","lv":1},{"h":"下午","p":"xià wǔ","m":"afternoon; p.m.","lv":1},{"h":"下雨","p":"xià yǔ","m":"to rain; rainy","lv":1},{"h":"先生","p":"xiān sheng","m":"teacher; husband","lv":1},{"h":"现在","p":"xiàn zài","m":"now; at present","lv":1},{"h":"想","p":"xiǎng","m":"to think; to believe","lv":1},{"h":"小","p":"xiǎo","m":"small; tiny","lv":1},{"h":"小姐","p":"xiǎo jie","m":"young lady; miss","lv":1},{"h":"些","p":"xiē","m":"some; few","lv":1},{"h":"写","p":"xiě","m":"to write","lv":1},{"h":"谢谢","p":"xiè xie","m":"to thank; thanks","lv":1},{"h":"星期","p":"xīng qī","m":"week; day of the week","lv":1},{"h":"学生","p":"xué sheng","m":"student; schoolchild","lv":1},{"h":"学习","p":"xué xí","m":"to learn; to study","lv":1},{"h":"学校","p":"xué xiào","m":"school","lv":1},{"h":"一","p":"yī","m":"one; 1","lv":1},{"h":"衣服","p":"yī fu","m":"clothes","lv":1},{"h":"医生","p":"yī shēng","m":"doctor","lv":1},{"h":"医院","p":"yī yuàn","m":"hospital","lv":1},{"h":"椅子","p":"yǐ zi","m":"chair","lv":1},{"h":"有","p":"yǒu","m":"to have; there is","lv":1},{"h":"月","p":"yuè","m":"moon; month","lv":1},{"h":"在","p":"zài","m":"to exist; in the middle of doing sth","lv":1},{"h":"再见","p":"zài jiàn","m":"goodbye; see you again later","lv":1},{"h":"怎么样","p":"zěn me yàng","m":"how?; how about?","lv":1},{"h":"这","p":"zhè","m":"this; these","lv":1},{"h":"中国","p":"Zhōng guó","m":"China; Middle Kingdom","lv":1},{"h":"中午","p":"zhōng wǔ","m":"noon; midday","lv":1},{"h":"住","p":"zhù","m":"to live; to dwell","lv":1},{"h":"桌子","p":"zhuō zi","m":"table; desk","lv":1},{"h":"字","p":"zì","m":"letter; symbol","lv":1},{"h":"昨天","p":"zuó tiān","m":"yesterday","lv":1},{"h":"坐","p":"zuò","m":"to sit; to take a seat","lv":1},{"h":"做","p":"zuò","m":"to do; to make","lv":1},{"h":"吧","p":"ba","m":"...right?; ...OK?","lv":2},{"h":"白","p":"bái","m":"white; snowy","lv":2},{"h":"百","p":"bǎi","m":"hundred; numerous","lv":2},{"h":"帮助","p":"bāng zhù","m":"assistance; aid","lv":2},{"h":"报纸","p":"bào zhǐ","m":"newspaper; newsprint","lv":2},{"h":"比","p":"bǐ","m":"to compare; to contrast","lv":2},{"h":"别","p":"bié","m":"to leave; to depart","lv":2},{"h":"长","p":"cháng","m":"length; long","lv":2},{"h":"唱歌","p":"chàng gē","m":"to sing a song","lv":2},{"h":"出","p":"chū","m":"to go out; to come out","lv":2},{"h":"穿","p":"chuān","m":"to bore through; to pierce","lv":2},{"h":"船","p":"chuán","m":"a boat; vessel","lv":2},{"h":"次","p":"cì","m":"next in sequence; second","lv":2},{"h":"从","p":"cóng","m":"from; via","lv":2},{"h":"错","p":"cuò","m":"mistake; wrong","lv":2},{"h":"打篮球","p":"dá lán qiú","m":"Play basketball","lv":2},{"h":"大家","p":"dà jiā","m":"everyone; influential family","lv":2},{"h":"但是","p":"dàn shì","m":"but; however","lv":2},{"h":"到","p":"dào","m":"up to; to go","lv":2},{"h":"得","p":"de","m":"linking it to following phrase indicating effect; degree","lv":2},{"h":"得","p":"děi","m":"to have to; must","lv":2},{"h":"弟弟","p":"dì di","m":"younger brother","lv":2},{"h":"第一","p":"dì yī","m":"first; number one","lv":2},{"h":"懂","p":"dǒng","m":"to understand; to know","lv":2},{"h":"房间","p":"fáng jiān","m":"room","lv":2},{"h":"非常","p":"fēi cháng","m":"unusual; extraordinary","lv":2},{"h":"服务员","p":"fú wù yuán","m":"waiter; waitress","lv":2},{"h":"高","p":"gāo","m":"high; tall","lv":2},{"h":"告诉","p":"gào su","m":"to tell; to inform","lv":2},{"h":"哥哥","p":"gē ge","m":"older brother","lv":2},{"h":"给","p":"gěi","m":"to; for","lv":2},{"h":"公司","p":"gōng sī","m":"company; firm","lv":2},{"h":"贵","p":"guì","m":"expensive; noble","lv":2},{"h":"还","p":"hái","m":"still; still in progress","lv":2},{"h":"孩子","p":"hái zi","m":"child","lv":2},{"h":"好吃","p":"hǎo chī","m":"tasty; delicious","lv":2},{"h":"号","p":"hào","m":"ordinal number; day of a month","lv":2},{"h":"黑","p":"hēi","m":"black; dark","lv":2},{"h":"红","p":"hóng","m":"red; popular","lv":2},{"h":"欢迎","p":"huān yíng","m":"to welcome; welcome","lv":2},{"h":"还","p":"huán","m":"to pay back; to return","lv":2},{"h":"回答","p":"huí dá","m":"to reply; to answer","lv":2},{"h":"机场","p":"jī chǎng","m":"airport; airfield","lv":2},{"h":"鸡蛋","p":"jī dàn","m":"hen's egg","lv":2},{"h":"件","p":"jiàn","m":"item; component","lv":2},{"h":"教室","p":"jiào shì","m":"classroom","lv":2},{"h":"姐姐","p":"jiě jie","m":"older sister","lv":2},{"h":"介绍","p":"jiè shào","m":"to give a presentation; introduction","lv":2},{"h":"进","p":"jìn","m":"to advance; to enter","lv":2},{"h":"近","p":"jìn","m":"near; close to","lv":2},{"h":"就","p":"jiù","m":"at once; right away","lv":2},{"h":"觉得","p":"jué de","m":"to think; to feel","lv":2},{"h":"咖啡","p":"kā fēi","m":"coffee","lv":2},{"h":"开始","p":"kāi shǐ","m":"to begin; beginning","lv":2},{"h":"考试","p":"kǎo shì","m":"to take an exam; exam","lv":2},{"h":"可能","p":"kě néng","m":"possible; probable","lv":2},{"h":"可以","p":"kě yǐ","m":"can; may","lv":2},{"h":"课","p":"kè","m":"subject; course","lv":2},{"h":"快","p":"kuài","m":"rapid; quick","lv":2},{"h":"快乐","p":"kuài lè","m":"happy; merry","lv":2},{"h":"累","p":"lèi","m":"tired; weary","lv":2},{"h":"离","p":"lí","m":"to leave; to part from","lv":2},{"h":"两","p":"liǎng","m":"both; two","lv":2},{"h":"路","p":"lù","m":"road; journey","lv":2},{"h":"旅游","p":"lǚ yóu","m":"trip; journey","lv":2},{"h":"卖","p":"mài","m":"to sell; to betray","lv":2},{"h":"慢","p":"màn","m":"slow","lv":2},{"h":"忙","p":"máng","m":"busy; hurriedly","lv":2},{"h":"每","p":"měi","m":"each; every","lv":2},{"h":"妹妹","p":"mèi mei","m":"younger sister","lv":2},{"h":"门","p":"mén","m":"gate; door","lv":2},{"h":"男人","p":"nán rén","m":"a man; a male","lv":2},{"h":"牛奶","p":"niú nǎi","m":"cow's milk","lv":2},{"h":"女人","p":"nǚ rén","m":"woman","lv":2},{"h":"旁边","p":"páng biān","m":"lateral; side","lv":2},{"h":"跑步","p":"pǎo bù","m":"to walk quickly; to march","lv":2},{"h":"便宜","p":"pián yi","m":"small advantages; to let sb off lightly","lv":2},{"h":"票","p":"piào","m":"ticket; ballot","lv":2},{"h":"妻子","p":"qī zi","m":"wife","lv":2},{"h":"起床","p":"qǐ chuáng","m":"to get out of bed; to get up","lv":2},{"h":"千","p":"qiān","m":"a swing","lv":2},{"h":"晴","p":"qíng","m":"clear","lv":2},{"h":"去年","p":"qù nián","m":"last year","lv":2},{"h":"让","p":"ràng","m":"to yield; to permit","lv":2},{"h":"上班","p":"shàng bān","m":"to go to work; to be on duty","lv":2},{"h":"身体","p":"shēn tǐ","m":"health","lv":2},{"h":"生病","p":"shēng bìng","m":"to fall ill","lv":2},{"h":"生日","p":"shēng rì","m":"birthday","lv":2},{"h":"时间","p":"shí jiān","m":"time; period","lv":2},{"h":"事情","p":"shì qing","m":"affair; matter","lv":2},{"h":"手表","p":"shǒu biǎo","m":"wrist watch","lv":2},{"h":"手机","p":"shǒu jī","m":"cell phone; mobile phone","lv":2},{"h":"送","p":"sòng","m":"to deliver; to carry","lv":2},{"h":"所以","p":"suǒ yǐ","m":"therefore; as a result","lv":2},{"h":"它","p":"tā","m":"it","lv":2},{"h":"踢","p":"tī","m":"to kick","lv":2},{"h":"题","p":"tí","m":"topic; problem for discussion","lv":2},{"h":"跳舞","p":"tiào wǔ","m":"to dance","lv":2},{"h":"外","p":"wài","m":"outside; in addition","lv":2},{"h":"完","p":"wán","m":"to finish; to be over","lv":2},{"h":"玩","p":"wán","m":"toy; sth used for amusement","lv":2},{"h":"晚上","p":"wǎn shang","m":"evening; night","lv":2},{"h":"为","p":"wèi","m":"because of; for","lv":2},{"h":"问","p":"wèn","m":"to ask","lv":2},{"h":"问题","p":"wèn tí","m":"question; problem","lv":2},{"h":"西瓜","p":"xī guā","m":"watermelon","lv":2},{"h":"希望","p":"xī wàng","m":"to wish for; to desire","lv":2},{"h":"洗","p":"xǐ","m":"to wash; to bathe","lv":2},{"h":"向","p":"xiàng","m":"towards; to face","lv":2},{"h":"小时","p":"xiǎo shí","m":"hour","lv":2},{"h":"笑","p":"xiào","m":"laugh; smile","lv":2},{"h":"新","p":"xīn","m":"new; newly","lv":2},{"h":"姓","p":"xìng","m":"family name; surname","lv":2},{"h":"休息","p":"xiū xi","m":"rest; to rest","lv":2},{"h":"雪","p":"xuě","m":"snow; snowfall","lv":2},{"h":"颜色","p":"yán sè","m":"color","lv":2},{"h":"眼睛","p":"yǎn jing","m":"eye","lv":2},{"h":"羊肉","p":"yáng ròu","m":"mutton","lv":2},{"h":"药","p":"yào","m":"medicine; drug","lv":2},{"h":"要","p":"yào","m":"important; vital","lv":2},{"h":"也","p":"yě","m":"also; too","lv":2},{"h":"已经","p":"yǐ jīng","m":"already","lv":2},{"h":"一起","p":"yī qǐ","m":"in the same place; together","lv":2},{"h":"意思","p":"yì si","m":"idea; opinion","lv":2},{"h":"阴","p":"yīn","m":"cloudy; shady","lv":2},{"h":"因为","p":"yīn wèi","m":"because; owing to","lv":2},{"h":"游泳","p":"yóu yǒng","m":"swimming; to swim","lv":2},{"h":"右边","p":"yòu bian","m":"right side; right","lv":2},{"h":"鱼","p":"yú","m":"fish","lv":2},{"h":"元","p":"yuán","m":"Chinese monetary unit; dollar","lv":2},{"h":"远","p":"yuǎn","m":"far; distant","lv":2},{"h":"运动","p":"yùn dòng","m":"to move; to exercise","lv":2},{"h":"再","p":"zài","m":"again; once more","lv":2},{"h":"早上","p":"zǎo shang","m":"early morning","lv":2},{"h":"张","p":"zhāng","m":"to open up; to spread","lv":2},{"h":"长","p":"zhǎng","m":"chief; head","lv":2},{"h":"丈夫","p":"zhàng fu","m":"husband","lv":2},{"h":"找","p":"zhǎo","m":"to try to find; to look for","lv":2},{"h":"着","p":"zhe","m":"aspect particle indicating action in progress","lv":2},{"h":"真","p":"zhēn","m":"really; truly","lv":2},{"h":"知道","p":"zhī dào","m":"to know; to be aware of","lv":2},{"h":"准备","p":"zhǔn bèi","m":"preparation; to prepare","lv":2},{"h":"自行车","p":"zì xíng chē","m":"bicycle; bike","lv":2},{"h":"走","p":"zǒu","m":"to walk; to go","lv":2},{"h":"最","p":"zuì","m":"most; the most","lv":2},{"h":"左边","p":"zuǒ bian","m":"left; the left side","lv":2},{"h":"阿姨","p":"ā yí","m":"maternal aunt; step-mother","lv":3},{"h":"啊","p":"a","m":"modal particle ending sentence; showing affirmation","lv":3},{"h":"矮","p":"ǎi","m":"low","lv":3},{"h":"爱好","p":"ài hào","m":"to like; to take pleasure in","lv":3},{"h":"安静","p":"ān jìng","m":"quiet; peaceful","lv":3},{"h":"把","p":"bǎ","m":"to hold; to contain","lv":3},{"h":"搬","p":"bān","m":"to move; to shift","lv":3},{"h":"班","p":"bān","m":"team; class","lv":3},{"h":"半","p":"bàn","m":"half; semi-","lv":3},{"h":"办法","p":"bàn fǎ","m":"means; method","lv":3},{"h":"办公室","p":"bàn gōng shì","m":"office; business premises","lv":3},{"h":"帮忙","p":"bāng máng","m":"to help; to lend a hand","lv":3},{"h":"包","p":"bāo","m":"to cover; to wrap","lv":3},{"h":"饱","p":"bǎo","m":"to eat till full; satisfied","lv":3},{"h":"北方","p":"běi fāng","m":"north; the northern part a country","lv":3},{"h":"被","p":"bèi","m":"quilt; by","lv":3},{"h":"鼻子","p":"bí zi","m":"nose","lv":3},{"h":"比较","p":"bǐ jiào","m":"to compare; to contrast","lv":3},{"h":"比赛","p":"bǐ sài","m":"match","lv":3},{"h":"必须","p":"bì xū","m":"to have to; must","lv":3},{"h":"变化","p":"biàn huà","m":"change; variation","lv":3},{"h":"表示","p":"biǎo shì","m":"to express; to show","lv":3},{"h":"表演","p":"biǎo yǎn","m":"play; show","lv":3},{"h":"别人","p":"bié ren","m":"other people; others","lv":3},{"h":"宾馆","p":"bīn guǎn","m":"guesthouse; lodge","lv":3},{"h":"冰箱","p":"bīng xiāng","m":"icebox; freezer cabinet","lv":3},{"h":"才","p":"cái","m":"a moment ago; just now","lv":3},{"h":"菜单","p":"cài dān","m":"menu","lv":3},{"h":"参加","p":"cān jiā","m":"to participate; to take part","lv":3},{"h":"草","p":"cǎo","m":"grass; straw","lv":3},{"h":"层","p":"céng","m":"layer; stratum","lv":3},{"h":"差","p":"chà","m":"to differ from; to fall short of","lv":3},{"h":"衬衫","p":"chèn shān","m":"shirt; blouse","lv":3},{"h":"成绩","p":"chéng jì","m":"achievement; performance records","lv":3},{"h":"城市","p":"chéng shì","m":"city; town","lv":3},{"h":"迟到","p":"chí dào","m":"to arrive late","lv":3},{"h":"出现","p":"chū xiàn","m":"to appear; to arise","lv":3},{"h":"除了","p":"chú le","m":"besides; in addition to","lv":3},{"h":"厨房","p":"chú fáng","m":"kitchen","lv":3},{"h":"春","p":"chūn","m":"gay; joyful","lv":3},{"h":"词语","p":"cí yǔ","m":"expression","lv":3},{"h":"聪明","p":"cōng ming","m":"clever; intelligent","lv":3},{"h":"打扫","p":"dǎ sǎo","m":"to clean; to sweep","lv":3},{"h":"打算","p":"dǎ suàn","m":"to plan; to intend","lv":3},{"h":"带","p":"dài","m":"band; belt","lv":3},{"h":"担心","p":"dān xīn","m":"anxious; worried","lv":3},{"h":"蛋糕","p":"dàn gāo","m":"cake","lv":3},{"h":"当然","p":"dāng rán","m":"only natural; as it should be","lv":3},{"h":"地","p":"de","m":"-ly; structural particle: used before a verb or adjective","lv":3},{"h":"灯","p":"dēng","m":"lamp; light","lv":3},{"h":"低","p":"dī","m":"low; beneath","lv":3},{"h":"地方","p":"dì fang","m":"area; place","lv":3},{"h":"地铁","p":"dì tiě","m":"subway; metro","lv":3},{"h":"地图","p":"dì tú","m":"map","lv":3},{"h":"电梯","p":"diàn tī","m":"elevator; escalator","lv":3},{"h":"电子","p":"diàn zǐ","m":"electronic","lv":3},{"h":"冬","p":"dōng","m":"sound of beating a drum; onomatopoeia for rat-a-tat etc","lv":3},{"h":"东","p":"dōng","m":"east; landlord","lv":3},{"h":"动物","p":"dòng wù","m":"animal","lv":3},{"h":"短","p":"duǎn","m":"short or brief; to lack","lv":3},{"h":"段","p":"duàn","m":"paragraph; section","lv":3},{"h":"锻炼","p":"duàn liàn","m":"to engage in physical exercise; to work out","lv":3},{"h":"饿","p":"è","m":"to be hungry; hungry","lv":3},{"h":"而且","p":"ér qiě","m":"moreover; in addition","lv":3},{"h":"耳朵","p":"ěr duo","m":"ear","lv":3},{"h":"发烧","p":"fā shāo","m":"to have a fever","lv":3},{"h":"发现","p":"fā xiàn","m":"to find; to discover","lv":3},{"h":"方便","p":"fāng biàn","m":"convenient; to help out","lv":3},{"h":"放","p":"fàng","m":"to release; to free","lv":3},{"h":"放心","p":"fàng xīn","m":"to feel relieved; to feel reassured","lv":3},{"h":"分","p":"fēn","m":"to divide; to separate","lv":3},{"h":"附近","p":"fù jìn","m":"nearby; neighboring","lv":3},{"h":"复习","p":"fù xí","m":"to revise; to review","lv":3},{"h":"干净","p":"gān jìng","m":"clean; neat","lv":3},{"h":"敢","p":"gǎn","m":"to dare; daring","lv":3},{"h":"感冒","p":"gǎn mào","m":"to catch cold","lv":3},{"h":"根据","p":"gēn jù","m":"according to; based on","lv":3},{"h":"跟","p":"gēn","m":"heel; to follow closely","lv":3},{"h":"更","p":"gèng","m":"more; even more","lv":3},{"h":"公园","p":"gōng yuán","m":"public park","lv":3},{"h":"故事","p":"gù shi","m":"narrative; story","lv":3},{"h":"关","p":"guān","m":"mountain pass; to close","lv":3},{"h":"关心","p":"guān xīn","m":"to care for sth; caring","lv":3},{"h":"关于","p":"guān yú","m":"pertaining to; concerning","lv":3},{"h":"国家","p":"guó jiā","m":"country; nation","lv":3},{"h":"果汁","p":"guǒ zhī","m":"fruit juice","lv":3},{"h":"过去","p":"guò qu","m":"former; previous","lv":3},{"h":"还是","p":"hái shi","m":"or; still","lv":3},{"h":"害怕","p":"hài pà","m":"to be afraid; to be scared","lv":3},{"h":"河","p":"hé","m":"river","lv":3},{"h":"黑板","p":"hēi bǎn","m":"blackboard","lv":3},{"h":"护照","p":"hù zhào","m":"passport","lv":3},{"h":"花","p":"huā","m":"flower; blossom","lv":3},{"h":"花园","p":"huā yuán","m":"garden","lv":3},{"h":"画","p":"huà","m":"to draw; picture","lv":3},{"h":"坏","p":"huài","m":"bad; spoiled","lv":3},{"h":"环境","p":"huán jìng","m":"environment; circumstances","lv":3},{"h":"换","p":"huàn","m":"to change; to exchange","lv":3},{"h":"黄","p":"huáng","m":"yellow; pornographic","lv":3},{"h":"会议","p":"huì yì","m":"meeting; conference","lv":3},{"h":"或者","p":"huò zhě","m":"or; possibly","lv":3},{"h":"机会","p":"jī huì","m":"opportunity; chance","lv":3},{"h":"几乎","p":"jī hū","m":"almost; nearly","lv":3},{"h":"极","p":"jí","m":"extremely; utmost","lv":3},{"h":"记得","p":"jì de","m":"to remember","lv":3},{"h":"季节","p":"jì jié","m":"time; season","lv":3},{"h":"检查","p":"jiǎn chá","m":"inspection; to examine","lv":3},{"h":"简单","p":"jiǎn dān","m":"simple; not complicated","lv":3},{"h":"见面","p":"jiàn miàn","m":"to meet; to see sb","lv":3},{"h":"健康","p":"jiàn kāng","m":"health; healthy","lv":3},{"h":"讲","p":"jiǎng","m":"to speak; to explain","lv":3},{"h":"教","p":"jiāo","m":"to teach","lv":3},{"h":"脚","p":"jiǎo","m":"foot; leg","lv":3},{"h":"角","p":"jiǎo","m":"angle; corner","lv":3},{"h":"接","p":"jiē","m":"to receive; to meet or welcome sb","lv":3},{"h":"街道","p":"jiē dào","m":"street; subdistrict","lv":3},{"h":"节目","p":"jié mù","m":"program","lv":3},{"h":"节日","p":"jié rì","m":"holiday; festival","lv":3},{"h":"结婚","p":"jié hūn","m":"to marry; to get married","lv":3},{"h":"结束","p":"jié shù","m":"termination; to finish","lv":3},{"h":"解决","p":"jiě jué","m":"to resolve; to solve","lv":3},{"h":"借","p":"jiè","m":"to lend; to borrow","lv":3},{"h":"经常","p":"jīng cháng","m":"day to day; everyday","lv":3},{"h":"经过","p":"jīng guò","m":"to pass; to go through","lv":3},{"h":"经理","p":"jīng lǐ","m":"manager; director","lv":3},{"h":"旧","p":"jiù","m":"old; former","lv":3},{"h":"句子","p":"jù zi","m":"sentence","lv":3},{"h":"决定","p":"jué dìng","m":"to resolve; decision","lv":3},{"h":"渴","p":"kě","m":"thirsty","lv":3},{"h":"可爱","p":"kě ài","m":"adorable; cute","lv":3},{"h":"刻","p":"kè","m":"moment; to carve","lv":3},{"h":"客人","p":"kè rén","m":"visitor; guest","lv":3},{"h":"空调","p":"kōng tiáo","m":"air conditioning","lv":3},{"h":"口","p":"kǒu","m":"mouth; domestic animals","lv":3},{"h":"哭","p":"kū","m":"to cry; to weep","lv":3},{"h":"裤子","p":"kù zi","m":"trousers; pants","lv":3},{"h":"筷子","p":"kuài zi","m":"chopsticks","lv":3},{"h":"蓝","p":"lán","m":"blue; indigo plant","lv":3},{"h":"老","p":"lǎo","m":"prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity; experienced","lv":3},{"h":"离开","p":"lí kāi","m":"to depart; to leave","lv":3},{"h":"礼物","p":"lǐ wù","m":"gift; present","lv":3},{"h":"历史","p":"lì shǐ","m":"history","lv":3},{"h":"脸","p":"liǎn","m":"face","lv":3},{"h":"练习","p":"liàn xí","m":"exercise; drill","lv":3},{"h":"辆","p":"liàng","m":"classifier for vehicles","lv":3},{"h":"了解","p":"liǎo jiě","m":"to understand; to realize","lv":3},{"h":"邻居","p":"lín jū","m":"neighbor; next door","lv":3},{"h":"楼","p":"lóu","m":"house with more than 1 story; storied building","lv":3},{"h":"绿","p":"lǜ","m":"green","lv":3},{"h":"马","p":"mǎ","m":"horse; horse or cavalry piece in Chinese chess","lv":3},{"h":"马上","p":"mǎ shàng","m":"at once; right away","lv":3},{"h":"满意","p":"mǎn yì","m":"satisfied; pleased","lv":3},{"h":"帽子","p":"mào zi","m":"hat; cap","lv":3},{"h":"米","p":"mǐ","m":"rice","lv":3},{"h":"面包","p":"miàn bāo","m":"bread","lv":3},{"h":"面条","p":"miàn tiáo","m":"noodles","lv":3},{"h":"明白","p":"míng bai","m":"clear; obvious","lv":3},{"h":"拿","p":"ná","m":"to hold; to seize","lv":3},{"h":"南","p":"nán","m":"south","lv":3},{"h":"难","p":"nán","m":"problem; difficulty","lv":3},{"h":"难过","p":"nán guò","m":"to feel sad; to feel unwell","lv":3},{"h":"年级","p":"nián jí","m":"grade","lv":3},{"h":"年轻","p":"nián qīng","m":"young","lv":3},{"h":"鸟","p":"niǎo","m":"bird","lv":3},{"h":"努力","p":"nǔ lì","m":"great effort; to strive","lv":3},{"h":"爬山","p":"pá shān","m":"to climb a mountain; to mountaineer","lv":3},{"h":"盘子","p":"pán zi","m":"tray; plate","lv":3},{"h":"胖","p":"pàng","m":"fat; plump","lv":3},{"h":"啤酒","p":"pí jiǔ","m":"beer","lv":3},{"h":"葡萄","p":"pú tao","m":"grape","lv":3},{"h":"普通话","p":"pǔ tōng huà","m":"ordinary speech","lv":3},{"h":"骑","p":"qí","m":"to sit astride","lv":3},{"h":"其实","p":"qí shí","m":"actually; in fact","lv":3},{"h":"其他","p":"qí tā","m":"other; the others","lv":3},{"h":"奇怪","p":"qí guài","m":"strange; odd","lv":3},{"h":"清楚","p":"qīng chu","m":"clear; distinct","lv":3},{"h":"秋","p":"qiū","m":"a swing","lv":3},{"h":"裙子","p":"qún zi","m":"skirt","lv":3},{"h":"然后","p":"rán hòu","m":"after; after that","lv":3},{"h":"热情","p":"rè qíng","m":"cordial; enthusiastic","lv":3},{"h":"认为","p":"rèn wéi","m":"to believe; to think","lv":3},{"h":"认真","p":"rèn zhēn","m":"conscientious; earnest","lv":3},{"h":"容易","p":"róng yì","m":"easy; likely","lv":3},{"h":"如果","p":"rú guǒ","m":"if; in case","lv":3},{"h":"伞","p":"sǎn","m":"umbrella; parasol","lv":3},{"h":"上网","p":"shàng wǎng","m":"to be on the internet","lv":3},{"h":"生气","p":"shēng qì","m":"angry; mad","lv":3},{"h":"声音","p":"shēng yīn","m":"voice; sound","lv":3},{"h":"使","p":"shǐ","m":"to make; to cause","lv":3},{"h":"世界","p":"shì jiè","m":"world","lv":3},{"h":"瘦","p":"shòu","m":"thin; to lose weight","lv":3},{"h":"舒服","p":"shū fu","m":"comfortable; feeling well","lv":3},{"h":"叔叔","p":"shū shu","m":"father's younger brother; uncle","lv":3},{"h":"树","p":"shù","m":"tree; to cultivate","lv":3},{"h":"数学","p":"shù xué","m":"mathematics; mathematical","lv":3},{"h":"刷","p":"shuā","m":"to brush; to paint","lv":3},{"h":"双","p":"shuāng","m":"two; double","lv":3},{"h":"水平","p":"shuǐ píng","m":"standard; horizontal","lv":3},{"h":"司机","p":"sī jī","m":"chauffeur; driver","lv":3},{"h":"虽然","p":"suī rán","m":"although; even though","lv":3},{"h":"太阳","p":"tài yáng","m":"sun","lv":3},{"h":"糖","p":"táng","m":"sugar; sweets","lv":3},{"h":"特别","p":"tè bié","m":"especially; special","lv":3},{"h":"疼","p":"téng","m":"sore; to love dearly","lv":3},{"h":"提高","p":"tí gāo","m":"to raise; to increase","lv":3},{"h":"体育","p":"tǐ yù","m":"sports; physical education","lv":3},{"h":"甜","p":"tián","m":"sweet","lv":3},{"h":"条","p":"tiáo","m":"strip; item","lv":3},{"h":"同事","p":"tóng shì","m":"colleague; co-worker","lv":3},{"h":"同意","p":"tóng yì","m":"to agree; to consent","lv":3},{"h":"突然","p":"tū rán","m":"sudden; abrupt","lv":3},{"h":"图书馆","p":"tú shū guǎn","m":"library","lv":3},{"h":"腿","p":"tuǐ","m":"leg","lv":3},{"h":"完成","p":"wán chéng","m":"to complete; to accomplish","lv":3},{"h":"碗","p":"wǎn","m":"bowl; cup","lv":3},{"h":"万","p":"wàn","m":"ten thousand; a great number","lv":3},{"h":"忘记","p":"wàng jì","m":"to forget","lv":3},{"h":"为了","p":"wèi le","m":"in order to; for the purpose of","lv":3},{"h":"为什么","p":"wèi shén me","m":"why?; for what reason?","lv":3},{"h":"位","p":"wèi","m":"position; location","lv":3},{"h":"文化","p":"wén huà","m":"culture; civilization","lv":3},{"h":"西","p":"xī","m":"west","lv":3},{"h":"习惯","p":"xí guàn","m":"habit; custom","lv":3},{"h":"洗手间","p":"xǐ shǒu jiān","m":"toilet; lavatory","lv":3},{"h":"洗澡","p":"xǐ zǎo","m":"to bathe; to take a shower","lv":3},{"h":"夏","p":"xià","m":"summer","lv":3},{"h":"先","p":"xiān","m":"early; prior","lv":3},{"h":"香蕉","p":"xiāng jiāo","m":"banana","lv":3},{"h":"相同","p":"xiāng tóng","m":"identical; same","lv":3},{"h":"相信","p":"xiāng xìn","m":"to believe; to accept sth as true","lv":3},{"h":"像","p":"xiàng","m":"to resemble; to be like","lv":3},{"h":"小心","p":"xiǎo xīn","m":"to be careful; to take care","lv":3},{"h":"校长","p":"xiào zhǎng","m":"headmaster","lv":3},{"h":"鞋","p":"xié","m":"shoe","lv":3},{"h":"新闻","p":"xīn wén","m":"news","lv":3},{"h":"新鲜","p":"xīn xiān","m":"freshness; novel","lv":3},{"h":"信","p":"xìn","m":"letter; mail","lv":3},{"h":"行李箱","p":"xíng li xiāng","m":"suitcase","lv":3},{"h":"兴趣","p":"xìng qù","m":"hobby","lv":3},{"h":"熊猫","p":"xióng māo","m":"panda","lv":3},{"h":"需要","p":"xū yào","m":"to need; to want","lv":3},{"h":"选择","p":"xuǎn zé","m":"to select; to pick","lv":3},{"h":"眼镜","p":"yǎn jìng","m":"spectacles; eyeglasses","lv":3},{"h":"要求","p":"yāo qiú","m":"to request; to require","lv":3},{"h":"爷爷","p":"yé ye","m":"paternal grandfather","lv":3},{"h":"一定","p":"yī dìng","m":"surely; certainly","lv":3},{"h":"一共","p":"yī gòng","m":"altogether","lv":3},{"h":"一会儿","p":"yī huì r","m":"a while","lv":3},{"h":"一样","p":"yī yàng","m":"same; like","lv":3},{"h":"以后","p":"yǐ hòu","m":"after; later","lv":3},{"h":"以前","p":"yǐ qián","m":"before; formerly","lv":3},{"h":"以为","p":"yǐ wéi","m":"to believe; to think","lv":3},{"h":"一般","p":"yī bān","m":"same; ordinary","lv":3},{"h":"一边","p":"yī biān","m":"one side; either side","lv":3},{"h":"一直","p":"yī zhí","m":"continuously; always","lv":3},{"h":"音乐","p":"yīn yuè","m":"music","lv":3},{"h":"银行","p":"yín háng","m":"bank","lv":3},{"h":"应该","p":"yīng gāi","m":"ought to; should","lv":3},{"h":"影响","p":"yǐng xiǎng","m":"an influence; an effect","lv":3},{"h":"用","p":"yòng","m":"to use; to employ","lv":3},{"h":"游戏","p":"yóu xì","m":"game; to play","lv":3},{"h":"有名","p":"yǒu míng","m":"famous; well-known","lv":3},{"h":"又","p":"yòu","m":"also; both... and...","lv":3},{"h":"遇到","p":"yù dào","m":"to meet; to run into","lv":3},{"h":"愿意","p":"yuàn yì","m":"to wish; to want","lv":3},{"h":"越","p":"yuè","m":"to exceed; to climb over","lv":3},{"h":"月亮","p":"yuè liang","m":"moon","lv":3},{"h":"云","p":"yún","m":"cloud","lv":3},{"h":"站","p":"zhàn","m":"station; to stand","lv":3},{"h":"着急","p":"zháo jí","m":"to worry; to feel anxious","lv":3},{"h":"照顾","p":"zhào gu","m":"to take care of; to show consideration","lv":3},{"h":"照片","p":"zhào piàn","m":"photograph; picture","lv":3},{"h":"照相机","p":"zhào xiàng jī","m":"camera","lv":3},{"h":"只","p":"zhī","m":"classifier for birds and certain animals; one of a pair","lv":3},{"h":"只","p":"zhǐ","m":"but; only","lv":3},{"h":"终于","p":"zhōng yú","m":"at last; in the end","lv":3},{"h":"中间","p":"zhōng jiān","m":"between; intermediate","lv":3},{"h":"种","p":"zhǒng","m":"genus; race","lv":3},{"h":"重要","p":"zhòng yào","m":"important; significant","lv":3},{"h":"周末","p":"zhōu mò","m":"weekend","lv":3},{"h":"主要","p":"zhǔ yào","m":"main; principal","lv":3},{"h":"祝","p":"zhù","m":"to wish; to express good wishes","lv":3},{"h":"注意","p":"zhù yì","m":"to take note of; to pay attention to","lv":3},{"h":"字典","p":"zì diǎn","m":"dictionary; character dictionary","lv":3},{"h":"自己","p":"zì jǐ","m":"oneself; one's own","lv":3},{"h":"总是","p":"zǒng shì","m":"always","lv":3},{"h":"最近","p":"zuì jìn","m":"recent; recently","lv":3},{"h":"作业","p":"zuò yè","m":"school assignment; homework","lv":3},{"h":"作用","p":"zuò yòng","m":"to act on; to affect","lv":3}],"hsk0":[{"h":"日","p":"rì","m":"mặt trời","pic":"sun"},{"h":"月","p":"yuè","m":"mặt trăng","pic":"moon"},{"h":"山","p":"shān","m":"núi","pic":"mountain"},{"h":"水","p":"shuǐ","m":"nước","pic":"drop"},{"h":"火","p":"huǒ","m":"lửa","pic":"fire"},{"h":"木","p":"mù","m":"cây","pic":"tree"},{"h":"口","p":"kǒu","m":"cái miệng","pic":"mouth"},{"h":"手","p":"shǒu","m":"bàn tay","pic":"hand"},{"h":"目","p":"mù","m":"con mắt","pic":"eye"},{"h":"耳","p":"ěr","m":"cái tai","pic":"ear"},{"h":"大","p":"dà","m":"to, lớn","pic":"elephant"},{"h":"小","p":"xiǎo","m":"nhỏ, bé","pic":"ant"},{"h":"人","p":"rén","m":"người","pic":"boy"},{"h":"女","p":"nǚ","m":"con gái","pic":"girl"},{"h":"子","p":"zǐ","m":"con","pic":"baby"},{"h":"马","p":"mǎ","m":"con ngựa","pic":"horse"},{"h":"鸟","p":"niǎo","m":"con chim","pic":"bird"},{"h":"鱼","p":"yú","m":"con cá","pic":"fish"},{"h":"牛","p":"niú","m":"con bò","pic":"cow"},{"h":"羊","p":"yáng","m":"con dê","pic":"goat"},{"h":"狗","p":"gǒu","m":"con chó","pic":"dog"},{"h":"猫","p":"māo","m":"con mèo","pic":"cat"},{"h":"猪","p":"zhū","m":"con heo","pic":"pig"},{"h":"虎","p":"hǔ","m":"con hổ","pic":"tiger"},{"h":"米","p":"mǐ","m":"gạo","pic":"rice"},{"h":"门","p":"mén","m":"cái cửa","pic":"door"},{"h":"车","p":"chē","m":"xe","pic":"car"},{"h":"花","p":"huā","m":"bông hoa","pic":"blossom"},{"h":"雨","p":"yǔ","m":"mưa","pic":"rain"},{"h":"云","p":"yún","m":"đám mây","pic":"cloud"},{"h":"心","p":"xīn","m":"trái tim","pic":"heart"},{"h":"书","p":"shū","m":"quyển sách","pic":"book"},{"h":"牙","p":"yá","m":"cái răng","pic":"tooth"},{"h":"足","p":"zú","m":"bàn chân","pic":"foot"}],"strokes":{"爱":10,"八":2,"杯":8,"子":3,"北":5,"京":8,"本":5,"不":4,"客":9,"气":4,"菜":11,"茶":9,"吃":6,"出":5,"租":10,"车":4,"打":5,"电":5,"话":8,"大":3,"的":8,"点":9,"脑":10,"视":8,"影":15,"东":5,"西":6,"都":10,"读":10,"对":5,"起":10,"多":6,"少":4,"儿":2,"二":2,"饭":7,"馆":11,"飞":3,"机":6,"分":4,"钟":9,"高":10,"兴":6,"工":3,"作":7,"狗":8,"汉":5,"语":9,"好":6,"喝":12,"和":8,"很":9,"后":6,"面":9,"回":6,"会":6,"火":4,"站":10,"几":2,"家":10,"叫":5,"今":4,"天":4,"九":2,"开":4,"看":9,"见":4,"块":7,"来":7,"老":6,"师":6,"冷":7,"里":7,"零":13,"六":4,"妈":6,"买":6,"猫":11,"没":7,"关":6,"系":7,"明":8,"哪":9,"那":6,"呢":8,"能":10,"年":6,"女":3,"朋":8,"友":4,"漂":14,"亮":9,"苹":8,"果":8,"七":2,"钱":10,"前":9,"请":10,"去":5,"热":10,"人":2,"认":4,"识":7,"日":4,"三":3,"商":11,"店":8,"上":3,"午":4,"谁":10,"什":4,"么":3,"十":2,"时":7,"候":10,"是":9,"书":4,"水":4,"睡":13,"觉":9,"说":9,"四":5,"岁":6,"他":5,"她":6,"太":4,"听":7,"同":6,"学":8,"喂":12,"我":7,"们":5,"五":4,"喜":12,"欢":6,"下":3,"雨":8,"先":6,"生":5,"现":8,"在":6,"想":13,"小":3,"姐":8,"些":8,"写":5,"谢":12,"星":9,"期":12,"习":3,"校":10,"一":1,"衣":6,"服":8,"医":7,"院":9,"椅":12,"有":6,"月":4,"再":6,"怎":9,"样":10,"这":7,"中":4,"国":8,"住":7,"桌":10,"字":6,"昨":9,"坐":7,"做":11,"吧":7,"白":5,"百":6,"帮":9,"助":7,"报":7,"纸":7,"比":4,"别":7,"长":4,"唱":11,"歌":14,"穿":9,"船":11,"次":6,"从":4,"错":13,"篮":16,"球":11,"但":7,"到":8,"得":11,"弟":7,"第":11,"懂":15,"房":8,"间":7,"非":8,"常":11,"务":5,"员":7,"告":7,"诉":7,"哥":10,"给":9,"公":4,"司":5,"贵":9,"还":7,"孩":9,"号":5,"黑":12,"红":6,"迎":7,"答":12,"场":6,"鸡":7,"蛋":11,"件":6,"教":11,"室":9,"介":4,"绍":8,"进":7,"近":7,"就":12,"咖":8,"啡":11,"始":8,"考":6,"试":8,"可":5,"以":4,"课":10,"快":7,"乐":5,"累":11,"离":10,"两":7,"路":13,"旅":10,"游":12,"卖":8,"慢":14,"忙":6,"每":7,"妹":8,"门":3,"男":7,"牛":4,"奶":5,"旁":10,"边":5,"跑":12,"步":7,"便":9,"宜":8,"票":11,"妻":8,"床":7,"千":3,"晴":12,"让":5,"班":10,"身":7,"体":7,"病":10,"事":8,"情":11,"手":4,"表":8,"送":9,"所":8,"它":5,"踢":15,"题":15,"跳":13,"舞":14,"外":5,"完":7,"玩":8,"晚":11,"为":4,"问":6,"瓜":5,"希":7,"望":11,"洗":9,"向":6,"笑":10,"新":13,"姓":8,"休":6,"息":10,"雪":11,"颜":15,"色":6,"眼":11,"睛":13,"羊":6,"肉":6,"药":9,"要":9,"也":3,"已":3,"经":8,"意":13,"思":9,"阴":6,"因":6,"泳":8,"右":5,"鱼":8,"元":4,"远":7,"运":7,"动":6,"早":6,"张":7,"丈":3,"夫":4,"找":7,"着":11,"真":10,"知":8,"道":12,"准":10,"备":8,"自":6,"行":6,"走":7,"最":12,"左":5,"阿":7,"姨":9,"啊":10,"矮":13,"安":6,"静":14,"把":7,"搬":13,"半":5,"办":4,"法":8,"包":5,"饱":8,"方":4,"被":10,"鼻":14,"较":10,"赛":14,"必":5,"须":9,"变":8,"化":4,"示":5,"演":14,"宾":10,"冰":6,"箱":15,"才":3,"单":8,"参":8,"加":5,"草":9,"层":7,"差":9,"衬":8,"衫":8,"成":6,"绩":11,"城":9,"市":5,"迟":7,"除":9,"了":2,"厨":12,"春":9,"词":7,"聪":15,"扫":6,"算":14,"带":9,"担":8,"心":4,"糕":16,"当":6,"然":12,"地":6,"灯":6,"低":7,"铁":10,"图":8,"梯":11,"冬":5,"物":8,"短":12,"段":9,"锻":14,"炼":9,"饿":10,"而":6,"且":5,"耳":6,"朵":6,"发":5,"烧":10,"放":8,"附":7,"复":9,"干":3,"净":8,"敢":11,"感":13,"冒":9,"根":10,"据":11,"跟":13,"更":7,"园":7,"故":9,"于":3,"汁":5,"过":6,"害":10,"怕":8,"河":8,"板":8,"护":7,"照":13,"花":7,"画":8,"坏":7,"环":8,"境":14,"换":10,"黄":11,"议":5,"或":8,"者":8,"乎":5,"极":7,"记":5,"季":8,"节":5,"检":11,"查":9,"简":13,"健":10,"康":11,"讲":6,"脚":11,"角":7,"接":11,"街":12,"目":5,"结":9,"婚":11,"束":7,"解":13,"决":6,"借":10,"理":11,"旧":5,"句":5,"定":8,"渴":12,"刻":8,"空":8,"调":10,"口":3,"哭":10,"裤":12,"筷":13,"蓝":13,"礼":5,"历":4,"史":5,"脸":11,"练":8,"辆":11,"邻":7,"居":8,"楼":13,"绿":11,"马":3,"满":13,"帽":12,"米":6,"条":7,"拿":10,"南":9,"难":10,"级":6,"轻":9,"鸟":5,"努":7,"力":2,"爬":8,"山":3,"盘":11,"胖":9,"啤":11,"酒":10,"葡":12,"萄":11,"普":12,"通":10,"骑":11,"其":8,"实":8,"奇":8,"怪":8,"清":11,"楚":13,"秋":9,"裙":12,"容":10,"易":8,"如":6,"伞":6,"网":6,"声":7,"音":9,"使":8,"世":5,"界":9,"瘦":14,"舒":12,"叔":8,"树":9,"数":13,"刷":8,"双":4,"平":5,"虽":9,"阳":6,"糖":16,"特":10,"疼":10,"提":12,"育":8,"甜":11,"突":9,"腿":13,"碗":13,"万":3,"忘":7,"位":7,"文":4,"惯":11,"澡":16,"夏":10,"香":9,"蕉":15,"相":9,"信":9,"像":13,"鞋":15,"闻":9,"鲜":14,"李":7,"趣":15,"熊":14,"需":14,"选":9,"择":8,"镜":16,"求":7,"爷":6,"共":6,"般":10,"直":8,"银":11,"应":7,"该":8,"响":9,"用":5,"戏":6,"名":6,"又":2,"遇":12,"愿":14,"越":12,"云":4,"急":9,"顾":10,"片":4,"只":5,"终":8,"种":9,"重":9,"周":8,"末":5,"主":5,"祝":9,"注":8,"典":8,"己":3,"总":9,"业":5,"木":4,"猪":11,"虎":8,"牙":4,"足":7}};
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-ja-data.js ---- */
/* Generated by tools/build_cjk_data.py from kanji-data (kyōiku kanji) and AnimCJK. Do not edit by hand. */
(function (root) {
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  W.cjkData = W.cjkData || {};
  W.cjkData.ja = {"kanji":[{"c":"一","g":1,"m":"one","on":["ichi","itsu"],"kun":["hito","hito(tsu)"],"n":1},{"c":"二","g":1,"m":"two","on":["ni","ji"],"kun":["futa","futa(tsu)"],"n":2},{"c":"九","g":1,"m":"nine","on":["kyuu","ku"],"kun":["kokono","kokono(tsu)"],"n":2},{"c":"七","g":1,"m":"seven","on":["shichi"],"kun":["nana","nana(tsu)"],"n":2},{"c":"人","g":1,"m":"person","on":["jin","nin"],"kun":["hito","ri"],"n":2},{"c":"入","g":1,"m":"enter","on":["nyuu","u"],"kun":["i(ru)","i(ru)"],"n":2},{"c":"八","g":1,"m":"eight","on":["hachi"],"kun":["ya","ya(tsu)"],"n":2},{"c":"力","g":1,"m":"power","on":["ryoku","riki"],"kun":["chikara"],"n":2},{"c":"十","g":1,"m":"ten","on":["uu","ji"],"kun":["too","to"],"n":2},{"c":"三","g":1,"m":"three","on":["san","zou"],"kun":["mi","mi(tsu)"],"n":3},{"c":"上","g":1,"m":"above","on":["ou","ou"],"kun":["ue","ue"],"n":3},{"c":"下","g":1,"m":"below","on":["ka","ge"],"kun":["shita","shimo"],"n":3},{"c":"口","g":1,"m":"mouth","on":["kou","ku"],"kun":["kuchi"],"n":3},{"c":"大","g":1,"m":"large","on":["dai","tai"],"kun":["oo","oo(kii)"],"n":3},{"c":"女","g":1,"m":"woman","on":["o","nyo"],"kun":["onna","me"],"n":3},{"c":"山","g":1,"m":"mountain","on":["san","sen"],"kun":["yama"],"n":3},{"c":"川","g":1,"m":"stream","on":["sen"],"kun":["kawa"],"n":3},{"c":"工","g":2,"m":"craft","on":["kou","ku"],"kun":[],"n":3},{"c":"刀","g":2,"m":"sword","on":["tou"],"kun":["katana","sori"],"n":2},{"c":"土","g":1,"m":"soil","on":["do","to"],"kun":["tsuchi"],"n":3},{"c":"千","g":1,"m":"thousand","on":["sen"],"kun":["chi"],"n":3},{"c":"夕","g":1,"m":"evening","on":["seki"],"kun":["yuu"],"n":3},{"c":"子","g":1,"m":"child","on":["shi","su"],"kun":["ko","ko"],"n":3},{"c":"小","g":1,"m":"little","on":["ou"],"kun":["chii(sai)","ko"],"n":3},{"c":"丁","g":3,"m":"street","on":["ou","tei"],"kun":["hinoto"],"n":2},{"c":"丸","g":2,"m":"round","on":["gan"],"kun":["maru","maru(meru)"],"n":3},{"c":"才","g":2,"m":"genius","on":["sai"],"kun":[],"n":3},{"c":"中","g":1,"m":"in","on":["uu"],"kun":["naka","uchi"],"n":4},{"c":"五","g":1,"m":"five","on":["go"],"kun":["itsu","itsu(tsu)"],"n":4},{"c":"六","g":1,"m":"six","on":["roku","riku"],"kun":["mu","mu(tsu)"],"n":4},{"c":"円","g":1,"m":"circle","on":["en"],"kun":["maru(i)","maru"],"n":4},{"c":"天","g":1,"m":"heavens","on":["ten"],"kun":["amatsu","ame"],"n":4},{"c":"手","g":1,"m":"hand","on":["u","zu"],"kun":["te","te"],"n":4},{"c":"文","g":1,"m":"sentence","on":["bun","mon"],"kun":["fumi","aya"],"n":4},{"c":"日","g":1,"m":"day","on":["nichi","jitsu"],"kun":["hi","bi"],"n":4},{"c":"月","g":1,"m":"month","on":["getsu","gatsu"],"kun":["tsuki"],"n":4},{"c":"木","g":1,"m":"tree","on":["boku","moku"],"kun":["ki","ko"],"n":4},{"c":"水","g":1,"m":"water","on":["sui"],"kun":["mizu","mizu"],"n":4},{"c":"火","g":1,"m":"fire","on":["ka"],"kun":["hi","bi"],"n":4},{"c":"犬","g":1,"m":"dog","on":["ken"],"kun":["inu","inu"],"n":4},{"c":"王","g":1,"m":"king","on":["ou","nou"],"kun":[],"n":4},{"c":"出","g":1,"m":"exit","on":["utsu","sui"],"kun":["de(ru)","de"],"n":5},{"c":"右","g":1,"m":"right","on":["u","yuu"],"kun":["migi"],"n":5},{"c":"四","g":1,"m":"four","on":["shi"],"kun":["yo","yo(tsu)"],"n":5},{"c":"左","g":1,"m":"left","on":["sa","a"],"kun":["hidari"],"n":5},{"c":"本","g":1,"m":"book","on":["hon"],"kun":["moto"],"n":5},{"c":"正","g":1,"m":"correct","on":["sei","ou"],"kun":["tada(shii)","tada(su)"],"n":5},{"c":"玉","g":1,"m":"jewel","on":["gyoku"],"kun":["tama","tama"],"n":5},{"c":"田","g":1,"m":"rice field","on":["den"],"kun":["ta"],"n":5},{"c":"白","g":1,"m":"white","on":["haku","byaku"],"kun":["shiro","shira"],"n":5},{"c":"目","g":1,"m":"eye","on":["moku","boku"],"kun":["me","me"],"n":5},{"c":"石","g":1,"m":"stone","on":["seki","aku"],"kun":["ishi"],"n":5},{"c":"立","g":1,"m":"stand up","on":["ritsu","ryuu"],"kun":["ta(tsu)","ta(tsu)"],"n":5},{"c":"万","g":2,"m":"ten thousand","on":["man","ban"],"kun":["yorozu"],"n":3},{"c":"久","g":5,"m":"long time","on":["kyuu","ku"],"kun":["hisa(shii)"],"n":3},{"c":"今","g":2,"m":"now","on":["kon","kin"],"kun":["ima"],"n":4},{"c":"元","g":2,"m":"beginning","on":["gen","gan"],"kun":["moto"],"n":4},{"c":"公","g":2,"m":"public","on":["kou","ku"],"kun":["ooyake"],"n":4},{"c":"内","g":2,"m":"inside","on":["nai","dai"],"kun":["uchi"],"n":4},{"c":"分","g":2,"m":"part","on":["bun","fun"],"kun":["wa(keru)","wa(ke)"],"n":4},{"c":"切","g":2,"m":"cut","on":["setsu","sai"],"kun":["ki(ru)","ki(ru)"],"n":4},{"c":"午","g":2,"m":"noon","on":["go"],"kun":["uma"],"n":4},{"c":"友","g":2,"m":"friend","on":["yuu"],"kun":["tomo"],"n":4},{"c":"太","g":2,"m":"plump","on":["tai","ta"],"kun":["futo(i)","futo(ru)"],"n":4},{"c":"少","g":2,"m":"few","on":["ou"],"kun":["suku(nai)","suko(shi)"],"n":4},{"c":"引","g":2,"m":"pull","on":["in"],"kun":["hi(ku)","hi(ki)"],"n":4},{"c":"心","g":2,"m":"heart","on":["shin"],"kun":["kokoro","gokoro"],"n":4},{"c":"戸","g":2,"m":"door","on":["ko"],"kun":["to"],"n":4},{"c":"方","g":2,"m":"direction","on":["hou"],"kun":["kata","kata"],"n":4},{"c":"牛","g":2,"m":"cow","on":["gyuu"],"kun":["ushi"],"n":4},{"c":"父","g":2,"m":"father","on":["fu"],"kun":["chichi"],"n":4},{"c":"毛","g":2,"m":"fur","on":["mou"],"kun":["ke"],"n":4},{"c":"止","g":2,"m":"stop","on":["shi"],"kun":["to(maru)","do(mari)"],"n":4},{"c":"兄","g":2,"m":"elder brother","on":["kei","kyou"],"kun":["ani"],"n":5},{"c":"冬","g":2,"m":"winter","on":["tou"],"kun":["fuyu"],"n":5},{"c":"北","g":2,"m":"north","on":["hoku"],"kun":["kita"],"n":5},{"c":"半","g":2,"m":"half","on":["han"],"kun":["naka(ba)"],"n":5},{"c":"古","g":2,"m":"old","on":["ko"],"kun":["furu(i)","furu"],"n":5},{"c":"台","g":2,"m":"pedestal","on":["dai","tai"],"kun":["utena","ware"],"n":5},{"c":"外","g":2,"m":"outside","on":["gai","ge"],"kun":["soto","hoka"],"n":5},{"c":"市","g":2,"m":"market","on":["shi"],"kun":["ichi"],"n":5},{"c":"広","g":2,"m":"wide","on":["kou"],"kun":["hiro(i)","hiro(maru)"],"n":5},{"c":"母","g":2,"m":"mother","on":["bo"],"kun":["haha","mo"],"n":5},{"c":"用","g":2,"m":"utilize","on":["you"],"kun":["mochi(iru)"],"n":5},{"c":"矢","g":2,"m":"dart","on":["shi"],"kun":["ya"],"n":5},{"c":"世","g":3,"m":"generation","on":["sei","se"],"kun":["yo"],"n":5},{"c":"主","g":3,"m":"lord","on":["u","su"],"kun":["nushi","omo"],"n":5},{"c":"他","g":3,"m":"other","on":["ta"],"kun":["hoka"],"n":5},{"c":"代","g":3,"m":"substitute","on":["dai","tai"],"kun":["ka(waru)","kawa(ru)"],"n":5},{"c":"写","g":3,"m":"copy","on":["a","a"],"kun":["utsu(su)","utsu(ru)"],"n":5},{"c":"去","g":3,"m":"gone","on":["kyo","ko"],"kun":["sa(ru)","sa(ru)"],"n":5},{"c":"号","g":3,"m":"nickname","on":["gou"],"kun":["sake(bu)","yobina"],"n":5},{"c":"央","g":3,"m":"center","on":["ou"],"kun":[],"n":5},{"c":"平","g":3,"m":"even","on":["hei","byou"],"kun":["tai(ra)","daira"],"n":5},{"c":"打","g":3,"m":"strike","on":["da","daasu"],"kun":["u(tsu)","u(chi)"],"n":5},{"c":"氷","g":3,"m":"icicle","on":["hyou"],"kun":["koori","hi"],"n":5},{"c":"申","g":3,"m":"have the honor to","on":["shin"],"kun":["mou(su)","mou(shi)"],"n":5},{"c":"皮","g":3,"m":"pelt","on":["hi"],"kun":["kawa"],"n":5},{"c":"皿","g":3,"m":"dish","on":["bei"],"kun":["sara"],"n":5},{"c":"礼","g":3,"m":"salute","on":["rei","rai"],"kun":[],"n":5},{"c":"休","g":1,"m":"rest","on":["kyuu"],"kun":["yasu(mu)","yasu(maru)"],"n":6},{"c":"先","g":1,"m":"before","on":["sen"],"kun":["saki","ma(zu)"],"n":6},{"c":"名","g":1,"m":"name","on":["mei","myou"],"kun":["na","na"],"n":6},{"c":"字","g":1,"m":"character","on":["ji"],"kun":["aza","azana"],"n":6},{"c":"年","g":1,"m":"year","on":["nen"],"kun":["toshi"],"n":6},{"c":"早","g":1,"m":"early","on":["sou","sa"],"kun":["haya(i)","haya"],"n":6},{"c":"気","g":1,"m":"spirit","on":["ki","ke"],"kun":["iki"],"n":6},{"c":"百","g":1,"m":"hundred","on":["hyaku","byaku"],"kun":["momo"],"n":6},{"c":"竹","g":1,"m":"bamboo","on":["chiku"],"kun":["take"],"n":6},{"c":"糸","g":1,"m":"thread","on":["shi"],"kun":["ito"],"n":6},{"c":"耳","g":1,"m":"ear","on":["ji"],"kun":["mimi"],"n":6},{"c":"虫","g":1,"m":"insect","on":["uu","ki"],"kun":["mushi"],"n":6},{"c":"村","g":1,"m":"village","on":["son"],"kun":["mura"],"n":7},{"c":"男","g":1,"m":"male","on":["dan","nan"],"kun":["otoko","o"],"n":7},{"c":"町","g":1,"m":"town","on":["ou"],"kun":["machi"],"n":7},{"c":"花","g":1,"m":"flower","on":["ka","ke"],"kun":["hana"],"n":7},{"c":"見","g":1,"m":"see","on":["ken"],"kun":["mi(ru)","mi(eru)"],"n":7},{"c":"貝","g":1,"m":"shellfish","on":["bai"],"kun":["kai"],"n":7},{"c":"赤","g":1,"m":"red","on":["seki","aku"],"kun":["aka","aka"],"n":7},{"c":"足","g":1,"m":"leg","on":["soku"],"kun":["ashi","ta(riru)"],"n":7},{"c":"車","g":1,"m":"car","on":["a"],"kun":["kuruma"],"n":7},{"c":"不","g":4,"m":"negative","on":["fu","bu"],"kun":[],"n":4},{"c":"仕","g":3,"m":"attend","on":["shi","ji"],"kun":["tsuka(eru)"],"n":5},{"c":"交","g":2,"m":"mingle","on":["kou"],"kun":["maji(waru)","maji(eru)"],"n":6},{"c":"会","g":2,"m":"meeting","on":["kai","e"],"kun":["a(u)","a(waseru)"],"n":6},{"c":"光","g":2,"m":"ray","on":["kou"],"kun":["hika(ru)","hikari"],"n":6},{"c":"同","g":2,"m":"same","on":["dou"],"kun":["ona(ji)"],"n":6},{"c":"回","g":2,"m":"-times","on":["kai","e"],"kun":["mawa(ru)","mawa(ru)"],"n":6},{"c":"多","g":2,"m":"many","on":["ta"],"kun":["oo(i)","masa(ni)"],"n":6},{"c":"当","g":2,"m":"hit","on":["tou"],"kun":["a(taru)","a(tari)"],"n":6},{"c":"毎","g":2,"m":"every","on":["mai"],"kun":["goto","goto(ni)"],"n":6},{"c":"池","g":2,"m":"pond","on":["chi"],"kun":["ike"],"n":6},{"c":"米","g":2,"m":"rice","on":["bei","mai"],"kun":["kome","yone"],"n":6},{"c":"羽","g":2,"m":"feathers","on":["u"],"kun":["ha","wa"],"n":6},{"c":"考","g":2,"m":"consider","on":["kou"],"kun":["kanga(eru)","kanga(e)"],"n":6},{"c":"肉","g":2,"m":"meat","on":["niku"],"kun":["shishi"],"n":6},{"c":"自","g":2,"m":"oneself","on":["ji","shi"],"kun":["mizuka(ra)","ono(zukara)"],"n":6},{"c":"色","g":2,"m":"color","on":["oku","shiki"],"kun":["iro"],"n":6},{"c":"行","g":2,"m":"going","on":["kou","gyou"],"kun":["i(ku)","yu(ku)"],"n":6},{"c":"西","g":2,"m":"west","on":["sei","sai"],"kun":["nishi"],"n":6},{"c":"何","g":2,"m":"what","on":["ka"],"kun":["nani","nan"],"n":7},{"c":"体","g":2,"m":"body","on":["tai","tei"],"kun":["karada","katachi"],"n":7},{"c":"作","g":2,"m":"make","on":["saku","sa"],"kun":["tsuku(ru)","tsuku(ri)"],"n":7},{"c":"図","g":2,"m":"map","on":["zu","to"],"kun":["e","haka(ru)"],"n":7},{"c":"声","g":2,"m":"voice","on":["sei","ou"],"kun":["koe","kowa"],"n":7},{"c":"売","g":2,"m":"sell","on":["bai"],"kun":["u(ru)","u(reru)"],"n":7},{"c":"弟","g":2,"m":"younger brother","on":["tei","dai"],"kun":["otouto"],"n":7},{"c":"形","g":2,"m":"shape","on":["kei","gyou"],"kun":["kata","gata"],"n":7},{"c":"来","g":2,"m":"come","on":["rai","tai"],"kun":["ku(ru)","kita(ru)"],"n":7},{"c":"社","g":2,"m":"company","on":["a"],"kun":["yashiro"],"n":7},{"c":"角","g":2,"m":"angle","on":["kaku"],"kun":["kado","tsuno"],"n":7},{"c":"言","g":2,"m":"say","on":["gen","gon"],"kun":["i(u)","koto"],"n":7},{"c":"谷","g":2,"m":"valley","on":["koku"],"kun":["tani","kiwa(maru)"],"n":7},{"c":"走","g":2,"m":"run","on":["sou"],"kun":["hashi(ru)"],"n":7},{"c":"近","g":2,"m":"near","on":["kin","kon"],"kun":["chika(i)"],"n":7},{"c":"里","g":2,"m":"ri","on":["ri"],"kun":["sato"],"n":7},{"c":"麦","g":2,"m":"barley","on":["baku"],"kun":["mugi"],"n":7},{"c":"学","g":1,"m":"study","on":["gaku"],"kun":["mana(bu)"],"n":8},{"c":"林","g":1,"m":"grove","on":["rin"],"kun":["hayashi"],"n":8},{"c":"空","g":1,"m":"empty","on":["kuu"],"kun":["sora","a(ku)"],"n":8},{"c":"金","g":1,"m":"gold","on":["kin","kon"],"kun":["kane","kana"],"n":8},{"c":"雨","g":1,"m":"rain","on":["u"],"kun":["ame","ama"],"n":8},{"c":"青","g":1,"m":"blue","on":["sei","ou"],"kun":["ao","ao"],"n":8},{"c":"草","g":1,"m":"grass","on":["sou"],"kun":["kusa","kusa"],"n":9},{"c":"音","g":1,"m":"sound","on":["on","in"],"kun":["oto","ne"],"n":9},{"c":"化","g":3,"m":"change","on":["ka","ke"],"kun":["ba(keru)","ba(kasu)"],"n":4},{"c":"地","g":2,"m":"ground","on":["chi","ji"],"kun":[],"n":6},{"c":"両","g":3,"m":"both","on":["ryou"],"kun":["teru","futatsu"],"n":6},{"c":"全","g":3,"m":"whole","on":["zen"],"kun":["matta(ku)","sube(te)"],"n":6},{"c":"向","g":3,"m":"yonder","on":["kou"],"kun":["mu(ku)","mu(i)"],"n":6},{"c":"安","g":3,"m":"relax","on":["an"],"kun":["yasu(i)","yasu(maru)"],"n":6},{"c":"州","g":3,"m":"state","on":["uu","su"],"kun":["su"],"n":6},{"c":"曲","g":3,"m":"bend","on":["kyoku"],"kun":["ma(garu)","ma(geru)"],"n":6},{"c":"有","g":3,"m":"possess","on":["yuu","u"],"kun":["a(ru)"],"n":6},{"c":"次","g":3,"m":"next","on":["ji","shi"],"kun":["tsu(gu)","tsugi"],"n":6},{"c":"死","g":3,"m":"death","on":["shi"],"kun":["shi(nu)","shi(ni)"],"n":6},{"c":"羊","g":3,"m":"sheep","on":["you"],"kun":["hitsuji"],"n":6},{"c":"血","g":3,"m":"blood","on":["ketsu"],"kun":["chi"],"n":6},{"c":"京","g":2,"m":"capital","on":["kyou","kei"],"kun":["miyako"],"n":8},{"c":"国","g":2,"m":"country","on":["koku"],"kun":["kuni"],"n":8},{"c":"夜","g":2,"m":"night","on":["ya"],"kun":["yo","yoru"],"n":8},{"c":"妹","g":2,"m":"younger sister","on":["mai"],"kun":["imouto"],"n":8},{"c":"姉","g":2,"m":"elder sister","on":["shi"],"kun":["ane","haha"],"n":8},{"c":"店","g":2,"m":"store","on":["ten"],"kun":["mise","tana"],"n":8},{"c":"明","g":2,"m":"bright","on":["mei","myou"],"kun":["a(kari)","aka(rui)"],"n":8},{"c":"東","g":2,"m":"east","on":["tou"],"kun":["higashi"],"n":8},{"c":"歩","g":2,"m":"walk","on":["ho","bu"],"kun":["aru(ku)","ayu(mu)"],"n":8},{"c":"画","g":2,"m":"brush-stroke","on":["ga","kaku"],"kun":["ega(ku)","kaku(suru)"],"n":8},{"c":"直","g":2,"m":"straightaway","on":["oku","jiki"],"kun":["tada(chini)","nao(su)"],"n":8},{"c":"知","g":2,"m":"know","on":["chi"],"kun":["shi(ru)","shi(raseru)"],"n":8},{"c":"長","g":2,"m":"long","on":["ou"],"kun":["naga(i)","osa"],"n":8},{"c":"前","g":2,"m":"in front","on":["zen"],"kun":["mae","mae"],"n":9},{"c":"南","g":2,"m":"south","on":["nan","na"],"kun":["minami"],"n":9},{"c":"室","g":2,"m":"room","on":["shitsu"],"kun":["muro"],"n":9},{"c":"後","g":2,"m":"behind","on":["go","kou"],"kun":["nochi","ushi(ro)"],"n":9},{"c":"思","g":2,"m":"think","on":["shi"],"kun":["omo(u)","omoera(ku)"],"n":9},{"c":"星","g":2,"m":"star","on":["sei","ou"],"kun":["hoshi","boshi"],"n":9},{"c":"活","g":2,"m":"lively","on":["katsu"],"kun":["i(kiru)","i(kasu)"],"n":9},{"c":"海","g":2,"m":"sea","on":["kai"],"kun":["umi"],"n":9},{"c":"点","g":2,"m":"spot","on":["ten"],"kun":["tsu(keru)","tsu(ku)"],"n":9},{"c":"科","g":2,"m":"department","on":["ka"],"kun":[],"n":9},{"c":"茶","g":2,"m":"tea","on":["a","sa"],"kun":[],"n":9},{"c":"食","g":2,"m":"eat","on":["oku","jiki"],"kun":["ku(u)","ku(rau)"],"n":9},{"c":"首","g":2,"m":"neck","on":["u"],"kun":["kubi"],"n":9},{"c":"欠","g":4,"m":"lack","on":["ketsu","ken"],"kun":["ka(keru)","ka(ku)"],"n":4},{"c":"氏","g":4,"m":"family name","on":["shi"],"kun":["uji","uji"],"n":4},{"c":"由","g":3,"m":"wherefore","on":["yu","yuu"],"kun":["yoshi","yo(ru)"],"n":5},{"c":"札","g":4,"m":"tag","on":["satsu"],"kun":["fuda"],"n":5},{"c":"民","g":4,"m":"people","on":["min"],"kun":["tami"],"n":5},{"c":"辺","g":4,"m":"environs","on":["hen"],"kun":["ata(ri)","hoto(ri)"],"n":5},{"c":"付","g":4,"m":"adhere","on":["fu"],"kun":["tsu(keru)","tsu(keru)"],"n":5},{"c":"以","g":4,"m":"by means of","on":["i"],"kun":["mo(te)"],"n":5},{"c":"失","g":4,"m":"lose","on":["shitsu"],"kun":["ushina(u)","u(seru)"],"n":5},{"c":"必","g":4,"m":"invariably","on":["hitsu"],"kun":["kanara(zu)"],"n":5},{"c":"未","g":4,"m":"un-","on":["mi","bi"],"kun":["ima(da)","ma(da)"],"n":5},{"c":"末","g":4,"m":"end","on":["matsu","batsu"],"kun":["sue"],"n":5},{"c":"校","g":1,"m":"exam","on":["kou","kyou"],"kun":[],"n":10},{"c":"夏","g":2,"m":"summer","on":["ka","ga"],"kun":["natsu"],"n":10},{"c":"家","g":2,"m":"house","on":["ka","ke"],"kun":["ie","ya"],"n":10},{"c":"弱","g":2,"m":"weak","on":["aku"],"kun":["yowa(i)","yowa(ru)"],"n":10},{"c":"時","g":2,"m":"time","on":["ji"],"kun":["toki","doki"],"n":10},{"c":"紙","g":2,"m":"paper","on":["shi"],"kun":["kami"],"n":10},{"c":"記","g":2,"m":"scribe","on":["ki"],"kun":["shiru(su)"],"n":10},{"c":"通","g":2,"m":"traffic","on":["tsuu","tsu"],"kun":["too(ru)","too(ri)"],"n":10},{"c":"高","g":2,"m":"tall","on":["kou"],"kun":["taka(i)","taka"],"n":10},{"c":"強","g":2,"m":"strong","on":["kyou","gou"],"kun":["tsuyo(i)","tsuyo(maru)"],"n":11},{"c":"教","g":2,"m":"teach","on":["kyou"],"kun":["oshi(eru)","oso(waru)"],"n":11},{"c":"理","g":2,"m":"logic","on":["ri"],"kun":["kotowari"],"n":11},{"c":"組","g":2,"m":"association","on":["so"],"kun":["ku(mu)","kumi"],"n":11},{"c":"船","g":2,"m":"ship","on":["sen"],"kun":["fune","funa"],"n":11},{"c":"週","g":2,"m":"week","on":["uu"],"kun":[],"n":11},{"c":"雪","g":2,"m":"snow","on":["setsu"],"kun":["yuki"],"n":11},{"c":"魚","g":2,"m":"fish","on":["gyo"],"kun":["uo","sakana"],"n":11},{"c":"鳥","g":2,"m":"bird","on":["ou"],"kun":["tori"],"n":11},{"c":"黄","g":2,"m":"yellow","on":["kou","ou"],"kun":["ki","ko"],"n":11},{"c":"黒","g":2,"m":"black","on":["koku"],"kun":["kuro","kuro(zumu)"],"n":11},{"c":"支","g":5,"m":"branch","on":["shi"],"kun":["sasa(eru)","tsuka(eru)"],"n":4},{"c":"住","g":3,"m":"dwell","on":["uu","uu"],"kun":["su(mu)","su(mau)"],"n":7},{"c":"助","g":3,"m":"help","on":["o"],"kun":["tasu(keru)","tasu(karu)"],"n":7},{"c":"医","g":3,"m":"doctor","on":["i"],"kun":["i(yasu)","i(suru)"],"n":7},{"c":"君","g":3,"m":"mister","on":["kun"],"kun":["kimi","gimi"],"n":7},{"c":"対","g":3,"m":"vis-a-vis","on":["tai","tsui"],"kun":["aite","kota(eru)"],"n":7},{"c":"局","g":3,"m":"bureau","on":["kyoku"],"kun":["tsubone"],"n":7},{"c":"役","g":3,"m":"duty","on":["yaku","eki"],"kun":[],"n":7},{"c":"投","g":3,"m":"throw","on":["tou"],"kun":["na(geru)","na(ge)"],"n":7},{"c":"決","g":3,"m":"decide","on":["ketsu"],"kun":["ki(meru)","gi(me)"],"n":7},{"c":"究","g":3,"m":"research","on":["kyuu","ku"],"kun":["kiwa(meru)"],"n":7},{"c":"身","g":3,"m":"somebody","on":["shin"],"kun":["mi"],"n":7},{"c":"者","g":3,"m":"someone","on":["a"],"kun":["mono"],"n":8},{"c":"研","g":3,"m":"polish","on":["ken"],"kun":["to(gu)"],"n":9},{"c":"馬","g":2,"m":"horse","on":["ba"],"kun":["uma","uma"],"n":10},{"c":"森","g":1,"m":"forest","on":["shin"],"kun":["mori"],"n":12},{"c":"場","g":2,"m":"location","on":["ou","ou"],"kun":["ba"],"n":12},{"c":"朝","g":2,"m":"morning","on":["ou"],"kun":["asa"],"n":12},{"c":"番","g":2,"m":"turn","on":["ban"],"kun":["tsuga(i)"],"n":12},{"c":"答","g":2,"m":"solution","on":["tou"],"kun":["kota(eru)","kota(e)"],"n":12},{"c":"絵","g":2,"m":"picture","on":["kai","e"],"kun":[],"n":12},{"c":"買","g":2,"m":"buy","on":["bai"],"kun":["ka(u)"],"n":12},{"c":"道","g":2,"m":"road-way","on":["dou","tou"],"kun":["michi","iu"],"n":12},{"c":"間","g":2,"m":"interval","on":["kan","ken"],"kun":["aida","ma"],"n":12},{"c":"雲","g":2,"m":"cloud","on":["un"],"kun":["kumo","gumo"],"n":12},{"c":"数","g":2,"m":"number","on":["suu","su"],"kun":["kazu","kazo(eru)"],"n":13},{"c":"楽","g":2,"m":"music","on":["gaku","raku"],"kun":["tano(shii)","tano(shimu)"],"n":13},{"c":"話","g":2,"m":"tale","on":["wa"],"kun":["hana(su)","hanashi"],"n":13},{"c":"電","g":2,"m":"electricity","on":["den"],"kun":[],"n":13},{"c":"所","g":3,"m":"place","on":["o"],"kun":["tokoro","tokoro"],"n":8},{"c":"事","g":3,"m":"matter","on":["ji","zu"],"kun":["koto","tsuka(u)"],"n":8},{"c":"使","g":3,"m":"use","on":["shi"],"kun":["tsuka(u)","tsuka(i)"],"n":8},{"c":"具","g":3,"m":"tool","on":["gu"],"kun":["sona(eru)","tsubusa(ni)"],"n":8},{"c":"受","g":3,"m":"accept","on":["u"],"kun":["u(keru)","u(ke)"],"n":8},{"c":"和","g":3,"m":"harmony","on":["wa","o"],"kun":["yawa(ragu)","yawa(rageru)"],"n":8},{"c":"始","g":3,"m":"commence","on":["shi"],"kun":["haji(meru)","haji(meru)"],"n":8},{"c":"定","g":3,"m":"determine","on":["tei","ou"],"kun":["sada(meru)","sada(maru)"],"n":8},{"c":"実","g":3,"m":"reality","on":["jitsu","shitsu"],"kun":["mi","mino(ru)"],"n":8},{"c":"服","g":3,"m":"clothing","on":["fuku"],"kun":[],"n":8},{"c":"泳","g":3,"m":"swim","on":["ei"],"kun":["oyo(gu)"],"n":8},{"c":"物","g":3,"m":"thing","on":["butsu","motsu"],"kun":["mono","mono"],"n":8},{"c":"苦","g":3,"m":"suffering","on":["ku"],"kun":["kuru(shii)","guru(shii)"],"n":8},{"c":"表","g":3,"m":"surface","on":["hyou"],"kun":["omote","omote"],"n":8},{"c":"部","g":3,"m":"section","on":["bu"],"kun":["be"],"n":11},{"c":"乗","g":3,"m":"ride","on":["ou","ou"],"kun":["no(ru)","no(ri)"],"n":9},{"c":"客","g":3,"m":"guest","on":["kyaku","kaku"],"kun":[],"n":9},{"c":"屋","g":3,"m":"roof","on":["oku"],"kun":["ya"],"n":9},{"c":"度","g":3,"m":"degrees","on":["do","to"],"kun":["tabi","ta(i)"],"n":9},{"c":"待","g":3,"m":"wait","on":["tai"],"kun":["ma(tsu)","ma(chi)"],"n":9},{"c":"持","g":3,"m":"hold","on":["ji"],"kun":["mo(tsu)","mo(chi)"],"n":9},{"c":"界","g":3,"m":"world","on":["kai"],"kun":[],"n":9},{"c":"発","g":3,"m":"departure","on":["hatsu","hotsu"],"kun":["ta(tsu)","aba(ku)"],"n":9},{"c":"相","g":3,"m":"inter-","on":["sou","ou"],"kun":["ai"],"n":9},{"c":"県","g":3,"m":"prefecture","on":["ken"],"kun":["ka(keru)"],"n":9},{"c":"美","g":3,"m":"beauty","on":["bi","mi"],"kun":["utsuku(shii)"],"n":9},{"c":"負","g":3,"m":"defeat","on":["fu"],"kun":["ma(keru)","ma(kasu)"],"n":9},{"c":"送","g":3,"m":"escort","on":["sou"],"kun":["oku(ru)"],"n":9},{"c":"重","g":3,"m":"heavy","on":["uu","ou"],"kun":["e","omo(i)"],"n":9},{"c":"談","g":3,"m":"discuss","on":["dan"],"kun":[],"n":15},{"c":"要","g":4,"m":"need","on":["you"],"kun":["i(ru)","kaname"],"n":9},{"c":"勝","g":3,"m":"victory","on":["ou"],"kun":["ka(tsu)","ga(chi)"],"n":12},{"c":"仮","g":5,"m":"sham","on":["ka","ke"],"kun":["kari","kari"],"n":6},{"c":"起","g":3,"m":"rouse","on":["ki"],"kun":["o(kiru)","o(koru)"],"n":10},{"c":"速","g":3,"m":"quick","on":["soku"],"kun":["haya(i)","haya"],"n":10},{"c":"配","g":3,"m":"distribute","on":["hai"],"kun":["kuba(ru)"],"n":10},{"c":"酒","g":3,"m":"sake","on":["u"],"kun":["sake","saka"],"n":10},{"c":"院","g":3,"m":"inst.","on":["in"],"kun":[],"n":10},{"c":"終","g":3,"m":"end","on":["uu"],"kun":["o(waru)","o(waru)"],"n":11},{"c":"習","g":3,"m":"learn","on":["uu","u"],"kun":["nara(u)","nara(i)"],"n":11},{"c":"転","g":3,"m":"revolve","on":["ten"],"kun":["koro(garu)","koro(geru)"],"n":11},{"c":"進","g":3,"m":"advance","on":["shin"],"kun":["susu(mu)","susu(meru)"],"n":11},{"c":"落","g":3,"m":"fall","on":["raku"],"kun":["o(chiru)","o(chi)"],"n":12},{"c":"葉","g":3,"m":"leaf","on":["you"],"kun":["ha"],"n":12},{"c":"軽","g":3,"m":"lightly","on":["kei","kyou"],"kun":["karu(i)","karo(yaka)"],"n":12},{"c":"運","g":3,"m":"carry","on":["un"],"kun":["hako(bu)"],"n":12},{"c":"開","g":3,"m":"open","on":["kai"],"kun":["hira(ku)","hira(ki)"],"n":12},{"c":"集","g":3,"m":"gather","on":["uu"],"kun":["atsu(maru)","atsu(meru)"],"n":12},{"c":"飲","g":3,"m":"drink","on":["in","on"],"kun":["no(mu)","no(mi)"],"n":12},{"c":"業","g":3,"m":"business","on":["gyou","gou"],"kun":["waza"],"n":13},{"c":"漢","g":3,"m":"sino-","on":["kan"],"kun":[],"n":13},{"c":"路","g":3,"m":"path","on":["ro","ru"],"kun":["ji","michi"],"n":13},{"c":"農","g":3,"m":"agriculture","on":["nou"],"kun":[],"n":13},{"c":"鉄","g":3,"m":"iron","on":["tetsu"],"kun":["kurogane"],"n":13},{"c":"歌","g":2,"m":"song","on":["ka"],"kun":["uta","uta(u)"],"n":14},{"c":"算","g":2,"m":"calculate","on":["san"],"kun":["soro"],"n":14},{"c":"聞","g":2,"m":"hear","on":["bun","mon"],"kun":["ki(ku)","ki(koeru)"],"n":14},{"c":"語","g":2,"m":"word","on":["go"],"kun":["kata(ru)","kata(rau)"],"n":14},{"c":"読","g":2,"m":"read","on":["doku","toku"],"kun":["yo(mu)","yo(mi)"],"n":14},{"c":"鳴","g":2,"m":"chirp","on":["mei"],"kun":["na(ku)","na(ru)"],"n":14},{"c":"線","g":2,"m":"line","on":["sen"],"kun":["suji"],"n":15},{"c":"横","g":3,"m":"sideways","on":["ou"],"kun":["yoko"],"n":15},{"c":"調","g":3,"m":"tune","on":["ou"],"kun":["shira(beru)","shira(be)"],"n":15},{"c":"親","g":2,"m":"parent","on":["shin"],"kun":["oya","oya"],"n":16},{"c":"頭","g":2,"m":"head","on":["tou","zu"],"kun":["atama","kashira"],"n":16},{"c":"顔","g":2,"m":"face","on":["gan"],"kun":["kao"],"n":18},{"c":"病","g":3,"m":"ill","on":["byou","hei"],"kun":["ya(mu)","ya(mi)"],"n":10},{"c":"最","g":4,"m":"utmost","on":["sai","u"],"kun":["motto(mo)","tsuma"],"n":12},{"c":"争","g":4,"m":"contend","on":["sou"],"kun":["araso(u)","ika(deka)"],"n":6},{"c":"仲","g":4,"m":"go-between","on":["uu"],"kun":["naka"],"n":6},{"c":"伝","g":4,"m":"transmit","on":["den","ten"],"kun":["tsuta(waru)","tsuta(eru)"],"n":6},{"c":"共","g":4,"m":"together","on":["kyou"],"kun":["tomo","tomo(ni)"],"n":6},{"c":"好","g":4,"m":"fond","on":["kou"],"kun":["kono(mu)","su(ku)"],"n":6},{"c":"成","g":4,"m":"turn into","on":["sei","ou"],"kun":["na(ru)","na(su)"],"n":6},{"c":"老","g":4,"m":"old man","on":["rou"],"kun":["o(iru)","fu(keru)"],"n":6},{"c":"位","g":4,"m":"rank","on":["i"],"kun":["kurai","gurai"],"n":7},{"c":"低","g":4,"m":"lower","on":["tei"],"kun":["hiku(i)","hiku(meru)"],"n":7},{"c":"初","g":4,"m":"first time","on":["o"],"kun":["haji(me)","haji(mete)"],"n":7},{"c":"別","g":4,"m":"separate","on":["betsu"],"kun":["waka(reru)","wa(keru)"],"n":7},{"c":"利","g":4,"m":"profit","on":["ri"],"kun":["ki(ku)"],"n":7},{"c":"努","g":4,"m":"toil","on":["do"],"kun":["tsuto(meru)"],"n":7},{"c":"労","g":4,"m":"labor","on":["rou"],"kun":["rou(suru)","itawa(ru)"],"n":7},{"c":"命","g":3,"m":"fate","on":["mei","myou"],"kun":["inochi"],"n":8},{"c":"岸","g":3,"m":"beach","on":["gan"],"kun":["kishi"],"n":8},{"c":"放","g":3,"m":"set free","on":["hou"],"kun":["hana(su)","ppana(shi)"],"n":8},{"c":"昔","g":3,"m":"once upon a time","on":["seki","aku"],"kun":["mukashi"],"n":8},{"c":"波","g":3,"m":"waves","on":["ha"],"kun":["nami"],"n":8},{"c":"注","g":3,"m":"pour","on":["uu"],"kun":["soso(gu)","sa(su)"],"n":8},{"c":"育","g":3,"m":"bring up","on":["iku"],"kun":["soda(tsu)","soda(chi)"],"n":8},{"c":"拾","g":3,"m":"pick up","on":["uu","uu"],"kun":["hiro(u)"],"n":9},{"c":"指","g":3,"m":"finger","on":["shi"],"kun":["yubi","sa(su)"],"n":9},{"c":"洋","g":3,"m":"ocean","on":["you"],"kun":[],"n":9},{"c":"神","g":3,"m":"gods","on":["shin","jin"],"kun":["kami","kan"],"n":9},{"c":"秒","g":3,"m":"second (1/60 minute)","on":["byou"],"kun":[],"n":9},{"c":"級","g":3,"m":"class","on":["kyuu"],"kun":[],"n":9},{"c":"追","g":3,"m":"chase","on":["tsui"],"kun":["o(u)"],"n":9},{"c":"戦","g":4,"m":"war","on":["sen"],"kun":["ikusa","tataka(u)"],"n":13},{"c":"競","g":4,"m":"emulate","on":["kyou","kei"],"kun":["kiso(u)","se(ru)"],"n":20},{"c":"良","g":4,"m":"good","on":["ryou"],"kun":["yo(i)","yo(i)"],"n":7},{"c":"功","g":4,"m":"achievement","on":["kou","ku"],"kun":["isao"],"n":5},{"c":"特","g":4,"m":"special","on":["toku"],"kun":[],"n":10},{"c":"便","g":4,"m":"convenience","on":["ben","bin"],"kun":["tayo(ri)"],"n":9},{"c":"働","g":4,"m":"work","on":["dou"],"kun":["hatara(ku)"],"n":13},{"c":"令","g":4,"m":"orders","on":["rei"],"kun":[],"n":5},{"c":"意","g":3,"m":"idea","on":["i"],"kun":[],"n":13},{"c":"味","g":3,"m":"flavor","on":["mi"],"kun":["aji","aji(wau)"],"n":8},{"c":"勉","g":3,"m":"exertion","on":["ben"],"kun":["tsuto(meru)"],"n":10},{"c":"庭","g":3,"m":"courtyard","on":["tei"],"kun":["niwa"],"n":10},{"c":"息","g":3,"m":"breath","on":["soku"],"kun":["iki"],"n":10},{"c":"旅","g":3,"m":"trip","on":["ryo"],"kun":["tabi"],"n":10},{"c":"根","g":3,"m":"root","on":["kon"],"kun":["ne","ne"],"n":10},{"c":"流","g":3,"m":"current","on":["ryuu","ru"],"kun":["naga(reru)","naga(re)"],"n":10},{"c":"消","g":3,"m":"extinguish","on":["ou"],"kun":["ki(eru)","ke(su)"],"n":10},{"c":"倍","g":3,"m":"double","on":["bai"],"kun":[],"n":10},{"c":"員","g":3,"m":"employee","on":["in"],"kun":[],"n":10},{"c":"島","g":3,"m":"island","on":["tou"],"kun":["shima"],"n":10},{"c":"祭","g":3,"m":"ritual","on":["sai"],"kun":["matsu(ru)","matsu(ri)"],"n":11},{"c":"章","g":3,"m":"badge","on":["ou"],"kun":[],"n":11},{"c":"第","g":3,"m":"no.","on":["dai","tei"],"kun":[],"n":11},{"c":"都","g":3,"m":"metropolis","on":["to","tsu"],"kun":["miyako"],"n":11},{"c":"動","g":3,"m":"move","on":["dou"],"kun":["ugo(ku)","ugo(kasu)"],"n":11},{"c":"商","g":3,"m":"make a deal","on":["ou"],"kun":["akina(u)"],"n":11},{"c":"悪","g":3,"m":"bad","on":["aku","o"],"kun":["waru(i)","waru"],"n":11},{"c":"族","g":3,"m":"tribe","on":["zoku"],"kun":[],"n":11},{"c":"深","g":3,"m":"deep","on":["shin"],"kun":["fuka(i)","buka(i)"],"n":11},{"c":"球","g":3,"m":"ball","on":["kyuu"],"kun":["tama"],"n":11},{"c":"童","g":3,"m":"juvenile","on":["dou"],"kun":["warabe"],"n":12},{"c":"陽","g":3,"m":"sunshine","on":["you"],"kun":["hi"],"n":12},{"c":"階","g":3,"m":"storey","on":["kai"],"kun":["kizahashi"],"n":12},{"c":"寒","g":3,"m":"cold","on":["kan"],"kun":["samu(i)"],"n":12},{"c":"悲","g":3,"m":"grieve","on":["hi"],"kun":["kana(shii)","kana(shimu)"],"n":12},{"c":"暑","g":3,"m":"sultry","on":["o"],"kun":["atsu(i)"],"n":12},{"c":"期","g":3,"m":"period","on":["ki","go"],"kun":[],"n":12},{"c":"植","g":3,"m":"plant","on":["oku"],"kun":["u(eru)","u(waru)"],"n":12},{"c":"歯","g":3,"m":"tooth","on":["shi"],"kun":["yowai","ha"],"n":12},{"c":"温","g":3,"m":"warm","on":["on"],"kun":["atata(ka)","atata(kai)"],"n":12},{"c":"港","g":3,"m":"harbor","on":["kou"],"kun":["minato"],"n":12},{"c":"湯","g":3,"m":"hot water","on":["tou"],"kun":["yu"],"n":12},{"c":"登","g":3,"m":"ascend","on":["tou","to"],"kun":["nobo(ru)","a(garu)"],"n":12},{"c":"着","g":3,"m":"don","on":["aku","aku"],"kun":["ki(ru)","gi"],"n":12},{"c":"短","g":3,"m":"short","on":["tan"],"kun":["mijika(i)"],"n":12},{"c":"野","g":2,"m":"plains","on":["ya","o"],"kun":["no","no"],"n":11},{"c":"泉","g":6,"m":"spring","on":["sen"],"kun":["izumi"],"n":9},{"c":"生","g":1,"m":"life","on":["sei","ou"],"kun":["i(kiru)","i(kasu)"],"n":5},{"c":"亡","g":6,"m":"deceased","on":["bou","mou"],"kun":["na(i)","na(ki)"],"n":3},{"c":"合","g":2,"m":"fit","on":["gou","ga"],"kun":["a(u)","a(u)"],"n":6},{"c":"風","g":2,"m":"wind","on":["fuu","fu"],"kun":["kaze","kaza"],"n":9},{"c":"予","g":3,"m":"beforehand","on":["yo","a"],"kun":["arakaji(me)"],"n":4},{"c":"反","g":3,"m":"anti-","on":["han","hon"],"kun":["so(ru)","so(rasu)"],"n":4},{"c":"新","g":2,"m":"new","on":["shin"],"kun":["atara(shii)","ara(ta)"],"n":13},{"c":"返","g":3,"m":"return","on":["hen"],"kun":["kae(su)","kae(su)"],"n":7},{"c":"問","g":3,"m":"question","on":["mon"],"kun":["to(u)","to(i)"],"n":11},{"c":"宿","g":3,"m":"inn","on":["uku"],"kun":["yado","yado(ru)"],"n":11},{"c":"想","g":3,"m":"concept","on":["sou","so"],"kun":["omo(u)"],"n":13},{"c":"感","g":3,"m":"emotion","on":["kan"],"kun":[],"n":13},{"c":"整","g":3,"m":"organize","on":["sei"],"kun":["totono(eru)","totono(u)"],"n":16},{"c":"暗","g":3,"m":"darkness","on":["an"],"kun":["kura(i)","kura(mu)"],"n":13},{"c":"様","g":3,"m":"esq.","on":["you","ou"],"kun":["sama","san"],"n":14},{"c":"橋","g":3,"m":"bridge","on":["kyou"],"kun":["hashi"],"n":16},{"c":"福","g":3,"m":"blessing","on":["fuku"],"kun":[],"n":13},{"c":"緑","g":3,"m":"green","on":["ryoku","roku"],"kun":["midori"],"n":14},{"c":"練","g":3,"m":"practice","on":["ren"],"kun":["ne(ru)","ne(ri)"],"n":14},{"c":"詩","g":3,"m":"poem","on":["shi"],"kun":["uta"],"n":13},{"c":"銀","g":3,"m":"silver","on":["gin"],"kun":["shirogane"],"n":14},{"c":"題","g":3,"m":"topic","on":["dai"],"kun":[],"n":18},{"c":"館","g":3,"m":"building","on":["kan"],"kun":["yakata","tate"],"n":16},{"c":"駅","g":3,"m":"station","on":["eki"],"kun":[],"n":14},{"c":"億","g":4,"m":"hundred million","on":["oku"],"kun":[],"n":15},{"c":"器","g":4,"m":"utensil","on":["ki"],"kun":["utsuwa"],"n":15},{"c":"士","g":4,"m":"gentleman","on":["shi"],"kun":["samurai"],"n":3},{"c":"料","g":4,"m":"fee","on":["ryou"],"kun":[],"n":10},{"c":"標","g":4,"m":"signpost","on":["hyou"],"kun":["shirube","shirushi"],"n":15},{"c":"殺","g":4,"m":"kill","on":["satsu","sai"],"kun":["koro(su)","goro(shi)"],"n":10},{"c":"然","g":4,"m":"sort of thing","on":["zen","nen"],"kun":["shika","shika(ri)"],"n":12},{"c":"熱","g":4,"m":"heat","on":["netsu"],"kun":["atsu(i)"],"n":15},{"c":"課","g":4,"m":"chapter","on":["ka"],"kun":[],"n":15},{"c":"賞","g":4,"m":"prize","on":["ou"],"kun":["ho(meru)"],"n":15},{"c":"輪","g":4,"m":"wheel","on":["rin"],"kun":["wa"],"n":15},{"c":"選","g":4,"m":"elect","on":["sen"],"kun":["era(bu)"],"n":15},{"c":"鏡","g":4,"m":"mirror","on":["kyou","kei"],"kun":["kagami"],"n":19},{"c":"願","g":4,"m":"petition","on":["gan"],"kun":["nega(u)","negai"],"n":19},{"c":"養","g":4,"m":"foster","on":["you","ryou"],"kun":["yashina(u)"],"n":15},{"c":"像","g":5,"m":"statue","on":["zou"],"kun":[],"n":14},{"c":"情","g":5,"m":"feelings","on":["ou","sei"],"kun":["nasa(ke)"],"n":11},{"c":"謝","g":5,"m":"apologize","on":["a"],"kun":["ayama(ru)"],"n":17},{"c":"映","g":6,"m":"reflect","on":["ei"],"kun":["utsu(ru)","utsu(su)"],"n":9},{"c":"疑","g":6,"m":"doubt","on":["gi"],"kun":["utaga(u)"],"n":14},{"c":"例","g":4,"m":"example","on":["rei"],"kun":["tato(eru)"],"n":8},{"c":"卒","g":4,"m":"graduate","on":["sotsu","utsu"],"kun":["so(suru)","o(eru)"],"n":8},{"c":"協","g":4,"m":"co-","on":["kyou"],"kun":[],"n":8},{"c":"参","g":4,"m":"nonplussed","on":["san","shin"],"kun":["mai(ru)","mai"],"n":8},{"c":"周","g":4,"m":"circumference","on":["uu"],"kun":["mawa(ri)"],"n":8},{"c":"囲","g":4,"m":"surround","on":["i"],"kun":["kako(mu)","kako(u)"],"n":7},{"c":"固","g":4,"m":"harden","on":["ko"],"kun":["kata(meru)","kata(maru)"],"n":8},{"c":"季","g":4,"m":"seasons","on":["ki"],"kun":[],"n":8},{"c":"完","g":4,"m":"perfect","on":["kan"],"kun":[],"n":7},{"c":"希","g":4,"m":"hope","on":["ki","ke"],"kun":["mare"],"n":7},{"c":"念","g":4,"m":"wish","on":["nen"],"kun":[],"n":8},{"c":"折","g":4,"m":"fold","on":["setsu","aku"],"kun":["o(ru)","ori"],"n":7},{"c":"望","g":4,"m":"ambition","on":["bou","mou"],"kun":["nozo(mu)","mochi"],"n":11},{"c":"材","g":4,"m":"lumber","on":["zai"],"kun":[],"n":7},{"c":"束","g":4,"m":"bundle","on":["soku"],"kun":["taba","taba(neru)"],"n":7},{"c":"松","g":4,"m":"pine tree","on":["ou"],"kun":["matsu"],"n":8},{"c":"残","g":4,"m":"remainder","on":["zan","san"],"kun":["noko(ru)","noko(su)"],"n":10},{"c":"求","g":4,"m":"request","on":["kyuu","gu"],"kun":["moto(meru)"],"n":7},{"c":"的","g":4,"m":"bull's eye","on":["teki"],"kun":["mato"],"n":8},{"c":"約","g":4,"m":"promise","on":["yaku"],"kun":["tsuzu(maru)","tsuzu(meru)"],"n":9},{"c":"芸","g":4,"m":"technique","on":["gei","un"],"kun":["u(eru)","nori"],"n":7},{"c":"基","g":5,"m":"fundamentals","on":["ki"],"kun":["moto","motoi"],"n":11},{"c":"性","g":5,"m":"sex","on":["sei","ou"],"kun":["saga"],"n":8},{"c":"技","g":5,"m":"skill","on":["gi"],"kun":["waza"],"n":7},{"c":"格","g":5,"m":"status","on":["kaku","kou"],"kun":[],"n":10},{"c":"能","g":5,"m":"ability","on":["nou"],"kun":["yo(ku)"],"n":10},{"c":"術","g":5,"m":"art","on":["utsu"],"kun":["sube"],"n":11},{"c":"私","g":6,"m":"private","on":["shi"],"kun":["watakushi","watashi"],"n":7},{"c":"骨","g":6,"m":"skeleton","on":["kotsu"],"kun":["hone"],"n":10},{"c":"寺","g":2,"m":"buddhist temple","on":["ji"],"kun":["tera"],"n":6},{"c":"岩","g":2,"m":"boulder","on":["gan"],"kun":["iwa"],"n":8},{"c":"帰","g":2,"m":"homecoming","on":["ki"],"kun":["kae(ru)","kae(su)"],"n":10},{"c":"春","g":2,"m":"springtime","on":["un"],"kun":["haru"],"n":9},{"c":"昼","g":2,"m":"daytime","on":["uu"],"kun":["hiru"],"n":9},{"c":"晴","g":2,"m":"clear up","on":["sei"],"kun":["ha(reru)","ha(re)"],"n":12},{"c":"秋","g":2,"m":"autumn","on":["uu"],"kun":["aki","toki"],"n":9},{"c":"計","g":2,"m":"plot","on":["kei"],"kun":["haka(ru)","haka(rau)"],"n":9},{"c":"列","g":3,"m":"file","on":["retsu","re"],"kun":[],"n":6},{"c":"区","g":3,"m":"ward","on":["ku","ou"],"kun":[],"n":4},{"c":"坂","g":3,"m":"slope","on":["han"],"kun":["saka"],"n":7},{"c":"式","g":3,"m":"style","on":["shiki"],"kun":[],"n":6},{"c":"信","g":4,"m":"faith","on":["shin"],"kun":[],"n":9},{"c":"勇","g":4,"m":"courage","on":["yuu"],"kun":["isa(mu)"],"n":9},{"c":"単","g":4,"m":"simple","on":["tan"],"kun":["hitoe"],"n":9},{"c":"司","g":4,"m":"director","on":["shi"],"kun":["tsukasado(ru)"],"n":5},{"c":"変","g":4,"m":"unusual","on":["hen"],"kun":["ka(waru)","ka(wari)"],"n":9},{"c":"夫","g":4,"m":"husband","on":["fu","fuu"],"kun":["otto","sore"],"n":4},{"c":"建","g":4,"m":"build","on":["ken","kon"],"kun":["ta(teru)","ta(te)"],"n":9},{"c":"昨","g":4,"m":"yesterday","on":["saku"],"kun":[],"n":9},{"c":"毒","g":4,"m":"poison","on":["doku"],"kun":[],"n":8},{"c":"法","g":4,"m":"method","on":["hou","ha"],"kun":["nori"],"n":8},{"c":"泣","g":4,"m":"cry","on":["kyuu"],"kun":["na(ku)"],"n":8},{"c":"浅","g":4,"m":"shallow","on":["sen"],"kun":["asa(i)"],"n":9},{"c":"紀","g":4,"m":"chronicle","on":["ki"],"kun":[],"n":9},{"c":"英","g":4,"m":"england","on":["ei"],"kun":["hanabusa"],"n":8},{"c":"軍","g":4,"m":"army","on":["gun"],"kun":["ikusa"],"n":9},{"c":"飯","g":4,"m":"meal","on":["han"],"kun":["meshi"],"n":12},{"c":"仏","g":5,"m":"buddha","on":["butsu","futsu"],"kun":["hotoke"],"n":4},{"c":"築","g":5,"m":"fabricate","on":["chiku"],"kun":["kizu(ku)"],"n":16},{"c":"晩","g":6,"m":"nightfall","on":["ban"],"kun":[],"n":12},{"c":"園","g":2,"m":"park","on":["en"],"kun":["sono"],"n":13},{"c":"曜","g":2,"m":"weekday","on":["you"],"kun":[],"n":18},{"c":"書","g":2,"m":"write","on":["o"],"kun":["ka(ku)","ga(ki)"],"n":10},{"c":"遠","g":2,"m":"distant","on":["en","on"],"kun":["too(i)"],"n":13},{"c":"門","g":2,"m":"gate","on":["mon"],"kun":["kado","to"],"n":8},{"c":"係","g":3,"m":"person in charge","on":["kei"],"kun":["kaka(ru)","kakari"],"n":9},{"c":"取","g":3,"m":"take","on":["u"],"kun":["to(ru)","to(ri)"],"n":8},{"c":"品","g":3,"m":"goods","on":["hin","hon"],"kun":["shina"],"n":9},{"c":"守","g":3,"m":"guard","on":["u","su"],"kun":["mamo(ru)","mamo(ri)"],"n":6},{"c":"幸","g":3,"m":"happiness","on":["kou"],"kun":["saiwa(i)","sachi"],"n":8},{"c":"急","g":3,"m":"hurry","on":["kyuu"],"kun":["iso(gu)","iso(gi)"],"n":9},{"c":"真","g":3,"m":"true","on":["shin"],"kun":["ma","ma"],"n":10},{"c":"箱","g":3,"m":"box","on":["sou"],"kun":["hako"],"n":15},{"c":"荷","g":3,"m":"baggage","on":["ka"],"kun":["ni"],"n":10},{"c":"面","g":3,"m":"mask","on":["men","ben"],"kun":["omo","omote"],"n":9},{"c":"典","g":4,"m":"code","on":["ten","den"],"kun":[],"n":8},{"c":"喜","g":4,"m":"rejoice","on":["ki"],"kun":["yoroko(bu)","yoroko(basu)"],"n":12},{"c":"府","g":4,"m":"borough","on":["fu"],"kun":[],"n":8},{"c":"治","g":4,"m":"reign","on":["ji","chi"],"kun":["osa(meru)","osa(maru)"],"n":8},{"c":"浴","g":4,"m":"bathe","on":["yoku"],"kun":["a(biru)","a(biseru)"],"n":10},{"c":"笑","g":4,"m":"laugh","on":["ou"],"kun":["wara(u)","e(mu)"],"n":10},{"c":"辞","g":4,"m":"resign","on":["ji"],"kun":["ya(meru)","ina(mu)"],"n":13},{"c":"関","g":4,"m":"connection","on":["kan"],"kun":["seki","zeki"],"n":14},{"c":"保","g":5,"m":"protect","on":["ho","hou"],"kun":["tamo(tsu)"],"n":9},{"c":"弁","g":5,"m":"valve","on":["ben","hen"],"kun":["kanmuri","wakima(eru)"],"n":5},{"c":"政","g":5,"m":"politics","on":["sei","ou"],"kun":["matsurigoto","man"],"n":9},{"c":"留","g":5,"m":"detain","on":["ryuu","ru"],"kun":["to(meru)","to(maru)"],"n":10},{"c":"証","g":5,"m":"evidence","on":["ou"],"kun":["akashi"],"n":12},{"c":"険","g":5,"m":"precipitous","on":["ken"],"kun":["kewa(shii)"],"n":11},{"c":"危","g":6,"m":"dangerous","on":["ki"],"kun":["abu(nai)","aya(ui)"],"n":6},{"c":"存","g":6,"m":"exist","on":["son","zon"],"kun":["nagara(eru)","a(ru)"],"n":6},{"c":"専","g":6,"m":"specialty","on":["sen"],"kun":["moppa(ra)"],"n":9},{"c":"原","g":2,"m":"meadow","on":["gen"],"kun":["hara"],"n":10},{"c":"細","g":2,"m":"dainty","on":["sai"],"kun":["hoso(i)","hoso(ru)"],"n":11},{"c":"薬","g":3,"m":"medicine","on":["yaku"],"kun":["kusuri"],"n":16},{"c":"鼻","g":3,"m":"nose","on":["bi"],"kun":["hana"],"n":14},{"c":"側","g":4,"m":"side","on":["soku"],"kun":["kawa","gawa"],"n":11},{"c":"兵","g":4,"m":"soldier","on":["hei","hyou"],"kun":["tsuwamono"],"n":7},{"c":"堂","g":4,"m":"public chamber","on":["dou"],"kun":[],"n":11},{"c":"塩","g":4,"m":"salt","on":["en"],"kun":["shio"],"n":13},{"c":"席","g":4,"m":"seat","on":["seki"],"kun":["mushiro"],"n":10},{"c":"敗","g":4,"m":"failure","on":["hai"],"kun":["yabu(reru)"],"n":11},{"c":"果","g":4,"m":"fruit","on":["ka"],"kun":["ha(tasu)","hata(su)"],"n":8},{"c":"栄","g":4,"m":"flourish","on":["ei","you"],"kun":["saka(eru)","ha(e)"],"n":9},{"c":"梅","g":4,"m":"plum","on":["bai"],"kun":["ume"],"n":10},{"c":"無","g":4,"m":"nothingness","on":["mu","bu"],"kun":["na(i)"],"n":12},{"c":"結","g":4,"m":"tie","on":["ketsu","kechi"],"kun":["musu(bu)","yu(u)"],"n":12},{"c":"因","g":5,"m":"cause","on":["in"],"kun":["yo(ru)","china(mu)"],"n":6},{"c":"常","g":5,"m":"usual","on":["ou"],"kun":["tsune","toko"],"n":11},{"c":"識","g":5,"m":"discriminating","on":["shiki"],"kun":["shi(ru)","shiru(su)"],"n":19},{"c":"非","g":5,"m":"un-","on":["hi"],"kun":["ara(zu)"],"n":8},{"c":"干","g":6,"m":"dry","on":["kan"],"kun":["ho(su)","ho(shi)"],"n":3},{"c":"官","g":4,"m":"bureaucrat","on":["kan"],"kun":[],"n":8},{"c":"察","g":4,"m":"guess","on":["satsu"],"kun":[],"n":14},{"c":"底","g":4,"m":"bottom","on":["tei"],"kun":["soko"],"n":8},{"c":"愛","g":4,"m":"love","on":["ai"],"kun":["ito(shii)","kana(shii)"],"n":13},{"c":"署","g":6,"m":"signature","on":["o"],"kun":[],"n":13},{"c":"警","g":6,"m":"admonish","on":["kei"],"kun":["imashi(meru)"],"n":19},{"c":"覚","g":4,"m":"memorize","on":["kaku"],"kun":["obo(eru)","sa(masu)"],"n":12},{"c":"説","g":4,"m":"opinion","on":["setsu","zei"],"kun":["to(ku)"],"n":14},{"c":"訓","g":4,"m":"instruction","on":["kun","kin"],"kun":["oshi(eru)","yo(mu)"],"n":10},{"c":"試","g":4,"m":"test","on":["shi"],"kun":["kokoro(miru)","tame(su)"],"n":13},{"c":"弓","g":2,"m":"bow","on":["kyuu"],"kun":["yumi"],"n":3},{"c":"告","g":4,"m":"revelation","on":["koku"],"kun":["tsu(geru)"],"n":7},{"c":"種","g":4,"m":"species","on":["u"],"kun":["tane","gusa"],"n":14},{"c":"達","g":4,"m":"accomplished","on":["tatsu","da"],"kun":["tachi"],"n":12},{"c":"類","g":4,"m":"sort","on":["rui"],"kun":["tagu(i)"],"n":18},{"c":"報","g":5,"m":"report","on":["hou"],"kun":["muku(iru)"],"n":12},{"c":"等","g":3,"m":"etc.","on":["tou"],"kun":["hito(shii)","nado"],"n":12},{"c":"汽","g":2,"m":"vapor","on":["ki"],"kun":[],"n":7},{"c":"借","g":4,"m":"borrow","on":["aku"],"kun":["ka(riru)"],"n":10},{"c":"焼","g":4,"m":"bake","on":["ou"],"kun":["ya(ku)","ya(ki)"],"n":12},{"c":"座","g":6,"m":"squat","on":["za"],"kun":["suwa(ru)"],"n":10},{"c":"忘","g":6,"m":"forget","on":["bou"],"kun":["wasu(reru)"],"n":7},{"c":"洗","g":6,"m":"wash","on":["sen"],"kun":["ara(u)"],"n":9},{"c":"胸","g":6,"m":"bosom","on":["kyou"],"kun":["mune","muna"],"n":10},{"c":"脳","g":6,"m":"brain","on":["nou","dou"],"kun":["nouzuru"],"n":11},{"c":"験","g":4,"m":"verification","on":["ken","gen"],"kun":["akashi","shirushi"],"n":18},{"c":"可","g":5,"m":"can","on":["ka","koku"],"kun":["be(ki)","be(shi)"],"n":5},{"c":"許","g":5,"m":"permit","on":["kyo"],"kun":["yuru(su)","moto"],"n":11},{"c":"枚","g":6,"m":"sheet of...","on":["mai","bai"],"kun":[],"n":8},{"c":"静","g":4,"m":"quiet","on":["sei","ou"],"kun":["shizu","shizu(ka)"],"n":14},{"c":"句","g":5,"m":"phrase","on":["ku"],"kun":[],"n":5},{"c":"禁","g":5,"m":"prohibition","on":["kin"],"kun":[],"n":13},{"c":"加","g":4,"m":"add","on":["ka"],"kun":["kuwa(eru)","kuwa(waru)"],"n":5},{"c":"節","g":4,"m":"node","on":["setsu","sechi"],"kun":["fushi","bushi"],"n":13},{"c":"減","g":5,"m":"dwindle","on":["gen"],"kun":["he(ru)","he(rasu)"],"n":12},{"c":"順","g":4,"m":"obey","on":["un"],"kun":[],"n":12},{"c":"容","g":5,"m":"contain","on":["you"],"kun":["i(reru)"],"n":10},{"c":"布","g":5,"m":"linen","on":["fu"],"kun":["nuno"],"n":5},{"c":"易","g":5,"m":"easy","on":["eki","i"],"kun":["yasa(shii)","yasu(i)"],"n":8},{"c":"財","g":5,"m":"property","on":["zai","sai"],"kun":["takara"],"n":10},{"c":"若","g":6,"m":"young","on":["aku","nyaku"],"kun":["waka(i)","waka"],"n":8},{"c":"詞","g":6,"m":"part of speech","on":["shi"],"kun":["kotoba"],"n":12},{"c":"歴","g":4,"m":"curriculum","on":["reki","rekki"],"kun":[],"n":14},{"c":"舌","g":5,"m":"tongue","on":["zetsu"],"kun":["shita"],"n":6},{"c":"冊","g":6,"m":"tome","on":["satsu","saku"],"kun":["fumi"],"n":5},{"c":"宇","g":6,"m":"eaves","on":["u"],"kun":[],"n":6},{"c":"宙","g":6,"m":"mid-air","on":["uu"],"kun":[],"n":8},{"c":"団","g":5,"m":"group","on":["dan","ton"],"kun":["katamari","maru(i)"],"n":6},{"c":"暴","g":5,"m":"outburst","on":["bou","baku"],"kun":["aba(ku)","aba(reru)"],"n":15},{"c":"混","g":5,"m":"mix","on":["kon"],"kun":["ma(jiru)","ma(jiri)"],"n":11},{"c":"乱","g":6,"m":"riot","on":["ran","ron"],"kun":["mida(reru)","mida(ru)"],"n":7},{"c":"徒","g":4,"m":"on foot","on":["to"],"kun":["itazura","ada"],"n":10},{"c":"得","g":4,"m":"gain","on":["toku"],"kun":["e(ru)","u(ru)"],"n":11},{"c":"改","g":4,"m":"reformation","on":["kai"],"kun":["arata(meru)","arata(maru)"],"n":7},{"c":"続","g":4,"m":"continue","on":["zoku","oku"],"kun":["tsuzu(ku)","tsuzu(keru)"],"n":13},{"c":"連","g":4,"m":"take along","on":["ren"],"kun":["tsura(naru)","tsura(neru)"],"n":10},{"c":"善","g":6,"m":"virtuous","on":["zen"],"kun":["yo(i)","i(i)"],"n":12},{"c":"困","g":6,"m":"quandary","on":["kon"],"kun":["koma(ru)"],"n":7},{"c":"比","g":5,"m":"compare","on":["hi"],"kun":["kura(beru)"],"n":4},{"c":"災","g":5,"m":"disaster","on":["sai"],"kun":["wazawa(i)"],"n":7},{"c":"機","g":4,"m":"loom","on":["ki"],"kun":["hata"],"n":16},{"c":"率","g":5,"m":"ratio","on":["sotsu","ritsu"],"kun":["hiki(iru)"],"n":11},{"c":"飛","g":4,"m":"fly","on":["hi"],"kun":["to(bu)","to(basu)"],"n":9},{"c":"害","g":4,"m":"harm","on":["gai"],"kun":[],"n":10},{"c":"余","g":5,"m":"too much","on":["yo"],"kun":["ama(ru)","ama(ri)"],"n":7},{"c":"難","g":6,"m":"difficult","on":["nan"],"kun":["kata(i)","gata(i)"],"n":18},{"c":"械","g":4,"m":"contraption","on":["kai"],"kun":["kase"],"n":11},{"c":"確","g":5,"m":"assurance","on":["kaku","kou"],"kun":["tashi(ka)","tashi(kameru)"],"n":15},{"c":"個","g":5,"m":"individual","on":["ko","ka"],"kun":[],"n":10},{"c":"圧","g":5,"m":"pressure","on":["atsu","en"],"kun":["o(su)","he(su)"],"n":5},{"c":"在","g":5,"m":"exist","on":["zai"],"kun":["a(ru)"],"n":6},{"c":"夢","g":5,"m":"dream","on":["mu","bou"],"kun":["yume","yume(miru)"],"n":13},{"c":"産","g":4,"m":"products","on":["san"],"kun":["u(mu)","u(mareru)"],"n":11},{"c":"厚","g":5,"m":"thick","on":["kou"],"kun":["atsu(i)","aka"],"n":9},{"c":"妻","g":5,"m":"wife","on":["sai"],"kun":["tsuma"],"n":8},{"c":"議","g":4,"m":"deliberation","on":["gi"],"kun":[],"n":20},{"c":"犯","g":5,"m":"crime","on":["han","bon"],"kun":["oka(su)"],"n":5},{"c":"罪","g":5,"m":"guilt","on":["zai"],"kun":["tsumi"],"n":13},{"c":"防","g":5,"m":"ward off","on":["bou"],"kun":["fuse(gu)"],"n":7},{"c":"穴","g":6,"m":"hole","on":["ketsu"],"kun":["ana"],"n":5},{"c":"論","g":6,"m":"argument","on":["ron"],"kun":[],"n":15},{"c":"経","g":5,"m":"sutra","on":["kei","kyou"],"kun":["he(ru)","ta(tsu)"],"n":11},{"c":"笛","g":3,"m":"flute","on":["teki"],"kun":["fue"],"n":11},{"c":"史","g":4,"m":"history","on":["shi"],"kun":[],"n":5},{"c":"敵","g":5,"m":"enemy","on":["teki"],"kun":["kataki","ada"],"n":15},{"c":"済","g":6,"m":"settle (debt, etc.)","on":["sai","sei"],"kun":["su(mu)","zu(mi)"],"n":11},{"c":"委","g":3,"m":"committee","on":["i"],"kun":["yuda(neru)"],"n":8},{"c":"挙","g":4,"m":"raise","on":["kyo"],"kun":["a(geru)","a(garu)"],"n":10},{"c":"判","g":5,"m":"judgement","on":["han","ban"],"kun":["waka(ru)"],"n":7},{"c":"制","g":5,"m":"system","on":["sei"],"kun":[],"n":8},{"c":"務","g":5,"m":"task","on":["mu"],"kun":["tsuto(meru)"],"n":11},{"c":"査","g":5,"m":"investigate","on":["sa"],"kun":[],"n":9},{"c":"総","g":5,"m":"general","on":["sou"],"kun":["su(bete)","sube(te)"],"n":14},{"c":"設","g":5,"m":"establishment","on":["setsu"],"kun":["mou(keru)"],"n":11},{"c":"資","g":5,"m":"assets","on":["shi"],"kun":[],"n":13},{"c":"権","g":6,"m":"authority","on":["ken","gon"],"kun":["omori","kari"],"n":15},{"c":"件","g":5,"m":"affair","on":["ken"],"kun":["kudan"],"n":6},{"c":"派","g":6,"m":"faction","on":["ha"],"kun":[],"n":9},{"c":"素","g":5,"m":"elementary","on":["so","su"],"kun":["moto"],"n":10},{"c":"断","g":5,"m":"severance","on":["dan"],"kun":["ta(tsu)","kotowa(ru)"],"n":11},{"c":"評","g":5,"m":"evaluate","on":["hyou"],"kun":[],"n":12},{"c":"批","g":6,"m":"criticism","on":["hi"],"kun":[],"n":7},{"c":"任","g":5,"m":"responsibility","on":["nin"],"kun":["maka(seru)","maka(su)"],"n":6},{"c":"検","g":5,"m":"examination","on":["ken"],"kun":["shira(beru)"],"n":12},{"c":"条","g":5,"m":"article","on":["ou","ou"],"kun":["eda","suji"],"n":7},{"c":"責","g":5,"m":"blame","on":["seki"],"kun":["se(meru)"],"n":11},{"c":"省","g":4,"m":"focus","on":["sei","ou"],"kun":["kaeri(miru)","habu(ku)"],"n":9},{"c":"増","g":5,"m":"increase","on":["zou"],"kun":["ma(su)","ma(shi)"],"n":14},{"c":"税","g":5,"m":"tax","on":["zei"],"kun":[],"n":12},{"c":"解","g":5,"m":"unravel","on":["kai","ge"],"kun":["to(ku)","to(kasu)"],"n":13},{"c":"際","g":5,"m":"occasion","on":["sai"],"kun":["kiwa","giwa"],"n":14},{"c":"認","g":6,"m":"acknowledge","on":["nin"],"kun":["mito(meru)","shitata(meru)"],"n":14},{"c":"義","g":5,"m":"righteousness","on":["gi"],"kun":[],"n":13},{"c":"誕","g":6,"m":"nativity","on":["tan"],"kun":[],"n":15},{"c":"過","g":5,"m":"overdo","on":["ka"],"kun":["su(giru)","su(giru)"],"n":12},{"c":"宮","g":3,"m":"shinto shrine","on":["kyuu","guu"],"kun":["miya"],"n":10},{"c":"各","g":4,"m":"each","on":["kaku"],"kun":["onoono"],"n":6},{"c":"案","g":4,"m":"plan","on":["an"],"kun":["tsukue"],"n":10},{"c":"置","g":4,"m":"placement","on":["chi"],"kun":["o(ku)","o(ki)"],"n":13},{"c":"費","g":4,"m":"expense","on":["hi"],"kun":["tsui(yasu)","tsui(eru)"],"n":12},{"c":"価","g":5,"m":"value","on":["ka","ke"],"kun":["atai"],"n":8},{"c":"勢","g":5,"m":"forces","on":["sei","zei"],"kun":["ikio(i)","hazumi"],"n":13},{"c":"営","g":5,"m":"occupation","on":["ei"],"kun":["itona(mu)","itona(mi)"],"n":12},{"c":"示","g":5,"m":"show","on":["ji","shi"],"kun":["shime(su)"],"n":5},{"c":"統","g":5,"m":"overall","on":["tou"],"kun":["su(beru)","hobi(ru)"],"n":12},{"c":"領","g":5,"m":"jurisdiction","on":["ryou"],"kun":["eri"],"n":14},{"c":"策","g":6,"m":"scheme","on":["saku"],"kun":[],"n":12},{"c":"副","g":4,"m":"vice-","on":["fuku"],"kun":[],"n":11},{"c":"観","g":4,"m":"outlook","on":["kan"],"kun":["mi(ru)","shime(su)"],"n":18},{"c":"値","g":6,"m":"price","on":["chi"],"kun":["ne","atai"],"n":10},{"c":"吸","g":6,"m":"suck","on":["kyuu"],"kun":["su(u)"],"n":6},{"c":"域","g":6,"m":"range","on":["iki"],"kun":[],"n":11},{"c":"姿","g":6,"m":"figure","on":["shi"],"kun":["sugata"],"n":9},{"c":"応","g":5,"m":"apply","on":["ou","you"],"kun":["ata(ru)","masani"],"n":7},{"c":"提","g":5,"m":"propose","on":["tei","ou"],"kun":["sa(geru)"],"n":12},{"c":"状","g":5,"m":"status quo","on":["ou"],"kun":[],"n":7},{"c":"態","g":5,"m":"attitude","on":["tai"],"kun":["waza(to)"],"n":14},{"c":"賀","g":5,"m":"congratulations","on":["ga"],"kun":[],"n":12},{"c":"収","g":6,"m":"income","on":["uu"],"kun":["osa(meru)","osa(maru)"],"n":4},{"c":"停","g":4,"m":"halt","on":["tei"],"kun":["to(meru)","to(maru)"],"n":11},{"c":"革","g":6,"m":"leather","on":["kaku"],"kun":["kawa"],"n":9},{"c":"職","g":5,"m":"post","on":["oku","soku"],"kun":[],"n":18},{"c":"規","g":5,"m":"standard","on":["ki"],"kun":[],"n":11},{"c":"護","g":5,"m":"safeguard","on":["go"],"kun":["mamo(ru)"],"n":20},{"c":"割","g":6,"m":"proportion","on":["katsu"],"kun":["wa(ru)","wari"],"n":12},{"c":"裁","g":6,"m":"tailor","on":["sai"],"kun":["ta(tsu)","saba(ku)"],"n":12},{"c":"演","g":5,"m":"performance","on":["en"],"kun":[],"n":14},{"c":"律","g":6,"m":"rhythm","on":["ritsu","richi"],"kun":[],"n":9},{"c":"師","g":5,"m":"expert","on":["shi"],"kun":["ikusa"],"n":10},{"c":"看","g":6,"m":"watch over","on":["kan"],"kun":["mi(ru)"],"n":9},{"c":"準","g":5,"m":"semi-","on":["un"],"kun":["un(jiru)","un(zuru)"],"n":13},{"c":"則","g":5,"m":"rule","on":["soku"],"kun":["notto(ru)"],"n":9},{"c":"備","g":5,"m":"equip","on":["bi"],"kun":["sona(eru)","sona(waru)"],"n":12},{"c":"導","g":5,"m":"guidance","on":["dou"],"kun":["michibi(ku)"],"n":15},{"c":"幹","g":5,"m":"tree trunk","on":["kan"],"kun":["miki"],"n":13},{"c":"張","g":5,"m":"lengthen","on":["ou"],"kun":["ha(ru)","ha(ri)"],"n":11},{"c":"優","g":6,"m":"tenderness","on":["yuu","u"],"kun":["yasa(shii)","sugu(reru)"],"n":17},{"c":"宅","g":6,"m":"home","on":["taku"],"kun":[],"n":6},{"c":"現","g":5,"m":"present","on":["gen"],"kun":["arawa(reru)","arawa(su)"],"n":11},{"c":"乳","g":6,"m":"milk","on":["nyuu"],"kun":["chichi","chi"],"n":8},{"c":"呼","g":6,"m":"call","on":["ko"],"kun":["yo(bu)"],"n":8},{"c":"城","g":6,"m":"castle","on":["ou","sei"],"kun":["shiro"],"n":9},{"c":"俳","g":6,"m":"haiku","on":["hai"],"kun":[],"n":10},{"c":"担","g":6,"m":"shouldering","on":["tan"],"kun":["katsu(gu)","nina(u)"],"n":8},{"c":"額","g":5,"m":"forehead","on":["gaku"],"kun":["hitai"],"n":18},{"c":"製","g":5,"m":"made in...","on":["sei"],"kun":[],"n":14},{"c":"輸","g":5,"m":"transport","on":["yu","u"],"kun":[],"n":16},{"c":"燃","g":5,"m":"burn","on":["nen"],"kun":["mo(eru)","mo(yasu)"],"n":16},{"c":"祝","g":4,"m":"celebrate","on":["uku","uu"],"kun":["iwa(u)"],"n":9},{"c":"届","g":6,"m":"deliver","on":["kai"],"kun":["todo(keru)","todo(ke)"],"n":8},{"c":"層","g":6,"m":"stratum","on":["sou"],"kun":[],"n":14},{"c":"型","g":4,"m":"mould","on":["kei"],"kun":["kata","gata"],"n":9},{"c":"庁","g":6,"m":"government office","on":["ou","tei"],"kun":["yakuo"],"n":5},{"c":"視","g":6,"m":"inspection","on":["shi"],"kun":["mi(ru)"],"n":11},{"c":"差","g":4,"m":"distinction","on":["sa"],"kun":["sa(su)","sa(shi)"],"n":10},{"c":"管","g":4,"m":"pipe","on":["kan"],"kun":["kuda"],"n":14},{"c":"象","g":4,"m":"elephant","on":["ou","zou"],"kun":["katado(ru)"],"n":12},{"c":"量","g":4,"m":"quantity","on":["ryou"],"kun":["haka(ru)"],"n":12},{"c":"境","g":5,"m":"boundary","on":["kyou","kei"],"kun":["sakai"],"n":14},{"c":"武","g":5,"m":"warrior","on":["bu","mu"],"kun":["take","take(shi)"],"n":8},{"c":"質","g":5,"m":"substance","on":["shitsu","shichi"],"kun":["tachi","tada(su)"],"n":15},{"c":"述","g":5,"m":"mention","on":["utsu"],"kun":["no(beru)"],"n":8},{"c":"供","g":6,"m":"submit","on":["kyou","ku"],"kun":["sona(eru)","tomo"],"n":8},{"c":"展","g":6,"m":"unfold","on":["ten"],"kun":[],"n":10},{"c":"株","g":6,"m":"stocks","on":["u"],"kun":["kabu"],"n":10},{"c":"限","g":5,"m":"limit","on":["gen"],"kun":["kagi(ru)","kagi(ri)"],"n":9},{"c":"票","g":4,"m":"ballot","on":["hyou"],"kun":[],"n":11},{"c":"景","g":4,"m":"scenery","on":["kei"],"kun":[],"n":12},{"c":"補","g":6,"m":"supplement","on":["ho"],"kun":["ogina(u)"],"n":12},{"c":"候","g":4,"m":"climate","on":["kou"],"kun":["sourou"],"n":10},{"c":"構","g":5,"m":"posture","on":["kou"],"kun":["kama(eru)","kama(u)"],"n":14},{"c":"模","g":6,"m":"imitation","on":["mo","bo"],"kun":[],"n":14},{"c":"効","g":5,"m":"merit","on":["kou"],"kun":["ki(ku)","kikime"],"n":8},{"c":"属","g":5,"m":"belong","on":["zoku","oku"],"kun":["sakan","tsuku"],"n":12},{"c":"慣","g":5,"m":"accustomed","on":["kan"],"kun":["na(reru)","na(rasu)"],"n":14},{"c":"豊","g":5,"m":"bountiful","on":["hou","bu"],"kun":["yuta(ka)","toyo"],"n":13},{"c":"満","g":4,"m":"full","on":["man","ban"],"kun":["mi(chiru)","mi(tsu)"],"n":12},{"c":"肥","g":5,"m":"fertilizer","on":["hi"],"kun":["ko(eru)","koe"],"n":8},{"c":"巻","g":6,"m":"scroll","on":["kan","ken"],"kun":["ma(ku)","maki"],"n":9},{"c":"居","g":5,"m":"reside","on":["kyo","ko"],"kun":["i(ru)","i"],"n":8},{"c":"造","g":5,"m":"create","on":["zou"],"kun":["tsuku(ru)","tsuku(ri)"],"n":10},{"c":"授","g":5,"m":"impart","on":["u"],"kun":["sazu(keru)","sazu(karu)"],"n":11},{"c":"印","g":4,"m":"stamp","on":["in"],"kun":["shirushi","jirushi"],"n":6},{"c":"創","g":6,"m":"genesis","on":["sou","ou"],"kun":["tsuku(ru)","haji(meru)"],"n":12},{"c":"復","g":5,"m":"restore","on":["fuku"],"kun":["mata"],"n":12},{"c":"往","g":5,"m":"journey","on":["ou"],"kun":["i(ku)","inishie"],"n":8},{"c":"筆","g":3,"m":"writing brush","on":["hitsu"],"kun":["fude"],"n":12},{"c":"貯","g":4,"m":"savings","on":["o"],"kun":["ta(meru)","takuwa(eru)"],"n":12},{"c":"故","g":5,"m":"happenstance","on":["ko"],"kun":["yue","furu(i)"],"n":9},{"c":"障","g":6,"m":"hinder","on":["ou"],"kun":["sawa(ru)"],"n":14},{"c":"従","g":6,"m":"accompany","on":["uu","ou"],"kun":["shitaga(u)","shitaga(eru)"],"n":10},{"c":"我","g":6,"m":"ego","on":["ga"],"kun":["ware","wa"],"n":7},{"c":"激","g":6,"m":"violent","on":["geki"],"kun":["hage(shii)"],"n":16},{"c":"討","g":6,"m":"chastise","on":["tou"],"kun":["u(tsu)"],"n":10},{"c":"郵","g":6,"m":"mail","on":["yuu"],"kun":[],"n":11},{"c":"針","g":6,"m":"needle","on":["shin"],"kun":["hari"],"n":10},{"c":"河","g":5,"m":"river","on":["ka"],"kun":["kawa"],"n":8},{"c":"再","g":5,"m":"again","on":["sai","sa"],"kun":["futata(bi)"],"n":6},{"c":"接","g":5,"m":"touch","on":["setsu","ou"],"kun":["tsu(gu)"],"n":11},{"c":"独","g":5,"m":"single","on":["doku","toku"],"kun":["hito(ri)"],"n":9},{"c":"招","g":5,"m":"beckon","on":["ou"],"kun":["mane(ku)"],"n":8},{"c":"段","g":6,"m":"grade","on":["dan","tan"],"kun":[],"n":9},{"c":"胃","g":4,"m":"stomach","on":["i"],"kun":[],"n":9},{"c":"腹","g":6,"m":"abdomen","on":["fuku"],"kun":["hara"],"n":13},{"c":"痛","g":6,"m":"pain","on":["tsuu"],"kun":["ita(i)","ita(mu)"],"n":12},{"c":"退","g":5,"m":"retreat","on":["tai"],"kun":["shirizo(ku)","shirizo(keru)"],"n":9},{"c":"織","g":5,"m":"weave","on":["oku","shiki"],"kun":["o(ru)","o(ri)"],"n":18},{"c":"貸","g":5,"m":"lend","on":["tai"],"kun":["ka(su)","ka(shi)"],"n":12},{"c":"迷","g":5,"m":"astray","on":["mei"],"kun":["mayo(u)"],"n":9},{"c":"就","g":6,"m":"concerning","on":["uu","u"],"kun":["tsu(ku)","tsu(keru)"],"n":12},{"c":"訪","g":6,"m":"call on","on":["hou"],"kun":["otozu(reru)","tazu(neru)"],"n":11},{"c":"極","g":4,"m":"poles","on":["kyoku","goku"],"kun":["kiwa(meru)","kiwa(maru)"],"n":12},{"c":"健","g":4,"m":"healthy","on":["ken"],"kun":["suko(yaka)"],"n":11},{"c":"康","g":4,"m":"ease","on":["kou"],"kun":[],"n":11},{"c":"給","g":4,"m":"salary","on":["kyuu"],"kun":["tama(u)","tamo(u)"],"n":12},{"c":"逆","g":5,"m":"inverted","on":["gyaku","geki"],"kun":["saka","saka(sa)"],"n":9},{"c":"庫","g":3,"m":"warehouse","on":["ko","ku"],"kun":["kura"],"n":10},{"c":"児","g":4,"m":"newborn babe","on":["ji","ni"],"kun":["ko","ko"],"n":7},{"c":"冷","g":4,"m":"cool","on":["rei"],"kun":["tsume(tai)","hi(eru)"],"n":7},{"c":"幼","g":6,"m":"infancy","on":["you"],"kun":["osana(i)"],"n":5},{"c":"処","g":6,"m":"dispose","on":["o"],"kun":["tokoro","ko"],"n":5},{"c":"博","g":4,"m":"dr.","on":["haku","baku"],"kun":[],"n":12},{"c":"清","g":4,"m":"pure","on":["sei","ou"],"kun":["kiyo(i)","kiyo(maru)"],"n":11},{"c":"潔","g":5,"m":"undefiled","on":["ketsu"],"kun":["isagiyo(i)"],"n":15},{"c":"録","g":4,"m":"record","on":["roku"],"kun":["shiru(su)","to(ru)"],"n":16},{"c":"隊","g":4,"m":"regiment","on":["tai"],"kun":[],"n":12},{"c":"修","g":5,"m":"discipline","on":["uu","u"],"kun":["osa(meru)","osa(maru)"],"n":10},{"c":"券","g":5,"m":"ticket","on":["ken"],"kun":[],"n":8},{"c":"婦","g":5,"m":"lady","on":["fu"],"kun":["yome"],"n":11},{"c":"益","g":5,"m":"benefit","on":["eki","yaku"],"kun":["ma(su)"],"n":10},{"c":"移","g":5,"m":"shift","on":["i"],"kun":["utsu(ru)","utsu(su)"],"n":11},{"c":"程","g":5,"m":"extent","on":["tei"],"kun":["hodo","hodo"],"n":12},{"c":"精","g":5,"m":"refined","on":["sei","ou"],"kun":["shira(geru)","kuwa(shii)"],"n":14},{"c":"絶","g":5,"m":"discontinue","on":["zetsu"],"kun":["ta(eru)","ta(yasu)"],"n":12},{"c":"並","g":6,"m":"row","on":["hei","hou"],"kun":["na(mi)","nami"],"n":8},{"c":"憲","g":6,"m":"constitution","on":["ken"],"kun":[],"n":16},{"c":"衆","g":6,"m":"masses","on":["uu","u"],"kun":["oo(i)"],"n":12},{"c":"閣","g":6,"m":"tower","on":["kaku"],"kun":[],"n":14},{"c":"積","g":4,"m":"volume","on":["seki"],"kun":["tsu(mu)","zu(mi)"],"n":16},{"c":"臣","g":4,"m":"retainer","on":["shin","jin"],"kun":[],"n":7},{"c":"略","g":5,"m":"abbreviation","on":["ryaku"],"kun":["hobo","habu(ku)"],"n":11},{"c":"航","g":4,"m":"navigate","on":["kou"],"kun":[],"n":10},{"c":"寄","g":5,"m":"draw near","on":["ki"],"kun":["yo(ru)","yo(ri)"],"n":11},{"c":"板","g":3,"m":"plank","on":["han","ban"],"kun":["ita"],"n":8},{"c":"街","g":4,"m":"boulevard","on":["gai","kai"],"kun":["machi"],"n":12},{"c":"宗","g":6,"m":"religion","on":["uu","sou"],"kun":["mune"],"n":8},{"c":"系","g":6,"m":"lineage","on":["kei"],"kun":[],"n":7},{"c":"遊","g":3,"m":"play","on":["yuu","yu"],"kun":["aso(bu)","aso(basu)"],"n":12},{"c":"旗","g":4,"m":"national flag","on":["ki"],"kun":["hata"],"n":14},{"c":"照","g":4,"m":"illuminate","on":["ou"],"kun":["te(ru)","te(rasu)"],"n":13},{"c":"快","g":5,"m":"cheerful","on":["kai"],"kun":["kokoroyo(i)"],"n":7},{"c":"版","g":5,"m":"printing block","on":["han"],"kun":[],"n":8},{"c":"貧","g":5,"m":"poverty","on":["hin","bin"],"kun":["mazu(shii)"],"n":11},{"c":"適","g":5,"m":"suitable","on":["teki"],"kun":["kana(u)"],"n":14},{"c":"預","g":5,"m":"deposit","on":["yo"],"kun":["azu(keru)","azu(karu)"],"n":13},{"c":"延","g":6,"m":"prolong","on":["en"],"kun":["no(biru)","no(beru)"],"n":8},{"c":"翌","g":6,"m":"the following","on":["yoku"],"kun":[],"n":11},{"c":"覧","g":6,"m":"perusal","on":["ran"],"kun":["mi(ru)"],"n":17},{"c":"背","g":6,"m":"stature","on":["hai"],"kun":["se","sei"],"n":9},{"c":"編","g":5,"m":"compilation","on":["hen"],"kun":["a(mu)","a(mi)"],"n":15},{"c":"除","g":6,"m":"exclude","on":["o","ji"],"kun":["nozo(ku)","yo(ke)"],"n":10},{"c":"棒","g":6,"m":"rod","on":["bou"],"kun":[],"n":12},{"c":"倉","g":4,"m":"godown","on":["sou"],"kun":["kura"],"n":10},{"c":"孫","g":4,"m":"grandchild","on":["son"],"kun":["mago"],"n":10},{"c":"巣","g":4,"m":"nest","on":["sou"],"kun":["su","su(kuu)"],"n":11},{"c":"帯","g":4,"m":"sash","on":["tai"],"kun":["o(biru)","obi"],"n":10},{"c":"径","g":4,"m":"diameter","on":["kei"],"kun":["michi","komichi"],"n":8},{"c":"救","g":4,"m":"salvation","on":["kyuu"],"kun":["suku(u)"],"n":11},{"c":"散","g":4,"m":"scatter","on":["san"],"kun":["chi(ru)","chi(rasu)"],"n":12},{"c":"粉","g":4,"m":"flour","on":["fun"],"kun":["ko"],"n":10},{"c":"脈","g":4,"m":"vein","on":["myaku"],"kun":["suji"],"n":10},{"c":"菜","g":4,"m":"vegetable","on":["sai"],"kun":["na"],"n":11},{"c":"貨","g":4,"m":"freight","on":["ka"],"kun":["takara"],"n":11},{"c":"陸","g":4,"m":"land","on":["riku","roku"],"kun":["oka"],"n":11},{"c":"似","g":5,"m":"becoming","on":["ji"],"kun":["ni(ru)","hi(ru)"],"n":7},{"c":"均","g":5,"m":"level","on":["kin"],"kun":["nara(su)"],"n":7},{"c":"墓","g":5,"m":"grave","on":["bo"],"kun":["haka"],"n":13},{"c":"富","g":5,"m":"wealth","on":["fu","fuu"],"kun":["to(mu)","tomi"],"n":12},{"c":"徳","g":5,"m":"benevolence","on":["toku"],"kun":[],"n":14},{"c":"探","g":6,"m":"grope","on":["tan"],"kun":["sagu(ru)","saga(su)"],"n":11},{"c":"序","g":5,"m":"preface","on":["o"],"kun":["tsui(de)","tsuide"],"n":7},{"c":"志","g":5,"m":"intention","on":["shi"],"kun":["kokoroza(su)"],"n":7},{"c":"恩","g":5,"m":"grace","on":["on"],"kun":[],"n":10},{"c":"採","g":5,"m":"pick","on":["sai"],"kun":["to(ru)"],"n":11},{"c":"桜","g":5,"m":"cherry","on":["ou","you"],"kun":["sakura"],"n":10},{"c":"永","g":5,"m":"eternity","on":["ei"],"kun":["naga(i)"],"n":5},{"c":"液","g":5,"m":"fluid","on":["eki"],"kun":[],"n":11},{"c":"眼","g":5,"m":"eyeball","on":["gan","gen"],"kun":["manako","me"],"n":11},{"c":"祖","g":5,"m":"ancestor","on":["so"],"kun":[],"n":9},{"c":"績","g":5,"m":"exploits","on":["seki"],"kun":[],"n":17},{"c":"興","g":5,"m":"entertain","on":["kou","kyou"],"kun":["oko(ru)","oko(su)"],"n":16},{"c":"衛","g":5,"m":"defense","on":["ei","e"],"kun":[],"n":16},{"c":"複","g":5,"m":"duplicate","on":["fuku"],"kun":[],"n":14},{"c":"雑","g":5,"m":"miscellaneous","on":["zatsu","zou"],"kun":["maji(eru)","maji(ru)"],"n":14},{"c":"賛","g":5,"m":"approve","on":["san"],"kun":["tasu(keru)","tata(eru)"],"n":15},{"c":"酸","g":5,"m":"acid","on":["san"],"kun":["su(i)"],"n":14},{"c":"銭","g":5,"m":"coin","on":["sen","zen"],"kun":["zeni","suki"],"n":14},{"c":"飼","g":5,"m":"domesticate","on":["shi"],"kun":["ka(u)"],"n":13},{"c":"傷","g":6,"m":"wound","on":["ou"],"kun":["kizu","ita(mu)"],"n":13},{"c":"党","g":6,"m":"party","on":["tou"],"kun":["nakama","mura"],"n":10},{"c":"卵","g":6,"m":"egg","on":["ran"],"kun":["tamago"],"n":7},{"c":"厳","g":6,"m":"stern","on":["gen","gon"],"kun":["ogoso(ka)","kibi(shii)"],"n":17},{"c":"捨","g":6,"m":"discard","on":["a"],"kun":["su(teru)"],"n":11},{"c":"密","g":6,"m":"secrecy","on":["mitsu"],"kun":["hiso(ka)"],"n":11},{"c":"欲","g":6,"m":"longing","on":["yoku"],"kun":["ho(suru)","ho(shii)"],"n":11},{"c":"暖","g":6,"m":"warmth","on":["dan","non"],"kun":["atata(ka)","atata(kai)"],"n":13},{"c":"机","g":6,"m":"desk","on":["ki"],"kun":["tsukue"],"n":6},{"c":"秘","g":6,"m":"secret","on":["hi"],"kun":["hi(meru)","hiso(ka)"],"n":10},{"c":"訳","g":6,"m":"translate","on":["yaku"],"kun":["wake"],"n":11},{"c":"染","g":6,"m":"dye","on":["sen"],"kun":["so(meru)","zo(me)"],"n":9},{"c":"簡","g":6,"m":"simplicity","on":["kan","ken"],"kun":["era(bu)","fuda"],"n":18},{"c":"閉","g":6,"m":"closed","on":["hei"],"kun":["to(jiru)","to(zasu)"],"n":11},{"c":"誌","g":6,"m":"document","on":["shi"],"kun":[],"n":14},{"c":"窓","g":6,"m":"window","on":["sou","su"],"kun":["mado","tenmado"],"n":11},{"c":"否","g":6,"m":"negate","on":["hi"],"kun":["ina","iya"],"n":7},{"c":"筋","g":6,"m":"muscle","on":["kin"],"kun":["suji"],"n":12},{"c":"垂","g":6,"m":"droop","on":["sui"],"kun":["ta(reru)","ta(rasu)"],"n":8},{"c":"宝","g":6,"m":"treasure","on":["hou"],"kun":["takara"],"n":8},{"c":"宣","g":6,"m":"proclaim","on":["sen"],"kun":["notama(u)"],"n":9},{"c":"尊","g":6,"m":"revered","on":["son"],"kun":["tatto(i)","touto(i)"],"n":12},{"c":"忠","g":6,"m":"loyalty","on":["uu"],"kun":[],"n":8},{"c":"拡","g":6,"m":"broaden","on":["kaku","kou"],"kun":["hiro(garu)","hiro(geru)"],"n":8},{"c":"操","g":6,"m":"maneuver","on":["sou","san"],"kun":["misao","ayatsu(ru)"],"n":16},{"c":"敬","g":6,"m":"awe","on":["kei","kyou"],"kun":["uyama(u)"],"n":12},{"c":"暮","g":6,"m":"evening","on":["bo"],"kun":["ku(reru)","ku(rasu)"],"n":14},{"c":"灰","g":6,"m":"ashes","on":["kai"],"kun":["hai"],"n":6},{"c":"熟","g":6,"m":"mellow","on":["uku"],"kun":["u(reru)"],"n":15},{"c":"異","g":6,"m":"uncommon","on":["i"],"kun":["koto","koto(naru)"],"n":11},{"c":"皇","g":6,"m":"emperor","on":["kou","ou"],"kun":[],"n":9},{"c":"盛","g":6,"m":"boom","on":["sei","ou"],"kun":["mo(ru)","saka(ru)"],"n":11},{"c":"砂","g":6,"m":"sand","on":["sa","a"],"kun":["suna"],"n":9},{"c":"糖","g":6,"m":"sugar","on":["tou"],"kun":[],"n":16},{"c":"納","g":6,"m":"settlement","on":["nou","na"],"kun":["osa(meru)","osa(meru)"],"n":10},{"c":"肺","g":6,"m":"lungs","on":["hai"],"kun":[],"n":9},{"c":"著","g":6,"m":"renowned","on":["o","aku"],"kun":["arawa(su)","ichijiru(shii)"],"n":11},{"c":"蒸","g":6,"m":"steam","on":["ou","sei"],"kun":["mu(su)","mu(reru)"],"n":13},{"c":"蔵","g":6,"m":"storehouse","on":["zou","sou"],"kun":["kura","osa(meru)"],"n":15},{"c":"装","g":6,"m":"attire","on":["sou","ou"],"kun":["yosoo(u)","yosoo(i)"],"n":12},{"c":"裏","g":6,"m":"back","on":["ri"],"kun":["ura"],"n":13},{"c":"諸","g":6,"m":"various","on":["o"],"kun":["moro"],"n":15},{"c":"賃","g":6,"m":"fare","on":["chin"],"kun":[],"n":13},{"c":"誤","g":6,"m":"mistake","on":["go"],"kun":["ayama(ru)","ayama(ru)"],"n":14},{"c":"臓","g":6,"m":"entrails","on":["zou"],"kun":["harawata"],"n":19},{"c":"貴","g":6,"m":"precious","on":["ki"],"kun":["tatto(i)","touto(i)"],"n":12},{"c":"降","g":6,"m":"descend","on":["kou","go"],"kun":["o(riru)","o(rosu)"],"n":10},{"c":"縮","g":6,"m":"shrink","on":["uku"],"kun":["chiji(mu)","chiji(maru)"],"n":17},{"c":"純","g":6,"m":"genuine","on":["un"],"kun":[],"n":10},{"c":"縦","g":6,"m":"vertical","on":["uu"],"kun":["tate"],"n":16},{"c":"聖","g":6,"m":"holy","on":["sei","ou"],"kun":["hijiri"],"n":13},{"c":"磁","g":6,"m":"magnet","on":["ji"],"kun":[],"n":14},{"c":"紅","g":6,"m":"crimson","on":["kou","ku"],"kun":["beni","kurenai"],"n":9},{"c":"射","g":6,"m":"shoot","on":["a"],"kun":["i(ru)","sa(su)"],"n":10},{"c":"幕","g":6,"m":"curtain","on":["maku","baku"],"kun":["tobari"],"n":13},{"c":"拝","g":6,"m":"worship","on":["hai"],"kun":["oga(mu)","oroga(mu)"],"n":8},{"c":"推","g":6,"m":"conjecture","on":["sui"],"kun":["o(su)"],"n":11},{"c":"揮","g":6,"m":"brandish","on":["ki"],"kun":["furu(u)"],"n":12},{"c":"沿","g":6,"m":"run alongside","on":["en"],"kun":["so(u)","zo(i)"],"n":8},{"c":"源","g":6,"m":"source","on":["gen"],"kun":["minamoto"],"n":13},{"c":"劇","g":6,"m":"drama","on":["geki"],"kun":[],"n":15},{"c":"勤","g":6,"m":"diligence","on":["kin","gon"],"kun":["tsuto(meru)","zuto(me)"],"n":12},{"c":"承","g":5,"m":"acquiesce","on":["ou","ou"],"kun":["uketamawa(ru)","u(keru)"],"n":8},{"c":"損","g":5,"m":"damage","on":["son"],"kun":["soko(nau)","sokona(u)"],"n":13},{"c":"枝","g":5,"m":"bough","on":["shi"],"kun":["eda"],"n":8},{"c":"豆","g":3,"m":"beans","on":["tou","zu"],"kun":["mame","mame"],"n":7},{"c":"刻","g":6,"m":"engrave","on":["koku"],"kun":["kiza(mu)","kiza(mi)"],"n":8},{"c":"測","g":5,"m":"fathom","on":["soku"],"kun":["haka(ru)"],"n":12},{"c":"破","g":5,"m":"rend","on":["ha"],"kun":["yabu(ru)","yabu(reru)"],"n":10},{"c":"舎","g":5,"m":"cottage","on":["a","seki"],"kun":["yado(ru)"],"n":8},{"c":"講","g":5,"m":"lecture","on":["kou"],"kun":[],"n":17},{"c":"己","g":6,"m":"self","on":["ko","ki"],"kun":["onore","tsuchinoto"],"n":3},{"c":"湖","g":3,"m":"lake","on":["ko"],"kun":["mizuumi"],"n":12},{"c":"銅","g":5,"m":"copper","on":["dou"],"kun":["akagane"],"n":14},{"c":"油","g":3,"m":"oil","on":["yu","yuu"],"kun":["abura"],"n":8},{"c":"旧","g":5,"m":"old times","on":["kyuu"],"kun":["furu(i)","moto"],"n":5},{"c":"貿","g":5,"m":"trade","on":["bou"],"kun":[],"n":12},{"c":"将","g":6,"m":"leader","on":["ou","sou"],"kun":["masa(ni)","hata"],"n":10},{"c":"盟","g":6,"m":"alliance","on":["mei"],"kun":[],"n":13},{"c":"遺","g":6,"m":"bequeath","on":["i","yui"],"kun":["noko(su)"],"n":15},{"c":"昭","g":3,"m":"shining","on":["ou"],"kun":[],"n":9},{"c":"漁","g":4,"m":"fishing","on":["gyo","ryou"],"kun":["asa(ru)"],"n":14},{"c":"兆","g":4,"m":"portent","on":["ou"],"kun":["kiza(su)","kiza(shi)"],"n":6},{"c":"臨","g":6,"m":"look to","on":["rin"],"kun":["nozo(mu)"],"n":18},{"c":"刊","g":5,"m":"publish","on":["kan"],"kun":[],"n":5},{"c":"奏","g":6,"m":"play music","on":["sou"],"kun":["kana(deru)"],"n":9},{"c":"片","g":6,"m":"one-sided","on":["hen"],"kun":["kata","kata"],"n":4},{"c":"群","g":5,"m":"flock","on":["gun"],"kun":["mu(reru)","mu(re)"],"n":13},{"c":"鋼","g":6,"m":"steel","on":["kou"],"kun":["hagane"],"n":16},{"c":"柱","g":3,"m":"pillar","on":["uu"],"kun":["hashira"],"n":9},{"c":"唱","g":4,"m":"chant","on":["ou"],"kun":["tona(eru)"],"n":11},{"c":"孝","g":6,"m":"filial piety","on":["kou","kyou"],"kun":[],"n":7},{"c":"樹","g":6,"m":"timber","on":["u"],"kun":["ki"],"n":16},{"c":"炭","g":3,"m":"charcoal","on":["tan"],"kun":["sumi"],"n":9},{"c":"畑","g":3,"m":"farm","on":[],"kun":["hata","hatake"],"n":9},{"c":"包","g":4,"m":"wrap","on":["hou"],"kun":["tsutsu(mu)","kuru(mu)"],"n":5},{"c":"衣","g":4,"m":"garment","on":["i","e"],"kun":["koromo","kinu"],"n":6},{"c":"仁","g":6,"m":"humanity","on":["jin","ni"],"kun":[],"n":4},{"c":"鉱","g":5,"m":"mineral","on":["kou"],"kun":["aragane"],"n":13},{"c":"至","g":6,"m":"climax","on":["shi"],"kun":["ita(ru)"],"n":6},{"c":"誠","g":6,"m":"sincerity","on":["sei"],"kun":["makoto"],"n":13},{"c":"郷","g":6,"m":"home town","on":["kyou","gou"],"kun":["sato"],"n":11},{"c":"牧","g":4,"m":"breed","on":["boku"],"kun":["maki"],"n":8},{"c":"刷","g":4,"m":"printing","on":["satsu"],"kun":["su(ru)","zu(ri)"],"n":8},{"c":"朗","g":6,"m":"melodious","on":["rou"],"kun":["hoga(raka)","aki(raka)"],"n":10},{"c":"潮","g":6,"m":"tide","on":["ou"],"kun":["shio","ushio"],"n":15},{"c":"寸","g":6,"m":"measurement","on":["sun"],"kun":[],"n":3},{"c":"芽","g":4,"m":"bud","on":["ga"],"kun":["me"],"n":8},{"c":"俵","g":5,"m":"bag","on":["hyou"],"kun":["tawara"],"n":10},{"c":"綿","g":5,"m":"cotton","on":["men"],"kun":["wata"],"n":14},{"c":"尺","g":6,"m":"shaku","on":["aku"],"kun":[],"n":4},{"c":"帳","g":3,"m":"notebook","on":["ou"],"kun":["tobari"],"n":11},{"c":"灯","g":4,"m":"lamp","on":["tou"],"kun":["hi","ho"],"n":6},{"c":"班","g":6,"m":"squad","on":["han"],"kun":[],"n":10},{"c":"陛","g":6,"m":"highness","on":["hei"],"kun":[],"n":10},{"c":"后","g":6,"m":"empress","on":["kou","go"],"kun":["kisaki"],"n":6},{"c":"奮","g":6,"m":"stirred up","on":["fun"],"kun":["furu(u)"],"n":16},{"c":"頂","g":6,"m":"place on the head","on":["ou"],"kun":["itada(ku)","itadaki"],"n":11},{"c":"耕","g":5,"m":"till","on":["kou"],"kun":["tagaya(su)"],"n":10},{"c":"郡","g":4,"m":"county","on":["gun"],"kun":["koori"],"n":10},{"c":"穀","g":6,"m":"cereals","on":["koku"],"kun":[],"n":14},{"c":"腸","g":4,"m":"intestines","on":["ou"],"kun":["harawata","wata"],"n":13},{"c":"絹","g":6,"m":"silk","on":["ken"],"kun":["kinu"],"n":13},{"c":"蚕","g":6,"m":"silkworm","on":["san","ten"],"kun":["kaiko","ko"],"n":10}],"kana":[{"c":"あ","r":"a","s":"hira","n":2},{"c":"ア","r":"a","s":"kata","n":2},{"c":"い","r":"i","s":"hira","n":2},{"c":"イ","r":"i","s":"kata","n":2},{"c":"う","r":"u","s":"hira","n":2},{"c":"ウ","r":"u","s":"kata","n":3},{"c":"え","r":"e","s":"hira","n":2},{"c":"エ","r":"e","s":"kata","n":3},{"c":"お","r":"o","s":"hira","n":2},{"c":"オ","r":"o","s":"kata","n":3},{"c":"か","r":"ka","s":"hira","n":3},{"c":"カ","r":"ka","s":"kata","n":2},{"c":"き","r":"ki","s":"hira","n":4},{"c":"キ","r":"ki","s":"kata","n":3},{"c":"く","r":"ku","s":"hira","n":1},{"c":"ク","r":"ku","s":"kata","n":2},{"c":"け","r":"ke","s":"hira","n":3},{"c":"ケ","r":"ke","s":"kata","n":3},{"c":"こ","r":"ko","s":"hira","n":2},{"c":"コ","r":"ko","s":"kata","n":2},{"c":"さ","r":"sa","s":"hira","n":3},{"c":"サ","r":"sa","s":"kata","n":3},{"c":"し","r":"shi","s":"hira","n":1},{"c":"シ","r":"shi","s":"kata","n":3},{"c":"す","r":"su","s":"hira","n":1},{"c":"ス","r":"su","s":"kata","n":2},{"c":"せ","r":"se","s":"hira","n":3},{"c":"セ","r":"se","s":"kata","n":2},{"c":"そ","r":"so","s":"hira","n":1},{"c":"ソ","r":"so","s":"kata","n":2},{"c":"た","r":"ta","s":"hira","n":4},{"c":"タ","r":"ta","s":"kata","n":3},{"c":"ち","r":"chi","s":"hira","n":2},{"c":"チ","r":"chi","s":"kata","n":3},{"c":"つ","r":"tsu","s":"hira","n":1},{"c":"ツ","r":"tsu","s":"kata","n":3},{"c":"て","r":"te","s":"hira","n":1},{"c":"テ","r":"te","s":"kata","n":3},{"c":"と","r":"to","s":"hira","n":2},{"c":"ト","r":"to","s":"kata","n":2},{"c":"な","r":"na","s":"hira","n":3},{"c":"ナ","r":"na","s":"kata","n":2},{"c":"に","r":"ni","s":"hira","n":3},{"c":"ニ","r":"ni","s":"kata","n":2},{"c":"ぬ","r":"nu","s":"hira","n":1},{"c":"ヌ","r":"nu","s":"kata","n":2},{"c":"ね","r":"ne","s":"hira","n":1},{"c":"ネ","r":"ne","s":"kata","n":4},{"c":"ノ","r":"no","s":"kata","n":1},{"c":"は","r":"ha","s":"hira","n":2},{"c":"ハ","r":"ha","s":"kata","n":2},{"c":"ひ","r":"hi","s":"hira","n":1},{"c":"ヒ","r":"hi","s":"kata","n":2},{"c":"ふ","r":"fu","s":"hira","n":4},{"c":"フ","r":"fu","s":"kata","n":1},{"c":"へ","r":"he","s":"hira","n":1},{"c":"ヘ","r":"he","s":"kata","n":1},{"c":"ほ","r":"ho","s":"hira","n":3},{"c":"ホ","r":"ho","s":"kata","n":4},{"c":"ま","r":"ma","s":"hira","n":2},{"c":"マ","r":"ma","s":"kata","n":2},{"c":"み","r":"mi","s":"hira","n":1},{"c":"ミ","r":"mi","s":"kata","n":3},{"c":"む","r":"mu","s":"hira","n":2},{"c":"ム","r":"mu","s":"kata","n":2},{"c":"め","r":"me","s":"hira","n":1},{"c":"メ","r":"me","s":"kata","n":2},{"c":"も","r":"mo","s":"hira","n":3},{"c":"モ","r":"mo","s":"kata","n":3},{"c":"や","r":"ya","s":"hira","n":3},{"c":"ヤ","r":"ya","s":"kata","n":2},{"c":"ゆ","r":"yu","s":"hira","n":2},{"c":"ユ","r":"yu","s":"kata","n":2},{"c":"よ","r":"yo","s":"hira","n":1},{"c":"ヨ","r":"yo","s":"kata","n":3},{"c":"ら","r":"ra","s":"hira","n":2},{"c":"ラ","r":"ra","s":"kata","n":2},{"c":"り","r":"ri","s":"hira","n":2},{"c":"リ","r":"ri","s":"kata","n":2},{"c":"ル","r":"ru","s":"kata","n":2},{"c":"れ","r":"re","s":"hira","n":2},{"c":"レ","r":"re","s":"kata","n":1},{"c":"ろ","r":"ro","s":"hira","n":1},{"c":"ロ","r":"ro","s":"kata","n":3},{"c":"わ","r":"wa","s":"hira","n":2},{"c":"ワ","r":"wa","s":"kata","n":2},{"c":"を","r":"wo","s":"hira","n":3},{"c":"ヲ","r":"wo","s":"kata","n":2},{"c":"ん","r":"n","s":"hira","n":1},{"c":"ン","r":"n","s":"kata","n":2}],"pics":{"日":{"vi":"mặt trời","pic":"sun"},"月":{"vi":"mặt trăng","pic":"moon"},"山":{"vi":"núi","pic":"mountain"},"水":{"vi":"nước","pic":"drop"},"火":{"vi":"lửa","pic":"fire"},"木":{"vi":"cây","pic":"tree"},"口":{"vi":"cái miệng","pic":"mouth"},"手":{"vi":"bàn tay","pic":"hand"},"目":{"vi":"con mắt","pic":"eye"},"耳":{"vi":"cái tai","pic":"ear"},"足":{"vi":"bàn chân","pic":"foot"},"人":{"vi":"người","pic":"boy"},"女":{"vi":"con gái","pic":"girl"},"子":{"vi":"con","pic":"baby"},"犬":{"vi":"con chó","pic":"dog"},"牛":{"vi":"con bò","pic":"cow"},"魚":{"vi":"con cá","pic":"fish"},"鳥":{"vi":"con chim","pic":"bird"},"馬":{"vi":"con ngựa","pic":"horse"},"花":{"vi":"bông hoa","pic":"blossom"},"雨":{"vi":"mưa","pic":"rain"},"雲":{"vi":"đám mây","pic":"cloud"},"車":{"vi":"xe","pic":"car"},"本":{"vi":"quyển sách","pic":"book"},"米":{"vi":"gạo","pic":"rice"},"門":{"vi":"cái cửa","pic":"door"},"心":{"vi":"trái tim","pic":"heart"},"歯":{"vi":"cái răng","pic":"tooth"},"大":{"vi":"to, lớn","pic":"elephant"},"小":{"vi":"nhỏ, bé","pic":"ant"}}};
})(typeof window === 'undefined' ? globalThis : window);

/* ---- studio-worksheet-cjk.js ---- */
/* Worksheet topics for Tiếng Trung (HSK 1–3) and Tiếng Nhật (kanji of the school grades, hiragana, katakana).
   Characters are pictures (stroke outlines of AnimCJK, drawn to PNG by the dialog), so no CJK font is needed.
   Readings are written in pinyin (Trung) and romaji (Nhật). Word data: studio-worksheet-zh-data.js, -ja-data.js. */
(function (root) {
  'use strict';
  const W = root.StudioWorksheet || (root.StudioWorksheet = {});
  const D = () => W.cjkData || {};

  // ---------- pinyin with tone marks -> LaTeX accents (T5 has no precomposed ǎ ě ǒ…) ----------
  const ACCENT = { '̄': '=', '́': "'", '̌': 'v', '̀': '`' }, TONE_NO = { '̄': 1, '́': 2, '̌': 3, '̀': 4 };
  function pinyinTeX(text) {
    return Array.from(String(text).normalize('NFC').replace(/ɡ/g, 'g')).map(ch => {
      const nfd = ch.normalize('NFD');
      if (nfd.length === 1) return ch === 'ü' ? '\\"u' : ch;
      const marks = [...nfd.slice(1)], tone = marks.find(m => ACCENT[m]);
      let base = nfd[0];
      if (marks.includes('̈')) return '\\"u' + (tone ? TONE_NO[tone] : '');   // lǜ -> l\"u4
      if (!tone) return ch;
      if (base === 'i') base = '\\i';
      return `\\${ACCENT[tone]}{${base}}`;
    }).join('');
  }
  const clip = (text, n = 34) => W.esc(text.length > n ? text.slice(0, text.lastIndexOf(' ', n) > 8 ? text.lastIndexOf(' ', n) : n) : text);
  const GRID = '\\tikz[baseline=-0.5ex]{\\draw[line width=0.7pt] (-0.68,-0.68) rectangle (0.68,0.68);\\draw[dashed,black!40] (-0.68,0)--(0.68,0) (0,-0.68)--(0.68,0) (0,-0.68)--(0,0.68);}';
  const GRID_CLEAN = '\\tikz[baseline=-0.5ex]{\\draw[line width=0.7pt] (-0.68,-0.68) rectangle (0.68,0.68);\\draw[dashed,black!40] (-0.68,0)--(0.68,0) (0,-0.68)--(0,0.68);}';
  const BOX = '\\fbox{\\rule{0pt}{0.62cm}\\hspace{0.62cm}}';

  // two-column matching with big cells (children draw lines)
  function matchBlock({ R, pool, instr, leftOf, rightOf, size = 4 }) {
    const chosen = R.sample(pool, Math.min(size, pool.length)), right = R.shuffle(chosen.map((p, i) => ({ p, i })));
    const rows = chosen.map((p, i) => `${leftOf(p)} & ${rightOf(right[i].p)}`).join('\\\\[0.5cm]\n');
    return { instr, body: `\\begin{center}\\renewcommand{\\arraystretch}{1.3}\\begin{tabular}{l@{\\hspace{4.5cm}}l}\n${rows}\n\\end{tabular}\\end{center}`,
      answer: chosen.map((p, i) => `${i + 1} – ${right.findIndex(x => x.i === i) + 1}`).join(', '), items: [], meta: { pairs: chosen } };
  }

  // ---------- the word pools, one per subject ----------
  // The first levels are for small children: pictures, few strokes. Words are sorted from easy to hard.
  const ZH_TIERS = ['HSK 0 (bé tiểu học, chữ hình ảnh)', 'HSK 0 – 1 (chữ ít nét)', 'HSK 1 (chữ dễ)', 'HSK 1', 'HSK 1 – 2', 'HSK 1 – 3'];
  const JA_TIERS = ['Kanji hình ảnh (bé tiểu học)', 'Kanji lớp 1', 'Kanji lớp 2', 'Kanji lớp 3', 'Kanji lớp 4', 'Kanji lớp 5'];
  const tierOf = (g, lvl) => Math.min(5, Math.max(0, g - 1 + (lvl ? 1 : 0)));
  const strokeTotal = w => Array.from(w).reduce((n, c) => n + (D().zh.strokes[c] || 9), 0);
  const zhEntry = w => ({ text: w.h, chars: Array.from(w.h), read: pinyinTeX(w.p), plain: w.p, mean: w.m, pic: w.pic || null });
  function zhPool(g, lvl) {
    const t = tierOf(g, lvl), { words, hsk0 } = D().zh, easy = n => words.filter(w => w.lv === 1 && strokeTotal(w.h) <= n).sort((a, b) => strokeTotal(a.h) - strokeTotal(b.h));
    if (t === 0) return hsk0.map(zhEntry);
    if (t === 1) return [...hsk0, ...easy(8)].map(zhEntry);
    if (t === 2) return easy(13).map(zhEntry);
    const range = [null, null, null, [1, 1], [1, 2], [1, 3]][t];
    return words.filter(w => w.lv >= range[0] && w.lv <= range[1]).sort((a, b) => strokeTotal(a.h) - strokeTotal(b.h)).map(zhEntry);
  }
  const readingOf = k => [...k.on.map(x => `\\textit{${x}}`), ...k.kun.map(x => x.replace(/\(/g, '(').replace(/\)/g, ')'))].slice(0, 3).join(', ');
  function jaPool(g, lvl) {
    const t = tierOf(g, lvl), { kanji, pics } = D().ja, usable = kanji.filter(k => k.on.length || k.kun.length);
    const entry = k => ({ text: k.c, chars: [k.c], read: readingOf(k), plain: [...k.on, ...k.kun].join(', '), mean: pics[k.c]?.vi || k.m, pic: pics[k.c]?.pic || null });
    if (t === 0) return usable.filter(k => pics[k.c]).map(entry);
    return usable.filter(k => k.g === t).sort((a, b) => a.n - b.n).map(entry);
  }

  function topicsFor(set) {
    const strokes = () => D()[set].strokes || {}, count = c => (strokes()[c] || 1);
    const kanjiCount = {};
    const unitsOf = pool => pool.flatMap(w => w.chars);
    const strokeCount = (c, p) => set === 'zh' ? D().zh.strokes[c] : (D().ja.kanji.find(k => k.c === c) || D().ja.kana.find(k => k.c === c) || {}).n;
    const pict = (hz, entry, h = 1.15) => entry.chars.map(c => hz(set, c, 'f', h)).join('\\,');
    const reading = set === 'zh' ? 'phiên âm (pinyin)' : 'cách đọc (romaji)';
    const T = (id, name, extra, make) => ({ id, name, grades: [1, 2, 3, 4, 5], defaults: [], cols: 1, count: 4, ...extra, make });
    const poolOf = ctx => (set === 'zh' ? zhPool : jaPool)(ctx.g, ctx.lvl);
    const single = pool => { const seen = new Set(), out = []; for (const w of pool) for (const c of w.chars) if (!seen.has(c)) { seen.add(c); out.push({ c, entry: w }); } return out; };

    const trace = T('trace', 'Tập viết chữ: thứ tự nét và ô tập viết', { defaults: [1, 2, 3, 4, 5], count: 3 }, ctx => {
      const { R, n, hz } = ctx, pool = poolOf(ctx), chars = single(pool).filter(x => (strokeCount(x.c) || 99) <= (ctx.lvl ? 14 : 10)), picks = R.sample(chars, Math.min(n, chars.length));
      const body = picks.map(({ c, entry }) => {
        const k = strokeCount(c), steps = k > 1 && k <= 10 ? Array.from({ length: k }, (_, i) => hz(set, c, 's' + (i + 1), 0.8)).join('\\,') : '';
        const info = `\\hfill {\\large ${entry.read}} \\quad ${clip(entry.mean, 22)}${entry.pic && entry.chars.length === 1 ? `\\quad ${ctx.pic(entry.pic, 1.2)}` : ''}`;
        return `\\noindent${hz(set, c, 'f', 1.6)}\\quad ${steps}${info}\\par\\smallskip\\noindent${[0, 1, 2].map(() => hz(set, c, 't', 1.3)).join('\\,')}\\ ${[0, 1, 2, 3, 4].map(() => GRID_CLEAN).join('\\,')}\\par\\bigskip`;
      }).join('\n');
      return { instr: 'Xem thứ tự các nét, tô theo chữ mờ rồi viết thêm vào các ô:', body, items: [], noAnswer: true, meta: { picks: picks.map(x => x.c) } };
    });
    const matchRead = T('matchread', `Nối chữ với ${reading}`, { defaults: [1, 2, 3, 4, 5], count: 1 }, ctx => {
      const { R, hz, lvl } = ctx, pool = poolOf(ctx).filter(w => w.chars.length <= 2);
      return matchBlock({ R, pool, size: lvl ? 5 : 4, instr: `Nối mỗi chữ với ${reading} đúng:`, leftOf: w => pict(hz, w, 1.2), rightOf: w => `{\\Large\\bfseries ${w.read.split(', ')[0]}}` });
    });
    const matchMean = T('matchmean', 'Nối chữ với nghĩa', { defaults: [2, 3, 4, 5], count: 1 }, ctx => {
      const { R, hz, lvl } = ctx, pool = poolOf(ctx).filter(w => w.chars.length <= 2);
      return matchBlock({ R, pool, size: lvl ? 5 : 4, instr: 'Nối mỗi chữ với nghĩa đúng:', leftOf: w => pict(hz, w, 1.2), rightOf: w => `\\large ${clip(w.mean, 24)}` });
    });
    const writeRead = T('writeread', `Nhìn chữ, viết ${reading}`, { defaults: [1, 2, 3, 4, 5], cols: 3, count: 9 }, ctx => {
      const { R, n, hz } = ctx, pool = poolOf(ctx).filter(w => w.chars.length <= 3), items = R.sample(pool, Math.min(n, pool.length)).map(w => ({ q: `${pict(hz, w, 1.2)}\\\\[3pt] \\underline{\\hspace{2.6cm}}`, a: w.read, meta: { text: w.text, plain: w.plain } }));
      return { instr: `Viết ${reading} của mỗi chữ:`, items, cols: 3 };
    });
    const choose = T('choose', 'Khoanh chữ đúng với nghĩa', { defaults: [2, 3, 4, 5], cols: 1, count: 4 }, ctx => {
      const { R, n, hz } = ctx, pool = poolOf(ctx).filter(w => w.chars.length <= 2 && w.mean.length < 30), items = [];
      for (let i = 0; i < n && pool.length > 4; i++) {
        const right = R.pick(pool), others = R.sample(pool.filter(w => w.text !== right.text), 2), opts = R.shuffle([right, ...others]);
        items.push({ q: `${clip(right.mean, 30)} (${right.read})\\\\ ${opts.map((w, k) => `\\textbf{${'ABC'[k]}.} ${pict(hz, w, 1.1)}`).join('\\qquad ')}`, a: 'ABC'[opts.indexOf(right)], meta: { right: right.text, options: opts.map(o => o.text) } });
      }
      return { instr: 'Khoanh vào chữ có nghĩa đã cho:', items, cols: 1, long: true };
    });
    const strokesTopic = T('strokes', 'Đếm số nét', { defaults: [], cols: 3, count: 9 }, ctx => {
      const { R, n, hz } = ctx, chars = single(poolOf(ctx)).filter(x => strokeCount(x.c)), picks = R.sample(chars, Math.min(n, chars.length));
      const items = picks.map(({ c }) => ({ q: `${hz(set, c, 'f', 1.2)}\\quad ${BOX} nét`, a: String(strokeCount(c)), meta: { c, value: strokeCount(c) } }));
      return { instr: 'Đếm số nét của mỗi chữ rồi viết vào ô:', items, cols: 3 };
    });
    const fromMemory = T('memory', 'Nhìn nghĩa, viết chữ (tự luận nhớ chữ)', { defaults: [], count: 4 }, ctx => {
      const { R, n, hz } = ctx, pool = poolOf(ctx).filter(w => w.chars.length <= 2 && w.mean.length < 30), picks = R.sample(pool, Math.min(n, pool.length));
      const items = picks.map(w => ({ q: `\\textbf{${clip(w.mean, 30)}} (${w.read})\\quad ${w.chars.map(() => GRID_CLEAN).join('\\,')}`, a: pict(hz, w, 1), meta: { text: w.text } }));
      return { instr: 'Nhìn nghĩa và cách đọc, viết chữ vào các ô:', items, cols: 1, long: true };
    });
    const withPics = ctx => poolOf(ctx).filter(w => w.pic && w.chars.length === 1);
    const matchPic = T('matchpic', 'Nối hình với chữ', { defaults: [1, 2], count: 1 }, ctx => {
      const { R, hz, pic, lvl } = ctx, pool = withPics(ctx);
      if (pool.length < 5) return null;
      const block = matchBlock({ R, pool, size: lvl ? 5 : 4, instr: 'Nối mỗi hình với chữ đúng:', leftOf: w => pic(w.pic, 1.5), rightOf: w => hz(set, w.text, 'f', 1.6) });
      return block;
    });
    const choosePic = T('choosepic', 'Nhìn hình, khoanh chữ đúng', { defaults: [1, 2], cols: 1, count: 4 }, ctx => {
      const { R, n, hz, pic } = ctx, pool = withPics(ctx), items = [];
      if (pool.length < 5) return null;
      for (let i = 0; i < n; i++) {
        const right = R.pick(pool), opts = R.shuffle([right, ...R.sample(pool.filter(w => w.text !== right.text), 2)]);
        items.push({ q: `${pic(right.pic, 1.5)}\\quad ${opts.map((w, k) => `\\textbf{${'ABC'[k]}.} ${hz(set, w.text, 'f', 1.3)}`).join('\\qquad ')}`, a: `${'ABC'[opts.indexOf(right)]} (${right.read.split(', ')[0]}, ${right.mean})`, meta: { right: right.text, options: opts.map(o => o.text) } });
      }
      return { instr: 'Nhìn hình rồi khoanh vào chữ đúng:', items, cols: 1, long: true };
    });
    const writePic = T('writepic', 'Nhìn hình, tô chữ và viết', { defaults: [1, 2], count: 4 }, ctx => {
      const { R, n, hz, pic } = ctx, pool = withPics(ctx);
      if (pool.length < 4) return null;
      const picks = R.sample(pool, Math.min(n + 2, pool.length));
      const body = picks.map(w => `\\noindent${pic(w.pic, 1.5)}\\quad ${hz(set, w.text, 't', 1.5)}\\ ${[0, 1, 2].map(() => GRID_CLEAN).join('\\,')}\\hfill {\\large ${w.read.split(', ')[0]}} \\ ${clip(w.mean, 20)}\\par\\bigskip`).join('\n');
      return { instr: 'Nhìn hình, tô theo chữ mờ rồi viết vào các ô:', body, items: [], noAnswer: true, meta: { picks: picks.map(w => w.text) } };
    });
    return [trace, matchPic, choosePic, writePic, matchRead, matchMean, writeRead, choose, strokesTopic, fromMemory];
  }

  // ---------- Chinese extras: numerals ----------
  const NUM = '一二三四五六七八九十';
  const zhNumbers = {
    id: 'numbers', name: 'Số đếm bằng chữ Hán', grades: [1, 2, 3], defaults: [1, 2], cols: 1, count: 4,
    make({ R, n, hz, lvl }) {
      const have = [...NUM].filter(c => D().zh.strokes[c]);
      if (have.length < 10) return null;
      const reads = ['yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];
      const first = R.sample([...Array(10).keys()], 6).map(i => `${hz('zh', NUM[i], 'f', 1.2)}\\quad = ${BOX}`);
      const calc = Array.from({ length: Math.max(2, Math.min(5, n)) }, () => { const a = R.int(1, 5), b = R.int(1, lvl ? 5 : 4); return { a, b, q: `${hz('zh', NUM[a - 1], 'f', 1.1)} $+$ ${hz('zh', NUM[b - 1], 'f', 1.1)} $=\\ \\boxed{\\phantom{00}}$`, v: a + b }; });
      const body = `\\par\\noindent${first.slice(0, 3).join('\\hfill ')}\\par\\bigskip\\noindent${first.slice(3).join('\\hfill ')}\\par\\bigskip\n\\begin{enumerate}\n${calc.map(c => `\\item ${c.q}`).join('\n')}\n\\end{enumerate}`;
      return { instr: 'Viết số (bằng chữ số) tương ứng với mỗi chữ Hán, rồi làm phép tính:', body, answer: calc.map((c, i) => `${i + 1}) ${c.a} + ${c.b} = ${c.v}`).join('; '), items: [], meta: { calc, reads } };
    }
  };

  // ---------- Japanese extras: kana ----------
  const kanaPool = lvl => D().ja.kana.filter(k => k.s === 'hira' || lvl);
  const kanaTrace = {
    id: 'kanatrace', name: 'Tập viết chữ kana (hiragana, katakana)', grades: [1, 2, 3, 4, 5], defaults: [1], cols: 1, count: 4,
    make({ R, n, hz, lvl, g }) {
      const picks = R.sample(kanaPool(lvl || g > 3), Math.min(n, 6));
      const body = picks.map(k => `\\noindent${hz('ja', k.c, 'f', 1.5)}\\quad {\\Large\\bfseries ${k.r}}\\quad ${k.n > 1 && k.n <= 6 ? Array.from({ length: k.n }, (_, i) => hz('ja', k.c, 's' + (i + 1), 0.8)).join('\\,') : ''}\\par\\smallskip\\noindent${[0, 1, 2].map(() => hz('ja', k.c, 't', 1.3)).join('\\,')}\\ ${[0, 1, 2, 3, 4].map(() => GRID_CLEAN).join('\\,')}\\par\\bigskip`).join('\n');
      return { instr: 'Tô theo chữ mờ rồi viết thêm vào các ô (chữ in đậm là cách đọc):', body, items: [], noAnswer: true, meta: { picks } };
    }
  };
  const kanaMatch = {
    id: 'kanamatch', name: 'Nối chữ kana với cách đọc', grades: [1, 2, 3, 4, 5], defaults: [1], cols: 1, count: 1,
    make({ R, hz, lvl, g }) { return matchBlock({ R, pool: kanaPool(lvl || g > 3), size: lvl ? 5 : 4, instr: 'Nối mỗi chữ kana với cách đọc đúng:', leftOf: k => hz('ja', k.c, 'f', 1.2), rightOf: k => `{\\Large\\bfseries ${k.r}}` }); }
  };
  const kanaRead = {
    id: 'kanaread', name: 'Nhìn kana, viết cách đọc', grades: [1, 2, 3, 4, 5], defaults: [], cols: 4, count: 12,
    make({ R, n, hz, lvl, g }) {
      const items = R.sample(kanaPool(lvl || g > 3), Math.min(n, 16)).map(k => ({ q: `${hz('ja', k.c, 'f', 1.2)}\\\\[3pt] \\underline{\\hspace{1.6cm}}`, a: k.r, meta: { c: k.c, r: k.r } }));
      return { instr: 'Viết cách đọc (romaji) dưới mỗi chữ kana:', items, cols: 4 };
    }
  };

  const MASCOTS = ['star', 'rocket'];
  W.registerSubject({
    id: 'zh', name: 'Tiếng Trung', title: 'Tiếng Trung', palette: { main: '#c0392b', accent: '#e67e22', light: '#fdf0e6' }, mascots: MASCOTS, cheer: 'Chúc em học giỏi tiếng Trung!',
    grades: [1, 2, 3, 4, 5], kinds: ['worksheet'], levelLabel: (g, l) => ZH_TIERS[tierOf(g, l)], fileSuffix: (g, l) => '-hsk-' + tierOf(g, l),
    get topics() { return D().zh ? [...topicsFor('zh'), zhNumbers] : []; }
  });
  W.registerSubject({
    id: 'ja', name: 'Tiếng Nhật', title: 'Tiếng Nhật', palette: { main: '#c0392b', accent: '#2c7fb8', light: '#eef4fa' }, mascots: MASCOTS, cheer: 'Chúc em học giỏi tiếng Nhật!',
    grades: [1, 2, 3, 4, 5], kinds: ['worksheet'], levelLabel: (g, l) => JA_TIERS[tierOf(g, l)], fileSuffix: (g, l) => '-kanji-' + tierOf(g, l),
    get topics() { return D().ja ? [...topicsFor('ja'), kanaTrace, kanaMatch, kanaRead] : []; }
  });
  W.cjkHelpers = { pinyinTeX, zhPool, jaPool, ZH_TIERS, JA_TIERS, tierOf };
})(typeof window === 'undefined' ? globalThis : window);

;(function (root) {
  const W = root.StudioWorksheet;
  root.Worksheet = W;
  if (typeof module !== 'undefined' && module.exports) module.exports = W;
})(typeof window === 'undefined' ? globalThis : window);
