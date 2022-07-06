    let fs = require("fs");
/* 
    同步打开文件：
        参数：打开的文件，打开方式
        w 只写、r 只读、a追加
        返回文件描述符
 */
    let fd = fs.openSync("hello.txt", "w");
/*
    写文件：
        参数： 文件描述符，写的内容，【开始位置】，【写的编码形式】
*/
    fs.writeSync(fd, "猜猜我是谁");
/* 
    关闭文件：
        参数 ：文件    
*/
    fs.closeSync(fd);