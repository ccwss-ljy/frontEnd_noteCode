// 导入express模块
import express from "express"

// 导入自定义路由模块
import router from "./09_express的路由1.js"


// 创建express实例
const app = express()

// 注册路由
// app.use(router)

// 添加路由前缀和托管静态资源一样
app.use('/nwu', router)

// 启动服务器
app.listen(80, ()=>{
    console.log('server is running');
})
