// 导入express模块
const express = require('express');

// 创建express实例
const app = express()

// 响应客户端，返回get请求和post请求
// 语法：app.get('url路径', (req, res) => {})
app.get('/user', (req, res) => {
    // res.send给客户端发送信息,json信息
    res.send({ name: 'heihei', age: 12, gender: '男'})
})

app.post('/user', (req, res) => {
    // res.send给客户端发送信息，也可以是文本结构
    res.send('heihei')
})

// 使用req.query可以获取客户端url地址中的请求参数
app.get('/', (req, res) => {
    let params = req.query
    console.log(params)
    // 给客户端返回信息
    res.send(params)
})

// 使用req.params可以获取客户端url地址中的动态参数（：参数名）比如user/:id/:username,使用params可以返回id:xxx,username:xxx
app.get('/:username/:id', (req, res) => {
    let params = req.params
    console.log(params);
    res.send(params)
})

// 启动服务器
app.listen(80, ()=>{
    console.log('server is running')
})