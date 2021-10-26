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
    return pet
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle
function area(s: Shape) {
    switch(s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
    }
}