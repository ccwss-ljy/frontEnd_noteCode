const http = require("http");
// const { traceDeprecation } = require("process");

http.createServer(function(req,res){
    // 获取url
    console.log(req.url);

    res.writeHead(200, {"Content-type":"text/html;charset='utf-8'"});

    res.write("this is nodeJs");

    // 结束响应
    res.end();

}).listen(8000)