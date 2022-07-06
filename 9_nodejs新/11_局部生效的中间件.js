import express from 'express'

const app = express()

// 创建局部中间件
const mw1 = (req, res, next) => {
    req.startTimeYear = new Date().getFullYear();
    next()
}

const mw2 = (req, res, next) => {
    req.startTimeMonth = new Date().getMonth() + 1;
    next();
}

// 路由第二个参数，对应局部中间件
app.get('/', mw1, (req, res, next) => {
    res.send(`start Time ${req.startTimeYear}-${req.startTimeMonth}`)
})

app.get('/user', mw2, (req, res, next) => {
    res.send(`start Time ${req.startTimeYear}-${req.startTimeMonth}`)
})

// 对应多个中间件
app.get('/', [mw1, mw2], (req, res, next) => {
    res.send(`start Time ${req.startTimeYear}-${req.startTimeMonth}`)
})

app.listen(80, () => {
    console.log('server is running');
})