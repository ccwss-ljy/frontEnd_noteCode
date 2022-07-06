const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    // 获取url地址
    const url = req.url
    // 返回默认响应内容
    let content = '404 the edge is error'
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }
    else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }
    // 设置Content-Type响应头防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 返回响应内容
    res.end(content)
})

server.listen(80,function(){
    console.log('server is running');
})