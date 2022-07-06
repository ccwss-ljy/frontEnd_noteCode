/* 
1.应用级别的中间件
    绑定在app上的中间件

2.路由级别的中间件
    绑定在router上的中间件

3.错误级别的中间件
    捕获整个项目的异常，防止程序崩溃
    必须放在所有路由之后

4.Express内置的中间件
    express.static() 托管静态资源
    express.json() 解析json格式的请求体数据
    express.urlencoded() 解析url-encoded格式的请求体数据

5.第三方中间件
    先下载下来
    然后导入
    最后使用app.use使用
 */