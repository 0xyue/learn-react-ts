interface IObj {
    name:string,
    age:number,

    location?:string,       // ？ 可选属性
    [propName:string]:any   // 不关心或者用不到的属性
}

const obj1:IObj = {
    name:"0xyue",
    age:28,
    location:"china",
    favor:"web3"
}

console.log(obj1.name,obj1.favor)


export default {}