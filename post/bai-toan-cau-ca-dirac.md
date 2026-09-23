---
title: "Paul Dirac và bài toán “âm hai con cá”"
description: "Một câu chuyện ngắn về cách Archimedes phát hiện ra nguyên lý lực đẩy."
category: "Giải trí"
type: "Giai thoại"
date: "2026-09-24"
tags: ["giai thoại", "Dirac", "vật lí", "câu cá"]
---

Paul Dirac là một trong những nhà vật lý vĩ đại nhất thế kỷ XX. Ông nổi tiếng không chỉ bởi những công trình làm thay đổi vật lý hiện đại, mà còn bởi một lối suy nghĩ rất đặc biệt: **nếu toán học đưa ra một kết quả hợp lý, đừng vội bác bỏ nó chỉ vì nó trái với trực giác thông thường.**

![dirac](/Users/phuongphan/GitHub/giasu.github.io/assets/images/dirac.JPG)

Có một câu chuyện thường được kể để minh họa cho cách tư duy ấy.

## Nội dung bài toán câu cá

> Ba người đi câu được một số cá. Trời tối và mệt lả, họ vứt cá trên bờ sông rồi mỗi người tìm một nơi và lăn ra ngủ.
>
> - **Người thứ nhất** thức dậy, đếm số cá thấy chia 3 thừa 1 con, bèn vứt 1 con xuống sông và lấy $\frac{1}{3}$ số cá còn lại mang về nhà.
> - **Người thứ hai** thức dậy, tưởng 2 bạn mình còn ngủ, anh ta lại đếm số cá trên bờ, thấy chia 3 thừa 1 con, liền vứt 1 con xuống sông và lấy $\frac{1}{3}$ số cá còn lại mang về nhà.
> - **Người thứ ba** thức dậy sau cùng, cứ nghĩ mình dậy sớm nhất, đếm số cá, thấy cũng chia 3 thừa 1 con, bèn vứt 1 con xuống sông và lấy $\frac{1}{3}$ số cá mang về.
>
> Hỏi ban đầu họ câu được bao nhiêu con cá?

------

## Lời giải thông thường (Nghiệm dương)

- Gọi số cá người thứ 3 mang về là $x$, vậy người thứ 3 thức dậy thấy $3x+1$ con cá.
- Người thứ 2 đã để lại $3x+1$ con cá đó và lấy đi $(3x+1)/2$ con cá. Do đó, khi thức dậy người thứ 2 đã thấy $(9x+5)/2$ con cá.
- Người thứ nhất đã để lại $(9x+5)/2$ con cá và lấy đi $(9x+5)/4$ con cá, vậy khi thức dậy người thứ nhất thấy trong giỏ có $(27x+19)/4$ con cá.
- Vì số cá phải là số tự nhiên nên $(27x+19)/4$ phải là số tự nhiên.

Phân tích $(27x+19)/4=(6x+4)+(3x+3)/4$, suy ra $3x+3$ phải chia hết cho 4, do đó $x$ chia 4 dư 3.

Họ câu tồi nên chọn $x=3$, từ đó tính được số cá ban đầu là 25 con..

------

## Lời giải đặc biệt của Paul Dirac (Nghiệm âm)

Khi tham gia một kỳ thi toán học, thay vì tìm nghiệm dương thông thường, cậu bé Paul Dirac đã tư duy mở rộng ra cả tập hợp số âm và đưa ra một đáp án gây sốc: **Tổng số cá câu được là -2 con, mỗi người mang về -1 con và trên bờ cuối cùng còn lại -2 con**.

Gọi $x$ là số cá câu được, $n$ là số cá còn lại trên bờ sông sau khi người thứ 3 lấy. Từ các giả thiết ta tính được: $x=(27n + 38)/8$ với $n=8m/3 – 2$ trong đó $m$ là bội số của 3.

Vì họ câu tồi nên $x$ phải nhỏ nhất, nghĩa là $n$ nhỏ nhất, cũng tức là $m$ nhỏ nhất nên $m=0$. Từ đó có đáp số: $n = -2$ và $x = -2$.

- **Người thứ nhất** thức dậy, đếm thấy đống cá có **-2 con** (vốn không chia hết cho 3). Anh ta bèn "vứt xuống sông" thêm **1 con** để số cá thành **-3 con**. Lấy $\frac{1}{3}$ tương ứng là **-1 con** mang về nhà, để lại **-2 con** cho hai bạn.
- **Người thứ hai và thứ ba** lần lượt tỉnh dậy làm hệt như vậy. Kết quả là cả 3 người đều mang về được **-1 con cá** một cách cực kỳ công bằng!

Chính tư duy dám vượt qua khuôn khổ thực tại để chấp nhận các nghiệm âm của phương trình toán học từ bài toán câu cá này đã theo đuổi Dirac suốt cuộc đời và truyền cảm hứng cho ông dự đoán ra **sự tồn tại của phản vật chất** (e-lectron mang điện tích âm và hạt positron mang điện tích dương đối xứng) sau này.

Tất nhiên kết quả Paul Dirac đưa ra không được chấp nhận bởi  bởi số cá câu được không thể là số âm.
