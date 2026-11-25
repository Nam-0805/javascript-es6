function sum(...result) {
  return result.reduce((acc, curr) => acc + curr,0);
}

//ตอนส่งเข้าไปไม่ใช่ทั้ง Array และ Object เป็นแค่ตัวเลข => เมื่อเข้า func กลายเป็น Array
let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8); 
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
