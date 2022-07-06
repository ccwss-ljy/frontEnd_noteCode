import express from 'express';

import router from './16_用express编写接口1.js'

const app = express();

app.use(express.urlencoded({ extended:false }));

// 路由中间件
app.use('/api', router);

app.listen(80, () => {
    console.log("server is running");    
});



