
import express from 'express'
import session from 'express-session'

import cors from 'cors'


const app = express();

// 解决跨域
app.use(cors());


app.use(express.urlencoded({ extended:false }))

app.use(express.json());


// 配置session中间件
app.use(session({
    secret:'heihei', //加密语句，可以自定义字符串
    resave: false, //固定语句
    saveUninitialized:true //固定语句
}))


// 托管静态页面
app.use(express.static('./pages'))

// 登录获取信息
app.post('/api/login',(req, res) => {
    // 判断用户提交信息是否正确
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        res.send({
            status:1,
            msg:'登录失败'
        })
    }
    else{
        // 只有设置了session中间件以后，才有req.session，req.session.user和req.session.isLogin是req.session的自定义属性
        req.session.user = req.body;
        req.session.isLogin = 1;
        res.send({
            status:0,
            msg:'登录成功'
        })
    }
})

// 发送信息
app.get('/api/username', (req, res) => {
    if(req.session.isLogin){
        res.send({
            status:0,
            msg:'success',
            username:req.session.user.username
        })
    }
    else{
        res.send({
            status:1,
            msg:'您还未登录'
        })
    }
})

// 退出登录
app.get('/api/logout', (req, res) => {
    // 清空对应客户端的信息，不会清空所有客户端信息
    req.session.destroy();
    res.send({
        status:0,
        msg:'退出成功'
    })
})

app.listen(80, ()=>{
    console.log('server is running');
})




