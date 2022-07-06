import mysql from 'mysql'

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'l19980119!',
    database:'my_db_01'
});

db.query('select * from users',(err, res) => {
    console.log(res);
})

// 更新sql(方法1)
// let sqlStr = 'update users set username=?,password=? where id=?'
// let user={ username:'xiaokeai', password:'1292993', id:1}
// db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
//     if(err) return err.message
//     if(res.affectedRows === 1) console.log('更新成功');
// })

// 更新sql(方法2)
// let sqlStr = 'update users set ? where id=?'
// let user = {username:'heiheihei', password:'999', id:2}
// db.query(sqlStr, [user,user.id], (err, res) => {
//     if(err) return err.message;
//     if(res.affectedRows === 1) console.log("更新成功");
// })

// 删除sql
let sqlStr = 'delete from users where id=?'
db.query(sqlStr, 3, (err, res) => {
    if(res.affectedRows === 1) console.log('删除成功');
})

/* 
    注意：项目一般不用delete删除，因为会直接把数据库里的内容删除掉，有一定隐患。
    一般做法：添加一个属性，比如status，当为0表示存在，1表示不存在。之后的删除操作只是利用更新操作将status的值改一下

*/