// 很多时候我们希望一个函数或者一个类可以支持多种数据类型，有很大的灵活性
function print(value: string): string {
    console.log(value)
    return value
}
// 函数重载
function print(value: string): string
function print(value: string[]): string[]
function print(value:any) {
    console.log(value)
    return value   
}
// 联合类型
function print(value: string | string[]): string | string[] {
    console.log(value)
    return value
}
// any类型
function print(value: any) {
    console.log(value)
    return value
}
// any类型会产生另外一些问题，any类型会丢失一些信息，也就是类型之间的约束关系

// 泛型概念
// 不预先确定的数据类型，具体的类型在使用的时候才能确定
function log<T>(value: T): T {
    console.log(value)
    return value
}
log<string[]>(['a', 'b'])
log(['a', 'b'])
// 我们不仅可以用泛型来定义一个函数，也可以定义一个函数类型
type Log = <T>(value: T) => T
const myLog: Log = log

// 泛型接口
interface Log1 {
    <T>(value: T): T
}
// 这个和类型别名的定义方式是等价的，但目前这个泛型仅约束了一个函数，也可以用泛型来约束其他成员
interface Log2<T> {
    (value: T): T
}
// 这样接口的所有成员都受到了泛型的约束
// 这里需要注意的是当泛型约束了整个接口之后，在实现的时候，我们必须指定一个类型
let myLog1: Log2<number> = log
myLog1(1)
// 如果不指定类型也可以在接口的定义中指定一个默认类型
interface Log3<T = string> {
    (value: T): T
}
let myLog2: Log3 = log
myLog2('s')

// 泛型小结
// 把泛型变量和函数的参数等同对待，泛型只不过是另一个维度的参数，是代表类型而不是代表值的参数

// 泛型类与泛型约束

// 泛型类
// 与泛型接口非常类似，泛型也可以约束类的成员，需要注意的是泛型不能应用于类的静态成员
class Ame<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
const ame = new Ame<number>()
ame.run(1)
// 当不指定类型参数的时候，value值就可以是任意的值
const ame1 = new Ame()
ame1.run({a: 1})
ame1.run('ss')

// 类型约束
interface Length {
    length: number
}
function print<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}
// 参数需要具有length属性
print([1])
print('ss')
print({length: 1})

// 泛型的好处
// 1.函数和类可以轻松地支持多种类型，增强程序的拓展性
// 2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3.灵活控制类型之间的约束
