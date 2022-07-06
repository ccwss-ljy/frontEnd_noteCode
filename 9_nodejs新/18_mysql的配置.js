// 导入MySQL模块
import mysql from 'mysql';

// 建立与MySQL数据库的连接
const db = mysql.createPool({
    host:'127.0.0.1', //数据库的ip地址
    user: 'root', //数据库的用户名
    password:'l19980119!', //数据库的密码
    database:'my_db_01' //制定操作的数据库
});

// 检测mysql模块是否能正常工作
// query()函数，指定要执行的sql语句，通过回调函数拿到执行的结果
db.query('select 1', (err, res) => {
    if(err)
        return console.log(err.message);
    console.log(res);
})