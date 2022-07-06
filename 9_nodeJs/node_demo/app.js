function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("张三");
        }, 1000);
    });
}

async function main(){
    let val = await test();
    console.log(val);
}

main();