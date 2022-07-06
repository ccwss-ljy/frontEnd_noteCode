const url = require("url");

let http = "www.baidu.com?name=zhangsan&age=20";

// 获取params成为对象
// console.log(url.parse(http, true));

let value = url.parse(http, true).query;
console.log(value.name);
console.log(value.age);