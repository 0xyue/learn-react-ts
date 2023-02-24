
// 字符串,数字,布尔
const myString1 = "0xyue";
const myStringSub = myString1.substring(0,1);
const myString2:string = "xiaoming";
console.log(myString1,myStringSub,myString2)

const myAge: number = 100;
myAge.toFixed(1)

const myBool:boolean = true
console.log(myBool)

// 可以设置为不同类型
let myStringOrNum:string | number = "0xyue"
console.log(myStringOrNum)

let myAny:any = 100
console.log(myAny)



// eslint-disable-next-line import/no-anonymous-default-export
export default {}