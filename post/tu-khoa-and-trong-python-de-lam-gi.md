---
title: Từ khóa and trong Python để làm gì?
description: Từ khóa and trong Python dùng để thực hiện phép và giữa hai biểu thức
  bool.
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Python
- Toán tử logic
- CNTT
grade: 10
---

Từ khóa and trong Python dùng để thực hiện phép và giữa hai biểu thức bool.

## Từ khóa and trong Python để làm gì?

Trong Python, từ khóa `and` được sử dụng để thực hiện phép và giữa hai biểu thức bool. Khi hai biểu thức cùng đúng, kết quả của phép và sẽ là đúng. Nếu một trong hai biểu thức sai, kết quả sẽ là sai.

Ví dụ, các câu lệnh sau sẽ trả về kết quả đúng:

```python
print(True and True)
print(1 < 2 and 2 < 3)
print("Hello" == "Hello" and "World" == "World")
```

Còn các câu lệnh sau sẽ trả về kết quả sai:

```python
print(True and False)
print(1 > 2 and 2 < 3)
print("Hello" == "Hello" and "World" == "world")
```

Chú ý rằng các biểu thức sau `and` sẽ không được thực hiện nếu biểu thức trước `and` đã sai. Điều này có thể được sử dụng để kiểm tra điều kiện trước khi thực hiện một khối câu lệnh.

←[Các từ khóa trong Python](/bai-viet/cac-tu-khoa-trong-python.html)
[Áo số 10 trong bóng đá dành cho ai?](/bai-viet/ao-so-10-trong-bong-da-danh-cho-ai.html)→
