import querystring from 'querystring'

const customBodyParser = (req, res, next) => {
    let str = '';
    // 接收req过来的拆分data数据
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        req.body = querystring.parse(str)
        next();
    })
}

export default customBodyParser;