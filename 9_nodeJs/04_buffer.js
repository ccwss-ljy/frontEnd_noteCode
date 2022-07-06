// Buffer和数组基本是相同的，唯一区别是Buffer里存的是二进制
let str = "猜猜我是谁";
// 将字符串改为Buffer数据
let b = Buffer.from(str);
console.log(b);
// 建立一段Buffer空间，数据为0
let b1 = Buffer.alloc(10);
console.log(b1);
// 建立一段Buffer空间，其中可能会有之前的敏感数据
let b2 = Buffer.allocUnsafe(10);
console.log(b2);
// 遍历Buffer
for(let i = 0;i < b.length;i++){
    console.log(b[i]);
}