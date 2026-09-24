---
title: "Câu đố có bao nhiêu còn mèo?"
description: "Một câu đố ngắn để rèn khả năng tư duy."
category: "Giải trí"
type: "Câu đố"
date: "2026-09-24"
tags: ["câu đố IQ", "tư duy logic", "con mèo", 'con chuột']
---

Ở một làng kia do có chuột về phá hoại nhiều quá, dân làng quyết định phải tìm mèo về để diệt lũ chuột. Do sự trùng hợp ngẫu nhiên, mỗi con mèo bắt được một số chuột bằng nhau và mỗi con mèo diệt được số chuột nhiều hơn số mèo hiện có. Biết rằng số chuột bị diệt tất cả là 10 001 con. Hỏi vậy có bao nhiêu con mèo đã tham gia cuộc diệt chuột này?

![cau-do-con-meo](/Users/phuongphan/GitHub/giasu.github.io/assets/images/cau-do-con-meo.jpg)

Đặt $x$ là số mèo, mỗi con mèo diệt được $a$ con chuột. 

Điều kiện: $a > x$ và $a, x$ đều nguyên dương. Từ đề bài ta có phương trình:
$$
ax = 10001
$$
Lưu ý rằng, khi phân tích số 10001 thành thừa số nguyên tố, chỉ có một cách duy nhất:
$$
10001 = 73\times 137
$$
Mà số chuột nhiều hơn số mèo, nên \[ x = 73 \] và $a = 137$. Vậy số mèo đã tham gia diệt chuột là $73$ con.
