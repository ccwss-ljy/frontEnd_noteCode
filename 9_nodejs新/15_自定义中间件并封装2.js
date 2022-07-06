import express from 'express'

import cbp from './15_自定义中间件并封装1.js'


const app = express();

app.use(cbp);

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(80, ()=>{
    console.log('server is running');
});