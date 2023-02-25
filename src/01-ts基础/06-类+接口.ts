interface IFunc {
    getName:()=>string
}

class A implements IFunc{
    a1(){}
    a2(){}
    getName() {
        return "A"
    }
}
class B implements IFunc{
    b1(){}
    b2(){}
    getName(){
        return "B"
    }
}

function init(obj:IFunc){
    console.log(obj.getName())
}

let objA = new A()
let objB = new B()
init(objA)
init(objB)

export default {}