// 协议，域名，端口号，只要有一个不同就会发生跨域问题

import express from 'express'

import cors from 'cors'

const app = express();

// 使用cors解决跨域问题
app.use(cors());

// 解析urlencoded数据
app.use(express.urlencoded({ extended:false }));
app.use(express.json())

app.get('/get', (req, res) => {
    let query = req.query
    res.send({
        status:200,
        msg:'请求成功',
        data: query
    });
})

app.post('/post', (req, res) => {
    let body = req.body;
    console.log(body);
    res.send({
        status:200,
        msg:'POST请求成功',
        data:body
    });
})

app.listen(80, () => {
    console.log("server is running");
});