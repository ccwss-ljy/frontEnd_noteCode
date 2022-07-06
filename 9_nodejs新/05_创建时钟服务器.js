const http = require('http');

const fs = require('fs');

const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => { 
    let url = req.url;
    // 默认响应页面
    let content = '404 the edge is error'
    // 根据url访问服务器里的clock内容
    // 设置访问路径
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname, "./clock/clock.html")
    }else{
        fpath = path.join(__dirname, './clock', url)
    }
   

    // 读取文件
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 如果报错返回错误信息
        if(err){
            return res.end(content)
        }
        console.log(`访问url为${fpath}`);
        // 如果正确返回页面
        res.end(dataStr)
    })
})

server.listen(8080, () => {
    console.log('server is running');
});