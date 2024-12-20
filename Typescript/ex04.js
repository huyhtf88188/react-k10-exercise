"use strict";
function sum(a, b) {
    return a + b;
}
// Hàm không return có kiểu trả về là void
// Với tham số không bắt buộc khi khai báo hàm, sử dụng "?". Khi gọi hàm có thể bỏ qua tham số tuỳ chọn.
function hello(name) {
    console.log(`Xin chao ${name}`);
}
// type Hello = () => void;
hello("F8");
hello();
//# sourceMappingURL=ex04.js.map