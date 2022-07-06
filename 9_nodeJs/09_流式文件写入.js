// 流式文件：只要不关闭，可以一直写下去，适合大文件
    let fs = require("fs");
/* 
    流式文件写入的步骤：
        创建流-写入文件-关闭流
    创建流：
        参数：文件路径
    写文件：
        参数：写入内容
    关闭流：
        xx.end();
*/
    let ws = fs.createWriteStream("hello.txt");
    // 添加监听事件，来判断文件流是否打开
    // once和on一样，唯一区别是once只执行一次响应事件
    ws.once("open", function(){
        console.log("文件流打开了");
    })
    
    ws.write("锄禾日当午");
    ws.write("汗滴禾下土");
    ws.end();
    ws.once("close", function(){
        console.log("文件流关闭了");
    });