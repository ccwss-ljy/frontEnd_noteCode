const path = require("path");

const fs = require('fs');

// __dirname：当前路径
// path.join:该方法可以将多个路径合并成一个路径

const pathStr = path.join(__dirname, './index.html')

console.log(pathStr);

// path.basename:该方法可以将一个路径的文件名提取出来,实际为路径最后一个
// path.basename(,[.ext]):添加第二个参数可以去除该内容

str = path.basename('a/b/v/index.html');
str = path.basename('a/b/v/index.html', '.html');

console.log(str);

// path.extname:获取文件路径的扩展名

str = path.extname('a/b/v/c/index.html');
console.log(str);