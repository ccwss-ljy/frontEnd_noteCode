const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    
    console.log(req.url);
    res.write("this is nodeJs haha");

    if(req.url != "/favicon.ico"){
        let value = url.parse(req.url,true).query;
        console.log(value.name);
        console.log(value.age);
    }
    res.end();
}).listen(8000)