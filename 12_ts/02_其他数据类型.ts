// 可以通过|来定义多个数据类型
let s: number | string;
s = 123;
s = 'hello';

// 可以通过any来定义任意数据类型
let aa: any;
aa = 2;
aa = 'hello';
aa = true;

// 可以通过unknown来定义任意数据类型
let bb: unknown;
bb = 2;
bb = "hello";
bb = true;

// unknown与any的区别是unknown是更安全的any。它不可以赋值给定义好数据类型的数据
s = aa;
// s = bb;报错


// 断言，可以强制决定数据类型
s = bb as string;//不报错
s = <string>bb;//不报错

// 当返回为空时，使用void数据类型
function fn():void{

}

// 当什么都不返回时，使用never，比如程序出错
function fn2(): never{
    throw console.error("haha");
    
}