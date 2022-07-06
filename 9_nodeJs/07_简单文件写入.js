    let fs = require("fs");
/*  
    简单文件写入：
        同步参数：文件路径，写入内容，{flag: 写入方式}
        异步参数：文件路径，写入内容，{flag: 写入方式}，function(err){}
*/
    fs.writeFileSync("hello.txt", "猜猜我是谁", {flag: "a"});
    fs.writeFile("hello1.txt","我是异步写入的内容", {flag:"a"}, function(err){});