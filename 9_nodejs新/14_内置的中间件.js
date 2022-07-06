import express from 'express'

const app = express();

// 可以解析json格式的请求体数据
app.use(express.json());

// 可以解析url-encoded的请求体数据
app.use(express.urlencoded({ extended:false }))

app.get('/', (req, res) => {
    // req.body可以接收请求体数据
    // req.body在不添加内置中间件的时候，默认接收到的请求体数据为undefined
    res.send(req.body)
})

app.listen(80, () => {
    console.log('server is running');
})