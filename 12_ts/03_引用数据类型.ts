// 对象的定义方式
let obj : {name: string, age?:number, [propertyName:string]:any};
// obj中必须有name属性，age属性可有可无。剩下其他属性也是可有可无
obj = {name:'haha', age:12};

// 数组的两种定义方式
/* 
    Array<类型>；
    类型[];
*/
// let arr: Array<number>;
let arr: number[];

// 元组，固定的数组
let tuple: [number, string];
tuple = [1, 'hello'];

// enum枚举
enum Gender{
    Male = 0,
    Female = 1
}

let obj1: {name:string, gender:Gender};

obj1 = {
    name:'haha',
    gender:Gender.Male
}

// 类型的别名
let k : 1|2|3|4|5;
let j : 1|2|3|4|5;
// 自己定义一个类型
type myType = 1|2|3|4|5;
let q : myType;