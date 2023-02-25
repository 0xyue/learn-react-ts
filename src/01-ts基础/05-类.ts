

class Bus {
    public name = "0xyue"   // 公有属性
    protected age = 28      // 受保护属性，只能在本类和子类中访问到
    private _list:any =[]   // 私有属性

    subscribe(callback:any){
        this._list.push(callback)
    }
    dispatch(){
        this._list.forEach((callback:any)=>{
            callback && callback()
        })
    }
}

let obj = new Bus()
console.log(obj.name)
// console.log(obj.age)     // 无法访问到受保护属性
// console.log(obj._list)   // 无法访问到私有属性

class Child extends Bus{
    aaa(){
        console.log("Child",this.name,this.age)
        // console.log(this._list)  // 无法访问到私有属性

    }
}

let child = new Child()
child.aaa()

export default {}