    let fs = require("fs");
    let rs = fs.createReadStream("hello.txt");
    // 流式文件的读取需要响应事件，响应操作为data，其中的参数为返回的data数据
    rs.on("data", function(data){
        console.log(data);
    })
    let ws = fs.createWriteStream("hello1.txt");
    // 建立管道可以直接将读取的文件写入另一个文件
    rs.pipe(ws);