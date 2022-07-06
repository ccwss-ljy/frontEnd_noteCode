// 调入mongoose包
let mongoose = require("mongoose");

// 连接mongoose
mongoose.connect("mongodb://127.0.0.1/mongo_test",{ useNewUrlParser: true });


mongoose.connection.once("open", function(){
    console.log("连接成功");
});

mongoose.connection.once("close", function(){
    console.log("连接断开");
});

// 断开数据库
// mongoose.disconnect();

// 创建数据库
let Schema = mongoose.Schema;

// 限制条件
let stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
})

// 创建集合
let StuModel = mongoose.model("students", stuSchema);

// 创建文档
StuModel.create({
    name: "zbj",
    age: 18,
    gender: "male",
    address: "huaguoshan"
},function(err){
    if(!err){
        console.log('插入成功');
    }
});
