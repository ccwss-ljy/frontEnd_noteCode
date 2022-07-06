    let fs = require("fs");
/* 
    异步文件的打开：
        参数：文件路径，打开方式，function(err, fd){}  -fd为文件描述符
*/
    // 因为是异步操作所以肯定没有返回值，若有返回值，则说明要等待，不符合异步思想
    fs.open("hello.txt", "w", function(err, fd){
        if(!err){
            console.log("打开成功");
            /* 
                文件写入：
                    参数：文件描述符，写入内容，回调函数
            */
            fs.write(fd, "猜猜我是谁", function(err){
                if(!err){
                    console.log("写入成功");
                }
            });
            /* 
                文件关闭：
                    参数：文件描述符，回调函数
            */
            fs.close(fd, function(err){
                if(!err){
                    console.log("关闭成功");
                }
            })
        }
        
    });