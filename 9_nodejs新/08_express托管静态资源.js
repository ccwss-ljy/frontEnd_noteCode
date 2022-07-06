import express from 'express'

const app = express();

// express.stastic('文件夹路径')可以对客户端分享文件夹中的文件,意思为比如可以直接127.0.0.1/index.html来访问index.html这个文件
// express.static可以托管多个静态资源
// app.use('/路径', express.static()),如果是这种格式的话，需要在url路径前挂载路径前缀

app.use('/', express.static('./clock'))
// app.use(express.static('./clock'))

app.listen(80, () => {
    console.log('server is running')
})