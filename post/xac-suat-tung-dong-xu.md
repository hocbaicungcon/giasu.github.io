---
title: "Xác suất qua bài toán tung đồng xu"
description: "Luyện cách liệt kê kết quả và đếm số trường hợp thuận lợi."
category: "Toán học"
grade: 11
type: "Bài tập"
date: "2026-09-14"
tags: ["toán 11", "xác suất"]
---

## Trước khi làm bài
Với không gian mẫu hữu hạn có các kết quả đồng khả năng, xác suất của biến cố $A$ là:

$$
P(A)=\frac{n(A)}{n(\Omega)}
$$

Trong đó $n(A)$ là số kết quả thuận lợi và $n(\Omega)$ là tổng số kết quả có thể xảy ra.

## Bài 1. Tung đồng xu hai lần
Tung một đồng xu cân đối hai lần độc lập. Tính xác suất có đúng một lần xuất hiện mặt ngửa.

**Lời giải:** Gọi N là ngửa, S là sấp. Không gian mẫu gồm NN, NS, SN, SS. Có hai kết quả thuận lợi là NS và SN.

$$
P(A)=\frac{2}{4}=\frac{1}{2}
$$

## Bài 2. Ít nhất một lần ngửa
Vẫn trong phép thử trên, tính xác suất có ít nhất một lần ngửa.

**Lời giải:** Các kết quả thuận lợi là NN, NS, SN, nên xác suất bằng $\frac{3}{4}$.

## Bài 3. Tự luyện
Tung đồng xu cân đối ba lần độc lập. Tính xác suất cả ba lần đều ngửa.

**Đáp án:** Có $2^3=8$ kết quả đồng khả năng, chỉ NNN thuận lợi. Xác suất là $\frac18$.

> “Đúng một” và “ít nhất một” là hai yêu cầu khác nhau. Hãy đọc kĩ đề trước khi đếm!
