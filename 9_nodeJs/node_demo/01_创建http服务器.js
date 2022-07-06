// 引入http模块
var http = require('http');
// 创建服务器函数
/* 
    request 客户端请求
    response 响应客户端
*/
http.createServer(function (request, response) {
    // 响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
    // 接收响应信息，并结束
  response.end('Hello World');
}).listen(8081); // 端口号

console.log('Server running at http://127.0.0.1:8081/');