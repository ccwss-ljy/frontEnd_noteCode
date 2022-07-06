import express from 'express'

const router = express.Router();

// 编写get接口
router.get('/get', (req, res) => {
    let query = req.query;
    res.send({
        status:200, //请求成功
        msg: 'GET 请求成功', //发送连接信息
        data: query, //响应客户端需要的数据
    })
})

// 编写post接口
router.post('/post', (req, res) => {
    let body = req.body;
    res.send({
        status:200, //请求状态
        msg:'POST 请求成功', //请求信息
        data: body, //响应客户端发送所需数据
    });
})

export default router;