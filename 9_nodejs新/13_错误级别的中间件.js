import express from 'express'

const app = express();


// 如果不加错误级别的中间件的话，直接会报错，后面的内容也就不执行了
app.get('/', (req, res) => {
    throw new Error("edge is error");
    
    res.send('ok');
})

// 加了中间件，就会捕获整个程序中的错误，然后执行中间件里的内容
app.use(function(err, req, res, next){
    res.send('出错了' + err.message);
})


app.listen(80, () => {
    console.log('server is running');
})