

let list1:string[] = ["1","2","3"]
list1.push("4")

let list2:number[] = [1,2,3]
list2.push(4)

let list3:(number| string)[] = ["1","2",3]
list3.push(4)
list3.push("5")

let list4:any[] = ["1","2",3]
list4.push(4)
list4.push("5")
list4.push(true)

// 泛型写法
let list5:Array<string> = ["1","2","3"]
list5.push("4")

let list6:Array<number> = [1,2,3]
list6.push(4)

let list7:Array<number|string> = ["1","2",3]
list7.push(4)
list7.push("5")

let list8:Array<any> = ["1","2",3]
list8.push(4)
list8.push("5")
list8.push(true)


export default {}