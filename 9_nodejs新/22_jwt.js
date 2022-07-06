import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import express from 'express'

const app = express();

// 解析urlencoded文件
app.use(express.urlencoded({ extended: false }));

const secretKey = 'heihei';


// expressJwt({ secret: ,algorithms:})是secret是解析token语句的密钥，algorithms是解析的算法
// unless可以指定路径不需要访问权限
app.use(expressJwt({ secret: secretKey, algorithms:['HS256'] }).unless({ path:[/^\/api\//]}));
// app.use(expressJwt({ secret: secretKey, algorithms:['HS256'] }))

app.get('/gett', (req, res) => {
    let username = req.body.username;
    // 通过jwt.sign()来生成token。token的生成和解析都需要使用密钥
    // 第一个参数为用户信息
    // 第二个参数为密钥
    // 第三个参数为配置信息，expiresIn为有效时间，单位为s，m，h
    let token = jwt.sign({ username }, secretKey, { expiresIn: '1m' });

    res.send({
        status: 1,
        msg: '成功',
        token
    });
})

app.get('/username', (req, res) => {
    let username = req.user;
    res.send({
        username
    })
})

// 因为会有token失效的问题导致程序崩溃，所以需要添加错误级别的中间件，来收取错误
app.use(function(err, req, res, next){ 
    if(err.name === 'UnauthorizedError'){
        res.send({
            msg:'token失效'
        })
    }
    else{
        res.send({
            msg:'其他错误'
        })
    }
})


app.listen(80, () => {
    console.log('server is running ');
})