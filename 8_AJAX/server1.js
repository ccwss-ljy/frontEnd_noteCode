let express = require("express");
let app = express();
app.get("/test-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.send("Hello World");
})
app.listen(8000, ()=>{
    console.log("8000端口已启动");
})