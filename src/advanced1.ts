// 高级类型
// 交叉类型
// 所谓交叉类型就是将多个类型合并为一个类型，新的类型具有所有类型的特性，所以交叉类型特别适合对象混入的场景
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}
// 需要注意的是交叉类型看名称给人的感觉是几个类型的交集，实际上是取所有类型的并集。

// 联合类型 
// 所谓联合类型就是指声明的类型并不确定，可以为多个类型中的一个。
let ameType: number | string = '1' // 可以等于数字也可以等于字符串

// 字面量类型
// 有的时候我们不仅需要限定一个变量的类型，而且要限定变量的取值在某一个特定的范围内
let b: 'a' | 'b' | 'c'

// 对象联合类型
class DogImpl implements DogInterface {
    run() {}
    eat() {}
}
class CatImpl implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogImpl() : new CatImpl()
    pet.eat() // 如果一个对象是联合类型，那么在类型未确定的情况下，它就只能访问所有类型的共有成员
    pet.run()
    return pet
}
// 这个时候有趣的事情发生了，从名称上看联合类型给人感觉是取所有类型的并集，而实际情况只能访问所有成员的交集

// 可区分的联合类型
// 本质上是结合了联合类型和字面量类型的一种类型保护方法。它的核心思想是一个类型如果是多个类型的联合类型并且每个类型之间
// 有一个公共的属性，我们就可以凭借这个公共属性创建不同的类型保护区块。
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch(s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
        case "circle":
            return Math.PI * s.r ** 2
        default: 
            return ((e: never) => {throw new Error(e)})(s) // 检测s是不是never类型，如果s是never类型，就说明上面的分支都被覆盖了，这个分支永远不会执行，那么如果s不是never类型，就说明以前的分支有遗漏
    }
}
// 上面的代码如果不去升级是不会有问题的，但如果我们想加一种新的模式，它就会有问题了