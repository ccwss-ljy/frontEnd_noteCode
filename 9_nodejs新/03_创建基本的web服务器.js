// 导入http模块
const http = require("http")
// 创建web服务器实例
const server = http.createServer();
// 为服务器绑定事件
server.on("request", function(req, res){
    // req.url获取客户端请求的url地址
    const url = req.url
    // req.method获取客户端请求的方式
    const method = req.method
    let str = `你请求的 url is ${url},method is ${method}`
    console.log(str)
    // res.setHeader,设置响应头解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end响应客户端请求，发送内容
    res.end(str)
})
// 启动服务器，绑定端口为8080
server.listen(8080, function(){
    console.log("server is running")
})