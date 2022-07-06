// 1.引入express
const express = require("express");
// 2.创建应用对象
const app = express();
// 3.创建路由结果
// request是对请求报文的封装
// response是对响应报文的封装
app.get("/json-server", (request, response) => {
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    const haha = {
        name:"haha",
        age:18
    };
    let str = JSON.stringify(haha);
    // 设置响应体
    response.send(str);
});
app.get("/delay", (request, response) =>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    setTimeout(function(){
        response.send("hahaha");
    }, 3000);
    
});
app.get("/IE", (request, response) =>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    setTimeout(function(){
        response.send("hello");
    }, 3000);
    
});
app.post("/json-server",(request, response)=>{
    // 建立响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    const haha = {
        name:haha,
        age:18
    };
    let str = JSON.stringify(haha);
    // 发送响应
    response.send(str);
})

app.all("/jQuery-server", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    let data = {
        name: "xiaomei",
        age: 18
    };
    response.send(JSON.stringify(data));
});

app.all("/axios-server", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    let data = {
        name: "xiaomei",
        age: 18
    };
    response.send(JSON.stringify(data));
});
// 4.监听端口启动服务
app.listen(8000, function(){
    console.log("8000端口已经开始监听中");
});