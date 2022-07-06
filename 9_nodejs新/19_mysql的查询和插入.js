import mysql from 'mysql';

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'l19980119!',
    database:'my_db_01'
});



// sql插入语句（方法1）
// let sqlStr = 'insert into users (username, password) values (?, ?)'
// let user = { username: 'spider', password:'2303'}
// db.query(sqlStr, [user.username, user.password], (err, res) => {
//     if (err) return err.message
//     if(res.affectedRows === 1) console.log('添加成功'); 
// })

// sql插入语句（方法2）
let sqlStr = 'insert into users set ?'
let user = { username: 'spider2', password:'23123'};
db.query(sqlStr, user, (err, res) => {
    if(err) return err.message;
    if(res.affectedRows === 1) console.log("添加成功");
})

// sql查询语句
db.query('select * from users', (err, res) => {
    if(err){
        return err.message
    }
    console.log(res);
});