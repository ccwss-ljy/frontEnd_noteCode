const fs = require("fs");

const path = require("path");

// const regStyle = /<style>[\s\S]*<\/style>/g
const regStyle = /<style>[\s\S]*<\/style>/g
const regScript = /<script>[\s\S]*<\/script>/g

function resolveCss(htmlStr){
    cssStr = htmlStr.match(regStyle)[0]
    cssStr = cssStr.replace(/<style>|<\/style>/g, '')
    fs.writeFile(path.join(__dirname, './clock/clock.css'), cssStr, (err) => {
        if(err){
            return console.log(err.message);
        }
    })
}

function resolveScript(htmlStr){
    scriptStr = htmlStr.match(regScript)[0]
    scriptStr = scriptStr.replace(/<script>|<\/script>/g, "")
    fs.writeFile(path.join(__dirname, './clock/clock.js'), scriptStr, (err) => {
        if(err){
            return console.log(err.message);
        }
    })
    // console.log(scriptStr)
}

function resolveHtml(htmlStr){
    htmlStr = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./clock.css">')
    htmlStr = htmlStr.replace(regScript, '<script src="./clock.js"></script>')
    console.log(htmlStr)
    // writeFile新内容会覆盖掉旧内容
    fs.writeFile(path.join(__dirname, './clock/clock.html'), htmlStr, (err)=>{
        if(err){
            return console.log(err.message);
        }
    })
}

fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, dataStr) => {
    if(err){
        return console.log(err.message);
    }
    resolveCss(dataStr)
    resolveScript(dataStr)
    resolveHtml(dataStr)
});





