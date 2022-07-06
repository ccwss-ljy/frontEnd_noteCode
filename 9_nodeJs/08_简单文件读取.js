    let fs = require("fs");
/* 
    简单文件读取：
        fs.readFile(file[, option], callback);
        fs.readFileSync(file[, option]);
        参数：文件路径，【打开方式】，回调函数(err, data)  -data为所读数据
*/
    fs.readFile("hello.txt",function(err, data){
        if(!err){
            console.log("读取成功");
            console.log(data);
        }
    });
    // 同步方法返回值为所读数据
    let f = fs.readFileSync("hello.txt");
    console.log(f);