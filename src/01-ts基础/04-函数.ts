
function test1(a:string,b:string,c?:number):string{
    const res = a.substring(0,1)+b.substring(0,1)
    console.log("test1-res:",res)
    return res
}

const c:string = test1("aaa","bbb")

console.log("c:",c)

// 通过接口定义

interface IFunc{
    (a:string,b:string,c?:number):string
}

const test2:IFunc = function test1(a:string,b:string,c?:number):string{
    const res = a.substring(0,1)+b.substring(0,1)
    console.log("test2-res:",res)
    return res
}
test1("1","2",3)
test2("1","2",3)


interface IObj {
    name:string,
    age:number,
    getName:(name:string)=>string
}

const myObj:IObj = {
    name:"0xyue",
    age:28,
    getName:(name:string)=> {
       return name
    }
}

console.log("myObj.getName:",myObj.getName("0xyue"))


export default {}