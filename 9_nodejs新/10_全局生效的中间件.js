import express from 'express'

const app = express();

// 最简单的中间件就是,函数最后一个参数为next,然后自动流到下一个中间件或路由
// let ex = function(req, res, next){
//     next();
// }

// 全局生效的中间件,就是将中间件放在app.use()里
// 可以定义多个中间件

app.use(function(req, res, next){
    req.startTimeYear = new Date().getFullYear();
    next()
})

app.use(function(req, res, next){
    req.startTimeMonth = new Date().getMonth() + 1;
    next()
})

app.get('/user', function(req, res, next){
    res.send(`开始的时间${req.startTimeYear}-${req.startTimeMonth}`)
})



app.listen(80, () => {
    console.log('server is running ');
})